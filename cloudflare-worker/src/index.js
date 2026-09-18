/**
 * Cloudflare Worker para o sistema de votação popular
 * Projeto: Em Pratos Limpos (Campo Largo - PR)
 * 
 * Endpoints:
 * - POST /api/verificar - Verifica IP, geolocalização, captcha
 * - POST /api/verificar-modo-teste - Valida cookie de modo teste sem expor o segredo no front
 * - GET /api/projetos - Retorna projetos da última sessão (sem vereador)
 * - POST /api/votar - Registra votos
 * - GET /api/resultados - Retorna resultados (cache 10min)
 */

function origemPermitida(env) {
  return (env && env.ALLOWED_ORIGIN) || '*';
}

function checarOrigem(request, env, origem) {
  var origin = request.headers.get('Origin') || '';
  var permitidas = (origemPermitida(env) || '').split(',').map(function(s) { return s.trim(); });
  if (permitidas.indexOf('*') !== -1) return '*';
  if (permitidas.indexOf(origin) !== -1) return origin;
  return permitidas[0] || '*';
}

// Função para criar resposta JSON com CORS
function jsonResponse(data, status, env, origem) {
  status = status || 200;
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origem || '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function ipDoPedido(request) {
  const direto = request.headers.get('CF-Connecting-IP');
  if (direto) return direto.trim();
  const encaminhado = request.headers.get('X-Forwarded-For') || '';
  const primeiro = encaminhado.split(',')[0].trim();
  return primeiro || '';
}

// Função para hash SHA-256 do IP
async function hashIP(ip) {
  const valor = (ip || '').trim();
  if (!valor) {
    throw new Error('IP ausente para hash');
  }
  const encoder = new TextEncoder();
  const data = encoder.encode(valor);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Função para verificar Turnstile
async function verifyTurnstile(token, secretKey, ip) {
  if (!token || !secretKey) {
    return false;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
        remoteip: ip || undefined,
      }),
    });

    const result = await response.json();
    return !!(result && result.success);
  } catch (error) {
    console.error('Turnstile:', error);
    return false;
  }
}

async function getProjetos(db) {
  const result = await db.prepare(`
    SELECT 
      p.projeto_id,
      p.titulo,
      p.ementa,
      p.tipo,
      p.resultado,
      p.sessao_id,
      p.total_util,
      p.total_inutil,
      (p.total_util + p.total_inutil) as total_votos
    FROM projetos_votacao p
    ORDER BY p.projeto_id
  `).all();

  return result.results || [];
}

// Função para verificar se já votou
async function checkVotou(db, ipHash, sessaoId) {
  if (!ipHash || sessaoId == null) {
    return false;
  }
  const result = await db.prepare(`
    SELECT COUNT(*) as count 
    FROM votantes 
    WHERE ip_hash = ? AND sessao_id = ?
  `).bind(ipHash, sessaoId).first();

  return !!(result && result.count > 0);
}

async function registrarVotos(db, ipHash, votos, sessaoId, geolocation) {
  const jaVotou = await checkVotou(db, ipHash, sessaoId);
  if (jaVotou) {
    return { success: false, error: 'Você já votou nesta sessão' };
  }

  const statements = [];
  for (const voto of votos) {
    if (!voto.projeto_id || typeof voto.voto !== 'string') {
      continue;
    }
    statements.push(
      db.prepare('INSERT INTO votos (projeto_id, sessao_id, ip_hash, voto, geolocalizacao) VALUES (?, ?, ?, ?, ?)')
        .bind(voto.projeto_id, sessaoId, ipHash, voto.voto, geolocation)
    );
    if (voto.voto === 'util') {
      statements.push(
        db.prepare('UPDATE projetos_votacao SET total_util = total_util + 1 WHERE projeto_id = ?')
          .bind(voto.projeto_id)
      );
    } else {
      statements.push(
        db.prepare('UPDATE projetos_votacao SET total_inutil = total_inutil + 1 WHERE projeto_id = ?')
          .bind(voto.projeto_id)
      );
    }
  }
  statements.push(
    db.prepare('INSERT INTO votantes (ip_hash, sessao_id) VALUES (?, ?)')
      .bind(ipHash, sessaoId)
  );

  await db.batch(statements);
  return { success: true };
}

// Função para obter resultados
async function getResultados(db) {
  const projetos = await getProjetos(db);
  
  // Calcular percentuais
  const resultados = projetos.map(p => ({
    ...p,
    percentual_util: p.total_votos > 0 ? Math.round((p.total_util / p.total_votos) * 100) : 0,
    percentual_inutil: p.total_votos > 0 ? Math.round((p.total_inutil / p.total_votos) * 100) : 0,
  }));

  return resultados;
}

// Handler principal
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    var origem = checarOrigem(request, env, origem);

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': origem,
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    try {
      // POST /api/verificar
      if (path === '/api/verificar' && request.method === 'POST') {
        let body = {};
        try {
          body = await request.json();
        } catch (e) {
          return jsonResponse({ success: false, error: 'Pedido inválido' }, 400, env, origem);
        }
        const token = body && body.token;

        const ip = ipDoPedido(request);

        // Verificar Turnstile
        const turnstileValid = await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, ip);
        if (!turnstileValid) {
          return jsonResponse({ success: false, error: 'Captcha inválido' }, 400, env, origem);
        }

        if (!ip) {
          return jsonResponse({ success: false, error: 'Não foi possível identificar o endereço de acesso' }, 400, env, origem);
        }

        const ipHash = await hashIP(ip);

        // Verificar geolocalização
        const geo = request.cf;
        const isCampoLargo = geo && geo.city === 'Campo Largo';

        // Verificar se já votou (buscar sessão mais recente)
        const sessao = await env.DB.prepare(`
          SELECT MAX(sessao_id) as sessao_id FROM projetos_votacao
        `).first();

        const jaVotou = sessao ? await checkVotou(env.DB, ipHash, sessao.sessao_id) : false;

        return jsonResponse({
          success: true,
          verificado: true,
          ip_hash: ipHash,
          geolocalizacao: isCampoLargo ? 'Campo Largo' : ((geo && geo.city) || 'Desconhecida'),
          ja_votou: jaVotou,
          sessao_id: sessao && sessao.sessao_id,
        }, 200, env, origem);
      }

      // POST ou GET /api/verificar-modo-teste
      if (path === '/api/verificar-modo-teste' && (request.method === 'POST' || request.method === 'GET')) {
        const secret = env.MODO_TESTE_SECRETO || '';
        let valor = '';
        const cookieHeader = request.headers.get('Cookie') || '';
        const match = cookieHeader.match(/(?:^|;\s*)epl-modo-teste=([^;]+)/);
        if (match) {
          valor = match[1].trim();
        }
        if (request.method === 'POST') {
          try {
            const body = await request.json();
            if (body && typeof body.cookie === 'string' && body.cookie) {
              valor = body.cookie.trim();
            }
          } catch (e) {
            // corpo vazio ou inválido: segue com o cookie do cabeçalho, se houver
          }
        }
        const modoTeste = !!(secret && valor && valor === secret);
        return jsonResponse({ modo_teste: modoTeste }, 200, env, origem);
      }

      // GET /api/projetos
      if (path === '/api/projetos' && request.method === 'GET') {
        const projetos = await getProjetos(env.DB);
        
        // Remover informações do vereador para não influenciar votação
        const projetosSemVereador = projetos.map(p => ({
          projeto_id: p.projeto_id,
          titulo: p.titulo,
          ementa: p.ementa,
          tipo: p.tipo,
          resultado: p.resultado,
          sessao_id: p.sessao_id,
        }));

        return jsonResponse({ success: true, projetos: projetosSemVereador }, 200, env, origem);
      }

      // POST /api/votar
      if (path === '/api/votar' && request.method === 'POST') {
        let body = {};
        try {
          body = await request.json();
        } catch (e) {
          return jsonResponse({ success: false, error: 'Pedido inválido' }, 400, env, origem);
        }
        const { ip_hash, votos } = body;

        if (!Array.isArray(votos) || votos.length === 0) {
          return jsonResponse({ success: false, error: 'Votos inválidos' }, 400, env, origem);
        }

        const sessao = await env.DB.prepare('SELECT MAX(sessao_id) as sessao_id FROM projetos_votacao').first();
        const sessaoId = sessao && sessao.sessao_id;

        // Verificar IP
        const ip = ipDoPedido(request);
        if (!ip) {
          return jsonResponse({ success: false, error: 'Não foi possível identificar o endereço de acesso' }, 400, env, origem);
        }
        const ipHashAtual = await hashIP(ip);
        if (ipHashAtual !== ip_hash) {
          return jsonResponse({ success: false, error: 'IP não corresponde' }, 400, env, origem);
        }

        // Registrar votos
        const geo = request.cf;
        const geolocation = geo ? `${geo.city}, ${geo.region}` : 'Desconhecida';
        const resultado = await registrarVotos(env.DB, ip_hash, votos, sessaoId, geolocation);

        if (!resultado.success) {
          return jsonResponse({ success: false, error: resultado.error }, 400, env, origem);
        }

        return jsonResponse({ success: true, message: 'Votos registrados com sucesso' }, 200, env, origem);
      }

      // GET /api/resultados
      if (path === '/api/resultados' && request.method === 'GET') {
        const resultados = await getResultados(env.DB);
        return jsonResponse({ success: true, resultados }, 200, env, origem);
      }

      // Rota não encontrada
      return jsonResponse({ error: 'Rota não encontrada' }, 404, env, origem);

    } catch (error) {
      console.error('Worker:', error);
      return jsonResponse({
        error: 'Erro interno do servidor',
      }, 500, env, origem);
    }
  },
};

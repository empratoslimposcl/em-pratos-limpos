# Relatório da coleta de voto e presença — 2026

**Coleta realizada em:** 2026-09-15
**Worker:** Cursor com Grok 4.6
**Script:** `coletor/baixar_voto_presenca_ordinarias_2026.py`

---

## O que foi coletado

Voto individual, presença, justificativa de ausência, mesa da sessão e
ordem do dia de todas as sessões ordinárias de 2026 disponíveis no SAPL
até a data da coleta.

**Sessões que já existiam antes desta coleta** (coletadas em datas
anteriores, não retocadas):

769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 786

**Sessões baixadas nesta coleta:**

782, 783, 784, 785, 787, 788, 790, 791, 792, 793, 794, 795

**Total de sessões ordinárias cobertas (2026):** 26 sessões
(769 a 795, sem lacunas exceto ausência do número 789, que não consta
no SAPL — provavelmente não houve sessão nessa data ou foi cancelada).

**Sessão extraordinária 768** (já existia, coletada anteriormente como
prova auxiliar de ausência justificada — não é ordinária).

---

## Arquivos gerados por sessão

Cada sessão tem 8 arquivos em `dados/brutos/`:

| Arquivo | Conteúdo |
|---|---|
| `sessao_NNN_votoparlamentar.json` | Voto individual de cada vereador em cada votação |
| `sessao_NNN_registrovotacao.json` | Registro de cada votação (placar, resultado) |
| `sessao_NNN_ordemdia.json` | Ordem do dia (matérias pautadas) |
| `sessao_NNN_sessaoplenariapresenca.json` | Lista de presença da sessão |
| `sessao_NNN_parlamentares.json` | Parlamentares da legislatura |
| `sessao_NNN_integrantemesa.json` | Composição da mesa diretora |
| `sessao_NNN_presencaordemdia.json` | Presença por item da ordem do dia |
| `sessao_NNN_justificativaausencia.json` | Justificativas de ausência registradas |

---

## Volume de pedidos

Aproximadamente **3.170 pedidos ao SAPL** no total (coleta principal +
reprocessamento da sessão 788), seguindo a pausa de cortesia entre
pedidos definida no script. Zero bloqueios ou recusas do servidor.

---

## Erros e como foram resolvidos

**Um único erro real registrado:**

- **Sessão 788, votação 23792:** retornou HTTP 404 na primeira tentativa.
  Esse registro simplesmente não existe no servidor — não é falha de rede
  nem de script. O SAPL às vezes tem lacunas em registros de votação.
- **Resolução:** o Cursor detectou o arquivo incompleto, reprocessou a
  sessão 788 inteira e obteve 885 registros de voto. A votação 23792 não
  aparece em nenhum resultado (confirmado pelo SAPL), o que é o
  comportamento esperado para um 404. O arquivo final está completo com o
  que o servidor entregou.

**Problemas técnicos resolvidos durante a coleta (não são erros de dado):**

- Bloqueio de arquivo no Windows ao gravar o log de pedidos: corrigido
  no script com retry e arquivo temporário atômico.

---

## Verificação

- `dados/brutos/sessao_788_votoparlamentar.json`: **885 registros**,
  arquivo íntegro (verificado em 2026-09-15).
- Todos os 26 × 8 = 208 arquivos de sessão existem no disco.
- Nenhuma `sessoes_incompletas` registrada no arquivo de progresso final.

---

## Próximos passos

1. Worker de **decisão lógica** (Cursor, GPT-5.6 Sol): agregar voto e
   presença por vereador, usando o método de
   `dados/brutos/PROVA-CRUZAMENTO-VOTO-AUSENCIA.md`.
   Saída em `dados/tratados/`.
2. Worker de **UI** (Cursor, Composer 2.5): seção "Atuação do seu
   vereador" — lista com busca por nome, perfil com voto e presença,
   sem ranking nem nota.
3. Revisão de código (Grok 4.6 ou Aider+DeepSeek, quando instalado).

# Relatório: voto e ausência no SAPL de Campo Largo

Data deste relatório: 14 de setembro de 2026.
Fonte: https://sapl.campolargo.pr.leg.br
Pasta das provas: `dados/brutos/`
Nada deste texto altera os arquivos que já existiam antes da coleta.

## Em uma frase

Dá para separar abstenção (palavra `Abstenção`) e dá para cruzar presença, justificativa e mesa, mas não dá para tratar todo `Não Votou` como “presidente” sem olhar a mesa e o caso a caso.

## Como a coleta foi feita

Pedidos em fila, com pausa de 2 segundos. Pareceria se viesse 429, 500 ou 503 (não veio). O teto combinado era cerca de 200 pedidos; para fechar as três sessões ordinárias e a contagem, a coleta passou desse número (cerca de 190 na primeira leva, 79 na continuação, 40 na sessão 786). Os endereços e horários estão em:

- `log_consultas_evidencia_continuacao.json` (consultas entre 21:22 e 21:25, horário de Brasília)
- `log_consultas_sessao_786.json` (entre 21:27 e 21:28)
- `_coleta_evidencia_parada.json` (trecho final da primeira leva, até 21:18)

Base das consultas: `https://sapl.campolargo.pr.leg.br/api/...`

## 1. Palavras de voto (lista real)

Arquivo: `valores_voto_por_ano.json`  
Consultado em: 2026-09-14T21:16:09-03:00  
Método: pedido à lista de votos individuais com filtro da palavra e, quando coube, do ano do campo `data_hora`.

Também houve páginas de descoberta em 2024, 2025 e 2026 (não só 2010).

### Palavras que existem de verdade

| Palavra na fonte | Total geral | Anos em que o filtro por `data_hora` achou |
| --- | ---: | --- |
| Sim | 202897 | 2018, 2020, 2021, 2022, 2023, 2024, 2025, 2026 |
| Não | 3079 | 2018 a 2026 (sem furo nessa faixa) |
| Abstenção | 7136 | 2018 a 2025 (em 2026 o filtro não achou nenhuma) |
| Não Votou | 6421 | 2018 a 2026 |
| Ausente | 561 | só 2018 |
| -1 | 6548 | só 2018 (no campo `data_hora`) |

### Sobre “Ausente”

Existe. Não era invenção. Só não tinha ficado salvo antes.

Prova: `exemplo_voto_ausente.json`  
Consulta: `https://sapl.campolargo.pr.leg.br/api/sessao/votoparlamentar/?voto=Ausente&data_hora__year=2018&page_size=1`  
Quando: 2026-09-14T21:14:54-03:00  
Nesse exemplo o vereador é Darci Andreassa, voto exatamente `Ausente`.

Nos anos 2024, 2025 e 2026 o filtro não achou `Ausente`. Ou seja: palavra antiga, não uso recente.

### Aviso sobre a chave “(vazio)”

Arquivo: `nota_filtro_voto_vazio.json`

Se alguém pede a lista com `voto=` sem texto, a porta devolve o total de todos os votos. Isso não é uma palavra de voto vazia. Pode ignorar a chave `(vazio)` em `valores_voto_por_ano.json`.

### Aviso sobre o ano em `data_hora`

Muitos votos antigos têm `data_hora` em 12 de junho de 2018. Isso parece data de carga no sistema, não data da sessão. Por isso o “ano” do filtro ajuda a ver uso recente, mas não substitui a data da sessão ligada ao voto.

## 2. O valor `-1`

Arquivo: `investigacao_menos_um.json`  
Consultado em: 2026-09-14T21:16:09-03:00

### Quando deixa de aparecer no campo `data_hora`

Pelo filtro `data_hora__year`, `-1` só aparece em 2018 (6548 registros). De 2019 em diante, nesse campo, a contagem foi zero. No mesmo período recente a palavra `Não Votou` passa a ser comum.

Não dá para dizer, só com `data_hora`, em que ano de sessão o `-1` “morreu”, porque a data do campo pode ser de digitação. O que dá para dizer: nos votos cuja `data_hora` é 2019 ou depois, `-1` não apareceu.

### É sempre o presidente?

Nos 3 exemplos abertos e cruzados com a mesa da sessão, o vereador do `-1` era o presidente:

- Sessão 2, ordem do dia em 2010-06-07, parlamentar 22 (Sérgio Schmidt), mesa com presidente 22. Observação do placar: presidente não vota.
- Sessão 87, ordem do dia em 2011-11-07, parlamentar 18 (Josley Andrade), mesa com presidente 18. Observação parecida.

Afirmação possível: nos exemplos checados, `-1` coincidiu com o presidente.  
Afirmação impossível sem varredura completa: “`-1` é sempre o presidente”.

O que faltaria: percorrer todos os 6548 e cruzar cada um com a mesa da mesma sessão.

## 3. Prova da mesa da sessão 794 (Alexandre Guimarães)

Arquivo cru, sem edição: `sessao_794_integrantemesa.json`  
Consulta: `https://sapl.campolargo.pr.leg.br/api/sessao/integrantemesa/?sessao_plenaria=794&page_size=50`  
Quando: 2026-09-14T21:16:30-03:00 (por volta desse horário na primeira leva)

Conteúdo relevante:

- PRESIDENTE: Alexandre Guimarães (código 50)
- 1º vice: Luiz Scervenski (53)
- 2º vice: Rogério da Viação (57)
- 1º secretário: Polaco Preto (56)
- 2º secretário: Rafael Freitas (58)

Sessão: 8 de setembro de 2026 (`/sessao/794`).

## 4. Três sessões ordinárias de 2026 (inteiras) e planilhas

Foram salvas completas estas três ordinárias (tipo 1), em datas diferentes:

### Sessão 771 (19/02/2026) — tem voto “Não”

Arquivos `sessao_771_*` e planilha `sessao_771_votos.csv`  
Endereço da sessão: `https://sapl.campolargo.pr.leg.br/sessao/771`  
Votos individuais nesta sessão (contagem nos arquivos): Sim 29, Não 14, Não Votou 2.  
Justificativa de ausência: nenhuma.

Achado importante: no veto votado nessa sessão, o presidente Alexandre Guimarães (50) aparece com voto `Não`, não com `Não Votou`. Ou seja, presidente às vezes vota de fato.

### Sessão 769 (03/02/2026)

Arquivos `sessao_769_*` e `sessao_769_votos.csv`  
Endereço: `https://sapl.campolargo.pr.leg.br/sessao/769`  
Votos: Sim 141, Não Votou 9.  
Justificativa: nenhuma.

### Sessão 786 (08/06/2026)

Arquivos `sessao_786_*` e `sessao_786_votos.csv`  
Endereço: `https://sapl.campolargo.pr.leg.br/sessao/786`  
Votos: Sim 153, Não Votou 11, Não 1.  
Justificativa: nenhuma.

Achado importante: numa das votações, `Não Votou` aparece para o presidente (50) e também para o vereador 51. Então `Não Votou` não é rótulo exclusivo de presidente.

### Ausência justificada: o que coube no teto de pedidos

As ordinárias de 2026 com justificativa na amostra (776 e 777) tinham dezenas de votações cada uma. Baixar tudo estouraria o limite.

Ficou salvo, como evidência de ausência justificada em 2026:

- Sessão 768 (26/01/2026), extraordinária (tipo 2), completa: `sessao_768_*` e `sessao_768_votos.csv`, com 2 justificativas.
- Prévia da justificativa da ordinária 777: `sessao_777_justificativaausencia_preview.json`
- Ordem do dia da 777 e restos parciais da 776 (`sessao_776_sessaoplenaria.json`, `sessao_776_ordemdia.json`) sem apagar nem sobrescrever.

Não dá para afirmar, com sessão ordinária completa em arquivo, o cruzamento presença × justificativa × voto em 2026. Faltaria baixar por completo uma ordinária com justificativa (776 ou 777), o que pede bem mais do que o teto usado.

Cada pacote completo de sessão traz, cru: sessão, ordem do dia, registros de votação, votos individuais, presença na ordem do dia, presença na sessão, mesa e justificativas. A planilha CSV é só para leitura humana; a fonte continua sendo o JSON.

## 5. Contagem das ordinárias de 2026

Arquivo: `contagem_votacoes_ordinarias_2026.json`  
Consultado em: 2026-09-14T21:25:03-03:00  

Escopo: 26 sessões ordinárias (tipo 1) com data de início em 2026.

Método: para cada sessão, li a ordem do dia e contei itens cujo resultado indica votação (ignorei “Matéria Lida”). O tipo da matéria foi lido do texto do próprio item (sem baixar cada matéria de novo).

Totais:

- Votações contadas: 1388
- Por texto de resultado: Unanimidade 1375, Maioria absoluta 8, Rejeitado 5
- Por tipo no texto: Requerimento 1144, Projeto de lei 173, Moção 37, Projeto de resolução 8, Veto 4, não identificado no texto 22

Isso é contagem pela ordem do dia. Bate com a ideia de “houve votação”, mas a prova fina de cada voto continua sendo o `registrovotacao` + `votoparlamentar` das sessões baixadas.

## O que dá e o que não dá para separar na tela

Resposta direta:

1. Abstenção: dá. Palavra própria `Abstenção`.
2. Presidente que não vota: dá só com cruzamento. Olhar `Não Votou` (ou `-1` no acervo antigo) e confirmar na mesa da sessão. Não dá para colar o rótulo “presidente” em todo `Não Votou` sem esse cruzamento. Também não dá para dizer que o presidente nunca vota: na sessão 771 ele votou `Não` num veto.
3. Ausente com justificativa: dá quando existe registro em justificativa de ausência. Pode não existir linha de voto para essa pessoa.
4. Ausente sem justificativa: em tese, quem não está na lista de presença e não tem justificativa. Não deu para fechar isso com uma ordinária de 2026 completa e com ausência no pacote. Falta essa sessão baixada por inteiro.

Sobre o valor antigo `Ausente` no voto: existe, mas só no recorte de `data_hora` 2018. Não misturar com ausência justificada moderna sem estudar o caso.

## Recomendação de rótulos (só recomendação, não decisão)

Sugestão para o Vinicius reagir depois, se quiser:

- `Sim` → “A favor”
- `Não` → “Contra”
- `Abstenção` → “Absteve-se”
- `Não Votou` cruzado com presidente na mesa → “Não votou (presidência)”
- `Não Votou` sem ser presidente → “Não votou” (sem inventar motivo)
- Com justificativa e sem voto → “Ausente com justificativa”
- Fora da presença e sem justificativa → “Ausente sem justificativa” (só depois de validar o método na sessão completa)

Nada disso está decidido. É só proposta de linguagem.

## Arquivos novos principais (para abrir com os próprios olhos)

- `valores_voto_por_ano.json`
- `exemplo_voto_ausente.json`
- `nota_filtro_voto_vazio.json`
- `investigacao_menos_um.json`
- `sessao_794_integrantemesa.json`
- `sessao_771_*` + `sessao_771_votos.csv`
- `sessao_769_*` + `sessao_769_votos.csv`
- `sessao_786_*` + `sessao_786_votos.csv`
- `sessao_768_*` + `sessao_768_votos.csv` (extraordinária, ausência justificada)
- `contagem_votacoes_ordinarias_2026.json`
- `sessoes_2026_escolhidas_indice.json`

Nenhuma tela foi criada. Nenhum arquivo em `docs/` foi escrito.

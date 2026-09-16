# Prova: como separar voto, presidente e ausência

Consultado em: 2026-09-14T22:06:54-03:00
Fonte: https://sapl.campolargo.pr.leg.br
Pedidos feitos nesta prova: 50

## Em uma frase

Abstenção: sim, pela palavra do voto. Presidente que não vota: sim só com cruzamento mesa + Não Votou; Não Votou sozinho não basta. Ausente com justificativa: sim (prova na sessão 768). Ausente sem justificativa: método definido, mas nenhum exemplo em 2026 nas sessões varridas.

## Banca usada como referência

União dos vereadores que apareceram como presentes ou justificados nas sessões já baixadas: [47, 49, 50, 51, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64] (15 pessoas).

## Abstenção

Dá para separar. A fonte grava a palavra `Abstenção` no voto individual.
Exemplo consultado em 2026-09-14T22:06:54-03:00: `/api/sessao/votoparlamentar/?voto=Abstenção&data_hora__year=2025&page_size=1`.
Registro salvo dentro de `prova_cruzamento_voto_ausencia.json`.

## Presidente que não vota

Dá para apontar com cruzamento: a pessoa está na mesa como PRESIDENTE (não vice) e, naquela matéria, o voto é `Não Votou`.

Não dá para usar só a palavra `Não Votou`.
Prova do limite: sessão 786, votação 23673, parlamentar 51 (ANDRÉ GABARDO) está presente, não é presidente, e mesmo assim veio `Não Votou`. Arquivos: `sessao_786_*`.
Também há caso em que o presidente vota de verdade (`Não` no veto da sessão 771).

## Ausente com justificativa

Dá para separar. Prova na sessão 768 (26/01/2026, extraordinária): dois vereadores na lista de justificativa, fora da presença, sem linha de voto na matéria baixada. Arquivos: `sessao_768_*`.
- parlamentar 64 (TOMAZINA), tipo_ausencia=2, na presença? False
- parlamentar 58 (RAFAEL FREITAS), tipo_ausencia=2, na presença? False

## Ausente sem justificativa

O método está definido (fora da presença e fora da justificativa). Nas ordinárias de 2026 varridas agora, a banca de 15 sempre estava coberta por presença + justificativa. Não deu para achar um exemplo real de ausente sem justificativa neste ano. Não inventar que existe caso; dizer que o método existe e o exemplo ainda não apareceu.

## O que isso destrava

Três estados estão provados com exemplo. O quarto (ausente sem justificativa) tem método, sem exemplo em 2026 na varredura. A tela pode explicar os três com segurança e tratar o quarto como "não observado ainda neste recorte", ou esperar achar um caso.

## Arquivo máquina

`prova_cruzamento_voto_ausencia.json`
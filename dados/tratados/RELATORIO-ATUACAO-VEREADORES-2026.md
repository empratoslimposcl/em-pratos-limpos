# Atuação dos vereadores nas sessões ordinárias de 2026

Gerado em: 2026-09-16T21:13:43-03:00
Dado coletado em: 2026-09-17T00:13:42+00:00
Script: `dados/tratados/gerar_atuacao_vereadores_2026.py`
Fonte: arquivos oficiais guardados em `dados/brutos/` e a tabela única `dados/tratados/vereadores.json`. Nada foi inventado na mão.

## Em uma frase

Nas 26 sessões ordinárias de 2026, os 15 vereadores da legislatura atual tiveram presença, voto e projetos de lei consolidados a partir do sistema oficial da Câmara (SAPL).

Sessão ordinária: o encontro regular da Câmara, às segundas. Projeto de lei do Legislativo: proposta de lei apresentada por vereador ou pela mesa da Câmara, não pela Prefeitura.

## O que este recorte cobre

Só 2026. Só sessão ordinária. A sessão extraordinária 768 (26/01/2026) ficou de fora de propósito: ela serve de prova de falta justificada, mas não entra nesses 26 encontros.

A sessão 795 (14/09/2026) tinha zero votações na contagem feita em 14/09. Os arquivos de voto baixados depois já trazem 16 registros. Este consolidado usa os arquivos de voto, não o zero antigo.

Os 100 Projetos de Lei do Legislativo vieram da planilha `materias-2026-resposta-original.csv`. Desses 100, 50 já foram votados e aprovados em sessão ordinária, 0 foram rejeitados e 50 ainda estão em tramitação (tramitação: o projeto continua andando na Câmara e ainda não foi votado em sessão ordinária até a data da coleta).

5 desses 100 projetos não têm vereador como autor no campo de autoria: a fonte aponta a Mesa Executiva. Eles entram no total da Câmara e não na lista de nenhum dos 15.

4 projetos têm mais de um nome no campo de autoria (coautoria: dois ou mais vereadores assinam o mesmo projeto). Nesse caso o projeto conta para cada autor. Por isso a soma das listas individuais passa de 100. O total da Câmara, sem repetir projeto, continua 100.

## Como a presença foi lida

Presente: o vereador aparece na lista de presença da sessão (`sessaoplenariapresenca`) ou na lista de presença da ordem do dia (ordem do dia: a pauta do que vai ser votado naquela sessão).

Falta com justificativa: o vereador está na lista de justificativa de ausência e não está em nenhuma das duas listas de presença.

Falta sem justificativa: o vereador não está na presença e não está na justificativa. O método existe. Nas 26 sessões ordinárias deste recorte, esse caso não apareceu.

As duas listas de presença bateram em todas as 26 sessões.

## Como o voto foi lido

Cada linha de `votoparlamentar` é um voto de uma pessoa em uma votação. Os textos da fonte foram mantidos: Sim, Não, Abstenção, Não Votou, Ausente.

Abstenção (abstenção: o vereador estava lá e escolheu não dizer sim nem não) só conta quando a própria fonte escreve a palavra Abstenção. Neste recorte isso apareceu 0 vezes.

Presidente que não votou: só quando a pessoa era PRESIDENTE na mesa daquela sessão (não vice) e o voto veio `Não Votou`. A palavra `Não Votou` sozinha não basta. Há vereador que não era presidente e mesmo assim veio `Não Votou`. Há sessão em que o presidente votou de verdade. Os dois casos ficam separados.

## Classificação por tema

O tema de cada um dos 100 projetos foi proposto por programa, com as mesmas regras de palavra-chave de `dados/tratados/gerar_temas_votacoes_2026.py`. Isso não foi revisado por uma pessoa. Número de 'prioridade da Câmara' a partir dessa classificação não vai ao ar.

Distribuição dos 100 Projetos de Lei do Legislativo por tema:

- Homenagens, nomes e datas: 36
- Defesa Civil: 0
- Saúde: 5
- Educação: 9
- Segurança pública: 0
- Assistência social e direitos: 0
- Cultura, esporte e lazer: 10
- Meio ambiente e animais: 5
- Iluminação e serviços urbanos: 1
- Ruas, trânsito e transporte: 3
- Desenvolvimento, moradia e agricultura: 2
- Administração e finanças: 6
- Outros: 23

## Presença de cada vereador

A ordem abaixo é a ordem da tabela única, pelo número oficial do SAPL. Não é ranking.

### ROGERIO DAS TINTAS

Partido: PL (PARTIDO LIBERAL)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/47/rogerio-das-tintas.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/47

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### GENÉSIO DA VITAL

Partido: MDB (MOVIMENTO DEMOCRÁTICO BRASILEIRO)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/49/genesio-da-vital.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/49

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### ALEXANDRE GUIMARÃES

Partido: PDT (Partido Democrático Trabalhista)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/50/alexandre-g.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/50

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### ANDRÉ GABARDO

Partido: NOVO (NOVO)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/51/andre-gabardo.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/51

Esteve presente em 25 das 26 sessões ordinárias (taxa de presença 96,15%).

Faltou a 1 das 26 sessões. Com justificativa: 1. Sem justificativa: 0. Porcentagem de sessões em que faltou: 3,85%.

- 2026-04-06, 9ª ORDINÁRIA da 2ª Sessão Legislativa da 41ª Legislatura: falta com justificativa. Fonte: https://sapl.campolargo.pr.leg.br/sessao/777

### LUIZ SCERVENSKI

Partido: MDB (MOVIMENTO DEMOCRÁTICO BRASILEIRO)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/53/luiz-scervenski.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/53

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### SARGENTO LEANDRO CHRESTANI

Partido: SDD (SOLIDARIEDADE)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/55/sgt.-chrestani.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/55

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### POLACO PRETO

Partido: PSD (Partido Social Democratico)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/56/polaco-preto.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/56

Esteve presente em 25 das 26 sessões ordinárias (taxa de presença 96,15%).

Faltou a 1 das 26 sessões. Com justificativa: 1. Sem justificativa: 0. Porcentagem de sessões em que faltou: 3,85%.

- 2026-03-23, 8ª ORDINÁRIA da 2ª Sessão Legislativa da 41ª Legislatura: falta com justificativa. Fonte: https://sapl.campolargo.pr.leg.br/sessao/776

### ROGÉRIO DA VIAÇÃO

Partido: PSD (Partido Social Democratico)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/57/rogerio-da-viacao.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/57

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### RAFAEL FREITAS

Partido: UNIÃO (União Brasil)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/58/gm-rafael.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/58

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### VICTOR BINI

Partido: UNIÃO (União Brasil)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/59/victor-bini.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/59

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### JUNIOR ANDREASSA

Partido: PODE (PODEMOS)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/60/junior-andreassa.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/60

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### GUSTAVO TORRES

Partido: REPUBLICANOS (REPUBLICANOS)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/61/gustavo-torres.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/61

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### ATHOS MARTINEZ

Partido: PL (PARTIDO LIBERAL)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/62/athos-martinez.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/62

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### SENSEI CLOVIS

Partido: PP (Partido Popular)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/63/sensei-clovis.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/63

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

### TOMAZINA

Partido: PDT (Partido Democrático Trabalhista)

Foto oficial: http://sapl.campolargo.pr.leg.br/media/sapl/public/parlamentar/64/tomazina.png

Página oficial: https://sapl.campolargo.pr.leg.br/parlamentar/64

Esteve presente em 26 das 26 sessões ordinárias (taxa de presença 100,00%).

Não faltou a nenhuma das 26 sessões. Porcentagem de sessões em que faltou: 0,00%.

## Votos nominais consolidados

Voto nominal: o sistema registra o voto de cada vereador, com nome, em cada matéria votada. Não é voto secreto.

### ROGERIO DAS TINTAS

- Sim: 1399
- Não: 5
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### GENÉSIO DA VITAL

- Sim: 1399
- Não: 5
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### ALEXANDRE GUIMARÃES

- Sim: 12
- Não: 2
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 1390
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### ANDRÉ GABARDO

- Sim: 1332
- Não: 4
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 1
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1337

### LUIZ SCERVENSKI

- Sim: 1399
- Não: 5
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### SARGENTO LEANDRO CHRESTANI

- Sim: 1400
- Não: 4
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### POLACO PRETO

- Sim: 1335
- Não: 4
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1339

### ROGÉRIO DA VIAÇÃO

- Sim: 1400
- Não: 4
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### RAFAEL FREITAS

- Sim: 1398
- Não: 6
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### VICTOR BINI

- Sim: 1399
- Não: 5
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### JUNIOR ANDREASSA

- Sim: 1398
- Não: 6
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### GUSTAVO TORRES

- Sim: 1395
- Não: 9
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### ATHOS MARTINEZ

- Sim: 1398
- Não: 6
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### SENSEI CLOVIS

- Sim: 1401
- Não: 3
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

### TOMAZINA

- Sim: 1399
- Não: 5
- Abstenção: 0
- Presidente que não votou (cruzamento mesa + Não Votou): 0
- Não votou, e não era presidente naquela sessão: 0
- Ausente no campo de voto: 0
- Total de registros de voto deste vereador: 1404

## Projetos de Lei do Legislativo de cada vereador

Aqui só entra Projeto de Lei do Legislativo de 2026. Requerimento, moção, veto e projeto da Prefeitura não entram nesta lista, embora o voto neles entre na conta de votos nominais acima.

### ROGERIO DAS TINTAS

Apresentou 4 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 1. Rejeitados: 0. Em tramitação: 3.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (1), Cultura, esporte e lazer (1), Meio ambiente e animais (1) e Iluminação e serviços urbanos (1).

- PLL 29/2026 (id 25999): DISPÕE SOBRE A OBRIGATORIEDADE DA EMPRESA CONCESSIONÁRIA OU PERMISSIONÁRIA DE ENERGIA ELETRICA E DEMAIS EMPRESAS COMPARTILHANTES DE SUA INFRAESTRUTURA, DE CUMPRIR COM AS DIRETRIZES DAS NORMAS TÉCNICAS APLICÁVEIS E PROMOVER A REGULARIZAÇÃO E RETIRADA DOS FIOS INUTILIZADOS EM VIAS PÚBLICAS DO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDENCIAS. Tema: Iluminação e serviços urbanos. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25999
- PLL 62/2026 (id 26457): INSTITUI O PROGRAMA PROTETORES MIRINS NO MUNICÍPIO DE CAMPO LARGO, E DÁ OUTRAS PROVIDENCIAS.
***COM SUBSTITUTIVO GERAL, CUJA SÚMULA: INSTITUI O PROGRAMA PROTETORES MIRINS DOS ANIMAIS NO MUNICÍPIO DE CAMPO LARGO, E DÁ OUTRAS PROVIDÊNCIAS.*** Tema: Meio ambiente e animais. Situação: Aprovado em 2026-09-08 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26457
- PLL 63/2026 (id 26458): INSTITUI O PROGRAMA MUNICIPAL DE FOMENTO AO ESPORTE FEMININO. Tema: Cultura, esporte e lazer. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26458
- PLL 65/2026 (id 26466): CRIA, NO ÂMBITO DO MUNICIPIO DE CAMPO LARGO, O DIA MUNICIPAL DA PESSOA IDOSA E DÁ OUTRAS PROVIDENCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26466

### GENÉSIO DA VITAL

Apresentou 7 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 5. Rejeitados: 0. Em tramitação: 2.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (5), Cultura, esporte e lazer (1) e Outros (1).

- PLL 21/2026 (id 25840): DÁ A DENOMINAÇÃO DE RUA HILDA KARMAN CONFORME ESPECIFICA. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-05-04 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25840
- PLL 26/2026 (id 25946): DECLARA DE UTILIDADE PUBLICA MUNICIPAL DE CAMPO LARGO O CLUBE DE DESBRAVADORES E AVENTUREIROS SUL – FILIAL CAMPO LARGO. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25946
- PLL 32/2026 (id 26021): ALTERA O ART. 1° DA LEI MUNICIPAL N° 3.948, DE 16 DE DEZEMBRO DE 2025, CONFORME ESPECIFICA. Tema: Outros. Situação: Aprovado em 2026-05-18 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26021
- PLL 36/2026 (id 26074): DECLARA DE UTILIDADE PÚBLICA MUNICIPAL DE CAMPO LARGO O CENTRO DE TRADIÇÕES GAÚCHAS PONCHO CRIOULO - CTG. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-05-25 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26074
- PLL 54/2026 (id 26224): INCLUI NO CALENDÁRIO OFICIAL DE EVENTOS DO MUNICÍPIO DE CAMPO LARGO O DIA DO CRIADOR DE CAVALO CRIOULO.
***COM SUBSTITUTIVO GERAL*** Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-08-10 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26224
- PLL 69/2026 (id 26534): INSTITUI O PROGRAMA MUNICIPAL “VACA PARADA”, DESTINADO AO INCENTIVO DE ATIVIDADES CULTURAIS, CAMPEIRAS E TRADICIONALISTAS VOLTADAS ÀS CRIANÇAS E ADOLESCENTES NO MUNICIPIO, E DÁ OUTRAS PROVIDÊNCIAS.
***COM SUBSTITUTIVO GERAL*** Tema: Cultura, esporte e lazer. Situação: Aprovado em 2026-09-14 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26534
- PLL 98/2026 (id 27046): INSTITUI O DIA MUNICIPAL DA VACA PARADA NO CALENDÁRIO OFICIAL DE EVENTOS DO MUNICIPIO DE CAMPO LARGO. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/27046

### ALEXANDRE GUIMARÃES

Apresentou 2 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 1. Rejeitados: 0. Em tramitação: 1.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (2).

- PLL 43/2026 (id 26129): DÁ DENOMINAÇÃO DE “RUA JOSÉ ANTOCHEVIS” O TRECHO INDICADO NA LOCALIDADE DA COLONIA DOM PEDRO, MUNICÍPIO DE CAMPO LARGO, CONFORME ESPECIFICA. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26129
- PLL 74/2026 (id 26603): INSTITUI O DIA MUNICIPAL DO ASSOCIATIVISMO, A SER CELEBRADO ANUALMENTE NO DIA 15 DE JULHO. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-06-15 (UNANIMIDADE). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/26603

### ANDRÉ GABARDO

Apresentou 4 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 3. Rejeitados: 0. Em tramitação: 1.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (4).

- PLL 22/2026 (id 25871): DECLARAÇÃO DE UTILIDADE PÚBLICA A ASSOCIAÇÃO BATISTA DE AÇÃO SOCIAL - ABASC COM SEDE E FORO NO MUNICÍPIO DE CURITIBA. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-06-15 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25871
- PLL 42/2026 (id 26128): DECLARA DE UTILIDADE PÚBLICA O SINDICATO DAS INDUSTRIAS DE VIDROS, CRISTAIS, ESPELHOS, CERÂMICAS DE LOUÇA, PORCELANA, PISOS E REVESTIMENTOS CERÂMICOS NO ESTADO DO PARANÁ COM SEDE E FORO NO MUNICIPIO DE CAMPO LARGO. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-05-25 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26128
- PLL 50/2026 (id 26219): DENOMINA DE “QUADRA DE ESPORTES PROFESSOR ALVARO ALBERTO DA SILVA” A QUADRA ESPORTIVA LOCALIZADA NA VILA OLIMPICA ANTÔNIO LACERDA BRAGA, NO MUNICIPIO DE CAMPO LARGO. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26219
- PLL 74/2026 (id 26603): INSTITUI O DIA MUNICIPAL DO ASSOCIATIVISMO, A SER CELEBRADO ANUALMENTE NO DIA 15 DE JULHO. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-06-15 (UNANIMIDADE). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/26603

### LUIZ SCERVENSKI

Apresentou 8 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 7. Rejeitados: 0. Em tramitação: 1.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (2), Saúde (2), Cultura, esporte e lazer (1) e Outros (3).

- PLL 13/2026 (id 25650): INSTITUI FERIADO MUNICIPAL O DIA 23 DE FEVEREIRO, EM COMEMORAÇÃO À EMANCIPAÇÃO POLÍTICA DO MUNICÍPIO DE CAMPO LARGO.
***COM SUBSTITUTIVO GERAL, CUJA SÚMULA: DISPÕE SOBRE A CELEBRAÇÃO DO DIA MUNICIPAL DA EMANCIPAÇÃO POLITICA DE CAMPO LARGO." Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-04-06 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25650
- PLL 19/2026 (id 25768): INSTITUI A SEMANA MUNICIPAL DE PREVENÇÃO E CONSCIENTIZAÇÃO SOBRE O BULLYING E CYBERBULLYING NAS ESCOLAS E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/25768
- PLL 30/2026 (id 26019): INSTITUI NO CALENDÁRIO MUNICIPAL DE CAMPO LARGO A FESTA DA PADROEIRA DA PARÓQUIA NOSSA SENHORA DA PIEDADE. Tema: Outros. Situação: Aprovado em 2026-05-11 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26019
- PLL 31/2026 (id 26020): INSTITUI NO MUNICIPIO DE CAMPO LARGO O PROGRAMA EDUCATIVO E PREVENTIVO SAMUZINHO VOLTADO À CONSCIENTIZAÇÃO SOBRE PREVENÇÃO DE ACIDENTES E USO ADEQUADO DOS SERVIÇOS DE URGÊNCIA E EMERGÊNCIA, E DÁ OUTRAS PROVIDÊNCIAS.
***COM SUBSTITUTIVO GERAL*** CUJA SÚMULA: "INSTITUI, NO MUNICÍPIO DE CAMPO LARGO, O PROGRAMA EDUCATIVO E PREVENTIVO "SAMUZINHO", VOLTADO À CONSCIENTIZAÇÃO SOBRE PREVENÇÃO DE ACIDENTES E USO ADEQUADO DOS SERVIÇOS DE URGÊNCIA E EMERGÊNCIA, E ESTABELECE DIRETRIZES PARA SUA IMPLEMENTAÇÃO".
***COM VETO INTEGRAL*** Tema: Saúde. Situação: Aprovado em 2026-06-15 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26020
- PLL 44/2026 (id 26141): INSTITUI O SELO PET SEGURO NO MUNICÍPIO DE CAMPO LARGO, CONFORME ESPECIFICA. Tema: Outros. Situação: Aprovado em 2026-06-01 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26141
- PLL 45/2026 (id 26142): INCLUI NO CALENDÁRIO MUNICIPAL DE CAMPO LARGO A FESTA DA PADROEIRA DA PAROQUIA NOSSA SENHORA APARECIDA E A PEREGRINAÇÃO AO MORRO DO CAL. Tema: Outros. Situação: Aprovado em 2026-05-18 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26142
- PLL 77/2026 (id 26753): DISPÕE SOBRE A FORMA DE ATENDIMENTO ACESSÍVEL ÀS PESSOAS COM DEFICIÊNCIA POR ESTABELECIMENTOS DE SAÚDE E DE CARÁTER ESTÉTICO INSTALADOS EM EDIFICAÇÕES CONSTRUIDAS ANTERIORMENTE A VIGENCIA DESTA LEI, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Saúde. Situação: Aprovado em 2026-08-24 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26753
- PLL 90/2026 (id 26844): INSTITUI A POLITICA MUNICIPAL DE DOAÇÃO DE BENS CULTURAIS AO ACERVO DO MUSEU HISTÓRICO DE CAMPO LARGO. Tema: Cultura, esporte e lazer. Situação: Aprovado em 2026-09-14 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26844

### SARGENTO LEANDRO CHRESTANI

Apresentou 7 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 2. Rejeitados: 0. Em tramitação: 5.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (2), Educação (4) e Outros (1).

- PLL 8/2026 (id 25644): INSTITUI, NO ÂMBITO DO MUNICÍPIO DE CAMPO LARGO, O PROJETO "MARIA DA PENHA NAS ESCOLAS", COM O OBJETIVO DE PROMOVER A CONSCIENTIZAÇÃO SOBRE A PREVENÇÃO E O COMBATE À VIOLÊNCIA DOMÉSTICA, FAMILIAR E AO FEMINICÍDLO NAS UNIDADES DA REDE PÚBLICA MUNICIPAL DE ENSINO. Tema: Educação. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25644
- PLL 9/2026 (id 25645): INSTITUI O PROGRAMA MUNICIPAL "PLENA MENTE" NAS UNIDADES DA REDE PÚBLICA MUNICIPAL DE ENSINO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Educação. Situação: Aprovado em 2026-03-16 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25645
- PLL 10/2026 (id 25646): INSTITUI A POLÍTICA MUNICIPAL DE ENFRENTAMENTO AO CAPACITISMO NO ÂMBITO DO MUNICÍPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25646
- PLL 11/2026 (id 25647): INSTITUI O PROGRAMA MUNICIPAL DE EDUCAÇÃO FISCAL NAS ESCOLAS DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS.
***COM SUBSTITUTIVO GERAL*** Tema: Educação. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25647
- PLL 12/2026 (id 25649): INCLUI NO CALENDÁRIO OFICIAL DE EVENTOS DO MUNICÍPIO DE CAMPO LARGO A "CAMINHADA DE CONSCIENTIZAÇÃO DO AUTISMO", A SER REALIZADA ANUALMENTE NO MÊS DE ABRIL.
***COM SUBSTITUTIVO GERAL*** Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-04-22 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25649
- PLL 23/2026 (id 25872): INSTITUI A SEMANA MUNICIPAL DE ENFRENTAMENTO AO CAPACITISMO NO MUNICÍPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25872
- PLL 71/2026 (id 26544): INSTITUI, NO AMBITO DO MUNICIPIO DE CAMPO LARGO, O PROJETO MARIA DA PENHA NAS ESCOLAS E DÁ OUTRAS PROVIDÊNCIAS. Tema: Educação. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26544

### POLACO PRETO

Apresentou 13 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 7. Rejeitados: 0. Em tramitação: 6.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (4), Saúde (1), Educação (1), Cultura, esporte e lazer (1), Desenvolvimento, moradia e agricultura (1), Administração e finanças (1) e Outros (4).

- PLL 1/2026 (id 25507): INSTITUI A POLÍTICA MUNICIPAL DE AGROECOLOGIA, PRODUÇÃO ORGÂNICA E ALIMENTAÇÃO SAUDÁVEL NO MUNICÍPIODE CAMPO LARGO, ESTADO DO PARANÁ E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Aprovado em 2026-03-16 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25507
- PLL 5/2026 (id 25583): DÁ DENOMINAÇÃO DE RUA MARISA AGE BINI O TRECHO INDICADO NO BAIRRO JARDIM SOCIAL, CONFORME ESPECIFICA. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-04-06 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25583
- PLL 24/2026 (id 25896): RECONHECE O WHEELING BIKE (GRAU DE BICICLETA) COMO PRÁTICA ESPORTIVA NO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. ***COM EMENDA MODIFICATIVA*** Tema: Cultura, esporte e lazer. Situação: Aprovado em 2026-05-18 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25896
- PLL 57/2026 (id 26288): INSTITUI A POLITICA MUNICIPAL DE INCENTIVO À AGROINDUSTRIA FAMILIAR NO MUNICIPIO DE CAMPO LARGO/PR E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Aprovado em 2026-06-15 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26288
- PLL 67/2026 (id 26531): DISPÕE SOBRE A DIVULGAÇÃO DE INFORMAÇÕES RELATIVAS AOS CONTRATOS DE LOCAÇÃO DE IMÓVEIS UTILIZADOS PELA ADMINISTRAÇÃO PÚBLICA NO MUNICIPIO DE CAMPO LARGO/PR E DÁ OUTRAS PROVIDENCIAS. Tema: Administração e finanças. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26531
- PLL 70/2026 (id 26535): DECLARA DE UTILIDADE PÚBLICA A AGICAMP – ASSOCIAÇÃO CAMPO-LARGUENSE DE GINÁSTICA RÍTMICA. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-08-03 (UNANIMIDADE). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/26535
- PLL 75/2026 (id 26607): INSTITUI O PROGRAMA MUNICIPAL DE GINASTICA RÍTMICA NO MUNÍCIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Aprovado em 2026-08-17 (UNANIMIDADE). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/26607
- PLL 76/2026 (id 26613): DISPÕE SOBRE A PRESENÇA DE DOULAS DURANTE O TRABALHO DE PARTO, PARTO E PÓS-PARTO IMEDIATO, NAS MATERNIDADES, CASAS DE PARTO E ESTABELECIMENTOS HOSPTALARES CONGÊNERES, PÚBLICOS E PRIVADOS, LOCALIZADOS NO MUNICIPIO DE CAMPO LARGO. Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26613
- PLL 83/2026 (id 26770): DISPÕE SOBRE A DIVULGAÇÃO DA LISTA DE PACIENTES QUE AGUARDAM CONSULTAS COM ESPECIALISTAS, EXAMES E PROCEDIMENOS CIRÚRGICOS NA REDE PÚBLICA MUNICIPAL DE SAÚDE DE CAMPO LARGO E REVOGA A LEI MUNICIPAL N° 62, DE 09 DE OUTUBRO DE 2017. Tema: Saúde. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26770
- PLL 84/2026 (id 26771): DISPÕE SOBRE A TRANSPARÊNCIA DA LISTA DE ESPERA PARA MATRÍCULA NA REDE PÚBLICA MUNICIPAL DE ENSINO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Educação. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26771
- PLL 85/2026 (id 26772): INSTITUI A SEMANA MUNICIPAL DE PROTEÇÃO DAS NASCENTES NO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-09-08 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26772
- PLL 86/2026 (id 26773): INSTITUI O MÊS DO EMPREENDEDORISMO FEMININO NO ÂMBITO DO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Desenvolvimento, moradia e agricultura. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26773
- PLL 91/2026 (id 26914): DECLARA UTILIDADE PÚBLICA MUNICIPAL O INSTITUTO DESENVOLVER. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26914

### ROGÉRIO DA VIAÇÃO

Apresentou 5 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 3. Rejeitados: 0. Em tramitação: 2.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (1), Educação (1), Cultura, esporte e lazer (1), Desenvolvimento, moradia e agricultura (1) e Outros (1).

- PLL 15/2026 (id 25717): ALTERA E ACRESCENTA DISPOSITIVOS À LEI MUNICIPAL N° 3582/2023, QUE INSTITUI A POLITICA DE TRANSPARENCIA NAS OBRAS PUBLICAS MUNICIPAIS, PARA DISPOR SOBRE A OBRIGATORIEDADE DE INSERÇÃO DE CODIGO QR (QR CODE) NAS PLACAS DE OBRAS PÚBLICAS, E DÁ OUTRAS PROVIDENCIAS. Tema: Outros. Situação: Aprovado em 2026-08-10 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25717
- PLL 16/2026 (id 25718): DISPÕE SOBRE A OBRIGATORIEDADE DE DISPONIBILIZAÇÃO DE ESPAÇO DE ACOLHIMENTO E REGULAÇÃO SENSORIAL (SALA SENSORIAL) COMO CONDIÇÃO PARA CONCESSÃO DE ALVARÁ EM EVENTOS DE GRANDE PORTE EM CAMPO LARGO. Tema: Cultura, esporte e lazer. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25718
- PLL 37/2026 (id 26081): DÁ DENOMINAÇÃO DE RUA DA ARCA AO TRECHO INDICADO NO BAIRRO NOSSA SENHORA DO PILAR, CONFORME ESPECIFICA. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-05-18 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26081
- PLL 49/2026 (id 26185): DISPÕE SOBRE A OBRIGATORIEDADE DE DISPONIBILIZAÇÃO DE VAGAS DE EMPREGO NA AGÊNCIA DO TRABALHADOR POR EMPRESAS CONTRATADAS PELO MUNICIPIO DE CAMPO LARGO E ENTIDADES SUBVENCIONADAS, E DÁ OUTRAS PROVIDENCIAS. Tema: Desenvolvimento, moradia e agricultura. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26185
- PLL 73/2026 (id 26561): INSTITUI A CAMPANHA MUNICIPAL DE EDUCAÇÃO E CONSCIENTIZAÇÃO PARA O USO SEGURO DE VEICULOS AUTOPROPELIDOS NO MUNICÍPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Educação. Situação: Aprovado em 2026-08-10 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26561

### RAFAEL FREITAS

Apresentou 8 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 4. Rejeitados: 0. Em tramitação: 4.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (1), Saúde (1), Meio ambiente e animais (4) e Outros (2).

- PLL 6/2026 (id 25584): DISPÕE SOBRE A OBRIGATORIEDADE DE MICROCHIPAGEM DE ANIMAIS DOMÉSTICOS NO MUNICÍPIO DE CAMPO LARGO. Tema: Meio ambiente e animais. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25584
- PLL 7/2026 (id 25585): DISPÕE SOBRE A OBRIGATORIEDADE DE CASTRAÇÃO DE CÃES DOMÉSTICOS DA RAÇA PIT BULL E DE SEUS SEMELHANTES OU DERIVADOS. Tema: Meio ambiente e animais. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25585
- PLL 14/2026 (id 25661): DISPÕE SOBRE A OBRIGATORIEDADE DA DIVULGAÇÃO DOS BENEFÍCIOS DA MICROCHIPAGEM DE ANIMAIS DOMÉSTICOS EM CLÍNICAS VETERINÁRIAS NO MUNICÍPIO DE CAMPO LARGO. Tema: Meio ambiente e animais. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25661
- PLL 25/2026 (id 25945): INSTITUI O PROGRAMA MUNICIPAL DE INCENTIVO À CIDADANIA ATIVA NO MUNICIPIO DE CAMPO LARGO Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25945
- PLL 28/2026 (id 25991): DENOMINA DE DESTACAMENTO ALEXANDRE DINIZ DOS SANTOS O MÓDULO DA GUARDA MUNICIPAL DO FERRARIA, NO MUNICIPIO DE CAMPO LARGO. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-05-04 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25991
- PLL 35/2026 (id 26073): DISPÕE SOBRE A OBRIGATORIEDADE DE NOTIFICAÇÃO À PREFEITURA DOS CASOS CONFIRMADOS DE ZOONOSES EM ANIMAIS ATENDIDOS POR SERVIÇOS DE SAÚDE E CUIDADO ANIMAL, PÚBLICOS OU PRIVADOS, NO MUNICIPIO DE CAMPO LARGO. Tema: Saúde. Situação: Aprovado em 2026-05-18 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26073
- PLL 58/2026 (id 26306): INSTITUI POLITICA MUNICIPAL DE ENFRENTAMENTO ÀS DROGAS ILÍCITAS.
***COM VETO INTEGRAL*** Tema: Outros. Situação: Aprovado em 2026-06-15 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26306
- PLL 59/2026 (id 26348): INSTITUI A LEI CÃO ABACATE, PARA MAJORAR AS MULTAS ADMINISTRATIVAS COMINADAS À PRATICA DE MAUS-TRATOS COM CRUELDADE AOS ANIMAIS.
***COM VETO INTEGRAL*** Tema: Meio ambiente e animais. Situação: Aprovado em 2026-06-15 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26348

### VICTOR BINI

Apresentou 4 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 4. Rejeitados: 0. Em tramitação: 0.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (2) e Outros (2).

- PLL 20/2026 (id 25778): INSTITUI, NO ÂMBITO DO MUNICIPIO DE CAMPO LARGO A CAMPANHA “FEVEREIRO LARANJA”, DEDICADA Á CONSCIENTIZAÇÃO SOBRE A LEUCEMIA. Tema: Outros. Situação: Aprovado em 2026-04-13 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25778
- PLL 38/2026 (id 26103): INSTITUI O PROGRAMA MUNICIPAL DE APOIO E FOMENTO À CULTURA HIP HOP, CRIA A SEMANA MUNICIPAL DO HIP HOP E ESTABELECE DIRETRIZES PARA VALORIZAÇÃO DA CULTURA HIP HOP NO MUNICIPIO DE CAMPO LARGO. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-05-18 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26103
- PLL 55/2026 (id 26252): INSTITUI O DIA DO ZOOTECNISTA NO MUNICÍPIO DE CAMPO LARGO, CONFORME ESPECIFICA. Tema: Outros. Situação: Aprovado em 2026-06-01 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26252
- PLL 82/2026 (id 26769): INSTITUI, NO ÂMBITO DO MUNICIPIO DE CAMPO LARGO, A SEMANA MUNICIPAL DO BRECHÓ E DA MODA SUSTENTÁVEL A SER REALIZADA ANUALMENTE NA ÚLTIMA SEMANA DO MÊS DE AGOSTO. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-09-14 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26769

### JUNIOR ANDREASSA

Apresentou 8 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 3. Rejeitados: 0. Em tramitação: 5.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (4), Educação (2) e Ruas, trânsito e transporte (2).

- PLL 27/2026 (id 25972): ALTERA E ACRESCENTA DISPOSITIVOS À LEI MUNICIPAL N° 2841/2013, INSTITUINDO A COMPENSAÇÃO AUTOMÁTICA DE CRÉDITOS NO SISTEMA DE ESTACIONAMENTO REGULAMENTADO (ESTAR) DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Ruas, trânsito e transporte. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25972
- PLL 33/2026 (id 26038): INSTITUI O DIA MUNICIPAL DO TRILHEIRO DE MOTOCICLISMO NO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDENCIAS.
***COM SUBSTITUTIVO GERAL*** Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-08-24 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26038
- PLL 34/2026 (id 26040): INSTITUI O DIA MUNICIPAL DOS AVENTUREIROS NO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS.
***COM SUBSTITUTIVO GERAL***
CUJA SÚMULA : "INSTITUI NO CALENDÁRIO OFICIAL DE EVENTOS DO MUNICÍPIO DE CAMPO LARGO O DIA MUNICIPAL DOS AVENTUREIROS, CELEBRADO ANUALMENTE EM 18 DE MAIO." Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-06-08 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26040
- PLL 74/2026 (id 26603): INSTITUI O DIA MUNICIPAL DO ASSOCIATIVISMO, A SER CELEBRADO ANUALMENTE NO DIA 15 DE JULHO. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-06-15 (UNANIMIDADE). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/26603
- PLL 78/2026 (id 26763): ALTERA E ACRESCENTA DISPOSITIVOS À LEI MUNICIPAL N° 2481/2013, INSTITUINDO O PERÍODO DE TOLERANCIA DE ATÉ 15 (QUINZE) MINUTOS APÓS A IDENTIFICAÇÃO DO VEICULOS POR FISCALIZAÇÃO OFICIAL NO SISTEMA DE ESTACIONAMENTO REGULAMENTADO (ESTAR) DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Ruas, trânsito e transporte. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26763
- PLL 79/2026 (id 26764): INSTITUI O PROGRAMA MUNICIPAL JOVEM GUARDIÃO DE CAMPO LARGO, VOLTADO À PROMOÇÃO DE EDUCAÇÃO AMBIENTAL, DA CIDADANIA, DA PRESERVAÇÃO DOS ESPAÇOS PÚBLICOS E DA PARTICIPAÇÃO JUVENIL,  E DÁ OUTRAS PROVIDÊNCIAS. Tema: Educação. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26764
- PLL 80/2026 (id 26765): INSTITUI A POLITICA MUNICIPAL DE INTEGRAÇÃO, ACOLHIMENTO E INCLUSÃO PRODUTIVA DO IMIGRANTE, REFUGIADO E APÁTRIDA NO MUNICIPIO DE CAMPO LARGO, DENOMINADA PROMIGRA CAMPO LARGO, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26765
- PLL 87/2026 (id 26798): DISPÕE SOBRE DIRETRIZES PARA A IMPLEMENTAÇÃO DE AÇÕES VOLTADAS AO FORTALECIMENTO DOS VALORES CÍVICOS E DA CONVIVÊNCIA ETICA E CIDADÃ NO ÂMBITO DA REDE PÚBLICA MUNICIPAL DE ENSINO DE CAMPO LARGO. Tema: Educação. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26798

### GUSTAVO TORRES

Apresentou 15 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 5. Rejeitados: 0. Em tramitação: 10.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (6), Saúde (1), Educação (1), Cultura, esporte e lazer (1), Administração e finanças (1) e Outros (5).

- PLL 3/2026 (id 25574): ESTABELECE TEMPO MÁXIMO DE ESPERA PARA ATENDIMENTOS NAS UNIDADES DE SAÚDE DO MUNICÍPIO, COM O OBJETIVO DE OTIMIZAR OS FLUXOS DE ATENDIMENTO E REDUZIR FILAS DE ESPERA, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Saúde. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25574
- PLL 4/2026 (id 25582): DISPÕE SOBRE A INSTITUIÇÃO DO DIA DO MASSOTERAPEUTA NO MUNICÍPIO DE CAMPO LARGO - ESTADO DO PARANÁ E DÁ OUTRAS PROVIDÊNCIAS.
***COM SUBSTITUTIVO GERAL*** Tema: Outros. Situação: Aprovado em 2026-05-18 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25582
- PLL 46/2026 (id 26178): INSTITUI O PROGRAMA MUNICIPAL DE INCENTIVO À DOAÇÃO DE LEITE MATERNO NO MUNICÍPIO DE CAMPO LARGO, DISPÕE SOBRE SEUS OBJETIVOS, DIRETRIZES E FORMAS DE FINANCIAMENTO, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26178
- PLL 47/2026 (id 26180): DISPÕE SOBRE A ADOÇÃO OBRIGATÓRIA DE GIZ ANTIALÉRGICO NO ÂMBITO DA REDE PÚBLICA MUNICIPAL DE ENSINO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Educação. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26180
- PLL 48/2026 (id 26181): DISPÕE SOBRE A PROIBIÇÃO DA COBRANÇA DE TAXAS DE SERVIÇO POR BARES, RESTAURANTES, PIZZARIAS, CHURRASCARIAS, LANCHONETES, CASAS NOTURNAS E SIMILARES NO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDENCIAS. Tema: Administração e finanças. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26181
- PLL 51/2026 (id 26220): INSTITUI O DIA MUNICIPAL DO ESPORTE AMADOR NO CALENDÁRO OFICIAL DO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-06-01 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26220
- PLL 52/2026 (id 26221): INSTITUI O DIA MUNICIPAL DA CULTURA NO CALENDÁRO OFICIAL DE EVENTOS DO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Cultura, esporte e lazer. Situação: Aprovado em 2026-08-17 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26221
- PLL 53/2026 (id 26222): INSTITUI O DIA MUNICIPAL DE CONSCIENTIZAÇÃO SOBRE A DISLEXIA NO ÂMBITO DO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-06-01 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26222
- PLL 68/2026 (id 26532): DECLARA DE UTILIDADE PÚBLICA A ASSOCIAÇÃO DE PAIS, MESTRES E FUNCIONÁRIOS DO COLÉGIO ESTADUAL INOVE. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-08-24 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26532
- PLL 81/2026 (id 26767): INSTITUI O DIA MUNICIPAL DO MÚSICO NO MUNICIPIO DE CAMPO LARGO, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26767
- PLL 89/2026 (id 26843): INSTITUI O DIA MUNICIPAL DE VALORIZAÇÃO DO MÉDICO DA ATENÇÃO BÁSICA NO MUNICIPIO DE CAMPO LARGO, ESTADO DO PARANÁ, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26843
- PLL 92/2026 (id 26915): INSTITUI O DIA DO COMUNICADOR NO MUNICIPIO DE CAMPO LARGO, ESTADO DO PARANÁ, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26915
- PLL 94/2026 (id 26990): INSTITUI O DIA DE COMBATE AO RACISMO NO MUNICIPIO DE CAMPO LARGO, ESTADO DO PARANÁ, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26990
- PLL 99/2026 (id 27054): INSTITUI O DIA MUNICIPAL DA ACESSIBILIDADE E INCLUSÃO NO MUNICIPIO DE CAMPO LARGO E ESTABELECE DIRETRIZES PARA AÇÕES DE CONSCIENTIZAÇÃO, FISCALIZAÇÃO E PROMOÇÃO DA ACESSIBILIDADE NOS ESPAÇOS PÚBLICOS E PRIVADO DE USO COLETIVO. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/27054
- PLL 100/2026 (id 27101): DISPÕE SOBRE A TRANSPARÊNCIA DA LISTA DE ESPERA, OS CRITÉRIOS DE ACESSO, PERMANÊNCIA, FREQUÊNCIA E ROTATIVIDADE DAS VAGAS DOS CURSOS DE NATAÇÃO OFERECIDOS PELO MUNICIPIO DE CAMPO LARGO, ESPECIALMENTE NA VILA OLIMPICA ANTONIO LACERDA BRAGA, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/27101

### ATHOS MARTINEZ

Apresentou 6 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 5. Rejeitados: 0. Em tramitação: 1.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (3), Cultura, esporte e lazer (1) e Outros (2).

- PLL 2/2026 (id 25515): DÁ DENOMINAÇÃO DE RUA COMO ÍNDIA GUARACI MAYER Á VIA PÚBLICA LOCALIZADA NO MUNICÍPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-04-27 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25515
- PLL 39/2026 (id 26104): INSTITUI O PROGRAMA DE INCENTIVO À PRATICA DO SKATE NO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Cultura, esporte e lazer. Situação: Aprovado em 2026-05-18 (UNANIMIDADE). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26104
- PLL 70/2026 (id 26535): DECLARA DE UTILIDADE PÚBLICA A AGICAMP – ASSOCIAÇÃO CAMPO-LARGUENSE DE GINÁSTICA RÍTMICA. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-08-03 (UNANIMIDADE). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/26535
- PLL 74/2026 (id 26603): INSTITUI O DIA MUNICIPAL DO ASSOCIATIVISMO, A SER CELEBRADO ANUALMENTE NO DIA 15 DE JULHO. Tema: Homenagens, nomes e datas. Situação: Aprovado em 2026-06-15 (UNANIMIDADE). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/26603
- PLL 75/2026 (id 26607): INSTITUI O PROGRAMA MUNICIPAL DE GINASTICA RÍTMICA NO MUNÍCIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Aprovado em 2026-08-17 (UNANIMIDADE). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/26607
- PLL 93/2026 (id 26989): INSTITUI A POLITICA DE PREVENÇÃO E CONSCIENTIZAÇÃO SOBRE AS EXPERIÊNCIAS ADVERSAS NA INFÂNCIA – EAI (ACEs) NO MUNICIPIO DE CAMPO LARGO E ESTABELECE DIRETRIZES. Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26989

### SENSEI CLOVIS

Apresentou 10 Projetos de Lei do Legislativo em 2026. Aprovados em sessão ordinária: 0. Rejeitados: 0. Em tramitação: 10.

Temas (classificação por IA, não revisada): Homenagens, nomes e datas (4), Cultura, esporte e lazer (3), Ruas, trânsito e transporte (1) e Outros (2).

- PLL 17/2026 (id 25721): ESTABELE A OBRIGATORIEDADE DE REALIZAÇÃO DE AUDIÊNCIA PÚBLICA LOCAL PRÉVIA PARA ALTERAÇÃO, SUPRESSÃO OU REDUÇÃO DE HORÁRIO, ITINERÁRIOS OU LINHAS DE SERVIÇO DE TRANSPORTE COLETIVO URBANO EM CAMPO LARGO. Tema: Ruas, trânsito e transporte. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/25721
- PLL 19/2026 (id 25768): INSTITUI A SEMANA MUNICIPAL DE PREVENÇÃO E CONSCIENTIZAÇÃO SOBRE O BULLYING E CYBERBULLYING NAS ESCOLAS E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: sim. Fonte: https://sapl.campolargo.pr.leg.br/materia/25768
- PLL 56/2026 (id 26264): INSTITUI O DIA MUNICIPAL DE COMBATE AO BULLYING E AO CYBERBULLYING E DÁ OUTRAS PROVIDENCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26264
- PLL 64/2026 (id 26461): INSTITUI A ROTA DO TURISMO CATÓLICO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Cultura, esporte e lazer. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26461
- PLL 66/2026 (id 26530): INSTITUI A “ROTA DAS COLÔNIAS” NO MUNICIPIO DE CAMPO LARGO, COMPREENDENDO O CONJUNTO DE ESTABELECIMENTOS, PROPRIEDADES RURAIS, IGREJAS, MUSEUS E ATRATIVOS NATURAIS QUE RESGATAM E PRESERVAM A HISTÓRIA DA IMIGRAÇÃO E AS TRADIÇÕES RURAIS LOCAIS.
***COM SUBSTITUTIVO GERAL*** Tema: Cultura, esporte e lazer. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26530
- PLL 72/2026 (id 26550): ALTERA LEI MUNICIPAL N° 3.820, DE 21 DE NOVEMBRO DE 2024, QUE DISPÕE SOBRE O CONSELHO MUNICIPAL DE ESPORTES, CRIA O FUNDO MUNICIPAL DE ESPORTES – FME E DÁ OUTRAS PROVIDÊNCIAS. Tema: Cultura, esporte e lazer. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26550
- PLL 88/2026 (id 26841): INSTITUI O DIA MUNICIPAL DA CAPOEIRA, A SER COMEMORADO ANUALMENTE NO DIA 15 DE JULHO, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26841
- PLL 95/2026 (id 26991): INSTITUI O PROGRAMA DE INCENTIVO AO KARATÊ NO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26991
- PLL 96/2026 (id 26992): INSTITUI O PROGRAMA MUNICIPAL DE CAPOEIRA NO MUNICIPIO DE CAMPO LARGO E DÁ OUTRAS PROVIDÊNCIAS. Tema: Outros. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26992
- PLL 97/2026 (id 26994): INSTITUI O PORTAL MUNCIPAL DAS ENTIDADES DECLARADAS DE UTILIDADE PÚBLICA, DESTINADO Á PUBLICIDADE, TRANSPARENCIA E CONSULTA DAS INFORMAÇÕES RELATIVAS ÀS ENTIDADES RECONHECIDAS COMO DE UTILIDADE PÚBLICA NO MUNICIPIO DE CAMPO LARGO, E DÁ OUTRAS PROVIDÊNCIAS. Tema: Homenagens, nomes e datas. Situação: Em tramitação (ainda não votado em sessão ordinária até a data da coleta). Autoria conjunta: não. Fonte: https://sapl.campolargo.pr.leg.br/materia/26994

### TOMAZINA

Não apresentou Projeto de Lei do Legislativo neste recorte de 2026.

Temas (classificação por IA, não revisada): nenhum projeto de lei do Legislativo neste recorte.

Nenhum projeto de lei do Legislativo com a autoria desta pessoa neste recorte.

## Totais da Câmara neste recorte

- Sessões ordinárias: 26
- Vereadores: 15
- Presenças somadas (cada vereador em cada sessão): 388
- Faltas com justificativa somadas: 2
- Faltas sem justificativa somadas: 0
- Registros de votação baixados: 1404
- Votos individuais baixados: 20928
- Projetos de Lei do Legislativo de 2026: 100
- Desses, aprovados em sessão ordinária: 50
- Desses, rejeitados em sessão ordinária: 0
- Desses, em tramitação: 50

## O que ficou de fora, de propósito

- Sessão extraordinária.
- Projeto de Lei do Executivo (proposta da Prefeitura).
- Requerimento, moção, veto e outros tipos, na lista de projetos. O voto neles entra na conta de votos.
- Projeto de lei de 2025 votado em 2026 (por exemplo o PLL 110/2025, rejeitado na sessão 776). Ele não entra nos 100 de 2026.

## Como repetir

Na pasta do projeto, rode:

    python dados/tratados/gerar_atuacao_vereadores_2026.py

O programa lê os brutos de novo e reescreve `atuacao_vereadores_2026.json`, `atuacao_vereadores_2026.csv` e este relatório. Não edite esses três arquivos na mão.

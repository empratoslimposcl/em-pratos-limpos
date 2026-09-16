# Sondagem sobre gastos da Câmara e dos vereadores

Data da sondagem: 15/09/2026.

## Resumo

A Câmara Municipal de Campo Largo tem um Portal da Transparência separado do SAPL. Ele reúne consultas de despesas, pagamentos e folha de pagamento. Os resultados são preparados para aparecer em tabelas no navegador, mas não encontrei uma forma pública e estável de baixar esses dados em CSV, planilha ou JSON.

Uma consulta automática pequena foi tentada. O próprio portal bloqueou a consulta com uma verificação de segurança e não devolveu os registros. Por isso, não foi salva uma amostra de gastos. Insistir com novos pedidos poderia desrespeitar o servidor e não foi feito.

Hoje, não recomendo tratar essa fonte como pronta para alimentar o painel automaticamente. Antes, seria preciso obter da Câmara ou da empresa responsável um meio autorizado e estável de baixar os dados.

## Onde procurei

### Site oficial da Câmara

- Página inicial: https://campolargo.pr.leg.br/
- Seção de transparência: https://www.campolargo.pr.leg.br/transparencia
- Link oficial para o Portal da Transparência: https://camaracampolargo.atende.net/transparencia/

A seção de transparência do site oficial informa que o portal reúne execução orçamentária e financeira, licitações, contratos e informações de pessoal.

### Portal da Transparência

O portal apresenta, entre outras, estas consultas:

- Grupo de despesas: https://camaracampolargo.atende.net/transparencia/grupo/despesas
- Pagamentos: https://camaracampolargo.atende.net/transparencia/item/pagamentos
- Análise da despesa: https://camaracampolargo.atende.net/transparencia/item/analise-da-despesa
- Ajuda de custos e adiantamento: https://camaracampolargo.atende.net/transparencia/item/ajuda-de-custos-adiantamento
- Grupo de pessoal: https://camaracampolargo.atende.net/transparencia/grupo/pessoal
- Pagamentos por funcionário: https://camaracampolargo.atende.net/transparencia/item/relacao-funcionario-x-pagamentos
- Salário bruto: https://camaracampolargo.atende.net/transparencia/item/salario-bruto
- Salário líquido: https://camaracampolargo.atende.net/transparencia/item/relacao-funcionario-x-salario-liquido
- Resumo da folha de pagamento: https://camaracampolargo.atende.net/transparencia/item/resumo-folha-de-pagamento
- Cargo político: https://camaracampolargo.atende.net/transparencia/item/cargo-politico
- Agente político: https://camaracampolargo.atende.net/transparencia/item/agente-politico

A consulta de cargo político oferece escolha de mês e ano e filtros por nome, matrícula, admissão, horas mensais e regime. Isso confirma que a página foi feita para mostrar uma tabela, não apenas documentos em PDF.

Não encontrei uma consulta chamada “diárias” nem uma consulta claramente identificada como gasto individual de vereador. “Ajuda de custos e adiantamento” pode conter assunto relacionado, mas não foi possível confirmar se há separação por vereador.

### Verba de gabinete

A Câmara informa oficialmente que não existe verba de gabinete ou cota administrada individualmente por vereador:

https://www.campolargo.pr.leg.br/transparencia/verbas-de-gabinete

Segundo essa página, as despesas dos gabinetes são pagas de forma centralizada pelo orçamento geral da Câmara. A página também informa que os assessores são servidores comissionados da Câmara.

Isso significa que não se deve procurar ou exibir uma “cota parlamentar” como se ela existisse em Campo Largo. O que existe para consulta são despesas gerais da Câmara e informações de pessoal.

## Formato dos dados

As consultas do Atende.Net usam filtros e mostram os resultados em tabelas no navegador. Portanto, não são apenas PDFs ou imagens.

Porém, há limitações importantes:

- Não foi encontrada uma API pública documentada.
- Não foi encontrado um link público direto para CSV ou planilha.
- Na consulta de cargo político, a opção interna de “Dados Abertos” estava desativada.
- Os registros só são solicitados depois que a pessoa escolhe os filtros e clica em “Consultar”.
- A tentativa automática de consultar apenas um mês foi recusada com a mensagem de que a verificação de segurança identificou “atividade incomum” e restringiu temporariamente o acesso.

Assim, o dado é estruturado para uso dentro da página, mas não está oferecido de forma adequada para uma coleta automática confiável.

## Sistema próprio ou de terceiro

O Portal da Transparência não é um sistema desenvolvido apenas para Campo Largo. Ele usa a plataforma Atende.Net, da IPM Sistemas Ltda.

Fontes:

- Página da plataforma: https://www.ipm.com.br/solucoes/atende-net/
- Termos de uso: https://news.atende.net/docs/nws_termos_de_uso_atende.html

A própria página mostra o nome da IPM e declara “2026 - IPM Sistemas Ltda. Todos os Direitos Reservados”. A IPM apresenta o Atende.Net como um sistema de gestão pública em nuvem, com contabilidade, recursos humanos, folha de pagamento e portal para cidadãos. É uma plataforma usada por diferentes órgãos públicos.

Isso pode facilitar uma integração futura se a IPM oferecer uma saída oficial. Também cria dependência de uma empresa e de páginas que podem mudar sem aviso.

## Limites, cadastro e termos

Foi possível abrir as páginas e os formulários sem cadastro e sem autenticação.

Não encontrei um número publicado de pedidos permitidos por minuto ou por dia. Mesmo sem um limite escrito, a proteção automática restringiu a primeira consulta de registros feita por navegador automatizado.

Os termos do Atende.Net, versão 2.0 de 16/08/2022, dizem que:

- o acesso é limitado, revogável e deve se restringir às atividades autorizadas;
- o usuário não deve fazer engenharia reversa nem descompilar o sistema;
- recursos podem ser retirados sem aviso pela entidade contratante;
- o serviço pode ser suspenso quando o uso violar os termos;
- dúvidas podem ser enviadas para privacidade@ipm.com.br.

Os termos não dizem claramente se a coleta automática das tabelas públicas é permitida. Essa dúvida não deve ser decidida pelo projeto sozinho.

## Amostra

Nenhuma amostra de registros foi salva.

Foi tentada uma única consulta de agosto de 2026 na página “Cargo Político”. O portal respondeu com bloqueio temporário da verificação de segurança, sem devolver a tabela. Não houve novas tentativas.

## Recomendação

Ainda não dá para incluir esses gastos no painel com a qualidade exigida pelo projeto.

Há informação pública útil e organizada no Portal da Transparência. Ela cobre despesas gerais, pagamentos e folha. Também há uma declaração oficial de que Campo Largo não possui verba de gabinete individual.

O problema é a atualização automática. Não foi encontrada uma saída pública em CSV, planilha ou API. A consulta automática foi bloqueada. Raspar as tabelas visíveis seria frágil, poderia parar quando a plataforma mudasse e tem uma dúvida de autorização nos termos de uso.

O próximo passo recomendado é o Vinicius decidir se deseja pedir à Câmara, pelo Serviço de Informação ao Cidadão, uma destas opções:

1. um endereço oficial de dados abertos para despesas, pagamentos, folha e agentes políticos;
2. a ativação do botão “Dados Abertos” nas consultas;
3. uma confirmação escrita de que a coleta automática, lenta e com poucos pedidos, é permitida.

Canal oficial do Serviço de Informação ao Cidadão:

- Página: https://www.campolargo.pr.leg.br/transparencia
- E-mail informado pela Câmara: sic@cmcampolargo.pr.gov.br

Essa decisão é do Vinicius. Até existir uma saída autorizada e estável, o painel poderia apenas apontar para as páginas oficiais, sem copiar os valores para dentro do projeto.

---
title: Projeto de BI na prática
updated: 2024-08-08 13:45:35Z
created: 2024-05-27 20:23:08Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

[toc]

# Carga Staging

Momento em que passamos os dados da base OLTP para o Staging OLAP. Depois, faremos a divisão e carga de nossas tabelas em Fato e Dimensão. Nós fizemos a carga no OLAP apenas das bases que queriamos do OLTP. Agora dividiremos em Dimensão e Fato.

## Criação das conexões OLTP e OLAP

Para isso, usando o talend, criamos uma conexão com nossa base OLTP e outra para nosso OLAP (Origem - Destino), para isso, ir em "metadata" e "DB Connection". Botão direito e ai "criar conexão". Seguir o Wizard. Ao final, colocar o login e senha da base OLTP do SQL Server (conexão somente de leitura). Exemplo de conexão:  
![f838c29f4901fdfe0209adea041a29ec.png](../_resources/f838c29f4901fdfe0209adea041a29ec.png)

Seguir os mesmos passos para a conexão da base OLAP porém muda o login, senha e instancia. Exemplo conexão OLAP:  
![58e811215aeee69a972e25034568e679.png](../_resources/58e811215aeee69a972e25034568e679.png)

Geralmente em ambientes profissionais, as bases OLAP e OLTP estão em servidores diferentes para uma melhor performance, com isso não precisariamos do parâmetro "INSTANCE=OLAP", porém aqui fizemos as duas instancias no mesmo servidor, por isso precisamos desse parametro adicional.

Com as conexões criadas, podemos clicar na base OLTP e clicar em "retrieve schema", dar next e selecionar todas as tabelas que queremos, depois damos next novamente, com isso temos a estrutura de nosso banco de dados OLTP.

## Job de Carga de dados

Clicar com botão direito em "Job Designs" e criar uma pasta chamada "Staging", para todos os jobs relacionados ao Staging. Clicar na pasta com botão direito e ai sim criar o job. Apenas colocar o nome e descrição. Com isso, será aberta a pagina de design do job.  
<br/>Temos que colocar uma atividade de input chamada "t_DBInput" a qual recebe nossos dados de input, iremos para a configuração dessa atividade, clicar em "componente" e selecionar um DB.   
![bfe2c150ba0e09b8fa4ac8a7e5f1553c.png](../_resources/bfe2c150ba0e09b8fa4ac8a7e5f1553c.png)  
Em property type, escolher repositório. Clicar no campo em branco que aparecerá e depois escolher a base de dados OLTP (conexão que já criamos). Feito isso, precisamos de um schema, também escolheremos repositório, clicar nos "..." e escolher a tabela desejada, depois clicar em "guess query", ao final a configuração deve ser algo assim:  
![cdff191239c31896b49bc63925cc6ae1.png](../_resources/cdff191239c31896b49bc63925cc6ae1.png)  
<br/>

A próxima atividade se chama "tMap" que faz o mapeamento, ligaremos a entrada de dados "t_input" com o mapeamento "t_map", para isso, clicar na atividade, clicar com botão direito, selecionar "row" depois "main" e conectar com a outra atividade.

Feito isso, precisaremos de uma saida, sendo ela a "tDBOutput" e informaremos a esse elemento onde nossos dados irão sair. Clique no elemento e depois em componente, igual fizemos com o input. Escolher o database, no meu caso o SQL Server e a base OLAP (configuração do property type) de nosso repositório de conexões que criamos no primeiro momento. No campo "tabela", colocar o nome da tabela de saída entre aspas, abaixo em "Action on table" selecionar "Create Table if not exists" e ação do dado será "inserir". Feito isso, o próximo passo é ligar o tMap ao tDBOutput, será do mesmo jeito que fizemos antes. Ao final o output deve ser parecido com esse:  
![d94c3cf481257e9732160dd6fea86b43.png](../_resources/d94c3cf481257e9732160dd6fea86b43.png)  
Agora precisamos fazer o mapeamento, duplo clique em tMap:  
![23a31d1003d431b2c319627697ca6bb1.png](../_resources/23a31d1003d431b2c319627697ca6bb1.png)  
Acima vemos a entrada e saída de dados, então temos as colunas de entrada porém não temos colunas de saída. Então com CTRL clique em todos os campos da tabela de entrada e arraste até a tabela de saída. Ficando algo assim:  
![fc20516c86449ba6a6d0f9787ab827d9.png](../_resources/fc20516c86449ba6a6d0f9787ab827d9.png)  
Depois, só clicar em ok e yes. Feito isso, lá em nosso output foi liberado o botão "sync columns", ao clicar nele nosso job estará pronto.  
<br/>Ao final, o job deve ser algo assim:  
![e7bff21df53e312bce5f3942e695f9e7.png](../_resources/e7bff21df53e312bce5f3942e695f9e7.png)  
<br/>Clique em Run, nessa aba de cofigurações temos o parametro line limit, então por exemplo, a cada 100 linhas, ele grava a informação e faz o commit, isso serve para liberar memória em disco, então digamos que temos uma tabela de 1 milhão de linhas, então a cada 1000 linhas poderiamos fazer um commit e começa a gravar de novo, se deixarmos um valor muito alto pode causar um overflow e travamentos acontecerão, o processo ficará mais lento. Em meu caso, selecionarei o line limit e colocarei em 1000. E por fim, clique em rodar.

Para campos incrementais (ex: ID), no schema OLAP (output) o campo deve ser configurado apenas como INT e não como INT Incremental, pois o incremento ja vem do OLTP. Nenhum incremento em Data Warehouses! Não mudamos nada do OLTP para OLAP, apenas lemos. (OLTP apenas leitura e OLAP todas as permissões, isso é feito na criação dos usuários no SQL Server).

# Divisão do OLAP em Dimensão e Fato

Agora será feita a divisão de nosso OLAP em dimensão e fato, dimensão é o mais complicado de se fazer, pois teremos vários joins de varias tabelas usando as chaves artificiais para criar apenas 1 tabela de dimensão, deve ser feito com atenção e devemos entender bem de nossos dados antes de fazer isso.

## Criação das tabelas de Dimensão

Devem ser criadas as tabelas de dimensão de acordo com as regras de negócio, é simples, apenas criamos tabelas vazias com os campos que queremos de cada tabela, por exemplo:  
![c946b99c0aded5df1001a856a24c363f.png](../_resources/c946b99c0aded5df1001a856a24c363f.png)

Criamos uma tabela vazia chamada "DIM_SUB_CATEGORIA" com os campos especificados acima e as chaves artificiais, as quais o talend lidarão.

## Carga de dados do Staging para Dimensão

Agora que ja temos nossas tabelas de dimensão criadas com as chaves artificiais e nossos dados dentro do Staging no OLAP, iremos carregar os dados do Staging para as tabelas de dimensão usando o SCD e as chaves artificiais.

Para isso, em Job Design no Talend criaremos uma outra pasta chamada "DIM". Não se esqueça de fazer um retrieve schema na conexão OLAP para as tabelas de dimensão aparecerem.

Para fazer o Job com uma chave artificial precisamos escolher a atividade "tDBSC" para tratarmos da chave estrangeira com o SCD do talend. Ao configurar o tMap, nós não alimentamos a chave artificial, ficando assim: ![e40c902603b78a247d3c40b1ed46b603.png](../_resources/e40c902603b78a247d3c40b1ed46b603.png)

A chave artificial "SK" será alimentada pelo componente SCD.

Clicamos no componente de output tDBSC que criamos, clicamos em componente e depois em SCD editor. Nesse projeto utilizaremos o SCD tipo 1. Devemos pegar todos os campos do lado esquerdo (menos a chave artificial) e no meu caso o codigo da empresa (chave primária de nossa tabela) deve ficar em source keys e jogar no tipo 1.

Em Surrogate Keys (chave artificial) devemos escrever o nome da nossa chave artificial, no meu caso é "SK_EMPRESA". Em creation seleciono Table Max + 1 ou seja, sempre pegue o ultimo registro da tabela + 1. Source Key é o campo em que irá ser criada a chave encima. E no final, deve ser algo assim:![085901e94e2a23e7e4ab92bac67886d9.png](../_resources/085901e94e2a23e7e4ab92bac67886d9.png)

Um outro exemplo de SCD:

![6b417aa3ba93bb95960fd9159e73dc77.png](../_resources/6b417aa3ba93bb95960fd9159e73dc77.png)

Podemos fazer filtros no tMap para levar apenas os dados que queremos, por exemplo:  
![c3286035238e20b8213c013621822f49.png](../_resources/c3286035238e20b8213c013621822f49.png)  
Aqui, levaremos apenas os dados em que o código de cargo é 2 ou 3.

## Ler dados de duas tabelas e ter output de 1 tabela

Para fazer um join entre tabelas e usar duas tabelas para ter o output de 1, no talend usamos a atividade "tAggregateRow". Então, usaremos as 2 tabelas de input, 1 tMap, 1 tAggregateRow e 1 saida (tabela que queremos que nossos dados fiquem, nesse caso, a DIM_GERENTES) do tipo tDBSCD. O tAggregateRow deve ter o mesmo schema da tabela de saida. Ainda na configuração do tAggregateRow, ligamos essa atividade com a atividade de saída, vamos na configuração de componenente do Aggregate e em "grupo por" adicionamos todos os campos, clicando no "+":  
![7557fa7fd57a1529e50b1e03d3585f33.png](../_resources/7557fa7fd57a1529e50b1e03d3585f33.png)  
A configuração do tAggregateRow deve ser como essa acima.

Uma das partes mais importantes dessa agregação é linkar as tabelas no tMap. Temos que linkar todas as chaves primarias das 2 tabelas que queremos fazer o "join", depois clicamos em "tMap Settings" > "Match Model" > "Todas as Combinações" > "Ok" e na opção "Join Model" usaremos o inner join (ou outro que julgue necessário). Deve ficar assim:  
![c53c12f96664a29b742b47f591019513.png](../_resources/c53c12f96664a29b742b47f591019513.png)

Agora ligamos o tMap ao Aggregate, clicamos novamente no tMap e ligaremos os campos das tabelas com o da saída. Ficando dessa maneira:  
![95b65a12e9e7bf88eab53a2c7afd1d07.png](../_resources/95b65a12e9e7bf88eab53a2c7afd1d07.png)

Por ultimo, configuraremos o SCD:  
![2577f302f95a9059290bf7f5c5b55897.png](../_resources/2577f302f95a9059290bf7f5c5b55897.png)

E o tAggregateRow ao final deve ser esse:  
![7506e7977ffcd0e808b05aae0c7347cd.png](../_resources/7506e7977ffcd0e808b05aae0c7347cd.png)

Truncate elimina dados e os espaços alocados, melhor que delete. Delete mantém espaço alocado, truncate é mais performatico. Porém delete tem Where.

O job geral das tabelas dimensão ou fato devem seguir a sequencia correta de criação inicial das tabelas.

# Organização e Relacionamento de tabelas no PowerBI

Nossa tabela fato deve ficar ao centro, ela é nossa principal tabela, em meu caso, é a Fato_Venda. As outras tabelas de dimensões devem ficar ao redor da fato principal mas organizadas por assunto. Então por exemplo, eu tenho a tabela dim_material, logo todas as outras tabelas que tem algo envolvido com material, ficarão perto dela, pois a dim_material é a principal tabela de materiais. Isso seria um modelo SnowFlake.![249680a96a6d694e0707af33132a6faa.png](../_resources/249680a96a6d694e0707af33132a6faa.png)  
Ficando mais ou menos como acima.

Agora podemos fazer os relacionamentos começando de nossa tabela fato principal. No meu caso começarei com a fato_venda com a tabela de empresa. Sempre começar dos campos mais importantes aos menos importantes. Por isso as chaves artificiais criadas no momento de ETL são importantes, usamos elas para fazer os relacionamentos das tabelas do PBI. Nós pegamos a tabela Fato principal e linkamos com as tabelas chave de dimensão, ou seja, as tabelas de dimensão que se relacionam com as outras dimensões.

Relações das principais dimensões com o fato principal:![4057d00d0d7f18e5acbbf7eaee1d2937.png](../_resources/4057d00d0d7f18e5acbbf7eaee1d2937.png)

Agora, só ligar as dimensões principais com as dimensões secundárias. E aqui ainda usamos as chaves artificiais. Aqui eu relacionei a dimensão material com suas dimensões secundárias:  
![15e21258b66b9de76a1d4fe59cc42faf.png](../_resources/15e21258b66b9de76a1d4fe59cc42faf.png)

Feito isso, temos o relacionamento pronto:  
![375cd68897d998f3db2a11b8d3451268.png](../_resources/375cd68897d998f3db2a11b8d3451268.png)

Vemos que não temos nenhuma tabela flutuando, sem conexão com uma tabela fato com alguma dimensão ou fazendo o snowflake igual feito com a dim_material.

## Qual a melhor forma de validar nossos relacionamentos?

Como saber se nossos relacionamentos estão funcionando da maneira correta? A melhor forma é abrindo uma página de rascunho no PBI, colocar uma tabela e nela colocar algumas informações importantes de forma a testar o relacionamento das tabelas dimensão com a fato. Em meu caso farei uma hierarquia de informações de vendas, ou seja, começaremos com o nome da empresa (se é matriz ou filial) e vamos fazendo o drill-down com os nomes dos gerentes das empresas, depois os nomes dos funcionários alocados a cada gerente, e por ultimo, trarei da fato venda o valor unitário:

![c7b888a78d999ef17b33768afbd82a72.png](../_resources/c7b888a78d999ef17b33768afbd82a72.png)

Nos podemos confirmar esse valor no SQL:

![54e7d6f746951b173fe7d3ff982c8827.png](../_resources/54e7d6f746951b173fe7d3ff982c8827.png)

Como podemos ver, é exatamente o mesmo valor no PowerBI, a soma do valor unitário bate, e isso significa que nossa relação foi feita corretamente.

## Ajustes de tipos de dados (para otimização do PBI)

No PBI campos com o tipo número são otimizados para facilitar a criação de medidas, calculos, etc. Porém alguns campos (em nosso caso as chaves artificiais) também são desse mesmo tipo e isso consome processamento mesmo que nós não façamos calculos ou medidas com esses campos, o PBI processa eles como números e deixa ali eles preparados para os cálculos, por isso devemos mudar a tipagem deles. Mudaremos eles para varchar (texto). Isso é feito principalmente para chaves artificiais, IDs e códigos ou qualquer número que saibamos que não iremos realizar nenhum calculo (ex: CPF, RG, Nº de Matrícula).

## Criação e relacionamento de Dimensão Data

A dimensão de calendário é crucial por várias razões, todas relacionadas à necessidade de analisar dados ao longo do tempo. É essencial para transformar dados em informações valiosas e acionáveis, proporcionando a base necessária para uma análise temporal robusta e consistente em ambientes de BI.

Para isso precisamos fazer uma nova tabela com dados de data baseados em outras tabelas, precisamos que as datas se iniciem no dia primeiro do mes 01 e se encerrem no dia 31 do mes 12.

Poderiamos pegar os dados de venda, porém não necessariamente a primeira venda do ano foi feita no primeiro dia do ano e nem a ultima venda do ano no ultimo dia do ano, então para isso usei os dados do campo "data emissão" da tabela fato venda, logo peguei o StartMonth e FirstDate do campo Data Emissão.

Para o EndDate usei a data de orçamento, pois o orçamento é projetado até o final do ano. Logo usei o EndOfMonth e LastDate no campo Data_Ref da tabela Fato_Meta. Tudo isso dentro de uma função calendar do DAX:

"<span style="color: #3165bb;">CALENDAR</span><span style="color: #000000;">(</span><span style="color: #3165bb;">STARTOFMONTH</span><span style="color: #000000;">(</span><span style="color: #3165bb;">FIRSTDATE</span><span style="color: #000000;">(</span><span style="color: #001080;">FATO_VENDA</span><span style="color: #001080;">\[DATA_EMISSAO\]</span><span style="color: #000000;">)),</span> <span style="color: #3165bb;">ENDOFMONTH</span><span style="color: #000000;">(</span><span style="color: #3165bb;">LASTDATE</span><span style="color: #000000;">(</span><span style="color: #001080;">FATO_META</span><span style="color: #001080;">\[DATA_REF\]</span><span style="color: #000000;">)))</span> "

Isso até poderia funcionar para outras ocasiões, mas não para mim. Então usei variaveis. Criamos uma variavel chamada DIA_INI e forçamos que ela receba o valor "01", farei outra variavel chamada MES_INI que recebe a expressão MONTH que recebe a expressão FIRSTDATE do campo Data Emissão da tabela Fato Vendas, ou seja, eu pego apenas o mês da primeira data do campo Data Emissão da tabela Fato Venda. Faço a mesma coisa porém para a variável ano, substituo o MONTH por YEAR e temos o ano inicial.  
<br/>Para as datas finais é o mesmo processo, porém invés de "01" em DIA_INI será "31" e o nome da variavel muda para DIA_FIM, onde for FIRSTDATE será LASTDATE e invés de pegarmos o campo Data Emissão da Fato Venda, pegaremos o campo Data Ref da Fato Meta.

Agora podemos usar um RETURN e usar o Calendar, dentro do Calendar usaremos a função DATE para montar essa data. O primeiro DATE leva as variaveis "ANO_INI", "MES_INI" e "DIA_INI", já o segundo DATE leva as variaveis "ANO_FIM", "MES_FIM" e "DIA_FIM". Assim, temos montada nossa dimensão de calendário:  
![9e58b6bcb062006ee3aa94933c93bd1a.png](../_resources/9e58b6bcb062006ee3aa94933c93bd1a.png)

Não podemos nos esquecer de marcar essa tabela como tabela de data e definir a coluna acima como coluna de data.

Agora iremos criar novas colunas baseadas na coluna DATA_REF (coluna inicial que criamos com as datas) para nos ajudar na criação do dashboard, a primeira coluna será a MES que conterá o mes em formato numérico, a segunda coluna será o ANO que conterá o ano da data incial, a terceira coluna será MESNOME que conterá o mes em formato de texto (nome do mes) com apenas 3 caracteres para nos ajudar em questão de espaço, a próxima coluna é a TRIMESTRE a qual usei o format com a data e o "q" de quarter concatenado com um "T" para simbolizar o trimestre, a próxima coluna será a MES/ANO a qual tem o mês em formato numério e o ano. E assim temos nossa dimensão de calendário:|  
![dbfa62ccdd8de91b7c48079dd937cda5.png](../_resources/dbfa62ccdd8de91b7c48079dd937cda5.png)

Agora, em nosso modelo temos que fazer a relação dela, pois está flutuando, faremos a relação dela pelo campo DATA_REF com a tabela FATO_VENDA no campo DATA_EMISSAO e também ligaremos nossa dimensão de calendário com a nossa FATO_META usando o campo DATA_REF o qual existe em ambas as tabelas, ficando assim o nosso modelo final:  
![2ae4a1eee77614d54affdedd5cc2c681.png](../_resources/2ae4a1eee77614d54affdedd5cc2c681.png)

## Criação da Tabela de Medidas

É aqui onde criamos todas as KPIs que precisamos. Para isso criamos uma nova tabela chamada \_Medidas e nela criamos nossos KPIs, por exemplo:  
![d6adfb77792d62a7d69636dcbe67824d.png](../_resources/d6adfb77792d62a7d69636dcbe67824d.png)  
Acima nos temos algumas KPIs simples, Total Faturado que é a soma de Quantidade de Vendas \* Valor Unitário (usamos SUMX para isso, o qual soma o resultado de uma expressão), temos o Total Meta que é simplesmente a soma do valor da meta, e temos a Porcentagem Realizada, a qual nos informa quantos % da meta foi realizada por cada vendedor ou gerente, depende de como queremos visualizar, para isso dividimos o Total Faturado pelo Total Meta, e temos isso:  
![51591b434bef2a6f07947b1b75775823.png](../_resources/51591b434bef2a6f07947b1b75775823.png)  
Temos o nome fantasia da empresa (matriz ou filial), temos o nome dos Gerentes de cada empresa (filial ou Matriz), temos os nomes dos vendedores alocados a cada gerente, temos o total faturado, total da meta e a % Realizado, **com isso nos temos o Drill-Down das informações de venda, temos uma granularidade, um nível de detalhamento, nós sabemos que o vendedor Malcon Dexter o qual o superior responsável é o Tiago Fielder da empresa Matriz teve um Total Faturado de 1.019.560,33 reais, a meta dele era 1.2244.273,95 e sabemos que ele ainda não bateu a meta dele e está em 88% da mesma.** E ainda poderiamos fazer com menos granularidade, apenas com dados de gerentes.

&nbsp;

![044eeb79be359a5b586039bc39e95fc4.png](../_resources/044eeb79be359a5b586039bc39e95fc4.png)

Agora nós temos mais informações, como o custo da venda, Lucro e % de Lucro, o Custo da venda foi feito somando os resultados da multiplicação entre quantidade de venda e valor custo. O Lucro é simplesmente a subtração de total faturado e custo de venda. A % de Lucro é a divisão de total faturado e custo de venda - 1.

### Medidas Rápidas

Podemos usar as medidas rápidas as quais trazem varias medidas padrões já prontas para nós. E nós temos as de inteligencia de dados temporais, nós usaremos elas agora. Faremos primeiro o Month Over Month (MOM) que aqui seria a opção Alteração de mês a mês. Ou podemos fazer também o Year Over Year:  
![11301cee2416af539c463b05ffd19bdc.png](../_resources/11301cee2416af539c463b05ffd19bdc.png)  
Usar medidas rápidas para mexer com data é bem melhor que fazer na mão.

**Rápidas anotações:**

> ****YOY** significa "Year Over Year" e refere-se à comparação de um valor em um determinado período com o mesmo período no ano anterior. Esta métrica é útil para avaliar tendências de longo prazo e eliminar variações sazonais.**
> 
> ****MOM** significa "Month Over Month" e refere-se à comparação de um valor em um determinado mês com o valor do mês anterior. Esta métrica é útil para identificar mudanças de curto prazo e responder rapidamente a flutuações recentes.**
> 
> - **YOY**: Usado para identificar tendências anuais e analisar o crescimento ou declínio de métricas-chave ao longo dos anos. Ajuda a entender o desempenho do negócio em um contexto sazonal ou anual.
> - **MOM**: Usado para monitorar o desempenho mensal e responder rapidamente a mudanças recentes. Ajuda a identificar padrões de curto prazo e tomar decisões rápidas baseadas em dados mensais.

&nbsp;

Agora vamos fazer YOY e MOM mas com relação ao Valor (antes fizemos em relação ao faturamento). Aqui farei na mão invés de usar as medidas rápidas para fins de aprendizado. O MoM de Valor é feito assim: **MoM $ = CALCULATE(SUMX(FATO_VENDA, FATO_VENDA\[QTD\]\*FATO_VENDA\[VAL_UNIT\]), PREVIOUSMONTH(D_CALENDAR\[DATA_REF\]))**

Para YoY só muda o nome e o que invés de usarmos previousmonth usamos sameperiodlastyear. Vamos analisar um exemplo:  
![27a651ee8a79cd90e4b621b5fa229b7f.png](../_resources/27a651ee8a79cd90e4b621b5fa229b7f.png)

Podemos ver por exemplo, que o mês 02 de 2017 em relação ao mês 01 obteve uma queda de 39% no total de faturamento. Porém no mês 03 comparado ao 02 tivemos um aumento de 59%. Ao final do ano de 2017 podemos fazer a analise de YoY:  
![12c45eed7ec0b764f51358a424eca15f.png](../_resources/12c45eed7ec0b764f51358a424eca15f.png)  
Aqui vemos que o mês 01 de 2018 comparado ao mesmo mês do ano de 2017 teve um aumento de 38% no faturamento.

### Medidas de Apoio em Filtro

Essas medidas são cálculos ou expressões que não são necessariamente mostrados diretamente em relatórios ou dashboards, mas que suportam ou facilitam a criação de outras medidas mais complexas, visualizações e análises.

Por exemplo, podemos ter a data da última venda (ou ultimo mês de venda), então fazer essa expressão: Ultimo Mes de Venda = CALCULATE(MAX(FATO_VENDA\[DATA_EMISSAO\]), ALL(FATO_VENDA))

Acima pegamos o valor Maximo do campo data emissão e forçamos que ele seja o último independente do contexto (não sofre filtragem).  E ainda podemos usar um Format para termos apenas o Mês e Ano: Ultimo Mes de Venda = FORMAT(CALCULATE(MAX(FATO_VENDA\[DATA_EMISSAO\]), ALL(FATO_VENDA)), "MM/YYYY").

Nós usamos essas medidas para fazer coluna com condições em nossa dimensão calendário, então fazemos: Ultimo Mes = IF(\[Ultimo Mes de Venda\]=D_CALENDAR\[MES/ANO\], "S", "N"), isso nós retorna uma coluna que só é preenchida com "S" quando a data é 10/2019, a última data de venda. Isso nos vai ajudar a fazer um filtro para trazer sempre o último mês vigente. Fizemos isso pro mes, agora farei para o ano. E aqui temos as colunas auxiliares:  
![bce778990e95533400d374679746139b.png](../_resources/bce778990e95533400d374679746139b.png)

Elas nos ajudarão a fazer filtros para vermos o ano inteiro atual ou o mês atual.

### Funções para interpretação

Aqui faremos funções que nos ajudam a interpretar os dados de forma mais intuitiva, sabendo se algo esta crescendo ou caindo, por meio de setas, emojis, imagens etc. No primeiro exemplo nós usaremos o SWITCH invés do IF pois teremos mais de 2 opções. Iremos fazer para o MoM. Fiz a seguinte função:  
KPI MoM = SWITCH(TRUE(), \[Total Fat\] = \[MoM $\], "⏵", \[Total Fat\] &lt; \[MoM $\], "⏷", \[Total Fat\] &gt;= \[MoM $\], "⏶", "0")  
<br/>Usando o SWITCH fiz uma função que verifica se o total faturado é maior que o MoM, igual ou Menor e atribuí simbolos a isso. Fiz para YoY também e esse foi o resultado:   
![0ea2bd932307a5d73c223f4c137e32ce.png](../_resources/0ea2bd932307a5d73c223f4c137e32ce.png)

Além desses KPIs informativos também fiz mais dois bem parecidos, o primeiro é o KPI Meta o qual verifica se a meta foi batida ou não: KPI Meta = SWITCH( TRUE(), \[%Realiz\] &lt; 1, "🟠", \[%Realiz\] &gt;= 1, "🟢", "0" ), aqui usamos o 1 pois ele equivale a 100%.

E também fiz o KPI Lucro: KPI Lucro = SWITCH( TRUE(), \[Lucro\] = 0, "🟡", \[Lucro\] &lt; 0, "🟠", \[Lucro\] &gt; 0, "🟢", "0" ) ele verifica se o lucro é = a 0, menor que 0 ou maior. Veja:  
![c7a830595d8f3ee10d2aff61496e0131.png](../_resources/c7a830595d8f3ee10d2aff61496e0131.png)  
Note que apenas 1 vendedor bateu a meta, o Charles Noix com 160%, em lucro todos lucraram mesmo que pouco.

As próximas medidas de interpretação foram a junção de duas em uma:  
![654036e062b0d67588b0b110c2289625.png](../_resources/654036e062b0d67588b0b110c2289625.png)  
O MoM é a junção do KPI MoM % e o KPI de interpretação que usa emojis: MoM = IF(ISBLANK(\[MoM%\]), " ", VALUE(ROUND(\[MoM%\]\*100, 2))& "%" & " " &\[KPI MoM\]) para o YoY é a mesma coisa porém usando o YoY.

### Medidas de Apoio ao gráfico Gauge

Precisamos de duas medidas de apoio para o gráfico gauge, sendo elas a Meta Zero a qual recebe o valor 0, e o Meta 120 o qual recebe o valor de total da meta \* 1.2, isso garante que quando o gráfico bater a meta ele não acabe, tendo uma "gordurinha" de 20%. Ou seja, nosso gráfico de gauge não acabará na meta.

# Criação do Dashboard

Nós podemos fazer filtros na página inteira, assim todos os elementos pegam esse filtro. Meu primeiro dashboard será um Painel Mensal o qual exibe dados do mês atual (definido em uma medida de apoio na tabela dimensão calendário), logo usaremos como filtro o campo Mês Atual criado na dimensão calendário.
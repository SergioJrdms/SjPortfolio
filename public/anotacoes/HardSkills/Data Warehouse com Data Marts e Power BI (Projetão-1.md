---
title: >-
  Data Warehouse com Data Marts e Power BI (Projetão BI do zero Parte 2 -
  trabalhando com KPIs)
updated: 2024-08-08 13:45:16Z
created: 2024-07-23 20:41:39Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

[toc]

Nessa nova jornada de aprendizado, daremos continuidade na jornada da Paula, mais especificamente na implementação do sistema de *Business Intelligence* na empresa Ataca10.

O objetivo desse curso é fornecer uma compreensão clara sobre o que é e qual a importância dos **KPIs**, o *Key Performance Indicators*, no português, Indicadores Chave de Desempenho.

Enfatizaremos a importância do KPI e como ele se **integra na implementação do projeto** de *Business Intelligence*.

Iniciaremos o curso abordando as fases do projeto de **BI**, como todo novo tópico em nossa formação.

Nisso, descobriremos onde a implementação do KPI se encaixa no processo geral de implementação de um sistema de *BI*.

Além disso, recuperaremos um dado complementar, um *Data Lake*, com os dados necessários para podermos criar os KPIs.

Enfatizaremos também o conceito do KPI, a diferença dele para o **indicador**.

A partir disso, descobriremos que para o KPI existir é crucial trabalhar também com **dados orçamentários** e **dados de tendência**.

Falaremos sobre como as empresas obtêm seus dados orçamentários e como calculam as tendências. Daremos uma ênfase especial a um tópico chamado **critério de rateio do orçamento**, crucial no momento da implementação do KPI.

Todo este conteúdo será ensinado com exercícios práticos, continuando passo a passo a implementação do projeto de *BI* na Ataca10.

Isso proporcionará uma ideia de um contexto mais realista e prático de todos os conceitos que abordaremos durante este curso.

> O assunto KPI é um tema que gosto muito, pois ele realmente tem uma grande importância grande no projeto de *BI*.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Fases do projeto de BI</span>

Quem vem acompanhando todos os cursos dessa formação sabe que começamos desde o princípio, na parte de modelagem, e evoluímos curso a curso até o momento onde o *Data Mart* está construído e carregado, pronto para ser **consultado**.

Mas, esse curso especificamente, se aplica em que ponto do processo de implementação de *Business Intelligence*? É o que descobriremos neste vídeo.

Temos o seguinte esquema de implementação de um projeto de *Business Intelligence*.

![Esquema de implementação de um projeto de Business Intelligence. No centro da tela, o desenho de um quadrado com linhas represeto primeiro passo, a determinação da implementação do projeto de Business Intelligence. No passo seguinte, o ícone de uma casa representando a etapa de construção da base de dados gerencial. Na lateral esquerda, o ícone de banco de dados e ao lado as fontes de dados, que representam a terceira etapa. O ícone de engranagem representa a etapa do processo de ETL ou ELT. Por fim, ao lado direito, ícones que representam a última fase de projetar e carregar as bases de dados de consulta, o Data Mart.](../_resources/429abaed-349e-45e1-9919-1b3ad4d8.png)

Paula apresentou esse esquema para as pessoas executivas da Atacadez e já percorreu por ele todo. Faremos uma pequena revisão para entender todo esse processo.

O primeiro passo foi a modelagem do negócio. Paula entrevistou as pessoas usuárias, entendeu como a empresa funciona e determinou que implementaria, em um primeiro momento, o projeto de ***Business Intelligence*** para a área de vendas. Nesse primeiro passo da implementação do projeto, o resultado foi uma **matriz de dimensão indicador** que mostra como será a base gerencial que será construída.

Em seguida, baseado na matriz, passamos para o segundo passo, a **construção da base de dados gerencial**, chamada de ***Data Warehouse***. O *Data Warehouse* será uma base de dados completamente separada da base transacional da empresa e conterá apenas dados gerenciais usando as regras de negócio levantadas durante a primeira fase do projeto.

Depois, **identificamos as fontes de dados** que vamos **extrair** para gravar no *Data Warehouse*. Essas fontes de dados podem ser um ERP da empresa, um sistema proprietário local ou até mesmo planilhas de Excel, ou arquivos textos. Todos esses dados devem ser transportados para o *Data Warehouse*.

Uma forma fácil de fazer isso é, antes, concentrar todo esse dado bruto extraído, no que chamamos de *Data Lake*, que é um repositório que, além de servir de fonte de dados para o *Data Warehouse*, pode ser usado como uma fonte para estudos mais detalhados da empresa.

Passamos para o **processo de ETL ou ELT**. Como estamos lendo os dados primeiro para o *Data Lake* e depois transportamos para o *Data Warehouse*, optamos pela forma de trabalho chamada ELT, que significa **extrair, carregar e depois transformar**. Isso porque os dados já foram extraídos e carregados no *Data Lake*. Então, basta apenas transformá-los usando as regras de negócio e salvá-los dentro do *Data Warehouse*.

Finalmente, com o *Data Warehouse* construído, projetaremos e carregaremos as bases de dados de consulta\*\*, chamadas de *Data Mart*.

Os *Data Mart* serão as **únicas fontes** dos relatórios gerenciais. Podemos consultá-los usando a linguagem MDX, que inclusive aprendemos no curso anterior.

Mas, onde é que se aplica o KPI o tema desse curso? Aplicaremos o KPI como um **refinamento da informação do *Data Mart***. Dentro desse *Data Mart*, acrescentaremos novos indicadores que vão auxiliar na avaliação da performance da empresa.

Então, é sobre KPI que trataremos com mais detalhes nesse curso.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Diferença entre o indicador e o KPI</span>

Este curso tem como objetivo principal fornecer uma compreensão sobre **como utilizamos KPIs** dentro de uma **base de dados de *Business Intelligence***. Como criamos KPIs, como carregamos seus valores e como calculamos seus resultados.

Antes de iniciarmos e implementarmos um KPI no modelo da Atacadez, precisamos entender o que é KPI e como se **diferencia** de um **indicador comum** em um sistema de *Business Intelligence*. Ou seja, qual é a diferença conceitual entre um indicador e um KPI?

# Entendendo a KPI

KPI significa *Key Performance Indicator*, no português, indicadores chaves de desempenho.

Quando falamos em um indicador, estamos nos referindo a **valores numéricos** que expressam uma quantidade ou um volume em dinheiro, ou qualquer coisa que possa ser expressa em números, associado a um identificador.

Identificadores seriam, por exemplo, venda de produtos, custo de produção, preço unitário, número de viagens. Sempre temos números associados a esses identificadores. Expressamos quantidades a esses indicadores. Quando associamos essas quantidades às dimensões de uma base de dados gerencial, **transformamos esses valores em informação**.

O KPI é um conceito que precisa da existência de indicadores para ser construído. O resultado final do KPI, no entanto, não é uma quantidade, mas sim um **estado**. Este estado pode ser, por exemplo, bom, ruim, melhorando, piorando, e assim por diante.

Esclareceremos melhor esses conceitos. Temos um indicador de vendas de R$1000. É o valor de venda em um determinado período para um conjunto específico de dimensões.

O KPI, por outro lado, está associado a esse indicador de valor de venda com o seguinte conceito: essas vendas de mil unidades financeiras são ruins, mas tendem a melhorar com o passar do tempo.

Podemos então resumir o estado do KPI em duas frases básicas: **como estamos hoje e como estaremos no futuro**.

A primeira frase nos dá uma ideia de como está a nossa situação no presente, no momento atual. A segunda mostra como evoluiremos nossa situação atual no futuro, se tendemos a melhorar ou piorar.

Em ambos os casos, precisamos comparar o valor do indicador realizado, ou seja, o valor que vem das bases originais e calculadas no DW e Data Mart, com uma base de comparação, um valor.

Ambos os conceitos, "como estamos" e "como estaremos", precisam dessa base de comparação com o valor atual do indicador. Essa base de comparação são duas novas medidas associadas ao mesmo indicador, o **orçamento** e a **tendência**.

A comparação do orçamento com o realizado vai nos dar o status de "como estamos", e esse mesmo orçamento, quando comparado com a tendência, vai nos dar o status de "como estaremos".

Como obtemos o orçamento e a tendência dentro da nossa empresa é um ponto que discutiremos mais adiante em outros vídeos. A base de dados que recuperamos no vídeo anterior tem justamente os valores do orçamento e da tendência dos dados realizados carregados no DW e no Data Mart.

O que precisamos aqui, então, é **acrescentar** esses dois novos indicadores, tanto no *Data Warehouse* quanto transferi-los para o Data Mart. Em seguida, calcularemos o KPI no Data Mart.

&nbsp;

&nbsp;

# Criando tabelas no Data Warehouse

Vamos agora ao *Data Warehouse*, criar as tabelas que receberão os dados do orçamento e da tendência. No *Management Studio*, temos uma nova consulta relacionada à base de dados `DW_ATACADEZ`, que podemos visualizar acima de "Pesquisador de Objetos" do lado esquerdo. Em uma outra janela, temos nosso projeto do Visual Studio.

Lembramos que, quando criamos o *Data Warehouse*, utilizamos o *SQL Power Architect* para projetá-lo. No *Power Architect*, obtivemos os *scripts* de criação e os executamos no *SQL Server* para criar o *Data Warehouse*.

Nesta aula, vamos fazer algo um pouco diferente. Criaremos os *scripts* de criação das tabelas no *Visual Studio* e executá-los no *SQL Management Studio*. Não temos um projeto de criação do *Data Warehouse*, mas sim um projeto de criação do *Data Lake*.

### Criando um projeto

Vamos criar um novo projeto. Clicamos com o botão direito do mouse em "Solução 'DatawarehouseAtacaDez'" do lado direito do Visual Studio e adicionamos um novo projeto escolhendo as opções "Adicionar > Novo Projeto".

Será exibida uma janela, onde selecionaremos que esse projeto será do tipo "Projeto de Banco de Dados do SQL Server" do lado esquerdo. Se não estiver nos modelos recentes, podemos realizar uma pesquisa do lado superior direito por "SQL Server". Escolhemos esse tipo de projeto e clicamos no botão no canto inferior direito para seguirmos para a próxima página.

Na página seguinte, intitulada "Configurar seu novo projeto", no campo "Nome do Projeto" digitamos: `CriacaoDWOrcamentoTendencia`. Logo após, selecionamos o botão de "Criar" no canto inferior direito da página.

### Criando uma nova pasta

Após criar o projeto, selecionamos o próprio projeto "CriacaoDWOrcamentoTendencia" do lado direito, clicamos com o botão direito do *mouse* e selecionamos "Adicionar > Nova Pasta". Criaremos uma nova pasta e a chamaremos de `Tabelas`.

Na pasta `Tabelas`, clicamos novamente com o botão direito do mouse e adicionamos uma nova tabela (Adicionar > Tabela). Na janela intitulada "Adicionar Novo Item" na parte inferior temos o campo "Nome", sendo onde iremos digitar o nome da tabela, no caso: `fact_tendencia`. Logo após, clicamos em "Adicionar".

Observem que agora no canto superior esquerdo está escrito "fact_tendencia.sql\[Design\]", e na área central temos uma tabela; e abaixo uma consulta. Estamos na área de designer para gerarmos tabelas.

### Criando tabelas

Iniciamos a criação da tabela com os códigos dos IDs, que são os identificadores da tabela de fato. As tabelas de fato da tendência e do orçamento respeitarão os mesmos campos da tabela de fato `Venda`. Ou seja, teremos os 4 IDs que identificam a dimensão como chave primária e os 3 indicadores.

Podemos visualizar isso na tabela `dbo.fact_venda` do Management e expandindo "Colunas":

- id_loja (PK, FK, int, não nulo)
- id_cliente (PK, FK, int, não nulo)
- id_produto (PK, FK, int, não nulo)
- id_dia (PK, FK, int, não nulo)
- quantidade_vendida (real, não nulo)
- valor_venda (real, não nulo)
- custo_venda (real, não nulo)

Voltamos ao Visual Studio.

O primeiro campo, `id_loja`, será um inteiro. O segundo campo, `id_cliente`, também será um inteiro. O terceiro campo, `id_produto`, igualmente será um inteiro. O próximo, `id_dia`, também será um inteiro. Depois, teremos os 3 indicadores: `quantidade_vendida_tend`, que será um *float*; `valor_venda_tend`, também será um *float*; e, finalmente, `custo_venda_tend`, que será um *float*.

> A tabela abaixo foi parcialmente transcrita. Para conferi-la na íntegra, siga o passo a passo do instrutor em sua máquina.

| Nome | Tipo de Dados | Permitir Nulos | Padrão… |
| --- | --- | --- | --- |
| id_loja | int |     |     |
| id_cliente | int | ✓   |     |
| id_produto | int | ✓   |     |
| id_dia | int | ✓   |     |
| quantidade_vendida_tend | float | ✓   |     |
| valor_venda_tend | float | ✓   |     |
| custo_venda_tend | float |     |     |

Na parte inferior, temos o comando:

```sql
CREATE TABLE [dbo].[fact_tendencia]
(
[id_loja] INT NOT NULL PRIMARY KEY, 
[id_cliente] INT NULL, 
[id_produto] INT NULL, 
[id_dia] INT NULL,
[quantidade_vendida_tend] FLOAT NULL, 
[valor_venda_tend] FLOAT NULL, 
[custo_venda_tend] FLOAT NULL
)
```

#### Acrescentando as chaves estrangeiras

Agora, precisamos adicionar as chaves estrangeiras. Afinal, essa tabela tem que se **relacionar**, usando os 4 campos, com as outras tabelas de dimensão. Clicamos em "Chaves Estrangeiras(0)" do lado direito da tabela, e posteriormente em "Adicionar Nova Chave Estrangeira" nomeada como `FK_Fact_Tendencia_dim_empresa`.

A primeira chave referência com a `dim_empresa` e no comando na parte inferior associamos a coluna `id_loja` (substituímos `Column` no comando pelo nome da tabela) que faz referência à tabela `dim_empresa` (substituímos `ToTable` no comando pelo nome da tabela) usando o campo `id_loja`.

```sql
CREATE TABLE [dbo].[fact_tendencia]
(
[id_loja] INT NOT NULL PRIMARY KEY, 
[id_cliente] INT NULL, 
[id_produto] INT NULL, 
[id_dia] INT NULL,
[quantidade_vendida_tend] FLOAT NULL, 
[valor_venda_tend] FLOAT NULL, 
[custo_venda_tend] FLOAT NULL,
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_loja]) REFERENCES [dim_empresa]([id_loja])
)
```

Vamos adicionar mais uma chave estrangeira, clicamos em "Chave estrangeira (1)" do lado direito da tabela e a nomeamos de `fact_tendencia`, com a `dim_cliente`: `fact_tendencia_dim_empresa`. Na parte inferior, no comando que é montado de forma automática, alteramos a coluna e as outras informações.

```sql
CREATE TABLE [dbo].[fact_tendencia]
(
[id_loja] INT NOT NULL PRIMARY KEY, 
[id_cliente] INT NULL, 
[id_produto] INT NULL, 
[id_dia] INT NULL,
[quantidade_vendida_tend] FLOAT NULL, 
[valor_venda_tend] FLOAT NULL, 
[custo_venda_tend] FLOAT NULL,
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_loja]) REFERENCES [dim_empresa]([id_loja]),
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([Column]) REFERENCES [ToTable]([ToTableColumn])
)
```

O campo original será o `id_cliente`, a tabela será a `dim_cliente`, e o campo será o `id_cliente`.

```sql
CREATE TABLE [dbo].[fact_tendencia]
(
[id_loja] INT NOT NULL PRIMARY KEY, 
[id_cliente] INT NULL, 
[id_produto] INT NULL, 
[id_dia] INT NULL,
[quantidade_vendida_tend] FLOAT NULL, 
[valor_venda_tend] FLOAT NULL, 
[custo_venda_tend] FLOAT NULL,
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_loja]) REFERENCES [dim_empresa]([id_loja]),
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_cliente]) REFERENCES [dim_cliente]([id_cliente])
)
```

Na próxima chave estrangeira com a tabela de **produto**: `FK_fact_tendencia_dim_produto`. A `dim_produto`, alteramos no comando abaixo que o campo é o `id_produto`, que fará uma referência à tabela `dim_produto`, e depois `id_produto`.

```sql
CREATE TABLE [dbo].[fact_tendencia]
(
[id_loja] INT NOT NULL PRIMARY KEY, 
[id_cliente] INT NULL, 
[id_produto] INT NULL, 
[id_dia] INT NULL,
[quantidade_vendida_tend] FLOAT NULL, 
[valor_venda_tend] FLOAT NULL, 
[custo_venda_tend] FLOAT NULL,
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_loja]) REFERENCES [dim_empresa]([id_loja]),
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_cliente]) REFERENCES [dim_cliente]([id_cliente])
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([dim_produto]) REFERENCES [id_produto]([id_produto])
)
```

A última chave estrangeira será com a tabela de **tempo**. Adicionamos a nova chave estrangeira com a tabela `FK_fact_tendencia_dim_tempo`, e colocamos no comando na parte inferior: `id_dia`, que é o nível mais baixo da tabela, associando à tabela `dim_tempo`, e o campo `id_dia`.

```sql
CREATE TABLE [dbo].[fact_tendencia]
(
[id_loja] INT NOT NULL PRIMARY KEY, 
[id_cliente] INT NULL, 
[id_produto] INT NULL, 
[id_dia] INT NULL,
[quantidade_vendida_tend] FLOAT NULL, 
[valor_venda_tend] FLOAT NULL, 
[custo_venda_tend] FLOAT NULL,
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_loja]) REFERENCES [dim_empresa]([id_loja]),
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_cliente]) REFERENCES [dim_cliente]([id_cliente]),
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_dia]) REFERENCES [dim_tempo]([id_dia])
)
```

Temos então o *script* para a criação dessa tabela. Salvamos o projeto, copiamos o comando e o colamos na área de comando o *script* no Management Studio. Inserimos ponto e vírgula no final.

Para criar a tabela `fact_tendencia`, selecionamos o comando e clicamos em "Executar" no canto superior esquerdo. Na parte inferior, obtemos a mensagem:

> Comando concluído com êxito

Do lado esquerdo, ao clicarmos com o botão direito do mouse em "DW_ATACADEZ" e depois em "Atualizar", obtemos a tabela `fact_tendencia` com as colunas.

- dbo.fact_tendencia
    - Colunas
        - id_loja (PK, FK, int, não nulo)
        - id_cliente (FK, int, nulo)
        - id_produto (FK, int, nulo)
        - id_dia (FK, int, nulo)
        - quantidade_vendida_tend (float, nulo)
        - valor_venda_tend (float, nulo)
        - custo_venda_tend (float, nulo)

Ao notar que esquecemos um detalhe, a chave primária deve ser os 4 campos.

Para fazer isso, voltamos ao Visual Studio e clicamos sobre esses 4 campos na tabela que criamos na parte superior (`id_loja`, `id_cliente`, `id_produto` e `id_dia`), com o botão direito do mouse, e escolhemos a opção "definir chave primária".

Na parte inferior, é acrescentado a seguinte linha ao comando:

```sql
PRIMARY KEY ([id_loja], [id_cliente], [id_produto], [id_dia])
```

Como já existe a tabela, se rodarmos esse *script* novamente, ele dará erro dizendo que a `fact_tendencia` já existe. Então, precisamos dar um `DROP TABLE [dbo].[fact_tendencia]` e criar novamente.

```sql
DROP TABLE [dbo].[fact_tendencia];
```

*Script* novo:

```sql
CREATE TABLE [dbo].[fact_tendencia]
(
[id_loja] INT NOT NULL PRIMARY KEY, 
[id_cliente] INT NULL, 
[id_produto] INT NULL, 
[id_dia] INT NULL,
[quantidade_vendida_tend] FLOAT NULL, 
[valor_venda_tend] FLOAT NULL, 
[custo_venda_tend] FLOAT NULL,
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_loja]) REFERENCES [dim_empresa]([id_loja]),
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_cliente]) REFERENCES [dim_cliente]([id_cliente]),
CONSTRAINT [FK_fact_tendencia_dim_empresa] FOREIGN KEY ([id_dia]) REFERENCES [dim_tempo]([id_dia]),
PRIMARY KEY ([id_loja], [id_cliente], [id_produto], [id_dia])
);
```

Agora, temos a `fact_tendencia` com a chave primária definida. Se formos ao `diagrama de Banco de dados` do lado esquerdo, com o botão direito do mouse, teremos um "novo diagrama de banco de dados".

Será exibida uma janela e se selecionarmos a `fact_tendencia` com todas as tabelas de dimensão (`dim_cliente`, `dim_departamento`, `dim_empresa`, `dim_fornecedor`, `dim_produto`, `dim_tempo`, `dim_tendencia`), veremos no nosso diagrama a tabela `fact_tendencia` se relacionando com todos os campos da dimensão.

No diagrama, temos a `fact_tendencia` no centro e ligada às demais tabelas.

Precisamos agora criar o `fact_orcado`. Essa tabela não vamos criar. Vocês criarão essa tabela na próxima atividade que virá após esse vídeo. Não se esqueçam de criar essa tabela, porque, se não a criarem, não conseguirão seguir com as outras práticas.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Entendendo o orçamento (planejamento orçamentário <- muito importante)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Antes de carregarmos o orçamento do</span> *Data Lake* <span style="color: #c0c0c0;">para o</span> *Data Warehouse*<span style="color: #c0c0c0;">, vamos entender melhor como as empresas determinam seus orçamentos.</span></span>

- Planejamento **orçamentário**;
- É feito todo o ano referente ao **ano seguinte**;
- Tem que estar de acordo com o **Planejamento Estratégico** ou **Plurianual**;
- Cada área da empresa determina suas premissas;
- Os orçamentos são criados em cascada entre os centros de custos;
- Resultado final é o consolidado do balancete, fluxo de caixa, DRE e custo do produto;
- Existe um WORKFLOW de aprovação do orçamento com valores e prazos;
- Os orçamentos podem sofrer variações ao longo do ano corrente (Forecast);
- Bônus e incentivos baseados na comparação do orçamento X realizado;
- Nem sempre o orçamento é feito usando a mesma granularidade que o realizado;
- Neste caso precisamos realizar rateios usando critérios de acordo com cada negócio.

Todas as empresas que seguem bons conceitos administrativos realizam o que chamamos de **planejamento orçamentário**.

Esse planejamento é um período no qual as áreas-chave da empresa se reúnem para determinar em conjunto como a empresa vai se comportar no ano seguinte. Ele é realizado **anualmente**, e normalmente o processo de orçamento se inicia no segundo semestre do ano corrente para empresas de grande porte, ou no último trimestre do ano corrente para empresas menores.

Nesse período, cada área irá prever o que irá fazer no ano seguinte. Essa previsão precisa estar de acordo com as ações determinadas no planejamento estratégico da empresa ou, em algumas empresas maiores, nos dados contidos no planejamento plurianual.

> O **planejamento estratégico** são diretrizes e direcionamentos determinados pela empresa para serem atingidos a **longo prazo**, como por exemplo, ser líder de mercado nos próximos 10 anos, ou reduzir o número de devoluções pela metade nos próximos 5 anos.

> O **planejamento plurianual** é uma prática realizada apenas em empresas muito **grandes** multinacionais, ou que tem uma certa relevância dentro de um determinado mercado.

É semelhante a um planejamento orçamentário, mas a um nível mais alto e a **longo prazo**. Por exemplo, a Petrobras realiza seu planejamento plurianual num período de 30 anos para frente, com dados anuais.

O planejamento **orçamentário**, que é a **previsão** do que vai acontecer no ano seguinte, precisa seguir as **diretrizes do planejamento estratégico** e, quando houver, do **plurianual**.

Voltando para o nosso assunto principal, o planejamento orçamentário começa onde cada setor, ou centro de custo da empresa, vai **determinar suas premissas** básicas. Normalmente começamos pela área de vendas e seguimos em cascata por todas as áreas da empresa.

Por exemplo, se a AtacaDez decidir aumentar suas vendas em 20% no ano seguinte, isso será a meta da área de vendas. Em seguida, a área de administração de lojas terá que pensar quantos funcionários precisará contratar para suportar o aumento de pessoas que estarão indo às lojas, porque a área de vendas está prevendo que vai vender 20% mais.

A área de imóveis imobilizados da AtacaDez terá que estudar se será necessário criar novas lojas. De acordo com um **critério hierárquico** de dependência entre as diferentes áreas da empresa.

Os orçamentos são elaborados através de um ***workflow***, em que cada área vai fazendo o seu orçamento básico e repassando o resultado através de um fluxo; assim outras áreas dependentes farão seus respectivos planejamentos baseados no planejamento final da área anterior.

No final, tudo é trabalhado e consolidado em três visões financeiras básicas que qualquer empresa precisa acompanhar: o **balancete**, o **fluxo de caixa** e os **lucros e perdas**. Esses valores consolidados são apresentados à diretoria da empresa que vai determinar qual cenário vai compor o orçamento da empresa do ano seguinte. Normalmente, o orçamento é feito respeitando alguns cenários **macroeconômicos** diferentes.

Às vezes há mais de um cenário: um otimista e um pessimista, por exemplo.

No ano seguinte, começamos o ano com o orçamento determinado pela diretoria e o ano se desenvolve. Nesse momento, precisamos começar a coletar no nosso *Data Warehouse* o que foi realizado. É aqui que entra o **KPI**.

Começamos a acompanhar o desempenho da empresa comparando o realizado com o orçamento. Muitas vezes, esse orçamento pode **sofrer revisões** ao longo do ano. Por exemplo, pode acontecer um evento relevante durante o ano, como uma pandemia ou uma desvalorização máxima do dólar.

Se a nossa empresa depende de importação e exportação, isso pode afetar significativamente os números da empresa. Nesses casos, podemos fazer um novo orçamento, que chamamos de *forecast* (revisão do orçamento).

Uma informação importante é que os orçamentos não são feitos usando a mesma **granularidade** que o realizado. Por exemplo, no nosso *Data Warehouse* temos o dado realizado por loja, por produto, por dia e por cliente.

Mas não vamos orçar quanto vamos vender no ano seguinte para cada cliente, cada dia, cada produto. Isso seria muita **informação granular para prever**. Normalmente o orçamento é executado dentro do ambiente de BI em um ponto das dimensões mais consolidado.

No caso da AtacaDez, o orçamento será feito por **loja**, mas não por produto. E sim por **departamento**. Também não vamos orçar os dados por dia, e sim por mês. E **não vamos orçar por cliente**.

No entanto, na hora de carregar o orçamento para dentro do *Data Warehouse*, a granularidade do dado de orçamento no DW é por cada **loja**, cada **dia**, cada **cliente**, cada **produto**. Então, o que fazemos é ler o dado de orçamento e na hora de gravar no *Data Warehouse*, fazemos o que chamamos de um **rateio**, ou seja, uma distribuição dos dados orçados dentro dos membros mais baixos da dimensão.

Na prática, ao irmos em uma empresa para implementar o BI e aplicar carga de dados orçamentários, é feito em grande lote.

## Conclusão

Paramos por aqui e no próximo vídeo vamos mostrar qual será o **critério de rateio** que aplicaremos no caso da AtacaDez e depois faremos isso no *Visual Studio*, no *Integration Service*.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Critério de rateio do orçamento</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">No vídeo anterior, discutimos a importância do critério de rateio para obtermos dados de orçamento na mesma granularidade que os dados realizados, permitindo assim a comparação. Agora, vamos entender qual é o critério de rateio que implementaremos em nosso modelo AtacaDez.</span></span>

Para explicar esse critério de rateio, preparamos uma planilha de Excel, cujo *link* para *download* está disponível se desejarem acompanhar.

Na planilha de Excel, temos as seguintes abas:

1 - Dados Originais

2 - Consolidação Realizado

3 - Ajustes do Realizado Consol

4 - Associar os membros outputs

5 - Obter subtotal por consolidação

6 - Outra consulta real consol

7 - Join Real Consol e Realizado

8 - Associa valor total ao realizado

9 - Acha o % de distribuição

10 - Join entre o real e o orçado

11 - Associa orc no real

12 - Faz a distribuição orc

13 - Remove Colunas

14 - Acrescenta o cliente ND

15 - Grava o orçamento na tabela

Nessa primeira aba da planilha chamada "1 - Dados Originais", temos duas visões.

> Orçamento

| MÊS | LOJA | SETOR | VALOR |
| --- | --- | --- | --- |
| jan/23 | LOJA 01 | BEBIDAS | 30.000,00 |
| jan/23 | LOJA 02 | LATICÍNIOS | 17.000,00 |

> REALIZADO

> A tabela abaixo foi parcialmente transcrita. Para conferi-la na íntegra, realize o *download* nas atividades.

| DIA | LOJA | PRODUTO | CLIENTE | VALOR |
| --- | --- | --- | --- | --- |
| 01 DE JANEIRO | LOJA 01 | CERVEJA | CLIENTE 001 | 1.200,00 |
| 01 DE JANEIRO | LOJA 01 | CERVEJA | CLIENTE 002 | 900,00 |
| 01 DE JANEIRO | LOJA 01 | CERVEJA | CLIENTE 003 | 1.100,00 |
| …   | …   | …   | …   | …   |

> ORÇADO DW

| DIA | LOJA | PRODUTO | CLIENTE | VALOR |
| --- | --- | --- | --- | --- |
| 01 DE JANEIRO | LOJA 01 | CERVEJA | ND  | #   |
| 01 DE JANEIRO | LOJA 01 | REFRIGERANTE | ND  | #   |
| 02 DE JANEIRO | LOJA 01 | CERVEJA | ND  | #   |
| 02 DE JANEIRO | LOJA 01 | CERVEJA | ND  | #   |
| 03 DE JANEIRO | LOJA 01 | CERVEJA | ND  | #   |
| 03 DE JANEIRO | LOJA 01 | REFRIGERANTE | ND  | #   |
| 04 DE JANEIRO | LOJA 01 | CERVEJA | ND  | #   |
| 04 DE JANEIRO | LOJA 01 | REFRIGERANTE | ND  | #   |

Uma é o dado que vem do **orçamento** do *Data Lake* (Lago de Dados). Ele é apresentado por mês, por loja e por setor. Temos também um dado **realizado**, que está no *Data Warehouse*, apresentado por dia, por loja, por produto e por cliente.

Em nossa tabela do *Data Warehouse*, temos também um dado por dia, loja, produto e cliente. Contudo, notem um detalhe: no **orçamento**, não temos nenhuma coluna que se refira a nenhum membro da dimensão cliente, ou seja, não temos cliente, cidade, estado, nada no orçamento associado a nenhuma entidade que ligue cliente.

Mas, precisamos apresentar o orçamento na mesma granularidade que o realizado, ou seja, **precisamos ter uma coluna cliente no dado orçado** no *Data Warehouse*. Então, na tabela final do *Data Warehouse*, teremos sempre um cliente associado a um "não definido - ND".

Vamos repetir: como não temos nenhum orçamento baseado em nenhum membro da dimensão **cliente** e precisamos ter a coluna cliente na tabela do orçado no DW, estaremos associando o cliente "não definido" a todo orçamento.

Como faremos a distribuição desse orçamento dentro dessa tabela "orçado dw"? Para verificar melhor, seguiríamos os seguintes passos:

Primeiramente, faremos um cálculo do valor da venda, ou do indicador, consolidado por cliente.

Na aba "2 - Consolidação Realizado", na tabela central chamada de "REALIZADO", temos nas três primeiras linhas (dia 01 de janeiro, na loja 01, com o produto cerveja e foi vendido para os clientes 001, 002 e 003), temos o valor de cada cliente e a somatória do valor que é R$3.200,00.

Aplicamos a mesma lógica para cada uma das combinações entre dia, loja e produto. Isso para obtermos um consolidado do cliente. A partir disso, vamos para o próximo passo.

Usaremos os resultados ajustados para obter uma tabela que seria um agrupamento do realizado do *Data Warehouse*, não olhando o cliente.

Na aba "3 - Ajustes do realizado consolidado", temos a tabela "REALIZADO" (agrupamento do realizado no DW).

Pegaremos essa visão do **realizado** na aba "4 - Associar os membros outputs", que está agrupado por cliente, e associaremos o mês, a loja e o setor. Essa associação é feita facilmente por *join*, fazendo um *join* entre a tabela de fatos e as tabelas de dimensões.

Assim, estamos associando à tabela do realizado as mesmas referências que temos na tabela de orçamento da mesma aba "4 - Associar os membros outputs".

Observaremos e consolidaremos o dado realizado por essa granularidade.

Na aba "5 - Obter subtotal por consolidado", se observarmos e consolidarmos o dado realizado pela granularidade (coluna de mês, loja e setor; obtemos que o valor total R$26.910,00 é a venda para uma mesma loja e setor, no caso, "BEBIDAS".

Isso significa que estamos calculando o valor subtotal na mesma granularidade que o orçamento. Isso quer dizer que o realizado obteve o valor R$26.910,00; mas no orçado (tabela "ORÇAMENTO") foi de R$30.000,00.

Em seguida, temos outra visão com o dado realizado consolidado na aba "6 - Outra consulta real consolidado". À esquerda desta aba, temos as tabelas intituladas "ORÇAMENTO" e "REALIZADO CONSOL".

Os dois valores que são utilizados para montar essa visão (tabela `REALIZADO CONSOL`) são tirados da aba "5 - Obter subtotal por consolidado" (os valores da coluna "VALOR TOTAL" da tabela `REALIZADO`).

Do lado direito, temos três visões. Temos a tabela do `ORÇADO DW`, onde precisamos gravar a informação. A primeira visão da tabela `ORÇAMENTO` vem do *Data Lake*, do orçamento e da tendência. As duas outras visões (Tabelas `REALIZADO CONSOL` e `REALIZADO`) obtemos através de consultas.

Esse é o ponto inicial do nosso rateio. No *Analysis Service*, leremos essas três tabelas através de consultas (`ORÇAMENTO`, `REALIZADO CONSOL` e `REALIZADO`), sendo que a tabela `ORÇAMENTO` é do *Data Lake* e essas duas consultas (`REALIZADO CONSOL` e `REALIZADO`) em cima da tabela de fatos do realizado e iniciaremos o processo de rateio.

Vamos à aba "7- Join real consol e realizado".

A primeira coisa que faremos será um *join* entre a tabela do realizado mais detalhado, sem ser a nível de cliente, com o realizado consolidado. E traremos para a tabela `REALIZADO` as colunas subtotais. Ao fazer o *join*, esse número 26.910,00 da tabela `REALIZADO CONSOL` se repetirá em uma coluna da tabela `REALIZADO`. E 15 mil também se repetirá.

Como resultado, obtemos uma coluna "Valor Consol" na tabela `REALIZADO` como consta na aba "8 - Associa valor total ao realizado".

Agora, vamos à aba "9 - Achar o % de distribuição".

Em seguida, acharemos o **percentual de distribuição do realizado**. O valor de R$ 3.200 corresponde a 11% do total daquele dia, daquela loja e daquele produto.

Já essa segunda linha, de 1º de janeiro, a loja O1, vendeu Refrigerante, que vendeu R$ 3.250, representa 12% desse total. Esse percentual é super importante, pois usaremos ele para distribuir o orçado, ou seja, vamos ratear o orçado usando a distribuição do que aconteceu no realizado.

Vamos para a aba "10 - Join entre o real e orçado".

Para fazer isso, faremos um *join* usando essas três colunas (mês, loja e setor da tabela realizado) com a tabela do orçamento e obteremos o valor do orçamento nessa última coluna que está vazia, repetidas vezes. O resultado após aplicarmos isso, está na aba "11 - Associa orc no real".

Agora, estamos prontos para fazer a distribuição, vamos à aba "12 - Faz a distribuição orc". Esse valor distribuído (da coluna "orçado dist" da tabela realizado) será o valor do orçado vezes o percentual de distribuição.

Logo, os R$ 30.000, ao ratear, distribuímos R$ 3,567,45 dentro da data 01 de Janeiro, loja 1, cerveja. Por quê? Porque distribuímos 11,9% do orçado para esta combinação de loja e produto, porque no realizado ele representou 11,9%.

Vamos para a aba "13 - Remova as colunas". Removemos as colunas que não importam e como precisamos ter na nossa base de dados de destino a representação de algum cliente, usaremos o cliente "não definido".

Agora, vamos à aba "14 - Acrescenta o cliente ND".

Acrescentamos sobre essa visão da tabela realizado o cliente "não definido" e finalmente na aba "15 - Grava o orçamento na tabela" fazemos a gravação desses dados na tabela do DW orçado.

## Conclusão

São vários passos que precisamos fazer até ratear este valor dentro das combinações mais detalhadas usando o percentual de participação do realizado.

O que faremos a seguir no *Analysis Services* é justamente essa **distribuição**. À medida que formos fazendo no *Visual Studio* cada passo, mostraremos nessa planilha o correspondente.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Criando a conexão e apagando o orçamento</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Iniciaremos o processo de rateio do orçamento para armazená-lo no</span> *Data Warehouse*<span style="color: #c0c0c0;">. Inicialmente, precisamos realizar duas tarefas: criar o processo de limpeza da tabela do orçamento no</span> *Data Warehouse*<span style="color: #c0c0c0;">, usando o mesmo critério que aplicamos ao realizado; e criar, no</span> *Integration Service*<span style="color: #c0c0c0;">, a conexão com o</span> *Data Lake* <span style="color: #c0c0c0;">que recuperamos no início deste curso, que contém os dados da tendência e do orçado.</span></span>

### Recapitulando

No Visual Studio, vamos recapitular o que estamos fazendo no pacote de `CargaDataWarehouse` do lado direito, dentro de `Pacote SSIS`. Nesse pacote, conseguimos observar a carga das dimensões (lado esquerdo) e, em seguida, extraímos do *Data Lake* as datas que estão sendo carregadas (lado direito).

Realizamos um *loop* onde carregamos os dados da dimensão tempo e, para cada data, apagamos o dado que carrega a tabela de fato do realizado. Esta tarefa, que envolve **apagar a tabela de fato** e **carregar a tabela de fato**, também será repetida para o orçamento.

### Criando conexão e apagando orçamento

Vamos aproveitar a tarefa "Apagando tabela de fato" que já contém as variáveis de atribuição do mês e do ano. Iremos copiá-las (Ctrl + C) e colá-las (Ctrl + C) fora e alterar o nome para "pagando tabela de orçamento". Para isso, alteramos do lado direito em "Name".

Inserimos essa tarefa dentro deste contêiner do *loop* e que está o "Apagando tabela de fato" e ligá-lo para realizar este processo ao terminar o carregamento da tabela de fato do realizado. Assim, em "Carga de Fato", agora temos: "Apagando tabela de fato", "Carga da Tabela de Fato" e "Apagando tabela de orçamento".

No entanto, precisamos alterar a consulta. Clicamos em "Apagando tabela de fato" e será exibida uma janela chamada "Editor de Tarefa Executar SQL". Na seção "Introdução SQL" temos uma linha chamada "SQL Statement" que do lado direito possui o início de um comando, ao selecionarmos ele teremos o comando completo em uma janela intitulada "Digitar Consulta SQL":

```sql
DELETE FROM [dbo].[fact_venda] WHERE id_dia IN (SELECT id_dia FROM [dbo] [dim_tempo] WHERE YEAR ([data]) =? AND MONTH([data]) = ?)
```

A consulta atual está apagando a tabela de fato venda, onde o `id_dia` está dentro do ano. Este ID vai receber o valor do ano da variável e do mês corrente do *loop* de carga.

Vamos substituir a exclusão da tabela de fato venda, pela seguinte consulta:

```sql
DELETE FROM [dbo].[fact_orcado] WHERE id_dia IN
(SELECT id_dia FROM [dbo].[dim_tempo] WHERE YEAR([data]) = ? AND MONTH([data]) =
```

Ou seja, apagar os dados da fato orçado para o dia do looping. Na tabela `dbo.fact_orcado` estamos nos referindo à tabela do *Data Warehouse* que criamos. Vamos apagá-la para o mês e para o ano que estamos fazendo a leitura.

### Criando a conexão com outro banco

Outra informação importante é que precisamos criar uma **conexão** com este novo banco que recuperamos no início do curso, onde temos os dados do orçamento e da tendência. Do lado esquerdo do Management Studio:

- dbo.tbl_orcamento_consolidado
- dbo.tbl_tendencia

Voltamos ao *Visual Studio*.

Aproveitaremos esta mesma conexão que temos na parte inferior denominada "Gerenciadores de Conexões" do Visual Studio, a "Conexão com o data warehouse". Vamos copiá-la, colá-la ao lado direito na mesma seção de "Gerenciadores de Conexões" e renomeá-la para "Conexão com Data Lake Orc Tend".

Clicamos em "Conexão com Data Lake Orc Tend" para alterar a sua conexão. É o mesmo servidor, confirmamos a senha no campo "Password".

No catálogo inicial, ao invés de ser o "DW_ATACADEZ", será o "DW_ATACADEZ_ORC_TEND". Logo após, clicamos no botão "Ok" no canto inferior direito.

Entramos novamente para fazermos um teste clicando em "Testar conexão" e obtemos uma mensagem escrita "Conexão de teste bem-sucedida".

Com isso, já temos os subsídios para iniciar o trabalho do rateio. Apagamos a tabela de orçamento e criamos a conexão com o *Data Lake*.

## Próximos Passos

Nos próximos vídeos, vamos começar a implementar o rateio do orçamento dentro do *Data Warehouse*, usando a mesma proporção de distribuição do realizado.

> **Transfeera** - Este blog apresenta uma visão geral do orçamento empresarial, descrevendo-o como uma ferramenta que permite às empresas projetarem receitas, despesas e investimentos em um período futuro. É usado para o planejamento de objetivos operacionais e financeiros, fornecendo uma imagem clara das entradas e saídas de um negócio. O orçamento empresarial é essencial para ajudar os gestores a entender o desempenho de suas áreas e na tomada de decisões. Para acessar o artigo completo, clique [aqui](https://transfeera.com/blog/orcamento-empresarial/).

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Lendo os dados para rateio</span>

Neste vídeo, vamos realizar o rateio do orçamento usando como critério de distribuição o dado realizado. A primeira coisa que precisamos fazer é realizar a leitura das três consultas básicas no *Integration Services*. Essas consultas são necessárias para realizar o rateio.

Na planilha, temos as três consultas básicas necessárias para fazer o rateio. A primeira consulta é a destacada abaixo:

> Orçamento
> 
> | Mês | Loja | Setor | Valor |
> | --- | --- | --- | --- |
> | jan/23 | LOJA01 | BEBIDAS | 30.000,00 |
> | jan/23 | LOJA01 | LATICINEOS | 17.000,00 |

Ela representa o dado do orçamento agregado por mês, loja e setor. Note que esse orçamento não é realizado por nenhum membro da dimensão cliente. Essa informação é importante para entender o formato e o processo de rateio que implementaremos a seguir.

> Realizado
> 
> | DIA | LOJA | PRODUTO | VALOR | MÊS | LOJA | SETOR |
> | --- | --- | --- | --- | --- | --- | --- |
> | 01 DE JANEIRO | LOJA 01 | CERVEJA | 3.200,00 | JAN/23 | LOJA 01 | BEBIDAS |
> | 01 DE JANEIRO | LOJA 01 | REFRIGERANTE | 3.250,00 | JAN/23 | LOJA 01 | BEBIDAS |
> | ... | ... | ... | ... | ... | ... | ... |

A segunda visão representa o realizado. Ele está sendo mostrado por dia, loja e produto e está consolidado por cliente, porque não temos orçamento por nenhum membro da dimensão cliente. Podemos ver nessa visão, associados ao resultado, o mês, loja e setor de cada linha. Essa referência é importante, porque faremos junções entre essa tabela e as tabelas mais agregadas.

A terceira visão representa o mesmo dado realizado, porém está agrupado na mesma granularidade do dado do orçamento. Mês, loja e setor. Com essas três consultas, conseguimos efetuar os rateios, como demonstrado no vídeo anterior, quando olhamos essa planilha de forma mais detalhada.

No *SQL Server Management Studio*, tenho três consultas que representam aquelas três consultas que acabei de mostrar.

A primeira consulta, cujo comentário está escrito realizado, representa o dado realizado por `id_loja`, `id_produto` e `id_dia` e com referência ao código da loja, descritor do setor e código no mês.

A segunda consulta, traz o dado por cod_loja, `desc_setor` e `cod_mes`. Representa a consulta do realizado consolidado na mesma granularidade do orçamento.

A terceira consulta é o dado do orçamento agregado por loja, aqui está `desc_departamento`, mas é o seto, e `cod_mes`.

> Essas três consultas serão disponibilizadas na atividade **"Faça Como eu Fiz"** para que vocês possam copiá-las e colá-las, caso queiram repetir esse exercício prático.

Agora, vamos ao *Visual Studio* para implementar nosso processo de carga do orçamento.

Vamos criar um novo processo, após apagar a tabela do orçamento, e utilizaremos o mesmo processo de carga de tabela de fatos como modelo. Copiaremos o elemento "Carga de tabela de Fato", colaremos ele aqui fora do nosso container, mudaremos seu nome para `carga de tabela de fato de orçamento` e o puxaremos para dentro do container. Ligaremos esses dois processos e, aqui dentro, vamos editar para fazer a consulta das três queries, duas vindo do *Data Warehouse* e uma do *Data Lake* de orçamento.

Diminuiremos o espaço aqui, só precisaremos dessas três consultas: Conexão com a tabela de Notas, Conexão com a tabela de Itens e Conexão com a tabela de Compras. Podemos apagar as demais. Vamos agora implementar dentro dessas três consultas aquelas três queries que mostrei anteriormente.

Vamos começar com essa primeira conexão, Conexão com a tabela de Notas, e faremos a conexão com a consulta realizada. Mudaremos a conexão para *Data Warehouse* e buscaremos no *SQL Server Management Studio* a consulta realizada. Substituímos o ano e o mês por interrogações.

A segunda conexão, chamaremos de consulta realizada consolidada. Ela também virá do *Data Warehouse*, e a consulta está no *SQL Server Management Studio*, substituímos o ano e o mês por interrogações.

Já a terceira consulta, chamaremos de "Conexão com a consulta ORÇADO". A conexão não será com o *Data Lake*, será com o *Data Lake Orc Tend*. Também mudaremos o ano e mês por interrogações.

Criaremos três processos de classificação.

Juntaremos cada visão a um processo de classificação. Quando formos fazer uma junção dentro do *Integration Service*, precisaremos classificar pelo critério da junção. E qual será o critério da junção dessas três tabelas aqui? Serão os campos `Mês`, `Loja` e `Setor`, que são os campos que temos em comum nas três tabelas.

No primeiro processo de classificação, selecionaremos: `cod_loja`, `desc_setor` e `cod_mes`.

Na segunda, `cod_loja`, `desc_setor` e `cod_mes`.

Na terceira classificação, selecionaremos `cod_loja`, `desc_departamento` e `cod_mes`.

Vamos salvar e testar para saber se essas consultas estão funcionando corretamente. Para isso, clicaremos em "Habilitar Visualizador de Dados" em cada seta de conexão entre os elementos. Na aba "Fluxo de Controle", clicaremos com o botão direito do mouse sobre "Carga da tabela de Orçamento", depois em "Executar tarefa". Pronto, ele vai mostrar as três consultas.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Fazendo junção das consultas</span>

Vamos prosseguir com o nosso processo de rateio do orçamento, realizando a junção de todos os dados que foram extraídos daquelas três consultas.

Estamos aqui no *Visual Studio*, lendo as três consultas. O que vamos tentar agora é realizar a junção entre o realizado e o realizado consolidado para obter o valor do consolidado linha a linha. Vamos realizar essa junção agora.

Vamos selecionar o elemento de junção de mesclagem. Vamos associar à primeira classificação, será a entrada esquerda da junção de mesclagem, e também conectaremos a segunda classificação a esse elemento. Assim, uniremos essas duas tabelas.

Essa tarefa será chamada de "Associação valor total ao realizado". Inclusive, no futuro, poderemos associar e entender o processo que está sendo feito na planilha.

Clicando nesse elemento que de junção que nomeamos como "Associação valor total ao realizado", veremos as junções e vamos carregar todos os campos da primeira tabela com os campos "quantidade_vendida_total", "valor_venda_total" e "custo_venda_total" da segunda.

Como posteriormente faremos uma nova junção entre esta tabela e a tabela de "Conexão com a consulta Orçamento", vamos criar aqui um novo elemento de classificação, onde associaremos esta consulta "Associação valor total ao realizado". Essa classificação continua sendo por `cod_loja`, `desc_setor` e `cod_mes`.

Vamos remover aqui o visualizador de dados que é feito entre "Conexão com a consulta Orçamento e "Classificar 2" e vamos adicioná-lo aqui entre "Associação valor total ao realizado" e "Classificar 3".

Vamos salvar, clicar na aba "Fluxo de controle", e aqui vamos executar o processo, executar a tarefa "Carga da tabela de orçamento".

Na coluna exibida, temos uma coluna com a quantidade vendida e uma coluna com a quantidade vendida total.Repetida para essa referência da coluna de `cod_mes`. Isso aqui equivale a essa visão de realizado da aba "8 Associa valor total ao real".

O que fazemos em seguida? Encontramos o percentual de distribuição entre valor e o valor consolidado. Vamos implementar então esse percentual de distribuição.

Podemos interromper o processo da tarefa, retornaremos ao detalhamento da tabela orçada. Não vamos usar aqui o classificar, vamos adicionar uma coluna derivada. Nessa coluna derivada vamos calcular o percentual três indicadores:

| Derived Column Name | Derived Column | Expression | Data Type |
| --- | --- | --- | --- |
| quantidade_vendida_percentual_distribuicao | `<add as new column>` | \[quantidade_vendida\]/ \[quantidade_vendida_total\] | flutuante de precisão... |
| valor_venda_percentual_distribuicao | `<add as new column>` | \[quantidade_vendida\]/ \[valor_venda\]/ \[valor_venda_total\] | flutuante de precisão... |
| custo_venda_percentual_distribuicao | `<add as new column>` | \[custo_venda\]/\[custo_venda_total\] | flutuante de precisão.... |

A esse processo, vamos dar o mesmo nome que temos na aba da planilha: "Acha o percentual de distribuição".

Agora sim, vamos conectar a esse processo uma classificação, onde classificaremos por `cod_loja`, `desc_setor` e `cod_mes`. E vamos juntar com o orçamento. Vamos adicionar aqui uma junção de mesclagem, associar essa classificação entre "Classificar 3" e "Junção de Mesclagem" como sendo da esquerda.

Essa junção de mesclagem fará um outro join, entre essa tabela do realizado e o orçamento, que resultará nesta consulta mais completa. Vamos buscar aqui o nome dessa aba. vamos nomear essa "Junção de Mesclagem" como "Associa o orcamento no realizado".

Se olharmos aqui a consulta, vamos buscar todos os dados do lado esquerdo, e apenas os valores da quantidade vendida, custo venda e valor da venda orçado.

Vamos adicionar uma coluna derivada, para visualizar o dado, bem aqui no final. Vamos verificar se o dado que estaremos gerando aqui no final, corresponde a esta visão aqui, que está na planilha "Realizado" da aba "Associa orçamento no real".

Vamos salvar, clicar em "fluxo de controle", clicar na "Carga da tabela de Orçamento" com o botão direito do mouse e selecionar "executar tarefa".

Na tabela que será exibida, temos todas as referências, temos os valores, quantidade vendida, quantidade vendida total, temos aqui o percentual de participação, e finalmente aqui, a quantidade vendida orçada.

Então, essa visão que temos aqui, é justamente a mesa que temos na tabela que está na planilha.

Estamos quase prontos para fazer o rateio.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Calculando o rateio</span>

Já temos as nossas três consultas juntas, inclusive com o percentual de distribuição já calculado em uma coluna. Agora, é a hora de fazer o rateio. É exatamente isso que faremos neste vídeo.

Na coluna derivada, faremos exatamente este cálculo: o valor do orçamento multiplicado pelo percentual de distribuição para obter o valor distribuído. Vamos renomear o elemento "Coluna Derivada" como: "Faz a distribuição do orçamento".

Clicando nesse elemento que renomeamos, iremos criar três indicadores:

| Derived Column Name | Derived Column | Expression | Data Type |
| --- | --- | --- | --- |
| quantidade vendida_orcada_distribuida | `<add as new column>` | \[quantidade_vendida_percentual_distribuicao\] \* \[quantidade_vendida_orc\] | flutuante de precisão... |
| valor_venda_orcado distribuido | `<add as new column>` | \[valor_venda_percentual_distribuicao\] \* \[valor_venda_orc\] | flutuante de precisão... |
| custo_venda_orcado_distribuido | `<add as new column>` | \[custo_venda_percentual_distribuicao\] \* \[custo_venda_orc\] | flutuante de precisão... |

O primeiro indicador será chamado de "quantidade vendida orçada distribuída". Este será calculado através do produto entre o percentual de distribuição e a quantidade vendida orçada.

O segundo indicador será o "valor venda orçado distribuído", que será o resultado do valor da venda multiplicado pelo percentual distribuído.

E, por fim, o último será o "custo venda orçado distribuído", que será o resultado do custo de venda multiplicado pelo percentual distribuído.

Em seguida, podemos clicar em "OK".

Após confirmar, adicionaremos outra coluna derivada, associaremos a "Faz a distribuição do orçamento" a essa nova coluna e habilitaremos a visualização de dados.

Podemos salvar e, no fluxo de controle, clique com o botão direito do mouse na "Carga da tabela de Orçamento" e executaremos a tarefa.

O resultado final será uma coluna com os valores do orçamento distribuídos para cada combinação: dia, produto e loja. Este valor será gravado na coluna do *Data Warehouse*.

Ainda precisamos adicionar a coluna "ID cliente não definida" à nossa visualização.

Sabemos que "não definido" corresponde ao ID cliente zero. Isso foi estabelecido no projeto do nosso *Data Warehouse*, quando realizamos a carga e o processo de Lockup, determinando que todos os "não definidos" teriam ID zero.

Portanto, renomearemos a tarefa "Coluna Derivada" que recém adicionamos para que ela se chame "Acrescenta o cliente não definido". E criaremos uma nova coluna id_cliente, que vai ter zero como valor.

| Derived Column Name | Derived Column | Expression |
| --- | --- | --- |
| id_cliente | `<add as new column>` | 0   |

Após desativar a visualização de dados e criar outra coluna derivada, conectada à tarefa "Acrescenta o cliente não definido", salvaremos e iremos ao fluxo de controle, clicando com o botão direito do mouse sobre a tarefa "Carga da tabela de Orçamento" para executá-la.

No final, teremos o `id_cliente` com valor zero repetido para todo o processo.

Agora, temos todos os dados necessários para gravar na tabela do *Data Warehouse* do orçamento.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Gravando o orçamento no DW</span>

Finalmente, vamos realizar a gravação dos dados orçados que já foram distribuídos dentro da tabela do *Data Warehouse*.

De volta ao *Visual Studio*, vamos remover o processo de coluna derivada e adicionar uma dimensão de alteração lenta. Associaremos o processo "Acrescenta o cliente ND" à dimensão de alteração lenta.

Como estamos nomeando os processos principais com o mesmo nome da aba da planilha, onde explicamos o rateio, vamos copiar o nome "Grava o orçamento na tab" e renomear a dimensão de alteração lenta com essa frase.

Agora, vamos configurar esse processo.

A conexão é com o *Data Warehouse*, pois a tabela de fato de orçamento, está no *Data Warehouse* e é ela que vamos atualizar.

Já temos aqui as associações existentes, então os IDs serão *Business Key* e `custo_venda_orcado`, vamos associar ao custo de venda orçado distribuído, que foi o valor que acabamos de calcular no passo anterior

A quantidade vendida orçada será a quantidade vendida orçada distribuída. E o valor de venda orçado será o valor de venda orçado distribuído.

| Input Columns | Dimension Columns | Key Type |
| --- | --- | --- |
| custo_venda_orcado_distribuido | custo_venda_orcado | Not a key column |
| id_cliente | id_cliente | Business key |
| id_dia | id_dia | Business key |
| id_loja | id_loja | Business key |
| id_produto | id_produto | Business key |
| quantidade_vendida_orcada_distribuida | quantidade vendida_orcado | Not a key column |
| valor_venda_orcado_distribuido | valor_venda_orcado | Not a key column |

Clique em *Next*. Precisamos especificar o tipo de atualização dos campos não-chaves, sempre usamos o *changing attribute*.

| Dimension Columns | Change Type |
| --- | --- |
| custo_venda_orcado | Changing attribute |
| quantidade_vendida_orcado | Changing attribute |
| valor_venda_orcado | Changing attribute |

Vamos confirmar a gravação deste último processo. Agora temos o processo completo. Vamos ao fluxo de controle, salvamos nosso projeto no *Visual Studio* e, ao voltar ao Management Studio, vamos verificar quantas linhas temos na tabela `fact_orcado`. Não tem nenhuma.

Agora, vamos executar a tarefa "Carga da tabela de Orçamento".

Clicando no fluxo de dados, podemos observar a evolução dele. O processo foi concluído com sucesso. Se verificarmos, no Management Studio, a tabela `fact_orcado`, temos os dados já distribuídos dentro de loja, cliente, produto e dia.

Realizamos o processo de gravação do orçamento do *Data Lake*, distribuindo-o pelo dado realizado e gravando na tabela de fato do orçamento.

&nbsp;

# <span style="color: #ffffff;">Conferindo dados do orçamento</span>

No vídeo anterior, realizamos a carga do orçamento no *Data Warehouse*. Vamos verificar o valor que foi gravado no *Data Warehouse* e se o rateio funcionou corretamente.

No final deste vídeo, discutiremos alguns pontos de atenção quando aplicamos rateio dentro de um modelo que usará o orçamento para calcular KPI.

Vamos fazer essa verificação do orçamento.

Temos aqui as consultas, as *queries*, muito semelhantes às *queries* que utilizamos para ler o orçamento. No entanto, em vez de estar analisando a tabela de fato realizada, estamos olhando para a tabela de fato do orçado. Aqui temos o detalhamento do orçamento. Na segunda consulta, temos o orçamento consolidado por empresa, departamento e mês. Em outra janela, temos a consulta do orçamento original que está no *Data Lake*.

Na primeira consulta, nos dados do orçamento detalhado que foi gravado no *Data Warehouse*, qual período gravamos? Observe que ele me apresentou dados de fevereiro de 2021.

Se você está realizando os exercícios práticos e seguindo todos os passos que estamos fazendo, pode ser que ainda assim a data que aparece seja diferente. Independentemente disso, no meu caso, é fevereiro de 2021. E por que só lemos o orçamento de fevereiro de 2021? Porque no nosso projeto do Visual Studio, como executamos apenas essa tarefa diretamente, ele utilizou o valor da variável de ano e mês que está inicializada no nosso projeto. No meu caso, está fevereiro de 2021.

Voltando para a nossa consulta de orçamento, temos os dados detalhados e o orçamento distribuído. Se somarmos esse orçamento distribuído no nível departamento, mês e loja, teremos o valor que foi orçado? Vamos fazer esse teste.

Vamos olhar, por exemplo, o valor do orçamento consolidado. Ou seja, ele vai somar tudo que foi rateado e consolidar no nível de empresa, departamento e mês.

Por exemplo, esse valor é a soma dos rateios. Para bebidas na loja 10, em fevereiro de 2021, temos a quantidade 1.018, o valor da venda 5.0151 e o custo da venda 5.065.

| cod_loja | desc_setor | cod_mes | quantidade_vendida_total | valor_venda_total | custo_venda_total |
| --- | --- | --- | --- | --- | --- |
| 10  | Bebidas | 2021_02 | 1018 | 5151 | 5065 |

Se formos ao *Data Lake* original e colocarmos o ano 2021 e o mês 2, teremos os dados.

```sql
-- Orçamento

SELECT [cod_loja]
[desc_departamento]
[cod_mes]
[quantidade_vendida_orc]
[custo_venda_orc]
[valor_venda_orc]
FROM [tbl_orcamento_consolidado]
WHERE CONVERT(INT, SUBSTRING([cod_mes],1,4)) = 2021
AND CONVERT(INT, SUBSTRING([cod_mes], 6,2)) = 2
```

Podemos também limitar com um `AND` `cod_loja` igual a 10 e `desc_departamento` igual a bebidas.

```sql
-- Orçamento

SELECT [cod_loja]
[desc_departamento]
[cod_mes]
[quantidade_vendida_orc]
[custo_venda_orc]
[valor_venda_orc]
FROM [tbl_orcamento_consolidado]
WHERE CONVERT(INT, SUBSTRING([cod_mes],1,4)) = 2021
AND CONVERT(INT, SUBSTRING([cod_mes], 6,2)) = 2
AND cod_loja = '10' AND desc_departamento = 'Bebidas'
```

Se executarmos essa consulta, note que os números vão bater com os números referentes à soma da distribuição.

| cod_loja | desc_departamento | cod_mes | quantidade_vendida_orc | custo_venda_orc | valor_venda_orc |
| --- | --- | --- | --- | --- | --- |
| 10  | Bebidas | 2021_02 | 1018 | 5065 | 5151 |

Outra forma de fazer esse teste é na consulta mais detalhada. Por exemplo, adicionando um `where dbo.dim_empresa.cod_loja = '10' and dbo.dim_departamento.desc_setor = 'Bebidas'`. Se executarmos essa consulta, temos o detalhamento, ou seja, aquele orçamento quebrado, distribuído para o nível mais baixo do modelo. Se copiarmos isso e verificarmos no Excel, aplicando um somatório, teremos também esses mesmos valores.

Portanto, o dado orçado que veio do *Data Lake* foi distribuído para o nível mais baixo.

Vamos aproveitar que vimos esse detalhe e discutir um ponto muito importante, que é o uso dos dados rateados para o cálculo dos KPIs.

Antes de mais nada, quero dizer que os valores dos KPIs obtidos no nível acima do orçamento podem ser considerados dados confiáveis. Quer dizer, os KPIs que calculamos do nível setor mês para cima na árvore, por exemplo, no mês, no trimestre, no ano, no setor, total setor, esses KPIs serão confiáveis, porque são simplesmente os orçamentos que entraram naquele nível e foram consolidados.

No entanto, os KPIs que estão abaixo do nível do orçamento nem sempre são confiáveis.

Vamos supor que temos aqui a nossa árvore hierárquica, a hierarquia de uma determinada dimensão. Digamos que o orçamento foi realizado neste nível destacado ao centro da árvore. O que quero dizer é que o KPI calculado do nível do orçamento para cima é um KPI confiável. No nosso caso do Atacadez, este nível destacado ao centro da hierarquia seria loja, setor e mês. É um nível consolidado das dimensões.

Os KPIs que nós calculamos usando o rateio podem não ser confiáveis. E vamos prestar muita atenção nessa frase que acabamos de dizer. "Podem" não significa que não sejam.

> o critério de rateio de um valor pode ser questionado já que ele expressa uma forma de associar valores sobre entidades de forma indireta.

Vamos dar um exemplo prático. Energia elétrica. Suponha que temos uma empresa com uma sede em um prédio de 12 andares. E cada andar pode comportar os escritórios de um ou mais departamentos dessa empresa. Alguns departamentos são grandes, ocupando, por exemplo, um ou mais andares. Já outros departamentos menores podem dividir um andar entre si.

No fim do mês, a empresa recebe a conta de energia elétrica do prédio. A empresa receberá um único valor para a energia elétrica de todo o prédio. Mas na hora de distribuir os custos, cada departamento terá que contribuir com o custo da energia elétrica.

Qual é o critério que usaremos para ratear o custo da energia elétrica entre os departamentos? Que critério será usado para determinar qual departamento pagará mais pela energia elétrica?

Um critério comum usado nesse caso é a área. Ou seja, o departamento que ocupar uma área maior dentro do prédio paga mais energia elétrica. Um departamento que ocupa uma menor área, por exemplo, apenas um pedaço de um andar, pagará menos energia elétrica.

Mas pode ser que, em um determinado momento, a empresa mude o critério de rateio da energia elétrica. Em vez de usar a área, usará o número de funcionários. O departamento que tem mais funcionários, teoricamente, gastará mais energia do que outro. Certamente, se usarmos um ou outro critério, os valores que cada departamento pagará pela energia elétrica podem mudar. Porque nem sempre o fato do departamento ocupar um espaço maior significa que ele tenha mais funcionários.

Porém, mesmo que usássemos esse critério de distribuição como um componente de cálculo de um KPI para medir, por exemplo, a performance de uma pessoa executiva dentro da empresa, independente de usarmos a área ou o número de funcionários, a pessoa que verá o KPI que mede sua performance baseada em um custo de energia elétrica pode querer questionar esses valores.

Porque, se usarmos o critério de espaço ou de número de funcionários, podemos ter resultados de KPIs diferentes quando olhamos o KPI do departamento.

Mas mesmo assim, suponha que no primeiro andar desse prédio temos um CPD, onde temos várias máquinas de computadores instaladas. São os servidores da empresa.

E esses servidores ocupam, por exemplo, meio andar apenas. E nessa área de meio andar, onde temos vários servidores, temos apenas três funcionários trabalhando. É óbvio que se usarmos o critério de distribuição da área ou do funcionário para ratear a energia elétrica, esse departamento que tem os servidores com apenas três funcionários receberá um valor muito pequeno de custo. Mas sabemos, por exemplo, que metade da energia gasta é por causa desses servidores.

Então, veja que se mudarmos o critério de distribuição, podemos mudar o resultado final do KPI e não expressar a realidade dos fatos. Não interessa se usarmos funcionários ou área. Sabemos que o departamento onde estão os servidores é que gasta mais energia elétrica. Então, os critérios de distribuição, quando você usar nos seus modelos de *Business Intelligence*, devem ser muito bem definidos.

E mesmo assim, se a empresa decidir usar os KPIs baseados nesses orçamentos que foram rateados, por exemplo, para pagar bônus ou para medir a performance de um determinado departamento ou até executivo, a empresa tem que deixar claro que todas as partes envolvidas concordam com o critério que a empresa utilizou.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Entendendo o processo de leitura da tendência</span>

Falaremos sobre o processo de leitura da tendência, sobre como vamos ler os dados da tendência que estão no *Data Lake* para o *Data Warehouse*.

Na planilha representada, temos uma tabela que mostra os dados da tendência que estão no *Data Lake*. Diferente do orçado, a tendência já vem na mesma granularidade do dado realizado, ou seja, por dia, loja, produto e cliente.

> *Visualização dos primeiros 5 registros da tabela. Para acessá-la na íntegra, acompanhe pelo projeto.*

> TENDÊNCIA
> 
> | DIA | LOJA | PRODUTO | CLIENTE | VALOR |
> | --- | --- | --- | --- | --- |
> | 01 DE JANEIRO | LOJA 01 | CERVEJA | CLIENTE 001 | 1.200,00 |
> | 01 DE JANEIRO | LOJA 01 | CERVEJA | CLIENTE 002 | 900,00 |
> | 01 DE JANEIRO | LOJA 01 | CERVEJA | CLIENTE 003 | 1.100,00 |
> | 01 DE JANEIRO | LOJA 01 | REFRIGERANTE | CLIENTE 001 | 1.250,00 |
> | 01 DE JANEIRO | LOJA 01 | REFRIGERANTE | CLIENTE 002 | 1.100,00 |

No entanto, a tendência foi calculada com base no *Data Lake* original, lembre-se que mencionamos que a função do *Data Lake*, além de ser fonte de um *Data Warehouse*, também pode ser usada para realizar cálculos e estatísticas. Portanto, a tendência provém do dado bruto do *Data Lake* realizado na mesma granularidade.

Para gravar no *Data Warehouse*, precisamos usar o identificador primário e não o identificador natural. Assim, precisamos fazer os *lookups*. Faremos os *lookups* para a tendência de uma forma diferente do que fizemos nos cursos anteriores, quando carregamos os dados realizados.

Procederemos da seguinte maneira: vamos buscar as dimensões no *Integration Service* e faremos um *join*, onde transferiremos o identificador natural para dentro dessa tabela. Primeiro, faremos um *join* de cliente e teremos o ID do cliente, linha por linha, baseado no descritor, no código do cliente. Em seguida, faremos um *join* de empresa, um *join* de tempo e um *join* de produto.

Quando tivermos os 4 IDs gravados na seleção que fizemos no *Data Lake*, gravaremos isso dentro do *Data Warehouse*. No *Data Warehouse*, a tabela da tendência também é organizada pelos IDs.

Portanto, esses serão os passos que seguiremos dentro do processo do *Integration Service*.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Apagando e efetuando leitura para a carga da tendência</span>

Vamos iniciar a carga dos dados de tendência que estão no *Data Lake* para o *Data Warehouse*.

No projeto do *Visual Studio*, temos o processo de carga do *Data Warehouse* e faremos o mesmo que foi feito com o orçamento: criar uma tarefa para apagar a tabela de tendência e para carregar a tabela de tendência.

Começaremos copiando a tarefa "Apagando tabela de orçamento", colando-a fora do container e alterando o nome para "Apagando tabela de tendência". Depois, arrastaremos de volta para dentro do container e ligaremos com "Carga da tabela de Orçamento".

O processo originalmente usa uma consulta que apaga os dados da tabela de orçamento. Substituiremos isso pelas consultas que serão usadas neste vídeo. Estas consultas também estarão disponíveis na seção "Faça Como Eu Fiz". Copiaremos a primeira consulta, pois iremos apagar os dados da tabela de tendência. A conexão com o *Data Warehouse* está correta.

Agora, buscaremos a tarefa "Carga da tabela do orçamento", copiaremos, colaremos fora do container e mudaremos o nome para "Carga da tabela da Tendência". Depois, transportaremos de volta para dentro do container e vincularemos com a tarefa anterior "Apagando tabela de tendência".

Dentro, temos o processo de carga do orçamento com seus componentes originais. Deletaremos todos eles, pois começaremos um processo do zero.

Primeiro, buscaremos o assistente de origem, que será uma conexão com o *Data Lake*. Modificaremos o nome desse componente para "Carga do dado da Tendência do Data Lake".

A conexão será com o *Data Lake* e, ao invés de uma tabela, usaremos o seguinte comando SQL:

```sql
SELECT [cod_loja]
        ,[cod_cliente]
        ,[cod_produto]
        ,[cod_dia]
        ,[quantidade_vendida_tend]
        ,[custo_venda_tend]
        ,[valor_venda_tend]
    FROM [tbl_tendencia]
    WHERE CONVERT(INT, SUBSTRING([cod_dia],1,4)) = ?
AND CONVERT(INT, SUBSTRING([cod_dia], 5,2)) = ?
```

Vale lembrar que, como estamos criando esse componente do zero, precisamos associar os dois parâmetros às variáveis existentes no processo. Então, vamos em "Parâmetros", selecionamos a primeira variável "User::ano" para "Parâmetro0", e a variável "User::mes" para "Parametro1".

Para carregar a tendência, precisaremos ter mais quatro consultas, cada uma delas olhando as tabelas de dimensões do *Data Warehouse* para, depois, realizarmos as junções. Portanto, precisamos de um novo assistente de origem, que será uma conexão com o *Data Warehouse*, pois as tabelas de dimensão estão lá.

Nomearemos a primeira conexão como "Dimensão Empresa", na qual usaremos a opção "Tabela ou exibição" trazendo a tabela `[dbo].[dim_empresa]`. Em seguida, copiaremos essa conexão e renomearemos a duplicata como "Dimensão Cliente", na qual usaremos a opção "Tabela ou exibição" trazendo a tabela `[dbo].[dim_cliente]`. Repetimos o processo para a terceira conexão, que será "Dimensão Produto" com a opção "Tabela ou exibição" e a tabela `[dbo].[dim_produto]`. Por fim, faremos uma quarta conexão chamada "Dimensão Tempo", também com a opção "Tabela ou exibição", e a tabela `[dbo].[dim_tempo]`.

Como faremos junções entre essas tabelas, precisaremos dos componentes de classificação, um para cada tabela que participará das junções. Portanto, vamos ligar cada classificação a uma tabela renomeando-as de acordo com a tabela a qual se liga.

Sendo assim, "Carga do dado da tendência do Data Lake" se ligará a "Classificação Tendência". Para realizar as junções, faremos a primeira entre o componente "Carga do dado da tendência do Data Lake" e "Dimensão Empresa", utilizando o código da empresa como campo em comum, então na primeira classificação selecionaremos `cod_loja`.

"Dimensão Empresa" se ligará a "Classificar Empresa", também selecionando `cod_loja`. "Dimensão Cliente" se ligará a "Classificar Cliente" e a classificação será pelo identificador natural da dimensão, portanto, selecionaremos `cod_cliente`. "Dimensão Produto" se ligará a "Classificar Produto", usando `cod_produto`. Por fim, "Dimensão Tempo" se ligará a "Classificar Tempo", usando `cod_dia`.

Dessa forma, iniciamos a classificação selecionando o código da loja, que é o nível mais baixo de empresa, e classificamos cada uma das demais dimensões pelo seu identificador natural.

Concluída a classificação, estamos prontos para fazer as junções.

&nbsp;

&nbsp;

# Fazendo as junções e gravando os dados da tendência

Vamos agora realizar as junções e, finalmente, gravar os dados da tendência no *Data Warehouse*. Voltando para o Visual Studio, temos o nosso projeto no *Integration Service*.

Começaremos fazendo a junção entre "Carga do dado da Tendência do Data Lake" e "Dimensão Empresa". Já classificamos a tabela original pelo mesmo identificador natural da empresa. Então, vamos adicionar um componente de junção de mesclagem que nomearemos como "Juntar com Empresa". Em seguida, ligamos "Classificação Tendência" e "Classificar Empresa" a "Juntar com Empresa", selecionando a opção "Entrada Esquerda da Junção de Mesclagem". Dentro, vamos manter todos os campos que estão vindo do *Data Lake*em "Classificação Tendência", adicionando apenas o `id_loja` no "Classificar Empresa".

Como ele vai participar de uma nova junção, precisamos novamente fazer uma classificação, que chamaremos de "Classificar Cliente Tendência". Isso indica que a classificação é pelo identificador do cliente que está vindo da tabela que está sendo feita a junção. Então, ligamos "Juntar com Empresa" a "Classificar Cliente Tendência", selecionando `cod_cliente`.

Agora, adicionaremos uma nova junção de mesclagem que chamaremos de "Junção de Cliente". Em seguida, ligamos "Classificar Cliente Tendência" a "Junção de Cliente", selecionando a opção "Entrada Esquerda da Junção de Mesclagem". Feito isso, ligamos "Classificar Cliente" a "Junção de Cliente", selecionando todos os campos de "Classificar Cliente Tendência" e somente `id_cliente` de "Classificar Cliente".

O que faremos agora é juntar esse resultado final com o produto. Portanto, criamos uma nova classificação que chamaremos de "Classificar Produto Tendência". A ela, ligaremos "Junção de Cliente" classificando pelo código natural do produto, ou seja, `cod_produto`.

Vamos criar uma nova junção e chamá-la de "Junção de Produto". A ela, associaremos "Classificar Produto Tendência", selecionando a entrada esquerda, e "Classificar Produto", selecionando todos os dados de "Classificar Produto Tendência" e somente `id_produto` de "Classificar Produto".

Por fim, vamos realizar uma nova classificação e chamá-la de "Classificar Tempo Tendência". Ligaremos "Junção de Produto" a ela. Em seguida, criamos uma nova junção que nomearemos como "Junção do Tempo". Essa classificação será por `cod_dia`, da "Classificar Tempo Tendência". Depois, ligamos a "Junção do Tempo", com entrada pela esquerda. A "Junção do Tempo", ligamos "Classificar Tempo", pelo lado direito, selecionando todos os campos de "Classificar Tempo Tendência" e somente `id_dia` de "Classificar Tempo".

Note que várias tarefas estão sendo conectadas, então vamos verificar se está tudo certo. Para isso, incluiremos uma coluna derivada e a ligaremos a "Junção do Tempo", habilitando o visualizador de dados. Feito isso, vamos salvar.

Na aba de fluxo de controle, clicamos com o botão direito do mouse sobre "Carga da tabela da Tendência" e selecionamos "Executar Tarefa".

Então, temos todos os dados da tendência, como quantidade, custo, valor e IDs.

Agora, vamos realizar a gravação desses dados dentro da tabela. Para isso, removemos a coluna derivada, colocamos uma dimensão de alteração lenta, nomeando-a como "Gravação da Tendência do DW" e juntamos com "Junção do Tempo".

Escolheremos a conexão com o *Data Warehouse* e salvamos em `[dbo].[fact_tendencia]`. Note que ele já organiza todos os IDs e todas as variáveis que estão vindo do *Data Lake*. Vamos alterar o tipo de `id_cliente`, `id_dia`, `id_loja` e `id_produto` para `Business key`. Depois, clicamos em "Next".

Temos três atributos, todos do tipo `Changing attribute`. Agora, clicamos em "Next" até finalizar e fechar a aba.

Note que o processo foi organizado. Vamos salvar e executar.

Então, clicamos na aba "Fluxo de Controle" e vamos no *Data Warehouse* olhar a tabela de tendência, `dbo.fact_tendencia`. Note que ela está vazia. Ao voltar para o *Visual Studio*, clicamos em "Carga da Tabela de Tendência", com o botão direito do mouse, e executamos a tarefa.

Agora, voltamos a `dbo.fact_tendencia` e executamos a consulta. Ao fazer isso, note que os dados da tendência foram colocados dentro do *Data Warehouse*, usando como referência os identificadores primários de cada membro da dimensão.

> Visualização dos primeiros 5 registros da tabela. Para acessá-la na íntegra, execute o processo na sua máquina.

> | id_loja | id_cliente | id_produto | id_dia | quantidade_vendida_tend | valor_venda_tend | custo_venda_tend |  
> | --- | --- | --- | --- | --- | --- | --- | --- |  
> | 1 | 2 | 0 | 2 | 4102 | 32.087 | 109,538 | 81,862 |  
> | 2 | 2 | 0 | 3 | 4102 | 48,488 | 1674,288 | 1401,4 |  
> | 3 | 2 | 0 | 4 | 4102 | 53,537 | 136,587 | 91,025 |  
> | 4 | 2 | 0 | 5 | 4102 | 59.95 | 329,538 | 254,837 |  
> | 5 | 2 | 0 | 6 | 4102 | 55,462 | 166,375 | 141,438 |

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Entendendo a tendência</span>

Em vídeos anteriores, abordamos que, para calcular o status do KPI, precisamos do orçamento e da tendência. Ter esses dois conjuntos de dados históricos, juntamente com o realizado, é essencial para o cálculo do KPI. Carregamos no nosso *Data Warehouse* a tendência e o orçado provenientes do Data Lake.

Também discutimos como as empresas constroem seus orçamentos, o que é o orçamento, os cuidados que devemos ter ao usar dados rateados, entre outros. Agora, é hora de entender o que é a tendência e como ela é determinada.

Vamos entender, neste vídeo, o que é a tendência de uma **série histórica**. Uma série histórica é uma coleção de dados coletados ao longo do tempo, geralmente em intervalos regulares. No nosso exemplo da *Atacadez*, temos dados de quantidade vendida, valor da venda e custo da venda. Todos esses dados são coletados e armazenados no *Data Warehouse* com valores diários, para cada loja, cada produto e cada cliente.

A análise de tendência de uma série histórica é uma análise para entender o comportamento desses dados ao longo do tempo e tentar prever o que ocorrerá no futuro. A tendência está normalmente relacionada com a direção para a qual os dados estão se movendo: se estão aumentando, diminuindo, ou se estão, por exemplo, relativamente estáveis ao longo do tempo. Identificar a tendência de uma série histórica é fundamental para que as pessoas em posições executivas possam tomar decisões, prever futuros e entender diversos impactos sobre o negócio que estão gerenciando.

Vamos pontuar algumas etapas-chave para explicar o funcionamento da tendência de uma série histórica de dados:

1.  **Visualização dos dados**: Precisamos começar a visualizar os dados da série histórica de forma gráfica. Um gráfico de linha ou um gráfico de dispersão ao longo do tempo pode ajudar a identificar certos padrões visuais iniciais. Uma tendência ascendente é representada, por exemplo, por uma linha inclinada para cima; já uma tendência descendente, por uma linha para baixo; e uma tendência plana, por uma linha quase horizontal dentro do gráfico.
    
2.  **Suavização dos dados**: Em muitos casos, é importante aplicar técnicas de suavização de dados para eliminar certas flutuações temporais que ocorrem nas séries históricas. Normalmente, essas técnicas chamam-se **médias móveis** ou **suavização exponencial**, que são métodos comumente usados para realizar essa tarefa. Vemos muito a técnica de suavização em gráficos que mostram, por exemplo, preços de ações no mercado de valores. Esses preços, como sabemos, sofrem variações significativas, então a utilização de médias móveis suaviza essas variações.
    
3.  **Análise estatística**: Precisamos usar métodos estatísticos para quantificar a tendência. Um desses métodos mais usados é a **regressão linear**, que fornece uma equação que descreve como o dado se comporta à medida que o tempo avança.
    
4.  **Interpretação da tendência**: Uma vez que a tendência tenha sido identificada, é importante interpretar o que ela significa em relação ao fenômeno que estamos estudando. Por exemplo, se os dados mostram uma tendência ascendente de vendas ao longo dos anos, isso pode significar um crescimento de mercado.
    
5.  **Previsão**: Compreender a tendência permite fazer previsões do que ocorrerá no futuro. Basta estender a linha de tendência para projetar o comportamento futuro dos dados com base na tendência dos dados realizados.
    
6.  **Consideração dos fatores externos**: A tendência pode ser afetada por fatores externos, como mudanças econômicas, políticas ou sazonais. É importante levar em consideração esses fatores ao interpretar o resultado da tendência.
    
7.  **Trazer a tendência ao valor presente**: Esta técnica significa buscar pontos futuros, que são extensões da curva de tendência, e trazê-los para o ponto presente. O objetivo é comparar esses pontos com o realizado e com o orçado. Usaremos essa técnica quando formos calcular os status dos KPIs.
    

O gráfico a seguir mostra uma série histórica com dados passados. Se observarmos visualmente, podemos notar que, apesar de haver períodos em que um valor sobe e o outro desce, ao longo do tempo podemos afirmar que os dados estão crescendo. Mas, para que computadores deem essas soluções, é preciso aplicar métodos matemáticos para expressar essa tendência de forma clara e objetiva.

![Gráfico de dispersão com eixo horizontal marcado pelos tempos "Passado", "Presente" e "Futuro" e eixo vertical sem legenda. Pontos verdes que simbolizam "Valor Realizado" aparecem ao longo do eixo temporal, especialmente no tempo "Passado", mostrando uma tendência de dispersão.](../_resources/0bb7dd65-02f1-4f4a-bf43-cba3a26a.png)

Aplicando um método de **regressão linear**, podemos obter uma linha que acompanha a trajetória dos pontos, expressando a tendência dos valores apresentados.

![Gráfico anteriormente descrito. Agora, os pontos, representando "Valor Realizado", estão conectados por uma linha ascendente, indicando um aumento ao longo do tempo.](../_resources/59adedb0-b4e3-446a-98d7-8117a7a3.png)

Então, podemos pegar essa linha e estendê-la para dados futuros. É como se quiséssemos prever, baseado nessa reta, como serão as vendas futuras.

![Gráfico anteriormente descrito. Agora, a linha ascendente que conecta os pontos se estende até o tempo "Futuro", onde possui pontos representando "Valor Tendência".](../_resources/50fc482d-3ceb-4acd-80f2-09489040.png)

Neste gráfico, vimos uma tendência através de regressão linear. Mas existem muitos outros métodos de medir tendência cujo resultado final não será uma reta, mas algo que acompanhe a sazonalidade da variação da série histórica.

Vamos a um exemplo prático usando venda de panetone. Sabemos que vendemos muito panetone apenas no final do ano, perto das festas de Natal e da virada do ano. Mas ao longo do ano podemos ter vendas esporádicas desse produto. Se usarmos uma tendência linear, o valor será uma média muito distante da realidade.

Teríamos, por exemplo, uma distribuição na qual, durante o ano, temos vendas muito pequenas e, no final do ano, vendas muito grandes. Se aplicarmos uma regressão linear, obteríamos uma média entre os pontos iniciais e finais.

![Gráfico de dispersão com eixo horizontal marcado pelos tempos "Passado", "Presente" e "Futuro" e eixo vertical sem legenda. Pontos verdes que simbolizam "Valor Realizado" aparecem ao longo do eixo temporal, especialmente no tempo "Passado", mostrando uma tendência de dispersão. Porém, os primeiros pontos representam valores realizados baixos, em contraste com os últimos, que representam valores realizados muito altos. Uma linha ascendente é traçada entre os pontos baixos e os pontos altos, mas sem conectá-los, evidenciando a discrepância existente entre eles.](../_resources/094ad2f5-43a2-4df6-9876-5de0ac3e.png)

Se tentarmos prever o futuro com essa linha, encontraremos um valor muito diferente da realidade. Isso significa que a curva da tendência deveria ser uma curva que acompanha a sazonalidade, como mostra o gráfico a seguir.

![Gráfico de dispersão com eixo horizontal marcado pelos tempos "Passado", "Presente" e "Futuro" e eixo vertical sem legenda. Pontos verdes que simbolizam "Valor Realizado" estão dispersos no tempo "Passado" e se aproximam do tempo "Presente". Há uma discrepância significativa, pois começam com valores realizados baixos e alternam para valores realizados altos. Uma linha verde acompanha os pontos, mostrando uma tendência regular inicial, que depois cresce e volta a se curvar para baixo.](../_resources/eeb610ae-6724-4f90-923a-5692b079.png)

Se estendêssemos essa curva para outros períodos, acompanharíamos essa sazonalidade e encontraríamos uma previsão mais próxima da realidade.

O objetivo deste curso não é ensinar como se calculam essas linhas ou curvas de tendência. Normalmente, usamos métodos matemáticos para fazer isso. Linguagens como *Python* ou *R* são excelentes para calcular tendências, pois têm várias bibliotecas já prontas que fazem esses cálculos.

Inclusive, aqui na Alura, temos ótimos cursos sobre esse assunto, ensinando a calcular essas tendências. Caso queira se aprofundar, procure no site da escola por cursos que falam especificamente sobre isso.

No exemplo da Atacadez, já temos os dados da tendência calculados no *Data Lake*. O método usado e como foi usado não é relevante para este curso. O importante é saber que ela está no *Data Lake*, já a transportamos para o *Data Warehouse* e agora estamos prontos para calcular os KPIs!

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Carga completa</span>

Nesta aula, realizaremos uma carga completa da base de dados. Ou seja, iremos carregar todos os dados realizados, orçados e a tendência da série histórica completa que temos disponíveis para o nosso modelo AtacaDez.

Vamos ao Visual Studio para realizar essa carga.

Temos o esquema da carga completa do *Data Warehouse*. No processo de carregamento de dados (`Pacotes SSIS`), temos um pacote principal (`CargaPrincipal.dtx`), que realiza a carga do *Data Lake* e, em sequência, a carga do *Data Warehouse* e, por fim, a carga do *Data Mart*.

![Diagrama de fluxo de processo da carga principal mostrando etapas sequenciais conectadas por linhas verdes. Começa com o retângulo escrito "Carga do Data Lake" do lado superior esquerdo, seguindo para a direita com "Carga do Data Warehouse". Abaixo e à esquerda, conectado ao primeiro retângulo, temos "Escreve o LOG", e abaixo e à direita, conectado ao segundo retângulo, temos "Carga do DataMart". Cada retângulo possui um ícone representativo ao lado esquerdo: Data Lake e Data Warehouse têm um ícone de banco de dados, e "Escreve o LOG" e "DataMart" têm um ícone de papel e caneta."](../_resources/6bd94ff8-888d-43b4-a304-aaad751a.png)

Toda essa carga é baseada nos arquivos fontes que estão no diretório `IN` do processo de carga. Fazemos isso ao longo dos módulos dessa formação. O que faremos agora é **executar** esse processo todo, para todos os dados que temos disponíveis.

O que temos disponível nas nossas bases de dados, se não estou enganado, são **três anos de dados**. Vamos realizar essa carga completa.

> Sabemos que nem sempre todas as pessoas realizam os exercícios práticos que vamos fazer nos vídeos. Muitas pessoas podem estar nesse ponto e o projeto pode não estar funcionando corretamente ou podem existir erros que a pessoa estudante não conseguiu resolver.

Vamos mostrar como realizar a carga completa, que, vale ressaltar, demora **bastante tempo**. Não iremos mostrar essa carga sendo realizada no vídeo. Porém, depois, disponibilizamos para *download* os arquivos do *Data Warehouse*, resultados dessa carga completa, com os dados realizados, orçados e a tendência de tudo que temos no AtacaDez.

Se você não conseguir realizar essa carga completa usando o projeto do Visual Studio porque tem algum erro, pode recuperar o *backup* desses bancos que vamos disponibilizar para *download* nas atividades dessa aula.

Agora, vamos mostrar como será a carga completa.

## Executando a carga

Vamos ao nosso diretório na nossa máquina, esse diretório com todos esses dados que nós baixamos e carregamos em um dos primeiros cursos das nossas formações de *Business Intelligence*.

- BKPS
- DATA
- ETL
- ETL_EXERCICIO
- ETL_KPI
- OLD_DATA_MANUFATURA
- PRODUCAD
- PROJETOS
- PROJETOS_EXERCICIO

Navegamos para "ETL > mov" com todos os documentos de notas fiscais de 2021, 2022 e 2023 até dezembro:

> Os documentos abaixo foram parcialmente transcritos. Para conferi-lo na íntegra, realize o *download* do projeto na sua máquina.

- Movimento_Itens 2021_01.csv
- Movimento_Itens_2021_02.csv
- Movimento_Itens_2021_03.csv
- Movimento_Itens_2021_04.csv
- Movimento_Itens_2021_05.csv
- Movimento_Itens_2021_06.csv
- Movimento_Itens_2021_07.csv
- Movimento_Itens_2021_08.csv
- Movimento_Itens_2021_09.csv
- Movimento_Itens_2021_10.csv
- Movimento_Itens_2021_11.csv
- Movimento_Itens_2021_12.csv
- Movimento_Itens_2022_01.csv
- …

Copiamos todas essas notas fiscais selecionando-as e teclando "Ctrl + C" e a colamos no diretório `IN` dentro de "DATA > FATOS > NOTAS > IN".

Os períodos que estão no diretório `IN` são os que nosso processo do *Integration Service* vai criar um *loop* para carregar primeiro todo o *Data Lake*, depois vai registrar no *Data Lake* os dados que foram carregados e, por fim, carregar todo o *Data Warehouse*.

Precisamos aplicar o mesmo com os dados de **compras**. Navegamos para "Fontes > ETL > compra". Copiamos as notas fiscais e colamos no diretório `IN` dentro de "DATA > FATOS > COMPRAS > IN". Também temos três anos de dados.

Com todas essas informações nos diretórios corretos, já podemos ir para o nosso projeto no Visual Studio.

Vamos minimizar a área de trabalho e clicar com o botão direito no pacote `cargaPrincipal` do lado direito e escolher a opção "Executar Pacote" para executar esse **pacote todo**.

A carga está iniciando, começa com o *Data Lake*, depois passa para o *Data Warehouse* e por fim para o *Data Mart*.

Ele vai fazendo um *loop*, carregando os dados do cabeçalho das notas fiscais. Se formos ao diretório `IN` de notas (em "Fontes > DATA > FATOS > NOTAS > IN"), percebemos que os arquivos vão diminuindo conforme consta no canto inferior esquerdo, porque cada arquivo que ele vai carregando, ele vai movendo para o diretório `OUT`, que mostra os arquivos que foram carregados.

Esse processo, principalmente quando ele começa a carregar os itens, demora um pouco mais. Não temos uma estimativa de tempo, mas no próximo vídeo podemos informar quanto tempo nosso processo demorou para carregar.

**Deixaremos carregando**. No final desse processo, se a carga do *Data Warehouse* der certo, com os dados realizados, orçados e tendência, teremos todo o *Data Warehouse* completo para podermos prosseguir para os próximos passos desse curso que consistirão no cálculo do *KPI*.

&nbsp;

&nbsp;

# Criação do Data Mart

# <span style="color: #ffffff;">Visualizando o orçado e a tendência</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Antes de começarmos a trabalhar com KPI dentro do</span> *Data Mart*<span style="color: #c0c0c0;">, vamos visualizar graficamente uma série histórica do</span> **realizado**<span style="color: #c0c0c0;">, do</span> **orçado** <span style="color: #c0c0c0;">e da</span> **tendência**<span style="color: #c0c0c0;">, após a carga completa da base de dados.</span></span>

> Caso não tenha conseguido fazer a carga completa, não tem problema. Vamos disponibilizar um link nas atividades desta aula para download do arquivo `DW_ATACADEZ_VIDEO_5_1.zip`. Ele é um backup do *Data Warehouse* completo, com todos os dados carregados.
> 
> Portanto, se quiser acompanhar os exercícios práticos que vamos fazer nos vídeos futuros, você pode recuperar essa base de dados e trabalhar com ela.

No nosso caso, o processo no *Visual Studio* funcionou corretamente. Carregamos três anos de dados e vamos analisar em três séries históricas: a série histórica do realizado, do orçado e da tendência.

Nós temos três consultas que também estarão nas atividades para serem copiadas. Todas elas analisam as informações para a loja 10 e o setor "Bebidas". Escolhemos aleatoriamente essa loja e esse setor para analisarmos as séries históricas gravadas no Data Warehouse. Temos então a consulta do orçado, da tendência e do realizado.

Vamos rodar a primeira consulta do **orçado**:

```sql
-- ORÇADO

SELECT sum(dbo.fact_orcado.quantidade_vendida_orcado) as quantidade_vendida_orcada, 
sum(dbo.fact_orcado.valor_venda_orcado) as valor_venda_orcada, 
sum(dbo.fact_orcado.custo_venda_orcado) as custo_venda_orcada,
dbo.dim_tempo.cod_mes
FROM     dbo.fact_orcado INNER JOIN
                  dbo.dim_produto ON dbo.fact_orcado.id_produto = dbo.dim_produto.id_produto INNER JOIN
                  dbo.dim_departamento ON dbo.dim_produto.cod_setor = dbo.dim_departamento.cod_setor INNER JOIN
                  dbo.dim_tempo ON dbo.fact_orcado.id_dia = dbo.dim_tempo.id_dia INNER JOIN
                  dbo.dim_empresa ON dbo.fact_orcado.id_loja = dbo.dim_empresa.id_loja
WHERE dbo.dim_empresa.cod_loja = '10' and dbo.dim_departamento.desc_setor = 'Bebidas'
GROUP BY dbo.dim_tempo.cod_mes
ORDER BY dbo.dim_tempo.cod_mes;
```

> *Visualização dos três primeiros registros da tabela. Para visualizá-la na íntegra, execute o código na sua máquina.*

| #   | quantidade_vendida_orcada | valor_venda_orcada | custo_venda_orcada | cod_mes |
| --- | --- | --- | --- | --- |
| 1   | 1341 | 6930 | 6073,99999999999 | 2021_01 |
| 2   | 1018 | 5151 | 5065 | 2021_02 |
| 3   | 1478 | 6152 | 5791 | 2021_03 |

Temos três indicadores e uma coluna com um mês. Vamos copiar todos esses dados e registrá-los em uma planilha de *Excel*. Podemos até inserir uma linha no topo para indicar que esses são os dados orçados.

Agora vamos repetir o processo para a **tendência**. Executaremos a consulta, copiaremos os dados e na planilha de Excel, colaremos e teremos a tendência.

```sql
-- TENDENCIA

SELECT sum(dbo.fact_tendencia.quantidade_vendida_tend) as quantidade_vendida_tend, 
sum(dbo.fact_tendencia.valor_venda_tend) as valor_venda_tend,
sum(dbo.fact_tendencia.custo_venda_tend) as custo_venda_tend,
dbo.dim_tempo.cod_mes
FROM     dbo.fact_tendencia INNER JOIN
                  dbo.dim_produto ON dbo.fact_tendencia.id_produto = dbo.dim_produto.id_produto INNER JOIN 
                  dbo.dim_departamento ON dbo.dim_produto.cod_setor = dbo.dim_departamento.cod_setor INNER JOIN
                  dbo.dim_tempo ON dbo.fact_tendencia.id_dia = dbo.dim_tempo.id_dia INNER JOIN 
                  dbo.dim_empresa ON dbo.fact_tendencia.id_loja = dbo.dim_empresa.id_loja
                WHERE dbo.dim_empresa.cod_loja '10' and dbo.dim_departamento.desc_setor = 'Bebidas'
GROUP BY dbo.dim_tempo.cod_mes
ORDER BY dbo.dim_tempo.cod_mes;
```

> *Visualização dos três primeiros registros da tabela. Para visualizá-la na íntegra, execute o código na sua máquina.*

| #   | quantidade_vendida_tend | valor_venda_tend | custo_venda_tend | cod_mes |
| --- | --- | --- | --- | --- |
| 1   | 145,563 | 635,349 | 516,538 | 2021_01 |
| 2   | 258,599 | 1121,901 | 917,037 | 2021_02 |
| 3   | 420,475 | 1922,612 | 1486,914 | 2021_03 |

Finalmente, vamos buscar o **realizado**, executar e copiar o resultado da consulta.

```sql
-- REALIZADO

SELECT sum(dbo.fact_venda.quantidade_vendida) as quantidade_vendida, 
sum(dbo.fact_venda.valor_venda) as valor_venda,
sum(dbo.fact_venda.custo_venda) as custo_venda,
dbo.dim_tempo.cod_mes
FROM     dbo.fact_venda INNER JOIN
                  dbo.dim_produto ON dbo.fact_venda.id_produto = dbo.dim_produto.id_produto INNER JOIN
                  dbo.dim_departamento ON dbo.dim_produto.cod_setor = dbo.dim_departamento.cod_setor INNER JOIN 
                  dbo.dim_tempo ON dbo.fact_venda.id_dia = dbo.dim_tempo.id_dia INNER JOIN
                  dbo.dim_empresa ON dbo.fact_venda.id_loja = dbo.dim_empresa.id_loja
                WHERE dbo.dim_empresa.cod_loja = '10' and dbo.dim_departamento.desc_setor = 'Bebidas'
GROUP BY dbo.dim_tempo.cod_mes
ORDER BY dbo.dim tempo.cod_mes;
```

> *Visualização dos três primeiros registros da tabela. Para visualizá-la na íntegra, execute o código na sua máquina.*

| #   | quantidade_vendida | valor_venda | custo_venda | cod_mes |
| --- | --- | --- | --- | --- |
| 1   | 1588 | 6931 | 5634,65002059937 | 2021_01 |
| 2   | 1233 | 5308 | 4369,00001716614 | 2021_02 |
| 3   | 1766 | 7644 | 6216,90002059937 | 2021_03 |

Na segunda planilha que criaremos, vamos inserir um **gráfico de linha**. Clicando com o botão direito do mouse sobre o gráfico, vamos em "Selecionar Dados…". Depois vamos adicionar uma **série histórica**.

Essa série histórica se chamará `ORCADO` e o valor da série será a terceira coluna da consulta, que representa o custo da venda (`custo_venda`).

Verificamos que `custo_venda` está na terceira coluna para todas as séries. Então, vamos usar como exemplo o custo da venda para comparar o real, a tendência e o orçado.

Temos o gráfico abaixo para o **orçado**:

![Gráfico de linhas azul mostrando flutuações em um dado chamado 'ORÇADO' ao longo de um eixo horizontal numerado de 1 a 36 em intervalos de 1, com um eixo vertical mostrando uma escala de 0 a 12000 em intervalos de 2000. O gráfico apresenta oscilações, com picos e vales, e uma tendência de subida notável entre os pontos 34 e 36.](../_resources/8518b6a9-fe0d-4427-a5e7-72b094b5.png)

Vamos adicionar uma nova série que se chamará `REALIZADO`. Para esta série, vamos puxar da terceira coluna da consulta `REALIZADO`.

![Gráfico de linhas com duas séries de dados, exibindo valores ao longo de 36 períodos. A linha azul e a linha laranja oscilam de forma variada ao longo do gráfico. A linha azul começa acima da linha laranja, elas cruzam em diversos pontos, e termina acima da laranja no último ponto do eixo horizontal. A escala vertical vai de 0 a 12000 em intervalos de 2000, e a horizontal é numerada de 1 a 36 em intervalos de 1.](../_resources/519fd774-ee74-4a79-9b2d-a74e51c8.png)

Agora note que, em azul, temos o orçado, e em laranja, o realizado.

Perceba que o desempenho foi muito bom; a série histórica do orçado está um pouco acima do realizado. Nesse caso, como é custo, é bom; os custos foram mais baixos do que o orçamento.

A questão se é bom estar próximo ou longe do orçamento de forma positiva ou negativa, discutiremos mais adiante. O importante agora é que temos uma curva realizada e uma curva orçada que não se coincidiram, ou pelo menos respeitaram a mesma sazonalidade, mas tiveram alguns pontos de discrepância.

Como entra a curva da **tendência**? Vamos analisar o resultado adicionando mais uma série histórica, que será a `TENDENCIA`. Vamos pegar os dados da terceira coluna da consulta `TENDENCIA`.

![Gráfico de linhas com duas séries de dados ao longo de 36 unidades de tempo na horizontal, indicadas pelos números de 1 a 36 em intervalos de 1. O eixo vertical representa a quantidade, variando de 0 a 12000 em intervalos de 2000. Uma linha é azul e apresenta flutuações mais acentuadas, incluindo picos que ultrapassam 10000. A outra linha é laranja, mostra uma tendência de aumento menos volátil e cruza a linha azul algumas vezes. Uma linha de tendência cinza cruza o gráfico na diagonal, indicando um aumento geral ao longo do tempo.](../_resources/61c0cebe-2f88-444d-a2c7-f5fab314.png)

Observe a curva da tendência em cinza: ela começa no zero e cresce até o ponto 12, porque o método escolhido para fazer a tendência da curva sempre utiliza as 12 últimas medidas da série histórica. Como no primeiro ano não temos um passado para fazer a análise da tendência, a curva fica assim.

O que vale é a partir do segundo ano, ou seja, a partir do ponto em que a curva da tendência começa a ter um certo sentido. Note que ela acompanha de forma quase constante, porque realmente o realizado, que é a curva laranja, se manteve na reta e teve uma leve subida ao final.

## Conclusão

Assim, temos as três curvas: a curva do orçado, a do realizado, e a da tendência.

Com essas três informações, estamos prontos para calcular o KPI. Na sequência, vamos fazer o cálculo do status do KPI.

&nbsp;

&nbsp;

# Adicionando tabelas na visualização de dados

<span style="color: #c0c0c0;">Vamos começar a preparar o</span> *Data Mart* <span style="color: #c0c0c0;">para calcular o status dos KPIs. Para isso, inicialmente, precisamos adicionar na visualização de dados do Data Mart as novas</span> **tabelas** <span style="color: #c0c0c0;">que acabamos de criar e carregar no</span> *Data Warehouse*<span style="color: #c0c0c0;">, que são a tabela de</span> **orçamento** <span style="color: #c0c0c0;">e a de</span> **tendência**<span style="color: #c0c0c0;">.</span>

No projeto do *Visual Studio*, vamos acessar `DataMartVendas`. Dentro dele, temos a pasta "Exibição da Fonte de Dados". Vamos abrir esta pasta e dar um duplo clique na visualização `DW ATACADEZ.dsv`.

As tabelas de orçamento e de tendência ainda não estão inclusas. No entanto, clicando no ícone de adição no canto superior esquerdo, podemos adicionar novas tabelas da fonte de dados, que é o Data Warehouse, para visualização dessas fontes.

As tabelas `fact_orcado` e `fact_tendencia` serão adicionadas. Após confirmar a ação, essas duas tabelas serão mostradas na visualização.

Ainda que os relacionamentos estejam um pouco escuros, eles já serão ativados. Precisamos apenas alterar os nomes. Primeiro, vamos mudar o nome da tabela. Na tabela `fact_tendencia`, vamos alterar o "*FriendlyName*" para `Tendência`. Na `fact_orcado`, vamos alterar para `Orçado`.

Nas tabelas de `Tendência` e de `Orçado`, vamos modificar o nome dos indicadores para algo similar ao que usamos quando criamos os indicadores realizados. Em `Orçado`, vamos alterar o "FriendlyName" de `quantidade_vendida_orcado` para `Quantidade Vendida Orçada`. O `valor_venda_orcado` será chamado de `Valor da Venda Orçada`. Por fim, `custo_venda_orcado` será `Custo da Venda Orçada`.

Faremos o mesmo com a tabela `Tendência`. No lugar de `quantidade_vendida_tend`, vamos alterar para `Quantidade Vendida Tendência`. O `valor_venda_tend` será `Valor da Venda Tendência`. Por último, `custo_venda_tend` será `Custo da Venda Tendência`.

Com essas alterações, as conectividades serão habilitadas.

## Conclusão

Temos as conectividades dessas duas novas tabelas de fato às tabelas de dimensão. Com isso, concluímos a primeira etapa para formatar os KPIs no Data Mart.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Criando novo Data Mart</span>

De volta ao projeto no *Visual Studio*, estamos em `DataMartVendas`. Iremos criar um novo Data Mart, um novo cubo. Este cubo terá os indicadores **realizados**, os **orçados** e os de **tendência**.

Para isso, clicaremos com o botão direito do mouse sobre "Cubos" e selecionaremos "Novo Cubo…". Um assistente aparecerá. Vamos criar um cubo usando as **tabelas existentes**. Selecionaremos as três tabelas de fato que temos no *Data Warehouse*, que são: `Venda`, `Orçado` e `Tendência`.

Todos os indicadores que existem nessas três tabelas de fato serão exibidos. Vamos remover apenas o indicador "Contagem Venda", pois não queremos o indicador que conta linhas.

Carregaremos no cubo os seguintes indicadores: a quantidade, o valor da venda e o custo real; a quantidade, o valor da venda e o custo orçado; e a quantidade, o valor da venda e o custo tendência.

O assistente identificará as quatro **dimensões** que já configuramos anteriormente. Então, aproveitaremos as dimensões que já existem no projeto para este novo cubo. No fim, é apresentado como será o cubo no final. Vamos renomeá-lo para `DW ATACADEZ KPI` e clicar em "Concluir".

O cubo será mostrado no diagrama. Nesse diagrama, podemos visualizar as **dimensões** e as **tabelas de fato**. Para podermos transportar isso para o *Analysis Services*, clicamos com o botão direito do mouse sobre `DataMartVendas` e selecionamos "Processar…".

Em seguida, clicaremos "Sim" nas próximas duas janelas de diálogo e o processo começará.

Assim que o processo for executado, iremos ao *Management Studio* e faremos uma conexão com o Analysis Services. Em "Banco de Dados", temos "`DataMartVendas` > Cubos", e agora temos um segundo cubo chamado `DW ATACADEZ KPI` que possui medidas vindas do orçado, da tendência e da venda, que é o realizado.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Análise gráfica do KPI</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">No</span> *Data Mart* <span style="color: #c0c0c0;">que criamos no vídeo anterior, temos três séries históricas para cada indicador: o valor do orçamento, da tendência e do realizado. Como</span> **calcular os KPIs** <span style="color: #c0c0c0;">baseados nessas três séries? Vamos entender um pouco disso neste vídeo!</span></span>

Suponha que queremos calcular o KPI de um indicador em determinado período, mais especificamente, em determinado mês. Para isso, precisamos ter três valores associados a este mês:

> - O **valor realizado**, que já temos no *Data Warehouse* e também no Data Mart;
> - O **valor orçado**, que também está no Data Mart;
> - E precisamos de um terceiro indicador chamado **valor da tendência trazido ao valor presente**. Não temos isso no Data Mart. O que temos no Data Mart é a tendência normal.

Vamos tentar entender o que significa "trazido ao valor presente" a partir de um gráfico que já mostramos em vídeos anteriores. É o gráfico de determinada série histórica.

![Gráfico de dispersão com linha de tendência sobreposta, apontando crescimento ao longo do tempo. Os eixos horizontal e vertical são verdes, com o horizontal marcado com as palavras 'Passado', 'Presente' e 'Futuro'. Os pontos de 'Valor Realizado' estão ao redor da linha de tendência no lado esquerdo, enquanto os pontos de 'Valor Tendência' estão sobre a linha à direita.](../_resources/60c30c57-8be1-4844-a16f-81ae9519.png)

Temos o ponto **presente**, que é o mês no qual queremos calcular o KPI, e à esquerda desse ponto, temos os resultados dos dados realizados (**passado**).

A primeira coisa que precisamos fazer é **calcular a tendência**. A tendência é representada pela reta. Subindo esta reta, conseguimos visualizar os valores futuros. A reta foi obtida por regressão linear.

Interpolamos estes pontos do **futuro** e temos uma previsão do que vai acontecer com esta série histórica nos meses subsequentes ao mês presente.

Vamos adicionar a este gráfico a reta do **valor orçado**. Ele será representado como uma reta, mas não necessariamente terá este comportamento. Há dois vídeos atrás, quando colocamos os dados do *Data Warehouse* no *Excel*, vimos que os dados orçados acompanham mais ou menos a sazonalidade dos dados realizados. Porém, para facilitar a visualização, o valor orçado será uma reta.

Precisamos obter o KPI do valor de hoje. Mas como precisamos ter neste eixo dados do orçado, do realizado e da tendência, a tendência representada em verde-claro só tem valores futuros.

Até temos na série histórica a tendência do mês atual, mas a tendência deste mês é resultado de coisas que aconteceram. Portanto, a tendência que depende dos dados que estão no mês presente, ainda vai acontecer. São essas séries históricas futuras.

Elas existem porque o valor realizado está no presente. Se esse valor realizado não existisse nesse determinado período, os valores futuros talvez sofressem alguma variação.

Então precisamos ter mais um **indicador**. Precisamos ter o valor da tendência futura no dado de hoje, ou seja, no valor presente. Para isso, devemos conhecer o conceito de **período de comparação do KPI**.

![Gráfico de linhas representando uma comparação de KPI com três séries de dados: 'Valor Realizado', 'Valor Tendência' e 'Valor Orçado'. O eixo horizontal está dividido em três seções rotuladas como 'Passado', 'Presente' e 'Futuro'. Há pontos de dados dispersos indicando o valor realizado, uma linha horizontal contínua indicando o valor orçado e uma linha ascendente indicando a tendência. O gráfico tem um esquema de cores em tons de verde.](../_resources/5d4d0b8e-0071-4ba1-8c28-ea79edf1.png)

Esse período corresponde ao número de dias, semanas, meses, enfim, de períodos que compõem a granularidade da série histórica, que sabemos ser o suficiente para, por exemplo, através de determinadas ações administrativas ou de marketing, mudar determinado cenário.

Esse período de comparação de KPI vai depender de cada tipo de negócio. Dependerá muito de como os processos organizacionais da empresa estão construídos para decidir quanto de período futuro vamos usar como comparação do KPI. Se esse período é de dois, três, quatro, cinco meses, a empresa irá decidir.

Digamos que, no nosso exemplo, esse período seja de quatro períodos, como está marcado no gráfico. Então, trazer a tendência ao valor presente é buscar o valor da tendência do último período e representá-lo no período de hoje.

Assim, teremos no eixo presente os três valores: o valor do orçado, o valor do realizado e o valor do previsto deslocado quatro períodos no tempo ao valor presente.

![Gráfico de linhas e dispersão representando a comparação de KPI com três conjuntos de dados: 'Valor Realizado' em pontos verdes claros, 'Valor Tendência' com uma linha verde sólida diagonal e pontos sobre a linha, e 'Valor Orçado' com uma linha verde-escura horizontal com pontos sobre ela. O eixo horizontal está dividido em três partes: 'Passado', 'Presente' e 'Futuro'.](../_resources/627f939f-df8f-4cd5-b994-2404a367.png)

Dessa forma, temos os três indicadores necessários para construir o KPI.

## Conclusão

A primeira parte do trabalho que precisamos fazer no Data Mart para calcular o status é montar esse novo indicador. Seria a tendência ao valor presente baseado no período de comparação do KPI que vai ser determinado pela AtacaDez.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Trazendo a tendência ao valor presente</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Vamos criar o novo indicador necessário para o cálculo do KPI, que é a</span> **tendência trazida ao valor presente**<span style="color: #c0c0c0;">.</span></span>

Com o *Management Studio* aberto, vamos clicar sobre o servidor do *Analysis Services* e depois em "Nova Consulta" na barra de ferramentas superior. Ao fazer isso, serão exibidos os cubos associados e vamos selecionar o cubo `DW ATACADEZ KPI`. Vamos colar o MDX abaixo na consulta:

```sql
WITH MEMBER
[Measures].[Quantidade Vendida Tendência Presente]
AS '([Measures].[Quantidade Vendida Tendência],
ParallelPeriod([Tempo].[Hierarquia Calendário].[Nível Mês], -6, 
[Tempo].[Hierarquia Calendário].Currentmember))'
SELECT
({[Tempo].[Hierarquia Calendário].[Nível Mês]})
ON ROWS,
({[Measures].[Quantidade Vendida Tendência], [Measures].[Quantidade Vendida Tendência Presente]})
ON COLUMNS
FROM
[DW ATACADEZ KPI]
WHERE
({[Produto].[Hierarquia Departamento].[Nível Setor].&[Bebidas]}
,{[Empresa].[Loja].&[LOJA 10]})
```

Vamos entender o que esse MDX faz? Nas linhas, ele seleciona os meses, mês a mês. Nas colunas, ele seleciona a variável `Quantidade Vendida Tendência` e uma nova variável chamada `Quantidade Vendida Tendência Presente`, que nós vamos calcular como sendo uma **variável calculada**.

A primeira coisa que precisamos fazer para trazer a tendência ao valor presente é determinar qual vai ser o **período de comparação do KPI**. É aquele período que tem a ver com cada negócio, compõe o tempo suficiente para determinadas ações administrativas poderem surtir efeito.

No caso da AtacaDez, esse período constitui **seis meses**. Ou seja, sempre ao calcular o KPI do mês atual, vamos trazer a tendência do valor presente de seis meses para frente para hoje.

Para fazer isso, selecionamos a variável e vamos buscá-la usando a função `ParallelPeriod()`. Vimos isso no curso de MDX. Dentro da hierarquia mês, vamos trazer o -6, ou seja, vamos deslocar do mais antigo para a data mais nova, do futuro para o presente, e vamos exibir o resultado no `Currentmember` do elemento que está selecionado em `Hierarquia Calendário`.

Nesse exemplo, fazemos um filtro para `Bebidas` e `LOJA 10`.

Vamos executar esse MDX?

> *Visualização dos cinco primeiros registros da tabela. Para visualizá-la na íntegra, execute o código na sua máquina.*

| #   | Quantidade Vendida Tendência | Quantidade Vendida Tendência Presente |
| --- | --- | --- |
| Abril 2022 | 1743,775 | 1721,049 |
| Maio 2022 | 1746,426 | 1696,024 |
| Junho 2022 | 1706,837 | 1731,774 |
| Julho 2022 | 1735,162 | 1715,45 |
| Agosto 2022 | 1731,587 | 1716,363 |

Vamos observar o ano de 2023. Na coluna à esquerda, temos a tendência. No valor presente de junho de 2023, por exemplo, ele corresponde ao valor que era em dezembro de 2023. O valor de dezembro foi deslocado para junho.

Da mesma forma, o valor de novembro foi deslocado para maio. Deslocamos seis meses da data mais antiga para a data mais nova, e esse será o indicador do valor presente que vamos usar no cálculo do KPI.

Agora que já determinamos esse indicador, vamos criá-lo usando a fórmula do MDX na nossa base de dados.

## Criando o indicador

De volta ao projeto no *Visual Studio*, com o cubo `DW ATACADEZ KPI.cube` aberto, vamos clicar em "**Cálculos**" na barra de ferramentas superior, para criar mais um elemento calculado.

Na tela que será aberta, clicaremos com o botão direito do mouse sobre a área "Organizador de Script" e selecionaremos a opção "Novo Membro Calculado". O nome desse membro calculado entre colchetes será `Quantidade Vendida Tendência Presente`. A fórmula de cálculo, vamos buscar do MDX.

```sql
([Measures].[Quantidade Vendida Tendência],
ParallelPeriod([Tempo].[Hierarquia Calendário].[Nível Mês], <span style="color: rgb(0, 92, 197);">-6</span>, 
[Tempo].[Hierarquia Calendário].Currentmember))
Copiar código
```

Vamos criar agora o **indicador** do valor presente para a venda. Vamos olhar primeiro qual seria a fórmula. O nome do indicador é `Valor Da Venda Tendência`. Teríamos, simulando primeiro no MDX, outro indicador que vamos chamar de `Valor da Venda Tendência Presente`.

Ele seria o `Valor Da Venda Tendência`, seguido do método `ParallelPeriod()`, na hierarquia `Tempo` e em `Nível Mês` para todos os elementos selecionados na hierarquia de `Tempo`.

```sql
MEMBER
[Measures].[Valor da Venda Tendência Presente]
AS '([Measures].[Valor Da Venda Tendência],
ParallelPeriod([Tempo].[Hierarquia Calendário].[Nível Mês], -6, 
[Tempo].[Hierarquia Calendário].Currentmember))'
```

Vamos exibir esse novo indicador só para testar, adicionando-o acima de `ON COLUMNS`. Para comparar, temos que rodar também o `Valor Da Venda Tendência` original. Assim, conseguimos verificar se houve o deslocamento correto.

```sql
`({[Measures].[Quantidade Vendida Tendência], [Measures].[Quantidade Vendida Tendência Presente], [Measures].[Valor Da Venda Tendência], [Measures].[Valor da Venda Tendência Presente]})`
Copiar código
```

Na tabela, notaremos que o valor de dezembro de 2023 na coluna "Valor Da Venda Tendência" foi para junho de 2023 na coluna "Valor da Venda Tendência Presente"; o valor de novembro de 2023 foi para maio de 2023; e assim por diante.

## Criando um novo membro calculado

Agora vamos criar um **novo membro calculado**. Vamos buscar o nome do indicador `Valor da Venda Tendência Presente` e inserir a fórmula.

```sql
([Measures].[Valor Da Venda Tendência],
ParallelPeriod([Tempo].[Hierarquia Calendário].[Nível Mês], <span style="color: rgb(0, 92, 197);">-6</span>, 
[Tempo].[Hierarquia Calendário].Currentmember))
Copiar código
```

Após salvar, podemos clicar sobre o projeto `DataMartVendas` com o botão direito do mouse e selecionar "Recompilar", para garantir que não vai dar nenhum problema. Depois, podemos **processar**.

Finalizado o processamento, vamos voltar no *Analysis Services* e copiar o `SELECT` abaixo:

```sql
SELECT
({[Tempo].[Hierarquia Calendário].[Nível Mês]})
ON ROWS,
({[Measures].[Quantidade Vendida Tendência], [Measures].[Quantidade Vendida Tendência Presente], [Measures].[Valor Da Venda Tendência], [Measures].[Valor da Venda Tendência Presente]})
ON COLUMNS
FROM
[DW ATACADEZ KPI]
WHERE
({[Produto].[Hierarquia Departamento].[Nível Setor].&[Bebidas]}
,{[Empresa].[Loja].&[LOJA 10]})
```

Podemos fechar a consulta e atualizar o projeto no pesquisador de objetos à esquerda. Em seguida, vamos abrir uma nova consulta, selecionar a base `DW ATACADEZ KPI`, e colar o MDX acima.

Se expandirmos "*Measures*" no grupo de medidas à esquerda, encontraremos as duas medidas `Quantidade Vendida Tendência Presente` e `Valor da Venda Tendência Presente`, pois colocamos com o mesmo nome.

Agora, as medidas correspondentes no código já buscam do cubo, não de um cálculo dentro do MDX. Ou seja, esse cálculo já está dentro do Data Mart. Se executarmos a consulta, teremos o mesmo resultado.

&nbsp;

&nbsp;

# Criação dos KPIs

# <span style="color: #ffffff;">Calculando o KPI <- muito importante</span>

Finalmente, aprenderemos **como calcular o status do KPI**. Atualmente, temos em nossa base, três valores:

> - Valor **Realizado**;
>     
> - Valor **Tendência (Presente)**;
>     
> - Valor **Orçado**
>     

A partir desses três indicadores, podemos calcular mais dois. O primeiro é a **variação do realizado**, a comparação do realizado com o orçado. O segundo é a **variação da tendência**, a comparação do orçado com a tendência trazida ao valor presente.

# Parcelas do KPI

### Variação do Realizado

Abaixo, temos a fórmula do primeiro novo indicador, que chamaremos de **Variação do Realizado**.

![Variação do Realizado igual à iniciafração Valor realizado sobre Salor orçado fimfração.](../_resources/a5cf89ba-d376-4475-9eb8-9af0b7bb.png)

Esse indicador dará o desempenho entre o que aconteceu hoje e o que deveria acontecer. Se essa divisão for igual a 1, significa que alcançamos nosso objetivo. O valor do nosso indicador foi igual à meta. Se for menor que 1, significa que o valor real está abaixo do valor orçado. Já, se for maior que 1, significa que está acima do orçado.

### Variação de Tendência

O segundo indicador será a divisão entre o valor da tendência ao valor presente e o valor orçado.

![Variação da Tendência igual à iniciafração Valor Tendência (Pres) sobre Valor Orçado fimfração.](../_resources/8ca77784-668f-4a99-bd98-6ddfb8f3.png)

Esse segundo indicador nos dará o desempenho entre o que acontecerá amanhã e o que deveria acontecer hoje. Isso nos dá um status de como estaremos.

Por exemplo, se a variação da tendência for **maior que 1**, significa que **vamos melhorar**, pois a nossa tendência será maior que o orçado, ou seja, ultrapassaremos a meta.

Se essa divisão for igual a 1, significa que o valor orçado será igual ao valor da tendência futura, ou seja, permaneceremos **indiferentes**. Há ainda a opção se, por acaso, o valor da tendência ao valor presente for menor que o valor orçado, isso significa que estaremos em uma **situação ruim**.

Estas comparações entre maior, igual, menor, igual a 1, nos dão um status desses indicadores. Podemos então determinar alguns intervalos de valores associados a esses status. Podemos criar quantos intervalos de valores quisermos. **Normalmente, usamos três intervalos de valores.**

Por exemplo, suponhamos que determinamos que:

> - Se a divisão entre o realizado e o orçado for menor que 0.7, estamos em uma situação **ruim**.
>     
> - Se estivermos entre 0.7 e 1.2, ou seja, próximos de alcançar o orçado ou passamos um pouco do orçado, estamos em uma situação **indiferente**.
>     
> - Se estivermos acima de 1.2, estamos em uma **boa** situação.
>     

O mesmo fazemos com a tendência. Comparamos a tendência ao valor presente e com o orçado para saber se estamos em uma situação ruim, indiferente ou boa.

> - Entre 0 e 0,7 = Ruim
>     
> - Entre 0,7 e 1,2 = Indiferente
>     
> - Maior que 1,2 = Bom
>     

Com esses dois indicadores, chegamos a uma situação na qual chamaremos de **transição**.

> Variação Realizado > Variação Tendência = Vou piorar
> 
> Variação Realizado = Variação Tendência = Mantem o mesmo
> 
> Variação Realizado < Variação Tendência = Vou melhorar

Se a variação do realizado for maior do que a variação da tendência, significa que, hoje, o valor está próximo ou acima do orçado. Mas, amanhã, quando trazemos a tendência ao valor presente, esse valor fica menor. Ou seja, vamos piorar.

Se a variação do realizado for igual à tendência, significa que permaneceremos indiferentes. A nossa evolução, ao longo do tempo, não mudará o nosso status. E, finalmente, se a variação entre o realizado for menor, significa que vamos melhorar.

Podemos associar isso em cores, tanto a variação do realizado quanto a cor da variação da tendência e a cor da transição.

![Três retângulos coloridos lado a lado horizontalmente. O primeiro, um retângulo preto com a legenda "Variação do Realizado". No centro, um verde-claro com a legenda "Transição". À direita, um retângulo na mesma tonalidade de verde com a legenda "Variação da Tendência".](../_resources/6911d907-bd35-45c0-b2a3-5e44dab8.png)

Esse status nos traz muitas conclusões sobre o modelo. Por exemplo, analisando a distribuição de cores, notamos que a variação do realizado está ruim, representado pela cor preta.

Já a transição está verde está boa, pois o valor da variação do realizado é menor do que a variação da tendência. E a variação da tendência também está boa. Isso significa que estamos em uma situação ruim, mas melhoraremos e ficaremos bem.

Uma outra situação é a seguinte:

![Três retângulos coloridos lado a lado horizontalmente. O primeiro, na cor preta, tem a legenda "Variação do Realizado". No centro, um verde-claro com a legenda "Transição". À direita, um retângulo preto com a legenda "Variação da Tendência.](../_resources/4ab416b1-4593-4a7a-94b9-ddaf6a25.png)

Nesse caso, estamos em uma situação ruim, vamos melhorar, porém, infelizmente, vamos continuar em uma situação ruim.

Vamos analisa agora uma terceira situação.

![Três retângulos coloridos lado a lado horizontalmente. O primeiro, na cor verde, tem a legenda "Variação do Realizado". No centro, um preto com a legenda "Transição". À direita, um retângulo amarelo com a legenda "Variação da Tendência".](../_resources/693424e4-6bba-4f9d-98f3-2b32624d.png)

Nesse caso, o KPI de vendas está bom, vai piorar, porém, ficará indiferente. Isso leva a algumas situações de cores que são impossíveis de acontecer. Um exemplo é o abaixo.

![Três retângulos coloridos lado a lado horizontalmente indicando uma situação, abaixo, mais três retângulos indicando a segunda situação de casos inválidos. Na primeira situação, temos o primeiro retângulo "Variação do Realizado" na cor preta, assim como o segundo, "Transição". Já o terceiro, "Variação da Tendência", tem a cor verde. Na segunda situação, os dois primeiros retângulos são verdes e o último preto.](../_resources/6cb51d27-1e8a-4afa-92ba-906843c5.png)

Por exemplo, não podemos estar em uma situação ruim, piorar, e ficarmos bem. Da mesma forma, se estamos em uma situação boa e melhoraremos, não podemos de repente ficar em uma situação ruim. Então, nem todas as combinações de cores nos dão conclusões válidas.

> Uma observação importante: tudo que falamos até agora tem a ver com indicadores que chamamos de positivos, ou seja, quanto mais, melhor.

Vamos analisar um exemplo. Se vendemos menos do que o orçado, estamos em uma situação ruim. Se vendemos mais do que o orçado, estamos em uma situação boa.

A representação de bom ou ruim é expressa nos quadros em que definimos os valores que representam essas classificações. Se estivermos abaixo de 0.7, por exemplo, estamos em uma situação ruim. Se estivermos entre 0.7 e 1.2, indiferentes e acima de 1.2, bem.

Além disso, a transição significa que se a variação do realizado for maior do que a da tendência, vamos piorar. Se for igual, ficaremos na mesma. E se for menor, ou seja, a variação do realizado for menor do que a tendência, melhoraremos.

Porém, temos outros tipos de indicadores que funcionam ao contrário. É o caso, por exemplo, do indicador de custos. Custos é algo que quanto mais gastamos, pior fica. Precisamos gastar o menos possível. Então, se estivermos abaixo da meta, estamos economizando dinheiro. Isso é bom.

Se aumentarmos esse valor e passarmos a meta, significa que estamos piorando. Cada vez que gastamos mais, pior fica a situação. Então, nesse caso, as cores se inverteriam.

Portanto, uma coisa importante é que, ao construir o KPI, precisamos **identificar** se os indicadores que são base desse KPI que estamos criando, são do tipo **"quanto mais, melhor"** ou **"quanto mais, pior"**.

&nbsp;

&nbsp;

# Calculando o Realizado X Orçado

<span style="color: #c0c0c0;">Percebemos que precisamos calcular mais três indicadores para termos as condições de apurar o KPI. Começaremos pela</span> **divisão entre o realizado e o orçado**<span style="color: #c0c0c0;">.</span>

No *Management Studio*, selecionaremos a base do *Analysis Service* "DESKTOP-G7KVMJN". Depois, na barra de menu superior, clicamos em "Nova Consulta" e escolhemos o banco `DW ATACADEZ KPI`.

Feito isso, encontramos o MDX referente a divisão entre a `Quantidade Vendida` e a `Quantidade Vendida Orçada`.

```sql
WITH
MEMBER [Measures]. [KPI Quantidade Real Orçado]
AS [Measures].[Quantidade Vendida]/[Measures]. [Quantidade Vendida Orçada]'
SELECT
{([Tempo].[Hierarquia Calendário].[Nível Mês])}
ON ROWS,
{([Measures]. [KPI Quantidade Real Orçado])}
ON COLUMNS
FROM
[DW ATACADEZ ΚΡΙ]
WHERE
({[Produto].[Setor].&[Bebidas]},{[Empresa]. [Hierarquia Empresa].[Nível Empresa].&[ATACADEZ].&[LOJA 10]})
```

Copiamos a segunda e terceira linha de código e colamos logo abaixo, criaremos outro indicador. Em `MEMBER`, apagamos `Quantidade Real Orçado` e passamos `Valor da Venda Real Orçado`.

Na linha abaixo, apagamos `Quantidade Vendida` e passamos `Valor da Venda`. Fazemos o mesmo com `Quantidade Vendida Orçada` e passamos `Valor da Venda Orçada`.

Após, em `ON ROWS`, no fim da linha, acrescentamos `[Measures].[KPI Valor da Venda Real Orçado]`. Dessa forma:

```sql
WITH
MEMBER [Measures]. [KPI Quantidade Real Orçado]
AS [Measures]. [Quantidade Vendida]/[Measures].[Quantidade Vendida Orçada]'
MEMBER [Measures]. [KPI Valor da Venda Real Orçado]
AS [Measures]. [Valor Da Venda]/[Measures]. [Valor Da Venda Orçada]
SELECT
{([Tempo].[Hierarquia Calendário].[Nível Mês])}
ON ROWS,
{([Measures]. [KPI Quantidade Real Orçado], [Measures].[KPI Valor da Venda Real Orçado])}
ON COLUMNS
FROM
[DW ATACADEZ KPI]
WHERE
({[Produto]. [Setor] & [Bebidas]}, {[Empresa]. [Hierarquia Empresa].[Nível Empresa] & [ATACADEZ].&[LOJA 10]})
```

Clicamos no botão "Executar" para verificar se deu certo. Repare que deu erro. Isso aconteceu em `ON ROWS`, quando temos dois indicadores os parênteses devem ficar por fora e quando temos dois membros da dimensão, eles precisam estar entre colchetes separados por vírgula. Da seguinte forma:

```sql
WITH
MEMBER [Measures]. [KPI Quantidade Real Orçado]
AS [Measures]. [Quantidade Vendida]/[Measures].[Quantidade Vendida Orçada]'
MEMBER [Measures]. [KPI Valor da Venda Real Orçado]
AS [Measures]. [Valor Da Venda]/[Measures]. [Valor Da Venda Orçada]
SELECT
{([Tempo].[Hierarquia Calendário].[Nível Mês])}
ON ROWS,
({[Measures]. [KPI Quantidade Real Orçado], [Measures].[KPI Valor da Venda Real Orçado]})
ON COLUMNS
FROM
[DW ATACADEZ KPI]
WHERE
({[Produto]. [Setor] & [Bebidas]}, {[Empresa]. [Hierarquia Empresa].[Nível Empresa] & [ATACADEZ].&[LOJA 10]})
```

Após corrigir, rodamos novamente e temos o seguinte resultado.

|     | KPI Quantidade Real Orçado | KPI Valor da Venda Real Orçado |
| --- | --- | --- |
| Janeiro 2021 | 1,18419090231171 | 1,0001443001443 |
| Fevereiro 2021 | 1,21119842829077 | 1,03047951854009 |
| Março 2021 | 1,19485791610284 | 1,24252275682705 |
| Abril 2021 | 0,908959537572254 | 0.908066920655955 |
| Maio 2021 | 1,07551669316375 | 1.21474358974359 |
| Junho 2021 | 1,13736263736264 | 1,15518962075848 |
| Julho 2021 | 1,00330687830688 | 1,06295166211659 |
| //Dados omitidos |     |     |

Todo resultado acima de 1 é bom, o que for 1 é igual e o que for abaixo é ruim. Notamos, por exemplo, a venda orçada, não podemos considerar muito o primeiro ano, precisamos considerar a partir do segundo ano em diante, devido ao problema da curva, da tendência que no início não tem um passado para poder calcular o valor exato. Analisaremos o ano de 2023, por exemplo.

|     | KPI Quantidade Real Orçado | KPI Valor da Venda Real Orçado |
| --- | --- | --- |
| Janeiro 2023 | 1,22507788161994 | 1,24655326768129 |
| Fevereiro 2023 | 1,17439120188531 | 1,27877947295423 |
| Março 2023 | 1,10315789473684 | 1,11599005799503 |
| Abril 2023 | 1,02266288951841 | 0,888938118446315 |
| Maio 2023 | 0,780262518230432 | 0,915737972275074 |
| Junho 2023 | 0,979721900347624 | 1,1660244059088 |
| Julho 2023 | 0,953667953667953 | 1,14006342494715 |
| Agosto 2023 | 0,772396056579511 | 0.841728204562989 |
| Setembro 2023 | 0.870059288537549 | 1,20742181169989 |
| Outubro 2023 | 1.04602991944764 | 0.927940998670052 |
| //Dados omitidos |     |     |

Repare que a variação está sempre entre 1.3 e 0.8. Vamos refletir esses dois indicadores na base de dados. Para isso, voltamos no VS Code e criamos um novo membro calculado com o nome `KPI Quantidade Real Orçado`, cuja fórmula será `[Measures]. [Quantidade Vendida]/[Measures].[Quantidade Vendida Orçada]`.

Criamos outro chamado `[KPI Valor da Venda Real Orçado]` com a fórmula `[Measures]. [Valor Da Venda]/[Measures]. [Valor Da Venda Orçada]`. Feito isso, temos os dois indicadores. Salvamos e na lateral direita da ferramenta, clicamos com o botão direito em "DataMartVendas" e depois em "Processar" para processar a base de dados OLAP.

Após o processo terminar, abrimos o Management Studio, selecionamos todo o trecho de código abaixo de `SELECT` e clicamos em "Executar". Feito isso, temos o resultado abaixo.

|     | KPI Quantidade Real Orçado | KPI Valor da Venda Real Orçado |
| --- | --- | --- |
| Janeiro 2021 | 1.18419090231171 | 1,0001443001443 |
| Fevereiro 2021 | 1,21119842829077 | 1,03047951854009 |
| Março 2021 | 1,19485791610284 | 1,24252275682705 |
| Abril 2021 | 0,908959537572254 | 0,908066920655955 |
| Maio 2021 | 1,07551669316375 | 1.21474358974359 |
| Junho 2021 | 1,13736263736264 | 1,15518962075848 |
| Julho 2021 | 1.00330687830638 | 1,06295166211659 |
| Agosto 2021 | 1.15195246179966 | 0,9321608040201 |
| //Dados omitidos |     |     |

Ao criar uma nova consulta, encontramos os novos indicadores que acabamos de criar que mostram a variação do real com o orçado.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Calculando a Tendência x Orçado</span>

No *Analysis Services*, na barra de menu superior, clicamos em "Nova Consulta", selecionamos o banco de dados `DW ATACADEZ KPI` e colamos a base do código.

```mdx
WITH
MEMBER [Measures]. [KPI Quantidade Tendência Orçado]
AS
MEMBER [Measures]. [KPI Valor da Venda Tendência Orçado]
AS
I
SELECT
{([Tempo].[Hierarquia Calendário].[Nível Mês])}
ON ROWS,
({x})
ON COLUMNS
FROM
[DW ATACADEΖ ΚΡΙ]
WHERE
({[Produto].[Setor].&[Bebidas]}, {[Empresa]. [Hierarquia Empresa].[Nível Empresa].&[ATACADEZ].&[LOJA 10]})|
```

O KPI de quantidade de tendência e orçado será `[Measures].[Quantidade Vendida Tendência Presente]`. Lembrando que não é a que veio diretamente do *Data Warehouse*, mas a que trouxemos para os últimos seis meses. Tudo isso dividido `/` pelo `[Measures].[Quantidade Vendida Orçada]`.

```vbnet
WITH
MEMBER [Measures]. [KPI Quantidade Tendência Orçado] AS [Measures]. [Quantidade Vendida Tendência Presente]/[Measures]. [Quantidade Vendida Orçada]' MEMBER [Measures]. [KPI Valor da Venda Tendência Orçado]
```

O mesmo vale para o segundo indicador relacionado com o valor da venda. Em `AS`, dentro de aspas simples, passamos `[Measures].[Valor da Venda Tendência Presente]` dividido `/` pelo `[Measures].[Valor Da Venda Orçada]`.

Feito isso, adicionamos essas duas medidas em `ON ROWS`. Dessa forma:

```csharp
WITH
MEMBER [Measures]. [KPI Quantidade Tendência Orçado]
AS '[Measures]. [Quantidade Vendida Tendência Presente]/[Measures]. [Quantidade Vendida Orçada]'
MEMBER [Measures ]. [KPI Valor da Venda Tendência Orçado]
AS '[Measures]. [Valor da Venda Tendência Presente]/[Measures]. [Valor Da Venda Orçada]'
SELECT
{([Tempo].[Hierarquia Calendário].[Nível Mês])}
ON ROWS,
({[Measures]. [KPI Quantidade Tendência Orçado], [Measures]. [KPI Valor da Venda Tendência Orçado]})
ON COLUMNS
FROM
[DW ATACADEΖ ΚΡΙ]
WHERE
({[Produto].[Setor] & [Bebidas]}, {[Empresa]. [Hierarquia Empresa].[Nível Empresa].&[ATACADEZ].&[LOJA 10]})
```

Executamos o MDX teste e temos o seguinte resultado.

|     | KPI Quantidade Real Orçado | KPI Valor da Venda Real Orçado |
| --- | --- | --- |
| Janeiro 2021 | 0,708938105891126 | 0,590133333333333 |
| Fevereiro 2021 | 1,05605402750491 | 0,899580469811687 |
| Março 2021 | 0,830514884979701 | 0,864767717815344 |
| Abril 2021 | 1.01203973988439 | 1,00266904091436 |
| Maio 2021 | 1,25214626391097 | 1,45070256410256 |
| Junho 2021 | 1,17560989010989 | 1,23002944111777 |
| Julho 2021 | 1,14194841269841 | 1,19690846314437 |
| Agosto 2021 | 1,48533616298812 | 1.18729177135678 |
| //Dados omitidos |     |     |

Lembrando que nunca devemos fazer esse cálculo **usando os primeiros meses do ano**, então, analisaremos o ano de 2023.

|     | KPI Quantidade Tendência Orçado | KPI Valor da Venda Real Orçado |
| --- | --- | --- |
| Janeiro 2023 | 0,776354066985646 | 0,860539993211901 |
| Fevereiro 2023 | 1,40076947040499 | 1,37353858549687 |
| Março 2023 | 1,44773134328358 | 1,55764315434912 |
| Abril 2023 | 1.31581614035088 | 1.32492129246065 |
| Maio 2023 | 1,31442988668555 | 1,1699509673608 |
| Junho 2023 | 0.912925133689839 | 1.09473172057624 |
| Julho 2023 | 1,0984640787949 | 1.30784136159281 |
| Agosto 2023 | (nulo) | (nulo) |
| //Dados omitidos |     |     |

Repare que aparecem dados até junho, pois o valor presente que temos é até junho. Agora, replicaremos essas duas fórmulas no nosso projeto do VS Code.

Criamos um novo membro calculado chamado `KPI Quantidade Tendência Orçado` e terá a fórmula `[Measures]. [Quantidade Vendida Tendência Presente]/[Measures]. [Quantidade Vendida Orçada]`.

Criamos outro membro calculado chamado `KPI Valor da Venda Tendência Orçado` com a fórmula `[Measures]. [Valor da Venda Tendência Presente]/[Measures]. [Valor Da Venda Orçada]`.

Temos então os cinco KPIs, um deles será calculado na próxima atividade. Feito isso, na lateral direita da ferramenta, clicamos com o botão direito em "DataMartVendas" e depois em "Processar".

Ao concluir, voltamos no *Management Studio*. Selecionamos o trecho de código do `SELECT` para baixo e copiamos. Criamos uma nova consulta, colamos e executamos. Assim, temos o resultado abaixo.

|     | KPI Quantidade Tendência Orçado | KPI Valor da Venda Real Orçado |
| --- | --- | --- |
| Janeiro 2021 | 0,708938105891126 | 0.590133333333333 |
| Fevereiro 2021 | 1,05605402750491 | 0,899580469811687 |
| Março 2021 | 0,830514884979701 | 0.864767717815344 |
| Abril 2021 | 1.01203973988439 | 1,00266904091436 |
| Maio 2021 | 1,25214626391097 | 1,45070256410256 |
| Junho 2021 | 1,17560989010989 | 1,23002944111777 |
| Julho 2021 | 1,14194841269841 | 1,19690846314437 |
| Agosto 2021 | 1,48533616298812 | 1,18729177135678 |
| //Dados omitidos |     |     |

Funcionou, pois temos as medidas já calculadas.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Incluindo KPI no Data Mart</span>

No *Management Studio*, clicamos sobre os *Analysis Services* do lado esquerdo, e posteriormente em "Nova Consulta" na parte superior. Em "Cubo:" do lado esquerdo selecionamos a base `DW ATACADEZ KPI`, e vamos usar o seguinte MDX como base inicial:

```sql
SELECT
{([Tempo].[Hierarquia Calendário].[Nível Mês])}
ON ROWS,
{[Measures]. [Quantidade Vendida]}
ON COLUMNS
FROM
[DW ATACADEZ ΚΡΙ]
WHERE
({[Produto].[Setor].&[Bebidas]},{[Empresa].[Hierarquia Empresa].[Nível Empresa].&[ATACADEZ].&[LOJA 10]})
```

Esse é um MDX que obtém a quantidade vendida mês a mês para bebidas e lojas 10.

Construiremos os KPIs de estado com `WITH MEMBER` na parte superior do MDX. Iniciaremos pelo KPI da quantidade "Como estou".

```sql
WITH
MEMBER [Measures].[KPI Quantidade Como Estou]

SELECT
{([Tempo].[Hierarquia Calendário].[Nível Mês])}
ON ROWS,
{[Measures]. [Quantidade Vendida]}
ON COLUMNS
FROM
[DW ATACADEZ ΚΡΙ]
WHERE
({[Produto].[Setor].&[Bebidas]},{[Empresa].[Hierarquia Empresa].[Nível Empresa].&[ATACADEZ].&[LOJA 10]})
```

Claro que, em um projeto real, não se utilizaria esse nome "Como estou" é uma forma didática de trabalharmos. A forma que aplicamos terá um `case when`. Digitamos então `AS 'CASE WHEN`.

Quando o "KPI Quantidade Real Orçado" for menor ou igual a 0.9, usaremos um limite. Para inserir esse KPI, do lado esquerdo vamos em "Measures > Venda > KPI Quantidade Real Orçado". Selecionamos o "KPI Quantidade Real Orçado" e arrastamos para frente do `WHEN`. Assim, obtemos `[Measures].[KPI Quantidade Real Orçado]`.

Agora, inserimos os limites: menor ou igual a 0.9, ruim. Entre 0.9 e 1.1, indiferente. Mais do que 1.1, bom. Vamos usar esses limites para todos os KPIs.

Se estiver menor ou igual a 0.9, `then -1`: `WHEN [Measures].[KPI Quantidade Real Orçado] <= 0.9 THEN -1`.

O menos 1 vai indicar sempre ruim, sendo o 0; indiferente, e 1, bom. Podemos copiar a linha e colar para apenas aplicar os ajustes.

Se o mesmo indicador for maior do que 0.9, **e menor** do que 1.1, `THEN`, ele vai ter valor 0. E o último é se ele for maior do que 1.1. Ele vai ser 1. Finalizamos com um `end`.

```sql
WITH
MEMBER [Measures].[KPI Quantidade Como Estou]
AS
'CASE
WHEN [Measures].[KPI Quantidade Real Orçado] <= 0.9 THEN -1 
WHEN [Measures].[KPI Quantidade Real Orçado] > 0.9 
AND [Measures].[KPI Quantidade Real Orçado] < 1.1 THEN 0
WHEN [Measures].[KPI Quantidade Real Orçado] > 1.1 THEN 1 END'
```

A fórmula ficou assim.

Precisamos agora do "como estarei". O "como estarei" vai usar o KPI quantidade tendência orçado. Vamos substituir na fórmula pela quantidade tendência orçado.

```sql
WITH
MEMBER [Measures].[KPI Quantidade Como Estou]
AS
'CASE
WHEN [Measures].[KPI Quantidade Real Orçado] <= 0.9 THEN -1 
WHEN [Measures].[KPI Quantidade Real Orçado] > 0.9 
AND [Measures].[KPI Quantidade Real Orçado] < 1.1 THEN 0
WHEN [Measures].[KPI Quantidade Real Orçado] > 1.1 THEN 1 END'
MEMBER [Measures].[KPI Quantidade Como Estarei]
AS
'CASE
WHEN [Measures].[KPI Quantidade Tendência Orçado] <= 0.9 THEN -1 
WHEN [Measures].[KPI Quantidade Tendência Orçado] > 0.9 
AND [Measures].[KPI Quantidade Tendência Orçado] < 1.1 THEN O 
WHEN [Measures].[KPI Quantidade Tendência Orçado] > 1.1 THEN 1 END'
```

O próximo KPI será o KPI de **transição**. Copiamos a linha `MEMBER [Measures]. [KPI Quantidade Como Estarei]` e substituímos o "Como Estarei" por "Transição".

Aproveitamos a estrutura do `case`; no entanto, os `cases` serão diferentes. Se o KPI do real orçado for maior, apenas maior, do que a tendência, significa que pioramos. Então, é menos 1. Se for igual, será 0. E se o orçado for menor do que a tendência, é porque melhoramos.

```sql
// comando omitido

MEMBER [Measures].[KPI Quantidade Transição]
AS
'CASE
WHEN [Measures].[KPI Quantidade Real Orçado] > [Measures].[KPI Quantidade Tendência Orçado] THEN -1 
WHEN [Measures].[KPI Quantidade Real Orçado] = [Measures].[KPI Quantidade Tendência Orçado] THEN 
WHEN [Measures].[KPI Quantidade Real Orçado] < [Measures].[KPI Quantidade Tendência Orçado] THEN 1 END'
```

E agora vamos visualizar o "como estou", a transição, e o "como estarei". Para isso, no comando `SELECT` em `ON ROWS`, colocamos `[Measures].[KPI Quantidade Como Estou]`, `[Measures].[KPI Quantidade Como Estarei]` e `[Measures].[KPI Quantidade Transição]`.

```sql
SELECT
{([Tempo].[Hierarquia Calendário].[Nível Mês])}
ON ROWS,
{[Measures]. [Quantidade Vendida], [Measures].[KPI Quantidade Como Estou], [Measures].[KPI Quantidade Transição], [Measures].[KPI Quantidade Como Estarei]}
ON COLUMNS
FROM
[DW ATACADEZ ΚΡΙ]
WHERE
({[Produto].[Setor].&[Bebidas]},{[Empresa].[Hierarquia Empresa].[Nível Empresa].&[ATACADEZ].&[LOJA 10]})
```

Clicamos em "Executar" na parte superior. Obtemos uma tabela:

> A tabela abaixo foi parcialmente transcrita. Para conferi-la na íntegra, execute o código na sua máquina.

| #   | Quantidade Vendida | KPI Quantidade Como Estou | KPI Quantidade Transição | KPI Quantidade Como Estarei |
| --- | --- | --- | --- | --- |
| Janeiro 2021 | 1588 | 1   | \-1 | \-1 |
| Fevereiro 2021 | 1233 | 1   | \-1 | 0   |
| …   | …   | …   | …   | …   |

Dados do primeiro ano vamos desprezar, não vamos usar porque a nossa tendência não está adequada. Ela começa a ficar adequada em janeiro de 2022.

Em janeiro de 2022, na coluna "como estou" indiferente (0), vamos piorar (coluna de transição com o valor -1), mas vamos continuar indiferente (coluna de "Como estarei" com o valor 0).

Analisaremos outros. Por exemplo em "Dezembro de 2022" o "como estou" está ruim (-1), iremos piorar (-1) e ficar pior ainda (-1). No entanto, em janeiro de 2023, o "como estou" está bem (1), vamos melhorar (1) e depois ficar melhor ainda (1). Em maio de 2023 é o bom caso. O "como estou" está ruim, vamos melhorar (1) e depois ficamos indiferente (0).

Dados a partir de julho de 2023, não vamos considerar. Porque como estamos usando o valor presente da tendência, de julho para baixo não temos valor presente. O valor presente começa de **junho de 2023 e para cima**, para datas mais recentes. Logo, só vamos conseguir ter um bom KPI entre **janeiro de 2022 e junho de 2023**.

Vamos refletir essas fórmulas todas, lá no nosso projeto.

No *Visual Studio*, criamos um "Novo Membro calculado", que se chamará "\[KPI Quantidade Como Estou\]".

E a fórmula é a que montamos:

```sql
CASE
WHEN [Measures].[KPI Quantidade Real Orçado] <= 0.9 THEN -1 
WHEN [Measures].[KPI Quantidade Real Orçado] > 0.9 
AND [Measures].[KPI Quantidade Real Orçado] < 1.1 THEN 0
WHEN [Measures].[KPI Quantidade Real Orçado] > 1.1 THEN 1 END'
```

Copiamos e colamos em "Expressão" no Visual Studio, uns campos abaixo do campo "Nome".

Clicamos novamente com o botão direito do lado esquerdo e escolhemos a opção "Novo membro Calculado", nomeamos de "\[KPI Quantidade Como Estou\]". E copiamos a fórmula e a colamos em "Expressão".

Por último, o "\[KPI Quantidade Transição\]". Basta realizarmos o mesmo passo a passo e posteriormente salvar.

Botão direito do mouse sobre o `DataMartVenda` do lado direito, e clicamos em "processar". Na janela seguinte que possui a pergunta "Deseja criar e implantar o projeto primeiro?" clicamos no botão "Sim" no canto inferior direito.

Será exibida uma janela intitulada "Processar Banco de Dados - DataMartVendas" onde clicamos no botão "Alterar configurações" no canto inferior direito. Será mostrada outra janela com o título "Progresso do Processo" e aguardamos. Após aguardar, parece que foi finalizado.

Fechamos a janela e para testar, basta executar o MDX sem as fórmulas e vamos verificar se vai funcionar.

```sql
SELECT
{([Tempo].[Hierarquia Calendário].[Nível Mês])}
ON ROWS,
{[Measures]. [Quantidade Vendida], [Measures].[KPI Quantidade Como Estou], [Measures].[KPI Quantidade Transição], [Measures].[KPI Quantidade Como Estarei]}
ON COLUMNS
FROM
[DW ATACADEZ ΚΡΙ]
WHERE
({[Produto].[Setor].&[Bebidas]},{[Empresa].[Hierarquia Empresa].[Nível Empresa].&[ATACADEZ].&[LOJA 10]})
```

Funcionou, obtemos a tabela com as colunas "Quantidade Vendida", "KPI Quantidade Como Estou", "KPI Quantidade Transição" e "KPI Quantidade Como Estarei" e as datas em uma coluna sem nome à esquerda.

## Conclusão

Fizemos somente para o indicador quantidade vendida. Vamos deixar para as atividades seguintes, para que vocês façam para o **valor da venda** e o c**usto da venda**.

> Lembrando que custo da venda é quanto maior, pior. Então, os testes trocam de posição.

Levem isso em consideração.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Usando KPI do Analysis Services</span>

No vídeo anterior, calculamos o KPI através de três indicadores de status: o "Como Estou", a "Transição" e o "Como Estarei". Contudo, o Analysis Services possui uma estrutura interna dentro de sua base de dados chamada **KPI**. Vamos criar novamente um dos nossos KPIs, mas utilizando agora a estrutura interna do Analysis Services para ver qual é a diferença.

No projeto do Visual Studio, temos na nossa base os dados realizados, orçados e a tendência dos três indicadores. E temos na nossa lista de dados calculados, para um determinado indicador, os três KPIs de estado. Por exemplo, no caso do valor da venda, temos o Como Estou, Como Estarei e a Transição. Esses três indicadores têm valores "-1", "0" ou "1". São **indicadores de estado**.

Vamos criar novamente um desses KPIs utilizando a funcionalidade KPI, no menu superior da interface. Ao clicar em `KPI`, observaremos uma caixa de diálogo. Na lateral esquerda, em "Organizador de KPIs", clicaremos com o botão direito do mouse e selecionaremos "Novo KPI".

Temos uma nova caixa de diálogo, onde vamos dar um nome para o KPI. Para fins didáticos, vamos chamar o KPI de `KPI Venda de Produto Analysis Services`, para mostrar que esse KPI foi criado pela estrutura do Analysis Services.

Temos que fornecer quatro valores para ele. O primeiro e o segundo valores são o realizado, que chamamos de **expressão de valor** e o orçado, chamado de **expressão da meta**. Vamos inserir esses valores.

Sob a janela de título "Ferramentas de Cálculo", clicaremos no `+` em "Measures", abriremos "Venda" e clicaremos sobre `Valor De Venda`, segurando-o e arrastando-o até o campo Expressão de Valor. Em seguida, expandiremos o "Orçado" sob "Measures" e arrastaremos o "Valor de Venda Orçado" até o campo Expressão de Meta.

Depois, vamos inserir dois indicadores de status. Observem que, se colocarmos o mouse sobre o ícone de informação ao lado do campo "Status", ele diz: "Selecione um elemento que retorne um valor entre -1 e 1". Nossos KPIs do "Como Estou", "Como Estarei" e "Transição" já retornam -1 quando está ruim, 0 quando está equilibrado e 1 quando está bom.

Mas temos três indicadores de estado e só podemos entrar com dois aqui. Eles se chamam de "Status" e "Tendência". Qual vamos eliminar? O "Como Estou" nos diz o nosso estado atual. A "Transição" nos diz se vamos melhorar, piorar ou ficar na mesma. E o "Como Estarei" nos diz como estaremos no futuro.

> Se tivermos que eliminar um desses três, geralmente eliminamos o "Como Estarei".

O mais importante é saber como estamos agora e qual é a nossa tendência. Ou seja, é o indicador "Como Estou" e o de "Transição". Então, teremos a seguinte conclusão com esse KPI: estamos bem, mas vamos melhorar. Estamos mal, mas vamos melhorar. Ou então, estamos bem, mas vamos piorar. São essas duas informações que são as mais importantes.

Logo, onde temos Status, ele nos diz o estado atual. Então, escolhemos o KPI `Valor da Venda Como Estou`, arrastando-o da lista até o campo "Status". E para o indicador de tendência usamos o `Valor da Venda Transição`, arrastando-o até o campo "Expressão de Tendência". Vamos salvar.

Uma dica: feche a aba da base de dados, no topo da interface, após salvar o projeto e abra ela de novo, selecionando-a no menu lateral superior direito, `DW ATACADEZ KPI.cube`. Em seguida, clique novamente no botão `KPI`. Note que agora aparecem novos menus em "Indicador de status" e "Indicador de tendência". Como os dois indicadores devem retornar -1, 0 ou 1, já visualizamos um **sinalizador de cores** agregado ao indicador.

Para o status, temos várias opções: uma carinha sorrindo se está bem, uma carinha triste se estiver ruim, uma seta para cima verde se estiver bom, uma seta para baixo vermelha se estiver ruim, o sinal de trânsito, o *gauge* (medidor), entre outros.

E para a tendência, temos menos ícones. Vamos escolher, por exemplo, o sinal de trânsito para o status e a seta de status para a tendência. Vamos salvar e processar a nossa base.

Na própria caixa de diálogo de KPI, vamos clicar no botão com o ícone de uma lupa sobre barras horizontais. Se fizermos isso, vamos ver o valor do KPI e os sinais.

Mas, claro, sabemos que não podemos estar olhando dados que envolvam o primeiro ano, porque o indicador da tendência ainda está crescente. E nem nos últimos seis meses, porque trazemos a tendência para o valor presente. Portanto, só podemos ver os valores dos KPIs entre janeiro de 2022 e junho de 2023.

Vamos fazer um filtro. Selecionaremos a dimensão Tempo, a hierarquia Calendário, operador Igual e, como filtro, colocamos, por exemplo, novembro de 2022. Se clicarmos sobre a linha "KPI Venda de Produto Analysis Services", ele vai mostrar o resultado. As nossas vendas, em termos financeiros, estão normais, mas vão melhorar.

Podemos filtrar também por empresa. Escolhemos a hierarquia Empresa e, finalmente, a loja desejada. Por exemplo, a loja 10. Ela tem um comportamento parecido com o total.

Então, conseguimos ver, nessa caixa de diálogo, os sinalizadores dos KPIs.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Consultando o KPI</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">O objetivo deste curso é visualizar os dados calculados no</span> *Data Mart*<span style="color: #c0c0c0;">. Realizaremos uma pequena</span> **visualização** <span style="color: #c0c0c0;">desses dados por meio do</span> **Excel**<span style="color: #c0c0c0;">. Para isso, faremos uma consulta dos valores dos KPIs.</span></span>

Com o Excel aberto, na barra de menu superior, clicamos em "Dados". Depois, na lateral superior esquerda da tela, clicamos em "Obter Dados > Do banco de Dados > Do Analysis Services".

Feito isso, abre uma janela. Preenchemos o campo "Nome do Servidor" e depois clicamos em "Avançar". Na janela seguinte, selecionamos o `DW ATACADEZ KPI`, clicamos em "Avançar" e depois "Concluir".

Na janela Importar Dados, selecionamos a opção "Relatório de Tabela Dinâmica" a partir da coluna B3 e clicamos em "Ok". Feito isso, ao lado direito da ferramenta, temos toda a estrutura do cubo.

Selecionamos a Hierarquia calendário e arrastamos para o campo "Linhas". Depois, clicamos na seta de Hierarquias calendário para fazermos um filtro. Na aba que abre, retiramos a marcação do ano de 2021, pois a tendência não está montada no primeiro ano.

Fazemos o mesmo, desmarcando o segundo semestre de 2023 devido ao deslocamento de seis meses da tendência para o valor presente. Então, só temos valores dos meses anteriores a junho de 2023. Por fim, clicamos em "Ok". Feito isso, no Excel, aparece os Rótulos de linha. Se clicarmos nos ícones identificados pelo sinal de "+", conseguimos visualizar os meses.

Como indicador, na lateral direita, temos o KPI de valor da venda, quantidade vendida e custo vendido. Selecionamos o valor da venda, depois, na lista que abre, selecionamos "Valor (Valor da venda)", "Meta (Valor da Venda Orçada)" e "Status (KPI Valor da Venda Como Estou)". Ao fazer isso, notamos que na coluna "Status" temos o sinalizador.

Na mesma KPI, selecionamos também "Tendência (KPI Valor da Venda Transição)". Ao fazer isso, temos como dado setas subindo na cor verde e descendo na cor vermelha.

![Print da planilha Excel mostrando os dados que foram calculados no Data Mart. A primeira coluna, nomeada 'Rótulos de linha' possui os anos e meses selecionados para visualização. A segunda coluna, nomeada 'KPI da Venda' seguido da 'KPI Valor da Venda' possuim valores monetários. Na coluna 'Status' encontramos os sinalizadores indicados por um quadrado com um circulo que muda de cor conforme a filtragem. Por fim, a coluna 'Tendência' com setas verdes apontando para cima e vermelhas apontando para baixo.](../_resources/caed3df5-e252-4090-a7d6-fb59ae9e.png)

Podemos criar filtros para limitar algumas lojas ou departamentos. Se na lateral direita, clicarmos em "Hierarquia Departamento", arrastarmos para o campo "Filtro" logo abaixo, depois selecionamos apenas o produto "Bebidas", temos o resultado apenas das bebidas.

Além disso, também podemos selecionar a hierarquia empresa. Então, arrastamos para o campo "Filtros" e selecionamos a "LOJA 10". Assim temos um filtro com os sinalizadores nas cores verde, vermelha e amarela.

Como selecionamos muitos indicadores, está difícil de visualizar todos os dados. Para melhorar isso, em "KPI Valor da Venda" desmarcamos a opção "Meta".

Feito isso, faremos uma análise. Considerando a categoria bebida na Loja 10, o mês de maio está ruim, isso é indicado pelo sinalizador vermelho, porém vai melhorar, indicado pela seta verde para cima. Já em julho, está tudo bem, mas vai piorar.

Assim, podemos analisar os KPIs por meio dos sinais. Fizemos uma análise rápida, porém, isso mostra o **poder da formatação dos dados** dentro do *Data Mart*.

Repare que para montar essas hierarquias e filtros, não precisamos dizer nada sobre a base de dados, ele herdou tudo que veio do *Data Mart*. É esse comportamento que você terá, por exemplo, se usar o *Data Mart* nas ferramentas de *dashboard*.
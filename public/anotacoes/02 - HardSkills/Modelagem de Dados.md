---
title: Modelagem de Dados
updated: 2024-08-08 20:37:00Z
created: 2024-07-04 17:28:25Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

- [Contexto do projeto do curso](#contexto-do-projeto-do-curso)
- [Iniciando Modelagem](#iniciando-modelagem)
    - [Tabelas Fato](#tabelas-fato)
    - [Tabelas Dimensão](#tabelas-dimensão)
        - [Regras de relacionamento entre Fatos e Dimensões](#regras-de-relacionamento-entre-fatos-e-dimensões)
    - [Criando relacionamento](#criando-relacionamento)
        - [Cardinalidade](#cardinalidade)
        - [Esquemas](#esquemas)
        - [Unindo Tabelas no PowerQuery](#unindo-tabelas-no-powerquery)
        - [Normalização de Dados](#normalização-de-dados)
        - [Dimensão Compartilhada](#dimensão-compartilhada)
        - [Relacionamento associativo](#relacionamento-associativo)
        - [Relações de modelos especiais](#relações-de-modelos-especiais)
        - [Itens de segmentação "com dados"](#itens-de-segmentação-com-dados)
        - [Dimensões de Data](#dimensões-de-data)
    - [Alternando Relacionamentos](#alternando-relacionamentos)
        - [Dimensões com função multipla](#dimensões-com-função-multipla)
    - [Finalizando o modelo](#finalizando-o-modelo)
        - [Organizando o projeto](#organizando-o-projeto)

# Contexto do projeto do curso

Você, como analista de dados, recebeu uma demanda para preparar os dados de vendas da empresa Neves Store para serem consumidos com melhor performance.

Sabemos que, por padrão, o Power BI cria as relações de forma automática. Para ter ganho de performance, podemos melhorar a forma que esses relacionamentos acontecem. Por isso, precisamos analisar nosso projeto em busca de soluções. Assim, poderemos realizar a modelagem dos dados de vendas da empresa Neves Store e entender se o modelo gerado pelo **Power BI** atende todas as nossas necessidades.

Para isso, vamos aprender a:

- Analisar as estruturas e características das tabelas do nosso modelo;
- Entender e aplicar cardinalidade;
- Entender os esquemas estrela e floco de neve;
- Lidar com relacionamento N:M;
- Criar tabela calendário; e
- Entender a estrutura do modelo.

&nbsp;

# Iniciando Modelagem

## Tabelas Fato

Todas as tabelas tem a mesma função? Note nosso relacionamento atual:  
![4fff62c9d4525b1a8f34ad8677943b5a.png](../_resources/4fff62c9d4525b1a8f34ad8677943b5a.png)

Se reparar bem, nós temos a tabela Vendas ao centro e as outras orbitando ela, se ligando a ela. Existem tabelas com funções diferentes, note que nossa tabela Vendas possuí várias chaves primárias, informações de vendas por data. Essa tabela de certa forma nos conta uma história, pois em cada linha de dados dela nós temos um **fato** ocorrendo. E é exatamente esse o nome dessa tabela, tabelas que nos trazem dados do que aconteceu (no caso vendas), são chamadas de tabelas **fato**.

Ok, mas quais são as características de uma tabela fato? Quando falamos de tabelas fato nós estamos falando de tabelas que nós trazem registros de dados de um momento, uma transação, uma venda, algo que aconteceu. Geralmente essas tabelas crescem com o tempo pois novos registros são inseridos nela. Além de armazenar IDs, chaves primárias, etc. Essa tabela precisa ser numérica, para ocupar o minimo de espaço possível em nosso modelo, exatamente pela sua característica de crescimento.

As tabelas **Fato** contêm **dados quantitativos**, que geralmente são numéricos e podem ser agregados ou resumidos. Elas são **organizadas em torno de um tema central**, como vendas ou estoque, e podem conter uma dimensão de data para permitir que os **dados sejam analisados ao longo do tempo**.

## Tabelas Dimensão

As tabelas dimensão são aquelas que orbitam a tabela fato e se ligam a ela. Elas tem uma função complementar a nossa tabela fato. Esse tipo de tabela não traz informações gerais como a tabela fato, mas sim informações especificas da dimensão em que ela se encontra. Por exemplo, uma tabela dimensão produto nos trará informações apenas de produtos, uma descrição de produtos. Diferente da tabela fato que é praticamente inteira numérica, as tabelas dimensão não precisam ser apenas numéricas, exatamente pois esse tipo de tabela dificilmente crescerá tanto quanto as tabelas fato, por isso, ocupam menos espaço.

As tabelas **Dimensão** contêm **dados qualitativos** que fornecem **contexto e informações** básicas para as medidas na tabela Fato. Elas geralmente são organizadas em torno das entidades que estão sendo medidas, como produtos, clientes ou locais. Além disso, **podem conter uma dimensão de tempo**.

### Regras de relacionamento entre Fatos e Dimensões

As tabelas Fato e Dimensão precisam estar de acordo com algumas regras para que o relacionamento ocorra. Uma **tabela Fato deve se relacionar diretamente apenas com tabelas Dimensão**, enquanto que uma **tabela Dimensão deve se relacionar diretamente apenas com tabelas Fato**.

&nbsp;

## Criando relacionamento

O PBI nos traz relacionamentos pré-feitos, porém como saber se esses relacionamentos são os ideais e funcionam? Era esperado que a gente bata o olho e já saiba qual era o melhor relacionamento entre essas tabelas?

### Cardinalidade

Cardinalidade mostra como uma tabela se relaciona com a outra.  
![1e6e6b65069c40d1c8a935bb82780935.png](../_resources/1e6e6b65069c40d1c8a935bb82780935.png)

Acima podemos ver um relacionamento de 1 para muitos. Ou seja, 1 ID se conecta com vários IDs.

Podemos usar o exemplo de uma faculdade, onde 1 aluno só pode se conectar a 1 curso, mas 1 curso pode se conectar a vários alunos. Porém, dentro do PBI não existe somente a cardinalidade de 1 para muitos.

No PBI existem 4 tipos de cardinalidade:  
![ad1d4d60c6f266ba85ca786120fa7efb.png](../_resources/ad1d4d60c6f266ba85ca786120fa7efb.png)

Um exemplo de cardinalidade muitos-para-muitos seria:  
![e9e602d31d6247cf2c8c1b80950c52c9.png](../_resources/e9e602d31d6247cf2c8c1b80950c52c9.png)

E essa é uma cardinalidade que queremos evitar pois pode acarretar em alguns problemas.

Nas propriedades das relações entre tabelas no PBI, além de termos informações sobre cardinalidade, também temos informações sobre direção de filtro. Direção de filtro é exatamente para onde está sendo filtrado, qual tabela irá filtrar a outra. Filtros únicos significam que só existe 1 tabela que filtra a outra e não ambas. O ideal é uma Direção do filtro única pois se escolhermos "ambas" isso pode acarretar num looping de filtragem eterno e pode afetar até a segurança de nosso relatório.

### Esquemas

Agora que vimos cardinalidade e os filtros, será que existe um nome para todo esse processo? Quando trabalhamos com toda essa estrutura nos estamos falando de esquemas. E em nosso projeto, usaremos o esquema Estrela. Porém existem outros esquemas. Vamos falar do esquema estrela:

<img src="../_resources/3e4af065dc23c54862461130006cb05a.png" alt="3e4af065dc23c54862461130006cb05a.png" width="630" height="447" class="jop-noMdConv">

É caracterizado pelas dimensões orbitando a tabela fato. Com relacionamento de preferencia de 1 para muitos (ou muitos para 1) e filtros unicos. Não existe relação entre dimensões, somente entre fato e dimensões.

**Vantagens do StarSchema:**

- É mais simples e mais fácil de navegação, mas desperdiça espaço repetindo as mesmas descrições ao longo de toda a tabela.
- Consultas mais simples: a lógica de junção do Star Schema é mais simples que a lógica de junção necessária para recuperar dados de um esquema transacional normalizado.

Nós também temos o esquema snowflake. Na qual também temos as dimensões se conectando com a tabela fato, porém, as tabelas dimensões podem se conectar com outras dimensões:  
![f0dae38947e790df3928c4376bd89f95.png](../_resources/f0dae38947e790df3928c4376bd89f95.png)

Nesse esquema não é necessário que uma tabela dimensão se conecte com uma tabela fato. Por uma questão de performance, sempre queremos trabalhar com o esquema estrela. O esquema estrela permite a filtragem da tabela fato de acordo com as dimensões, por exemplo, quando queremos saber **Vendas** por **Vendedor,** estamos filtrando a tabela Vendas (fato) com a tabela Vendedor (dimensão), o esquema estrela facilita esse processo.

**Vantagens do SnowFlake:**

- A normalização das dimensões resulta em economia de armazenamento.
- No modelo Snowflake, a hierarquia é representada em um relacionamento de chave externa e chave primária entre as várias tabelas de dimensões. No modelo Star, todas as tabelas de dimensões necessárias têm apenas chaves estrangeiras nas tabelas de fatos.

&nbsp;

> Tabelas identicas com quantidades e dados identicos, nós usamos 1:1

&nbsp;

### Unindo Tabelas no PowerQuery

Nós queremos selecionar a tabela vendas e trazer a tabela pedido vendas para dentro dela. E nós selecionaremos a opção "Combinar" -> "Mesclar Consultas" na pagina inicial do PowerQuery veja:  
<img src="../_resources/05b48e237f4ed7323a1544722793d77c.png" alt="05b48e237f4ed7323a1544722793d77c.png" width="519" height="473" class="jop-noMdConv">

Aberto esse menu, nós temos que selecionar a tabela que queremos mesclar e temos que selecionar as colunas que fazem essa mescla:  
<img src="../_resources/b4ce181892c57381bc4e06beb8229086.png" alt="b4ce181892c57381bc4e06beb8229086.png" width="460" height="412" class="jop-noMdConv">

Com isso, podemos clicar em OK. Com isso, ele gera uma nova coluna com os dados de nossa tabela:  
<img src="../_resources/7ddeacd7a1be3a647e1eb1b3dd7d9a3c.png" alt="7ddeacd7a1be3a647e1eb1b3dd7d9a3c.png" width="261" height="334" class="jop-noMdConv">

E aqui, temos que fazer a expansão dessa tabela, clicando no botão superior direito ao lado do nome "PedidoVendas". E pronto:  
<img src="../_resources/2c1084f628f48a0fbeed59e53ac296a7.png" alt="2c1084f628f48a0fbeed59e53ac296a7.png" width="679" height="360" class="jop-noMdConv">

Agora temos as colunas da tabela PedidoVendas dentro da tabela Vendas, tornando nosso modelo muito mais performático e não temos mais a relação de cardinalidade de 1:1. Mas não se esqueça de desabilitar a carga da tabela PedidoVendas!

&nbsp;

### Normalização de Dados

A normalização de dados é o processo de organizar um banco de dados com o intuito de minimizar a redundância e a dependência de dados, para garantir que cada tabela tenha uma finalidade clara e definida. Ela geralmente envolve a divisão de um banco de dados em duas ou mais tabelas e a definição de relacionamentos entre as tabelas.

Existem várias regras para normalizar um banco de dados, conhecidas como formas normais. As formas normais mais comuns são a primeira, segunda e terceira formas normais. Essas formas normais são utilizadas para lidar com diferentes tipos de redundância e dependência de dados.

A Primeira Forma Normal (1FN): uma tabela está na primeira forma normal se atender aos seguintes critérios:

- A tabela possui um identificador exclusivo para cada linha, conhecido como chave primária.
- Cada coluna na tabela contém um único valor.

A Segunda Forma Normal (2FN): uma tabela está na segunda forma normal se atender aos seguintes critérios:

- A tabela já está na primeira forma normal.
- Todas as colunas de chave não primária devem ser dependentes da chave primária.

A Terceira Forma Normal (3FN): uma tabela está na terceira forma normal se atender aos seguintes critérios:

- A tabela já está na segunda forma normal.
- Não há dependências transitivas na tabela, que ocorre quando uma coluna não chave depende de outra coluna não chave, ao invés da coluna de chave primária por completo.

Seguindo essas formas normais, é possível projetar um banco de dados eficiente, organizado e fácil de manter.

Entretanto, o foco de utilizarmos o Power BI é elaborar relatórios da melhor forma possível, prezando pelo desempenho. Nesse caso, pode ser vantajoso **não normalizar os dados**, pelos seguintes motivos apresentados abaixo:

- **Quando o banco de dados é pequeno**: se o banco de dados for muito pequeno e tiver apenas algumas tabelas com algumas colunas.
- **Quando o desempenho é prioridade**: a normalização pode melhorar o desempenho e a confiabilidade dos dados, porém, pode fazer com que algumas consultas se tornem mais complexas e lentas para executar.
- **Quando não houver mudança nos dados**: a normalização ajuda na redução de redundância e dependência de dados, o que ajuda quando os dados são atualizados. Caso essa atualização não ocorra, não precisamos nos preocupar com isso.

&nbsp;

### Dimensão Compartilhada

<span style="color: #c0c0c0;">Temos nosso modelo estruturado e funcionando da forma que esperamos. Mas, se quiséssemos trazer mais uma tabela fato para o modelo, será que conseguiríamos manter o funcionamento do esquema estrela que é tão importante para a boa performance dentro do Power BI? Para isso, iremos trazer para nosso modelo, a tabela de estoque.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Temos, agora, a tabela</span> `Estoque` <span style="color: #c0c0c0;">e note que já criou-se um relacionamento entre ela e a tabela</span> `Produto` <span style="color: #c0c0c0;">por meio da coluna</span> `ProdutoKey`:  
![c40f4006d939486d3e5c47c2fb77f3c9.png](../_resources/c40f4006d939486d3e5c47c2fb77f3c9.png)  
</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Ao analisarmos nosso esquema notamos que seria interessante vincular as colunas de data existentes nas tabelas</span> `Vendas` <span style="color: #c0c0c0;">e</span> `Estoque`<span style="color: #c0c0c0;">. Isso, porque, na hora de criar os visuais, podemos manipular o tempo das duas tabelas simultaneamente. Para fazer isso, basta clicar em</span> `Data atualização`<span style="color: #c0c0c0;">, que é uma coluna na tabela</span> `Estoque`<span style="color: #c0c0c0;">, e arrastá-la para cima da coluna</span> `EntregaData` <span style="color: #c0c0c0;">na tabela</span> `Vendas`<span style="color: #c0c0c0;">.</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Dessa maneira, estamos relacionando as duas colunas de datas. Mas se mantivéssemos o relacionamento da tabela</span> `Estoque` <span style="color: #c0c0c0;">com a tabela dimensão, não conseguiríamos fazer este tipo de filtragem das duas tabelas fato?</span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Neste caso, como existe um vínculo entre os produtos e não em relação ao tempo, não faz muito sentido. O que precisamos é do vínculo entre as datas de forma direta.</span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Voltando ao nosso procedimento, após arrastarmos</span> `Data atualização` <span style="color: #c0c0c0;">para</span> `EntregaData`<span style="color: #c0c0c0;">, uma janela de relacionamento é aberta. Nela, temos a cardinalidade de</span> **muitos-para-muitos** <span style="color: #c0c0c0;">e a direção do filtro como</span> **ambas**<span style="color: #c0c0c0;">, ou seja, uma filtragem bidirecional.</span></span></span></span></span>

**O relacionamento de muitos-para-muitos não é bom porque implicará diretamente na performance.**

Sendo assim, ainda na nossa janela, clicamos em "Cancelar", já que não é mais possível criar o relacionamento. O que faremos, então, é remover o relacionamento existente entre as colunas `ProdutoKey` nas tabelas `Estoque` e `Produto`.

Feito isso, poderemos repetir o processo de clicar em `Data atualização`, coluna da tabela `Estoque`, e arrastá-la para cima da coluna `EntregaData`, na tabela `Vendas`. A janela de edição abrirá novamente, desta vez com a opção de ativar o relacionamento já habilitada, então basta clicarmos em "OK".

Pronto! Definimos o relacionamento de muitos-para-muitos.

Além de termos essa cardinalidade de muitos-para-muitos, que já sabemos que não é ideal, temos um outro ponto: **estamos trabalhando com o esquema estrela, no qual não faz sentido ter uma tabela fato ligada à outra tabela fato.**

Lembre-se que, neste tipo de esquema, uma tabela fato sempre liga-se à tabela dimensão. Portanto, o que poderíamos fazer para resolver esta situação é criar uma **tabela intermediária** na qual poderíamos concentrar algumas informações. Assim, ligaríamos a tabela fato `Vendas` e a tabela `Estoque` a esta nova tabela, concentrando as informações.

<span style="color: #c0c0c0;">Este tipo de dimensão tem uma característica um pouco diferente e é chamada de</span> **dimensão compartilhada**<span style="color: #c0c0c0;">. Recebe este nome porque compartilha informações com duas ou mais tabelas fato.</span>

Para fazer isso, utilizaremos a fórmula **Dax** existente dentro do Power BI. Então, acessaremos a guia de página inicial e clicaremos na opção "Nova tabela", na barra superior.

Ao clicar, abrirá uma barra de fórmula na parte superior do nosso modelo, onde vamos inserir a fórmula `CALENDARAUTO`. Para isso, incluímos primeiro o nome da nossa tabela, que será `Calendário`, espaço, sinal de igualdade, espaço novamente e a fórmula `CALENDARAUTO()`. Deve ficar assim:

```objectivec
Calendário = CALENDARAUTO()
```

**Essa fórmula faz uma leitura do nosso modelo, identifica as datas que existem e cria um intervalo de datas dentro de uma coluna.** E agora sim temos uma tabela que podemos relacionar com as outras duas fatos. Agora sim temos um relacionamento de 1 para muitos. E se quisermos ainda podemos retornar nosso relacionamento entre Estoque e Produtos.  
![947bbd54ab3324781da65b097f63e09e.png](../_resources/947bbd54ab3324781da65b097f63e09e.png)  
(Tabela calendário controlando as Fatos e servindo como intermediária entre as duas)

&nbsp;

### Relacionamento associativo

Uma relação bidirecional filtra em ambas as direções. Geralmente, **é recomendado minimizar o uso de relações bidirecionais, pois podem causar um impacto negativo no desempenho de consulta do modelo.**

Existem três cenários em que a filtragem bidirecional pode solucionar requisitos específicos. Abordaremos dois: Relações de modelos especiais e Itens de segmentação "com dados".

### Relações de modelos especiais

As relações bidirecionais têm uma função importante na criação dos dois seguintes tipos de relação de modelo especial. Vamos verificar abaixo?

- Um-para-um: Todas as relações de um-para-um devem ser bidirecionais, e não é possível configurá-las de outra forma. Geralmente, a criação desses tipos de relações não é recomendável.
- Muitos para muitos: Ao relacionar tabelas do tipo bidimensional, é necessário usar uma tabela intermediária. Um filtro bidirecional é necessário para garantir que os filtros se propaguem pela tabela intermediária.

### Itens de segmentação "com dados"

As relações bidirecionais podem fornecer segmentações que limitam os itens para onde existam dados, ou seja, o filtro ocorre apenas para as informações que estão relacionadas. Para ajudar a explicar o que isso significa, primeiro considere o diagrama do modelo a seguir, contendo os dados de cada tabela.

![Alt text: print do diagrama mostrando as tabelas de Vendas, de Produtos e de Clientes.](../_resources/aula3-img12.png)

Agora, considere a página de relatório a seguir.

![Alt text: Print do diagrama mostrando a página de relatório contendo três visuais.](../_resources/aula3-img13.png)

A página consiste em duas segmentações e um visual de cartão. A primeira segmentação é para Estado civil e tem dois itens: **Casado(a) e Solteiro(a)**. Atualmente, está segmentado por **Casado(a**). A segunda segmentação é para **Nome produto** e tem doze itens. Nenhum item está selecionado (ou seja, nenhum produto está filtrado). O visual de cartão exibe uma quantidade de **3039**, que corresponde à **quantidade de pessoas casadas**.

Quando selecionamos o estado civil **Casado(a)**, seria interessante filtrar o **Nome produto** para exibir apenas os itens cujos dados se relacionam às vendas de pessoas casadas. É isso que significa exibir os itens da segmentação "com dados". Você pode conseguir esse comportamento configurando a relação entre as tabelas **Produtos e Vendas** para filtrar nas duas direções.

![Alt text: Print do diagrama mostrando um modelo indicando que a relação entre as tabelas Product e Sales agora é bidirecional.](../_resources/aula3-img14.png)

A segmentação **Produtos** agora relaciona um oito itens. Esses itens representam os únicos produtos vendidos para clientes casados.

![Alt text: Diagrama mostrando a página de relatório contendo três visuais. O primeiro apresenta o “estado civil”, onde é possível selecionar entre “casado(a) e Solteiro(a). Na segunda opção é apresentado o “Nome do produto”, nesta categoria temos as seguintes possibilidades de seleção “Coleira, Guia, Petisco, Ração adulto 1kg, Ração filhote 1kg, Ração sênior 1kg, Roupa de inverno, e Roupa de verão”. Essa categoria “Produto” está destacada por um quadrado vermelho. Por fim, temos o último visual, sendo ele um visual de cartão que contém as seguintes informações “3039 - Contagem de ID Produto.](../_resources/aula3-img15.png)

Caso você decida mostrar os itens de segmentação "com dados", não é recomendado utilizar a configuração de relações bidirecionais. As relações bidirecionais exigem mais processamento, o que pode afetar de forma negativa o desempenho das consultas, especialmente se houver um aumento no número de relações bidirecionais do modelo.

### Dimensões de Data

<span style="color: #c0c0c0;">Nossa solução foi criar uma tabela</span> `Calendário`<span style="color: #c0c0c0;">, mas há alguns fatores que passaram despercebidos quando criamos os relacionamentos e eles são importantes para garantir uma boa performance no relatório.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">O primeiro deles é que temos uma coluna definida como</span> `Data` <span style="color: #c0c0c0;">e, sempre que temos uma coluna de data no Power BI, ele cria uma tabela oculta. Basicamente, utiliza Dax para criar uma outra tabela, que fica oculta, para trabalharmos com as hierarquias.  
![1b5bda58a89b188b2f73cc9d93e72fb0.png](../_resources/1b5bda58a89b188b2f73cc9d93e72fb0.png)</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Isso nos traz um problema de performance! <span style="color: #c0c0c0;">Esse problema se dá pela quantidade de tabelas que serão criadas. Na tabela</span> `Vendas`<span style="color: #c0c0c0;">, por exemplo, temos 3 colunas de datas,</span> `PedidoVendaData`<span style="color: #c0c0c0;">,</span> `EntregaData` <span style="color: #c0c0c0;">e</span> `VencimentoData`<span style="color: #c0c0c0;">, o que significa que temos 3 tabelas ocultas. Nós podemos desabilitar essa função.</span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Uma boa prática a se fazer nesse caso, seria transformar a coluna EntregaData em uma coluna de Key, onde ela se ligaria com outra coluna de Key na dimensão data. Para isso podemos transformar a coluna EntregaData em texto, retirar as "/" e agora temos uma coluna chamada EntregaDataKey:  
<img src="../_resources/d024b531b4b0d147bd394e853cdf04ec.png" alt="d024b531b4b0d147bd394e853cdf04ec.png" width="118" height="313" class="jop-noMdConv">  
</span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Faremos a mesma coisa na dimensão calendário, criaremos com DAX uma nova coluna a qual pega os elementos da coluna Data existente e concatena eles sem as "/":</span></span></span></span>

```Javascript
Calendário = ADDCOLUMNS(
    CALENDARAUTO(),
    "Data Key", CONCATENATE(
        FORMAT([Date], "dd"),
        CONCATENATE(
            FORMAT([Date], "mm"),
            FORMAT([Date], "yyyy")
        )
    )
)
```

E agora que temos em ambas as colunas a mesma estrutura, iremos retirar a relação anterior (Data da Dimensão Calendário com EntregaData da Fato Vendas, que era uma relação de datas) e fazer uma relação com essas colunas de chave.

&nbsp;

## Alternando Relacionamentos

### Dimensões com função multipla

Em um projeto de BI, podemos criar dimensões calendário diferentes para cada situação. Cada dimensão calendário terá uma função especifica. Apesar de ser uma solução interessante, ela não cabe em nosso projeto, pelo fato de atender mais a projetos grandes, com muitos dados. Em nosso caso de projeto pequeno com poucas tabelas, podemos apenas usar a mesma tabela calendário, conectando o campo de DataKey com os outros campos de data da tabela Fato.

Uma dimensão com função múltipla é uma dimensão que pode filtrar fatos relacionados de forma diferente. Por exemplo,a tabela Calendário possui três relações de data com a tabela Vendas, podendo assim filtrar as datas de `PedidoVendaData`, `VencimentoData`e `EntregaData` pela tabela Calendário.

Dentro de um Data Warehouse, o ideal é definir uma tabela de dimensão de data única. No momento da consulta, a "função" da dimensão de data é estabelecida por qual coluna de fato você usa para unir as tabelas. Por exemplo, quando você analisa as vendas pelo campo EntregaData, a junção da tabela se relaciona à coluna data de Date da tabela Calendário.

<span style="color: #c0c0c0;">Em um modelo do Power BI, esse design pode ser imitado com a criação de várias relações entre duas tabelas. As tabelas de Vendas e Calendário têm três relações. Por mais que isso seja possível, só pode existir uma relação ativa entre duas tabelas, ou seja, todas as outras relações devem ser definidas como inativas.</span>

Ter uma única relação ativa significa que há uma propagação de filtro padrão de data para vendas da tabela de Vendas. Neste caso, quando vamos criar visuais, apenas a relação que está ativa será utilizada, que, no nosso caso, é a relação de EntregaData, enquanto as que estão inativas não podem ser utilizadas.

A imagem mostra um exemplo de uma dimensão de função e relações. A tabela Calendário tem três relações com a tabela Vendas.

![Alt text: Captura de tela do relacionamento múltiplo entre as tabelas de “Vendas” e “Calendário”.](../_resources/aula3-img16.png)

A única maneira de usar uma relação inativa é definir uma expressão DAX que usa a função `USERELATIONSHIP()`, que veremos adiante.

[Documentação sobre dimensões com funções unicas](https://learn.microsoft.com/pt-br/power-bi/guidance/star-schema#role-playing-dimensions)

[Aula sobre relacionamentos ativos/inativos e suas implicações em filtros](../HardSkills/Aula%20sobre%20relacionamentos%20ativos_inativos%20e%20suas%20.md) <- importante para entender a implicação que os relacionamentos das tabelas tem em nossos gráficos e filtros (principalmente quando falamos de datas, isso envolve regras de negócio).

&nbsp;

## Finalizando o modelo

### Organizando o projeto

Podemos organizar nossa modelagem de dados (na aba modelos), criando várias paginas para exibir partes de nossas relações especificas. Nesse projeto poderíamos criar uma página com as relações de cada uma das fatos. Criaremos uma pagina para fato estoque e fato venda.

Importante ressaltar que a criação dessas páginas não afeta nosso relacionamento principal, são apenas para fins de organização e visualização. Para isso, podemos criar uma nova página e arrastar a tabela fato estoque para o canvas. E então, clicar com botão direito na tabela fato e clicar em "Adicionar relacionamentos". Veja a página com todas as tabelas:  
![b3d3934fdc7bc4b48b4a5718c72b45d5.png](../_resources/b3d3934fdc7bc4b48b4a5718c72b45d5.png)

Agora veja a página com apenas as tabelas relacionadas com a Fato Estoque:  
![2e70147887b3951fc6808fbb025b6efc.png](../_resources/2e70147887b3951fc6808fbb025b6efc.png)

O mesmo ocorre com a Fato Vendas:  
![7ad2fbb9d6bcf21f473e7ada6653239c.png](../_resources/7ad2fbb9d6bcf21f473e7ada6653239c.png)

Sempre que fazemos esse tipo de organização, devemos separar isso por fatos.

Ainda pensando na organização do projeto, para facilitar a vida de quem irá fazer o relatório, podemos ocultar algumas colunas que não serão usadas, por exemplo as colunas de chave (ex: DataKey da tabela Calendário). Também podemos ocultar as tabelas fato, pois elas tecnicamente só servem para fazer a centralização e ligação das dimensões, e ai usaremos medidas DAX para usa-las eventualmente. Para ocultar colunas ou tabelas, basta clicar com o botão direito no elemento que queremos ocultar no lado direito da aba modelo em dados, e clicar em "Ocultar da visualização do relatório".

Então, para cada dimensão, removeremos a coluna de chave. E para as fatos, iremos ocultar a tabela inteira.

**Para criar uma documentação do projeto no PBI de forma automática, usar o PBI Helper.**

* * *

&nbsp;

&nbsp;

&nbsp;

&nbsp;
---
title: Formação PBI - Alura (Fundamentos DAX e PBI)
updated: 2025-02-13 20:19:18Z
created: 2024-06-17 19:46:28Z
latitude: -23.55051990
longitude: -46.63330940
altitude: 0.0000
---

- [Sobre Tratamento de dados](#sobre-tratamento-de-dados)
    - [Transformar Json em Estrutura Tabular no PowerQuery](#transformar-json-em-estrutura-tabular-no-powerquery)
        - [Referencias](#referencias)
- [Criando medidas com Dax](#criando-medidas-com-dax)
    - [Contexto de Linha](#contexto-de-linha)
    - [Contexto de Filtro (visual)](#contexto-de-filtro-visual)
    - [Iterações](#itera%C3%A7%C3%B5es)
    - [Colunas Calculadas X Medidas](#colunas-calculadas-x-medidas)
        - [Sobre Colunas Calculadas X Medidas (conclusão final):](#sobre-colunas-calculadas-x-medidas-conclus%C3%A3o-final)
    - [Iteradores (SUMX)](#iteradores-sumx)
- [Dax Avançado](#dax-avan%C3%A7ado)
    - [Relacionamento entre dados](#relacionamento-entre-dados)
        - [Como o dax pode nos ajudar a trazer informações de uma outra tabela?](#como-o-dax-pode-nos-ajudar-a-trazer-informa%C3%A7%C3%B5es-de-uma-outra-tabela)
        - [E qual a vantagem disso?](#e-qual-a-vantagem-disso)
    - [Values e Distinct](#values-e-distinct)
    - [Funções Iteradoras (dnv)](#fun%C3%A7%C3%B5es-iteradoras-dnv)
    - [Funções de modificação de filtro (contexto)](#fun%C3%A7%C3%B5es-de-modifica%C3%A7%C3%A3o-de-filtro-contexto)
- [Sobre contextos (dnv)](#sobre-contextos-dnv)
- [KeepFilters](#keepfilters)
- [Relatórios Vs Dashboards](#relat%C3%B3rios-vs-dashboards)

# Sobre Tratamento de dados

Ao criar visualização de dados devemos pensar na facilidade e rapidez de tomar decisões e análise.

No PowerQuery, na pag de exibição, marcar a opção "qualidade da coluna", para saber registros com erros, vazios, etc.  
![18ce783552dbd6613443977c71752fcb.png](../_resources/18ce783552dbd6613443977c71752fcb.png)  
Todas essas opções podem me ajudar no tratamento dos dados. **PRINCIPAL: PERFIL DA COLUNA**

Da pra mesclar duas tabelas.

## Transformar Json em Estrutura Tabular no PowerQuery

No campo converter, clicar em "Na Tabela". E ficará assim:   
![964a3fb71b1590c6c533f4ce72ae1ca0.png](../_resources/964a3fb71b1590c6c533f4ce72ae1ca0.png)  
Após isso, devemos selecionar o campo Value e clicar no icone. Após isso, clique em "OK" na aba que se abre. Isso expandirá os valores. Feito isso, ficará assim:  
![e1b5b0e6d536ef2899b2e40b02d0d9d1.png](../_resources/e1b5b0e6d536ef2899b2e40b02d0d9d1.png)  
Já é quase uma tabela, porém a disposição dessa tabela é horizontal e precisamos que seja vertical. Para isso, vamos na aba transformar e clicamos em "Transpor" e pronto, nossa tabela ficará assim. da maneira correta:  
![97fb62f3ef0680f2454bc197869fc7ce.png](../_resources/97fb62f3ef0680f2454bc197869fc7ce.png)  
Para ficar perfeito, só promover os cabeçalhos da linha 1;

Só temos 1 problema, na coluna 2 os valores invés de ter um espaço entre as palavras, tem um "\_", e não queremos isso, para tirarmos isso, clicamos na coluna com botão direito e clicamos em substituir valores. Em "Valor a ser localizado" colocamos o "\_" e em "Substituir por" colocamos um espaço. Por último queremos que nossos valores tenham a primeira letra em maiúsculo, para isso na aba transformar clique em "formato" e após clique em "Colocar Cada Palavra em Maiuscula".

Temos valores vazios nessa base de dados, para retira-los, selecione todas as colunas com ctrl+shift+A depois na aba pagina inicial clique em "reduzir linhas", depois em "Remover Linhas" e ai em "Remover Linhas em branco", lá também terá outras opções de remoção de linhas.

Nós podemos alterar tipo por localidade, por exemplo se tivermos dados decimais com "." e a localidade for Brasil, o PowerQuery vai simplesmente ignorar esse "." e juntar os dados. Para tratar isso temos que clicar com botão direito na coluna e clicar em "Alterar Tipo", depois clicar em "por localidade", escolhemos a opção "numero decimal" e depois escolhemos a localidade desejada, se for "," escolha portugues Brasil, se for "." escolha ingles estados unidos. Se for um valor monetário devemos escolher "decimal fixo" invés de apenas decimal.

**Prestar atenção nos tipos dos dados!!**

### **Referencias**

Podemos referenciar uma tabela, referenciar uma tabela significa pegar uma tabela em seu estado final e duplica-lo mas sem criar uma nova conexão. Para isso do lado direito do PowerQuery, clicamos com botão direito na tabela que queremos refereciar e escolhemos a opção "Referência". Essa tabela referenciada a "duplicata" vem sem etapas de transformações, porém com todas as transformações aplicadas que fizemos na tabela original.

<span style="color: #c0c0c0;">A opção de duplicar cria uma cópia independente da tabela original, permitindo trabalhar com uma versão isolada dos dados, aplicar transformações específicas ou comparar diferentes cenários sem afetar o conjunto de dados original. Por outro lado, a opção de referenciar estabelece uma conexão entre duas consultas, utilizando os resultados da consulta original como entrada. **Qualquer alteração na consulta original é automaticamente refletida na consulta de referência**.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">A referência é uma outra forma de copiar uma tabela, com a diferença de que a nova tabela gerada terá todos os tratamentos realizados na original, mas não terá as etapas, pois todas elas se tornarão uma só, que é a Fonte, representando a referência à tabela original.</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><img src="../_resources/418d39e51933b1bdc180dbef02cfedd6.png" alt="418d39e51933b1bdc180dbef02cfedd6.png" width="457" height="293" class="jop-noMdConv"></span></span>

**<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Quanto menos etapas tiver em nosso PowerQuery</span></span>** <span style="color: #c0c0c0;"><span style="color: #c0c0c0;">**melhor**. Podemos renomear etapas e adicionar descrições a elas, isso é útil para fins de documentação e escalonamento.</span></span>

&nbsp;

&nbsp;

# <span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Criando medidas com Dax</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">(Leadtime = tempo que alguma atividade leva para ser feita)</span></span>

> **<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Antes de qualquer projeto, devemos entender quais são nossos dados, quais seus tipos e como eles se relacionam. Também devemos <span style="color: #c0c0c0;">verificar a consistência dos dados. <span style="color: #c0c0c0;">Certifique-se de que não há valores ausentes ou incorretos nas colunas relevantes. <span style="color: #c0c0c0;">Verifique também se os valores estão em um formato apropriado (por exemplo, numérico para preços e quantidades).</span></span></span></span></span>**

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">O DAX apesar de ser simples, envolve 3 conceitos importantes. Os contexto de filtro e linha e as iterações. No caso do DAX, com iterações, conseguimos fazer várias etapas dentro de uma só. Com isso ganhamos mais eficiência e tempo.</span></span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Interessante saber que todo calculo DAX é uma função, logo podemos chamar uma função dentro de outra.</span></span></span></span></span>

## <span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Contexto de Linha</span></span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">O contexto de linha **refere-se à capacidade do DAX de avaliar as fórmulas em relação a cada linha individual de uma tabela**. Isso significa que, ao calcular uma medida ou uma coluna calculada, o DAX considera o valor atual de cada linha como base para o cálculo. Essa funcionalidade do DAX possibilita que você realize operações em nível de linha ou agregue valores com base nas características específicas de cada linha. O contexto de linha é essencial para calcular totais, médias, proporções ou **qualquer cálculo que envolva a análise de cada registro individualmente.**</span></span></span></span></span></span>

## <span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Contexto de Filtro (visual)</span></span></span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Por outro lado, **o contexto de filtro refere-se à capacidade do DAX de aplicar filtros a um conjunto de dados antes de realizar um cálculo.** Esses filtros podem ser definidos por um usuário ou por condições específicas definidas no modelo de dados. O contexto de filtro é importante quando você deseja restringir os dados de entrada para um cálculo, calculando apenas em um subconjunto específico de registros. Com o contexto de filtro, é possível realizar cálculos condicionais e filtrar dados com base em diferentes critérios, como período de tempo, categorias ou outras características dos dados.</span></span></span></span></span></span>

## <span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Iterações</span></span></span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Além disso, o DAX também oferece suporte a iterações, que **permitem que você realize cálculos repetitivos em um conjunto de dados**. As iterações no DAX são **usadas quando você precisa percorrer uma tabela várias vezes para realizar um cálculo mais complexo ou para realizar operações de agregação em um grupo de valores**. Por exemplo, você pode usar uma iteração para percorrer cada linha de uma tabela e aplicar uma lógica condicional para calcular uma medida personalizada ou para realizar um cálculo cumulativo.</span></span></span></span></span></span></span>

&nbsp;

**Alguns exemplos de contexto em funções são:**

- A função **AVERAGEX** calcula a média de uma expressão em um contexto especificado. Ela itera por cada linha de uma tabela, aplicando a expressão a cada uma delas e, em seguida, retorna a média desses resultados.
- A função **SUMX** calcula a soma de uma expressão em um contexto especificado. Ela itera por cada linha de uma tabela, aplicando a expressão a cada uma delas e, em seguida, retorna a soma desses resultados.
- A função **ALL** remove todos os filtros aplicados a uma expressão, permitindo que você a avalie em um contexto mais amplo.

> Para inserir comentários em um código DAX podemos usar "--" ou "//", para comentários de varias linhas usamos o "/\*\*/"

**Diferente das colunas calculadas, as medidas trabalham com agregação, ou seja, pegam todos os valores de X coluna e nos retorna 1 unico valor, seja ele uma soma, uma divisão, uma média, etc.**

## Colunas Calculadas X Medidas

Colunas calculadas são menos eficientes pois elas são carregadas junto do nosso modelo. Já as medidas são calculadas em tempo de execução, logo é mais eficiente. Se pudermos usar qualquer um dos dois caminhos, o recomendável é usar as medidas.

Colunas calculadas trabalham num contexto de linha, ou seja, se estivermos fazendo um calculo numa coluna, estaremos fazendo o mesmo calculo para todas as linhas. Já **medidas trabalham no contexto do visual**, logo se estivermos aplicando algum filtro no visual, as medidas irão pegar o mesmo filtro.

Para criação de métricas e KPIs, medidas são o caminho correto. Se precisamos de dados para a criação dessas métricas ou KPIs e podemos obter esses dados por meio de um calculo de outras colunas de nossa tabela, colunas calculadas são interessantes. Por exemplo: Faturamento Total = Livros\[Preço Unitário\] \* Livros\[Quantidade de vendas\] <- veja que fizemos esse calculo usando apenas as colunas, não foram usadas funções.

Colunas calculadas são usadas para criar agregações personalizadas e cálculos com base nos dados existentes em uma tabela. Elas são úteis para pré-calcular valores e melhorar o desempenho do painel. Medidas, por outro lado, são mais adequadas para realizar cálculos com base em expressões condicionais e lógicas, além de envolver filtragem e agregação de dados em tempo real.

### Sobre Colunas Calculadas X Medidas (conclusão final):

Um exemplo interessante de quando usar colunas calculadas e medidas é: eu quero calcular a margem bruta e a taxa de margem bruta e quero exibir isso.    
<br/>Para criar a métrica da margem bruta, precisamos de colunas calculadas, precisamos calcular o faturamento e custo total, e ai sim calcular a margem bruta, e só depois conseguimos calcular a taxa de margem bruta. Porém, você terá a margem bruta e taxa de margem bruta para cada linha da sua tabela, e isso não nos diz nada, não é uma métrica nem uma KPI, são apenas valores.  
<br/>E é ai que entram as medidas. Com elas podemos sumarizar a margem bruta em reais e ver quanto lucramos, podemos somar a % e saber quantos % lucramos de acordo com o mês passado, podemos ver qual elemento mais teve lucro, etc.

> **Sempre que eu quero agregar e/ou mostrar algo, devemos usar medidas. <- Conceito importante**

Novamente, colunas calculadas trabalham no contexto de linha, medidas no contexto de filtro (visual), exemplo:  
<img src="../_resources/ebf08d5583b5f70351f1b2ba58170fc8.png" alt="ebf08d5583b5f70351f1b2ba58170fc8.png" width="810" height="253" class="jop-noMdConv">  
Na tabela acima temos duas taxas de margem bruta, a primeira taxa foi calculada numa coluna calculada, isso significa que ela calculou a margem bruta para cada linha e no final somou o total disso (contexto de linha). Já na segunda margem bruta, nos temos o visual filtrando essa margem bruta, ou seja, está nos trazendo a taxa das agregações, já a coluna calculada nos trás a soma de cada taxa.

**Sempre que quisermos trabalhar com taxas, % e aquilo esta sendo agregado, devemos usar medidas para que nosso resultado seja o correto.**

&nbsp;

**As colunas calculadas são úteis quando você precisa derivar novas informações ou realizar cálculos com base em combinações de colunas existentes.** Por exemplo, você pode criar uma coluna calculada para calcular a margem de lucro bruto de um produto, subtraindo o custo dos produtos vendidos da receita de vendas.

Por outro lado, **as medidas são cálculos que agregam ou resumem valores de uma ou mais colunas em uma tabela**. As medidas são criadas usando funções agregadas, como soma, média, máximo, mínimo, entre outras, para fornecer informações resumidas sobre os dados. Diferentemente das colunas calculadas, as medidas são usadas em visualizações interativas, como gráficos e tabelas, permitindo que você explore seus dados em diferentes perspectivas. Por exemplo, você pode criar uma medida para calcular a receita total de vendas ou a contagem de produtos vendidos.

As medidas também são flexíveis e podem responder dinamicamente às interações do usuário, ajustando seus resultados com base nas seleções feitas em filtros ou em outras partes da visualização.

As colunas calculadas e as medidas no Power BI têm propósitos diferentes e apresentam algumas diferenças importantes. Aqui estão as principais diferenças entre as duas:

- **Agregação versus Valor Individual:** As **medidas são calculadas para fornecer um valor agregado**, como soma, média ou contagem, com base em um conjunto de linhas ou colunas. **Por outro lado, as colunas calculadas retornam um valor individual para cada linha da tabela**, calculado com base em uma fórmula específica.
- **Complexidade:** As **colunas calculadas são mais adequadas para cálculos simples e fórmulas diretas que podem ser aplicadas a cada linha da tabela**. Elas podem usar colunas existentes como base para os cálculos. Já as **medidas são mais adequadas para cálculos mais complexos, envolvendo agregações, filtros e contextos mais amplos**.
- **Exibição:** As **medidas são projetadas para serem exibidas em visualizações, como gráficos, tabelas e cartões**. Elas fornecem informações resumidas e indicadores-chave de desempenho (KPIs). As **colunas calculadas, por outro lado, não são projetadas para serem exibidas diretamente em visualizações**, porém podem ser usadas como base para cálculos adicionais ou como informações adicionais nos bastidores do modelo de dados.
- **Contexto:** A **coluna calculada trabalha em contexto de linha**, **pois ela funciona dentro do escopo da linha atual da tabela onde a coluna pertence**. Ao fazer referência a uma coluna, o valor correspondente a essa coluna é retornado para a linha em questão. Em contrapartida, **a medida trabalha no contexto de filtro, seja do visual ou da consulta**. Quando você quiser agregar valores de várias linhas em uma tabela, ao invés de calcular para cada linha, você pode utilizar uma medida.

&nbsp;

Explicando de forma simples e final:

**Imagine uma loja:**

- **Colunas Calculadas** são como **etiquetas nas prateleiras**. Elas armazenam novos valores para cada produto, como "lucro por item" (preço unitário - custo). Cada produto tem seu próprio valor na coluna.
- **Medidas** são como **painéis informativos dinâmicos**. Elas calculam resultados com base em filtros e contexto da visualização. Por exemplo, "lucro total" muda de acordo com os produtos e categorias selecionados.

Colunas calculadas devem conter cálculos simples e valores que precisam ser armazenados permanentemente.

Para mais info: [Artigo Alura sobre Contexto de filtro e Linha](https://www.alura.com.br/artigos/power-bi-contexto-linha-filtro/)

* * *

Sempre que trabalhamos com variaveis temos que usar o RETURN, exemplo:  
![5668c412178e6913cf3fb4986d1fe892.png](../_resources/5668c412178e6913cf3fb4986d1fe892.png)  
Variaveis não são globais, elas só funcionam dentro da medida em que foram criadas.

## Iteradores (SUMX)

O iterador é o processo da função avaliar linha a linha e no final das contas agregar um resultado e nos retornar a medida. Para trabalharmos com uma função iteradora basta adicionar o X ao final da função: SUMX, AVERAGEX, etc (algumas funções iteradoras não tem o X!!). Isso nos permite criar medidas no lugar de colunas calculadas, ex:

```Java
Media do LeadTime Iterando = AVERAGEX('registro_vendas', DATEDIFF(registro_vendas\[Data_Compra\], registro_vendas\[Data_Entrega\], DAY))  
```

**Logo, o uso de colunas calculadas só se faz necessária quando queremos armazenar calculos simples em nossa tabela. Pois podemos fazer calculos em nível de linha em iteradores.**

Tambem, podemos fazer assim:  
![7307a64b10a219f5f6fdccf1477de6dc.png](../_resources/7307a64b10a219f5f6fdccf1477de6dc.png)  
Usando variaveis. E assim substituimos as colunas calculadas com sucesso.

# Dax Avançado

## Relacionamento entre dados

Aqui temos informações de logística de uma livraria:  
![16d8968e7b5b608a6d78383f2483942e.png](../_resources/16d8968e7b5b608a6d78383f2483942e.png)  
Note que temos o campo "id_produto" ele é quem faz o relacionamento com a tabela de livros:  
![661f696022c32b9f811d0995f28fbbbc.png](../_resources/661f696022c32b9f811d0995f28fbbbc.png)  
E aqui sim temos as informações dos livros, ou seja, por meio do "id_produto" damos "acesso" de informações de produtos para a tabela de loegística.  
<br/>Na aba de exibição de modelo no PBI, podemos fazer a relação entre as duas tabelas.  
![3292e3e2f9946492aa329dc532335a9b.png](../_resources/3292e3e2f9946492aa329dc532335a9b.png)  
Note o tipo de relacionamento, nós temos na tabela livros apenas 1 id unico que não se repete, que é relacionado com a tabela de logística a qual os ids se repetem. Logo temos uma relação de 1 para Muitos. Pois 1 livro pode ser vendido várias vezes.

### Como o dax pode nos ajudar a trazer informações de uma outra tabela?

Para isso precisamos criar uma coluna calculada. Nós estamos trabalhando apenas com a tabela de logística, mas precisamos dos dados de categoria dos livros. Para isso usaremos a função **RELATED**. Exemplo: Categoria do Livro = RELATED(registro_livros_marketing\[Categoria\])  
<br/>Essa coluna terá os dados de categoria dos livros (que originalmente estava na tabela livros e não logística) em nossa tabela de logística.

<span style="color: #c0c0c0;">A função RELATED usa a relação estabelecida entre as tabelas para encontrar a correspondência correta dos valores. É importante lembrar que a relação deve ser definida no modelo de dados para que a função funcione corretamente.</span>

### E qual a vantagem disso?

Nós podemos trazer dados em visualizações, de qualquer tabela, podemos juntar elas de qualquer maneira, mas qual a vantagem de usar DAX para isso?  A vantagem é que nós não temos os dados relacionados apenas na visualização, mas sim na nossa estrutura da tabela. O dado está la fisicamente e não virtualmente, como aconteceria se juntassemos os dados das tabelas em visualizações de tabela por exemplo.

**Um passo importante depois disso é: nossos dados estão se comunicando? Eles contam a mesma história?**

cada time em uma empresa tem uma definição diferente dos dados, nossos dados podem ter critérios e significados diferentes.

Vamos usar como exemplo a "quantidade de produtos vendidos". Para o time de marketing, essa métrica tem **critérios específicos**: quando uma compra é efetuada no site (por exemplo, na Amazon), uma pessoa clica em "Comprar" e finaliza a compra. Para o time de marketing, essa transação já é considerada concluída.

Analisando os dados do time de marketing, temos a coluna de "**Quantidade de vendas**". Essa quantidade de vendas é registrada no momento em que ela ocorre no site.

Por exemplo, suponha que foram registradas nove vendas do livro "Chamada do Destino". No momento em que o cliente clica no produto e finaliza a compra, eles atualizam o valor para 10 na tabela. Com isso, passa-se a considerar que o produto teve dez vendas. Essa é a definição para o time de marketing, e seus critérios fazem sentido.

Se olharmos para os dados de logística, por exemplo, a venda do produto número dois na fatura três, notaremos que, segundo os critérios dessa equipe, o registro da venda ocorre quando o produto é entregue ao cliente.

Quando a logística recebe o status de que o produto foi entregue, ela atualiza o registro na tabela de notas, constando a data em que ocorreu a entrega. Logo, a partir desse momento, a compra é considerada efetuada pelo time de logística. **P<span style="color: #c0c0c0;">ara nós, como pessoas analistas de BI, é muito importante entendermos que nossos dados podem ter critérios diferentes.</span>**

## Values e Distinct

Portanto, a função DISTINCT é utilizada para retornar uma lista contendo somente os valores únicos de uma coluna específica, ou seja, aqueles valores que não se repetem. Por outro lado, a função VALUES é usada para retornar uma lista com todos os valores presentes na coluna, incluindo aqueles que se repetem. Portanto, a diferença fundamental entre essas duas funções está na maneira como lidam com valores duplicados em uma coluna, o que pode causar diferenças no resultado.

## Funções Iteradoras (dnv)

As funções iteradoras são uma categoria de funções poderosas em DAX (Data Analysis Expressions), utilizadas para realizar cálculos em cada linha de uma tabela e, em seguida, retornar os resultados em uma nova tabela ou um único valor agregado. Diferentemente das funções agregadoras, que fornecem um único resultado para toda a tabela, as funções iteradoras realizam operações em um nível de granularidade de linha.

Essas funções são muito úteis para casos em que é necessário realizar cálculos complexos em cada linha e, em seguida, consolidar os resultados em uma nova tabela ou valor. Além disso, elas são frequentemente utilizadas em colunas calculadas, medidas e até mesmo em colunas de tabela para criar lógicas mais avançadas.

As funções iteradoras mais comuns em DAX incluem:

1 - SUMX: Calcula a soma de uma expressão em todas as linhas de uma tabela e retorna o resultado agregado.

2 - AVERAGEX: Calcula a média de uma expressão em todas as linhas de uma tabela e retorna o resultado agregado.

3 - COUNTAX: Conta o número de linhas em uma tabela que atendem a uma condição específica.

4 - MINX e MAXX: Encontram o valor mínimo e máximo de uma expressão em todas as linhas de uma tabela, respectivamente.

5 - FILTER: Filtra as linhas de uma tabela com base em uma condição e retorna a tabela filtrada.

6 - ALLSELECTED: Retorna todas as linhas de uma tabela, ignorando quaisquer filtros aplicados nas visualizações.

<span style="color: #c0c0c0;">No entanto, é importante ter cuidado ao usar funções iteradoras, pois podem resultar em cálculos mais lentos e recursos computacionais mais intensivos, especialmente em grandes volumes de dados. Portanto, é fundamental otimizar o uso dessas funções e entender como elas afetam o desempenho do seu modelo de dados. É recomendável que você utilize as funções iteradoras apenas quando necessário, e sempre busque alternativas mais eficientes, como medidas agregadas, quando possível.</span>

## <span style="color: #c0c0c0;">Funções de modificação de filtro (contexto)</span>

As funções de modificação de filtros em DAX fazem parte de uma categoria especial de funções que permitem manipular os filtros aplicados em uma tabela ou coluna em um modelo de dados. Essas funções são fundamentais para ajustar o contexto de avaliação de uma fórmula e obter resultados específicos, ignorando ou substituindo filtros existentes.

Quando criamos medidas ou colunas calculadas em DAX, o contexto de avaliação é muito importante. Ele determina quais linhas ou valores da tabela são considerados na fórmula. Em algumas situações, precisamos modificar esse contexto para obter resultados mais precisos ou diferentes daqueles gerados pelos filtros padrão aplicados nas visualizações.

As principais funções de modificação de filtros em DAX incluem:

1.  **ALL**: É uma das funções mais usadas nesta categoria. Ela remove os filtros de uma ou mais colunas especificadas, ou mesmo de toda a tabela, garantindo que todas as linhas sejam consideradas no cálculo. Isso é especialmente útil quando você quer realizar cálculos ignorando os filtros aplicados em uma visualização específica. Ela sobrescreve filtros que ja existem.
2.  **ALLEXCEPT**: É utilizada para remover os filtros de todas as colunas de uma tabela, exceto aquelas que você deseja manter no contexto de avaliação. Ela permite que você controle quais colunas terão impacto no resultado da fórmula, enquanto outras serão ignoradas.
3.  **FILTER**: É uma função versátil que permite criar filtros personalizados em tempo de cálculo. Ela permite que você especifique condições complexas para filtrar uma tabela e obtenha resultados dinâmicos com base nessas condições.
4.  **VALUES**: É frequentemente utilizada para criar uma lista distinta de valores de uma coluna, removendo qualquer filtro que possa estar sendo aplicado a ela. Ela retorna todos os valores únicos da coluna, independentemente dos filtros nas outras colunas.

# Sobre contextos (dnv)

**Contexto de Linha:** O contexto de linha se refere ao cálculo que é realizado em cada linha individual de uma coluna. No entanto, ao criar medidas, o cálculo não é efetuado em uma linha específica, mas sim em um contexto mais amplo da coluna como um todo. Duas maneiras são apresentadas para tratar esse contexto de linha:

**Coluna Calculada:** Uma coluna é criada com um cálculo para cada linha da tabela. Isso permite que você realize um cálculo específico para cada linha e retorne o resultado. Essa abordagem é útil quando você precisa de uma coluna adicional com informações específicas para cada linha.

**Funções Iteradoras:** Estas são funções DAX que permite iterar por cada linha da tabela e realizar uma operação, mesmo antes de calcular uma soma, média ou outro tipo de agregação. Um exemplo mencionado é a função SUMX(), que realiza a soma dos valores após iterar por cada linha.

**Contexto de Filtro:** O contexto de filtro é influenciado pelos filtros aplicados nas tabelas. Isso significa que um cálculo agregado, como uma soma, é afetado pelo filtro que foi aplicado à tabela. Por exemplo, a função SUM() aplicada a uma coluna de valores Total será calculada considerando os filtros ativos na tabela.

A função **CALCULATE** no Power BI é uma das funções mais poderosas da linguagem DAX, pois ela permite não apenas realizar cálculos, mas também controlar o contexto de filtro em que esses cálculos são aplicados. Isso é o que torna possível tanto sobrescrever um filtro quanto agregar em um filtro já existente. Vamos entender como isso funciona:

1 - **Sobrescrever um Filtro:**

Às vezes, você pode querer realizar um cálculo específico em um contexto de filtro diferente do que está sendo aplicado naturalmente. A função CALCULATE() permite fazer isso. Para sobrescrever um filtro, você pode passar uma ou mais expressões para a função, que serão usadas como critérios para o filtro. Isso basicamente cria um novo contexto de filtro temporário.

Por exemplo, suponha que você tenha uma tabela com vendas e queira calcular a soma das vendas apenas para um determinado ano, independentemente de quaisquer outros filtros aplicados. Você pode fazer o seguinte:

```DAX
TotalVendasPorAno =  CALCULATE(SUM(Vendas[Valor]), FILTER(ALL(Vendas), Vendas[Ano] = 2023))
```

Nesse exemplo, a função CALCULATE() está sendo usada para sobrescrever o filtro naturalmente aplicado aos dados da tabela "Vendas" e, em vez disso, aplicar um filtro específico para o ano de 2023.

2 - **Agregar em um Filtro Já Existente:**

Além de sobrescrever filtros, a função CALCULATE() também pode ser usada para agregar cálculos em um filtro já existente. Isso permite que você adicione cálculos às condições de filtro existentes.

Suponha que você tenha uma medida para calcular a média das vendas para um determinado produto, mas deseja calcular essa média apenas para produtos que tiveram mais de 100 unidades vendidas:

```DAX
MediaVendasPorProduto =  CALCULATE(AVERAGE(Vendas[Valor]), FILTER(Vendas, Vendas[Quantidade] > 100))
```

Nesse caso, a função CALCULATE() está agregando o cálculo da média das vendas à condição de filtro existente (mais de 100 unidades vendidas) sem alterar o filtro original que pode estar aplicado a outros aspectos do relatório.

# KeepFilters

<span style="color: #c0c0c0;">A função DAX</span> `KEEPFILTERS` <span style="color: #c0c0c0;">(ManterFiltro, em português) é uma função poderosa no contexto de fórmulas e expressões no Power BI, Power Pivot e outras ferramentas que utilizam a linguagem de fórmula DAX. Essa função é usada para preservar os filtros aplicados em uma coluna ou tabela, enquanto você executa cálculos em outra coluna ou tabela. Isso é especialmente útil quando você quer realizar cálculos específicos sem afetar os filtros já aplicados.</span>

1 - **Preservando Filtros:**

A função `KEEPFILTERS` permite que você execute cálculos em uma coluna, mantendo os filtros ativos em outras colunas. Isso é útil quando você deseja realizar cálculos em um subconjunto específico de dados sem afetar os filtros em outras partes do conjunto de dados.

Exemplo:

Suponha que você tenha uma tabela chamada "Vendas" com colunas "Data", "Produto" e "Quantidade". Você deseja calcular a média de quantidades vendidas, mantendo os filtros de data aplicados.

```DAX
MédiaQuantidadeVendida = AVERAGE(KEEPFILTERS('Vendas', 'Vendas'[Quantidade]))
```

2 - **Filtros Contextuais:**

A função `KEEPFILTERS` também pode ser usada para criar cálculos que mantêm filtros específicos durante a avaliação de expressões. Isso ajuda a garantir que os filtros sejam aplicados em cálculos que dependam do contexto.

Exemplo:

Digamos que você queira calcular a porcentagem das vendas de um determinado produto em relação ao total de vendas, mantendo o filtro no produto selecionado.

```DAX
PorcentagemVendasProduto = DIVIDE(SUM(KEEPFILTERS('Vendas', 'Vendas'[Quantidade])), SUM('Vendas'[Quantidade]))
```

Lembre-se de que a função `KEEPFILTERS` pode ser especialmente útil em situações onde você precisa garantir que os cálculos sejam realizados apenas em um subconjunto específico de dados, mantendo os filtros aplicados. Isso ajuda a evitar resultados inesperados ou incorretos em suas análises.

* * *

# Relatórios Vs Dashboards

Os ***Relatórios*** normalmente são mais ricos em detalhes e mais longos, além de que podem ser exportados em PDF, imprimidos e assinados. Porém por serem ***estáticos***, isto é, não interativos, pode ser que seja necessário novos relatórios a cada nova requisição de um setor da empresa, por exemplo - algo que não ocorre a um dashboard.

Já os ***Painéis***, ou Dashboard em inglês, construídos no Power BI são otimizados para visuais que exploram a ***interatividade***, propondo uma análise de dados em busca de relações e padrões construídos a partir da interação entre os vários visuais, gráficos e cores dispostos. Há ainda a possibilidade que se faça a visualização dos dados em tempo real, deixando nossa pesquisa apta a analisar qualquer período, seja por dia, semana ou mês.

<span style="color: #c0c0c0;">Importante dizer que ambos os formatos apresentam informações que quando organizadas, **contam uma história** e apresentam informações úteis para a tomada de decisão.</span>
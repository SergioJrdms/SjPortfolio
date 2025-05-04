---
title: Aplicando DAX ao negócio
updated: 2024-11-07 23:37:30Z
created: 2024-07-06 18:13:00Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

- [Medidas Móveis](#medidas-m%C3%B3veis)
    - [Total Móvel](#total-m%C3%B3vel)
    - [Médias Móveis](#m%C3%A9dias-m%C3%B3veis)
        - [Entendendo (novamente) total e média móvel](#entendendo-novamente-total-e-m%C3%A9dia-m%C3%B3vel)
    - [Tratamento de retornos indesejados](#tratamento-de-retornos-indesejados)
    - [Análise de performance do visual](#an%C3%A1lise-de-performance-do-visual)
- [Análise de Cenários](#an%C3%A1lise-de-cen%C3%A1rios)
    - [Aplicando analise de Cenários em Totais e Médias Móveis (dias dinâmicos)](#aplicando-analise-de-cen%C3%A1rios-em-totais-e-m%C3%A9dias-m%C3%B3veis-dias-din%C3%A2micos)
    - [Alteração de Custo](#altera%C3%A7%C3%A3o-de-custo)
    - [MultiMedidas](#multimedidas)
- [Segmentações (Adentrando em DAX para negócios)](#segmenta%C3%A7%C3%B5es-adentrando-em-dax-para-neg%C3%B3cios)
    - [Análise ABC (teoria)](#an%C3%A1lise-abc-teoria)
    - [Segmentação ABC (prática)](#segmenta%C3%A7%C3%A3o-abc-pr%C3%A1tica)
    - [Gerando a análise ABC (graficando)](#gerando-a-an%C3%A1lise-abc-graficando)
    - [Segmentando pelo lucro de forma estática](#segmentando-pelo-lucro-de-forma-est%C3%A1tica)
    - [Tornando a segmentação dinâmica](#tornando-a-segmenta%C3%A7%C3%A3o-din%C3%A2mica)
        - [Ordenação do TopN](#ordena%C3%A7%C3%A3o-do-topn)
- [DAX Studio](#dax-studio)

Antes de darmos início ao desenvolvimento de nossas análises, é importante entender os dados que iremos utilizar no decorrer do projeto.

Estamos trabalhando com dados de vendas de uma consultoria, que contém diversas tabelas sobre o negócio da empresa. Entre elas, temos:

- Tabela de Produtos: contém dados sobre os produtos a serem vendidos;
- Tabela Calendário: contém dados sobre os períodos de tempo em que as vendas foram realizadas;
- Tabela de Itens Notas: contém dados que descrevem os produtos de cada nota;
- Tabela de Notas: contém dados sobre as vendas dos produtos;
- Tabela de Vendedores: contém dados sobre os vendedores, como matrícula, nome, e percentual de comissão.

Com essas informações em mãos, o nosso objetivo é gerar análises para auxiliar nas futuras tomadas de decisões da empresa. Para isso, neste case, vamos desenvolver um dashboard com algumas métricas para a otimização de tempo e recursos.

Ao longo desta jornada iremos utilizar a linguagem DAX, uma ótima ferramenta para criar cálculos e relacionamentos em tabelas de dados no Power BI. Com a capacidade de criar medidas, tabelas calculadas e outros tipos de cálculos avançados, ela permite melhorar a análise de dados e apoiar a tomada de decisão com maior integração e estratégia. A sintaxe do DAX é semelhante à do Excel, o que facilita o aprendizado e o uso para usuários já familiarizados com o Power BI.

Visto que já possuímos habilidade com a linguagem DAX, o aprofundamento desse conhecimento torna-se ainda mais interessante pela possibilidade de uma maior sistematização em nossas análises. Sendo assim, veremos o caso de uma empresa de consultoria, a qual iremos ajudar a tomar decisões de negócios a partir de medidas mais complexas. Para isso, vamos utilizar as seguintes **técnicas** e **ferramentas**:

- Entender e aplicar as medidas de Total e Média móveis para suavizar os dados;
- Tratar resultados indesejados;
- Utilizar parâmetros para dar **dinamicidade** às medidas e relatórios;
- Analisar diferentes **cenários** a partir das medidas criadas;
- Combinar **medidas parametrizadas**, para a redução do número de visuais;
- Realizar **Análise ABC**, para classificar os dados;

Quando trabalhamos com aplicação ao negócio, o mais importante é isso: entender o contexto, ter **contato com a base de dados** e **importar** essa base para o **Power BI**. Então, iniciaremos as **primeiras análises**, conhecendo um pouco sobre o **total móvel**, a **média móvel** e alguns **tratamentos de erros** que podem acontecer quando utilizamos essas formas.

Também aprenderemos a trabalhar com **análise de cenários**, uma ferramenta bastante importante e poderosa, que pode trazer vários insights para os gestores por seu dinamismo.

Por exemplo, **se eles alterarem a demanda, quanto isso impacta no lucro**? Ou\*\*, se diminuirmos o preço, quanto isso impacta na demanda\*\*? Nós aprenderemos a utilizar o DAX para otimizar essas análises.

> Explicações bobas sobre FILTER e RELATED na prática: para fazer uma medida pegando os dados mais recentes, usar o filtro de data:
> 
> ```Javascript
> Lucro Acumulado = 
> CALCULATE(
>          [Total Lucro],
>           FILTER(
>                All(Tb_Calendario),
>                Tb_Calendario[Date] <= MAX(Tb_Calendario[Date]) //para a data mais recente
>         )
> )
> ```
> 
> A medida Total Custo calcula o custo total das notas fiscais somando os produtos de quantidade por custo unitário para cada item, buscando o custo unitário na tabela Tb_Produtos através da função RELATED:
> 
> ```Javascript
> Total Custo = 
>     SUMX(
>         Tb_ItensNotas,
>         [Quantidade]*
>         RELATED(
>             Tb_Produtos[Custo]
>             )
>         )
> ```

* * *

Até agora nós

- Conhecemos a linguagem M e realizamos tratamentos dos dados importados no [Power Query](https://cursos.alura.com.br/course/power-bi-desktop-tratamento-dados-power-query), utilizando métodos de tratamento de dados dentro do próprio editor.
- Exploramos as medidas, um recurso que ajuda a ganhar qualidade e eficiência nos nossos relatórios, através da [linguagem DAX](https://cursos.alura.com.br/course/power-bi-formulas-dax).
- [Exploramos recursos mais avançados](https://cursos.alura.com.br/course/power-bi-explorando-recursos-visuais) para realizar a construção de um dashboards equilibrados e alinhados com o storytelling.
- [Prosseguimos com a linguagem M](https://cursos.alura.com.br/course/power-bi-mergulhando-linguagem-m), conhecendo seus fundamentos, para consumir APIs e manipular os dados de forma mais precisa e eficiente.
- Aprendemos a realizar a [modelagem de dados no Power BI](https://cursos.alura.com.br/course/power-bi-modelagem-dados), elaborando relacionamentos e esquemas eficientes, com foco na criação de relatórios.

&nbsp;

* * *

# Medidas Móveis

As **medidas móveis** se referem a um tipo de cálculo que se atualiza dinamicamente com base no contexto atual do relatório ou dashboard. Isso significa que o valor da medida pode mudar de acordo com os filtros ou slicers selecionados.

As medidas móveis são comumente utilizadas para calcular proporções ou porcentagens, como margem de lucro ou crescimento de vendas. Elas também podem ser empregadas na criação de **linhas de tendência** ou outras visualizações que demonstram a mudança de uma **métrica ao longo do tempo**.

São chamadas de "móveis" por causa da sua característica principal: a **dinamicidade**. Elas se ajustam e se atualizam automaticamente em tempo real, de acordo com as ações do usuário no relatório ou dashboard.

Imagine um relatório que mostra o lucro das vendas por região. Ao selecionar uma região específica, a medida de lucro se "move" para mostrar o valor referente apenas àquela região. Da mesma forma, ao aplicar filtros de data, categoria de produto ou qualquer outro critério, a medida se "adapta" para apresentar os dados relevantes para a seleção atual.

**Cenários Ideais para Medidas Móveis:**

- **Análise de tendências e padrões:** Quando se busca acompanhar a evolução de métricas ao longo do tempo, como vendas, custos ou indicadores de desempenho. As medidas móveis permitem identificar tendências e padrões nos dados, auxiliando na previsão de resultados futuros e na tomada de decisões estratégicas.
    
- **Comparação de diferentes cenários:** Ao comparar o desempenho de diferentes grupos, segmentos ou períodos, as medidas móveis facilitam a visualização das diferenças e a identificação de fatores que influenciam os resultados. Isso é útil para avaliar a efetividade de campanhas, estratégias ou iniciativas.
    
- **Simulação de cenários e análise de "what-if":** As medidas móveis permitem simular diferentes cenários e analisar o impacto de mudanças em variáveis ​​como preços, promoções ou investimentos. Isso auxilia na avaliação de riscos e oportunidades, otimizando a tomada de decisões.
    
- **Análise aprofundada de dados com base em filtros e slicers:** Ao aplicar filtros e slicers em relatórios e dashboards, as medidas móveis se atualizam automaticamente, mostrando os dados relevantes para a seleção atual. Isso permite uma análise mais granular e direcionada, focando em aspectos específicos do negócio.
    
- **Exploração de dados e descoberta de insights inesperados:** A interatividade das medidas móveis facilita a exploração dos dados de diferentes maneiras, possibilitando a descoberta de insights inesperados e oportunidades que podem passar despercebidos em análises estáticas.
    
- **Também podemos usar medidas móveis para suavizar dados com muita variação (pois prejudicam a analise de tendência).**
    

&nbsp;

## Total Móvel

<span style="color: #c0c0c0;">Os gestores solicitaram que fizéssemos uma análise sobre as vendas, isto é, o</span> **total e a média de vendas**<span style="color: #c0c0c0;">, um cenário bastante comum quando realizamos análises financeiras para saber sobre a saúde da empresa. Já temos algumas medidas que podem nos auxiliar nesta tarefa, que é, justamente, o total de vendas deste ano e do ano anterior.</span>

Estamos com o "Projeto base" aberto no Power BI Desktop. Para começarmos a análise, criaremos um **gráfico de área** ("Visualizações > Gráfico de área"), que é bastante semelhante ao gráfico de linhas, mas com a área abaixo da linha pintada.

Vamos incluir o total de vendas e a data. Basta acessar "Campos" e marcar "Total Vendas" e "Date". Com isso, um visual será gerado:

![Gráfico de área intitulado "Total Vendas por Ano, Trimestre, Mês e Dia". O eixo y, "Total Vendas", está graduado de 0,1 Mi a 0,3 Mi, com intervalos de 0,1 Mi. O eixo x, "Ano", é composto por: jan 2015; jul 2015; jan 2016; jul 2016; jan 2017; jul 2017; e jan 2018; Há uma linha azul-escuro que varia muito, impossibilitando a leitura dos dados. A área abaixo da linha está pintada de azul-claro.](../_resources/a6f26ace-8221-462f-9c73-79395714.png)

É um pouco difícil interpretar o que está acontecendo com os dados, porque há muita variância. Ou seja, há um comportamento um tanto caótico dos dados. Isso, em um contexto real, é completamente comum, porque não controlamos o que está acontecendo.

Existe uma ferramenta bastante interessante, que ajuda a **suavizar** o comportamento caótico dessa variância, que é o **total móvel e as médias móveis**. Esse recurso cria, portanto, uma suavidade à linha do gráfico.

<span style="color: #c0c0c0;">começaremos criando a medida do</span> **total móvel**<span style="color: #c0c0c0;">. É bastante comum que essas medidas móveis estejam num intervalo de 30 dias.</span>

Sobre a estrutura dessa medida, é necessário analisar um total no intervalo de 30 dias. Ou seja, precisamos do filtro de uma tabela que esteja sendo retornada nesse intervalo. Para isso, temos que armazenar o valor atual menos 30 dias, isto é, a data que está sendo selecionada nesse filtro (atual) menos 30 dias.

Utilizaremos o recurso de variável, `var`, que vai armazenar a `DataAtual` usando a fórmula `Max()`. A `Max` vai pegar a data mais recente (atual). Dentro dela, buscaremos a coluna `Date` da tabela de calendário.

<span style="color: #c0c0c0;">No `CALCULATE` usaremos a medida que já temos,</span> `Total Vendas`<span style="color: #c0c0c0;">, e como segundo parâmetro, o filtro, que será justamente a função</span> `DATESBETWEEN`<span style="color: #c0c0c0;">.</span>

A função `DATESBETWEEN` vai trazer o intervalo e funciona com três parâmetros:

- o primeiro, é a coluna de data que desejamos filtrar, a coluna `DATE`, da tabela de calendário.
- o segundo, é o intervalo inicial, isto é, a data inicial/valor atual menos 30 dias. Vamos aproveitar a nossa variável `DataAtual` e subtrair 30.
- o terceiro e último parâmetro é a `DataAtual`.

```Javascript
1 total movel 30 dias = 
2 var DataAtual = MAX(Tb_Calendario[Date]) //pega a data atual
3
4 RETURN
5 CALCULATE(
6     [Total Vendas],
7         DATESBETWEEN
8             Tb_Calendario[Date],
9                 DataAtual - 30, //pega a data inicial
10                DataAtual //data final é a data atual
11      ) //pega o total de vendas (medida que já temos) no intervalo de 1 mês
12 )
```

Então, em "Visualizações", vamos acessar o gráfico de área. Em "Campos > Medidas", nós selecionaremos o "total movel 30 dias", medida que acabamos de criar, e a coluna de data, "Date".

![Gráfico de área intitulado "total movel 30 dias por Ano, Trimestre, Mês e Dia". O eixo y, "total movel 30 dias", varia de 0 Mi a 6 Mi, com intervalos de 2 Mi. O eixo y, "Ano", é composto por: jan 2015; jul 2015; jan 2016; jul 2016; jan 2017; jul 2017; e jan 2018. Em comparação ao gráfico anterior, agora é possível acompanhar a variação de acordo com os meses do ano, porque a linha azul-escuro está relativamente estável. Abaixo dela, há uma área preenchida por azul-claro.](../_resources/432a11a6-8b6b-4509-965c-c42ca691.png)

<span style="color: #c0c0c0;">Há uma grande diferença! Quase como se conseguíssemos acompanhar o gráfico com o dedo. Com o</span> `total movel 30 dias`<span style="color: #c0c0c0;">, é possível observar de fato o comportamento dos dados.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">E se criássemos uma medida que comparasse esse total móvel de 30 dias com o total móvel do ano passado ou</span> *last year*<span style="color: #c0c0c0;">, como costumamos dizer no contexto de BI? Será que é possível fazer isso?</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Para isso usaremos essa mesma medida móvel, porém com a única modificação que invés de usarmos a medida `Total Vendas` nós usaremos nossa medida `Total Vendas Ano Anterior`:</span></span>

```Javascript
Total Vendas Ano Anterior = 
    CALCULATE(
        [Total Vendas],
        SAMEPERIODLASTYEAR(Tb_Calendario[Date])
    )
```

Essa medida usa a função `SAMEPERIODLASTYEAR` como filtro para a medida original de `Total Vendas` . Lembre a medida Total Vendas:

```Javascript
Total Vendas = 
    SUMX(
        Tb_ItensNotas,
        [Quantidade]*
        RELATED(
            Tb_Produtos[Preço]
            )
        )
```

Essa medida calcula a soma da quantidade multiplicada pelo preço dos produtos. Note que usamos a função `RELATED` para trazermos os dados de preço dos produtos de outra tabela. Ou seja, nós pegamos a quantidade itens notas na tabela `TB_ItensNotas` e multiplicamos pelo preço dos produtos, ao final somamos tudo isso.

Voltando para o total de vendas do ano anterior, a fórmula ficou assim:

```Javascript
total movel 30 dias LY = 
var DataAtual = MAX(Tb_Calendario[Date])

RETURN
    CALCULATE(
     [Total Vendas Ano Anterior],
         DATESBETWEEN(
             Tb_Calendario[Date],
                 DataAtual - 30,
                 DataAtual
      )
)
```

&nbsp;

* * *

## Médias Móveis

<span style="color: #c0c0c0;">Nós trabalhamos com o total móvel e agora analisaremos a</span> **média móvel**<span style="color: #c0c0c0;">. Ela é utilizada em vários contextos diferentes, por exemplo, no mercado financeiro, em que temos comportamentos de picos e descidas, com muita variância.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Nestes casos, a média móvel é bastante utilizada para **suavizar** um pouco a linha do gráfico. Também conseguimos usar a média móvel no nosso contexto.</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Agora, estruturaremos essa medida, começando por criá-la. Nós aproveitaremos toda a estrutura de código da nossa fórmula de total móvel.</span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">O próximo passo é fazer alguns ajustes. Primeiro, o nome: ao invés de</span> `total movel 30 dias`<span style="color: #c0c0c0;">, o nome será</span> `media movel 30 dias`<span style="color: #c0c0c0;">.</span></span></span></span>

```Javascript
1 media movel 30 dias = 
2 var DataAtual = MAX(Tb_Calendario[Date])
3
4 RETURN
5 CALCULATE(
6     [Total Vendas],
7         DATESBETWEEN
8             Tb_Calendario[Date],
9                 DataAtual - 30,
10                 DataAtual
11      )
12 )
```

<span style="color: #c0c0c0;">Em relação à estrutura do cálculo, após o</span> `RETURN`<span style="color: #c0c0c0;">, nós não utilizaremos</span> `CALCULATE`<span style="color: #c0c0c0;">, porque como desejamos calcular a média. Ao invés disso, usaremos a</span> `AVERAGEX()` <span style="color: #c0c0c0;">, que nos dará a média, analisando linha a linha neste contexto.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">O nosso primeiro parâmetro será a fórmula do</span> `DATESBETWEEN` <span style="color: #c0c0c0;">e o cálculo,</span> `[Total Vendas]`<span style="color: #c0c0c0;">, desta vez ficará no segundo parâmetro. A média será baseada nesta expressão. Fizemos isso<span style="color: #c0c0c0;">, porque essa é a ordem da função</span> `AVERAGEX`<span style="color: #c0c0c0;">. Primeiro ela pede a tabela e depois a expressão, o contrário da</span> `CALCULATE`<span style="color: #c0c0c0;">,</span></span></span>

```Javascript
1 media movel 30 dias = 
2 var DataAtual = MAX(Tb_Calendario[Date])
3
4 RETURN
5 AVERAGEX(
6         DATESBETWEEN
7             Tb_Calendario[Date],
8                 DataAtual - 30,
9                 DataAtual
10      ),
11            [Total Vendas]
12 )
```

Vamos criar um gráfico de área ("Visualizações > Gráfico de área") e marcar a medida "media movel". Na "Tb_Calendario", vamos marcar a "Date". Com isso, ele nos trará a visualização.

![Gráfico de área intitulado "media movel 30 dias por Ano, Trimestre, Mês e Dia. O eixo y, "media movel 30 dias", está graduado de 200 Mi a 240 Mi, com intervalos de 10 Mi. O eixo x, "Ano", é composto por: jan 2015; jul 2015; jan 2016; jul 2016; jan 2017; jul 2017; jan 2018. Há uma linha azul-escura em comportamento de ondas (picos e vales). A área abaixo da linha está preenchida em azul-claro.](../_resources/240cfd53-f5bd-44d2-bf8b-382d91bc.png)

<span style="color: #c0c0c0;">Conseguimos acompanhar o movimento dessas ondas no nosso gráfico, que é exatamente esse o nosso objetivo, enfatizar a tendência. Mas, outra possibilidade interessante, seria utilizar a mesma técnica de comparação com o ano anterior.</span>

Para isso, copiaremos a fórmula da média móvel de 30 dias por completo e criaremos uma nova medida, em que faremos toda a avaliação, mas para o total de vendas do ano anterior.

O nome da nossa medida será `media movel 30 dias LY`, sendo que "LY" se refere a *Last Year* (Ano anterior). E a medida `[Total Vendas]` será `[Total Vendas Ano Anterior]`, que está dentro da função `AVERAGEX()`.

```Javascript
1 media movel 30 dias LY = 
2 var DataAtual = MAX(Tb_Calendario[Date])
3
4 RETURN
5 AVERAGEX(
6         DATESBETWEEN
7             Tb_Calendario[Date],
8                 DataAtual - 30,
9                 DataAtual
10      ),
11            [Total Vendas Ano Anterior]
12 )
```

<span style="color: #c0c0c0;">Nós temos um período de comparação que vai de 2016 até 2018 e conseguimos saber o comportamento de cada curva em cada ano.</span>

<span style="color: #c0c0c0;">![e3291ff1bae79e54c8d27d151393dc4c.png](../_resources/e3291ff1bae79e54c8d27d151393dc4c.png)</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Podemos também adicionar uma segmentação conforme o ano, isto é, uma segmentação de dados. Na lista "Date", vamos marcar a "Hierarquia" e o "Ano".</span></span>

No gráfico, aparecerá um menu "Ano" com uma barra de rolagem que podemos ajustar e identificar um ano específico. Por exemplo, 2016. Inclusive, podemos aplicar não só a média móvel, mas também a total móvel.

<img src="../_resources/3b218cba6e0d8b854ef2cba236dc13d7.png" alt="3b218cba6e0d8b854ef2cba236dc13d7.png" width="805" height="213" class="jop-noMdConv">

Agora temos a segmentação. Se não tivéssemos o filtro, a análise acabaria não tendo um encaixe perfeito, porque teríamos apenas uma análise de 2015 e outra logo após. Seria interessante que, de alguma forma, esses intervalos se encaixassem perfeitamente. Então, precisamos realizar alguns ajustes na fórmula.

### Entendendo (novamente) total e média móvel

> Basicamente a mesma coisa que uma medida normal, porém dinâmica

As médias móveis e os totais móveis são maneiras de **verificar como o preço** de coisas como ações, moedas e outros componentes do mercado financeiro **estão mudando**. Eles ajudam a entender se o preço está subindo ou descendo e por quanto tempo isso pode durar, por exemplo.

A média móvel é uma forma de **verificar a tendência de preço a longo prazo**. É feita juntando os preços de alguns períodos e dividindo pelo número de períodos. Compartilhado como uma linha sobre o gráfico do preço, esse cenário nos permite realizar considerações a ponto de nos dizer se o preço está subindo ou descendo e por quanto tempo isso pode durar.

O total móvel **mostra a tendência de preço a curto prazo**. É feito da mesma maneira que a média móvel, porém mostra o que está acontecendo com o preço agora. Ele pode nos dizer **se o preço está subindo ou descendo no momento**.

Normalmente, as médias móveis e os totais móveis são usados juntos para ter uma ideia completa do que está acontecendo com o preço.

Algumas aplicações comuns dos indicadores técnicos Total e Média Móveis incluem:

- **Análise de tendências**: ação usada para **identificar padrões** nos preços ao longo do tempo.
    
- **Transformação dos dados**: ação que age para deixar as informações mais claras para que se possa **ajudar a suavizar os dados**, o que permite maior praticidade ao ver as tendências gerais.
    
- **Constatação de mudanças**: ação que ajuda a **identificar mudanças** no preço de um ativo, como uma subida ou queda acentuada.
    
- **Decisões de compra e venda**: ação usada como sinal para **decidir se é hora de comprar ou vender** um ativo financeiro.
    
- **Análise de risco**: ação usada para **medir quanto o preço de um ativo pode flutuar**.
    

Dessa forma, utilizando as médias e totais móveis, você tem uma visão mais completa da tendência de vendas do produto, tanto a curto quanto a longo prazo

&nbsp;

## <span style="color: #ffffff;">Tratamento de retornos indesejados</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Já calculamos o total móvel e a média móvel. Também realizamos análises através dos gráficos de área, mas, alguns resultados estão trazendo intervalos de datas que dificultam as análises e que não fariam muito sentido para os gestores. Por exemplo, o início do gráfico entre 2015 e 2016, onde só temos o valor atual, e o final do gráfico, pós 2018. <span style="color: #c0c0c0;">Então, temos alguns intervalos que estão trazendo valores que não fazem muito sentido para a análise.</span></span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">![e410c90a4ea02bdf2a1643fc18aaf2ed.png](../_resources/e410c90a4ea02bdf2a1643fc18aaf2ed.png)</span></span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">O que nos ajudaria a visualizar as informações de forma ainda mais clara, seria a construção de uma tabela com o total móvel e a média móvel. Então, vamos adicionar um visual de tabela, acessando "Visualizações > Tabela".</span></span></span></span>

No primeiro campo, podemos colocar a data (acessando "Tb_Calendario" e marcando "Date"). Com isso, entenderemos como o filtro vai agir nessa forma. Portanto, estamos colocando "Date" na primeira coluna, sem hierarquia. Para somar, vamos inserir outra coluna com o total móvel, por exemplo (acessando "Medidas" e marcando "Total movel 30 dias").

Vamos adicionar também a média "media movel 30 dias", para compreendermos o comportamento dessas duas funções. Agora, vamos aplicar um filtro para 2015 e entender o comportamento das nossas funções. Descendo a barra de visualização da tabela, percebemos que aparecem alguns números de 2015. Vamos chegar em 2016.

Em janeiro de 2016, percebemos que os valores começam a vir todos iguais. Vamos acompanhar um trecho da tabela:

| Date | total movel 30 dias | media movel 30 dias |
| --- | --- | --- |
| 01/01/2016 00:00:00 | 248.461.811,56 | 210.026,89 |
| 02/01/2016 | 248.461.811,56 | 210.026,89 |
| 03/01/2016 | 248.461.811,56 | 210.026,89 |
| 04/01/2016 | 248.461.811,56 | 210.026,89 |
| 05/01/2016 | 248.461.811,56 | 210.026,89 |
| ... | ... | ... |

A nossa função, do jeito que montamos, está trabalhando apenas com o filtro de data que aplicamos. Depois dessa data que aplicamos, ela traz os valores todos repetidos, o que não fazem sentido para a nossa análise.

<span style="color: #c0c0c0;">Precisamos tratar a função. Assim, quando a tabela sem linhas for exibida, não haverá nenhum cálculo. Perceba que, em 31 de dezembro de 2015, temos determinada informação. Quando chega 2016, o filtro aplicado realiza um cálculo que não existe. O nosso tratamento resolverá exatamente esse problema.</span>

Vamos acessar a medida de "total movel 30 dias" e, antes de executarmos o cálculo, que é a função `CALCULATE`, adicionaremos um condicional `if`. Esse `if` realizará uma contagem da `Tb_ItensNotas` (tabela "itens notas"), para saber se seu número de linhas é maior que zero. Se for maior que zero, executaremos a função. Se não for, não faremos nada.

Então, vamos inserir a função `COUNTROWS()`, responsável por contar as linhas, e passaremos o nome da tabela, `Tb_ItensNotas`. Se a função `COUNTROWS()` for maior que zero, vamos executar a função.

```Javascript
1 media movel 30 dias = 
2 var DataAtual = MAX(Tb_Calendario[Date])
3
4 RETURN
5 IF(
6    COUNTROWS(Tb_ItensNotas)>0,
7        CALCULATE(
8            [Total Vendas],
9            DATESBETWEEN
10                Tb_Calendario[Date],
11                 DataAtual - 30,
12                 DataAtual
13           )
14     )
15 )
```

<span style="color: #c0c0c0;">o</span> `if` <span style="color: #c0c0c0;">serve justamente para funcionar no contexto de filtro, já que, quando filtramos, por exemplo, por 2015, não teremos nenhum resultado para 2016. Ele só vai considerar quando a tabela for maior ou igual a zero na contagem de linhas. **Ela vai funcionar especificamente para o filtro que estamos querendo trazer**. Note a diferença:</span>

<span style="color: #c0c0c0;">![a32abd3582962b169c4cb2859e47ff6e.png](../_resources/a32abd3582962b169c4cb2859e47ff6e.png)</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Quando trabalhamos com o contexto de filtro, precisamos nos atentar a isso, ou geraremos um gráfico e quando colocarmos o filtro de ano, ele vai gerar um resultado que não é exato ou acurado.</span></span>

**<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Resumindo o que foi feito acima</span></span>**

quando aplicamos um filtro que só mostra o total de vendas do ano, como por exemplo 2015, o total móvel acaba deixando de funcionar corretamente.

Ao realizar a filtragem, os valores do ano escolhido são calculados de modo correto. Porém, os valores dos anos que não foram filtrados ficam repetidos, como você pode constatar a seguir:

![Alt text: Captura de tela de um visual de tabela do Power BI, com fundo branco. Nele, temos as colunas de Date, que contém os valores de datas, a de Média móvel 30 dias, com os valores calculados da média móvel, a de Total móvel 30 dias, com os valores calculados da total móvel. Na parte inferior da tabela temos o cálculo do total das colunas de medidas móveis.](../_resources/aula2-img5.png)

Apesar de termos esses valores para os outros anos - como é o caso do ano de 2016 - ao realizar o filtro, a consulta não encontra os valores para os outros anos, ou seja, é como se estivéssemos buscando por uma tabela vazia, sem linhas. Dessa maneira, esses valores repetidos não representam o cálculo que deveria ser feito.

Para resolver isso, utilizamos a função condicional `IF()`, em que perguntamos se as linhas da tabela são maiores que 0, ou seja, se a tabela não está vazia. Como os anos não filtrados não possuem linhas, eles não são calculados, exibindo apenas os valores de 2015.

<span style="color: #c0c0c0;">Com isso, o código da medida de total móvel 30 dias ficou da seguinte forma:</span>

```Javascript
total movel 30 dias = 
var DataAtual = MAX(Tb_Calendario[Date])

RETURN
    IF(COUNTROWS(Tb_ItensNotas) > 0,
        CALCULATE(
            [Total Vendas],
                DATESBETWEEN(
                    Tb_Calendario[Date],
                        DataAtual - 30,
                        DataAtual
                )
            ),
            BLANK()
    )
```

<span style="color: #c0c0c0;">Como condição, adicionamos a função</span> `COUNTROWS()` <span style="color: #c0c0c0;">para contabilizar o número de linhas da tabela ItensNotas, pois queremos calcular apenas se a quantidade de linhas for maior que 0.</span>

<span style="color: #c0c0c0;">Podemos fazer o mesmo para as medidas de média móvel e média móvel do ano anterior. Basicamente para isso adicionamos a verificação com `IF` e `BLANK()` ao final.</span>

&nbsp;

## Análise de performance do visual

O tratamento de retornos indesejados é muito útil para evitarmos que valores não desejados sejam calculados indevidamente. Podemos olhar, portanto, para esse tratamento de uma outra forma. Para além do resultado visual, que obtivemos ao realizar a filtragem, vamos dar ênfase ao desempenho.

Umas das funcionalidades mais interessantes e úteis do Power BI para projetos complexos é o **Performance Analyzer (PA)**. Com ele, somos capazes de analisar como nosso visual está performando por trás dos panos, para que então possamos encontrar possíveis gargalos ou lentidão.

* * *

&nbsp;

# Análise de Cenários

## <span style="color: #ffffff;">Aplicando analise de Cenários em Totais e Médias Móveis (dias dinâmicos)</span>

Realizamos a análise com os totais móveis e médias móveis. Porém, ela acabou ficando um pouco estática, já que deixamos um número fixo de 30 dias. Os gestores pediram que essa análise fosse um pouco mais dinâmica, já que para cada regra de negócio, será interessante investigar um período um pouco maior ou menor. <span style="color: #c0c0c0;">Podemos fazer isso utilizando recursos dos parâmetros do Power BI.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Encontramos esses recursos através da guia superior que existe na ferramenta Power BI, chamada "Modelagem". Então, vamos acessá-la e selecionar "Novo parâmetro". Ele nos trará duas opções: "Intervalo numérico" e "Campos". Escolheremos a primeira.</span></span>

Ao selecionarmos "Intervalo numérico", seremos redirecionados a outra tela de "Parâmetros", onde podemos inserir algumas informações, como o "Nome", que será "Período". O próximo campo "Tipo de dados", está preenchido com "Número inteiro". Nós estamos lidando com dias, que são números inteiros, portanto, manteremos essa opção.

<img src="../_resources/93f20bac27e8c39978d2587f403953fd.png" alt="93f20bac27e8c39978d2587f403953fd.png" width="413" height="405" class="jop-noMdConv">

Em seguida, podemos definir o intervalo (mínimo e máximo). Neste caso, vamos analisar de 30 dias a 180 dias. Então, preencheremos o campo "Mínimo" com "30" e o campo "Máximo" com "180". Preencheremos o campo "Incrementar" com 5, para definir de 5 em 5 dias. O "Padrão" desse dado será de 30 dias, já que estávamos utilizando esse intervalo.

Por fim, apertaremos o botão "Criar". Com isso, o período foi criado.

<span style="color: #c0c0c0;">Na parte de "Campos" (lateral direita da tela), uma nova tabela "Período" foi criada com dois parâmetros: "Período", que é o que está sendo utilizado na segmentação; e "Período Valor", indicando que podemos utilizá-lo dentro da medida, tornando-a mais dinâmica.  
<img src="../_resources/a66ae6fe5df11f82fe60fadb4211ec26.png" alt="a66ae6fe5df11f82fe60fadb4211ec26.png" width="235" height="116" class="jop-noMdConv">  
</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Automaticamente, ele criou um visual que é uma segmentação de dados e que nos permite inserir um intervalo. Se trata de um retângulo com o campo "Período" na parte superior e uma barra de rolagem abaixo.</span></span>

Ainda não ajustamos a medida. Esse resultado do gráfico vem de uma medida e nós não alteramos seu período, ele ainda está fixo em 30 dias.

Precisamos fazer um ajuste para colocarmos justamente esse "Período Valor", que está disposto na tabela de "Período" (Em "Campos > Medidas"), dentro de cada uma dessas medidas. No nosso caso, como estamos avaliando a média móvel e a média móvel do ano anterior, vamos aplicar essa medida a elas.

<span style="color: #c0c0c0;">Começaremos acessando a tabela de "Medidas" e localizando "media movel 30 dias". O primeiro passo é ajustar o nome, pois como não avaliaremos apenas os 30 dias, mas um período específico, o ideal é que o nome seja apenas "media movel".</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Dentro do</span> `DATESBETWEEN()`<span style="color: #c0c0c0;">, onde tínhamos 30 como diferença, agora colocaremos o "Período Valor":</span></span>

```Javascript
1 media movel = 
2 var DataAtual = MAX(Tb_Calendario[Date])
3
4 RETURN
5 IF(
6    COUNTROWS(Tb_ItensNotas)>0,
7        CALCULATE(
8            [Total Vendas],
9            DATESBETWEEN
10                Tb_Calendario[Date],
11                 DataAtual - [Período Valor], //parâmetro que foi criado, agora os dias são escolhidos pelo usuário
12                 DataAtual
13           )
14     )
15 )
```

Faremos exatamente o mesmo para a medida de média móvel do ano anterior. E agora sim, temos nossa segmentação por dias funcionando!

> **<span style="color: #c0c0c0;">Quando trabalhamos com as médias móveis, quanto maior for o período, mais suave fica nossa curva. Perdemos em detalhes e ganhamos na interpretação do movimento da curva. A depender da regra de negócio, isto é, caso a caso, teremos um resultado diferente.</span>**

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Ajustando os dias, é possível perceber ajustes também no gráfico. Esse é apenas um dos cenários que os gestores gostariam de avaliar. Outros cenários podem acontecer, por exemplo, mudanças no preço de um produto ou avaliar a demanda dos produtos.</span></span>

&nbsp;

## <span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #ffffff;">Alteração de Custo</span></span></span>

Conseguimos realizar uma análise dinâmica do total móvel e da média móvel. Analisando o potencial desses parâmetros, os gestores perguntaram se poderíamos fazer um ajuste conforme o preço e a demanda, assim conseguiriam verificar como reduzir o preço de um produto e aumentar a demanda mantendo o lucro.

Utilizaremos o poder dos parâmetros para implementarmos esse ajuste.

<span style="color: #c0c0c0;">Esse tipo de análise é conhecida como</span> **análise de cenário** <span style="color: #c0c0c0;">ou</span> **análise "e se"**<span style="color: #c0c0c0;">. Se alteramos determinada coisa, o que acontece com a outra, por exemplo, se alteramos o preço o que acontece com a demanda.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Usaremos os parâmetros. Nós criaremos dois: um deles servirá para alterarmos o preço do produto e outro para alterarmos a quantidade. Acessaremos a aba "Modelagem > Novo parâmetro" e selecionaremos "Intervalo numérico".</span></span>

Na outra janela, criaremos o primeiro parâmetro. Seu "Nome" pode ser "Preço produto". Em relação ao "Tipo de dados", nós escolheremos o "Número decimal", porque a ideia agora é trabalhar com **porcentagens**. Agora, vamos pensar no "Mínimo" e "Máximo".

Se criarmos uma variação, podemos reduzir também o preço do produto. Para obtermos um panorama total, o mínimo pode ser -1 e o máximo, 1. Isso significa que podemos reduzir 100% o preço do produto - embora, com certeza, não faremos isso - e aumentar em 100% também, ou seja, um panorama bastante amplo.

Além disso, vamos definir o "Incrementar" de 5% em 5%. Como estamos trabalhando com decimais, precisamos traduzir a porcentagem para número decimal, então, preencheremos o campo "Incrementar" como "0,05". Por fim, apertaremos "Criar".  
<img src="../_resources/c878115c90386179157d5421d7822373.png" alt="c878115c90386179157d5421d7822373.png" width="420" height="416" class="jop-noMdConv">

Na lateral direita da tela, agora é possível visualizar o parâmetro "Preço produto" criado, que automaticamente traz o visual de segmentação na área de *canvas*. Agora, vamos criar o segundo parâmetro.

Desta vez, o nome do parâmetro será "Quantidade", os demais campos serão preenchidos como o do primeiro parâmetro. Por fim, apertamos "Criar". Estão prontos os dois parâmetros.

Para realizarmos a análise, vamos criar uma tabela e incluir algumas colunas. Então, em "Visualizações", selecionaremos "Tabela" e adicionaremos os anos. Basta acessar a tabela de data, " Date", em "Tb_Calendario", e marcar "Ano".

Além disso, em "Medidas", marcaremos "Total Custo", "Total Lucro" e "Total Vendas":

| Ano | Total Custo | Total Lucro | Total Vendas |
| --- | --- | --- | --- |
| 2015 | 24.619.373 | 51.688.269,03 | 76.307.641,99 |
| 2016 | 25.143.512 | 51.715.184,29 | 77.858.696,54 |
| 2017 | 24.689.696 | 51.801.404,07 | 76.491.100,50 |
| 2018 | 5.732.548 | 12.071.824,08 | 17.804.372,53 |
| **Total** | **80.185.130** | **168.276.681,47** | **248.461.811,56** |

Essas três análises agora estão na tabela, porém, não existe uma fórmula que permita alterá-las. Então, vamos criar essa fórmula que nos permita trabalhar com os parâmetros.

Então, precisamos de uma medida que nos permita realizar uma soma. Como vamos somar iterando linha a linha, usaremos o **SUMX**. Apertaremos "Medidas" com o botão direito do mouse e selecionaremos "Nova medida". No campo de fórmulas, vamos nomeá-la como `Total vendas cenario`.

Como eu disse, utilizaremos o *SUMX* que somará linha a linha, iterando. Ele nos pede para informar, como primeiro parâmetro, com qual tabela vamos trabalhar. No caso, a `Tb_ItensNotas`.

```Javascript
Total vendas cenario =
SUMX(
    Tb_ItensNotas, 
```

O segundo parâmetro é a expressão. Já que estamos trabalhando com porcentagens, precisamos multiplicar cada campo/coluna. Começaremos trazendo a coluna `[Quantidade]`  da `Tb_ItensNotas`, sendo que os colchetes fazem referência à coluna. Prosseguindo, multiplicaremos por `1+[Quantidade valor]`:

```Javascript
Total vendas cenario =
    SUMX(
        Tb_ItensNotas,
        [Quantidade] * (1 + [Valor Quantidade])
    )
```

<span style="color: #c0c0c0;">Com isso, estamos multiplicando pelo percentual de acréscimo ou decrescimo da quantidade que já existe no banco de dados, apenas para simular esse cenário.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">E como é um número decimal, somamos por 1 mais 0,05, que resultará em um aumento de 5%. Continuando, multiplicaremos pelo preço, mas ele está na tabela de produto, por isso, usaremos a função</span> **RELATED**<span style="color: #c0c0c0;">, que busca a coluna em outra tabela com relacionamento.</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Então, usaremos</span> `RELATED()` <span style="color: #c0c0c0;">da tabela de produtos na coluna de preço e multiplicaremos por</span> `1+[Preço produto valor]`<span style="color: #c0c0c0;">, parâmetro que criamos. Como também estamos trabalhando com porcentagem, vale o mesmo pensamento que aplicamos anteriormente:</span></span></span>

```Javascript
Total vendas cenario = 
    SUMX(
        Tb_ItensNotas,
        [Quantidade] * (1 + [Valor Quantidade]) *
        RELATED(Tb_Produtos[Preço])*(1+ [Valor Preço Produto])
    )
```

Agora, adicionaremos "Total vendas cenario" à tabela. É possível notar que são as mesmas informações do "Total Vendas"

| Ano | Total Custo | Total Lucro | Total Vendas | Total vendas cenario |
| --- | --- | --- | --- | --- |
| 2015 | 24.619.373 | 51.688.269,03 | 76.307.641,99 | 76.307.641,99 |
| 2016 | 25.143.512 | 51.715.184,29 | 77.858.696,54 | 77.858.696,54 |
| 2017 | 24.689.696 | 51.801.404,07 | 76.491.100,50 | 76.491.100,50 |
| 2018 | 5.732.548 | 12.071.824,08 | 17.804.372,53 | 17.804.372,53 |
| **Total** | **80.185.130** | **168.276.681,47** | **248.461.811,56** | **248.461.811,56** |

Poderíamos fazer esse cenário para lucro e para custo.

Em seguida, realizaremos alguns ajustes nas segmentações que foram criadas, como o preço do produto. À esquerda da tela, temos um Campo de "Preço Produto" e outro de "Quantidade", ambos com uma barra de rolagem abaixo, que pode ser movida para reduzir ou aumentar preço e quantidade:

![4cdb7496e88b958157ca7aeee9db4003.png](../_resources/4cdb7496e88b958157ca7aeee9db4003.png)

Vamos reduzir o preço do produto em 5% e aumentar em 10% a demanda (quantidade).

| Ano | Total Custo | Total Lucro | Total Vendas | Total vendas cenario |
| --- | --- | --- | --- | --- |
| 2015 | 24.619.373 | 51.688.269,03 | 76.307.641,99 | 70.741.485,88 |
| 2016 | 25.143.512 | 51.715.184,29 | 77.858.696,54 | 81.362.337,89 |
| 2017 | 24.689.696 | 51.801.404,07 | 76.491.100,50 | 79.933.200,02 |
| 2018 | 5.732.548 | 12.071.824,08 | 17.804.372,53 | 18.606.569,29 |
| **Total** | **80.185.130** | **168.276.681,47** | **248.461.811,56** | **259.642.593,08** |

Reduzindo em 5% o preço dos produtos e aumentado a demanda em 10%, o total de vendas é ainda maior. Isso permite que os gestores analisem como funciona cada um dos preços e demandas, criando cenários de "e se".

&nbsp;

## MultiMedidas (!!)

Na empresa, é muito comum analisarmos as visualizações com base em determinada métrica ou dimensão, por exemplo, o **total de vendas e total de custo**.

Pensando nos possíveis cenários, precisaríamos de ao menos três páginas de trabalho. Por exemplo, uma página para trabalhar com todas as visualizações, baseadas no total de vendas, logo, concentraríamos todos os visuais em uma única página. Na segunda página, construiríamos as mesas visualizações, mas com o total de custo. ?

O problema é que o relatório fica um pouco longo e usaríamos os mesmos visuais, mudando apenas o contexto das dimensões. Será que é possível simplificar/otimizar nosso espaço?

Podemos utilizar a parametrização das medidas. Então, acessaremos a guia de "Modelagem", que está na parte superior da ferramenta, e selecionaremos "Novo parâmetro". Em seguida, ao invés de "intervalo numérico", escolheremos "Campos".

<img src="../_resources/49d41bff6bf9943f9a9c2e54fdc8d2f8.png" alt="49d41bff6bf9943f9a9c2e54fdc8d2f8.png" width="466" height="377" class="jop-noMdConv">

Na próxima tela, adicionaremos os parâmetros que desejamos. Nossos parâmetros serão as nossas medidas, cenários que podemos explorar, como "Total vendas", "Total lucro" e "Total custo".

Preencheremos o campo de "Nome" com "Parâmetro Medidas". Na área de "Campos", vamos expandir a tabela de "Medidas" e inserir o "Total Custo", "Total Lucro" e "Total Vendas" (basta marcar o checkbox de cada um deles).

Ao lado esquerdo da janela, em "Adicionar e reordenar campos", é possível visualizar quais medidas foram selecionadas ("Total Custo", "Total Lucro" e "Total Vendas").

<img src="../_resources/8d1fcd0da34de38e7c7b7f4d8931b793.png" alt="8d1fcd0da34de38e7c7b7f4d8931b793.png" width="427" height="323" class="jop-noMdConv">

Abaixo desse campo, há um checkbox que nos permite "Adicionar segmentação a esta página". Ou seja, ele cria o parâmetro e traz um visual em que podemos filtrar. No canto inferior direito, apertaremos o botão "Criar".

<span style="color: #c0c0c0;">Apareceu na tela a segmentação "Parâmetro Medidas", com "Total Custo", "Total Lucro" e "Total Vendas". Podemos criar um visual para entendermos se a segmentação está funcionando ou não.  
![1d1b257eb1d29d7f4f6f5adb6fe7d410.png](../_resources/1d1b257eb1d29d7f4f6f5adb6fe7d410.png)</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Então, vamos criar um gráfico de barras com o "Nome do produto" e o "Total Vendas". Com isso, visualizaremos um pouco desse cenário pela dimensão do produto.</span></span>

Se marcarmos nossa segmentação no parâmetro de medidas, ele vai filtrar o nosso visual? Vamos testar marcando "Total Lucro", por exemplo:  
<img src="../_resources/c332fd188b0d6176239285212692fcf7.png" alt="c332fd188b0d6176239285212692fcf7.png" width="722" height="224" class="jop-noMdConv">

<span style="color: #c0c0c0;">O filtro não foi aplicado, portanto, não está funcionando. O motivo é que quando criamos o visual, no eixo x, trouxemos a medida "Total Vendas", mas, na verdade, para que esse parâmetro fique dinâmico, \*\*precisamos substituir o "Total Vendas" pelo parâmetro de medidas que criamos:  
<img src="../_resources/3d363f46027c92c552d17ebcdb76d071.png" alt="3d363f46027c92c552d17ebcdb76d071.png" width="218" height="176" class="jop-noMdConv">  
\*\*</span>

<span style="color: #c0c0c0;">E agora sim, nosso filtro funciona:</span>

<span style="color: #c0c0c0;"><img src="../_resources/5c2baa8596052fff402286776b9032fc.png" alt="5c2baa8596052fff402286776b9032fc.png" width="760" height="296" class="jop-noMdConv"></span>

<span style="color: #c0c0c0;">E isso funciona pois, cada segmentação traz com ela a formula DAX de `Total Lucro`, `Total Custo` ou `Total Vendas`! E com isso, temos um gráfico dinâmico, que pode trazer tanto informações de custos, lucro ou vendas dos produtos! <span style="color: #c0c0c0;">Significa que podemos criar apenas um visual para cada análise que desejamos fazer, trazendo uma única página e filtrando pelo "Parâmetro Medidas".</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Isso otimiza muito o relatório, evitando visuais repetidos e permitindo trazermos as mesas análises baseadas em uma dimensão específica. <span style="color: #c0c0c0;">Aprendemos bastante sobre a utilização dos parâmetros, agora nos aprofundaremos na análise aplicada ao negócio.</span></span></span></span>

* * *

&nbsp;

# Segmentações (Adentrando em DAX para negócios)

## Análise ABC (teoria)

<span style="color: #c0c0c0;">Uma das necessidades dos gestores é identificar, de forma categorizada, quais produtos são mais relevantes em relação ao lucro da empresa. Segundo o ano ou outras segmentações. Para esse tipo de solução, optamos por uma análise amplamente utilizada pelo mercado, a</span> **análise ABC**<span style="color: #c0c0c0;">.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">A</span> **análise ABC** <span style="color: #c0c0c0;">nos permite categorizar de grupos. No nosso contexto, ela servirá para categorizar os produtos que trazem mais lucro para a empresa e isso ajudará os gestores a tomarem decisões estratégicas em relação aos produtos que vendem menos e investindo nos que vendem mais. Mas, o que é a análise ABC?</span></span>

> A **Análise ABC** deriva da **Análise de Pareto (Análise 80/20)**. Segundo a Análise de Pareto, 80% dos valores de um indicador vem de apenas 20% dos geradores desse indicador.
> 
> <img src="../_resources/f75b3364515d74c0b26bbf6c710e8b17.png" alt="f75b3364515d74c0b26bbf6c710e8b17.png" width="411" height="250" class="jop-noMdConv">
> 
> Ou seja, a maioria das consequências que temos vem de 20% das causas. Embora tenha outras aplicações no mundo, foi apropriada pelo cenário de Business Intelligence que tem crescido bastante. Vamos acompanhar um exemplo.

**<span style="color: #c0c0c0;">Se 80% do faturamento vem de 20% dos clientes, então, consideramos que o negócio é saudável.</span>**

<span style="color: #c0c0c0;"><img src="../_resources/be16e6d3f26e808a3ff8d0eb2f19fae2.png" alt="be16e6d3f26e808a3ff8d0eb2f19fae2.png" width="280" height="185" class="jop-noMdConv"></span>

**Vamos acompanhar outro exemplo. Se 80% do faturamento vem de 5% dos clientes, significa que temos um problema: o negócio não está operando de forma saudável, isso porque pouquíssimos clientes representam grande porcentagem do faturamento.**

Neste caso, perder um dos clientes gerará um grande impacto no faturamento. É sempre interessante conhecermos os números e traçarmos estratégias para alcançarmos a proporção de análise de Pareto (80/20).

A **Análise ABC** explora todos os princípios de Pareto e conta com uma categoria a mais, de classificação dos produtos. No nosso caso, temos:

- **Categoria A:** Produtos com maior faturamento
    
- **Categoria B:** Produtos com faturamento médio
    
- **Categoria C:** Produtos com baixo faturamento
    

A Análise ABC permite à empresa identificar e priorizar seus itens de acordo com sua importância, ou seja, seu impacto na empresa e sua utilização de recursos. A categoria A é composta pelos itens mais críticos e de maior impacto na empresa. Eles normalmente representam apenas uma pequena porcentagem do total de itens, porém são responsáveis por uma grande quantidade de custos e recursos.

Com isso, conseguimos trazer algumas formas de visualização, possibilitando que os gestores realizem análises. <span style="color: #c0c0c0;">Agora, vamos entender como trazer a Análise ABC para o nosso projeto, utilizando DAX, e a construir análises enriquecedoras.</span>

## <span style="color: #c0c0c0;"><span style="color: #ffffff;">Segmentação ABC (prática)</span></span>

<span style="color: #c0c0c0;"><span style="color: #ffffff;"><span style="color: #c0c0c0;">Agora vamos colocar a Análise ABC em prática. Para isso, criaremos uma tabela e avaliaremos o comportamento da fórmula utilizando a linguagem DAX.</span></span></span>

Então, começaremos criando um visual de tabela e, nele, vamos inserir o "Nome do Produto" ("Tb_Produtos > Nome do produto"). Também adicionaremos uma nova coluna, "Total Lucro" ("Medidas > Total Lucro"). Agora, temos as duas colunas e iniciaremos o processo de estruturação.

<img src="../_resources/66713533bed540e67885db181789b1bb.png" alt="66713533bed540e67885db181789b1bb.png" width="319" height="316" class="jop-noMdConv">

O primeiro passo da estruturação é fazer um **ranking do lucro**, assim, calcularemos o acumulado, tendo como base esse ranking. Vamos selecionar a tabela de "Medidas" com o botão direito do mouse e adicionar uma "Nova Medida".

O nome da medida será `Rank Lucro` e terá a medida `Rankx()`. <span style="color: #c0c0c0;">O primeiro parâmetro de</span> `Rankx()` <span style="color: #c0c0c0;">é a tabela que desejamos avaliar: tabela de produtos. Colocaremos um</span> `ALLSELECTED(` <span style="color: #c0c0c0;">para mantermos os filtros quando forem utilizados e passaremos a</span> `Tb_Produtos`<span style="color: #c0c0c0;">. <span style="color: #c0c0c0;">Como segundo parâmetro, passaremos a expressão, informando qual análise desejamos fazer no ranking: o lucro total. Sendo assim, aproveitaremos a medida</span> `[Total Lucro]`<span style="color: #c0c0c0;">. Por fim, ajustaremos a identação, fecharemos os parênteses e apertaremos "Enter".</span></span>

```Javascript
Rank Lucro = RANKX(
    ALLSELECTED(
        Tb_Produtos
    ), 
        [Total Lucro]
 )
```

A nossa medida está pronta. Vamos adicionar o "Rank Lucro" para verificarmos se está tudo correto na nossa tabela. Ela é formada por três colunas. As duas primeiras são "Nome do produto" e "Total Lucro". Na terceira, "Rank Lucro", há um ícone de seta, que quando apertado, inverte o sentido da tabela. Vamos apertá-lo.

Com isso, visualizaremos o produto de maior lucro: Power BI tunning. Aparentemente, está tudo correto para realizarmos o cálculo do acumulado.

<img src="../_resources/538f4ec6f5279af3799721d56fe7cbb0.png" alt="538f4ec6f5279af3799721d56fe7cbb0.png" width="511" height="397" class="jop-noMdConv">

Foi inteligente criarmos esse ranking que servirá como **base** para o nosso acumulado. É importante gerarmos uma medida para sabermos os valores acumulados, porque a nossa categorização ABC se apoiará nessas vendas acumuladas. (acumulado no sentido de, na primeira linha vai trazer só o primeiro valor, quando for pra segunda linha vai trazer os 2 primeiros valores na terceira linha vai somar os 3 valores acima, e assim por diante).

Vamos nomeá-la como `Acumulado`. Para trazermos esse acumulado, usaremos a função `CALCULATE()`, já que trabalharemos em um contexto de filtro que otimizará o rankeamento. Então, usaremos o `CALCULATE` na nossa medida total lucro, isto é, nosso cálculo está em função dessa medida.

<span style="color: #c0c0c0;">O próximo passo é trabalhar com os filtros. Na filtragem, usaremos a função</span> `TOPN(` <span style="color: #c0c0c0;">que nos retornará uma tabela virtual. No primeiro parâmetro, chamaremos a medida que acabamos de criar, o</span> `[Rank Lucro]`<span style="color: #c0c0c0;">, porque a tabela se tornará dinâmica.</span>

Ou seja, na primeira linha, visualizaremos apenas o primeiro valor, na segunda, os dois valores acima, na terceira, os três valores acima e assim por diante. Desta maneira, o acumulado é apresentado de forma inteligente.

Em seguida, vamos trazer a expressão `ALLSELECTED()` para mantermos os filtros da nossa tabela de produtos.

```Javascript
Acumulado = 
CALCULATE(
   [Total Lucro],
     TOPN(
         [Rank Lucro],
             ALLSELECTED(Tb_Produtos),
             [Total Lucro],
             DESC
        )
)
```

<span style="color: #c0c0c0;">Então, vamos adicionar a medida "Acumulado". Agora, nossa tabela é composta por 4 colunas: "Nome do produto", "Total Lucro", "Rank Lucro" e "Acumulado".</span>

**O primeiro produto, na primeira linha da coluna "Total Lucro", tem 12 milhões de lucro e o mesmo resultado aparece na primeira linha da coluna "Acumulado". Já na segunda linha da coluna "Acumulado", aparece a soma dos dois primeiros valores dos dois primeiros.**

| Total Lucro | Rank Lucro | Acumulado |
| --- | --- | --- |
| 12.878.854,38 | 1   | 12.878.854,38 |
| 12.181.539,86 | 2   | 25.060.394,24 |
| ... | ... | ... |

<span style="color: #c0c0c0;">Para trabalharmos com mais eficiência na nossa categorização da curva ABC, podemos derivar e trazer esse acumulado em forma de percentual, taxa, assim, a categoria ABC poderá se basear nessa taxa. Para criarmos a taxa, vamos gerar uma nova medida também e a chamaremos de "porcentagem do acumulado", isto é,</span> `% Acumulado`<span style="color: #c0c0c0;">.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Nós faremos uma divisão, ou seja, dividir a coluna "Acumulado" pelo "total lucro". Para realizar essa divisão, é sempre inteligente trabalharmos com a função</span> `DIVIDE()`<span style="color: #c0c0c0;">, pois ela vai tratar o denominador.</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Na função</span> `DIVIDE(` <span style="color: #c0c0c0;">vamos trazer como numerador a própria medida</span> `[Acumulado]`<span style="color: #c0c0c0;">, e no denominador, faremos:</span> `SUMX()`<span style="color: #c0c0c0;">, para somarmos linha a linha e</span> `ALLSELECTED()` <span style="color: #c0c0c0;">da tabela de produtos,</span> `Tb_Produtos`<span style="color: #c0c0c0;">, coluna</span> `[Total Lucro]`<span style="color: #c0c0c0;">. Por fim, fecharemos os parênteses e daremos "Enter".</span></span></span>

```Javascript
% Acumulado = 
DIVIDE(
    [Acumulado],
        SUMX(
            ALLSELECTED(Tb_Produtos),
                [Total Lucro]
        )
)
```

> Não poderíamos fazer simplesmente um "`% Acumulado = DIVIDE([Acumulado], [total lucro], 0)`"?
> 
> Não! Não poderíamos devido à forma como o Power BI lida com o contexto de filtro e a agregação de dados. Na fórmula acima:
> 
> - `[total lucro]`: Este é o lucro total de uma única linha no contexto atual.
> - `[Acumulado]`: Este é o valor acumulado do lucro até a linha atual.
> 
> Neste caso, a divisão é feita linha por linha, utilizando o lucro total da linha atual e o valor acumulado até a linha atual. Isso pode levar a resultados incorretos, especialmente quando você tenta fazer a segmentação ABC, pois o cálculo não considera o contexto completo dos dados.
> 
> Já na que usamos:
> 
> - `[Acumulado]`: Este é o valor acumulado do lucro até a linha atual, considerando o contexto de filtro atual.
> - `SUMX(ALLSELECTED(Tb_Produtos), [Total Lucro])`: Esta parte da fórmula calcula o total do lucro para todos os produtos selecionados, ignorando o contexto de filtro atual.
> 
> Nesta fórmula, o cálculo da porcentagem acumulada é feito em relação ao total de lucros de todos os produtos selecionados, o que proporciona uma base de comparação mais precisa para a segmentação ABC. A função `ALLSELECTED` remove os filtros atuais, permitindo que o `SUMX` calcule o lucro total de todos os produtos dentro do contexto selecionado.
> 
> Com a primeira fórmula, o rank 1 ficou com 100%, já na segunda ele fica com apenas 7%. Porque?
> 
> - **Contexto de Filtro**: Na primeira fórmula, o contexto de filtro pode limitar a comparação apenas ao lucro da linha atual versus o acumulado até a linha atual. Isso não proporciona uma visão completa para o cálculo da porcentagem acumulada.
>     
> - **Agregação Correta**: Na segunda fórmula, o uso de `SUMX` junto com `ALLSELECTED` garante que a porcentagem acumulada seja calculada em relação ao total de lucros de todos os produtos, não apenas ao lucro acumulado na linha atual.
>     
> - **Precisão nos Rankings**: Para a segmentação ABC, é crucial ter uma base de comparação correta. A segunda fórmula assegura que cada produto é comparado com o total acumulado de todos os produtos, resultando em rankings precisos. Na primeira fórmula, a falta dessa comparação abrangente pode resultar em porcentagens incorretas, como um produto de rank 1 aparecendo com 100% quando deveria ter uma porcentagem menor.
>     
> 
> A segunda fórmula é necessária porque usa `ALLSELECTED` e `SUMX` para calcular a porcentagem acumulada considerando todos os produtos selecionados, garantindo a precisão dos rankings para a segmentação ABC.

<span style="color: #c0c0c0;">Vamos trazer para a tabela e conferir se a taxa de divisão do "Acumulado" pelo "Total Lucro" está funcionando.</span>

<span style="color: #c0c0c0;"><img src="../_resources/1a02443bb67fa1e34cfed2bb5cee70f0.png" alt="1a02443bb67fa1e34cfed2bb5cee70f0.png" width="623" height="462" class="jop-noMdConv"></span>

<span style="color: #c0c0c0;">Note como a porcentagem cresce de acordo com o aumento do lucro acumulado e do ranking.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Já podemos fazer a classificação entre produto A, B ou C. No nosso caso, vamos classificar em produtos de 60% e 80%. Então, criaremos uma nova medida que vai gerar essa análise. O nome da nova medida será</span> `Analise ABC`<span style="color: #c0c0c0;">. Utilizaremos a função</span> `SWITCH()`<span style="color: #c0c0c0;">.</span></span>

O primeiro parâmetro da função `SWITCH()` é a expressão `TRUE()`, que serve para conferirmos se os resultados são verdadeiros. No segundo parâmetro, vamos verificar se o percentual de "Acumulado" é menor ou igual a 6%, para classificarmos o produto como A.

Vamos passar `[% Acumulado]` seguido do sinal de menor igual a 0.6 `<= 0.6`. Depois, passaremos vírgula e se o resultado for positivo, isto é, se o valor for menor ou igual a 0.6, então, pertence ao `"Produto A"`.

```Javascript
Analise ABC = 
SWITCH(
    TRUE(),
        [% Acumulado] <= 0.6, "Produto A"
```

<span style="color: #c0c0c0;">Adicionaremos outra vírgula para acessarmos o próximo resultado. Analisaremos o</span> `[% Acumulado]` <span style="color: #c0c0c0;">se menor ou igual a 0.8, isto é,</span> `<= 0.8, "Produto B"`<span style="color: #c0c0c0;">.</span>

```Javascript
Analise ABC = 
SWITCH(
    TRUE(),
        [% Acumulado] <= 0.6, "Produto A",
        [% Acumulado] <= 0.8, "Produto B",
```

<span style="color: #c0c0c0;">Se não for nenhum desses casos, será</span> `"Produto C"`<span style="color: #c0c0c0;">. Finalizaremos fechando os parênteses e pressionando "Enter".</span>

```Javascript
Analise ABC = 
SWITCH(
    TRUE(),
        [% Acumulado] <= 0.6, "Produto A",
        [% Acumulado] <= 0.8, "Produto B",
        "Produto C"
)
```

Algumas pessoas podem ficar com a impressão de que o funcionamento deveria ser o oposto: quanto maior a porcentagem, maior a categoria.

No entanto, como estamos trabalhando com o "Acumulado", a lógica é invertida: quando o produto está no topo, terá uma porcentagem menor (como vimos anteriormente quando apenas dividimos as medidas), já que não acumulamos os que estão embaixo e quando está mais abaixo na tabela, terá uma porcentagem maior. Basta observarmos as colunas da tabela que criamos. (também pois estamos em ordem decrescente, o primeiro não acumula pois não tem anterior).

<span style="color: #c0c0c0;">Para verificarmos, vamos adicionar a "Analise ABC" à tabela. Agora temos a coluna "Analise ABC". Os produtos com porcentagem acumulada de até 60% estão classificados como "Produto A". Logo após, vem B e C. Significa que a classificação está correta.</span>

<span style="color: #c0c0c0;"><img src="../_resources/32eaf198a01b8cd9d284698adaa2d477.png" alt="32eaf198a01b8cd9d284698adaa2d477.png" width="645" height="433" class="jop-noMdConv"></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Está funcionando na tabela, mas o que acha de trazer uma visualização para utilizarmos a análise ABC de forma mais efetiva no nosso dashboard?</span></span>

## <span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #ffffff;">Gerando a análise ABC (graficando)</span></span></span>

Nossa análise ABC está pronta e funcionando, como pudemos verificar na tabela. Agora, a ideia é trazer um visual para implementá-la no dashboard, gerando mais insights e proveitos para os gestores.

Um bom visual, seria o **gráfico de colunas agrupadas e linha**. É o quinto visual da segunda linha do campo de "Visualizações". Vamos trazer esse visual e adicionar os dados que desejamos visualizar.

No eixo x, adicionaremos o "Nome do produto" e no eixo y, o "Total Lucro". Os produtos já apareceram no gráfico. A ideia é visualizarmos a diferença entre categorias no visual, pois dividimos os produtos entre os limites de 60% e 80%.

Para obtermos uma boa visualização, podemos criar uma medida com uma reta constante. Para isso, apertaremos a tabela de "Medida" com o botão direito, selecionaremos "Nova medida" e chamaremos essa medida de `60%`. Seu valor, será uma constante, ou seja, 0.6.

<span style="color: #c0c0c0;">Quando trazemos essa medida para o eixo y da linha (considerando que temos os eixos x e y da coluna e os da linha) aparece uma reta constante no gráfico. Podemos aplicar o mesmo raciocínio aos 80%. <span style="color: #c0c0c0;">Vamos criar a medida dos 80% da mesma maneira, renomeando-a para</span> `80%` <span style="color: #c0c0c0;">e passando, como resultado,</span> `0.8`<span style="color: #c0c0c0;">.</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><img src="../_resources/5a163b92e34cd6f13d636a3fcd548b03.png" alt="5a163b92e34cd6f13d636a3fcd548b03.png" width="769" height="227" class="jop-noMdConv"></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Adicionaremos essa medida (80%) ao visual, mas no eixo y da linha:</span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><img src="../_resources/b190ecf04294b93ad228a7fd0eff2f66.png" alt="b190ecf04294b93ad228a7fd0eff2f66.png" width="771" height="227" class="jop-noMdConv"></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Ele trouxe a linha 0.8, mas a 0.6 foi para baixo. Por que isso aconteceu?</span></span></span></span>

O próprio gráfico possui um ajuste dinâmico dos percentuais, mas, se inserirmos outra linha que desejamos analisar, justamente o "% Acumulado", ele se reorganizará trazendo um resultado mais coerente.

Então, vamos arrastar o "% Acumulado" até o eixo y da linha e ele se ajustou.

<img src="../_resources/406e80bf0300757e54213fc5f98925a6.png" alt="406e80bf0300757e54213fc5f98925a6.png" width="793" height="246" class="jop-noMdConv">

<span style="color: #c0c0c0;">Está funcionando bem. Estamos conseguindo visualizar onde estão os 60% e os 80%, além da curva do "acumulado", mostrando uma crescente. Uma possibilidade é trazer, em "Dicas de ferramentas", a categorização da nossa análise ABC, pois quando passarmos a seta do mouse no gráfico, aparecerá se a categoria é A, B ou C. E <span style="color: #c0c0c0;">automaticamente, quando passamos o mouse em cima das barras, o nome do produto é apresentado e sua "Analise ABC", indicando a qual grupo pertence.</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><img src="../_resources/fc82e9b633db34ad9ad8e711fc77da70.png" alt="fc82e9b633db34ad9ad8e711fc77da70.png" width="791" height="253" class="jop-noMdConv"></span></span>

Porém, visualmente, ele ainda não está trazendo um resultado interessante. O ideal seria uma separação por cores entre os produtos A, B e C. Para isso, vamos acessar a seção "Formatar seu visual" e em "Colunas > Cores" criaremos uma regra, isto é, uma formatação condicional.

Na outra janela "Cor padrão - Colunas", realizaremos estes ajustes. O melhor seria formatar a partir do percentual acumulado, regra que fizemos a partir da Análise ABC.

No campo "Estilo do formato", escolheremos a opção "Regras". No campo "Em que campo devemos basear isso?" acessaremos "Medidas > % Acumulado". Agora podemos estruturar essas regras.

Se o valor estiver indo de zero até 0.6, terá cor azul-escuro. Essa seria a categoria A. Em seguida, adicionaremos mais uma regra (basta apertar o botão "+ Nova regra"). A segunda regra é: se zero for maior igual a 0.6 e até 0.8, terá cor azul.

Para finalizar, adicionaremos outra nova regra, que vai de 0.8 até 1, ou seja, 100%. Um detalhe importante é que, ao lado dos valores, temos um campo perguntando se eles são porcentagens ou números.

|     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Se o valor | \>= | 0   | Porcentagem | <   | 0.6 | Número | então | azul-escuro |
| Se o valor | \>= | 0.6 | Porcentagem | <   | 0.8 | Número | então | azul |
| Se o valor | \>= | 0.8 | Porcentagem | <   | 1   | Número | então | \-  |

Nós manteremos a porcentagem para o zero e para a última regra, que vamos trazer não como 1, mas como 100. Os demais, nós deixaremos como número.

|     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Se o valor | \>= | 0   | Porcentagem | <   | 0.6 | Número | então | azul-escuro |
| Se o valor | \>= | 0.6 | Número | <   | 0.8 | Número | então | azul |
| Se o valor | \>= | 0.8 | Número | <   | 1   | Porcentagem | então | \-  |

Além disso, escolheremos um tom de azul-claro para a categoria final, C.

|     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Se o valor | \>= | 0   | Porcentagem | <   | 0.6 | Número | então | azul-escuro |
| Se o valor | \>= | 0.6 | Número | <   | 0.8 | Número | então | azul |
| Se o valor | \>= | 0.8 | Número | <   | 1   | Porcentagem | então | azul-claro |

Agora, basta apertar "Ok" no canto direito inferior da janela e o visual apresentará uma divisão por cores que nos permite saber que as barras em azul-escuro correspondem, por exemplo, aos produtos da categoria A. Passando o mouse em cima, é possível comprovar essa informação.

<img src="../_resources/380fcb9b770d501c4b2dd19ae56af825.png" alt="380fcb9b770d501c4b2dd19ae56af825.png" width="830" height="275" class="jop-noMdConv">

As barras da categoria A estão diretamente influenciadas pela curva do "% Acumulado". Com isso, conseguimos avaliar corretamente todos os produtos pela análise ABC.

Os gestores já podem analisar os produtos que são mais importantes. Com o ranqueamento pronto, surgiu uma nova demanda: visualizar intervalos de forma agrupada, por exemplo, os 5 melhores produtos. Além disso, os gestores querem visualizar métricas a partir desses intervalos.

## <span style="color: #ffffff;">Segmentando pelo lucro de forma estática</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Já fizemos a Análise ABC e geramos um visual de apoio para os gestores, mas, eles identificaram uma nova necessidade: avaliar o ranqueamento de produtos em relação ao lucro de forma agrupada, assim conseguiriam ter insights em âmbito macro. Será que existe uma solução para isso?</span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Existe e mais de uma!</span></span> Podemos agrupar os valores de formas diferentes, porém, considerando o nosso projeto, a melhor opção é criar "TopN", por exemplo, Top 5 produtos mais vendidos ou Top 10 produtos mais vendidos e assim por diante.

Para seguirmos com isso, o caminho mais concreto é criar uma nova tabela com algumas colunas que nos ajudarão a categorizar os "TopN" que criaremos, com mínimo e máximo.

Até poderíamos utilizar o *switch* para atendermos essas necessidades, mas dificultaria um pouco os ajustes no projeto posteriormente. Na página inicial, vamos acessar "Inserir Dados".

Na próxima tela, copiaremos uma estrutura em que a primeira coluna é "TopN" e será composta por categorias dos primeiros produtos: na primeira linha, "Top 5"; na segunda linha, "Top 6 - 10"; na terceira linha, "Top 11 - 20"; e na quarta linha, os "Demais".

Na segunda coluna, teremos o "Min" ou mínimo do intervalo. E na terceira coluna, o "Max" ou máximo de cada um dos intervalos, de acordo com cada linha. Por exemplo, na primeira linha, "Top 5", o mínimo é o primeiro produto e o quinto é o máximo.

|     | TopN | Min | Max |
| --- | --- | --- | --- |
| 1   | Top 5 | 1   | 5   |
| 2   | Top 6 - 10 | 6   | 10  |
| 3   | Top 11 - 20 | 11  | 20  |
| 4   | Demais | 21  | 9999 |
| +   |     |     |     |

Vamos renomear a tabela no campo "Nome" como "TopN produtos" e apertar o botão "Carregar" no canto direito inferior da tela. <span style="color: #c0c0c0;">Ela é composta pelas colunas numéricas, "Max" e "Min", e pela coluna TopN. Agora, podemos trazer um visual de matriz e analisar os resultados com os produtos.</span>

Então, selecionaremos o visual de "Matriz", disponível na aba de "Visualizações". Em seguida, vamos inserir o "TopN" nas linhas e o nome dos produtos. Para isso, acessaremos a tabela de produtos, "Tb_Produtos", e arrastaremos "Nome do produto" para as "Linhas" também.

Nas "Medidas", vamos inserir o "Total Lucro" para avaliarmos os resultados em "Valores".

<img src="../_resources/12fb988f967b4178b1f8aa77bf6ad15c.png" alt="12fb988f967b4178b1f8aa77bf6ad15c.png" width="239" height="173" class="jop-noMdConv">

<span style="color: #c0c0c0;">Podemos fazer uma experiência na matriz: expandir, por exemplo, a "Top 5" e conferir quais produtos ela está trazendo. Aconteceu algo interessante, ele está trazendo todos os produtos da nossa lista. Por que será que isso aconteceu?</span>

<span style="color: #c0c0c0;"><img src="../_resources/1f5458e73cd67c7ce58057420317a4e5.png" alt="1f5458e73cd67c7ce58057420317a4e5.png" width="327" height="380" class="jop-noMdConv"></span>

Não só isso. No "Total Lucro", temos o "Demais" e o "Top 11 - 20" apresentando sempre o mesmo resultado final. Isso acontece pelo mesmo problema que é o **relacionamento**. Não há um relacionamento entre a tabela "TopN produtos", que acabamos de criar, e o nosso "Total Lucro".

**Precisamos criar um relacionamento entre elas, de forma virtual, com uma medida.**

Com a medida e usando a forma DAX, conseguimos trazer esse relacionamento virtual. Então, vamos criar a medida e nomeá-la como `TopN lucro`. Para gerarmos o relacionamento virtual, o primeiro passo é trabalhar com as variáveis.

Vamos chamar a variável `VAR`, estabelecendo um limite mínimo e máximo, que são justamente os limites que criamos na nossa tabela de "TopN". Começando pelo limite mínimo, passaremos `VAR limiteMin` que trará o menor valor da coluna "Min" da tabela "TopN produtos". <span style="color: #c0c0c0;">Continuando, agora criaremos a variável de valor, chamando a coluna de</span> `Max` <span style="color: #c0c0c0;">da tabela</span> `TopN produtos`<span style="color: #c0c0c0;">.</span>

Desta forma, guardamos o mínimo e o máximo nas variáveis e podemos utilizá-las no nosso cálculo. Então, passaremos um `RETURN`(sempre que trabalhamos com variáveis, passamos *return*) e, depois, chamaremos a função `CALCULATE()`.

Como primeira expressão da `CALCULATE`, chamaremos a medida `[Total Lucro]`. Para filtrar, chamaremos a função `FILTER()`, que nos permite trabalhar com parâmetros diferentes. Vamos filtrar a tabela de produtos, `Tb_Produtos`.

Agora, construiremos efetivamente a expressão para filtrar. Começaremos chamando o `[Rank Lucro]`, medida que já criamos. O `[Rank Lucro]` vai variar entre o mínimo e o máximo. Como nós guardamos o mínimo e o máximo nas variáveis, podemos chamá-las agora.

Então, o `[Rank Lucro]` será maior ou igual ao `limiteMin`. Ou seja, vai partir desse limite. E, a medida `[Rank Lucro]` será menor ou igual ao `limiteMax`. Assim, o filtro está oscilando entre o mínimo e o máximo.

```Javascript
TopN lucro = 
VAR limiteMin = MIN('Top produtos'[Min])
VAR limiteMax = MAX('Top produtos'[Max])

RETURN

CALCULATE(
     [Total Lucro],
         FILTER(
             Tb_Produtos,
                 [Rank Lucro] >= limiteMin &&
                 [Rank Lucro] <= limiteMax

                 )
)
```

Essa medida é interessante, porque com ela podemos pegar o valor específico do contexto em que as variáveis estão sendo aplicadas. Automaticamente, pegamos a tabela "TopN" na medida e vinculamos com a tabela de produtos. Com esse relacionamento estabelecido, conseguiremos identificar o "Total Lucro".

Vamos verificar isso agora, apertando "Enter", e substituindo a medida "Total Lucro" para a "TopN Lucro". Para isso, removeremos "Total Lucro" dos "Valores" e adicionaremos o "TopN Lucro".

Já é possível notar que o total desse "TopN" está funcionando corretamente. Porém, a lista inteira de produtos ainda aparece. Precisaremos fazer um ajuste na medida "Rank Lucro". Vamos selecioná-la.

Dentro da medida "Rank Lucro", ao invés de `ALLSELECTED()`, usaremos apenas `ALL()`. Com isso, obteremos o resultado esperado.

```Javascript
Rank Lucro = 
    RANKX(
            ALL(Tb_Produtos),
                [Total Lucro]
        )
```

<img src="../_resources/3cb6daec7a04b15f47d30ebc3f7d3c70.png" alt="3cb6daec7a04b15f47d30ebc3f7d3c70.png" width="344" height="351" class="jop-noMdConv">

Feito isso, quando visualizamos a nossa matriz, percebemos que ela apresenta os 5 produtos em "Top 5". Podemos verificar da seguinte maneira: vamos inserir uma segmentação de dados com o "Ano" e uma tabela com o "Nome do Produto" e seu "Rank Lucro".

Conseguimos verificar na matriz que, no Top 5, temos: A bruxaria da linguagem M; BI na veia; Conhecendo as linguagens do Power BI Desktop; Performance com M; e Power BI tunning. São justamente os 5 primeiros produtos do "Rank Lucro".

| Nome do produto | Rank Lucro |
| --- | --- |
| Power BI tunning | 1   |
| Conhecendo as linguagens do Power BI Desktop | 2   |
| Performance com M | 3   |
| BI na veia | 4   |
| A bruxaria da linguagem M | 5   |

Um ponto interessante, é que quando tiramos o `ALLSELECTED()` e deixamos apenas `ALL()`, percebemos o trabalho do Power BI com a priorização dos filtros. Deixamos a nossa outra função DAX filtrar e funcionou.

<span style="color: #c0c0c0;">Agora, poderíamos explorar visuais tão interessantes quanto para apresentar essas análises que desenvolvemos.</span>

## <span style="color: #c0c0c0;"><span style="color: #ffffff;">Tornando a segmentação dinâmica</span></span>

Conseguimos trazer a análise da forma que desejamos e o próximo passo é criar alguns visuais, além da matriz, que está bem completa. Com isso, os gestores conseguirão entender e consumir a análise, gerando insights interessantes.

Uma opção de visual seria o **gráfico treemap** ou **mapa de árvore** e também o **gráfico de dispersão**.

<span style="color: #c0c0c0;">Criaremos o visual de</span> **treemap**<span style="color: #c0c0c0;">. Para isso, selecionaremos "Treemap" em "Visualizações" e exploraremos o "TopN" com o "TopN Lucro".</span>

Um visual foi gerado, o que nos permite ter uma noção do quanto cada um dos "Top" representam no todo.

![Mapa de árvore ou "Treemap" intitulado "TopN Lucro por TopN". Retângulo dividido em quatro áreas de tamanhos e cores distintas. A área laranja, "Top 5" ocupa a porção superior esquerda da figura e é uma das maiores áreas. A área lilás, "Top 6 - 10", ocupa a porção superior direita da figura e também é uma das maiores áreas. A área azul-escuro, "Top 11 - 20", ocupa a porção inferior esquerda da figura e tem tamanho intermediário. A área azul-clara, "Demais", é ocupa a porção inferior direita da figura e é a menor área.](../_resources/5163d9ce-8b5b-4861-9681-24145e0c.png)

Podemos notar que o "Top 5" ocupa uma boa área. Significa que os 5 produtos que mais vendem tem uma boa representatividade no faturamento da empresa. Para aprofundarmos um pouco essa análise, podemos analisar o **gráfico de dispersão**.

Vamos adicionar o gráfico de dispersão abaixo do *treemap*. No eixo x, colocaremos "Nome do produto". No eixo y, colocaremos o "TopN lucro".

Com isso, um gráfico de dispersão será gerado, apresentando cada um dos produtos com seus respectivos valores marcados por pontos azuis. Vamos adicionar uma legenda a fim de trazer qualidade visual ao nosso gráfico.

Então, vamos adicionar o "TopN" na "Legenda".

Usando a legenda, uma diferenciação de cores foi criada que nos permite compreender melhor o agrupamento.

![Gráfico de dispersão intitulado "TopN lucro por TopN e Nome do produto". Abaixo do título, há uma legenda indicando que os pontos de cor azul-clara representam os "Demais" produtos, os de cor azul-escura, representam "Top 11 - 20", os de cor laranja, representam os "Top 5" e os de cor lilás, representam os "Top 6 - 10". O eixo x, "Total Lucro", está graduado de O Mi a 10 Min e há apenas este intervalo. O eixo x, "Nome do produto", é composto pelo nome de todos os produtos da lista. Em relação aos pontos, primeiro: azul-claro; azul-escuro; laranja; e lilás. Eles formam um desenho de onda.](../_resources/d1e6430d-14d1-419e-aff5-65564f8c.png)

Um insight bastante valioso para a empresa é que os Top 5 produtos representam, sozinhos, um faturamento muito grande para a empresa. Podemos considerar os outros, de certa forma, irrelevantes. Isso pode mudar bastante o direcionamento de marketing e das tomadas de decisões.

<span style="color: #c0c0c0;">Outro detalhe visual que faz bastante diferença é a ordem. O "Top 5" está no meio da distribuição, ela não está bem organizada, e poderíamos, inclusive, aperfeiçoar essa organização.</span>

### <span style="color: #c0c0c0;"><span style="color: #ffffff;">Ordenação do TopN</span></span>

Para solucionar o problema de ordenação do visual de matriz no Power BI, vamos tratar a ordenação desses valores através de outra coluna. Nesse caso, a ideia é utilizar a ordenação do campo de `Min` ou `Max` para que os valores do campo `TopN` sigam a mesma ordenação.

O primeiro passo é acessar a área de exibição de dados. Após acessar a área de exibição de dados, localize o campo que está sendo usado para classificar os dados em grupos de `Top 5`, `Top 6 - 10`, `Top 11 - 20` e `Demais`, que seria o campo de `TopN` da tabela de `TopN Produtos`.

Para corrigir a ordenação no visual de matriz, você precisa ajustar a classificação do campo de `TopN`. Para isso, selecione o campo e clique no botão “Classificar por coluna”, na barra de Ferramentas de coluna. Ao clicar no botão, uma lista de opções irá aparecer, onde devemos selecionar o campo de `Min`. Na captura de tela abaixo podemos verificar exatamente essas opções:

![Captura de tela da Exibição de Dados, com fundo branco. No topo, temos a barra de ferramenta do Power BI, com o botão “Classificar por coluna” selecionado e a opção “Min” destacados com um retângulo vermelho. Na esquerda, temos o ícone da área de Exibição de Dados destacado com um retângulo verde e, ao lado, temos a coluna TopN destacada com um retângulo vermelho. À direita, temos as tabelas, com a tabela de TopN produtos expandida e com a coluna em questão destacadas com um retângulo verde.](../_resources/aula4-image2.png)

Depois de ajustar a classificação do campo de `TopN`, os dados devem ser exibidos corretamente, seguindo a ordem de classificação que você definiu previamente. A seguir, temos os valores ordenados corretamente no visual após o tratamento:

![Captura de tela do visual de matriz do Power BI, com fundo branco. No visual, temos duas colunas, a de TopN e a de TopN lucro. A coluna TopN possui os seguintes valores, sem sequência na vertical: Top 5, Top 6 - 10, Top 11 - 20, Demais; esses valores estão destacados com um retângulo vermelho. A coluna TopN lucro possui valores numéricos. Na última linha temos o valor de Total na coluna de TopN e a soma dos valores na coluna de TopN lucro.](../_resources/aula4-image3.png)

Ao seguir os passos mencionados acima, é possível solucionar o problema de ordenação do visual de matriz no Power BI e apresentar os dados de forma clara e estruturada, destacando os grupos de `Top 5`, `Top 6 - 10`, `Top 11 - 20` e `Demais` de acordo com suas necessidades específicas. O Power BI oferece uma série de recursos para personalizar a exibição de dados, garantindo que você possa analisar informações com precisão e tomar decisões fundamentadas com base em insights relevantes.

E assim, os nossos gráficos também foram reordenados da forma correta:  
![c33080b978e6195c8abe8cda0607646b.png](../_resources/c33080b978e6195c8abe8cda0607646b.png)

&nbsp;

# DAX Studio

Quando trabalhamos com um projeto utilizando várias funções DAX, como estamos fazendo nesse momento, é muito interessante verificar se essas funções estão com boa eficiência. Afinal, quando trabalhamos na realidade, temos tabelas bem grandes e mais volumosas/pesadas.

Porém, existe uma ferramenta que pode nos ajudar muito na verificação de toda a questão dos contextos de DAX e da sua eficiência: o ***DAX Studio***.

&nbsp;

Para saber mais sobre analise de cenários: [Analise de cenários, artigo Alura](https://www.alura.com.br/artigos/power-bi-analise-de-cenario-com-parametros)
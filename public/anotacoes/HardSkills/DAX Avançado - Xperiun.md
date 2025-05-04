---
title: DAX Avançado - Xperiun
updated: 2025-01-16 00:10:04Z
created: 2024-12-30 22:17:30Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

- [Compreendendo o Contexto de Filtro e a Função Calculate na Linguagem DAX](#compreendendo-o-contexto-de-filtro-e-a-fun%C3%A7%C3%A3o-calculate-na-linguagem-dax)
    - [Introdução](#introdu%C3%A7%C3%A3o)
    - [Contexto de Filtro](#contexto-de-filtro)
        - [O que é Contexto de Filtro?](#o-que-%C3%A9-contexto-de-filtro)
        - [Exemplo Prático de Contexto de Filtro](#exemplo-pr%C3%A1tico-de-contexto-de-filtro)
            - [Aplicando Filtros](#aplicando-filtros)
            - [Interseção de Filtros](#interse%C3%A7%C3%A3o-de-filtros)
    - [Função Calculate](#fun%C3%A7%C3%A3o-calculate)
        - [O Básico da Função Calculate](#o-b%C3%A1sico-da-fun%C3%A7%C3%A3o-calculate)
            - [Adicionando Filtros](#adicionando-filtros)
            - [Removendo Filtros](#removendo-filtros)
        - [Utilizando Calculate na Prática](#utilizando-calculate-na-pr%C3%A1tica)
            - [Exercício Interativo](#exerc%C3%ADcio-interativo)
    - [Considerações Finais](#considera%C3%A7%C3%B5es-finais)
- [Revisão sobre contexto de filtro](#revis%C3%A3o-sobre-contexto-de-filtro)
    - [Função MaxData](#fun%C3%A7%C3%A3o-maxdata)
        - [Conceito e Uso](#conceito-e-uso)
        - [Exemplos Práticos](#exemplos-pr%C3%A1ticos)
    - [Contexto de Filtros](#contexto-de-filtros)
        - [O Papel dos Filtros](#o-papel-dos-filtros)
        - [Entendendo o Contexto](#entendendo-o-contexto)
    - [Função MinData](#fun%C3%A7%C3%A3o-mindata)
        - [Conceito e Uso](#conceito-e-uso-2)
        - [Importância na Análise Temporal](#import%C3%A2ncia-na-an%C3%A1lise-temporal)
    - [Máximo e Mínimo em Contextos Específicos](#m%C3%A1ximo-e-m%C3%ADnimo-em-contextos-espec%C3%ADficos)
        - [Análise do Mês](#an%C3%A1lise-do-m%C3%AAs)
        - [Última Data de Venda](#%C3%BAltima-data-de-venda)
    - [Impacto dos Filtros no Contexto Original](#impacto-dos-filtros-no-contexto-original)
        - [Entendimento da Calculate](#entendimento-da-calculate)
        - [Contexto Original vs Artificial](#contexto-original-vs-artificial)
    - [Conclusão](#conclus%C3%A3o)
- [Calculando e Aplicando Filtros com a Função CALCULATE no Power BI](#calculando-e-aplicando-filtros-com-a-fun%C3%A7%C3%A3o-calculate-no-power-bi)
    - [Introdução ao uso de CALCULATE](#introdu%C3%A7%C3%A3o-ao-uso-de-calculate)
    - [Aplicando Filtros ao Ano](#aplicando-filtros-ao-ano)
        - [Criação de Uma Medida de Quantidade para 2018](#cria%C3%A7%C3%A3o-de-uma-medida-de-quantidade-para-2018)
    - [Filtrando por Estado](#filtrando-por-estado)
        - [Criação de Uma Medida de Quantidade para o Arizona](#cria%C3%A7%C3%A3o-de-uma-medida-de-quantidade-para-o-arizona)
    - [Entendendo o Comportamento da CALCULATE](#entendendo-o-comportamento-da-calculate)
        - [Remoção e Substituição de Filtros](#remo%C3%A7%C3%A3o-e-substitui%C3%A7%C3%A3o-de-filtros)
    - [Combinando Filtros](#combinando-filtros)
        - [Combinando Ano e Estado com a Condicional E](#combinando-ano-e-estado-com-a-condicional-e)
        - [Usando a Condicional OU](#usando-a-condicional-ou)
    - [Conclusão](#conclus%C3%A3o-2)
- [Análise de Filtros e Condicionais em Dados](#an%C3%A1lise-de-filtros-e-condicionais-em-dados)
    - [Condicional "E"](#condicional-e)
        - [Aplicação Básica de "E"](#aplica%C3%A7%C3%A3o-b%C3%A1sica-de-e)
        - [Operador IN como Alternativa ao "E"](#operador-in-como-alternativa-ao-e)
    - [Condicional "OU"](#condicional-ou)
        - [Aplicação Básica de "OU"](#aplica%C3%A7%C3%A3o-b%C3%A1sica-de-ou)
        - [União de Conjuntos com Diferentes Colunas](#uni%C3%A3o-de-conjuntos-com-diferentes-colunas)
    - [Casos Práticos](#casos-pr%C3%A1ticos)
        - [Filtragem e Intersecção de Dados](#filtragem-e-intersec%C3%A7%C3%A3o-de-dados)
        - [União de Dados com a Condicional "OU"](#uni%C3%A3o-de-dados-com-a-condicional-ou)
    - [Exercício Proposto](#exerc%C3%ADcio-proposto)
    - [Conclusão](#conclus%C3%A3o-3)
- [Estratégias Avançadas de Filtros no Power BI](#estrat%C3%A9gias-avan%C3%A7adas-de-filtros-no-power-bi)
    - [Introdução: Modify and Keep Filters](#introdu%C3%A7%C3%A3o-modify-and-keep-filters)
    - [O Poder da Função CALCULATE](#o-poder-da-fun%C3%A7%C3%A3o-calculate)
        - [Conceito da Função CALCULATE](#conceito-da-fun%C3%A7%C3%A3o-calculate)
        - [Sobrescrevendo Filtros Externos](#sobrescrevendo-filtros-externos)
    - [A Função KEEP FILTERS como Modificador](#a-fun%C3%A7%C3%A3o-keep-filters-como-modificador)
        - [Entendimento da Função KEEP FILTERS](#entendimento-da-fun%C3%A7%C3%A3o-keep-filters)
        - [Keep ou Overwrite? Qual Usar?](#keep-ou-overwrite-qual-usar)
    - [Exemplos Práticos do Uso de Filtros](#exemplos-pr%C3%A1ticos-do-uso-de-filtros)
        - [Exemplo com CALCULATE](#exemplo-com-calculate)
        - [Exemplo com KEEP FILTERS](#exemplo-com-keep-filters)
        - [Considerações Importantes](#considera%C3%A7%C3%B5es-importantes)
    - [Conclusão: Aperfeiçoando o Controle de Filtros](#conclus%C3%A3o-aperfei%C3%A7oando-o-controle-de-filtros)
        - [Dicas Finais para Profissionais](#dicas-finais-para-profissionais)
        - [Continuidade no Aprendizado](#continuidade-no-aprendizado)
        - [Próximos Passos](#pr%C3%B3ximos-passos)
- [Removendo os filtros com ALL e REMOVEFILTERS](#removendo-os-filtros-com-all-e-removefilters)
    - [Entendendo o Contexto e a Função CALCULATE](#entendendo-o-contexto-e-a-fun%C3%A7%C3%A3o-calculate)
        - [A Função ALL](#a-fun%C3%A7%C3%A3o-all)
            - [Exemplo de Uso da ALL](#exemplo-de-uso-da-all)
        - [A Funcionalidade do ALL em Diferentes Contextos](#a-funcionalidade-do-all-em-diferentes-contextos)
            - [Exemplo com ALL em Tabela de Dimensão](#exemplo-com-all-em-tabela-de-dimens%C3%A3o)
        - [A Importância de Entender os Filtros](#a-import%C3%A2ncia-de-entender-os-filtros)
    - [Manipulando Contexto com o ALL](#manipulando-contexto-com-o-all)
        - [Entendendo o Impacto do ALL em Relacionamentos](#entendendo-o-impacto-do-all-em-relacionamentos)
    - [Diferenças entre ALL e REMOVEFILTERS](#diferen%C3%A7as-entre-all-e-removefilters)
        - [Exemplo de REMOVEFILTERS](#exemplo-de-removefilters)
- [Compreendendo a Função ALL no Power BI](#compreendendo-a-fun%C3%A7%C3%A3o-all-no-power-bi)
    - [Pontos de Atenção com a Função ALL](#pontos-de-aten%C3%A7%C3%A3o-com-a-fun%C3%A7%C3%A3o-all)
        - [Usando ALL em uma Tabela Específica](#usando-all-em-uma-tabela-espec%C3%ADfica)
    - [ALL em Uma Única Coluna](#all-em-uma-%C3%BAnica-coluna)
        - [Removendo Filtros de Colunas Específicas](#removendo-filtros-de-colunas-espec%C3%ADficas)
        - [Consequências do Uso Incorreto da Função ALL](#consequ%C3%AAncias-do-uso-incorreto-da-fun%C3%A7%C3%A3o-all)
            - [Cenário Hipotético de Uso Incorreto](#cen%C3%A1rio-hipot%C3%A9tico-de-uso-incorreto)
    - [Estratégias Avançadas com ALL](#estrat%C3%A9gias-avan%C3%A7adas-com-all)
        - [Utilização de ALL com Múltiplos Campos](#utiliza%C3%A7%C3%A3o-de-all-com-m%C3%BAltiplos-campos)
    - [Entendendo o Contexto de Filtros](#entendendo-o-contexto-de-filtros)
        - [A Importância de Entender o Contexto](#a-import%C3%A2ncia-de-entender-o-contexto)
        - [Exemplo Prático de Contexto de Filtros](#exemplo-pr%C3%A1tico-de-contexto-de-filtros)
    - [Conclusão](#conclus%C3%A3o-4)
- [ALL e ALL SELECTED](#all-e-all-selected)
    - [Introdução](#introdu%C3%A7%C3%A3o-2)
    - [Capítulo 1: Entendendo a Função ALL](#cap%C3%ADtulo-1-entendendo-a-fun%C3%A7%C3%A3o-all)
        - [Subcapítulo 1.1: Aplicação e Limitações da ALL](#subcap%C3%ADtulo-11-aplica%C3%A7%C3%A3o-e-limita%C3%A7%C3%B5es-da-all)
    - [Capítulo 2: A Função ALL SELECTED](#cap%C3%ADtulo-2-a-fun%C3%A7%C3%A3o-all-selected)
        - [Subcapítulo 2.1: Características da ALL SELECTED](#subcap%C3%ADtulo-21-caracter%C3%ADsticas-da-all-selected)
    - [Capítulo 3: Percentual sobre o Total com ALL e ALL SELECTED](#cap%C3%ADtulo-3-percentual-sobre-o-total-com-all-e-all-selected)
        - [Subcapítulo 3.1: Calculando Percentuais com ALL](#subcap%C3%ADtulo-31-calculando-percentuais-com-all)
        - [Subcapítulo 3.2: Trabalhando Percentuais com ALL SELECTED](#subcap%C3%ADtulo-32-trabalhando-percentuais-com-all-selected)
    - [Capítulo 4: Casos Práticos de ALL e ALL SELECTED](#cap%C3%ADtulo-4-casos-pr%C3%A1ticos-de-all-e-all-selected)
        - [Subcapítulo 4.1: Exemplos no Ambiente de Vendas](#subcap%C3%ADtulo-41-exemplos-no-ambiente-de-vendas)
        - [Subcapítulo 4.2: Ajustando Medidas e Resultados Esperados](#subcap%C3%ADtulo-42-ajustando-medidas-e-resultados-esperados)
    - [Conclusão](#conclus%C3%A3o-5)
        - [Próximos Passos](#pr%C3%B3ximos-passos-2)
- [Percentual sobre subtotais](#percentual-sobre-subtotais)
    - [Introdução](#introdu%C3%A7%C3%A3o-3)
    - [Conceitos Básicos do DAX](#conceitos-b%C3%A1sicos-do-dax)
        - [Filtragem de Categoria e Produto](#filtragem-de-categoria-e-produto)
            - [Manutenção dos Filtros](#manuten%C3%A7%C3%A3o-dos-filtros)
            - [Construção de Medidas Específicas](#constru%C3%A7%C3%A3o-de-medidas-espec%C3%ADficas)
        - [Trabalhando com Subtotais](#trabalhando-com-subtotais)
            - [Criação de Nova Medida Percentual](#cria%C3%A7%C3%A3o-de-nova-medida-percentual)
            - [Importância dos Nomes Significativos](#import%C3%A2ncia-dos-nomes-significativos)
        - [Testes e Possibilidades](#testes-e-possibilidades)
            - [Além das Medidas Básicas](#al%C3%A9m-das-medidas-b%C3%A1sicas)
            - [Introduzindo Contexto de Categoria na Medida](#introduzindo-contexto-de-categoria-na-medida)
    - [Aprofundando Técnicas de Contexto](#aprofundando-t%C3%A9cnicas-de-contexto)
        - [Manipulação de Contexto com Funções DAX](#manipula%C3%A7%C3%A3o-de-contexto-com-fun%C3%A7%C3%B5es-dax)
            - [Exemplo Prático: Uso da Função ALL](#exemplo-pr%C3%A1tico-uso-da-fun%C3%A7%C3%A3o-all)
            - [Criação de Medidas Abstratas com Contexto](#cria%C3%A7%C3%A3o-de-medidas-abstratas-com-contexto)
        - [Combinação de Contextos Diferentes](#combina%C3%A7%C3%A3o-de-contextos-diferentes)
    - [Conclusão](#conclus%C3%A3o-6)
- [Introdução ao Ajuste de Subtotais em Matrizes Usando a Função "IS IN SCOPE"](#introdu%C3%A7%C3%A3o-ao-ajuste-de-subtotais-em-matrizes-usando-a-fun%C3%A7%C3%A3o-is-in-scope)
    - [Ajustando Subtotais: Uma Visão Geral](#ajustando-subtotais-uma-vis%C3%A3o-geral)
        - [O que é a Função "IS IN SCOPE"?](#o-que-%C3%A9-a-fun%C3%A7%C3%A3o-is-in-scope)
    - [Criando Medidas Condicionais](#criando-medidas-condicionais)
        - [Definição da Medida](#defini%C3%A7%C3%A3o-da-medida)
        - [Utilizando "IS IN SCOPE" para Ajuste Condicional](#utilizando-is-in-scope-para-ajuste-condicional)
            - [Estrutura do IF com "IS IN SCOPE"](#estrutura-do-if-com-is-in-scope)
    - [Criando a Nova Medida](#criando-a-nova-medida)
        - [Calculando o Percentual Ajustado](#calculando-o-percentual-ajustado)
        - [Explicação da Fórmula](#explica%C3%A7%C3%A3o-da-f%C3%B3rmula)
    - [Exemplos Práticos](#exemplos-pr%C3%A1ticos-2)
        - [Impacto na Visualização dos Dados](#impacto-na-visualiza%C3%A7%C3%A3o-dos-dados)
    - [Melhores Práticas e Considerações Finais](#melhores-pr%C3%A1ticas-e-considera%C3%A7%C3%B5es-finais)
        - [Simplificando a Medida](#simplificando-a-medida)
        - [Usabilidade e Compreensão](#usabilidade-e-compreens%C3%A3o)
        - [Conclusão](#conclus%C3%A3o-7)
- [Rateio de Metas](#rateio-de-metas)
    - [Introdução](#introdu%C3%A7%C3%A3o-4)
    - [O que é a Meta de Rateio?](#o-que-%C3%A9-a-meta-de-rateio)
    - [Passo a Passo para Criação da Meta de Rateio](#passo-a-passo-para-cria%C3%A7%C3%A3o-da-meta-de-rateio)
        - [Etapa 1: Definindo o Fator de Multiplicação](#etapa-1-definindo-o-fator-de-multiplica%C3%A7%C3%A3o)
        - [Etapa 2: Repetição do Valor Total](#etapa-2-repeti%C3%A7%C3%A3o-do-valor-total)
        - [Etapa 3: Cálculo do Fator de Multiplicação por Segmento](#etapa-3-c%C3%A1lculo-do-fator-de-multiplica%C3%A7%C3%A3o-por-segmento)
        - [Etapa 4: Aplicação da Regra de Três](#etapa-4-aplica%C3%A7%C3%A3o-da-regra-de-tr%C3%AAs)
        - [Etapa 5: Ajustando as Categorias](#etapa-5-ajustando-as-categorias)
    - [Dicas Extra: A Importância de Variáveis em DAX](#dicas-extra-a-import%C3%A2ncia-de-vari%C3%A1veis-em-dax)
    - [Conclusão](#conclus%C3%A3o-8)
- [Estratégias para Diluir Metas por Dia Útil](#estrat%C3%A9gias-para-diluir-metas-por-dia-%C3%BAtil)
    - [Introdução](#introdu%C3%A7%C3%A3o-5)
    - [Capítulo 1: Compreendendo as Metas](#cap%C3%ADtulo-1-compreendendo-as-metas)
        - [Subtópico 1.1: Conceito de Diluição de Metas](#subt%C3%B3pico-11-conceito-de-dilui%C3%A7%C3%A3o-de-metas)
        - [Subtópico 1.2: Tratamento dos Dias no Contexto Anual](#subt%C3%B3pico-12-tratamento-dos-dias-no-contexto-anual)
    - [Capítulo 2: Análise da Meta Anual](#cap%C3%ADtulo-2-an%C3%A1lise-da-meta-anual)
        - [Subtópico 2.1: Desafios na Distribuição Mensal](#subt%C3%B3pico-21-desafios-na-distribui%C3%A7%C3%A3o-mensal)
        - [Subtópico 2.2: Correções e Ajustes Necessários](#subt%C3%B3pico-22-corre%C3%A7%C3%B5es-e-ajustes-necess%C3%A1rios)
    - [Capítulo 3: Métodos de Diluição de Meta](#cap%C3%ADtulo-3-m%C3%A9todos-de-dilui%C3%A7%C3%A3o-de-meta)
        - [Subtópico 3.1: Foco em Dias Úteis](#subt%C3%B3pico-31-foco-em-dias-%C3%BAteis)
        - [Subtópico 3.2: Implementação de Medidas no Power BI](#subt%C3%B3pico-32-implementa%C3%A7%C3%A3o-de-medidas-no-power-bi)
    - [Capítulo 4: Prática com Power BI](#cap%C3%ADtulo-4-pr%C3%A1tica-com-power-bi)
        - [Subtópico 4.1: Construção de Medidas Específicas](#subt%C3%B3pico-41-constru%C3%A7%C3%A3o-de-medidas-espec%C3%ADficas)
        - [Subtópico 4.2: Ampliação do Uso de Variáveis](#subt%C3%B3pico-42-amplia%C3%A7%C3%A3o-do-uso-de-vari%C3%A1veis)
    - [Conclusão](#conclus%C3%A3o-9)

# Compreendendo o Contexto de Filtro e a Função Calculate na Linguagem DAX

## Introdução

Antes de mergulharmos nos cálculos mais avançados com a linguagem DAX, é imprescindível compreender o funcionamento do contexto de filtro. Este eBook fornecerá uma visão detalhada do contexto de filtro e sua aplicação prática, essencial para a função calculate.

## Contexto de Filtro

O contexto de filtro é um dos conceitos mais importantes no DAX. Ao compreendê-lo, você pode realizar praticamente qualquer cálculo avançado necessário em seus dados.

### O que é Contexto de Filtro?

Quando trabalhamos com DAX, cada valor calculado é o resultado de uma operação realizada em um contexto específico. Um contexto de filtro determina quais dados estão visíveis para cada cálculo em particular.

### Exemplo Prático de Contexto de Filtro

Imagine uma tabela com a coluna `Estado`, contendo os estados de clientes, e uma medida `Quantidade de Linhas de Vendas`, que realiza uma contagem das linhas de vendas. Cada estado apresentado na tabela está em um contexto diferente, isto é, possui um subconjunto diferente de dados filtrados da tabela original.

#### Aplicando Filtros

Ao selecionar um estado específico, como Arizona, o contexto de filtro é aplicado, e apenas os clientes daquele estado são considerados. Se, por exemplo, tivermos três clientes no Arizona, o cálculo da medida levará em conta apenas as vendas realizadas a esses três clientes.

#### Interseção de Filtros

Ao adicionar um novo filtro, como o ano de 2018, o contexto de filtro é atualizado e passa a considerar não apenas o estado (Arizona) mas também o ano especificado (2018). Esse novo contexto impactará o resultado da medida de contagem das linhas de vendas.

## Função Calculate

A função `calculate` é uma das funções mais poderosas em DAX e trabalha diretamente com os contextos de filtro.

### O Básico da Função Calculate

Calculate permite que você modifique o contexto de filtro de uma maneira controlada. Com essa função, é possível adicionar ou remover filtros de uma medida.

#### Adicionando Filtros

Você pode usar a função `calculate` para adicionar filtros adicionais às suas medidas, restringindo ainda mais os dados que são considerados no cálculo.

#### Removendo Filtros

Da mesma forma, `calculate` pode ser usada para remover filtros existentes, ampliando o conjunto de dados que a medida levará em conta.

### Utilizando Calculate na Prática

Vamos explorar como a função `calculate` pode ser aplicada em situações reais para manipular o contexto de filtro e chegar aos resultados desejados.

#### Exercício Interativo

Como exercício, propomos a criação de medidas simples que utilizem funções como `MAX` e `MIN` para extrair informações específicas baseadas no contexto de filtro. Medidas como `MAX(Data)` e `MIN(Mês)` fornecerão insights valiosos ao serem aplicadas em contextos filtrados diferentes.

## Considerações Finais

Entender o contexto de filtro é apenas o começo. Conforme você se aprofunda no uso da função `calculate`, perceberá a facilidade e flexibilidade que o DAX oferece para cálculos e análises avançadas. Explore experimentos interativos e desafie-se a entender completamente como os contextos de filtro e a função `calculate` interagem.

> Algo que vai me ajudar bastante a entender o contexto de filtro é brincar tanto com os filtros da visão tabular dos dados no PBI e entender junto ao modelo de dados. Todos os filtros que são feitos ou desfeitos no DAX também podem ser feitos ou desfeitos nessa visão tabular do PBI, todos acontecem por meio das nossas relações.
> 
> Por exemplo, o "ALL" nada mais é do que um "limpar filtros" da nossa visão tabular do PBI

![mindmap35_page-0001.jpg](../_resources/mindmap35_page-0001.jpg)

# Revisão sobre contexto de filtro

O domínio das funções de datas é essencial para analistas de dados que utilizam ferramentas como o Power BI para extração de insights. Este ebook vai abordar os conceitos dessas funções e como elas afetam o contexto dos dados.

## Função MaxData

### Conceito e Uso

A função `MaxData` é utilizada para identificar o último dia de um determinado contexto. Este contexto pode ser um ano, um trimestre ou um mês, e sua determinação é essencial no tratamento das informações analíticas.

### Exemplos Práticos

Suponha que estamos analisando o trimestre dois de um ano específico. A função `MaxData` retornará a data correspondente ao último dia desse trimestre. É importante considerar todos os filtros aplicados, pois cada filtro ajusta o contexto e, consequentemente, o resultado da função.

## Contexto de Filtros

### O Papel dos Filtros

Filtros são cruciais no Power BI, pois estabelecem o contexto no qual as funções operam. Quantas e quais colunas estão afetando um valor depende diretamente dos filtros aplicados no momento da análise.

### Entendendo o Contexto

O contexto é influenciado por diversas variáveis, como o ano, o trimestre e o mês. A "máquina" — ou seja, o Power BI —, não fará suposições sobre o contexto sem que as diretrizes sejam claras e definidas pelo analista.

## Função MinData

### Conceito e Uso

A `MinData` encontra o primeiro dia de um contexto. Ao se trabalhar dentro de um ano específico, esta função retornará o primeiro dia daquele ano.

### Importância na Análise Temporal

Esta função é utilizada para identificar o início de um período analítico, permitindo comparações temporais e a avaliação do desempenho ao longo do tempo.

## Máximo e Mínimo em Contextos Específicos

### Análise do Mês

No contexto de um ano, ao aplicar o `MaxData` em relação aos meses, retornaremos o último mês com atividade dentro do ano, enquanto o `MinData` irá retornar o primeiro. Isso se ajusta dinamicamente conforme os trimestres e meses são filtrados.

### Última Data de Venda

Quando aplicada ao contexto de vendas, a função `MaxData` pode ser usada para descobrir qual foi o último dia de venda em um determinado ano, ajustando-se às atividades e filtragens definidas pelo analista.

## Impacto dos Filtros no Contexto Original

### Entendimento da Calculate

A função `Calculate` pode alterar o contexto original de filtros, permitindo ajustes e refinamentos mais complexos na análise de dados. A compreensão do funcionamento dessa função e do contexto original é fundamental para manipulação efetiva do contexto de filtros.

### Contexto Original vs Artificial

Distinguir entre contextos criados naturalmente pelos filters e aqueles ajustados de maneira "artificial" pela função `Calculate` é uma habilidade avançada que analistas precisam desenvolver.

## Conclusão

Compreender e utilizar as funções de datas no Power BI requer prática e atenção ao contexto. A habilidade de identificar o impacto dos filtros em análises temporais é crucial, e um entendimento sólido dessas funções é essencial para a entrega de insights relevantes.

Lembre-se de revisar conceitos frequentemente e evitar a pressão excessiva no processo de aprendizado do DAX e do Power BI. O desenvolvimento é contínuo e mesmo profissionais experientes encontram novas formas de abordar e explicar os conceitos ao longo do tempo.

> Sempre olhar o contexto, cada linha é um contexto diferente afetado por colunas.

![mindmap36_page-0001.jpg](../_resources/mindmap36_page-0001.jpg)

# Calculando e Aplicando Filtros com a Função CALCULATE no Power BI

## Introdução ao uso de CALCULATE

O uso da função CALCULATE no Power BI permite a modificação de uma expressão previamente definida por meio da aplicação de filtros. Ela é essencial para obter dados específicos de acordo com critérios determinados.

## Aplicando Filtros ao Ano

Suponhamos que precisamos filtrar as informações para o ano de 2018 no estado do Arizona. Nesse cenário, introduzimos a função CALCULATE para calcular a quantidade de linhas que se enquadram nesse filtro, resultando em 126 linhas correspondentes.

### Criação de Uma Medida de Quantidade para 2018

```markdown
qtd_2018 = CALCULATE(COUNTROWS(Vendas), 'Calendário'[Ano] = 2018)
```

A função COUNTROWS conta as linhas de vendas e o filtro aplicado restringe os registros ao ano de 2018.

## Filtrando por Estado

Podemos também filtrar por uma coluna de estado específico como Arizona e criar uma nova medida que reflete essa condição.

### Criação de Uma Medida de Quantidade para o Arizona

```markdown
quantidade_Arizona = CALCULATE(COUNTROWS(Vendas), 'Vendas'[Estado] = "Arizona")
```

Neste caso, o comportamento padrão da CALCULATE faz com que o valor seja replicado para todos os estados, ignorando o contexto externo.

## Entendendo o Comportamento da CALCULATE

A função CALCULATE reescreve os filtros internamente e os traduz em uma tabela. Portanto, a aplicação de filtros como "Estado = Arizona" é internamente transformada em uma nova tabela que filtra toda a coluna de estado para mostrar apenas as linhas correspondentes ao Arizona.

### Remoção e Substituição de Filtros

Quando aplicamos um filtro com a CALCULATE, há uma substituição do contexto do filtro original pelo novo contexto estabelecido. Por exemplo:

```markdown
// Comentado apenas para fins explicativos
// FILTER('Vendas'[Estado], 'Vendas'[Estado] = "Arizona")
```

## Combinando Filtros

É possível combinar filtros usando a CALCULATE, mas devemos entender a lógica por trás da combinação.

### Combinando Ano e Estado com a Condicional E

```markdown
quantidade_Arizona_2018 = CALCULATE(COUNTROWS(Vendas), 'Calendário'[Ano] = 2018, 'Vendas'[Estado] = "Arizona")
```

Nesta expressão, tanto o ano de 2018 quanto o estado do Arizona precisam ser verdadeiros ao mesmo tempo para que as linhas sejam contadas.

### Usando a Condicional OU

Quando desejamos contar linhas onde um dos filtros é verdadeiro, podemos usar a condicional OU representada pela função ||.

```markdown
quantidade_Arizona_OU_2017 = CALCULATE(COUNTROWS(Vendas), 'Calendário'[Ano] = 2017 || 'Calendário'[Ano] = 2018)
```

## Conclusão

O uso apropriado da função CALCULATE possibilita uma análise de dados mais afinada e estratégica. É importante compreender e utilizar as condicionais E e OU corretamente, assim como realizar testes lógicos para garantir o entendimento e a precisão dos resultados obtidos.  
![mindmap37_page-0001.jpg](../_resources/mindmap37_page-0001.jpg)

# Análise de Filtros e Condicionais em Dados

A compreensão de filtros e condicionais é essencial no trabalho com dados. Nesta análise, focaremos em entender a diferença prática entre as condicionais "e" e "ou", aplicadas em um contexto de dados de vendas.

## Condicional "E"

A condicional "e" é usada para restringir o conjunto de dados a registros que atendem simultaneamente a todas as condições especificadas.

### Aplicação Básica de "E"

```markdown
- Vendas de 2017 E 2018
- Localização: Arizona E Alberta
```

Quando aplicamos a condicional "e", estamos buscando a intersecção entre os critérios estabelecidos, resultando em um subconjunto mais restrito dos dados.

### Operador IN como Alternativa ao "E"

```markdown
- Ano IN {2017, 2018}
- Localização IN {Arizona, Alberta}
```

O uso do operador `IN` simplifica a escrita da consulta, principalmente quando lidamos com a mesma coluna e queremos especificar múltiplos valores possíveis.

## Condicional "OU"

Contrária ao "e", a condicional "ou" expande o conjunto de dados para incluir registros que atendem a qualquer uma das condições especificadas.

### Aplicação Básica de "OU"

```markdown
- Vendas de 2017 OU 2018
- Localização: Arizona OU Alberta
```

Com a condicional "ou", não estamos mais buscando uma intersecção, mas sim a união de conjuntos de dados baseando-se nos critérios estabelecidos.

### União de Conjuntos com Diferentes Colunas

Quando aplicamos a condicional "ou" entre diferentes colunas, temos uma união mais abrangente:

```markdown
- País: United States OU Continente: Ásia OU Europa
```

Nesse caso, estamos expandindo os critérios de inclusão para abarcar uma variedade maior de registros no conjunto de dados.

## Casos Práticos

Para ilustrar os conceitos acima, vamos aplicar filtros em um conjunto de dados hipotético de vendas e clientes.

### Filtragem e Intersecção de Dados

```markdown
- Gênero: Masculino E Estado Civil: Solteiro
```

Aqui, queremos apenas os clientes que são simultaneamente masculinos e solteiros, caso haja intersecção nesses grupos.

### União de Dados com a Condicional "OU"

```markdown
- Gênero: Masculino OU Estado Civil: Solteiro
```

Neste filtro, nosso conjunto de dados incluirá todos os homens, independentemente do estado civil, além de todas as pessoas solteiras, incluindo mulheres.

## Exercício Proposto

Como exercício para praticar a aplicação de filtros e condicionais, tente resolver o seguinte desafio:

```markdown
Calcule a quantidade de linhas de vendas no ano de 2017, nos meses de abril e maio, para clientes que possuem mais de cinquenta anos ou ocupação bacharel.
```

## Conclusão

Compreender a diferença entre as condicionais "e" e "ou" e saber como aplicá-las corretamente é fundamental para realizar uma análise de dados eficaz. Lembre-se de que a condicional "e" restringe o conjunto de dados, enquanto a condicional "ou" aumenta as possibilidades de inclusão. Experimente esses conceitos com diferentes conjuntos de dados para aprimorar suas habilidades.

> OU soma e && restringe

![mindmap38_page-0001.jpg](../_resources/mindmap38_page-0001.jpg)

# Estratégias Avançadas de Filtros no Power BI

## Introdução: Modify and Keep Filters

Neste ebook, exploraremos técnicas avançadas de manipulação de filtros no Power BI, usando funções como `CALCULATE` e `KEEPFILTERS`. Estas estratégias são fundamentais para profissionais que desejam um maior controle e precisão no comportamento das suas medidas e nos resultados apresentados em seus dashboards.

## O Poder da Função CALCULATE

### Conceito da Função CALCULATE

A função `CALCULATE` é uma das mais poderosas no DAX (Data Analysis Expressions) e serve para modificar o contexto de filtragem em nossas medidas. Com ela, é possível sobrescrever filtros existentes ou aplicar novos filtros, possibilitando uma série de cálculos dinâmicos e complexos.

### Sobrescrevendo Filtros Externos

Quando aplicamos a função `CALCULATE`, o Power BI permite que substituamos os filtros que estão sendo aplicados externamente (como os filtros de uma visualização) por filtros internos na própria função.

## A Função KEEP FILTERS como Modificador

### Entendimento da Função KEEP FILTERS

A função `KEEP FILTERS` atua como um modificador da função `CALCULATE`, alterando seu comportamento padrão. Em vez de simplesmente sobrescrever um filtro externo, `KEEP FILTERS` permite que o filtro interno interaja com o contexto de filtro externo, mantendo filtros aplicados em outras partes do relatório.

### Keep ou Overwrite? Qual Usar?

Decidir entre simplesmente sobrescrever filtros com `CALCULATE` ou utilizar `KEEP FILTERS` depende inteiramente do contexto de negócio e do que se deseja apresentar. O `KEEP FILTERS` é especialmente útil quando queremos manter a interação dos filtros originais da visualização com os filtros aplicados pela medida.

## Exemplos Práticos do Uso de Filtros

### Exemplo com CALCULATE

Vamos ilustrar com um exemplo prático em que criamos uma medida `Quantidade Contoso` onde utilizamos `CALCULATE` para contar as linhas onde a marca é igual a Contoso:

```dax
Quantidade Contoso = CALCULATE(
  COUNTROWS('Vendas'),
  'Produto'[Marca] = "Contoso"
)
```

Este cálculo irá ignorar outros filtros aplicados e retornará a contagem apenas para a marca Contoso.

### Exemplo com KEEP FILTERS

Por outro lado, se quisermos respeitar os filtros externos aplicados e ainda focar na marca Contoso, utilizaremos `KEEP FILTERS`:

```dax
Quantidade Contoso com KEEP FILTERS = CALCULATE(
  COUNTROWS('Vendas'),
  KEEPFILTERS('Produto'[Marca] = "Contoso")
)
```

Neste caso, valores só serão retornados para a marca Contoso, mas respeitarão outros filtros aplicados ao relatório.

### Considerações Importantes

Ao trabalhar com `KEEP FILTERS`, é essencial compreender os filtros originais aplicados no relatório, pois o resultado final será a intersecção entre os filtros internos e externos. Uma má compreensão pode levar a interpretações errôneas dos dados.

## Conclusão: Aperfeiçoando o Controle de Filtros

### Dicas Finais para Profissionais

Ao dominar funções como `CALCULATE` e `KEEP FILTERS`, os profissionais de BI ganham uma poderosa ferramenta para personalizar a análise de dados. Cada detalhe, da sintaxe ao contexto da aplicação, pode alterar significativamente os resultados finais.

### Continuidade no Aprendizado

Para afiar ainda mais sua habilidade com filtros, o caminho é a prática constante e o enfrentamento de casos reais. A teoria se solidifica quando aplicada em situações práticas, e cada desafio superado acrescenta na sua bagagem de conhecimentos em Power BI.

### Próximos Passos

Progredir no domínio de filtros avançados abre as portas para técnicas mais complexas como forecasting, médias móveis, entre outras. Com o conhecimento adquirido, espera-se que o leitor se sinta mais confiante e preparado para utilizar estas estratégias em seus futuros projetos.

Consolidar esses conceitos permite não apenas executar tarefas rotineiras, mas também inovar em soluções e insights para tomadas de decisão mais assertivas nos negócios.  
![mindmap39_page-0001.jpg](../_resources/mindmap39_page-0001.jpg)

# Removendo os filtros com ALL e REMOVEFILTERS

Neste material, estaremos explorando as nuances e os principais pontos das funções `ALL`, `ALLSELECTED`, `VALUES` e `FILTER`, todas utilizadas no contexto da função `CALCULATE`. Aprofundar-se nessas funções é essencial para uma compreensão detalhada de como manipular contextos e realizar cálculos complexos na linguagem DAX.

## Entendendo o Contexto e a Função `CALCULATE`

A função `CALCULATE` é a chave mestra do DAX, permitindo modificar contextos de filtro para realizar cálculos diversos. Aprender a usá-la em conjunto com outras funções é fundamental para dominar a linguagem DAX.

### A Função `ALL`

A função `ALL` é utilizada para remover todos os filtros de uma tabela, retornando todos os seus valores sem filtrar por uma condição específica. Isso é muito útil quando desejamos realizar um cálculo que não deve ser restringido pelos filtros aplicados em nossas visuações.

#### Exemplo de Uso da `ALL`

```dax
QuantidadeAllVendas = CALCULATE([QuantidadeDeLinhas], ALL(fVendas))
```

Este exemplo calcula a quantidade total de linhas para todos os produtos, ignorando outros filtros que podem ter sido aplicados.

### A Funcionalidade do `ALL` em Diferentes Contextos

A função `ALL` não apenas remove os filtros da tabela especificada mas também afeta todas as tabelas relacionadas no modelo. Isso significa que, se você limpa o filtro de uma tabela de dimensão, todas as linhas dessa dimensão serão consideradas no cálculo, potencialmente alterando os resultados em tabelas relacionadas.

#### Exemplo com `ALL` em Tabela de Dimensão

```dax
QuantidadeProdutos = CALCULATE([QuantidadeDeLinhas], ALL(dProduto))
```

Neste caso, o uso do `ALL` na tabela de dimensão `dProduto` tem o efeito de remover as restrições de filtro aplicadas a essa dimensão, resultando na utilização de todas as suas linhas no cálculo feito em `fVendas`.

### A Importância de Entender os Filtros

Quando trabalhamos com o DAX, é crucial não apenas conhecer as funções, mas também entender como os filtros estão sendo aplicados e modificados por elas. Esse entendimento é o que permite diagnosticar e resolver problemas que surgem quando os resultados não são aqueles esperados.

## Manipulando Contexto com o `ALL`

A manipulação de contexto é parte essencial do DAX e a função `ALL` desempenha um papel importante nessa manipulação. Ela proporciona a capacidade de realizar cálculos como se nenhuma restrição específica tivesse sido aplicada a uma tabela, seja ela de fatos ou dimensões.

### Entendendo o Impacto do `ALL` em Relacionamentos

Um ponto a se destacar é que, mesmo que o `ALL` seja aplicado em uma única tabela, seu impacto pode ser sentido em outras tabelas devido a relacionamentos dentro do modelo de dados. Isso é algo que deve ser sempre considerado ao usar essa função.

## Diferenças entre `ALL` e `REMOVEFILTERS`

Outra função que executa uma tarefa semelhante é `REMOVEFILTERS`, que remove os filtros de uma tabela específica. Enquanto funcionalmente semelhante à função `ALL`, `REMOVEFILTERS` não possui algumas variações da `ALL`, o que faz com que alguns preferam usar `ALL` por questões de flexibilidade e didática.

### Exemplo de `REMOVEFILTERS`

```dax
QuantidadeVendas = CALCULATE([QuantidadeDeLinhas], REMOVEFILTERS(fVendas))
```

Este cálculo retorna a quantidade total de linhas de vendas independente dos filtros aplicados a `fVendas`, similar ao que ocorreria com o uso de `ALL`.

> Dominando CALCULATE, ALL, ALLSELECTED, VALUES e FILTER, consigo fazer o que eu quiser com DAX
> 
> Precisamos sempre dar um passo atrás de debuggar a formula DAX, e como fazer isso? Aplicando os mesmos filtros da formula, porém, na visão tabular do DAX, entender de forma visual como os dados se comportam e como cada filtro é aplicado (ou removido), podemos ir também no nosso modelo e entender como o filtro é passado de uma tabela para a outra por meio dos relacionamentos.
> 
> Precisamos simular o comportamento da calculate e dos filtros por meio da aba de dados (visão tabular) do PBI, e usar o modelo de dados para entender como as tabelas são filtradas entre si
> 
> Não devemos menosprezar o passo acima dito.

![mindmap40_page-0001.jpg](../_resources/mindmap40_page-0001.jpg)

# Compreendendo a Função ALL no Power BI

A função ALL é amplamente utilizada no Power BI para manipular contextos de filtro dentro de visualizações e expressões DAX. Neste e-book, vamos explorar vários exemplos práticos e esclarecer como essa função impacta os resultados em relatórios do Power BI.

## Pontos de Atenção com a Função ALL

Ao trabalhar com a função ALL, é crucial entender que ela remove filtros de uma tabela ou colunas específicas, permitindo análises mais flexíveis. A seguir, serão apresentados exemplos práticos mostrando o funcionamento da função em diferentes cenários.

### Usando ALL em uma Tabela Específica

```DAX
Quantidade ALL Clientes = CALCULATE(
   SUM(Quantidade),
   ALL('Clientes')
)
```

Este cálculo remove quaisquer filtros aplicados na tabela de 'Clientes', resultando no valor total de vendas independentemente do filtro de cliente aplicado.

## ALL em Uma Única Coluna

### Removendo Filtros de Colunas Específicas

```DAX
Quantidade ALL Produtos = CALCULATE(
   SUM(Quantidade),
   ALL('Produtos'[NomeProduto])
)
```

Esse cálculo limpa qualquer filtro aplicado na coluna 'NomeProduto' da tabela 'Produtos', distinto de considerar toda a tabela.

### Consequências do Uso Incorreto da Função ALL

#### Cenário Hipotético de Uso Incorreto

Suponha que um filtro seja aplicado na coluna 'NomeProduto'. Utilizar ALL('Produtos'\[NomeProduto\]) em um contexto onde o filtro está sendo aplicado em uma coluna diferente não terá o efeito desejado porque não há filtros diretos na coluna 'NomeProduto'.

## Estratégias Avançadas com ALL

### Utilização de ALL com Múltiplos Campos

```DAX
Quantidade ALL Várias Colunas = CALCULATE(
   SUM(Quantidade),
   ALL('Produtos'[IDProduto], 'Produtos'[NomeProduto])
)
```

Aqui, a função ALL está sendo utilizada para remover filtros de múltiplas colunas, permitindo um cálculo que ignora filtros aplicados tanto nos IDs quanto nos nomes dos produtos.

## Entendendo o Contexto de Filtros

### A Importância de Entender o Contexto

Sem compreender corretamente o contexto de filtros, pode-se facilmente chegar a resultados inesperados. Por exemplo, limpar um filtro em uma coluna sem verificação pode não alterar o resultado esperado, se outros filtros estiverem sendo aplicados em outras colunas relevantes.

### Exemplo Prático de Contexto de Filtros

Considerar um relatório onde o filtro está aplicado em 'Verduras' na categoria de produtos. Se deseja-se calcular a quantidade vendida de 'Alface', deve-se lembrar de remover o filtro não apenas da coluna 'NomeProduto' mas também da 'Categoria', para obter o número total de vendas de alface.

## Conclusão

A função ALL é uma ferramenta poderosa no Power BI, que, quando usada corretamente, permite uma análise de dados mais refinada. Com os exemplos fornecidos, esperamos ter esclarecido os princípios por trás da função ALL e como ela pode ser usada para alcançar resultados precisos em relatórios do Power BI.

Os conhecimentos adquiridos neste e-book sobre a função ALL ajudarão a criar medidas mais eficazes e a compreender melhor como o Power BI trata os contextos de filtro. Lembre-se de que a prática e a exploração de diferentes cenários são essenciais para dominar as funcionalidades do Power BI.  
![mindmap41_page-0001.jpg](../_resources/mindmap41_page-0001.jpg)

# ALL e ALL SELECTED

## Introdução

Neste ebook, vamos explorar as principais diferenças e usos das funções `ALL` e `ALL SELECTED` em um contexto de análise de dados. Aprofundaremos nessas duas funções e demonstraremos como elas podem ser utilizadas para realizar cálculos percentuais sobre conjuntos de dados filtrados e não filtrados.

## Capítulo 1: Entendendo a Função ALL

A função `ALL` é uma função poderosa no contexto de análise de dados, visto que permite a remoção de todos os filtros aplicados a um conjunto de dados.

### Subcapítulo 1.1: Aplicação e Limitações da ALL

Ao utilizar a função `ALL`, precisamos estar cientes de que ela ignora completamente os filtros aplicados a uma tabela ou coluna. Essa característica é fundamental quando desejamos calcular valores que não estão condicionados aos filtros aplicados na visualização atual de dados.

## Capítulo 2: A Função ALL SELECTED

Diferentemente da função `ALL`, a função `ALL SELECTED` considera os filtros aplicados externamente ao visual atual.

### Subcapítulo 2.1: Características da ALL SELECTED

A função `ALL SELECTED` mantém os filtros aplicados fora do visual em questão. Isso significa que qualquer filtro aplicado externamente ao visual onde a medida está sendo utilizada será levado em conta ao realizar os cálculos.

## Capítulo 3: Percentual sobre o Total com ALL e ALL SELECTED

### Subcapítulo 3.1: Calculando Percentuais com ALL

Quando calculamos percentuais usando a função `ALL`, podemos acabar com um cenário onde os percentuais não somam 100%, pois os filtros externos são ignorados, e os cálculos são feitos com base em todo o conjunto de dados.

### Subcapítulo 3.2: Trabalhando Percentuais com ALL SELECTED

Ao aplicar a `ALL SELECTED`, é possível calcular um percentual que leva em consideração os filtros aplicados fora do visual. Isso nos permite analisar subconjuntos de dados e ainda assim obter uma soma de percentuais que totaliza 100%.

## Capítulo 4: Casos Práticos de ALL e ALL SELECTED

### Subcapítulo 4.1: Exemplos no Ambiente de Vendas

Podemos citar como exemplo um ambiente de vendas em que desejamos analisar o desempenho de certos produtos. Utilizando as funções `ALL` e `ALL SELECTED`, analisamos diferentes cenários em que produtos são filtrados e como isso impacta os cálculos percentuais.

### Subcapítulo 4.2: Ajustando Medidas e Resultados Esperados

É crucial ajustar corretamente as medidas para que os resultados atendam às expectativas da análise. Com a compreensão das diferenças entre `ALL` e `ALL SELECTED`, podemos adaptar nossas fórmulas para refletir os insights corretos dos dados.

## Conclusão

As funções `ALL` e `ALL SELECTED` são essenciais para qualquer profissional que trabalhe com análise de dados. A compreensão das diferenças e aplicações corretas dessas funções permite uma análise mais detalhada e fidedigna dos dados, resultando em melhores decisões estratégicas baseadas em informação qualificada.

### Próximos Passos

À medida que continuamos nossa jornada no campo da análise de dados, é importante praticar e aplicar esses conceitos em diferentes conjuntos de dados para solidificar nosso entendimento e habilidade em manipular e interpretar informações.

Esperamos que este ebook tenha elucidado os principais pontos envolvendo as funções `ALL` e `ALL SELECTED`, e que você possa aplicá-las com confiança em suas futuras análises de dados.

&nbsp;

&nbsp;

# Percentual sobre subtotais

## Introdução

Este livro foi criado para ajudar você a compreender conceitos avançados de manipulação de dados em ferramentas de Business Intelligence, como o Power BI, usando a linguagem DAX (Data Analysis Expressions). Ao longo do texto, iremos explorar técnicas para avaliar porcentagens, subtotais e manipular contextos de filtragem, o que é essencial para relatórios dinâmicos e informativos.

## Conceitos Básicos do DAX

### Filtragem de Categoria e Produto

Em muitas análises, é crucial compreender como os filtros atuam sobre os dados. Especificamente, manter o filtro de categoria enquanto remove o filtro de produto pode ser necessário para obter a visão desejada. A linguagem DAX oferece funcionalidades que permitem controlar exatamente como os filtros devem ser aplicados a fim de atingir os resultados esperados.

#### Manutenção dos Filtros

Ao manipular filtros em medidas DAX, podemos encontrar valores fixos dentro de uma categoria específica, mantendo o contexto necessário para a análise correta.

#### Construção de Medidas Específicas

Podemos criar medidas que manipulam filtros de uma maneira que revele informações valiosas, como o total de vendas ou a participação percentual de um produto dentro de uma categoria.

### Trabalhando com Subtotais

#### Criação de Nova Medida Percentual

Uma medida de subtotal percentual pode ser criada para mostrar a participação de um produto em relação ao todo. A técnica consiste em dividir a contagem de linhas pelo número de produtos, por categoria.

#### Importância dos Nomes Significativos

Ao criar medidas em DAX, é essencial nomear as medidas de forma descritiva e significativa, para que possam ser facilmente identificadas e compreendidas.

### Testes e Possibilidades

#### Além das Medidas Básicas

É importante testar diferentes cenários e explorar outras possibilidades de análise. Incluir ou excluir determinadas categorias dos eixos visuais pode revelar insights diferentes sobre os dados.

#### Introduzindo Contexto de Categoria na Medida

Para criar uma medida que funcione independentemente da presença da categoria no eixo visual, devemos introduzir o contexto de categoria diretamente na medida. Isso permite que resultados sejam calculados corretamente, mesmo quando o visual não exibe explicitamente a categoria.

## Aprofundando Técnicas de Contexto

### Manipulação de Contexto com Funções DAX

Funções como `ALL` e `VALUES` são extremamente úteis na manipulação do contexto de filtragem. Por exemplo, a função `ALL` pode ser utilizada para remover os filtros de um determinado campo, enquanto `VALUES` pode ser empregada para inserir um contexto que não está presente no visual em questão.

#### Exemplo Prático: Uso da Função `ALL`

Ao aplicar a função `ALL` em uma medida, podemos limpar o contexto de filtragem para um produto específico e calcular o subtotal com base nos itens restantes.

#### Criação de Medidas Abstratas com Contexto

Podemos criar medidas que incluem contextos abstratos como parte de sua definição. Isso resulta em cálculos dinâmicos que refletem a realidade dos dados, mesmo quando os visuais são alterados ou filtrados de maneiras diferentes.

### Combinação de Contextos Diferentes

O verdadeiro poder do DAX é revelado quando aprendemos a combinar diferentes contextos para criar medidas complexas. Isso pode envolver a manipulação de porcentagens sobre totais de subcategorias, rateios de metas e outras operações analíticas avançadas.

## Conclusão

Dominar as técnicas avançadas do DAX nos permite extrair insights mais profundos dos nossos dados e construir relatórios que comunicam informações de forma clara e efetiva. Ao entender como trabalhar com contextos de filtragem e manipular medidas, tornamo-nos capazes de resolver problemas complexos de análise de dados e melhorar a tomada de decisão com base em informações precisas e bem fundamentadas.

> Usamos ALL para tirar e VALUES para devolver

&nbsp;

&nbsp;

# Introdução ao Ajuste de Subtotais em Matrizes Usando a Função "IS IN SCOPE"

## Ajustando Subtotais: Uma Visão Geral

O ajuste de subtotais é essencial em diversas análises de dados, principalmente quando trabalhamos com matrizes complexas. A função "IS IN SCOPE" no Power BI permite um controle refinado sobre como os subtotais são exibidos e calculados, dependendo do nível atual de detalhamento dos dados. Este ebook oferece um passo a passo de como utilizar essa função para aprimorar suas análises.

### O que é a Função "IS IN SCOPE"?

A função "IS IN SCOPE" é utilizada para testar se um determinado campo está atualmente em contexto dentro de uma visualização de matriz no Power BI. Ao realizar análises e apresentar dados em subtotais, é crucial entender o contexto corrente para calcular os valores corretamente.

## Criando Medidas Condicionais

### Definição da Medida

Antes de começar, é importante entender como definir uma medida no Power BI. Uma medida é uma fórmula que é aplicada aos dados do seu modelo para criar novos valores, geralmente agregados e que são diretamente influenciados pelo contexto atual da visualização.

### Utilizando "IS IN SCOPE" para Ajuste Condicional

Quando criamos uma medida condicional utilizando "IS IN SCOPE", estamos especificando que o cálculo deve considerar se estamos no nível de detalhe do nome do produto, por exemplo, ou em um nível mais agregado, como categoria.

#### Estrutura do IF com "IS IN SCOPE"

```DAX
IF(
    IS IN SCOPE('nome do campo'),
    'Cálculo se verdadeiro',
    'Cálculo se falso'
)
```

Essa estrutura básica nos permite definir um comportamento para a medida, dependendo se estamos ou não visualizando os dados em um determinado nível de hierarquia. Isso é crítico para garantir que subtotais e totais sejam apresentados de forma precisa.

## Criando a Nova Medida

### Calculando o Percentual Ajustado

Para calcular o percentual ajustado baseando-se na visibilidade do nome do produto, criaremos uma nova medida no Power BI. Seguiremos o seguinte passo a passo:

```DAX
Percentual Ajustado =
IF(
    IS IN SCOPE('nome do produto'),
    'Cálculo do percentual no nível do produto',
    'Cálculo do percentual no nível agregado'
)
```

### Explicação da Fórmula

O "Cálculo do percentual no nível do produto" seria a fórmula para calcular o percentual especificamente para aquele produto. O "Cálculo do percentual no nível agregado" seria a fórmula para calcular o percentual levando em conta o subtotal da categoria inteira.

## Exemplos Práticos

### Impacto na Visualização dos Dados

O uso correto da função "IS IN SCOPE" tem um impacto significativo na maneira como os dados são apresentados. Ao ajustar uma medida de percentual, por exemplo, podemos garantir que o usuário final entenda claramente se um valor é relativo ao total geral ou se está sendo calculado dentro de uma categoria específica.

## Melhores Práticas e Considerações Finais

### Simplificando a Medida

É importante lembrar que "IS IN SCOPE" já retorna um valor booleano; portanto, não é necessário comparar o resultado da função com "verdadeiro" ou "falso" explicitamente. Usar a função diretamente na estrutura IF é mais eficiente e torna o código mais legível.

### Usabilidade e Compreensão

Ao aplicar esse tipo de técnica em relatórios e painéis, é essencial fornecer explicações e instruções claras aos usuários. Esclarecer como as medidas ajustadas funcionam garantirá que os insights obtidos a partir dos dados sejam interpretados corretamente.

### Conclusão

As matrizes geralmente requerem atenção especial ao tratar de subtotais, pois a precisão dos cálculos afeta toda a análise subsequente. A função "IS IN SCOPE" é um valioso recurso no arsenal de um profissional de dados que utiliza Power BI, permitindo ajustes dinâmicos e precisos que levam em conta o contexto atual dos dados.

Aguardamos você para a próxima aula, onde exploraremos ainda mais recursos do Power BI e como eles podem melhorar suas análises de dados.

> A função ISINSCOPE testa se estamos no contexto da coluna que colocamos na função ou não, independente de filtros externos, depende apenas do contexto, por exemplo, teste = ISINSCOPE(produtos\[nomeProduto\]) <- isso verifica se estamos no contexto de nome do produto.
> 
> ![6deujhNFhz.png](../_resources/6deujhNFhz.png)

![mindmap42_page-0001.jpg](../_resources/mindmap42_page-0001.jpg)

# Rateio de Metas

### Introdução

A análise de metas é uma parte essencial para o sucesso das empresas. A utilização de ferramentas de Business Intelligence (BI) possibilita o entendimento detalhado dos dados e permite a tomada de decisões mais assertivas. Neste ebook, abordaremos como criar e diluir metas, utilizando conceitos e estratégias de BI para otimização dos processos internos.

### O que é a Meta de Rateio?

A meta de rateio consiste em distribuir um valor global de meta por diferentes segmentações, sejam geográficas, por produto ou por categoria, considerando um fator de proporcionalidade para cada segmento.

### Passo a Passo para Criação da Meta de Rateio

#### Etapa 1: Definindo o Fator de Multiplicação

O primeiro passo é criar um fator de multiplicação que representará a proporção de cada segmento em relação ao total.

```DAX
FatorMetaContinente = 
    VAR TotalVendido = SUM( 'Vendas'[Total] )
    VAR Fator = CALCULATE(
                    TotalVendido,
                    ALLEXCEPT( 'Cliente', 'Cliente'[Continente] )
                ) / TotalVendido
    RETURN Fator
```

#### Etapa 2: Repetição do Valor Total

É necessário repetir o valor total da meta para cada segmento, para garantir que a proporção seja devidamente calculada.

#### Etapa 3: Cálculo do Fator de Multiplicação por Segmento

Com o total repetido, aplica-se a regra de três nos dados segmentados para determinar seus respectivos fatores de multiplicação.

```DAX
MetaDiluida = 
    'Vendas'[TotalMeta] * [FatorMetaContinente]
```

#### Etapa 4: Aplicação da Regra de Três

Utiliza-se a regra de três para relacionar a meta total com os fatores obtidos a fim de diluir a meta global em metas segmentadas.

#### Etapa 5: Ajustando as Categorias

Leva-se em consideração não apenas a segmentação geográfica mas também categorias como produto e marca.

```DAX
MetaFinal = 
    VAR TotalMeta = SUM( 'Vendas'[Meta] )
    VAR FatorMetaProduto = CALCULATE(
                                [FatorMetaContinente],
                                ALLEXCEPT( 'Produto', 'Produto'[Categoria] )
                            )
    RETURN TotalMeta * FatorMetaProduto
```

### Dicas Extra: A Importância de Variáveis em DAX

O uso de variáveis em DAX aumenta a legibilidade do código e simplifica a manutenção das fórmulas, tornando a análise muito mais eficiente.

### Conclusão

Espera-se que, ao final deste ebook, o leitor tenha um entendimento claro de como estruturar metas de rateio em um ambiente de BI, utilizando as ferramentas de cálculo e segmentação para diluir responsabilidades de forma proporcional e adequada à realidade de cada segmento da empresa.

&nbsp;

&nbsp;

# Estratégias para Diluir Metas por Dia Útil

## Introdução

Neste e-book, vamos explorar como diluir metas por dia útil de forma eficiente e justa, focando em fatores críticos que incluem dias úteis do mês, vendas totais e metas globais. Este material é indispensável para profissionais que buscam otimizar o atendimento de objetivos de vendas e performance.

## Capítulo 1: Compreendendo as Metas

### Subtópico 1.1: Conceito de Diluição de Metas

Entender o conceito de diluição de metas é fundamental para administração efetiva das vendas. Há diferentes maneiras de diluir as metas, seja por continente, por produto para cliente ou mesmo por dias úteis, como focaremos aqui.

### Subtópico 1.2: Tratamento dos Dias no Contexto Anual

As metas costumam ser estabelecidas no início do ano. O desafio é distribuí-las de forma a refletir a realidade de cada mês e até de cada dia de maneira justa e representativa das possibilidades de vendas.

## Capítulo 2: Análise da Meta Anual

### Subtópico 2.1: Desafios na Distribuição Mensal

Ao se deparar com a distribuição mensal, é comum encontrar obstáculos. A distribuição inicial talvez concentre o valor total no primeiro mês ou, especificamente, no primeiro dia do ano, o que não representa a realidade das vendas.

### Subtópico 2.2: Correções e Ajustes Necessários

É essencial corrigir as distorções usando ferramentas e fórmulas adequadas para redistribuir a meta de forma equitativa - de modo que cada mês reflita sua verdadeira capacidade de contribuir para o atingimento da meta anual.

## Capítulo 3: Métodos de Diluição de Meta

### Subtópico 3.1: Foco em Dias Úteis

A diluição de meta considerando apenas dias úteis é mais justa, pois desconsidera feriados e finais de semana. A criação de uma medida que calcule a quantidade de dias úteis permite ajustes mais precisos na meta.

### Subtópico 3.2: Implementação de Medidas no Power BI

Para realizar esse processo, utilizamos o Power BI e funções como CALCULATE e COUNTROWS, aplicando filtros que nos permitem isolar dias úteis e tratar metas no contexto de dias corridos versus úteis.

## Capítulo 4: Prática com Power BI

### Subtópico 4.1: Construção de Medidas Específicas

Medidas específicas, como quantidade de dias, quantidade de dias do ano e fator meta dia são aplicadas para criar uma visão detalhada e ajustada da meta.

### Subtópico 4.2: Ampliação do Uso de Variáveis

Exploramos como as variáveis são utilizadas para simplificar e refinar as medidas, tornando o processo mais eficiente e as visualizações de dados mais claras.

## Conclusão

Diluir meta por dia útil exige entender os números com profundidade e aplicar a lógica corretamente. A habilidade de adequar metas ao contexto de negócios reais pode ser o diferencial na gestão eficiente da performance de vendas.

É nosso objetivo com este e-book oferecer uma orientação detalhada e prática para diluir metas por dia útil de forma eficaz, maximizando suas chances de sucesso em atingir as metas estabelecidas.

Lembre-se de que cada organização possui suas próprias nuances e que essa metodologia pode sofrer ajustes para atender às necessidades especificas de cada cenário de negócio. Utilize este conhecimento como uma base sólida e adapte-o conforme necessário para alcançar seus objetivos.

```DAX
VAR vMetaFixa =
    CALCULATE(
        [totalMeta],
        ALL(dCalendario),
        VALUES(dCalendario[ano])
    )
```

A fórmula acima é lida da seguinte maneira:  
"Meu totalMeta deve aparecer em todas as linhas da tabela calendario (todos os dias) respeitando os valores do ano"  
![jPJFY9LW1A.png](../_resources/jPJFY9LW1A.png)

&nbsp;

Não resolver problemas de modelagem com medidas DAX. Criar colunas com Lookupvalue ou relações virtuais com TREATAS e etc. "Se X coluna estivesse em X tabela ajudaria meu trabalho..." então jogue a coluna na tabela.

> Para o "contexto de filtro" é muito importante avaliar o contexto;
> 
> Uma mesma formula DAX é avaliada em diferentes contextos. Usamos CALCULATE para brincar com esses filtros e contextos. Contextos de filtros são totalmente dependentes de relacionamentos entre as tabelas, ou seja, precisamos de um bom modelo.
> 
> \\\\se seguirmos o caminho do filtro na aba de dados e de modelo, podemos entender melhor o contexto de filtro. Ou seja, simular como é computado esse filtro em nossos dados e modelo.
> 
> Um filtro aplicado numa dimensão é e deve ser propagado para nossa fato, por meio do relacionamento. Alias, dimensões filtram fatos, elas servem como "óticas" para a fato
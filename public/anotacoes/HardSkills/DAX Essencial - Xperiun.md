---
title: DAX Essencial - Xperiun
updated: 2025-02-14 00:26:19Z
created: 2024-12-23 22:27:48Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

- [A Linguagem DAX e a Importância no Power BI](#a-linguagem-dax-e-a-import%C3%A2ncia-no-power-bi)
    - [Introdução à DAX](#introdu%C3%A7%C3%A3o-%C3%A0-dax)
        - [Comparação com Excel](#compara%C3%A7%C3%A3o-com-excel)
    - [Contexto de Avaliação: O Pilar do DAX](#contexto-de-avalia%C3%A7%C3%A3o-o-pilar-do-dax)
    - [A Função CALCULATE](#a-fun%C3%A7%C3%A3o-calculate)
    - [Funções DAX: Um Guia de Referência](#fun%C3%A7%C3%B5es-dax-um-guia-de-refer%C3%AAncia)
    - [Boas Práticas de Uso da DAX vs Power Query](#boas-pr%C3%A1ticas-de-uso-da-dax-vs-power-query)
    - [DAX ou Power Query: Onde fazer os cálculos?](#dax-ou-power-query-onde-fazer-os-c%C3%A1lculos)
    - [Importância do Aprendizado de DAX](#import%C3%A2ncia-do-aprendizado-de-dax)
    - [Concluindo](#concluindo)
- [Introdução ao Uso da Linguagem DAX no Power BI](#introdu%C3%A7%C3%A3o-ao-uso-da-linguagem-dax-no-power-bi)
    - [Criação de Colunas Calculadas](#cria%C3%A7%C3%A3o-de-colunas-calculadas)
        - [Exemplo de Coluna Calculada Simples](#exemplo-de-coluna-calculada-simples)
        - [Considerações entre Power Query e DAX](#considera%C3%A7%C3%B5es-entre-power-query-e-dax)
    - [Criação de Tabelas Calculadas](#cria%C3%A7%C3%A3o-de-tabelas-calculadas)
        - [Exemplo de Tabela de Calendário](#exemplo-de-tabela-de-calend%C3%A1rio)
    - [Boas Práticas ao Escrever em DAX](#boas-pr%C3%A1ticas-ao-escrever-em-dax)
    - [Conclusão](#conclus%C3%A3o)
- [Criação de Medidas com DAX no Power BI](#cria%C3%A7%C3%A3o-de-medidas-com-dax-no-power-bi)
    - [Introdução](#introdu%C3%A7%C3%A3o)
    - [Boas Práticas com Medidas](#boas-pr%C3%A1ticas-com-medidas)
        - [Preferir Medidas a Colunas](#preferir-medidas-a-colunas)
    - [Criando a Primeira Medida](#criando-a-primeira-medida)
        - [Soma de Quantidade de Itens](#soma-de-quantidade-de-itens)
    - [Criando Medida de Média](#criando-medida-de-m%C3%A9dia)
        - [Média de Quantidade de Itens](#m%C3%A9dia-de-quantidade-de-itens)
    - [Medidas Implícitas vs. Medidas Explícitas](#medidas-impl%C3%ADcitas-vs-medidas-expl%C3%ADcitas)
        - [Por Que Preferir Medidas Explícitas?](#por-que-preferir-medidas-expl%C3%ADcitas)
    - [Conclusão](#conclus%C3%A3o-2)
- [Ebook sobre Funcionalidades de Contagem no Power BI](#ebook-sobre-funcionalidades-de-contagem-no-power-bi)
    - [Contagem e Distint Count](#contagem-e-distint-count)
        - [Função Count Rows](#fun%C3%A7%C3%A3o-count-rows)
        - [Criando Medidas Derivadas](#criando-medidas-derivadas)
        - [Evitando Armadilhas nas Médias](#evitando-armadilhas-nas-m%C3%A9dias)
    - [Organizando Medidas](#organizando-medidas)
    - [Conclusão](#conclus%C3%A3o-3)
- [Manual do Usuário de Funções DAX - ALL e ALLSELECTED](#manual-do-usu%C3%A1rio-de-fun%C3%A7%C3%B5es-dax-all-e-allselected)
    - [Fundamentos das Funções](#fundamentos-das-fun%C3%A7%C3%B5es)
        - [ALL: Ignorando Filtros Aplicados](#all-ignorando-filtros-aplicados)
            - [Compreendendo o ALL](#compreendendo-o-all)
        - [ALLSELECTED: Mantendo Filtros Externos](#allselected-mantendo-filtros-externos)
            - [Entendendo o ALLSELECTED](#entendendo-o-allselected)
        - [Utilizando ALL e ALLSELECTED dentro de CALCULATE](#utilizando-all-e-allselected-dentro-de-calculate)
            - [Exemplos Práticos](#exemplos-pr%C3%A1ticos)
    - [Aplicações Comuns das Funções](#aplica%C3%A7%C3%B5es-comuns-das-fun%C3%A7%C3%B5es)
    - [Considerações Finais](#considera%C3%A7%C3%B5es-finais)
- [Função FILTER e sua utilização no Power BI](#fun%C3%A7%C3%A3o-filter-e-sua-utiliza%C3%A7%C3%A3o-no-power-bi)
    - [Quando usar a função FILTER](#quando-usar-a-fun%C3%A7%C3%A3o-filter)
        - [Filtragem de Medidas](#filtragem-de-medidas)
            - [Exemplo Prático: Filtragem por Valor de Faturamento](#exemplo-pr%C3%A1tico-filtragem-por-valor-de-faturamento)
            - [Implementação com FILTER](#implementa%C3%A7%C3%A3o-com-filter)
        - [Filtragem Com Condicional ou Tabelas Diferentes](#filtragem-com-condicional-ou-tabelas-diferentes)
            - [Exemplo Prático: Análise Condicional Complexa](#exemplo-pr%C3%A1tico-an%C3%A1lise-condicional-complexa)
            - [Implementação utilizando FILTER e SUMMARIZE](#implementa%C3%A7%C3%A3o-utilizando-filter-e-summarize)
    - [Boas Práticas e Dicas](#boas-pr%C3%A1ticas-e-dicas)
        - [Evitar Uso Desnecessário do FILTER](#evitar-uso-desnecess%C3%A1rio-do-filter)
        - [Explicitando a Tabela](#explicitando-a-tabela)
    - [Considerações Finais](#considera%C3%A7%C3%B5es-finais-2)
- [Transição de Contexto em Funções DAX](#transi%C3%A7%C3%A3o-de-contexto-em-fun%C3%A7%C3%B5es-dax)
    - [O Problema do Contexto de Filtro](#o-problema-do-contexto-de-filtro)
        - [Exemplo Prático com SUMX e CALCULATE](#exemplo-pr%C3%A1tico-com-sumx-e-calculate)
    - [A Função CALCULATE](#a-fun%C3%A7%C3%A3o-calculate-2)
        - [Transição de Contexto Simplificada](#transi%C3%A7%C3%A3o-de-contexto-simplificada)
    - [Impacto da CALCULATE em Colunas Calculadas e Medidas](#impacto-da-calculate-em-colunas-calculadas-e-medidas)
        - [Exemplo Demonstrativo](#exemplo-demonstrativo)
    - [Funções Interadoras como SUMX e FILTER](#fun%C3%A7%C3%B5es-interadoras-como-sumx-e-filter)
    - [Importância de Entender a Transição de Contexto](#import%C3%A2ncia-de-entender-a-transi%C3%A7%C3%A3o-de-contexto)
    - [Prática e Domínio do DAX](#pr%C3%A1tica-e-dom%C3%ADnio-do-dax)
- [Inteligência de Tempo e Análise de Variação Mensal em DAX](#intelig%C3%AAncia-de-tempo-e-an%C3%A1lise-de-varia%C3%A7%C3%A3o-mensal-em-dax)
    - [Introdução](#introdu%C3%A7%C3%A3o-2)
    - [Conceitos Básicos](#conceitos-b%C3%A1sicos)
        - [Definindo a Matriz de Dados](#definindo-a-matriz-de-dados)
    - [Variação Mensal (Month-Over-Month)](#varia%C3%A7%C3%A3o-mensal-month-over-month)
        - [Compreendendo a Variação Mensal](#compreendendo-a-varia%C3%A7%C3%A3o-mensal)
        - [Criando Medidas no DAX](#criando-medidas-no-dax)
            - [Faturamento do Mês Anterior (LM)](#faturamento-do-m%C3%AAs-anterior-lm)
            - [Variação Mensal Absoluta e Percentual](#varia%C3%A7%C3%A3o-mensal-absoluta-e-percentual)
    - [Função DATEADD - Flexibilidade no Cálculo Temporal](#fun%C3%A7%C3%A3o-dateadd-flexibilidade-no-c%C3%A1lculo-temporal)
    - [Interpretação dos Resultados](#interpreta%C3%A7%C3%A3o-dos-resultados)
    - [Conclusão](#conclus%C3%A3o-4)
    - [Próximos Passos](#pr%C3%B3ximos-passos)
- [Análise de Variação Anual com Power BI](#an%C3%A1lise-de-varia%C3%A7%C3%A3o-anual-com-power-bi)
    - [Conceito de Variação Anual (YoY)](#conceito-de-varia%C3%A7%C3%A3o-anual-yoy)
    - [Calculando o YoY com Power BI](#calculando-o-yoy-com-power-bi)
        - [Criando a Medida de Faturamento YoY](#criando-a-medida-de-faturamento-yoy)
        - [Precauções e Diferença entre Funções](#precau%C3%A7%C3%B5es-e-diferen%C3%A7a-entre-fun%C3%A7%C3%B5es)
    - [Análise Avançada de Variação](#an%C3%A1lise-avan%C3%A7ada-de-varia%C3%A7%C3%A3o)
        - [Cálculo de Variação Semanal](#c%C3%A1lculo-de-varia%C3%A7%C3%A3o-semanal)
    - [Conclusão e Importância das Funções DAX](#conclus%C3%A3o-e-import%C3%A2ncia-das-fun%C3%A7%C3%B5es-dax)
- [Inteligência de Tempo e Acumulação de Dados no Power BI](#intelig%C3%AAncia-de-tempo-e-acumula%C3%A7%C3%A3o-de-dados-no-power-bi)
    - [Introdução à Inteligência de Tempo](#introdu%C3%A7%C3%A3o-%C3%A0-intelig%C3%AAncia-de-tempo)
    - [O Conceito de Year-to-Date (YTD)](#o-conceito-de-year-to-date-ytd)
        - [Utilização Prática do YTD](#utiliza%C3%A7%C3%A3o-pr%C3%A1tica-do-ytd)
            - [Exemplo de Cálculo YTD](#exemplo-de-c%C3%A1lculo-ytd)
            - [Criando uma Medida YTD](#criando-uma-medida-ytd)
        - [Dinamismo no Cálculo YTD](#dinamismo-no-c%C3%A1lculo-ytd)
    - [A Importância do Contexto no Power BI](#a-import%C3%A2ncia-do-contexto-no-power-bi)
    - [Visualização de Dados YTD](#visualiza%C3%A7%C3%A3o-de-dados-ytd)
        - [Gráficos de Área](#gr%C3%A1ficos-de-%C3%A1rea)
        - [Formatação Condicional](#formata%C3%A7%C3%A3o-condicional)
    - [Conclusão do Módulo](#conclus%C3%A3o-do-m%C3%B3dulo)
- [eBook: Insights Profundos com DAX e Power BI](#ebook-insights-profundos-com-dax-e-power-bi)
    - [Introdução](#introdu%C3%A7%C3%A3o-3)
    - [O Poder da Função CALCULATE](#o-poder-da-fun%C3%A7%C3%A3o-calculate)
        - [Exemplificando com Positivação](#exemplificando-com-positiva%C3%A7%C3%A3o)
        - [Análise Comparativa Mensal](#an%C3%A1lise-comparativa-mensal)
    - [Desmistificando as Funções FILTER, ALL e VALUES](#desmistificando-as-fun%C3%A7%C3%B5es-filter-all-e-values)
        - [FILTER e ALL](#filter-e-all)
        - [A Função VALUES](#a-fun%C3%A7%C3%A3o-values)
        - [A Sutileza de SELECTEDVALUE](#a-sutileza-de-selectedvalue)
    - [Avançado: Análise Raiz com DAX](#avan%C3%A7ado-an%C3%A1lise-raiz-com-dax)
        - [Exemplo de Positivação](#exemplo-de-positiva%C3%A7%C3%A3o)
    - [Conclusão](#conclus%C3%A3o-5)
- [Contextos no Dax](#contextos-no-dax)
    - [Introdução ao Contexto em DAX](#introdu%C3%A7%C3%A3o-ao-contexto-em-dax)
    - [Função CALCULATE()](#fun%C3%A7%C3%A3o-calculate)
    - [Função ALL()](#fun%C3%A7%C3%A3o-all)
    - [Função KEEPFILTERS()](#fun%C3%A7%C3%A3o-keepfilters)
    - [Contexto de Filtro em Relações de Tabelas](#contexto-de-filtro-em-rela%C3%A7%C3%B5es-de-tabelas)
    - [Exemplos Práticos](#exemplos-pr%C3%A1ticos-2)
    - [Considerações Finais](#considera%C3%A7%C3%B5es-finais-3)
- [Análise de Contexto em Power BI](#an%C3%A1lise-de-contexto-em-power-bi)
    - [Introdução](#introdu%C3%A7%C3%A3o-4)
    - [Contextos no Power BI](#contextos-no-power-bi)
        - [Contexto de Filtro](#contexto-de-filtro)
        - [Contexto de Linha](#contexto-de-linha)
        - [Contexto de Cálculo](#contexto-de-c%C3%A1lculo)
    - [Estruturas de Dados na Análise](#estruturas-de-dados-na-an%C3%A1lise)
        - [Tabelas de Dimensão e Fato](#tabelas-de-dimens%C3%A3o-e-fato)
    - [Aplicação de Funções Contextuais](#aplica%C3%A7%C3%A3o-de-fun%C3%A7%C3%B5es-contextuais)
        - [Uso Incorreto de EveryX sem Calculate](#uso-incorreto-de-everyx-sem-calculate)
        - [Uso Correto com Calculate](#uso-correto-com-calculate)
    - [Análise Detalhada de Casos](#an%C3%A1lise-detalhada-de-casos)
        - [Média de Vendas por Cliente no Brasil](#m%C3%A9dia-de-vendas-por-cliente-no-brasil)
        - [Média de Vendas por Cliente nos Estados Unidos](#m%C3%A9dia-de-vendas-por-cliente-nos-estados-unidos)
    - [Considerações Finais](#considera%C3%A7%C3%B5es-finais-4)
- [AddColumns e Summarize](#addcolumns-e-summarize)
    - [Introdução](#introdu%C3%A7%C3%A3o-5)
    - [DAX Studio e Modelagem no Power BI](#dax-studio-e-modelagem-no-power-bi)
        - [Utilização do DAX Studio](#utiliza%C3%A7%C3%A3o-do-dax-studio)
        - [Criação de Medidas Virtuais](#cria%C3%A7%C3%A3o-de-medidas-virtuais)
    - [Construindo Medidas Específicas](#construindo-medidas-espec%C3%ADficas)
        - [Identificação do Cliente Principal](#identifica%C3%A7%C3%A3o-do-cliente-principal)
        - [Variações na Análise](#varia%C3%A7%C3%B5es-na-an%C3%A1lise)
    - [Análise Comparativa por Ano](#an%C3%A1lise-comparativa-por-ano)
        - [Segmentando Análise por Ano](#segmentando-an%C3%A1lise-por-ano)
    - [Considerações Finais](#considera%C3%A7%C3%B5es-finais-5)
- [E-book: Análise de Cesta de Carrinho e Vendas Casadas](#e-book-an%C3%A1lise-de-cesta-de-carrinho-e-vendas-casadas)
    - [Introdução](#introdu%C3%A7%C3%A3o-6)
    - [Análise de Cesta de Carrinho](#an%C3%A1lise-de-cesta-de-carrinho)
        - [Definição de Produto Filtrado](#defini%C3%A7%C3%A3o-de-produto-filtrado)
        - [Criação de Relacionamentos](#cria%C3%A7%C3%A3o-de-relacionamentos)
        - [Medidas e Variáveis](#medidas-e-vari%C3%A1veis)
        - [Lógica de Filtragem](#l%C3%B3gica-de-filtragem)
    - [Insights de Vendas Casadas](#insights-de-vendas-casadas)
        - [Visualização dos Dados](#visualiza%C3%A7%C3%A3o-dos-dados)
    - [Conclusão](#conclus%C3%A3o-6)

# A Linguagem DAX e a Importância no Power BI

O Power BI tem se consolidado como uma ferramenta poderosa para análise de dados, e a linguagem DAX (Data Analysis Expressions) é um dos principais pilares para se realizar cálculos avançados e dinâmicos dentro dessa plataforma. Neste material, vamos desmistificar a linguagem DAX, explicar sua importância e dar dicas de como e quando utilizá-la.

## Introdução à DAX

A DAX é uma linguagem de fórmulas usada no Power BI, no Power Pivot do Excel e nos Serviços de Análise do SQL Server. Ter familiaridade com ela é essencial para quem deseja realizar análises profundas e personalizadas nos seus dados.

### Comparação com Excel

- As funções DAX são semelhantes às do Excel, como SUM, MAX, MIN e COUNT.
- Um diferencial importante da DAX é o manejo de contextos de avaliação, filtro e linha.

## Contexto de Avaliação: O Pilar do DAX

- O contexto de avaliação é um dos conceitos fundamentais para compreender e utilizar a DAX eficientemente.
- Compreender o contexto de filtro é particularmente crítico.

## A Função CALCULATE

- CALCULATE é talvez a função mais poderosa da DAX.
- Permite alterar o contexto de filtro de uma forma controlada para realizar cálculos dinâmicos.

## Funções DAX: Um Guia de Referência

- Não é necessário memorizar todas as funções DAX; focar nas essenciais é mais produtivo.
- [DAX.guide](https://dax.guide/) é um recurso criado por especialistas e oferece uma referência abrangente de funções DAX.

## Boas Práticas de Uso da DAX vs Power Query

- Power Query é indicado para ETL (Extração, Transformação e Carga de dados).
- DAX é destinada à criação de medidas (cálculos) e pode criar colunas e tabelas em casos especiais.
- Priorize correções de modelagem e ETL no Power Query e deixe os cálculos dinâmicos para a DAX.

## DAX ou Power Query: Onde fazer os cálculos?

- Cálculos realizados no Power Query são estáticos e não reagem a filtros subsequentes no Power BI.
- Medidas criadas com DAX são dinâmicas e reagem a mudanças de contexto causadas por filtros.

## Importância do Aprendizado de DAX

- Sem DAX, o usuário pode estar tentando solutions paliativas como exportar dados para o Excel para cálculo e depois importar de volta ao Power BI.
- Tais práticas eliminam o poder dinâmico do Power BI e obrigam o usuário a executar processos manuais repetitivos.

## Concluindo

- O aprendizado da linguagem DAX pode parecer desafiador a princípio, mas é acessível e extremamente valioso para qualquer pessoa que trabalhe com o Power BI.
- DAX permite análises mais complexas e personalizadas, superando as capacidades do Excel e otimizando o uso do Power BI.

# Introdução ao Uso da Linguagem DAX no Power BI

O DAX (Data Analysis Expressions) é uma linguagem de fórmulas avançada para modelagem de dados e criação de métricas complexas no Power BI. Neste ebook, exploraremos como utilizar a linguagem DAX no contexto das análises de dados, com enfoque na criação de colunas e tabelas calculadas, que são essenciais para uma análise de dados mais aprofundada.

## Criação de Colunas Calculadas

Dentro do universo do Power BI, as colunas calculadas são criadas a partir da aplicação de cálculos e funções da linguagem DAX diretamente sobre as colunas existentes dentro do modelo de dados.

### Exemplo de Coluna Calculada Simples

Para ilustrar, vamos supor a criação de uma coluna calculada denominada `Valor Total DAX`, que resulta da multiplicação da quantidade de itens pelo valor unitário.

```dax
Valor Total DAX = TabelaVendas[Qtd] * TabelaVendas[ValorUnitario]
```

Neste exemplo simples, não utilizamos funções específicas do DAX, apenas uma operação aritmética de multiplicação.

### Considerações entre Power Query e DAX

No processo de criação de colunas calculadas, surge a questão de quando utilizar o Power Query ou a linguagem DAX. Se a coluna não envolver agregações, como somatórios ou médias, a recomendação é realizar a operação no Power Query. Agora, quando necessitamos realizar alguma agregação com base em outra tabela ou contexto, o uso do DAX é mais indicado.

## Criação de Tabelas Calculadas

O DAX também permite a criação de tabelas inteiras a partir de fórmulas. Um dos exemplos mais comuns é a criação de uma tabela de calendário.

### Exemplo de Tabela de Calendário

A tabela de calendário é fundamental em qualquer modelo de dados, pois permite realizar análises temporalmente coerentes. No DAX, existe a função `CALENDARAUTO()` que gera automaticamente uma tabela de datas com base nos dados presentes no modelo.

```dax
CalendarioDAX = CALENDARAUTO()
```

É possível personalizar o intervalo de tempo da tabela de calendário usando a função `CALENDAR()`, especificando a data inicial e final desejadas:

```dax
CalendarioDAX = CALENDAR(DATE(2016, 1, 1), DATE(MAX(TabelaVendas[DataEmissao]), 12, 31))
```

Neste exemplo, utilizamos a função `DATE()` para construir as datas inicial e final e a função `MAX()` para determinar a data mais recente presente na tabela de vendas.

## Boas Práticas ao Escrever em DAX

- **Indentações e quebras de linha**: Facilita a leitura e a manutenção do código.
- **Comentários**: Use `//` para adicionar comentários e explicar porções do código.
- **Construção Dinâmica**: Para deixar as fórmulas dinâmicas e adaptáveis a mudanças nos dados, utilize funções que respondem ao contexto, como `MIN()`, `MAX()`, entre outras.
- **Uso de funções de tempo**: Funções como `YEAR()`, `MONTH()` e `FORMAT()` são muito úteis para extrair componentes de datas e criar novas colunas de análise temporal.

## Conclusão

Com este conhecimento fundamental em DAX, estamos aptos a construir soluções analíticas mais complexas e dinâmicas dentro do Power BI. Nos próximos capítulos, vamos focar em medidas, que são o próximo nível de análise de dados com DAX.

# Criação de Medidas com DAX no Power BI

## Introdução

Neste material, você aprenderá a criar e entender a importância de medidas no Power BI utilizando a linguagem DAX. As medidas são fundamentais para melhorar a performance do seu modelo e permitem a reutilização em diferentes visualizações.

## Boas Práticas com Medidas

### Preferir Medidas a Colunas

- **Performance:** Medidas possuem melhor performance se comparadas às colunas, especialmente quanto utilizadas em cálculos.
    
- **Reutilização:** É possível reutilizar medidas em outras fórmulas, facilitando o processo de criação de novos cálculos e análises.
    
- **Nomeação e Agregação:** Medidas permitem que você as crie com nomes específicos e determinem a agregação correta (como média, soma, etc.), sem a necessidade de repetir o processo para diferentes visualizações.
    

## Criando a Primeira Medida

Para demonstrar a criação de uma medida, vamos começar com a soma da quantidade de itens vendidos.

### Soma de Quantidade de Itens

```dax
Quantidade Itens Vendidos = SUM('F Vendas'[Quantidade Itens])
```

Utilizando a função `SUM()`, garantimos que a coluna "Quantidade de Itens" seja somada para criar nossa medida.

## Criando Medida de Média

Semelhantemente à soma, a média é outra função de agregação que pode ser aplicada para entender o comportamento médio dos dados.

### Média de Quantidade de Itens

```dax
Media Quantidade Itens = AVERAGE('F Vendas'[Quantidade Itens])
```

Esta medida calculará a média da coluna "Quantidade de Itens" e poderá ser usada em visualizações para obter insights sobre a média de itens vendidos por transação.

## Medidas Implícitas vs. Medidas Explícitas

É importante distinguir entre medidas implícitas e explícitas. Medidas implícitas são criadas automaticamente quando uma coluna é arrastada para uma visualização, geralmente resultando em uma soma automática. Medidas explícitas são formuladas explicitamente pelo analista, permitindo maior controle e personalização.

### Por Que Preferir Medidas Explícitas?

- **Controle sobre a Agregação:** Você define exatamente como a medida deve ser calculada, evitando interpretações automáticas e imprecisas do Power BI.
    
- **Não ocupam espaço em memória:** Diferentemente das colunas calculadas, medidas só consomem processamento no momento em que são utilizadas em alguma visualização (tempo de execução).
    

## Conclusão

Dominar a criação e utilização de medidas no Power BI é essencial para desenvolver relatórios mais eficientes e precisos. Lembre-se de que as medidas devem ser utilizadas nas visualizações para serem efetivas e somente assim os valores serão computados. Em breve, exploraremos mais sobre contagens, médias e como calcular o tíquete médio corretamente.  
![mindmap28_page-0001.jpg](../_resources/mindmap28_page-0001.jpg)

# Ebook sobre Funcionalidades de Contagem no Power BI

## Contagem e Distint Count

Nessa aula vamos aprender sobre funções de contagem no Power BI, incluindo count, distint count e count rows, que nos ajudam a analisar os dados de diferentes maneiras.

### Função Count Rows

```markdown
Para iniciar, criamos uma medida de faturamento total pela soma da coluna "valor total". Depois, exploramos a função `CountRows`, que conta o número de linhas em uma tabela. Essa função é essencial para entender o volume de transações ou entradas em um conjunto de dados.

```

### Criando Medidas Derivadas

```markdown
Usamos a função `CountRows` para calcular a quantidade de itens vendidos divididos pela quantidade de linhas das vendas. Isso nos dá o cálculo da média de itens por venda. Além disso, essa abordagem nos permite entender melhor a distribuição das vendas.

Ao dividir o faturamento total pelo número de notas emitidas `(Distinct Count)`, conseguimos calcular o ticket médio, que indica o valor médio das vendas. Isso é fundamental para análises financeiras e de desempenho das vendas.

Já a contagem distinta `(Distinct Count)` nos ajuda a identificar o número de notas fiscais únicas, eliminando duplicatas e fornecendo uma contagem precisa de vendas individuais. Isso é crucial para o entendimento de quantas transações de venda efetivamente ocorreram.

Ao comparar o número de linhas de vendas com o número de notas emitidas, podemos calcular a média de produtos diferentes que cada cliente compra. Esse é um indicador-chave de desempenho (KPI) que pode influenciar as estratégias de marketing e vendas.

```

### Evitando Armadilhas nas Médias

```markdown
Por fim, é vital ressaltar a importância de entender o que uma média representa nos dados. Uma média calculada simplesmente dividindo o faturamento pelo número total de linhas pode não representar a realidade das médias por venda, pois pode ser influenciada por outliers ou distribuição irregular dos dados.

Portanto, é essencial realizar cálculos de média que levem em conta o contexto dos dados, como a utilização do ticket médio por nota fiscal, para obter insights mais precisos e acionáveis.

```

## Organizando Medidas

```markdown
Como prática recomendada, organizaremos essas medidas em uma nova tabela, para manter as coisas claras e facilitar a análise. Essa organização também proporciona uma melhor gestão das métricas, permitindo a reutilização das medidas já criadas.

Na próxima aula, vamos criar essa tabela para organizar nossas medidas em uma pasta, garantindo assim uma análise mais estruturada e eficiente.

```

## Conclusão

Ao longo deste ebook, exploramos como as funções de contagem no Power BI, como Count Rows e Distinct Count, são aplicadas em um cenário prático. Aprendemos a importância de cada função e como elas podem ser combinadas para gerar insights mais ricos sobre os dados de vendas. Compreendemos também como evitar erros comuns ao calcular médias e a importância de organizar as medidas para uma análise mais eficiente.

&nbsp;

&nbsp;

# Manual do Usuário de Funções DAX - ALL e ALLSELECTED

Este ebook foi confeccionado com o objetivo de proporcionar um entendimento detalhado sobre duas das funções mais relevantes na linguagem DAX do Power BI: `ALL` e `ALLSELECTED`. Ao longo deste material, você não só aprenderá os conceitos teóricos por trás dessas funções, mas também será capaz de aplicá-los em contextos práticos, ampliando a sua capacidade de análise e manipulação de dados.

## Fundamentos das Funções

### ALL: Ignorando Filtros Aplicados

A função `ALL` é amplamente utilizada para ignorar quaisquer filtros que possam estar aplicados em um dado contexto. É uma função poderosa na construção de medidas dinâmicas, o que aumenta significativamente o poder de análise dos dados.

#### Compreendendo o ALL

```dax
ALL(<Tabela ou Coluna>)
```

Essa função pode ser utilizada de duas maneiras principais:

- **ALL(Tabela):** Quando aplicamos `ALL` a uma tabela inteira, todos os filtros aplicados a qualquer coluna dessa tabela são removidos.
    
- **ALL(Coluna):** Quando especificamos uma única coluna para a função `ALL`, somente os filtros aplicados a essa coluna são ignorados.
    

### ALLSELECTED: Mantendo Filtros Externos

A função `ALLSELECTED`, diferentemente da `ALL`, ignora os filtros aplicados dentro da consulta, mas mantém aqueles que vêm de fora, como segmentações ou filtros aplicados externamente ao visual.

#### Entendendo o ALLSELECTED

```dax
ALLSELECTED(<Tabela ou Coluna>)
```

Esta função é particularmente útil para trabalhar com visuais interativos, onde o usuário pode aplicar filtros externamente, e desejamos calcular valores que considerem esses filtros externos.

### Utilizando ALL e ALLSELECTED dentro de CALCULATE

A função `CALCULATE` permite modificar contextos de filtro em fórmulas DAX. A combinação de `CALCULATE` com `ALL` ou `ALLSELECTED` fornece uma grande versatilidade para a realização de cálculos complexos.

#### Exemplos Práticos

- **Removendo Filtros com ALL**

```dax
CALCULATE(<Expressão>, ALL(<Tabela>))
```

Esta medida recalcula a expressão fornecida, removendo todos os filtros aplicados à tabela especificada.

- **Considerando Filtros Externos com ALLSELECTED**

```dax
CALCULATE(<Expressão>, ALLSELECTED(<Tabela>))
```

Esta medida recalcula a expressão fornecida, mantendo filtros que sejam provenientes de fora do contexto da consulta, como segmentações de dados aplicadas por usuários.

## Aplicações Comuns das Funções

- **Cálculo de Totais Grandes**

Ao analisar dados com muitas dimensões e detalhes, frequentemente precisamos de totais gerais não afetados pelos filtros aplicados. `ALL` é perfeita para isso.

- **Cálculo de Percentuais e Participações**

Quer seja para calcular a participação de vendas de um produto ou o percentual de contribuição de um vendedor, `ALL` e `ALLSELECTED` permitem criar medidas que se ajustam conforme outros filtros são aplicados ou ignorados.

## Considerações Finais

O domínio das funções `ALL` e `ALLSELECTED` é essencial para qualquer profissional que deseja aproveitar ao máximo as funcionalidades oferecidas pelo DAX no Power BI. Através do uso inteligente dessas funções, podemos criar visuais e medidas dinâmicas que trarão insights mais aprofundados para a nossa análise de dados. Portanto, pratique as aplicações dessas funções e explore suas possibilidades para tornar-se um especialista em análise de dados com o Power BI.  
![mindmap29_page-0001.jpg](../_resources/mindmap29_page-0001.jpg)

# Função FILTER e sua utilização no Power BI

A função FILTER é uma ferramenta essencial para quem utiliza o Power BI e deseja realizar filtros complexos em suas medidas. Nesta ebook, exploraremos situações onde a utilização da função FILTER é necessária e como ela pode ser aplicada para gerar relatórios mais precisos e eficientes.

## Quando usar a função FILTER

A função FILTER deve ser utilizada em casos específicos, onde o uso de outros métodos de filtragem diretamente na função CALCULATE não são suficientes ou possíveis.

### Filtragem de Medidas

```plaintext
FILTER é essencial quando precisamos filtrar uma tabela utilizando uma medida. Isso ocorre porque o Power BI não permite o uso de expressões diretamente no filtro da função CALCULATE.
```

#### Exemplo Prático: Filtragem por Valor de Faturamento

Quando desejamos calcular o faturamento apenas de vendedores cujo valor de vendas seja maior que um determinado montante (por exemplo, R$1.000.000), precisamos utilizar a função FILTER.

#### Implementação com FILTER

A aplicação correta envolve o uso da função FILTER para criar uma tabela filtrada a partir da tabela de vendedores, onde a medida de faturamento é avaliada.

```plaintext
O resultado dessa implementação será o valor das vendas dos vendedores que alcançaram o patamar de faturamento estabelecido.
```

### Filtragem Com Condicional ou Tabelas Diferentes

Em situações onde necessitamos aplicar uma condicional que envolva colunas de tabelas diferentes, o uso do FILTER torna-se inevitável.

#### Exemplo Prático: Análise Condicional Complexa

Suponha que queremos calcular o faturamento do ano de 2018 ou de vendas realizadas por uma vendedora específica, como Carla Ferreira.

#### Implementação utilizando FILTER e SUMMARIZE

A abordagem correta para esse cenário envolve a função SUMMARIZE para criar uma nova tabela que agrupa as informações necessárias, e em seguida a aplicação de um FILTER para aplicar a condicional desejada.

```plaintext
Olha só.
O faturamento é ou do ano dois mil e dezoito, ou da Carla Ferreira.
```

## Boas Práticas e Dicas

### Evitar Uso Desnecessário do FILTER

```plaintext
Em situações onde é possível filtrar diretamente na função CALCULATE sem utilizar o FILTER, opte por essa opção. Além de melhorar a performance, torna o código mais limpo e fácil de entender.
```

### Explicitando a Tabela

Ao usar a função FILTER, estamos explicando de maneira clara ao Power BI qual é a tabela pela qual estamos iterando, o que pode prevenir erros e confusões no resultado final do relatório.

## Considerações Finais

O uso da função FILTER pode trazer mais poder e flexibilidade ao trabalhar com medidas no Power BI. Porém, é importante entender suas aplicações corretas e adotar boas práticas que promovam um desempenho eficiente do relatório como um todo.

&nbsp;

&nbsp;

&nbsp;

# Transição de Contexto em Funções DAX

Uma das características mais avançadas e essenciais em DAX é a chamada *transição de contexto*. Este conceito é crucial quando estamos trabalhando com medidas e colunas calculadas, especialmente quando desejamos aplicar filtros ou alterar o contexto de avaliação das nossas fórmulas.

## O Problema do Contexto de Filtro

Quando criamos uma coluna calculada, estamos efetivamente operando em um "nível de tabela", sem um contexto de filtro específico aplicado. Isso pode causar problemas, como o cálculo incorreto de totais por produto ou por vendedor.

### Exemplo Prático com `SUMX` e `CALCULATE`

```text
Suponhamos que desejamos calcular a quantidade total de itens vendidos para cada produto. Sem `CALCULATE`, as fórmulas de coluna calculada podem retornar resultados baseados em todo o conjunto de dados e não por produto.
```

## A Função `CALCULATE`

A `CALCULATE` é uma função essencial em DAX que modifica o contexto de filtro de uma expressão. Em outras palavras, ela pode transformar um contexto de linha (nível de detalhe da linha atual) em um contexto de filtro (capaz de aplicar filtros condicionais ou contextuais).

### Transição de Contexto Simplificada

```text
A função `CALCULATE` permite pegar o contexto de linha vigente e criar um contexto de filtro correspondente que reflita fielmente os critérios desejados.
```

## Impacto da `CALCULATE` em Colunas Calculadas e Medidas

1.  **Colunas Calculadas**: Sem `CALCULATE`, elas não levam em conta o contexto de linha ao calcular totais. O resultado seria o mesmo valor agregado total para cada linha.
2.  **Medidas**: Implicitamente, utilizam `CALCULATE`. O contexto de linha já é considerado e afeta o resultado final corretamente.

### Exemplo Demonstrativo

```text
Imagine que você deseja calcular o faturamento de cada vendedor e identificar quais deles atingiram um milhão em vendas. Utilizar `CALCULATE` para aplicar devidamente os filtros é essencial.
```

## Funções Interadoras como `SUMX` e `FILTER`

Essas funções interam linha a linha e, ao aplicar uma medida, ou seja, uma expressão com `CALCULATE` dentro dessas funções, você estará mudando o contexto de linha para um de filtro, proporcionando resultados precisos.

## Importância de Entender a Transição de Contexto

Conhecer e aplicar corretamente a transição de contexto é fundamental para obter resultados precisos em relatórios e análises. É um conhecimento que surge com prática intensiva e estudo contínuo das nuances de DAX.

## Prática e Domínio do DAX

O domínio completo de DAX leva tempo e prática, além de um estudo aprofundado das suas funções e recursos. Ao longo dos seus projetos, você perceberá que esses detalhes farão toda a diferença na qualidade e precisão dos seus dados.

* * *

Lembrando que este é um apanhado geral dos pontos principais sobre transição de contexto em DAX com um foco em como `CALCULATE` modifica o contexto de cálculo e é um facilitador para obter resultados detalhados e corretos no Power BI.

&nbsp;

&nbsp;

&nbsp;

# Inteligência de Tempo e Análise de Variação Mensal em DAX

## Introdução

Ao analisar dados financeiros e de vendas, é essencial incluir comparações de variações temporais para compreender melhor o desempenho de uma empresa. Neste eBook, exploraremos como utilizar funções de inteligência de tempo no DAX (Data Analysis Expressions) para calcular variações mensais, anuais e acumuladas no ano.

## Conceitos Básicos

Antes de mergulharmos nas funções específicas do DAX, é necessário compreender a estrutura de matrizes e como inserir colunas relevantes, como ano, mês e dia, para criar uma base de dados consistente para nossas análises.

### Definindo a Matriz de Dados

Utilizando a linguagem DAX, criaremos uma matriz onde inserimos colunas de ano e nome do mês, ajustamos texto e tamanho para visualização adequada e preparamos o terreno para os cálculos de faturamento.

## Variação Mensal (Month-Over-Month)

### Compreendendo a Variação Mensal

A variação mensal permite analisar a diferença percentual das vendas ou do faturamento de um mês em relação ao mês anterior. Podemos determinar se houve crescimento ou decréscimo e quantificar essa variação.

### Criando Medidas no DAX

Vamos criar duas medidas importantes: uma para calcular o faturamento do mês anterior (Last Month - LM) e outra para calcular a variação mensal em valores absolutos e percentuais.

#### Faturamento do Mês Anterior (LM)

```dax
FaturamentoLM = CALCULATE([Faturamento], PREVIOUSMONTH('Calendário'[Data]))
```

Ao utilizar a função `PREVIOUSMONTH`, obtemos o total de faturamento do mês anterior, sem levar em consideração o contexto do dia dentro de cada mês.

#### Variação Mensal Absoluta e Percentual

```dax
FaturamentoMOM = [Faturamento] - [FaturamentoLM]
FaturamentoMOMPercentual = DIVIDE([FaturamentoMOM], [FaturamentoLM])
```

Com a variação absoluta e percentual, analisamos a diferença de faturamento em números brutos e em termos percentuais em relação ao mês anterior.

## Função DATEADD - Flexibilidade no Cálculo Temporal

Enquanto a função `PREVIOUSMONTH` calcula com base em um mês inteiro ignorando os dias, a função `DATEADD` é mais flexível, permitindo cálculos que levam em consideração o dia específico.

```dax
FaturamentoLMDateAdd = CALCULATE([Faturamento], DATEADD('Calendário'[Data], -1, MONTH))
```

Utilizando `DATEADD`, podemos realizar cálculos diários, mensais e anuais retroativos ou futuros com facilidade.

## Interpretação dos Resultados

Com essas medidas, podemos interpretar os resultados de variados contextos:

- Contexto Mensal: Avaliar a variação no mês atual em relação ao mês anterior.
- Contexto Diário: Observar a variação de faturamento diário, considerando a comparação com o mesmo dia do mês anterior.

## Conclusão

Ao implementar essas funções do DAX, podemos realizar análises detalhadas de variações mensais, identificar tendências e tomar decisões mais embasadas. No próximo módulo, nos aprofundaremos em avaliações anuais para complementar nossas análises de desempenho.

## Próximos Passos

- Avaliação anual: Agregaremos análises comparativas ano-a-ano para entender as variações anuais.
- Visualização: Aprenderemos a plotar os dados e interpretações em gráficos, usando cores condicionais para destacar o desempenho mensal.

Aguarde o próximo capítulo, onde vamos desvendar as variações anuais e suas aplicações práticas!

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Análise de Variação Anual com Power BI

Neste eBook, exploraremos os fundamentos da análise de variação anual (Year Over Year - YoY) utilizando Power BI, uma ferramenta poderosa de business intelligence. Aprenderemos a calcular variações anuais e mensais, a utilizar medidas e funções DAX para enriquecer os relatórios com análises comparativas.

## Conceito de Variação Anual (YoY)

Variação anual refere-se à comparação dos resultados financeiros ou de qualquer outra métrica entre períodos de doze meses consecutivos. Esse tipo de análise é fundamental para entender a evolução dos negócios e identificar tendências sazonais ou de crescimento.

## Calculando o YoY com Power BI

Para realizar o cálculo de YoY no Power BI, utilizamos a função DAX (Data Analysis Expressions). Esta função nos permite criar medidas calculadas que facilitam a comparação de dados em diferentes períodos de tempo.

### Criando a Medida de Faturamento YoY

```markdown
1. Para iniciar, criamos uma nova medida DAX.
2. Utilizamos a função `CALCULATE` para recalcular o faturamento.
3. Podemos subtrair um ano do período atual para obter o faturamento do ano anterior utilizando a função `DATEADD`.
4. Uma alternativa é a função `SAMEPERIODLASTYEAR`, que também proporciona a comparação com o ano anterior.
```

### Precauções e Diferença entre Funções

Ao trabalhar com funções de tempo no Power BI, é essencial compreender as diferenças e particularidades de cada uma para evitar resultados incorretos. Por exemplo, a função `PREVIOUSYEAR` é semelhante à `PREVIOUSMONTH` e pode não ser ideal para todas as situações.

## Análise Avançada de Variação

Para análises mais avançadas, podemos precisar realizar cálculos que as funções de inteligência de tempo padrão não suportam diretamente, como comparações semanais YoY.

### Cálculo de Variação Semanal

Para calcular uma variação semana a semana, precisamos personalizar a medida utilizando funções como `ALL`, `FILTER`, e `SELECTEDVALUE`.

```markdown
1. Primeiramente, removemos os contextos de filtro com `ALL` para obter um conjunto completo de dados.
2. Combinamos `FILTER` e `SELECTEDVALUE` para criar a condição onde comparamos a semana atual com a semana anterior.
3. Lógica condicional é usada para obter o faturamento da semana em questão.
4. O resultado é uma medida personalizada que compara os valores semanais de faturamento ano a ano.
```

## Conclusão e Importância das Funções DAX

Entender e aplicar corretamente as funções DAX é crucial para a análise yoy no Power BI. Com a prática e revisão adequadas, os usuários podem tirar o máximo proveito dessas funções para criar relatórios detalhados e revele tendências ocultas nos dados.

Este eBook trouxe uma visão geral sobre como executar variações anuais e personalizar cálculos para diferentes necessidades de análise de negócios. Testar e praticar com os dados ao vivo é essencial para dominar estas técnicas.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Inteligência de Tempo e Acumulação de Dados no Power BI

## Introdução à Inteligência de Tempo

Inteligência de tempo é um conceito fundamental para relatórios e análises em ferramentas de Business Intelligence, como o Power BI. Ela possibilita calcular métricas acumuladas ao longo do tempo, como o faturamento ano a ano ou de forma acumulada até o mês atual.

## O Conceito de Year-to-Date (YTD)

Year-to-Date, ou YTD, é um método comum para reportar dados acumulados desde o início do ano até o mês atual. Tal método é essencial para comparar o desempenho do negócio ao longo do tempo.

### Utilização Prática do YTD

#### Exemplo de Cálculo YTD

Para calcular o YTD no Power BI, utilizamos as funções DAX, específicas para a linguagem de modelagem de dados da ferramenta. Um exemplo disso é a função `TOTALYTD`, que soma os valores de um conjunto de dados desde o início do ano até o mês em contexto (cumulativo).

#### Criando uma Medida YTD

Para criar uma medida YTD, a função `CALCULATE` é usada em conjunto com `DATESYTD`. Suponhamos que a medida a ser calculada seja o faturamento YTD:

```dax
Faturamento YTD = CALCULATE(
    SUM(Tabela[Faturamento]),
    DATESYTD(Tabela[Data])
)
```

Neste caso, `Tabela` representa a fonte de dados e `Faturamento` e `Data` são colunas dentro desta tabela.

### Dinamismo no Cálculo YTD

Uma característica crucial do YTD é o seu dinamismo. Por exemplo, se estamos em junho, o YTD calculará o acumulado de janeiro a junho. Quando avançamos para julho, automaticamente, o cálculo passa a considerar o período de janeiro a julho.

## A Importância do Contexto no Power BI

No Power BI, o termo "mês atual" não se refere à data presente, mas ao mês em contexto dentro do modelo de dados. Isso significa:

- Se o relatório está filtrado para mostras o mês de julho, "mês atual" refere-se a julho.
- Esta abordagem permite que o relatório responda dinamicamente às seleções e filtros aplicados.

## Visualização de Dados YTD

### Gráficos de Área

Gráficos de área podem ser efetivos para ilustrar a acumulação de dados ao longo do tempo. Quando aplicado ao YTD, têm-se:

- Uma representação visual clara do crescimento ou declínio acumulado.
- Uma diferenciação clara a cada ano quando o gráfico "recomeça" a acumulação desde o início do novo ano.

### Formatação Condicional

A formatação condicional é uma ferramenta poderosa no Power BI que pode ser aplicada a matrizes e outras visualizações para destacar dados. Exemplos incluem:

- Alteração da cor de fundo das células.
- Uso de barras de dados, ícones ou até URLs.

Essas opções aprimoram a compreensão dos dados e oferecem um aspecto visual atraente ao relatório.

## Conclusão do Módulo

Encerramos o estudo sobre inteligência de tempo com uma análise prática de funções YTD e suas aplicações no Power BI. As funções DAX, juntamente com as capacidades visuais do Power BI, possibilitam uma análise aprofundada e dinâmica ao longo do tempo, essencial para uma tomada de decisão baseada em dados.

A compreensão e habilidade em utilizar esses conceitos se provam valiosos para qualquer profissional que trabalha com análises de dados e relatórios em Business Intelligence.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# eBook: Insights Profundos com DAX e Power BI

## Introdução

Neste eBook, mergulharemos em conceitos avançados de DAX e Power BI para capacitar você a criar soluções inteligentes e ágeis para análise de dados. Ao dominar DAX, você pode transformar dados crus em KPIs poderosos e insights que guiam a tomada de decisões estratégicas nas empresas.

## O Poder da Função CALCULATE

A função CALCULATE é um dos pilares do DAX, permitindo-nos alterar o contexto de cálculos de maneira dinâmica e poderosa.

### Exemplificando com Positivação

A positivação é um exemplo de KPI vital nas empresas. Ele permite ao gestor saber quantos produtos diferentes estão sendo vendidos e identificar oportunidades de venda cruzada. A meta é assegurar que vendedores ofereçam uma gama variada de produtos aos clientes.

```DAX
Positivação = DISTINCTCOUNT('FVendas'[ID_Produto])
```

### Análise Comparativa Mensal

Para entender a performance de venda mensal, é essencial comparar os dados atuais com o mês anterior:

```DAX
Positivação_Mês_Anterior = CALCULATE([Positivação], DATEADD('Calendario'[Data], -1, MONTH))
```

## Desmistificando as Funções FILTER, ALL e VALUES

Usar corretamente as funções FILTER, ALL e VALUES é crucial para filtrar e controlar os dados em análises específicas.

### FILTER e ALL

FILTER permite filtrar uma tabela, e ALL remove filtros do contexto de um cálculo.

```DAX
FILTER(ALL('Calendario'), 'Calendario'[Mes] = SELECTEDVALUE('Calendario'[Mes]) - 1)
```

### A Função VALUES

VALUES é usada para criar uma tabela única de uma coluna com base nos dados do contexto atual.

### A Sutileza de SELECTEDVALUE

SELECTEDVALUE retorna o valor atual de uma coluna se houver um único valor ou um valor alternativo se houver múltiplos.

```DAX
Mes_Atual = SELECTEDVALUE('Calendario'[Mes])
```

## Avançado: Análise Raiz com DAX

Para análises mais profundas, às vezes precisamos combinar diversas funções de maneira complexa para alcançar os insights necessários.

### Exemplo de Positivação

Para calcular a positivação do mês anterior ao atual, usamos uma combinação de CALCULATE, FILTER e SELECTEDVALUE:

```DAX
Positivação_Mês_Anterior_Complexa = 
    CALCULATE([Positivação], 
        FILTER(ALL('Calendario'),
            'Calendario'[Mes] = SELECTEDVALUE('Calendario'[Mes]) - 1
            && 'Calendario'[Ano] = SELECTEDVALUE('Calendario'[Ano])
        )
    )
```

ou

```DAX
Positivação_Mês_Anterior_Complexa = 
    CALCULATE([Positivação], 
        FILTER(ALL('Calendario'),
            'Calendario'[Mes] = SELECTEDVALUE('Calendario'[Mes]) - 1
        ),
        VALUES('Calendario'[Ano])
    )
```

## Conclusão

Dominar DAX abre um universo de possibilidades para análise de dados em Power BI. Com persistência e prática, é possível lidar com as complexidades da linguagem e usá-la para extrair o máximo de inteligência dos dados à sua disposição.

* * *

*Com estudo, prática e foco, a proficiência em DAX está ao alcance de todos os profissionais que buscam tomar decisões melhores com base em dados consistentes e bem analisados.*

&nbsp;

&nbsp;

&nbsp;

# Contextos no Dax

#### Introdução ao Contexto em DAX

O contexto é um conceito fundamental em DAX (Data Analysis Expressions) e desempenha um papel crucial na criação de medidas e cálculos em ferramentas como Power BI. Existem dois tipos principais de contexto em DAX: **contexto de linha** e **contexto de filtro**.

1.  **Contexto de Linha**:
    
    - Surge quando uma medida ou expressão é avaliada em uma linha específica de uma tabela.
    - É automaticamente gerado quando você trabalha com tabelas relacionadas ou quando usa funções como `ROW()`.
2.  **Contexto de Filtro**:
    
    - Refere-se aos filtros aplicados às tabelas ou colunas que afetam o resultado de uma medida.
    - Pode ser modificado usando funções como `CALCULATE()`, `FILTER()`, `ALL()`, e `KEEPFILTERS()`.

#### Função CALCULATE()

A função `CALCULATE()` é uma das mais poderosas em DAX, pois permite modificar o contexto de filtro. Ela é usada para avaliar uma expressão em um contexto modificado por filtros adicionais ou removidos.

- **Sintaxe Básica**:
    
    ```DAX
    CALCULATE(<expressão>, <filtro1>, <filtro2>, ...)
    ```
    
- **Exemplos**:
    
    - **Adicionar Filtros**:
        
        ```DAX
        CALCULATE([Faturamento], 'Data'[Ano] = 2018)
        ```
        
        - Avalia o faturamento apenas para o ano de 2018.
    - **Remover Filtros**:
        
        ```DAX
        CALCULATE([Faturamento], ALL('Produto'))
        ```
        
        - Avalia o faturamento removendo todos os filtros aplicados à tabela 'Produto'.

#### Função ALL()

A função `ALL()` é usada para remover filtros de uma tabela ou coluna, permitindo que a medida considere todos os dados da tabela.

- **Sintaxe**:
    
    ```DAX
    ALL(<tabela> ou <coluna>)
    ```
    
- **Exemplos**:
    
    - **Remover Filtros de Tabela**:
        
        ```DAX
        CALCULATE([Faturamento], ALL('Data'))
        ```
        
        - Avalia o faturamento sem considerar nenhum filtro na tabela 'Data'.
    - **Remover Filtros de Coluna**:
        
        ```DAX
        CALCULATE([Faturamento], ALL('Data'[Ano]))
        ```
        
        - Avalia o faturamento sem considerar o filtro na coluna 'Ano' da tabela 'Data'.

#### Função KEEPFILTERS()

A função `KEEPFILTERS()` permite manter os filtros existentes em um contexto enquanto adiciona novos filtros.

- **Sintaxe**:
    
    ```DAX
    KEEPFILTERS(<expressão>)
    ```
    
- **Exemplo**:
    
    ```DAX
    CALCULATE([Faturamento], KEEPFILTERS('Data'[Ano] = 2018))
    ```
    
    - Avalia o faturamento mantendo os filtros existentes e adicionando o filtro 'Ano' = 2018.

#### Contexto de Filtro em Relações de Tabelas

As relações entre tabelas (como dimensões e tabelas de fatos) afetam como os filtros são propagados. É crucial entender como essas relações funcionam para evitar erros em medidas.

- **Relações 1:N (Um para Muitos)**:
    
    - Filtros são propagados da tabela de dimensão para a tabela de fato.
    - Exemplo: Filtro na tabela 'Produto' afeta a tabela 'Vendas'.
- **Relações N:N (Muitos para Muitos)**:
    
    - Requer tabelas de junção e filtros podem ser mais complexos de gerenciar.

#### Exemplos Práticos

1.  **Cálculo de Faturamento por Produto**:
    
    - **Medida**:
        
        ```DAX
        Faturamento = SUM('Vendas'[Valor Venda])
        ```
        
    - **Visualização**:
        
        - Ao filtrar por 'Produto', o faturamento é calculado apenas para o produto selecionado.
2.  **Cálculo de Faturamento Acumulado**:
    
    - **Medida**:
        
        ```DAX
        Faturamento Acumulado = 
        CALCULATE(
            [Faturamento],
            FILTER(
                'Data',
                'Data'[Data] <= MAX('Data'[Data])
            )
        )
        ```
        
    - **Explicação**:
        
        - Calcula o faturamento acumulado até a data máxima do contexto atual.
3.  **Cálculo de Ranking de Categoria**:
    
    - **Medida**:
        
        ```DAX
        Ranking Categoria = 
        RANKX(
            ALL('Produto'[Categoria]),
            [Faturamento]
        )
        ```
        
    - **Explicação**:
        
        - Calcula o ranking da categoria com base no faturamento.

#### Considerações Finais

- **Importância do Contexto**:
    
    - Entender como o contexto de filtro é aplicado é essencial para criar medidas precisas e eficientes.
- **Melhores Práticas**:
    
    - Sempre testar medidas em diferentes contextos.
    - Utilizar `CALCULATE()` com cuidado para evitar filtros indesejados.
    - Manter relações de tabela claras e bem definidas.
- **Pitfalls**:
    
    - Erros comuns incluem filtros não esperados devido a relações de tabela ou uso incorreto de funções como `ALL()`.
    - Certifique-se de entender o contexto em que suas medidas estão sendo avaliadas.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Análise de Contexto em Power BI

## Introdução

Olá, seja bem-vindo a mais uma aula do nosso curso. Vamos esclarecer todas as dúvidas sobre transição de contexto. Neste ebook, explicaremos, com um guia visual, o uso da função `calculate` e interações entre tabelas em Power BI.

## Contextos no Power BI

O Power BI possui diferentes contextos que podem impactar análises e resultados. Entendê-los é crucial para a elaboração de relatórios precisos.

### Contexto de Filtro

É o contexto mais externo, definindo quais dados estão disponíveis para serem acessados nas visualizações e medidas.

### Contexto de Linha

Durante iterações de fórmulas como `EveryX`, temos o contexto de linha, que trata cada linha individualmente sem considerar filtros anteriores.

### Contexto de Cálculo

Com a função `calculate`, somos capazes de alterar o contexto de linha, transformando-o em um novo contexto de filtro. Isso possibilita a propagação de filtros por relacionamentos entre tabelas.

## Estruturas de Dados na Análise

### Tabelas de Dimensão e Fato

O exemplo prático envolve uma tabela de clientes (dimensão) conectada a uma tabela de vendas (fato), ambas filtradas por país, permitindo análises específicas para cada região.

## Aplicação de Funções Contextuais

### Uso Incorreto de `EveryX` sem `Calculate`

Usar a função `EveryX` diretamente pode levar a um valor incorreto, pois não considera o contexto de filtro corretamente, resultando em uma soma geral e não uma média por cliente.

### Uso Correto com `Calculate`

Incorporar `calculate` em iterações de `EveryX` permite calcular a média correta por cliente, pois cada interação tem um contexto de filtro próprio, respeitando os relacionamentos e aplicando filtros adequados.

## Análise Detalhada de Casos

### Média de Vendas por Cliente no Brasil

A fórmula correta divide a soma total de vendas dos clientes brasileiros pelo número de clientes, fornecendo a média correta de vendas por cliente no Brasil.

### Média de Vendas por Cliente nos Estados Unidos

A mesma metodologia aplicada ao Brasil é utilizada para calcular a média de vendas por cliente nos Estados Unidos, demonstrando a necessidade de usar `calculate` para obter contextos de filtro corretos.

## Considerações Finais

Esperamos que este guia visual tenha esclarecido o funcionamento dos contextos em Power BI e a importância da função `calculate` para análises precisas. Se houver dúvidas, estaremos à disposição para responder.  
![mindmap34_page-0001.jpg](../_resources/mindmap34_page-0001.jpg)

# AddColumns e Summarize

## Introdução

Olá, seja bem-vindo a mais uma aula do nosso curso. Nesta oportunidade, vamos explorar funções avançadas para manipulação de dados e criação de medidas no Power BI, com foco específico em funções como "SUMMARIZE" e "ADDCOLUMNS" e o uso prático do DAX Studio.

## DAX Studio e Modelagem no Power BI

### Utilização do DAX Studio

O DAX Studio é uma ferramenta poderosa que permite executar consultas DAX e entender melhor o desempenho e comportamento de nossas medidas no Power BI. Com ele, podemos conectar-nos ao nosso modelo de dados e executar consultas de forma eficaz.

### Criação de Medidas Virtuais

Em muitos casos, não se faz necessário criar tabelas físicas para gerar insights valiosos. Ao utilizar medidas, podemos criar tabelas virtuais para análises específicas. Essa prática, além de otimizar o desempenho dos nossos dashboards, mantém o modelo de dados enxuto.

## Construindo Medidas Específicas

### Identificação do Cliente Principal

Uma tarefa comum em análise de dados é identificar o cliente que mais comprou em determinado período ou em geral. Podemos usar a função "TOPN" em conjunto com "ADDCOLUMNS" e "SUMMARIZE" para realizar essa operação. O resultado será uma medida que retorna o cliente com o maior volume de compras.

### Variações na Análise

Podemos querer analisar, além do volume monetário, a quantidade de transações por cliente. Para isso, criamos uma medida que conta as vendas e aplicamos a mesma lógica anterior para identificar qual cliente se destaca em quantidade de vendas.

## Análise Comparativa por Ano

### Segmentando Análise por Ano

Muitas vezes, é útil segmentar a análise por períodos, como anos. Assim, podemos ajustar nossas medidas para levar em consideração o ano das transações e determinar o cliente principal de cada ano, tanto em valor quanto em quantidade de vendas.

## Considerações Finais

Ao longo deste ebook, abordamos técnicas avançadas de modelagem e análise de dados utilizando o Power BI. Demonstramos como funções DAX podem ser combinadas para fornecer insights detalhados e como o DAX Studio pode ser utilizado para apoiar o desenvolvimento de medidas complexas. Encerramos com a expectativa de que esses conhecimentos ajudem a enriquecer suas análises e contribuam para uma melhor tomada de decisão nos seus projetos de BI.

&nbsp;

&nbsp;

&nbsp;

# E-book: Análise de Cesta de Carrinho e Vendas Casadas

## Introdução

Seja bem-vindo ao nosso curso sobre análises de vendas e cesta de carrinho. Neste material, você aprenderá a realizar análises detalhadas para entender como produtos diferentes interagem nas vendas, e como essa informação pode ser utilizada para otimizar estratégias de vendas casadas e de ações de marketing direcionadas.

## Análise de Cesta de Carrinho

A análise de cesta de carrinho é uma forma de entender como os produtos são adquiridos juntos pelos clientes. Com essa análise, é possível identificar quais produtos têm uma alta correlação e podem ser oferecidos em conjunto.

### Definição de Produto Filtrado

Antes de prosseguir com a análise, criamos uma tabela auxiliar chamada "Produto Filtrado", que é utilizada para realizar o filtro dos produtos. Essa tabela é uma cópia da tabela de produtos, mas contempla apenas as colunas necessárias para nossa análise, como a categoria do produto, a subcategoria e o nome do produto.

### Criação de Relacionamentos

Os relacionamentos entre a tabela de produto filtrado e a tabela de produto são estabelecidos de maneira que a filtragem afete apenas as medidas específicas criadas para a análise e não a tabela completa de produtos.

### Medidas e Variáveis

Utilizamos a funcionalidade de medidas no Power BI para calcular a quantidade de vezes em que um produto é vendido em conjunto com outro. Para conseguir isso, modificamos o contexto da filtragem usando a função `CALCULATETABLE`, juntamente com `USERELATIONSHIP` para ativar relacionamentos específicos.

### Lógica de Filtragem

Para obrigar o usuário a fazer uma seleção e não mostrar resultados redundantes, implementamos condições que só calculam as vendas casadas quando um produto específico está selecionado e quando ele é diferente do produto atual na linha da tabela.

## Insights de Vendas Casadas

Com a análise de vendas casadas, identificamos quais produtos são frequentemente vendidos juntos. Esta informação é crucial para o desenvolvimento de pacotes de produtos, promoções cruzadas e otimização do layout da loja física ou virtual para incentivar a aquisição de itens complementares.

### Visualização dos Dados

Para melhorar a visualização dos dados, utilizamos barras de dados com formatação condicional que nos permitem ver rapidamente quais produtos têm mais vendas casadas em termos absolutos e proporcionais.

## Conclusão

Através dessas análises, podemos entender melhor o comportamento de compra dos clientes e extrair insights valiosos para a tomada de decisão em marketing e vendas. O uso de ferramentas de BI possibilita a manipulação e análise de grande volume de dados, de forma a identificar padrões que não seriam visíveis de maneira simples.

Esperamos que você tenha absorvido os conhecimentos necessários para realizar suas próprias análises de cesta de carrinho e que utilize essas informações para impulsionar suas estratégias de venda. Caso tenha alguma dúvida ou deseje aprofundar-se em algum tópico, não hesite em nos contatar.

* * *
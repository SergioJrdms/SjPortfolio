---
title: SQL Avançado - Xperiun
updated: 2025-03-03 21:34:09Z
created: 2025-01-16 23:15:03Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

- [Manipulando dados na consulta 👇](#manipulando-dados-na-consulta-point_down)
- [Tratamento de Valores Nulos em Bancos de Dados SQL](#tratamento-de-valores-nulos-em-bancos-de-dados-sql)
    - [Introdução](#introdução)
        - [Valores Nulos vs. Valores Vazios](#valores-nulos-vs-valores-vazios)
    - [Valores Nulos e o SQL](#valores-nulos-e-o-sql)
        - [Exemplo Prático](#exemplo-prático)
    - [Tratando Valores Nulos](#tratando-valores-nulos)
        - [Funções para Tratamento de Nulos](#funções-para-tratamento-de-nulos)
            - [Exemplo de Uso das Funções](#exemplo-de-uso-das-funções)
            - [Utilizando Funções de Tratamento de Nulos](#utilizando-funções-de-tratamento-de-nulos)
        - [Tratamento de Nulos em Filtros (WHERE Clause)](#tratamento-de-nulos-em-filtros-where-clause)
            - [Exemplo de Tratamento na Cláusula WHERE](#exemplo-de-tratamento-na-cláusula-where)
    - [Conclusão](#conclusão)
- [Tratamento de Valores Nulos em SQL](#tratamento-de-valores-nulos-em-sql)
    - [Funções de Tratamento de Valores Nulos](#funções-de-tratamento-de-valores-nulos)
        - [Função COALESCE](#função-coalesce)
        - [Função ISNULL](#função-isnull)
    - [Operadores para Trabalho com Nulos](#operadores-para-trabalho-com-nulos)
        - [Operador IS NULL](#operador-is-null)
            - [Exemplo:](#exemplo)
        - [Operador IS NOT NULL](#operador-is-not-null)
            - [Exemplo:](#exemplo-2)
    - [Aplicação das Funções de Tratamento na Prática](#aplicação-das-funções-de-tratamento-na-prática)
        - [Quando Utilizar Cada Função ou Operador](#quando-utilizar-cada-função-ou-operador)
    - [Dicas Adicionais](#dicas-adicionais)
    - [Conclusão](#conclusão-2)
- [Tratamento de Dados Nulos e Vazios com SQL](#tratamento-de-dados-nulos-e-vazios-com-sql)
    - [Introdução ao Problema dos Valores Nulos e Vazios](#introdução-ao-problema-dos-valores-nulos-e-vazios)
    - [Compreendendo os Valores Nulos e Vazios](#compreendendo-os-valores-nulos-e-vazios)
    - [Tratando Valores Vazios como Nulos](#tratando-valores-vazios-como-nulos)
        - [A Função NULLIF](#a-função-nullif)
    - [Alinhando Funções para Tratar Múltiplos Valores](#alinhando-funções-para-tratar-múltiplos-valores)
    - [Utilizando o Resultado em uma Cláusula WHERE](#utilizando-o-resultado-em-uma-cláusula-where)
    - [Conclusão](#conclusão-3)
- [Manipulação de Dados Numéricos com SQL](#manipulação-de-dados-numéricos-com-sql)
    - [Introdução às Funções de Arredondamento e ABS](#introdução-às-funções-de-arredondamento-e-abs)
    - [Funções de Arredondamento](#funções-de-arredondamento)
        - [A Função CEILING](#a-função-ceiling)
        - [A Função FLOOR](#a-função-floor)
        - [A Função ROUND](#a-função-round)
    - [A Função ABS](#a-função-abs)
    - [Aplicações Práticas](#aplicações-práticas)
    - [Exemplos](#exemplos)
    - [Conclusão](#conclusão-4)
- [Curso de SQL: Manipulando Dados de Data e Hora](#curso-de-sql-manipulando-dados-de-data-e-hora)
    - [Introdução ao Trabalho com Dados Temporais](#introdução-ao-trabalho-com-dados-temporais)
    - [Funções Simples de Data e Hora](#funções-simples-de-data-e-hora)
        - [Extração de Ano, Mês e Dia](#extração-de-ano-mês-e-dia)
        - [Função DATEPART](#função-datepart)
        - [Trabalhando com Datas em Tabelas](#trabalhando-com-datas-em-tabelas)
    - [Ordenação e Filtros Utilizando Dados Temporais](#ordenação-e-filtros-utilizando-dados-temporais)
    - [Conclusão](#conclusão-5)
- [Manipulação de Datas em SQL](#manipulação-de-datas-em-sql)
    - [Extração de Partes de Data](#extração-de-partes-de-data)
        - [YEAR, MONTH e DAY](#year-month-e-day)
        - [DATEPART](#datepart)
    - [Modificação de Datas](#modificação-de-datas)
        - [DATEADD](#dateadd)
            - [Sintaxe](#sintaxe)
        - [DATEDIFF](#datediff)
            - [Sintaxe](#sintaxe-2)
    - [Último Dia do Mês](#último-dia-do-mês)
    - [Aplicando Funções em Conjunto](#aplicando-funções-em-conjunto)
    - [Práticas com Funções de Data](#práticas-com-funções-de-data)
- [Conclusão](#conclusão-6)
- [Manipulação de Dados Textuais em SQL](#manipulação-de-dados-textuais-em-sql)
    - [Tipos de Dados e Suas Manipulações](#tipos-de-dados-e-suas-manipulações)
        - [A Função UPPER](#a-função-upper)
        - [A Função LOWER](#a-função-lower)
        - [A Função REPLACE](#a-função-replace)
    - [Contagem de Caracteres com LEN](#contagem-de-caracteres-com-len)
    - [Práticas Recomendadas](#práticas-recomendadas)
- [A Arte da Manipulação de Texto com SQL](#a-arte-da-manipulação-de-texto-com-sql)
    - [O Básico da Manipulação de Texto](#o-básico-da-manipulação-de-texto)
        - [A Função LEFT](#a-função-left)
        - [A Função RIGHT](#a-função-right)
        - [A Função SUBSTRING](#a-função-substring)
    - [Aplicações Práticas](#aplicações-práticas-2)
        - [Exemplo de Uso das Funções](#exemplo-de-uso-das-funções-2)
    - [Dicas para Eficiência](#dicas-para-eficiência)
- [Manipulando campos de texto (CHARINDEX, TRIM, RTRIM, LTRIM)](#manipulando-campos-de-texto-charindex-trim-rtrim-ltrim)
- [Funções de Agregação em SQL](#funções-de-agregação-em-sql)
    - [Introdução ao SQL e Funções de Agregação](#introdução-ao-sql-e-funções-de-agregação)
        - [Por Que Usar Funções de Agregação](#por-que-usar-funções-de-agregação)
    - [Principais Funções de Agregação](#principais-funções-de-agregação)
        - [A Função SUM](#a-função-sum)
        - [As Funções MIN e MAX](#as-funções-min-e-max)
        - [A Função AVG](#a-função-avg)
        - [A Função COUNT](#a-função-count)
    - [Como Utilizar as Funções de Agregação](#como-utilizar-as-funções-de-agregação)
        - [Agrupando Dados com GROUP BY](#agrupando-dados-com-group-by)
            - [Exemplo:](#exemplo-3)
    - [Importância das Funções de Agregação](#importância-das-funções-de-agregação)
    - [A Prática das Funções de Agregação](#a-prática-das-funções-de-agregação)
    - [Conclusão](#conclusão-7)
- [Comandos Avançados em SQL: Agregação e Filtragem Pós-Agrupamento](#comandos-avançados-em-sql-agregação-e-filtragem-pós-agrupamento)
    - [Introdução à Agregação de Dados](#introdução-à-agregação-de-dados)
    - [O Papel do GROUP BY](#o-papel-do-group-by)
        - [Importância do GROUP BY](#importância-do-group-by)
    - [Filtragem Pós-Agrupamento](#filtragem-pós-agrupamento)
        - [A Restrição do WHERE com Agregação](#a-restrição-do-where-com-agregação)
        - [Utilizando a Cláusula HAVING](#utilizando-a-cláusula-having)
    - [Execução Lógica do Comando SELECT](#execução-lógica-do-comando-select)
    - [Exemplo Prático](#exemplo-prático-2)
        - [SQL de Exemplo](#sql-de-exemplo)
    - [Conclusão](#conclusão-8)
- [Estruturas Condicionais e Calculo de Comissões](#estruturas-condicionais-e-calculo-de-comissões)
    - [Introdução](#introdução-2)
    - [Estruturas Condicionais em SQL](#estruturas-condicionais-em-sql)
        - [Comando CASE WHEN](#comando-case-when)
            - [Estrutura Básica do CASE WHEN](#estrutura-básica-do-case-when)
        - [Exemplo Prático: Cálculo de Comissão](#exemplo-prático-cálculo-de-comissão)
            - [Analisando os Critérios de Comissão](#analisando-os-critérios-de-comissão)
            - [Implementando o Cálculo no SQL](#implementando-o-cálculo-no-sql)
            - [Dicas Adicionais](#dicas-adicionais-2)
    - [Conclusão](#conclusão-9)
- [Introdução às Condicionais em SQL](#introdução-às-condicionais-em-sql)
    - [Cláusula CASE](#cláusula-case)
    - [Função IF](#função-if)
    - [Diferenças entre CASE e IF](#diferenças-entre-case-e-if)
    - [Considerações Finais](#considerações-finais)
    - [Exercícios Práticos](#exercícios-práticos)
- [Conversão de Tipos de Dados em SQL](#conversão-de-tipos-de-dados-em-sql)
    - [Conceitos Básicos de Conversão de Tipos](#conceitos-básicos-de-conversão-de-tipos)
        - [Por Que Converter Tipos de Dados?](#por-que-converter-tipos-de-dados)
    - [Conversões Comuns em SQL](#conversões-comuns-em-sql)
        - [De Inteiro para Texto](#de-inteiro-para-texto)
        - [De DateTime para Date](#de-datetime-para-date)
        - [Arredondamento de Decimais](#arredondamento-de-decimais)
    - [Funções de Conversão em SQL](#funções-de-conversão-em-sql)
        - [CAST](#cast)
        - [CONVERT](#convert)
    - [Exemplos Práticos](#exemplos-práticos)
        - [Exemplo de Conversão de Inteiro para Texto](#exemplo-de-conversão-de-inteiro-para-texto)
        - [Exemplo de Arredondamento e Conversão de Decimais](#exemplo-de-arredondamento-e-conversão-de-decimais)
        - [Exemplo de Conversão de DateTime para Date e Formatação](#exemplo-de-conversão-de-datetime-para-date-e-formatação)
    - [Boas Práticas e Considerações Finais](#boas-práticas-e-considerações-finais)
- [Prevenindo possíveis erros na conversão (TRY_CAST)](#prevenindo-possíveis-erros-na-conversão-try_cast)
    - [Compreendendo a Incompatibilidade de Dados](#compreendendo-a-incompatibilidade-de-dados)
        - [Quando a Conversão não é Possível](#quando-a-conversão-não-é-possível)
    - [A Função TRY_CAST](#a-função-try_cast)
        - [Utilizando TRY_CAST para Evitar Erros](#utilizando-try_cast-para-evitar-erros)
    - [Aplicação Prática de TRY_CAST](#aplicação-prática-de-try_cast)
        - [Exemplo em uma Tabela de Vendas](#exemplo-em-uma-tabela-de-vendas)
        - [Importância da Prevenção de Erros](#importância-da-prevenção-de-erros)
    - [Conclusão](#conclusão-10)
    - [Manipulando dados na consulta ☝️](#manipulando-dados-na-consulta-point_up)
    - [Relacionamento entre tabelas 👇](#relacionamento-entre-tabelas-point_down)
- [Utilização de Comandos e Procedimentos em SQL Server (sp_help)](#utilização-de-comandos-e-procedimentos-em-sql-server-sp_help)
    - [Introdução](#introdução-3)
    - [O Comando sp_help](#o-comando-sp_help)
        - [Objetivo do Comando](#objetivo-do-comando)
        - [Utilidade na Prática](#utilidade-na-prática)
        - [Como Usar o sp_help](#como-usar-o-sp_help)
        - [O que a sp_help Mostra](#o-que-a-sp_help-mostra)
            - [Tabela Inicial](#tabela-inicial)
            - [Relacionamentos](#relacionamentos)
        - [Formas de Acessar o Comando](#formas-de-acessar-o-comando)
        - [Analisando Relacionamentos](#analisando-relacionamentos)
        - [Importância das Foring Keys (Chaves Estrangeiras)](#importância-das-foring-keys-chaves-estrangeiras)
    - [Considerações Finais](#considerações-finais-2)
        - [Aviso Sobre Bancos de Dados Reais](#aviso-sobre-bancos-de-dados-reais)
    - [Próximos Passos](#próximos-passos)
- [Comandos SQL para Inner Joins e a Estrutura de Relacionamentos](#comandos-sql-para-inner-joins-e-a-estrutura-de-relacionamentos)
    - [Relacionamentos do Tipo Inner Join](#relacionamentos-do-tipo-inner-join)
        - [Definição e Utilização Básica de Inner Join](#definição-e-utilização-básica-de-inner-join)
        - [Aliases e Simplificação do Código](#aliases-e-simplificação-do-código)
        - [Inner Join com Múltiplas Tabelas](#inner-join-com-múltiplas-tabelas)
        - [Trabalhando com Funções de Agregação](#trabalhando-com-funções-de-agregação)
    - [Aplicações Práticas de Inner Joins](#aplicações-práticas-de-inner-joins)
        - [Filtrando Dados com Inner Join](#filtrando-dados-com-inner-join)
        - [Ordenando os Resultados](#ordenando-os-resultados)
        - [Agrupando Dados e Usando Cláusulas HAVING](#agrupando-dados-e-usando-cláusulas-having)
    - [Conclusão](#conclusão-11)
- [A Profundidade dos Relacionamentos SQL: Left Join](#a-profundidade-dos-relacionamentos-sql-left-join)
    - [Entendendo o Left Join](#entendendo-o-left-join)
        - [A Dinâmica entre Tabelas](#a-dinâmica-entre-tabelas)
            - [O Comportamento na Prática](#o-comportamento-na-prática)
    - [Impacto na Performance](#impacto-na-performance)
        - [Quando Usar o Left Join](#quando-usar-o-left-join)
        - [Como Identificar a Necessidade do Left Join](#como-identificar-a-necessidade-do-left-join)
    - [O Uso de Coalesce no Contexto do Left Join](#o-uso-de-coalesce-no-contexto-do-left-join)
    - [Relacionamento Cruzado: Join e Left Join](#relacionamento-cruzado-join-e-left-join)
    - [Desafio Proposto](#desafio-proposto)
- [Compreendendo SQL: Right Join e Relacionamentos de Tabelas](#compreendendo-sql-right-join-e-relacionamentos-de-tabelas)
    - [Introdução](#introdução-4)
    - [Entendendo Right Join](#entendendo-right-join)
        - [Definição de Right Join](#definição-de-right-join)
        - [Comparação com Left Join](#comparação-com-left-join)
    - [Aplicações Práticas](#aplicações-práticas-3)
        - [Caso de Uso: Produtos e Vendas](#caso-de-uso-produtos-e-vendas)
            - [Problema Inicial](#problema-inicial)
            - [Solução com Right Join](#solução-com-right-join)
    - [Passo-a-Passo: Executando um Right Join](#passo-a-passo-executando-um-right-join)
    - [Desafio SQL com Right Join](#desafio-sql-com-right-join)
        - [Objetivo do Desafio](#objetivo-do-desafio)
            - [Instruções do Desafio](#instruções-do-desafio)
        - [Expectativa de Resultados](#expectativa-de-resultados)
    - [Conclusão](#conclusão-12)
- [Relacionamentos em Bancos de Dados: INNER JOIN, LEFT JOIN, RIGHT JOIN e FULL JOIN](#relacionamentos-em-bancos-de-dados-inner-join-left-join-right-join-e-full-join)
    - [INNER JOIN](#inner-join)
        - [Exemplo Prático de INNER JOIN](#exemplo-prático-de-inner-join)
    - [LEFT JOIN](#left-join)
        - [Exemplo Prático de LEFT JOIN](#exemplo-prático-de-left-join)
    - [RIGHT JOIN](#right-join)
        - [Exemplo Prático de RIGHT JOIN](#exemplo-prático-de-right-join)
    - [FULL JOIN](#full-join)
        - [Exemplo Prático de FULL JOIN](#exemplo-prático-de-full-join)
    - [Utilização Prática dos Relacionamentos](#utilização-prática-dos-relacionamentos)
    - [Relacionamento entre tabelas ☝️](#relacionamento-entre-tabelas-point_up)
    - [Operadores de conjunto 👇](#operadores-de-conjunto-point_down)
        - [UNION ALL no SQL: O Que é e Como Funciona?](#union-all-no-sql-o-que-é-e-como-funciona)
    - [Sintaxe do UNION ALL](#sintaxe-do-union-all)
        - [Regras importantes:](#regras-importantes)
    - [Exemplo Prático](#exemplo-prático-3)
        - [Suponha que temos duas tabelas:](#suponha-que-temos-duas-tabelas)
            - [vendas_2023](#vendas_2023)
            - [vendas_2024](#vendas_2024)
        - [Consulta SQL com UNION ALL](#consulta-sql-com-union-all)
        - [Resultado:](#resultado)
    - [Diferença entre UNION e UNION ALL](#diferença-entre-union-e-union-all)
        - [Exemplo Comparativo](#exemplo-comparativo)
    - [Quando Usar UNION ALL?](#quando-usar-union-all)
- [SQL: Operando com UNION e UNION ALL](#sql-operando-com-union-e-union-all)
    - [Introdução](#introdução-5)
    - [UNION vs UNION ALL](#union-vs-union-all)
        - [O Operador UNION](#o-operador-union)
            - [A Remoção de Duplicatas](#a-remoção-de-duplicatas)
        - [O Operador UNION ALL](#o-operador-union-all)
            - [Performance e Recursos](#performance-e-recursos)
    - [Quando Usar Cada Operador](#quando-usar-cada-operador)
        - [Vantagens do UNION ALL](#vantagens-do-union-all)
        - [Vantagens do UNION](#vantagens-do-union)
    - [Considerações Finais](#considerações-finais-3)
    - [Conclusão](#conclusão-13)
- [Fundamentos do Operador EXCEPT em SQL](#fundamentos-do-operador-except-em-sql)
    - [Entendendo o Operador EXCEPT](#entendendo-o-operador-except)
        - [Utilização Prática do EXCEPT](#utilização-prática-do-except)
            - [Exemplos de Uso](#exemplos-de-uso)
    - [Comparação com comandos Semelhantes](#comparação-com-comandos-semelhantes)
        - [Distinção entre EXCEPT e DISTINCT](#distinção-entre-except-e-distinct)
        - [Diferenças entre EXCEPT e INTERSECT](#diferenças-entre-except-e-intersect)
    - [Considerações Finais sobre o Operador EXCEPT](#considerações-finais-sobre-o-operador-except)
- [Curso SQL Avançado: Operadores e Uniões de Consultas](#curso-sql-avançado-operadores-e-uniões-de-consultas)
    - [Introdução aos Operadores no SQL](#introdução-aos-operadores-no-sql)
        - [Union All](#union-all)
        - [Union](#union)
    - [Aprofundando nos Operadores](#aprofundando-nos-operadores)
        - [Except](#except)
            - [Quando usar o Except](#quando-usar-o-except)
        - [Intersect](#intersect)
            - [Utilizando o Intersect](#utilizando-o-intersect)
    - [Regras Importantes de Operadores SQL](#regras-importantes-de-operadores-sql)
        - [Consistência de Colunas](#consistência-de-colunas)
        - [Ordem dos Resultados](#ordem-dos-resultados)
    - [Boas Práticas e Dicas](#boas-práticas-e-dicas)
        - [Priorizando o Union All](#priorizando-o-union-all)
        - [Frequência de Uso](#frequência-de-uso)
    - [Conclusão e Próximos Passos](#conclusão-e-próximos-passos)
    - [Operadores de conjunto ☝️](#operadores-de-conjunto-point_up)
    - [Trabalhando com subqueries 👇](#trabalhando-com-subqueries-point_down)
- [Utilizando Subqueries no SQL](#utilizando-subqueries-no-sql)
    - [Introdução às Subqueries](#introdução-às-subqueries)
        - [O que são Subqueries?](#o-que-são-subqueries)
    - [Princípios Básicos das Subqueries](#princípios-básicos-das-subqueries)
        - [Exemplos e Prática](#exemplos-e-prática)
            - [Consulta Inicial](#consulta-inicial)
        - [Refinando a Consulta com Subqueries](#refinando-a-consulta-com-subqueries)
        - [Conclusão e próxima etapa](#conclusão-e-próxima-etapa)
- [Próximos Tópicos](#próximos-tópicos)
- [Relacionando subqueries](#relacionando-subqueries)
    - [Introdução](#introdução-6)
    - [O Que é uma Subquery?](#o-que-é-uma-subquery)
        - [Exemplo de Subquery](#exemplo-de-subquery)
    - [Utilização Prática das Subqueries](#utilização-prática-das-subqueries)
        - [Filtros e Condicionais](#filtros-e-condicionais)
        - [Tratamento de NULLs](#tratamento-de-nulls)
    - [Relacionando Subqueries](#relacionando-subqueries-2)
        - [Relacionamento entre Subqueries](#relacionamento-entre-subqueries)
    - [Conclusão](#conclusão-14)
- [Utilizando subqueries com os operadores IN e NOT IN](#utilizando-subqueries-com-os-operadores-in-e-not-in)
    - [Compreendendo Subqueries Básicos](#compreendendo-subqueries-básicos)
        - [Relacionamento entre Subqueries](#relacionamento-entre-subqueries-2)
            - [Exemplo de Relacionamento entre Tabelas e Subqueries](#exemplo-de-relacionamento-entre-tabelas-e-subqueries)
        - [Filtrando Dados com Subqueries e IN](#filtrando-dados-com-subqueries-e-in)
            - [Filtrando Clientes que Realizaram Compras em 2019](#filtrando-clientes-que-realizaram-compras-em-2019)
        - [Usando NOT IN para Excluir Resultados](#usando-not-in-para-excluir-resultados)
            - [Exemplo de Exclusão de Dados](#exemplo-de-exclusão-de-dados)
    - [Observações Importantes na Utilização de Subqueries](#observações-importantes-na-utilização-de-subqueries)
    - [Conclusão e Próximos Passos](#conclusão-e-próximos-passos-2)
- [Utilizando subqueries com os operadores de comparação](#utilizando-subqueries-com-os-operadores-de-comparação)
    - [Introdução às Subqueries](#introdução-às-subqueries-2)
        - [O que é uma Subquery?](#o-que-é-uma-subquery-2)
    - [Utilizando Subqueries com Operadores IN e NOT IN](#utilizando-subqueries-com-operadores-in-e-not-in)
        - [Diferenças Entre IN e NOT IN](#diferenças-entre-in-e-not-in)
    - [Aplicando Operadores de Comparação com Subqueries](#aplicando-operadores-de-comparação-com-subqueries)
        - [Restrições ao Utilizar Operadores de Comparação](#restrições-ao-utilizar-operadores-de-comparação)
        - [Exemplo Prático: Cliente que Mais Comprou](#exemplo-prático-cliente-que-mais-comprou)
    - [Subqueries Dinâmicas](#subqueries-dinâmicas)
        - [Como Tornar Subqueries Dinâmicas](#como-tornar-subqueries-dinâmicas)
    - [Conclusão](#conclusão-15)
- [Conceitos Avançados de Subqueries em SQL](#conceitos-avançados-de-subqueries-em-sql)
    - [Subqueries: Aprofundando o Conhecimento](#subqueries-aprofundando-o-conhecimento)
        - [O Básico Revisitado](#o-básico-revisitado)
            - [Utilização das Subqueries](#utilização-das-subqueries)
        - [A Importância das Subqueries Avançadas](#a-importância-das-subqueries-avançadas)
    - [O Uso de Joins e Relacionamentos](#o-uso-de-joins-e-relacionamentos)
        - [A Relação com Joins](#a-relação-com-joins)
            - [Relacionamentos Sem Comandos Explícitos](#relacionamentos-sem-comandos-explícitos)
        - [Quando Utilizar Cada Método](#quando-utilizar-cada-método)
    - [Além dos Joins: Exists e Not Exists](#além-dos-joins-exists-e-not-exists)
        - [Integrando Exists em Subqueries](#integrando-exists-em-subqueries)
    - [Dicas para Avançar no Domínio de Subqueries](#dicas-para-avançar-no-domínio-de-subqueries)
        - [Como Estudar os Conceitos Avançados](#como-estudar-os-conceitos-avançados)
        - [Dúvidas e Desafios no Aprendizado](#dúvidas-e-desafios-no-aprendizado)
    - [Conclusão](#conclusão-16)
- [Utilizando os operadores EXISTS e NOT EXISTS e relacionamentos entre subqueries](#utilizando-os-operadores-exists-e-not-exists-e-relacionamentos-entre-subqueries)
    - [Introdução](#introdução-7)
    - [Capítulo 1: Entendendo os Relacionamentos](#capítulo-1-entendendo-os-relacionamentos)
        - [Subseção 1.1: Relacionamentos entre Tabelas](#subseção-11-relacionamentos-entre-tabelas)
        - [Subseção 1.2: A Expressão WHERE nos Relacionamentos](#subseção-12-a-expressão-where-nos-relacionamentos)
    - [Capítulo 2: Subqueries e Seus Usos](#capítulo-2-subqueries-e-seus-usos)
        - [Subseção 2.1: O que são Subqueries?](#subseção-21-o-que-são-subqueries)
        - [Subseção 2.2: Relacionando Subqueries com Query Principal](#subseção-22-relacionando-subqueries-com-query-principal)
    - [Capítulo 3: Operadores EXISTS e NOT EXISTS](#capítulo-3-operadores-exists-e-not-exists)
        - [Subseção 3.1: O Operador EXISTS](#subseção-31-o-operador-exists)
        - [Subseção 3.2: O Operador NOT EXISTS](#subseção-32-o-operador-not-exists)
    - [Capítulo 4: Escrevendo Consultas Eficientes](#capítulo-4-escrevendo-consultas-eficientes)
        - [Subseção 4.1: Diferentes Maneiras de Conhecer o Mesmo Resultado](#subseção-41-diferentes-maneiras-de-conhecer-o-mesmo-resultado)
        - [Subseção 4.2: Tabelas Temporárias e CTEs](#subseção-42-tabelas-temporárias-e-ctes)
    - [Conclusão](#conclusão-17)
    - [Agradecimentos](#agradecimentos)
    - [Trabalhando com subqueries ☝️](#trabalhando-com-subqueries-point_up)
    - [Tabelas temporárias e CTEs 👇](#tabelas-temporárias-e-ctes-point_down)
- [Introdução ao SQL: Tabelas Temporárias e CTEs](#introdução-ao-sql-tabelas-temporárias-e-ctes)
    - [Tabelas Temporárias: O Que São e Para Que Servem](#tabelas-temporárias-o-que-são-e-para-que-servem)
        - [O Conceito de Tabelas Temporárias](#o-conceito-de-tabelas-temporárias)
            - [Tabelas Temporárias Locais](#tabelas-temporárias-locais)
            - [Tabelas Temporárias Globais](#tabelas-temporárias-globais)
        - [Aplicações Práticas das Tabelas Temporárias](#aplicações-práticas-das-tabelas-temporárias)
        - [Limitações e Considerações](#limitações-e-considerações)
    - [Utilização e Manipulação de Tabelas Temporárias](#utilização-e-manipulação-de-tabelas-temporárias)
        - [Criação de Tabelas Temporárias](#criação-de-tabelas-temporárias)
        - [Gerenciamento de Contexto e SPID](#gerenciamento-de-contexto-e-spid)
        - [Operações Comuns com Tabelas Temporárias](#operações-comuns-com-tabelas-temporárias)
    - [Conclusão e Próximos Passos](#conclusão-e-próximos-passos-3)
- [Criação e Utilização de Tabelas Temporárias em Bancos de Dados](#criação-e-utilização-de-tabelas-temporárias-em-bancos-de-dados)
    - [Introdução](#introdução-8)
    - [Criação de Tabelas Temporárias](#criação-de-tabelas-temporárias-2)
        - [Comando CREATE TABLE](#comando-create-table)
        - [Convertendo uma Tabela Física em Temporária](#convertendo-uma-tabela-física-em-temporária)
        - [Tabelas Temporárias Locais e Globais](#tabelas-temporárias-locais-e-globais)
    - [Estrutura e Tipos de Dados](#estrutura-e-tipos-de-dados)
    - [Criação Automática de Tabelas Temporárias](#criação-automática-de-tabelas-temporárias)
    - [Utilização das Tabelas Temporárias](#utilização-das-tabelas-temporárias)
    - [Cenários de Uso](#cenários-de-uso)
    - [Boas Práticas](#boas-práticas)
    - [Considerações Finais](#considerações-finais-4)
- [Trabalhando com tabelas temporárias (parte 1)](#trabalhando-com-tabelas-temporárias-parte-1)
    - [Introdução às Tabelas Temporárias](#introdução-às-tabelas-temporárias)
    - [Utilização Prática de Tabelas Temporárias](#utilização-prática-de-tabelas-temporárias)
        - [Recuperação de Totais a Pagar e Valores Pagos](#recuperação-de-totais-a-pagar-e-valores-pagos)
        - [Recuperação de Totais a Receber e Valores Recebidos](#recuperação-de-totais-a-receber-e-valores-recebidos)
        - [Recuperação de Vendas por Ano e Mês](#recuperação-de-vendas-por-ano-e-mês)
    - [Conclusão e Próximos Passos](#conclusão-e-próximos-passos-4)
- [Trabalhando com tabelas temporárias (parte 2)](#trabalhando-com-tabelas-temporárias-parte-2)
    - [Introdução](#introdução-9)
    - [Utilidade das Tabelas Temporárias](#utilidade-das-tabelas-temporárias)
        - [Vantagens das Tabelas Temporárias](#vantagens-das-tabelas-temporárias)
    - [Criação e Uso de Tabelas Temporárias](#criação-e-uso-de-tabelas-temporárias)
        - [Exemplo de Criação de Tabela Temporária](#exemplo-de-criação-de-tabela-temporária)
    - [Relacionamento e Joins](#relacionamento-e-joins)
        - [Relacionando Tabelas Temporárias](#relacionando-tabelas-temporárias)
    - [Caso Prático](#caso-prático)
        - [Processo de Execução](#processo-de-execução)
    - [Conclusão](#conclusão-18)
- [Apagando tabelas de forma inteligente](#apagando-tabelas-de-forma-inteligente)
    - [Introdução às Tabelas Temporárias](#introdução-às-tabelas-temporárias-2)
        - [Criação e Uso das Tabelas Temporárias](#criação-e-uso-das-tabelas-temporárias)
            - [O Desafio das Reexecuções](#o-desafio-das-reexecuções)
        - [Manipulação de Tabelas Temporárias](#manipulação-de-tabelas-temporárias)
    - [Estratégia Inteligente: Verificar Antes de Excluir](#estratégia-inteligente-verificar-antes-de-excluir)
        - [Verificação da Existência da Tabela](#verificação-da-existência-da-tabela)
        - [Simplificando a Estrutura Condicional](#simplificando-a-estrutura-condicional)
        - [Utilização em Procedimentos Complexos](#utilização-em-procedimentos-complexos)
    - [Recomendações Finais e Precauções](#recomendações-finais-e-precauções)
    - [Conclusão](#conclusão-19)
- [Introdução ao Uso de Common Table Expressions (CTE) no SQL](#introdução-ao-uso-de-common-table-expressions-cte-no-sql)
    - [O que é CTE (Common Table Expressions)](#o-que-é-cte-common-table-expressions)
    - [Utilidade das CTEs](#utilidade-das-ctes)
    - [Como criar uma CTE](#como-criar-uma-cte)
    - [Exemplos Práticos no SQL](#exemplos-práticos-no-sql)
        - [Exemplo 1: CTE para Estoque de Produtos](#exemplo-1-cte-para-estoque-de-produtos)
        - [Exemplo 2: CTE para Produtos Vendidos](#exemplo-2-cte-para-produtos-vendidos)
        - [Uso Conjunto das CTEs Criadas](#uso-conjunto-das-ctes-criadas)
    - [Considerações Importantes sobre CTE](#considerações-importantes-sobre-cte)
    - [Conclusão](#conclusão-20)
- [Especificando colunas para uma CTE](#especificando-colunas-para-uma-cte)
    - [Introdução](#introdução-10)
    - [Conceitos Básicos das CTEs](#conceitos-básicos-das-ctes)
        - [Criação Simples de CTE](#criação-simples-de-cte)
        - [CTEs com Campos Especificados](#ctes-com-campos-especificados)
    - [Utilizando CTEs em Consultas](#utilizando-ctes-em-consultas)
        - [Execução e Escopo de CTEs](#execução-e-escopo-de-ctes)
        - [Exemplo de Consulta com CTE](#exemplo-de-consulta-com-cte)
    - [Diferenças entre CTEs, Tabelas Temporárias e Subqueries](#diferenças-entre-ctes-tabelas-temporárias-e-subqueries)
        - [CTEs versus Tabelas Temporárias](#ctes-versus-tabelas-temporárias)
        - [CTEs versus Subqueries](#ctes-versus-subqueries)
    - [Melhores Práticas](#melhores-práticas)
- [Principais diferenças entre CTE's e temporárias](#principais-diferenças-entre-ctes-e-temporárias)
    - [Introdução](#introdução-11)
        - [Objetivos de Aprendizado](#objetivos-de-aprendizado)
    - [Tabelas Temporárias](#tabelas-temporárias)
        - [Conceitos Básicos](#conceitos-básicos)
        - [Limitações e Aplicações](#limitações-e-aplicações)
    - [Common Table Expressions (CTEs)](#common-table-expressions-ctes)
        - [CTEs e Flexibilidade](#ctes-e-flexibilidade)
        - [Performance e Testes](#performance-e-testes)
    - [Subqueries](#subqueries)
        - [Utilização de Subqueries](#utilização-de-subqueries)
        - [Performance e Considerações](#performance-e-considerações)
    - [Estratégias e Análise de Caso](#estratégias-e-análise-de-caso)
        - [Análise de Caso por Caso](#análise-de-caso-por-caso)
    - [Tabelas temporárias e CTEs ☝️](#tabelas-temporárias-e-ctes-point_up)
    - [Variáveis 👇](#variáveis-point_down)
- [Conceitos Básicos Sobre Variáveis no SQL](#conceitos-básicos-sobre-variáveis-no-sql)
    - [Introdução às Variáveis](#introdução-às-variáveis)
        - [O que é uma Variável?](#o-que-é-uma-variável)
        - [Declarando Variáveis no SQL](#declarando-variáveis-no-sql)
        - [Nomenclatura Sugerida](#nomenclatura-sugerida)
        - [Tipagem de Variáveis](#tipagem-de-variáveis)
    - [Manipulação de Variáveis](#manipulação-de-variáveis)
        - [Atribuindo Valores](#atribuindo-valores)
        - [Mudança de Valor das Variáveis](#mudança-de-valor-das-variáveis)
    - [Uso Prático de Variáveis](#uso-prático-de-variáveis)
        - [Filtragem Utilizando Variáveis](#filtragem-utilizando-variáveis)
        - [Sumarização com Variáveis](#sumarização-com-variáveis)
    - [Conclusão](#conclusão-21)
- [Sobre a Utilização de Variáveis em Comandos SQL](#sobre-a-utilização-de-variáveis-em-comandos-sql)
    - [Introdução](#introdução-12)
    - [Declaração de Variáveis](#declaração-de-variáveis)
        - [O que são Variáveis](#o-que-são-variáveis)
        - [Declarando Variáveis em SQL](#declarando-variáveis-em-sql)
    - [Atribuição de Valores às Variáveis](#atribuição-de-valores-às-variáveis)
        - [Utilização de Variáveis em Consultas](#utilização-de-variáveis-em-consultas)
    - [Manutenção e Boas Práticas](#manutenção-e-boas-práticas)
        - [Mantendo Variáveis no Início do Código](#mantendo-variáveis-no-início-do-código)
        - [Simplificando a Declaração de Variáveis](#simplificando-a-declaração-de-variáveis)
    - [Operações com Variáveis](#operações-com-variáveis)
        - [Realizando Operações Aritméticas](#realizando-operações-aritméticas)
        - [Exibindo Valores de Variáveis em Resultados](#exibindo-valores-de-variáveis-em-resultados)
    - [Conclusão](#conclusão-22)
- [SQL e Variáveis: Atribuindo Valores Dinâmicos](#sql-e-variáveis-atribuindo-valores-dinâmicos)
    - [Declaração e Atribuição de Variáveis](#declaração-e-atribuição-de-variáveis)
    - [Utilizando SELECT para Definir Valor de Variáveis](#utilizando-select-para-definir-valor-de-variáveis)
        - [Terceira Forma: Uso de SET com SELECT](#terceira-forma-uso-de-set-com-select)
        - [Quarta Forma: Atribuição Direta com SELECT](#quarta-forma-atribuição-direta-com-select)
    - [Aplicação Prática das Variáveis](#aplicação-prática-das-variáveis)
        - [Exemplo de Consulta Utilizando Variáveis](#exemplo-de-consulta-utilizando-variáveis)
        - [Importância da Prática](#importância-da-prática)
    - [Conclusão](#conclusão-23)
- [Criando e utilizando varáveis do tipo TABLE](#criando-e-utilizando-varáveis-do-tipo-table)
    - [Introdução](#introdução-13)
    - [Variáveis Convencionais](#variáveis-convencionais)
        - [Declaração e Atribuição](#declaração-e-atribuição)
    - [Variáveis do Tipo Table](#variáveis-do-tipo-table)
        - [Definição de Variáveis do Tipo Table](#definição-de-variáveis-do-tipo-table)
        - [Populando Variáveis do Tipo Table](#populando-variáveis-do-tipo-table)
        - [Utilizando Variáveis do Tipo Table](#utilizando-variáveis-do-tipo-table)
    - [Considerações Finais](#considerações-finais-5)
    - [Conclusão](#conclusão-24)
    - [Variáveis ☝️](#variáveis-point_up)
    - [Manipulando dados 👇](#manipulando-dados-point_down)
- [SQL e Manipulação de Dados para Inserção em Massa](#sql-e-manipulação-de-dados-para-inserção-em-massa)
    - [Introdução ao SQL e Comandos de Seleção](#introdução-ao-sql-e-comandos-de-seleção)
        - [O Comando SELECT](#o-comando-select)
    - [Inserção de Dados a Partir de Seleções](#inserção-de-dados-a-partir-de-seleções)
        - [Exemplo de Inserção em Massa](#exemplo-de-inserção-em-massa)
            - [Estrutura da Inserção em Massa](#estrutura-da-inserção-em-massa)
    - [Controle de Transações](#controle-de-transações)
        - [Começando uma Transação](#começando-uma-transação)
        - [Finalizando uma Transação com Sucesso](#finalizando-uma-transação-com-sucesso)
        - [Desfazendo uma Transação](#desfazendo-uma-transação)
    - [Utilizando Variáveis em Inserts](#utilizando-variáveis-em-inserts)
    - [Conclusão](#conclusão-25)
- [UPDATE - Atualizando registros com instrução SELECT](#update-atualizando-registros-com-instrução-select)
    - [Introdução](#introdução-14)
    - [Atualização de Dados Simples](#atualização-de-dados-simples)
        - [Comando UPDATE](#comando-update)
        - [Atualizando Uma Linha](#atualizando-uma-linha)
    - [Atualização de Dados em Massa](#atualização-de-dados-em-massa)
        - [Joins e Subconsultas](#joins-e-subconsultas)
        - [Exemplo de UPDATE com JOIN](#exemplo-de-update-com-join)
        - [Considerações na Atualização](#considerações-na-atualização)
    - [Conclusão](#conclusão-26)
- [DELETE - Apagando registros com instruções SELECT](#delete-apagando-registros-com-instruções-select)
    - [Introdução](#introdução-15)
    - [Delete de Registros](#delete-de-registros)
        - [A importância do comando DELETE](#a-importância-do-comando-delete)
        - [Antes de deletar: consultar os dados](#antes-de-deletar-consultar-os-dados)
            - [Exemplo prático](#exemplo-prático-4)
                - [Montando a consulta](#montando-a-consulta)
                - [Analisando a consulta](#analisando-a-consulta)
        - [Executando a exclusão](#executando-a-exclusão)
            - [Comandos DELETE disponíveis](#comandos-delete-disponíveis)
                - [Opção 1: DELETE com SELECT](#opção-1-delete-com-select)
                - [Opção 2: DELETE com condicional direta](#opção-2-delete-com-condicional-direta)
            - [Recomendações](#recomendações)
    - [Fechamento](#fechamento)
        - [O que vem a seguir?](#o-que-vem-a-seguir)
- [Comando Merge em SQL](#comando-merge-em-sql)
    - [Introdução ao Comando Merge em SQL](#introdução-ao-comando-merge-em-sql)
        - [O que é o Comando Merge e Sua Finalidade](#o-que-é-o-comando-merge-e-sua-finalidade)
        - [Diferenças entre Insert, Update e Delete](#diferenças-entre-insert-update-e-delete)
    - [Sintaxe e Estrutura do Comando Merge](#sintaxe-e-estrutura-do-comando-merge)
        - [Início do Comando Merge](#início-do-comando-merge)
        - [Definição da Fonte de Dados](#definição-da-fonte-de-dados)
        - [Estabelecendo a Condição de Relacionamento](#estabelecendo-a-condição-de-relacionamento)
        - [Executando Operações Baseadas nas Condições](#executando-operações-baseadas-nas-condições)
            - [Quando os Dados Coincidem](#quando-os-dados-coincidem)
            - [Quando os Dados Não Coincidem no Destino](#quando-os-dados-não-coincidem-no-destino)
            - [Quando os Dados Não Coincidem na Fonte](#quando-os-dados-não-coincidem-na-fonte)
        - [Finalizando o Comando Merge](#finalizando-o-comando-merge)
    - [Exemplo Prático de Utilização do Comando Merge](#exemplo-prático-de-utilização-do-comando-merge)
- [Comando Merge em SQL](#comando-merge-em-sql-2)
    - [Introdução ao Comando Merge em SQL](#introdução-ao-comando-merge-em-sql-2)
        - [O que é o Comando Merge e Sua Finalidade](#o-que-é-o-comando-merge-e-sua-finalidade-2)
        - [Diferenças entre Insert, Update e Delete](#diferenças-entre-insert-update-e-delete-2)
    - [Sintaxe e Estrutura do Comando Merge](#sintaxe-e-estrutura-do-comando-merge-2)
        - [Início do Comando Merge](#início-do-comando-merge-2)
        - [Definição da Fonte de Dados](#definição-da-fonte-de-dados-2)
        - [Estabelecendo a Condição de Relacionamento](#estabelecendo-a-condição-de-relacionamento-2)
        - [Executando Operações Baseadas nas Condições](#executando-operações-baseadas-nas-condições-2)
            - [Quando os Dados Coincidem](#quando-os-dados-coincidem-2)
            - [Quando os Dados Não Coincidem no Destino](#quando-os-dados-não-coincidem-no-destino-2)
            - [Quando os Dados Não Coincidem na Fonte](#quando-os-dados-não-coincidem-na-fonte-2)
        - [Finalizando o Comando Merge](#finalizando-o-comando-merge-2)
    - [Exemplo Prático de Utilização do Comando Merge](#exemplo-prático-de-utilização-do-comando-merge-2)
- [Criando rotina com INSERT, UPDATE e DELETE - Parte 1](#criando-rotina-com-insert-update-e-delete-parte-1)
    - [Introdução](#introdução-16)
    - [O Cenário de Merge](#o-cenário-de-merge)
        - [A Tabela de Entidades](#a-tabela-de-entidades)
    - [Sincronizando as Tabelas](#sincronizando-as-tabelas)
        - [Estratégias de Sincronização](#estratégias-de-sincronização)
    - [Utilizando Comandos SQL](#utilizando-comandos-sql)
    - [Comandos SQL Avançados](#comandos-sql-avançados)
    - [Exemplo Prático de Sincronização](#exemplo-prático-de-sincronização)
    - [Conclusão](#conclusão-27)
- [Crianto rotina com MERGE](#crianto-rotina-com-merge)
    - [Capítulo 1: Introdução ao SQL e Sincronização de Dados](#capítulo-1-introdução-ao-sql-e-sincronização-de-dados)
        - [1.1 O que é SQL?](#11-o-que-é-sql)
        - [1.2 Por que a Sincronização é Importante?](#12-por-que-a-sincronização-é-importante)
    - [Capítulo 2: Comandos Básicos de Sincronização](#capítulo-2-comandos-básicos-de-sincronização)
        - [2.1 Insert](#21-insert)
        - [2.2 Update](#22-update)
        - [2.3 Delete](#23-delete)
    - [Capítulo 3: O Comando Merge](#capítulo-3-o-comando-merge)
        - [3.1 Quando Utilizar o Comando Merge?](#31-quando-utilizar-o-comando-merge)
        - [3.2 Sintaxe Básica do Merge](#32-sintaxe-básica-do-merge)
        - [3.3 Prática com o Comando Merge](#33-prática-com-o-comando-merge)
    - [Capítulo 4: Exemplo Prático com Tabela de Entidades e Pessoas Físicas](#capítulo-4-exemplo-prático-com-tabela-de-entidades-e-pessoas-físicas)
        - [4.1 Preparação das Tabelas](#41-preparação-das-tabelas)
        - [4.2 Executando o Merge](#42-executando-o-merge)
        - [4.3 Resultados Esperados](#43-resultados-esperados)
    - [Capítulo 5: Considerações Finais e Práticas Recomendadas](#capítulo-5-considerações-finais-e-práticas-recomendadas)
    - [Manipulando dados ☝️](#manipulando-dados-point_up)
    - [Funções, Procedures e Views 👇](#funções-procedures-e-views-point_down)
- [Introdução às Funções em SQL](#introdução-às-funções-em-sql)
    - [O que são funções?](#o-que-são-funções)
        - [Características das funções](#características-das-funções)
            - [Exemplo de função sem parâmetros:](#exemplo-de-função-sem-parâmetros)
            - [Exemplo de função com parâmetros:](#exemplo-de-função-com-parâmetros)
    - [Tipos de Funções em SQL](#tipos-de-funções-em-sql)
        - [Funções de Tabela](#funções-de-tabela)
        - [Funções de Agregação](#funções-de-agregação)
        - [Funções do Sistema](#funções-do-sistema)
        - [Funções Escalares](#funções-escalares)
    - [Funções Escalares](#funções-escalares-2)
        - [Uso Prático das Funções Escalares](#uso-prático-das-funções-escalares)
    - [Explorando Funções no SQL Server](#explorando-funções-no-sql-server)
        - [Tipos de Funções no Sistema](#tipos-de-funções-no-sistema)
    - [Conclusão](#conclusão-28)
- [Criando a primeira função p02](#criando-a-primeira-função-p02)
- [Criação de Funções Escalares em SQL](#criação-de-funções-escalares-em-sql)
    - [Introdução às Funções Escalares](#introdução-às-funções-escalares)
        - [Exemplo: Diferenciação de Pessoa Física e Pessoa Jurídica](#exemplo-diferenciação-de-pessoa-física-e-pessoa-jurídica)
        - [Análise da Inscrição Federal](#análise-da-inscrição-federal)
            - [Tratamento da Inscrição](#tratamento-da-inscrição)
        - [Construção da Lógica em SQL](#construção-da-lógica-em-sql)
    - [A Função Escalar fn_tipo_inscricao](#a-função-escalar-fn_tipo_inscricao)
        - [Criação da Função](#criação-da-função)
        - [Utilização da Função](#utilização-da-função)
    - [Conclusão](#conclusão-29)
- [Um pouco mais sobre funções](#um-pouco-mais-sobre-funções)
    - [Criação de Funções](#criação-de-funções)
        - [Funções Simples](#funções-simples)
        - [Utilização de Tabelas em Funções](#utilização-de-tabelas-em-funções)
            - [Exemplo Prático](#exemplo-prático-5)
        - [Performance e Alternativas](#performance-e-alternativas)
    - [Máscaras de Formatação com Funções](#máscaras-de-formatação-com-funções)
        - [Exemplo de Função para Máscara de CPF](#exemplo-de-função-para-máscara-de-cpf)
    - [Recomendações Finais](#recomendações-finais)
- [Procedimentos Armazenados em SQL](#procedimentos-armazenados-em-sql)
    - [Introdução aos Procedimentos Armazenados](#introdução-aos-procedimentos-armazenados)
    - [O que são Procedimentos Armazenados](#o-que-são-procedimentos-armazenados)
        - [Utilidades dos Procedimentos](#utilidades-dos-procedimentos)
    - [Comparação com Funções](#comparação-com-funções)
        - [Procedimentos x Funções](#procedimentos-x-funções)
    - [Prática com Procedimentos Armazenados](#prática-com-procedimentos-armazenados)
        - [Implementando Procedimentos](#implementando-procedimentos)
    - [Importância no Data Warehouse](#importância-no-data-warehouse)
    - [Conclusão](#conclusão-30)
- [Criando procedures com retorno](#criando-procedures-com-retorno)
    - [Fundamentos de Bancos de Dados](#fundamentos-de-bancos-de-dados)
        - [O que são Dimensões e Tabelas Fato?](#o-que-são-dimensões-e-tabelas-fato)
    - [Construção de Dimensão de Clientes](#construção-de-dimensão-de-clientes)
        - [Automatizando com Stored Procedures](#automatizando-com-stored-procedures)
            - [Exemplo: Stored Procedure para Consulta de Clientes](#exemplo-stored-procedure-para-consulta-de-clientes)
    - [Filtragem e Relacionamentos](#filtragem-e-relacionamentos)
        - [Selecionando Informações Específicas](#selecionando-informações-específicas)
            - [Ajustes na Procedure para Filtros Específicos](#ajustes-na-procedure-para-filtros-específicos)
    - [Conclusão](#conclusão-31)
- [Criando procedures sem retorno](#criando-procedures-sem-retorno)
    - [Introdução](#introdução-17)
    - [Procedimentos Armazenados](#procedimentos-armazenados)
        - [O que são Procedimentos Armazenados?](#o-que-são-procedimentos-armazenados-2)
        - [Vantagens dos Procedimentos Armazenados](#vantagens-dos-procedimentos-armazenados)
        - [Criação de Procedimentos Armazenados](#criação-de-procedimentos-armazenados)
        - [Procedimentos Com e Sem Retorno](#procedimentos-com-e-sem-retorno)
        - [Exemplo de Procedimento Para Atualização de Tabelas](#exemplo-de-procedimento-para-atualização-de-tabelas)
    - [Executando Procedimentos Armazenados](#executando-procedimentos-armazenados)
- [Entendendo Views em SQL](#entendendo-views-em-sql)
    - [Introdução](#introdução-18)
    - [O que são Views?](#o-que-são-views)
        - [Características das Views](#características-das-views)
    - [Criação de Views](#criação-de-views)
        - [Exemplo Prático](#exemplo-prático-6)
    - [Utilização de Views](#utilização-de-views)
        - [Exemplos](#exemplos-2)
        - [Boas Práticas ao Utilizar Views](#boas-práticas-ao-utilizar-views)
    - [Vantagens das Views](#vantagens-das-views)
    - [Conclusão](#conclusão-32)
    - [Funções, Procedures e Views☝️](#funções-procedures-e-viewspoint_up)

* * *

&nbsp;

> ## Manipulando dados na consulta 👇

# Tratamento de Valores Nulos em Bancos de Dados SQL

## Introdução

No contexto de bancos de dados, é fundamental entender a diferença entre valores nulos e vazios. Valores nulos representam a ausência de qualquer valor, enquanto valores vazios são valores presentes, mas sem conteúdo preenchido.

### Valores Nulos vs. Valores Vazios

- **Valor Nulo:** representa a ausência de valor.
- **Valor Vazio:** representa um valor existente, mas sem conteúdo.

## Valores Nulos e o SQL

No SQL, valores nulos não podem ser comparados diretamente, pois representam a falta de informação. Isso pode afetar o resultado das consultas, especialmente em colunas que permitem nulos.

### Exemplo Prático

Considere a coluna `município` de uma tabela de endereços com alguns valores nulos. Ao tentar realizar comparações ou filtros diretamente nesta coluna, o SQL não retorna as linhas com valores nulos.

## Tratando Valores Nulos

Para tratarmos de valores nulos e incorporá-los corretamente em relatórios e dashboards, precisamos utilizar funções específicas que manipulem esses valores de maneira adequada.

### Funções para Tratamento de Nulos

- **ISNULL():** função do SQL Server usada para tratar valores nulos, mas não é um padrão ANSI, portanto não é encontrada em outros SGBDs.
- **COALESCE:** função padrão ANSI que pode ser usada para tratar valores nulos em qualquer SGBD relacionais que utilizam a linguagem SQL.

#### Exemplo de Uso das Funções

```sql
SELECT ISNULL(coluna, 'sem complemento') FROM endereco;
```

O código acima trata os valores nulos na coluna `complemento` da tabela `endereco`, substituindo-os por 'sem complemento'.

#### Utilizando Funções de Tratamento de Nulos

As funções de tratamento de nulos permitem substituir valores nulos na consulta SQL, sem alterar os dados físicos na tabela. Elas são especialmente úteis em relatórios onde você deseja mostrar uma informação padrão ao invés de um valor nulo.

### Tratamento de Nulos em Filtros (WHERE Clause)

Quando precisamos incluir linhas com valores nulos em nossos resultados de consulta, mas com filtros específicos, podemos usar as mesmas funções dentro da cláusula WHERE, atribuindo um valor temporário para realizar a comparação.

#### Exemplo de Tratamento na Cláusula WHERE

```sql
SELECT * FROM endereco
WHERE COALESCE(coluna, -1) = -1;
```

O código seleciona todos os endereços onde a coluna `coluna` for nula, tratando os nulos como -1.

## Conclusão

O tratamento de valores nulos é uma técnica essencial para garantir a integridade das informações apresentadas em relatórios e dashboards. Ao manipular esses valores nulos, conseguimos apresentar dados de forma mais limpa e compreensível para os usuários finais.

* * *

# Tratamento de Valores Nulos em SQL

O tratamento de valores nulos em bancos de dados SQL é uma tarefa frequente para garantir a integridade e qualidade dos dados. Neste ebook, vamos explorar algumas das principais funções e operadores utilizados no SQL para lidar com valores nulos.

* * *

## Funções de Tratamento de Valores Nulos

### Função COALESCE

COALESCE é uma função que permite substituir valores nulos por um valor padrão definido. Ela aceita múltiplos argumentos e retorna o primeiro valor não nulo da lista de argumentos.

### Função ISNULL

ISNULL é uma função que substitui valores nulos em uma coluna específica por um valor padrão. Diferentemente do COALESCE, a função ISNULL aceita apenas dois argumentos: o campo a ser verificado e o valor a ser retornado caso seja nulo.

* * *

## Operadores para Trabalho com Nulos

### Operador IS NULL

Quando queremos identificar valores nulos em uma consulta SQL, utilizamos o operador 'IS NULL'. Este operador é aplicado na condição WHERE para filtrar registros que contêm valores nulos em uma coluna específica.

#### Exemplo:

```sql
SELECT * FROM tabela WHERE coluna IS NULL;
```

### Operador IS NOT NULL

Para encontrar valores que não são nulos em uma coluna, utilizamos o operador 'IS NOT NULL'.

#### Exemplo:

```sql
SELECT * FROM tabela WHERE coluna IS NOT NULL;
```

Esses operadores são essenciais em consultas SQL para garantir que as condições de filtro sejam corretamente aplicadas aos dados nulos.

* * *

## Aplicação das Funções de Tratamento na Prática

Ao aplicar a função COALESCE ou ISNULL no resultado do SELECT, podemos tratar visualmente a exibição dos dados nulos, substituindo-os por um valor que faça sentido para o contexto. Além disso, podemos usar o mesmo princípio no filtro das consultas para recuperar ou excluir os valores nulos conforme necessário.

### Quando Utilizar Cada Função ou Operador

Os operadores 'IS NULL' e 'IS NOT NULL' são recomendados para uso nos filtros (na cláusula WHERE) das consultas, enquanto as funções COALESCE e ISNULL são mais utilizadas quando precisamos tratar os dados no momento da exibição (no SELECT), trocando nulos por valores definidos.

* * *

## Dicas Adicionais

- As funções e operadores aqui abordados servem para qualquer tipo de dados, seja ele numérico ou textual.
- É importante diferenciar funções de operadores, a função ISNULL é diferente do operador IS NULL (com espaço).
- Usar as funções e operadores corretos não apenas torna o código mais legível, mas também demonstra domínio da linguagem SQL.

## Conclusão

O tratamento de valores nulos é uma parte fundamental da manipulação de dados em SQL. Ao entender e aplicar corretamente as funções COALESCE, ISNULL e os operadores 'IS NULL' e 'IS NOT NULL', garantimos a eficiência e a acurácia das nossas consultas.

Na próxima seção, continuaremos explorando outras funções e técnicas para enriquecer ainda mais nossas consultas SQL e melhorar o nosso entendimento sobre o tratamento de valores nulos.

Um grande abraço e até a próxima aula.

* * *

&nbsp;

&nbsp;

# Tratamento de Dados Nulos e Vazios com SQL

## Introdução ao Problema dos Valores Nulos e Vazios

Na manipulação de dados temos frequentemente a tarefa de lidar com a presença de valores nulos e vazios dentro dos conjuntos de dados. Nas últimas aulas, nós discutimos como abordar os valores nulos, e nesta aula, iremos focar não apenas nos nulos mas também nos valores vazios que, embora diferentes, podem ser tratados de maneira semelhante em certos contextos.

## Compreendendo os Valores Nulos e Vazios

Antes de mergulharmos nas técnicas de tratamento, é essencial diferenciar os conceitos de "nulo" e "vazio":

- **Nulo (NULL)**: Representa a ausência de valor ou um valor desconhecido em uma coluna.
- **Vazio ("")**: É uma string sem caracteres, portanto, contém um valor, mas ele é vazio.

## Tratando Valores Vazios como Nulos

Em algumas situações, podemos querer considerar os campos vazios como se fossem valores nulos. Para fazer isso em SQL, utilizamos a função `NULLIF`.

### A Função `NULLIF`

A função `NULLIF` é utilizada para transformar um valor específico de uma coluna em nulo. Sua sintaxe é composta por dois parâmetros:

- Primeiro Parâmetro: A coluna a ser analisada.
- Segundo Parâmetro: O valor que, se encontrado, será transformado em nulo.

A expressão `NULLIF(column, value)` retorna nulo quando o valor na coluna especificada é igual ao valor fornecido.

**Exemplo de Uso**:

```sql
SELECT NULLIF(complemento, '') AS complemento_nulo
FROM endereco;
```

No exemplo acima, estamos instruindo o SQL a transformar os campos vazios na coluna `complemento` em nulos.

## Alinhando Funções para Tratar Múltiplos Valores

Para casos onde desejamos considerar múltiplos valores como nulos, podemos alinhar a função `NULLIF`.

**Exemplo de Alinhamento de Funções**:

```sql
SELECT NULLIF(NULLIF(complemento, ''), 'valor_especifico') AS complemento_nulo
FROM endereco;
```

No SQL acima, estamos aninhando uma função `NULLIF` dentro de outra, o que significa que ela primeiro irá tratar os valores vazios e depois irá tratar o 'valor_especifico' como nulo se ele estiver presente na coluna `complemento`.

## Utilizando o Resultado em uma Cláusula WHERE

O resultado da função `NULLIF` pode ser utilizado para filtrar dados em uma consulta, utilizando as funções `IS NULL` ou `IS NOT NULL`.

**Filtrando Valores Nulos**:

```sql
SELECT *
FROM endereco
WHERE NULLIF(complemento, '') IS NULL;
```

**Filtrando Valores Não Nulos**:

```sql
SELECT *
FROM endereco
WHERE NULLIF(complemento, '') IS NOT NULL;
```

## Conclusão

Entender o tratamento de dados nulos e vazios é crucial em qualquer manipulação de banco de dados. Nesta aula, vimos que podemos considerar valores vazios como nulos e utilizar funções embutidas do SQL para manipular esses valores de acordo com nossas necessidades. A função `NULLIF` se revela como uma ferramenta poderosa para criar consultas mais precisas e obter resultados de acordo com os critérios desejados. Com estas técnicas, você está agora mais preparado para lidar com dados nulos e vazios em suas consultas SQL.

* * *

&nbsp;

&nbsp;

# Manipulação de Dados Numéricos com SQL

## Introdução às Funções de Arredondamento e ABS

Bem-vindos a mais uma aula onde aprenderemos sobre a manipulação de dados numéricos utilizando as instruções `SELECT`. Ao longo da aula, exploraremos funções que atuam sobre colunas de tipo numérico e dados específicos deste tipo.

## Funções de Arredondamento

As funções de arredondamento são essenciais no tratamento de dados numéricos, principalmente quando desejamos simplificar valores decimais para facilitar análises e apresentações dos dados.

### A Função `CEILING`

- A função `CEILING` (ou `CEIL`) é utilizada para arredondar valores sempre para cima.
- Sintaxe: `CEILING(coluna)`.

### A Função `FLOOR`

- A função `FLOOR` serve para arredondar valores para baixo, independentemente da casa decimal.
- Sintaxe: `FLOOR(coluna)`.

### A Função `ROUND`

- Já a função `ROUND` é mais flexível e permite um arredondamento condizente com regras matemáticas padrão.
- Sintaxe: `ROUND(coluna, número de casas decimais)`.
- A função `ROUND` considera o arredondamento para cima de valores terminados em 5, 6, 7, 8 e 9, enquanto valores terminados em 1, 2, 3 e 4 são arredondados para baixo.

## A Função `ABS`

- A função `ABS` retorna o valor absoluto de um número, ou seja, o valor positivo correspondente de um número negativo.
- Sintaxe: `ABS(coluna)`.

## Aplicações Práticas

Estas funções podem ser aplicadas tanto diretamente na seleção de dados quanto em funções de filtros (`WHERE`). Também é possível aninhar funções para atingir resultados mais complexos.

## Exemplos

A seguir temos vários exemplos de uso destas funções:

```sql
SELECT CEILING(venda_bruta) AS 'CEILING'
FROM vendas_analiticas;

SELECT FLOOR(venda_bruta) AS 'FLOOR'
FROM vendas_analiticas;

SELECT ROUND(venda_bruta, 0) AS 'ROUND_0', ROUND(venda_bruta, 1) AS 'ROUND_1'
FROM vendas_analiticas;

SELECT ABS(venda_bruta) AS 'ABS'
FROM vendas_analiticas;
```

## Conclusão

O conhecimento destas funções é fundamental para quem trabalha com banco de dados SQL, pois permite uma melhor manipulação e entendimento sobre os dados numéricos, sobretudo quando estamos preparando informações para relatórios, dashboards ou simplesmente melhorando a qualidade dos dados para análises futuras.

Na próxima aula retornaremos com mais conteúdo sobre SQL e um desafio prático para sedimentar o conhecimento adquirido.

* * *

&nbsp;

# Curso de SQL: Manipulando Dados de Data e Hora

## Introdução ao Trabalho com Dados Temporais

SQL é uma linguagem robusta que oferece diversas formas de manipular dados temporais, como datas e horas. Compreender essas funcionalidades é essencial para realizar consultas precisas e obter insights valiosos a partir de conjuntos de dados temporais.

## Funções Simples de Data e Hora

### Extração de Ano, Mês e Dia

Para extrair partes específicas de uma data, como o ano, mês ou dia, SQL fornece algumas funções simples e intuitivas, que são:

- `YEAR`: Retorna o ano de uma data.
- `MONTH`: Retorna o mês de uma data.
- `DAY`: Retorna o dia de uma data.

Estas funções aceitam um único argumento: um campo de data ou datetime.

```sql
SELECT YEAR(GETDATE()) AS AnoAtual,
       MONTH(GETDATE()) AS MesAtual,
       DAY(GETDATE()) AS DiaAtual
```

### Função DATEPART

A função `DATEPART` oferece mais flexibilidade ao trabalhar com dados temporais. Com ela, pode-se extrair diferentes componentes de uma data e hora, como a hora, minuto, segundo, dia da semana e dia do ano.

```sql
-- Retornar o ano atual
SELECT DATEPART(year, GETDATE()) AS AnoAtual
-- Retornar a hora atual
SELECT DATEPART(hour, GETDATE()) AS HoraAtual
-- Retornar o dia da semana 
SELECT DATEPART(weekday, GETDATE()) AS DiaDaSemana
```

### Trabalhando com Datas em Tabelas

Da mesma forma que operamos com funções temporais em valores isolados, podemos aplicar essas funções em colunas de tabelas que armazenam dados temporais.

```sql
-- Exemplo de seleção de ano de cadastro de clientes
SELECT NomeCliente,
       YEAR(DataCadastro) AS AnoCadastro
FROM Cliente
-- Para outros componentes de data, substitua a função YEAR conforme necessário.
```

## Ordenação e Filtros Utilizando Dados Temporais

Ao trabalhar com consultas SQL, frequentemente precisamos ordenar ou filtrar resultados baseados em componentes temporais. Essas tarefas podem ser realizadas utilizando as funções mencionadas acima.

```sql
-- Ordenar clientes por ano de cadastro
SELECT NomeCliente,
       YEAR(DataCadastro) AS AnoCadastro
FROM Cliente
ORDER BY AnoCadastro

-- Filtrar clientes cadastrados em uma sexta-feira
SELECT NomeCliente,
       DATEPART(weekday, DataCadastro) AS DiaDaSemanaCadastro
FROM Cliente
WHERE DATEPART(weekday, DataCadastro) = 6 -- Considerando que 6 seja sexta-feira
```

## Conclusão

Nesta breve introdução, exploramos algumas das funcionalidades que SQL oferece para trabalhar com dados temporais. No próximo capítulo, abordaremos funcionalidades avançadas, incluindo `DATEADD` e `DATEDIFF` para operações matemáticas com datas e horas.

* * *

Pronto para aplicar essas funções no seu dia a dia SQL? Mantenha-se atualizado nos próximos capítulos para aprofundar seu conhecimento e dominar totalmente o trabalho com datas e horas no SQL.

* * *

&nbsp;

# Manipulação de Datas em SQL

A manipulação de datas é um aspecto crucial no gerenciamento de bancos de dados SQL. Vamos mergulhar em funções essenciais que facilitam a extração, modificação e comparação de datas e horários.

## Extração de Partes de Data

As funções `YEAR`, `MONTH`, `DAY` e `DATEPART` permitem extrair componentes específicos de campos de data e hora.

### YEAR, MONTH e DAY

- A função `YEAR(data)` retorna o ano do campo data.
- A função `MONTH(data)` retorna o mês.
- A função `DAY(data)` retorna o dia.

### DATEPART

A função `DATEPART` oferece uma abrangência maior, podendo retornar:

- Ano
- Mês
- Dia
- Quadrimestre
- Dias do ano
- Dia da semana
- Semana
- Hora
- Minutos
- Segundos

Uso: `DATEPART(intervalo, data)`  
Onde `intervalo` pode ser `year`, `month`, `day`, etc.

## Modificação de Datas

### DATEADD

A função `DATEADD` adiciona ou subtrai um intervalo de uma data.

#### Sintaxe

```sql
DATEADD(intervalo, quantidade, data)
```

- `intervalo`: Tipo de intervalo a modificar (`year`, `month`, `day`, etc.).
- `quantidade`: Valor a adicionar ou subtrair (positivo adiciona, negativo subtrai).
- `data`: Campo de data/hora a ser modificado.

Exemplos:

- Adicionar um mês à data atual: `DATEADD(month, 1, GETDATE())`
- Subtrair 15 dias: `DATEADD(day, -15, GETDATE())`

### DATEDIFF

A função `DATEDIFF` calcula a diferença entre duas datas.

#### Sintaxe

```sql
DATEDIFF(intervalo, data_inicial, data_final)
```

- Calcula a diferença entre `data_inicial` e `data_final` em `intervalo`.

Exemplos:

- Diferença em anos: `DATEDIFF(year, data_cadastro, GETDATE())`
- Diferença em meses: `DATEDIFF(month, data_inicial, data_final)`

## Último Dia do Mês

A função `EOMONTH(data)` retorna o último dia do mês para uma data específica.

Exemplo de uso: Determinar o último dia para análise de competência ou cálculos de metas.

## Aplicando Funções em Conjunto

É possível alinhar funções para atender a necessidades específicas, como concatenar o resultado da `DATEDIFF` com a palavra "anos" ou extrair o dia do último dia do mês usando `DAY(EOMONTH(data))`.

```sql
SELECT CONCAT(DATEDIFF(year, data_cadastro, GETDATE()), ' anos') AS Tempo_de_Cadastro
```

## Práticas com Funções de Data

Utilizando essas funções, podemos criar consultas para analisar, por exemplo:

- Tempo de cadastro de um cliente.
- Prazo dado em dias para pagamento de um título.
- Projeções e metas de vendas baseadas em períodos do mês.

Efetivamente, tais funções permitem transformar e analisar dados de forma poderosa e adequada às demandas de negócios.

# Conclusão

Manipulação de datas em SQL é extensa e vital. As funções abordadas permitem uma administração detalhada de informações temporais essenciais para qualquer tipo de análise ou relatório em bancos de dados. Aprender a utilizá-las de maneira eficiente pode trazer insights valiosos e melhorar significativamente o processo decisório.

Até a próxima aula!

* * *

&nbsp;

# Manipulação de Dados Textuais em SQL

Bem-vindo ao ebook sobre manipulação de dados em SQL. Aqui, você aprenderá técnicas essenciais para lidar com dados textuais usando a linguagem SQL, melhorando consideravelmente o processo de extração, limpeza e apresentação de informações em seus relatórios. Este conhecimento é fundamental para tratar dados diretamente no banco, possibilitando análises mais eficientes em ferramentas como Excel, Power BI, entre outras.

## Tipos de Dados e Suas Manipulações

O SQL oferece várias funções práticas para manipular diferentes tipos de dados. Já exploramos números e datas, agora vamos focar nos textos.

Importante limparmos os dados via SQL antes de levarmos para a análise, pois temos uma performance melhor do que limparmos pelo PowerQuery ou via ETL.

### A Função UPPER

Use `UPPER` para converter caracteres para maiúsculas, útil para padronizar strings e melhorar a visualização nos relatórios.

```sql
SELECT UPPER(nome) AS NomeMaiusculo FROM tabela;
```

### A Função LOWER

Por outro lado, `LOWER` faz o oposto, passando todos os caracteres para minúsculas.

```sql
SELECT LOWER(nome) AS NomeMinusculo FROM tabela;
```

### A Função REPLACE

`REPLACE` substitui partes específicas de uma string por outra. Se você precisa modificar ou remover certos padrões em um texto, essa função será sua grande aliada.

```sql
SELECT REPLACE(nome, 'cliente ', '') AS CodigoCliente FROM tabela;
```

## Contagem de Caracteres com LEN

Quando a tarefa é contar quantos caracteres uma string possui, `LEN` é a função que resolve.

```sql
SELECT LEN(nome) AS QuantidadeCaracteres FROM tabela;
```

## Práticas Recomendadas

Mergulhe na prática dessas funções em suas tabelas, experimente variações e identifique como essas ferramentas facilitam o dia a dia com o banco de dados.

* * *

&nbsp;

# A Arte da Manipulação de Texto com SQL

Bem-vindo ao mundo da manipulação de texto utilizando SQL. Neste guia, iremos desvendar as práticas e técnicas para extrair, transformar e analisar dados textuais de modo eficiente e eficaz.

## O Básico da Manipulação de Texto

Antes de nos aprofundarmos, vamos entender os fundamentos da manipulação de textos. No SQL, existem diversas funções que nos permitem trabalhar com strings de maneiras distintas. Aqui, falaremos sobre três delas: `LEFT`, `RIGHT`, e `SUBSTRING`.

### A Função `LEFT`

A função `LEFT` é utilizada para extrair uma sequência de caracteres do início de um texto. Por exemplo, para extrair os primeiros quatro caracteres de uma string, utilizamos a seguinte estrutura:

```sql
SELECT LEFT(nome_coluna, 4) FROM tabela;
```

Isso retornará os primeiros quatro caracteres da coluna selecionada para cada registro da tabela.

### A Função `RIGHT`

Já a função `RIGHT` funciona de maneira oposta à `LEFT`. Ela extrai os caracteres a partir do final da string:

```sql
SELECT RIGHT(nome_coluna, 4) FROM tabela;
```

Dessa forma, serão considerados os quatro últimos caracteres da coluna para cada registro.

### A Função `SUBSTRING`

Por fim, a `SUBSTRING` oferece uma maior flexibilidade, pois permite especificar de qual ponto da string iniciar a extração e quantos caracteres serão extraídos:

```sql
SELECT SUBSTRING(nome_coluna, posicao_inicial, quantidade_caracteres) FROM tabela;
```

Com esta função, é possível extrair qualquer parte do texto de acordo com as necessidades.

## Aplicações Práticas

As funções de manipulação de texto no SQL podem ser extremamente úteis em diversas situações. Suponha que temos uma tabela onde os registros começam com um número identificador seguido pelo nome do cliente. Se quisermos extrair apenas o nome do cliente, podemos utilizar as funções mencionadas para manipular as strings e obter as informações desejadas.

### Exemplo de Uso das Funções

Vejamos algumas situações hipotéticas em que essas funções podem ser úteis:

- Extrair o código identificador dos registros: Utilizando `LEFT` ou `SUBSTRING`, podemos facilmente pegar apenas a parte numérica da string.
    
- Obter as iniciais dos nomes dos clientes: Através da `LEFT`, é possível extrair as primeiras letras dos nomes.
    
- Analisar os sufixos dos registros: Com a função `RIGHT`, podemos focar nos finais das strings para, por exemplo, categorizar os registros com base em alguma terminação específica.
    

> Legal é deixar as posições meio que "automáticas" por exemplo com `CHARINDEX`.
> 
> ```sql
> SELECT  
>     NOME,
>     SUBSTRING( NOME, CHARINDEX(' ', NOME) + 1 , 99) 
> FROM  
>     ENTIDADES
> ```

## Dicas para Eficiência

Ao trabalhar com manipulação de texto em SQL, é importante:

1.  Conhecer bem as funções e suas sintaxes.
2.  Entender os dados com os quais está trabalhando para aplicar a função mais adequada.
3.  Lembrar que o SQL conta os caracteres a partir de 1, e não de 0 como em algumas linguagens de programação.

Preparado para dominar a manipulação de texto com SQL? Mãos à obra!

* * *

&nbsp;

&nbsp;

# Manipulando campos de texto (CHARINDEX, TRIM, RTRIM, LTRIM)

![mindmap-campostexto_page-0001.jpg](../_resources/mindmap-campostexto_page-0001.jpg)  
![wPG0xE2F6D.png](../_resources/wPG0xE2F6D.png)

> Fiz assim usando o TRIM, ai não precisa somar nem diminuir 1 na query:
> 
> ```SQL
> SELECT  
>     CIDADE,  
>     TRIM( SUBSTRING( CIDADE, 1 , CHARINDEX( ' ', CIDADE) )) as COLUNA_1,  
>     TRIM( SUBSTRING( CIDADE, CHARINDEX( ' ', CIDADE) , LEN(CIDADE) )) as COLUNA_2  
> FROM  
>     ENDERECOS  
> where 
>     CIDADE = 'SAO PAULO'
> 
> ```

* * *

&nbsp;

# Funções de Agregação em SQL

## Introdução ao SQL e Funções de Agregação

Olá pessoal, sejam todos muito bem-vindos a mais uma aula do nosso curso de SQL. Durante a aula de hoje, nós vamos falar sobre funções de agregação. Funções que permitem somar valores, pegar o maior ou menor valor, e outras operações que envolvem agrupar dados. Quando falamos de função de agregação, é importante entender que esta é diferente dos operadores aritméticos de soma.

### Por Que Usar Funções de Agregação

As funções de agregação não agem sobre duas colunas como os operadores aritméticos. Elas atuam sobre uma única coluna. Por exemplo, se queremos somar toda uma coluna de valores, precisamos utilizar uma função de agregação e não o operador aritmético '+'. Vamos explorar razões pelas quais podemos utilizar essas funções:

- Para saber o total de vendas de um vendedor
- O total de compras de um cliente
- Total de um determinado produto ou por empresa

As funções de agregação são comuns e muito utilizadas no banco de dados.

## Principais Funções de Agregação

Vou destacar aqui quatro funções de agregação principais:

### A Função SUM

A função `SUM` realiza a soma dos valores de uma coluna.

### As Funções MIN e MAX

As funções `MIN` e `MAX` pegam, respectivamente, o menor e o maior valor de uma coluna.

### A Função AVG

A função `AVG` calcula a média aritmética dos valores de uma coluna.

### A Função COUNT

Uma função que não pode ser esquecida é a `COUNT`. Ela serve para contar os valores, ou seja, a quantidade de linhas que satisfazem um critério específico.

## Como Utilizar as Funções de Agregação

Quando utilizamos essas funções, normalmente queremos agrupar os dados baseando-nos em critérios específicos. Por exemplo, podemos querer somar as vendas não de toda a coluna, mas agrupadas por produto ou cliente.

### Agrupando Dados com GROUP BY

Sempre que usamos uma função de agregação, precisamos dizer ao SQL como agrupar os outros campos que não estão sendo agregados. Isso é feito através da cláusula `GROUP BY`.

#### Exemplo:

```sql
SELECT produto, SUM(quantidade) AS total_vendido
FROM vendas_analiticas
GROUP BY produto;
```

Este comando irá retornar a soma das quantidades vendidas de cada produto.

## Importância das Funções de Agregação

As funções de agregação são essenciais em qualquer análise de dados, pois permitem resumir grandes conjuntos de dados em informações úteis e gerenciáveis.

## A Prática das Funções de Agregação

Para consolidar o conhecimento das funções de agregação, é essencial praticar:

1.  Tente somar colunas com a função SUM.
2.  Pegue o maior e o menor valor com as funções MIN e MAX.
3.  Calcule a média com AVG.
4.  Conte linhas com COUNT.
5.  Experimente diferentes combinações de agrupamentos com a cláusula GROUP BY.
6.  Use ORDER BY para ordenar os resultados de suas consultas agregadas.

## Conclusão

Nesta aula, revisamos o conceito e a prática das funções de agregação em SQL. Agora, convido vocês a praticarem essas funções com a tabela de vendas analíticas. Um grande abraço e te aguardo na nossa próxima aula.

* * *

&nbsp;

# Comandos Avançados em SQL: Agregação e Filtragem Pós-Agrupamento

## Introdução à Agregação de Dados

Na aula anterior, discutimos sobre as funções de agregação em SQL, que nos ajudam a organizar e sintetizar grandes volumes de dados. Exploramos as funções SUM (soma), MIN (mínimo), MAX (máximo), AVG (média) e COUNT (contagem).

## O Papel do GROUP BY

Para utilizar funções de agregação, precisamos saber como lidar com campos que não são agregados. Se queremos que determinados campos sejam parte do resultado, mas não são utilizados em funções de agregação, os incluímos na cláusula `GROUP BY`.

### Importância do GROUP BY

Quando queremos agrupar valores e aplicar uma função de agregação (ex: soma das vendas por produto), é necessário especificar em `GROUP BY` os campos pelos quais queremos agrupar os dados.

## Filtragem Pós-Agrupamento

### A Restrição do WHERE com Agregação

Um ponto importante é que as funções de agregação não podem ser usadas diretamente na cláusula `WHERE`. Isso nos leva à necessidade de aplicar filtros após a agregação dos dados.

### Utilizando a Cláusula HAVING

A cláusula `HAVING` nos permite filtrar valores após eles serem agrupados. Funciona de maneira semelhante ao `WHERE`, mas é aplicada depois do `GROUP BY` e permite a utilização de funções de agregação.

## Execução Lógica do Comando SELECT

A execução lógica de uma consulta SQL segue uma ordem específica:

1.  From: Identificação da tabela de onde os dados serão recuperados.
2.  Where: Filtragem das linhas antes da agregação.
3.  Group By: Agrupamento das linhas filtradas conforme o especificado.
4.  Having: Filtragem pós-agrupamento.
5.  Select: Especificação das colunas a serem retornadas.
6.  Order By: Ordenação final dos resultados.

## Exemplo Prático

Vamos aplicar os conceitos aprendidos fazendo uma consulta que envolve a seleção de produtos, filtrando pela quantidade vendida total que seja maior que 10, utilizando a cláusula `HAVING` para aplicar este filtro após a agregação dos dados.

### SQL de Exemplo

```sql
SELECT produto, cliente, SUM(quantidade) AS quantidade_total
FROM vendas_analiticas
GROUP BY produto, cliente
HAVING SUM(quantidade) > 10
ORDER BY quantidade_total DESC;
```

Neste exemplo, selecionamos produtos e clientes com uma quantidade total de vendas maior que 10. Observe que utilizamos `SUM(quantidade)` dentro da cláusula `HAVING` para realizar o filtro na quantidade agregada.

## Conclusão

Entender a execução lógica do comando `SELECT` e saber utilizar a cláusula `HAVING` são fundamentais para trabalhar com agregações e filtragens complexas em SQL. Isso permite um controle maior sobre os dados que se deseja analisar, especialmente quando se trata de grandes conjuntos de dados.

* * *

&nbsp;

# Estruturas Condicionais e Calculo de Comissões

## Introdução

Olá, sejam muito bem-vindos a mais uma aula do nosso curso de SQL. Neste material, iremos explorar as estruturas condicionais no SQL, demonstrando como utilizar a instrução `CASE WHEN` para calcular comissões de vendedores de forma dinâmica.

## Estruturas Condicionais em SQL

As estruturas condicionais em SQL são essenciais para realizar verificações e aplicar lógicas específicas baseadas em determinados critérios. O comando `CASE WHEN` é uma ferramenta poderosa que permite executar diferentes ações dependendo das condições que são atendidas.

### Comando CASE WHEN

O comando `CASE WHEN` exibe um determinado valor com base em critérios preestabelecidos. Ele funciona como uma coluna adicional na sua consulta e pode ser aplicado em várias situações, como por exemplo no cálculo de comissões.

#### Estrutura Básica do CASE WHEN

A estrutura básica da instrução `CASE WHEN` envolve os seguintes componentes:

- `CASE`: inicia a expressão condicional.
- `WHEN`: define as condições a serem verificadas.
- `THEN`: indica o valor a ser retornado se a condição for atendida.
- `ELSE`: fornece um valor padrão caso nenhuma condição seja atendida.
- `END`: encerra a expressão condicional.

### Exemplo Prático: Cálculo de Comissão

Utilizaremos uma tabela de vendas analíticas para calcular a comissão dos vendedores com base no valor de suas vendas.

#### Analisando os Critérios de Comissão

Para calcular a comissão, consideramos os seguintes cenários baseados no valor da venda líquida:

- Vendas menores ou iguais a 0: Sem comissão.
- Vendas entre 1 e 500: 1% de comissão.
- Vendas entre 501 e 10.000: 2% de comissão.
- Vendas acima de 10.000: 3% de comissão.

#### Implementando o Cálculo no SQL

A seguir, apresentamos como seria a implementação do cálculo de comissão utilizando o `CASE WHEN` em uma consulta SQL.

```sql
SELECT
  Vendedor,
  Venda_Líquida,
  CASE
    WHEN Venda_Líquida <= 0 THEN 'Sem comissão'
    WHEN Venda_Líquida BETWEEN 1 AND 500 THEN '1% de comissão'
    WHEN Venda_Líquida BETWEEN 501 AND 10000 THEN '2% de comissão'
    WHEN Venda_Líquida > 10000 THEN '3% de comissão'
  END AS Comissão_Aplicada,
  CASE
    WHEN Venda_Líquida <= 0 THEN 0
    WHEN Venda_Líquida BETWEEN 1 AND 500 THEN Venda_Líquida * 0.01
    WHEN Venda_Líquida BETWEEN 501 AND 10000 THEN Venda_Líquida * 0.02
    WHEN Venda_Líquida > 10000 THEN Venda_Líquida * 0.03
  END AS Valor_Comissão
FROM Vendas_Analiticas
WHERE Vendedor IS NOT NULL
```

#### Dicas Adicionais

- Ao utilizar o `CASE WHEN` em conjunto com funções de agregação, lembre-se de utilizar o `GROUP BY` para as colunas não agregadas.
- Filtros que envolvem funções de agregação devem ser implementados na cláusula `HAVING`.

## Conclusão

Nesta aula, aprendemos a empregar a estrutura condicional `CASE WHEN` para criar consultas SQL dinâmicas e realizar cálculos de comissão baseados em condições específicas. Essa habilidade é fundamental para quem deseja manipular e analisar dados eficientemente no SQL. Continue praticando para aprimorar seu entendimento sobre esse poderoso recurso do SQL.

* * *

&nbsp;

# Introdução às Condicionais em SQL

A linguagem SQL permite a implementação de lógica condicional para personalizar a apresentação dos resultados das consultas. Neste material, exploraremos duas formas poderosas de condicionais: a cláusula `CASE` e a função `IF`.

* * *

## Cláusula CASE

Quando lidamos com múltiplos critérios para determinar a saída de nossas consultas, a cláusula `CASE` é uma escolha versátil. Seu funcionamento é comparável a uma estrutura de "se-então" em linguagens de programação tradicionais.

Exemplo de uso da cláusula `CASE`:

```sql
SELECT
    quantidade,
    CASE
        WHEN quantidade > 0 THEN 'venda'
        WHEN quantidade < 0 THEN 'devolução'
        ELSE 'neutro'
    END AS tipo
FROM vendas;
```

* * *

## Função IF

Para situações com critérios menos complexos, a função `IF` oferece uma sintaxe mais simplificada e direta. A função `IF` é ideal quando temos apenas uma condição simples para verificar.

Exemplo de uso da função `IF`:

```sql
SELECT
    quantidade,
    IF(quantidade > 0, 'venda', 'devolução') AS tipo
FROM vendas;
```

* * *

## Diferenças entre CASE e IF

- **Legibilidade**: `CASE` costuma ser mais legível, especialmente quando há múltiplos critérios a serem considerados, enquanto `IF` é mais sucinto para lógicas simples.
- **Sintaxe**: `CASE` tem uma sintaxe mais verbosa e clara, enquanto `IF` é mais compacta.
- **Desempenho**: Em termos de desempenho, não existe diferença significativa entre as duas abordagens. O SQL Server converte ambas em operações internas semelhantes.

* * *

## Considerações Finais

Ao elaborar consultas SQL envolvendo condições, é importante considerar tanto a legibilidade quanto a eficiência do código. Tanto a cláusula `CASE` quando a função `IF` têm seus lugares, e é essencial compreender quando usar cada uma delas. Na prática, use `CASE` para múltiplos critérios e `IF` para critérios singulares.

* * *

## Exercícios Práticos

Através dos desafios propostos, será incentivada a aplicação das estruturas condicionais apresentadas. O objetivo é garantir que o resultado seja consistente com os exemplos demonstrados e que a compreensão das condicionais esteja sólida.

Lembre-se de que as condições bem definidas em suas consultas são fundamentais para obter os resultados corretos e esperados nos relatórios e análises a serem realizadas.

* * *

Esperamos que este material tenha sido esclarecedor e que as estruturas condicionais em SQL estejam mais claras. Até a próxima aula!

* * *

&nbsp;

# Conversão de Tipos de Dados em SQL

Bem-vindos ao nosso guia prático de conversão de tipos de dados em SQL. Aqui, vamos explorar como efetuar estas transformações e suas aplicações. Vamos lá!

## Conceitos Básicos de Conversão de Tipos

Conversão de tipos de dados refere-se ao processo de transformar um tipo de dado em outro. Isso é crucial, pois em várias ocasiões precisamos modificar o tipo de uma informação para alcançar um resultado esperado ou para tratá-la corretamente.

### Por Que Converter Tipos de Dados?

Na manipulação de dados, frequentemente nos deparamos com a necessidade de alterar tipos de dados. Seja para fins de apresentação, cálculos ou compatibilidade com outras operações, a conversão é um pilar fundamental no gerenciamento de bancos de dados.

## Conversões Comuns em SQL

### De Inteiro para Texto

Imagine que você tem um campo numérico e precisa transformá-lo em um campo de texto. Essa operação é bastante comum e será explorada a seguir.

```sql
CAST(int_column AS VARCHAR)
```

### De DateTime para Date

Outra conversão frequente é quando temos informações em formato datetime e precisamos apenas da parte da data.

```sql
CAST(datetime_column AS DATE)
```

### Arredondamento de Decimais

Ao trabalhar com valores financeiros ou cálculos que resultem em números decimais, é comum precisarmos arredondar para um número específico de casas decimais.

```sql
SELECT ROUND(column, 2)
```

## Funções de Conversão em SQL

Existem duas funções principais para conversão de tipos de dados:

### CAST

A função CAST é um padrão ANSI SQL, o que significa que é aceito pela maioria dos sistemas de gerenciamento de banco de dados. Sua sintaxe é simples e direta.

```sql
SELECT CAST(column AS desired_data_type)
```

### CONVERT

A função CONVERT é específica da linguagem T-SQL, usada no Microsoft SQL Server. É similar ao CAST, mas tem algumas peculiaridades adicionais, como a formatação de data.

```sql
SELECT CONVERT(data_type, column, style)
```

Lembre-se, ao utilizar CONVERT para formatar datas, a conversão é para texto, e não mais para um tipo de dado data, influenciando como as operações de ordenação são realizadas no resultado.

## Exemplos Práticos

### Exemplo de Conversão de Inteiro para Texto

Digamos que temos a coluna `integer_column` e queremos convertê-la para texto:

```sql
SELECT CAST(integer_column AS VARCHAR) AS converted_text
```

### Exemplo de Arredondamento e Conversão de Decimais

Para arredondar e depois converter um número para ter duas casas decimais:

```sql
SELECT CAST(ROUND(decimal_column, 2) AS NUMERIC(9,2)) AS rounded_value
```

### Exemplo de Conversão de DateTime para Date e Formatação

Caso desejemos converter uma coluna datetime para apenas apresentar a data, e ainda formatar de acordo com o padrão brasileiro (dia/mês/ano):

```sql
SELECT CONVERT(VARCHAR, datetime_column, 103) AS brazilian_format_date
```

## Boas Práticas e Considerações Finais

- Sempre prefira usar a função CAST quando seu código puder ser executado em diferentes SGBDs.
- Cuidado com a conversão de datas para texto, pois isso pode afetar as operações de ordenação.
- Considere a legibilidade e a clareza dos dados após a conversão; escolha o tipo adequado para a tarefa.

Dominar a conversão de tipos de dados é crucial para o bom manejo das informações dentro do SQL e esperamos que este guia tenha ajudado a esclarecer os principais pontos do tema. Até a próxima!

* * *

&nbsp;

# Prevenindo possíveis erros na conversão (TRY_CAST)

O processamento e a conversão de dados são pilares essenciais na manipulação de informações dentro de um sistema de gestão de banco de dados. Neste ebook, abordaremos conceitos fundamentais sobre conversão de dados e o uso prudente de funções no SQL, especificamente o uso de `TRY_CAST`, para evitar erros durante a conversão de tipos incompatíveis.

## Compreendendo a Incompatibilidade de Dados

Todos os dados possuem um tipo definido, seja ele textual, numérico ou de data/hora. Porém, nem todos os dados podem ser convertidos de um tipo para outro. Por exemplo, enquanto um número pode se tornar facilmente um texto, o contrário nem sempre é verdadeiro.

### Quando a Conversão não é Possível

- **Texto para Número**: Não podemos converter textos que não representam números (ex: "ABC") em valores numéricos.
- **Data/Hora para Data**: Podemos converter um valor de data/hora em apenas data, mas não obteremos a "hora" se a informação original for apenas uma "data".

## A Função `TRY_CAST`

A função `TRY_CAST` é uma ferramenta valiosa no SQL que permite tentar realizar uma conversão de dados sem que, em caso de falha, ocorra um erro que interrompa o funcionamento da rotina. Esta função retorna `NULL` para conversões mal-sucedidas, permitindo a continuidade do processo.

### Utilizando `TRY_CAST` para Evitar Erros

Vamos a um exemplo de como `TRY_CAST` pode ser aplicado:

```sql
TRY_CAST('ABC' AS INT) -- Retorna NULL
TRY_CAST('1' AS INT)   -- Retorna 1
```

Ao usar `TRY_CAST`, somente a linha que falhou na conversão trará uma informação nula, e não interromperá toda a rotina, como seria o caso ao usar `CAST`.

## Aplicação Prática de `TRY_CAST`

A função `TRY_CAST` vem a ser extremamente útil em situações onde estamos populando um data warehouse ou realizando atualizações em tabelas que requerem conversões de dados.

### Exemplo em uma Tabela de Vendas

Suponha que estamos lidando com uma tabela de vendas onde a coluna `quantidade` pode conter valores vazios ou nulos. Se tentássemos converter essa coluna diretamente para um tipo numérico, um erro poderia ocorrer. Para evitar isso, usaríamos `TRY_CAST`.

```sql
TRY_CAST(quantidade AS INT) -- Conversão segura
```

### Importância da Prevenção de Erros

Usar `TRY_CAST` nos permite tratar possíveis inconsistências de forma mais controlada, ao invés de permitir que a rotina seja completamente interrompida. Após a execução, podemos analisar linhas com valores nulos para entender os motivos das falhas de conversão.

## Conclusão

Conversões de dados são operações comuns e necessárias. No entanto, precisam ser realizadas com cautela para evitar erros e interrupções inesperadas. A função `TRY_CAST` é um exemplo de uma prática elegante e eficiente de tratar conversões de dados, garantindo a entrega contínua e confiável de informações em nossas rotinas de banco de dados.

A partir do entendimento sobre as restrições de conversões e a implementação de estratégias como `TRY_CAST`, esteja apto a administrar suas conversões de dados com maior segurança e precisão.

> ## Manipulando dados na consulta ☝️

* * *

&nbsp;

> ## Relacionamento entre tabelas 👇

# Utilização de Comandos e Procedimentos em SQL Server (sp_help)

## Introdução

O SQL Server é um sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft. Possui diversas funcionalidades que auxiliam profissionais a gerir e manipular dados de forma eficiente. Um exemplo é a procedure `sp_help` que oferece uma visão detalhada sobre a estrutura das tabelas.

## O Comando `sp_help`

### Objetivo do Comando

O comando `sp_help` é uma procedure de ajuda no SQL Server usada majoritariamente para identificar colunas, tipos de dados e, principalmente, relacionamentos entre tabelas.

### Utilidade na Prática

Em ambientes onde não há um dicionário de dados bem estabelecido, a utilização de `sp_help` permite descobrir como tabelas se relacionam, tipos de dados e outras informações relevantes.

### Como Usar o `sp_help`

Para ver informações detalhadas sobre a tabela 'produtos', por exemplo, o comando seria:

```sql
EXEC sp_help 'produtos';
```

### O que a `sp_help` Mostra

#### Tabela Inicial

- Nome da tabela
- Tipo de tabela
- Colunas
- Tipos de dados
- Se permite valores nulos
- Data e hora da criação

#### Relacionamentos

- Nome da chave estrangeira
- Tabela à qual se refere
- Coluna correspondente na outra tabela

### Formas de Acessar o Comando

Após digitar o nome da tabela desejada, é possível usar o atalho `Alt + F1` para obter as informações de forma rápida sem ter que digitar o comando completo.

### Analisando Relacionamentos

O comando ajuda a identificar tabelas que possuem dependências com outras, ou seja, tabelas que não podem ser apagadas sem perder informações ligadas a elas.

### Importância das Foring Keys (Chaves Estrangeiras)

As chaves estrangeiras são essenciais para manter a integridade dos dados entre tabelas relacionadas.

## Considerações Finais

Entender e utilizar o comando `sp_help` é crucial para quem trabalha com bancos de dados, especialmente quando é necessário se adaptar a novos ambientes onde a documentação não é ampla.

### Aviso Sobre Bancos de Dados Reais

- Nem todos os bancos de dados seguem boas práticas.
- Alguns podem nem ter chaves estrangeiras ou possuir nomes complicados nas tabelas.
- A prática e familiaridade com a ferramenta são essenciais para superar esses obstáculos.

## Próximos Passos

Nas aulas seguintes, continuaremos explorando os relacionamentos entre tabelas e aprendendo mais sobre a gestão eficaz de bancos de dados em SQL Server.

* * *

&nbsp;

# Comandos SQL para Inner Joins e a Estrutura de Relacionamentos

Neste ebook, abordaremos a utilização de comandos SQL para a criação de Inner Joins, que são estruturas cruciais para a manipulação e compreensão dos relacionamentos entre tabelas em bancos de dados relacionais.

Exploraremos também como aplicar técnicas de SQL para produzir consultas mais eficientes, permitindo a análise e a recuperação de informações relacionadas em diferentes tabelas.

## Relacionamentos do Tipo Inner Join

Inner Join é um tipo de relacionamento que permite recuperar dados que possuem correspondência em duas tabelas diferentes. Por meio desse mecanismo, é possível unir informações de modo a criar consultas complexas e detalhadas.

### Definição e Utilização Básica de Inner Join

O primeiro passo para utilizar um Inner Join é identificar os campos em comum entre as tabelas. É essa interseção que permite estabelecer o relacionamento. A estrutura básica de um Inner Join é a seguinte:

```sql
SELECT <colunas>
FROM <tabela1> INNER JOIN <tabela2>
ON <tabela1>.<campo_em_comum> = <tabela2>.<campo_em_comum>
```

### Aliases e Simplificação do Código

Para simplificar a escrita e leitura do código SQL, especialmente em consultas que envolvem múltiplos joins, é uma boa prática utilizar aliases, ou seja, apelidos para as tabelas. Isso deixa o código mais organizado e fácil de entender.

Exemplo com aliases:

```sql
SELECT a.<coluna>, b.<coluna>
FROM <tabela1> AS a INNER JOIN <tabela2> AS b
ON a.<campo_comum> = b.<campo_comum>
```

### Inner Join com Múltiplas Tabelas

É possível estender as operações de Inner Join para mais de duas tabelas. A chave é sempre assegurar que haja um campo comum que ligue as tabelas subsequentes. Vejamos um exemplo envolvendo três tabelas:

```sql
SELECT a.<coluna>, b.<coluna>, c.<coluna>
FROM <tabela1> AS a
INNER JOIN <tabela2> AS b ON a.<campo_comum_entre_ab> = b.<campo_comum_entre_ab>
INNER JOIN <tabela3> AS c ON b.<campo_comum_entre_bc> = c.<campo_comum_entre_bc>
```

### Trabalhando com Funções de Agregação

Você pode combinar Inner Joins com funções de agregação do SQL, como a função SUM, para sumarizar dados ou realizar cálculos sobre valores agrupados.

Exemplo utilizando a função SUM:

```sql
SELECT a.<coluna>, SUM(b.<coluna_numérica>)
FROM <tabela1> AS a INNER JOIN <tabela2> AS b
ON a.<campo_comum> = b.<campo_comum>
GROUP BY a.<coluna>
```

## Aplicações Práticas de Inner Joins

Abaixo, exploraremos algumas aplicações práticas de Inner Joins para resolver problemas comuns no dia a dia do trabalho com bancos de dados.

### Filtrando Dados com Inner Join

Você pode utilizar a cláusula `WHERE` em conjunto com o Inner Join para filtrar os resultados com base em condições específicas.

Exemplo de filtragem:

```sql
SELECT a.<coluna>, b.<coluna>
FROM <tabela1> AS a INNER JOIN <tabela2> AS b
ON a.<campo_comum> = b.<campo_comum>
WHERE a.<coluna> = <valor_desejado>
```

### Ordenando os Resultados

Para ordenar os resultados de uma consulta que envolve um Inner Join, utilize a cláusula `ORDER BY`.

```sql
SELECT a.<coluna>, b.<coluna>
FROM <tabela1> AS a INNER JOIN <tabela2> AS b
ON a.<campo_comum> = b.<campo_comum>
ORDER BY a.<coluna>
```

### Agrupando Dados e Usando Cláusulas HAVING

É possível também realizar agrupamentos mais complexos e aplicar a cláusula `HAVING` para filtrar grupos com base em condições que utilizam funções de agregação.

```sql
SELECT a.<coluna>, SUM(b.<coluna_numérica>)
FROM <tabela1> AS a INNER JOIN <tabela2> AS b
ON a.<campo_comum> = b.<campo_comum>
GROUP BY a.<coluna>
HAVING SUM(b.<coluna_numérica>) > <valor>
```

## Conclusão

Inner Joins são ferramentas poderosas que oferecem flexibilidade na manipulação de dados relacionais. Com a prática e o entendimento aprofundado da estrutura de suas tabelas, você poderá executar consultas SQL cada vez mais eficazes, que proporcionam insights valiosos para a tomada de decisões e análises de negócios.

* * *

&nbsp;

# A Profundidade dos Relacionamentos SQL: Left Join

Ao adentramos no universo dos bancos de dados, nos deparamos com relações entre tabelas que ditam como os dados interagem e são acessados. Na aula de hoje, exploraremos a funcionalidade e importância do "Left Join" e como ele impacta nossas consultas.

## Entendendo o Left Join

- O `LEFT JOIN` é um tipo especial de relacionamento que prioriza os dados da tabela que está à esquerda na instrução SQL, ou seja, a tabela referenciada primeiro.

### A Dinâmica entre Tabelas

Imagine que temos duas tabelas: `Tabela A` e `Tabela B`, ambas possuem uma coluna em comum. O `LEFT JOIN` irá unir essas tabelas de acordo com a correspondência dessa coluna e também incluir toda a informação da `Tabela A`, mesmo que não haja correspondência direta na `Tabela B`.

#### O Comportamento na Prática

```sql
SELECT A.produto, A.descricao, A.familia_produto, B.descricao AS familia_descricao
FROM produtos AS A
LEFT JOIN familias_produto AS B ON A.familia_produto = B.codigo;
```

Nessa consulta SQL, vemos que, apesar de todos os produtos terem uma família associada, usando o `LEFT JOIN` é possível trazer produtos mesmo que a família não esteja cadastrada, resultando em valores nulos para a descrição da família.

## Impacto na Performance

- Relacionamentos do tipo `LEFT JOIN` podem ser menos performáticos quando comparados a simples `JOINs` (ou `INNER JOINs`), visto que exigem um cruzamento mais amplo de linhas entre as tabelas.
- É prudente realizar uma análise prévia para determinar se o uso do `LEFT JOIN` é realmente necessário.

### Quando Usar o Left Join

Você deve considerar o uso do `LEFT JOIN` nas seguintes situações:

- A coluna que está relacionando permite valores nulos (`NULL`) e você deseja incluir todos os registros da tabela da esquerda, independente de haver correspondência na tabela da direita.
- Você deseja trazer informações adicionais da tabela da esquerda que podem não ter correspondentes na tabela da direita.

### Como Identificar a Necessidade do Left Join

Uma análise da estrutura das tabelas pode ser crucial. Por exemplo, a utilização do comando `SP_HELP` ou `Alt+F1` pode nos dar insights sobre se uma coluna permite valores nulos ou não, e, com base nesse conhecimento, decidir sobre a aplicabilidade do `LEFT JOIN`.

## O Uso de Coalesce no Contexto do Left Join

Em situações em que valores nulos são retornados devido à ausência de correspondência, a função `COALESCE` pode ser empregada para substituir esses valores nulos por um valor padrão.

```sql
SELECT A.produto, COALESCE(B.descricao, 'Não encontrada') AS familia_descricao
FROM produtos AS A
LEFT JOIN familias_produto AS B ON A.familia_produto = B.codigo;
```

## Relacionamento Cruzado: Join e Left Join

- É possível combinar `JOIN` e `LEFT JOIN` em uma única consulta, utilizando o primeiro para relacionar tabelas que sempre terão informações correspondentes e o `LEFT JOIN` para quando desejamos incluir todos os registros de uma tabela específica.

## Desafio Proposto

Para a prática e aprofundamento do tema, será proposto um desafio onde o aluno deve criar consultas que empreguem o relacionamento do tipo `LEFT JOIN`, reforçando o entendimento e aplicabilidade do conceito.

* * *

Conclusão: O `LEFT JOIN` é uma ferramenta poderosa do SQL que nos permite elaborar consultas complexas e com maior flexibilidade de retorno de dados. Não obstante, deve ser utilizado com discernimento para não comprometer a eficiência das operações no banco de dados.

* * *

&nbsp;

# Compreendendo SQL: Right Join e Relacionamentos de Tabelas

## Introdução

Este ebook foi projetado para ajudá-lo a entender e aplicar o conceito de `Right Join` ou `Right Outer Join` no SQL, uma linguagem de programação utilizada para gerenciar e manipular banco de dados. Vamos explorar a funcionalidade, aplicações e comparar com outros tipos de joins como o `Left Join`.

## Entendendo Right Join

### Definição de Right Join

- **O que é**: O `Right Join` é um tipo de relacionamento em SQL que retorna todos os registros da tabela à direita (segunda tabela) e os registros correspondentes da tabela à esquerda (primeira tabela). O resultado é NULL do lado esquerdo quando não há correspondência.

### Comparação com Left Join

- **Left Join vs. Right Join**: Enquanto o `Left Join` retorna todos os registros da primeira tabela, o `Right Join` retorna todos da segunda. Em ambos os casos, são retornados registros correspondentes da outra tabela.

## Aplicações Práticas

### Caso de Uso: Produtos e Vendas

#### Problema Inicial

- Imaginemos uma situação onde queremos saber a quantidade de produtos por fabricante e a média de vendas. Ao usar um comando `Join` convencional, somente produtos que tiveram vendas seriam contabilizados, o que poderia causar uma discrepância nos dados.

#### Solução com Right Join

- Utilizando `Right Join`, garantimos que todos os produtos serão contabilizados independente de terem sido vendidos ou não.

## Passo-a-Passo: Executando um Right Join

1.  **Consulta Inicial Errada**:
    
    - Executar um `Join` e notar que nem todos os produtos foram incluídos no resultado.
2.  **Inversão de Tabelas**:
    
    - Uma solução inicial poderia ser inverter as tabelas e utilizar um `Left Join`. Porém, queremos explorar o uso do `Right Join`.
3.  **Aplicando o Right Join**:
    
    - Fazer a consulta correta com o `Right Join`, garantindo que todos os produtos da tabela `produtos` sejam incluídos independente das vendas.

## Desafio SQL com Right Join

### Objetivo do Desafio

- Refazer a consulta mencionada anteriormente, mas utilizando o `Right Join` para assegurar a integridade dos dados.

#### Instruções do Desafio

1.  **Utilizar Right Join**: Executar a consulta com `Right Join` ao invés de inverter tabelas ou utilizar `Left Join`.
    
2.  **Comparar Resultados**: Analisar o resultado obtido e comparar com os dados fornecidos na aula anterior, garantindo a correção da consulta.
    

### Expectativa de Resultados

- A consulta deverá retornar todos os produtos, inclusive os que não possuem fabricante, o que comprova a eficácia do `Right Join` para este caso específico.

## Conclusão

O `Right Join` é uma ferramenta poderosa no SQL que permite a inclusão de todos os registros de uma tabela secundária, garantindo que nenhum dado seja omitido na análise. Ao dominar o `Right Join` e seus casos de uso, podemos assegurar a precisão e integridade nas operações de banco de dados.

Lembramos que na próxima aula abordaremos a resolução do desafio proposto, aplicando na prática os conceitos aqui discutidos. Outras formas de relacionamento como `Inner Join` ou `Full Join` podem ser exploradas em estudos futuros para complementar seu entendimento de SQL.

* * *

&nbsp;

# Relacionamentos em Bancos de Dados: INNER JOIN, LEFT JOIN, RIGHT JOIN e FULL JOIN

A compreensão adequada dos diferentes tipos de relacionamentos entre tabelas em bancos de dados é essencial para qualquer desenvolvedor ou analista de dados. Neste livro eletrônico, detalhamos os quatro tipos principais de relacionamentos: INNER JOIN, LEFT JOIN, RIGHT JOIN e FULL JOIN, explicando como usá-los para obter informações precisas e abrangentes das tabelas relacionadas.

## INNER JOIN

O `INNER JOIN` é um tipo de relacionamento que retorna somente os registros que têm correspondência em ambas as tabelas. Isso significa que se uma linha em uma tabela tem um valor correspondente em uma coluna da outra tabela, essa linha será incluída nos resultados da consulta.

### Exemplo Prático de INNER JOIN

Suponha que temos duas tabelas: Pedidos e Clientes. A tabela Pedidos contém um campo ClienteID, enquanto a tabela Clientes contém um campo ID. Para relacionar essas duas tabelas e listar apenas os pedidos que têm um cliente correspondente, usaríamos o INNER JOIN desta forma:

```sql
SELECT Pedidos.ID, Clientes.Nome
FROM Pedidos
INNER JOIN Clientes ON Pedidos.ClienteID = Clientes.ID;
```

## LEFT JOIN

O `LEFT JOIN` (também conhecido como LEFT OUTER JOIN) retorna todos os registros da tabela à esquerda (a primeira tabela mencionada na consulta) e os registros correspondentes da tabela à direita. Para as linhas que não têm correspondência na tabela à direita, os resultados contêm NULL na parte dos dados que viriam da tabela à direita.

### Exemplo Prático de LEFT JOIN

Continuando com o exemplo anterior, se quisermos listar todos os pedidos, incluindo aqueles sem um cliente correspondente, utilizaríamos o LEFT JOIN:

```sql
SELECT Pedidos.ID, Clientes.Nome
FROM Pedidos
LEFT JOIN Clientes ON Pedidos.ClienteID = Clientes.ID;
```

## RIGHT JOIN

O `RIGHT JOIN` (ou RIGHT OUTER JOIN) funciona de maneira oposta ao LEFT JOIN. Ele retorna todos os registros da tabela à direita e os registros correspondentes da tabela à esquerda. Se não houver correspondência na tabela à esquerda, o resultado conterá NULL na parte dos dados que viriam da tabela à esquerda.

### Exemplo Prático de RIGHT JOIN

Usando o mesmo exemplo de Pedidos e Clientes, para listar todos os clientes, incluindo aqueles que não fizeram nenhum pedido, usaríamos o RIGHT JOIN:

```sql
SELECT Clientes.Nome, Pedidos.ID
FROM Pedidos
RIGHT JOIN Clientes ON Pedidos.ClienteID = Clientes.ID;
```

## FULL JOIN

O `FULL JOIN` (ou FULL OUTER JOIN) combina os resultados do LEFT JOIN e do RIGHT JOIN. Ele retorna todos os registros quando há uma correspondência em uma das tabelas. Isso significa que, se houver correspondência entre as tabelas, todas as informações das linhas correspondentes serão combinadas. Se não houver correspondência, a consulta ainda retornará todas as linhas de ambas as tabelas, com NULL nos lugares onde a informação está ausente.

### Exemplo Prático de FULL JOIN

Para listar todas as informações de Pedidos e Clientes, independentemente de haver correspondência ou não, usaríamos o FULL JOIN:

```sql
SELECT Pedidos.ID, Clientes.Nome
FROM Pedidos
FULL JOIN Clientes ON Pedidos.ClienteID = Clientes.ID;
```

## Utilização Prática dos Relacionamentos

Na prática, INNER JOIN e LEFT JOIN são mais frequentemente utilizados. O RIGHT JOIN pode ser convertido em LEFT JOIN simplesmente invertendo as tabelas na consulta, o que facilita o entendimento e a manutenção do código. O FULL JOIN é menos comum, mas é útil quando precisamos de uma visão completa dos dados disponíveis em tabelas relacionadas.

Ao dominar o uso desses relacionamentos em SQL, profissionais podem realizar consultas complexas e extrair dados valiosos de forma eficiente e eficaz para tomadas de decisão suportadas por dados.

> ## Relacionamento entre tabelas ☝️

* * *

&nbsp;

> ## Operadores de conjunto 👇

### **`UNION ALL` no SQL: O Que é e Como Funciona?**

O `UNION ALL` é um operador no SQL usado para combinar os resultados de duas ou mais consultas **sem remover os valores duplicados**. Ele é útil quando você precisa simplesmente unir conjuntos de dados sem precisar de uma filtragem extra.

* * *

## **Sintaxe do `UNION ALL`**

```sql
SELECT coluna1, coluna2 FROM tabela1
UNION ALL
SELECT coluna1, coluna2 FROM tabela2;
```

### **Regras importantes:**

1.  O número de colunas nas duas consultas deve ser **o mesmo**.
2.  Os tipos de dados das colunas correspondentes devem ser **compatíveis**.
3.  A ordem das colunas em ambas as consultas deve ser **a mesma**.

* * *

## **Exemplo Prático**

### **Suponha que temos duas tabelas:**

#### `vendas_2023`

| id  | produto | valor |
| --- | --- | --- |
| 1   | Celular | 1500.00 |
| 2   | TV  | 3000.00 |

#### `vendas_2024`

| id  | produto | valor |
| --- | --- | --- |
| 3   | Notebook | 4000.00 |
| 4   | Celular | 1500.00 |

### **Consulta SQL com `UNION ALL`**

```sql
SELECT id, produto, valor FROM vendas_2023
UNION ALL
SELECT id, produto, valor FROM vendas_2024;
```

### **Resultado:**

| id  | produto | valor |
| --- | --- | --- |
| 1   | Celular | 1500.00 |
| 2   | TV  | 3000.00 |
| 3   | Notebook | 4000.00 |
| 4   | Celular | 1500.00 |

**Perceba que todas as linhas foram mantidas, incluindo as repetidas!**

* * *

## **Diferença entre `UNION` e `UNION ALL`**

| Operador | Remove Duplicatas? | Performance |
| --- | --- | --- |
| `UNION` | **Sim** (usa `DISTINCT` automaticamente) | Mais lento (precisa eliminar duplicatas) |
| `UNION ALL` | **Não** | Mais rápido |

### **Exemplo Comparativo**

```sql
SELECT produto FROM vendas_2023
UNION
SELECT produto FROM vendas_2024;
```

✔ Isso **removeria os produtos duplicados**, deixando apenas um "Celular".

```sql
SELECT produto FROM vendas_2023
UNION ALL
SELECT produto FROM vendas_2024;
```

✔ Isso **manteria todas as linhas**, inclusive as repetidas.

* * *

## **Quando Usar `UNION ALL`?**

✅ Quando você **não precisa remover duplicatas**.  
✅ Quando quer **melhor desempenho**, pois `UNION` pode ser mais lento.  
✅ Quando trabalha com **dados que já são distintos** e não precisa do overhead de eliminar duplicatas.  
![mindmap-union-all_page-0001.jpg](../_resources/mindmap-union-all_page-0001.jpg)

* * *

&nbsp;

# SQL: Operando com UNION e UNION ALL

## Introdução

SQL é uma linguagem poderosa para manipular e extrair dados de bancos de dados relacionais. Um dos componentes da SQL que frequentemente causa confusão para novos usuários é o uso dos operadores `UNION` e `UNION ALL`. Este ebook explora esses operadores, suas diferenças e quando usá-los para obter os melhores resultados.

## UNION vs UNION ALL

### O Operador UNION

O `UNION` é um operador que permite combinar os resultados de duas ou mais consultas em um único conjunto de resultados. Este operador é particularmente útil quando temos conjuntos de dados separados que desejamos analisar juntos. A característica chave do `UNION` é que ele elimina as linhas duplicadas dos resultados combinados.

#### A Remoção de Duplicatas

Quando usamos `UNION`, o SQL Server processa cada linha para assegurar que os resultados finais sejam distintos. Isso significa que, semelhante ao uso do comando `DISTINCT`, todos os valores duplicados são removidos, resultando em um conjunto final onde cada linha é única.

### O Operador UNION ALL

Por outro lado, `UNION ALL` combina os resultados de múltiplas consultas sem remover duplicatas. Ele simplesmente empilha os resultados de cima para baixo, preservando todas as linhas, incluindo duplicações.

#### Performance e Recursos

Um ponto importante para notar é que `UNION ALL` é tipicamente mais rápido do que o `UNION` porque não precisa realizar a etapa adicional de verificar e remover duplicatas. Consumindo menos recursos do banco de dados, `UNION ALL` é preferível sempre que a presença de linhas duplicadas nos resultados não for problemática para a análise final.

## Quando Usar Cada Operador

### Vantagens do UNION ALL

- **Performance**: Como mencionado, o `UNION ALL` é mais rápido por não remover duplicatas.
- **Simplicidade**: Caso se tenha certeza de que os resultados das consultas não conterão duplicatas, `UNION ALL` é uma escolha segura.
- **Dados Complementares**: Em situações onde se tem certeza de que os conjuntos de dados são complementares (e.g., títulos a receber e títulos a pagar), `UNION ALL` é o operador lógico a usar.

### Vantagens do UNION

- **Unicidade dos Dados**: Quando é essencial que o resultado final contenha apenas linhas únicas, o `UNION` faz sentido.
- **Dados Não Tipados**: Se as consultas podem ter valores repetidos e essas duplicatas precisam ser removidas para a análise, `UNION` é a ferramenta correta.
- **Integridade dos Dados**: Em casos onde dados duplicados podem distorcer resultados ou análises subsequentes, a garantia de unicidade provida pelo `UNION` é crucial.

## Considerações Finais

Escolher entre `UNION` e `UNION ALL` é uma decisão que dependerá da necessidade específica da consulta e do que é mais importante para o usuário: velocidade e eficiência com `UNION ALL`, ou a garantia de resultados sem duplicação com `UNION`. Ambos os operadores são ferramentas valiosas na caixa de ferramentas de um profissional de SQL e devem ser usados de acordo com os requisitos do projeto.

## Conclusão

Neste ebook, investigamos as diferenças e usos do `UNION` e `UNION ALL`. Compreender quando e como aplicar cada um destes operadores pode ajudar significativamente na manipulação e análise de dados, garantindo que suas consultas sejam tão eficientes e precisas quanto necessário.

Até a próxima aula onde exploraremos o operador `EXCEPT` e suas aplicações dentro do SQL. Um abraço e bons estudos!

* * *

&nbsp;

# Fundamentos do Operador EXCEPT em SQL

O operador EXCEPT é um comando utilizado em SQL com a finalidade de retornar registros de uma consulta que não estão presentes em outra, ou seja, ele realiza uma subtração de resultados entre duas consultas.

## Entendendo o Operador EXCEPT

O operador EXCEPT compara os resultados de duas consultas distintas e retorna apenas os registros que estão presentes na primeira consulta, mas não na segunda. Vamos explorar mais a fundo seu funcionamento.

### Utilização Prática do EXCEPT

Quando queremos buscar registros que atendem a um critério específico e ao mesmo tempo assegurar que eles não correspondam a outro critério, o EXCEPT se mostra uma ferramenta poderosa.

#### Exemplos de Uso

Considerando um banco de dados de uma empresa, suponha que desejamos listar todos os clientes que têm dívidas a pagar, mas que não possuam créditos a receber. Para isso, usamos o EXCEPT da seguinte forma:

```sql
SELECT cliente_id FROM titulos_a_pagar
EXCEPT
SELECT cliente_id FROM titulos_a_receber;
```

Este comando SQL irá nos fornecer uma lista de clientes que estão apenas na primeira situação.

## Comparação com comandos Semelhantes

É importante não confundir o operador EXCEPT com o DISTINCT ou o INTERSECT. Cada um desses comandos possui um propósito e comportamento próprios dentro do SQL.

### Distinção entre EXCEPT e DISTINCT

O DISTINCT é usado para remover duplicatas dentro de uma mesma consulta, enquanto o operador EXCEPT compara duas consultas distintas e exclui os resultados que aparecem na segunda consulta.

### Diferenças entre EXCEPT e INTERSECT

Enquanto o EXCEPT serve para subtrair registros entre duas consultas, o INTERSECT é utilizado para encontrar registros que são comuns a ambas as consultas. Em uma próxima aula, iremos detalhar mais sobre o INTERSECT.

## Considerações Finais sobre o Operador EXCEPT

O uso do EXCEPT pode ser muito útil em situações específicas e oferece uma maneira direta e eficiente de filtrar os dados necessários. Contudo, ele nem sempre é o recurso mais utilizado, uma vez que existem outras maneiras de alcançar resultados semelhantes com diferentes técnicas de consulta SQL.

Não obstante, é importante que você se familiarize com este e outros operadores do SQL, pois, em determinados contextos, eles podem simplificar significativamente as tarefas de manipulação de dados.

Agora que cobrimos os aspectos salientes do operador EXCEPT, encerramos a aula de hoje. Na próxima sessão, mergulharemos na funcionalidade do operador INTERSECT e suas aplicações práticas.

> ALT + CLICK + VIRGULA para virgulas em varias linhas diferentes

* * *

&nbsp;

# Curso SQL Avançado: Operadores e Uniões de Consultas

## Introdução aos Operadores no SQL

Bem-vindos à aula sobre os operadores Union, Except e Intersect no SQL. Neste módulo abreviado, serão explicadas as funções desses operadores e como utilizá-los adequadamente.

### Union All

O Union All é um operador que une os resultados de duas ou mais consultas, mantendo os registros duplicados.

### Union

Semelhante ao Union All, o operador Union também combina os resultados de múltiplas consultas mas, ao contrário do Union All, remove duplicatas.

## Aprofundando nos Operadores

### Except

O Except atua como uma operação de subtração entre duas consultas, retornando os registros que estão somente na primeira consulta e não na segunda.

#### Quando usar o Except

O uso do Except é apropriado em situações onde precisamos subtrair um conjunto de registros de uma consulta baseada no resultado de outra.

### Intersect

A função do Intersect é encontrar o resultado que é comum entre duas consultas distintas, ou seja, retorna apenas os registros que aparecem em ambas as consultas.

#### Utilizando o Intersect

Use o Intersect quando o objetivo for buscar uma interseção entre resultados, ou seja, registros comuns em duas consultas definidas.

## Regras Importantes de Operadores SQL

### Consistência de Colunas

É fundamental que as consultas sobre as quais estes operadores são aplicados tenham o mesmo número de colunas e tipos de dados compatíveis.

### Ordem dos Resultados

A primeira consulta determina a ordem dos resultados e os tipos de dados para as colunas, quando unidos.

## Boas Práticas e Dicas

### Priorizando o Union All

Recomenda-se preferir o Union All ao Union quando possível, especialmente se não houver preocupações com registros duplicados, pois tende a ser mais eficiente.

### Frequência de Uso

Em geral, operadores como Union e Union All são mais comumente utilizados, enquanto Except e Intersect são menos frequentes, embora importantes de conhecer para necessidades específicas.

## Conclusão e Próximos Passos

Neste módulo, exploramos brevemente operadores que permitem combinar resultados de consultas no SQL. Entender quando e como utilizar estes operadores pode enriquecer consideravelmente a manipulação de dados no dia a dia do trabalho com SQL.

No próximo módulo, avançaremos para temas que considero de nível médio a avançado, adicionando complexidade e ampliando o arsenal de ferramentas à disposição para consultas mais sofisticadas. Até lá, um forte abraço e continuem praticando SQL!

> ## Operadores de conjunto ☝️

* * *

&nbsp;

> ## Trabalhando com subqueries 👇

# Utilizando Subqueries no SQL

## Introdução às Subqueries

As *subqueries* ou subconsultas são uma ferramenta poderosa em SQL, que permitem realizar consultas SQL dentro de outras consultas. Conhecidas também como subselects, podem parecer complicadas, mas com a compreensão adequada, são simples de implementar.

### O que são Subqueries?

Uma subquery é, basicamente, um comando `SELECT` dentro de outro comando `SELECT`. Essa técnica permite realizar consultas mais complexas e dinâmicas. **A subquery é tratada como uma fonte de dados temporária e anônima**, na qual o banco de dados não armazena os resultados, sendo utilizada apenas durante a execução da consulta principal.

## Princípios Básicos das Subqueries

Antes de iniciarmos exemplos práticos, é crucial entender alguns princípios sobre as subqueries:

- Uma subquery deve ser encapsulada entre parênteses.
- Subqueries não podem incluir a cláusula `ORDER BY`.
- É necessário atribuir um alias à subquery para que possa ser referenciada ou tratada como uma "tabela" dentro da consulta principal.

### Exemplos e Prática

Vamos vivenciar o uso de subqueries com um exemplo prático. Imagine que temos duas tabelas: `títulos_a_receber` e `títulos_a_pagar`. O objetivo é consolidar as informações em uma única linha para cada cliente, mostrando o total a pagar e a receber.

#### Consulta Inicial

```
SELECT entidade, valor_a_receber, valor_a_pagar
FROM (
    SELECT entidade, SUM(valor) AS valor_a_receber
    FROM títulos_a_receber
    GROUP BY entidade
    UNION ALL
    SELECT entidade, SUM(valor) AS valor_a_pagar
    FROM títulos_a_pagar
    GROUP BY entidade
) AS transacoes
GROUP BY entidade;
```

Neste exemplo, utilizamos a cláusula `UNION ALL` para combinar os resultados de duas subqueries, formando uma fonte de dados temporária chamada `transacoes`.

### Refinando a Consulta com Subqueries

Para melhorar nossa consulta, agregaremos um cálculo de saldo e adicionaremos o nome do cliente, relacionando-o com uma terceira tabela chamada `entidades`.

```
SELECT
    transacoes.entidade,
    entidades.nome,
    SUM(valor_a_receber) AS total_a_receber,
    SUM(valor_a_pagar) AS total_a_pagar,
    (SUM(valor_a_receber) - SUM(valor_a_pagar)) AS saldo
FROM (
    SELECT entidade, valor AS valor_a_receber, 0 AS valor_a_pagar
    FROM títulos_a_receber
    UNION ALL
    SELECT entidade, 0, valor AS valor_a_pagar
    FROM títulos_a_pagar
) AS transacoes
JOIN entidades ON transacoes.entidade = entidades.codigo
GROUP BY transacoes.entidade, entidades.nome;
```

### Conclusão e próxima etapa

Dominar subqueries expande significativamente suas capacidades analíticas em banco de dados. Na próxima aula, exploraremos como relacionar duas subqueries e aprofundaremos nesse recurso potente do SQL.

Fique atento para a próxima aula, onde continuaremos a desmistificar as subqueries e explorar outras formas de utilizá-las!

* * *

# Próximos Tópicos

- Relacionamento entre Subqueries.
- Subqueries Correlacionadas.
- O impacto das Subqueries no desempenho das consultas.
- Boas práticas ao usar Subqueries.

* * *

&nbsp;

# Relacionando subqueries

## Introdução

A análise de dados é essencial para a compreensão dos processos de qualquer negócio. Uma das ferramentas mais poderosas para realizar essa análise é a subquery, ou subconsulta, no SQL. Uma subquery pode ser vista como um select dentro de outro select, permitindo-nos extrair informações complexas de uma forma muito elegante.

## O Que é uma Subquery?

Em essência, uma subquery é uma consulta embutida dentro de outra consulta SQL. Ela pode ser usada em diversas cláusulas, como SELECT, FROM e WHERE, e serve para realizar operações que normalmente necessitariam de vários passos em uma só etapa.

### Exemplo de Subquery

```sql
SELECT 
    a.nome_cliente, 
    b.valor_a_receber, 
    c.valor_a_pagar, 
    (b.valor_a_receber - c.valor_a_pagar) AS saldo
FROM 
    entidades AS a
LEFT JOIN (
    SELECT 
        codigo_cliente, 
        SUM(valor) AS valor_a_receber 
    FROM 
        titulos_receber 
    GROUP BY 
        codigo_cliente) AS b ON a.codigo_cliente = b.codigo_cliente
    
LEFT JOIN (
    SELECT 
        codigo_cliente, 
        SUM(valor) AS valor_a_pagar 
    FROM 
        titulos_pagar 
    GROUP BY codigo_cliente) AS c ON a.codigo_cliente = c.codigo_cliente
    
WHERE 
    (b.valor_a_receber IS NOT NULL) OR (c.valor_a_pagar IS NOT NULL);
```

Neste exemplo, temos duas subqueries, uma para calcular o total a receber e outra para o total a pagar por cliente, ambas unidas à tabela principal de clientes através de LEFT JOINs, e filtramos para mostrar apenas os clientes que têm ou a receber ou a pagar.

## Utilização Prática das Subqueries

As subqueries podem ser usadas para criar colunas calculadas, para filtrar dados de maneira dinâmica e até mesmo para manipular grandes quantidades de dados de maneira mais eficiente, ao reduzir a necessidade de comandos adicionais e, consequentemente, a carga sobre o banco de dados.

### Filtros e Condicionais

Quando usamos subqueries, é importante lembrar que elas devem vir entre parênteses e receber um alias. Além disso, não devemos incluir a cláusula ORDER BY dentro da subquery, já que ela será organizada externamente na consulta principal.

### Tratamento de NULLs

Em muitos casos, ao trabalhar com subqueries, podemos nos deparar com valores NULL. É essencial tratá-los de maneira adequada para não distorcer os resultados, como no exemplo da consulta anterior.

## Relacionando Subqueries

Outro ponto interessante de subqueries é a capacidade de relacioná-las não só com tabelas, mas também entre si. Isso significa que podemos criar um relacionamento entre duas subconsultas, se necessário, e manipular os dados de forma ainda mais refinada.

### Relacionamento entre Subqueries

Para vincular subqueries entre si, basta seguir o mesmo processo que utilizamos para relacionar tabelas comuns, usando, por exemplo, LEFT JOIN para relacionar a primeira subconsulta com a segunda, baseando-se em um campo em comum.

## Conclusão

Subqueries são ferramentas incrivelmente versáteis que nos permitem explorar dados em profundidade com menos esforço e mais precisão. Com elas, podemos construir consultas que entregam exatamente o que precisamos, reduzindo o trabalho manual e otimizando nossas análises de dados.

Na próxima aula, vamos continuar explorando as subqueries, focando no uso com os operadores IN e NOT IN, que também são formas bastante potentes de filtrar nossos resultados.

* * *

&nbsp;

# Utilizando subqueries com os operadores IN e NOT IN

Os subqueries, ou consultas internas, desempenham um papel fundamental em operações avançadas em bancos de dados SQL. Funcionam como consultas dentro de outras consultas, oferecendo uma grande flexibilidade na manipulação e filtragem de dados.

## Compreendendo Subqueries Básicos

Os subqueries podem ser usados de diversas maneiras, seja como fonte de dados, para filtragem ou como parte de operações condicionais. A seguir, discutiremos como utilizar subqueries para atingir resultados específicos.

### Relacionamento entre Subqueries

Assim como as tabelas físicas, subqueries podem se relacionar uns com os outros ou com tabelas concretas. O relacionamento é estabelecido por meio dos campos comuns entre as queries ou entre a subquery e a tabela física.

#### Exemplo de Relacionamento entre Tabelas e Subqueries

Considerando o relacionamento entre uma tabela de entidades (entidade `a`) e uma tabela de endereços (entidade `b`), podemos exemplificar o relacionamento através da chave `entidade`, comum a ambas as tabelas. Este relacionamento nos permite extrair informações como nome e estado do cliente.

### Filtrando Dados com Subqueries e `IN`

A cláusula `IN` é utilizada para verificar se um valor pertence a um conjunto de resultados de uma query. Um subquery utilizado em conjunto com `IN` permite filtrar registros que correspondam a este conjunto.

#### Filtrando Clientes que Realizaram Compras em 2019

Para filtrar somente aqueles clientes que compraram no ano de 2019, podemos criar um subquery que identifica as entidades que possuem registros de vendas naquele ano:

```sql
SELECT entidade FROM vendas_analiticas
WHERE YEAR(movimento) = 2019
```

Utilizando este subquery com a cláusula `IN`, podemos obter apenas os clientes desejados:

```sql
SELECT * FROM clientes WHERE entidade IN (subquery)
```

### Usando `NOT IN` para Excluir Resultados

De forma similar, a cláusula `NOT IN` é usada para excluir valores que estão presentes em um conjunto fornecido por um subquery.

#### Exemplo de Exclusão de Dados

Para excluir os clientes que compraram em 2019 da nossa lista de resultados, o subquery dentro de `NOT IN` funcionaria como um filtro:

```sql
SELECT * FROM clientes WHERE entidade NOT IN (subquery)
```

## Observações Importantes na Utilização de Subqueries

1.  Quando subqueries são usados com `IN` ou `NOT IN`, eles devem retornar apenas uma única coluna, pois o resultado precisa corresponder ao tipo de dado da coluna que está sendo filtrada.
2.  Os subqueries devem manter compatibilidade de tipos de dados com as colunas envolvidas na filtragem.
3.  Operações de agregação, funções e outros tratamentos de informações podem ser aplicados em subqueries.
4.  A manutenção de relacionamentos entre subqueries e tabelas segue as mesmas regras aplicáveis a tabelas físicas.

## Conclusão e Próximos Passos

Os subqueries são ferramentas poderosas que permitem um nível maior de precisão e flexibilidade nas consultas SQL. Ao dominar o uso de subqueries, sobretudo com cláusulas como `IN` e `NOT IN`, é possível criar seleções de dados muito específicas para atender aos mais variados cenários analíticos.

No próximo módulo, iremos avançar no uso de subqueries, explorando como utilizá-los com o operador de igualdade para criar filtros ainda mais sofisticados.

Te aguardo na próxima aula para continuarmos a desbravar os subqueries em SQL.

* * *

&nbsp;

# Utilizando subqueries com os operadores de comparação

Bem-vindo ao guia prático sobre como utilizar subqueries em SQL para filtrar e comparar dados de maneira eficiente. Este eBook irá destacar os pontos cruciais da utilização de subqueries, explicando como aplicá-las nos operadores de comparação, além de detalhar como tornar suas consultas SQL mais dinâmicas e versáteis.

## Introdução às Subqueries

No universo do SQL, uma subquery é uma consulta embutida dentro de outra consulta principal, permitindo realizar operações mais complexas e filtragens avançadas.

### O que é uma Subquery?

- É uma query dentro de outra query.
- Utilizada para comparar ou filtrar dados.

## Utilizando Subqueries com Operadores IN e NOT IN

Durante aulas anteriores, exploramos o uso de subqueries com os operadores `IN` e `NOT IN`. Esses operadores são úteis para filtrar dados de acordo com um conjunto de resultados devolvidos por uma subquery.

```sql
SELECT * 
FROM tabela_principal
WHERE campo_x IN (
    SELECT 
        campo_y 
    FROM tabela_secundaria
);
```

### Diferenças Entre IN e NOT IN

- O operador `IN` filtra os dados que estão na lista retornada pela subquery.
- O operador `NOT IN` exclui da consulta os dados presentes na lista da subquery.

## Aplicando Operadores de Comparação com Subqueries

Os operadores de comparação, como `=`, `!=`, `<`, `>`, `<=`, e `>=`, podem ser utilizados com subqueries para comparar valores individuais, em vez de listas.

### Restrições ao Utilizar Operadores de Comparação

- A subquery deve retornar **um único valor** para que o operador de comparação funcione adequadamente.
- Deve-se evitar subqueries que retornam múltiplos resultados ou múltiplas colunas quando usando operadores de comparação.

### Exemplo Prático: Cliente que Mais Comprou

Suponha que se deseja encontrar o cliente que mais realizou compras em um determinado ano, pode-se utilizar a seguinte subquery com um operador de igualdade:

```sql
SELECT 
    * 
FROM 
    clientes
WHERE id_cliente = (
    SELECT 
        TOP 1 id_cliente
    FROM 
        vendas
    GROUP BY 
        id_cliente
    ORDER BY 
        SUM(valor_vendas) 
    DESC
);
```

- A função `TOP 1` é utilizada para retornar o cliente com o maior valor de vendas.
- O `ORDER BY` é usado para ordenar os clientes pelo valor total das vendas, em ordem decrescente.

## Subqueries Dinâmicas

A habilidade de tornar as subqueries dinâmicas é crucial para adaptação às mudanças de dados. Ao invés de codificar valores específicos, as subqueries podem ajustar os resultados de acordo com os dados atualizados.

### Como Tornar Subqueries Dinâmicas

- Utilize subqueries dentro dos operadores de comparação para adaptar os resultados com base em condições atualizadas.
- Garanta que estas subqueries dinâmicas retornem um único valor ou um único registro para funcionar corretamente com os operadores de comparação.

## Conclusão

As subqueries são ferramentas poderosas dentro do SQL, permitindo aos desenvolvedores realizar comparações e filtragens complexas de dados. Ao entender como utilizá-las com diferentes operadores, como `IN`, `NOT IN`, e os operadores de comparação, você pode extrair insights valiosos dos seus dados e criar consultas mais eficazes.

* * *

&nbsp;

# Conceitos Avançados de Subqueries em SQL

Bem-vindo ao módulo avançado sobre subqueries em SQL. Neste ebook, vamos mergulhar em conceitos mais complexos para enriquecer seu conhecimento e habilidades em consultas de banco de dados.

## Subqueries: Aprofundando o Conhecimento

### O Básico Revisitado

Antes de avançarmos, é crucial revisitar o que já aprendemos. Subqueries são consultas aninhadas dentro de outras consultas que proporcionam uma poderosa forma de obtenção de dados relacionados.

#### Utilização das Subqueries

- Aninhamento em consultas
- Uso dos operadores `IN` e `NOT IN`
- Comparação entre consultas e tabelas

### A Importância das Subqueries Avançadas

Subqueries avançadas permitem criar consultas mais específicas e performáticas, oferecendo soluções para cenários onde métodos tradicionais podem não ser suficientes.

## O Uso de Joins e Relacionamentos

### A Relação com Joins

Em SQL, a forma usual de relacionar tabelas é através do uso de comandos de join, como `INNER JOIN`. No entanto, existe outra maneira de estabelecer esses vínculos.

#### Relacionamentos Sem Comandos Explícitos

- Utilização da vírgula em vez do `INNER JOIN`
- Mover o relacionamento para a cláusula `WHERE`
- Opções de uso em casos específicos

### Quando Utilizar Cada Método

É recomendado seguir a abordagem padrão do `INNER JOIN` para a maioria dos casos. A alternativa apresentada deve ser usada com cautela e em situações bem definidas.

## Além dos Joins: Exists e Not Exists

A próxima seção do curso abordará o uso dos comandos `EXISTS` e `NOT EXISTS` em subqueries, ampliando o nosso repertório de técnicas para filtros condicionais avançados.

### Integrando Exists em Subqueries

- Explicação detalhada do operador `EXISTS`
- Casos de uso prático
- Diferenciação entre `EXISTS` e métodos tradicionais

## Dicas para Avançar no Domínio de Subqueries

### Como Estudar os Conceitos Avançados

Para melhor absorção do conteúdo avançado:

- Garanta compreensão sólida dos conceitos básicos
- Foque na prática regular
- Revisite as aulas anteriores quando necessário

### Dúvidas e Desafios no Aprendizado

Se encontrar dificuldades:

- Lembre-se que a prática é essencial para o domínio
- Compreensão passo a passo pode facilitar o aprendizado
- Não hesite em revisitar o conteúdo até sentir conforto

## Conclusão

Este módulo bônus destina-se aos desenvolvedores que buscam ir além do conhecimento intermediário em SQL. Com o uso de subqueries avançadas e técnicas de join mais sofisticadas, você estará preparado para lidar com consultas complexas e garantir uma performance otimizada em suas operações de banco de dados.

* * *

&nbsp;

# Utilizando os operadores EXISTS e NOT EXISTS e relacionamentos entre subqueries

## Introdução

O propósito deste ebook é fornecer uma visão aprofundada sobre técnicas avançadas de SQL envolvendo relacionamentos e uso de subqueries, conforme apresentado na videoaula transcrita. Vamos cobrir aspectos-chave como relacionamentos entre tabelas, operadores EXISTS e NOT EXISTS, e algumas recomendações de práticas ao escrever consultas SQL.

## Capítulo 1: Entendendo os Relacionamentos

### Subseção 1.1: Relacionamentos entre Tabelas

- SQL permite o relacionamento entre duas ou mais tabelas para extrair dados de forma combinada.
- É possível realizar isso através de `JOIN` ou especificando as condições de relacionamento na cláusula `WHERE`.

### Subseção 1.2: A Expressão `WHERE` nos Relacionamentos

- Tradicionalmente, a expressão `WHERE` é utilizada para filtrar registros que atendem a uma condição específica.
- Também é possível usá-la para estabelecer relacionamentos, comparando colunas e filtrando os resultados em função de outras tabelas.

## Capítulo 2: Subqueries e Seus Usos

### Subseção 2.1: O que são Subqueries?

- Subqueries são consultas SQL aninhadas dentro de outras consultas para realizar operações mais complexas.
- Podem ser utilizadas tanto na cláusula `SELECT`, como em `FROM` ou `WHERE`, para diferentes finalidades, como filtragem de dados ou processamento de colunas dinâmicas.

### Subseção 2.2: Relacionando Subqueries com Query Principal

- Subqueries na cláusula `WHERE` podem ser combinadas com a consulta principal para filtrar resultados com base em condições dependentes de outras consultas ou tabelas.

## Capítulo 3: Operadores EXISTS e NOT EXISTS

### Subseção 3.1: O Operador EXISTS

- `EXISTS` é usado para testar a existência de registros em uma subquery relacionada.
- Quando usado na cláusula `WHERE`, `EXISTS` permite filtrar registros onde há correspondência entre a tabela principal e a subquery.

### Subseção 3.2: O Operador NOT EXISTS

- Contrário ao `EXISTS`, o `NOT EXISTS` filtra os registros onde não há correspondências na subquery.
- É uma forma útil de selecionar registros que não possuem relacionamentos em outras tabelas, por exemplo, clientes que não possuem débitos pendentes.

## Capítulo 4: Escrevendo Consultas Eficientes

### Subseção 4.1: Diferentes Maneiras de Conhecer o Mesmo Resultado

- Existem várias abordagens para se chegar a um mesmo resultado em SQL, o importante é entender o conjunto de resultados desejados.
- Aprenda as diferentes formas de construir queries, mas aplique a que for mais eficiente e legível para o caso de uso.

### Subseção 4.2: Tabelas Temporárias e CTEs

- Tabelas temporárias e Common Table Expressions (CTEs) são recursos que permitem armazenar temporariamente o resultado de uma subquery para reutilização em múltiplas operações dentro da mesma sessão ou consulta.
- Eles são úteis para simplificar consultas complexas e melhorar a performance ao reduzir a repetição de operações dispendiosas.

## Conclusão

Ao final deste ebook, você terá um entendimento mais claro sobre como realizar relacionamentos avançados e trabalhar com subqueries no SQL. A prática contínua e o envolvimento com diferentes cenários de banco de dados irão fortalecer suas habilidades de escrita e otimização de consultas.

## Agradecimentos

Encerramos o módulo sete de nosso curso com a esperança de que você possa incorporar esses conceitos avançados em seus projetos de banco de dados. Lembre-se que a comunidade e fóruns, como o nosso grupo no Discord, podem ser fontes valiosas de conhecimento e apoio.

> ## Trabalhando com subqueries ☝️

* * *

&nbsp;

> ## Tabelas temporárias e CTEs 👇
> 
> Conteudos mais avançados

# Introdução ao SQL: Tabelas Temporárias e CTEs

Bem-vindos ao módulo avançado do nosso curso de SQL. No decorrer dessas lições, vamos aprofundar nossos conhecimentos em dois recursos importantes para o desenvolvimento de queries robustas e eficientes: as tabelas temporárias e as Common Table Expressions (CTEs).

## Tabelas Temporárias: O Que São e Para Que Servem

### O Conceito de Tabelas Temporárias

Em SQL Server, as tabelas temporárias são estruturas de dados utilizadas para armazenar resultados intermediários de uma operação de banco de dados. Existem dois tipos principais de tabelas temporárias: a temporária local e a temporária global.

#### Tabelas Temporárias Locais

Essas tabelas são limitadas ao contexto de execução (SPID) e são removidas automaticamente quando a sessão que as criou é encerrada. Utilizá-las é uma boa prática para operações temporárias e isoladas.

#### Tabelas Temporárias Globais

Diferentemente das locais, as tabelas temporárias globais permanecem disponíveis para todas as sessões até que a sessão que as criou seja finalizada ou até que sejam explicitamente deletadas.

### Aplicações Práticas das Tabelas Temporárias

As tabelas temporárias são extremamente úteis quando precisamos realizar operações com dados que não precisam ser persistidos a longo prazo. São exemplos:

- Realizar cálculos complexos intermediários.
- Armazenar subconjuntos de dados para operações subsequentes.
- Fazer testes de manipulação de dados sem afetar as tabelas permanentes.

### Limitações e Considerações

- As tabelas temporárias locais estão vinculadas ao SPID e só podem ser acessadas pela sessão que as criou.
- Tabelas temporárias globais permitem acesso por diferentes sessões, mas trazem riscos de concorrência.
- Ao encerrar a sessão, as tabelas temporárias são removidas, e os dados contidos nelas são perdidos.

## Utilização e Manipulação de Tabelas Temporárias

### Criação de Tabelas Temporárias

Discutiremos em aulas futuras o processo detalhado de criação das tabelas temporárias, passando por exemplos práticos e orientações acerca de quando e como utilizá-las em cenários reais.

### Gerenciamento de Contexto e SPID

Importante notar é que cada nova aba ou sessão gera um novo contexto, o que chamamos de SPID. Este identificador é crucial para a manipulação correta das tabelas temporárias.

### Operações Comuns com Tabelas Temporárias

Tabelas temporárias suportam diversas operações de manipulação de dados, como inserção, atualização e deleção de dados. Além disso, podemos criar índices para melhorar a performance das consultas realizadas nessas tabelas.

## Conclusão e Próximos Passos

Neste módulo, abrimos o caminho para compreender a importância e o uso eficiente de tabelas temporárias e CTEs no SQL Server. No próximo encontro, iniciaremos a aplicação prática, criando nossa primeira tabela temporária e explorando a flexibilidade e potência que esses objetos temporários nos oferecem.

Fique atento para nossa próxima aula, onde finalmente colocaremos a mão na massa e testaremos o uso de tabelas temporárias ao vivo, solidificando o conhecimento teórico que construímos juntos até agora. Até breve!

* * *

&nbsp;

# Criação e Utilização de Tabelas Temporárias em Bancos de Dados

## Introdução

A utilização de tabelas temporárias é uma técnica amplamente empregada no desenvolvimento de consultas em bancos de dados. Essas tabelas permitem manipular dados de forma temporária, para consultas complexas, beneficiando a organização do código e a performance das operações.

## Criação de Tabelas Temporárias

Para criar uma tabela temporária, basicamente, segue-se o mesmo processo utilizado para a criação de uma tabela física convencional.

### Comando CREATE TABLE

O comando básico para criação de tabelas no SQL é o `CREATE TABLE`. Aqui você define o nome da tabela e as colunas com seus respectivos tipos de dados.

Exemplo:

```sql
CREATE TABLE TBL_temporaria (
    codigo_cliente INT,
    nome_cliente VARCHAR(80),
    total_vendido MONEY
)
```

### Convertendo uma Tabela Física em Temporária

Para transformar uma tabela física em temporária, insere-se o símbolo `#` antes do nome da tabela. No exemplo acima, teríamos:  
`#TBL_temporária`.

### Tabelas Temporárias Locais e Globais

- **Tabelas Locais:** Criadas com um único símbolo de `#`. São visíveis apenas na sessão em que foram criadas.
- **Tabelas Globais:** Criadas com dois símbolos de `#`. Ficam disponíveis para todas as sessões na instância do SQL.

## Estrutura e Tipos de Dados

É essencial definir corretamente os tipos de dados para cada coluna da tabela temporária, da mesma maneira que nas tabelas fixas.

Exemplo:

```sql
CREATE TABLE #TBL_temporaria (
    codigo_cliente INT,
    nome_cliente VARCHAR(80),
    total_vendido MONEY
)
```

## Criação Automática de Tabelas Temporárias

Uma maneira alternativa de criar tabelas temporárias é utilizar a cláusula `INTO` em um comando `SELECT`. O SQL Server se encarrega de definir os tipos de dados automaticamente, o que pode ser conveniente, mas menos eficiente em termos de desempenho.

Exemplo:

```sql
SELECT 
    codigo_cliente, 
    nome_cliente, 
    SUM(total_vendido) AS total_vendido 
INTO #TBL_clientes_venda
FROM vendas
```

## Utilização das Tabelas Temporárias

Tabelas temporárias funcionam como qualquer outra tabela para consulta, atualização e deleção de dados, aplicando as mesmas funções e operações disponíveis em SQL.

## Cenários de Uso

Tabelas temporárias são úteis para simplificar consultas complexas, onde subqueries podem tornar o código confuso e difícil de manter. Permitindo trabalhar com os dados de forma segmentada e organizada.

## Boas Práticas

Ao criar tabelas físicas deve-se sempre preferir a definição explícita dos tipos de dados. Já para tabelas temporárias, particularmente em operações pontuais e de menor relevância para a performance, o uso da criação automática pode ser uma opção prática.

## Considerações Finais

As tabelas temporárias são ferramentas poderosas para o manuseio eficiente dos dados em um banco de dados SQL. Elas permitem realizar operações complexas de maneira mais organizada e, quando utilizadas corretamente, podem melhorar significativamente o desempenho de consultas e operações no banco de dados.

A prática é essencial para o domínio da utilização de tabelas temporárias. Experimente aplicar os conceitos e comandos apresentados para explorar as possibilidades oferecidas por essas estruturas temporárias em seus próprios projetos.

* * *

&nbsp;

# Trabalhando com tabelas temporárias (parte 1)

## Introdução às Tabelas Temporárias

No contexto de sistemas de gestão, as tabelas temporárias são uma ferramenta essencial para o processamento de grandes volumes de transações e para a organização de dados financeiros. Neste tutorial, exploraremos como utilizar tabelas temporárias para recuperar informações cruciais como "total a pagar", "valor pago", "total a receber" e "valor recebido", além das vendas por ano e mês de cada entidade.

## Utilização Prática de Tabelas Temporárias

### Recuperação de Totais a Pagar e Valores Pagos

Quando se trata de administrar contas a pagar, um ponto crítico é a capacidade de recuperar o total a pagar e o valor efetivamente pago por ano e mês. Ao utilizar tabelas como `títulos_pagar` e `títulos_pagar_saldo`, podemos calcular não apenas o valor total que um cliente deve, mas também o saldo devedor, levando em consideração os pagamentos realizados até a data.

```sql
SELECT
  EXTRACT(YEAR FROM movimento) AS ano,
  EXTRACT(MONTH FROM movimento) AS mes,
  SUM(valor) AS total_a_pagar,
  SUM(valor) - SUM(saldo) AS total_pago
FROM
  títulos_pagar a
INNER JOIN
  títulos_pagar_saldo b
ON
  a.título_pagar = b.título_pagar
GROUP BY
  ano, mes;
```

### Recuperação de Totais a Receber e Valores Recebidos

De forma semelhante, para as contas a receber, podemos identificar o valor que se espera receber de clientes, bem como o que já foi de fato recebido no mesmo período de referência.

```sql
SELECT
  EXTRACT(YEAR FROM movimento) AS ano,
  EXTRACT(MONTH FROM movimento) AS mes,
  SUM(valor) AS total_a_receber,
  SUM(valor) - SUM(saldo) AS total_recebido
FROM
  títulos_receber a
INNER JOIN
  títulos_receber_saldo b
ON
  a.título_receber = b.título_receber
GROUP BY
  ano, mes;
```

### Recuperação de Vendas por Ano e Mês

Além do controle de contas a pagar e a receber, é fundamental ter um registro detalhado das vendas realizadas, organizadas por ano e mês, para um acompanhamento efetivo da performance comercial.

```sql
SELECT
  EXTRACT(YEAR FROM data_venda) AS ano,
  EXTRACT(MONTH FROM data_venda) AS mes,
  SUM(valor_venda) AS total_vendas
FROM
  vendas_analíticas
GROUP BY
  ano, mes;
```

## Conclusão e Próximos Passos

Ao dominar a utilização de tabelas temporárias e queries especializadas, profissionais de tecnologia da informação podem prover análises valiosas para a gestão financeira. Os dados obtidos podem apontar para tendências de pagamento, recebimento e vendas, corroborando para uma melhor tomada de decisões estratégicas na empresa.

* * *

&nbsp;

# Trabalhando com tabelas temporárias (parte 2)

## Introdução

Neste e-book, vamos explorar a funcionalidade das tabelas temporárias no gerenciamento de bancos de dados SQL, aplicando conhecimentos avançados de consultas e tratamento de dados. Este recurso permite dividir processos complexos em etapas mais simples, facilitando a análise e a otimização das consultas.

## Utilidade das Tabelas Temporárias

As tabelas temporárias são estruturas de dados dinâmicas que servem para armazenar resultados intermediários de uma consulta complexa, auxiliando em análises e processamentos subsequentes.

### Vantagens das Tabelas Temporárias

- **Organização**: Separação de lógicas complexas em partes menores e mais gerenciáveis.
- **Eficiência**: Redução do risco de planos cartesiano indesejados e lentidão nas consultas.
- **Validação**: Facilidade no tracking de erros e verificação dos dados em todo o processo.

## Criação e Uso de Tabelas Temporárias

Para criar uma tabela temporária, utilizamos o comando `INTO`, inserindo os dados resultantes de uma consulta em uma estrutura temporária que podemos acessar posteriormente.

### Exemplo de Criação de Tabela Temporária

```sql
SELECT cliente, ano, mes, SUM(valor) AS TotalVendido
INTO #TotalVendidoPorCliente
FROM vendas
GROUP BY cliente, ano, mes;
```

## Relacionamento e Joins

As tabelas temporárias podem ser relacionadas entre si ou com tabelas permanentes do banco, fazendo uso das cláusulas `JOIN`, `WHERE` e outras, sempre respeitando as chaves que identificam cada linha de forma única.

### Relacionando Tabelas Temporárias

Você pode relacionar diversas tabelas temporárias ou tabelas temporárias com tabelas permanentes para obter uma visão combinada dos dados.

```sql
SELECT a.cliente, b.nome, a.ano, a.mes, a.TotalVendido, b.TotalRecebido
FROM #TotalVendidoPorCliente a
JOIN #TotalRecebidoPorCliente b
ON a.cliente = b.cliente AND a.ano = b.ano AND a.mes = b.mes;
```

## Caso Prático

Vamos simular um cenário que envolve vendas, valores a receber e a pagar, e como podemos utilizar tabelas temporárias para facilitar o processo:

1.  **Vendas Realizadas**: Tabela temporária agrupando vendas por cliente, ano e mês.
2.  **Valores a Receber**: Tabela temporária com valores a receber, saldo atual e recebimentos.
3.  **Valores a Pagar**: Tabela temporária com valores a pagar e saldo devedor.
4.  **Consulta Final**: Consulta que une as três tabelas temporárias, fornecendo um relatório consolidado de atividades financeiras dos clientes por período.

### Processo de Execução

- Utilizar o `INTO` para criar as tabelas temporárias com as informações desejadas.
- Empregar `JOIN` para relacioná-las com base em campos chave comuns.
- Utilizar funções de agregação e manipulação de dados para ajustar e calcular dados finais conforme a necessidade.

## Conclusão

As tabelas temporárias são uma ferramenta poderosa no arsenal de um profissional de SQL, oferecendo vantagens significativas em termos de performance e organização de código em consultas complexas. Com isso, esperamos ter proporcionado uma visão clara sobre como utilizá-las de forma eficaz, otimizando o trabalho com bancos de dados e entregando resultados mais precisos e coerentes.

* * *

&nbsp;

# Apagando tabelas de forma inteligente

## Introdução às Tabelas Temporárias

As tabelas temporárias são objetos muito utilizados no desenvolvimento SQL, oferecendo uma forma de armazenar resultados intermediários durante a execução de queries complexas. Elas são criadas de forma semelhante às tabelas permanentes, mas têm algumas peculiaridades importantes de gestão e escopo que veremos a seguir.

### Criação e Uso das Tabelas Temporárias

Existem basicamente duas formas de se criar tabelas temporárias:

1.  Criação explícita com o comando `CREATE TABLE`, seguida de `INSERT INTO` para popular a tabela.
2.  Criação implícita utilizando o comando `SELECT ... INTO`.

No primeiro método, especificamos diretamente os tipos de dados e estruturas. Já no segundo, a tabela é criada automaticamente ao executar o `SELECT ... INTO`, baseada na estrutura do resultado da query que estamos executando.

#### O Desafio das Reexecuções

Um desafio surge quando tentamos executar o mesmo script mais de uma vez na mesma sessão: a existência prévia da tabela temporária acarreta um erro, pois o SQL tenta recriar um objeto que já existe.

### Manipulação de Tabelas Temporárias

Para gerenciar esse problema, comumente utilizamos o comando `DROP TABLE` para excluir a tabela antes de recriá-la. No entanto, esse comando, quando utilizado em tabelas não-temporárias, exclui também a estrutura da tabela, o que pode ser perigoso se usado inadvertidamente.

## Estratégia Inteligente: Verificar Antes de Excluir

A abordagem mais inteligente envolve verificar se a tabela existe antes de tentar excluí-la.

### Verificação da Existência da Tabela

Podemos usar a função `OBJECT_ID` para verificar se um objeto existe dentro de um banco de dados. No caso de tabelas temporárias, elas estão localizadas no banco de dados `tempDB`. A verificação ocorreria da seguinte maneira:

```sql
IF OBJECT_ID('tempDB..#MinhaTabelaTemp') IS NOT NULL
    DROP TABLE #MinhaTabelaTemp;
```

### Simplificando a Estrutura Condicional

Em SQL, quando temos apenas um comando a ser executado sob uma condição `IF`, podemos omitir os blocos `BEGIN` e `END` para tornar o código mais limpo e conciso.

### Utilização em Procedimentos Complexos

Essa estrutura condicional para manipulação de tabelas temporárias se torna muito útil em procedimentos automatizados, como Stored Procedures ou Jobs, evitando erros de execução por objetos já existentes.

## Recomendações Finais e Precauções

- Sempre faça verificações de existência antes de excluir uma tabela, seja ela temporária ou não.
- Utilize as tabelas temporárias com consciência, lembrando que seu uso excessivo pode afetar o desempenho e a legibilidade do código.

## Conclusão

Tabelas temporárias são ferramentas poderosas no arsenal de um desenvolvedor SQL. Saber quando e como utilizá-las, bem como gerenciá-las de forma inteligente, é essencial para criar scripts eficientes e confiáveis.

Na próxima aula, daremos início ao estudo das CTEs (Common Table Expressions), avançando ainda mais no uso de recursos do SQL para manipulação de dados.

* * *

&nbsp;

# Introdução ao Uso de Common Table Expressions (CTE) no SQL

## O que é CTE (Common Table Expressions)

CTE, sigla para Common Table Expressions, são expressões que permitem a manipulação temporária de conjuntos de dados e muito utilizadas para organizar consultas SQL complexas de maneira mais legível.

## Utilidade das CTEs

As CTEs servem para criar uma tabela temporária cujos dados podem ser reutilizados dentro de uma mesma consulta. Isso é útil quando é preciso consolidar dados para utilização em outras partes da consulta, como em joins e subconsultas.

## Como criar uma CTE

Para criar uma CTE, utilizamos a instrução `WITH`, seguida pelo nome atribuído à CTE e, entre parênteses, a query que representa o dado a ser encapsulado. É fundamental que a CTE seja definida antes de sua utilização no escopo do código SQL.

Exemplo de criação de uma CTE:

```sql
WITH cte_nome AS (
    -- Query que ajuda a montar a CTE
)
```

## Exemplos Práticos no SQL

### Exemplo 1: CTE para Estoque de Produtos

```sql
WITH CTE_produtos_estoque AS (
    -- Query que retorna o saldo de estoque
)
```

### Exemplo 2: CTE para Produtos Vendidos

```sql
WITH CTE_produtos_vendidos AS (
    -- Query que retorna a quantidade de produtos vendidos
)
```

### Uso Conjunto das CTEs Criadas

```sql
-- Consulta utilizando ambas as CTEs
SELECT p.nome, e.saldo, v.vendido
FROM produto p
LEFT JOIN CTE_produtos_estoque e ON p.id_produto = e.id_produto
LEFT JOIN CTE_produtos_vendidos v ON p.id_produto = v.id_produto
```

## Considerações Importantes sobre CTE

1.  Cada CTE é temporária e dura apenas durante a execução do bloco de código que a criou.
2.  Podem ser criadas várias CTEs em sequência, separadas por vírgulas após a cláusula `WITH`.
3.  Após a declaração das CTEs, é esperado um único comando SQL (SELECT, INSERT, UPDATE, DELETE).
4.  CTEs fornecem uma forma organizada de dividir e conquistar problemas mais complexos em consultas SQL.

## Conclusão

As Common Table Expressions são ferramentas extremamente úteis para trabalhar com bancos de dados SQL, facilitando a manipulação de dados e a leitura de códigos complexos. Este recurso é recomendado para quem deseja trabalhar de forma mais estruturada com conjuntos de dados em consultas SQL.

* * *

&nbsp;

# Especificando colunas para uma CTE

## Introdução

Este eBook tem como objetivo fornecer uma introdução detalhada às Common Table Expressions (CTEs) em SQL, explicar como elas funcionam, quando usá-las e como diferenciá-las de tabelas temporárias e subqueries.

## Conceitos Básicos das CTEs

CTEs são uma técnica avançada para organizar consultas complexas de forma mais legível e modular. Ao contrário das tabelas temporárias, as CTEs não são armazenadas fisicamente no banco de dados, são calculadas em tempo de execução e têm um escopo muito específico.

### Criação Simples de CTE

```sql
WITH CTE_Nome AS (
  -- Consulta SQL que define a CTE
)
```

- A cláusula `WITH` inicia a definição da CTE.
- `CTE_Nome` é o nome que será usado para referenciar a CTE na consulta principal.

### CTEs com Campos Especificados

```sql
WITH CTE_Nome (Campo1, Campo2) AS (
  -- Consulta SQL com campos especificados
)
```

- Os campos dentro dos parênteses definem os nomes das colunas que a CTE terá.

## Utilizando CTEs em Consultas

### Execução e Escopo de CTEs

- CTEs precisam ser usadas imediatamente após a sua definição.
- Uma vez definida, qualquer consulta subsequente no mesmo comando SQL pode referenciar a CTE.

### Exemplo de Consulta com CTE

```sql
WITH CTE_Produtos AS (
  SELECT ID_Produto, Quantidade FROM Produtos
)
SELECT * FROM CTE_Produtos;
```

- A consulta `SELECT` usa a CTE logo após a sua definição.

## Diferenças entre CTEs, Tabelas Temporárias e Subqueries

### CTEs versus Tabelas Temporárias

- CTEs são efêmeras e desaparecem após a execução.
- Tabelas temporárias existem até o fim da sessão ou até serem explicitamente excluídas.

### CTEs versus Subqueries

- CTEs podem ser mais legíveis e mais facilmente reutilizáveis do que subqueries aninhadas.

## Melhores Práticas

- Não misture CTEs com tabelas temporárias na mesma consulta, pois isso pode gerar confusão e ineficiência.
- A escolha entre usar CTEs, subqueries ou tabelas temporárias pode depender da complexidade da consulta e do desempenho desejado.

* * *

&nbsp;

# Principais diferenças entre CTE's e temporárias

## Introdução

Bem-vindos ao guia definitivo sobre objetos temporários e estruturas de consulta em banco de dados. Este eBook é voltado para quem deseja aprofundar o entendimento sobre tabelas temporárias, Common Table Expressions (CTEs) e subqueries para otimizar desempenho e flexibilidade em buscas e manutenção de dados.

### Objetivos de Aprendizado

Ao concluir a leitura deste eBook, você estará apto a:

1.  Compreender a importância de tabelas temporárias, CTEs e subqueries.
2.  Identificar cenários adequados para cada objeto.
3.  Melhorar a performance de consultas SQL.

## Tabelas Temporárias

### Conceitos Básicos

Tabelas temporárias são fundamentais para simular tabelas físicas, permitindo a definição de índices e, consequentemente, consultas mais rápidas. Ideais para lidar com grandes volumes de dados no dia a dia de trabalho, elas, no entanto, possuem limitações significativas.

### Limitações e Aplicações

Limitações incluem a incompatibilidade com views ou funções, embora possuam uma execução geralmente mais rápida. A compreensão aprofundada de quando e como utilizar tabelas temporárias é crucial para o sucesso na utilização de bancos de dados.

## Common Table Expressions (CTEs)

### CTEs e Flexibilidade

Diferentemente das tabelas temporárias, CTEs podem ser utilizadas em views, stored procedures, e outros objetos de banco de dados. Esse fator confere a elas uma enorme flexibilidade, apesar de, em alguns casos, resultar em performance ligeiramente inferior.

### Performance e Testes

CTEs podem demorar mais para serem executadas em comparação com as tabelas temporárias. No entanto, vale ressaltar a importância de testes e análises no ambiente específico para determinar o melhor objeto para cada cenário.

## Subqueries

### Utilização de Subqueries

Subqueries funcionam como consultas aninhadas e são capazes de serem utilizadas onde tabelas temporárias não podem, semelhante às CTEs. Elas são uma opção para dividir problemas maiores em menores, facilitando o manuseio de consultas complexas.

### Performance e Considerações

A performance das subqueries pode variar significativamente, dependendo do contexto, dos índices das tabelas e da estrutura dos dados. Assim como com CTEs, é recomendado que sejam realizados testes para identificar a melhor aplicação.

## Estratégias e Análise de Caso

### Análise de Caso por Caso

Cada situação exigirá uma análise minuciosa para determinar se tabelas temporárias, CTEs ou subqueries são mais apropriadas. Fatores como estrutura de dados, volume de dados e índices são determinantes para tomar a decisão mais eficiente.

> ## Tabelas temporárias e CTEs ☝️

* * *

> ## Variáveis 👇

# Conceitos Básicos Sobre Variáveis no SQL

## Introdução às Variáveis

Aprenda os conceitos essenciais de como trabalhar com variáveis no SQL e entenda a importância de declarar, tipar e atribuir valores às variáveis para manipular e armazenar dados dinamicamente durante a execução de comandos SQL.

### O que é uma Variável?

Uma variável no contexto de bancos de dados SQL é um objeto que permite armazenar temporariamente dados que podem ser modificados durante a execução do código SQL.

### Declarando Variáveis no SQL

Para utilizar uma variável, é preciso declará-la utilizando a instrução `DECLARE`. Todas as variáveis começam com o símbolo de `@` no SQL.

Exemplo:

```sql
DECLARE @nomeVariavel TIPODADO;
```

### Nomenclatura Sugerida

É sempre recomendado usar nomes sugestivos para variáveis facilitando o entendimento do que cada uma representa.

### Tipagem de Variáveis

No SQL, é necessário especificar o tipo de dado que a variável armazenará, conhecido como "tipagem".

## Manipulação de Variáveis

### Atribuindo Valores

Valores são atribuídos às variáveis utilizando o comando `SET`.

Exemplo:

```sql
SET @nomeVariavel = VALOR;
```

### Mudança de Valor das Variáveis

Variáveis podem ter seus valores alterados ao longo da execução dos comandos. Tenha cuidado ao alterar valores de variáveis para evitar erros indesejados.

## Uso Prático de Variáveis

### Filtragem Utilizando Variáveis

É comum utilizar variáveis para filtrar dados em uma consulta, onde o valor da variável atua como parâmetro no `WHERE`.

### Sumarização com Variáveis

Variáveis também podem ser usadas para fazer sumarização, acumulando somas ou outros cálculos durante a execução de consultas.

## Conclusão

As variáveis são ferramentas cruciais para a execução dinâmica de comandos SQL. Eles permitem um maior controle sobre os dados manipulados e ajudam a construir códigos SQL mais flexíveis e poderosos. Na próxima aula, abordaremos consultas mais complexas utilizando variáveis para aprimorar nosso entendimento e habilidade de filtragem avançada.

* * *

&nbsp;

# Sobre a Utilização de Variáveis em Comandos SQL

## Introdução

Neste material, exploraremos como as variáveis podem ser definidas e utilizadas em comandos SQL para melhorar a manutenção e flexibilidade de nossos códigos. Abordaremos a declaração de variáveis, a atribuição de valores e as maneiras de utilizá-las em diferentes cenários. Aprender sobre variáveis é fundamental para quem trabalha com bancos de dados e deseja criar códigos mais limpos e fáceis de manter.

## Declaração de Variáveis

### O que são Variáveis

Variáveis são elementos essenciais na programação que nos permitem armazenar dados temporariamente para serem utilizados em diversas partes do código.

### Declarando Variáveis em SQL

Em SQL, as variáveis são declaradas usando a instrução `DECLARE` seguido do nome da variável com um prefixo `@` e o tipo de dado que ela irá armazenar.

```sql
DECLARE @variavel DATE
```

## Atribuição de Valores às Variáveis

Ao declarar uma variável, podemos também atribuir um valor a ela imediatamente, o que é feito utilizando a instrução `SET`.

```sql
SET @variavel = '2023-01-01'
```

### Utilização de Variáveis em Consultas

As variáveis podem ser utilizadas em filtros e outras partes de uma consulta para tornar o código mais flexível e mais fácil de ser alterado.

```sql
SELECT *
FROM titulos_a_receber
WHERE data_movimento >= @variavel
```

## Manutenção e Boas Práticas

### Mantendo Variáveis no Início do Código

É uma boa prática manter a declaração e a inicialização das variáveis no início do código para facilitar a manutenção.

### Simplificando a Declaração de Variáveis

Podemos declarar múltiplas variáveis em sequência, separando-as por vírgulas para tornar o código mais limpo.

```sql
DECLARE @movimento_inicial DATE, @movimento_final DATE
SET @movimento_inicial = '2019-01-01'
SET @movimento_final = '2019-12-31'
```

## Operações com Variáveis

### Realizando Operações Aritméticas

Podemos realizar operações aritméticas com variáveis da mesma forma que com colunas de uma tabela.

```sql
DECLARE @percentual_acrescimo NUMERIC(15,2) = 10.00
SELECT valor + (valor * @percentual_acrescimo / 100) AS valor_com_juros
FROM titulos_a_receber
```

### Exibindo Valores de Variáveis em Resultados

É possível exibir o valor de variáveis nos resultados da consulta, usando-as como se fossem colunas.

```sql
SELECT @movimento_inicial AS 'Data Inicial', @movimento_final AS 'Data Final'
```

## Conclusão

Variáveis são extremamente úteis para quem trabalha com SQL diariamente. Seu uso resulta em códigos mais flexíveis e facilita a manutenção e as atualizações necessárias. Esperamos que este material tenha fornecido uma visão clara sobre como declarar e usar variáveis em consultas SQL e as vantagens que elas oferecem para a qualidade do código e eficiência no desenvolvimento.

* * *

&nbsp;

# SQL e Variáveis: Atribuindo Valores Dinâmicos

Neste conteúdo, você vai aprender a atribuir valores dinâmicos às variáveis dentro do SQL Server, utilizando diferentes formas comandos `SELECT`. A habilidade de atribuir valores dinâmicos é essencial para scripts SQL mais flexíveis e poderosos.

## Declaração e Atribuição de Variáveis

Inicialmente, entendemos que para declarar uma variável no SQL Server, usamos o comando `DECLARE`. Todo nome de variável começa com um @, indicando no contexto do SQL que se trata de uma variável.

```sql
DECLARE @variavel TIPO;
```

Para atribuir um valor fixo a uma variável, usamos o comando `SET`:

```sql
SET @variavel = 'valor';
```

Se quisermos atribuir um valor dinâmico, podemos utilizar uma função, como:

```sql
SET @dataAtual = GETDATE();
```

## Utilizando `SELECT` para Definir Valor de Variáveis

Agora, vamos explorar como usar o comando `SELECT` para definir o valor de uma variável baseado no resultado de uma consulta.

### Terceira Forma: Uso de `SET` com `SELECT`

Podemos definir o valor de uma variável a partir do resultado de um comando `SELECT`, usando o comando `SET` e encapsulando a consulta com parênteses:

```sql
DECLARE @estadoMenorVenda CHAR(2);
SET @estadoMenorVenda = (SELECT TOP 1 estado FROM Tabela ORDER BY VendaLiquida ASC);
```

### Quarta Forma: Atribuição Direta com `SELECT`

Alternativamente, é possível atribuir valores a várias variáveis diretamente em um comando `SELECT`. Nesse caso, a consulta deve retornar apenas uma linha e você deve especificar as variáveis correspondentes a cada coluna:

```sql
DECLARE @ufMaiorVenda CHAR(2);
DECLARE @valorTotalVenda NUMERIC(15, 2);

SELECT @ufMaiorVenda = estado, @valorTotalVenda = SUM(VendaLiquida)
FROM Tabela
GROUP BY estado
ORDER BY SUM(VendaLiquida) DESC;
```

## Aplicação Prática das Variáveis

Com os valores atribuídos dinamicamente às variáveis, podemos utilizá-las para realizar novas consultas e manipular dados de maneira eficiente e personalizada conforme nossas necessidades.

### Exemplo de Consulta Utilizando Variáveis

```sql
SELECT Cliente, Email
FROM TabelaClientes
WHERE Estado = @estadoMenorVenda;
```

### Importância da Prática

Tudo que você aprende durante o curso pode ser aplicado em diferentes combinações, para resolver problemas cada vez mais complexos. Praticar é essencial para fixar o conhecimento e preparar-se para situações reais de manipulação de dados com SQL.

## Conclusão

Concluímos nosso módulo sobre variáveis e atribuição de valores dinâmicos. Nas próximas seções, nos aprofundaremos em funções, procedimentos armazenados (`stored procedures`), e manipulação de dados com `INSERT`, `UPDATE`, e `DELETE`. O entendimento completo desses conceitos é crucial para trabalhar efetivamente em um ambiente de banco de dados SQL.

* * *

&nbsp;

# Criando e utilizando varáveis do tipo TABLE

## Introdução

Olá, sejam muito bem-vindos à nossa aula sobre variáveis no SQL. Neste módulo, vamos explorar as variáveis de tipos diversos, incluindo um tipo especial: a variável do tipo tabela.

## Variáveis Convencionais

Durante o curso, vimos como declarar e utilizar variáveis de diversos tipos padrão, como `NUMERIC`, `DATE`, `VARCHAR`, entre outros. Aprendemos como atribuir valores, sejam eles fixos ou dinâmicos, e também como utilizar a instrução `SELECT` para atribuir valores a variáveis.

### Declaração e Atribuição

Para declarar uma variável convencional, utilizamos a sintaxe:

```sql
DECLARE @nome_variavel TIPO_DADO;
```

E para atribuir valor, usamos:

```sql
SET @nome_variavel = valor;

-- ou, através de um SELECT:

SELECT @nome_variavel = coluna FROM tabela WHERE condicao;
```

## Variáveis do Tipo Table

Passamos agora para um tipo especial de variável: a variável do tipo table. Essa variável funciona de forma similar a tabelas temporárias com `subqueries`, e serve para armazenar informações temporárias em um tipo tabela.

### Definição de Variáveis do Tipo Table

Para definir uma variável do tipo table, fazemos de maneira semelhante às variáveis convencionais:

```sql
DECLARE @tabela_variavel TABLE (
    coluna1 TIPO_DADO1,
    coluna2 TIPO_DADO2,
    ...
);
```

É como se estivéssemos criando uma tabela, definindo colunas e seus respectivos tipos de dados.

### Populando Variáveis do Tipo Table

Essa variável pode ser populada usando a instrução `INSERT INTO`, seguido de um `SELECT` com as informações desejadas:

```sql
INSERT INTO @tabela_variavel (coluna1, coluna2, ...)
SELECT valor_coluna1, valor_coluna2, ... FROM fonte_dados WHERE condicao;
```

### Utilizando Variáveis do Tipo Table

Uma vez populada, a variável do tipo table pode ser utilizada em consultas `SELECT`, `JOIN`, entre outros, como uma tabela normal. Por exemplo:

```sql
SELECT * FROM @tabela_variavel;
```

## Considerações Finais

- Lembre-se de que variáveis do tipo table devem ser utilizadas com cautela, pois elas armazenam os dados na memória do servidor e podem afetar outras operações dependendo do volume de dados.
- As variáveis do tipo table são especialmente úteis para procedimentos e funções onde tabelas temporárias tradicionais não são permitidas.
- A declaração, população e utilização requerem a observação de todas as instruções associadas, pois elas funcionam em conjunto para proporcionar a persistência temporária e o tratamento dos dados.

## Conclusão

Concluímos, assim, nosso módulo dedicado a variáveis, abordando tanto as convencionais quanto as do tipo table. No próximo módulo, avançaremos para o estudo de funções e procedimentos no SQL, onde continuaremos a aplicar esses conceitos.

> ## Variáveis ☝️

* * *

&nbsp;

> ## Manipulando dados 👇

# SQL e Manipulação de Dados para Inserção em Massa

## Introdução ao SQL e Comandos de Seleção

SQL, ou Structured Query Language, é a linguagem padrão para gerenciar e manipular bancos de dados. Na prática, quase tudo o que você faz com um banco de dados é feito através de um conjunto de instruções SQL.

### O Comando SELECT

O comando SELECT é um dos mais poderosos e fundamentais no SQL, pois é o meio pelo qual recuperamos dados do banco de dados. A estrutura básica do SELECT é: `SELECT colunas FROM tabela WHERE condições`.

## Inserção de Dados a Partir de Seleções

A inserção de dados (INSERT) em uma tabela pode ser feita utilizando um SELECT para especificar os dados que serão inseridos. Com isso, é possível inserir uma linha, várias linhas ou ainda inserir dados de forma condicional e baseada em outra tabela ou view.

### Exemplo de Inserção em Massa

Vamos usar um exemplo hipotético de uma tabela de entidades e vendedores para demonstrar como inserir em massa utilizando o SELECT para definir os dados.

#### Estrutura da Inserção em Massa

```sql
INSERT INTO vendedores (nome, entidade, empresa_usuaria, desconto)
SELECT nome, entidade, 'empresa1', desconto
FROM entidades
WHERE ...
```

Aqui, a ideia é inserir dados na tabela `vendedores`, com a condição de que estes dados virão da tabela `entidades`.

## Controle de Transações

É importante mencionar o conceito de controle de transações. O SQL Server utiliza os comandos `BEGIN TRANSACTION`, `COMMIT`, e `ROLLBACK` para controlar transações.

### Começando uma Transação

```sql
BEGIN TRANSACTION
```

### Finalizando uma Transação com Sucesso

```sql
COMMIT
```

### Desfazendo uma Transação

```sql
ROLLBACK
```

## Utilizando Variáveis em Inserts

Variáveis podem ser usadas para dinamizar inserts e adaptação às necessidades do usuário ou da aplicação.

```sql
DECLARE @entidade_inicio INT = 1004
DECLARE @entidade_fim INT = 1050

INSERT INTO vendedores (nome, entidade, empresa_usuaria, desconto)
SELECT nome, entidade, 'empresa1', CASE 
WHEN YEAR(data_cadastro) <= 2014 THEN '10%'
WHEN YEAR(data_cadastro) = 2015 THEN '5%'
ELSE '0%'
END AS desconto
FROM entidades
WHERE entidade BETWEEN @entidade_inicio AND @entidade_fim
```

## Conclusão

O comando INSERT utilizado em conjunto com SELECT é altamente versátil e pode ser usado para realizar inserções em massa de forma eficiente e condicional. A compreensão do controle de transações é crucial para manter a integridade e consistência dos dados durante essas operações.

Pronto para avançar e aplicar esses conhecimentos na prática com seus bancos de dados e projetos de SQL. Lembre-se sempre de validar o seu comando SELECT antes de inserir os dados e use controle de transações para manter a segurança e integridade dos dados.

* * *

&nbsp;

# UPDATE - Atualizando registros com instrução SELECT

## Introdução

Olá, seja bem-vindo a mais uma aula!

Hoje abordaremos os comandos de manipulação de dados em SQL, focando nas operações de **update**. Aprenderemos a realizar atualizações de maneira eficiente, considerando tanto atualizações simples quanto em massa.

## Atualização de Dados Simples

### Comando UPDATE

O comando `UPDATE` é utilizado para modificarmos os valores presentes em nossa base de dados. Vejamos um exemplo simples:

```sql
UPDATE endereco
SET endereco = 'Novo Endereço'
WHERE CEP = '00000-000';
```

No exemplo acima, estamos alterando o endereço de todos os registros que possuem o CEP '00000-000' para 'Novo Endereço'.

### Atualizando Uma Linha

Quando desejamos alterar apenas uma linha específica, utilizamos condições no comando `WHERE` para restringir nossa seleção.

```sql
UPDATE endereco
SET endereco = 'Novo Endereço'
WHERE id = 1;
```

## Atualização de Dados em Massa

Para atualizações em massa, a construção do comando UPDATE é ligeiramente diferente e envolve o uso de subconsultas e relacionamentos entre tabelas.

### Joins e Subconsultas

Utilizamos `JOINS` para ligar tabelas relacionando colunas em comum. Subconsultas são utilizadas para compor o conjunto de dados que desejamos alterar.

### Exemplo de UPDATE com JOIN

```sql
UPDATE endereco
SET endereco = CEP.novo_endereco
FROM endereco
JOIN CEP ON endereco.CEP = CEP.CEP
WHERE endereco.endereco <> CEP.novo_endereco;
```

Neste exemplo, atualizamos os endereços em nossa tabela com base nos novos endereços de uma tabela de CEPs relacionada.

### Considerações na Atualização

- É essencial conferir a consulta que irá basear a atualização para garantir que apenas os dados desejados serão alterados.
- Utilizamos `BEGIN TRANSACTION` e `ROLLBACK` para garantir que, em caso de erro, possamos desfazer a operação sem impactar a base permanentemente.

## Conclusão

A habilidade de manipular corretamente dados em SQL, principalmente ao realizar atualizações, é fundamental para qualquer profissional que trabalha com bases de dados. Continue praticando e revisando as aulas anteriores para fortalecer sua compreensão e habilidades.

* * *

&nbsp;

# DELETE - Apagando registros com instruções SELECT

## Introdução

Bem-vindos ao material complementar da aula sobre técnicas avançadas de gerenciamento de dados com SQL. Este conteúdo foi preparado para enfatizar os principais pontos abordados no vídeo, focando especialmente no uso de comandos avançados para manipulação de registros em um banco de dados.

## Delete de Registros

O ato de excluir registros de uma base de dados é uma operação crítica que deve ser realizada com precisão para evitar a perda de dados importantes.

### A importância do comando DELETE

O DELETE é um comando que permite ao usuário excluir um ou mais registros de uma tabela, e a correta utilização deste comando é crucial para manter a integridade dos dados.

### Antes de deletar: consultar os dados

Antes de executar um DELETE, é essencial que uma consulta (SELECT) seja feita para garantir que apenas os registros desejados sejam excluídos.

#### Exemplo prático

Suponha que desejamos excluir marcas que não estão associadas a nenhum produto em um banco de dados que armazena essas relações.

##### Montando a consulta

```sql
SELECT m.codigo_da_marca
FROM marcas m
LEFT JOIN produtos p ON m.codigo_da_marca = p.codigo_da_marca
WHERE p.codigo_do_produto IS NULL;
```

##### Analisando a consulta

Esta consulta retorna todas as marcas que não têm produtos associados, e é crucial analisar e validar os resultados antes de prosseguir com o DELETE.

### Executando a exclusão

Com a certeza de que os dados retornados na consulta são exatamente aqueles que queremos excluir, podemos prosseguir com o comando DELETE.

#### Comandos DELETE disponíveis

Podemos optar por diferentes maneiras de estruturar o comando DELETE, mas todas levam ao mesmo resultado: a exclusão dos dados desejados.

##### Opção 1: DELETE com SELECT

```sql
DELETE FROM marcas
WHERE codigo_da_marca IN (
    SELECT m.codigo_da_marca
    FROM marcas m
    LEFT JOIN produtos p ON m.codigo_da_marca = p.codigo_da_marca
    WHERE p.codigo_do_produto IS NULL
);
```

##### Opção 2: DELETE com condicional direta

```sql
DELETE FROM marcas
WHERE codigo_da_marca NOT IN (
    SELECT p.codigo_da_marca
    FROM produtos p
);
```

#### Recomendações

Sempre utilize `BEGIN TRANSACTION` para operações que podem ser arriscadas, oferecendo uma camada extra de segurança com a possibilidade de um `ROLLBACK` caso algo saia do esperado.

## Fechamento

Com o entendimento de como construir consultas eficientes e como aplicar o comando DELETE de maneira segura, estamos preparados para manipular os dados com cuidado e precisão.

### O que vem a seguir?

Na próxima aula, abordaremos o comando MERGE, uma ferramenta poderosa do SQL Server capaz de executar INSERT, UPDATE e DELETE em um único comando. Aguardem por mais um conteúdo enriquecedor.

* * *

&nbsp;

# Comando Merge em SQL

## Introdução ao Comando Merge em SQL

Bem-vindos ao mundo dos bancos de dados relacionais, onde o comando Merge joga um papel fundamental em operações de sincronização de dados. Nesta seção, vamos explorar os conceitos básicos e a sintaxe do comando Merge, desvendando como utilizar essa poderosa ferramenta em nossas rotinas de banco de dados.

### O que é o Comando Merge e Sua Finalidade

O comando Merge é uma instrução SQL que permite realizar operações de inserção (INSERT), atualização (UPDATE) e exclusão (DELETE) em um único passo. Ele é extremamente útil para sincronizar duas tabelas, garantindo que dados sejam inseridos quando não existem, atualizados quando modificados ou excluídos quando não mais necessários na tabela de destino.

### Diferenças entre Insert, Update e Delete

Antes de aprofundarmos no Merge, é importante entender as diferenças entre os três comandos fundamentais de manipulação de dados em SQL:

- **INSERT**: Utilizado para inserir novos registros em uma tabela.
- **UPDATE**: Permite atualizar um ou mais registros existentes dentro de uma tabela.
- **DELETE**: Responsável por excluir registros de uma tabela.

Após solidificar o entendimento sobre esses comandos, a transição para o Merge se torna mais fluida e compreensível.

## Sintaxe e Estrutura do Comando Merge

Vamos analisar a estrutura do comando Merge e entender como formular essa instrução SQL para atender às nossas necessidades de sincronização de dados.

### Início do Comando Merge

Todo comando Merge começa com a palavra-chave `MERGE INTO`, seguido pelo nome da tabela de destino onde você deseja realizar a operação.

```sql
MERGE INTO TabelaDestino
```

### Definição da Fonte de Dados

Após especificar a tabela de destino, precisamos definir a fonte de dados que será usada para o sincronismo, usando a palavra-chave `USING`.

```sql
USING FonteDados
```

A fonte de dados pode ser uma subconsulta, uma view, outra tabela, ou até mesmo uma tabela derivada.

### Estabelecendo a Condição de Relacionamento

Para que o Merge saiba como alinhar os dados da fonte com os da tabela de destino, uma condição de relacionamento é estabelecida usando a palavra-chave `ON`.

```sql
ON TabelaDestino.Campo = FonteDados.Campo
```

### Executando Operações Baseadas nas Condições

O Merge executa diferentes operações com base em se os dados coincidem ou não entre a fonte e o destino.

#### Quando os Dados Coincidem

Quando um registro é encontrado em ambas as tabelas (destino e fonte):

```sql
WHEN MATCHED THEN
UPDATE SET TabelaDestino.Campo = FonteDados.Campo
```

#### Quando os Dados Não Coincidem no Destino

Se um dado existe na fonte, mas não no destino, ele é inserido:

```sql
WHEN NOT MATCHED BY TARGET THEN
INSERT (CampoA, CampoB) VALUES (FonteDados.CampoA, FonteDados.CampoB)
```

#### Quando os Dados Não Coincidem na Fonte

E se um dado não existe mais na fonte, mas ainda permanece no destino, o Merge pode excluí-lo:

```sql
WHEN NOT MATCHED BY SOURCE THEN
DELETE
```

### Finalizando o Comando Merge

O comando Merge é finalizado com um ponto e vírgula.

```sql
;
```

## Exemplo Prático de Utilização do Comando Merge

No próximo módulo, vamos nos aprofundar em exemplos práticos de como utilizar o Merge em cenários do mundo real na sincronização de dados entre sistemas ou tabelas. Isso solidificará nossa compreensão a respeito do comando e suas aplicações práticas.

**Nota Importante:** Durante a execução de um comando Merge, é crucial compreender a lógica de negócios subjacente para evitar incongruências ou perda de dados críticos. A potência do comando vem acompanhada da responsabilidade pela precisão na definição das condições e operações a serem realizadas.

* * *

&nbsp;

# Comando Merge em SQL

## Introdução ao Comando Merge em SQL

Bem-vindos ao mundo dos bancos de dados relacionais, onde o comando Merge joga um papel fundamental em operações de sincronização de dados. Nesta seção, vamos explorar os conceitos básicos e a sintaxe do comando Merge, desvendando como utilizar essa poderosa ferramenta em nossas rotinas de banco de dados.

### O que é o Comando Merge e Sua Finalidade

O comando Merge é uma instrução SQL que permite realizar operações de inserção (INSERT), atualização (UPDATE) e exclusão (DELETE) em um único passo. Ele é extremamente útil para sincronizar duas tabelas, garantindo que dados sejam inseridos quando não existem, atualizados quando modificados ou excluídos quando não mais necessários na tabela de destino.

### Diferenças entre Insert, Update e Delete

Antes de aprofundarmos no Merge, é importante entender as diferenças entre os três comandos fundamentais de manipulação de dados em SQL:

- **INSERT**: Utilizado para inserir novos registros em uma tabela.
- **UPDATE**: Permite atualizar um ou mais registros existentes dentro de uma tabela.
- **DELETE**: Responsável por excluir registros de uma tabela.

Após solidificar o entendimento sobre esses comandos, a transição para o Merge se torna mais fluida e compreensível.

## Sintaxe e Estrutura do Comando Merge

Vamos analisar a estrutura do comando Merge e entender como formular essa instrução SQL para atender às nossas necessidades de sincronização de dados.

### Início do Comando Merge

Todo comando Merge começa com a palavra-chave `MERGE INTO`, seguido pelo nome da tabela de destino onde você deseja realizar a operação.

```sql
MERGE INTO TabelaDestino
```

### Definição da Fonte de Dados

Após especificar a tabela de destino, precisamos definir a fonte de dados que será usada para o sincronismo, usando a palavra-chave `USING`.

```sql
USING FonteDados
```

A fonte de dados pode ser uma subconsulta, uma view, outra tabela, ou até mesmo uma tabela derivada.

### Estabelecendo a Condição de Relacionamento

Para que o Merge saiba como alinhar os dados da fonte com os da tabela de destino, uma condição de relacionamento é estabelecida usando a palavra-chave `ON`.

```sql
ON TabelaDestino.Campo = FonteDados.Campo
```

### Executando Operações Baseadas nas Condições

O Merge executa diferentes operações com base em se os dados coincidem ou não entre a fonte e o destino.

#### Quando os Dados Coincidem

Quando um registro é encontrado em ambas as tabelas (destino e fonte):

```sql
WHEN MATCHED THEN
UPDATE SET TabelaDestino.Campo = FonteDados.Campo
```

#### Quando os Dados Não Coincidem no Destino

Se um dado existe na fonte, mas não no destino, ele é inserido:

```sql
WHEN NOT MATCHED BY TARGET THEN
INSERT (CampoA, CampoB) VALUES (FonteDados.CampoA, FonteDados.CampoB)
```

#### Quando os Dados Não Coincidem na Fonte

E se um dado não existe mais na fonte, mas ainda permanece no destino, o Merge pode excluí-lo:

```sql
WHEN NOT MATCHED BY SOURCE THEN
DELETE
```

### Finalizando o Comando Merge

O comando Merge é finalizado com um ponto e vírgula.

```sql
;
```

## Exemplo Prático de Utilização do Comando Merge

No próximo módulo, vamos nos aprofundar em exemplos práticos de como utilizar o Merge em cenários do mundo real na sincronização de dados entre sistemas ou tabelas. Isso solidificará nossa compreensão a respeito do comando e suas aplicações práticas.

**Nota Importante:** Durante a execução de um comando Merge, é crucial compreender a lógica de negócios subjacente para evitar incongruências ou perda de dados críticos. A potência do comando vem acompanhada da responsabilidade pela precisão na definição das condições e operações a serem realizadas.

* * *

&nbsp;

# Criando rotina com INSERT, UPDATE e DELETE - Parte 1

## Introdução

Neste e-book, vamos aprender sobre a sincronização de tabelas utilizando a linguagem SQL. Abordaremos um cenário comum em bancos de dados onde é necessário manter as informações consistentes entre tabelas distintas.

## O Cenário de Merge

Imagine que temos um sistema onde precisamos manter a sincronia entre três tabelas principais: `Entidades`, `Pessoas Físicas` e `Pessoas Jurídicas`. O objetivo é que todas as entidades sejam refletidas de maneira adequada nas tabelas de pessoas físicas e jurídicas.

### A Tabela de Entidades

A tabela de entidades é uma compilação de todas as pessoas físicas e jurídicas. Ela serve como registro central para manter os dados consistentes entre as diferentes tabelas relacionadas.

## Sincronizando as Tabelas

Para manter a sincronização, é necessário que todas as entidades classificadas como pessoa física estejam presentes na tabela equivalente e vice-versa. O mesmo se aplica para as entidades classificadas como pessoas jurídicas.

### Estratégias de Sincronização

Existem algumas estratégias principais para manter as tabelas sincronizadas:

1.  **Atualização**: Quando ocorrem mudanças nos dados, é crucial que essas mudanças sejam propagadas para as tabelas relacionadas.
2.  **Inclusão**: Se uma nova entidade é adicionada, ela deve ser incluída nas tabelas correlatas.
3.  **Exclusão**: Quando uma entidade é removida de uma tabela, temos que assegurar que também seja removida das outras.

## Utilizando Comandos SQL

Podemos utilizar diferentes comandos SQL para realizar essas operações:

- **INSERT**: Para adicionar novos registros.
- **UPDATE**: Para atualizar registros existentes.
- **DELETE**: Para remover registros indesejados.

## Comandos SQL Avançados

Além dos comandos básicos, podemos utilizar comandos mais avançados como `MERGE`, que permitem realizar operações de sincronização de maneira mais eficiente e em um único comando.

## Exemplo Prático de Sincronização

Vamos a um exemplo prático de como seria a query de sincronização utilizando `INSERT`, `UPDATE` e `DELETE` para assegurar que a tabela `Pessoas Físicas` esteja alinhada com a tabela de `Entidades`:

```sql
-- Criação de uma tabela temporária para análise de ações
IF OBJECT_ID('tempdb..#atualizacao') IS NOT NULL
    DROP TABLE #atualizacao;

-- Popula tabela temporária com ações de sincronização
SELECT
    e.COD_ENTIDADE AS COD_ENTIDADE,
    CASE
        WHEN e.COD_ENTIDADE IS NOT NULL AND pf.COD_ENTIDADE IS NOT NULL THEN 'Atualizar'
        WHEN pf.COD_ENTIDADE IS NULL THEN 'Incluir'
        ELSE 'Apagar'
    END AS Acao
INTO #atualizacao
FROM ENTIDADES e
LEFT JOIN PESSOAS_FISICAS pf ON e.COD_ENTIDADE = pf.COD_ENTIDADE
WHERE LEN(e.INSCRICAO_FEDERAL) = 14;

-- Comandos para sincronização
BEGIN TRANSACTION;
    -- Inclusões
    INSERT INTO PESSOAS_FISICAS (COD_ENTIDADE, NOME, INSCRICAO_FEDERAL, ATIVO, DATA_CADASTRO)
    SELECT
        e.COD_ENTIDADE,
        e.NOME,
        e.INSCRICAO_FEDERAL,
        ISNULL(e.ATIVO, 'S'),
        GETDATE()
    FROM #atualizacao a
    JOIN ENTIDADES e ON a.COD_ENTIDADE = e.COD_ENTIDADE
    WHERE a.Acao = 'Incluir';
    
    -- Atualizações e exclusões seriam realizadas aqui.
ROLLBACK TRANSACTION; -- Utilizado para teste. Utilize COMMIT para aplicar as mudanças.
```

Neste exemplo, inserimos as operações de sincronização numa transação para garantir que as mudanças só sejam efetivadas quando todas as operações tiverem êxito.

## Conclusão

Manter tabelas sincronizadas é um dos pilares para garantir a integridade e a consistência dos dados em um banco de dados. Conforme demonstrado, os comandos SQL oferecem diversas ferramentas que podem ser utilizadas para realizar essas sincronizações de maneira eficaz e segura.

* * *

&nbsp;

# Crianto rotina com MERGE

Este ebook foi criado com o intuito de fornecer um material de apoio prático e teórico para quem deseja aprender a utilizar os comandos SQL para sincronização de dados, com foco especial no comando `MERGE`.

## Capítulo 1: Introdução ao SQL e Sincronização de Dados

O SQL é uma linguagem poderosa para gerenciamento de bases de dados, permitindo realizar operações como inserção, atualização e exclusão de informações de forma eficiente. A sincronização de dados é uma tarefa comum que demanda a atualização contínua de informações entre tabelas diferentes.

### 1.1 O que é SQL?

SQL, ou Linguagem de Consulta Estruturada, é a linguagem padrão para interação com sistemas de gerenciamento de banco de dados relacionais.

### 1.2 Por que a Sincronização é Importante?

A sincronização assegura a consistência dos dados em diferentes tabelas ou bancos, o que é essencial para a integridade das operações de negócios e tomada de decisões informadas.

## Capítulo 2: Comandos Básicos de Sincronização

Antes de mergulhar no comando `MERGE`, é importante entender os comandos básicos de sincronização que são utilizados em combinação para manter as informações atualizadas.

### 2.1 Insert

Utilizado para inserir novos registros em uma tabela.

### 2.2 Update

Aplicado para atualizar informações já existentes em registros específicos.

### 2.3 Delete

Serve para remover registros que não são mais necessários ou que devem ser excluídos por alguma condição específica.

## Capítulo 3: O Comando Merge

O comando `MERGE` é uma forma compacta e eficiente de realizar operações de `INSERT`, `UPDATE` e `DELETE` em uma única instrução, baseando-se em condições de correspondência entre registros.

### 3.1 Quando Utilizar o Comando Merge?

O `MERGE` é particularmente útil em situações de sincronização de dados, onde você deseja aplicar essas três operações baseando-se na comparação entre uma tabela de origem e uma tabela de destino.

### 3.2 Sintaxe Básica do Merge

A sintaxe básica envolve definir a tabela de destino, a fonte de dados e os critérios de correspondência, seguidos pelas ações específicas para cada caso de correspondência.

```sql
MERGE INTO tabela_destino AS destino
USING fonte_dados AS origem
ON (condição de correspondência)
WHEN MATCHED THEN
    UPDATE SET coluna1 = origem.coluna1, ...
WHEN NOT MATCHED BY TARGET THEN
    INSERT (coluna1, coluna2, ...) VALUES (origem.coluna1, origem.coluna2, ...)
WHEN NOT MATCHED BY SOURCE THEN
    DELETE
```

### 3.3 Prática com o Comando Merge

Após detalhar os aspectos teóricos do comando `MERGE`, a prática se faz necessária. A seguir, um exemplo prático da aplicação do `MERGE` para sincronizar informações entre a tabela de entidades e a tabela de pessoas físicas.

## Capítulo 4: Exemplo Prático com Tabela de Entidades e Pessoas Físicas

Aqui iremos explorar um exemplo onde utilizamos o `MERGE` para garantir que a tabela de pessoas físicas seja atualizada com base nas alterações da tabela de entidades.

### 4.1 Preparação das Tabelas

Primeiro, precisamos preparar nossas fontes de dados, identificando os registros de pessoas físicas por meio de uma consulta que filtra pela inscrição federal.

```sql
SELECT *
FROM entidades
WHERE LEN(inscricao_federal) = 14
```

### 4.2 Executando o Merge

Com a fonte de dados definida, aplicamos o comando `MERGE` para sincronizar as tabelas.

```sql
MERGE INTO pessoas_fisicas AS destino
USING (SELECT * FROM entidades WHERE LEN(inscricao_federal) = 14) AS origem
ON destino.entidade = origem.entidade
WHEN MATCHED THEN
    UPDATE SET destino.nome = origem.nome, destino.cpf = origem.inscricao_federal
WHEN NOT MATCHED BY TARGET THEN
    INSERT (entidade, nome, cpf) VALUES (origem.entidade, origem.nome, origem.inscricao_federal)
WHEN NOT MATCHED BY SOURCE THEN
    DELETE
```

### 4.3 Resultados Esperados

Após a execução, espera-se que todas as informações de pessoas físicas estejam alinhadas com a tabela de entidades, onde os registros correspondentes foram atualizados, os registros novos inseridos e os registros obsoletos removidos.

## Capítulo 5: Considerações Finais e Práticas Recomendadas

Com a explicação detalhada e um exemplo prático, esperamos que você tenha uma compreensão clara do uso do comando `MERGE` e da sincronização de dados. Encorajamos que pratique os conceitos aprendidos e explore os diferentes cenários de uso do `MERGE`.

Lembramos que a prática constante é a chave para a proficiência no SQL e a eficiência na gestão dos dados.

> ## Manipulando dados ☝️

* * *

&nbsp;

> ## Funções, Procedures e Views 👇

# Introdução às Funções em SQL

## O que são funções?

As funções são blocos de construção essenciais dentro da linguagem SQL. Elas são projetadas para retornar um valor sempre, seja ele um valor nulo, um valor informado ou um resultado processado. As funções podem ser construídas para realizar uma ampla gama de tarefas e manipulações de dados.

### Características das funções

- Obrigatoriamente retornam um valor.
- Podem ou não receber parâmetros.
- Podem variar em complexidade e uso.

#### Exemplo de função sem parâmetros:

```sql
GETDATE()
```

Esta função retorna a data e hora atuais do servidor, sem a necessidade de parâmetros.

#### Exemplo de função com parâmetros:

```sql
COALESCE(valor_a, valor_b)
```

Retorna o primeiro valor não nulo entre `valor_a` e `valor_b`.

## Tipos de Funções em SQL

### Funções de Tabela

São funções que retornam uma tabela de valores, podendo então ser usadas como uma tabela em consultas.

### Funções de Agregação

Funções que operam sobre um conjunto de valores e retornam um único valor resumido, como `SUM`, `AVG`, `MIN`, e `MAX`.

### Funções do Sistema

São as funções predefinidas que acompanham a instalação do SQL. Exemplos incluem funções de manipulação de strings, funções de data e hora, entre outras.

### Funções Escalares

Retornam um valor único baseado em valores de entrada. Durante as próximas aulas, nos concentraremos neste tipo de função.

## Funções Escalares

As funções escalares são aquelas que você vai usar na maioria das vezes quando precisar de uma função para realização de um cálculo ou operação específica que retorne um único valor.

### Uso Prático das Funções Escalares

Mesmo que raramente sejam utilizadas, é importante conhecer as funções de tabela (table functions), mas no contexto desse aprendizado, as funções escalares são as mais relevantes e frequentemente necessárias.

## Explorando Funções no SQL Server

Para visualizar e entender melhor as funções disponíveis no SQL Server:

- Acesse o SQL Server Management Studio (SSMS).
- Navegue para o Objeto Explorer.
- Encontre a database desejada e expanda sua árvore.
- Localize a seção "Programmability" e dentro dela, "Functions".

### Tipos de Funções no Sistema

- Funções de agregação como `SUM`, `MIN`, `MAX`
- Funções de data e hora como `DATEADD`, `DATEDIFF`
- Funções de string como `LTRIM`, `RTRIM`, `SUBSTRING`

## Conclusão

As funções são indispensáveis para a manipulação de dados e execução de rotinas dentro do SQL. Com base no que foi discutido, você estará apto a entender, utilizar e até mesmo criar suas próprias funções escalares, o que será detalhado melhor nas próximas aulas.

* * *

&nbsp;

# Criando a primeira função p02

![mindmap-sqlfunc_page-0001.jpg](../_resources/mindmap-sqlfunc_page-0001.jpg)

* * *

&nbsp;

# Criação de Funções Escalares em SQL

O desenvolvimento de soluções em bancos de dados muitas vezes exige a implementação de funções customizadas para lidar com operações recorrentes. No contexto de SQL, uma função escalar é um recurso valioso para simplificar essas operações, agilizando o processo de desenvolvimento e manutenção do código.

## Introdução às Funções Escalares

Funções escalares em SQL são utilizadas para retornar um único valor após a execução. Elas recebem parâmetros de entrada e executam operações baseadas neles.

### Exemplo: Diferenciação de Pessoa Física e Pessoa Jurídica

Um cenário comum em sistemas de informação é a necessidade de diferenciar um cadastro entre pessoa física (PF) e pessoa jurídica (PJ). Uma tabela de entidades, por exemplo, pode armazenar clientes de ambos os tipos em uma única coluna chamada `inscrição federal`.

### Análise da Inscrição Federal

Para fazer essa diferenciação, podemos considerar o número de caracteres presentes na inscrição. Em geral:

- Uma **pessoa física** possui um CPF com **11 caracteres**.
- Uma **pessoa jurídica** possui um CNPJ com **14 caracteres**.

Portanto, a contagem de caracteres na inscrição federal pode ser o critério para a diferenciação.

#### Tratamento da Inscrição

Frequentemente, a inscrição federal vem formatada com máscaras, incluindo pontos, traços e barras. Antes de contarmos os caracteres, podemos utilizar a função `REPLACE` para remover essas máscaras e obter apenas os números.

### Construção da Lógica em SQL

No SQL, podemos utilizar a função `LEN` para determinar o comprimento da string. A partir desse valor, um comando `CASE` é aplicado para definir se a inscrição é um CPF ou um CNPJ, seguindo a regra de 11 ou 14 caracteres respectivamente.

## A Função Escalar `fn_tipo_inscricao`

A fim de evitar repetições desse processo de verificação em múltiplas consultas, podemos encapsular essa lógica em uma função escalar.

### Criação da Função

A função será definida para receber uma `inscrição federal` como parâmetro e retornar um valor que indica o tipo de inscrição:

- `PJ`: para pessoa jurídica.
- `PF`: para pessoa física.
- `ND`: para não definido (quando o número de caracteres for diferente de 11 ou 14).

```sql
CREATE FUNCTION dbo.fn_tipo_inscricao (@inscricao_federal VARCHAR(50))
RETURNS CHAR(2)
AS
BEGIN
    DECLARE @tipo_inscricao CHAR(2)

    SET @inscricao_federal = REPLACE(REPLACE(REPLACE(@inscricao_federal, '.', ''), '-', ''), '/', '')

    SELECT @tipo_inscricao = CASE
        WHEN LEN(@inscricao_federal) = 14 THEN 'PJ'
        WHEN LEN(@inscricao_federal) = 11 THEN 'PF'
        ELSE 'ND'
    END

    RETURN @tipo_inscricao
END
```

Com a função `fn_tipo_inscricao`, o código fica mais organizado e a lógica de diferenciação de tipos de inscrição federal fica centralizada em um único lugar, o que facilita a manutenção e evita repetição de código.

### Utilização da Função

Agora, para verificar a natureza da inscrição federal em nossas consultas, basta chamar a função `dbo.fn_tipo_inscricao` passando a coluna correspondente como argumento.

```sql
SELECT 
    inscricao_federal, 
    dbo.fn_tipo_inscricao(inscricao_federal) AS Tipo_Inscricao
FROM 
    tabela_entidades
```

## Conclusão

As funções escalares em SQL proporcionam um meio eficiente de reutilizar lógica e manter um código limpo e eficiente. Com a função `fn_tipo_inscricao`, conseguimos abstrair a complexidade envolvida na diferenciação entre PF e PJ, permitindo que qualquer consulta futura faça uso dessa funcionalidade de forma simples e direta.

* * *

&nbsp;

# Um pouco mais sobre funções

Este e-book abrange os principais pontos sobre o uso de funções em SQL, contendo passagens transcritas de uma videoaula, com foco em ensinar a criação e aplicação de funções no contexto de banco de dados.

## Criação de Funções

A função em SQL é um bloco de código que realiza operações específicas e é designado por um nome. É possível criar funções para reutilização de lógica e simplificar operações complexas.

### Funções Simples

```sql
CREATE FUNCTION MinhaFuncao (@parametro1 Tipo)
RETURNS Tipo_Retorno
AS
BEGIN
    -- Corpo da função
    RETURN @valor
END
```

### Utilização de Tabelas em Funções

Embora não seja recomendado pelo impacto na performance, em alguns casos, pode ser necessário realizar `SELECT` de tabelas dentro de funções.

#### Exemplo Prático

```sql
CREATE FUNCTION TipoInscricao (@cliente NUMERIC(15))
RETURNS VARCHAR(2)
AS
BEGIN
    DECLARE @inscricao_federal VARCHAR(50)
    SELECT @inscricao_federal = inscricao_federal FROM entidades WHERE id = @cliente
    -- Tratamentos da inscrição e retorno de valor
    RETURN @tipo_inscricao
END
```

### Performance e Alternativas

Quando se trata de performance, é preferível passar diretamente a variável necessária para a função, evitando o uso de `SELECT` dentro do bloco da função para melhorar a velocidade de execução em bases de dados grandes.

## Máscaras de Formatação com Funções

Funções também podem ser usadas para aplicar máscaras de formatação a dados, como CPFs. Essa prática auxilia na manutenção do formato de saída dos dados para relatórios e outras saídas de sistema.

### Exemplo de Função para Máscara de CPF

```sql
CREATE FUNCTION MascararCPF (@CPF VARCHAR(11))
RETURNS VARCHAR(14)
AS
BEGIN
    -- Aplica máscara ao CPF
    RETURN @CPF_Mascarado
END
```

## Recomendações Finais

Explore as funções disponíveis no sistema para entender as estruturas e seus propósitos. Pratique criando e replicando funções, relacionando-as a problemas reais de seu dia a dia SQL, e sempre busque soluções que priorizem a performance.

* * *

&nbsp;

# Procedimentos Armazenados em SQL

## Introdução aos Procedimentos Armazenados

Procedimentos armazenados, ou *stored procedures*, são objetos essenciais no manejo de banco de dados. Eles armazenam um conjunto de rotinas de código SQL que podem ser reutilizadas diversas vezes.

## O que são Procedimentos Armazenados

Os procedimentos armazenados são mais do que simples comandos SQL; eles podem incluir uma série de rotinas complexas, como criação e exclusão de tabelas, inserções (*inserts*), atualizações (*updates*), armazenamento de *logs*, entre outras funcionalidades.

### Utilidades dos Procedimentos

Os procedimentos são usados para:

- Automatizar rotinas frequentes
- Manipular dados de formas complexas
- Facilitar operações de manutenção
- Melhorar a segurança, limitando o acesso direto às tabelas

## Comparação com Funções

Diferentemente das funções, os procedimentos:

- Não precisam retornar informações, mas podem fazer isso
- Podem realizar uma gama mais ampla de operações no banco de dados
- Oferecem maior flexibilidade por meio de parâmetros

### Procedimentos x Funções

| Procedimentos | Funções |
| --- | --- |
| Podem ou não retornar valores | Sempre retornam um valor |
| Executam uma série de comandos SQL | Executam operações e retornam resultados |

## Prática com Procedimentos Armazenados

Nas próximas aulas, aprenderemos a:

- Criar procedimentos armazenados
- Entender as situações adequadas para utilização
- Implementar procedimentos em cenários reais

### Implementando Procedimentos

A criação de procedimentos inclui entender como declará-los e como passar parâmetros. Exploraremos sua funcionalidade por meio de exemplos práticos, criando procedimentos que atendam a necessidades específicas dentro de um data warehouse.

## Importância no Data Warehouse

No contexto de um *data warehouse*, os procedimentos são cruciais para:

- Automatizar a alimentação e transformação de dados
- Melhorar a eficácia e eficiência dos processos de ETL
- Facilitar a atualização e manutenção de dados

## Conclusão

Procedimentos armazenados são uma ferramenta poderosa para qualquer profissional que trabalhe com SQL e banco de dados. Eles são fundamentais para manter uma boa organização de código, garantir uma manutenção mais limpa e proporcionar uma segurança maior, sendo indispensáveis em ambientes de *big data* e *data warehousing*.

* * *

&nbsp;

# Criando procedures com retorno

Compreender a construção e automatização de processos em bancos de dados é essencial para a gestão eficiente de informação. Vamos entender como usar stored procedures (procedures armazenadas) para criar estruturas de dados como dimensões de clientes, e como isso pode ser aplicado para manipular e transferir dados de maneira automatizada.

## Fundamentos de Bancos de Dados

Antes de iniciarmos, é crucial compreender alguns conceitos básicos de bancos de dados, como o que são tabelas de dimensão e de fato, e como elas se aplicam na construção de um banco de dados robusto. A tabelas de dimensão armazenam atributos descritivos, enquanto as tabelas de fato registram métricas de performance.

### O que são Dimensões e Tabelas Fato?

Dimensões e tabelas fato são componentes de um data warehouse. Uma dimensão oferece contexto para os dados (como, por exemplo, cliente ou tempo), enquanto uma tabela fato armazena dados quantitativos (como vendas ou transações).

## Construção de Dimensão de Clientes

Imaginemos que precisamos criar uma dimensão de clientes dentro de um banco de dados. Essa dimensão precisaria armazenar informações importantes dos clientes, tais como:

- Código de Identificação
- Nome do Cliente
- Nome Fantasia do Cliente
- Inscrição Federal (CNPJ)
- Classificação do Cliente

### Automatizando com Stored Procedures

Para simplificar e automatizar o processo de criação dessa dimensão de clientes, utilizaremos as stored procedures que são conjuntos de instruções SQL armazenadas que podem ser reutilizadas múltiplas vezes pelo banco de dados.

#### Exemplo: Stored Procedure para Consulta de Clientes

```sql
CREATE PROCEDURE USP_RetornaClientes
AS
BEGIN
    SELECT CodigoEntidade, NomeCliente, NomeFantasia, InscricaoFederal, DescricaoClassificacao
    FROM Clientes
    LEFT JOIN Classificacoes ON Clientes.ClassificacaoID = Classificacoes.ClassificacaoID
    WHERE Estado = @UF;
END;
```

Essa procedure retornará os clientes baseado no estado (`UF`) passado como parâmetro, onde `@UF` é uma variável que representa a Unidade Federativa do cliente.

## Filtragem e Relacionamentos

Nos exemplos acima, usamos join para combinar tabelas e filtrar informações baseadas em classificações e localizações dos clientes. Os left joins permitem incluir todos os clientes, mesmo aqueles sem uma classificação definida.

### Selecionando Informações Específicas

Frequentemente, pode ser necessário filtrar dados específicos. Por exemplo, ao invés de números de classificação, preferimos a descrição da classificação. Além disso, adicionar informações sobre a cidade e estado do cliente poderia ser proveitoso.

#### Ajustes na Procedure para Filtros Específicos

```sql
ALTER PROCEDURE USP_RetornaClientesEspecificos
    @UF CHAR(2),
    @Cidade VARCHAR(50)
AS
BEGIN
    SELECT CodigoEntidade, NomeCliente, NomeFantasia, InscricaoFederal, DescricaoClassificacao, Cidade, Estado
    FROM Clientes
    LEFT JOIN Classificacoes ON Clientes.ClassificacaoID = Classificacoes.ClassificacaoID
    LEFT JOIN Enderecos ON Clientes.EntidadeID = Enderecos.EntidadeID
    LEFT JOIN Estados ON Enderecos.EstadoID = Estados.EstadoID
    WHERE Estados.UF = @UF AND Enderecos.Cidade = @Cidade;
END;
```

Com essa alteração, a stored procedure agora retorna clientes com base não apenas no estado, mas também na cidade. A procedure fica mais flexível e adaptável às necessidades dos dados analíticos.

## Conclusão

Trabalhar com stored procedures facilita a manutenção e escalabilidade das operações de banco de dados. Ao armazenar a lógica no banco de dados, reduzimos a redundância de código e aumentamos a eficiência ao lidar com grandes quantidades de dados.

* * *

&nbsp;

# Criando procedures sem retorno

## Introdução

Neste eBook, vamos abordar o processo de criação de procedimentos armazenados (*stored procedures*) em SQL e a utilização desses procedimentos para atualização automatizada de tabelas. Este material é especialmente útil para desenvolvedores de banco de dados e administradores de sistemas que buscam otimizar suas rotinas de trabalho utilizando o poder das proceduras armazenadas.

## Procedimentos Armazenados

### O que são Procedimentos Armazenados?

Procedimentos armazenados, também conhecidos como *procedures* ou procedores, são um conjunto de comandos SQL que são armazenados no banco de dados e podem ser executados chamando apenas o nome do procedimento, facilitando assim a reutilização do código e a automatização de tarefas.

> Procedures são iguais a views, porém, podemos passar parâmetros para elas.  
> Procedures diferente das funções, aceitam tabelas temporarias.

### Vantagens dos Procedimentos Armazenados

- **Reutilização de Código**: Uma vez criado, o procedimento pode ser utilizado em várias partes do sistema sem a necessidade de reescrever o código SQL.
- **Performance**: Procedimentos armazenados são pré-compilados, o que pode resultar em uma execução mais rápida comparada com múltiplas consultas SQL.
- **Manutenção**: Centraliza a lógica de negócios tornando mais fácil a manutenção.
- **Segurança**: Através dos procedimentos é possível controlar o acesso às informações de forma mais restrita e segura.

### Criação de Procedimentos Armazenados

Para criar um procedimento armazenado, pode-se utilizar o comando `CREATE PROCEDURE` seguido pelo nome desejado para o procedimento e o bloco de código SQL que será executado. Um exemplo simplificado é mostrado a seguir:

```sql
CREATE PROCEDURE NomeDoProcedimento 
AS
BEGIN
    -- Inserir os comandos SQL aqui
END
```

### Procedimentos Com e Sem Retorno

Procedimentos podem ser criados para retornar ou não valores. Um procedimento sem retorno executa suas tarefas internamente no banco de dados, mas não fornece um resultado direto para o usuário, enquanto um procedimento com retorno pode fornecer resultados de consultas, como o resultado de um `SELECT`.

### Exemplo de Procedimento Para Atualização de Tabelas

Vamos exemplificar com um procedimento que consolida dados de clientes, fazendo a junção de informações de várias tabelas e atualizando uma tabela consolidadora.

```sql
CREATE PROCEDURE AtualizaTblClientesConsolidados 
AS
BEGIN
    IF OBJECT_ID('TblClientesConsolidados') IS NULL
    BEGIN
        CREATE TABLE TblClientesConsolidados (
            Entidade INT PRIMARY KEY,
            Nome NVARCHAR(80),
            NomeFantasia NVARCHAR(80),
            InscricaoFederal VARCHAR(19),
            Classificacao VARCHAR(80),
            Cidade NVARCHAR(80),
            Estado NVARCHAR(80),
            UF CHAR(2)
        )
    END

    MERGE INTO TblClientesConsolidados AS Destino
    USING (SELECT -- Consulta que reúne e prepara dados) AS Origem
    ON Destino.Entidade = Origem.Entidade
    WHEN MATCHED THEN
        UPDATE SET
            Nome = Origem.Nome,
            NomeFantasia = Origem.NomeFantasia,
            -- Outros campos para serem atualizados
    WHEN NOT MATCHED THEN
        INSERT (Entidade, Nome, NomeFantasia, -- Outros campos)
        VALUES (Origem.Entidade, Origem.Nome, Origem.NomeFantasia, -- Outros valores)
END
```

## Executando Procedimentos Armazenados

Para executar um procedimento armazenado basta utilizar o comando `EXEC` seguido pelo nome do procedimento:

```sql
EXEC AtualizaTblClientesConsolidados
```

* * *

&nbsp;

# Entendendo Views em SQL

## Introdução

Views são objetos no banco de dados que simulam tabelas e facilitam a recuperação, manipulação e segurança dos dados. De forma geral, uma view pode ser considerada como uma consulta SQL armazenada, a qual pode ser utilizada para encapsular consultas complexas.

> Quando queremos apenas mostrar os dados, consolidar algo, devemos usar views invés de procedures. Procedures são para processos mais complexos.
> 
> Podemos usar views para criar dimensões e consolidar colunas de tabelas diferentes em 1 só.

## O que são Views?

Views são estruturas que representam uma tabela virtual dentro do banco de dados, criadas a partir de uma ou mais tabelas reais por meio de consultas SELECT. Elas permitem simplificar consultas complexas, restringir o acesso a dados e apresentar uma estrutura simplificada dos dados.

### Características das Views

- Não possuem dados próprios, apenas exibem o resultado de uma consulta SELECT.
- Não requerem parâmetros para serem executadas.
- Não suportam o uso de variáveis.
- Não permitem operações de DML diretamente, como INSERT, UPDATE ou DELETE.

## Criação de Views

A criação de views é realizada com a instrução SQL `CREATE VIEW`. O processo é simples e segue a seguinte estrutura:

```sql
CREATE VIEW nome_da_view AS
SELECT colunas
FROM tabela
WHERE condições;
```

- **nome_da_view**: Nome atribuído à view que está sendo criada.
- **colunas**: Colunas que serão incluídas na view. Recomenda-se especificar as colunas ao invés de usar \* (asterisco).
- **tabela**: A tabela de onde os dados serão obtidos.
- **condições**: Condições que podem ser aplicadas para filtrar os resultados.

### Exemplo Prático

Para demonstrar a criação de uma view, consideremos a seguinte consulta que desejamos encapsular:

```sql
CREATE VIEW vw_clientes_consolidado AS
SELECT entidade, cidade, uf
FROM clientes
WHERE estado = 'CE';
```

Esta consulta simplesmente cria uma view chamada `vw_clientes_consolidado` que exibe a entidade, cidade e uf dos clientes no estado do Ceará.

## Utilização de Views

Depois de criar uma view, ela pode ser utilizada como uma tabela comum em uma consulta SQL.

### Exemplos

- Para selecionar todos os dados de uma view:

```sql
SELECT * FROM vw_clientes_consolidado;
```

- Para filtrar dados de uma view:

```sql
SELECT * FROM vw_clientes_consolidado WHERE uf = 'AL';
```

### Boas Práticas ao Utilizar Views

- Não utilize o asterisco (\*) para especificar todas as colunas – liste apenas as colunas necessárias para melhorar a performance.
- A ordenação dos dados (ORDER BY) deve ser aplicada na consulta que utiliza a view, não na view em si.

## Vantagens das Views

- Simplificação de consultas complexas, tornando o código mais legível.
- Segurança, por meio de restrição de acesso a certos dados contidos nas tabelas originais.
- Conveniência, eliminando a necessidade de repetir consultas frequentes.

## Conclusão

Views são extremamente úteis em bancos de dados SQL para uma variedade de situações, incluindo segurança de dados, abstração e simplificação do acesso a informações complexas. Apesar de sua simplicidade, elas são poderosas ferramentas para desenvolvedores e administradores de banco de dados.

> ## Funções, Procedures e Views☝️
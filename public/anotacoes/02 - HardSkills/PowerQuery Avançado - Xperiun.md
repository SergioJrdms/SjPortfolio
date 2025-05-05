---
title: PowerQuery Avançado - Xperiun
updated: 2025-01-08 23:47:50Z
created: 2024-12-06 22:28:55Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

[toc]

# Power BI e Análise de Dados

## Introdução

Este ebook foi criado com base no conteúdo de um vídeo educativo sobre Power BI, uma poderosa ferramenta para análise de dados. O objetivo é destacar os pontos principais apresentados no vídeo, proporcionando ao leitor um guia prático para compreender e utilizar o Power BI de forma eficiente.

## Capítulo 1: Preparação e Configuração do Power BI Desktop

Antes de iniciar qualquer projeto no Power BI, é essencial verificar a versão da ferramenta e garantir que está atualizada. Usuários da Microsoft Store recebem atualizações automaticamente, enquanto aqueles que fizeram a instalação manualmente devem baixar e instalar as novas versões conforme são lançadas.

### Configurações Importantes

No menu "Arquivo", seguido de "Opções e configurações" e "Opções", existe uma seção chamada "Recursos de visualização", onde funcionalidades em teste podem ser habilitadas. Assim, o usuário pode aproveitar os recursos mais recentes antes de tornarem-se padrão.

### Importando Tabelas

Para iniciar a análise, importamos nossa tabela de vendas através da funcionalidade que permite adicionar dados de uma pasta de trabalho do Excel.

## Capítulo 2: Transformação e Limpeza de Dados

Após importar os dados, é fundamental limpar e transformar a tabela antes de carregar os dados para o Power BI. Remover linhas desnecessárias e transformar os cabeçalhos corretamente são passos indispensáveis.

### Removendo Linhas Inúteis

As primeiras linhas frequentemente contêm informações nulas que precisam ser removidas para manter a qualidade dos dados.

### Utilizando a Primeira Linha como Cabeçalho

Promover a primeira linha útil a cabeçalho é uma prática comum. Desse modo, garantimos que as colunas sejam nomeadas corretamente, facilitando análises futuras.

## Capítulo 3: Detalhes Avançados de Transformação

Durante a transformação de dados, é crucial estar atento a tipos de dados alterados de forma automática. Recomenda-se realizar essa mudança apenas no final, após todas as outras transformações.

### Gerenciamento Automático de Tipos de Dados

O recurso de detecção automática de tipos de dados é útil, mas deve ser usado com cuidado. Erros podem ocorrer se o tipo de dado correto não for identificado devido a limitações na amostragem de dados.

### Criando Colunas Calculadas

Para obter métricas como o custo da venda ou o valor da venda, pode-se adicionar colunas calculadas usando o Power Query ou mais tarde através do DAX. Para uma melhor performance, utilize medidas DAX ao invés de criar colunas diretamente no Power Query.

## Capítulo 4: Finalização no Power Query

Antes de fechar e aplicar as transformações no Power Query, é importante revisar todos os tipos de dados para garantir a consistência e precisão dos dados.

### Conferindo e Ajustando Tipos de Dados

Cada coluna deve ter seu tipo de dado verificado e potencialmente ajustado para garantir a integridade dos dados na análise subsequente.

## Conclusão

Este ebook acompanha as instruções práticas passo a passo, desde a preparação e configuração inicial do Power BI Desktop até a transformação detalhada dos dados no Power Query. O leitor deve agora ter uma compreensão mais clara do processo e estar equipado para aplicar essas práticas em seus próprios projetos de análise de dados com o Power BI.

### Dicas Finais

Lembre-se sempre de que não há como desfazer ações no Power Query após fechar e aplicar, então é essencial acompanhar e compreender cada etapa aplicada durante a transformação dos dados.  
![mindmap12_page-0001.jpg](../_resources/mindmap12_page-0001.jpg)

# Análise Descritiva com Power Query

Neste eBook, você aprenderá a realizar uma análise descritiva eficaz dos seus dados utilizando o Power Query. Abordaremos conceitos cruciais e te guiaremos em como explorar eficientemente suas informações.

## Introdução à Análise Descritiva no Power Query

Antes de mergulharmos na prática, compreenda a importância de ativar a barra de fórmulas e como isso irá facilitar o processo de análise.

### A Barra de Fórmulas

- Ativação da barra de fórmulas
- Importância para a análise

## Explorando a Distribuição de Colunas

Aprenda a identificar a distribuição e os valores distintos em suas colunas, visualizando quantidades de dados e distribuição de frequência.

### Visualizando Valores Distintos

- Entendimento sobre valores distintos
- Métodos para explorar a distribuição nas colunas

### Análise com Base nas Mil Primeiras Linhas

- Importância da amostra inicial
- Como expandir a análise para o conjunto de dados completo

### Erros Comuns e Ajustes Necessários

- Identificação de sete valores distintos de data de venda
- Considerações sobre análise com grandes volumes de dados

## Qualidade da Coluna

Descubra como verificar a qualidade dos seus dados com opções de visualização que incluem valores válidos, erros e campos vazios.

### Forçando e Identificando Erros

- Técnicas para forçar erros na análise
- Uso prático para encontrar problemas nos dados

## O Perfil da Coluna

Combine a distribuição e qualidade das colunas para entender melhor o seu conjunto de dados.

### Trabalhando com Erros e Valores Distintos

- Como a presença de erros impacta a análise?
- Abordagem para correção de tipos alterados

### Estatísticas Descritivas Completas

- Apresentação de mínimo, máximo, média, e desvio padrão
- Uso do perfil das colunas para relatórios analíticos

## Além das Funções Básicas

Além das visualizações padrão, você pode criar relatórios analíticos mais elaborados que ajudam a extrair insights dos dados.

### Criando um Relatório Estatístico

- Uso da função `Table.Profile`
- Significado das estatísticas encontradas

### Relatório no Power BI

- Transição do Power Query para o Power BI
- Criação de relatórios com métricas descritivas

## Considerações Finais e Próximas Etapas

Analise a necessidade de tratar colunas com dados mistos e prepare-se para a próxima aula onde trataremos da tabela de metas.

### Tratando Dados Mistos

- Como lidar com colunas que contêm diferentes tipos de dados

### Preparação Para a Próxima Aula

- Adiantamento do que será abordado na tabela de metas

* * *

Este eBook apresentou as principais técnicas de análise descritiva no Power Query, com ênfase em métodos práticos que podem ser aplicados no seu dia a dia. Esperamos que as informações e técnicas compartilhadas aqui sejam de grande ajuda no seu processo de análise de dados.

Na próxima aula, vamos avançar para a tabela de metas, onde você aprenderá a definir e trabalhar com objetivos claros dentro dos seus projetos de dados. Te vejo lá!  
![mindmap13_page-0001.jpg](../_resources/mindmap13_page-0001.jpg)

# Importância da Análise de Dados para Definição de Metas Empresariais

## Introdução

Este e-book tem como objetivo abordar a importância da análise de dados para a definição de metas empresariais, uma vez que essa prática se torna cada vez mais crucial para o sucesso das organizações em um mercado altamente competitivo.

## Capítulo 1: Organização de Dados Empresariais

### A Estruturação dos Dados

Compreender a estrutura, a extensão e o formato dos dados é fundamental. Por exemplo, um arquivo no formato CSV, embora aberto em programas como o Excel, possui características diferentes de um arquivo nativo desse software.

#### A Importância das Extensões de Arquivo

Reconhecer e lidar com extensões de arquivos garantem a correta manipulação dos dados. A extensão CSV é comum em dados empresariais devido à sua simplicidade e compatibilidade.

### Abertura e Análise Preliminar dos Dados

Ao abrir um arquivo de dados, é crucial analisar seu conteúdo, como categorias de produtos, metas por região e a revisão desses valores.

## Capítulo 2: Definição de Metas e sua Revisão

### A Meta de Vendas

As vendas são muitas vezes estruturadas com metas anuais, categorizadas por produto e região. As revisões são uma parte crítica do processo de definição de metas.

#### Revisão de Metas

Empresas comumente revisam suas metas, fazendo ajustes conforme necessário. Manter um histórico das revisões é uma prática que permite transparência e acompanhamento da evolução das metas.

### Revisões e Histórico

É comum que empresas mantenham um registro histórico das versões das metas de vendas, permitindo visibilidade sobre as alterações realizadas ao longo do tempo.

## Capítulo 3: Granularidade dos Dados e Tomada de Decisão

### Compreendendo a Granularidade

Granularidade se refere ao nível de detalhe que um conjunto de dados representa. Tabelas com alta granularidade possuem mais detalhes, enquanto tabelas sintéticas trazem informações mais agregadas.

#### Importância da Granularidade para Análises

A granularidade dos dados impacta diretamente a capacidade de análise. Dados mais detalhados oferecem uma visão mais analítica, enquanto dados agregados conduzem a uma análise mais sintética.

### Síntese Vs. Análise

O nível de detalhamento dos dados está intrinsecamente ligado à análise de performance. Metas geralmente são definidas em uma estrutura mais sintética, enquanto vendas são registradas com detalhes mais analíticos.

## Capítulo 4: Tratamento e Modelagem de Dados

### Preparação dos Dados para Análise

Transformar colunas em linhas, ou vice-versa, estrutura os dados de uma forma que facilita a análise posterior e a obtenção de insights.

### Desafios de Modelagem com Dados Diversos

A modelagem de dados se torna um desafio quando se tem que cruzar informações de diferentes níveis de granularidade, como vendas detalhadas e metas consolidadas.

### Ajustes e Otimização das Tabelas

O processo de ajuste e otimização das tabelas de dados é crucial para simplificar as análises seguintes, tais como agrupar dados para obter as últimas revisões das metas.

## Capítulo 5: Uso do Power BI na Análise de Dados

### Introdução ao Power BI e Seus Recursos

A utilização de ferramentas como o Power BI permite aos analistas explorar, transformar e visualizar dados de diversas formas, contribuindo para decisões estratégicas mais informadas.

### Transformação de Dados com Power Query

Com o Power Query, é possível limpar, transformar e preparar os dados para análise, desde a importação de arquivos CSV até a modelagem final para cruzamento de informações.

## Conclusão

A análise de dados, quando executada com precisão e clareza, é um pilar fundamental para o estabelecimento de metas empresariais realistas e atingíveis. Ferramentas e metodologias de tratamento de dados, como demonstrado neste e-book, são essenciais para que as empresas possam navegar e prosperar em um ambiente de negócios cada vez mais baseado em dados.  
![mindmap14_page-0001.jpg](../_resources/mindmap14_page-0001.jpg)

# Agrupamento e Análise de Dados com Power Query e Linguagem M

Neste ebook, exploraremos técnicas de agrupamento e análise de dados utilizando Power Query e a linguagem M, abordando passo a passo como extrair o máximo de informações de tabelas de metas e realizar operações como média, máximo e a filtragem da última data de revisão. Sem o uso de imagens ou links externos, este material servirá como um guia prático em português para usuários avançados.

## Introdução

Em qualquer processo de análise de dados, o agrupamento de informações é uma etapa fundamental. O Power Query, uma ferramenta essencial no Excel e no Power BI, oferece recursos poderosos para manipular e transformar dados facilmente.

## Capítulo 1: Agrupamento de Dados

Partimos do princípio de que temos uma tabela de metas onde é necessário agrupar colunas para obtermos o valor médio ou a última data de revisão.

### Cálculo de Médias

Para calcular a média de valores em categorias e continentes, utilizamos a funcionalidade "Agrupar por" do Power Query. Exemplo prático:

```plaintext
Categoria e continente são selecionados para agrupamento.
Um novo valor, "Valor médio da Meta", é criado a partir da operação de média na coluna "Valor meta".
O resultado mostra a média de valores conforme as categorias e continentes selecionados.
```

### Encontrando o Valor Máximo

Em outros cenários, buscar o valor máximo pode ser mais relevante:

```plaintext
A operação "Agrupar por" é ajustada para calcular o máximo da coluna "Valor meta".
O resultado reflete o máximo valor para cada agrupamento de categoria e continente.
```

## Capítulo 2: Filtrando por Última Data de Revisão

A última data de revisão não é um valor numérico direto, requerendo um processo mais complexo com a linguagem M para ser extraída corretamente.

### Utilizando a Linguagem M para Extrair Valores

Linguagem M é usada para criar uma nova coluna chamada "Valor Final" que mantém apenas a data mais recente:

```plaintext
Usamos a função Table.Max na coluna "Data revisão" para obter o valor máximo.
Após aplicar a função, apenas a última data de revisão é mantida para cada agrupamento.
```

### Limpeza Final dos Dados

Remove-se quaisquer colunas desnecessárias, mantendo apenas aquelas com informações essenciais para análise.

## Capítulo 3: Introdução à Linguagem M

Uma introdução à linguagem M explicará os conceitos básicos e onde buscar recursos adicionais, fornecendo maior compreensão sobre sua aplicabilidade no Power Query.

### Básico da Linguagem M

```plaintext
Diferenciação entre maiúsculas e minúsculas em nomes de funções e comandos.
Utilização de funções específicas para operações necessárias.
```

## Conclusão

Ao final deste ebook, o leitor estará munido de conhecimentos práticos sobre como realizar agrupamentos e análises complexas de dados usando Power Query e a linguagem M, garantindo precisão nas operações de média, máximo e filtragem por data.

## Referências para Aprofundamento

Por fim, sugestões para explorar mais recursos da linguagem M, com o objetivo de aprimorar contínua e autossuficiente as competências em manipulação de dados.  
![mindmap15_page-0001.jpg](../_resources/mindmap15_page-0001.jpg)

# Introdução à Linguagem M

## O Poder da Linguagem M no Power Query

A linguagem M é altamente potente no contexto da transformação e preparação de dados dentro do Power Query. É uma linguagem funcional e case-sensitive usada no Power BI, Excel, e outros serviços do Power Platform.

### Por que aprender Linguagem M?

- O uso da linguagem M se faz necessário quando a interface gráfica do Power Query não oferece a operação desejada.
- Conhecer a linguagem permite a execução de operações mais complexas e avançadas.
- Podemos obter maior flexibilidade e precisão ao manipular dados.

### Acessando o Código M

Cada transformação feita com o mouse no Power Query gera um código M correspondente. Este código pode ser visualizado e editado através do 'Editor Avançado'.

#### Etapas do Editor Avançado

- Para ver o código gerado pelas transformações, selecionamos 'Página Inicial > Editor Avançado'.
- O código no Editor Avançado é uma representação textual das operações realizadas na interface.
- As variáveis são como nomes de etapas e cada linha no Editor Avançado equivale a uma transformação executada.

#### Estrutura de um Script em M

- Todo script em M começa com a palavra-chave `let` e termina com `in`.
- As variáveis e funções são definidas dentro deste bloco e o resultado final é especificado após `in`.

### Referenciando Funções em M

Não é necessário decorar todas as funções da linguagem M. Saber onde buscar referências e documentações é essencial.

#### Documentação da Microsoft

- A [documentação oficial](https://docs.microsoft.com/powerquery-m/) é o melhor guia para aprender a linguagem M, considerando que a Microsoft é a criadora da linguagem.

#### Funções Comuns em M

- **Funções de Tabela**: Incluem operações comumente usadas para manipular tabelas (Ex: `Table.AddColumn`, `Table.TransformColumns`).
- **Lista de Funções**: No site da Microsoft, é possível encontrar uma extensa lista de funções categorizadas para diferentes propósitos.

### Criando uma Consulta do Zero

A prática do uso da linguagem M começa com exemplos simples de scripts, como a definição de variáveis e operações matemáticas, até a manipulação de tabelas e dados complexos.

#### Variáveis e Resultados

- Cada variável é definida atribuindo-lhe um valor.
- Variáveis podem armazenar números, textos, ou resultados de funções.
- O último valor após `in` é o que será retornado pelo script.

### Boas Práticas e Dicas

#### Nomenclatura de Variáveis

- Variáveis com espaços ou caracteres especiais devem ser delimitadas por `#""` (exemplo: `#"Variável Exemplo"`).
- É preferível evitar espaços e símbolos especiais nos nomes de variáveis para uma leitura mais limpa do código.

#### Comentando o Código

- Usar comentários no código (`// Comentário aqui`) ajuda a documentar o que cada etapa faz.
- Isso facilita a manutenção do código e o entendimento por outros usuários ou por você mesmo no futuro.

#### Documentação de Etapas Aplicadas

- No Power Query, cada etapa aplicada pode ser documentada pelas suas propriedades (pentadas por cada transformação realizada).
- Esses comentários aparecem no Editor Avançado, auxiliando na compreensão do fluxo de trabalho.

## Conclusão

A linguagem M é uma ferramenta essencial para profissionais que trabalham com Power Query e permite tirar o máximo proveito do processo de ETL (Extract, Transform, Load). Com um entendimento sólido da linguagem, é possível transformar dados de maneira eficiente e precisa, atendendo a requisitos complexos de análise de dados.  
![mindmap16_page-0001.jpg](../_resources/mindmap16_page-0001.jpg)

# Tabelas, Listas e Registros

Uma **tabela** é composta por colunas e linhas. As **colunas** são listas de elementos do mesmo tipo, enquanto cada **linha** é um **registro**, uma coleção de valores correspondentes a cada coluna.

#### Exemplo de Tabela

Toda tabela no Power Query é uma combinação de listas (colunas) e registros (linhas), funcionando como uma lista de registros.

## Trabalhando com Listas

### Criação de Listas

No Power Query, uma coluna pode ser transformada em uma lista de maneira simples. Ao selecionar uma coluna e utilizar a opção "Adicionar como nova consulta", o sistema gera uma lista contendo os valores da coluna.

#### Exemplo de Criação de Lista

```m
let
    Lista1 = Tabela[ColunaCategoria]
in
    Lista1
```

Este código M representa como uma lista é criada a partir da coluna 'Categoria' de uma tabela 'Tabela'.

### Utilização de Listas

As listas podem ser utilizadas para uma variedade de finalidades, incluindo atuar como parâmetros para funções ou facilitar a reorganização de dados.

## Trabalhando com Registros (Records)

### Acessando Registros

Para acessar um registro específico em uma tabela, é necessário especificar o seu índice. No Power Query, o índice começa em 0, o que significa que o primeiro registro é o registro 0.

#### Exemplo de Acesso a um Registro

```m
let
    Registro1 = Tabela{0}
in
    Registro1
```

Este exemplo demonstra como acessar o primeiro registro (índice 0) de uma tabela 'Tabela'. O resultado é um registro individual, que pode ser usado para análise ou alteração.

## Obtendo Valores Individuais

### Selecionando um Valor de um Registro

Além de acessar registros inteiros, o Power Query também permite acessar valores individuais dentro de um registro.

#### Exemplo de Seleção de um Valor Específico

```m
let
    ValorEspecifico = Tabela[ColunaContinente]{8}
in
    ValorEspecifico
```

Neste exemplo, selecionamos o valor da coluna 'ColunaContinente' no nono registro (índice 8) de uma tabela 'Tabela'.

## Conclusão: As Três Estruturas no Power Query

A integração e o domínio de tabelas, listas e registros são cruciais para o sucesso no uso do Power Query. As habilidades em manipular essas estruturas fornecem uma base sólida para transformações mais complexas que podem envolver funções e manipulações avançadas em linguagem M.

### Profundizando em Linguagem M

Para quem deseja aprofundar-se na linguagem M, é recomendado explorar recursos e cursos adicionais que abordem as capacidades avançadas dessa linguagem poderosa.

## Desafio Prático

Ao final deste guia, propomos um desafio prático: a transformação independente das tabelas 'Metas 2018' e 'Metas 2019', utilizando as habilidades adquiridas nos tópicos anteriores.

Este guia é apenas um ponto de partida, e a maestria da linguagem M e do Power Query abrirá portas para inúmeras possibilidades analíticas e de automação de processos. Boa jornada!  
![mindmap17_page-0001.jpg](../_resources/mindmap17_page-0001.jpg)

# Introdução

Este eBook foi elaborado para oferecer um entendimento aprofundado sobre a importância de estruturas de dados em sistemas de informação, particularmente no contexto de tabelas de dimensões e fatos em modelos de armazenamento de dados. A transcrição do vídeo serve como base para explorarmos as operações e tecnicismos associados ao processamento e manipulação de dados em sistemas de Business Intelligence (BI), com um foco específico no Microsoft Power BI.

## Capítulo 1: Fundamentos do Modelo de Dados

### 1.1 Tabelas de Dimensão e Tabelas de Fato

Tabelas de dimensão são descritas como entidades de negócios que representam os "cadastros" ou "dados mestres". Estas tabelas contêm atributos não voláteis, servindo como os eixos de análise para os eventos ou transações capturadas nas tabelas de fato.

### 1.2 Características das Tabelas de Fato

Tabelas de fato, por outro lado, são coleções de eventos de negócios ou movimentações históricas. São representações quantificáveis de performance e permitem análises ao serem cruzadas com as dimensões.

### 1.3 Relacionamento entre Tabelas

Um ponto crucial a ser observado é que tabelas de fato não devem ser relacionadas diretamente entre si. No lugar disso, utilizamos tabelas de dimensão para estabelecer conexões significativas entre as tabelas de fato.

## Capítulo 2: Manipulação Prática de Tabelas de Dados

### 2.1 Importação e Limpeza dos Dados

Demonstra-se a importação de uma tabela dimensão de produtos a partir de um arquivo CSV. O processo subsequente envolve limpar e transformar os dados para garantir que estejam estruturados corretamente para análises futuras.

### 2.2 Transformação dos Dados

É imperativo isolar e estruturar elementos como IDs, nomes de produtos, subcategorias e marcas, os quais estão aninhados dentro de formatos de texto complexos. Exemplos práticos são fornecidos para cada passo de extração e transformação dos dados.

### 2.3 Preenchimento de Colunas e Ajuste dos Cabeçalhos

O vídeo mostra como preencher as colunas de maneira eficiente e prática, além de como ajustar corretamente os cabeçalhos das tabelas para refletir as categorias necessárias para análise.

## Capítulo 3: Considerações Finais e Melhores Práticas

### 3.1 Melhores Práticas na Manipulação de Dados

Discute-se a importância de seguir as melhores práticas durante a manipulação de dados, incluindo a utilização de funções específicas para limpar e preparar os dados, garantindo que as informações estejam prontas para uma análise eficaz.

### 3.2 Consistência entre Tabelas

Sublinha-se a importância da consistência dos tipos de dados ao relacionar tabelas diferentes, seja como número ou texto, e as implicações disso no processo de análise de dados dentro de um sistema BI.

### 3.3 Aplicação de Conceitos na Ferramenta Power BI

O eBook termina com uma breve discussão sobre a aplicação desses conceitos no Power BI, onde as habilidades técnicas abordadas ao longo do eBook são cruciais para efetuar análises de dados precisas e criarem insights valiosos para decisões de negócios.

* * *

![mindmap18_page-0001.jpg](../_resources/mindmap18_page-0001.jpg)

# eBook: Estratégias Para Importação e Manipulação de Dados no Power BI

## Introdução

Bem-vindo ao eBook focado em estratégias eficientes para importar e manipular dados no Power BI, uma ferramenta poderosa de Business Intelligence. Aqui, destacaremos pontos chaves para transformar dados em informações valiosas, utilizando como exemplo a importação de arquivos JSON e a modelagem de dados.

## Importação de Dados JSON

**1\. Conhecendo o Formato JSON**

O JSON (JavaScript Object Notation) é um formato leve de troca de dados. Por ser fácil de ler e escrever, torna-se ideal para a representação de dados estruturados.

**2\. Importação no Power BI**

Ao importar um arquivo JSON no Power BI, podemos explorar os registros contidos entre chaves `{}`, representando objetos com suas propriedades e valores correspondentes.

**3\. Utilização do Power Query**

O Power Query é uma ferramenta integrada ao Power BI, que permite transformação de dados de uma maneira intuitiva. A importação de arquivos JSON pode ser feita facilmente, convertendo-os em tabelas estruturadas.

## Modelagem de Dados

**1\. Estruturação de Tabelas**

A estruturação de tabelas é crucial para uma boa modelagem de dados. Precisamos definir a tabela de dimensões e a tabela fato corretamente para as análises.

**2\. Relacionamento entre Tabelas**

Estabelecer os relacionamentos corretos é essencial para um modelo de dados eficiente. Precisamos entender como os dados de uma tabela se relacionam com outra e o impacto disso na performance e na organização.

**3\. Escolha dos Campos Chave**

Um ponto importante é a escolha dos campos chave (IDs) que serão usados ​​para vincular as tabelas. Em nosso exemplo, avaliamos a necessidade do campo `ID subcategoria` na tabela de vendas.

**4\. Normalização de Dados**

Analizamos a necessidade de ter dados normalizados, como preço e custo, que são constantes para os produtos, e por que eles poderiam ser movidos para a tabela de dimensão de produto.

## Otimização do Modelo de Dados

**1\. Evitando Modelos Snowflake**

Discutimos por que o modelo Snowflake não é o ideal, trazendo uma complexidade desnecessária e potencial impacto negativo na performance.

**2\. Simplificação das Conexões**

Abordamos a importância de simplificar as conexões entre as tabelas para melhorar a performance e a legibilidade do modelo de dados.

## Análise de Dados e Visualização

**1\. Interpretação dos Relacionamentos**

Exploramos como os relacionamentos nos ajudam a interpretar os dados ao cruzar as informações de diferentes tabelas.

**2\. Utilização de Tabelas e Matrizes**

Discutimos como usar tabelas e matrizes no Power BI para analisar a relação entre produtos, clientes, preços e outras dimensões.

## Conclusão

Ao final deste eBook, você terá uma compreensão sólida de como importar e manipular dados no Power BI, como criar um modelo de dados otimizado para análises eficientes. Terá também aprendido a evitar armadilhas comuns em modelagem de dados, e a identificar padrões e conexões entre diferentes conjuntos de dados.

* * *

![mindmap19_page-0001.jpg](../_resources/mindmap19_page-0001.jpg)

# E-book: Estratégias Avançadas de Mesclagem de Consultas

## Introdução

Neste material, abordamos as técnicas avançadas de mesclagem de consultas em ferramentas de análise de dados, com foco nas decisões estratégicas e na otimização de relatórios. A mesclagem eficaz entre diferentes consultas permite a criação de dimensões mais ricas e detalhadas, essenciais para uma análise de dados profunda.

## Mesclagem de Consultas

### O Processo de Mesclagem

A mesclagem de consultas é um recurso poderoso que possibilita a união de informações provenientes de diversas fontes ou tabelas. Ao combinar colunas de duas consultas diferentes, podemos enriquecer nossos dados sem a necessidade de criar tabelas adicionais.

#### Executando a Mesclagem

Para realizar a mesclagem, é fundamental identificar as colunas em comum entre as consultas. A coluna de referência deve ser cuidadosamente selecionada para garantir que a correspondência dos dados seja precisa e relevante para a análise.

#### Opções de Junção

Existem diferentes tipos de junções que influenciam o resultado da mesclagem. A junção externa esquerda, por exemplo, mantém todos os registros da consulta primária e mescla os correspondentes da secundária. Já a junção interna restringe o resultado somente aos registros com correspondência em ambas as consultas.

### Atenção aos Detalhes Cruciais

Durante o processo de mesclagem, alguns detalhes são cruciais para evitar resultados imprecisos:

- **Colunas Comuns Adequadas**: É preciso garantir a seleção correta das colunas comuns para evitar correspondências incorretas.
- **Tipo de Dados Consistentes**: Os tipos de dados das colunas que serão mescladas devem ser compatíveis para que a mesclagem funcione corretamente.
- **Verificação de Resultados Nulos**: É importante verificar se a mesclagem está gerando muitos valores nulos (o que pode indicar uma seleção inadequada de colunas ou problemas nos dados).

## Estratégias de Otimização para Mesclagem

### Trabalhando com Dados Textuais

Quando lidamos com mesclagem de dados textuais, os desafios são maiores. Diferenças sutis nas strings podem comprometer a mesclagem adequada. Em alguns casos, é possível ativar opções como a 'correspondência difusa' para mitigar esse problema.

### Criação de Tabelas de Depara

Uma estratégia eficaz é a criação de tabelas de correspondência (depara) que auxiliam na uniformização dos dados antes da mesclagem, garantindo mais precisão.

## Evitando Armadilhas

### Equívocos na Escolha das Colunas

Selecionar a coluna errada durante a mesclagem pode resultar em uma grande quantidade de registros ausentes ou nulos. É vital rever essa escolha para assegurar a integridade dos dados.

### A Importância dos Códigos

Os códigos padronizados são essenciais na mesclagem de consultas, minimizando os riscos de discrepâncias e erros.

## Considerações Finais

A mesclagem de consultas, quando realizada corretamente, é uma ferramenta valiosa na construção de modelos de dados robustos. Compreender as opções e estratégias disponíveis é crucial para garantir relatórios precisos e úteis para a tomada de decisões.

Ao aplicar as técnicas abordadas neste e-book, os profissionais serão capazes de otimizar seus processos de análise de dados e potencializar o valor obtido a partir das informações disponíveis.

* * *

![mindmap20_page-0001.jpg](../_resources/mindmap20_page-0001.jpg)

# Introdução aos Tipos de Joins e Merges em Consultas SQL

Ao trabalhar com bancos de dados e ferramentas analíticas, como SQL e Power BI, é essencial entender como mesclar consultas de maneira eficiente. Neste eBook, faremos um mergulho profundo nos diferentes tipos de joins, utilizando um exemplo prático com foco na teoria dos conjuntos e potenciais armadilhas a evitar.

## Merge e Join: Conceitos Fundamentais

Merges e joins são operações cruciais para combinar informações de diferentes tabelas. São métodos que possibilitam a criação de relações entre diferentes conjuntos de dados, de maneira que seja possível construir consultas mais elaboradas e precisas.

### O Que São, e Quando Utilizar?

O processo de merge ou join é realizado quando se deseja combinar linhas de duas ou mais tabelas, utilizando uma chave comum, conhecida como chave estrangeira. Compreender os diferentes tipos de joins é fundamental para manipular corretamente os dados e obter resultados corretos.

## Principais Tipos de Joins

A seguir, exploraremos os principais tipos de joins e como cada um funciona na prática.

### Left Outer Join

```markdown
#### Descrição Geral:

No left outer join, mantém-se todos os registros da tabela da esquerda (A) e traz-se os correspondentes da tabela da direita (B). Caso não existam correspondentes, os resultados para a tabela da direita serão vazios (NULL).

#### Exemplo Prático:

- Tabela A: Clientes (ID 1, 2, 3, 4)
- Tabela B: E-mails (ID 2, 4)
 
Resultado: Todos os clientes serão listados, mas somente os IDs 2 e 4 terão e-mails associados.
```

### Right Outer Join

```markdown
#### Descrição Geral:

O right outer join mantém todos os registros da tabela da direita (B) e traz os correspondentes da tabela da esquerda (A). Similar ao left outer join, mas invertendo as tabelas.

#### Exemplo Prático:

- Tabela A: Clientes (ID 1, 2, 3, 4)
- Tabela B: E-mails (ID 2, 4, 5)
 
Resultado: Todos os e-mails listados, mas somente os IDs 2 e 4 terão nomes de clientes associados.
```

### Inner Join

```markdown
#### Descrição Geral:

No inner join, mantém-se apenas os registros que têm correspondentes em ambas as tabelas (A e B). É o tipo mais comum de join, usado para encontrar intersecções entre conjuntos.

#### Exemplo Prático:

- Tabela A: Clientes (ID 1, 2, 3, 4)
- Tabela B: E-mails (ID 2, 4)
 
Resultado: Apenas os clientes com ID 2 e 4 aparecerão, cada um com seu respectivo e-mail.
```

### Full Outer Join

```markdown
#### Descrição Geral:

O full outer join combina o left outer join e o right outer join, mantendo todos os registros de ambas as tabelas e preenchendo os resultados correspondentes quando houver.

#### Exemplo Prático:
 
- Tabela A: Clientes (ID 1, 2, 3, 4)
- Tabela B: E-mails (ID 2, 4, 5)
 
Resultado: Listar-se-ão todos os clientes e todos os e-mails, com correspondências onde existirem e campos vazios onde não.
```

### Anti Join

```markdown
#### Descrição Geral:

Os anti joins são usados para encontrar elementos que estão presentes em uma tabela e ausentes em outra. Pode-se realizar tanto left quanto right anti join.

#### Exemplo Prático:

(Específico ao "left anti join")
 
- Tabela A: Clientes (ID 1, 2, 3, 4)
- Tabela B: E-mails (ID 2, 4)
 
Resultado: Listar-se-ão clientes que *não* possuem correpondência de e-mails, ou seja, IDs 1 e 3.
```

## Cuidados ao Realizar Joins

Quando você estiver trabalhando com joins, é crucial ter cuidado com colunas que possuem valores repetidos. Isso pode levar a um aumento no número de linhas da tabela resultante devido à combinação de múltiplas possibilidades.

### Como Evitar Problemas Comuns:

- Verifique se as colunas que você está usando para relacionar suas tabelas não contêm valores duplicados.
- Esteja ciente dos diferentes tipos de joins e escolha o mais apropriado para a sua necessidade.

## Conclusão

Compreender os diferentes tipos de joins é uma habilidade essencial no trabalho com bancos de dados. Cada tipo tem seu propósito e pode impactar significativamente os resultados de suas consultas. Pratique esses conceitos com exemplos reais para solidificar seu entendimento e evitar erros comuns.

* * *

![mindmap21_page-0001.jpg](../_resources/mindmap21_page-0001.jpg)

&nbsp;

> Invés de fazer um modelo snowflake, desnormalizar o modelo e jogar a tabela para dentro da minha dimensão.

# Modelagem e Tratamento de Dados para BI com Power BI

## Introdução

Este ebook tem como objetivo introduzir conceitos fundamentais no tratamento e modelagem de dados para Business Intelligence no Power BI. Abordaremos técnicas para lidar com caracteres especiais, limpeza de dados, definição de tabelas e relacionamentos dentro do Power BI. Englobaremos as práticas mais comuns e alguns problemas frequentes que analistas de dados encontram no dia a dia.

## Capítulo 1: Tratamento de Dados e Caracteres Especiais

### 1.1 Problemas Comuns com Caracteres

Ao importar dados de diferentes origens, é comum encontrar problemas relacionados à codificação de caracteres, como acentos e cedilhas. Estes erros de exibição são frequentemente causados pela escolha incorreta da codificação no momento da importação.

### 1.2 Solução para Caracteres Especiais

O Power BI oferece ferramentas para solucionar estes problemas, permitindo alterar a codificação para UTF-8 a fim de corrigir erros de visualização como caracteres estranhos ou marcações de registro indevidas.

## Capítulo 2: Dados de Localização e Seus Desafios

### 2.1 Importância da Localização nos Dados

Trabalhar com dados de localização pode ser desafiador devido à sua natureza hierárquica e relacional. Localizações podem ser aninhadas em continentes, países, estados e cidades, o que exige um tratamento adequado na hora de construir modelos de dados.

### 2.2 Mapeamento e Limpeza de Dados de Localização

Os passos envolvem limpeza de dados, como remover linhas vazias e subir cabeçalhos, e o uso de colunas condicionais para extrair informações úteis, como continentes ou regiões específicas baseadas em regras definidas.

## Capítulo 3: Modelagem de Dados no Power BI

### 3.1 A Dificuldade dos Relacionamentos

Dentro do Power BI, a definição de relacionamentos é crucial para criar um modelo de dados eficiente. No entanto, relacionamentos mal definidos podem levar a ambiguidade, dificultando a análise.

### 3.2 Estratégias para Modelagem Eficiente

Uma estratégia comum é desnormalizar os dados trazendo a localização para a mesma tabela que contém os clientes ou fornecedores, evitando criar um modelo Snowflake e facilitando as análises.

### 3.3 Tratamento de Mudanças nas Dimensões

A mudança de dados ao longo do tempo, como um cliente que muda de cidade, pode ser tratada no Power BI, mas requer técnicas específicas. Uma abordagem é a utilização da norma *Slowly Changing Dimensions*, que permite armazenar versões históricas de dados dimensionais.

## Capítulo 4: Avançando na Modelagem com Power BI

### 4.1 Desafios da Normalização e Desnormalização

A decisão entre normalizar ou desnormalizar dados é um tema recorrente em BI. Enquanto a normalização ajuda na organização e consistência, a desnormalização pode simplificar operações e melhorar o desempenho em determinados casos.

### 4.2 Uso de Tabelas Auxiliares e Relacionamentos

Ajudam a manter o modelo organizado, servindo como pontes entre tabelas relacionadas, e podem facilitar a visualização das relações de dados complexas. Elas são essenciais quando se lida com dados históricos ou com múltiplas referências.

### 4.3 Importância de Entender o Contexto dos Dados

Entender a fundo a base de dados é fundamental para qualquer modelagem. Compreender o que representa cada campo e como os dados estão interligados é crucial para construir um modelo de BI que faça sentido e entregue valor.

## Conclusão

Através das técnicas abordadas, como tratamento de caracteres especiais, manejo de dados de localização e estratégias de modelagem, é possível criar um modelo de dados robusto no Power BI. Compreender as melhores práticas e os desafios envolvidos é chave para o sucesso em projetos de BI.  
![mindmap22_page-0001.jpg](../_resources/mindmap22_page-0001.jpg)

# Dimensões Slowly Changing Dimensions (SCD)

Neste material, exploraremos o conceito de Dimensões que Mudam ao Longo do Tempo, também conhecidas como Slowly Changing Dimensions (SCD), e como isso impacta a modelagem de dados em cenários de business intelligence. Embora seja um tópico avançado, neste e-book, forneceremos uma visão geral para entender as possibilidades que estão disponíveis ao lidar com esse tipo de dimensão.

## Conceito de Slowly Changing Dimensions

Slowly Changing Dimensions são dimensões em um modelo de dados que têm seus dados alterados lentamente, em vez de serem estáticas. Na prática, isso significa que o valor de uma dimensão pode mudar ao longo do tempo, refletindo transformações no negócio ou no ambiente operacional.

## Reconhecendo Slowly Changing Dimensions

Em um cenário de vendas, por exemplo, podemos ter diversas tabelas como a tabela de vendas, a de clientes e a de vendedores. Quando um cliente é atendido por um único vendedor e essa relação não muda, estamos diante de uma dimensão estática. No entanto, se um cliente recebe serviços de vendedores diferentes ao longo do tempo, então essa é uma dimensão que muda ao longo do tempo.

## Trabalhando com SCD no Power BI

### Modelo Simples

Antes de lidar com as SCD, é vital entender como criar um modelo simples. Aqui estão os componentes básicos de um modelo de vendas:

- Tabela de Vendas: Contém informações sobre a data da venda, o cliente, o vendedor, e o valor da venda.
- Tabela de Cliente: Lista o id do cliente, o nome e o id do vendedor relacionado.
- Tabela de Vendedor: Informa o nome e o código do vendedor.

No Power BI, as tabelas são relacionadas para refletir a estrutura dos dados e as conexões entre eles.

### Análise de Relacionamentos

Analisamos se a dimensão cliente muda ao longo do tempo. Isso pode ser feito a partir de uma matriz que considera o id do cliente e o id do vendedor. Se descobrirmos que não houve mudança de vendedor para um cliente específico, poderíamos "achatar" as dimensões cliente e vendedor. Caso contrário, precisamos tratá-las como entidades separadas.

### Decisão de Modelagem

Existem duas formas principais de abordar SCD na modelagem de dados:

1. Tratar cada dimensão separadamente, o que leva a um modelo de dados normalizado.
2. Integrar a dimensão que muda ao longo do tempo com o histórico de fatos, potencialmente utilizando ferramentas externas para gerenciar de maneira efetiva.

O Power Query no Power BI é uma ferramenta que pode ser empregada para lidar com essas mudanças, desnormalizando a dimensão ou mantendo vínculos separados.

## Caso Prático com Power BI

Para ilustrar como as dimensões que mudam ao longo do tempo podem impactar a modelagem, vamos a um caso prático com Power BI.

Vamos investigar um cenário onde o cliente muda de vendedor ao longo do tempo. Isso é feito editando as entradas nas tabelas de vendas e cliente, refletindo essa mudança e observando como isso afeta as métricas em nosso relatório.

Quando o cliente muda de vendedor, a matriz irá mostrar mais de um vendedor por cliente, indicando que ocorreu uma mudança e que a dimensão cliente é uma SCD.

## Estratégias para Tratar SCD

Para tratar as SCD no Power BI ou em outras ferramentas de BI, existem algumas estratégias possíveis:

- Normalizar dimensões que mudam ao longo do tempo.
- Desnormalizar, quando aplicável, os atributos da dimensão no fato de vendas (juntar dimensões). 
- Avaliar a criação de dimensões históricas para armazenar mudanças ao longo do tempo.
- Considerar o uso de ferramentas complementares, como Pentaho, para gerenciar SCD quando a complexidade do processo justificar.

## Conclusão

As dimensões que mudam ao longo do tempo são um desafio na modelagem de dados para BI. No entanto, com as ferramentas e estratégias corretas, é possível gerenciar eficientemente esses cenários, garantindo que a tomada de decisão seja baseada em informações precisas e atualizadas. Esse entendimento é crucial para a construção de modelos de dados robustos e confiáveis.

Aguardamos você na próxima aula para continuar esse aprendizado sobre dimensões e como elas se comportam no ambiente de business intelligence.
![mindmap23_page-0001.jpg](../_resources/mindmap23_page-0001.jpg)

# Integração de Consultas e Modelagem de Dados

## Introdução
A modelagem de dados é um processo crucial no desenvolvimento de sistemas de informação como bancos de dados e data warehouses. O tratamento e a integração correta dos dados têm impacto direto na performance e na utilidade do sistema final.

## Fundamentos da Modelagem

### Propriedades dos Clientes e Localizações
Na modelagem, algumas propriedades são consideradas fixas, como a localização de um cliente, que por conveniência é tratada como uma característica estática do cliente. Se um cliente se move, geralmente isso não impacta nossa modelagem, a não ser que a mudança seja relevante para a análise.

#### Tratamento de Dados Estáticos
Dados que não mudam frequentemente ou cujas mudanças não são relevantes para a análise são frequentemente tratados como propriedades estáticas. Isso pode simplificar significativamente a modelagem de dados e melhorar a performance das consultas.

### Processo de Transformação de Dados
O processo de transformação de dados envolve a limpeza, reorganização e combinação de dados para que eles estejam prontos para análise.

#### Mesclagem de Consultas
A mesclagem de consultas permite combinar informações de diferentes fontes. No exemplo, a consulta do cliente é combinada com a localização, integrando dados essenciais em uma única visão.

#### Seleção de Atributos Relevantes
Durante a transformação, apenas os atributos relevantes para a análise são selecionados, como nome da cidade, estado, país e continente. Detalhes supérfluos são descartados para manter a clareza e a eficiência da modelagem.

## Dimensões de Análise

### Características das Dimensões
Dimensões são aspectos fundamentais de uma análise de dados que descrevem características de interesse. Elas tendem a ter muitas colunas para descrever cada dimensão e geralmente têm um número mais limitado de linhas.

#### Exemplos de Dimensões
Exemplos de dimensões em um data warehouse incluem dimensões de cliente, produto, e localização. Cada uma oferece uma visão detalhada de um aspecto particular dos dados.

### Performance e Escalabilidade
As dimensões são projetadas para serem eficientes e, normalmente, não atingem a magnitude de milhões de linhas. A escalabilidade é uma consideração importante, e sistemas são projetados para lidar com tamanhos realistas de dados.

#### Modelagem Eficiente de Dimensões
A modelagem eficiente de dimensões é alcançada pela distinção cuidadosa entre o que deve ser armazenado em uma dimensão e o que pode ser derivado por meio de relacionamentos.

## Tabelas Fato

### Otimização das Tabelas Fato
Na optimização das tabelas fato, removemos informações redundantes que podem ser obtidas através de relacionamentos, tal como a subcategoria de um produto ou a cidade de um cliente. Isso torna a tabela fato mais concisa ao focar apenas nas métricas-chave e nos eventos.

#### Remoção de Colunas Redundantes
Colunas redundantes são removidas para garantir que a tabela fato permaneça focada em registrar as transações ou eventos, sem detalhes desnecessários que podem ser adquiridos de dimensões relacionadas.

## Conclusão

### Práticas Recomendadas
As práticas recomendadas na modelagem de dados provêm de entender quais informações são fundamentais para a análise e quais podem ser acessadas indiretamente. Isso visa criar uma estrutura de dados que seja ao mesmo tempo informativa e eficiente.

#### Aplicação e Resultados Esperados
Ao aplicar as técnicas de modelagem discutidas, espera-se que o sistema de análise de dados seja robusto, rápido e forneça insights valiosos. O sucesso da modelagem é medido pela utilidade e performance das consultas de dados e pela clareza das informações apresentadas.

### Próximos Passos
O passo seguinte no processo é a criação de uma tabela dimensão calendário, que é essencial para realizar análises de séries temporais e entender tendências ao longo do tempo. Com isso, o modelo de dados fica completo, pronto para análises mais complexas.

#### Salvamento e Continuidade
Salvamos o progresso e preparamos para a aplicação das alterações feitas, com a certeza de que a base está estabelecida para a próxima etapa, que será abordada na continuação do curso.
![mindmap24_page-0001.jpg](../_resources/mindmap24_page-0001.jpg)

# Análise de Tempo de Produção 

Uma exploração aprofundada do gerenciamento e análise de dados temporais em contextos produtivos, utilizando o Power BI como ferramenta principal.

## Introdução

O controle de tempo é essencial em variados tipos de análises, especialmente no que concerne à produção e acompanhamento de processos. A partir de um caso simplificado de produção de peças, este e-book detalha métodos e técnicas para tratar dados temporais e otimizar a manipulação de informações no Power BI.

## Capítulo 1: A Importância das Horas nas Análises

Horas são contínuas e cíclicas, impactando diretamente na gestão e eficiência operacional. Compreender o fluxo de horas em eventos ou etapas de produção proporciona maior controle e possibilidade de aprimoramento em processos produtivos.

### 1.1 Controle de Horas
Abordagem da necessidade de calcular o período no qual eventos tendem a ocorrer, como a manhã ou a tarde, além de identificar horários específicos de maior atividade.

### 1.2 Cálculo de Duração
Explicação de como calcular a quantidade de horas entre difentes etapas de um processo ou entre movimentações distintas, utilizando funções de tempo.

## Capítulo 2: Trabalhando com Horas no Power BI

O Power BI, ferramenta da Microsoft para análise de dados, é capaz de manipular e apresentar dados temporais de maneira eficiente, desde que configurado corretamente.

### 2.1 Primeiros Passos
Comentários sobre a dificuldade de organizar conteúdos relacionados a horas no Power BI e a proposta de uma série de vídeos para facilitar o aprendizado.

### 2.2 Organização dos Dados
O capítulo focaliza a importância de uma organização prévia dos dados no Power BI, detalhando a transformação de colunas e preparação para cálculos temporais.

## Capítulo 3: Caso Prático de Produção

Uma coluna de datahora inicial e datahora final são a base inicial do caso prático. A partir desses dados, são realizados cálculos para determinar a duração da produção de peças.

### 3.1 Criando a Coluna de Duração
Instruções para criar uma nova coluna que reflete a duração do processo, abordando as limitações de usar as colunas no seu formato original.

### 3.2 Desafios com a Virada do Dia
Exploração do problema comum de cálculo de horas quando há passagem de dia, resultando em durações que excedem 24 horas.

## Capítulo 4: Boas Práticas no Power Query

A separação entre data e hora é ressaltada como uma abordagem de boas práticas para manter a performance e facilitar a criação de relações entre tabelas de dados.

### 4.1 Extraindo Data e Hora
Tutorial passo a passo para dividir colunas de datahora em duas distintas, uma para data e outra para hora, mantendo os dados congruentes.

### 4.2 Foco em Performance
Discussão sobre como a fragmentação de colunas pode reduzir a quantidade de valores únicos e aumentar a performance do modelo de dados.

### 4.3 Conexão com Dimensões de Tempo
Dicas para relacionar as novas colunas de data e hora com as dimensões de tempo, permitindo análises mais detalhadas e relatórios mais informativos.

## Capítulo 5: Conclusão

Revisão geral dos tópicos abordados ao longo do e-book, realçando a importância de manejar corretamente os dados temporais e como isso afeta a produção e análise de dados em ferramentas como o Power BI.

### 5.1 Recapitulação dos Pontos-Chave
Um resumo dos insights e aprendizados principais para que o leitor possa referenciar e aplicar em suas próprias análises de dados temporais.
![mindmap25_page-0001.jpg](../_resources/mindmap25_page-0001.jpg)


# Convertendo Segundos em Horas, Minutos e Segundos com Power BI

Entender como transformar e apresentar dados é uma habilidade essencial no mundo da análise de dados. Vamos explorar um método prático usando Power BI para converter uma quantidade de segundos em um formato mais compreensível de horas, minutos e segundos.

## Entendendo a Lógica Matemática

### A Base da Conversão

A conversão entre diferentes unidades de tempo envolve compreender a relação entre elas. Sabemos que:

- 1 minuto = 60 segundos
- 1 hora = 60 minutos = 3.600 segundos

Isso significa que para converter segundos em horas, precisamos dividir o total de segundos por 3.600.

### Exemplo Prático

Imaginemos que temos `150.250` segundos. Vamos desmembrar esse total em horas, minutos e segundos.

#### Conversão para Horas

```markdown
- Primeiramente, dividimos o total de segundos por 3.600 para encontrar o número de horas.
- Realizando `150.250 ÷ 3.600`, obtemos aproximadamente `41,7361` horas.
- Como estamos interessados apenas na parte inteira, temos `41` horas.
```

### Cálculo dos Minutos e Segundos

Agora, com o número de horas em mãos, é necessário calcular os minutos e segundos restantes.

#### Uso do Módulo para Minutos

```markdown
- Aplicamos o módulo (resto da divisão) de `150.250` por `3.600` para encontrar os segundos que sobram após retirarmos as horas completas.
- O resultado é `2.650` segundos.
```

#### Conversão para Minutos

```markdown
- Dividindo `2.650` segundos por `60`, descobrimos que há mais `44` minutos completos nesse valor.
```

#### Restante em Segundos

```markdown
- Para finalizar, aplicamos novamente o módulo, dessa vez dividindo os `2.650` segundos por `60`.
- Encontramos os `10` segundos finais que não completaram um minuto.
```

## Apresentação no Power BI

Ao migrar para a linguagem DAX do Power BI, podemos criar uma medida que realiza esses cálculos e nos apresenta a duração formatada corretamente.

### Criação de Variáveis

```markdown
- Utilizamos variáveis no DAX para armazenar os valores de `horas`, `minutos` e `segundos`.
- Com essas variáveis, efetuamos cálculos intermediários para auxiliar na conversão.
```

### Combinando os Resultados

```markdown
- Após converter cada unidade de tempo, concatenamos os resultados para obter um valor único que representa a duração total em horas, minutos e segundos.
- Uma formatação adequada é aplicada para inserir os dois pontos entre as unidades de tempo, resultando em uma medida que apresenta, por exemplo, `41:44:10`.
```

## Considerações Finais

O método demonstrado é eficaz e pode ser adaptado para diferentes quantidades de segundos ou outras necessidades de conversão. Vale ressaltar que há outras maneiras de realizar este cálculo, que podem ser mais fáceis dependendo da familiaridade com as funções de DAX. O essencial é escolher a metodologia que melhor se adequa à situação e ao nível de conforto com a ferramenta Power BI.
![mindmap26_page-0001.jpg](../_resources/mindmap26_page-0001.jpg)

# Dimensão Hora

## Introdução

A compreensão do gerenciamento de tempo e datas é essencial para análise de dados em qualquer negócio. Neste eBook, exploraremos conceitos importantes sobre como trabalhar com dimensões de tempo e como podemos relacioná-las com outras informações em nossos relatórios e dashboards no Power BI.

## Capítulo 1: Dimensão Hora

### Entendendo a Dimensão Hora no Power BI

Vamos iniciar entendendo como podemos utilizar a dimensão hora no Power BI. A dimensão hora é uma ferramenta poderosa para analisar dados em diferentes níveis de granularidade, indo desde o segundo até períodos do dia.

### Utilizando Scripts no Power Query

Os scripts no Power Query nos permitem automatizar e simplificar processos. Por exemplo, podemos copiar um script que cria uma tabela que vai do índice 0 até 86.399, o que representa todos os segundos em um dia.

``` JAVASCRIPT
let
    Lista = {0..86399},
    ConverteParaTabela = Table.FromList(Lista, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    AlteraTipo = Table.TransformColumnTypes(ConverteParaTabela,{{"Column1", Int64.Type}}),
    AlteraNomeCol = Table.RenameColumns(AlteraTipo,{{"Column1", "Segundo"}}),
    ColDuracao = Table.AddColumn(AlteraNomeCol,"Duração", each #duration(0,0,0,[Segundo]), type duration),
    ColHora = Table.AddColumn(ColDuracao, "Hora", each #time(Duration.Hours([Duração]),Duration.Minutes([Duração]),Duration.Seconds([Duração])), type time),
    RemoveCols = Table.RemoveColumns(ColHora,{"Duração", "Segundo"}),
    ColHoraNum = Table.AddColumn(RemoveCols, "Hora Num", each Time.Hour([Hora]), Int64.Type),
    ColMinutoNum = Table.AddColumn(ColHoraNum, "Minuto Num", each Time.Minute([Hora]), Int64.Type),
    ColSegundoNum = Table.AddColumn(ColMinutoNum, "Segundo Num", each Time.Second([Hora]), Int64.Type),
    ColAMPM = Table.AddColumn(ColSegundoNum,"AMPM", each if [Hora Num] < 12 then "AM" else "PM", type text),
    ColHoraAMPM = Table.AddColumn(ColAMPM, "Hora AMPM", each 
        if [Hora Num] = 0 then "12 AM"
        else if [Hora Num] >= 1 and [Hora Num] <= 11 then Number.ToText([Hora Num]) & " AM" 
        else if [Hora Num] = 12 then "12 PM"
        else if [Hora Num] >= 13 then Number.ToText([Hora Num] - 12) & " PM"  
        else "Unknown", type text),
    ColPeriodo = 
        Table.AddColumn(ColHoraAMPM, "Período", each 
            if        [Hora Num] >= 0 and [Hora Num] <= 5 then "12AM - 6AM"
            else if   [Hora Num] >= 6 and [Hora Num] <= 11 then "6AM - 12PM"
            else if   [Hora Num] >= 12 and [Hora Num] <= 17  then "12PM - 6PM"
            else if   [Hora Num] >= 18 and [Hora Num] <= 23 then "6PM - 12AM"
            else "Unknown", type text
            ),
    ColPeriodoOrdem = 
        Table.AddColumn(ColPeriodo, "Período Ordem", each 
            if        [Hora Num] >= 0 and [Hora Num] <= 5 then 1
            else if   [Hora Num] >= 6 and [Hora Num] <= 11 then 2
            else if   [Hora Num] >= 12 and [Hora Num] <= 17  then 3
            else if   [Hora Num] >= 18 and [Hora Num] <= 23 then 4
            else 5, Int64.Type
        )
in
    ColPeriodoOrdem
```

### Trabalhando com Tabelas de Calendário

As tabelas de calendário são essenciais para relacionar data com data em nossas análises. Podemos criar relacionamentos entre tabelas de calendário e outras tabelas de dados para extrair insights valiosos sobre nossa operação.

## Capítulo 2: Relacionando Data e Hora

### Maneiras de Relacionar Datas

Ao trabalhar com datas, é fundamental entender como relacioná-las com outras dimensões no nosso relatório. Podemos relacionar, por exemplo, a data de início de uma operação com a data do calendário.

### Ajustes Dinâmicos para Anos

Quando nossos dados não contemplam o ano corrente, precisamos realizar ajustes para garantir que a dimensão hora funcione corretamente. Esse ajuste pode envolver a exclusão de colunas que geram erro por falta de dados atualizados.

## Capítulo 3: Visualizando Dados com a Dimensão Hora

### Criando Medidas e Visualizações

Podemos criar medidas, como a quantidade de peças produzidas, e visualizar esses dados utilizando diferentes tipos de gráficos que exploram a dimensão hora para dar mais profundidade à nossa análise.

### Análise por Períodos do Dia

Com a tabela de dimensão hora, é possível analisar a produção ou operação nos diferentes períodos do dia, sejam eles matutino, vespertino ou noturno, e realizar comparações entre esses períodos.


## Conclusão

O domínio das dimensões de data e hora é crucial para uma análise de dados robusta e detalhada. Com as ferramentas e técnicas abordadas neste eBook, é possível aprimorar a análise de tempo e conduzir relatórios mais informados no Power BI.
![mindmap27_page-0001.jpg](../_resources/mindmap27_page-0001.jpg)



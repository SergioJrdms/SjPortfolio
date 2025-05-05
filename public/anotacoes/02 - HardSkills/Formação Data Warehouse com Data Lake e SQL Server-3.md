---
title: >-
  Formação Data Warehouse com Data Lake e SQL Server (Projetão BI do zero Parte
  1 - teoria de BI e inicio do projeto)
updated: 2025-03-06 00:25:31Z
created: 2024-07-12 18:44:58Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

- [Unificando conceitos](#unificando-conceitos)
- [Fases do projeto de BI](#fases-do-projeto-de-bi)
    - [1\. Matriz dimensão-indicador (já feito aqui)](#1-matriz-dimens%C3%A3o-indicador-j%C3%A1-feito-aqui)
    - [2\. Data Warehouse](#2-data-warehouse)
    - [3\. Definição das fontes de dados](#3-defini%C3%A7%C3%A3o-das-fontes-de-dados)
    - [4\. ETL versus ELT](#4-etl-versus-elt)
    - [5\. Data Marts](#5-data-marts)
    - [6\. Dashboards](#6-dashboards)
    - [7\. Disponibilização das ferramentas](#7-disponibiliza%C3%A7%C3%A3o-das-ferramentas)
- [Conhecendo o modelo de negócio (de forma geral - Ponta pé do projeto)](#conhecendo-o-modelo-de-neg%C3%B3cio-de-forma-geral-ponta-p%C3%A9-do-projeto)
- [Selecionando o modelo de negócio (definindo processos de negócio e suas relações)](#selecionando-o-modelo-de-neg%C3%B3cio-definindo-processos-de-neg%C3%B3cio-e-suas-rela%C3%A7%C3%B5es)
- [Como construir o Data Warehouse (teoria)](#como-construir-o-data-warehouse-teoria)
    - [Abordagem Horizontal](#abordagem-horizontal)
    - [Abordagem Vertical](#abordagem-vertical)
    - [Compreendendo a análise para escolher a abordagem correta](#compreendendo-a-an%C3%A1lise-para-escolher-a-abordagem-correta)
        - [Conclusão](#conclus%C3%A3o)
- [Processo de negócio escolhido (inicio)](#processo-de-neg%C3%B3cio-escolhido-inicio)
    - [Processo de negócio escolhido](#processo-de-neg%C3%B3cio-escolhido)
- [Identificando as dimensões (criando dimensões de forma teórica)](#identificando-as-dimens%C3%B5es-criando-dimens%C3%B5es-de-forma-te%C3%B3rica)
- [Identificando os atributos](#identificando-os-atributos)
- [Nível Input](#n%C3%ADvel-input)
- [Hierarquias (de atributos)](#hierarquias-de-atributos)
    - [Como definiremos isso?](#como-definiremos-isso)
- [Atributo X Hierarquia (quando é atributo e quando é hierarquia)](#atributo-x-hierarquia-quando-%C3%A9-atributo-e-quando-%C3%A9-hierarquia)
    - [Separando Hierarquias](#separando-hierarquias)
        - [Hierarquia](#hierarquia)
    - [Atributo ou Hierarquia?](#atributo-ou-hierarquia)
- [Dimensão Tempo (obrigatória!)](#dimens%C3%A3o-tempo-obrigat%C3%B3ria)
    - [Nível input e identificador](#n%C3%ADvel-input-e-identificador)
    - [Hierarquia](#hierarquia-2)
    - [Atributos](#atributos)
- [Indicadores](#indicadores)
    - [Indicadores Básicos](#indicadores-b%C3%A1sicos)
    - [Indicadores calculados](#indicadores-calculados)
    - [Indicadores de performance e desempenho](#indicadores-de-performance-e-desempenho)
- [Consolidação do indicador](#consolida%C3%A7%C3%A3o-do-indicador)
- [Indicador input calculado](#indicador-input-calculado)
    - [Preço unitário de venda](#pre%C3%A7o-unit%C3%A1rio-de-venda)
    - [Preço unitário de compra](#pre%C3%A7o-unit%C3%A1rio-de-compra)
- [Relação final dos indicadores](#rela%C3%A7%C3%A3o-final-dos-indicadores)
- [Matriz dimensão indicador](#matriz-dimens%C3%A3o-indicador)
    - [Matriz Dimensão Indicador](#matriz-dimens%C3%A3o-indicador-2)
- [Paperware](#paperware)
    - [Exemplo de Paperware no Notion](#exemplo-de-paperware-no-notion)

# <span style="color: #ffffff;">Unificando conceitos</span>

A implementação de um projeto de *Business Intelligence* não se limita a construir *dashboards* com uma base de dados já existentes na empresa.

Embora essa abordagem possa ser válida para o pessoal operacional, ela não é adequada para relatórios gerenciais. Isso porque os dados que estão gerenciando os processos transacionais da empresa **não** podem ser fontes para os relatórios gerenciais.

Antes de determinar o valor do faturamento ou qualquer outro indicador da empresa, é importante determinar o **critério do que significa faturamento**. Por exemplo:

- Para o executivo de **vendas**, o faturamento se dá quando a nota fiscal é emitida.
- Para o executivo de **contabilidade**, o faturamento é o valor total de tudo que é lançado na conta contábil.
- Para o executivo **financeiro**, o faturamento se dá apenas quando o dinheiro entra na conta bancária.

Se considerarmos cada departamento isoladamente, todos estão corretos na forma em que encaram o que significa faturamento, porque cada um utiliza o conceito **operacional** de faturamento.

<span style="color: #c0c0c0;">Mas, quando implementamos um projeto de BI, falamos de informações</span> **gerenciais**<span style="color: #c0c0c0;">, para tomada de decisão por parte dos executivos da empresa. A empresa precisa ter a versão oficial do que é faturamento, e todos os executivos a nível gerencial devem olhar esse valor considerando esse</span> **único conceito**<span style="color: #c0c0c0;">.</span>

Afinal, haverá indicadores calculados de tomada de decisão que vão considerar indicadores de diferentes departamentos, que podem estar usando conceitos diferentes.

Um exemplo disso é o cálculo de lucro da empresa. O valor das vendas virá do departamento de vendas, e o custo talvez venha do departamento de produção. Para fazer esse cálculo, é necessário que esses dois indicadores tenham o mesmo conceito.

Logo, **implementar um projeto de BI não é apenas plugar uma ferramenta de dashboards em uma base de dados. <- isso é a cereja do bolo!**

Antes de tudo, precisamos definir os **indicadores gerenciais**, seus conceitos, como eles serão extraídos, onde e como eles serão armazenados e, principalmente, como eles serão exibidos para que o número a ser divulgado seja **único** e de conhecimento de toda a empresa.

# <span style="color: #ffffff;">Fases do projeto de BI</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">As</span> **fases da implementação de um projeto de *Business Intelligence:***</span>

## 1\. Matriz dimensão-indicador (já feito aqui)

O primeiro passo do projeto consiste em definir os **processos operacionais** da empresa. A partir disso, criamos o que se chama de Matriz Dimensão-Indicador. Essa matriz vai determinar **o que** visualizar e **como** vamos visualizar todos os **indicadores gerenciais** da empresa.

![24de4108b7d113dbcdc1e2ea7ae7f40b.png](../_resources/24de4108b7d113dbcdc1e2ea7ae7f40b.png)

## 2\. Data Warehouse

Baseado no resultado da matriz, projetamos o que se chama de Data Warehouse ("armazém de dados", em português), um grande banco de dados onde armazenamos as informações gerenciais, **separadas dos dados transacionais**.

![e29f82dfb430157cdf0537bcb60cb4cd.png](../_resources/e29f82dfb430157cdf0537bcb60cb4cd.png)

## 3\. Definição das fontes de dados

Com o Data Warehouse montado, precisamos definir as fontes de dados. Normalmente, as fontes de dados são **diversas** e advindas de diferentes repositórios, como bancos de dados, planilhas, arquivos, nuvens e assim por diante.

![e68c6534eb4b46a33bf27a75ad2a875f.png](../_resources/e68c6534eb4b46a33bf27a75ad2a875f.png)

## 4\. ETL *versus* ELT

Nesse ponto, podemos ter duas abordagens na implementação do projeto:

- Implementar um processo de **ETL** (*Extract, Transform and Load*, ou "Extrair, Transformar e Carregar")

<img src="../_resources/6498cd9f5dc3f11b5b0280b792222208.png" alt="6498cd9f5dc3f11b5b0280b792222208.png" width="337" height="254" class="jop-noMdConv">

- Ou guardar todos os dados-fonte em outro grande banco chamado Data Lake, aplicando um processo de **ELT** ("Extrair, Carregar e Transformar)

![e1c7c84bdbc53f4ed747b3972d0b7a30.png](../_resources/e1c7c84bdbc53f4ed747b3972d0b7a30.png)

## 5\. Data Marts

Com o Data Warehouse carregado, **segmentamos** os dados em pequenas bases de dados **focadas em consultas**, chamadas Data Marts. **Elas devem ter como única e exclusiva fonte o Data Warehouse.**

**![1f1582885789fafbfb88a00bef93b0fb.png](../_resources/1f1582885789fafbfb88a00bef93b0fb.png)**

## 6\. Dashboards

Finalmente, chegamos ao momento de construir os *dashboards* — **baseados apenas no conteúdo dos Data Marts**. A construção de *dashboards* deve se resumir apenas à **apresentação** dos dados **previamente calculados e armazenados**.

> **Todos os cálculos e transformações devem estar no Data Warehouse e no Data Mart, porque há um grande risco de cálculos e transformações efetuados na ferramenta de *dashboards* comprometerem o conceito do indicador.**

## 7\. Disponibilização das ferramentas

Por fim, o consultor de BI deve ter a sensibilidade de disponibilizar ferramentas de visualização **corretas para cada tipo de usuário**.

Isso porque, por exemplo, podemos ter um usuário analítico que deseja ter ferramentas de exploração de dados. Já os gerentes desejam ferramentas de exploração mais direcionadas.

*Dashboards* com pouco dinamismo, mas com os dados principais consolidados e apresentados de forma intuitiva, são direcionados para o alto comando da empresa.

> É importante ressaltar que a necessidade de passar por diversas fases até a construção dos Dashboards não impede a criação rápida de relatórios ao conectar planilhas de Excel ou bases transacionais.
> 
> No entanto, é fundamental considerar que esses relatórios terão um uso pessoal, adequados apenas ao controle diário do usuário. Por outro lado, um Dashboard corporativo, destinado a ser compartilhado em toda a empresa, requer uma abordagem mais abrangente.
> 
> Isso envolve levantar as regras de negócio, criar um repositório centralizado com indicadores pré-definidos, utilizar essas mesmas regras de negócio na criação de bases de dados para consultas e, por fim, desenvolver um Dashboard que não dependa de processos internos de ETL ou cálculo de indicadores especiais.

* * *

&nbsp;

# <span style="color: #ffffff;">Conhecendo o modelo de negócio (de forma geral - Ponta pé do projeto)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">A primeira informação que precisamos saber é</span> **o que é a empresa**<span style="color: #c0c0c0;">. Toda pessoa que atua em BI precisa ter uma boa noção do negócio no qual está projetando os indicadores gerenciais.</span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Nós precisamos estar atentos aos desejos dos executivos da empresa em relação aos indicadores que eles desejam acompanhar para tomar decisões. Isso se deve ao fato de que, ao nos referirmos a</span> **processos transacionais** <span style="color: #c0c0c0;">de uma empresa, eles tendem a ser</span> **parecidos ou iguais para empresas de segmentos semelhantes**<span style="color: #c0c0c0;">.</span></span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Os</span> **processos operacionais** <span style="color: #c0c0c0;">estão ligados às boas práticas</span> **administrativas** <span style="color: #c0c0c0;">e também à</span> **legislação** <span style="color: #c0c0c0;">vigente para aquele negócio. Por outro lado, os</span> **processos gerenciais** <span style="color: #c0c0c0;">estão desconectados dessa obrigatoriedade legal e estão mais relacionados às decisões e práticas administrativas.</span></span></span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Os **modelos gerenciais** são moldados de acordo com as **necessidades dos executivos** responsáveis por tomar as decisões. Essas definições estão relacionadas à escola de administração da qual os executivos vieram, à tradição corporativa da empresa e a outros fatores relevantes.</span></span></span></span>

> <span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Transação é igual, gerencial não.</span></span></span></span>

# <span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #ffffff;">Selecionando o modelo de negócio (definindo processos de negócio e suas relações)</span></span></span></span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #ffffff;"><span style="color: #c0c0c0;">Aprendemos que o</span> *Data warehouse* <span style="color: #c0c0c0;">é um banco de dados gerencial que abrange toda a empresa. Apesar das informações estarem centralizadas, é importante compreender os diferentes modelos de negócio. Afinal, precisaremos eleger um modelo para começar.</span></span></span></span></span></span>

Precisamos entender os processos de negócio da empresa.

> Empresas possuem diversos processos de negócios que se relacionam entre si.

Precisamos entender como os processos de negócio se relacionam entre si. Lembrando que no esquema do *Data warehouse*, cada processo de negócio possui sua base operacional (Data Marts).

Uma das funções fundamentais do *Data warehouse* é consolidar todas as bases de dados, garantindo que os diversos processos de negócio estejam **centralizados em um único ambiente**. Dessa forma, o *Data warehouse* possibilita a integração e a harmonização das informações provenientes desses processos, proporcionando uma **visão abrangente** e **unificada** do negócio.

Considerando a necessidade de utilizar as mesmas regras de negócio, é importante ter em mente que todas as etapas do processo no *Datawarehouse* devem seguir essas regras.

> 1.  Empresas possuem diversos processos de negócios que se relacionam entre si.
>     
> 2.  Regras de negócio devem ser únicas para os processos operacionais.
>     

Em alguns casos, as regras de negócio podem entrar em conflito, o que requer a intervenção de um responsável na empresa para realizar uma arbitragem e determinar quais regras prevalecerão.

É nesse ponto que entra a **arbitragem**, buscando inicialmente um acordo entre as partes envolvidas. Caso não seja possível alcançar um consenso, será necessária a intervenção de uma pessoa da executiva pertencente à estrutura diretiva da empresa para tomar a decisão final.

**No momento, cabe à pessoa consultora de *Business Intelligence* (BI) a função de mediar a implementação das regras de negócio. No entanto, quem decide os critérios é a empresa.**

Para definirmos onde o projeto de BI irá começar, podemos mapear os processos de negócio de uma empresa em um diagrama parecido com esse:  
![cbe72a0dd549f78786dd03a44888909d.png](../_resources/cbe72a0dd549f78786dd03a44888909d.png)

O processo tem início no caixa (Venda - Emissão de Ticket), quando um cliente realiza a compra de uma mercadoria. Nesse momento, é gerada uma nota fiscal para registrar a transação, o que resulta em um lançamento contábil nos livros fiscais (Contabilidade - Lançamento contábil da venda).

Além disso, a área financeira registra o recebimento ou a previsão de recebimento, considerando que o cliente pode optar pelo pagamento no crédito (Financeiro - Registro no contas a receber). Por fim, a saída da mercadoria da loja resulta em uma baixa no estoque do produto (Estoque - Baixa do produto no estoque).

A área de compras deve acompanhar a baixa no estoque dos produtos para monitorar o nível de estoque e solicitar a compra de novas mercadorias aos fornecedores, a fim de repor o estoque.

Quando uma mercadoria é comprada, ocorre a entrada do produto no estoque (Estoque - Entrada do produto no estoque). Além disso, a área financeira registra uma despesa a pagar (Financeiro - Registro no contas a pagar), enquanto a contabilidade realiza o lançamento contábil correspondente a essa compra (Contabilidade - Lançamento contábil da compra).

Após a conclusão de todo esse processo, o time de marketing ficará responsável por acompanhar as vendas realizadas em um período específico e compará-las às campanhas publicitárias com promoções. O objetivo é obter um feedback para determinar se essas iniciativas estão gerando resultados positivos.

Devemos também identificar os grupos de processos dentro da empresa, por exemplo:

1.  Vendas
2.  Contabilidade
3.  Estoques
4.  Compras
5.  Financeiro
6.  Marketing
7.  Logística
8.  Recursos Humanos

E assim, temos mapeado todo o processo negocial de uma empresa, ou seja, sabemos como as coisas funcionam "por de trás das cortinas" e assim podemos dar inicio ao nosso projeto de BI.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Como construir o Data Warehouse (teoria)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Sabemos que um</span> *Data Warehouse* <span style="color: #c0c0c0;">é um banco de dados gerencial onde todos os indicadores da empresa são armazenados. <span style="color: #c0c0c0;">Quando destacamos os processos de negócio da empresa, também estavamos organizando os principais</span> *data marts* <span style="color: #c0c0c0;">que serão gerados no final do projeto, para serem utilizados como fontes no</span> *Dashboard*<span style="color: #c0c0c0;">.</span></span></span>

Assim sendo, **é essencial que todos os indicadores relacionados aos processos e negócios sejam incluídos no *Data Warehouse***. Isso requer a aplicação consistente da mesma regra de negócio, tanto durante o processo de ETL (Extração, Transformação e Carga) - que envolve a extração dos dados de suas fontes originais e a gravação no *Data Warehouse* - quanto na aplicação dessas regras no cálculo e consolidação dos dados.

**É crucial manter a conformidade e consistência das informações em todas as etapas do projeto de BI.**

Construir o *Data Warehouse* e extrair os dados para os diversos data marts em um projeto é conhecido como uma **abordagem horizontal**.

## Abordagem Horizontal

Também conhecida como abordagem por processo ou por aplicativo, envolve a construção do Data Warehouse de forma abrangente, abordando os processos de negócio da organização como um todo.

Nessa abordagem, os dados são integrados em uma única estrutura de DW, compartilhando uma modelagem de dados comum e um conjunto de ETL centralizado. Ela permite uma visão **unificada** e **consistente** dos dados em toda a organização, facilitando a análise e a geração de relatórios holísticos. No entanto, pode exigir um **maior esforço** inicial de integração e **harmonização** dos dados de diferentes fontes e sistemas.

Essa abordagem pode ser mais eficiente na construção do projeto, pois garante que todos os indicadores utilizem a mesma regra de negócio. No entanto, é importante destacar que essa abordagem pode levar mais tempo para produzir resultados tangíveis. Isso ocorre porque requer a construção completa do *Data Warehouse* e a implementação simultânea de todos os *data marts*.

Embora a demora seja compensada pela consistência e integridade dos dados, é necessário ter em mente que os benefícios completos do projeto serão alcançados em estágios posteriores.

## Abordagem Vertical

A abordagem vertical, também conhecida como abordagem por assunto ou por função, concentra-se em construir o Data Warehouse por áreas de negócio ou assuntos específicos.

Nessa abordagem, cada área de negócio é tratada separadamente, com seus próprios processos de extração, transformação e carga (ETL), modelagem de dados e criação de cubos multidimensionais. **Ela é adequada quando existem requisitos específicos e complexos para cada área de negócio, e permite uma maior flexibilidade e adaptabilidade para atender às necessidades de cada setor da organização.** No entanto, pode resultar em **redundâncias** de dados e **complexidade** na integração de informações entre as áreas. Por isso devemos sempre evitar estas redundâncias e ir adaptando as definições do Data Warehouse para um único conceito.

Na abordagem vertical, um primeiro processo de negócio é selecionado e o projeto de BI é implementado exclusivamente para esse processo. Se afirmarmos que essa abordagem é a melhor, pode haver uma contradição, uma vez que outras abordagens também têm seus méritos e dependem das necessidades e restrições específicas de cada empresa.

Cada abordagem possui vantagens e desvantagens, e a escolha da melhor abordagem dependerá das circunstâncias e dos objetivos do projeto de BI em questão. É importante considerar as necessidades da empresa, os recursos disponíveis e o cronograma desejado antes de determinar a abordagem mais adequada.

Uma abordagem bem melhor, porém devemos ser habilidosos.

## Compreendendo a análise para escolher a abordagem correta

Desde o início, defendemos que todos os processos devem ser analisados sob a mesma perspectiva. Então, por que estamos agora focando apenas em um único processo de negócio?

Primeiramente, optamos por analisar um único processo de negócio devido à necessidade do cliente de obter resultados em um prazo reduzido. Isso ocorre porque o cliente está investindo recursos financeiros e já enfrentou frustrações no passado, uma vez que o processo em questão não é simplesmente a integração de planilhas de Excel através de um *pendrive*.

Dessa forma, a abordagem vertical oferece resultados rápidos para o cliente. No entanto, é importante que o consultor de BI seja cuidadoso ao implementar o *Data Warehouse* usando essa abordagem, pois pode não ser eficiente.

Isso ocorre porque o consultor de BI precisa adotar uma abordagem rígida, mantendo as mesmas regras de negócio ao definir todas as entidades e adaptando o *Data Warehouse* à medida que outros processos de negócio são implementados.

Um exemplo disso é a entidade "Cliente". Essa entidade será compartilhada entre os processos de negócio de vendas e financeiro. Ao implementarmos o processo de vendas utilizando a abordagem vertical, a entidade "Cliente" será criada com base em critérios de regras de negócio estabelecidos pelo processo de vendas por ser o primeiro a ser definido.

Ao implementarmos o segundo processo financeiro e utilizarmos a entidade "Cliente" nesse contexto, é necessário adaptar essa entidade às regras de negócio do outro modelo, de modo que uma única regra seja capaz de atender aos dois processos.

No *Data Warehouse*, **nunca devemos criar entidades diferentes que representem a mesma coisa.**

### Conclusão

Após análises e considerações, chegamos à conclusão de que a abordagem vertical será utilizada. Agora, é necessário eleger o primeiro processo de negócio que servirá como ponto de partida para a implementação do projeto de *Business Intelligence* (BI) e a construção do *Data Warehouse*.

> <span style="color: #c0c0c0;">A implementação de um Data Warehouse corporativo, que engloba todos os indicadores de todas as áreas da empresa, é um trabalho grande e complexo. Pode ser que estes tipos de projetos durem anos e, ainda assim, nunca tenham fim, já que ao longo do tempo novos cenários econômicos podem surgir exigindo novos indicadores gerenciais.</span>

* * *

&nbsp;

# <span style="color: #ffffff;">Processo de negócio escolhido (inicio)</span>

## Processo de negócio escolhido

Decidimos implementar um *Data Warehouse* usando a abordagem vertical. Agora, qual processo de negócio iremos iniciar? Vamos começar pelo processo de **Vendas**, aqui, temos que considerar as preferências do cliente sobre o que ele quer controlar primeiro, nesse caso, a entrada de dinheiro (geralmente os clientes sempre irão priorizar isso, dinheiro), ou seja a abordagem de **Vendas**.

> Geralmente as empresas, clientes, sempre querem saber primeiro a entrada de dinheiro, e depois em segundo, sempre priorizam a saída desse dinheiro, os custos.

A decisão sobre qual processo começar a implementar o *Data Warehouse* é do cliente. No entanto, há um consenso de que, em projetos de *Business Intelligence*, é sempre recomendado começar pelo ponto de entrada financeiro. Posteriormente, a empresa deseja identificar os pontos de saída de dinheiro, ou seja, os custos envolvidos.

Após a implementação desses processos, cada empresa opta por um caminho a seguir com os novos processos de implementação de *Business Intelligence*.

No entanto, é comum que o controle de Vendas e Custos seja o foco inicial dos projetos de *Business Intelligence* nas empresas.

Ao seguir com a abordagem vertical, devemos nos atentar as nuances de cada processo negocial, por exemplo em vendas, devemos nos atentar a cada detalhe de como é feita e registrada uma venda, devemos ter todo o contexto possível de como as coisas funcionam em cada processo

<span style="color: #c0c0c0;">A primeira etapa para um consultor de BI é compreender o negócio, cada empresa  possui regras específicas que devem ser levadas em conta durante a implementação do projeto.</span>.

&nbsp;

# <span style="color: #ffffff;">Identificando as dimensões (criando dimensões de forma teórica)</span>

<span style="color: #c0c0c0;">A implementação de um projeto de</span> *Business Intelligence* <span style="color: #c0c0c0;">não consiste somente em somente plugar o</span> *dashboard* <span style="color: #c0c0c0;">na planilha do Excel ou das bases operacionais,</span> é necessário criar um modelo do projeto de BI antes de implementá-lo.

**Nessa modelagem, é necessário identificar uma série de entidades. A primeira delas são as dimensões.**

Nós devemos definir um processo negocial inicial. <span style="color: #c0c0c0;">A partir dessa definição, precisamos analisar esse processo detalhadamente. A melhor maneira de fazer isso é</span> ***identificando o grão do processo***<span style="color: #c0c0c0;">.</span>

<span style="color: #c0c0c0;">Esse grão consiste no **menor processo operacional** ocorrido em determinado modelo de negócio. Em um controle de estoque, por exemplo, o grão é o movimento da mercadoria dentro do almoxarifado. Já em um processo contábil, o grão é o lançamento dos giros fiscais. (grão seria aquilo que acontece várias vezes de forma repetida e individual que gera dados, por exemplo, dados de venda por produto, pois representa os dados de vendas em um nível de detalhe específico, ou seja, cada registro contém informações detalhadas sobre uma transação de venda de um produto em particular.)</span>

No caso do processo de venda, ***o grão é a nota fiscal emitida quando o cliente compra a mercadoria***. Vamos identificar tudo o que temos nele.

> **Exemplo de Nota Fiscal:**
> 
> Atacadão Varejo
> 
> Loja 001 - Rio de Janeiro
> 
> CNPJ:122212212/0001-12
> 
> Ticket: 123321
> 
> Data: 03/01/2023-12:45 PM
> 
> Cliente: José Ltda - 122343247/0001-01
> 
> | #   | #   | #   | #   | #   |
> | --- | --- | --- | --- | --- |
> | Limão | 3,00 | dz  | 1,20 | 3,60 |
> | Lombo de Porco | 1,00 | kg  | 12,40 | 12,40 |
> | Picanha maturada | 2,00 | kg  | 22,30 | 44,60 |
> | Carvão | 1,00 | SC  | 2,40 | 2,40 |
> | Alface | 3,00 | pc  | 2,50 | 7,50 |
> | Total |     |     |     | 70,50 |
> | Imposto |     |     | 8%  | 5,64 |
> | Total a pagar |     |     |     | 76,14 |

Como exemplo, temos uma nota fiscal com seis campos no topo:

- Nome da empresa
- Identificador e nome da loja
- CNPJ da loja
- Número do Ticket
- Data da venda ou da emissão do ticket
- CNPJ e nome da pessoa cliente

Abaixo destes campos, temos a lista de produtos em formato semelhante a uma tabela sem títulos, com suas quantidades, unidades de medida, preço unitário, preço por item, valor total do pedido, valor do imposto e valor total a pagar.

Outro grão a ser analisado são as ***ordens de compra*** para que possamos buscar nelas o custo direto de cada mercadoria.

> **Exemplo de Ordem de Compra:**
> 
> Atacadão Varejo
> 
> CNPJ:122212212/0001-01
> 
> Ordem de Compra: 233323
> 
> Fornecedor: Laticinios Bovino
> 
> Data Compra: 03/01/2023
> 
> | #   | #   | #   | #   | #   |
> | --- | --- | --- | --- | --- |
> | Picanha Maturada | 20  | kg  | 10,60 | 212,00 |
> | Lombo de Porco | 15  | kg  | 8,60 | 129,00 |
> | Total |     |     |     | 341,00 |
> | Imposto |     |     | 7%  | 23,87 |
> | Total a pagar |     |     |     | 364,87 |

Neste grão, temos unidades semelhantes e outras diferentes:

- Nome da empresa
- CNPJ da empresa
- Número da Ordem de Compra
- Identificador de nome do Fornecedor

<span style="color: #c0c0c0;">Temos o nome da empresa, mas não a loja, pois as compras são centralizadas no armazém central. Além disso, temos a mesma lista de produtos em formato semelhante a uma tabela sem títulos, com suas quantidades, unidades de medida, preço unitário, preço por item, valor total do pedido, valor do imposto e valor total a pagar.</span>

**Apesar de querermos identificar apenas a dimensão, vamos analisar o grão por completo e em seguida, separar o que nos interessa neste momento.**

Com o grão definido, precisamos definir duas coisas. Primeiro, vamos verificar o que queremos analisar nos *dashboards* finais. A partir dessa resposta, teremos os ***indicadores*** do nosso modelo. Para assim, selecionarmos os dados que usaremos na construção desses indicadores.

Analisando os grãos junto às pessoas executivas, chegamos aos seguintes indicadores:

- Quantidade
- Preço de venda
- Valor total de venda sem imposto
- Valor Imposto
- Valor total com imposto
- Valor total da compra
- Lucro

<span style="color: #c0c0c0;">Aqui, estamos implementando um processo de negócio de vendas. Analisamos o grão das ordens de compra somente para obter o valor total da compra e posteriormente o fornecedor. Os outros indicadores não serão buscados nesse grão.</span>

<span style="color: #c0c0c0;">Após identificar o que queremos analisar, entenderemos como queremos analisar (em quais grupos). Assim, teremos as</span> ***dimensões***<span style="color: #c0c0c0;">.</span>

No nosso caso, identificaremos as seguintes informações:

- Empresa
- Loja
- CNPJ da loja
- Número do ticket
- Data da venda
- Identificador e nome do cliente
- Produto
- Unidade
- Fornecedor (proveniente da ordem de compra)

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Primeiramente, devemos olhar para essas dimensões acima e saber se elas podem ser</span> ***agrupadas (unir informações)***<span style="color: #c0c0c0;">. Muitas vezes, a pessoa consultora de Business Intelligence precisa trabalhar com as pessoas usuárias de negócio para efetuar esse agrupamento.</span></span>

Após consultar essas pessoas, obtivemos o seguinte resultado para as dimensões únicas:

- Empresa / Loja / CNPJ loja
- Número do ticket
- Data da venda
- Identificador e nome do cliente
- Produto / Unidade / Identificador e nome do fornecedor

A empresa, a loja e o CNPJ da loja estão associados a uma entidade que identifica o local onde a venda é realizada. A unidade de medida é uma propriedade diretamente relacionada com o produto. O fornecedor também está relacionado ao produto. A identificação do cliente e seu nome estão relacionadas, portanto, à mesma entidade.

Após esse agrupamento, devemos dar nomes a eles:

- **EMPRESA -** (Empresa Loja CNPJ loja)
- **TICKET -** (Número do ticket)
- **TEMPO -** (Data da venda)
- **CLIENTE -** (Identificador e nome do cliente)
- **PRODUTO -** (Produto / Unidade / Fornecedor - Nome e ID)

<span style="color: #c0c0c0;">Deve-se usar um nome curto para as dimensões, que sejam de identificação clara. Dentro de cada dimensão, temos as características obtidas do grão.</span>

&nbsp;

# <span style="color: #c0c0c0;"><span style="color: #ffffff;">Identificando os atributos</span></span>

<span style="color: #c0c0c0;"><span style="color: #ffffff;"><span style="color: #c0c0c0;">Com as dimensões determinadas, passaremos a trabalhar na identificação dos atributos. No contexto da modelagem dimensional, "atributos" referem-se aos dados ou características (campos, colunas) que compõem cada dimensão.</span></span></span>

Após a análise do grão, chegamos à lista de dimensões abaixo, obtidas analisando as entidades que compõem a nota fiscal emitida no ato da venda de produtos.

- EMPRESA
- TICKET
- TEMPO
- CLIENTE
- PRODUTO

A partir desta etapa, deveremos analisar os ***atributos derivados das dimensões***. Não estamos interessados em saber a quantidade comprada de determinado produto por determinada pessoa em determinado dia (ex, quantos kgs de picanha José comprou em X dia). Essa informação é muito específica. Cabe ao Departamento de Vendas que atende essa pessoa verificar essa informação.

O tipo de informações que o setor executivo necessita para tomar decisões são consolidadas e de alto nível (geral), por exemplo:

- Qual foi o **faturamento** de **produtos de açougue** no **último mês**?
- Qual a **cidade** onde houve um **maior consumo** de **produtos de limpeza**?
- Em que **época** do ano **vende-se mais** produtos da **peixaria**?

<span style="color: #c0c0c0;">Estas são perguntas mais analíticas que envolvem</span> **períodos de tempo maiores** <span style="color: #c0c0c0;">e</span> **entidades** <span style="color: #c0c0c0;">que não existem no grão, mas podem ser derivadas das dimensões contidas nele.</span>

Vamos analisar a primeira pergunta. A venda registrada no grão utiliza as unidades de dia e de hora, mas a informação desejada pelo setor executivo é o faturamento do mês de todos os produtos vendidos no açougue.

Já a segunda pergunta solicita informações sobre um grupo de produtos para uma cidade específica. Não temos a cidade no grão, mas essa informação pode ser obtida por meio do cliente.

A terceira pergunta, por sua vez, solicita uma análise mensal para um grupo de produtos. No grão, temos apenas o dia da venda registrado. Contudo, pelo dia, podemos obter o mês.

Nessa fase, devemos voltar a conversar com o setor executivo e definir ***quais são as análises mais importantes para a tomada de decisão***.

Certamente, a clientela possui relatórios e planilhas de Excel ou relatórios emitidos por departamentos especializados em coleta de informações manual. Devemos analisá-los, pois eles serão guias para determinar os principais atributos a serem considerados no modelo.

**Porém, há uma regra fundamental: *o atributo deve ser derivado de uma dimensão*. Se existe um atributo que não cumpre este pré-requisito, ele deve se transformar em uma dimensão**.

Após examinar todos os relatórios existentes, definimos a seguinte lista para a dimensão Cliente:

- CNPJ
- Nome
- Cidade onde tem sede
- Estado onde tem sede
- Região geográfica onde tem sede
- Segmento de mercado
- Tamanho

A dimensão de tamanho diz respeito ao faturamento médio da clientela. A nossa empresa gosta de visualizar os dados separando-os em clientelas grandes, médias ou pequenas.

No caso da dimensão Produto, os atributos abaixo são os mais importantes:

- Identificador
- Nome
- Setor onde é vendido
- Unidade de medida
- Fornecedor

No caso de Empresa, os atributos mais importantes são:

- Identificador da Loja
- Nome da Loja
- Tamanho da Loja
- Empresa

<span style="color: #c0c0c0;">Nossa empresa possui uma classificação de suas lojas, sendo Super ou Hiper. Ela depende do tamanho da loja e da capacidade de atender clientes.</span>

Na dimensão Ticket, identificada no grão de vendas, temos o número do ticket e o sequencial numérico que identifica todos os itens comprados por determinada clientela.

- Código do Ticket
- Sequencial do Item

O identificador sequencial de item na nota é necessário, pois, quando há a compra de uma quantidade grande do mesmo produto, é comum que a pessoa operadora passe várias vezes o mesmo produto no leitor de códigos de barra para evitar trabalho extra. Com isso, o mesmo produto aparecerá na nota várias vezes e cada ocorrência precisa ser diferenciada.

> <span style="color: #c0c0c0;">Devemos nos lembrar de preparar o projeto de</span> *Business Intelligence* <span style="color: #c0c0c0;">de modo que possa haver</span> ***escalabilidade*** <span style="color: #c0c0c0;">futuramente</span>

Temos todos os atributos definidos. A seguir, continuaremos a modelagem.

&nbsp;

# Nível Input

<span style="color: #c0c0c0;">As dimensões e atributos foram identificados, mas falta um detalhe importante: o próximo passo a ser executado pela consultoria de BI é identificar o</span> ***Nível Input das dimensões***<span style="color: #c0c0c0;">.</span>

**O Nível Input representa os atributos associados diretamente ao grão**. Em nosso caso, temos os seguintes níveis para cada dimensão:

- Identificador da Loja para a dimensão EMPRESA
- Número do Ticket + Sequencial do Item para TICKET
- Dia para TEMPO
- CNPJ de Clientes para CLIENTE
- Identificador do Produto para PRODUTO

Esses cinco atributos estão associados a um Nível Input. Quando o indicador for incluído na *Datawarehouse*, **terá que possuir essas cinco informações como chave primária**. Elas identificam o valor específico de um indicador dentro do *Datawarehouse*. São nossos IDs.

<span style="color: #c0c0c0;">As entidades derivadas desses indicadores, dentro da própria dimensão, serão consolidadas a partir da informação primária (do nível mais baixo) a entrar no Datawarehouse. Esta, por sua vez, será sempre identificada por cinco Níveis Input.</span>

&nbsp;

# <span style="color: #ffffff;">Hierarquias (de atributos)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Já foram definidas as dimensões, atributos e Níveis de Input. Vamos definir as hierarquias.</span></span>

No caso da dimensão Cliente, temos a lista de atributos abaixo:

- CNPJ
- Nome
- Cidade onde tem sede
- Estado onde tem sede
- Região geográfica onde tem sede
- Segmento de mercado
- Tamanho

Podemos identificar que todos os atributos com identificador e descritor podem ser agrupados na mesma entidade. Apesar de cada atributo representar campos distintos dentro de tabelas no banco relacional quando construirmos o *Datawarehouse*, eles representam a mesma coisa semanticamente.

Por isso, podemos reduzir essa lista da seguinte forma:

- Cliente (CNPJ e Nome)
- Cidade onde tem sede
- Estado onde tem sede
- Região geográfica onde tem sede
- Segmento de mercado
- Tamanho do cliente

Os atributos CNPJ e Nome podem se tornar uma única representação constituída de dois campos.

E os outros atributos? A cidade, por exemplo, deve ser definida com termos identificador e descritor?

Isso dependerá dos dados originais dessa informação. Sabemos que no Brasil, por exemplo, temos cidades com nomes idênticos, logo, será interessante criar um código para cada uma delas.

O resultado da lista pode ser visto abaixo.

- Cliente (CNPJ e Nome)
- Cidade (Identificador e Nome)
- Estado onde tem sede
- Região geográfica onde tem sede
- Segmento de mercado
- Tamanho do cliente

E os outros? Quais critérios levaremos em consideração para criar o código de identificação dos atributos? A resposta é simples: devemos saber se ele ***faz parte de uma hierarquia***.

### Como definiremos isso?

Abaixo, temos todos os atributos da dimensão Cliente, organizados por significados semânticos — ou seja, Cidade, por exemplo, representa todos os atributos relacionados à cidade (Identificador, Nome, População, e assim por diante).

![Diagrama com seis retângulos verdes, em duas fileiras de três, conectados por cinco setas pretas. Na fileira superior, da esquerda para a direita, os retângulos exibem, respectivamente, os textos "Tamanho", "Cliente ()" e "Cidade". Na fileira inferior, no mesmo sentido, os retângulos exibem, respectivamente, os textos "Segmento", "Região" e "Estado". A primeira seta sai de "Tamanho" apontando para "Cliente ()" e exibe acima de si o texto "1:N". A segunda sai de "Cidade" apontando para "Cliente ()" e exibe acima de si o texto "N:1". A terceira sai de "Segmento" apontando para "Cliente ()" e exibe acima de si o texto "1:N". A quarta sai de "Região" apontando para "Cliente ()" e exibe acima de si o texto "N:1". Por fim, a última seta sai de "Estado" apontando para "Cliente ()" e exibe acima de si o texto "N:1".](../_resources/6b499729-2a77-4758-b571-47e12f2c.jpeg)

A partir disso, sabemos que Cliente é o Nível Input (o ID).

No grão de processo de negócios que está sendo modelado, esse é o atributo da dimensão presente no banco. Logo, qualquer outro atributo deverá possuir uma ***relação de 1 para N (1:N)*** com Cliente: 1 cliente possui apenas 1 tamanho, 1 cidade, 1 estado, 1 região e 1 segmento.

Não podemos ter uma clientela de tamanho pequeno e médio ao mesmo tempo, ou uma clientela com sede em São Paulo e no Rio de Janeiro ao mesmo tempo. Este conceito leva em consideração que cada dimensão deve ter ***apenas um atributo de cada tipo***.

Analisando o foco do atributo, a relação é N. Por exemplo: em Tamanho, poderemos ter N clientes de tamanho pequeno. Em Estado, podemos ter N clientes com sede em São Paulo.

Podemos concluir facilmente que a relação entre atributos e o Nível Input sempre será de 1 para N.

A identificação da hierarquia não será obtida pela cardinalidade entre atributos e o Nível Input, mas sim pela ***cardinalidade entre Níveis não Input***.

Na tabela abaixo, cruzamos todos os atributos da dimensão Cliente, mas sem o Nível Input.

| #   | CIDADE | ESTADO | REGIÃO | SEGMENTO | TAMANHO |
| --- | --- | --- | --- | --- | --- |
| CIDADE | X   |     |     |     |     |
| ESTADO |     | X   |     |     |     |
| REGIÃO |     |     | X   |     |     |
| SEGMENTO |     |     |     | X   |     |
| TAMANHO |     |     |     |     | X   |

O cruzamento diagonal não será considerado, pois é constituído de cruzamentos neutros (um atributo se relacionando consigo mesmo).

Observaremos a célula que conecta a linha "Estado" à coluna "Cidade" (célula A1). Quantas cidades um estado pode ter? **N**. Logo, adicionaremos um "N" na célula que conecta a linha "Estado" à coluna "Cidade".

Quantas cidades podemos ter em uma região? **N** também (a região Sudeste, por exemplo, possui muitas cidades). Por isso, adicionaremos um "N" na célula que conecta a linha "Região" à coluna "Cidade".

Quantas cidades temos em um segmento (por exemplo, o de Peixaria)? Podemos afirmar que teremos **N** cidades, já que muitas delas possuem peixarias. Vamos adicionar um "N" na célula que conecta a linha "Segmento" à coluna "Cidade".

Em quantas cidades podemos ter clientes de nível médio, por exemplo? **N** também. Portanto, adicionaremos um "N" na célula que conecta a linha "Tamanho" à coluna "Cidade".

Vamos partir para a coluna "Estado" e realizar o mesmo processo. Quantos estados temos em uma cidade? A cidade só pode estar em um estado (por exemplo, a cidade do Rio de Janeiro só pode estar no estado RJ). Logo, a relação é **1** e vamos adicionar este número na célula que conecta a linha "Cidade" à coluna "Estado".

Vamos ignorar a linha que possui um "X" e analisar a célula que conecta a linha "Região" à coluna "Estado". Quantos estados podemos ter no interior de uma região? N.

Após analisar cada célula e realizar todos os cruzamentos, teremos o resultado abaixo.

| #   | CIDADE | ESTADO | REGIÃO | SEGMENTO | TAMANHO |
| --- | --- | --- | --- | --- | --- |
| CIDADE | X   | 1   | 1   | N   | N   |
| ESTADO | N   | X   | 1   | N   | N   |
| REGIÃO | N   | N   | X   | N   | N   |
| SEGMENTO | N   | N   | N   | X   | N   |
| TAMANHO | N   | N   | N   | N   | N   |

Nele, existem atributos que possuem ***somente X ou N***, tanto em sua linha quanto na sua coluna — como, por exemplo, SEGMENTO e TAMANHO.

| #   | CIDADE | ESTADO | REGIÃO | SEGMENTO | TAMANHO |
| --- | --- | --- | --- | --- | --- |
| CIDADE |     |     |     | **N** | **N** |
| ESTADO |     |     |     | **N** | **N** |
| REGIÃO |     |     |     | **N** | **N** |
| SEGMENTO | **N** | **N** | **N** | **X** | **N** |
| TAMANHO | **N** | **N** | **N** | **N** | **N** |

Quando encontrarmos atributos com esta característica, nós os retiraremos da matriz.

O resultado pode ser visto abaixo.

| CIDADE | ESTADO | REGIÃO |
| --- | --- | --- |
| X   | 1   | 1   |
| N   | X   | 1   |
| N   | N   | X   |
| N   | N   | N   |
| N   | N   | N   |

Vamos analisar e anotar todas as relações entre as entidades que sobraram.

> Cidade-estado: 1 Cidade-região: 1 Estado-região: 1 Estado-cidade: N Região-cidade: N Região-estado: N

Vamos transportar essa representação para o nosso gráfico, considerando que quando houver uma relação 1 para N será transformada em N para 1.

!\[Diagrama anterior, com a adição de três setas pretas: a primeira sai de "Região" apontando para "Cidade" e exibe acima de si o texto "N:1". A segunda sai de "Região" apontando para "Estado" e exibe acima de si o texto "1:N". Por fim, a terceira sai de "Estado" apontando para "Cidade" e exibe acima de si o texto "N:1".\]![Insira aqui a descrição dessa imagem para ajudar na acessibilidade](../_resources/cbf4e3fa-1f99-412b-970e-94d82a2c.png)

Todas as relações vistas na matriz estão representadas nos caminhos criados pelas setas.

Neste gráfico, vamos focar nos caminhos entre Nível Input e atributo e identificar o caminho mais longo (que demanda mais setas).

O caminho entre Cliente e Região possui três formas de ligação: conexão direta Cliente > Região, conexão de duas etapas pelo caminho Região > Estado > Cliente ou de três etapas pelo caminho Região > Estado > Cidade > Cliente.

Vamos manter o caminho com mais etapas (Região > Estado > Cidade > Cliente) e remover os outros.

Ja o caminho entre Estado e Cliente pode ser acessado de duas formas: conexão direta Estado > Cliente ou conexão de duas etapas pelo caminho Estado > Cidade > Cliente.

Vamos remover o caminho Estado > Cliente e manter o mais longo.

Com isso, teremos o seguinte resultado no gráfico, com as relações completas entre os atributos.

![Diagrama anterior, com a remoção de três setas pretas e seus respectivos textos, restando cinco. A primeira sai de "Tamanho" apontando para "Cliente ()". A segunda sai de "Cidade" apontando para "Cliente ()". A terceira sai de "Segmento" apontando para "Cliente (*)". A quarta sai de "Região" apontando para "Estado" e a quinta sai de "Estado" apontando para "Cidade".](../_resources/c26cc73b-d8f1-448e-8db2-d0f55992.png)

**Uma hierarquia representa o caminho entre o atributo Input e os outros**. Portanto, temos três:

- Cliente - Tamanho
- Cliente - Segmento
- Cliente - Cidade - Estado - Região

A seguir, discutiremos quando manter uma propriedade da dimensão como atributo ou como hierarquia.

&nbsp;

# <span style="color: #ffffff;">Atributo X Hierarquia (quando é atributo e quando é hierarquia)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Em alguns casos, podemos modelar a relação entre o Nível Input e a propriedade de uma dimensão como atributo ou hierarquia. Vamos discutir sobre a diferença entre ambos.</span></span>

Na dimensão Cliente, definimos três hierarquias:

- CLIENTE - TAMANHO
- CLIENTE - SEGMENTO
- CLIENTE - CIDADE - ESTADO - SEGMENTO

Toda hierarquia possui níveis. Cada retângulo do gráfico representa um nível. O nível, por sua vez, corresponde ao atributo que faz parte da hierarquia.

Não se trata necessariamente de um atributo propriamente dito, já que a entidade pode possuir três ou mais atributos associados a si.

Por exemplo, se tivermos no nível Cidade a representação do seu código, sua população, grupo político ou outra informação direta sobre ela, tudo fará parte do nível Cidade. Portanto, não estamos falando daquele atributo que representa uma única coluna nas tabelas racionais do *Data Warehouse*.

Podemos classificar nossos Níveis em dois grupos:

- Nível Input
- Nivel Output

O Nível Input sempre será 1 e estará associado ao grão. Todos os outros serão os Níveis Output.

Em função desses grupos, vamos separar as hierarquias e identificar quais delas possuem dois níveis ou mais de dois.

## Separando Hierarquias

Com dois níveis, temos a seguinte hierarquia:

- CLIENTE - TAMANHO
- CLIENTE - SEGMENTO

Com mais de dois níveis, temos a hierarquia abaixo (que possui quatro):

- CLIENTE - CIDADE - ESTADO - REGIÃO

No caso das hierarquias de dois níveis, ***podemos modelá-las exatamente como hierarquia ou mantê-las como atributo.***

Antes de decidir se elas voltarão a ser atributos, vamos entender o conceito de Hierarquia.

### Hierarquia

O conceito de hierarquia associa-se ao conceito de um gráfico, como visto abaixo.

![Gráfico de hierarquias. Fundo branco. Sete retângulos verdes com o texto "Nó" em seus interiores, conectados por setas e segregados em três níveis: superior, central e inferior. A divisão entre os níveis é demarcada por duas linhas pretas tracejadas horizontalmente. No nível superior, um retângulo no centro, do qual partem duas setas diagonais que apontam para dois retângulos abaixo de si. No nível central, os dois retângulos mencionados, dos quais partem duas setas diagonais de cada um. Cada seta aponta para um retângulo abaixo de si, totalizando quatro, que estão no nível inferior. Cada nível possui em seu interior um texto em preto, alinhado à esquerda dos retângulos. Nos níveis superior e central, os textos "Nível (Output)". Já no nível inferior, o texto "Nível (Input)".](../_resources/7829366d-2bd5-4b39-ba0d-4877d36b.png)

Cada retângulo representa um nó que, por sua vez, representa um membro da dimensão. Em relação à nossa hierarquia de quatro níveis, esse membro pode ser CIDADE, ESTADO ou REGIÃO.

Os nós se localizam em determinado nível e não saem dele — ou seja, todas as cidades, por exemplo, estarão em um nível específico, ao passo que todos os estados estarão em outro.

Quando realizamos a ligação entre um nó Input (input seria o gerador de dados, no nosso caso, os clientes) e qualquer nó Output, ***somos obrigados a passar por todos os níveis***.

> **Observação:** É possível que a passagem por todos os níveis não seja aplicável em alguns modelos de negócio, o que implica a necessidade de atravessar do nível mais baixo para o mais alto sem passar pelo intermediário.
> 
> Muitas vezes, essas anomalias são corrigidas no processo de ETL e ELT, por meio da criação de membros fantasma para que os níveis sejam regularizados. Contudo, não devemos nos preocupar com esse tipo de caso neste momento.

Vamos voltar à nossa hierarquia, que é regular. **Ela estará associada a uma definição de negócio e à forma com que pessoas usuárias navegarão pelos *dashboards***. É na definição de hierarquias que o comportamento de **navegabilidade** do relatório será definido.

> **Observação:** Mesmo que a ferramenta de BI utilizada para criar o *dashboard* permita hierarquias customizadas, ***a definição da hierarquia é um dos pilares da definição da regra de negócio*** quando trabalhamos com um modelo único. Por isso, não devemos criar hierarquias diferentes das que estão definidas no *Data Warehouse*.
> 
> Contudo, também não devemos nos preocupar com esse assunto neste momento.

Outra informação importante consiste no fato de que ***toda hierarquia possui um Nível Result***, que representa a agregação de todos os nós da hierarquia.

![Gráfico de hierarquias igual ao anterior, com o acréscimo do nível Result, acima dos outros e também separado por uma linha preta tracejada horizontalmente. No nível novo, há o texto "Nível (Result)" em preto, alinhado à esquerda, e um retângulo verde no centro, com o texto "Nó" em preto. Deste retângulo parte uma seta vertical que aponta para o retângulo do nível imediatamente abaixo de si.](../_resources/f60d7d16-3cd4-4fdc-ac54-e1ef70ae.png)

Quando representarmos a hierarquia no *Data Warehouse*, o Nível Result não aparecerá. Entretanto, em etapas posteriores nas quais construiremos os *Data Marts*, esse elemento será muito importante.

> *Observação:* Um data mart é uma forma simples de *Data Warehouse* com foco em um único assunto ou linha de negócios.

Com a adição desta etapa, podemos classificar a hierarquia em três grupos:

- Nível Result
- Níveis Output
- Níveis Input

Podemos navegar por essa hierarquia de três formas:

- *Drill Down* (perfuração para baixo)
- *Drill Up* (perfuração para cima)
- *Drill Across* (perfuração de um lado a outro)

*Drill Down* trata do processo de descer pela hierarquia, *Drill Up* do processo de subir por ela e *Drill Across* o processo de navegar através dela durante a construção do relatório de BI.

Vamos usar um gráfico de hierarquia geográfica como exemplo.

![Gráfico de hierarquias igual ao anterior, com quatro níveis, com a modificação dos textos no interior dos retângulos. No nível superior (Result), o retângulo exibe o texto "RESULT". No nível abaixo deste, o retângulo exibe o texto "SUDESTE". No terceiro nível, os dois retângulos exibem os textos "RJ" e "SP", da direita para a esquerda. No quarto e último nível (Input), os quatro retângulos exibem os textos "RIO", "NITERÓI", "SÃO PAULO" e "SANTOS", da direita para a esquerda.](../_resources/2466872e-c8a3-478f-990d-e3d9b4f2.png)

Se realizarmos a análise de vendas entre RIO e NITERÓI, estaremos analisando dados de cidades irmãs, pois ambas possuem parentesco em relação a RJ. Se analisarmos dados das cidades RIO e SÃO PAULO, trabalharemos com cidades primas, pois RJ e SP são irmãs.

Podemos realizar a análise de São Paulo comparando todas as cidades abaixo dela — ou seja, todas as suas descendentes. Se queremos analisar todas as cidades de SUDESTE, trabalharemos com todas as descendentes dela.

**É importante enfatizar que, em um projeto de BI corporativo, a forma com que a navegação dos relatórios será efetuada dependerá da modelagem do *Data Warehouse*, não na construção do *dashboard* final.**

**Não podemos modificar a forma de navegação da hierarquia na ferramenta de construção do relatório. Essa forma de navegação faz parte da regra de negócio.**

## Atributo ou Hierarquia?

Voltando ao nosso exemplo, temos as hierarquias CLIENTE - TAMANHO e CLIENTE - SEGMENTO, ambas com dois níveis.

Até agora, vimos que quando definimos uma hierarquia, temos diversos conceitos atrelados a ela, mas eles não se aplicam quando temos muitos níveis na dimensão. Portanto, quando temos apenas dois, devemos decidir ***se o atributo deverá existir ou não***.

![b2d1e6f1c019619812b5a3c3adb4b4e9.png](../_resources/b2d1e6f1c019619812b5a3c3adb4b4e9.png)

Isso mesmo! ***O atributo não possui a obrigatoriedade de estar dentro de uma hierarquia***. Logo, temos a opção de modelar CLIENTE - TAMANHO e CLIENTE - SEGMENTO no DW (*Data Warehouse*) como hierarquia ou como atributo.

A resposta deverá ser dada pela clientela. Em termos de dados, ter uma relação de dois níveis como atributo ou hierarquia depende do modelo de negócio. Apesar disso, podemos nos ater às seguintes boas práticas.

Vamos manter um atributo exatamente como atributo nos casos em que:

- **O atributo contém poucos membros** (como "Pequeno", "Médio" e "Grande")
- **Os membros são relativamente fixos** (assim como o exemplo acima)
- **A entidade não é estruturada** (um exemplo de entidade estruturada seria o SKU, onde os três primeiros dígitos representam a marca)
- **Houverem dimensões padronizadas** (como cenários ou atributos numéricos)

Assim sendo, a dimensão CLIENTE será organizada conforme abaixo:

> Nível INPUT: **Cliente** (CNPJ e Nome)
> 
> Atributos:
> 
> - Tamanho de Cliente
> 
> Hierarquias:
> 
> - Geográfica de Cliente
>     - Níveis: Cliente, Cidade, Estado, Região
> - Segmento:
>     - Níveis: Cliente, Segmento

No Nível Input, temos Cliente com seu identificador e seu descritor. Nos atributos, temos o Tamanho, pois ele possui poucos membros definidos. Por fim, temos duas hierarquias: Geográfica de Cliente que consiste em Cliente, Cidade, Estado e Região e Segmento que consiste em Cliente e Segmento.

Vamos manter Segmento como hierarquia pois ele possui uma lista grande de membros e possui códigos estruturados.

As hierarquias ganharam nomes genéricos baseados em suas propriedades. No caso de Geografia de Cliente, escolhemos esse nome pois, futuramente, podemos precisar de uma hierarquia diferente para a geografia de fornecedores, por exemplo.

É importante que o nome das hierarquias sejam únicos.

No caso de Segmento, identificamos o nível mais importante em seu nome (No caso, o Output Segmento).

Chegamos ao final da modelagem da dimensão CLIENTE. Ao analisar o grão, temos como objetivo chegar nas informações que colhemos acima. Para cada dimensão, definiremos:

- O Nível Input e seus atributos
- Os atributos Output
- As hierarquias com seus nomes e níveis (do Input até o Result)

&nbsp;

&nbsp;

# Dimensão Tempo (obrigatória!)

Existe uma dimensão que todo projeto de BI deve possuir. Ela aparece no grão quando analisamos o menor registro operacional da área de vendas: é a dimensão **tempo**.

Todo projeto de *Business Intelligence* deve ter, no mínimo, a dimensão tempo. Logo, vamos falar sobre a **dimensão obrigatória**.

> Chamamos a dimensão tempo de obrigatória porque o tempo é uma dimensão que deve sempre estar presente no modelo de *Business Intelligence*.

Isso porque o tempo é **fundamental** quando tratamos de informações gerenciais. Afinal, precisamos visualizá-las ao longo do tempo. O comportamento da variação do indicador ao longo do tempo é que vai dar uma ideia do que está acontecendo para que a pessoa executiva possa tomar as melhores **decisões**.

Com um dado operacional, sabemos como ele está agora. Porém, com um dado gerencial, precisamos saber como ele está hoje, mas também como estava ontem, semanada passada ou mês passado.

Perceba como o tempo dá um sentido ao indicador a partir de um pequeno exemplo. Vamos supor que temos um valor de mil reais no indicador de valor de vendas. Essa informação sozinha, não tem nenhum sentido.

Porém, digamos que você seja informado que vendemos mil reais em janeiro de 2023. A partir do momento que identificamos o valor de venda do mês de janeiro, o valor pode ou não fazer sentido.

Isso porque o executivo da empresa de varejo normalmente já possui um sentimento do comportamento sazonal do indicador ao longo do tempo.

Mas, se te informamos que as vendas em fevereiro de 2023 foram de 2 mil reais e que em março de 2023 foram de 3 mil reais. A partir do momento em que apresentamos uma variação dos valores ao longo do tempo, esse resultado passa a ter algum sentido.

O setor executivo passa a ter uma noção de variação desse indicador. Assim, podemos saber se esse indicador está melhorando ou não.

> Uma informação pontual das vendas de um determinado produto hoje é uma informação **operacional**. Contudo, quando incluímos a variação desse indicador ao longo do **tempo**, ela passa a ser **gerencial**.

## Nível input e identificador

Claro que analisando o grão tanto do ticket da nota fiscal de venda quanto a ordem de compra, perceberemos que ambos os documentos possuem a data como identificador.

Mas, se formos mais exatos, não temos somente a data em que a venda foi realizada na nota fiscal. Também temos a hora, minuto e até o segundo.

Descer na **granularidade** de hora, minuto e segundo vai depender de cada modelo. Em nosso caso, essa exatidão da hora de venda do produto não é tão importante.

Logo, o **input** da dimensão tempo será o dia. Por isso, será necessário identificar essa data com dia, mês e ano.

Normalmente, a data é armazenada como um campo do tipo *date* nas bases de dados - não como um campo numérico ou texto. Por isso, em *Business Intelligence*, identificamos o dia no formato `AAAAMMDD` (ano com 4 dígitos, mês com dois dígitos e dia com dois dígitos).

## Hierarquia

Qual seria a **hierarquia** da dimensão tempo?

Sabemos que as datas do calendário possuem agregadores naturais. Baseado em um dia, temos o mês, trimestre, semestre, ano.

Logo, vamos determinar na dimensão tempo uma hierarquia que podemos chamar de calendário. Com os níveis, dia, mês, trimestre, semestre e ano.

## Atributos

Mas, um dia pode ter diversos **atributos**. Um que é muito importante para o setor de varejo é o dia da semana. Saber se a compra foi feita na segunda-feira ou no sábado é importante. Logo, o dia da semana vai ser um atributo.

Outro exemplo de atributo para ser utilizado é se a data pertence a um fim de semana.

> Nível INPUT:
> 
> - Data (Dia, mês e ano)
> - Identificador: AAAAMMDD
> 
> Atributos:
> 
> - Dia da semana
> 
> Hierarquias:
> 
> - Calendário
>     - Níveis: Dia, Mês, Trimestre, Semestre, Ano

A partir da data, podemos determinar diversos outros atributos e diversas novas hierarquias.

Normalmente, a dimensão tempo no *datawarehouse* é fixa, porque geralmente já deixamos previamente calculado todos os agregadores de tempo na tabela. Afinal, eles serão sempre os mesmos agregadores, independente do modelo.

Além disso, é importante já definir quais dessas agregações ao longo tempo serão determinadas no *datawarehouse* e no *datamart*. Isso porque muitas ferramentas que utilizamos para a construção dos *datamarts* possuem fórmulas de agregação de tempo já embutidas dentro delas.

&nbsp;

# Indicadores

<span style="color: #c0c0c0;">Agora que já definimos todas as informações pertinentes as dimensões do modelo. Chegou a hora de discutir e identificar os</span> **indicadores**<span style="color: #c0c0c0;">.</span>

Podemos identificá-los simplesmente analisando os valores apresentados nos grãos.

> **Os indicadores são todos os valores que são medidos dentro do grão.**

## Indicadores Básicos

Nós devemos definir os indicadores básicos junto a pessoa usuária, por exemplo, fazendo uma análise de documentos, chegamos em uma lista junto com a pessoa usuária. Para o grão de venda, o que interessa as pessoas executivas é:

- Quantidade vendida;
- Preço unitário de venda;
- Valor da venda.

Já para as ordens de compra, os indicadores são:

- Quantidade comprada;
- Preço unitário de compra;
- Valor da compra.

<span style="color: #c0c0c0;">Determinamos que começaríamos o sistema de</span> *Business Intelligence* <span style="color: #c0c0c0;">pelo processo de vendas. Mas, como a pessoa usuária já quer fazer uma análise de custo, o único indicador importante da ordem de compra que nos interessa nesse momento é o preço unitário de compra.</span>

Dessa maneira, vamos pegar o preço unitário de compra e multiplicar pela quantidade vendida. Com isso, vamos ter uma comparação de qual seria o custo e calcular o lucro para cada venda. Isso é devido à forma com que a empresa administra o seu estoque através do *Just in time*.

Então, podemos reduzir os indicadores para o modelo de vendas como sendo a **quantidade vendida, preço unitário de venda, valor da venda e o preço unitário de compra**.

Vamos obter os três primeiros indicadores do grão do modelo de vendas e apenas o último indicador será buscado do modelo de custos.

## <span style="color: #ffffff;">Indicadores calculados</span>

Definimos os indicadores básicos com as pessoas usuárias. Mas, agora precisamos definir os **indicadores calculados**.

Definimos quatro indicadores do modelo, como: quantidade vendida, preço unitário de venda, valor da venda e preço unitário de compra.

> Podemos criar novos indicadores calculados a partir desses indicadores originais lidos do grão.

Um desses indicadores calculados é o **custo de venda**, o qual é obtido pela multiplicação da quantidade vendida pelo preço unitário de compra.

> Custo de venda = quantidade vendida \* preço unitário de compra

Mas, Não vamos parar a análise por aí. A partir do momento em que ela tem o valor da venda e o custo da venda, podemos subtraí-las para determinar o **lucro**, ou seja, quanto a empresa ganha a cada venda.

> Lucro = valor da venda - custo da venda

## Indicadores de performance e desempenho

Também temos **indicadores de performance e desempenho**, os quais são tipos muito importantes no modelo de *Business Intelligence*.

Como vivemos em uma economia capitalista, o lucro é um dos principais indicadores de performance do dono do capital. Ou seja, da pessoa dirigente da empresa.

Porém, existem outros indicadores de performance importantes. Para ter um exemplo, responda a seguinte pergunta:

> Lucrar R$ 1000 sobre uma venda de R$ 5000 é melhor que que lucrar R$ 500 em uma venda de R$ 700?

Em um primeiro, podemos dizer que sim porque ter R$ 1000 é melhor do que ter R$ 500. Porém, note que o ganho do lucro de R$ 500 é mais **eficiente** se comparamos percentualmente o valor da venda com o ganho.

Afinal, ganhamos R$ 500 sobre uma venda de R$ 700. O produto no qual ganhamos R$ 500 é mais rentável que o produto no qual ganhamos R$ 1000.

Ao saber dessa informação, podemos fazer uma campanha de marketing para aumentar as vendas do produto no qual ganhamos R$ 500 para ter maior lucratividade.

Logo, conhecer os produtos mais rentáveis é essencial. Voltando aos nossos indicadores, teremos também o indicador de rentabilidade que vai ser o lucro dividido pelo valor da venda. Depois, vamos multiplicar por 100 para ter um resultado percentual.

> Rentabilidade = (lucro / valor da venda) \* 100

Assim, quanto maior o percentual, mais lucrativo é um produto. Baseado nessa rentabilidade, podemos fazer investimentos de marketing para aumentar a quantidade nominal de venda daquele produto.

&nbsp;

# <span style="color: #ffffff;">Consolidação do indicador</span>

Serão esses os indicadores apresentados nos *dashboards* do modelo de *Business Intelligence* do processo de vendas.

- Quantidade vendida;
- Preço unitário de venda;
- Valor da venda;
- Preço unitário de compra;
- Custo de venda;
- Lucro;
- Rentabilidade.

Mas, tem um detalhe.

![Hierarquia cliente da AtacaDez. Possui cinco níveis posicionados um abaixo do outro. No topo, temos "result" que se conecta a "sudeste" no nível inferior. A região sudeste se conecta 2 estados: "RJ" e "SP". O estado "RJ" se conecta as cidades "Rio" e "Niterói", enquanto o estado "São Paulo" se conecta as cidades "São Paulo" e "Santos". Cada cidade se conecta a dois clientes no nível inferior.](../_resources/818eb849-ba27-4422-8584-b237d77f.png)

Na hierarquia cliente, temos oito clientes no nível input. Eles têm seus dados agregados por cidade, estado e região.

Vamos conferir o indicador de quantidade vendidas e o valor de compra de apenas um produto. A quantidade vendida para cada cliente foi de `10` unidades. Enquanto, o valor de compra por cidade foi de `20` unidades.

Por exemplo, o valor vendido para o Rio de Janeiro será a soma dos valores vendidos de cada cliente da cidade do Rio de Janeiro, que são apenas dois.

Com isso, podemos afirmar que o indicador quantidade vendida tem a **soma** como forma de consolidação dentro da hierarquia.

Mas, vamos verificar outro indicador: o indicador de rentabilidade para cada cliente. A clientela do Rio teve rentabilidade de 12% e 11%, a de Niterói teve 15% e 5%, a de São Paulo teve de 10% e 11% e a de Santos teve 14% e 8%.

Para obter a rentabilidade por cidade, não podemos somar as rentabilidades da clientela. Por exemplo, a rentabilidade no Rio de Janeiro não vai ser 23%.

O que devemos fazer é somar os indicadores que são parcelas do cálculo da rentabilidade. Depois que consolidar isso, aplicar a fórmula para todos os níveis da hierarquia.

Vamos entender melhor esse conceito nesse e no próximo vídeo.

Vamos verificar a lista de indicadores através da seguinte tabela:

| Indicadores | Consolidação | Input |
| --- | --- | --- |
| Quantidade vendida | Soma | Sim |
| Preço unitário de venda | Cálculo | Sim |
| Valor da venda | Soma | Sim |
| Preço unitário de compra | Cálculo | Sim |
| Custo de venda | Soma | Não |
| Lucro | Soma | Não |
| Rentabilidade | Cálculo | Não |

Assim, podemos determinar em quais indicadores aplicamos soma e em quais aplicamos cálculos. Onde aplicamos cálculos não podemos consolidar. É preciso calcular em cada nível da hierarquia.

Em suma, a quantidade vendida, valor da venda, custo da venda e lucro serão indicadores de soma. Já preço unitário de compra, preço unitário de venda e rentabilidade serão calculados.

Como chegamos a essa conclusão?

> A regra é a seguinte: se o indicador representa um percentual ou um resultado que vem de uma divisão, não podemos consolidar na hierarquia como soma.

Por exemplo, apesar do preço unitário vir do grão, ele representa o resultado de uma divisão entre o valor da venda e a quantidade. Por isso, não podemos somar preço. Assim como o cálculo da rentabilidade também envolve uma divisão em sua fórmula.

Embora o lucro seja um indicador calculado, tem em sua fórmula apenas elementos que vêm de somas e só são somados ou subtraídos. Por isso, esse indicador pode ser consolidado por soma.

A consolidação vai depender da origem do indicador.

Mas, também temos que fazer outra diferenciação. Da mesma maneira que determinamos se o indicador é soma ou cálculo, temos que analisar é se o indicador vem do nível input da dimensão ou não.

Assim como a dimensão tem um nível input, o indicador também pode ter essa classificação input ou output.

> O indicador **input** é aquele que vem do grão, isto é, da origem. Enquanto o indicador **output** é derivado dele.

Ao analisar, descobrimos que do grão do processo de vendas, temos a quantidade vendida, preço unitário de venda e valor da venda. Do grão de compras, temos apenas o preço unitário de compras.

Mas, temos um problema: **não** podemos ter indicadores que são cálculo e input ao mesmo tempo. No nosso exemplo, isso acontece com o preço unitário de venda e preço unitário de compra.

Mas, por que não podemos ter essa situação? E como resolvemos esse problema?

&nbsp;

# <span style="color: #ffffff;">Indicador input calculado</span>

## Preço unitário de venda

No exemplo, temos uma simples estrutura hierárquica com dois membros da dimensão no nível input e um no nível output. Analisando o grão que vem do processo de venda, temos uma nota fiscal com os valores de cada input.

Para o primeiro input, temos:

- Quantidade vendida = 100;
- Preço unitário de venda = 10;
- Valor de venda = 1000.

Já para o segundo input, temos:

- Quantidade vendida = 200;
- Preço unitário de venda = 7;
- Valor de venda = 1400.

Como o indicador **preço unitário de venda** é um indicador do tipo cálculo input, podemos eliminá-lo porque é redundante. Não precisamos tê-lo como input já que o valor da venda já vem calculado na própria nota fiscal.

Podemos transformá-lo em um indicador de cálculo, ou seja, um indicador output. Com isso, na tabela podemos passá-lo para consolidação "cálculo" com nível input "não".

Como fica essa mudança dentro da hierarquia? Vamos consolidar os indicadores de quantidade vendida e o valor de venda somando-os no output:

- Quantidade vendida = 300;
- Valor da venda = 2400.

Depois, fazemos a divisão em cada nível da hierarquia para obter o preço unitário de venda tanto nos inputs quando nos outputs.

- Output: Preço unitário de venda = valor/quantidade = 8;
- Input 1: Preço unitário de venda = valor/quantidade = 10;
- Input 2: Preço unitário de venda = valor/quantidade = 7.

Já resolvemos o problema desse indicador.

## Preço unitário de compra

Agora, vamos para o indicador de **preço unitário de compra** que vem de outro grão: o processo de compra da ordem de compra.

Diferente do outro caso, não temos um custo de venda calculado diretamente da leitura. Precisamos multiplicar a quantidade vendida contida na nota fiscal com o preço unitário de compra que vem da ordem de compra.

Como fazemos para trabalhar com esses dois indicadores? Na verdade, vamos criar um segundo indicador que vamos chamar de "preço unitário de compra input".

Esse indicador vai servir apenas para calcular o custo de venda a nível input. Depois, consolidamos os dois indicadores de quantidade vendida e custo de venda. Assim, calculamos o novo preço unitário de compra para cada elemento da hierarquia.

Por exemplo, transformamos o indicador como sendo o preço unitário de compra input. Em seguida, calculamos o custo de venda no nível mais baixo da hierarquia.

Assim, no primeiro input, temos:

- Quantidade vendida = 100;
- Preço unitário de venda (I) = 5;
- Custo de venda = quantidade \* preço = 500.

Enquanto, no segundo input, temos:

- Quantidade vendida = 200;
- Preço unitário de venda (I) = 3;
- Custo de venda = quantidade \* preço = 600.

Depois, consolidamos no output os dois indicadores que são soma, ou seja, quantidade vendida e custo de venda.

- Quantidade vendida = 300;
- Custo de venda = 1100.

Por fim, calculamos um novo indicador que será o preço unitário de compra que será realmente usado no *Business Intelligence*, o qual vai ser o custo de venda dividido pela quantidade.

- Output: Preço unitário de compra = custo de venda/quantidade = 3,66;
- Input 1: Preço unitário de compra = custo de venda/quantidade = 5;
- Input 2: Preço unitário de compra = custo de venda/quantidade = 3.

Assim, a nossa relação de indicadores acabou tendo somente indicadores consolidados em cálculos que não são input.

| Indicadores | Consolidação | Input |
| --- | --- | --- |
| Quantidade vendida | Soma | Sim |
| Preço unitário de venda | Cálculo | Não |
| Valor da venda | Soma | Sim |
| Preço unitário de compra (I) | Nenhum | Sim |
| Preço unitário de compra | Cálculo | Não |
| Custo de venda | Soma | Não |
| Lucro | Soma | Não |
| Rentabilidade | Cálculo | Não |

Com isso, vamos criar um novo indicador "preço unitário de compra input" que não vai ser consolidado. Só vai servir para calcular o custo de venda a nível input.

Após consolidar, temos o novo indicador preço unitário de compra que é um cálculo, mas não é um input. Será um output.

Assim, temos o modelo fechado, tanto dos indicadores lidos quanto os indicadores calculados.

&nbsp;

# Relação final dos indicadores

Vamos rever a **relação final dos indicadores**.

Primeiro, temos os indicadores que virão diretamente dos grãos. Esses indicadores serão:

- Quantidade vendida;
- Valor da venda;
- Preço unitário de compra (input).

Depois, teremos os indicadores calculados.

- Custo da Venda = Preço Unitário de Compra Input \* Valor da Venda;
- Preço Unitário de Venda = Valor da Venda / Quantidade Vendida;
- Preço Unitário de Compra = Custo da Venda / Quantidade Vendida;
- Lucro = Valor da Venda - Custo da Venda;
- Rentabilidade = (Lucro / Valor da Venda) \* 100;

Nesse ponto, já temos todos os dados necessários para montar um modelo de *Business Intelligence* da área de negócios de venda.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Matriz dimensão indicador</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Já temos o modelo de vendas bem-definido, ou seja, foram definidas as dimensões e os indicadores. Dito isso, chegou o momento de montar a</span> **matriz dimensão indicador**<span style="color: #c0c0c0;">.</span></span>

## Matriz Dimensão Indicador

Como o próprio nome diz, matriz dimensão indicador é uma matriz com linhas e colunas. Nas linhas, incluímos os indicadores, ou seja, **o que** queremos analisar. Já nas colunas, incluímos as dimensões, isto é, **como** queremos analisar. No meio dessa matriz, marcando as células com um "X", preencheremos os cruzaremos que fazem sentido.

| #   | CLIENTE | EMPRESA | PRODUTO | TEMPO | TICKET |
| --- | --- | --- | --- | --- | --- |
| Quantidade Vendida | X   | X   | X   | X   | X   |
| Preço Unitário de Venda | X   | X   | X   | X   | X   |
| Valor da Venda | X   | X   | X   | X   | X   |
| Preço Unitário de Compra (I) | X   | X   | X   | X   | X   |
| Preço Unitário de Compra | X   | X   | X   | X   | X   |
| Custo de Venda | X   | X   | X   | X   | X   |
| Lucro | X   | X   | X   | X   | X   |
| Rentabilidade | X   | X   | X   | X   | X   |

No modelo acima, toda a matriz foi preenchida.

Quando usamos a implementação de um *data warehouse* de forma vertical, ou seja, implementando cada área de negócio individualmente, desde o modelo, passando pelo DW, e terminando nos dashboards, normalmente, a matriz possuirá todos os cruzamentos.

Essa matriz deve ser única, ou seja, quando formos implementar o segundo projeto de data warehouse, devemos apenas acrescentar a esta única matriz novos indicadores e novas dimensões, mantendo as dimensões em comum.

Observe o exemplo hipotético abaixo:

| #   | DIMENSAO1 | DIMENSAO2 | DIMENSAO3 | DIMENSAO4 |
| --- | --- | --- | --- | --- |
| INDICADOR1 |     | X   |     |     |
| INDICADOR2 | X   | X   |     | X   |
| INDICADOR3 | X   | X   | X   | X   |
| INDICADOR4 | X   |     | X   | X   |
| INDICADOR5 |     | X   | X   | X   |

Nesse modelo, temos quatro dimensões, e note que os indicadores possuem cruzamentos diferentes. À medida que novos modelos de negócio forem incluídos no data warehouse, buracos surgirão na matriz, o que é normal.

O importante é ter uma única matriz para todo o data warehouse e incluir novas linhas e colunas à medida que novas áreas de negócio forem incluídas no projeto de business intelligence.

- Funcionamento:
    
    - Cada célula na matriz representa a interseção de todas as dimensões com um indicador específico.
    - Os "X" na matriz indicam que é possível analisar cada indicador por todas as dimensões listadas.
    - Isso permite uma análise multidimensional dos dados, onde você pode "fatiar e cortar" as informações de várias maneiras.
- Exemplo de uso: Com esta matriz, você poderia, por exemplo:
    
    - Analisar o Lucro (indicador) por Cliente, Produto e Tempo (dimensões)
    - Comparar a Quantidade Vendida (indicador) entre diferentes Empresas e Produtos (dimensões) ao longo do Tempo (outra dimensão)
    - Calcular a Rentabilidade (indicador) por Ticket e Cliente (dimensões)
- Vantagens:
    
    - Flexibilidade na análise: você pode combinar diferentes dimensões e indicadores conforme necessário.
    - Detalhamento (drill-down): é possível começar com uma visão geral e depois aprofundar em detalhes específicos.
    - Comparações: facilita a comparação de desempenho entre diferentes aspectos do negócio.

&nbsp;

# Paperware

Esse nome é uma pequena brincadeira, mas na área de TI, algumas pessoas realmente usam esse termo para se referirem a trabalhos de tecnologia da informação que não resultam, por exemplo, na montagem de um computador, na configuração de um servidor, na instalação de um banco de dados, ou no desenvolvimento de um software.

O paperware é um trabalho de tecnologia da informação que resulta em um **relatório**, em um **manual**, ou em um **projeto escrito**. Ele resulta em um documento, usando, às vezes, um software de *case* ou até mesmo um editor de texto.

> Um projeto de renovação de máquinas, por exemplo, ou um relatório de desempenho de um banco, são chamados de paperware.

Ele é interessante, pois não precisamos construir nada real. Basta colocar tudo em um papel, podendo até mesmo ganhar dinheiro com isto.

Um projeto de business intelligence resulta em um paperware. Ainda não é o momento de implementarmos na prática o nosso projeto.

Precisamos apresentar os resultados para o cliente, e o cliente deve entender o que será implementado. Inclusive, é muito importante que o cliente **assine** o paperware, para que ele se comprometa com o que dissemos que iremos implementar.

Assim, evitamos que, no decorrer do projeto, o cliente pense em um novo indicador ou em uma nova dimensão diferente da que foi levantada. Isso pode acontecer, mas será um novo projeto.

<span style="color: #c0c0c0;">É importante que façamos a documentação do projeto de business intelligence que iremos implementar, que o cliente aprove essa documentação, e se por acaso houver alguma mudança, que ela a julgue. Se a mudança for muito complexa, isso será uma segunda fase do projeto.</span>

Uma planilha do ***Excel*** é uma boa representação para fazer a Matriz Dimensão Indicador. Também podemos usar o ***Word*** para descrever as dimensões, hierarquias e atributos, e o ***PowerPoint*** para mostrar um resumo do projeto para o cliente, para que ele entenda perfeitamente o que será implementado.

Cabe à pessoa consultora de business intelligence escolher a melhor maneira de registrar o modelo. Não existe uma metodologia para a forma como se registra o modelo de business intelligence. O que importa é escrever de maneira limpa e clara todo o modelo levantado durante as entrevistas e análises feitas da empresa.

&nbsp;

## Exemplo de Paperware no Notion

**DIMENSÕES**

- PRODUTO
    
    - Nível input: Identificador e nome do produto
    - Hierarquia
        - Segmento
            - Identificador e nome do produto
            - Identificador e nome do segmento de mercado
- MATÉRIA PRIMA ENTRADA
    
    - Nível input: Identificador e nome da matéria prima
    - Hierarquia
        - Matéria prima de entrada
            - Identificador e nome da matéria prima
            - Tipo de matéria prima de entrada (própria ou de terceiros)
- MATÉRIA PRIMA SAÍDA
    
    - Nível input: Identificador e nome da matéria prima
    - Hierarquia
        - Organizacional
            - Identificador e nome da matéria prima
            - Identificador e nome da unidade de montagem
            - Identificador e nome do departamento
    - Atributo
        - Tipo de matéria prima de saída (intermediário ou final)
- OPERADOR
    
    - Nível input: Identificador e nome do operador
- FICHA
    
    - Nível input: Número da ficha
    - Atributo
        - Número do lote

**INDICADORES**

- Quantidade (Input e consolidado)
- Custo unitário input (Input)
- Custo total (Input e consolidado)
- Custo unitário (Calculado)

Logo temos:

|     | Produto | MP Entrada | MP Saída | Operador | Ficha |
| --- | --- | --- | --- | --- | --- |
| Quantidade | X   | X   | X   | X   | X   |
| Custo unitário | X   | X   | X   | X   | X   |
| Custo total | X   | X   | X   | X   | X   |
| Custo unitário (calc) | X   | X   | X   | X   | X   |

Criando uma nova página no Notion temos:

![alt text: Captura de tela de uma página no Notion. O título localizado no canto superior é “Projeto de BI Indústria PingPong”. O subtítulo é “Dimensões”. E no corpo do texto, temos um nível hierárquico que começa com o primeiro nível intitulado “PRODUTO”. E o segundo nível possui os itens “Nível Input” e “Hierarquias”. No nível “Nível Input”, temos uma lista com único valor “Identificador e nome do produto”. No nível “Hierarquias”, temos mais um nível chamado “Segmento”. E no nível “Segmento”, uma lista com os valores “Produto” e “Segmento”.](../_resources/aula5-img5.png)

![alt text: Captura de tela de uma página no Notion. O título localizado no canto superior é “Matéria prima de entrada”. E no corpo do texto, temos dois níveis de hierarquia intitulados “Nível Input” e “Hierarquias”. No “Nível Input”, temos o valor “Matéria prima (SKU e descritor)”. E no nível “Hierarquias”, temos outro nível chamado “Matéria prima de entrada”, com os valores “Matéria prima” e “Tipo de matéria prima (própria ou terceiros)”](../_resources/aula5-img6.png)

![alt text: Captura de tela de uma página no Notion. O título localizado no canto superior é “Matéria prima de saída”. E no corpo do texto, temos três níveis de hierarquia, “Nível Input”, “Atributos” e “Hierarquias”. No nível “Nível input”, temos o valor “Matéria prima (SKU e descritor)”. No nível “Atributos”, temos o valor “Tipo de matéria prima de saída”. E no nível “Hierarquias”, temos outro nível hierárquico chamado “Organizacional”, que tem como conteúdo uma lista de valores: “materia prima”, “unidade de montagem” e “departamento”.](../_resources/aula5-img7.png)

![alt text: Captura de tela de uma página no Notion. Temos dois grandes níveis de hierarquia, “OPERADOR” e “FICHA”. No nível “OPERADOR”, temos outro nível “Nível Input”, com conteúdo “Identificador e nome do operador”. No nível “FICHA”, temos outros dois níveis chamados “Nível Input” e “Atributo”. Em “Nível Input”, o conteúdo “Número da folha”. No nível “Atributo”, o conteúdo “Número do lote”. ](../_resources/aula5-img8.png)

![alt text: Captura de tela de uma página no Notion. O título localizado no canto superior é “Tempo”. E no corpo do texto, temos um nível hierárquico que começa com o primeiro nível intitulado “Nível Input”, com conteúdo “Data (Dia, mês, ano) - AAAAMMDD”. O segundo nível possui o item “Atributos”, com conteúdo “Dia da Semana” e “Fim de Semana”. E o terceiro nível possui o item “Hierarquias”, com conteúdo sendo um outro nível chamado “Calendário”.](../_resources/aula5-img9.png)

![alt text: Captura de tela de uma página no Notion. O título localizado no canto superior é “Indicaores”. E no corpo do texto, temos um nível hierárquico que começa com o primeiro nível intitulado “Lista indicadores”. E o conteúdo são dois níveis: “Inputs” e “Calculados”. No nível “Inputs”, temos os conteúdos “Quantidade” e “Custo Unitário (Input)”. No nível “Calculados”, temos os conteúdos: “Custo total (Quantidade * Custo unitário (Input))”, e “Custo unitário (Custo total / Quantidade”. ](../_resources/aula5-img10.png)

![alt text: Captura de tela de uma tabela com 7 colunas e 5 linhas. O título localizado no canto superior é “Matriz dimensão indicador”. As colunas possuem os seguintes nomes: produto, MP entrada, mp/saída, operador, ficha e tempo. Já as linhas possuem os nomes: quantidade, custo unitário (imput), custo total e custo unitário.](../_resources/aula5-img11.png)

&nbsp;
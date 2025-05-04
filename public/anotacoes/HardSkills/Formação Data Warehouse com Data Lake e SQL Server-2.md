---
title: >-
  Formação Data Warehouse com Data Lake e SQL Server (Projetão BI do zero Parte
  1 - DataLake, construindo e carregando dimensões)
updated: 2025-02-23 21:22:17Z
created: 2024-07-18 11:57:31Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

- [Fases do projeto de BI](#fases-do-projeto-de-bi)
- [Criação do Data Lake](#criação-do-data-lake)
- [Identificando as fontes de dados](#identificando-as-fontes-de-dados)
    - [Identificando as fontes de dados](#identificando-as-fontes-de-dados-2)
        - [Quais são as fontes disponíveis?](#quais-são-as-fontes-disponíveis)
    - [Conclusão](#conclusão)
- [Criando projeto no Visual Studio](#criando-projeto-no-visual-studio)
    - [Criando o projeto no Visual Studio](#criando-o-projeto-no-visual-studio)
        - [Adicionando um novo projeto à solução](#adicionando-um-novo-projeto-à-solução)
    - [Conclusão](#conclusão-2)
- [Esquema do Data Lake](#esquema-do-data-lake)
    - [Data Warehouse versus Data Lake](#data-warehouse-versus-data-lake)
    - [Práticas](#práticas)
        - [1\. Organizar por domínio](#1-organizar-por-domínio)
        - [2\. Particionamento](#2-particionamento)
        - [3\. Esquema de dados flexível](#3-esquema-de-dados-flexível)
        - [4\. Metadados](#4-metadados)
    - [Uso do Data Lake](#uso-do-data-lake)
        - [1\. Armazenamento centralizado de dados](#1-armazenamento-centralizado-de-dados)
        - [2\. Análise exploratória de dados](#2-análise-exploratória-de-dados)
        - [3\. Integração de dados](#3-integração-de-dados)
        - [4\. Big Data e análise avançada](#4-big-data-e-análise-avançada)
        - [5\. Data science e machine learning](#5-data-science-e-machine-learning)
- [Criando a tabela de empresas (mesma coisa que foi feita no SQL Power Architect, porém feita no Visual Studio)](#criando-a-tabela-de-empresas-mesma-coisa-que-foi-feita-no-sql-power-architect-porém-feita-no-visual-studio)
- [Criando a tabela de clientes](#criando-a-tabela-de-clientes)
- [Executando a criação das tabelas (muito mais fácil pelo visual studio, porém no SQL Power Architec é mais visual)](#executando-a-criação-das-tabelas-muito-mais-fácil-pelo-visual-studio-porém-no-sql-power-architec-é-mais-visual)
    - [Conclusão](#conclusão-3)
- [Preparando estrutura para recebimento dos arquivos (estrutura de pastas)](#preparando-estrutura-para-recebimento-dos-arquivos-estrutura-de-pastas)
    - [Estrutura de diretórios](#estrutura-de-diretórios)
    - [Conclusão](#conclusão-4)
- [Carga da fonte para empresas (puxando os dados de um CSV via Visual Studio (interessante))](#carga-da-fonte-para-empresas-puxando-os-dados-de-um-csv-via-visual-studio-interessante)
- [Colunas de metadados](#colunas-de-metadados)
- [Gravação na tabela empresa (jogando dados pro DataLake (importante))](#gravação-na-tabela-empresa-jogando-dados-pro-datalake-importante)
- [Conversão de dados (interessante)](#conversão-de-dados-interessante)
    - [Gravação dos dados em tabela vazia](#gravação-dos-dados-em-tabela-vazia)
- [Tratando registros existentes](#tratando-registros-existentes)
    - [Conclusão](#conclusão-5)
- [Carga de dados de clientes (leitura das fontes)](#carga-de-dados-de-clientes-leitura-das-fontes)
    - [Leitura das Regiões dos Estados](#leitura-das-regiões-dos-estados)
- [Extraindo cidade e estado](#extraindo-cidade-e-estado)
    - [Entendendo o problema](#entendendo-o-problema)
    - [Encontrando a solução](#encontrando-a-solução)
        - [Unindo as duas tabelas](#unindo-as-duas-tabelas)
- [Separando cidade e estado](#separando-cidade-e-estado)
    - [Extraindo a cidade](#extraindo-a-cidade)
    - [Extraindo o estado](#extraindo-o-estado)
- [Juntando dados](#juntando-dados)
- [Conversão de dados preventivos](#conversão-de-dados-preventivos)
- [Gravando na tabela de clientes](#gravando-na-tabela-de-clientes)
- [Ferramentas utilizadas para construção e carga do DataLake](#ferramentas-utilizadas-para-construção-e-carga-do-datalake)

Já desenhamos o modelo gerencial, escolheu a área de vendas como a primeira a ser contemplada com um sistema de informações gerenciais, e com base nesse modelo, ela desenhou o *Data Warehouse*.

Chegou o momento de começar a preparar a **carga de dados** das fontes vindas dos sistemas transacionais da empresa e transportá-la para o Data Warehouse.

Para isso, escolhemos o processo de ELT, usando uma base intermediária para concentrar os dados das diversas fontes antes de realmente transferir o dado para o Data Warehouse.

Esse repositório intermediário é chamado de ***Data Lake***. Nosso curso irá tratar da carga de dados do Data Lake construindo tabelas das dimensões usando o *Integration Services*.

> O *SQL Server Integration Services* é um serviço que permite construir fluxos de carga de dados através de diversos componentes que agilizam esse processo de carga.

vamos conhecer todas as fontes de dados intermediárias fornecidas pela área de tecnologia da informação da AtacaDez para carregar o Data Warehouse.

Com base nessas fontes de dados, iremos entender qual será o desenho do Data Lake e começaremos a criar uma solução no Visual Studio usando o Integration Services para orquestrar a carga dos dados no Data Lake.

As fontes de dados virão em diversos formatos. No nosso exemplo, veremos os formatos CSV, XML, Excel, e JSON. Aprenderemos a ler dados dessas diferentes fontes.

Durante o desenho do processo de carga, vamos entender o funcionamento da ferramenta Integration Services e seus diversos componentes, dando ênfase a algumas características, como criar novas colunas usando fórmulas, classificar as colunas de uma tabela, e fazer a junção entre duas tabelas de fontes distintas.

Além disso, compreenderemos a importância da conversão de dados no Integration Services, e saberemos como gerenciar a inclusão e a alteração de dados no momento de gravação dos dados na tabela final.

Veremos como usar scripts em C# para ler dados em formato JSON, e também entenderemos o uso genérico da interface de desenho do Integration Services.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Fases do projeto de BI</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Vamos rever as fases do projeto de BI e identificar aonde estamos atualmente</span></span>

O primeiro passo para a implementação do projeto foi a construção da matriz dimensão-indicador, a qual construímos no primeiro curso da formação. Neste curso, conhecemos os processos de negócios da empresa e especificamos a documentação das dimensões, atributos, hierarquias, e indicadores do modelo.

![254e0d538ec8b5fd4ce131fb7adc3bc0.png](../_resources/254e0d538ec8b5fd4ce131fb7adc3bc0.png)

Com base na matriz dimensão-indicador que criamos na documentação, criamos também o Data Warehouse. Então, temos o Data Warehouse criado. Agora precisamos identificar as fontes de dados e carregar os elementos que estão nessas fontes para o Data Warehouse, aplicando as regras de negócio.

![ee140333317eb77b88cc6c0b3e9074ad.png](../_resources/ee140333317eb77b88cc6c0b3e9074ad.png)

Vimos que existem duas abordagens diferentes:

> 1.  Ou fazemos um processo de extração de dados, transformando-os e finalmente gravando no Data Warehouse, processo chamado **ETL**;
> 2.  Ou então fazemos um repositório intermediário, onde todos os dados brutos que vêm das fontes serão armazenados para depois passá-los para o Data Warehouse, processo chamado de **ELT**.

No nosso projeto, vamos seguir a **abordagem ELT**: criaremos um banco de dados intermediário que se chamará *Data Lake*, vamos carregar as fontes de dados brutas diretamente das fontes originais para o banco Data Lake, e em uma fase posterior, vamos carregar o Data Warehouse.

![c02a56267bb23427d8b76d6cc58370fb.png](../_resources/c02a56267bb23427d8b76d6cc58370fb.png)

<span style="color: #c0c0c0;">Abordaremos apenas a identificação das fontes e a criação do Data Lake, bem como a carga dos dados para esse mesmo Data Lake.</span>

&nbsp;

&nbsp;

# <span style="color: #c0c0c0;"><span style="color: #ffffff;">Criação do Data Lake</span></span>

<span style="color: #c0c0c0;"><span style="color: #ffffff;"><span style="color: #c0c0c0;">Para usar o banco de dados</span> *Data Lake* <span style="color: #c0c0c0;">para receber os dados brutos das fontes, nosso primeiro passo é criar o banco. Escolheremos o SQL Server para criar o banco de dados do Data Lake. Começaremos acessando o</span> *Management Studio* <span style="color: #c0c0c0;">para trabalhar nessa criação!</span></span></span>

Uma vez aberto o Management Studio na máquina, nos conectamos ao usuário SA, usuário administrador cuja senha você especificou quando instalou o SQL Server.

No pesquisador de objetos à esquerda, temos uma série de bancos. Para criar o banco de dados do Data Lake, vamos clicar com o botão direito sobre o diretório "Bancos de Dados" e selecionar a opção "Novo Banco de Dados…". Na janela aberta, definiremos o nome como `DL_ATACADEZ`.

No curso anterior, quando criamos o banco de dados do Data Warehouse (`DW_ATACADEZ`), não precisamos ter log de transação no Data Warehouse, porque a atualização dele sempre será feita através de um processo *batch*, com uma carga em massa.

Nesse caso, se gravarmos log de transação, teremos logs muito grandes e o banco de dados do Data Warehouse não precisará fazer, por exemplo, *backups* incrementais; serão feitos apenas backups *full* do banco de dados.

Como não precisamos de backups incrementais nem de controlar transações, seria interessante desativar esse log de transações.

Esse mesmo conceito que aplicamos no Data Warehouse, também será aplicado no Data Lake. O Data Lake também terá sua atualização através de processos em *batch*, haverá grandes quantidades de linhas sendo atualizadas no Data Lake, e ele não precisará ter log de transações.

Para isso, criaremos uma nova consulta com a conexão feita com o banco `DL_ATACADEZ` e usaremos o seguinte comando:

```sql
ALTER DATABASE DL_ATACADEZ SET RECOVERY SIMPLE
```

Ao executá-lo, temos o banco de dados do Data Lake sem o controle de transações, igual ao Data Warehouse.

O banco do Data Lake está criado, porém, ainda está vazio. Daremos continuidade à criação das tabelas desse banco e faremos a carga dos dados das fontes para esse novo banco de dados!

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Identificando as fontes de dados</span>

Nesse momento, temos o Data Warehouse criado com todas as suas tabelas, e o Data Lake criado no SQL Server apenas como um banco vazio, sem tabelas. Nosso primeiro passo será identificar as fontes de dados, para depois jogá-las de modo estruturado no Data Lake.

> Antes de continuar, associada a esse vídeo, haverá uma atividade contendo um [link para fazer o download do arquivo `ETL.zip`](https://cdn3.gnarususercontent.com.br/3012-data-lake/Downloads/ETL.zip). É importante que você realize essa etapa e crie um subdiretório no driver `(C:)` chamado "Fontes", por exemplo, para guardar esse arquivo.

## Identificando as fontes de dados

Após extrair o conteúdo do arquivo `ETL.zip`, teremos um diretório chamado "ETL", que contém vários arquivos e alguns *scripts*, isto é, programas que irão nos ajudar durante a construção do processo de carga.

> Se for necessário adicionar novos scripts durante os vídeos, o instrutor irá mencionar para que você possa realizar o download de arquivos extra.

Vamos falar um pouco sobre as **fontes de dados**. Nós iremos abrir os arquivos e analisar o conteúdo na etapa em que formos construir as cargas de cada um. Nesse momento, veremos um resumo sobre as fontes de dados.

### Quais são as fontes disponíveis?

Primeiramente, temos um arquivo no formato **CSV** com **dados das lojas**. Arquivos em CSV são arquivos de texto no formato de tabela, em que as colunas são separadas por `;`.

Dentro desse arquivo, temos o código da loja, um descritor da loja, o CNPJ da empresa a que a loja pertence, e a metragem da loja em m².

Outro arquivo que recebemos é também no formato CSV, porém com **dados geográficos**. Neste arquivo, encontramos dados dos estados em que a AtacaDez tem loja, e a região geográfica em que esses estados estão situados (Sudeste, Nordeste, Norte, Sul e Centro-Oeste).

Há um terceiro arquivo no formato Excel (**XLSX**) onde temos **dados de clientes**. Encontramos, basicamente, o CNPJ do cliente, o nome, o endereço, o segmento de mercado em que o cliente está situado, e o faturamento anual desse cliente.

> Através do faturamento, iremos obter o tamanho do cliente.

Temos também um arquivo no formato **JSON**, contendo **dados dos produtos**. Nesse arquivo JSON, há o código interno do produto e seu descritor, a unidade de medida do produto, um preço de tabela do produto, e uma informação sobre o setor onde o produto é vendido.

> Caso você não tenha familiaridade com arquivos em JSON, quando formos ler dados desse arquivo, falaremos um pouco mais sobre o formato.

Mais um arquivo recebido é no formato **XML** com **dados dos fornecedores**. Nele, encontramos o CNPJ do fornecedor, nome do fornecedor, e o produto que o fornecedor vende para a AtacaDez.

> Talvez você tenha mais familiaridade com o formato XML, mas caso ainda não conheça, ainda analisaremos o formato do arquivo posteriormente, no momento em que formos ler dados de fornecedores para o Data Lake.

Depois, temos um conjunto de arquivos no formato **CSV** com **dados das notas fiscais** de venda. Serão dois arquivos recebidos: o de cabeçalho da nota, e o de itens da nota. Esses arquivos virão consolidados um a cada mês.

Além disso, usando novamente o formato **CSV**, temos os arquivos referentes a **dados das compras** de produtos. Nesse caso, também é recebido um arquivo por mês, contendo os produtos e o preço de compra desses produtos.

## Conclusão

Já sabemos que, no Data Warehouse, precisaremos carregar dados para a dimensão cliente empresa, produto tempo, e para a tabela de fato. Então, será necessário **criar repositórios** no Data Lake que já estarão associados a essas dimensões, onde vamos carregar os dados brutos.

No momento dessa carga, talvez alguma transformação seja necessária, porém, como nosso processo é de ELT, faremos o mínimo de transformação possível ao carregar os dados para o Data Lake.

O Data Lake será fonte de dados do Data Warehouse, mas não serve apenas para isso. Ele terá outras utilidades dentro da empresa, as quais discutiremos mais adiante no curso.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Criando projeto no Visual Studio</span>

vamos criar nosso projeto no *Microsoft Visual Studio* para começar a fazer a carga dos dados das fontes externas para o Data Lake.

> No início desse curso, a primeira atividade explica como fazer o download e configurar não somente o *SQL Server*, mas também o *SQL Server Data Studio*, conjunto de ferramentas que iremos utilizar neste curso e em outros mais adiante na formação para a construção do projeto de BI.
> 
> À medida que avançarmos, vamos adicionar mais componentes ao ambiente do Data Studio. Os componentes que adicionamos nesse treinamento são:
> 
> - O projeto de banco de dados SQL Server;
> - E o *SQL Server Integration Services* (SSIS).
> 
> Através do SSIS no Data Studio, construiremos o procedimento de carga da base de dados do Data Lake. Por isso, é importante que você realize a atividade e siga os passos da configuração.

## Criando o projeto no Visual Studio

No diretório "Fontes", criaremos um novo subdiretório chamado "PROJETOS". Dentro dele, salvaremos os projetos do Visual Studio, conforme avançarmos no decorrer dos vídeos.

> Recomendamos que, a cada final de vídeo, você salve o projeto e depois crie uma cópia do arquivo com um novo nome para continuar trabalhando. Assim, teremos salvos os projetos vídeo a vídeo.

Para criar o projeto, vamos abrir a ferramenta Microsoft Visual Studio. Pode ser que você já tenha o Visual Studio instalado na máquina em que for trabalhar, pois é uma ferramenta usada para muitas coisas. Porém, ao longo deste curso, usaremos o ***Visual Studio 2022 Framework***, conforme disponibilizado em atividade ao início da aula.

> Atente-se à versão do Visual Studio utilizada. Caso você acesse os arquivos em uma versão diferente da Visual Studio 2022 Framework, pode haver erro de compatibilidade.

Com a página inicial do Visual Studio aberta, vamos clicar na opção "Criar um projeto" da seção "Introdução" à direita. Feito isso, precisaremos escolher um **tipo** de projeto.

No Visual Studio, existe algo chamado **solução** (*solution*), a qual pode ter vários projetos. Os projetos dentro de uma solução, por sua vez, podem ser de diversos tipos.

Quando criamos o primeiro projeto, será automaticamente salva uma solução contendo o projeto. Posteriormente, sobre esta solução, conseguiremos adicionar outros projetos.

Na janela "Criar um novo projeto", vamos selecionar a opção "Todos os idiomas" no primeiro menu *dropdown* à direita, manter "Windows" no segundo menu, e alterar para "Todos os tipos de projeto" no terceiro. Feito isso, vamos procurar por "SQL".

Escolheremos a opção "**Projeto de Banco de Dados do SQL Server**".

Esse projeto nos permitirá criar as tabelas do Data Lake. Nesse momento, você pode pensar o seguinte: por que não criamos as tabelas do Data Lake da mesma maneira que fizemos no curso anterior para a criação do Data Warehouse?

Existem dois motivos:

> 1.  Vamos aprender uma nova forma de projetar bancos de dados relacionais. Você pode fazer da mesma forma que no curso anterior, usando o SQL Power Architect para projetar as tabelas e depois exportando o script para o SQL Server; ou seguir a nova maneira, através de um projeto do tipo banco de dados do SQL Server no Visual Studio, onde também podemos projetar o banco. Nesse caso, iremos projetar o Data Warehouse usando o Data Studio;
> 2.  As tabelas do Data Lake não são estruturadas como as do Data Warehouse, ou seja, não há um esquema fixo. Então, vamos criar as tabelas à medida que analisarmos as fontes de dados.

Após escolher o tipo "Projeto de Banco de Dados do SQL Server", vamos definir o nome da solução como `DatawarehouseAtacaDez`, um nome genérico. Em seguida, no nome do projeto, vamos especificar um pouco mais, definindo-o como `CriacaoDataLake`.

Ao clicar no ícone de reticências ("Procurar") à direita no campo "Local", vamos escolher o diretório "PROJETOS" criado anteriormente. Dentro dele, criaremos um novo subdiretório chamado "Versao001" que irá guardar o projeto.

Definidas essas configurações, clicaremos em "Criar" no canto inferior direito. Feito isso, será criado o projeto de SQL Server no Visual Studio, o qual estará disponibilizado e associado à solução DatawarehouseAtacaDez.

> À medida que trabalharmos com o Visual Studio, entenderemos melhor o ambiente.

### Adicionando um novo projeto à solução

Uma vez aberta a página do projeto, vamos clicar sobre "Solução 'DatawarehouseAtacaDez'" com o botão direito no gerenciador de soluções à direita, e ir até "Adicionar > Novo Projeto…".

Agora vamos adicionar um projeto do tipo "***Integration Services Project***". O Integration Services é o serviço da Microsoft que faz processos de ETL ou ELT. Na atividade ao início do curso, ensinamos como configurá-lo.

Na nova janela aberta "Configurar seu novo projeto", definiremos o nome como `CargaDataWarehouse`. Você pode se questionar: por que `CargaDataWarehouse` se vamos carregar o Data Lake? Na verdade, o objetivo final é carregar o Data Warehouse. O Data Lake é um **processo intermediário**.

No projeto `CargaDataWarehouse`, teremos tudo, tanto a carga do Data Lake quanto a carga do Data Warehouse. Para nós, pessoas de *business intelligence*, carregar o Data Warehouse é mais importante, por isso vamos definir esse nome de projeto.

Feito isso, podemos clicar em "Criar" no canto inferior direito.

## Conclusão

Ao final, teremos dois projetos: `CriacaoDataLake` e `CargaDataWarehouse`, ambos na solução `DatawarehouseAtacaDez`. Podemos salvar clicando no ícone "Salvar Tudo" (atalho: "Ctrl + Shift + S") na barra de ferramentas superior.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Esquema do Data Lake</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Chegou a hora de discutir como é o esquema do Data Lake.</span></span>

## Data Warehouse *versus* Data Lake

A principal diferença entre um Data Lake e um Data Warehouse é que, no Data Warehouse, as tabelas possuem um **esquema fixo**. Nós conhecemos alguns tipos desses esquemas no curso anterior: o modelo Estrela, o Floco de Neve, Pai e Filho, entre outros existentes.

O Data Lake, por outro lado, possui tabelas mais **flexíveis**. Não há um esquema fixo, específico para esse banco.

Mas, embora isso seja verdade, existem algumas características importantes que devem ser consideradas ao criar um Data Lake.

## Práticas

Podemos citar algumas práticas comuns na criação de um Data Lake:

### 1\. Organizar por domínio

É comum agrupar as tabelas do Data Lake com base em domínios de negócio ou áreas funcionais.

Por exemplo: podemos ter tabelas separadas para vendas, marketing, finanças, logística e assim por diante.

Essa abordagem facilita a descoberta e recuperação de um dado relevante dentro de cada domínio.

No nosso caso, estamos utilizando apenas o domínio de vendas, então, colocaremos tudo isso num único documento.

### 2\. Particionamento

É interessante particionar a tabela no Data Lake; ou seja, dividir a tabela em subconjuntos menores com base em um ou mais critérios, como data, região, tipo de evento, etc. Isso torna a consulta muito mais eficiente.

Os próprios bancos de dados relacionais possuem tabelas particionadas. Claro que fazemos isso ao trabalhar com volumes de dados muito grandes, e esse não é o nosso caso.

Mas, como exemplo, poderíamos particionar nossa tabela de vendas sob critérios como ano, mês e até mesmo por região.

### 3\. Esquema de dados flexível

Conforme já dito, o esquema de dados do Data Lake é flexível, ao contrário de um Data Warehouse tradicional.

Isso significa que um Data Lake pode ter estruturas de dados diferentes. Por exemplo, podemos ter um Data Lake não somente com bases de dados relacionais, mas também podemos salvar, dentro do banco de dados, as estruturas já em JSON ou XML.

No caso de usarmos outros tipos de Data Lake que não o SQL Server, que estamos usando nesse curso, podemos salvar os próprios documentos dentro dele, geralmente em buckets (diretórios de nuvem) da AWS, Azure ou Google.

> Salvar arquivos como PDFs e outros dentro de uma estrutura de diretórios de nuvem também é criar um Data Lake!

### 4\. Metadados

Algo altamente recomendável ao criar um Data Lake é adicionar metadados descritivos dentro das tabelas.

Esses metadados fornecem informações sobre os dados, como origem, formato, descrição, proprietário, data de criação. Isso facilita a descoberta e compreensão de daods pelas pessoas usuárias.

## Uso do Data Lake

Nesse curso, usaremos o Data Lake para carregar o Data Warehouse. No entanto, acumular dados num "lago de dados" não serve apenas para fornecer dados para um Data Warehouse.

O Data Lake possui muitas **outras funcionalidades** além desta, como:

### 1\. Armazenamento centralizado de dados

O Data Lake permite que as organizações consolidem e armazenem todos os seus dados em um único local.

Isso elimina uma série de necessidades que exigem soluções de armazenamento de dados em diferentes formatos.

Por exemplo, como armazenar dados em nuvem já é uma prática mais utilizada atualmente, centralizar dados já não é mais tão caro para uma empresa.

### 2\. Análise exploratória de dados

Com um Data Lake, cientistas de dados podem analisar dados brutos, podendo acessá-los diretamente e explorá-los de diferentes perspectivas e estabelecer diversas correlações, sem necessidade de modelar uma estrutura específica para este fim.

### 3\. Integração de dados

O Data Lake oferece um ambiente unificado para a integração de dados provenientes de várias fontes. No nosso caso, utilizaremos essa possibilidade para integrar todos os dados.

Além disso, o Data Lake também pode ser utilizado como banco intermediário para transferir dados de um banco para outro ao fazer integrações internas.

### 4\. Big Data e análise avançada

O Data Lake possui os dados brutos, em seu menor grão. Isso possibilita análises avançadas, como aprendizado de máquina, mineração de dados, modelagens estatísticas e uma série de outras técnicas de inteligência artificial, por exemplo.

### 5\. Data science e machine learning

O Data Lake fornece o ambiente ideal para que cientistas de dados e equipes de *machine learning* possam explorar e experimentar diferentes conjuntos de dados para realizar análises.

> Ou seja: vamos pensar no Data Lake como um grande **"concentrador" de dados brutos de diferentes fontes**. Esses dados brutos podem servir para diversos propósitos. No nosso caso, ele servirá para popular o nosso Data Warehouse.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Criando a tabela de empresas (mesma coisa que foi feita no SQL Power Architect, porém feita no Visual Studio)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Vamos começar a projetar nosso Datalake! Para projetarmos as tabelas do Datalake, temos que analisar a fonte de dados e determinar como será a estrutura.</span></span>

Vamos começar pela tabela do Datalake de empresas. Como mecionado anteriormente, a ideia é salvar o projeto à medida que avançarmos com os vídeos.

> Vamos realizar alguns passos iniciais para salvar o projeto com um novo nome e, nos vídeos seguintes, não repetiremos essa etapa. Não deixe de repertir essas instruções em sua própria máquina todas as vezes em que iniciarmos algum exercício prático no Visual Studio Code.

Estamos com o Visual Studio aberto na parte onde criamos os projetos e podemos fechá-lo. No diretorio "PROJETOS", faremos uma cópia da pasta "Versao001" que será a "Versao002".

Em seguida, acessaremos "Versao002 > DatawarehouseAtacaDez" e encontraremos o arquivo `DatawarehouseAtacaDez.sln`. Podemos abri-lo com o Visual Studio 2022. Para isso, basta selecioná-lo com o botão direito do mouse e acessar "Abrir com > Microsoft Visual Studio 2022".

Abrimos a "Versao002", porque a ideia é adicionar coisas novas ao nosso projeto. Faremos isso sempre que iniciarmos um novo vídeo, combinado? Agora, começaremos a trabalhar com a dimensão "Empresa", para isso, precisamos entender a estrutura da tabela em que recebemos os dados dessa dimensão.

No diretório "ETL", existe um arquivo chamado `EMPRESA.CSV`. Vamos abri-lo:

```yaml
LOJA; NOME_LOJA; EMPRESA; CNPJ; TAMANHO
1; LOJA 01; ATACADEZ; 12312312312312; 15000 2; LOJA 02; ATACADEZ; 12312312312312;12000
3; LOJA 03; ATACADEZ; 12312312312312; 3000
4; LOJA 04; ATACADEZ; 12312312312312; 4000
5; LOJA 05; ATACADEZ; 12312312312312; 6000 6; LOJA 06; ATACADEZ; 12312312312312;18000
7; LOJA 07; ATACADEZ; 12312312312312; 14000
8; LOJA 08; ATACADEZ; 12312312312312;5000 9; LOJA 09; ATACADEZ; 12312312312312; 4000
10; LOJA 10; ATACADEZ; 12312312312312;3000
11; LOJA 11; ATACADEZ; 12312312312312; 6000
12; LOJA 12; ATACADEZ; 12312312312312;12000
```

Os itens do arquivo estão separados por ponto e vírgula, são eles: loja; nome da loja; empresa; CNPJ; e tamanho. Inicialmente, criaremos todos os campos *string*, exceto "TAMANHO", afinal, os dados que estamos gerando no CSV estão em formato de texto.

Lembrando que apesar dos códigos da loja serem números ("1, 2, 3, 4,..."), eles não são identificadores primários, mas, sim, identificadores naturais. Internamente, a loja "01" tem um código interno "1".

Vamos manter o arquivo aberto, pois talvez seja necessário consultá-lo em algum momento. Retornaremos ao projeto e localizaremos "CriacaDataLake" em "Gerenciador de Soluções", selecionaremos com o botão direito do mouse e escolheremos a opção "Adicionar > Nova Pasta". Nomearemos essa pasta como "Tabelas".

Abaixo da pasta "Tabelas", teremos o projeto de criação das tabelas. Selecionaremos "Tabelas" com o botão direito do mouse e escolheremos a opção "Adicionar > Novo Item". Com isso, seremos redirecionados para outra tela, onde encontraremos uma lista com tudo que é possível criar em relação ao banco de dados de SQL Server. Buscaremos "Tabela".

> Sobre a **nomenclatura das tabelas do Datalake**, podemos convencionar que elas sempre serão compostas por um prefixo **tbl** seguido de undescore e do que a tabela significa.

Seguindo a convenção, a tabela que estamos criando se chamará "tbl_empresa". Por fim, apertaremos "Adicionar". Ao fazermos isso, surge uma janela que nos permite criar a tabela de forma gráfica, adicionando os campos, ou via comando. Escolheremos a criação de forma gráfica.

Voltando ao nosso arquivo `EMPRESA.CSV`, o primeiro item é "LOJA". Ele não é um campo, mas, sim, o identificador natural da loja, por isso, será criado na tabela como "cod_loja".

O tipo de dado será um "varchar(25)". Além disso, vamos mantê-lo como chave primária. Lembrando que é possível ter, no Datalake, mais de uma loja com a mesma codificação natural.

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_loja | varchar(25) |     |     |

Em seguida, temos o campo "NOME_LOJA", termo que descreve a loja. Para "NOME_LOJA", criaremos "desc_loja" de tipo "varchar(200)".

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_loja | varchar(25) |     |     |
| desc_loja | varchar(200) |     |     |

O próximo campo é o identificador da "EMPRESA", isto é, o nome da empresa, "ATACADEZ", sendo que todas as lojas pertencem ao "ATACADEZ". Quando a Paula projetou o modelo, considerou que, no futuro, poderiam haver outras empresas diferentes da ATACADEZ sendo controladas pelo menso *Datawarehouse*.

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_loja | varchar(25) |     |     |
| desc_loja | varchar(200) |     |     |
| desc_empresa | varchar(200) |     |     |

Em seguida, temos o campo "CNPJ", que é o identificador natural da empresa.

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_loja | varchar(25) |     |     |
| desc_loja | varchar(200) |     |     |
| desc_empresa | varchar(200) |     |     |
| cod_empresa | varchar(25) |     |     |

Por fim, temos o campo "TAMANHO".

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_loja | varchar(25) |     |     |
| desc_loja | varchar(200) |     |     |
| desc_empresa | varchar(200) |     |     |
| cod_empresa | varchar(25) |     |     |
| tamanho_loja | float |     |     |

Já sabemos que é recomendável que o Datalake tenha metadados. Então, criaremos campos de metadados que acompanharão todas as tabelas do Datalake.

O primeiro campo é "arquivo_origem". Nele, especificaremos o nome do arquivo que está sendo usado como fonte de carga, independentemente do formato (CSV, XLS, JSON, etc.).

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_loja | varchar(25) |     |     |
| desc_loja | varchar(200) |     |     |
| desc_empresa | varchar(200) |     |     |
| cod_empresa | varchar(25) |     |     |
| tamanho_loja | float |     |     |
| arquivo_origem | varchar(200) |     |     |

Outra informação que adicionaremos é a data de criação, isto é, a "data_carga" do dado, que pode ser, por exemplo, um "datetime", assim, gravaremos o dia e a hora da carga.

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_loja | varchar(25) |     |     |
| desc_loja | varchar(200) |     |     |
| desc_empresa | varchar(200) |     |     |
| cod_empresa | varchar(25) |     |     |
| tamanho_loja | float |     |     |
| arquivo_origem | varchar(200) |     |     |
| data_carga | datetime |     |     |

Também poderíamos inserir informações como o departamento responsável pela geração do dado ou qualquer outra que apontasse a origem do dado. Isso até poderia ser fornecido pela API dentro do CSV, como uma evidência linha a linha, informando que o dado vem de determinado documento, transação ou banco.

No nosso caso, o nome do arquivo de origem e a data da carga é suficiente, mas, no Datalake, o ideal é adicionar mais informações sobre os metadados.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Criando a tabela de clientes</span>

Agora vamos falar sobre a criação da tabela de clientes no Datalake!

No Visual Studio, vamos selecionar a pasta "Tabelas" com o botão direito do mouse e apertar "Adicionar > Novo Item". Na outra tela, escolheremos "Tabela" e definiremos seu nome como "tbl_cliente". Apertando "Adicionar", seremos redirecionados para a área de criação da tabela.

Precisamos analisar as fontes para determinar quais campos criaremos nessa tabela do Datalake. Para isso, acessaremos o diretório em que as fontes estão e analisaremos a planilha de Excel `CADASTRO DE CLIENTES.slsx`.

Nela, temos uma coluna de "CNPJ", identificador natural de clientes, o nome de cada cliente, endereço, segmento e faturamento:

| CNPJ | CLIENTE | ENDERECO | SEGMENTO | FATURAMENTO |
| --- | --- | --- | --- | --- |
| 3759651739 | Supermercados Delicia | Caminho Foz do Jordão, 25 - Brasilia - DF | Supermercado Varejista | 280000 |
| 44257562749 | Restaurante Saboroso | R. Dois de Fevereiro, 1354 - Goiás - GO | Restaurante | 350000 |
| 8268254785 | Escola Saber & Aprender | R. Cel. Laurênio Lago, 355 - Campinas - SP | Escola | 320000 |
| 3040980351 | Casa de Repouso Harmonia | R. Laurindo Rabelo, 149 - Campo Grande - MS | Casa de Repouso | 1800000 |
| 621950777 | Supermercados MegaVida | R. Cinquenta, 20 -Belo Horizonte - MG | Supermercado Varejista | 280000 |
| ... | ... | ... | ... | ... |

(Trecho da planilha `CADASTRO DE CLIENTES.slsx`)

Analisando o outro arquivo, `REGIOES DOS ESTADOS.csv`, temos a sigla do Estado representada por dois dígitos, o nome do Estado e a região em que ele está situado.

```bash
ESTADO ABREVIAÇÃO;ESTADO; REGIAO
BH;Bahia; Nordeste
DF;Distrito Federal;Centro Oeste
GO;Goiais;Centro Oeste
MG;Minas Gerais;Sudeste
MS;Mato Grosso do Sul;Centro Oeste
PR;Paraná;Sul
RJ;Rio de Janeiro;Sudeste
RS;Rio Grande do Sul;Sul
SP;São Paulo;Sudeste
```

Verificados os campos, podemos retornar ao Visual Studio e criar o primeiro campo, que chamaremos de "cod_cliente" e fará referência à coluna "CNPJ" do Excel. O tipo de dado será definido como "varchar(25)”. Além disso, manteremos a chave primária associada a esse campo.

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_cliente | varchar(25) |     |     |

O próximo campo é "desc_cliente", está associado à coluna "CLIENTE" do Excel e será um "varchar(200)".

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_clientec | varchar(25) |     |     |
| desc_cliente | varchar(200) |     |     |

Seguiremos criando o campo de "endereco", com referência à coluna do Excel "ENDERECO". Ele será de tipo "varchar(200)".

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_clientec | varchar(25) |     |     |
| desc_cliente | varchar(200) |     |     |
| endereco | varchar(200) |     |     |

Passamos para campo "faturamento", com referência à coluna "FATURAMENTO". Ele não será um *varchar*, mas, sim, um "float".

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_clientec | varchar(25) |     |     |
| desc_cliente | varchar(200) |     |     |
| endereco | varchar(200) |     |     |
| faturamento | float |     |     |

O campo seguinte é "desc_segmento", com referência à coluna "SEGMENTO". Ele será um "varchar(200)".

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_clientec | varchar(25) |     |     |
| desc_cliente | varchar(200) |     |     |
| endereco | varchar(200) |     |     |
| faturamento | float |     |     |
| desc_segmento | varchar(200) |     |     |

Apesar de o próximo campo não estar associado diretamente à nossa fonte de dados, ele é importante para o *datawarehouse*: o descritor da cidade ou "desc_cidade". Lembrando que na coluna de "ENDERECO", consta a cidade onde está a sede de cada cliente. Portanto, é possível buscar as cidades e colocá-las em uma coluna.

No *datawarehouse*, precisaremos do descritor da cidade como campo referente ao nível *output* da dimensão "cliente".

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_clientec | varchar(25) |     |     |
| desc_cliente | varchar(200) |     |     |
| endereco | varchar(200) |     |     |
| faturamento | float |     |     |
| desc_segmento | varchar(200) |     |     |
| desc_cidade | varchar(200) |     |     |

Existem duas formas de representarmos o Estado. No CSV, há uma representação com dois dígitos, referente ao **código** do Estado e também o **descritor**, por exemplo: Bahia; Distrito Federal; Goiás; etc.

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_clientec | varchar(25) |     |     |
| desc_cliente | varchar(200) |     |     |
| endereco | varchar(200) |     |     |
| faturamento | float |     |     |
| desc_segmento | varchar(200) |     |     |
| desc_cidade | varchar(200) |     |     |
| cod_estado | varchar(25) |     |     |
| desc_estado | varchar(200) |     |     |

Na "REGIAO", existe apenas um descritor, então, vamos criar a coluna "desc_regiao", com "varchar(200)".

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_clientec | varchar(25) |     |     |
| desc_cliente | varchar(200) |     |     |
| endereco | varchar(200) |     |     |
| faturamento | float |     |     |
| desc_segmento | varchar(200) |     |     |
| desc_cidade | varchar(200) |     |     |
| cod_estado | varchar(25) |     |     |
| desc_estado | varchar(200) |     |     |
| desc_regiao | varchar(200) |     |     |

Agora, adicionaremos duas colunas de metadados.

| Nome | Tipo de Dados | Permitir Nulos | Padrão |
| --- | --- | --- | --- |
| cod_clientec | varchar(25) |     |     |
| desc_cliente | varchar(200) |     |     |
| endereco | varchar(200) |     |     |
| faturamento | float |     |     |
| desc_segmento | varchar(200) |     |     |
| desc_cidade | varchar(200) |     |     |
| cod_estado | varchar(25) |     |     |
| desc_estado | varchar(200) |     |     |
| desc_regiao | varchar(200) |     |     |
| arquivo_origem | varchar(200) |     |     |
| data_carga | datetime |     |     |

Criados os campos, talvez surja a pergunta: por que criamos um campo para a coluna de "descritor de cidade" e não fizemos um para "código da cidade" também? O mesmo se aplica para "descritor da região" e "código da região", e para "descritor de segmento" e "código de segmento".

O Datalake deve expressar o que está na fonte. Na fonte de dados, pensando no "ESTADO", por exemplo, há o código e o descritor. Já na "REGIAO", há apenas o descritor. Não existe um código de "REGIAO" vindo da fonte, por isso, não precisamos criar um campo "cod_regiao" no Datalake.

Quando transportarmos o dado para o *datawarehouse*, o código precisará ser criado de alguma maneira, porque no *datawarehouse*, temos o identificador natural e o descritor da dimensão (nos atributos, não há identificador natural). Essa mesma comparação vale para "SEGMENTO", em que só há o descritor.

Já sabemos que o esquema do Datalake é flexível. Se considerarmos que vale criar um "cod_cidade" e populá-lo nesse momento de atualização do Datalake, não há problema! Quando transportarmos o dado do Datalake para o *datawarehouse*, a coluna estará lá.

Outra opção é nos preocuparmos em criar essa coluna de código no momento em que transportarmos os dados do Datalake para o *datawarehouse*. É essa segunda abordagem que utilizaremos no nosso modelo. Então, vamos criar as colunas que não estão no Datalake somente quando transportarmos para o *datawarehouse*.

&nbsp;

# Executando a criação das tabelas (muito mais fácil pelo visual studio, porém no SQL Power Architec é mais visual)

<span style="color: #c0c0c0;">No Visual Studio, nós já criamos o projeto para as tabelas de clientes, empresas, e produtos do Data Lake. Essas são as três dimensões às quais daremos ênfase durante este curso. Chegou o momento de transportar essas tabelas para o banco de dados do SQL Server, ou seja, vamos</span> **executar a criação das tabelas**<span style="color: #c0c0c0;">.</span>

De volta ao Visual Studio, temos no projeto a estrutura das tabelas:

> - `tbl_cliente.sql`
> - `tbl_empresa.sql`
> - `tbl_produto.sql`

Neste curso, iremos nos limitar a trabalhar com essas três tabelas. Porém, nós apenas projetamos as tabelas no Visual Studio; no SQL Server, no banco de dados `DL_ATACADEZ`, não há tabela.

Precisamos **transportar** as tabelas projetadas no Visual Studio para que elas sejam criadas no ambiente do SQL Server. Podemos fazer isso de duas maneiras.

Note que, no Visual Studio, para cada tabela do projeto, temos um comando SQL (criado de forma dinâmica) para a criação da tabela. Por exemplo:

> *`tblproduto.sql`:*

```sql
CREATE TABLE [dbo].[tbl_produto]
(
    [cod_produto] VARCHAR(25) NOT NULL PRIMARY KEY,
    [desc_produto] VARCHAR(200) NULL, 
    [desc_departamento] VARCHAR(200) NULL, 
    [atr_unidade_medida] VARCHAR(50) NULL, 
    [cod_fornecedor] VARCHAR(25) NULL, 
    [desc_fornecedor] VARCHAR(200) NULL, 
    [arquivo_origem] VARCHAR(200) NULL, 
    [data_carga] DATETIME NULL
)
```

Então, podemos copiar os comandos, colar como scripts no SQL Server e executar.

Porém, nesse caso, precisaríamos fazer o mesmo processo para cada tabela. Para resolver isso, existe uma forma de fazer a criação da tabela de forma automática.

Vamos clicar com o botão direito sobre o projeto do tipo SQL onde as tabelas estão criadas, ou seja, `CriacaoDataLake`, e selecionar a opção "Recompilar".

> Relembrando: nós temos um projeto do tipo SQL chamado `CriacaoDataLake`; um projeto do tipo *Integration Services* chamado `CargaDataWarehouse`, no qual ainda não mexemos; e ambos os projetos fazem parte de uma solução chamada `DatawarehouseAtacaDez`.

A opção "Recompilar" irá verificar se há algum erro no projeto. Ao executar essa opção, será escrito em uma janela inferior chamada "Saída" a recompilação do projeto. No caso do instrutor, recebemos a mensagem "1 bem-sucedido, 0 falhou, 0 ignorado", então não há erros.

Em seguida, clicaremos novamente com o botão direito sobre `CriacaoDataLake`, agora para selecionar a opção "Publicar…".

Ao fazer isso, será solicitado que seja criada uma conexão com um banco de dados de destino, que é o banco do Data Lake. No momento, não temos nenhuma conexão, então vamos clicar em "Editar…" à direita do campo. Ao fazer isso, será aberta a janela "Conectar".

Nessa janela, vamos até a aba "Procurar" e digitar o nome do servidor, localizado no topo do pesquisador de objetos do Management Studio (**DESKTOP-G7KVMJN**).

O tipo de autenticação será definido como "Autenticação do SQL Server". O nome de usuário será "sa" e a senha será a que utilizamos quando instalamos o banco de dados.

> Podemos marcar a caixa de seleção "Lembrar Senha" para tê-la salva ao conectar.

Por fim, vamos selecionar o banco de dados `DL_ATACADEZ`.

Feito isso, vamos clicar em "Testar Conexão" no canto inferior esquerdo. Surgirá uma janela *pop-up* com a mensagem "Conexão de teste bem-sucedida". Em seguida, vamos clicar em "OK" no canto inferior direito da janela. Ao fazer isso, a conexão será escrita.

Abaixo do campo "Conexão de banco de dados de destino", podemos conferir o nome do banco de dados como `DL_ATACADEZ`. Na sequência, temos o nome de um script (`CriacaoDataLake.sql`) que será criado para gerar o banco automaticamente.

Nesse momento, se clicarmos no botão "Gerar Script" no canto inferior direito, será salvo no computador o script `CriacaoDataLake.sql`, o qual poderemos rodar posteriormente no SQL Server.

Outra opção seria clicar no botão "Publicar", também no canto inferior direito. Nesse caso, será retornada uma mensagem na parte inferior da tela (seção "Operações de Ferramentas de Dados") indicando que as tabelas do banco de dados estão sendo publicadas.

Ao final, teremos a mensagem "Publicação concluída com êxito". Agora, ao retornar para o SQL Server e atualizar o banco de dados `DL_ATACADEZ`, teremos as três tabelas criadas:

> - `dbo.tbl_cliente`
> - `dbo.tbl_empresa`
> - `dbo.tbl_produto`

Todas elas terão os campos projetados no Visual Studio.

## Conclusão

Assim, temos nossas três tabelas do Data Lake criadas. Porém, no momento, elas estão vazias. Precisamos fazer algum processo para ler das fontes de dados que recebemos da área de TI da AtacaDez e colocar as informações nas tabelas. Para isso, vamos usar o *Integration Services*, que é o outro projeto do Visual Studio, chamado `CargaDataWarehouse`.

&nbsp;

&nbsp;

# Preparando estrutura para recebimento dos arquivos (estrutura de pastas)

<span style="color: #c0c0c0;">Neste vídeo, vamos preparar a construção de uma estrutura de diretórios para receber os arquivos externos que chegarão até nós.</span>

Observando as fontes de dados no diretório "ETL", bem como os arquivos dos subdiretórios "mov" e "compra", notamos que todos os arquivos recebidos são **externos** nos formatos Excel, CSV, JSON, e XML. Dessa forma, não iremos nos conectar a outro banco de dados para ler dados e trazer informações para o Data Lake.

Seria interessante criar uma estrutura de diretórios na nossa máquina, que, teoricamente, será a estrutura de diretórios onde a área de TI da AtacaDez irá enviar os dados.

Na verdade, quem fará a ação de enviar os arquivos será a TI da AtacaDez, que irá extrair os dados dos seus sistemas transacionais, nos formatos especificados anteriormente, e disponibilizar para nós nessa estrutura de diretórios.

Normalmente, quando trabalhamos com uma estrutura de diretórios de recebimentos externos, a criamos com um subdiretório chamado de **diretório de entrada**, onde o arquivo irá chegar.

Vamos partir para a criação dessa estrutura de diretórios que serão os diretórios de recebimento dos nossos arquivos?

## Estrutura de diretórios

Dentro do diretório "Fontes" criado anteriormente, onde está o diretório "ETL", que é a fonte de dados bruta, e o "PROJETOS", criaremos um novo diretório chamado "**DATA**", onde os dados serão gravados para que o processo de extração leia e leve-os ao Data Lake.

Em "DATA", criaremos dois subdiretórios: o primeiro chamado "**DIMENSOES**" e o segundo chamado "**FATOS**". Dentro do diretório "DIMENSOES", criaremos os diretórios "**CLIENTE**","**PRODUTO**" e "**EMPRESA**".

No diretório "CLIENTE", criaremos o subdiretório "**IN**", que será o diretório de entrada, onde o arquivo será gravado pelo processo da área de TI quando o dado externo estiver disponível e sendo enviado para nós. Esse mesmo subdiretório "IN" estará presente em "EMPRESA" e "PRODUTO".

Feito isso, vamos acessar o diretório "ETL" e copiar o arquivo `EMPRESA.CSV`. Na sequência, iremos colar no diretório "DATA > DIMENSOES > EMPRESA > IN".

Dessa forma, é como se o arquivo fosse transportado por parte da TI da AtacaDez para o diretório da estrutura que estamos organizando para receber os arquivos externos.

Repetiremos o mesmo procedimento para as fontes de dados de clientes, correspondentes aos arquivos `CADASTRO DE CLIENTES.xlsx` e `REGIOES DOS ESTADOS.csv`. Vamos copiar e colar em "DATA > DIMENSOES > CLIENTE > IN".

Por fim, vamos copiar do diretório "ETL" os arquivos `PRODUTOS.JSON` e `FORNECEDORES.XML` para "DATA > DIMENSOES > PRODUTO > IN".

## Conclusão

Com isso, temos nossa estrutura de recebimento de arquivos externos montada!

> Apesar de termos criado um diretório para o recebimento das "FATOS", não será o foco do nosso treinamento a leitura dos dados referentes à tabela de fato do Data Warehouse. Tanto que, no Data Lake, criamos apenas três tabelas referentes às três dimensões principais: cliente, empresa e produto.

Já temos as tabelas criadas no Data Lake e a fonte de dados dentro da sua estrutura de recebimento pronta. Dessa forma, estamos prontos para fazer o processo de extração dos dados dessas fontes e de gravação no Data Lake.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Carga da fonte para empresas (puxando os dados de um CSV via Visual Studio (interessante))</span>

Agora começaremos a fazer a carga da fonte para empresas, então voltaremos para o VS Code onde faremos o fluxo de dados entre o CSV, que possui informações das empresas, para gravarmos no Data Lake. Para isso, trabalharemos como projetos do tipo ***Integration Service***, que estão na pasta "CargaDataWarehouse".

Abrindo a pasta "CargaDataWarehouse", encontramos uma pasta chamada "Pacote SSIS". O **SSIS** significa "***SQL Server Integration Services* (Serviços Integrados do Servidor SQL)**". Dentro dessa pasta temos um pacote padrão criado, o `Package1.dtsx`.

Clicaremos com o botão direito do mouse no pacote `Package1.dtsx` e escolheremos a opção "Renomear", que é a última. Mudaremos o nome para "CargaDataLake", ou seja, `CargaDataLake.dtsx`, e pressionaremos "Enter".

Ao pressionarmos "Enter", no lado esquerdo do VS Code teremos uma coluna com uma lista dos elementos com os quais poderemos trabalhar nesse projeto. Já no centro da janela, onde o `CargaDataLake.dtsx` está aberto, temos a área onde esses elementos serão orquestrados.

Na região centro-superior da janela, logo abaixo do nome do arquivo, existe uma barra onde encontramos duas áreas distintas: a primeira é o **Fluxo de Controle** e a segunda, que está ao lado dela, é o **Fluxo de Dados**. Os componentes da caixa de ferramentas, que é a coluna da esquerda, mudam de acordo com a seleção do Fluxo de Controle ou do Fluxo de Dados.

No **Fluxo de Controle** temos os procedimentos principais do fluxo de carga de dados. Já no **Fluxo de Dados** temos o detalhamento de alguns fluxos de controle. Portanto, teremos fluxos de controle na aba "Fluxos de Controle" e, ao selecioná-lo ou clicarmos duas vezes nele, podemos ver o detalhamento desse fluxo na aba "Fluxo de Dados".

Dessa forma temos uma hierarquia onde um fluxo de controle pode ter um fluxo de dados embaixo dele. Entretanto, nem todos os fluxos de controle terão esse detalhamento na área de fluxo de dados.

Clicando em "Fluxo de Controle" e analisando a coluna da esquerda, observamos que existem várias tarefas para cumprirmos. Selecionaremos uma tarefa que está no topo dessa coluna: a **Tarefa Fluxo de Dados**.

Ao lado esquerdo do nome dessa tarefa existe um ícone formado por dois desenhos de banco de dados, lado a lado, com uma seta reta sobre eles apontando para direita. Através desse ícone, conseguimos entender que se trata de uma transferência de dados entre uma base e outra.

Clicaremos na Tarefa de Fluxo de Dados e a arrastaremos para a área de trabalho do Fluxo de Controle. Ao fazermos isso, na área de trabalho aparece um retângulo com o nome e o ícone da Tarefa de Fluxo de Dados.

![Captura de tela do VS Code. Na área de trabalho do Fluxo de Controle há um retângulo cinza escrito "Tarefa Fluxo de Dados" centralizado. À esquerda do nome da tarefa tem o ícone que a representa, descrito anteriormente. Abaixo desse retângulo, também centralizado, uma seta aponta para baixo.](../_resources/3998a9f1-8cda-4ea5-a887-6bf0dc17.png)

Clicando sobre o título da tarefa, podemos renomeá-la. No caso, mudaremos o nome para "Carga de Empresas", pressionando "Enter" ao final. Em seguida, clicamos nesse retângulo do fluxo de controle, para selecioná-lo, e selecionamos a aba de Fluxo de Dados.

Dessa forma acessamos a área do fluxo de dados do fluxo "Carga de Empresas", como podemos ver na parte superior da área de trabalho, onde tem o campo "Tarefa Fluxo de Dados". Nessa campo temos um menu suspenso onde a opção "Carga de Empresas" está selecionado, mas ao expandirmos o menu, vemos que essa é a única opção.

Da mesma forma, se voltarmos para o Fluxo de Controle e clicarmos duas vezes no retângulo com nosso fluxo de controle, abrimos a área de fluxo de dados desse fluxo específico. E agora que estamos na área de fluxo de dados do "Carga de Empresas", a primeira coisa que precisamos fazer é nos conectar ao CSV.

O `EMPRESAS.CSV` está na nossa máquina. No meu caso, está em "C: > Fontes > DATA > DIMENSOES > EMPRESA > IN > `EMPRESA.CSV`", mas vocês vão descobrir o endereço do diretório no computador de vocês.

Para nos conectarmos ao CSV de Empresas no fluxo de dados do "Carga de Empresas", precisamos adicionar o componente. A primeira opção é o **Assistente de Origem**, que é um componente genérico que está logo no começo da Caixa de Ferramentas.

Outra opção é rolarmos a caixa de ferramentas para baixo até acharmos a seção "Outras Origens" e selecionarmos um componente de origem mais específico. No caso, o componente que se conecta com nosso CSV é o "**Origem de Arquivo Simples**", que é o segundo da lista.

Selecionaremos o componente "Origem de Arquivo Simples" e o arrastaremos para área de Fluxo de Dados do "Carga de Empresas", transformando-o em um retângulo na área de fluxo. Clicaremos no título desse retângulo para renomeá-lo.

O nome dessa tarefa será "Conexão com Arquivo EMPRESA CSV", sem usarmos o ponto (`.`) em ".CSV", porque não podemos ter pontos no nome. Inclusive, podemos modificar o nome de um fluxo clicando no texto do retângulo ou acessando a aba "Propriedades", no lado inferior direito da tela, e alterando o campo "*Name*" (Nome), que é o último.

> **Dica:** A aba "Propriedades", na metade inferior direita da janela, mostra as propriedades do componente selecionado, tanto no Fluxo de Controle, quanto no Fluxo de Dados. Também conseguimos alterar o nome do componente através dela.

Clicamos no componente "Conexão Arquivo EMPRESA CSV" e agora precisamos conectá-lo ao CSV da nossa máquina. Para isso, clicamos sobre ele duas vezes, o que abre a janela "*Flat File Source Editor* (Editor de Origem do Arquivo Simples)" no centro da tela.

Entraremos agora no conceito de **conexões**, que são a porta de entrada para fonte externas. Para ler dados de algum lugar, precisamos fazer uma conexão, ou seja, "abrir a porta" de acesso a esse ambiente para buscarmos os dados.

Para ler os dados de `EMPRESA.CSV`, precisamos nos conectar com esse arquivo, mas essa conexão não existe ainda. Teríamos que escolher uma conexão existente no campo "*Flat file connection manager*" (Gerenciador de conexão de arquivo simples)", mas não temos nenhuma conexão criada nesse momento.

Isso não é um problema porque, ao lado direito do campo onde selecionamos a conexão, temos o botão *New* (Nova). Ao clicarmos nesse botão, abrimos a janela "Editor do Gerenciador de Conexões de Arquivos Simples" sobre a anterior, onde criaremos nossa conexão.

No começo da janela está o campo "Nome do gerenciador de conexões", onde definiremos o nome da conexão, no caso, "Conexão com o arquivo EMPRESA CSV". Copiaremos o nome e colaremos no campo "Descrição", que está logo abaixo, deixando a descrição idêntica ao nome.

Abaixo desses campos temos mais campos separados pela instrução "Selecione um novo arquivo e especifique suas propriedades e formato". Abaixo dessa orientação está o campo "Nome do arquivo" com uma caixa de texto vazia. À direita dessa caixa de texto está o botão "Procurar…", onde clicaremos para selecionar a localização do arquivo.

Clicando em "Procurar", abrimos uma janela do explorador, onde navegaremos até o diretório em que nosso arquivo se encontra. A princípio, não encontramos o `EMPRESA.CSV`. Para resolver isso, na parte inferior direita da janela do explorador, clicaremos onde está escrito "Arquivo de Texto (`*.txt`)", expandindo o menu suspenso. Nesse menu, selecionaremos "Arquivos CSV (`*.csv`)".

Ao fazermos essa troca, o arquivo `EMPRESA.CSV` aparece, então vamos selecioná-lo e clicar no botão "Abrir", no canto inferior direito da janela. Assim, a janela de busca se fecha e, de volta à janela "Editor do Gerenciador de Conexões de Arquivos Simples", todos os demais campos foram preenchidos.

> Nome do Arquivo: (Endereço do arquivo `EMPRESA.CSV`)
> 
> > Localidade: Português (Brasil)
> > 
> > Página de código: 1252 (ANSI - Latino I)
> 
> Formato: Delimitado
> 
> > Qualificador de texto: `<none>`
> > 
> > Delimitador de linha de cabeçalho: {CR}{LF}
> 
> > Linhas de cabeçalho a serem ignoradas: 0
> 
> > ✓ Nomes de coluna na primeira linha de dados

Ele mostra que a localidade do arquivo é Português (Brasil) e a página de código é da tabela interna que ele estará usando. A tabela 1252 é a que tem os acentos e "Ç".

O **formato** do arquivo é delimitado, porque o `EMPRESA.CSV` é um arquivo onde cada linha do arquivo foi delimitada por ponto e vírgula (`;`). O campo "Qualificador de textos" indica se os textos estão entre aspas duplas (`"`) ou não, no caso, não está. Também foi aplicado um delimitador de quebra de linha e deixamos a opção "Nomes de coluna na primeira linha de dados" selecionada.

Com esses campos preenchidos, podemos acessar a coluna na lateral esquerda da janela e clicar na opção "Colunas". Ao fazermos isso, temos um campo com a visualização do que será o arquivo que passamos.

Acima da visualização, há uma caixa escrito "Especifique os caracteres que delimitam o arquivo de origem", com os campos "Delimitador de linha" e "Delimitador de Coluna". No campo "Delimitador de coluna" passamos o "Ponto e vírgula (;)" e, dessa forma, conseguimos visualizar o layout do nosso arquivo e conferir se está tudo certo.

Se quisermos fazer uma conversão avançada, podemos acessar, na coluna da esquerda, a opção "Avançado". Nela temos a opção de especificar um tipo de detalhamento para cada coluna do nosso campo. Por fim, se acessarmos a opção "Visualização", na coluna da esquerda", temos outra visualização do arquivo.

Quando clicamos no botão "OK", no canto inferior direito da janela, ela se fecha e voltamos para janela "*Flat File Source Editor*", onde já temos uma conexão definida e selecionada no campo "*Flat file connection manager*". Uma vez que a conexão foi selecionada, na coluna da esquerda dessa janela, clicaremos na opção "Colunas".

Na seção "Colunas", escolheremos as colunas desse arquivo que queremos ler. No caso, queremos ver todas as colunas, e elas já estão selecionadas, como podemos visualizar na metade superior dessa seção. Confirmando que todas as caixas de seleção dessa visualização estão marcadas, podemos clicar no botão "OK" na parte inferior da janela. Agora já temos nossa conexão com o arquivo `EMPRESA.CSV`.

Podemos notar que na parte inferior do Fluxo de Dados, temos outra aba chamada "Gerenciamento de Conexões". Dentro dela encontramos um retângulo com a "Conexão com o arquivo EMPRESA CSV". Se precisarmos de outro componente de origem de arquivo simples que precise se conectar ao `EMPRESA.CSV`, podemos reaproveitar essa conexão.

Nosso componente "Conexão Arquivo EMRPESA CSV" já se conectou ao nosso arquivo `.csv` e obteve os dados de todas as colunas. No próximo vídeo faremos a gravação desse dado na tabela do Data Lake.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Colunas de metadados</span>

Anteriormente fizemos a conexão com o CSV dos dados de empresas, mas nem toda a informação que precisamos está no `EMPRESA.CSV`. Existem também as colunas de metadados, que precisamos preencher antes de gravarmos na tabela do Data Lake da tabela de empresas. Voltaremos para o VS Code para fazermos a inclusão das informações de metadados.

No VS Code, dentro da aba de Fluxo de Dados, temos a tarefa "Conexão Arquivo EMPRESA.CSV", que obtém os dados do CSV. Existe uma forma de visualizarmos os dados que estão chegando após a execução dessa tarefa.

Para isso, na coluna da esquerda, dentro da seção "Comum", encontraremos o componente "Coluna Derivada", que está na terceira posição. Selecionaremos e arrastaremos esse componente para o nosso Fluxo de Dados.

Clicando no componente "Conexão de Arquivo EMPRESA CSV", aparecem duas setas no centro inferior do retângulo: uma seta azul, à esquerda, e uma seta vermelha, à direita. A **seta azul** significa o que deve ser executado após esse componente caso tudo dê certo. A **seta vermelha** é o que deve ser feito depois desse componente caso algo dê errado.

Nós trabalharemos com o sucesso, então clicaremos na seta azul com o botão esquerdo do mouse e arrastamos a seta até o componente "Coluna Derivada", que é nossa próxima tarefa. Assim ele executa os dados de "Conexão Arquivo EMPRESA CSV" e depois passa para a tarefa Coluna Derivada.

Clicando na seta azul que liga as duas tarefas com o botão direito do mouse, teremos a opção "Habilitar Visualizador de Dados" no menu. Ao selecionarmos essa opção, em algum local próximo à seta aparecerá um ícone de lupa dentro de um quadrado branco.

Essa lupa significa que, ao executarmos esse processo, antes de executar a segunda tarefa, ele exibirá os dados que estão sendo coletados. Atualmente a tarefa de "Coluna Derivada" não faz nada, mas não tem importância, porque queremos apenas visualizar a saída da tarefa "Conexão Arquivo EMPRESA CSV".

Para visualizarmos, precisamos executar o processo e, para isso, na parte superior do VS Code, clicaremos no botão "Iniciar". Ao fazermos isso, o processo de em Fluxo de Dados é executado e uma janela se abre no centro da tela, com os dados que estão saindo de "Conexão Arquivo EMPRESA CSV".

Notamos que estamos obtendo as cinco colunas do `EMRPESA.CSV`, inclusive podemos abrir nosso arquivo `.csv` e conferir que são as mesmas colunas e dados. Porém, nosso objetivo é gravas os dados na tabela `dbo.tbl_empresa`, do SQL.

Acessando o SQL Server Management Studio e expandindo a tabela `dbo.tbl_empresa`, observamos que ela tem colunas de metadados. Por exemplo, entre as colunas dessa tabela, temos a "arquivo_origem" e "data_carga", que precisam estar preenchidos.

Para passarmos dados para essa tabela, precisamos ter uma tabela com as mesmas colunas de `dbo.tbl_empresa` no Integration Service, não necessariamente com o mesmo nome, mas com o mesmo conteúdo. Portanto, precisamos acrescentar aos dados de saída do "Conexão Arquivo EMPRESA CSV" as colunas "arquivo_origem" e "data_carga".

Antes disso, voltaremos para o VS Code e clicaremos no botão de "Parar Depuração", que tem o ícone de quadrado vermelho e fica na parte superior da janela. Também podemos parar com o atalho "Shift + F5", retornando o Fluxo de Dados para o modo de design.

Mudaremos o nome da tarefa "Coluna Derivada" para "Acrescentar colunas de matadados". Depois faremos um duplo clique sobre esse componente, abrindo a janela "*Derived Column Transformation Editor*" (Editor de Transformação de Coluna Derivada) no centro da tela.

Nessa janela temos dois campos com pastas diferentes na metade superior e um campo de criação de tabela na metade inferior. Na metade superior esquerda, encontramos duas pastas, sendo a segunda "*Columns*" (Colunas). Ao expandirmos essa pasta, encontramos todas as colunas que chegam do processo anterior, o "Conexão Arquivo EMPRESA CSV".

Na metade superior direita encontramos várias pastas com funções, que são: Matemáticas, de Cadeias de Caracteres, de Data/Hora e NULL. Além disso, encontramos também Conversores de Tipos e Operadores.

No campo de criação de tabela, na metade inferior, criaremos uma nova coluna. O nome dessa nova coluna será "ARQUIVO_ORIGEM", e escreveremos no campo "*Derived Column Name*" (Nome da Coluna Derivada). Sabemos que o arquivo origem de Empresas é o arquivo `EMPRESA.CSV`, então na coluna "*Expression*" (Expressão), escreveremos o nome desse arquivo entre aspas duplas.

Além disso, criaremos a coluna de nome "DATA_CARGA", que usará uma Função de Data/Hora. Então acessaremos a parte superior direita da janela e procuraremos pela função `GETDATE()` dentro da pasta "Funções de Data/Hora". Ao encontrarmos, arrastaremos esse arquivo para a coluna "Expression", na linha de "DATA_CARGA".

| Derived Column Name | Derived Column | Expression | Data Type | Length | Precision | Scale | Code Page |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ARQUIVO_ORIGEM |     | "EMPRESA.CSV" | cadeia de caracteres Unicode \[DT_WSTR\] | 11  | vazio | vazio | vazio |
| DATA_CARGA |     | GETDATE() | carimbo de data/hora do banco de dados \[DT_DBTIMESTAMP\] | vazio | vazio | vazio | vazio |

Duas informações importantes, que não vamos nos aprofundar por enquanto, são os dados entre colchetes no campo "*Data Type*": `[DT_WSTR]` e `[DT_DBTIMESTAMP]`. Essas informações representam o tipo da coluna.

Cada coluna gerada dentro do Integration Service tem um tipo, e é importante trabalharmos com esses tipos. Temos um tipo chamado "cadeia de caracteres Unicode", representado pelo símbolo `[DT_ WSTR]`. O outro tipo que temos é representado pelo símbolo `[DT_DBTIMESTAMP]`.

Esses tipos serão importantes posteriormente, quando estivermos gravando os dados posteriormente. Por enquanto não vamos nos aprofundar nisso, até porque não podemos trocar esses tipos, por terem uma relação direta com o resultado dessa operação.

Finalizamos a adição das nossas colunas, então vamos clicar no botão "OK", na borda inferior direita da janela. Em seguida, no Fluxo de dados, adicionaremos outro componente de "Coluna Derivada" abaixo do "Acrescentar colunas de metadados".

Clicando em "Acrescentar colunas de metadados", arrastaremos a seta azul até o componente "Coluna Derivada", conectando as duas tarefas. Em seguida, clicaremos com o botão direito nessa seta azul e selecionaremos a opção "Habilitar Visualizador de Dados".

![Captura de tela do Fluxo de Dados. Na parte superior está a tarefa "Conexão Arquivo EMPRESA CSV". Abaixo dele está o retângulo "Acrescentar colunas de metadados", que está conectado à tarefa anterior por uma seta azul. Ao lado da seta azul está o ícone de lupa, indicando que o visualizador de dados está ativado. Abaixo do "Acrescentar colunas de metadados", está o componente "Coluna Derivada", que se conecta ao retângulo anterior através da seta azul. Ao lado dessa seta também tem o ícone de lupa, representando que o visualizador de dados também está ativado nessa etapa.](../_resources/ba0c6a60-bcae-4f58-8bc5-9a1fda07.png)

Atualmente, no nosso processo, fazemos a leitura do CSV, e avançamos para adição da coluna de metadados. Entre esse processo, visualizaremos os dados antes da adição das novas colunas. Em seguida, visualizaremos os dados após a adição das colunas de metadados.

Salvamos essas alterações, clicando no ícone "Salvar Tudo", que é o ícone de disquete, e depois clicaremos no botão "Iniciar" para executarmos o processo. No centro da tela, aparece primeiro a visualização dos primeiros dados, sem os metadados.

Podemos clicar no botão de fechar, que é o ícone de "X" ao lado do nome da aba, no canto superior esquerdo da janela. Com isso, abre-se outra janela com segunda tabela. Agora as duas últimas colunas, à direita\`, são a "ARQUIVO_ORIGEM" e a "DATA_CARGA", ou seja, a data que fizemos a leitura dos dados.

A segunda tabela já tem os mesmos campos da tabela final, então já podemos fazer uma associação dos dados que estão saindo da tarefa "Acrescentar colunas de metadados" para gravar na tabela do SQL Server.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Gravação na tabela empresa (jogando dados pro DataLake (importante))</span>

Já temos os dados extraídos do `EMPRESA.CSV` com as colunas de metadados adicionadas. Agora precisamos gravar na tabela do Data Lake, e é o que faremos.

De voltar ao VS Code, continuaremos com a programação do Fluxo de Dados entre a fonte do CSV, que possui as informações de empresas, e a tabela de empresas no Data Lake. Começaremos apagando o componente "Coluna Derivada" que está no final do processo, porque ele só foi usado para conseguirmos visualizar o resultado que saía do fluxo anterior.

Selecionaremos o retângulo "Coluna Derivada" e pressionaremos o botão "Delete" no nosso teclado, apagando essa tarefa. Além disso, não visualizaremos mais os dados que saem do "Conexão Arquivo EMPRESA CSV", então clicamos sobre a seta azul com o botão direito do mouse e selecionamos a opção "Desabilitar Visualizador de Dados".

Já sabemos que os dados que saem do "Acrescentar colunas de metadados" é o dado que queremos gravar na tabela. Para isso, adicionaremos um componente que irá configurar o destino do fluxo de dados: o **Assistente de destino**, que está no topo da caixa de ferramentas, ou seja, na coluna da esquerda.

Arrastaremos o "Assistente de Destino" para a área de trabalho do Fluxo de Dados, abaixo de "Acrescentar colunas de matadados". Ao fazermos isso, abrimos a janela "Assistente de Destino - Adicionar Novo Destino" no centro da tela, onde informaremos o tipo de destino com o qual estamos trabalhando: SQL Server ou Excel.

No caso, trabalharemos com SQL Server, então no campo superior esquerdo, onde temos o comando "Selecione o tipo de destino", clicaremos em "SQL Server", que é a primeira opção. No lado superior direito, precisamos selecionar os gerenciadores de conexão, mas ainda não criamos nenhuma conexão para SQL Server.

Lembrem-se que a única conexão que temos no Gerenciador de Conexões, que está aberto na parte inferior da janela do VS Code, é a conexão com o `EMPRESA.CSV`. Portanto, no campo superior direito, clicaremos na opção "Nova…" e depois no botão "OK", no lado direito da borda inferior da janela.

Assim abrimos a janela do "Gerenciador de Conexões" no centro da tela. Na seção "Conexão", o primeiro campo que podemos preencher é o "*Server or file name*" (Nome do servidor ou arquivo).

Nós adicionaremos o nome do servidor, então abriremos o SQL Server Management Studio e clicaremos com o botão direito no nome do servidor, que é a primeira opção na coluna "Conectar", à esquerda. No menu de opções, selecionamos "Propriedades", que é a última da lista.

Com isso, abrimos a janela "Propriedades do Servidor - NOME DO SERVIDOR", onde aparecerá uma tabela com as informações desse servidor. Copiamos a informação que está no campo "Nome", que é o primeiro da tabela, e voltamos para o VS Code. Por fim, colamos essa informação no campo "*Server or file name*".

Após o nome do servidor, temos a seção "*Log on to the server*". Logo no começo temos dois botões de seleção, e selecionaremos a segunda opção, que é "*Use a specific user name and password*" (Use um nome de usuário e senha específicos). Com isso, ativamos os campos *User name* e *Password* logo abaixo.

No campo "*User name*" (Nome de usuário), escreveremos "sa", e no campo *Password* (Senha), escreveremos a senha do SQL Server. Abaixo desses campos, estão duas caixas de seleção. A primeira, "*Blank password*" (senha em branco), marcarmos caso não temos senha.

A segunda, "*Allow saving password*", é para permitirmos salvar essa senha e não precisarmos passá-la novamente. Nós marcaremos essa segunda caixa de seleção para salvarmos essa senha.

No canto inferior esquerdo da janela temos o botão "Testar Conexão", onde clicamos para tentar acessar o servidor. Fazendo isso, abrimos um pop-up que informa que nossa conexão foi bem-sucedida. Podemos clicar no botão "OK" para fechar o pop-up.

Abaixo da seção "*Log on the server*", tem uma lista suspensa de "*Initial catalog*" (Catálogo inicial). Nessa lista, selecionaremos o "DL_ATACADEZ", que é o Data Lake. E após todas essas configurações, podemos clicar no botão "OK", na borda inferior do "Gerenciador de Conexões". Agora temos nosso destino.

Clicaremos no nome desse componente, que é "Destino OLE DB", e o mudaremos para "Gravação na tabela EMPRESA do Data Lake. Por fim, faremos a ligação, arrastando a seta azul de "Acrescentar colinas de metadados" para "Gravação na tabela EMPRESA do Data Lake".

Percebemos que o extremo direito do retângulo "Gravação na tabela EMPRESA do Data Lake" temos um círculo vermelho com um "X" branco dentro. Sempre que vermos esse símbolo, significa que algo está errado com a gravação desse componente do fluxo. Nesse caso, é porque não colocamos nada nesse componente.

Outra informação importante está na aba "Gerenciador de Conexões", na parte inferior do VS Code. Percebemos que surgiu uma nova conexão, que tem o nome do desktop e o final "DL_ATACADEZ.nomeDeUsuário". No meu caso é a conexão "DESKTOP-G7KVMJN.DL_ATACADEZ.sa".

Essa é a conexão que acabamos de criar ao adicionarmos o componente de Assistente de Destino. De agora em diante, sempre que nos conectarmos ao Data Lake, podemos usar essa conexão que criamos, por isso é bom trocarmos o nome dela.

Clicando sobre o nome da conexão, aparece a aba "Propriedades" na metade inferior da coluna direita. Entre as propriedades temos o "Name" (Nome). Selecionamos o nome atual e apagamos. No lugar, escrevemos "Conexão com o Data Lake" e pressionamos "Enter", renomeando essa conexão. Agora temos duas conexões que nossos fluxos estão trabalhando: a "Conexão com o arquivo EMPRESA CSS" e a "Conexão com o Data Lake".

Voltando para a programação do "Gravação na tabela EMPRESA do Data Lake", clicaremos duas vezes nesse componente. Assim, abrimos a janela "*OLE DB Destination Editor*" no centro da tela, que abre na aba "Gerenciador de conexões".

No campo "Gerenciador de conexões OLE DB", a "Conexão com o Data Lake" está selecionada. Abaixo desse campo temos o "Modo de acesso a dados", onde podemos escolher que tipo de gravação queremos utilizar em um menu suspenso. Usaremos a "Tabela ou exibição - carregamento rápido".

Em seguida, temos o campo "Nome da tabela ou exibição", com as opções em outro menu suspenso. Clicaremos nesse menu e escolheremos a opção "\[dbo\].\[tbl_empresa\]", que queremos atualizar.

Feito isso, na lateral esquerda da janela temos uma coluna com as abas dessa janela. Abaixo do "Gerenciador de Conexões", que está selecionado, temos a aba "Mapeamento". Clicando nela, a janela atualiza e exibe os campos de dados na tabela de origem, em uma caixa na parte superior esquerda, e os campos de dados do destino, em uma caixa na parte superior direita.

Os campos com os mesmo nomes são associados de forma automática, através de setas pretas que ligam a caixa da esquerda com a da direita. Precisamos associar os demais campos.

O campo "LOJA" está associado ao "cod_loja", que é seu identificador natural. Então selecionaremos "LOJA" na caixa da esquerda e arrastaremos até o "cod_loja" na caixa da direita. Faremos isso com os demais campos.

> LOJA → cod_loja
> 
> NOME_LOJA → desc_loja
> 
> EMPRESA → desc_empresa
> 
> CNPJ → cod_empresa
> 
> TAMANHO → tamanho_loja
> 
> ARQUIVO_ORIGEM → arquivo_origem
> 
> DATA_CARGA → data_carga

Uma vez que todas as colunas foram associadas, clicamos no botão "OK", no canto inferior direito da janela. Assim fechamos a janela e voltamos para o Fluxo de Dados. Reparamos que, apesar de ter feito todas as associações, ainda temos o ícone de problema de conexão. Ao deixarmos o mouse sobre o ícone de "X", recebemos a seguinte mensagem:

> *Columns "ARQUIVO_ORIGEM" and "arquivo_origem" cannot covert between unicode and non-unicode string …* (As colunas "ARQUIVO_ORIGEM" e "arquivo_origem" não podem converter unicode em non-unicode string).

A coluna "ARQUIVO_ORIGEM" está vindo da coluna que criamos ao adicionarmos automaticamente o nome do arquivo. Já a coluna "arquivo_origem" é a coluna do campo destino, ou seja, o Data Lake. Ela possuem tipos diferentes: a coluna do SQL Server é do tipo non_unicode string e a coluna de dados que estamos enviando é do tipo unicode.

No vídeo anterior eu falei brevemente sobre os tipos das colunas. Se clicarmos duas vezes em "Acrescentar colunas de metadados", abrimos a janela "*Derived Columns Transformation Editor*", onde podemos observar o tipo da coluna "ARQUIVO_ORIGEM", na metade inferior da janela.

Na coluna "Data Type", observamos que o tipo de "ARQUIVO_ORIGEM" é o \[DT_WSTR\], que é a cadeia de caracteres Unicode. Esse tipo é incompatível com o VARCHAR, que é o campo da coluna "arquivo_origem" no Data Lake. Sendo assim, precisamos converter os dados do tipo Unicode, da origem, para non-unicode, que é o campo destino.

> **Observação:** Todo dado gravado no destino pelo Integration Service, principalmente quando esse destino for uma tabela de banco de dados, os tipos de dados precisam ser coincidentes. Por exemplo, não podemos tentar salvar um dado Inteiro em um campo String e, se necessário, precisamos fazer conversões.

Quando trabalhamos com Integration Service, fazemos a conexão e descobrimos se algum dado não está coincidindo. Caso não coincida, fazemos a conversão de cada dado que precise de um novo tipo, até todos os dados estarem no tipo correto.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Conversão de dados (interessante)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Anteriormente, descobrimos que precisamos converter algumas colunas para o mesmo tipo de dado que existe na tabela do SQL Server. Por isso, agora vamos falar sobre</span> **conversão de dados**<span style="color: #c0c0c0;">. Para isso, vamos voltar ao Visual Studio.</span></span>

Nosso problema é que algumas colunas estão com um tipo de dado diferente da coluna correspondente no SQL Server.

Conseguimos visualizar esse problema através da mensagem que é exibida quando colocamos o mouse em cima do ícone de X em vermelho no componente de "Gravação na tabela EMPRESA do Data Lake":

> Columns "ARQUIVO_ORIGEM" and "arquivo_origem" cannot convert between unicode and non-unicode string…

Por enquanto, esse problema está na coluna `ARQUIVO_ORIGEM` cujo tipo de dado original é *unicode* e o tipo de dado final deve ser *non-unicode*. São dois tipos de *string* diferente.

Podemos fazer essa conversão de várias maneiras. A maneira mais usual é através do componente chamado "Conversão de Dados". Por isso, vamos arrastá-lo da caixa de ferramenta para o fluxo de dados.

Vamos apagar a conexão entre "Acrescentar colunas de metadados" e "Gravação na tabela EMPRESA do Data Lake". Para isso, basta clicar sobre a conexão e apertar a tecla "Delete". No meio desses componentes, vamos adicionar a "Conversão de Dados". Agora, vamos religar esse novo fluxo com a seta azul.

Em seguida, vamos renomear "Conversão de Dados" para "Conversão de colunas para EMPRESA". Você pode colocar qualquer nome desde que consiga compreender rapidamente o que a tarefa faz.

Vamos dar um duplo clique em "Conversão de colunas para EMPRESA". Nessa janela de edição, vamos colocar qual a `Input Column`, ou seja, qual a coluna que queremos converter. Nesse caso, selecionamos a coluna `ARQUIVO_ORIGEM` do *dropdown*.

Note que ela já é do tipo *unicode* que é do tipo \[DT_WSTR\], como foi preenchido por padrão em `Data Type`. Como vamos criar uma nova coluna com outro nome, vamos renomeá-la como `ARQUIVO_ORIGEM_CONVERTIDA` na coluna `Output Alias`.

Agora, podemos mudar tipo de dado. Temos vários tipos no *dropdown* de `Data Type`. A coluna deve ser convertida no tipo cadeia de caracteres *non-unicode*, pois é o tipo que está no SQL Server. Por isso, vamos selecionar `cadeia de caracteres [DT_STR]`.

| Input Column | Output Alias | Data Type | Length | Precision | Scale | Code Page |
| --- | --- | --- | --- | --- | --- | --- |
| ARQUIVO_ORIGEM | ARQUIVO_ORIGEM_CONVERTIDA | cadeia de caracteres \[DT_STR\] | 11  | \-  | \-  | 1252 (AINSI - Latino I) |

Após clicar em "OK", vamos voltar para a tarefa que faz a gravação dos dados na tabela EMPRESA dando um duplo clique. Note que em "Mapeamentos", vamos ter uma nova coluna chamada `ARQUIVO_ORIGEM_CONVERTIDA`.

Por isso, vamos apagar a associação entre `ARQUIVO_ORIGEM` vinda do fluxo e `arquivo_origem` do SQL Server com o "Delete". Agora, vamos ligar `ARQUIVO_ORIGEM_CONVERTIDA` à `arquivo_origem`, arrastando essa coluna de entrada até a coluna de destino.

Vamos gravar dentro do SQL Server a partir da coluna `ARQUIVO_ORIGEM_CONVERTIDA`, porque já é do tipo *non-unicode*. Em seguida, podemos clicar em "OK".

Note que o ícone que estava com o X em vermelho passou a mostrar uma exclamação em amarelo. É um bom sinal, mas não significa que está tudo certo. Precisamos rodar o processo para descobrir isso. Se passamos o mouse em cima dessa exclamação, aparece o aviso em inglês que talvez ocorra um dado truncado.

> Truncation may occur due to inserting data from data flow column "CNPJ" with a length of 50 to database…

Por exemplo, ele acha que o tamanho dessa coluna "CNPJ" é de 50 caracteres. Se for mais do que temos no SQL Server, pode dar problema. Se for menos, não. É um alerta que vamos ignorar, por enquanto. Podemos salvar as alterações.

### Gravação dos dados em tabela vazia

O que vamos fazer agora? Vamos clicar em "Iniciar" na barra de ferramentas. Ao fazer isso, é exibida uma mensagem de sucesso.

> Execução do pacote concluída com êxito

Se observamos o resultado desse fluxo de dados, note que ele leu a conexão, pois foram lidas 12 linhas do CSV. Depois, acrescentou as colunas de metadados, passando mais 12 linhas para o próximo processo. Também leu 12 linhas convertidas e as gravou no banco.

Aparentemente, deu tudo certo. Vamos verificar?

No SQL Server Management Studio, vamos clicar na tabela "tbl_empresa" e escolher a opção "Selecionar 1000 linhas superiores" novamente. Note que foi gravado no Data Warehouse:

| #   | cod_loja | desc_loja | desc_empresa | cod_empresa | tamanho_loja | arquivo_origem | data_carga |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | LOJA 1 | ATACADEZ | 12312312312312 | 15000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 2   | 10  | LOJA 10 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 3   | 11  | LOJA 11 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 4   | 12  | LOJA 12 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 5   | 2   | LOJA 2 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 6   | 3   | LOJA 3 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 7   | 4   | LOJA 4 | ATACADEZ | 12312312312312 | 4000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 8   | 5   | LOJA 5 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 9   | 6   | LOJA 6 | ATACADEZ | 12312312312312 | 18000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 10  | 7   | LOJA 7 | ATACADEZ | 12312312312312 | 1400 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 11  | 8   | LOJA 8 | ATACADEZ | 12312312312312 | 5000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |
| 12  | 9   | LOJA 9 | ATACADEZ | 12312312312312 | 4000 | EMPRESA.CSV | 2023-07-15 23:22:09:490 |

Inclusive, foi gravado com a data de carga especificada. Deu certo! Nosso fluxo terminou. Podemos parar a depuração ("Shift + F5") no Visual Studio.

Mas, tem um detalhe. Deu certo porque incluímos dados na tabela vazia. Vamos conferir o que acontece se executamos novamente esse processo, clicando em "Iniciar".

> Execução do pacote concluída com erro.

Dá um erro justamente no momento da gravação na tabela. Qual foi esse erro? Se quisermos saber o erro, devemos parar o processo e clicar em "Resultados da Execução". Com isso, teremos todos os passos que o *integration service* fez até o final.

Enquanto os passos não vierem acompanhados de um símbolo vermelho, é porque deram certo. Aparece um X vermelho justamente na gravação na tabela EMPRESA do Data Lake, que é o último processo.

Qual foi o erro? Às vezes não conseguimos ver o erro inteiro. Para resolver isso, podemos selecionar o erro, dar um "Ctrl + C" e colar em um bloco de notas para poder ler melhor.

> \[Gravação na tabela EMPRESA do Data Lake \[53\]\] Erro: Código de Erro SSIS DTS_E_OLEDBERROR.Erro OLE DB. Código de erro: 0x80004005. Um registro OLE DB está disponível. Origem: "Microsoft OLE DB Driver for SQL Server" Resultado: 0x80004005 Descrição: "A instrução foi finalizada". Um registro OLE DB está disponível. Origem "Microsoft OLE DB Driver for SQL Server" Resultado 0x80004005 Descrição: "Violação da restrição PRIMARAY_KEY 'PK_\_tbl_\_empr_\_9E16B10C44FE920E'. Não é possível inserir a chave duplicada no objeto 'dbo.tbl_empresa'. O valor de chave duplicada é (1).".

O erro foi a violação da restrição de *primary key* (chave primária). Isso porque a tabela EMPRESA no Data Lake tem uma chave primária `cod_loja`. Lembre-se que aprendemos em cursos anteriores sobre SQL Server que uma tabela com chave primária não pode ter dados repetidos nesse campo.

O que aconteceu foi que a tabela já tinha 12 lojas e tentamos inserir novamente essas lojas, afinal, lemos o mesmo CSV. As 12 linhas que foram novamente enviadas para a tabela foram recusadas por violação da restrição da chave primária.

Isso significa que esse fluxo funciona bem apenas se a tabela está vazia. Até poderíamos criar um processo para apagar a tabela e ler novamente, mas isso não faz sentido.

Seria interessante que pudéssemos gerenciar uma gravação mais esperta. Ou seja, se o dado não existe, pode incluir. Se existe, deve-se substituir.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Tratando registros existentes</span>

Anteriormente, descobrimos um problema ao atualizar a tabela se ela não estiver vazia. Ou seja, o processo que construímos funciona apenas na tabela vazia.

Não queremos construir um passo para apagar a tabela. Mas, como conseguimos incluir dados novos e alterar dados já existentes? Nesse vídeo, vamos discutir sobre o **tratamento de registros existentes**.

No Visual Studio, devemos gerenciar a gravação dos dados de uma tabela onde queiramos fazer a inclusão ou alteração.

Só que o componente que usamos para gravação só efetua inclusão. Para usá-lo, seríamos obrigados a apagar os dados da tabela. Porém, podemos usar outro componente para gravar os dados na tabela.

Vamos retirar o componente "Gravação na tabela EMPRESA do Data Lake" do fluxo ao selecioná-lo e apertar a tecla "Delete". Vamos arrastar o componente chamado "**Dimensão de Alteração Lenta**" até o fluxo e renomeá-lo para "Gravação dos dados de EMPRESA no Data Lake".

Em seguida, vamos ligar o componente de conversão ao componente de gravação por meio da seta azul.

Ao clicar duas vezes nesse novo componente, abre-se um *wizard* onde vamos configurar esse componente passo a passo. Podemos apertar "Next" (Próximo) para sair da página de boas-vindas.

Primeiro, precisamos saber qual a conexão que vamos utilizar. No campo "*Connection manager*", já temos selecionada a "Conexão com o Data Lake", pois é a única conexão que temos com o SQL Server.

Em "*Table or view*", definimos qual tabela queremos atualizar. Nesse caso, é a tabela "tbl_empresa". Por isso, basta selecioná-la do *dropdown*.

Ao fazer isso, temos as colunas do dado que chega da conversão (*input columns*) e as colunas da tabela (*dimensions columns*).

Para o `arquivo_origem`, vamos ter que usar o `ARQUIVO_ORIGEM_CONVERTIDA`. Para `cod_empresa`, vamos usar o `CNPJ`. Para `cod_loja`, é o campo `LOJA`. Para `data_carga`, vamos manter `DATA_CARGA`. Em `desc_empresa`, vamos colocar a `EMPRESA`. Enquanto `desc_loja` vai ser `NOME_LOJA` e `tamanho_loja` com `TAMANHO`.

Note que ao fazer essa ligação, já aparece uma mensagem de erro e, por isso, o botão "Next" fica desabilitado.

> Cannot map columns of different types.

A coluna `TAMANHO` é do tipo *string* e a coluna `tamanho_loja` na tabela é do tipo *double*.

Precisamos fazer uma conversão da coluna `TAMANHO`. Essa incompatibilidade de tipos não foi problema no outro componente, mas nesse sim. Antes de continuar, vamos apertar "Cancel" para cancelar a configuração.

Vamos clicar em "Conversão de colunas para EMPRESA" para converter mais uma coluna. Em "*Input Column*", vamos pegar a coluna `TAMANHO` para criar outra coluna chamada `TAMANHO_CONVERTIDO`. O tipo que usaremos será "flutuante de precisão dupla \[DT_R8\]".

| Input Column | Output Alias | Data Type | Length | Precision | Scale | Code Page |
| --- | --- | --- | --- | --- | --- | --- |
| TAMANHO | TAMANHO_CONVERTIDO | flutuante de precisão dupla \[DT_R8\] | \-  | \-  | \-  | \-  |

Nesse ponto, convertemos a coluna `TAMANHO` que vem do fluxo do tipo *string* em uma coluna chamada `TAMANHO_CONVERTIDO` que é do tipo flutuante de precisão dupla, ou seja, é um número *double* como configurada na tabela no SQL Server.

Ao apertar "OK", podemos voltar a clicar em "Gravação dos dados de EMPRESA no Data Lake" para voltar a abrir a configuração da dimensão de alteração lenta.

Podemos dar "Next" e novamente configurar a tabela "tbl_empresa" e seus respectivos campos.

Agora que colocamos o `tamanho_loja` como `TAMANHO_CONVERTIDO`, não aparece nenhum erro. Porém, o botão de "Next" ainda não está habilitado. Por que? Porque precisamos definir quem é a chave primária da tabela no SQL Server.

Nesse caso, o `cod_loja`. No "Key Type" de `cod_loja`, vamos informar que essa coluna é a `Business key`.

| Input Columns | Dimension Columns | Key Type |
| --- | --- | --- |
| ARQUIVO_ORIGEM_CONVERTIDA | arquivo_origem | Not a key column |
| CNPJ | cod_empresa | Not a key column |
| LOJA | cod_loja | Business key |
| DATA_CARGA | data_carga | Not a key column |
| EMPRESA | desc_empresa | Not a key column |
| NOME_LOJA | desc_loja | Not a key column |
| TAMANHO_CONVERTIDO | tamanho_loja | Not a key column |

Feito isso, o botão "Next" é habilidade. Podemos apertá-lo para prosseguir com a configuração.

Em seguida, devemos informar o que vamos fazer com os outros atributos, caso encontremos um registro existente usando a *business key* como critério.

Temos alguns tipos em "Change Type". Por exemplo, podemos escolher a coluna como um:

- **atributo fixo (*fixed attribute*)**: valor da coluna da tabela não muda, ainda que venha diferente;
- **atributo de alteração (*changing attribute*)**: valor da coluna é modificado;
- **atributo histórico (*historical attribute*)**: cria registros novos com as alterações daquele atributo.

Sempre vamos utilizar o *changing attribute*, pois queremos substituir registros existentes. Devemos especificar esse tipo para todos os campos que não são *business key*.

Uma maneira fácil de fazer isso é clicar uma vez nas linhas de "Dimensions columns". Assim, todas as colunas faltantes são adicionadas automaticamente. Em seguida, basta mudar o tipo de cada coluna para *changing attribute*.

| Dimension Columns | Change Type |
| --- | --- |
| arquivo_origem | Changing attribute |
| cod_empresa | Changing attribute |
| data_carga | Changing attribute |
| desc_empresa | Changing attribute |
| desc_loja | Changing attribute |
| tamanho_loja | Changing attribute |

Você vai perceber que vamos repetir esse procedimento várias vezes para as outras dimensões.

Vamos dar "Next" três vezes seguidas e, por fim, apertar "Finish" para terminar a configuração.

Com isso, foram criados três componentes novos: "Inserir destino" para nova saída, "Comando OLE DB" para saída de atualizações de membro inferido e "Comando OLE DB 1" para saída de atualizações de atributo de alteração.

Não temos nenhuma sinalização de erro, somente o "Inserir destino" tem uma sinalização de alerta.

> Caso tenha algum erro, confira se o mapeamento está correto. Lembre-se que se tiver que alterar o mapeamento, você terá que adicionar o tipo desse atributo alterado novamente.

Para testar, vamos voltar ao SQL Server Management Studio. Como a tabela "tbl_empresas" tem dados, vamos escrever o seguinte comando no *script*:

```sql
DELETE FROM tbl_empresa
```

> (12 linhas afetadas)

Assim, apagamos os registros da tabela. Em seguida, vamos executar o processo no Visual Studio, clicando em "Iniciar".

> Execução do pacote concluída com êxito.

Todo o processo foi executado com sucesso. Se selecionamos o comando `SELECT` no Management Studio, vamos ter os dados esperados no resultado.

| #   | cod_loja | desc_loja | desc_empresa | cod_empresa | tamanho_loja | arquivo_origem | data_carga |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | LOJA 1 | ATACADEZ | 12312312312312 | 15000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 2   | 10  | LOJA 10 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 3   | 11  | LOJA 11 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 4   | 12  | LOJA 12 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 5   | 2   | LOJA 2 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 6   | 3   | LOJA 3 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 7   | 4   | LOJA 4 | ATACADEZ | 12312312312312 | 4000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 8   | 5   | LOJA 5 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 9   | 6   | LOJA 6 | ATACADEZ | 12312312312312 | 18000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 10  | 7   | LOJA 7 | ATACADEZ | 12312312312312 | 1400 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 11  | 8   | LOJA 8 | ATACADEZ | 12312312312312 | 5000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |
| 12  | 9   | LOJA 9 | ATACADEZ | 12312312312312 | 4000 | EMPRESA.CSV | 2023-07-15 23:42:22:520 |

Perfeito! Podemos para a execução no Visual Studio para poder rodar o mesmo arquivo CSV novamente.

> Execução do pacote concluída com êxito.

Agora, a execução deu certo mesmo tendo registros existentes na tabela. Se conferir o conteúdo da tabela no Management Studio, o conteúdo continua igual.

Vamos fazer um terceiro teste. Para isso, vamos abrir o arquivo `EMPRESA.CSV` em um bloco de notas.

Vamos alterar o tamanho da loja 1 para `5000` metros quadrados, ao invés de `15000`. Também vamos acrescentar uma loja `13` de `1000` metros quadrados.

```yaml
LOJA; NOME_LOJA; EMPRESA; CNPJ; TAMANHO
1;LOJA 01;Atacadez;12312312312312;5000
2; LOJA 02; atacadez; 12312312312312;12000
3; LOJA 03; ATACADEZ; 12312312312312; 3000
4; LOJA 04; atacadez; 12312312312312;4000
5; LOJA 05;Atacadez;12312312312312;6000
6; LOJA 06; atacadez;12312312312312;18000
7; LOJA 07; Atacadez; 12312312312312;14000
8; LOJA 08; atacadez; 12312312312312;5000
9; LOJA 09; Atacadez; 12312312312312;4000
10; LOJA 10; ATACADEZ; 12312312312312; 3000
11; LOJA 11; atacadez;12312312312312;6000
12; LOJA 12; ATACADEZ; 12312312312312;12000
13; LOJA 13; Atacadez; 12312312312312;10000
```

Com isso, alteramos um dado e incluímos um novo dado. Após salvar, vamos conferir o que vai acontecer no fluxo de carga.

Se somente apertamos para fazer a consulta da tabela no Management Studio, a loja 1 ainda vai estar com `15000` e não uma temos loja 13. Agora, vamos executar novamente o fluxo no Visual Studio.

> Execução do pacote concluída com êxito.

Após fazer a execução, vamos observar o resultado no Data Lake no Management Studio.

| #   | cod_loja | desc_loja | desc_empresa | cod_empresa | tamanho_loja | arquivo_origem | data_carga |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | LOJA 1 | ATACADEZ | 12312312312312 | 5000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 2   | 10  | LOJA 10 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 3   | 11  | LOJA 11 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 4   | 12  | LOJA 12 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 5   | 13  | LOJA 13 | ATACADEZ | 12312312312312 | 10000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 6   | 2   | LOJA 2 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 7   | 3   | LOJA 3 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 8   | 4   | LOJA 4 | ATACADEZ | 12312312312312 | 4000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 9   | 5   | LOJA 5 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 10  | 6   | LOJA 6 | ATACADEZ | 12312312312312 | 18000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 11  | 7   | LOJA 7 | ATACADEZ | 12312312312312 | 1400 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 12  | 8   | LOJA 8 | ATACADEZ | 12312312312312 | 5000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |
| 13  | 9   | LOJA 9 | ATACADEZ | 12312312312312 | 4000 | EMPRESA.CSV | 2023-07-15 23:44:17:837 |

Após executar o comando `SELECT`, a loja 1 passa a ter o tamanho de `5000`. Também aparece a loja 13 na quinta linha.

## Conclusão

Dessa forma, o nosso fluxo de atualização de empresa está finalizado. Tivemos que acrescentar a coluna de metadados, converter as colunas de tamanho e nome do arquivo origem e tivemos que usar a dimensão de alteração lenta para gravar o dado dentro da tabela do Data Lake.

Chegamos a versão final do processo de carga de empresa.

&nbsp;

&nbsp;

# Carga de dados de clientes (leitura das fontes)

Neste momento, temos todo o fluxo de leitura do CSV da empresa para a tabela de empresas no Data Lake pelo Integration Service. Agora, trabalharemos com um fluxo de dados para popular a tabela de clientes do Data Lake.

Para isso, começaremos fazendo a leitura das fontes de dados.

Voltamos ao Visual Studio, onde está o fluxo de leitura de dados para empresas, que já está fechado. Para fazer a parte de clientes, clicaremos na aba "Fluxo de Controle", na parte superior da interface.

Surgirá uma tela com um único fluxo de controle, o "Carga de Empresas". No menu lateral esquerdo, adicionaremos uma nova tarefa clicando em "Tarefa Fluxo de Dados", segurando o botão esquerdo do mouse e arrastando o ícone para o campo central da interface. Renomearemos a tarefa para "Carga de Clientes".

Daremos um duplo clique com o mouse sobre "Carga de Clientes" e, assim, entraremos na tela de fluxo de dados dessa carga. No momento, ela está vazia, pois acabamos de criar esse componente.

Se expandirmos a lista ao lado do título "Tarefa Fluxo de Dados", clicando em "Carga de Empresas", teremos acesso ao fluxo das empresas. Se voltarmos à aba "Fluxo de Controle" e dermos um duplo clique sobre "Carga de Empresas", teremos acesso ao mesmo fluxo.

Já se clicarmos em "Fluxo de Controle" e dermos um duplo clique em "Carga de Clientes", voltaremos à tela vazia, onde construiremos um fluxo agora.

Começaremos adicionando uma origem ao arquivo de Excel. No menu lateral esquerdo, clicaremos e arrastaremos o "Assistente de Origem" para o meio da interface. Com isso, uma caixa de diálogo será aberta para configurarmos uma conexão com o arquivo Excel.

Em "Selecione o tipo de origem", escolheremos "Excel". Em "Selecione gerenciadores de conexões", daremos um duplo clique em "Nova". Outra janela se abrirá e poderemos selecionar o caminho do arquivo clicando no botão "Procurar…".

Encontraremos o arquivo "CADASTRO DE CLIENTES.xlsx" em "Disco Local (C:) > Fontes > DATA > DIMENSOES > CLIENTE > IN". Selecionaremos esse arquivo e, em seguida, informaremos a versão do Excel no próximo campo. Deixaremos marcado o campo "A primeira linha possui nomes de colunas" e clicaremos em "OK".

Ao fazer isso, visualizaremos uma nova conexão no campo inferior da tela, em "Gerenciadores de Conexões", onde aparecerá "Gerenciador de Conexões do Excel". Para editarmos esse nome, clicaremos sobre a conexão e, à direita da interface, encontraremos o campo "Nome" em "Propriedades".

Apagaremos o que está escrito nesse campo e escreveremos "Conexão com o arquivo CADASTRO DE CLIENTES.XLSX". Ao pressionar a tecla "Enter", perceberemos que o nome foi alterado no painel inferior.

Em seguida, daremos um duplo clique na conexão "Origem do Excel" e uma nova janela abrirá indicando a conexão selecionada ("Conexão com o arquivo CADASTRO DE CLIENTES.XLSX").

Logo abaixo, no campo "*Name of the Excel sheet*", há uma lista expansível em que encontraremos a tabela "CLIENTES$". Se observarmos o arquivo "CADASTRO DE CLIENTES.xlsx", é o mesmo nome da planilha, indicado no rodapé do arquivo ("CLIENTES").

De volta ao Visual Studio, se clicarmos no menu "Colunas" da caixa de diálogo aberta, observaremos que o arquivo mostra todas as colunas nomeadas, além de três colunas chamadas "F6", "F7" e "F8".

Essas três colunas estão vazias, mas foram interpretadas como colunas de dados na planilha. Por isso, desmarcaremos as caixas ao lado do nome dessas três colunas na lista. Com isso, ficamos apenas com as colunas preenchidas com dados. Pressionaremos o botão "OK".

No mesmo fluxo de dados, selecionaremos no menu lateral esquerdo um novo "Assistente de Origem", arrastando-o até o centro da interface, responsável por ler os dados do arquivo CSV. Isso abrirá uma nova janela, onde selecionaremos "Flat File" no campo "Selecione o tipo de origem".

### Leitura das Regiões dos Estados

Embora haja a opção "Conexão com o arquivo EMPRESA.CSV", criaremos uma nova conexão com um duplo clique na opção "Nova", em "Selecione gerenciadores de conexões".

Na nova janela que se abrirá, renomearemos o primeiro campo ("Nome do gerenciador de conexões") para "Conexão com arquivo REGIOES DOS ESTADOS CSV". Repetiremos esse mesmo texto no campo "Descrição".

Clicaremos em "Procurar…" para encontrar o arquivo e mudaremos o tipo de arquivo na parte de baixo da janela para "Arquivos CSV (.csv)", para que ele apareça na lista. Ele está localizado na pasta "Disco local (C:) > Fontes > DATA > DIMENSOES > CLIENTE > IN", com o nome "REGIOES DOS ESTADOS.csv".

Não alteraremos o restante das configurações (como Localidade e Página de código). Clicaremos em seguida em "Coluna", no menu lateral esquerdo e observaremos as colunas do arquivo. Todas as colunas estão corretas, então podemos confirmar clicando em "OK".

Agora, temos duas conexões na aba "Fluxo de Dados": "Origem do Excel" e "Origem de Arquivos Simples". Para renomeá-las, clicaremos sobre o nome de cada uma. Substituiremos o "Origem do Excel" por "Conexão arquivo CADASTRO DE CLIENTES XLSX" e "Origem de Arquivos Simples" passará a se chamar "Conexão arquivo REGIOES DOS ESTADOS CSV".

Ambas as conexões ficarão posicionadas lado a lado. No painel Gerenciadores de Conexões, encontraremos quatro conexões que podem ser reutilizadas, se necessário:

- Conexão com arquivo REGIOES DOS ESTADOS CSV;
- Conexão com o arquivo CADASTRO DE CLIENTES XLSX;
- Conexão com o arquivo EMPRESA CSV;
- Conexão com o Data Lake.

Para conferirmos se o dado é puxado de forma correta, podemos adicionar dois componentes de Coluna Derivada, ambos logo abaixo de cada uma das conexões existentes.

Em seguida, clicaremos com o botão esquerdo do mouse sobre as setas azuis na base dos componentes de conexão e os arrastaremos para uma das colunas derivadas. Assim, cada componente de conexão ficará conectado a um componente de Coluna Derivada.

Clicaremos com o botão direito do mouse sobre cada uma das setas azuis e selecionaremos "Habilitar Visualizador de Dados". Isso gerará um ícone em forma de lupa ao lado ou sobre a linha azul.

Salvaremos as alterações clicando no ícone "Salvar Tudo", no menu superior da tela. Com o foco dentro do processo que acabamos de editar, clicaremos no botão "Iniciar", no topo da interface.

Depois disso, obteremos uma visualização da planilha com os e as clientes. Podemos fechar essa janela. Em seguida, o programa exibirá o arquivo do CSV.

Com isso, concluímos a conexão com as fontes de dados.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Extraindo cidade e estado</span>

No vídeo anterior, extraímos os dados dos cadastros de clientes da planilha de Excel e os dados das regiões e dos estados do CSV.

No entanto, essas duas fontes têm informações importantes que devem ser gravadas dentro da tabela do Data Lake. Para fazer isso, precisamos juntar essas duas informações de alguma forma. Acontece que para uni-las, precisamos de uma **coluna em comum**.

Essa coluna não existe ainda. Precisaremos fazer uma transformação em um dos campos para obtê-la e poder juntar os dois dados. Faremos então a **extração da cidade e do estado**.

## Entendendo o problema

Com a tela dividida em duas partes temos, do lado esquerdo da tela, a planilha de Excel "CADASTRO DE CLIENTES" e, do lado direito, os dados do arquivo "REGIOES DOS ESTADOS.csv".

Se observarmos as duas, perceberemos que não existe uma coluna em comum entre elas, visto que o arquivo "REGIOES DOS ESTADOS.csv" tem as colunas:

- Estado Abreviação
- Estado
- Região

Já a tabela CADASTRO DE CLIENTES tem as seguintes colunas:

- Endereço
- Segmento
- Faturamento

No entanto, se observarmos o arquivo CSV, temos uma coluna com o código de cada estado, ou seja, o nome do estado representado por duas letras. Na coluna "Endereço" do cadastro de clientes, essa mesma representação aparece. Precisamos extrair o estado e o nome da cidade que estão contidos no campo "Endereço".

## Encontrando a solução

Tomemos os endereços a seguir como exemplo:

> Caminho Foz do Jordão, 25, - Brasília - DF

Precisamos criar uma nova coluna contendo o nome da cidade e do estado e, a partir dela, fazer um novo procedimento para extrair a cidade e o estado separadamente. É com a informação do estado que poderemos unir as duas tabelas.

### Unindo as duas tabelas

Voltando ao Visual Studio, apagaremos o segundo procedimento de Coluna Derivada, ligado à "Conexão Arquivo REGIOES DOS ESTADOS CSV". Renomearemos procedimento de Coluna Derivada que restou (o ligado à "Conexão arquivo CADASTRO DE CLIENTES XLSX") para "Extração da CIDADE ESTADO do ENDEREÇO".

Dando um duplo clique nele, criaremos uma nova coluna chamada "CIDADE_ESTADO", logo abaixo de "Derived Column Name". No campo "Expression", escreveremos a expressão que corresponde a uma fórmula.

À direita da interface, temos uma série de ícones de pastas. Podemos expandi-las para observar diversas funções, dentre elas:

- Funções Matemáticas
- Funções de Cadeia de Caracteres
- Funções de Data e Hora
- Funções de Nulo
- Conversão de Tipos
- Operadores

A expressão é uma fórmula que extrairá o dado que desejamos, no caso, a cidade e o estado.

Seguindo as pastas "Disco Local (C:) > Fontes > ETL > scripts", encontraremos diversos scripts que usaremos ao longo do curso. Um deles é o "Funções de Extração de Cidade e Estado.txt". Ao abrir o arquivo em um bloco de notas, observaremos as seguintes funções:

> SUBSTRING(\[ENDERECO\], FINDSTRING(\[ENDERECO\],"-",1) + 2, 50)

> SUBSTRING(\[CIDADE_ESTADO\], 1, FINDSTRING(\[CIDADE_ESTADO\],"-",1) - 2)

> SUBSTRING(\[CIDADE_ESTADO\], FINDSTRING(\[CIDADE_ESTADO\],"-",1) + 2, 50)

Copiaremos as três funções e as colaremos em outro bloco de notas vazio. Trabalharemos com a primeira expressão de transformação: SUBSTRING(\[ENDERECO\], FINDSTRING(\[ENDERECO\],"-",1) + 2, 50).

Sua função é extrair a cidade e o estado do campo "Endereço". Usemos o endereço abaixo, inserindo-o na fórmula:

> Caminho Foz do Jordão, 25, - Brasília - DF

O resultado será o seguinte:

> SUBSTRING("Caminho Foz do Jordão, 25, - Brasília - DF", FINDSTRING("Caminho Foz do Jordão, 25, - Brasília - DF","-",1) + 2, 50)

Analisando a fórmula `FINDSTRING(["Caminho Foz do Jordão, 25, - Brasília - DF"],"-",1)`, perceberemos que ela usa uma função chamada **FINDSTRING**, responsável por encontrar a posição de um determinado caractere dentro de uma `string`.

O caractere que buscamos é o "-" (traço). Pararemos na primeira ocorrência dessa `string`. Supondo que a letra "C" está na posição 1, se contarmos todo o texto antes do traço, teremos 27 posições.

Assim, o caractere desejado está na posição número 27. Isso significa que o resultado da função será igual a `27`, ou seja, toda a expressão `FINDSTRING(["Caminho Foz do Jordão, 25, - Brasília - DF"],"-",1)` se transformará no número `27` dentro do restante da fórmula:

> SUBSTRING("Caminho Foz do Jordão, 25, - Brasília - DF", 27 + 2, 50)

Realizando a soma de `27 + 2`, chegaremos a `29`.

> SUBSTRING("Caminho Foz do Jordão, 25, - Brasília - DF", 29, 50)

Isso resultará na aplicação da expressão `SUBSTRING` sobre o `string` "Caminho Foz do Jordão, 25, - Brasília - DF" a partir da posição 29 e buscaremos os próximos 50 caracteres.

É assim que funciona a expressão `SUBSTRING`: o primeiro parâmetro da função indica uma `string`, o segundo corresponde à posição que marca o início da busca, que acontecerá até a posição indicada no terceiro parâmetro da função.

Voltando ao nosso exemplo, buscaremos a posição 29 da `string` "Caminho Foz do Jordão, 25, - Brasília - DF", que corresponde à letra "B" da palavra "Brasília". A partir do "B", serão extraídos os próximos 50 caracteres, ou seja, o trecho "**Brasília - DF**". Assim, o resultado da função será o nome da cidade e do estado.

Já que essa função serve ao nosso objetivo, vamos copiá-la e colá-la no campo "Expression", da janela anteriormente aberta no Visual Studio.

> SUBSTRING(\[ENDERECO\], FINDSTRING(\[ENDERECO\],"-",1) + 2, 50)

Se colarmos uma função com algum erro, ela aparece na cor vermelha. Pressionaremos o botão "OK" para confirmar as alterações.

Agora, adicionaremos outro componente de Coluna Derivada e clicaremos e arrastaremos a seta azul do componente "Extração de CIDADE_ESTADO de ENDEREÇO" até a Coluna Derivada que acabamos de criar. Elas ficarão conectadas por um traço azul.

Ao clicarmos com o botão direito do mouse sobre esse traço, selecionaremos "Habilitar Visualizador de Dados". Salvaremos o projeto clicando no botão "Salvar Tudo" e, em seguida, clicaremos no botão "Iniciar" para executá-lo.

Isso gerará uma tabela com cinco colunas (CNPJ, CLIENTE, ENDEREÇO, SEGMENTO, FATURAMENTO). Ao fechá-la clicando no "X" ao lado do nome da tabela, observaremos os mesmos dados, mas após a aplicação da fórmula.

Surge, então, uma sexta coluna chamada "CIDADE_ESTADO", com o nome da cidade e do estado, extraídos da coluna ENDEREÇO. O próximo passo é separar a cidade do estado.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Separando cidade e estado</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Anteriormente, extraímos a cidade e o estado do campo "ENDEREÇO". Agora, precisamos separar os dois em campos diferentes.</span></span>

De volta ao Visual Studio, renomearemos o componente de Coluna Derivada para "Separação da CIDADE e ESTADO". Dando um duplo clique no componente, criaremos duas novas colunas: "CIDADE" e "ESTADO".

Encontraremos a fórmula necessária para extrair esses campos com as outras duas funções que retiramos do script:

> SUBSTRING(\[CIDADE_ESTADO\], 1, FINDSTRING(\[CIDADE_ESTADO\],"-",1) - 2)

> SUBSTRING(\[CIDADE_ESTADO\], FINDSTRING(\[CIDADE_ESTADO\],"-",1) + 2, 50)

## Extraindo a cidade

Neste momento, temos o campo **\[CIDADE_ESTADO\]** que é igual a uma `string` como essa: "**Brasília - DF**". Aplicaremos a primeira função, substituindo "\[CIDADE_ESTADO\]" pelo valor "Brasília - DF":

> SUBSTRING("Brasília - DF", 1, FINDSTRING("Brasília - DF","-",1) - 2)

Primeiro, nos debruçaremos sobre a função FINDSTRING.

> FINDSTRING("Brasília - DF","-",1)

Aqui, procuramos a primeira ocorrência do traço dentro da `string`. No caso de "Brasília - DF", o traço aparece na décima posição. Por isso, essa fórmula será igual a `10`.

> FINDSTRING("Brasília - DF","-",1) = 10

Podemos substituir a expressão na fórmula toda da seguinte maneira:

> SUBSTRING("Brasília - DF", 1, 10 - 2)

Fazendo a subtração de `10 - 2`, teremos o número `8` no último parâmetro da função.

> SUBSTRING("Brasília - DF", 1, 8)

Com isso, estamos localizando os caracteres no intervalo entre as posições 1 e 8 da `string`, ou seja, "**Brasília**".

## Extraindo o estado

Faremos o mesmo com a segunda expressão, substituindo o campo "\[CIDADE_ESTADO\]" por "Brasília - DF":

> SUBSTRING("Brasília - DF", FINDSTRING("Brasília - DF","-",1) + 2, 50)

Começaremos calculando a expressão FINDSTRING, pois já sabemos que encontraremos a primeira ocorrência do traço ("-") na posição de número 10.

> SUBSTRING("Brasília - DF", 10 + 2, 50)

Fazendo a soma de `10 + 2`, obteremos:

> SUBSTRING("Brasília - DF", 12, 50)

Assim, buscaremos o trecho da posição 12 à 50, que resulta em "**DF**".

Com essas duas funções, conseguimos extrair a cidade e o estado do campo CIDADE_ESTADO.

Abrindo novamente o script "Funções de Extração de Cidade e Estado.txt", copiaremos a segunda fórmula do arquivo, ou seja, a que extrai a cidade:

> SUBSTRING(\[CIDADE_ESTADO\], 1, FINDSTRING(\[CIDADE_ESTADO\],"-",1) - 2)

Voltando ao Visual Studio, vamos colá-la na célula da "Expression" que corresponde à coluna "Cidade". Em seguida, copiaremos a segunda fórmula do script:

> SUBSTRING(\[CIDADE_ESTADO\], FINDSTRING(\[CIDADE_ESTADO\],"-",1) + 2, 50)

E a colaremos na célula da "Expression" que corresponde à coluna "Estado". Clicaremos no botão "OK" para confirmar.

Arrastaremos desde o menu lateral esquerdo um novo componente de Coluna Derivada. Clicaremos e arrastaremos o traço azul do componente "Separação de CIDADE e ESTADO" até essa nova coluna derivada e, por fim, clicaremos com o botão direito sobre o traço para selecionar "Habilitar Visualizador de Dados".

Clicaremos no botão "Salvar Tudo" e no botão "Iniciar".

Visualizaremos o dado original e, ao fechar essa visualização, perceberemos que foi criada uma coluna "CIDADE_ESTADO". Fecharemos também essa visualização para encontrar, por fim, uma coluna chamada CIDADE e outra ESTADO, ambas com as informações correspondentes.

Com a coluna ESTADO, poderemos fazer a junção dessa tabela com o dado vindo do CSV. Clicaremos novamente em "Salvar Tudo".

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Juntando dados</span>

Temos uma coluna em comum entre as duas fontes de dados, pois a coluna "ESTADO" é representada por dois dígitos.

Vamos realizar a junção dos dados.

Voltando ao Visual Studio, na aba de fluxo de dados da Carga de Clientes, no qual vamos eliminar as três visualizações de dados, clicando com o botão direito nas três setas que conectam os retângulos do nosso esquema. Também apagaremos o retângulo "Coluna Derivada", clicando nele e pressionando "Delete".

Antes de aplicar a junção, o *Integration Service* exige que os dados provenientes de ambos os lados estejam ordenados usando a coluna que será o critério de junção como o critério de ordenação.

Sabemos que a coluna "ESTADO" e os dois dígitos serão utilizados como critério de junção. Portanto, no esquema atual, vamos classificar as colunas do lado esquerdo (dados provenientes da planilha de Excel) e do lado direito (dados provenientes às regiões do CSV).

Vamos acessar o explorador lateral esquerdo e clicar na opção "Classificar", arrastando-o duas vezes para o esquema. Um de seus retângulos será posicionado no lado direito e outro no esquerdo.

Renomearemos o esquerdo para "Classificar ESTADO do XLSX" e o direito para "Classificar Estado do CSV". Em seguida, arrastaremos a seta de sucesso do retângulo "Conexão arquivo REGIOES DOS ESTADOS CSV" para o retângulo "Classificar Estado do CSV" e a seta de sucesso do retângulo "Separação da CIDADE e ESTADO" de modo que se conecte a "Classificar ESTADO do XLSX".

Acessaremos o interior de "Classificar ESTADO do XLSX" realizando um clique duplo em seu retângulo. Na janela exibida, acessaremos a caixa de lista "Colunas de Entrada Disponíveis", na qual marcaremos a caixa de seleção correspondente à coluna que vamos utilizar para ordenar — neste caso, "ESTADO". Por fim, clicaremos em "OK", na parte inferior da janela.

Faremos o mesmo processo no retângulo "Classificar Estado do CSV", marcando a caixa de seleção correspondente à coluna "ESTADO ABREVIAÇÃO".

> **Atenção:** Apesar da nomenclatura induzir o erro, devemos nos atentar às diferenças entre as colunas disponíveis na caixa de lista "Colunas de Entrada Disponíveis" para o dado proveniente do CSV .
> 
> A opção "ESTADO" designa o descritor do estado, enquanto a opção que devemos selecionar — ou seja, aquela representada por dois caracteres — é "ESTADO ABREVIAÇÃO", sendo, portanto, esta que utilizaremos para integrar a coluna "ESTADO" proveniente do Excel.

Após ordenar os dois dados pela mesma coluna, acessaremos o explorador à esquerda, no qual buscaremos o componente "Junção de Mesclagem". Vamos arrastá-lo para o editor e renomear seu retângulo como "Junção das fontes por ESTADO".

Vamos arrastar a seta do retângulo "Classificar ESTADO do XLSX" de modo que se conecte ao retângulo recém-criado. Com isso, a janela "Seleção de Saída e Entrada" será exibida, na qual acessaremos a seção "Entrada" e selecionaremos "Entrada Esquerda da Junção de Mesclagem" para nomear os dados provenientes do lado esquerdo.

Por fim, clicaremos em "OK", na parte inferior da janela.

Por conseguinte, vamos arrastar a seta do retângulo "Classificar ESTADO do CSV" para que se conecte ao mesmo retângulo "Junção das fontes por ESTADO". Dessa forma, o outro dado será a junção pelo lado direito.

Vamos acessar o interior do retângulo "Junção das fontes por ESTADO", em cuja janela exibida teremos a ligação visual entre os campos "ESTADO", à esquerda e "ESTADO ABREVIAÇÃO", à direita, por meio de uma seta conectando ambos.

Vamos escolher em ambas as caixas de lista as colunas que serão enviadas ao final da junção:

- Na caixa à esquerda, selecionaremos:
    - "CNPJ" (identificador natural de CLIENTE);
    - "CLIENTE" (nome de CLIENTE);
    - "ENDEREÇO";
    - "SEGMENTO";
    - "FATURAMENTO" e
    - "CIDADE".
- Na caixa à direita, selecionaremos:
    - "ESTADO ABREVIAÇÃO";
    - "ESTADO" (descritor do estado) e
    - "REGIAO".

O campo "CIDADE_ESTADO", na caixa esquerda, foi utilizado somente como auxiliar para separar "ESTADO" e "CIDADE". Portanto, não o enviaremos.

Por fim, clicaremos em "OK", na parte inferior da janela. Para verificar o resultado, adicionaremos mais um componente "Coluna Derivada" ao esquema, conectando a ele a seta que parte do retângulo "Junção das fontes por ESTADO".

Clicaremos com o botão direito nesta seta e selecionaremos "Habilitar Visualizador de Dados" para disponibilizar essa visualização.

Finalmente, salvaremos o projeto, acessando a barra de ferramentas superior e clicando no ícone "Salvar tudo". Em seguida, executaremos o projeto clicando em "Iniciar", na mesma barra, para inspecionar a saída final.

Após a execução, veremos a guia "Visualizador de Dados da Carga de Clientes", na qual veremos uma tabela com as duas fontes de dados juntas. Nela, temos quase todas as informações necessárias para o Data Lake.

| CNPJ | CLIENTE | ENDERECO | SEGMENTO | FAT... | CIDADE | ESTADO ABREVIAÇÃO | ESTADO | REGIAO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 37... | Supermercados Delícia | Caminho Foz do Jordão, 2... | Supermercado Varejista | 28... | Brasilia | DF  | Distrito Federal | Centro Oeste |
| 77... | Buffet Encanto Festivo | R. Gonzaga Bastos, 300A -... | Buffet | 28... | Brasilia | DF  | Distrito Federal | Centro Oeste |
| 88... | Cafeteria Aroma & Sabor | Av. Lauro Sodré, 64-Brasí... | Cafeteria | 38... | Brasilia | DF  | Distrito Federal | Centro Oeste |
| 95... | Supermercados Econômico | R. Fernando Esquerdo, 62... | Supermercado Varejista | 40... | Brasilia | DF  | Distrito Federal | Centro Oeste |
| 87... | Supermercados MegaBarato | R. Dois de Fevereiro, 1321... | Supermercado Varejista | 32... | Brasilia | DF  | Distrito Federal | Centro Oeste |
| 75... | Supermercados Prático | Rua Wilde Lustoza, 16 - Br... | Supermercado Varejista | 32... | Brasilia | DF  | Distrito Federal | Centro Oeste |
| 84... | Padaria Pães & Cia | Av. Pasteur, 493 - Brasilia ... | Padaria | 35... | Brasilia | DF  | Distrito Federal | Centro Oeste |
| 47... | Escola Sonho Infantil | Estr. da Água Grande, 103... | Escola | 28... | Goiais | GO  | Goiais | Centro Oeste |
| 12... | Escola Criativa Kids | R. Riachuelo, 114-Goiais -... | Escola | 40... | Goiais | GO  | Goiais | Centro Oeste |
| 44... | Restaurante Saboroso | R. Dois de Fevereiro, 1354... | Restaurante | 35... | Goiais | GO  | Goiais | Centro Oeste |
| 80... | Supermercados BomPreço | R. Teodoro Sampaio, 467-... | Supermercado Varejista | 35... | Goiais | GO  | Goiais | Centro Oeste |
| 31... | Hotel Sabores do Mundo | R. São Luiz Gonzaga, 119-... | Hotel | 36... | Goiais | GO  | Goiais | Centro Oeste |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

A seguir, antes de gravar a tabela, realizaremos dois processos:

- Adicionaremos as colunas de metadados
- Converteremos preventivamente cada coluna para o formato exigido em cada tabela.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Conversão de dados preventivos</span>

Temos os dados da planilha de Excel e do CSV juntos.

Precisamos adicionar as colunas de metadados e de realizar a conversão preventiva dos dados, pois sabemos que no final do processo, quando escrevermos na tabela do Data Lake, os dados devem pertencer aos tipos existentes na tabela do SQL Server.

Voltando ao Visual Studio, utilizaremos o retângulo "Coluna Derivada" recém-adicionado na seção inferior do esquema para criar os metadados.

Vamos renomeá-la como "Acrescentar colunas no metadados" e realizar um clique duplo sobre seu retângulo para abrir a janela de edição de colunas derivadas.

Nesta última, acessaremos a seção inferior, que possui uma tabela vazia e preencheremos duas linhas com os seguintes campos, da esquerda para a direita:

**Linha 1:**

- Em "Derived Column Name" ("Nome da Coluna Derivada"), escreveremos o nome "ARQUIVO_ORIGEM";
- Em "Expression" ("Expressão"), escreveremos "CADASTRO DE CLIENTES XLSX e REGIÕES POR ESTADO CSV" entre aspas duplas para representar o nome da expressão constante;

**Linha 2:**

- Em "Derived Column Name", escreveremos o nome "DATA-CARGA";
- Em "Expression" ("Expressão"), escreveremos "GETDATE()";

Pressionaremos "OK" na seção inferior direita da janela para efetivar o processo.

Vamos acessar o explorador lateral e adicionar o componente "Conversão de Dados", clicando-o e arrastando-o para o editor. Vamos renomear este componente como "Conversão de colunas de CLIENTE".

Vamos uni-lo ao retângulo "Acrescentar colunas no metadados", levando o cursor até este último e estendendo sua seta de sucesso até que se conecte ao outro. Em seguida, faremos um clique duplo sobre "Conversão de colunas de CLIENTE".

Na janela de edição, faremos a conversão, verificando o tipo original de todas as colunas e se existe a necessidade de conversão. Na caixa de lista superior, clicaremos na caixa de seleção "CNPJ". Com isso, a tabela inferior exibirá os seus dados.

Na coluna "Data Type" ("Tipo do Dado"), veremos que se trata de um dado do tipo "flutuante de precisão dupla \[DT_R8\]". Entretanto, se acessarmos o explorador lateral do SQL Server e percorrermos o caminho de arquivos "dbo.tbl_cliente > Colunas", veremos que o CNPJ deve corresponder ao `cod_cliente`, do tipo `VARCHAR`.

Retornando ao Visual Studio, temos que clicar na linha "flutuante de precisão dupla \[DT_R8\]" e selecionar na lista suspensa a opção "cadeia de caracteres \[DT_STR\]". À esquerda deste, na coluna "Output Alias", apagaremos o conteúdo prévio e adicionaremos o nome "CNPJ_CONVERTIDO".

Voltando à caixa de lista superior, clicaremos na caixa de seleção "CLIENTE" e voltaremos à coluna inferior, que exibirá uma nova linha com os seus dados, abaixo da linha do CNPJ.

Veremos em "Data Type" que os dados chegam com o tipo "cadeia de caracteres Unicode \[DT_WSTR\]". Considerando que caracteres Unicode são incompatíveis com o tipo VARCHAR, devemos converter esse tipo para "cadeia de caracteres \[DT_STR\]", clicando no campo e selecionando essa opção.

À esquerda deste, na coluna "Output Alias", apagaremos o conteúdo prévio e adicionaremos o nome "CLIENTE_CONVERTIDO".

Voltando à caixa de lista superior, clicaremos em "ENDERECO" e voltaremos à coluna inferior, que exibirá uma nova linha com os seus dados.

Nesta, veremos o mesmo tipo "cadeia de caracteres Unicode \[DT_WSTR\]", o qual devemos modificar para "cadeia de caracteres \[DT_STR\]". À esquerda deste, na coluna "Output Alias", apagaremos o conteúdo prévio e adicionaremos o nome "ENDERECO_CONVERTIDO".

Para "SEGMENTO" veremos o mesmo tipo "cadeia de caracteres Unicode \[DT_WSTR\]". Devemos alterá-lo para "cadeia de caracteres \[DT_STR\]". Na coluna "Output Alias", apagaremos o conteúdo prévio e adicionaremos o nome "SEGMENTO_CONVERTIDO".

Clicando na opção "FATURAMENTO", veremos na tabela que seus dados chegam no tipo "flutuante de precisão dupla \[DT_R8\]". No Visual Studio, esse dado é do tipo `float`, ou seja, sua conversão não é necessária. Vamos desmarcar sua caixa de seleção na caixa de lista superior.

Para "CIDADE", veremos o tipo "cadeia de caracteres Unicode \[DT_WSTR\]". Vamos convertê-lo para "cadeia de caracteres \[DT_STR\]". Na coluna "Output Alias", adicionaremos o nome "CIDADE_CONVERTIDA".

Selecionando as caixas de "ESTADO ABREVIAÇÃO", "ESTADO" e "REGIAO" veremos o tipo "cadeia de caracteres \[DT_STR\]". Portanto, não precisamos convertê-los e devemos desmarcar suas seleções.

Para "ARQUIVO ORIGEM", veremos o tipo "cadeia de caracteres Unicode \[DT_WSTR\]". Vamos convertê-lo para "cadeia de caracteres \[DT_STR\]". Na coluna "Output Alias", adicionaremos o nome "ARQUIVO_ORIGEM_CONVERTIDA".

Os dados de "DATA-CARGA" já foram criados com o tipo "carimbo de data/hora do banco de dados", portanto, não precisamos alterá-lo.

No final desse processo, temos seis campos para conversão:

- "CNPJ";
- "CLIENTE";
- "ENDERECO";
- "SEGMENTO";
- "CIDADE" e
- "ARQUIVO_ORIGEM".

Clicaremos em "OK", na seção inferior direita da janela, para confirmar a seleção.

Estamos prontos para realizar a próxima etapa: a gravação na tabela através do componente "Dimensão de Alteração Lenta".

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Gravando na tabela de clientes</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Anteriormente, convertemos as colunas convertidas. Agora, gravaremos na tabela CLIENTE do Data Lake.</span></span>

Voltando ao Visual Studio, acessaremos a aba lateral esquerda, dentro da qual clicaremos e arrastaremos o componente "Dimensão de Alteração Lenta" para a tela do editor, posicionando-o abaixo do retângulo "Conversão de colunas de CLIENTE".

Vamos associá-los, arrastando a seta de sucesso do retângulo "Conversão de colunas de CLIENTE" para o retângulo "Dimensão de Alteração Lenta".

Renomearemos a tarefa recém-criada para "Gravação dos dados CLIENTE no Data Lake". Em seguida, faremos um clique duplo neste retângulo para acessar a janela de edição de propriedades.

Após o clique, uma janela será exibida com a tela de boas-vindas ao configurador. Clicaremos em "Next", na seção inferior, e acessaremos o campo "Table of View", no qual selecionaremos a tabela de destino, que será "\[dbo\].\[tbl_cliente\]".

Com isso, o campo seguinte apresentará os dados de "CLIENTE" com três colunas: "Input Columns" ("Colunas de Input"), "Dimension Columns" ("Colunas da Dimensão") e "Key Type" ("Tipo da Chave").

> **Atenção:**\* Nessa etapa, é importante realizar a associação correta: quando houver uma coluna convertida, devemos utilizá-la.

Na coluna "Input Columns", selecionaremos as opções em cada linha de acordo com a dimensão a que corresponde, indicada na coluna "Dimension Columns". Abaixo, temos cada opção a ser selecionada:

- Para a dimensão "arquivo_origem", clicaremos na opção "ARQUIVO_ORIGEM" e selecionaremos a opção "ARQUIVO_ORIGEM_CONVERTIDO" em seu lugar.
- Para a dimensão "cod_cliente" (ou seja, do CNPJ), selecionaremos a opção "CNPJ_CONVERTIDO".
- Para a dimensão "cod_estado", selecionaremos a opção "ESTADO_ABREVIAÇÃO", ou seja, o código com dois dígitos.
- Para a dimensão "data_carga", selecionaremos a opção "DATA-CARGA".
- Para a dimensão "desc_cidade", selecionaremos a opção "CIDADE_CONVERTIDA".
- Para a dimensão "desc_cliente", selecionaremos a opção "CLIENTE_CONVERTIDO".
- Para a dimensão "desc_estado", selecionaremos a opção "ESTADO".
- Para a dimensão "desc_regiao", selecionaremos a opção "REGIAO".
- Para a dimensão "desc_segmento", selecionaremos a opção "SEGMENTO_CONVERTIDO".
- Para a dimensão "endereco", selecionaremos a opção "ENDERECO_CONVERTIDO".
- Para a dimensão "faturamento", selecionaremos a opção "FATURAMENTO".

Após todas as seleções, veremos no campo inferior que não há nenhum erro de conversão. Neste mesmo campo, há a solicitação de uma "business key" (chave de negócio), que será a chave primária "cod_cliente".

Para marcá-la, vamos à coluna "Key Type" e modificar o valor da linha da dimensão "cod_cliente" de "Not a key column" para "Business Key".

Na seção inferior direita da janela, clicaremos em "Next". Na nova tela, temos uma tabela vazia com duas colunas: "Dimension Columns", à esquerda, e "Change Type" ("Mudar tipo"), à esquerda.

Nesta tabela, informaremos o tipo de atualização do atributo. Como dica, basta clicarmos uma vez em cada célula vazia da coluna "Dimension Columns", o que as preencherá automaticamente com o valor de uma dimensão. Faremos isso até que uma célula retorne vazia após o clique.

Na coluna "Change type", precisamos escolher a opção "Changing attribute" para todas as células, permitindo a substituição de atributos quando encontrar o registro.

Na seção inferior da janela, clicaremos em "Next" três vezes e por fim, em "Finish". Voltaremos ao editor do Visual Studio, onde não veremos nenhum erro apontado.

Acessaremos o SQL Server, no qual abriremos a tabela "dbo.tbl_cliente" por meio do explorador. Na tela de edição, veremos que ela está vazia. Voltando ao Visual Studio, executaremos o programa com o botão "Iniciar".

Isso abrirá a janela de visualização da Carga de Clientes. Posteriormente, vamos desativar essa visualização, mas, por enquanto, apenas a fecharemos.

Na tela de Design, veremos a Carga de clientes com todos os seus componentes e relações carregados corretamente. Abaixo dela, no canto direito, podemos ver um símbolo de *check* verde acompanhado da mensagem "Execução do pacote concluída com êxito".

Vamos parar a execução pressionando o botão que para a execução e acessar o esquema de retângulos. Deletaremos a lupa de visualização de dados, localizada na seta que conecta os retângulos "Junção das fontes por ESTADO" e "Acrescentar colunas no metadados".

Para isso, clicaremos nela com o botão direito e selecionaremos "Desabilitar Visualizador de Dados". Dessa forma, não haverá visualizadores de dados quando executarmos novamente o processo.

Voltando ao SQL Server, veremos a tabela preenchida com todos os dados de "CLIENTE" em 57 linhas. Ele encontrou o registro através da chave primária e realizou a substituição, em vez de incluir linhas novas.

| #   | cod_cliente | desc_cliente | endereco | faturamento | desc_segmento | desc_cidade | …   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 10493761705 | Empresa de Catering Gastronômico | R. Mal. Jofre, 129 - Porto Alegre - RS | 350000 | Empresa de Catering | Porto Alegre | …   |
| 2   | 10760990760 | Escola Mundo da Descoberta | R. da Comunidade - Goiais - GO | 280000 | Escola | Goiais | …   |
| 3   | 11504339738 | Restaurante Exótico Oriental | R. Dep. José da Rocha Ribas, 227 - Campinas - SP | 240000 | Restaurante | Campinas | …   |
| 4   | 12805717724 | Escola Criativa Kids | R. Riachuelo, 114 - Goiais - GO | 400000 | Escola | Goiais | …   |
| 5   | 13332132717 | Supermercados NovaVisão | R. Conselheiro Zenha, 68 - Belo Horizonte - MG | 1500000 | Supermercado Varejista | Belo Horizonte | …   |
| 6   | 2078365742 | Indústria Alimenticia Sabor Real | Av. Dom Hélder Câmara, 3124 - Goiais - GO | 1200000 | Indústria Alimenticia | Goiais | …   |
| 7   | 2373471728 | Cantina Bella Pasta | Av. Ayrton Senna, 3799 - São Paulo-SP | 380000 | Restaurante | São Paulo | …   |
| 8   | 2379494746 | Escola Mundo Encantado | Av. Mal. Câmara, 154 - Goiais - GO | 450000 | Escola | Goiais | …   |
| 9   | 25198076600 | Escola Criativa Teens | Rua Padre Ildefonso Penalba, 151 - Belo Horizonte - MG | 400000 | Escola | Belo Horizonte | …   |
| …   | …   | …   | …   | …   | …   | …   | …   |

Voltaremos ao Visual Studio e salvaremos o processo no botão "Salvar Tudo". No campo do editor, clicaremos na guia "Plano de Controle", onde temos duas cargas de dimensões prontas no Data Lake:

- "Carga de Empresas" e
- "Carga de Clientes".

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Ferramentas utilizadas para construção e carga do DataLake

1.  SQL Server 2022: Certifique-se de ter a versão mais atualizada do SQL Server instalada no sistema. Isso garantirá a compatibilidade com as ferramentas e recursos utilizados durante o curso.
    
2.  SQL Server Management Studio (SSMS): O SSMS é uma ferramenta essencial para a administração e gerenciamento do SQL Server. É por meio dele que você poderá criar, modificar e executar consultas no banco de dados.
    
3.  SQL Server Data Tools (SSDT): O SSDT oferece uma plataforma no Visual Studio para o desenvolvimento de projetos de banco de dados e integração de dados.
    
4.  SQL Server Integration Services (SSIS): O SSIS é uma ferramenta poderosa para a criação de pacotes de integração de dados, permitindo a extração, transformação e carregamento de informações entre diferentes fontes e destinos.
    
5.  SQL Server Analysis Services (SSAS): O SSAS é utilizado para criar soluções de análise de negócios, como cubos e modelos multidimensionais, para auxiliar na tomada de decisões estratégicas.
    
6.  Banco de Dados do Data Warehouse: Tenha acesso ao banco de dados do Data Warehouse das empresas AtacaDez e Indústria de Manufatura. Esse banco de dados servirá como base para as atividades práticas e análises durante o curso.
    

Além disso, é importante criar uma solução no Visual Studio que inclua dois projetos específicos:

1.  Projeto SQL Server: Crie um projeto utilizando o modelo SQL Server, que permitirá a criação de tabelas, consultas, visões e outros objetos relacionados ao banco de dados.
    
2.  Projeto Integration Services: Desenvolva um projeto utilizando o modelo de Integration Services para construir pacotes de integração de dados. Esses pacotes serão fundamentais para o processo de extração, transformação e carregamento dos dados entre diferentes fontes e destinos.
    

&nbsp;
---
title: >-
  Data Warehouse com Data Marts e Power BI (Projetão BI do zero Parte 2 -
  Construíndo modelo OLAP Multidimensional)
updated: 2024-08-08 13:45:05Z
created: 2024-07-22 18:48:45Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

[toc]

<span style="color: #c0c0c0;">Já percorremos, em cursos anteriores, todas as fases deste projeto. <span style="color: #c0c0c0;">Assim, passamos por várias fases desse projeto, desde a modelagem e construção do</span> *Data Warehouse* <span style="color: #c0c0c0;">(Armazém de Dados), construção do</span> *Data Lake* <span style="color: #c0c0c0;">(Lago de Dados), identificação das ferramentas de dados, carregamento do</span> *Data Lake* <span style="color: #c0c0c0;">e do</span> *Data Warehouse*<span style="color: #c0c0c0;">.</span></span>

Agora, precisamos construir o **banco de dados de consulta**, o *Data Mart* (Mercado de Dados). Neste curso, aprenderemos que o *Data Mart* também será construído e configurado usando o mesmo projeto do Visual Studio utilizado para o *Data Lake* e o *Data Warehouse*.

Mas há uma diferença: será o *Data Mart* que se **integrará às ferramentas de consultas**. Por isso, aprenderemos neste curso que o *Data Mart* possui uma estrutura diferente dos bancos de dados tradicionais, que **não favorecem a performance**.

Os bancos onde vamos construir o *Data Mart* contêm as regras de negócio do modelo, o que facilitará quando formos construir os *dashboards* (painéis de controle). Não precisaremos configurar nada no momento da construção dos relatórios, apenas construiremos os dados.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Fases do projeto de BI</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Já percorremos várias fases do projeto, então vamos fazer um resumo das etapas já concluídas e estabelecer em qual fase da implementação do projeto estamos.</span></span>

## Revisão da Fases do Projeto de Business Intelligence

Um *dashboard* não deve ser construído sobre uma base de Excel ou sobre uma base de dados transacional. É necessário organizar uma **base de dados gerencial única**, com um único conceito para toda a empresa, para que seja uma base oficial de resultados gerenciais.

<span style="color: #c0c0c0;">Realizamos o primeiro passo, que foi a</span> **modelagem do modelo de negócio** <span style="color: #c0c0c0;">escolhido para a implementação do sistema de</span> *Business Intelligence* <span style="color: #c0c0c0;">\- o</span> **modelo de vendas**

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Após definir todas as regras de negócio desses modelos, como, por exemplo, dimensões, hierarquias, indicadores, construimos o</span> ***Data Warehouse***<span style="color: #c0c0c0;">. O</span> *Data Warehouse* <span style="color: #c0c0c0;">tem um desenho muito especial, cujo desenho é resultado do levantamento do modelo que foi feito na primeira fase. No entanto, esse</span> *Data Warehouse* <span style="color: #c0c0c0;">é criado, mas inicialmente está</span> **vazio**<span style="color: #c0c0c0;">.</span>.</span>

Foi necessário, então, **identificar as fontes de dados**, que normalmente são as fontes de dados transacionais da empresa, mas também podem ser um arquivo de Excel ou um arquivo CSV.

Nós então adotamos a estratégia da construção do *Data Lake*, que é um banco de dados onde os **dados brutos são carregados**. O *Data Lake* tem várias utilidades, não só para ser fonte de um *Data Warehouse*. Ele pode ser usado, por exemplo, para modelos preditivos, para *Data Science* (Ciência de Dados), análise de resultados brutos através dos dados e assim por diante.

Com os dados inseridos no *Data Lake*, executamos uma série de processos de **extração**, **transformação** e **carga**, usando como fonte única o *Data Lake* e carregando os dados dentro do *Data Warehouse*, já de acordo com as regras de negócio do sistema de Business Intelligence que foi definido por Paula na primeira fase.

Porém, o *Data Warehouse* não será a fonte dos nossos *dashboards*. Neste curso, explicarei o motivo disso. Agora, **precisamos construir o que chamamos de *Data Marts***.

> Os *Data Marts* são subconjuntos pequenos do *Data Warehouse* e é neles que os dashboards estarão visualizando como fonte os Data Mart.

Esses *Data Marts* não são apenas bancos de dados, dentro desses bancos existem **metadados**, **regras de negócios**, **regras hierárquicas** e **indicadores calculados**. Desta forma, ao construir o *dashboard*, apenas visualizamos a informação que está no *Data Mart*.

Procuremos entender por que o *Data Mart* é importante e por que não podemos conectar o nosso *dashboard* diretamente ao *Data Warehouse*, já que ele é um banco separado do sistema transacional, ou seja, já é um banco gerencial. Por que não é apropriado fazer isso?

Vamos aprender e visualizar como construir esse *Data Mart* através do nosso projeto no Visual Studio.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Conectando o Analysis Services (No visual studio)</span>

Apesar de todos os dados estarem armazenados no *Data Warehouse*, a conexão dos *dashboards* não seria feita diretamente no *Data Warehouse*.

Em vez disso, optamos por criar alguns bancos mais **segmentados**, chamados **Data Marts**. Esses bancos de *Data Mart* diferem do *Data Warehouse*, não apenas por serem bancos diferentes, mas também por sua **estrutura** ser um pouco distinta.

Neste curso, aprofundaremos a análise das razões por trás dessa diferença na estrutura. No entanto, não iremos criar essas novas bases, esses novos *Data Marts*, da mesma forma como construímos o *Data Warehouse*.

Ao invés de utilizar o SQL Server Banco de Dados Relacional, utilizaremos um outro módulo do SQL Server, que é o ***SQL Server Analysis Services***. O objetivo do próximo vídeo é fazer uma **conexão no Analysis Services**.

## Conectando ao SQL Server Analysis Services

Começamos no *Management Studio*, minimizamos nossa conexão com o banco de dados SQL Server selecionando o ícone de mais do lado esquerdo do nome do banco de dados. Na sequência, clicamos em "Conectar" na parte superior esquerda e encontramos a opção chamada "*Analysis Services*" com um ícone de cubo do lado esquerdo.

É um banco de dados distinto, representado através de um cubo. A razão pela qual representamos o *Data Mart* com o símbolo de um cubo é algo que abordaremos neste curso.

Ao clicar em "Conectar" em "Analysis Services", obtemos a tela de *login*:

- Nome do servidor: DESKTOP-G7KVMJN
- Autenticação: Autenticação do Windows

No caso do Analysis Services, faremos uma autenticação do Windows, ou seja, não vamos utilizar um usuário próprio. Para logar, clicamos no botão "Conectar".

Após o *login*, do lado esquerdo será exibida a área para a criação do Analysis Services:

- DESKTOP-G7KVMJN(Microsoft Analysis Server 16.0.42.209…)
    - Bancos de Dados
    - Assemblies
    - Gerenciamento

Se desejarmos, podemos clicar com o botão direito sobre "Bancos de Dados" e temos a opção "Novo Banco de Dados" disponível. No entanto, não faremos a criação do *Data Mart* por aqui. No *Management Studio*, realizaremos essa criação no nosso projeto do Visual Studio. Este é o mesmo projeto onde construímos o *Data Lake* e realizamos a carga de dados no *Data Warehouse*.

Manteremos aberta nossa conexão com o Analysis Services via Management Studio e retornaremos ao nosso projeto. No lado direito, selecionaremos o Gerenciador de Soluções. Podemos usar o atalho "Ctrl + Alt + L" para exibir essa seção.

Em "Gerenciador de Soluções" temos todos os projetos de "Solução 'DatawarehouseAtacaDez'".

- Pacotes SSIS
    - CargaDataLake.dtsx
    - CargaDataWarehouse.dtsx
    - CargaPrincipal.dtsx

Vamos relembrar que criamos um projeto para efetuar a carga do Data Lake, outro para a carga do *Data Warehouse*, e um projeto principal para executar a carga desses dois projetos.

Mais abaixo, temos um projeto de criação do Data Lake onde projetamos todas as tabelas. Isso foi feito durante vários cursos aqui na formação até este ponto.

+CriacaoDataLake + Tabelas + tbl_clientes.sql + tbl_compra.sql + tbl_empresa.sql + tlb_item.sql + tbl_log.sql + …

Clicamos no botão de parar a aplicação na parte superior, representado por um ícone de quadrado vermelho.

Em seguida, clicamos na parte superior onde está o nome da nossa solução ("Solução 'DatawarehouseAtacaDez'"), selecionamos o botão direito do mouse e clicamos em "Adicionar > Novo Projeto".

Após abrir a janela seguinte, no campo de busca na parte superior, procuramos pelo modelo "Analysis Services" nos modelos. Podemos usar o atalho "Alt + S" para acessar a barra de pesquisa.

Encontramos a opção "Projeto Multidimensional do Analysis Services". Após clicar nela, vamos para a próxima opção clicando no botão no canto inferior direito.

Na janela seguinte intitulada "Configurar seu novo projeto", temos um campo denominado "Nome do projeto". Nomeamos de "DataMartVendas", e clicamos em "Criar".

Agora temos em nossa solução um projeto para a criação dos Data Marts:

- DataMartVendas
    - Fontes de Dados
    - Exibições da Fonte de Dados
    - Cubos
    - Dimensões
    - Funções
    - Assemblies
    - Diversos

Existem várias seções: fonte de dados, exibições de fontes de dados, cubos, dimensões, funções, *assemblies* e diversos. Algumas dessas opções serão exploradas em detalhes mais adiante neste curso.

## Conclusão

Neste ponto, adicionamos à nossa solução um projeto do tipo Analysis Services e estamos prontos para começar a construção do Data Mart.

&nbsp;

&nbsp;

# Importância do Data Mart

# <span style="color: #ffffff;">Acesso ao Data Warehouse</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Temos o projeto de criação do</span> *Data Mart* <span style="color: #c0c0c0;">no VS Code. Conforme já vimos antes, a regra é que a única fonte de dados do</span> *Data Mart* <span style="color: #c0c0c0;">será o</span> *Data Warehouse*<span style="color: #c0c0c0;">.</span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Para isso, precisamos configurar o acesso aos dados do</span> *Data Warehouse* <span style="color: #c0c0c0;">no nosso projeto do</span> *Data Mart*<span style="color: #c0c0c0;">. É o que faremos agora neste vídeo.</span></span></span>

No VS Code, na lateral direita da tela, temos a seção Pesquisar em Gerenciado de Soluções. Nessa área, encontramos uma parte da criação do *Data Mart*.

Temos uma pasta chamada "Fonte de Dados", é por meio dela que faremos o acesso ao *Data Warehouse*. Para isso, clicamos nela com o botão direito e depois em "Nova Fonte de dados".

Nisso, abre um assistente. Clicamos em "Next". Nessa janela, criaremos Data Source baseado em outro objeto ou em uma conexão existente.

> Repare que já temos a conexão criada, devido a um treinamento anterior neste curso. No entanto, provavelmente você n\]ão terá essa conexão. Sendo assim, vamos excluí-la para simular como será para você.

Agora, o campo "Conexões de Dados" está vazio. Sabendo disso, clicamos no botão "Nova". Feito isso, aparece uma mensagem indicando que o provedor específico não tem suporte, solicitando que seja selecionado um provedor diferente. Clicamos em "Ok".

Somos direcionados para uma nova janela. No campo Provedor, no topo da tela, clicamos e selecionamos a opção "Microsoft OLE DB Provider SQL Server".

Agora, estabeleceremos a conexão com o *Data Warehouse*. Então, abrimos o SQL Management Studio. No servidor em que temos o *Data Warehouse*, clicamos com o botão direito e depois em Propriedades. Feito isso, copiamos o nome do servidor. Voltamos ao VS Code, no campo Server Name, o colamos.

Após, no campo Authentication, selecionamos o "SQL Server Authentication".

> Lembrando que estamos nos conectando ao *Data Warehouse* SQL Server Banco de Dados Relacional. Usamos o `Windows Authentication` quando nos conectamos no *Data Markt*, mas esse não é o nosso caso agora. Estamos tentando apontar para a fonte.

Depois, preenchemos os campos de usuário, senha e marcamos a opção para salvar a senha. Por fim, no campo Connect to a database, selecionamos a opção `DW_ATACADEZ`.

> Caso as opções não apareçam, basta clicar em "Testar conexão". Após concluir a lista com as opções de database irá aparecer.

**Lembre-se que o *Data Lake* alimenta o *Data Warehouse* e o *Data Warehouse* alimenta o *Data Mart*.**

Por fim, clicamos no botão "Ok" e depois em "Next". A ferramenta irá pedir para selecionarmos o usuário que fará a conexão com este banco de dados.

Usaremos a opção "Usar a conta de serviço". Essa conta de serviço é criada durante o processo de **instalação dos softwares**. Há um momento em que o instalador pede para escolhermos os usuários que gerenciarão o serviço, normalmente usamos o padrão. Depois, clicamos em "Next" e "Finish".

> A criação desses usuários padrão, que gerenciarão os serviços do ambiente do SQL Server, vale tanto para o SQL Server Banco de Dados Relacional quanto para o controle do analise service.
> 
> Sendo assim, o usuário da conta de serviço que está gerenciando o analise service é quem se conectar na base.

Assim, temos a conexão criada com o *Data Warehouse*.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Performance do Data Warehouse (motivos para usar OLAP)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Vamos discutir a performance real de um</span> *data warehouse* <span style="color: #c0c0c0;">para entender a necessidade da criação de um</span> *data mart*<span style="color: #c0c0c0;">.</span></span>

Temos o seguinte exemplo, duas tabelas de dimensão, sendo uma de Produto e outra de Cliente.

| TIPO DE PRODUTO | PRODUTO |
| --- | --- |
| Sucos | Laranja |
| Sucos | Maça |
| Águas | Com Gás |
| Águas | Sem Gás |

| TIPO DE CLIENTE | CLIENTE |
| --- | --- |
| Mercados | Princesa |
| Mercados | Baratão |
| Lanches | Hamburgo |
| Lanches | De Ouro |

A tabela de produto possui um nível de saída (**output, nesse caso output são tipo produto e tipo cliente, nossos niveis mais altos, e input são nossos niveis mais baicos, cliente e produto**), denominado tipo de produto. Nela, há quatro produtos, sendo laranja, maçã, com gás e sem gás. Os dois primeiros produtos são classificados como sucos, e os outros como água.

Já a tabela de cliente tem um nível de saída denominado cliente. Nela, há quatro clientes, sendo Princesa, Baratão, Hamburgo e De Ouro, do tipo mercado e lanchonete.

Também temos a tabela de fatos, que contém a combinação de produto e cliente e seus respectivos valores.

| PRODUTO | CLIENTE | VALOR |
| --- | --- | --- |
| Laranja | Princesa | 100 |
| Maça | Princesa | 200 |
| Com Gás | Princesa | 150 |
| Sem Gás | Princesa | 300 |
| Laranja | Baratão | 250 |
| Maça | Baratão | 300 |
| Com Gás | Baratão | 250 |
| Sem Gás | Baratão | 100 |
| Maça | Hamburgo | 50  |
| Com Gás | Hamburgo | 70  |
| Sem Gás | Hamburgo | 120 |
| Laranja | De Ouro | 50  |
| Com Gás | De Ouro | 70  |
| Sem Gás | De Ouro | 120 |

Essa é uma tabela *data warehouse* simples, elaborado para entendermos o problema que eventualmente poderemos encontrar.

Suponhamos que queremos saber o seguinte::

> Quanto vendemos para o cliente Princesa do produto água com gás?

Ao realizar essa consulta no banco de dados, acontecerá a seguinte operação. Será feito o *table scan*, ou seja, uma varredura de tabela.

Mesmo possuindo índice, o *data warehouse* percorrerá a tabela, linha por linha, verificando se cada entrada corresponde a "Princesa" e ao produto "com gás". Ao final dessa varredura, ele encontrará quatro linhas correspondentes ao produto "Com gás" e uma interseção com o valor que estamos buscando, nesse caso 150.

Mas, e se a consulta for a seguinte:

> Quanto vendemos ao cliente Princesa, independentemente do produto?

Como isso envolve todos os produtos, o *data warehouse* irá realizar o *table scan* novamente, adicionando todas as linhas referentes aos produtos e mantendo as quatro linhas referentes ao cliente.

Ao final da varredura, teremos quatro resultados: 100, 200, 150 e 300. Para obter o total, será necessário fazer uma soma em memória, cujo resultado é 750. Repare que nessa segunda consulta foi preciso maior esforço.

Agora, imagine uma terceira consulta:

> Quanto vendemos para o cliente Princesa de todos os produtos do tipo água?

Para esse resultado precisamos fazer duas coisas, primeiro, procurar na tabela de dimensão quais são os produtos do tipo água. Nisso, encontraremos os produtos "com gás" e "sem gás".

Em seguida, percorreremos a tabela de fatos em busca de todas as combinações entre o cliente Princesa e esses dois produtos. Encontraremos duas linhas, que ao somarmos resultarão em 450.

Por fim, uma consulta mais complexa:

> Quanto vendemos para o tipo de cliente Mercados e produtos do tipo Águas?

Para responder, precisamos percorrer ambas as tabelas, de clientes e produtos, para identificar quais são os clientes do tipo mercados e quais são os produtos do tipo águas.

Com essa seleção em mãos, fazemos a busca na tabela de fatos. Encontraremos quatro linhas correspondentes, cuja soma dos valores resultará no valor final, que é 800. Esse processo é muito mais trabalhoso.

Obviamente, um *data warehouse* real não será tão simples quanto o exemplo apresentado. Normalmente, as tabelas de fatos contêm milhões ou bilhões de linhas e as tabelas de dimensões são consultadas com mais de duas dimensões em um modelo. À medida que as consultas ficam mais consolidadas, ficam também mais complexas.

Vamos visualizar essas quatro consultas em um gráfico, onde o eixo vertical representa o nível de esforço e o eixo horizontal as consultas.

![Gráfico de barras referente ao nível de esforço das consultas. No eixo y, o título "Nível de esforço", sem graduação. Já o eixo x é graduado de 1 até 4 com intervalos de 1. As barras estão organizadas de forma crescente, sendo a 1 a menor e a 4 a maior.](../_resources/9643e87d-1956-47ac-b92c-2884ca47.png)

Repare que, conforme as consultas se tornam mais consolidadas, ou seja, resultados a nível de outputs, o esforço exigido no banco de dados é maior.

**Além disso, a primeira consulta, que é mais detalhada, tem um dado muito próximo do grão definido no nosso modelo. Quem irá analisar informações mais próximas é a equipe operacional.**

**Esta consulta requer uma informação mais detalhada, destinada à equipe operacional. No entanto, é possível que uma pessoa gerente júnior também queira ver essas informações. Em contrapartida, a diretoria sênior estará interessada em informações mais consolidadas.**

**À medida que a complexidade do modelo aumenta, ou seja, os dados mais gerenciais são requisitados, maior será o esforço exigido pelo banco.**

Geralmente, quem precisa de informações mais consolidadas é a pessoa que financia o projeto, a pessoa CEO ou da presidência da empresa. Sendo assim, pode ser preciso ter que esperar um maior tempo para obter os resultados, considerando que a informação que consome é a mais gerencial.

Portanto, seria ideal ter uma estrutura de banco de dados que **não diferenciasse** entre uma **consulta operacional e uma consulta gerencial**.

Se conectarmos os *dashboards* ao *data warehouse*, que possui essa arquitetura que apresentamos, poderemos experimentar uma queda de performance quando o *dashboard* precisar apresentar resultados mais consolidados.

O banco de dados relacional que usamos para montar o *data warehouse*, o SQL Server, é excelente para construir *data warehouses*. Porém, ele não foi originalmente projetado para ser um banco de dados de consulta e sim para controlar transações.

Nós que resolvemos estudar *Business Intelligence*, *Data Warehouses* e criar tabelas gerenciais nos bancos de dados relacionais. Portanto, pagamos o preço.

É possível ter outra estrutura de dados onde as informações possam ser **gravadas com performance maior**, por isso precisamos criar o *data mart*. Afinal, ele usará o *data warehouse* como fonte, porém não será construído em um banco de dados relacional do SQL Server.

Qual banco é esse? Que estrutura é essa? Descobriremos a seguir.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">OLAP (On-Line Analytical Processing - Cubos OLAP)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Anteriormente, discutimos o problema de desempenho do Data Warehouse quando criado em um</span> **banco de dados relacional**<span style="color: #c0c0c0;">, como o SQL Server.</span></span>

Percebemos que precisávamos de uma solução que pudesse dar suporte a consultas mais granulares e mais consolidadas com um **desempenho semelhante**.

Essa solução é o *OLAP*, Online Analytical Process, no português Processamento analítico online. Nesse vídeo, entenderemos como funciona um banco de dados *OLAP* e por que construiremos o Data mart utilizando essa estrutura.

Descobrimos anteriormente que, quando armazenamos informações dentro de um Data Warehouse usando um **banco de dados relacional,** podemos ter resultados conforme o gráfico de esforço que analisamos no vídeo anterior.

Quanto mais consolidada é a informação, **maior o nível de esforço** do banco de dados para conseguir o resultado.

Sendo assim, precisamos encontrar uma estrutura de dados que **favoreça a performance**. Isso porque os bancos de dados relacionais, onde construímos nosso Data Warehouse, são excelentes para controlar transações, mas não tão eficazes para **apresentar relatórios consolidados**.

## Conhecendo o OLAP

O OLAP funciona da seguinte forma. Temos o Data Warehouse e, através da tabela de produtos e de clientes, podemos chegar a algumas fórmulas matemáticas.

| TIPO DE PRODUTO | PRODUTO |
| --- | --- |
| Sucos | Laranja |
| Sucos | Maça |
| Águas | Com Gás |
| Águas | Sem Gás |

> - **Todos os Produtos** = Sucos + Águas
>     
> - **Sucos** = Laranja + Maça
>     
> - **Águas** = Com gás + Sem gás
>     

| TIPO DE CLIENTE | CLIENTE |
| --- | --- |
| Mercados | Princesa |
| Mercados | Baratão |
| Lanches | Hamburgo |
| Lanches | De Ouro |

> - **Todos os clientes** = Mercados + Lanches
>     
> - **Mercados** = Princesa + Baratão
>     
> - **Lanches** = Hamburgo + De Ouro
>     

Por exemplo, todos os valores dos indicadores de água serão sempre a soma da água com gás com a sem gás. Se quisermos saber quanto vendemos de água, basta somar as vendas de ambas.

Em relação aos sucos, será a soma de laranja e de maçã. Já se quisermos saber as vendas de todos os produtos, basta somar tudo o que foi vendido em sucos e em águas.

O mesmo vale para a tabela de clientes. Lanchonetes é a soma de Hamburgo e De Ouro, de Mercado a soma do cliente Princesa e Baratão. Já todos os clientes se refere a soma de Mercados e Lanches.

Imagine um banco de dados em que além do conteúdo, gravamos também as fórmulas como um tipo de metadados. Para isso a estrutura não será uma tabela e sim uma matriz.

Nessa matriz teremos os cruzamentos entre todos os produtos e clientes, incluindo os níveis mais baixos, input, quanto os níveis outputs e o total.

Ao consultar a tabela de fato, temos apenas os cruzamentos entre os membros do nível input, nesse cado entre produtos e clientes. Além disso, os valores dessa tabela carregamos na matriz.

**Tabela fato**

| PRODUTO | CLIENTE | VALOR |
| --- | --- | --- |
| Laranja | Princesa | 100 |
| Maça | Princesa | 200 |
| Com Gás | Princesa | 150 |
| Sem Gás | Princesa | 300 |
| Laranja | Baratão | 250 |
| Maça | Baratão | 300 |
| Com Gás | Baratão | 250 |
| Sem Gás | Baratão | 100 |
| Maça | Hamburgo | 50  |
| Com Gás | Hamburgo | 70  |
| Sem Gás | Hamburgo | 120 |
| Laranja | De Ouro | 50  |
| Com Gás | De Ouro | 70  |
| Sem Gás | De Ouro | 120 |

**Matriz**

|     | Princesa | Baratão | Hamburgo | De Ouro | Mercado | Lanches | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Laranja** | 100 | 250 |     | 50  |     |     |     |
| **Maça** | 200 | 300 | 50  |     |     |     |     |
| **Com Gás** | 150 | 250 | 70  | 70  |     |     |     |
| **Sem Gás** | 300 | 100 | 120 | 120 |     |     |     |
| **Sucos** |     |     |     |     |     |     |     |
| **Águas** |     |     |     |     |     |     |     |
| **Total** |     |     |     |     |     |     |     |

Repare que usamos o Data Warehouse como fonte para popular a matriz com os dados input. Porém, temos as fórmulas. Sabemos que `Sucos = Laranja + Maça`. Repare que na matriz, em Princesa, Sucos equivale ao valor 300. Esse valor se refere a soma de Laranja 100 e Maça 200.

Em Baratão, o valor de suco é 650 referente a soma de Laranja 250 e Maça 300. O mesmo acontece com o restante da matriz.

Também temos a fórmula `Águas = Com gás + Sem gás`.

|     | Princesa | Baratão | Hamburgo | De Ouro | Mercado | Lanches | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Laranja** | 100 | 250 |     | 50  |     |     |     |
| **Maça** | 200 | 300 | 50  |     |     |     |     |
| **Com Gás** | 150 | 250 | 70  | 70  |     |     |     |
| **Sem Gás** | 300 | 100 | 120 | 120 |     |     |     |
| **Sucos** | 300 | 650 | 50  | 50  | 0   | 0   | 0   |
| **Águas** | 450 | 350 | 190 | 190 | 0   | 0   | 0   |
| **Total** |     |     |     |     |     |     |     |

Se analisarmos a matriz, Águas em Princesa tem o valor de 450 que se refere a soma de Com gás 150 e Sem gás 300, o mesmo acontece sucessivamente.

Repare que em Mercado e Lanches, não há valores em Laranja, Maça, Água com gás e Sem gás, portanto, os valores referentes a Sucos e Águas é zero.

Há também a fórmula `Todos os Produtos = Sucos + Águas`.

|     | Princesa | Baratão | Hamburgo | De Ouro | Mercado | Lanches | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Laranja** | 100 | 250 |     | 50  |     |     |     |
| **Maça** | 200 | 300 | 50  |     |     |     |     |
| **Com Gás** | 150 | 250 | 70  | 70  |     |     |     |
| **Sem Gás** | 300 | 100 | 120 | 120 |     |     |     |
| **Sucos** | 300 | 650 | 50  | 50  | 0   | 0   | 0   |
| **Águas** | 450 | 350 | 190 | 190 | 0   | 0   | 0   |
| **Total** | 750 | 1000 | 240 | 240 | 0   | 0   | 0   |

Em Princesa, na célula Total temos o valor de 750 que se refere a soma de Sucos 300 e Águas 450.

Esse processo no OLAP se chama consolidação, nesse caso a fizemos ao lado da dimensão produto.

Agora, faremos o mesmo, porém, ao lado da dimensão cliente. Temos a fórmula `Mercados = Princesa + Baratão`.

|     | Princesa | Baratão | Hamburgo | De Ouro | Mercado | Lanches | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Laranja** | 100 | 250 |     | 50  | 350 |     |     |
| **Maça** | 200 | 300 | 50  |     | 500 |     |     |
| **Com Gás** | 150 | 250 | 70  | 70  | 400 |     |     |
| **Sem Gás** | 300 | 100 | 120 | 120 | 400 |     |     |
| **Sucos** | 300 | 650 | 50  | 50  | 950 | 0   | 0   |
| **Águas** | 450 | 350 | 190 | 190 | 800 | 0   | 0   |
| **Total** | 750 | 1000 | 240 | 240 | 1750 | 0   | 0   |

Na primeira linha, Mercado tem o valor de 350 referente a soma de Princesa 100 e Baratão 250. Abaixo, o valor é 500 referente a soma de Princesa 200 e Baratão 300. Repare que isso também é valido para os níveis outputs.

Por fim, temos as fórmulas `Lanches = Hamburgo + De Ouro` e `Todos os Clientes = Mercados + Lanches`.

|     | Princesa | Baratão | Hamburgo | De Ouro | Mercado | Lanches | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Laranja** | 100 | 250 |     | 50  | 350 | 50  | 400 |
| **Maça** | 200 | 300 | 50  |     | 500 | 50  | 550 |
| **Com Gás** | 150 | 250 | 70  | 70  | 400 | 140 | 540 |
| **Sem Gás** | 300 | 100 | 120 | 120 | 400 | 240 | 640 |
| **Sucos** | 300 | 650 | 50  | 50  | 950 | 1000 | 1950 |
| **Águas** | 450 | 350 | 190 | 190 | 800 | 990 | 1790 |
| **Total** | 750 | 1000 | 240 | 240 | 1750 | 1990 | 3740 |

Essa é a estrutura final com todas as combinações entre Produtos e Clientes calculadas e consolidadas. São essas as informações que ficam guardadas no Data mart.

Agora, podemos fazer facilmente as mesmas perguntas do vídeo anterior, analisando a matriz.

> - **Quanto foi vendido para o cliente Princesa do produto com gás?**
> 
> 150

> - **Quanto foi vendido para o cliente princesa todos os produtos?**
> 
> 750

> - **Quanto foi vendido para o cliente princesa todos os produtos do tipo águas?**
> 
> 450

> - **Quanto foi vendido para o cliente mercados e produtos tipo águas?**
> 
> 800

O esforço para obter essas consultas mais operacionais e as consultas mais consolidadas foi o mesmo. O que fizemos foi ler o valor que já está calculado.

Sendo assim, com o OLAP, o gráfico de performance de nível de esforço é idêntico para consultas mais operacionais e consultas mais consolidadas. O nível de esforço é pequeno para todos, ou seja, todas as barras no gráfico são iguais e pequenas, afinal, o número já está calculado.

## Conclusão:

Os bancos de dados que são **armazenados de forma matricial** são chamados de *OLAP*, que vem de Online Analytical Process, no português Processamento analítico online.

O banco OLAP é representado por um cubo, pois se tivéssemos um Data Warehouse com três dimensões, por exemplo, no nosso caso é como se tivéssemos também uma dimensão chamada Loja. Nesse caso, a matriz teria uma terceira dimensão, como um cubo.

Se ele tiver quatro ou cinco dimensões, seria uma figura espacial que não conseguimos desenhar direito dentro de um plano. Mas é uma estrutura que chamamos de multidimensional. Na qual temos todas as combinações possíveis e imagináveis já previamente calculadas.

Daqui adiante, quando falarmos que construiremos um cubo de vendas ou cubo de compras, estaremos nos referindo aos Data marts que construídos usando a **arquitetura de bancos de dados multidimensionais**, ou bancos de dados ***OLAP***.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Exibindo as fontes de dados</span>

Estamos prontos para iniciar a construção do *Data mart*, o Banco de Dados Multidimensional OLAP.

Mas, antes disso, é muito importante visualizarmos todos os componentes da fonte de dados, o *Data Warehouse*, para realizarmos as seleções adequadas do que levaremos para o banco OLAP.

Já estabelecemos a conexão com a fonte de dados, mas como podemos visualizar todas as tabelas dessa fonte de dados no projeto do Análise Service, no Visual Studio?

Com o projeto aberto no VS Code, percebemos que já configuramos uma fonte de dados.

O que precisamos fazer agora é criar uma nova visualização da fonte de dados. Para isso, na lateral direita da ferramenta, em Exibições de Fonte de Dados, clicamos com o botão direito e depois em "Nova Exibição da Fonte de Dados".

Feito isso, abre um assistente. Clicamos em "Next", feito isso, é exibido as conexões disponíveis. Temos apenas a conexão com o *Data Warehouse* chamado `DW ATACADEZ`. Clicamos nele e depois no botão "Next".

O assistente fará a conexão com o *Data Warehouse*, verificará se ela está funcionando corretamente e trará a lista de componentes do banco.

Repare que temos várias tabelas importantes para a construção do banco de dados multidimensional OLAP. Selecionamos todas, exceto a `sysdiagrams`, pois essa é uma tabela interna do SQL Server que não nos interessa.

Feito isso, clicamos no botão indicado pelo símbolo ">", que traz todas as tabelas da coluna Objetos disponíveis para a coluna da direita, chamada Objetos incluídos.

Por fim, clicamos em "Next" e "Concluir". Feito isso, na lateral direita do VS Code, temos disponível uma fonte de dados `DW ATACADEZ.dsv`. Damos um duplo clique nela, feito isso, visualizamos o *Data Warehouse*.

Repare que temos três tabelas que representam a dimensão produto, que criamos através do modelo Floco de Neve. Temos também a dimensão empresa, dimensão tempo e dimensão cliente no modelo estrela. No centro, temos a tabela de fato.

Há uma ligação, que vem diretamente do banco e se refere a chave estrangeira, que liga o identificador primário do produto, que está na tabela de fato, com o identificador primário do produto da dimensão. Isso acontece com todas as outras dimensões do modelo.

É a partir desse esquema que começaremos a selecionar o que levaremos para o nosso banco de dados multidimensional OLAP, também conhecido como *Data Mart*.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Mudando o nome das tabelas</span>

Neste ponto, estamos prestes a configurar nosso banco de dados OLAP com base nas tabelas existentes no *Data Warehouse*. No entanto, essa associação direta entre os componentes do Data Warehouse e do *Data Mart* não será possível, devido às diferenças nos nomes das tabelas, que não refletem os nomes reais das entidades.

Diferente do Data Warehouse, no Data Mart, os nomes das entidades fazem parte dos metadados da informação. Por exemplo: no nosso Data Warehouse, temos uma tabela chamada `dim_cliente`. Porém, quando precisarmos visualizar esses dados no *dashboard*, considerando que nada será configurado nele, leremos diretamente o que está nos metadados.

Não poderemos, por exemplo, filtrar na `dim_cliente`. O nome correto é o nome da dimensão, que está na documentação: "cliente".

Então, como podemos alterar os nomes das tabelas do Data Warehouse, visualizados pelo Data Mart, para estarem mais alinhados com os nomes reais das entidades conforme o modelo de *business intelligence* inicialmente projetado?

Explicaremos neste vídeo como fazer a **mudança do nome das tabelas**.

## Mudando o nome das tabelas

Vamos relembrar o esquema abaixo:

![Esquema formado pela seção 'FONTES DE DADOS' à esquerda e 'DATA MARTS' à direita, com quatro ícones não identificados na intersecção entre elas. A seção 'DATA MARTS' é composta por 3 ícones de cubos intitulados 'VENDAS', 'FINAN' e 'CONTAB', respectivamente, enquanto a seção 'FONTES DE DADOS' é composta por 3 ícones de cilindros não identificados.](../_resources/57a0c643-2514-4a81-a55e-a9afe829.png)

Revisamos este esquema no início do curso, mas agora mudamos a figura e o Data Mart tem a representação de um cubo, porque ele é um banco de dados OLAP, um banco de dados **multidimensional**.

Os dashboards se conectarão a esses OLAPs, ou seja, a esses bancos criados no final do esquema. **Dessa forma, nomes de filtros, de indicadores, de fórmulas, nada poderá ser configurado e modificado durante a construção do dashboard.**

**O dashboard terá apenas a função de exibir os dados, que já foram definidos não somente em seu conteúdo, mas também nos seus metadados, e essa representação estará no cubo OLAP.**

Você já deve saber, pelo menos superficialmente, como construímos um dashboard no Power BI, ou, por exemplo, em qualquer outra ferramenta de dashboard, como o *QlikView* ou o *Tableau.*

Quem já fez curso sobre as ferramentas, sabe que nelas conseguimos configurar tudo, como nome de seleção, nome de indicador, conseguimos criar indicador novo, e modificar a hierarquia.

Entretanto, em um **dashboard corporativo**, isso é proibido. **A ferramenta de dashboard deve servir apenas para exibir os números já gravados na base**. Ela foi feita para isso, então não devemos implementar informações, fórmulas, ou modificar dados.

**Atenção:** não nos referimos a dashboards pessoais ou departamentais, aqueles em que temos uma planilha de *Excel* ou a base de dados local que queremos conectar e construir algum tipo de relatório. Esses, sim, poderão ter tudo alterado. Porém, quando falamos de informação corporativa para tomada de decisão, isso não pode ser feito.

As ferramentas de dashboard têm como princípio uma facilidade enorme de construir relatórios e elas são realmente voltadas para a pessoa usuária não técnica. Normalmente, a pessoa usuária que é dona da informação pode construir seus próprios relatórios.

Nesse caso, não. Quando falamos de dashboards corporativos, a pessoa usuária do departamento não vai nem tocar no desenvolvimento desses relatórios vindos do Data Warehouse. Nas empresas, normalmente existirá um departamento de TI (tecnologia da informação) especializado em construir os dashboards, e esse departamento só vai construir os dashboards corporativos.

**Logo, nada será configurado na ferramenta. Podemos fazer isso se quisermos, mas não devemos**. Então, como fazer para que o metadado já esteja dentro do banco de dados OLAP e faça com que o dashboard herde todos esses nomes? Mostraremos isso no *Visual Studio*.

Começaremos **modificando o nome das dimensões**. Vamos retornar à exibição de dados (`DW ATACADEZ.dsv`) e acessar também a documentação do projeto de *Business Intelligence*.

No início da documentação, temos como o modelo foi levantado, isto é, quais são os nomes das dimensões, os nomes dos níveis, dos atributos, e das hierarquias.

Utilizaremos os nomes contidos na documentação. Para isso, temos o nome das dimensões:

> - `CLIENTE`
> - `PRODUTO`
> - `EMPRESA`
> - `TICKET`
> - `TEMPO`

Para modificar os nomes na visualização de dados, vamos clicar primeiro na dimensão cliente (`dim_cliente`). Na lateral direita, teremos o campo "*FriendlyName*" (Nome Amigável). Modificaremos o nome amigável para `Cliente`. Automaticamente, o nome irá mudar para `Cliente` na aba "Tabelas" à esquerda.

A dimensão departamento (`dim_departamento`) representa o nível departamento da dimensão `PRODUTO`, porque `PRODUTO` foi implementado usando o modelo floco de neve. Modificaremos o nome amigável para `Departamento`.

Em `dim_fornecedor`, vamos alterar o nome amigável para `Fornecedor`. Para `dim_empresa`, usaremos `Empresa`; para `dim_produto`, usaremos `Produto`; a dimensão `dim_tempo` nós chamaremos de `Tempo`; e por último, a tabela `fact_venda` será chamada de `Venda`.

## Conclusão

Com isso, temos o nome das dimensões. Serão esses os nomes criados dentro do OLAP quando construirmos a base de dados. Além disso, serão esses nomes que aparecerão no dashboard quando fizermos a visualização utilizando esses dados através da ferramenta de dashboard escolhida.

Vamos continuar a criar os metadados no ambiente de visualização da fonte de dados do modelo do *Analysis Services*.

## <span style="color: #ffffff;">Mudando o nome dos campos</span>

Além dos nomes das tabelas, também é muito importante que o nome dos campos, obviamente contidos nessas tabelas, estejam em conformidade com as entidades definidas no início do projeto do modelo de *Business Intelligence*.

Esses nomes de campos também desempenham um papel crucial na representação dos níveis de cada dimensão, bem como o nome dos atributos e das medidas.

Como podemos modificar o nome dos campos originais do *Data Warehouse* para garantir que sejam transportados corretamente para o *Data Mart*? É o que veremos neste vídeo, onde iremos **alterar o nome dos campos**.

Vamos começar evidenciando duas janelas, onde temos o **nome das tabelas** à esquerda e as **propriedades** à direita, juntamente com a documentação do projeto aberta. Começaremos examinando os nomes que estão na documentação e refletir isso na base OLAP.

Começaremos com a dimensão **cliente**, onde o nível *input* é chamado de "CNPJ e Nome do Cliente". Sendo assim, na tabela `Cliente`, o `cod_cliente` representa o identificador natural, que é o CNPJ. Clicando sobre o campo, nas propriedades à direita, temos o *FriendlyName* (Nome Amigável), que iremos alterar para "CNPJ".

Quanto ao descritor do cliente (`desc_cliente`), o chamaremos de "Nome do Cliente". O atributo tamanho do cliente (`atr_tamanho_cliente`) será renomeado para "Tamanho do Cliente".

Enquanto isso, dentro da geográfica de cliente, o nome do campo é "Cidade". Porém, cidade tem um identificador (`cod_cidade`) e um descritor (`desc_cidade`). No caso do identificador, chamaremos de "Código da Cidade"; e no descritor, colocaremos o nome do nível "Cidade".

Faremos a mesma coisa com o estado (`cod_estado`). No entanto, para o estado há uma sigla, então iremos chamar o código do estado de "UF", unidade da federação. No descritor do estado (`desc_estado`), chamaremos apenas de "Estado".

Em seguida, vamos renomear `cod_regiao` para "Código da Região", e `desc_regiao` para "Região". Da mesma forma, iremos alterar o nome amigável de `cod_segmento` para "Código do Segmento" e de `desc_segmento` para "Segmento".

Para a tabela `Departamento`, que está relacionada à dimensão **produto**, temos o "Setor" e o "Produto". Na tabela, onde temos `cod_setor`, colocaremos o texto "Código do Setor". Em seguida, em `desc_setor`, definiremos o nome "Setor".

Agora vamos acessar a tabela `Empresa` e abrir a dimensão **empresa** na documentação. Temos no nível input "Identificador e Nome da Loja", então iremos chamar `cod_loja` de "Identificador Loja" e `desc_loja` de "Loja". O `atr_tipo_loja` será chamado de "Tipo da Loja".

No caso da empresa, temos o CNPJ e o nome da empresa. Colocaremos, então, o nome "CNPJ da Empresa" no lugar de `cod_empresa` e, na sequência, "Empresa" em `desc_empresa`.

A próxima tabela é a `Fornecedor`, que está na dimensão **produto**. Nós temos o código do fornecedor (`cod_fornecedor`), que chamaremos de "Código do Fornecedor", e no descritor (`desc_fornecedor`), teremos "Fornecedor".

Continuando na mesma dimensão, agora na tabela `Produto`, analisaremos o nível input chamado "SKU e Nome do Produto". Note que ignoramos os identificadores primários, ou seja, não modificamos os nomes. Vamos renomear `cod_produto` como "SKU" e `desc_produto` como "Produto".

O atributo `atr_unidade_medida` será chamado "Unidade de Medida". No caso do fornecedor, chamaremos `cod_fornecedor` de "Código do Fornecedor" e `cod_setor` de "Código do Setor".

> **Lembre-se:** a dimensão produto é a dimensão flocos de neve. Sabendo haver uma ligação entre o campo "Código do Fornecedor" na tabela `Fornecedor` e o campo "Código do Fornecedor" da tabela `Produto`, colocamos o mesmo nome, mas não é necessário que sejam iguais.

Para a dimensão **tempo** (tabela `Tempo`), temos o `cod_dia` que será chamado de "Código do Dia", seguindo o formato "AAAAMMDD". A `data` será chamada de "Dia". Nos atributos, temos o `atr_dia_semana` ("Dia da Semana") e o `atr_fim_de_semana` ("Fim de Semana").

Em seguida, preencheremos o `cod_mes` como "Código do Mês" e `desc_mes` como "Mês e Ano". Nomearemos dessa forma pois foi assim que criamos, concatenando o nome do mês com o ano. Assim, destacamos que esse campo tem, na verdade, um mês e um ano.

O nome amigável de `cod_trimestre` será "Código do Trimestre", e o de `desc_trimestre` será "Trimestre e Ano". Da mesma forma, `cod_semestre` será "Código do Semestre" e `desc_semestre` será "Semestre e Ano". Por fim, renomearemos `cod_ano` como "Ano".

Por último, temos a tabela de fato (`Venda`). Mantemos os identificadores, pois não modificamos o nome, porém, temos o nome dos indicadores na documentação. O primeiro é "Quantidade Vendida" (`quantidade_vendida`), o segundo é "Valor da Venda" (`valor_venda`), e o último indicador, já calculado, é "Custo de Venda" (`custo_venda`).

## Conclusão

Dessa forma, já temos os nomes amigáveis dos campos, baseados na documentação do modelo de business intelligence em que estamos trabalhando.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Dimensão Empresa (definindo dimensões e regras de negócio)</span>

Agora, precisaremos especificar cada dimensão do OLAP, com base nas tabelas e campos que já tiveram seus nomes alterados. Vamos aproveitar esse momento para criar a regra de negócio da base de dados.

> Quando falamos em criar a regra de negócio, nos referimos a incluir os níveis hierárquicos e os atributos para cada uma das dimensões do modelo.

Começaremos com a dimensão **empresa**. Como podemos criar a dimensão empresa dentro do OLAP com base nas tabelas e campos que já foram mapeados no *Data Warehouse*, nos quais os nomes já foram modificados? É o que faremos neste vídeo!

Vamos voltar para o *Visual Studio*. No projeto, dentro do diretório "DataMartVendas", há uma pasta chamada "Dimensões". Clicando com o botão direito sobre ela, vamos escolher a opção "Nova Dimensão…". Será aberta uma janela de assistente onde clicaremos em "*Next*".

Como método de criação, escolheremos a opção "**Usar uma tabela existente**". Criaremos a dimensão baseada na tabela `Empresa` que já temos no Data Warehouse.

Na próxima etapa, vamos definir todos os atributos que queremos que apareçam na base. A única exceção é que o atributo chave é obrigatório, ele deve aparecer dentro da base. Podemos usar o identificador da loja, o nome da loja, o tipo da loja, o CNPJ da empresa e a empresa.

A coluna "Habilitar Navegação" é usada para indicar se queremos visualizar esses campos ao consultar a base de dados. Também temos a coluna "Tipo de Atributo". Não vamos nos aprofundar muito nesse detalhe, mas já podemos ter modelos de dimensão previamente prontos para cada tipo de nível. Neste caso, vamos criar dimensões regulares.

Após clicar em "Next", teremos o esquema da dimensão:

> - Empresa
>     - Atributos
>         - Id Loja
>         - Identificador Loja
>         - Loja
>         - Tipo Da Loja
>         - CNPJ Da Empresa
>         - Empresa

Ao clicar em "Concluir", surge uma janela que mostra como está organizada a dimensão.

Vamos criar uma **nova hierarquia**. Se analisarmos o nosso modelo, a dimensão empresa possui uma hierarquia, cujo nome é "Empresa", que tem como nível mais baixo "Loja" e o nível mais alto "Empresa". Para criar uma hierarquia, basta arrastar um dos campos no OLAP, começando do nível mais alto para o nível mais baixo.

Quem identifica a empresa é o código natural dela, ou seja, o CNPJ. Então, vamos arrastar primeiro o campo "CNPJ Da Empresa" para a seção "Hierarquias" no centro. O próximo nível seria o identificador da loja, então arrastamos "Identificador Loja".

Clicando sobre a hierarquia, surge uma janela à direita onde podemos modificar as propriedades da hierarquia. Se colocarmos o nome da hierarquia como "Empresa", haverá um problema, porque esse nome já existe. Então, vamos substituir por "Nível Empresa".

> Você pode se perguntar o seguinte: por que selecionamos o identificador da loja? Se visualizarmos essa hierarquia, encontraremos o código da loja. Mas seria interessante ter o nome da loja. Então, você poderia argumentar que precisamos arrastar o campo "Loja" em vez de "Identificador Loja".
> 
> No entanto, não é efetivo usar descritores para definir relações. Devemos sempre **usar os códigos**.

Porém, ao visualizar, é útil obter o nome. Ou seja, internamente, organizaremos a hierarquia pelos códigos. Mas, ao visualizar, precisamos ter o nome.

Portanto, ao clicar em "CNPJ Da Empresa", temos o atributo "*SourceAttribute*" na janela de propriedades à direita. Nesse campo, podemos escolher que o atributo fonte é "Empresa". Assim, internamente, organizamos a hierarquia pelo código, e ao visualizar, temos o nome da empresa.

Faremos o mesmo com o nível "Identificador Loja": o "SourceAttribute" será "Loja".

## Conclusão

Nossa dimensão empresa está pronta com uma hierarquia: a "Nível Empresa".

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Revisando a configuração do ambiente</span>

Tudo o que fizermos no projeto do *Visual Studio*, precisamos refletir no servidor do *Analysis Services*. Logo, precisamos publicar no servidor as entidades que estão sendo criadas no projeto. Porém, é necessário alterar uma configuração padrão no ambiente para permitir isso.

Neste vídeo, vamos **publicar a dimensão empresa** no servidor e fazer essa alteração no nosso ambiente.

Quando instalamos o Analysis Services, há uma tela onde configuramos os usuários de serviço do ambiente. Analisando a documentação deste curso, logo no início, a primeira atividade é a configuração do ambiente. Em determinado momento, o instalador mostra todos os serviços e os usuários que serão utilizados nesses serviços.

Na instalação padrão, isso não é modificado. Contudo, o usuário de serviço "NT Service\\MSSQLServer" para o *SQL Server Analysis Services* não permitirá que o nosso projeto publique as alterações no servidor. Portanto, precisamos alterar esse usuário.

Mas para que usuário? Quando nos conectamos ao Analysis Services, utilizamos a autenticação do *Windows*. E o usuário que utilizamos para nos conectar à base é o usuário que está conectado à máquina no momento. Por exemplo: se digitarmos no Prompt de Comando o comando `whoami`, será informado o usuário.

Também na instalação do Analysis Services, há um momento em que informamos quem é o usuário administrador do ambiente. Geralmente, utilizamos a pessoa usuária que está logada no momento da instalação. Portanto, precisamos substituir a pessoa usuária que gerencia o serviço do Analysis Services pelo usuário retornado no Prompt de Comando.

Para fazer isso, vamos em "Serviços" na máquina, até ao serviço do Analysis Services ("SQL Server Analysis Services (MSSQLSERVER)"), e iremos alterar a pessoa que gerencia esse serviço.

Para fazer essa modificação, é necessário clicar sobre o serviço com o botão direito do mouse, ir até "Propriedades > Logon". No campo "Esta conta", teremos o usuário padrão da instalação.

Vamos clicar em "Procurar… > Avançado… > Localizar agora" para visualizar todos os usuários da máquina. Devemos escolher a pessoa usuária que está conectada. Feito isso, digitamos a senha, depois clicamos em "Aplicar" e em seguida em "OK". Por fim, vamos reinicializar o serviço.

> Voltando ao servidor, vamos apenas desconectar e conectar novamente, para garantir que seja utilizado o serviço com a nova pessoa usuária para a qual alteramos.

Agora vamos voltar ao Visual Studio para **publicar** nossas modificações. Com o projeto do `DataMartVendas` à direita, vamos clicar com o botão direito do mouse e clicar em "Recompilar". Essa opção verificará se há algum erro na configuração.

Clicando novamente com o botão direito sobre `DataMartVendas`, escolheremos agora a opção "Processar…". Surgirá uma caixa de diálogo dizendo que a base não existe e perguntando se queremos criá-la primeiro. Nesse momento, a pasta "Bancos de Dados" está vazia.

Antes de processar as dimensões, precisamos **criar a base**. Ao confirmar, será aberta uma nova janela de criação da base. Ao clicar em "OK", será criada a base de dados no Analysis Services e serão lidos os dados da dimensão empresa para criar a dimensão empresa na base OLAP.

O OLAP, conforme abordado em aulas anteriores, funciona com base na tabela de dimensão para criar fórmulas. É justamente isso que está sendo feito: a criação interna dessas fórmulas, as fórmulas de consolidação do OLAP. Ao terminar, podemos visualizar tudo o que foi feito para criar a dimensão.

Finalizado o processo, podemos fechar as janelas e acessar o Management Studio. Após atualizar "Banco de Dados", conseguimos visualizar a base `DataMartVendas` e a dimensão empresa.

> De volta ao Visual Studio, há um botão chamado "Navegador". Ao clicar nele, visualizamos a hierarquia, criada conforme os metadados. Temos o primeiro nível que é a empresa ("ATACADEZ") e, em seguida, a loja. Note que estamos visualizando o descritor, mas internamente, é usado o código, isto é, o identificador

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Procesando o OLAP</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Nosso ambiente já tem seu próprio usuário gerenciando o serviço do</span> *Analysis Services*<span style="color: #c0c0c0;">. Podemos</span> **processar o OLAP** <span style="color: #c0c0c0;">pelo</span> *Visual Studio* <span style="color: #c0c0c0;">e transferir os componentes criados para o servidor do Analysis Services. É exatamente isso que faremos agora!</span></span>

No ambiente do Visual Studio, vamos clicar sobre o projeto `DataMartVendas` no gerenciador de soluções à direita. Com o botão direito do mouse, clicaremos em "Recompilar".

O "Recompilar" verifica se está tudo certo com o ambiente. No caso do instrutor, o processo foi bem-sucedido. Em seguida, com o botão direito novamente, clicaremos em "Processar…".

O sistema informa que o servidor verificou que a base `DataMartVendas` ainda não existe e pergunta se desejamos implementar a criação desse projeto primeiro. Vamos concordar e será iniciado o processo, apresentando na sequência uma janela.

Essa janela mostra quais processamentos precisarão ser feitos para transferir os novos componentes que estão no Visual Studio para o servidor do Analysis Services. Vamos clicar em "OK" no canto inferior direito para confirmar e iniciar o processamento.

Feito isso, o sistema irá buscar os dados da dimensão empresa no *Data Warehouse* e transferir essa estrutura para o OLAP, isto é, para o Data Mart, com as hierarquias definidas anteriormente.

> Quando explicamos a estrutura do OLAP, mencionamos a tabela de dimensões. A partir dela, são construídas as **fórmulas de consolidação**. Por exemplo, "sucos" era a soma de "laranja" e "maçã", e "águas" era a soma de "com gás" com "sem gás". No total, "produtos" seria a soma de "sucos" e "águas". Essa fórmula é montada internamente, baseada no conteúdo da tabela.
> 
> O que fizemos aqui foi justamente isso: o OLAP analisou a dimensão empresa, o conteúdo da tabela no Data Warehouse, e trouxe para o ambiente do Analysis Services, no servidor, a fórmula de consolidação.

Após confirmar o processamento e fechar o projeto, a publicação estará concluída. No Analysis Services do Management Studio, podemos verificar isso clicando com o botão direito do mouse sobre "Banco de Dados" e depois "Atualizar". A base criada (`DataMartVendas`) e a dimensão `Empresa` serão exibidas.

> De volta ao Visual Studio, após processar a dimensão, é possível clicar em "Navegador" para visualizar a base e navegar nela. Assim, temos a empresa "ATACADEZ" e a "ND" (Não Definido), que é o membro da dimensão com o ID (identificador primário) igual a 0.
> 
> Ao abrir "ATACADEZ", visualizamos a lista de lojas. Durante a navegação na dimensão, é exibido o nome da loja e o nome da empresa. Isso ocorre porque alteremos o "*SourceAttributes*" durante a configuração da dimensão.

A dimensão empresa foi criada no servidor.

Vamos agora revisitar e repetir as etapas essenciais que foram realizadas na construção do OLAP durante esta aula. É fundamental que seu projeto esteja completo antes de prosseguirmos com as próximas aulas. Solucione as demandas a seguir. :

1 - Modifique o nome das tabelas e campos apresentados na exibição de dados para que estejam de acordo com a documentação apresentada no início do projeto.

*Dica:* Isso garantirá que a base de dados seja compreensível quando visualizada no dashboard pelo usuário.

2 - Crie a dimensão empresa, certificando-se de definir as hierarquias e os campos de exibição dos membros da dimensão durante a navegação.

*Dica:* Utilize os identificadores naturais como representantes de cada nível e acrescente os níveis de forma adequada, do nível mais baixo ao mais alto.

3 - Faça os ajustes na instalação padrão do seu ambiente para que você possa processar a base de dados do projeto do Visual Studio para o servidor do Analysis Services.

*Dica:* Certifique-se de modificar o usuário de gerenciamento do serviço para que seja o mesmo usuário Windows que é administrador do Analysis Services.

4 - Processe a dimensão empresa dentro do Visual Studio.

*Dica:* Lembre-se de que processar a base é um clique simples, mas a configuração do usuário e as parametrizações corretas durante a criação da dimensão são fundamentais para que o objeto seja armazenado no OLAP de forma adequada.

&nbsp;

Uma etapa crucial é a renomeação das tabelas e campos que aparecem na visualização dos dados. Esses nomes precisam estar em conformidade com a documentação inicial do projeto. Por isso, certifique-se de que há essa coerência nesse primeiro momento.

Além disso, é necessário criar a dimensão "empresa". Lembre-se de definir as hierarquias e os campos de exibição dos membros dessa dimensão durante a navegação.

Para garantir uma integração adequada, faça os ajustes necessários na configuração padrão do seu ambiente, permitindo que você processe a base de dados do projeto do Visual Studio para o Servidor do Analysis Services.

Por fim, não deixe de processar a dimensão "empresa" para consolidar todas as alterações realizadas até o momento.

**Observação:** É essencial incorporar os nomes precisos das tabelas e campos na exibição de dados, pois isso desempenhará um papel crucial na compreensão da base de dados quando forem apresentadas no dashboard e visualizadas pelo usuário.

- Recomendamos que você revise a documentação no NOTION do seu modelo e siga o mesmo processo demonstrado pelo instrutor nos primeiros dois vídeos desta aula.

A criação da primeira dimensão com precisão servirá como base para o aprendizado das etapas subsequentes envolvendo outras dimensões. Portanto, ao criar a dimensão "empresa", é fundamental que você utilize os identificadores naturais como representantes de cada nível, adicione os níveis na ordem correta (do nível "output" ao nível "input"), e faça a modificação do nome de exibição dos membros da dimensão. Isso garantirá que os usuários visualizem nomes legíveis durante a navegação, em vez de códigos.

Uma outra etapa crucial é a modificação do usuário de gerenciamento do serviço para coincidir com o usuário Windows que possui privilégios de administrador no Analysis Services. Isso é um requisito básico para processar com sucesso o que foi construído no projeto do Visual Studio e transferir esses objetos para o servidor.

Embora a ação de processar a base pareça simples dentro do Visual Studio, é importante destacar que a configuração do usuário e as configurações adequadas durante a criação da dimensão desempenham um papel fundamental na garantia de que o objeto seja armazenado de maneira precisa no OLAP. Portanto, atente-se a esses detalhes para obter resultados satisfatórios.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Dimensão Cliente</span>

Agora passaremos para a Dimensão Cliente. Precisamos especificar essa dimensão, lembrando que ela possui mais de uma hierarquia.

Como podemos criar a dimensão cliente dentro do OLAP com base nas tabelas e campos que estão no *Data Warehouse* (cujos nomes já foram modificados) configurando múltiplas hierarquias? É o que veremos agora.

## Criando a Dimensão Cliente

Voltando ao Visual Studio, acessaremos a aba lateral do Gerenciador de Soluções, no qual expandiremos os arquivos do "DataMartVendas". Entre eles, buscaremos a pasta "Dimensões", na qual clicaremos como botão direito do mouse e selecionaremos "Nova Dimensão".

Na janela do assistente para dimensões, clicaremos em "Next" na parte inferior. Optaremos por "Usar uma tabela existente" e clicaremos em "Next" novamente. Na seção "Tabela principal", selecionaremos a tabela "Cliente" e clicaremos em "Next". Na próxima seção, que terá três colunas, marcaremos todos os campos da tabela junto à opção "Habilitar navegação".

Vamos desmarcar a opção "Habilitar navegação" para os campos "Código da Cidade", "Código da Região" e "Código do Segmento". Não vamos usar essa opção no código da cidade porque não temos necessidade de mostrar o código da cidade no momento de visualizar a base.

Quando nós carregamos o *Data Warehouse* e provavelmente também no momento do *Data Mart*, não havia um identificador natural da cidade e nem da região. Assim, utilizamos o próprio descritor para isso. Por isso, não tem necessidade do código da cidade e do código da região fazerem parte da estrutura de navegação. O mesmo vale para o código do segmento.

Após desmarcar o atributo de navegação dos três campos mencionados, clicaremos em "Next" e depois em "Concluir".

## Criando Hierarquias

Vamos começar com a primeira hierarquia. Se observarmos a documentação, temos na entidade cliente a ***hierarquia geográfica***.

Na aba "Estrutura da Dimensão" do Visual Studio, temos as seções "Atributos", à esquerda, "Hierarquias", no centro e "Exibição da Fonte de Dados" à direita. Em "Atributos", vamos arrastar a opção "Código da Região" para "Hierarquias", o que gerará um retângulo com a opção "" em sua parte inferior. Arrastaremos a opção "UF" (que é o estado) de "Atributos" para "" , depois o "Código da Cidade" para "" e por fim o "CNPJ" do cliente para "".

A hierarquia ficou então pelas seguintes categorias: códigos da região, cidade, estado e CNPJ. Apesar dos códigos da região e da cidade serem também seus próprios descritores, mas eles foram usados aqui conforme a regra orientada: sempre utilizar os identificadores naturais para criar a hierarquia.

| **Hierarquia** |
| --- |
| Código Da Região |
| UF  |
| Código Da Cidade |
| CNPJ |
|     |

Clicando sobre o nome "Hierarquia", vamos acessar a aba de propriedades na lateral inferior direita, buscar o campo "Name" e renomeá-la para "Nível Geográfico". Faremos o mesmo processo para "Código da Região", buscando o campo "Source Attribute" e alterando seu conteúdo para "Região". Clicando sobre "UF", faremos o mesmo processo, trocando a opção do "Source Attribute" para "Estado". O código da cidade vai usar como "Source Attribute" a opção "Cidade" e, por fim, o CNPJ vai usar como "Source Attribute" o "Nome Do Cliente".

Se observarmos a documentação, temos uma outra hierarquia, que é a\*\*\* hierarquia de segmento\*\*\*. Deste modo, vamos arrastar o "Código Do Segmento" de "Atributos" para "Hierarquias", de modo a criar outro retângulo de hierarquia, e arrastaremos "CNPJ" para a opção "" dessa nova hierarquia.

> Vamos chamar a nova hierarquia de "Nível Segmento". Para "Código Do Segmento" selecionaremos como "Source Attribute" o "Segmento". Já para o CNPJ, o "Source Attribute" será "Nome Do Cliente".

Temos então as duas hierarquias. Na aba do Gerenciador de Soluções, clicaremos com o botão direito do mouse no "DataMartVendas", escolheremos "Processar". Na janela exibida, clicaremos em 'Sim'. Na nova janela exibida, confirmaremos que desejamos continuar com a substituição do banco de dados clicando em "Sim".

Em seguida, será exibida outra janela, na qual temos que pressionar "Tab" até chegar ao botão "OK" e clicar nele. Após esse processo, aguardaremos até que seja concluída a dimensão cliente e a dimensão empresa, no qual ele lê o Data Warehouse e cria as fórmulas usando as duas hierarquias. Vamos esperar um pouco até o processo terminar.

Após a seção "Status" exibir a mensagem informando que o processo foi realizado com sucesso, fecharemos as janelas de diálogo. Voltando ao Management Studio e acessando o explorador, se atualizarmos a pasta "Dimensões", já teremos em seu interior duas dimensões: "Cliente" e "Empresa".

Voltando ao Visual Studio, vamos clicar em "Navegador". Isso exibirá na tela principal as regiões.

- All
- Centro-Oeste
- ND
- Sudeste
    - Minas Gerais
        - Belo Horizonte
            - Escola Criativa Teens
            - Restaurante do Chef
            - Supermercados Econovita
            - Supermercados MegaCompras
            - Supermercados MegaVida
            - Supermercados NovaVisão
            - Supermercados Vida Saudável
        - Salvador
        - Rio de Janeiro
        - São Paulo
- Sul

Temos as regiões centro-oeste, sudeste e sul. Se clicarmos em sudeste, teremos os estados. Se clicarmos nos estados, teremos a cidade. Se clicarmos na cidade, teremos os clientes. Isso ocorre se olharmos o nível geográfico.

Se escolhermos o nível segmento na seção "Hierarquia", teremos os segmentos e abaixo de cada segmento o seu cliente. Podemos ter mais de um cliente. A Indústria Alimentícia, por exemplo, tem dois clientes que fazem parte do mesmo segmento.

- All
    - Buffet
        - Buffet Encanto Festivo
    - Cafeteria
        - Cafeteria Aroma & Sabor
    - Casa de Repouso
        - Casa de Repouso Harmonia
    - Empresa de Catering
    - Empresa de Eventos
    - Escola
    - Hotel
    - Indústria Alimentícia
        - Indústria Alimentícia Sabor Real
        - Indústria de Doces e Chocolates DoceSabor
    - Lanchonete
    - ND
    - Padaria
    - Restaurante
    - Sorveteria
    - Supermercado Varejista

Portanto, podemos utilizar ambos os níveis que são as hierarquias e, dependendo de qual hierarquia escolhermos, teremos uma forma diferente de navegar na estrutura.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Dimensão Produto</span>

Já processamos as dimensões Empresa e Cliente. Agora, vamos processar a dimensão Produto.

A dimensão Produto tem uma diferença em relação às dimensões Cliente e Empresa. Ela também possui múltipla hierarquia, mas o implementamos no *Data Warehouse* como um modelo Floco de Neve. Os níveis Fornecedor e Departamento estão em tabelas separadas. Nesse caso, como criar a dimensão Produto a partir de várias tabelas?

## Criando a Dimensão Produto

Vamos voltar ao projeto do Visual Studio para criar a dimensão Produto. Na aba lateral do Gerenciador de Soluções, entre os arquivos do *Data Mart* de vendas, utilizaremos o botão direito do mouse sobre "Dimensão" e clicaremos em "Nova Dimensão". Na janela do assistente, selecionaremos "Usar uma tabela existente" e selecionaremos a tabela "Produto".

Devemos notar que escolhemos a tabela no nível mais baixo da relação de tabelas que compõem a dimensão Produto — que é formada pelas tabelas de produto, fornecedores e departamentos. Existe uma relação de 1 para N entre "Fornecedor" e "Departamento" com "Produto". Portanto, a tabela "Produto" é a inferior hierarquicamente e foi ela que escolhemos.

Ao fazer essa escolha e clicar em "Next" (próximo), o sistema nos mostra que a tabela "Produto" tem um relacionamento com as outras duas tabelas e nos pergunta se queremos trazê-las para a criação da dimensão. Marcamos a caixa de seleção dessas duas tabelas e clicaremos em "Next". Na tela seguinte, teremos as colunas de nome, habilitar navegação e tipo de atributo com todos os campos das duas tabelas.

Notaremos que a coluna "Código Do Fornecedor" aparece em ambas as tabelas, "Produto" e "Fornecedor". Contudo, aqui, ele surge apenas uma vez na lista de campos.

Vamos selecionar todos os itens como nome de atributo. Todos serão considerados na criação da dimensão. No entanto, vamos desabilitar o código do setor como atributo de navegação porque o código natural dele foi construído a partir do descritor de setor. Portanto, vamos preferir não exibi-lo na hora da navegação.

Poderíamos não visualizar o código do fornecedor também, mas, é importante lembrar, este não é o descritor do fornecedor, mas sim o CNPJ do fornecedor. Decidiremos mantê-lo, pois pode ser que queiramos construir, por exemplo, um relatório por CNPJs.

Notaremos que, ao clicar em "Concluir", as tabelas da dimensão no modelo Flocos de Neve foram desenhadas em um diagrama na aba "Exibição da Fonte de Dados" : no topo, o retângulo da tabela mais baixa em relacionamento ("Produto"), ligado aos retângulos das tabelas superiores "Departamento", à sua direita, e "Fornecedor", abaixo, por meio de setas. Cada tabela exibe seus respectivos campos.

Na documentação sobre a Dimensão Produto, temos as hierarquias de Produto com Fornecedor e de Produto com Setor.

Vamos arrastar "Código do Fornecedor" da aba "Atributos" para "Hierarquias". Arrastaremos em seguida o "SKU", o código natural do produto (não é o "id_produto"), para o campo "" dessa hierarquia.

Para a segunda hierarquia, vamos trazer "Código do Setor" e "SKU" no campo "". A primeira hierarquia vamos chamar de "Hierarquia Fornecedor" e a segunda será "Hierarquia Departamento".

Na primeira hierarquia, a opção "Código do Fornecedor" terá o nome "Nível Fornecedor" e o *Source Attribute* "Fornecedor", enquanto a opção "SKU" terá o nome "Nível Produto" e o *Source Attribute* "Produto".

Na segunda hierarquia, a opção "Código do Setor" terá o nome "Nível Setor" e o *Source Attribute* "Setor", enquanto a opção "SKU" terá o nome "Nível Produto" e o *Source Attribute* "Produto".

Salvaremos as alterações e, no interior da aba do Gerenciador de Soluções, clicaremos com o botão direito do mouse sobre o *Data Mart* de vendas e escolheremos "Recompilar" para verificar se está tudo correto.

Em seguida, clicaremos com o botão direito do mouse e escolheremos "Processar". Responderemos "Sim" em todas as caixas de diálogo. Na janela de processar o banco, faremos "Tab" até o final da janela e pressionaremos "Enter". Com isso, o sistema abrirá outra janela na qual está transportando a dimensão Cliente, a dimensão Empresa e a dimensão Produto.

Estamos sempre processando a base toda. Não precisamos necessariamente processar toda a base. Podemos escolher o que queremos processar. No entanto, para garantir, vamos sempre processar a base toda.

Vamos clicar em "Fechar" na aba que processou o banco. Voltaremos ao *Management Studio*, no explorador lateral, e atualizaremos a pasta "Dimensões" no *Data Mart* de vendas. Com isso, veremos em seu interior a dimensão "Produto".

Voltando ao Visual Studio, podemos navegar sobre essa Dimensão. Como ela tem múltipla hierarquia, estamos olhando inicialmente a "Hierarquia Departamento", selecionada na seção "Hierarquia" do menu. Se expandirmos cada opção, temos os produtos de cada departamento.

- All
    - Bebidas
    - Carnes
    - Frutas e Verduras
    - Laticínios
        - Iogurte
        - Leite
        - Manteiga
        - Ovos
        - Queijo
    - Mercearia
    - ND
    - Padaria

Se mudarmos a hierarquia para "Hierarquia Fornecedor", veremos os fornecedores e os produtos que cada fornecedor fornece para a empresa.

- All
    - Comercio de Laticinios LTDA
    - Comercio de Paes LTDA
    - Distribuidor de Alimentos LTDA
    - Distribuidora de Bebidas LTDA
    - Distribuidora de Carnes LTDA
        - Carne bovina
        - Carne de frango
    - Distribuidora de Farinhas LTDA
    - Fornecedora de Cafes LTDA
    - Fornecedora de Carnes LTDA
    - Fornecedora de Frutas LTDA
    - Fornecedora de Laticínios LTDA
    - ND

Assim também é na dimensão Cliente, em cuja aba "Cliente.dim" é possível navegar e ver os clientes pela "Hierarquia geográfica".

- All
    - Centro Oeste
    - ND
    - Sudeste
        - Minas Gerais
        - Rio de Janeiro
            - Niterói
                - Indústria de Doces e Chocolates DoceSabor
            - Rio de Janeiro
        - São Paulo
    - Sul

Ou, se escolhermos a "Hierarquia Segmento", ver os clientes pela hierarquia segmento.

- All
    - Buffet
    - Cafeteria
        - Cafeteria Aroma & Sabor
    - Casa de Repouso
    - Empresa de Catering
    - Empresa de Eventos
    - Escola
    - Hotel
    - Industria Alimentícia
    - Lanchonete
    - ND
    - Padaria
    - Restaurante
    - Sorveteria
    - Supermercado Varejista

&nbsp;

&nbsp;

# Carga e Documentação

# <span style="color: #ffffff;">Criação do OLAP Vendas (medidas)</span>

Temos agora, então, todas as dimensões do Data Mart criadas e processadas, ou seja, se eu for lá na Analysis Services, já tenho todas essas dimensões, inclusive a dimensão Tempo com a sua ordem correta.

Chegou a hora de criar o cubo, criar a base de dados.

Fazendo uma analogia com aquele esquema que eu mostrei para vocês no início aqui do curso de como funciona um OLAP, por enquanto eu só carreguei as fórmulas, a relação entre os níveis de cada dimensão.

Chegou a hora de carregar a tabela de fato e consolidar os dados dentro daquela matriz baseado nas estruturas das dimensões.

Então é o que nós vamos fazer agora nesse vídeo, falando sobre a criação do OLAP Vendas. Vamos voltar lá para o Visual Studio.

Voltei ao Visual Studio e agora nós vamos construir a base de dados propriamente dita. Relembrando o esquema que eu mostrei nesse curso sobre a estrutura do OLAP, chegou a hora de eu ler a tabela de fato, jogar na estrutura matricial e fazer as consolidações.

Para isso, no gerenciador de soluções, onde eu tenho a definição do Data Mart, eu tenho uma pasta chamada Cubos. Eu vou clicar com o botão direito do mouse sobre a pasta "Cubos" e selecionar "Novo Cubo".

Vai abrir a janela assistente para cubos, clico em "Next" e eu tenho vários métodos de criação. Eu vou fazer igual fiz com as dimensões. Eu vou usar uma tabela já existente, pois eu tenho um Data Warehouse.

Eu vou ver aqui todas as dimensões e, claro, eu vou escolher a tabela de fato "Venda" que vai ser fonte desse meu cubo. Vou clicar em "Next" e ele vai me mostrar os indicadores.

Ele, automaticamente, vai ver que tem três indicadores lá e vai me sugerir um indicador que representa o número de linhas que cada cruzamento vai possuir.

- Quantidade Vendida
- Valor da Venda
- Custo da Venda
- Contagem Venda

Eu não vou utilizar essa variável "Contagem Venda" que ele está sugerindo. O meu modelo só vai querer ver quantidade vendida, valor da venda e custo da venda. Eu clico em "Next > Next > Concluir".

Ele vai me mostrar a tabela de fato com as dimensões com que ela se relaciona.

Vamos agora, então, fazer a criação da base lá no servidor.

Botão direito do mouse sobre `DataMartVendas`, clique em "Recompilar" para ver se está tudo certo. E, em seguida, clique com botão direito do mouse em `DataMartVendas` e seleciona "Processar".

Terminou o processamento. Vou fechar a caixa de diálogo. E se a gente clicar na opção "Navegador", é possível navegar na base de dados.

Eu tenho essa tela onde eu posso ver aqui as medidas da minha base. Tenho aqui as dimensões, as hierarquias e é possível ver todos os níveis.

Pois bem, eu vou selecionar aqui, Tempo. Vamos selecionar aqui o "Ano". Eu vou arrastar o ano para cá e depois vou, por exemplo, escolher aqui o valor da venda.

Se eu clicar em "Clique para executar a consulta", eu vejo o resultado aqui desse número.

| Ano | Valor da Venda |
| --- | --- |
| 2021 | 1,952163E+07 |
| 2022 | 2,0784E+07 |

Se eu escolher aqui, por exemplo, na dimensão cliente, o nível região, e colocar aqui, ele vai criar mais uma coluna. Se eu executar a consulta, eu tenho agora o valor da venda por ano e por região.

| Ano | Região | Valor Da Venda |
| --- | --- | --- |
| 2021 | Centro Oeste | 7086160 |
| 2021 | Sudeste | 8968626 |
| 2021 | Sul | 3466844 |
| 2022 | Centro Oeste | 7597459 |
| 2022 | Sudeste | 9374788 |
| 2022 | Sul | 3811749 |

Aqui em cima, eu posso selecionar um filtro. Então, digamos que eu selecione agora, aqui em produto, o "Setor" . Eu jogo aqui em cima e aqui eu escolho o filtro no campo "Expressão do Filtro".

Então, por exemplo, eu quero ver só a venda de bebidas. Executo aqui a consulta e eu tenho agora, por exemplo, a venda de bebidas e por ano por região.

Notem que a própria base de dados do Data Mart tem a sua própria navegação de visualização dos dados.

O que vai acontecer mais adiante, quando a gente fizer o dashboard, o dashboard vai se conectar já com essa estrutura definida de hierarquia, da definição dos indicadores.

Essa estrutura já está dentro do Data Mart. Então, o dashboard simplesmente vai só exibir esse resultado que está aqui. E eu não vou construir nada dentro lá da tela de construção de relatórios.

Bem, temos então o nosso Data Mart criado, mas ainda faltam as colunas calculadas, os indicadores calculados baseados no custo da venda, na quantidade vendida e no valor da venda.

&nbsp;

# <span style="color: #ffffff;">Medidas calculadas</span>

Já temos a nossa base criada, o nosso Data Mart. Porém, sabemos que o indicador de custo, venda e quantidade não são os únicos indicadores do modelo.

Precisamos ainda criar os indicadores calculados. É neste momento que vamos incluir no Data Mart todos aqueles indicadores que não foram carregados no Data Warehouse, porque aqui eles serão calculados levando em consideração aqueles pontos que abordamos no início da formação.

Devemos nos recordar do curso de construção do Data Warehouse, onde mencionei sobre a consolidação dos indicadores. Agora, nesta fase, poderemos criar indicadores de preço, indicadores percentuais e calcular de forma correta dentro da base multidimensional.

Nesse vídeo, vamos criar as medidas calculadas.

Para isso, retornaremos ao Visual Studio. À direita, temos a documentação do modelo e, em indicadores, temos os indicadores calculados. Planejamos calcular quatro indicadores já que o custo de venda já foi calculado no Data Warehouse.

- Preço Unitário de Venda (Valor da Venda / Quantidade Vendida)
- Preço Unitário de Compra (Custo de Venda / Quantidade Vendida)
- Lucro (Valor da Venda - Custo da Venda)
- Rentabilidade ((Lucro/Valor da Venda) \* 100)

Vamos começar pelo Preço Unitário de Venda, que é o valor da venda dividido pela quantidade vendida. Para criar um novo indicador na nossa base, clique no botão "Cálculos". Em seguida, vai aparecer um menu horizontal onde clicaremos em "Novo membro calculado". O nome será `Preço Unitário de Venda` e ele será calculado pela divisão do valor da venda pela quantidade vendida.

```plaintext
[Measures].[Valor Da Venda] / [Measures].[Quantidade Vendida]
```

Vamos criar o próximo, clicaremos novamente em "Novo membro calculado". E nomearemos como `Preço Unitário de Compra`, que será o custo da venda dividido pela quantidade vendida.

```plaintext
[Measures].[Custo De Venda] / [Measures].[Quantidade Vendida]
```

Depois, criaremos o `Lucro`, que é o valor da venda menos o custo da venda.

```plaintext
[Measures].[Valor Da Venda] - [Measures].[Custo De Venda]
```

E, finalmente, criaremos o de `Rentabilidade`, que é o lucro dividido pelo valor da venda vezes 100.

```plaintext
([Measures].[Lucro]/[Measures].[Valor Da Venda]) * 100
```

Agora, temos os quatro indicadores calculados já disponíveis dentro da estrutura. Vamos processar o cubo e calcular esses indicadores.

Podemos recompilar e processar. Ao clicar em "Navegador", veremos que conseguimos separar os dados calculados dos dados de input.

Por exemplo, podemos pegar o ano, a rentabilidade, preço unitário de venda, o lucro, o custo da venda e o valor da venda.

| Ano | Rentabilidade | Preço Unitário de Venda | Lucro | Custo De Venda | Valor Da Venda |
| --- | --- | --- | --- | --- | --- |
| 2021 | 18,63206 | 7,445269 | 3637282 | 1,588435E+07 | 1,952163E+07 |
| 2022 | 18,64216 | 7,428825 | 3874586 | 1,690941E+07 | 2,0784E+07 |

Observamos que a rentabilidade é de 18% e temos o preço unitário da venda de 7,44. Se olharmos para o produto, teremos a rentabilidade e o preço unitário de cada um e o quanto lucramos.

Constatamos, então, que já temos os indicadores calculados e consolidados de maneira correta dentro da estrutura multidimensional.

&nbsp;

# <span style="color: #ffffff;">Atualização OLAP</span>

O Data Mart está pronto, todo o projeto está completo. Criamos as dimensões, carregamos a fato e geramos os indicadores calculados. Agora, precisamos criar um processo para atualizar esse Data Mart. Ele deve ser atualizado após a carga no Data Warehouse.

Vamos então retornar ao nosso fluxo inicial no Analysis Services e executar a atualização do Data Mart. É sobre isso que falaremos neste vídeo!

Retornei ao meu projeto no Visual Studio e agora vou ao Integration Services para criar mais um pacote que vai fazer a atualização do Data Mart. Clique com o botão direito do mouse sobre a pasta "Pacotes SSIS" e selecione "Novo pacote SSIS". Este novo pacote será nomeado como `CargaDataMart`.

Preciso abrir a caixa de ferramentas do Integration Services; no meu caso, ela não está aparecendo no canto esquerdo da minha tela. Posso clicar com o botão direito do mouse no centor da tela e selecionar a opção "Caixa de ferramentas do SSIS".

Agora, no meu fluxo de controle, adicionarei uma tarefa: Tarefa de Processamento do Analysis Services e a chamarei de `Carga Dimensões`.

Ao dar um duplo clique nela, em Process Settings, escolherei a conexão. Não tenho uma conexão neste pacote com a base do Analysis Services, mas ao clicar em `New`, uma conexão já será apresentada. Se eu clicar em "Editar", posso editar essa conexão.

No meu caso, usarei a segurança integrada do Windows. Posso buscar o nome do meu servidor nas propriedades do SQL Server e testar a conexão. Conexão bem sucedida!

Agora, adicionarei a lista de objetos que estarei atualizando nesta tarefa.

Clicando em "Adicionar", tenho aqui um cubo e quatro dimensões. Quero atualizar essas quatro dimensões e nas opções de processo escolherei "Processar Completo".

Temos vários tipos de processamento: o processo padrão, que decidirá sozinho o que fazer; o processo completo, que destruirá e recriará a dimensão novamente; o processo de limpeza; o processo de dados, que não atualizará a estrutura; o processo de índices, que apenas atualizará os índices internos; e o Processar Atualização, que só alterará o que mudou.

Vamos utilizar o processo completo em todos os objetos.

| Nome do Objeto | Tipo | Opções de Processo | Configurações |
| --- | --- | --- | --- |
| Produto | Dimensão | Processar Completo |     |
| Cliente | Dimensão | Processar Completo |     |
| Tempo | Dimensão | Processar Completo |     |
| Empresa | Dimensão | Processar Completo |     |
| Produto | Dimensão | Processar Completo |     |

Deve-se ter em mente usar um processo de atualização, por exemplo, e não completo, quando se tem na prática uma base de dados muito grande, pois o processo completo pode demorar. Vamos clicar em "OK".

Adicionarei outra tarefa processamento de Analysis Services e a ligarei com a "Carga Dimensões". A chamarei de "Carga do Cubo". Vou dar um duplo clique sobre ela, em "processing settings" já tenho a conexão definida. Vamos clicar em "Adicionar" e processar o cubo, vai ser um processo completo.

| Nome do Objeto | Tipo | Opções de Processo | Configurações |
| --- | --- | --- | --- |
| DW ATACADEZ | Cubo | Processar Completo |     |

Vamos salvar e testar se este processo vai funcionar sem erros. Clique com o botão direito do mouse sobre "CargaDataMart" e clicar em "Executar pacote". Tudo funcionou corretamente.

Porém, antes de finalizar, precisamos ir à nossa carga principal e criar mais uma tarefa de execução de pacote. Irei duplicar o elemento da Carga de Data Warehouse e chamarei de "Carga do DataMart". Vou unir o processamento do Carga de Data Warehouse com a Carga do DataMart e, no Carga do DataMart, o pacote que usaremos é o `CargaDataMart.dtsx`.

Agora temos todos os processos completos.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Documentação OLAP</span>

Concluímos o processo de carga do Data Mart. Agora, vamos registrar o que fizemos nesse processo na documentação do Notion.

Como mencionei em outro curso, a documentação consiste em fornecer a maior quantidade de informação possível. Neste contexto, não estamos incluindo todas as informações que deveriam constar em uma documentação completa, caso contrário, teríamos vídeos muito longos.

Iniciaremos com o título 2 "Data Mart de venda". Logo em seguida, adicionaremos um título do tipo 3 chamado "Exibição da Fonte de Dados". A seguir, exibirei um arquivo que salvei anteriormente. Este arquivo consiste em capturas de tela do nosso projeto de implementação do Data Mart. Assim, vou exibir a fonte de dados.

Agora, vou apresentar uma figura sobre a estrutura de cada uma das dimensões. Começaremos com a dimensão Empresa, onde adicionarei a imagem correspondente. Seguiremos para a dimensão Cliente e dimensão Produto, adicionando suas respectivas imagens.

Vamos ajustar aqui para o título de "Dimensão Tempo" do tipo 3 e adicionar a imagem correspondente.

Em seguida, temos os dados calculados, que são essenciais de serem mencionados. Sendo assim, vou pegar diretamente do projeto. Primeiro, o Preço de Venda Unitária, depois temos o Preço Unitário de Compra e a Rentabilidade, onde buscaremos e registraremos suas respectivas fórmulas.

> **Indicadores Calculados**
> 
> \[Preço Unitário de Venda\] = \[Measures\].\[Valor Da Venda\] / \[Measures\].\[Quantidade Vendida\]
> 
> \[Preço Unitário de Compra\] = \[Measures\].\[Custo De Venda\] / \[Measures\].\[Quantidade Vendida\]
> 
> \[Lucro\] = \[Measures\].\[Valor Da Venda\] - \[Measures\].\[Custo De Venda\]
> 
> \[Rentabilidade\] = (\[Measures\].\[Lucro\]/\[Measures\].\[Valor Da Venda\])\* 100

Agora, vou adicionar o título 3 "Projeto do Visual Studio". Tenho aqui meu Visual Studio aberto, mas vou fechá-lo. Esta é a pasta da minha última versão. Vamos verificar então como nomeamos os projetos anteriores.

Vamos criar um zip do projeto chamado "Projeto de Criação e carga do Data Lake - Carga do Data Warehouse e Carga do Data Mart". Em seguida, vamos adicionar o arquivo no final do Notion. Vou localizar o arquivo e carregá-lo diretamente para o projeto.

Assim, concluímos a documentação do *Notion* para o Data Mart.

&nbsp;
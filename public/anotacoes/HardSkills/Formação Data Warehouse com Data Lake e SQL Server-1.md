---
title: >-
  Formação Data Warehouse com Data Lake e SQL Server (Projetão BI do zero Parte
  1 - Carregando dados no DW)
updated: 2024-08-08 13:44:51Z
created: 2024-07-21 17:49:51Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

[toc]

<span style="color: #c0c0c0;">Já implementamos, anteriormente, os processos de carga do</span> *Data Lake*<span style="color: #c0c0c0;">. Agora, chegou o momento de utilizar os</span> **dados brutos** <span style="color: #c0c0c0;">contidos neste</span> *Data Lake* <span style="color: #c0c0c0;">para iniciar as cargas no</span> *Data Warehouse*<span style="color: #c0c0c0;">.</span>

Para isso, aplicaremos as **regras de negócios** definidas durante a modelagem, assim como garantir a **integridade do banco de dados gerencial**.

Isso porque nem sempre o dado chega íntegro no *Data Lake*, já que ele tem como função receber dados brutos das diversas fontes de dados gravados no *Data Lake* exatamente como chegam.

O *Data Lake* possui outras funções muito importantes além de servir como fonte de dados para o *Data Warehouse*, esse é o motivo pelo qual isso ocorre.

Aprenderemos como implementar o processo de ***Lookup* das dimensões**, criar identificadores primários e o valor numérico sequencial que identifica as dimensões.

Também faremos a **classificação de membros das dimensões** baseados na definição de seus atributos provenientes da modelagem e abordaremos **problemas de integridade** e como resolvê-los.

Nesse curso, focaremos na implementação das cargas das dimensões empresa e cliente. (foram feitas a carga de outras dimensões tanto no datalake como no DW, porém, para um material enxuto, focaremos apenas em algumas dimensões)

&nbsp;

&nbsp;

# Fase do projeto (carga do warehouse)

<span style="color: #c0c0c0;">Primeiro, fizemos o</span> **levantamento dos processos de negócio**<span style="color: #c0c0c0;">, elaborando uma documentação sobre esses processos e a matriz de dimensão-indicador, modelando uma área específica da empresa, a área de vendas.</span>

<span style="color: #c0c0c0;">![3742509ef6916b22764435cbf368fd84.png](../_resources/3742509ef6916b22764435cbf368fd84.png)</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Escolhemos a implementação do</span> ***Data Warehouse* de forma vertical**<span style="color: #c0c0c0;">, implementando uma área por vez, isso porque traz melhores resultados a curto prazo para o usuário.</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">A etapa seguinte foi criar o</span> *Data Warehouse*<span style="color: #c0c0c0;">, projetamos as tabelas baseadas na documentação do modelo. Para isso, utilizamos duas formas diferentes, o</span> **modelo estrela** <span style="color: #c0c0c0;">para as dimensões cliente, empresa e tempo e o</span> **modelo floco de neve** <span style="color: #c0c0c0;">para a dimensão produto.</span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">![0abc301e11125b3a35c92c68799fe5f6.png](../_resources/0abc301e11125b3a35c92c68799fe5f6.png)</span></span></span>

No modelo estrela, as tabelas de dimensões são todas desnormalizadas, ou seja, todos os campos referentes aos níveis e atributos ficam na mesma tabela. No modelo floco de neve, temos as tabelas normalizadas, ou seja, uma tabela para cada nível das hierarquias da dimensão.

Posteriormente, **identificamos as fontes de dados** fornecidas pela área de tecnologia da informação da empresa. Recebemos uma série de arquivos de formatos diferentes, como CSV, Excel, JSON e XML. Assim, criamos uma estrutura de diretórios e construímos uma série de processos de carga usando o *SQL Server Integration Services*, realizando a carga desse *Data Lake*.

![8aeec059fc761c1818328a15ff96143b.png](../_resources/8aeec059fc761c1818328a15ff96143b.png)

<span style="color: #c0c0c0;">O</span> *Data Lake* <span style="color: #c0c0c0;">é um</span> **banco de dados** <span style="color: #c0c0c0;">onde os</span> **dados brutos das fontes são armazenados**<span style="color: #c0c0c0;">. Ele tem diversas utilidades, como realizar pesquisas relacionadas à ciência de dados. No entanto, para nós, o objetivo do</span> *Data Lake* <span style="color: #c0c0c0;">é ter uma única fonte de dados para o</span> *Data Warehouse*<span style="color: #c0c0c0;">.</span>

## <span style="color: #c0c0c0;">Fase atual do projeto</span>

Agora, estamos na fase de iniciar a carregar o *Data Warehouse*. Este é o momento em que aplicaremos as **regras de negócio da empresa** para garantir que os dados no *Data Warehouse* sempre tenham o mesmo conceito.

Vamos realizar algumas transformações para adequar os dados e gravá-los no *Data Warehouse* usando o *Data Lake* como única fonte. <span style="color: #c0c0c0;">Também usaremos o</span> *Integration Services* <span style="color: #c0c0c0;">para implementar esses processos.</span>

&nbsp;

&nbsp;

# <span style="color: #c0c0c0;"><span style="color: #ffffff;">Entendendo o Data Lake</span></span>

<span style="color: #c0c0c0;"><span style="color: #ffffff;"><span style="color: #c0c0c0;">Agora, entenderemos o</span> *Data Lake*<span style="color: #c0c0c0;">, já que essa será a única fonte de dados para o</span> *Data Warehouse*<span style="color: #c0c0c0;">.</span></span></span>

<span style="color: #c0c0c0;"><span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Para isso, abrimos o</span> *Management Studio*<span style="color: #c0c0c0;">. Analisaremos as tabelas do</span> *Data Lake* <span style="color: #c0c0c0;">chamado</span> `DL_ATACADEZ`<span style="color: #c0c0c0;">.</span></span></span></span>

Começaremos analisando os campos da tabela de clientes, que concentra todas as fontes de dados necessárias para a dimensão cliente. Para isso, na lateral esquerda da tela, clicamos em "`dbo.tbl_cliente` > colunas".

Encontramos o identificador natural, descrição do cliente, endereço, faturamento anual, segmento, dados geográficos como a cidade, estado e região, considerando que o estado tem o identificador natural. Também há dados de metadados como arquivo, origem e data de carga.

> Importante lembrar que a tabela de clientes resulta da consolidação de duas fontes de dados diferentes, sendo uma planilha de Excel com cadastros de clientes e um arquivo CSV com dados geográficos.

Vamos para a próxima tabela, a de compras, que possui dados referentes às compras efetuadas. Para analisar os campos, clicamos em "`dbo.tbl_compra` > Colunas". Encontramos mês e o ano, o identificador natural do produto, preço médio de compra e dados dos metadados.

Os dados usados para alimentar essa tabela foram provenientes das **compras médias dos fornecedores por produto**. Esses dados de compra são necessários para calcular o **custo de venda**, que **acontecerá no nível do *Data Warehouse* e *Data Market***.

A tabela seguinte é a de empresas, com dados referentes as lojas e as empresas do Atacadez. Na lateral esquerda, acessamos "`dbo.tbl_empresa` > Colunas". A fonte de dados usada para alimentar essa tabela foi um único arquivo CSV.

Nela temos o identificador natural da loja, descritor, seguido pelo identificador natural e descritor da empresa, o tamanho da loja em metragem e os dados referentes aos metadados da fonte.

Na tabela de itens, "`dbo.tbl_item` > Colunas" encontramos itens das notas fiscais. Foi alimentada por vários arquivos CSV com itens das notas de cada mês. Seus campos incluem o número da nota fiscal, o identificador natural do produto, a quantidade comprada e o preço pago pelo produto, além dos dados de metadados.

Outra tabela é a ede log, "`dbo.tbl_log` > Colunas", utilizada para **acompanhar** o carregamento dos dados. Embora não seja usada para alimentar o *Data Warehouse*, no final do curso usaremos essa tabela de logs para monitorar o carregamento do *Data Warehouse*.

A tabela de notas, "`dbo.tbl_notas` > Colunas", abriga os cabeçalhos das notas fiscais. Também deriva de vários arquivos CSV consolidados por mês, seus campos são o número da nota fiscal, o identificador natural do cliente e da loja, a data da nota fiscal e dados referentes aos metadados.

A tabela de produtos, "`dbo.tbl_produto` > Colunas", é alimentada por dados JSON e XML. Os dados JSON se referem aos produtos, enquanto os XML contêm informações dos fornecedores desses produtos.

Essa tabela inclui o identificador natural, descritor do produto, descritor do departamento, unidade de medida do produto, identificador natural e descritor do fornecedor, além dos dados de metadados.

Por fim, temos a tabela com as datas correspondentes ao carregamento das notas fiscais, "`dbo.tbl_tempo` > Colunas". Quando lemos os dados do cabeçalho da nota, conforme o processo que construímos no curso anterior, é guardado as datas para serem posteriormente carregadas no *Data Warehouse*.

Por isso, temos apenas o identificador natural do dia, a data no formato `date` e um controle que utilizaremos para que o Data Warehouse identifique quais foram as datas que já foram carregadas e quais ainda precisam ser carregadas.

Esse é o esquema do Data Lake. A partir dos dados que estão neste Data Lake que vamos ler, aplicar transformações e salvar dentro do Data Warehouse. Tudo isso aplicando as regras de negócio estabelecidas durante a fase de modelagem do projeto de Business Intelligence da área de vendas da Atacadez.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Conexão com o Data Lake</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Agora, vamos acessar o projeto no VS Code e estabelecer a conexão com o Data Lake. Em seguida, faremos a leitura dos dados armazenados no Data Lake para o Data Warehouse.</span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Antes de nos conectarmos ao Data Lake, executaremos um pequeno teste para garantir que o projeto está funcionando adequadamente.</span></span></span>

Para isso, acessamos o diretório onde estão localizadas as fontes de dados. No nosso caso, acessamos "Dicso Local (C:) > Fontes > DATA > DIMENSÕES", onde encontramos os arquivos referentes as três dimensões do Data Lake: cliente, empresa e produto. Todos estão armazenados nos lugares corretos.

Voltamos até a pasta "DADOS" e acessamos "FATOS > COMPRAS". Nela, encontramos o diretório "IN" que atualmente vazio. É ele que deve armazenar o arquivo fonte.

Agora, ainda na pasta "COMPRAS", acessamos o diretório "OUT". Buscamos o arquivo `Comprar_202101.csv` e o copiamos. Acessamos novamente o "IN" e colamos. Faremos o mesmo procedimento para as fatos relacionadas as vendas, ou seja, as notas fiscais.

Então, no diretório `OUT`, selecionamos os arquivos `Movimento_Itens_2021_01.csv` e o `Movimento_Notas_2021.csv` e copiamos. Voltamos no diretório "IN" e colamos.

Feito isso, voltamos no VS Code para executar o projeto. Para fazermos isso, precisamos verificar se o projeto `CargaPrincipal.dtsx` seja o pacote padrão da solução.

Para termos essa confirmação, no Gerenciador de Soluções, localizado na lateral direita da tela, clicamos em `CargaPrincipal.dtsx` com o botão direito e depois em "Definir como Objeto de Inicialização".

Em seguida, na barra de menu superior, clicamos no botão "Iniciar", identificado pelo ícone de play para executar o projeto. Será feito o registro do log, carga das dimensões, a carga das fatos compras e itens.

Na lateral inferior da tela, notamos uma mensagem confirmando a execução do pacote como concluída com sucesso. Isso significa que o projeto de carga Data Lake funcionou sem nenhum problema.

Estamos prontos para começar a projetar a carga do Data Warehouse.

&nbsp;

&nbsp;

# Conexão tabela Empresa (do datalake)

<span style="color: #c0c0c0;">Nosso projeto está carregando o</span> *Data Lake* <span style="color: #c0c0c0;">corretamente, então vamos começar a carga do</span> *Data Warehouse* <span style="color: #c0c0c0;">fazendo a conexão com a tabela empresa.</span>

No Visual Studio, na seção Gerenciador de Soluções, procuramos por "Pacotes SSIS". Criaremos um novo pacote referente a carga do *Data Warehouse*. Para isso, clicamos com o botão direito e depois em "Novo Pacote SSIS".

Feito isso, o pacote é criado. Para renomeá-lo, clicamos nele. Abaixo, na propriedade Nome do Arquivo, definimos o nome `CargaDataWarehouse.dtsx`.

> Lembre-se que agora esse deve ser o pacote padrão. Porém, não será o padrão do projeto final, somente nesse momento, afinal faremos testes somente nele.

Não queremos rodar a carga do *Data Lake* o tempo todo. Sendo assim, em `CargaDataWarehouse.dtsx`, clicamos com o botão direito e depois em "Definir como Objeto de Inicialização".

Feito isso, na **área de fluxo de controle**, adicionaremos uma "Tarefa de Fluxo de Dados", para isso, arrastamos a tarefa que está na Caixa de Ferramentas do SSIS na lateral esquerda da tela.

Clicamos na tarefa e nomeamos de "Carga de dados de Empresas", em seguida, damos um duplo clique nela. Na Caixa de Ferramentas arrastamos o "Assistente de origem". Feito isso, abre uma janela, precisamos escolher a fonte. Precisamos ter uma conexão com o *Data Lake*, então clicamos no botão "Cancelar".

Reparem que no pacote Fluxo de Dados, na parte inferior da tela em "Gerenciador de conexões", não encontramos conexão nenhuma. Sendo assim, todos os componentes que utilizarmos neste pacote não terão conexões ativas.

Porém, se em Gerenciador de Soluções, clicarmos em `CargaDataLake.dtsk` e analisarmos a área de gerenciadores de conexões, encontramos várias conexões que criamos nos cursos anteriores para podermos buscar dados destas conexões.

Aproveitaremos uma delas e utilizar no novo pacote, nesse caso a "Conexão com o *Data Lake*". No pacote de carga, essa conexão com o *Data Lake* era destino, ou seja, carregávamos dados de fontes externas para esta fonte. Já neste novo pacote que estamos criando, a carga do *Data House* será origem.

Porém, não importa se a conexão é de origem ou destino, é uma conexão. Então, ao invés de precisarmos criar essa nova conexão novamente no outro pacote, inserindo login, senha, nome do servidor, faremos diferente. Na aba Gerenciador de Conexões, clicamos com o botão direito em "Conexão com o *Data Lake*" e depois em "Copiar".

> `CargaDataWarehouse.dtsx`

Feito isso, voltamos para o pacote `CargaDataWarehouse.dtsx`, em Fluxo de Dados, na área de Gerenciador de Conexões, colamos. Ao fazer isso, esse pacote passa a ter a conexão com o *Data Lake*.

Assim, ao arrastar o "Assistente de Origem", abre a janela e nela temos a Conexão com o Data Lake disponível. Então, clicamos sobre ela e depois em "Ok".

Em seguida, nomeamos de "Conexão com a tabela de Empresas". Feito isso, damos um duplo clique, abre uma nova janela. Nela, no campo "Nome da tabela ou exibição", selecionamos a tabela `[dbo].[tbl_empresa]`.

Na lateral esquerda da janela, clicamos na seção "Colunas" para verificar se todas as colunas estão selecionadas. Em seguida, clicamos em "Ok".

Para nos certificarmos que está funcionando corretamente, na Caixa de Ferramentas, arrastamos o componente "Coluna Derivada" e conectar a "Conexão com tabela de Empresas".

![Conexão entre os componentes "Conexão com a tabela de Empresas" e "Coluna Derivada" indicada por uma seta azul. Cada componente é representado por um retângulo cinza-claro.](../_resources/a24a4c3d-1423-49c1-be49-6f2caa5c.jpg)

Após, clicamos com o botão direito do mouse na seta que liga ambos e selecionamos a opção "Habilitar Visualizador de Dados". Salvamos o arquivo clicando no botão localizado na barra de menu superior, identificado pelo ícone de um disquete.

Como o pacote padrão de execução dessa solução é o pacote de carga do *Data House*, basta clicarmos no botão "Iniciar".

Feito isso, os dados da tabela do *Data Lake* são exibidos.

| cod_loja | desc_loja | desc_empresa | cod_empresa | tamanho loja | arquivo_origem | data_carga |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | LOJA 01 | ATACADEZ | 12312312312312 | 5000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |
| 10  | LOJA 10 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |
| 11  | LOJA 11 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |
| 12  | LOJA 12 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |
| 13  | LOJA 13 | ATACADEZ | 12312312312312 | 10000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |
| 2   | LOJA 02 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | ... |
| 3   | LOJA 03 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | ... |
| 4   | LOJA 04 | ATACADEZ | 12312312312312 | 4000 | EMPRESA.CSV | ... |
| 5   | LOJA 05 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | ... |
| 10  | LOJA 06 | ATACADEZ | 12312312312312 | 18000 | EMPRESA.CSV | ... |
| 7   | LOJA 07 | ATACADEZ | 12312312312312 | 14000 | EMPRESA.CSV | ... |
| 8   | LOJA 08 | ATACADEZ | 12312312312312 | 5000 | EMPRESA.CSV | ... |
| 9   | LOJA 09 | ATACADEZ | 12312312312312 | 4000 | EMPRESA.CSV | ... |

Assim, concluímos a primeira etapa. Nos conectamos a tabela do *Data Lake* para pegar os dados referentes a empresas.

&nbsp;

&nbsp;

# Carga da Empresa

# Tamanho da Loja

<span style="color: #c0c0c0;">No momento de carga dos dados do</span> *Data Lake* <span style="color: #c0c0c0;">para o</span> *Data Warehouse*<span style="color: #c0c0c0;">, aplicamos as regras de negócio observadas durante o levantamento do modelo de</span> *Business Intelligence*<span style="color: #c0c0c0;">. Agora, vamos discutir a nossa primeira regra de negócio: o</span> **tamanho da loja**<span style="color: #c0c0c0;">.</span>

Começaremos no *Notion*, onde temos a documentação do projeto. Na definição da dimensão empresa, há um atributo chamado "Tipo da loja".

> - EMPRESA
>     - Nível Input
>     - Atributos
>         - Tipo da Loja
>     - Hierarquias

O tipo da loja é uma **classificação** feita em relação às lojas da AtacaDez, baseada na **metragem**. Se a loja é pequena, ela é chamada de supermercado. Se ela tem um tamanho médio, é chamada de hipermercado. E se ela for muito grande, fica como megamercado. É uma classificação interna que a AtacaDez usa.

Portanto, vamos criar essa classificação. No Data Lake, na tabela de empresa (`dbo.tbl_empresa`), há um campo chamado `tamanho_loja` do tipo *float*, ou seja, é a metragem da loja. Vamos examinar o valor desse campo?

> *Cinco primeiros registros da tabela. Para visualizá-la na íntegra, execute os processos na sua máquina.*

| #   | cod_loja | desc_loja | desc_empresa | cod_empresa | tamanho_loja | arquivo_origem | data_carga |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | LOJA 01 | ATACADEZ | 12312312312312 | 5000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |
| 2   | 10  | LOJA 10 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |
| 3   | 11  | LOJA 11 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |
| 4   | 12  | LOJA 12 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |
| 5   | 13  | LOJA 13 | ATACADEZ | 12312312312312 | 10000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 |

Na tabela, encontramos a metragem da loja na coluna `tamanho_loja`. A depender do intervalo dessa metragem, vamos classificar a loja como um tipo ou como outro.

Já realizamos o download no diretório "ETL", seja esse download feito no início das atividades deste curso ou em cursos anteriores. Nesse diretório, temos um subdiretório chamado "*scripts*". Dentro desse subdiretório, há um arquivo chamado `tamanho loja.txt`. Nele, encontramos a seguinte fórmula:

```sql
(DT_STR,13,1252)(tamanho > 0 && tamanho <= 6000 ? "Supermercados" : (tamanho > 6000 && tamanho < 12001 ? "Hipermercados" : (tamanho > 12000 ? "Megamercados" : "")))
```

Neste código, temos as seguintes condições: se o tamanho estiver entre 0 e 6.000m², a loja será classificada como "Supermercados"; se o tamanho estiver entre 6.000 e 12.001m², é classificado como "Hipermercados"; se for maior que 12.000m², será classificado como "Megamercados"; e se não for nenhuma das opções, será classificado como vazio (`""`).

> O dois-pontos (`:`) representa uma nova condição.

A parte inicial do código (`DT_STR,13,1252`), por enquanto, não vamos discutir. Vamos apenas utilizar a fórmula para calcular o tipo da loja.

Antes de aproveitar esse script, vamos retornar ao projeto no *Visual Studio* e alterar o nome do componente "Coluna Derivada" para "Tamanho da Loja".

Com um duplo clique sobre o componente, temos a área onde criaremos uma nova coluna ("*Derived Column Name*"), que será `atr_tamanho`. Na coluna "*Expression*", vamos inserir a fórmula.

> **Atenção:** a fórmula que vamos adicionar serve apenas para nos auxiliar a construir, mas não está exatamente correta, porque ela supõe que o nome do campo seja `tamanho`. Porém, o campo que vem do Data Lake é chamado `tamanho_loja`. Então, antes de copiar e colar o script, precisamos substituir `tamanho` por `tamanho_loja`.

```sql
(DT_STR,13,1252)(tamanho_loja > 0 && tamanho_loja <= 6000 ? "Supermercados" : (tamanho_loja > 6000 && tamanho_loja < 12001 ? "Hipermercados" : (tamanho_loja > 12000 ? "Megamercados" : "")))
```

Feito isso, podemos copiar a fórmula, exceto a parte inicial, colar no campo correspondente e clicar em "OK" no canto inferior direito para confirmar a ação.

| Derived Column Name | Derived Column | Expression | Data Type | Lenght | …   |
| --- | --- | --- | --- | --- | --- |
| atr_tamanho | add as new column | (tamanho_loja > 0 && tamanho_loja &lt;= 6000 ? "Supermercados" : (tamanho_loja &gt; 6000 && tamanho_loja &lt; 12001 ? "Hipermercados" : (tamanho_loja &gt; 12000 ? "Megamercados" : ""))) | cadeia de caracteres U… | 13  | …   |

Em seguida, vamos adicionar uma nova "Coluna Derivada" e associá-la ao componente "Tamanho da Loja". Feito isso, vamos clicar com o botão direito sobre a seta de conexão e selecionar "Habilitar Visualizador de Dados". Podemos salvar e executar para observar o que acontece.

![Fluxo de dados formado pelos componentes "Conexão com a tabela de Empresas", "Tamanho da Loja", e "Coluna Derivada", dispostos verticalmente e interligados por setas para baixo.](../_resources/651485ce-6ae5-4981-9ff9-b17bfd35.png)

Serão buscados os dados do Data Lake, e teremos como resultado uma tabela com a classificação: a depender do tamanho da loja, ela é classificada como supermercado, hipermercado ou megamercado.

> *Cinco primeiros registros da tabela. Para visualizá-la na íntegra, execute os processos na sua máquina.*

| cod_loja | desc_loja | desc_empresa | cod_empresa | tamanho_loja | arquivo_origem | data_carga | atr_tamanho |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | LOJA 01 | ATACADEZ | 12312312312312 | 5000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Supermercados |
| 10  | LOJA 10 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Supermercados |
| 11  | LOJA 11 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Hipermercados |
| 12  | LOJA 12 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Hipermercados |
| 13  | LOJA 13 | ATACADEZ | 12312312312312 | 10000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Hipermercados |

Vamos parar por aqui.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Lookup empresa</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Continuando com a aplicação das regras de negócio na carga do</span> *Data Lake* <span style="color: #c0c0c0;">para o</span> *Data Warehouse*<span style="color: #c0c0c0;">, vamos falar agora sobre o</span> ***lookup* de empresa**<span style="color: #c0c0c0;">.</span></span>

No Data Warehouse, para cada tabela de dimensão, criamos dois identificadores: o **identificador primário**, que é um número inteiro (*int*), ou seja, um sequencial numérico; e o campo que chamamos na construção do Data Warehouse, no curso sobre sua construção, que seria o **identificador natural**, que é o código vindo da fonte de dados.

O identificador numérico precisa ser criado no processo de carga. Seguimos a seguinte lógica: se o membro da dimensão lida não existir na dimensão, vamos criar um identificador primário, isto é, um sequencial numérico novo, para o novo membro da dimensão que será gravado no Data Warehouse. Se ele já existir, apenas substituiremos os seus atributos.

Então, precisamos implementar essa lógica neste momento, durante a carga de dados.

Para isso, vamos retornar ao projeto no Visual Studio e a primeira coisa que precisamos fazer é separar os dados que vêm de "Conexão com a tabela de Empresas" do Data Lake, para identificar o que é novo e o que já existe.

No nosso Data Warehouse, se selecionarmos as linhas da tabela `dbo.dim_empresa`, não há nada, exceto o membro da dimensão 0 que está associado ao não encontrado ou não definido.

| #   | id_loja | cod_loja | desc_loja | atr_tipo_loja | cod_empresa | desc_empresa |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | ND  | ND  | ND  | ND  | ND  |

> Discutimos isso também no curso de construção do Data Warehouse, onde dissemos que é importante esse elemento 0 existir em todas as tabelas da dimensão, para evitar problemas de integridade referencial ao fazer a carga dos dados referentes à tabela de fato.

A tabela está vazia, porém, haverá um momento em que a tabela da dimensão estará com membros. Nesse momento, precisaremos separar os membros que existem daqueles que não existem.

Para fazer isso, precisaremos ler os dados do Data Warehouse que estão na dimensão e confrontá-los com os dados que vêm do Data Lake. Faremos isso através de uma **junção**. Contudo, não é uma junção qualquer. Precisamos fazer uma junção de modo que seja possível capturar todas as linhas que vêm do Data Lake e apenas as que existem no Data Warehouse.

Faremos isso de tal maneira que criaremos um grupo de condições para separar esses elementos mais adiante. Parece complicado a princípio, mas vamos realizar o passo a passo.

Primeiramente, precisamos nos conectar ao Data Warehouse para buscar a tabela de dados que existe na dimensão. Como não temos essa conexão, podemos copiar a "Conexão com o Data Lake" que está no gerenciador de conexões e renomeá-la para "**Conexão com o Data Warehouse**".

Dessa forma, copiamos internamente a configuração da tabela do Data Lake. Para resolver isto, basta clicar duas vezes sobre "Conexão com o Data Warehouse" e mudar o banco para `DW_ATACADEZ`. Feito isso, confirmamos a senha e clicamos em "Testar Conexão".

Agora temos a conexão com o Data Warehouse. Em seguida, vamos copiar o componente "Conexão com a tabela de Empresas" e colar à direita dele no fluxo de dados, renomeando para "Conexão com a dimensão de Empresas". Porém, essa conexão não será com "Conexão com o Data Lake", mas sim com "Conexão com o Data Warehouse", e a tabela será a `[dbo].[dim_empresa]`.

Nesse ponto, buscamos apenas os dados para poder confrontá-los com os que vêm do Data Lake. O campo em comum que existe na tabela de dimensão e que temos no Data Lake é o **código natural** (`cod_loja`). Então, não vamos selecionar nenhuma outra coluna. Apenas buscaremos o código natural já gravado na tabela de dimensão.

Precisamos juntar essas duas tabelas. Então, vamos retirar o componente "Coluna Derivada" que usávamos apenas para visualizar o resultado final, e associar dois componentes de classificação ("Classificar"). O primeiro será "**Classificar código natural do Data Lake**".

Feito isso, vamos conectá-lo ao componente "Tamanho da Loja", e após um duplo clique no novo componente, vamos marcar a caixa de seleção do código da loja (`cod_loja`).

O segundo componente de classificação será "Classificar código natural do DW", que vamos conectar a "Conexão com a dimensão de Empresas" e classificar também pelo código da loja.

Agora vamos unir essas duas consultas. Para isso, vamos utilizar o componente "Junção de Mesclagem", que iremos renomear para "Juntando Data Lake com DW". A primeira consulta, à esquerda, serão os dados vindos do Data Lake e, à direita, os do Data Warehouse.

![Fluxo de dados formado pelos componentes "Conexão com a tabela de Empresas", "Tamanho da Loja" e "Classificar código natural do Data Lake" à esquerda, e "Conexão com a dimensão de Empresas" e "Classificar código natural do DW" à direita. Em ambos os lados, os componentes estão dispostos verticalmente interligados por setas. Os componentes de classificação na parte inferior estão conectados ao componente "Juntando Data Lake com DW" na base do fluxo.](../_resources/fe1520a2-c830-42e7-a9fd-50591112.png)

Na junção, já temos o código da loja. No entanto, o Data Warehouse está vazio; então, se fizermos essa junção, ela também virá vazia, afinal, quando realizamos o chamado *inner join*, ou seja, a junção entre as duas tabelas, o resultado será apenas de quem existe.

Como fazer com que apareça tanto os que existem quanto os que não existem? Para isso, substituímos o *inner join* por *left outer join*. Desta maneira, traremos todos os dados do Data Lake e apenas os que existem no Data Warehouse.

Em seguida, vamos selecionar todos os campos de ambas as tabelas, com o código da loja (`cod_loja`) dos dois lados. Porém, para que possamos identificar, vamos renomear `cod_loja (1)` como `cod_loja_dw`. Assim, o campo `cod_loja_dw` é o código da loja que veio do Data Warehouse através do left outer join, e o `cod_loja` é o que veio do Data Lake.

Vamos obter os dados provenientes desta junção apenas para visualizar o resultado. Para isso, adicionamos um componente "Consulta Derivada" e associamos a "Juntando Data Lake com DW". Feito isso, vamos habilitar a visualização de dados e desabilitar a que está ativada no momento, na conexão entre "Conexão com a tabela de Empresas" e "Tamanho da Loja".

Após salvar, vamos executar.

> *Cinco primeiros registros da tabela. Para visualizá-la na íntegra, execute os processos na sua máquina.*

| cod_loja | desc_loja | desc_empresa | cod_empresa | tamanho_loja | arquivo_origem | data_carga | atr_tamanho | cod_loja_dw |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | LOJA 01 | ATACADEZ | 12312312312312 | 5000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Supermercados | NULL |
| 10  | LOJA 10 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Supermercados | NULL |
| 11  | LOJA 11 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Hipermercados | NULL |
| 12  | LOJA 12 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Hipermercados | NULL |
| 13  | LOJA 13 | ATACADEZ | 12312312312312 | 10000 | EMPRESA.CSV | 2023-07-31 00:47:31.167 | Hipermercados | NULL |

Obtivemos uma tabela com o campo `cod_loja_dw` preenchido com "NULL", pois a tabela Data Warehouse está vazia. É este campo que vai nos informar quem existe e quem não existe.

Quando a tabela Data Warehouse tiver dados, se este campo for diferente de nulo, significa que o dado que vem do Data Lake existe no Data Warehouse, e quem vier nulo não existe.

O que precisamos fazer é separar esses dois grupos de dados e realizar atualizações distintas no Data Warehouse, a depender do valor do campo `cod_loja_dw`.

Se ele for nulo, vamos incluir e criar um sequencial numérico. Se não for nulo, vamos alterar baseado no código natural que já existe na tabela.

**Explicaremos como fazer essas alterações!**

&nbsp;

&nbsp;

# Conversão de dados

<span style="color: #c0c0c0;">Quando fizemos a carga dos dados de fontes externas para o</span> *Data Lake*<span style="color: #c0c0c0;">, falamos sobre</span> **conversão de dados**<span style="color: #c0c0c0;">. Vamos aprofundar um pouco mais nesse assunto agora que estamos fazendo as cargas do Data Lake para o</span> *Data Warehouse*<span style="color: #c0c0c0;">.</span>

De volta ao *Visual Studio*, no momento da carga dos dados das fontes externas para o Data Lake, precisamos realizar o processo de conversão de dados. Isso porque o dado, ao ser gravado na tabela do *SQL Server*, ou seja, no Data Lake, que era o destino naquele momento, necessita ser gravado utilizando o mesmo tipo que está na tabela do SQL Server.

Quando lemos dados externos, nem sempre o tipo que vem dessa fonte corresponde ao tipo da tabela destino. Por exemplo: quando lemos um CSV para o *Integration Services*, ele é inteiramente texto, e é geralmente colocado o DT_WSTR, um tipo incompatível com o varchar que utilizamos para criar os campos do tipo texto.

Então, era necessário realizar essa conversão. O texto era convertido para DT_STR, *float* era convertido para DT_R8, data para DT_DBDATE, e assim por diante. Existiam os tipos padrões e utilizamos bastante isso nos cursos passados, não apenas nos vídeos, mas também nas atividades.

Agora, nossa fonte não são mais as fontes externas. Nossa fonte é o **Data Lake**, que é uma tabela do SQL Server que já possui os seus campos com os tipos corretos. A pergunta então é: será que ainda precisamos nos preocupar com a conversão de dados?

Faremos um teste: vamos apagar o objeto "Coluna Derivada" e adicionar um componente "Conversão de Dados". Ligaremos a junção a essa conversão de dados, daremos um duplo clique e marcaremos a caixa "Nome" para selecionar todas as tabelas para conversão.

| Input Column | Output Alias | Data Type | Length | Precision | Scale | Code Page |
| --- | --- | --- | --- | --- | --- | --- |
| cod_loja | Copy of cod_loja | cadeia de caracteres \[DT_STR\] | 25  | #   | #   | 1252 (ANSI - Latino I) |
| desc_loja | Copy of desc_loja | cadeia de caracteres \[DT_STR\] | 200 | #   | #   | 1252 (ANSI - Latino I) |
| desc_empresa | Copy of desc_empresa | cadeia de caracteres \[DT_STR\] | 200 | #   | #   | 1252 (ANSI - Latino I) |
| cod_empresa | Copy of cod_empresa | cadeia de caracteres \[DT_STR\] | 25  | #   | #   | 1252 (ANSI - Latino I) |
| tamanho_loja | Copy of tamanho_loja | flutuante de precisão dupla \[DT_R8 | #   | #   | #   | #   |
| arquivo_origem | Copy of arquivo_origem | cadeia de caracteres \[DT_STR\] | 200 | #   | #   | 1252 (ANSI - Latino I) |
| data_carga | Copy of data_carga | carimbo de data/hora do banco de dados \[DT_DBTIMESTAMP\] | #   | #   | #   | #   |
| atr_tamanho | Copy of atr_tamanho | cadeia de caracteres Unicode \[DT_WSTR\] | 13  | #   | #   | #   |
| cod_loja_dw | Copy of cod_loja_dw | cadeia de caracteres \[DT_STR\] | 25  | #   | #   | 1252 (ANSI - Latino I) |

Note que todas já estão convertidas para os tipos que precisamos para gravar no Data Warehouse, exceto uma: o atributo tamanho, porque `atr_tamanho` é um cálculo.

Quando criamos um cálculo, ou seja, uma nova coluna derivada, cujo resultado é um texto, ele é criado automaticamente com o DT_WSTR, que não nos interessa. Nesse caso, basta converter para DT_STR e criar um novo *alias*.

| Input Column | Output Alias | Data Type | Length | Precision | Scale | Code Page |
| --- | --- | --- | --- | --- | --- | --- |
| atr_tamanho | Copy of atr_tamanho | cadeia de caracteres \[DT_STR\] | 13  | #   | #   | 1252 (ANSI - Latino I) |

Existe uma forma de fazer isso sem precisar converter o dado, e tem a ver com o código que vem na frente da nossa fórmula, o qual ignoramos anteriormente. Este código é justamente o que fará a **conversão automática** do resultado da fórmula para DT_STR.

```sql
(DT_STR,13,1252)(tamanho_loja > 0 && tamanho_loja <= 6000 ? "Supermercados" : (tamanho_loja > 6000 && tamanho_loja < 12001 ? "Hipermercados" : (tamanho_loja > 12000 ? "Megamercados" : "")))
```

O parâmetro `13,1252` tem relação direta com o tamanho do texto após a conversão (`13`) e o código da parte (`1252`). Vamos testar para conferir se funciona?

Apagaremos o componente de conversão de dados, e em "Tamanho da Loja", vamos adicionar a conversão na frente da fórmula.

| Derived Column Name | Derived Column | Expression | Data Type | Lenght | …   |
| --- | --- | --- | --- | --- | --- |
| atr_tamanho | add as new column | (DT_STR,13,1252)(tamanho_loja > 0 && tamanho_loja &lt;= 6000 ? "Supermercados" : (tamanho_loja &gt; 6000 && tamanho_loja &lt; 12001 ? "Hipermercados" : (tamanho_loja &gt; 12000 ? "Megamercados" : ""))) | cadeia de caracteres U… | 13  | …   |

Quando alteramos algum tipo de campo anterior no fluxo, é interessante abrir novamente cada componente para que eles possam herdar os metadados. Afinal, alteramos o componente "Tamanho da Loja", mas em "Juntando Data Lake com DW" ainda é entendido que o campo não foi convertido. Então, ao modificar um componente superior, precisamos atualizar todos os outros componentes.

Feito isso, vamos executar para conferir se não há nenhum erro. Nenhum dado será exibido, porque não inserimos nenhum visualizador de dados. A ideia é que nenhum erro ocorra.

Agora, se adicionarmos o componente "Conversão de Dados" e associarmos à junção, ao selecionar `atr_tamanho`, ele já vem como DT_STR, porque está sendo convertido acima no fluxo.

Você pode se perguntar o seguinte: nos outros dois cursos que fizemos, na carga do Data Lake, poderíamos ter evitado o componente de conversão de dados e usado a conversão com a fórmula? A resposta é **sim**, poderíamos ter feito isso.

Então, agora que já sabemos que existe uma forma de converter os dados no momento de criar uma coluna derivada, adotaremos sempre esse método. Quando for possível converter os dados antecipadamente, faremos isso nos cálculos, em vez de criar um componente só para realizar a conversão de dados, como fizemos ao carregar o Data Lake.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Separando os dados da empresa</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Agora que esclarecemos um ponto específico sobre conversão de dados, vamos</span> **separar os dados da empresa**<span style="color: #c0c0c0;">, distinguindo quem é novo e quem já existe na tabela de dimensão do Data Warehouse.</span></span>

De volta ao projeto no Visual Studio, vamos retirar o componente de conversão de dados, pois não precisaremos mais dele. Agora vamos adicionar o componente "**Divisão Condicional**". Esta divisão vai separar os dados vindos da junção usando um critério definido. Então, iremos renomear o componente como "Separar dados de leitura".

Dentro desse componente, definiremos uma **saída de nome** (*Output Name*). O campo "*Order*" não precisa ser preenchido; ele é um número sequencial que será criado automaticamente. A saída inicialmente será "Dados existentes".

A **condição** para determinar se um dado é existente é a seguinte: se o campo `cod_loja_dw` é nulo, então ele é novo; se ele não é nulo, é porque já existe.

Logo, na separação das colunas, vamos criar dois grupos de arquivos. Primeiro, teremos o "Existentes". Os existentes serão quando a coluna `cod_loja_dw` não for nula, ou seja, quando `ISNULL([cod_loja_dw]) == FALSE`.

O segundo grupo será o "Não existentes". Os não existentes serão quando `ISNULL([cod_loja_dw]) == TRUE`.

| Order | Output Name | Condition |
| --- | --- | --- |
| 1   | Existentes | ISNULL(\[cod_loja_dw\]) == FALSE |
| 2   | Não existentes | ISNULL(\[cod_loja_dw\]) == TRUE |

> **Recapitulando:** quando for nulo, é porque não existe; quando não for nulo, é porque existe.

Ao fazer isso, adicionaremos um comando de "**Destino OLE DB**". Esse comando será responsável por gravar os dados não existentes, ou seja, os novos. Quando conectarmos o componente de separação a este, será aberta uma caixa de diálogo perguntando qual grupo queremos que seja desviado para o lado esquerdo; neste caso, será o de "Não existentes".

Dessa forma, os não existentes serão gravados na dimensão. Com um duplo clique sobre o novo componente "Gravando dados não existentes", escolheremos a conexão com o Data Warehouse, o nome da tabela será `[dbo][dim_empresa]`, e em "Mapeamentos", conectaremos os campos.

> Alguns campos já são associados automaticamente.

Não precisamos nos preocupar com o identificador (`id_loja`), porque será criado automaticamente, já que a tabela do Data Warehouse possui um **autoincremento**.

Associamos `cod_loja` a `cod_loja`, `desc_loja` a `desc_loja`, `desc_empresa` a `desc_empresa`, e `cod_empresa` a `cod_empresa`. O único que falta é `atr_tamanho` associado a `atr_tipo_loja`.

| Coluna de Entrada | Coluna de Destino |
| --- | --- |
| ignorar | id_loja |
| cod_loja | cod_loja |
| desc_loja | desc_loja |
| atr_tamanho | atr_tipo_loja |
| cod_empresa | cod_empresa |
| desc_empresa | desc_empresa |

Com isso, todos os campos da tabela de dimensão do Data Warehouse foram preenchidos, exceto o `id_loja`, ou seja, o identificador primário da loja, que será criado automaticamente.

Se conferirmos o conteúdo do Data Warehouse, na dimensão empresa (`dbo.dim_empresa`), estará vazio, apenas com o `id_loja` como 0, não definido.

| #   | id_loja | cod_loja | desc_loja | atr_tipo_loja | cod_empresa | desc_empresa |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | ND  | ND  | ND  | ND  | ND  |

Ao executar, observe que foram lidas 13 linhas vindas do Data Lake, 1 linha da dimensão, 13 linhas foram selecionadas na junção, e 13 linhas desviaram para o não existente.

Se executarmos agora a consulta da tabela do Data Warehouse, teremos os dados criados.

```sql
SELECT TOP (1000) [id_loja]
      ,[cod_loja]
      ,[desc_loja]
      ,[atr_tipo_loja]
      ,[cod_empresa]
      ,[desc_empresa]
FROM [DW_ATACADEZ].[dbo].[dim_empresa]
```

> *Cinco primeiros registros da tabela. Para visualizá-la na íntegra, execute o comando na sua máquina.*

| #   | id_loja | cod_loja | desc_loja | atr_tipo_loja | cod_empresa | desc_empresa |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | ND  | ND  | ND  | ND  | ND  |
| 2   | 1   | 1   | LOJA 01 | Supermercados | 12312312312312 | ATACADEZ |
| 3   | 2   | 10  | LOJA 10 | Supermercados | 12312312312312 | ATACADEZ |
| 4   | 3   | 11  | LOJA 11 | Supermercados | 12312312312312 | ATACADEZ |
| 5   | 4   | 12  | LOJA 12 | Hipermercados | 12312312312312 | ATACADEZ |

**Atenção**: não podemos confundir o código natural com o código primário. O código primário é um sequencial numérico que parte de 0 e cresce a cada nova empresa, enquanto o código natural é um código que vem do ETL. Esses códigos nunca terão coincidências, ou seja, nunca serão iguais.

## Conclusão

Criamos a carga da primeira dimensão!

Porém, se fizermos uma nova carga e mudarmos determinado atributo, ele não fará ainda a atualização, porque todos os dados são desviados para o não existente. Precisamos criar um componente para onde os dados existentes serão direcionados e farão um processo diferente.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Atualizando dados existentes da empresa</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Anteriormente, realizamos a inclusão dos dados na tabela de dimensão do</span> *Data Warehouse*<span style="color: #c0c0c0;">. Agora, vamos</span> **atualizar os dados já existentes** <span style="color: #c0c0c0;">na tabela.</span></span>

Temos nosso fluxo e sabemos que a tarefa "Gravando dados não existentes" será executada para os dados que ainda não existem. Precisamos criar uma nova tarefa para os dados que já existem, e para isso, vamos usar o componente "Comando OLE DB".

Vamos posicioná-lo à direita do componente de não existentes no fluxo e renomeá-lo para "Gravando dados já existentes". Vamos ligar este componente com o "Separar dados de leitura" acima e especificar sua saída como "Existentes". Assim, teremos um desvio dos dados não existentes para a esquerda, e dos dados existentes para a direita.

Para utilizar esse componente, primeiro iremos selecionar uma **conexão**, que será realizada com o Data Warehouse, afinal, iremos gravar os dados nele. Então, selecionamos a opção "Conexão com o Data Warehouse" na coluna "Gerenciador de Conexões".

| Nome | Gerenciador de Conexões | Descrição |
| --- | --- | --- |
| OleDbConnection | Conexão com o Data Warehouse | A conexão de tempo de exe… |

Em seguida, temos as **propriedades do componente**. Na seção "SqlCommand" é onde vamos digitar o comando SQL. Ao clicar sobre a área para inserção do comando, aparece um ícone de reticências no canto direito que, ao ser clicado, abre uma caixa de diálogo para a inclusão do comando que atualizará os dados na tabela de dimensão.

Se retornarmos ao *SQL Server* e clicarmos com o botão direito sobre a tabela `dbo.dim_empresa` que queremos atualizar, temos a opção "Script de Tabela como > UPDATE Para > Área de Transferência". Dessa forma, o script será copiado para a área de transferência.

Feito isso, ao retornar ao local de inserção do comando de atualização e teclar "Ctrl + V", o comando de `UPDATE` é inserido, e este será executado na tabela do Data Warehouse.

```sql
USE [DW_ATACADEZ] 
GO

UPDATE [dbo].[dim_empresa]
 SET [cod_loja] = <cod_loja, varchar(25),>
  .[desc_loja] = <desc_loja, varchar(200),> 
  .[atr_tipo_loja] = <atr_tipo_loja, varchar(50),> 
  .[cod_empresa] = <cod_empresa, varchar(25),>
  .[desc_empresa] = <desc_empresa, varchar(200),>
 WHERE <Critérios de Pesquisa..>
GO
```

Os dois comandos iniciais não precisaremos inserir, bem como o comando `GO` no final.

```sql
UPDATE [dbo].[dim_empresa]
 SET [cod_loja] = <cod_loja, varchar(25),>
  ,[desc_loja] = <desc_loja, varchar(200),> 
  ,[atr_tipo_loja] = <atr_tipo_loja, varchar(50),> 
  ,[cod_empresa] = <cod_empresa, varchar(25),>
  ,[desc_empresa] = <desc_empresa, varchar(200),>
 WHERE <Critérios de Pesquisa..>
```

O código da loja (`cod_loja`) é o **código natural** do membro da dimensão e ele nunca muda. Se houver uma alteração, será porque recebemos um novo elemento. Logo, a atualização (`[cod_loja] = <cod_loja, varchar(25),>`) não será realizada, então vamos movê-la no script.

> Também removeremos a vírgula antes de `[desc_loja]`.

Nesse caso, a atualização será um critério, então vamos colocá-la no lugar de `<Critérios de Pesquisa..>`.

```sql
UPDATE [dbo].[dim_empresa]
 SET [desc_loja] = <desc_loja, varchar(200),> 
  ,[atr_tipo_loja] = <atr_tipo_loja, varchar(50),> 
  ,[cod_empresa] = <cod_empresa, varchar(25),>
  ,[desc_empresa] = <desc_empresa, varchar(200),>
 WHERE [cod_loja] = <cod_loja, varchar(25),>
```

Com isso, fazemos uma alteração nos atributos de descritor da loja (`desc_loja`), tipo da loja (`atr_tipo_loja`), código da empresa (`cod_empresa`) e descritor da empresa (`desc_empresa`) para uma loja específica (`cod_loja`). Esse comando `UPDATE` será executado apenas para os registros que já existem no Data Warehouse.

Agora vamos substituir as atualizações por interrogações. As interrogações serão consideradas **parâmetros**, e esses parâmetros terão uma determinada ordem: primeiro o parâmetro `desc_loja`, depois o `atr_tipo_loja`, e assim por diante. Ao todo, são cinco parâmetros que precisamos incluir nesse comando.

```sql
UPDATE [dbo].[dim_empresa]
 SET [desc_loja] = ?
  ,[atr_tipo_loja] = ?
  ,[cod_empresa] = ?
  ,[desc_empresa] = ?
 WHERE [cod_loja] = ?
```

Para evitar a associação desses parâmetros fora da ordem, vamos copiar o comando acima e colar no Bloco de Notas, porque ao confirmar a operação em "OK", serão listados cinco parâmetros numerados de 0 a 4 na aba "Mapeamentos de Colunas". Precisamos associar as colunas aos parâmetros corretamente, de acordo com o desvio do dado.

A associação precisa ser feita da seguinte forma:

| Coluna de Entrada | Coluna de Destino |
| --- | --- |
| `desc_loja` | Param_0 |
| `atr_tamanho` | Param_1 |
| `cod_empresa` | Param_2 |
| `desc_empresa` | Param_3 |
| `cod_loja` | Param_4 |

Feito isso, vamos salvar o projeto e revisar a tabela `dbo.dim_empresa`.

| #   | id_loja | cod_loja | desc_loja | atr_tipo_loja | cod_empresa | desc_empresa |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | ND  | ND  | ND  | ND  | ND  |
| 2   | 1   | 1   | LOJA 01 | Supermercados | 12312312312312 | ATACADEZ |
| 3   | 2   | 10  | LOJA 10 | Supermercados | 12312312312312 | ATACADEZ |
| 4   | 3   | 11  | LOJA 11 | Supermercados | 12312312312312 | ATACADEZ |
| 5   | 4   | 12  | LOJA 12 | Hipermercados | 12312312312312 | ATACADEZ |
| 6   | 5   | 13  | LOJA 13 | Hipermercados | 12312312312312 | ATACADEZ |
| 7   | 6   | 2   | LOJA 02 | Hipermercados | 12312312312312 | ATACADEZ |
| 8   | 7   | 3   | LOJA 03 | Supermercados | 12312312312312 | ATACADEZ |
| 9   | 8   | 4   | LOJA 04 | Supermercados | 12312312312312 | ATACADEZ |
| 10  | 9   | 5   | LOJA 05 | Supermercados | 12312312312312 | ATACADEZ |
| 11  | 10  | 6   | LOJA 06 | Megamercados | 12312312312312 | ATACADEZ |
| 12  | 11  | 7   | LOJA 07 | Megamercados | 12312312312312 | ATACADEZ |
| 13  | 12  | 8   | LOJA 08 | Supermercados | 12312312312312 | ATACADEZ |
| 14  | 13  | 9   | LOJA 09 | Supermercados | 12312312312312 | ATACADEZ |

Temos 14 empresas incluídas, contando com a empresa 0. Então, são 13 empresas vindas do Data Lake, além da empresa 0.

Ao executar a tarefa no fluxo de controle, ela será executada com sucesso. No fluxo de dados, podemos perceber que agora as 13 linhas são desviadas para a atualização, uma vez que já existiam no Data Warehouse. Realizando a consulta novamente, nada mudará.

Vamos testar uma modificação na fonte de dados do Data Lake. A fonte de dados se encontra no diretório "Disco Local (C:) > Fontes > DATA > DIMENSOES > EMPRESA > IN > `EMPRESA.CSV`". Neste arquivo CSV, utilizado como fonte do Data Lake, faremos duas alterações.

A loja 01 tem 5.000m²; vamos modificá-la para 15.000m². Além disso, vamos inserir uma loja 14 ao final da fonte de dados que terá 10.000 m².

```plaintext
LOJA;NOME_LOJA;EMPRESA;CNPJ;TAMANHO
1;LOJA 01;ATACADEZ;12312312312312;15000
2;LOJA 02;ATACADEZ;12312312312312;12000
3;LOJA 03;ATACADEZ;12312312312312;3000
4;LOJA 04;ATACADEZ;12312312312312;4000
5;LOJA 05;ATACADEZ;12312312312312;6000
6;LOJA 06;ATACADEZ;12312312312312;18000
7;LOJA 07;ATACADEZ;12312312312312;14000
8;LOJA 08;ATACADEZ;12312312312312;5000
9;LOJA 09;ATACADEZ;12312312312312;4000 
10;LOJA 10;ATACADEZ;12312312312312;3000
11;LOJA 11;ATACADEZ;12312312312312;6000
12;LOJA 12;ATACADEZ;12312312312312;12000
13;LOJA 13;ATACADEZ;12312312312312;10000
14;LOJA 14;ATACADEZ;12312312312312;10000
COPIAR CÓDIGO
```

É importante lembrar que realizamos essas alterações na fonte de dados, então primeiro temos que executar o Data Lake para depois executar a carga do Data Warehouse. Vamos fazer isso.

De volta ao projeto, temos a carga do Data Lake (`CargaDataLake.dtsx`). Não vamos executar toda a carga, mas apenas clicar sobre a tarefa "Carga de Empresas" do Data Lake com o botão direito do mouse e executar a tarefa. Uma vez realizada a leitura, vamos confirmar isso no Data Lake.

Voltando para o SQL Server, vamos abrir `DL_ATACADEZ` e analisar o conteúdo da tabela `dbo.tbl_empresa` no Data Lake.

> *Seis primeiros registros da tabela. Para visualizá-la na íntegra, execute os processos na sua máquina.*

| #   | cod_loja | desc_loja | desc_empresa | cod_empresa | tamanho_loja | arquivo_origem | data_carga |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | LOJA 01 | ATACADEZ | 12312312312312 | 15000 | EMPRESA.CSV | 2023-07-31 03:31:56.407 |
| 2   | 10  | LOJA 10 | ATACADEZ | 12312312312312 | 3000 | EMPRESA.CSV | 2023-07-31 03:31:56.407 |
| 3   | 11  | LOJA 11 | ATACADEZ | 12312312312312 | 6000 | EMPRESA.CSV | 2023-07-31 03:31:56.407 |
| 4   | 12  | LOJA 12 | ATACADEZ | 12312312312312 | 12000 | EMPRESA.CSV | 2023-07-31 03:31:56.407 |
| 5   | 13  | LOJA 13 | ATACADEZ | 12312312312312 | 10000 | EMPRESA.CSV | 2023-07-31 03:31:56.407 |
| 6   | 14  | LOJA 14 | ATACADEZ | 12312312312312 | 10000 | EMPRESA.CSV | 2023-07-31 03:31:56.407 |

No Data Lake, já temos a loja 14 incluída, e a loja 01 passou a ter 15.000m². Porém, na dimensão, a loja 01 ainda é categorizada como supermercado e a loja 14 ainda não existe.

Então, vamos executar a carga do Data Warehouse. No fluxo de controle, vamos executar a tarefa "Carga de dados de Empresas". No fluxo de dados, teremos o seguinte: foram recebidas 14 linhas, sendo que 13 foram desviadas para serem alteradas, pois já existiam na tabela de dimensão, e 1 nova linha foi incluída, a da loja 14. Portanto, foi feito o desvio de forma correta.

Vamos verificar o conteúdo do Data Warehouse agora.

| #   | id_loja | cod_loja | desc_loja | atr_tipo_loja | cod_empresa | desc_empresa |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | ND  | ND  | ND  | ND  | ND  |
| 2   | 1   | 1   | LOJA 01 | Megamercados | 12312312312312 | ATACADEZ |
| 3   | 2   | 10  | LOJA 10 | Supermercados | 12312312312312 | ATACADEZ |
| 4   | 3   | 11  | LOJA 11 | Supermercados | 12312312312312 | ATACADEZ |
| 5   | 4   | 12  | LOJA 12 | Hipermercados | 12312312312312 | ATACADEZ |
| 6   | 5   | 13  | LOJA 13 | Hipermercados | 12312312312312 | ATACADEZ |
| 7   | 6   | 2   | LOJA 02 | Hipermercados | 12312312312312 | ATACADEZ |
| 8   | 7   | 3   | LOJA 03 | Supermercados | 12312312312312 | ATACADEZ |
| 9   | 8   | 4   | LOJA 04 | Supermercados | 12312312312312 | ATACADEZ |
| 10  | 9   | 5   | LOJA 05 | Supermercados | 12312312312312 | ATACADEZ |
| 11  | 10  | 6   | LOJA 06 | Megamercados | 12312312312312 | ATACADEZ |
| 12  | 11  | 7   | LOJA 07 | Megamercados | 12312312312312 | ATACADEZ |
| 13  | 12  | 8   | LOJA 08 | Supermercados | 12312312312312 | ATACADEZ |
| 14  | 13  | 9   | LOJA 09 | Supermercados | 12312312312312 | ATACADEZ |
| 15  | 14  | 14  | LOJA 14 | Hipermercados | 12312312312312 | ATACADEZ |

A loja 01, que era supermercado, passou a ser megamercado, ou seja, na hora de desviar para os membros de dimensão já existentes, todos os atributos foram alterados.

Além disso, a loja 14 foi incluída, criando um novo ID. Antes, o ID terminava no valor 13 e foi criado o ID 14. A sequência cresceu à medida que novos elementos chegaram na dimensão.

## Conclusão

Agora, a carga está perfeita conforme esperado. Ela consegue gerenciar tanto novos membros, quanto membros já existentes da dimensão.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Orquestrando carga das dimensões</span>

No nosso projeto de Integration Services, já temos as dimensões empresa, produto e clientes prontas. O objetivo agora é orquestrar o processo de carga dessas dimensões, ou seja, conectá-los e criar um único procedimento para carregar todas as dimensões.

Estou aqui no Fluxo de Controle, onde temos a carga da dimensão empresa, da dimensão clientes e da dimensão produto (carga de dados de fornecedores, departamentos e produtos).

Na dimensão produto, podemos fazer o seguinte: sei que a carga de fornecedores e a carga de departamentos precisam ser executadas antes da carga de produtos. Assim, construo essas ligações com Carga de dados de Produtos abaixo do Carga de dados de Fornecedores e de Carga de dados de Departamentos.

Como tudo aqui está referenciado à carga de produtos, posso adicionar um Contêiner de Sequência, que deve ser nomeado de "Carga de dados da dimensão Produtos".

Agora, vamos selecionar os três componentes da dimensão produto e colocá-los dentro desse contêiner de sequência.

A carga de empresa, de clientes e da dimensão produto todas estão associadas à carga de dimensões. Assim, podemos carregar esses três processos ao mesmo tempo.

Se quiser, posso criar outro contêiner de sequência, que vou nomear como "Carga de Dimensões". Dentro desse contêiner de sequência, vou colocar a carga de empresa, a carga de clientes e o contêiner "Carga de dados da dimensão Produto".

Ficaremos com um contêiner dentro do outro.

Na Carga Principal, temos a carga no Data Lake e posso criar um outro processo que será a carga do Data Warehouse. Lógico que a carga do Data Lake será executada primeiro e depois faço a carga do Data Warehouse.

E a carga do Data Warehouse estará executando no pacote `CargaData Warehouse.dtsx`.

Podemos salvar o projeto e executar agora a carga principal. Não precisa se preocupar em ter que colocar arquivos lá no diretório "IN" das tabelas de fato do Data Lake, pois o processo não dá erro se você não tiver nenhum arquivo dentro do diretório "IN" da fonte externa para a carga do Data Lake. A única coisa que preciso fazer é clicar com o botão direito do mouse sobre o pacote Carga Principal e definir ele como objeto de inicialização.

Vamos executar. Então, o que ele vai fazer é a carga do Data Lake... Então, o Data Lake entra no processo, carrega as dimensões. Havia um visualizador de dados perdido no meio. Vamos apagar o visualizador de dados da carga de dados de fornecedores.

Podemos salvar e executar novamente. Na carga principal, vamos clicar em "Iniciar". Está fazendo a carga do Data Lake. Em seguida, fez a carga das dimensões do Data Warehouse. Se olharmos no fluxo de controle, vemos todas as cargas. Observando o fluxo principal, vejo que os dois processos executaram com sucesso.

Ainda precisamos fazer algumas coisas como, por exemplo, escrever o log para também registrar a carga do Data Warehouse na tabela de log. Mas não faremos isso agora, pois ainda falta a carga da tabela de fato e da dimensão tempo. Porém, esses processos não serão realizados neste curso.

&nbsp;

&nbsp;

# Para fazer calculos no DW

Já temos todas as fontes do *Data Lake* reunidas numa única tabela interna do processo de fluxo de dados do Integration Services. Agora, é a hora de fazermos o cálculo dos indicadores. Basicamente, o cálculo do **valor da venda** e do **custo da venda**. Vamos voltar para o Visual Studio.

Os cálculos dos indicadores são bastante simples. Precisamos pegar a quantidade e multiplicá-la pelo preço de venda, sendo que quantidade e preço de venda são originários da tabela de itens, para obter o valor da venda. E essa mesma quantidade será multiplicada pelo custo de compra, que é proveniente da tabela de compras, para calcular o custo da venda.

Para fazer isso, vamos aproveitar a coluna derivada que criamos na aula anterior, para podermos visualizar o resultado final do nosso processo. Vamos desabilitar o visualizador de dados. Alteraremos o nome da coluna derivada para "Cálculo do Valor e Custo da Venda". Moveremos para o lado esquerdo e daremos um duplo clique.

Em seguida, no campo "Derived Column Name", vamos chamar a coluna de "valor_venda". Precisamos conferir como está o nome no *Data Warehouse*, pois podemos criar o nome da coluna com o mesmo nome que encontraremos na tabela de fato do *Data Warehouse*. Os nomes são "valor_venda" e "custo_venda".

"valor_venda" será o resultado da quantidade multiplicada pelo preço (`[quantidade] * [preco]`). E "custo_venda" será essa mesma quantidade vezes o preço de compra (`[quantidade] * [preco_compra]`). Ambas as colunas vão dar automaticamente ponto flutuante, então não precisamos nos preocupar com a conversão entre os dados. Clicaremos em "OK".

Feito isso, precisaremos de mais uma coluna derivada para podermos ver o resultado final desse cálculo, ligada à coluna "Cálculo do Valor e Custo da Venda". Vamos habilitar o visualizador de dados. Salvaremos as alterações e seguiremos para o fluxo de controle. Clicaremos com o botão direito do mouse sobre "Carga da Tabela de Fato" e selecionaremos "Executar tarefa".

Logo, temos colunas para a quantidade, o preço, o preço de compra, o valor da venda e o custo da venda. Estamos quase terminando. Percebam que já temos tudo que precisamos da tabela de fato. A única diferença é que precisamos fazer a agregação desses dados.

Porque, como mencionamos anteriormente, a chave primária da origem era o número da nota fiscal. E o número da nota fiscal é uma informação que não vai para a tabela de fato. A menor granularidade da tabela de fato é Cliente, Loja, Dia e Produto. E é possível ter uma mesma pessoa comprando várias vezes na mesma tabela, o mesmo produto no mesmo dia. Só existirão notas fiscais diferentes.

Mas, ao retirar as notas fiscais do fluxo, teremos linhas com essas chaves repetidas. E se não fizermos uma agregação por essas chaves, ao tentar gravar isso na tabela de fato, poderemos ter problemas de restrição de chave primária. Poderíamos tentar gravar vários registros, possivelmente com a mesma chave primária. Então, precisamos fazer essa agregação.
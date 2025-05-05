---
title: >-
  Formação Data Warehouse com Data Lake e SQL Server (Projetão BI do zero Parte
  1 - Prática criando um DW)
updated: 2024-08-08 13:44:21Z
created: 2024-07-14 18:08:50Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

[toc]

Chegou a hora de criar o banco de dados do *Data Warehouse*.

O **Data Warehouse** pode ser construído em qualquer banco de dados relacional: tanto *on premise*, ou seja, instalado no próprio servidor do cliente, ou em nuvem. Inclusive existem instâncias em nuvem especializadas na criação de Data Warehouse. <span style="color: #c0c0c0;">Teremos que criar um banco de dados vazio que será usado para criação do Data Warehouse na plataforma SQL Server 2022.</span>

## Criando o banco de dados

clicaremos com o botão direito do mouse na pasta "Banco de Dados" e selecionaremos a opção "Novo Banco de Dados…", que é a primeira.

Fazendo isso, o Management abre a janela "Novo Banco de Dados" no centro da tela e o campo "Nome do banco de dados" já está selecionado. Nomearemos o banco de dados como "DW_ATACADEZ" e clicaremos no botão "OK", no canto inferior direito da janela. Com isso, o banco que criamos aparece ao final da lista na pasta "Banco de Dados".

Escolhemos o nome "DW_ATACADEZ" (nome da empresa) no Data Warehouse pois ***este deve ser o único banco de dados gerencial de toda a empresa***.

Mesmo que estejamos criando apenas o modelo de Business Intelligence da área de vendas, outras áreas serão implementadas futuramente. Neste momento, precisaremos acrescentar novas tabelas e novos relacionamentos no banco de dados existente.

O Data Warehouse também é um banco de dados relacional. Portanto, ao criá-lo, o banco de dados foi criado também.

Quando criamos uma base de dados transacional e gerencial no SQL Server, devemos comparar algumas características pertinentes ao uso da base de dados gerencial.

No programa, podemos criar os dois tipos de base, gerencial e transacional. Se nada for especificado, ambos terão as mesmas características, afinal, o SQL Server foi construído originalmente para criar bancos de dados relacionais.

Quando trabalhamos com bancos de dados ***transacionais***, ou seja, bases operacionais que controlam atividades rotineiras da empresa, devemos ser capazes de realizar tarefas fundamentais como:

- Backups incrementais e
- Recuperação de transações com as operações COMMIT e ROLLBACK.

Para obter essas funcionalidades, temos que ativar o ***log de transações***, cuja manutenção utilizará fortemente os recursos de máquina e o espaço em disco — afinal, escrevemos o logo toda vez que atualizamos uma tabela. Com isso a atualização das tabelas se tornará mais lenta.

Quando criamos um banco no SQL Server, a ativação desse log é realizada automaticamente, pois o programa foi construído para base de dados transacionais. Contudo, quando utilizamos um banco voltado a dados gerenciais (ou seja, ao Data Warehouse), não há necessidade de salvar transações.

No Data Warehouse, os dados não serão incluídos manualmente, mas sim, por meio de processos de ETL ou ELT que escrevem milhares de linhas na tabela ao mesmo tempo.

Se houver algum erro nesse processo, basta apagar todas as linhas e reprocessar o ETL ou ELT.

Se tivéssemos que salvar o log de transações para cada processamento de milhares de linhas, haveria um alto desperdício de espaço em disco que nunca será utilizado.

Isso não significa que o não faremos backups no Data Warehouse. Contudo, eles deverão ser do tipo *full*, que não precisarão do log de transações.

O backup incremental (ou ponta a ponta) agrega perdas para o banco de dados gerencial, afinal, nunca precisaremos recuperar transações efetuadas.

Se o log é criado por padrão, como mudo essa propriedade no banco do AtacaDez para evitar o salvamento de transações? Para isso, criaremos um novo script com dois comandos.

## Removendo o log de transações

Votlando ao SQL Server, acessaremos a barra de ferramentas superior e clicaremos em "Nova Consulta", o que abrirá uma guia vazia na janela de edição ao centro do programa.

Vamos nos certificar que estamos no interior da base "DW_ATACADEZ", observando o campo de lista suspensa acima da aba de conexões à esquerda. Esse campo deve exibir o nome "DW_ATACADEZ".

No interior da guia na janela de edição, digitaremos `ALTER DATABASE`, o nome da base e o comando `SET RECOVERY SIMPLE`.

> **Dica:** É possível inserir o nome da base selecionando-a na aba de conexões e arrastando-a para o editor.

```sql
ALTER DATABASE [DW_ATACADEZ] SET RECOVERY SIMPLE;
```

Vamos executar essa linha de comando, selecionando-a e clicando no botão "Executar", à esquerda do botão de lista suspensa com o nome da base.

> **Dica:** É possível também executar o código selecionado com o atalho F5.

Com isso, o banco de dados "DW_ATACADEZ" não salvará os logs de transações.

Temos o banco de dados do Data Warehouse criado, porém, está vazio. A seguir, projetaremos as tabelas do banco de dados com base na documentação criada por nós durante o levantamento do modelo de Business Intelligence.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Fases do projeto</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Entenderemos as fases do Business Intelligence e onde nos encontramos atualmente.</span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Anteriormente vimos as fases de implementação de um projeto de Business Intelligence. Durante isso, destacamos a importância da</span> ***construção da Matriz Dimensão x Indicador*** <span style="color: #c0c0c0;">como ponto de partida para o desenvolvimento do projeto.</span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">![937a6e6e8b65a51bba75c3d773731ac4.png](../_resources/937a6e6e8b65a51bba75c3d773731ac4.png)</span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Nós criamos a nossa Matriz Dimensão X Indicador, nosso ponto de partida de um projeto de BI, nós criamos ela e documentamos todo o modelo (documentação das dimensões, atributos, hierarquias e indicadores do modelo) no Notion, e vai ser consultando essa documentação e baseado no formato da matriz, que vamos construir o DW.</span></span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">![52612b47106bd39458b7170be2b2d788.png](../_resources/52612b47106bd39458b7170be2b2d788.png)</span></span>

A construção deste Data Warehouse será fundamental para a criação de uma estrutura sólida de armazenamento dos dados relevantes para gerar, por exemplo, tomadas de decisão pela equipe executiva. Por meio dele é possível ***armazenar, organizar e integrar dados de diferentes fontes***, garantindo sua total disponibilidade e a utilização das mesmas regras de negócio.

Com a visão clara das etapas envolvidas e dos objetivos finais do projeto de Business Intelligence, estamos prontos para continuar o trabalho. Agora, desenvolveremos o projeto do Data Warehouse e a criação das tabelas no interior do banco de dados que criamos anteriormente, a partir da Matriz Dimensão x Indicador.

&nbsp;

&nbsp;

# Conhecendo nosso Modelo de negócio

É de suma importância que conheçamos todos os detalhes de nossas dimensões, atributos, hierarquias, modelo de negócio, etc.

<span style="color: #c0c0c0;">Consultaremos a documentação do modelo de BI no Notion, construída anteriormente.</span>

Na seção do topo da página, intitulada "Dimensões", temos cinco botões de acordeão com as seguintes dimensões:

- CLIENTE;
- PRODUTO;
- EMPRESA;
- TICKET;
- TEMPO.

Vamos clicar em "CLIENTE" para expandir a lista do acordeão e analisar essa dimensão.

Nela, veremos os seguintes níveis:

- CLIENTE
    - **Nível Input**
        - Cliente (CNPJ e Nome do Cliente)
    - **Atributos**
        - Tamanho do Cliente \[baseado no faturamento\]
    - **Hierarquias**
        - Geográfica de Cliente
            - Cliente
            - Cidade
            - Estado
            - Região
        - Segmento
            - Cliente
            - Segmento

Clicando na dimensão "PRODUTO" para expandir a sua lista, veremos os seguintes níveis:

- PRODUTO
    - **Nível Input**
        - Produto (SKU \[identificação única\] e Nome do Produto)
    - **Atributos**
        - Unidade de Medida
    - **Hierarquias**
        - Fornecedor
            - Produto
            - Fornecedor do Produto
        - Departamento
            - Produto
            - Setor

Clicando na dimensão "EMPRESA" para expandir a sua lista, veremos os seguintes níveis:

- EMPRESA
    - **Nível Input**
        - Loja (Identificador e Nome da Loja)
    - **Atributos**
        - Tipo da Loja \[baseado em sua metragem\]
    - **Hierarquias**
        - Empresa
            - Loja
            - Empresa (CNPJ e Nome)

Clicando na dimensão "TICKET" para expandir a sua lista, veremos os seguintes níveis:

- TICKET
    - **Nível Input**
        - ID Sequencial (Sequencial do Item)
    - **Hierarquias**
        - Ticket
            - Sequencial do Item
            - Número do Ticket \[número da Nota Fiscal\]

Finalmente, clicando na dimensão "TEMPO", veremos os seguintes níveis:

- TEMPO
    - **Nível Input**
        - Data (Dia, mês, ano) - AAAAMMDD
    - **Atributos**
        - Dia da Semana
        - Fim de Semana
    - **Hierarquias**
        - Calendário
            - Dia
            - Mês
            - Trimestre
            - Semestre
            - Ano

No nível Input de "TEMPO", temos o formado AAAAMMDD (ano com quatro dígitos, mês e dia com dois dígitos). Já o atributo "Fim de Semana" indica se o dia pertence ao fim de semana ou não.

Abaixo da seção "Dimensões" temos a seção "Indicadores" que exibe o botão de lista suspensa "Lista de Indicadores". Clicando nele, a lista será expandida, exibindo duas sublistas: "Inputs" e "Calculados".

Clicando em "Inputs", expandiremos a lista de indicadores inputs abaixo:

- Inputs
    - Quantidade Vendida
    - Valor da Venda
    - Preço Unitário de Compra (Input)

O Input de preço unitário da compra corresponde ao preço da última compra que entrará no nível mais básico do modelo.

Clicando em "Calculados", por sua vez expandiremos a lista de indicadores calculados abaixo e suas respectivas fórmulas:

- Calculados
    - Custo de Venda (Preço Unitário de Compra (Input) \* Valor de Venda)
    - Preço Unitário de Venda (Valor da Venda / Quantidade Vendida)
    - Preço Unitário de Compra (Custo de Venda / Quantidade Vendida)
    - Lucro (Valor da Venda - Custo da Venda)
    - Rentabilidade ((Lucro / Valor da Venda) \* 100)

Abaixo da seção "Indicadores", temos a seção "Matriz Dimensão Indicador, com a tabela abaixo:

| #   | CLIENTE | PRODUTO | EMPRESA | TICKET | TEMPO |
| --- | --- | --- | --- | --- | --- |
| Quantidade Vendida | X   | X   | X   | X   | X   |
| Valor da Venda | X   | X   | X   | X   | X   |
| Preço Unitário de Venda (input) | X   | X   | X   | X   | X   |
| Custo de Venda | X   | X   | X   | X   | X   |
| Preço Unitário de Venda | X   | X   | X   | X   | X   |
| Preço Unitário de Compra | X   | X   | X   | X   | X   |
| Lucro | X   | X   | X   | X   | X   |
| Rentabilidade | X   | X   | X   | X   | X   |

Nela, veremos que todas as linhas e colunas se cruzam. Isso ocorre porque Paula adotou o Data Warehouse vertical, onde ela escolhe o modelo de negócio (neste caso, vendas) e implementa o projeto de Business Intelligence utilizando apenas essa área.

Com isso, e considerando que a Matriz Dimensão x Indicador do Data Warehouse possui, por enquanto, somente informações do modelo de vendas, teremos esse cruzamento com todas as combinações preenchidas.

Posteriormente, quando implementarmos outras áreas de negócio, a essa Matriz aumentará, tanto em colunas, por meio da inclusão de novas dimensões, como em linhas, com o surgimento de novos indicadores. É possível, inclusive, que alguns cruzamentos se tornem inválidos.

A partir da documentação, construiremos o Data Warehouse.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Construindo a dimensão empresa (projetando o DW de acordo com nossa documentação)</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Começaremos a projetar o Data Warehouse baseando-nos na documentação revisada anteriormente. Primeiro, criaremos a Dimensão "EMPRESA".</span></span>

No Notion, retornaremos a expandir o menu da Dimensão "EMPRESA".

- EMPRESA
    - **Nível Input**
        - Loja (Identificador e Nome da Loja)
    - **Atributos**
        - Tipo da Loja
    - **Hierarquias**
        - Empresa
            - Loja
            - Empresa (CNPJ e Nome)

Modelaremos a tabela que representará a Dimensão "EMPRESA" por meio do ***SQL Power Architect***.

Após abrir o software, fecharemos a janela de diálogo inicial. A tela inicial consistirá na aba de árvore na lateral esquerda e a tela de edição ao centro. No topo, há uma barra de menus, abaixo da qual vemos uma aba secundária com ícones de ferramentas.

Por enquanto, a aba de árvore não possui nenhum nó representando o modelo a ser criado. Já a tela do editor está vazia — e é nela que criaremos o Data Warehouse.

Para visualizar a documentação e a tela do Power Arquitect simultaneamente, diminuiremos e posicionaremos ambas as janelas lado a lado.

Para criar a tabela da Dimensão "EMPRESA", clicaremos com o botão direito do mouse sobre a tela do editor, selecionando a opção "New Table" ("Nova Tabela"). Com isso, o ícone do cursor se tornará uma cruz. Pressionando o botão esquerdo do mouse, arrastaremos esse cursor de modo a criar a área de um retângulo de qualquer tamanho.

Após isso, uma janela de propriedades de tabela será exibida. Em seu interior, projetaremos a tabela.

Essa janela possui os seguintes campos de texto a serem preenchidos, alinhados verticalmente:

- "Logical Table Name" ou "Nome Lógico da Tabela"
- "Physical Table Name" ou "Nome Físico da Tabela"
- "Primary Key Name" ou "Nome da Chave Primária"

No primeiro campo, digitaremos um texto para mostrar o que significa essa entidade — neste caso, "DIMENSÃO EMPRESA".

<span style="color: #c0c0c0;">Já no campo "Physical Table Name", escreveremos o nome que a tabela terá no interior do SQL, quando o Data Warehouse for criado — neste caso, "dim_empresa".</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">No campo "Primary Key Name", escreveremos o nome da chave primária da tabela "dim_empresa_pk" — para isso, sempre devemos concatenar o nome da tabela com o "\_pk", onde ”PK” significa "Primary Key".</span></span>

Abaixo dos campos de texto, há o campo "Table Colour" com um botão de lista de seleção com diversas cores. Vamos clicar nele e selecionar o tom de azul-claro que servirá como a cor de todas as tabelas de Dimensão.

Por fim, clicaremos no botão "OK", no canto inferior direito da janela e veremos nossa tabela representada em um pequeno retângulo no centro da tela de edição que exibe o título "DIMENSÃO_EMPRESA".

Contudo, ela não possui nenhum campo. Quais campos criaremos em seu interior?

Para o Nível Input de todas as Dimensões, criaremos três campos de representação:

1.  O identificador primário
2.  O identificador natural
3.  Seu descritor

A primeira representação do Nível Input de "EMPRESA" será o identificador primário.

## Criando o Identificador Primário (chave artificial)

Para isso, clicaremos com o botão direito sobre a tabela recém-criada e selecionaremos a opção "New Column" ("Nova Coluna"). Na janela de propriedades que será exibida, preencheremos os seguintes campos:

- "Logical Name" ou "Nome Lógico"
- "Physical Name" ou "Nome Físico"
- "Type" ou "Tipo"

Em "Logical Name", escreveremos o nome lógico "IDENTIFICADOR PRIMÁRIO DA LOJA".

<span style="color: #c0c0c0;">Em "Physical Name", sempre chamaremos o nome físico com um código ID do Identificador — neste caso, "id_loja".</span>

O identificador primário da Dimensão sempre será do tipo Inteiro, portanto, no campo "Type", clicaremos no botão "VARCHAR" e selecionaremos a opção "INTEGER" na caixa de lista suspensa.

Esses identificadores também serão sempre chaves primárias, portanto, marcaremos a caixa de opção "In Primary Key", abaixo do campo "Physical Name".

Para finalizar a representação do identificador primário da loja (o Nível Input da Dimensão "EMPRESA"), clicaremos no botão "OK", no canto inferior direito da janela.

Com isso, veremos que nossa tabela "DIMENSÃO EMPRESA" adquiriu uma linha que exibe o nome lógico.

| DIMENSÃO EMPRESA |
| --- |
| IDENTIFICADOR PRIMÁRIO DA LOJA: INTEGER NOT NULL \[PK\] |

## Criando o Identificador Natural (chave real)

Vamos criar o identificador natural da loja efetuando o mesmo processo, clicando com o botão direito sobre a tabela e selecionando a opção "New Column" ("Nova Coluna"). Na janela de propriedades que será exibida, preencheremos os campos da seguinte maneira:

Em "Logical Name", escreveremos o nome lógico "IDENTIFICADOR NATURAL DA LOJA".

<span style="color: #c0c0c0;">Em "Physical Name", sempre chamaremos o identificador natural de "cod_loja", onde "cod" deriva de "código".</span>

O identificador natural da loja não será do tipo Inteiro, mas sim "VARCHAR". Portanto, no campo "Type", manteremos a opção "VARCHAR" selecionada.

Ao especificá-lo com esse tipo, devemos informar o seu tamanho no campo "Precision", abaixo de "Type". Para isso, vamos marcar a caixa de seleção à sua esquerda.

O tamanho deve estar associado a um código interno utilizado para identificar uma loja. Essa última possui um código natural proveniente dos sistemas transacionais da empresa.

A pessoa consultora de Business Intelligence deve saber o tamanho do código da loja por meio de consultas ao time de TI da empresa. Já que não especificamos essa etapa, adicionaremos ao identificador natural da loja o tamanho de 25 caracteres.

> **Atenção:** O identificador natural da loja não é uma chave primária. Portanto, não devemos marcar a caixa do campo "In Primary Key".

Clicaremos no botão "OK", e veremos que nossa tabela "DIMENSÃO EMPRESA" adquiriu uma linha nova, abaixo da anterior.

| DIMENSÃO EMPRESA |
| --- |
| IDENTIFICADOR PRIMÁRIO DA LOJA: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DA LOJA: VARCHAR(25) NOT NULL |

Especificaremos o terceiro campo, que identifica o Nível Input da Dimensão: o descritor da loja.

## Criando o Descritor

Acessaremos novamente a janela de configuração da nova coluna. Em "Logical Name", escreveremos o nome lógico "DESCRITOR DA LOJA".

<span style="color: #c0c0c0;">Em "Physical Name", utilizaremos "desc_loja", onde "desc" deriva de "descritor".</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Ele também será um VARCHAR, cujo tamanho deveríamos obter, também, por meio da equipe interna da empresa. Já que não especificamos essa etapa, marcaremos a caixa de seleção "Precision" e adicionaremos em seu campo o tamanho de 200 caracteres.</span></span>

Selecionaremos "OK" e veremos na tabela os três campos que identificam o Nível Input da Dimensão.

| DIMENSÃO EMPRESA |
| --- |
| IDENTIFICADOR PRIMÁRIO DA LOJA: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DA LOJA: VARCHAR(25) NOT NULL |
| DESCRITOR DA LOJA: VARCHAR(200) NOT NULL |

Agora, representaremos o atributo "Tipo da Loja".

## Criando o Atributo

Acessaremos novamente a janela de configuração da nova coluna por meio do clique com o botão direito. Em "Logical Name", escreveremos o nome lógico "ATRIBUTO TIPO DA LOJA".

<span style="color: #c0c0c0;">Em "Physical Name", utilizaremos "atr_tipo_loja", onde "atr" é um prefixo para "atributo" e "tipo_loja" refere-se ao significado do atributo.</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Ele será um VARCHAR cujo tamanho será um texto, pois,conforme visto anteriormente, o atributo não possui uma quantificação natural associada a ele. Para isso, marcaremos a caixa de seleção "Precision" e adicionaremos em seu campo o tamanho de 50 caracteres.</span></span>

Selecionaremos "OK" e veremos na tabela a linha do atributo adicionada.

| DIMENSÃO EMPRESA |
| --- |
| IDENTIFICADOR PRIMÁRIO DA LOJA: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DA LOJA: VARCHAR(25) NOT NULL |
| DESCRITOR DA LOJA: VARCHAR(200) NOT NULL |
| ATRIBUTO TIPO DA LOJA: VARCHAR(50) NOT NULL |

Partiremos para a adição das hierarquias.

## Criando Hierarquias

O nível "Loja", o mais baixo da hierarquia, já foi representado quando construímos o Nível Input "Loja". Por isso, especificaremos somente o nível mais alto — ou seja, "Empresa", que possui o código natural e o nome da empresa.

O Nível Output não possuirá identificador primário.

Para criar a hierarquia, acessaremos novamente a janela de configuração da nova coluna por meio do clique com o botão direito na tabela. Em "Logical Name", escreveremos o nome lógico "IDENTIFICADOR NATURAL DA EMPRESA".

<span style="color: #c0c0c0;">Em "Physical Name", utilizaremos "cod_empresa".</span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Ele será um VARCHAR cujo tamanho será 20 caracteres.</span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Selecionaremos "OK" e partiremos para o último campo, o descritor da empresa. Acessaremos novamente a janela de configuração da nova coluna e adicionaremos em "Logical Name", o nome lógico "DESCRITOR DA EMPRESA".</span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Em "Physical Name", utilizaremos "desc_empresa".</span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Ele será um VARCHAR cujo tamanho será 200 caracteres.</span></span></span></span></span>

Após clicar em "OK", veremos nossa primeira tabela pronta.

| DIMENSÃO EMPRESA |
| --- |
| IDENTIFICADOR PRIMÁRIO DA LOJA: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DA LOJA: VARCHAR(25) NOT NULL |
| DESCRITOR DA LOJA: VARCHAR(200) NOT NULL |
| ATRIBUTO TIPO DA LOJA: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DA EMPRESA: VARCHAR(25) NOT NULL |
| DESCRITOR DA EMPRESA: VARCHAR(200) NOT NULL |

Representaremos todos os campos de Dimensões dentro da mesma tabela, exceto em um caso específico que abordaremos posteriormente.

Para não perder o trabalho, salvaremos o projeto. Para isso, acessaremos a barra de menus superior e selecionaremos "File > Save Project As".

Na janela do explorador que será exibida, escolheremos a pasta desejada — neste caso criaremos uma pasta denominada "DW PROJETO" no Disco Local (C:).

O nome do arquivo será "DW_ATACADEZ_001", no qual "001" identifica a primeira versão do projeto.

Para concluir o salvamento, clicaremos em "Save", no canto inferior direito da janela. Com isso, temos a Dimensão "EMPRESA" criada no SQL Power Architect.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Modelos de Data Warehouse (Schemas)</span>

<span style="color: #ffffff;">Anteriormente criamos a dimensão de empresa no Power Architect!</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Note que criamos uma tabela única com todos os campos input, output e atributos, além de uma série de regras para a representação de cada um desses campos. Fizemos isso porque usamos um tipo de modelagem de</span> *Data Warehouse*<span style="color: #c0c0c0;">. Agora, vamos entender melhor os modelos existentes.</span></span>

Quando passamos os dados da documentação do modelo de *business intelligence*, especificamente os da matriz, para a representação das tabelas, notamos diversos modelos diferentes.

Entre os vários modelos de *Data Warehouse*, há dois que são mais usados: **Star Schema** ("Modelo Estrela", em português) e **Snow Flake Schema** ("Modelo Floco de Neve", em português.

## Star Schema

Para entender o **Star Schema** tomemos como exemplo a seguinte matriz dimensão-indicador:

|     | DIM 1  <br><br/>NÍVEL 1  <br><br/>NÍVEL 2  <br><br/>ATTR1 | DIM 2  <br><br/>NÍVEL 2  <br><br/>ATTR1  <br><br/>ATTR2 | DIM 3  <br><br/>NÍVEL 1  <br><br/>NÍVEL 2  <br><br/>NÍVEL 3 |
| --- | --- | --- | --- |
| IND1  <br><br/>IND2  <br><br/>IND3 |     |     |     |

Ela possui três dimensões (DIM1, DIM2 e DIM3) e três indicadores (IND1, IND2 e IND3).

A primeira dimensão (DIM1) possui uma hierarquia de dois níveis e um atributo. DIM2 possui dois atributos e uma hierarquia de apenas um nível. Já DIM3 possui uma hierarquia de três níveis.

|     | DIM 1  <br><br/>NÍVEL 1  <br><br/>NÍVEL 2  <br><br/>ATTR1 | DIM 2  <br><br/>NÍVEL 2  <br><br/>ATTR1  <br><br/>ATTR2 | DIM 3  <br><br/>NÍVEL 1  <br><br/>NÍVEL 2  <br><br/>NÍVEL 3 |
| --- | --- | --- | --- |
| IND1  <br><br/>IND2  <br><br/>IND3 | x  <br><br/>x  <br><br/>x | x  <br><br/>x  <br><br/>x | x  <br><br/>x  <br><br/>x |

Temos, então, todos os indicadores usando todas as dimensões. Como se daria o desenho das tabelas?

Inicialmente, temos uma tabela de fato que teria como chave primária o identificador de cada dimensão do seu nível mais baixo e a representação dos indicadores:

| FATO |
| --- |
| NIVEL1_DIM1_ID |
| NIVEL1_DIM2_ID |
| NIVEL1_DIM3_ID |
| IND1 |
| IND2 |
| IND3 |

Depois, orbitando em volta dessa tabela de fato, teríamos as dimensões com todos os campos, chaves e descritores de todos os níveis e atributos, tudo desnormalizado na mesma tabela.

Então, teríamos o nível input da tabela fato fazendo uma chave estrangeira com o nível input de cada tabela dimensão.

![Ao centro, a tabela "FATO". À esquerda da tabela "FATO", as tabelas "DIM1" e "DIM2", uma em cima e outra embaixo. De cada uma sai uma linha ligando-as a tabela "FATO". À direita da tabela "FATO", a tabela "DIM2". Uma linha as interliga.](../_resources/4e260029-db76-4303-a4fd-1115904f.png)

Essa é a representação do **modelo estrela**!

## Snow Flake Schema

Já no modelo **Snow Flake Schema** teríamos cada nível da dimensão representado por uma tabela.

Dessa forma, temos ao centro a tabela FATO:

| FATO |
| --- |
| NIVEL1_DIM1_ID |
| NIVEL1_DIM2_ID |
| NIVEL1_DIM3_ID |
| IND1 |
| IND2 |
| IND3 |

À esquerda da tabela fato, sendo cada uma ligada à tabela fato por uma linha, temos as tabelas DIM1_NIVEL1 e DIM3_NIVEL1:

| DIM1_NIVEL1 |
| --- |
| NIVEL1_ID |
| NIVEL1_DESC |
| NIVEL2_ID |
| ATTR1 |

| DIM3_NIVEL1 |
| --- |
| NIVEL1_ID |
| NIVEL1_DESC |
| NIVEL2_ID |

À direita da tabela fato, ligando-se a ela por uma linha, temos a tabela DIM2_NIVEL1:

| DIM2_N1VEL1 |
| --- |
| NIVEL1_ID |
| NIVEL1_DESC |
| ATTR1 |
| ATTR2 |

À esquerda das tabelas DIM1_NIVEL1 e DIM3_NIVEL1 tabelas DIM1_NIVEL2, DIM3_NIVEL3 e DIM3_NIVEL2:

| DIM1_NIVEL2 |
| --- |
| NIVEL2_ID |
| NIVEL2_DESC |

| DIM3_NIVEL3 |
| --- |
| NIVEL3_ID |
| NIVEL3_DESC |

| DIM3_NIVEL2 |
| --- |
| NIVEL2_ID |
| NIVEL2_DESC |
| NIVEL3_ID |

A primeira tabela, do nível mais baixo, é representada com o identificador deste nível mais baixo e possui o identificador do seu nível pai, como vemos na terceira linha da tabela DIM3_NIVEL2, onde temos "NIVEL2_ID".

Este identificador do nível pai é representado na tabela seguinte, como vemos no primeiro registro da tabela DIM3_NIVEL2, onde temos "NIVEL2_ID".

Dessa forma, fazemos uma espécie de escada onde cada nível é representado em uma tabela separada. Além disso, temos uma integridade referencial associada às diferentes tabelas dos diferentes níveis:

![À esquerda, temos a tabela "DIM1_NIVEL2", da qual sai uma linha para a direita ligando-a à tabela "DIM1_NIVEL1". De "DIM1_NIVEL1" sai uma linha para a tabela "FATO", à sua direita. Da tabela "FATO", uma linha para "DIM2_NIVEL1", à direita. Também à esquerda, embaixo de "DIM1_NIVEL", temos a tabela "DIM3_NIVEL3", da qual sai uma linha para "DIM3_NIVEL2", à sua direita. De "DIM3_NIVEL2" uma linha para a tabela seguinte, "DIM3_NIVEL1". De "DIM3_NIVEL1" uma linha para a tabela "FATO".](../_resources/9d5821a6-a1c0-4182-bfa8-dc0bc35f.jpeg)

Essa é a representação do **modelo floco de neve**!

## Vantagens e Desvantagens

A escolha do modelo depende de diversos fatores, então vamos falar das vantagens e desvantagens de cada um.

### Star Schema

| PRÓS | CONTRAS |
| --- | --- |
| Simplicidade | Redundância de dados |
| Desempenho | Dificuldade em lidar com mudanças |
| Facilidade de navegação | Menor normalização |

O modelo estrela tem a **simplicidade** como uma de suas vantagens, pois é relativamente simples de entender e implementar, já que consiste em uma tabela central (a tabela fato) cercada por tabelas dimensionais.

Este modelo tem um **desempenho** melhor em consultas de agregação e em relatórios analíticos. Isso, porque, para fazer dados do nível output de uma dimensão, serão necessários menos comandos do tipo `JOIN`e menos dimensões do que se utilizarmos o modelo floco de neve.

Outra vantagem é a **facilidade de navegação**, já que a estrutura desse modelo é mais simples e tem menos tabelas. Logo, compreendemos melhor a relação entre as dimensões e as tabelas fato.

Como desvantagem podemos citar a **redundância de dados**, já que as informações sobre as dimensões são replicadas diversas vezes dentro da tabela, principalmente os descritos e atributos associados ao nível mais baixo da dimensão.

Há uma **dificuldade em lidar com mudanças** neste modelo. Se tivermos uma alteração na estrutura da dimensão, como novos atributos, por exemplo, o modelo pode exigir grandes modificações, o que pode ser trabalhoso e demorado se for mudar a estrutura do *Data Warehouse*.

Outra desvantagem é a **menor normalização**, pois esse modelo tende a violar a forma normal devido à desnormalização utilizada para melhorar o desempenho quando o desenhamos. Isso pode resultar em atualizações de dados menos eficientes e maiores requisitos de armazenamento. Ou seja, o tamanho do *Data Warehouse* será maior.

### Snow Flake Schema

| PRÓS | CONTRAS |
| --- | --- |
| Normalização | Complexidade |
| Flexibilidade | Desempenho |
| Eficiência no armazenamento | Manutenção mais difícil |

A primeira vantagem do modelo floco de neve é a **normalização**. Ele segue os princípios da normalização, o que significa que há menos redundância de dados e uma maior integridades desses dados.

A **flexibilidade** deste modelo é maior que o de estrela quando se trata de lidar com alterações na estrutura multidimensional. As modificações de um novo atributo ou dimensão podem ser feitas em uma tabela isolada. Outra opção é acrescentar, individualmente, novas tabelas, não afetando as outras partes do desenho do *Data Warehouse*.

Esse modelo também possui melhor **eficiência no armazenamento**. Isso, porque, comparado ao modelo estrela, pode ocupar menos espaço em disco, já que os dados são normalizados, especialmente quando possui muitos atributos.

A **complexidade** configura uma desvantagem. É mais difícil compreender a estrutura do modelo floco de neve, já que envolve mais tabelas, junções e integridades referenciais.

O **desempenho** também é uma desvantagem devido ao maior número de junções. Recuperar um dado no nível output, no topo da árvore, requer muitos comandos do tipo `JOIN` e muitas agregações, criando instruções SQL mais complexas.

A **manutenção é mais difícil** porque precisamos gerenciar diversas tabelas e garantir a integridade de todas elas dentro do modelo.

Optamos por implementar um modelo misto. Sendo assim, usaremos o modelo estrela para as dimensões **cliente**, **empresa**, **tempo** e **ticket**.

Já para a dimensão de **produto**, adotaremos o modelo floco de neve. Este caso, trata-se uma abordagem didática para podermos entender como trabalhar com esta dimensão.

Em uma situação real, normalmente utilizamos o mesmo esquema para todas as tabelas. No caso da tabela de fato, não fará diferença qual o modelo adotado.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Dimensão cliente</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Agora, vamos construir a tabela da dimensão cliente no</span> *SQL Power Architect*<span style="color: #c0c0c0;">!</span></span>

Na tela, vamos posicionar a janela do *SQL Power Architect* à esquerda e a documentação do *Notion* à direita.

Na documentação, vamos abrir as informações sobre a dimensão cliente.

No *SQL Power Architect*, clicamos com o botão direito do mouse e vamos em "New Table". Em seguida, desenhamos a tabela clicando e arrastando na tela.

Uma janela se abrirá e nela colocamos o nome lógico (Logical Table Name) como "DIMENSÃO CLIENTE". O nome físico (Physical Table Name) será "dim_cliente". Já o nome da referência da chave primária (Primary Key Name) será o nome físico acrescido de `_pk`, ou seja, "dim_cliente_pk". Nas cores da tabela (Table Colour), vamos optar por azul, mas manteremos o texto em preto. Feito isso, basta clicar em "OK".

Temos nossa tabela da dimensão cliente:

| DIMENSÃO CLIENTE |
| --- |
|     |
|     |

Com botão direito do mouse, clicamos sobre esta tabela e vamos em "New Column". Uma janela se abrirá.

Começaremos pelo identificador da dimensão, representando-o com 3 campos: identificador primário, identificador natural e descritor.

Vamos preencher o campo "Logical Name" com "IDENTIFICADOR PRIMÁRIO DE CLIENTE". Em "Physical Name", colocamos "id_cliente". Em seguida, definimos o tipo (Type) como "INTEGER" (inteiro) e marcamos a caixa "In Primary Key". Por fim, clicamos em "OK".

A tabela ficará assim:

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |

Ao clicar sobre ela e teclar "C", abrimos a caixa de diálogo de inclusão de uma nova coluna.

Agora, vamos preencher o campo "Logical Name" com "IDENTIFICADOR NATURAL DE CLIENTE". Em "Physical Name", colocamos "cod_cliente". Este identificador será do tipo "VARCHAR", portanto, é necessário marcar a caixa do campo "Precision" e defini-lo como "50", que se refere ao tamanho. Feito isso, basta clicar em "OK".

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(50) NOT NULL |

Vamos para o descritor do nível input da dimensão. Para isso, repetimos o processo de clicar na tabela e teclar "C", assim abrimos a caixa de diálogo de inclusão de uma nova coluna.

O nome lógico será "DESCRITOR DE CLIENTE" e o nome físico será "desc_cliente". Este descritor será do tipo "VARCHAR" de tamanho 200. Após preenchermos, clicamos em "OK".

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(50) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |

Agora, faremos o primeiro atributo que é o tamanho do cliente.

Clicamos sobre a tabela e teclamos "C". Em seguida, preenchemos o nome físico como "ATRIBUTO TAMANHO DO CLIENTE", cujo nome físico será "atr_tamanho_cliente". Definiremos o tipo como "VARCHAR" de tamanho 50.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(50) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |

Vamos para os campos das hierarquias, começando por cidades. Como é um nível output, não possui identificador primário, somente natural.

Definiremos o nome lógico "IDENTIFICADOR NATURAL DE CIDADE" e o nome físico como "cod_cidade". Ele será do tipo "VARCHAR" de 50.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(50) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(50) NOT NULL |

Repetimos o processo, agora para o descritor de cidades. Portanto, o nome lógico será "DESCRITOR DE CIDADES"; o físico, "desc_cidade"; e o tipo, "VARCHAR" de tamanho 200.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(50) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(50) NOT NULL |
| DESCRITOR DE CIDADE: VARCHAR(200) NOT NULL |

Passando para o estado, usaremos os seguintes dados: "IDENTIFICADOR NATURAL DE ESTADO" para o nome lógico; "cod_estado" para o nome físico; tipo "VARCHAR" de 50.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(50) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(50) NOT NULL |
| DESCRITOR DE CIDADE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE ESTADO: VARCHAR(50) NOT NULL |

Para o descritor do estado, passaremos o seguinte: "DESCRITOR DO ESTADO" como nome lógico; "desc_estado" para o nome físico; "VARCHAR" de 200 para o tipo.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(50) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(50) NOT NULL |
| DESCRITOR DE CIDADE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE ESTADO: VARCHAR(50) NOT NULL |
| DESCRITOR DO ESTADO: VARCHAR(200) NOT NULL |

Perceba que, na dimensão de empresa, definimos o identificador como um VARCHAR de 25. Aqui, na de clientes, definimos como um VARCHAR de 50. Isso não configura um problema, mas como queremos manter um padrão, precisamos alterar.

Para fazer essa alteração, damos um duplo clique sobre o campo na tabela (IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(50) NOT NULL). A caixa de diálogo se abrirá com as informações preenchidas, então basta alterar o tamanho de VARCHAR para 25. Em seguida, repetimos este procedimento para o IDENTIFICADOR NATURAL DE CIDADE.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CIDADE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE ESTADO: VARCHAR(50) NOT NULL |
| DESCRITOR DO ESTADO: VARCHAR(200) NOT NULL |

Passando para a região, definimos o nome lógico como "IDENTIFICADOR NATURAL DE REGIAO"; o físico como "cod_regiao" e o tipo como "VARCHAR" de 25.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(25) NOT NULL |
| IDENTIFICADOR NATURAL DE REGIAO: VARCHAR(25) NOT NULL |
| DESCRITOR DE CIDADE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE ESTADO: VARCHAR(50) NOT NULL |
| DESCRITOR DO ESTADO: VARCHAR(200) NOT NULL |

Note que o identificador de região foi posicionado abaixo do identificador de cidade. Se quisermos alterar essa posição na tabela, basta clicar sobre o campo e arrastá-lo para a localização desejada.

Neste caso, optaremos por colocá-lo após o descritor do estado, seguindo uma lógica:

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CIDADE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE ESTADO: VARCHAR(50) NOT NULL |
| DESCRITOR DO ESTADO: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE REGIAO: VARCHAR(25) NOT NULL |

Agora, vamos para o descritor de região, cujo nome lógico será "DESCRITOR DE REGIAO"; o físico, "desc_regiao"; e o tipo "VARCHAR" de 200.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(25) NOT NULL |
| IDENTIFICADOR NATURAL DE REGIAO: VARCHAR(25) NOT NULL |
| DESCRITOR DE CIDADE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE ESTADO: VARCHAR(50) NOT NULL |
| DESCRITOR DO ESTADO: VARCHAR(200) NOT NULL |
| DESCRITOR DE REGIAO: VARCHAR(200) NOT NULL |

Nos resta a hierarquia de segmento. Vamos definir "IDENTIFICADOR NATURAL DO SEGMENTO" como nome lógico; "cod_segmento" como nome físico; e "VARCHAR" de 25 como tipo.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CIDADE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE ESTADO: VARCHAR(50) NOT NULL |
| DESCRITOR DO ESTADO: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE REGIAO: VARCHAR(25) NOT NULL |
| DESCRITOR DE REGIAO: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DO SEGMENTO: VARCHAR(25) NOT NULL |

Por fim, temos o descritor do nível output de segmento, que terá o nome lógico "DESCRITOR DE SEGMENTO"; o nome físico "desc_segmento"; e o tipo "VARCHAR" de 200.

| DIMENSÃO CLIENTE |
| --- |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DE CLIENTE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CLIENTE: VARCHAR(200) NOT NULL |
| ATRIBUTO TAMANHO DO CLIENTE: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE CIDADE: VARCHAR(25) NOT NULL |
| DESCRITOR DE CIDADE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE ESTADO: VARCHAR(50) NOT NULL |
| DESCRITOR DO ESTADO: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DE REGIAO: VARCHAR(25) NOT NULL |
| DESCRITOR DE REGIAO: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DO SEGMENTO: VARCHAR(25) NOT NULL |
| DESCRITOR DE SEGMENTO: VARCHAR(200) NOT NULL |

Temos a tabela dimensão cliente, cujo esquema utilizado é o de estrela. Sendo assim, todos os campos estão em uma única tabela, de forma desnormalizada.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Identificador da dimensão (identificador natural X primário)</span>

Já criamos as dimensões empresa e cliente. Durante esse processo, você deve ter notado que criamos dois identificadores para o nível input: o natural e o primário.

Vamos entender isso melhor!

Ao criar o *data warehouse*, utilizamos para identificação do nível input um campo do tipo inteiro chamado identificador primário e outro do tipo VARCHAR chamado identificador natural.

Para entender isso melhor, tomemos como exemplo a seguinte lista de clientes:

| CNPJ | NOME DO CLIENTE |
| --- | --- |
| 123323322/0001-10 | Lanchonete do José |
| 131311121/2000-12 | Padaria do Almeida |
| 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |
| 156344423/1000-12 | Atacado de Comércio |
| 543444332/1222-12 | Restaurante Boa Via |
| 346544433/1222-13 | Tendinha do Zé |
| 766543344/1222-45 | Escola Nova Educação |

Como todos os clientes são empresas, é natural que o identificador de cada um seja o seu CNPJ. Portanto, nenhum cliente deve ter esse dado repetido.

O CNPJ é normalmente formado por uma cadeia de números que possuem caracteres como barras e traços em determinadas posições. Logo, o campo usado para armazenar esse dado não pode ser um número inteiro, e sim um texto.

**Chamamos o CNPJ de identificador natural da dimensão.**

Quando mostramos os diferentes esquemas de *data warehouse*, como o estrela e o floco de neve, vimos que as tabelas dimensão e fato se ligam pelo campo que identifica o membro da dimensão. Logo, haverá uma chave estrangeira entre os dois campos de CNPJ das tabelas:

> Tabela dimensão

| CNPJ | NOME DO CLIENTE |
| --- | --- |
| 123323322/0001-10 | Lanchonete do José |
| 131311121/2000-12 | Padaria do Almeida |
| 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |
| 156344423/1000-12 | Atacado de Comércio |
| 543444332/1222-12 | Restaurante Boa Via |
| 346544433/1222-13 | Tendinha do Zé |
| 766543344/1222-45 | Escola Nova Educação |

> Tabela fato

| VALOR | CNPJ |
| --- | --- |
| 10  | 123323322/0001-10 |
| 10  | 131311121/2000-12 |
| 10  | 112343233/0222-10 |
| 10  | 156344423/1000-12 |
| 10  | 543444332/1222-12 |
| 10  | 346544433/1222-13 |
| 10  | 766543344/1222-45 |

Ao realizar consultas no *data warehouse* para saber, por exemplo, o valor do indicador, serão feitos comandos do tipo `JOIN` entre o identificador da tabela fato e o identificador da tabela dimensão. Dessa forma, podemos obter os valores agrupados pelo nome do cliente.

A tendência é que a tabela fato, que possui a coluna de valor, seja muito grande. Portanto, o comando `JOIN` feito entre o código que identifica a dimensão (CNPJ) será pesado, então precisaremos de performance.

Fazer comandos do tipo `JOIN` entre textos é mais lento do que fazer entre números. Isso é uma característica dos bancos de dados relacionais.

Se pudermos fazer o comando `JOIN` juntando a tabela de dimensão pela tabela de fato usando um código numérico de número inteiro, teremos uma performance melhor.

Nesse sentido, teríamos uma coluna de código numérico que identifique cada linha da dimensão e que também exista dentro da tabela fato:

> Tabela dimensão

| ID  | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
| 1   | 123323322/0001-10 | Lanchonete do José |
| 2   | 131311121/2000-12 | Padaria do Almeida |
| 3   | 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |
| 4   | 156344423/1000-12 | Atacado de Comércio |
| 5   | 543444332/1222-12 | Restaurante Boa Via |
| 6   | 346544433/1222-13 | Tendinha do Zé |
| 7   | 766543344/1222-45 | Escola Nova Educação |

> Tabela fato

| VALOR | ID  |
| --- | --- |
| 10  | 1   |
| 10  | 2   |
| 10  | 3   |
| 10  | 4   |
| 10  | 5   |
| 10  | 6   |
| 10  | 7   |

**Não é interessante utilizarmos o identificador natural da dimensão como o identificador do membro da dimensão do *data warehouse*. Porque, senão, os comandos do tipo `JOIN` entre as tabelas de dimensão e fato ficarão mais lentos.**

O interessante é criar outro codificador próprio, usando números inteiros, para identificar cada membro da dimensão. Assim, a tabela dimensão terá um identificador que chamaremos de **identificador primário**, que normalmente será a chave primária da dimensão e sempre um inteiro. Você deve ter percebido que fizemos isso.

<span style="color: #c0c0c0;">O código identificador natural da dimensão passa a ser um mero atributo associado ao membro da dimensão. E o que vai ligar as tabelas fato e dimensão será o campo numérico inteiro: o identificador primário.</span>

## Como criar um novo campo identificador numérico?

Já sabemos que é vantajoso criar um novo campo de identificador numérico inteiro. Mas como fazer isso?

Existe uma técnica chamada **lookup**. Vamos a um exemplo para entender como ela funciona.

Inicialmente, temos esta tabela com a fonte de dados da qual estamos extraindo a informação e gravando no *data warehouse*:

| CNPJ | NOME DO CLIENTE |
| --- | --- |
| 123323322/0001-10 | Lanchonete do José |
| 131311121/2000-12 | Padaria do Almeida |
| 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |

Se trata da tabela operacional, onde os processos de ETL vão extrair os dados para serem gravados no *data warehouse*.

Depois, temos a tabela dimensão com o **identificador primário (ident), o identificador natural (CNPJ) e o descritor (NOME DO CLIENTE)**. Perceba que ela está vazia.

| Ident | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
|     |     |     |

Ao ler a primeira linha da fonte para gravar no *data warehouse*, vamos questionar o seguinte:

> O CNPJ 123323322/0001-10 existe na dimensão?

A resposta é que não existe, porque a dimensão está vazia. Então partimos para o segundo questionamento:

> Quantos membros temos na dimensão?

A resposta é zero, já que a tabela está vazia.

Logo, somamos 1 à 0, que resulta em 1, e gravamos na tabela dimensão o identificador primário como sendo este número. Ao lado, gravamos o seu identificador natural e o nome do cliente - dados advindos da fonte.

| Ident | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
| 1   | 123323322/0001-10 | Lanchonete do José |

Quando lemos a segunda e terceira linha da fonte, fazemos as mesmas perguntas.

Como o segundo e terceiro elemento lido não existe na dimensão, teremos os 3 primeiros clientes com os identificadores primários 1, 2 e 3, respectivamente.

| Ident | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
| 1   | 123323322/0001-10 | Lanchonete do José |
| 2   | 131311121/2000-12 | Padaria do Almeida |
| 3   | 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |

Vamos fazer um novo processo de ETL e temos novos dados a serem lidos:

| CNPJ | NOME DO CLIENTE |
| --- | --- |
| 543444332/1222-12 | Restaurante Boa Via |
| 346544433/1222-13 | Tendinha do Zé |
| 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |

Perceba que as duas primeiras linhas são clientes novos, que não estão na dimensão. A terceira linha, porém, corresponde a um cliente já existente na dimensão, cujo identificador é 3.

Sendo assim, o processo de lookup vai gravar os dois primeiros clientes com os identificadores 4 e 5.

| Ident | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
| 1   | 123323322/0001-10 | Lanchonete do José |
| 2   | 131311121/2000-12 | Padaria do Almeida |
| 3   | 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |
| 4   | 543444332/1222-12 | Restaurante Boa Via |
| 5   | 346544433/1222-13 | Tendinha do Zé |

O terceiro cliente será desprezado porque já existe na tabela com os mesmos dados.

Vamos ler uma nova fonte de dados:

| CNPJ | NOME DO CLIENTE |
| --- | --- |
| 543444332/1222-12 | Restaurante Boa Via |
| 112343233/0222-10 | Fábrica de refrigerantes Guaraná |

Neste caso, o primeiro cliente já existe na tabela dimensão e corresponde ao identificador 4. O segundo cliente também existe, mas na fonte o nome é "Fábrica de refrigerantes Guaraná", enquanto na dimensão é "Fábrica de refrigerantes Pura-Cola". Ou seja, o atributo do nome do cliente precisará mudar.

Para isso, há duas estratégias e isso vai depender do que o usuário deseja ter no modelo de *business intelligence*.

A primeira estratégia é simplesmente buscar pelo código natural do cliente na tabela dimensão e alterar o valor do atributo.

| Ident | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
| 1   | 123323322/0001-10 | Lanchonete do José |
| 2   | 131311121/2000-12 | Padaria do Almeida |
| 3   | 112343233/0222-10 | Fábrica de refrigerantes Guaraná |
| 4   | 543444332/1222-12 | Restaurante Boa Via |
| 5   | 346544433/1222-13 | Tendinha do Zé |

Dessa forma, a empresa se chamava "Fábrica de refrigerantes Pura-Cola" e mudou o nome para "Fábrica de refrigerantes Guaraná".

A segunda estratégia consiste em manter o nome "Fábrica de refrigerantes Pura-Cola" como identificador 3 e criar um novo cliente com identificador 6, cujo identificador natural (CNPJ) é o mesmo, mas o nome é diferente.

| Ident | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
| 1   | 123323322/0001-10 | Lanchonete do José |
| 2   | 131311121/2000-12 | Padaria do Almeida |
| 3   | 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |
| 4   | 543444332/1222-12 | Restaurante Boa Via |
| 5   | 346544433/1222-13 | Tendinha do Zé |
| 6   | 112343233/0222-10 | Fábrica de refrigerantes Guaraná |

Não há problema de quebra de integridade porque o identificador do campo não é o CNJP, mas sim o identificador primário e esses são diferentes.

Esse é um caso hipotético, já que dificilmente ocorre mudança no nome de um cliente. Mas poderíamos ter mudanças em outros atributos, como cidade ou endereço.

Sendo assim, podemos ter um mesmo cliente mudando somente seu atributo, ou criamos um novo cliente com atributos diferentes. Quem decidirá essa questão é o usuário, no momento de fazer a política de carga do *data warehouse*.

&nbsp;

# <span style="color: #ffffff;">Dimensão produto</span>

<span style="color: #c0c0c0;">Vamos continuar criando nosso Data Warehouse. Agora, chegamos à</span> **dimensão Produto.**

<span style="color: #c0c0c0;">Especificamos que, na dimensão Produto, não utilizaremos o Esquema Estrela, mas o modelo</span> **Floco de Neve**<span style="color: #c0c0c0;">. Ou seja, cada nível da dimensão terá uma tabela separada.</span>

Antes de criar a dimensão no Power Architect, vamos consultar a seção de "Dimensões > PRODUTO" da nossa documentação do Projeto de BI. Temos a seguinte estrutura:

> **PRODUTO**
> 
> - Nível Input
>     - Produto (SKU e Nome do Produto)
> - Atributos
>     - Unidade de Medida
> - Hierarquias
>     - Fornecedor
>         - Produto
>         - Fornecedor do Produto
>     - Departamento
>         - Produto
>         - Setor

Usaremos a seguinte regra: **vamos criar a tabela do nível mais baixo da dimensão Produto contendo os identificadores primários e naturais do nível Input, o descritor do produto e também todos os atributos associados, caso essa dimensão os tenha.**

No SQL Power Architect, clicamos com o botão direito na área de tabelas e selecionamos a opção "**New Table…**" para criar uma nova tabela. Com o cursor em formato de cruz, selecionamos uma área (clicando em qualquer lugar da tela com o botão direito e arrastando) e soltamos o mouse.

Na caixa de diálogo "**Table Properties**", daremos o seguinte nome para a tabela do nível de produto:

> - **Logical Table Name:** DIMENSÃO PRODUTO - PRODUTO
> - **Physical Table Name:** dim_produto

Depois, colocaremos o seguinte identificador primário:

> **Primary Key Name:** dim_produto_pk

No campo "Table Color", vamos selecionar a cor **azul** para a tabela. Por fim, podemos clicar em "OK" para concluir e fechar essa caixa de diálogo.

Com essa nova tabela criada, vamos posicioná-la abaixo das tabelas "DIMENSÃO EMPRESA" e "DIMENSÃO CLIENTE".

Em seguida, clicamos nela e pressionamos "C" para abrir a caixa de diálogo "Column Properties of New Column" e criar um novo campo.

Vamos criar o **identificador primário**. Então, colocamos os seguintes nomes nos seguintes campos:

> - **Logical Name:** IDENTIFICADOR PRIMÁRIO DE PRODUTO
> - **Physical Name:** id_produto

Conforme aprendemos anteriormente, o identificador primário será do tipo inteiro. Então, no campo "Type", selecionamos a opção `INTEGER`. Por fim, marcamos a *checkbox* de "**In Primary Key**", pois será uma chave primária. Clicamos em "OK".

Agora, repetiremos o procedimento para criar o **identificador natural**. Seu nome será:

> - **Logical Name:** IDENTIFICADOR NATURAL DE PRODUTO
> - **Physical Name:** cod_produto

Seu tipo será `VARCHAR`, padrão, então não precisamos alterar o campo "Type". Esse `VARCHAR` terá um tamanho de 25 caracteres. Para isso, marcamos o campo "**Precision**" e preenchemos com o número "25". Clicamos em "OK".

Repetiremos o processo para o descritor, um `VARCHAR` de 200:

> - **Logical Name:** DESCRITOR DE PRODUTO
> - **Physical Name:** desc_produto
> - **Type:** VARCHAR
> - **Precision:** 200

Clicamos em "OK" novamente.

Agora vamos acrescentar o atributo "Unidade de Medida":

> - **Logical Name:** ATRIBUTO UNIDADE DE MEDIDA
> - **Physical Name:** atr_unidade_medida
> - **Type:** VARCHAR
> - **Precision:** 50

Clicamos mais uma vez em "OK"

Teoricamente, nós pararíamos por aqui. Mas, lembre-se: no modelo Floco de Neve, **cada tabela representa um nível**. Logo, mais adiante, teremos que criar uma tabela que represente "**Fornecedor**" e "**Departamento**". **<- Principal diferença do Floco de Neve para o** Estrela, no floco de neve, na mesma tabela ficam apenas os IDs, descritores e atributos, hierarquias passam pra outra tabela, isso que faz aquele desenho de Floco de Neve.

Precisamos de um campo que **ligue** essas duas tabelas à tabela mais baixa que acabamos de criar. Por isso, devemos criar os identificadores dos outros níveis nessa tabela de Produto.

Nesse sentido, você pode se perguntar:

— *Terei que fazer novos `JOINS` entre tabelas? Afinal, o modelo Floco de Neve possui tabelas normalizadas da dimensão.*

Este `JOIN` não precisa ser tão performático, porque não envolverá muitas linhas. O `JOIN` que envolve muitas linhas é entre o nível mais baixo da dimensão e a tabela de fato.

Por isso, aqui não precisamos criar um identificador primário para os níveis acima do nível da tabela de produto.

Sendo assim, vamos criar na tabela de produto o campo de identificador natural de **Fornecedor**:

> - **Logical Name:** IDENTIFICADOR NATURAL DE FORNECEDOR
> - **Physical Name:** cod_fornecedor
> - **Type:** VARCHAR
> - **Precision:** 25

Também criaremos o identificador natural do **Setor**, o nível mais alto dentro da hierarquia "Departamento":

> - **Logical Name:** IDENTIFICADOR NATURAL DE SETOR
> - **Physical Name:** cod_setor
> - **Type:** VARCHAR
> - **Precision:** 25

Pronto! Essa é a nossa **dimensão Produto, ao nível de produto**:

| DIMENSÃO PRODUTO - PRODUTO |
| --- |
| IDENTIFICADOR PRIMÁRIO DE PRODUTO: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DO PRODUTO: VARCHAR(25) NOT NULL |
| DESCRITOR DE PRODUTO: VARCHAR(200) NOT NULL |
| ATRIBUTO UNIDADE DE MEDIDA: VARCHAR(50) NOT NULL |
| IDENTIFICADOR NATURAL DE FORNECEDOR: VARCHAR(25) NOT NULL |
| IDENTIFICADOR NATURAL DE SETOR: VARCHAR(25) NOT NULL |

Agora, criaremos as outras tabelas para completar a dimensão Produto.

&nbsp;

# <span style="color: #ffffff;">Dimensão produto - Output</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Agora, vamos criar os</span> **níveis outputs da dimensão Produto** <span style="color: #c0c0c0;">no SQL Power Architect.</span></span>

Na área onde estão nossas tabelas, vamos criar uma nova selecionando uma porção da tela e clicando em "New Table...". Essa tabela será ao nível de Fornecedor, então a nomearemos como:

> - **Logical Table Name:** DIMENSÃO PRODUTO - FORNECEDOR
> - **Physical Table Name:** dim_fornecedor

Sua chave primária terá o seguinte nome:

> - **Primary Key Name:** dim_fornecedor_pk

Sua cor também será azul. Clicamos em "OK". Podemos posicioná-la ao lado da primeira tabela, no topo da página.

Com a nova tabela selecionada, pressionamos "C" para criar um novo campo de identificador natural de Fornecedor:

> - **Logical Name:** IDENTIFICADOR NATURAL DE FORNECEDOR
> - **Physical Name:** cod_fornecedor
> - **Type:** VARCHAR
> - **Precision:** 25

Esse campo será chave primária dessa tabela, então marcamos a caixa "**In Primary Key**", porque a tabela de fornecedores não poderá ter fornecedores repetidos.

Por isso que a tabela do modelo Floco de Neve é **normalizada**. **Se estivéssemos representando os fornecedores com o modelo Estrela, esse nível output estaria na tabela de dimensão de produto**, e poderíamos ter códigos e nomes de fornecedores repetidos; afinal, um fornecedor pode fornecer mais de um produto.

Por fim, clicamos em "OK".

Vamos repetir o procedimento para criar uma nova coluna para o descritor de fornecedor:

> - **Logical Name:** DESCRITOR DE FORNECEDOR
> - **Physical Name:** desc_fornecedor
> - **Type:** VARCHAR
> - **Precision:** 200

Clicamos em "OK". E pronto, temos nossa dimensão produto a nivel de fornecedor.

## Nível de Departamento

Vamos criar uma nova tabela com o seguinte nome e chave primária:

> - **Logical Table Name:** DIMENSÃO PRODUTO - DEPARTAMENTO
> - **Physical Table Name:** dim_departamento
> - **Primary Key:** dim_departamento_pk

Sua cor será azul também. Clicamos em "OK".

Seguindo o mesmo procedimento de criação de colunas, vamos criar o campo de identificador natural de setor:

> - **Logical Name:** IDENTIFICADOR NATURAL DE SETOR
> - **Physical Name:** cod_setor
> - **Type:** VARCHAR
> - **Precision:** 25

Esse campo será chave primária, então marcamos a caixa "**In Primary Key**". Clicamos em "OK".

Por fim, criamos o campo de descritor de setor:

> - **Logical Name:** DESCRITOR DE SETOR
> - **Physical Name:** desc_setor
> - **Type:** VARCHAR
> - **Precision:** 200

Pronto! Temos as duas tabelas que representam os níveis outputs de ambas as hierarquias definidas na dimensão Produto, afinal, estamos utilizando o modelo Floco de Neve para essa dimensão.

&nbsp;

# <span style="color: #ffffff;">Dimensão tickets (dimensão degenerada)</span>

Antes de retornar ao Power Architect para criar a **dimensão Tickets**, vamos fazer uma análise mais detalhada sobre ela.

No seguinte exemplo, temos uma tabela de fato com milhares de linhas:

| NF  | PRODUTO | DATA | VENDA |
| --- | --- | --- | --- |
| 000001 | 300 | 15/02/2023 | 10  |
| 000001 | 302 | 15/02/2023 | 12  |
| 000002 | 300 | 15/02/2023 | 15  |
| 000002 | 304 | 15/02/2023 | 12  |
| 000002 | 306 | 15/02/2023 | 19  |
| 000003 | 300 | (...) | (...) |
| (Milhares de linhas...) | (...) | (...) | (...) |
| 021002 | 302 | 16/02/2023 | 13  |
| 021002 | 304 | 16/02/2023 | 14  |
| 021003 | 306 | 16/02/2023 | 12  |
| 021004 | 300 | 16/02/2023 | 13  |
| 021005 | 306 | 16/02/2023 | 10  |

Note que os produtos 300, 302, 304 e 306 aparecem nas vendas logo no início da tabela. Mas, se analisarmos a tabela até o final, observaremos que esses produtos também ocorrem em outras datas.

Ou seja, a distribuição dos produtos dentro da tabela de Fato tem uma certa homogeneidade. Eles aparecem no início, no meio e no fim dessa tabela.

Analisando o Ticket, no campo "NF". O de número "000001", código identificador da nota fiscal, aparece nas duas primeiras linhas da tabela.

Mas, note que, depois dessas ocorrências no início da tabela, esse mesmo código não volta a aparecer.

Para entender isso, precisamos relembrar a definição do **grão** do modelo de vendas: a própria nota fiscal.

Sabemos que, em cada venda efetuada pelo AtacaDez, gera-se uma única nota fiscal com um **único número de Ticket**. Esse número aparecerá na tabela de fato apenas quando registrarmos as vendas desta nota fiscal.

Logo, a distribuição dos membros da dimensão Ticket nas linhas da tabela de fato será muito baixa. Os membros dessa dimensão aparecerão somente em algumas linhas dessa tabela e, depois, nunca mais surgirão.

Quando temos uma dimensão com tal característica, não precisamos criar uma tabela com todos os cadastros de notas fiscais, como a do exemplo.

Essa informação passa a ser um **atributo da tabela de fato.** Isso se for realmente pertinente manter essa informação na tabela!

Essa dimensão que não é distribuída igualmente dentro da tabela de fato tem um nome: dimensão degenerada.

> Uma **dimensão generada** é composta por um único atributo, geralmente um valor numérico ou alfanumérico, que não possui informações adicionais associadas a ele.

A dimensão degenerada difere das dimensões tradicionais que possuem atributos descritivos e significativos além de seu próprio número, como a dimensão Produto que possui os atributos "Nome do Produto", "Tamanho do Produto", etc.

A dimensão Ticket representa o próprio grão. Logo, uma dimensão degenerada é uma **chave ou identificador diretamente armazenado na tabela de fato**. Por isso, não é necessário criar uma tabela de dimensão para essa dimensão.

São alguns **exemplos** de dimensões degeneradas:

- **Número de faturas, pedidos ou transações**;
- **Códigos ou identificadores** usados para representar uma entidade;
- **Chaves compostas**, combinadas de dois ou mais valores (como o número da fatura combinado com uma data, usado para identificar a ocorrência daquela fatura).

Esses números não possuem atributos adicionais associados a eles, mas são usados para descrever e identificar, exclusivamente, cada um dos fatos.

Conclusão: não criaremos uma tabela de dimensão para a dimensão Ticket, pois se trata de uma dimensão degenerada do nosso modelo.

> <span style="color: #767e85;">Uma dimensão degenerada é um atributo ou campo que não tem uma entidade ou tabela dedicada associada a ele. Ele fornece informações relevantes para análise, mas não se enquadra em uma dimensão tradicional.</span>

&nbsp;

&nbsp;

# <span style="color: #767e85;"><span style="color: #ffffff;">Dimensão tempo</span></span>

Vamos agora trabalhar com a **dimensão Tempo**. Mas, antes de iniciar a criação dessa dimensão no SQL Power Architect, vamos repassar algumas de suas características.

Como sabemos, esta é uma dimensão obrigatória de todo o modelo de Business Intelligence, pois uma de suas características fundamentais é analisar informações gerenciais para tomada de decisões **ao longo do tempo**. Afinal, precisamos conhecer o passado para entender o futuro!

A dimensão Tempo possui **regras de negócio universais**. A forma de medir o tempo, pelo menos dentro do cenário corporativo de uma empresa, será igual para todo o mundo.

Então, no Data Warehouse, basta gravar o **menor valor de tempo** associado ao modelo. No nosso caso, no nosso modelo de vendas, esse menor valor de tempo é o **dia**.

A forma com que a pessoa usuária agregará essas datas dependerá de que tipo de análise ela deseja fazer.

Há inúmeras formas de realizar esse tipo de agregação. Por isso, normalmente, as **agregações do tempo** são definidas no Data Mart e, muitas vezes, dentro do próprio Dashboard. Agregar um valor no tempo não vai ferir a regra de negócio da empresa.

No Data Warehouse, podemos registrar algumas agregações. As que incluiremos no Data Warehouse são as que estão contidas na documentação do modelo:

> **TEMPO**
> 
> - Nível Input
>     - Data (Dia, mês, ano) - AAAAMMDD
> - Atributos
>     - Dia da Semana
>     - Fim de Semana
> - Hierarquias
>     - Calendário
>         - Dia
>         - Mês
>         - Trimestre
>         - Semestre
>         - Ano

Vamos começar criando a tabela, selecionando uma área da tela do SQL Power Architect e clicando em "New Table...". Ela terá o seguinte nome e chave primária:

> - **Logical Table Name:** DIMENSÃO TEMPO
> - **Physical Table Name:** dim_tempo
> - **Primary Key Name:** dim_tempo_pk

Sua cor também será azul. Clicamos em "OK". Em seguida, posicionamos essa tabela ao lado da primeira, na parte superior, na metade direita da tela.

Vamos começar com o registro do nível Input. O nível Input (o dia) será representado pelo seu identificador primário, que será um inteiro; o seu identificador natural, que será representado pelo ano com quatro dígitos, o mês com dois dígitos e o dia também com dois dígitos.

No entanto, diferente das outras dimensões, um descritor do dia não tem muito sentido. O que faremos, então, é criar um campo com o **tipo data** para associar a esse membro da dimensão.

Primeiramente, adicionaremos o **identificador primário**. Para isso, selecionamos a tabela e pressionamos "C". Esse campo terá as seguintes características:

> - **Logical Name:** IDENTIFICADOR PRIMÁRIO DO DIA
> - **Physical Name:** id_dia
> - **In Primary Key**
> - **Type:** INTEGER

Depois partimos para o **identificador natural** do dia:

> - **Logical Name:** IDENTIFICADOR NATURAL DO DIA
> - **Physical Name:** cod_dia
> - **Type:** VARCHAR
> - **Precision:** 25

Por fim, criaremos o "descritor" do dia, mas que se chamará "**Data do dia**" e será do tipo "Date":

> - **Logical Name:** DATA DO DIA
> - **Physical Name:** data
> - **Type:** DATE

Agora, vamos adicionar os atributos. O atributo "**dia da semana**" é o nome do dia, como segunda-feira, sábado, etc. Então:

> - **Logical Name:** ATRIBUTO DO DIA DA SEMANA
> - **Physical Name:** atr_dia_semana
> - **Type:** VARCHAR
> - **Precision:** 50

O próximo atributo é "**fim de semana**", que pode ser verdadeiro se for sábado ou domingo, ou falso se for qualquer outro dia da semana. Ou seja, é um atributo do tipo booleano. Então:

> - **Logical Name:** ATRIBUTO DE FIM DE SEMANA
> - **Physical Name:** atr_fim_de_semana
> - **Type:** BOOLEAN

Por fim, partiremos para as hierarquias. Todos os níveis altos terão seu identificador natural e o seu descritor. Então, criaremos esses dois campos para o mês, primeiramente:

> - **Logical Name:** IDENTIFICADOR NATURAL DO MÊS
> - **Physical Name:** cod_mes
> - **Type:** VARCHAR
> - **Precision:** 25

O identificador natural do mês será um código que representará o mês e o ano. Sempre usaremos o ano com quatro dígitos e o mês com dois. Por exemplo: o `cod_mes` de valor "202301" representa janeiro de 2023.

> - **Logical Name:** DESCRITOR DO MÊS
> - **Physical Name:** desc_mes
> - **Type:** VARCHAR
> - **Precision:** 200

Passando para o trimestre, teremos:

> - **Logical Name:** IDENTIFICADOR NATURAL DO TRIMESTRE
> - **Physical Name:** cod_trimestre
> - **Type:** VARCHAR
> - **Precision:** 25

Normalmente, representamos o trimestre com a letra "Q" de *quarter* (trimestre) e um número de um a quatro (primeiro, segundo, terceiro ou quarto trimestre do ano).

> - **Logical Name:** DESCRITOR DO TRIMESTRE
> - **Physical Name:** desc_trimestre
> - **Type:** VARCHAR
> - **Precision:** 200

O identificador natural do semestre será o ano concatenado com o "S" de semestre e depois com o número 1 ou 2 (primeiro ou segundo semestre do ano):

> - **Logical Name:** IDENTIFICADOR NATURAL DO SEMESTRE
> - **Physical Name:** cod_semestre
> - **Type:** VARCHAR
> - **Precision:** 25

O descritor do semestre ficará assim:

> - **Logical Name:** DESCRITOR DO SEMESTRE
> - **Physical Name:** desc_semestre
> - **Type:** VARCHAR
> - **Precision:** 200

Por fim, o ano. Nesse caso, não faz sentido ter um texto todo ano. Afinal, a representação do ano será sempre com quatro dígitos. Então, vamos criar apenas seu identificador natural:

> - **Logical Name:** IDENTIFICADOR NATURAL DO ANO
> - **Physical Name:** cod_ano
> - **Type:** VARCHAR
> - **Precision:** 25

Não representaremos um descritor para o ano.

Por fim, teremos a seguinte tabela para a **dimensão Tempo**:

| DIMENSÃO TEMPO |
| --- |
| IDENTIFICADOR PRIMÁRIO DO DIA: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR NATURAL DO DIA: VARCHAR(25) NOT NULL |
| DATA DO DIA: DATE NOT NULL |
| ATRIBUTO DO DIA DA SEMANA: VARCHAR(50) NOT NULL |
| ATRIBUTO DE FIM DE SEMANA: BOOLEAN NOT NULL |
| IDENTIFICADOR NATURAL DO MES: VARCHAR(25) NOT NULL |
| DESCRITOR DO MES: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DO TRIMESTRE: VARCHAR(25) NOT NULL |
| DESCRITOR DO TRIMESTRE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DO SEMESTRE: VARCHAR(25) NOT NULL |
| DESCRITOR DO SEMESTRE: VARCHAR(200) NOT NULL |
| IDENTIFICADOR NATURAL DO ANO: VARCHAR(25) NOT NULL |

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Criação da tabela de fato</span>

Neste momento, todas as dimensões estão representadas no SQL Power Architect. Chegou a hora de trabalharmos com a **criação da tabela de fato**.

A tabela de fato é formada por uma chave primária composta com todos os identificadores primários das dimensões e a lista de indicadores que serão representados no modelo.

No caso das dimensões, temos 4 identificadores primários, o identificador primário da dimensão cliente, produto, empresa e tempo.

## Quais são os indicadores que vamos representar na tabela de fato?

Note que, no Notion do projeto, temos uma lista de indicadores, inputs e calculados.

Num primeiro momento, podemos definir que apenas os indicadores inputs estarão na tabela de fato. Mas tem um detalhe importante, note que entre os indicadores inputs temos o preço unitário de compra.

Vimos anteriormente que indicadores que representam preços ou frações não podem ser consolidados de forma natural dentro da dimensão. Eles devem ser calculados nível a nível.

Mas se nós, baseados na quantidade, já calcularmos a nível input o custo de venda (preço unitário de compra multiplicado pela quantidade vendida), podemos colocar esse indicador Custo de Venda a nível input, consolidá-lo e depois através de cálculo podemos obter todos os outros indicadores calculados em todos o níveis, sejam eles fração ou não.

Logo, os indicadores que estarão na tabela de fato são:

- Quantidade Vendida
- Valor de Venda
- Custo de Venda (Preço Unitário de Compra (Input)\* Quantidade Vendida)

Vamos lá, vamos criar a tabela. Clicaremos no botão direito do mouse e selecionaremos "New Table"(Nova Tabela). Preencheremos com a janela de criação com os seguintes dados:

Logical Table Name: FATO VENDA

Physical Table Name: fact_venda

Primary Key Name: fact_venda_pk

Vamos também selecionar uma cor diferente da cor azul que usamos para representar as dimensões. Em seguida, clicaremos em "OK".

Vamos inserir o identificar primário da loja. Podemos clicar na tabela que criamos e preencher os campos da seguinte forma. Logical Name será "IDENTIFICADOR PRIMÁRIO DA LOJA"; Physical Name será "id_loja"; vamos selecionar a caixa de seleção "In Primary Key"; no campo de tipo selecionaremos a opção "Integer". Podemos clicar em "OK".

Vamos adicionar o segundo identificador.

Logical Name será "IDENTIFICADOR PRIMÁRIO DE CLIENTE"; Physical Name será "id_cliente"; vamos selecionar a caixa de seleção "In Primary Key"; no campo de tipo selecionaremos a opção "Integer". Podemos clicar em "OK".

O próximo a ser adicionado é o identificador de produto.

Logical Name será "IDENTIFICADOR PRIMÁRIO DE PRODUTO"; Physical Name será "id_produto"; vamos selecionar a caixa de seleção "In Primary Key"; no campo de tipo selecionaremos a opção "Integer". Podemos clicar em "OK".

E o último a ser adicionado será o identificador primário do dia.

Logical Name será "IDENTIFICADOR PRIMÁRIO DO DIA"; Physical Name será "id_dia"; selecionaremos a caixa de seleção "In Primary Key"; no campo de tipo selecionaremos a opção "Integer". Podemos clicar em "OK".

Temos assim a chave primária composta, formada pelos quatro identificadores primários. Agora, vamos inserir os três indicadores.

Primeiro, o de quantidade vendida. O logical name será "QUANTIDADE VENDIDA"; Physical Name será "quantidade_vendida"; no campo de tipo selecionaremos a opção "double". Podemos clicar em "OK".

Agora, o valor da venda. O logical name será "VALOR DA VENDA"; Physical Name será "valor_venda"; no campo de tipo selecionaremos a opção "double". Podemos clicar em "OK".

E, por fim, o indicador de custo de venda.

O logical name será "CUSTO DE VENDA"; Physical Name será "custo_venda"; no campo de tipo selecionaremos a opção "double". Podemos clicar em "OK".

Temos aqui a nossa tabela de fato pronta no SQL Power Architect.

| FATO VENDA |
| --- |
| IDENTIFICADOR PRIMARIO DA LOJA: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR PRIMÁRIO DE PRODUTO: INTEGER NOT NULL \[PK\] |
| IDENTIFICADOR PRIMÁRIO DO DIA: INTEGER NOT NULL \[PK\] |
| QUANTIDADE VENDIDA: DOUBLE NOT NULL |
| VALOR DA VENDA: DOUBLE NOT NULL |
| CUSTO DE VENDA: DOUBLE NOT NULL |

Podemos salvar o projeto.

&nbsp;

&nbsp;

# Considerações gerais sobre Data Warehouses

O Data Warehouse é uma base de dados gerencial que reúne informações de toda a empresa, permitindo análises e tomadas de decisão baseadas em indicadores gerenciais.

As tabelas de fato representam dados específicos de um departamento ou área da empresa, geralmente relacionados a eventos ou transações que ocorrem ao longo do tempo. Essas tabelas contêm métricas ou medidas quantitativas, como vendas, receitas, despesas, estoques, entre outros. Cada tabela de fato geralmente contém chaves estrangeiras que se referem às dimensões relevantes para aquele dado específico.

Por outro lado, as tabelas de dimensão contêm informações descritivas e atributos que são usados para contextualizar os dados nas tabelas de fato. Elas armazenam as regras de negócio e os detalhes das entidades envolvidas nas análises, como produtos, clientes, fornecedores, regiões, entre outros. As tabelas de dimensão são compartilhadas por todas as tabelas de fato e fornecem uma visão consistente e padronizada dos dados.

Uma abordagem comum é criar uma tabela de fato segmentada dentro do data warehouse. Isso significa que a tabela de fato é projetada de forma genérica, capaz de armazenar dados de diferentes departamentos ou áreas da empresa. As dimensões são compartilhadas entre as diferentes tabelas de fato, permitindo a análise integrada e consistente dos indicadores gerenciais.

Essa segmentação oferece vantagens como a centralização e a padronização das dimensões, evitando a duplicação de informações e garantindo a consistência dos dados em todo o data warehouse.

Além disso, facilita a manutenção e a escalabilidade do sistema, uma vez que as regras de negócio nas tabelas de dimensão podem ser atualizadas de forma centralizada e refletidas em todas as tabelas de fato que as utilizam. No entanto, é importante ressaltar que a estrutura e a abordagem do data warehouse podem variar de acordo com as necessidades e características específicas de cada empresa.

Portanto, é recomendado seguir boas práticas de modelagem de dados, considerar a flexibilidade e a escalabilidade do sistema, e buscar a integração adequada entre as tabelas de fato e dimensão para obter análises eficientes e precisas.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Lookup na fato</span>

Vimos que, quando criamos a tabela de fato, a chave composta é formada pelos identificadores primários, ou seja, pelos sequenciais numéricos.

Agora, vamos aprender como aplicar **lookup** na fato.

Veja abaixo a dimensão cliente com seus lookups determinados na primeira coluna:

| Ident | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
| 1   | 123323322/0001-10 | Lanchonete do José |
| 2   | 131311121/2000-12 | Padaria do Almeida |
| 3   | 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |
| 4   | 543444332/1222-12 | Restaurante Boa Via |
| 5   | 346544433/1222-13 | Tendinha do Zé |
| 6   | 112343233/0222-10 | Fábrica de refrigerantes Guaraná |

Temos todos os identificadores numéricos, de 1 a 6. Porém, os dados referentes às fatos vão chegar da fonte identificados não pelo identificador primário mas pelo identificador natural, que é o CNPJ:

| CNPJ | DATA | VALOR |
| --- | --- | --- |
| 123323322/0001-10 | 15/03/2023 | 10  |
| 131311121/2000-12 | 15/03/2023 | 12  |
| 543444332/1222-12 | 15/03/2023 | 15  |

Estamos simplificando para a explicação, no nosso exemplo vamos supor que somente a dimensão cliente aparece na fato.

Mas, na tabela de fato criada com Data Warehouse o que identifica a dimensão não é o CNPJ e sim o seu identificador. Logo, quando vamos gravar os dados do cliente vindo da fonte na tabela de fato, precisamos verificar na tabela de dimensão qual é o seu identificador, através do código natural. E gravar na fato o identificador primário.

Por exemplo, no caso do primeiro registro, verificamos na tabela de dimensão onde o identificador natural se encontra e, em seguida, gravamos na tabela de fato o identificador primário.

| VALOR | DATA | IDEN CLI |
| --- | --- | --- |
|     |     | 1   |

Depois, gravamos as outras informações.

| VALOR | DATA | IDEN CLI |
| --- | --- | --- |
| 10  | 15/03 | 1   |

Já os outros dados, que não são dimensões, são gravados direto.

| VALOR | DATA | IDEN CLI |
| --- | --- | --- |
| 10  | 15/03 | 1   |
| 12  | 15/03 | 2   |
| 15  | 15/03 | 4   |

Vamos fazendo isso para cada linha da tabela de fato. **No final, teremos a representação dos dados na tabela de fato apenas pelos identificadores primários**.

> **Atenção**: Para que haja integridade entre os dados do Data Warehouse, nenhum dado da tabela de fato deve ser recusado por não existir o identificador primário. Senão os dados vão acabar não oferecendo valores corretos para que as pessoas usuárias possam tomar suas decisões baseadas nos indicadores gerenciais.

Claro que um bom Data Warehouse terá sempre a sua dimensão atualizada de forma correta antes de atualizar a fato. Porém, problemas acontecem. Muitas vezes, chega alguém na fato que ainda não existe na dimensão.

Então, uma coisa importante é todas as dimensões terem um elemento a mais chamado **Não definido (ND)**. Geralmente usamos o código 0 como identificador primário para esse elemento. Assim sabemos que independentemente do número de membros de uma dimensão o identificador primário que representa o Não Definido sempre será o zero.

| Ident | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
| 1   | 123323322/0001-10 | Lanchonete do José |
| 2   | 131311121/2000-12 | Padaria do Almeida |
| 3   | 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |
| 4   | 543444332/1222-12 | Restaurante Boa Via |
| 5   | 346544433/1222-13 | Tendinha do Zé |
| 6   | 112343233/0222-10 | Fábrica de refrigerantes Guaraná |
| **0** | **ND** | **Não definido** |

Então, por exemplo, pode chegar um dado da fato com um identificador natural que não existe na dimensão.

| CNPJ | DATA | VALOR |
| --- | --- | --- |
| 123323322/0001-10 | 15/03/2023 | 10  |
| 131311121/2000-12 | 15/03/2023 | 12  |
| 543444332/1222-12 | 15/03/2023 | 15  |
| **345345353/3332-66** | **15/03/2023** | **22** |

Nesse caso, na hora de tentar gravar na fato, vamos gravá-lo com o identificador zero. Para que esse dado não seja recusado e que a integridade entre a tabela de fato e a de dimensão permaneça existindo.

Esse número "22" não pode ser recusado, ele deve estar na tabela de fato, afinal esse número realmente aconteceu.

| VALOR | DATA | IDEN CLI |
| --- | --- | --- |
| 10  | 15/03 | 1   |
| 12  | 15/03 | 2   |
| **22** | **15/03** | **0** |

<span style="color: #c0c0c0;">Durante o processo de carga de dados na tabela de fato temos que aplicar o processo de Lookup para guardar na tabela não os dados identificados pelo código natural mas sim pelo código primário. Isso porque as junções entre os identificadores, que são valores inteiros, ficam mais performáticos.</span>

&nbsp;

&nbsp;

# <span style="color: #c0c0c0;"><span style="color: #ffffff;">Relacionamento entre as fatos e as dimensões</span></span>

Todas as dimensões e também a tabela de fato foram criadas no SQL Power Architect, então chegou a hora de fazer os relacionamentos entre a tabela fato e as dimensões.

Vamos reorganizar as tabelas na tela do SQL Power Architect. Deixaremos à esquerda as tabelas DIMENSÃO EMPRESA, DIMENSÃO PRODUTO - PRODUTO E DIMENSÃO PRODUTO - FORNECEDOR. No centro deixaremos as tabelas FATO VENDA e DIMENSÃO PRODUTO - DEPARTAMENTO. À direita, colocaremos as tabelas DIMENSÃO TEMPO e DIMENSÃO CLIENTE.

Agora, vamos criar o relacionamento entre as tabelas. Para fazer esse relacionamento, clicaremos no terceiro ícone, contando de baixo para cima, da barra lateral à direita.

![2b183d34beda4dc9ca2fa75801688eb7.png](../_resources/2b183d34beda4dc9ca2fa75801688eb7.png)

Em seguida, clicaremos sobre o campo IDENTIFICADOR PRIMÁRIO DA LOJA na tabela DIMENSÃO EMPRESA e clicamos também no campo IDENTIFICADOR PRIMÁRIO DA LOJA na tabela FATO VENDA. Pronto, está feita a relação.

Agora, faremos a relação entre IDENTIFICADOR PRIMÁRIO DE PRODUTO da tabela DIMENSÃO PRODUTO e o IDENTIFICADOR PRIMÁRIO DE PRODUTO na tabela FATO VENDA.

Repetiremos o mesmo procedimento para criar mais um relacionamento. Clicaremos na ferramenta de criar relacionamentos e clicaremos em IDENTIFICADOR PRIMÁRIO DE CLIENTE da tabela DIMENSÃO CLIENTE e no IDENTIFICADOR PRIMÁRIO DE CLIENTE da tabela FATO VENDA.

Criaremos mais um relacionamento entre IDENTIFICADOR PRIMÁRIO DO DIA na tabela DIMENSÃO TEMPO e o IDENTIFICADOR PRIMÁRIO DO DIA na tabela FATO VENDA.

Note que, ao fazer os relacionamentos, criamos PFK na tabela FATO VENDA nas linhas de IDENTIFICADOR PRIMÁRIO DA LOJA e IDENTIFICADOR PRIMÁRIO DO DIA. Porque a chave primária passou a ser também chave estrangeira.

| FATO VENDA |
| --- |
| IDENTIFICADOR PRIMÁRIO DA LOJA: INTEGER NOT NULL \[PFK\] |
| IDENTIFICADOR PRIMÁRIO DE CLIENTE: INTEGER NOT NULL \[PFK\] |
| IDENTIFICADOR PRIMÁRIO DE PRODUTO: INTEGER NOT NULL \[PFK\] |
| IDENTIFICADOR PRIMÁRIO DO DIA: INTEGER NOT NULL \[PFK\] |
| QUANTIDADE VENDIDA: DOUBLE NOT NULL |
| VALOR DA VENDA: DOUBLE NOT NULL |
| CUSTO DE VENDA: DOUBLE NOT NULL |

Já fizemos os relacionamentos entre a tabela de fato e as tabelas de dimensão. Podemos salvar o modelo.

## O que fazer se o campo for duplicado?

Pode ser que no seu caso não tenha acontecido igual na máquina do instrutor. Pode ser que, ao fazer o relacionamento, um campo ficou duplicado: aparecendo um campo com o sufixo FK, mas manteve-se um campo com o sufixo PK.

Não podemos ter esses dois campos duplicados. Se isso acontecer, podemos resolver esse problema da seguinte forma.

Primeiro, vamos discutir o motivo para isso ter acontecido.

Isso acontece porque deve existir alguma diferença interna na definição dos metadados, por exemplo, o nome do campo e o tipo do campo não está ok, ou a grafia do campo na tabela fato está diferente da grafia da tabela de dimensão. Se tiver uma diferença na ortografia, esses dois campos não são iguais para o SQL Power Architect. Por isso, ao fazer a identificação para o relacionamento, ele cria um campo novo. Mas isso não pode acontecer.

Para resolver, podemos clicar no campo que está com o PK e foi duplicado e podemos deletá-lo.

No novo campo que foi criado com FK, daremos um duplo clique e vamos transformá-lo em primary key selecionando a caixa de seleção de "In Primary Key". Dessa forma, ele vai ficar como PFK.

Recapitulando, devemos nos certificar de que o metadados dos campos estejam iguais para criar o relacionamento.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Relacionamento entre os níveis</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Fizemos o relacionamento entre as dimensões e a tabela fato. Agora, precisamos fazer os relacionamentos entre os níveis output da dimensão Produto, que trabalhamos no modelo flocos de neve.</span></span>

Temos que fazer o relacionamento entre as tabelas DIMENSÃO PRODUTO - PRODUTO, DIMENSÃO PRODUTO - FORNECEDOR e DIMENSÃO PRODUTO - DEPARTAMENTO.

A dimensão Produto no seu nível input e temos dois níveis output. Eles são, na verdade, paralelos, são hierarquias diferentes: fornecedor e departamento.

No menu lateral à direita, clicaremos em "New Non-Identifying Relationship" para criar um relacionamento, depois clicaremos no identificador natural de fornecedor em DIMENSÃO PRODUTO - FORNECEDOR e no identificador natural de fornecedor em DIMENSÃO PRODUTO - PRODUTO. Está feita a ligação.

Faremos a mesma coisa, agora clicando no identificador natural de setor em DIMENSÃO PRODUTO - DEPARTAMENTO e no identificador natural de setor em DIMENSÃO PRODUTO - PRODUTO.

Estão feitos os relacionamentos entre os níveis outputs.

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Ajustando o esquema</span>

<span style="color: #c0c0c0;">Agora que temos o modelo pronto no</span> *SQL Power Architect*<span style="color: #c0c0c0;">, vamos</span> **ajustar o esquema** <span style="color: #c0c0c0;">para então podermos transportá-lo para o</span> *SQL Server*<span style="color: #c0c0c0;">.</span>

![Esquema do relacionamento entre as tabelas "FATO VENDA", "DIMENSÃO EMPRESA", "DIMENSÃO TEMPO", "DIMENSÃO CLIENTE", "DIMENSÃO PRODUTO - PRODUTO", "DIMENSÃO PRODUTO - FORNECEDOR", e "DIMENSÃO PRODUTO - SETOR". A tabela central FATO VENDA está conectada às tabelas DIMENSÃO EMPRESA, DIMENSÃO TEMPO, DIMENSÃO PRODUTO - PRODUTO e DIMENSÃO CLIENTE, enquanto DIMENSÃO PRODUTO - PRODUTO está conectada às tabelas DIMENSÃO PRODUTO - FORNECEDOR e DIMENSÃO PRODUTO - SETOR.](../_resources/5c33e2a7-8f4c-44ad-bca3-08c3eeb3.png)

Existe a possibilidade de fazermos uma conexão automática entre o SQL Power Architect e o SQL Server através da opção "*Connections > Add Source Connection > **New Connection…***", onde podemos selecionar *drivers* de JDBC existentes.

Esses drivers, disponíveis nativamente no Power Architect, são muito antigos. Podemos inclusive fazer uma atualização dos drivers JDBC, mas não conseguimos fazer a conexão entre o SQL Power Architect e o SQL Server de maneira automática.

No entanto, isso não é problema, pois podemos transportar o esquema do Power Architect para o SQL Server através da **criação automática de scripts**.

## Criação do script

Para fazer isso, usamos o ícone de uma seta verde com "SQL" escrito em preto abaixo, intitulado "*Forward Engineer SQL Script*" e localizado no menu superior de ferramentas avançadas.

Ao clicar sobre ele, será aberta uma janela exibindo a sintaxe usada para gerar o SQL. No nosso caso, vamos escolher a sintaxe "*Microsoft SQL Server 2005*".

Para o campo de banco de dados (*Database*), vamos usar o `DW_ATACADEZ`. Como proprietário (*Owner*), vamos definir `dbo`. Feito isso, clicaremos no botão "OK" para gerar o script.

Podemos copiá-lo, e de volta ao SQL Server, vamos criar uma nova consulta associada ao banco de dados `DW_ATACADEZ` e colar o script.

## Erro na criação do script

> **Atenção!** Pode ser que durante a geração do script, você encontre um erro. No caso do instrutor, esse erro não aconteceu, mas iremos simulá-lo.

No SQL Power Architect, vamos salvar o projeto anterior e abrir o seguinte projeto:

![Esquema do relacionamento entre as tabelas "FATO_VENDAS", "EMPRESA", "TEMPO", "CLIENTE", "PRODUTO - NÍVEL PRODUTO", "PRODUTO - NÍVEL FORNECEDOR", e "PRODUTO - NÍVEL SETOR". A tabela central FATO_VENDAS está conectada às tabelas EMPRESA, TEMPO, PRODUTO - NÍVEL PRODUTO e CLIENTE, enquanto PRODUTO - NÍVEL PRODUTO está conectada às tabelas PRODUTO - NÍVEL FORNECEDOR e PRODUTO - NÍVEL SETOR.](../_resources/6fe7c829-1d0a-4afc-a60f-120c37a4.png)

Temos praticamente o mesmo modelo, e faremos a mesma geração do script clicando no ícone "Forward Engineer SQL Script" do menu superior de ferramentas avançadas.

Selecionaremos novamente a sintaxe "Microsoft SQL Server 2005", o banco de dados `DW_ATACADEZ`, e o proprietário `dbo`. Feito isso, podemos clicar em "OK" para gerar o script.

Nesse momento, teremos o seguinte erro:

| #   | Object | Critic Type | …   |
| --- | --- | --- | --- |
| **!** | FATO_VENDAS.IDENTIFICADOR PRIMARIO DA LOJA | Generic | …   |
| **!** | FATO_VENDAS.IDENTIFICADOR PRIMARIO DE PRODUTO | Generic | …   |
| **!** | FATO_VENDAS.IDENTIFICADOR PRIMARIO DO TEMPO | Generic | …   |

Quando fazemos os relacionamentos entre as dimensões, pode ser que haja uma duplicação dos campos, onde o campo PK foi acrescido a um novo campo com sufixo PFK.

No modelo aberto no SQL Power Architect, aconteceu esse problema três vezes, conforme indicado na tabela. No seu caso, pode ter acontecido mais ou menos. Se não aconteceu nenhuma vez, o processo seguirá como no primeiro modelo em que geramos o script sem erro.

O motivo desse erro é que quando foram duplicados os campos, foi mantida uma relação interna de estrutura de sequência do banco de dados, o que gera problema no momento da criação do script. Essa sequência não deve existir. Então, como resolver essa questão?

O primeiro passo é **identificar onde o problema aconteceu**, indicado na coluna "Object". No nosso caso, eles aconteceram nos identificadores primários da loja, de produto e do tempo.

Vamos acessar o `IDENTIFICADOR PRIMARIO DA LOJA` tanto na dimensão quanto na fato e remover o arquivo de sequência. Primeiro, vamos clicar duas vezes sobre `IDENTIFICADOR PRIMARIO DA LOJA: INTEGER NOT NULL [PK]` na tabela `EMPRESA`.

Será aberta uma janela contendo o nome do arquivo de sequência, que no caso é `dim_empresa_id_loja_seq`. Para removê-lo, vamos marcar a opção "*Yes*" no campo "*Auto Increment*", depois vamos apagar o nome da sequência, e em seguida mudar a opção para "*No*".

Feito isso, podemos clicar em "OK" para confirmar a ação.

Faremos o mesmo processo para `IDENTIFICADOR PRIMARIO DA LOJA: INTEGER NOT NULL [PFK]` na tabela `FATO_VENDAS`. O mesmo aconteceu para os identificadores de produto e de tempo, então vamos remover o nome da sequência também para `IDENTIFICADOR PRIMARIO DO TEMPO: INTEGER NOT NULL [PK]` e `IDENTIFICADOR PRIMARIO DO TEMPO: INTEGER NOT NULL [PFK]` das tabelas `TEMPO` e `FATO_VENDAS`, respectivamente.

Na sequência, para a tabela `PRODUTO - NÍVEL PRODUTO`, vamos fazer o mesmo em `IDENTIFICADOR PRIMARIO DE PRODUTO: INTEGER NOT NULL [PK]`. Repetiremos o processo para o `IDENTIFICADOR PRIMÁRIO DE PRODUTO: INTEGER NOT NULL [PFK]` da tabela `FATO_VENDAS`.

Finalizado o processo, vamos repetir a geração do script. Agora teremos acesso ao script gerado normalmente!

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Criando as tabelas do DW</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Já temos os scripts prontos para serem executados no SQL Server. Então, vamos partir para a</span> **criação das tabelas** <span style="color: #c0c0c0;">no</span> *Data Warehouse*<span style="color: #c0c0c0;">!</span></span>

No momento, no SQL Server, temos uma consulta que acessa o banco de dados `DW_ATACADEZ` e contém o script que trouxemos do SQL Power Architect. Se acessarmos a pasta "Tabelas" do banco `DW_ATACADEZ` no pesquisador de objetos, não teremos nenhuma tabela.

Em vez de rodar todo o script, vamos rodá-lo em partes para identificar se precisamos fazer algum ajuste. Primeiro, temos o seguinte trecho:

```SQL
CREATE TABLE dbo.dim_tempo (
                id_dia INT NOT NULL,
                cod_dia VARCHAR(25) NOT NULL,
                data DATETIME NOT NULL,
                atr_dia_semana VARCHAR (50) NOT NULL,
                atr_fim de semana BOOLEAN NOT NULL,
                cod mes VARCHAR(25) NOT NULL,
                desc_mes VARCHAR (200) NOT NULL,
                cod trimestre VARCHAR(25) NOT NULL,
                desc_trimestre VARCHAR(200) NOT NULL,
                cod semestre VARCHAR(25) NOT NULL,
                desc_semestre VARCHAR (200) NOT NULL,
                cod_ano VARCHAR (25) NOT NULL,
                CONSTRAINT dim tempo_pk PRIMARY KEY (id_dia)
)
```

A princípio, já identificamos um erro no campo BOOLEAN, inexistente no SQL Server. Nesse caso, precisamos substituir pelo campo `BIT`.

```SQL
atr_fim de semana BIT NOT NULL
```

Feita essa alteração, vamos selecionar todo o trecho da **dimensão tempo** e executar. Ele deverá rodar perfeitamente e exibir como retorno a mensagem "Comandos concluídos com êxito".

Agora, ao atualizar a pasta "Tabelas" no pesquisador de objetos, teremos a dimensão tempo listada como `dbo.dim_tempo`, conforme criamos no SQL Power Architect.

Na sequência, temos o **nível departamento** da dimensão produto:

```SQL
CREATE TABLE dbo.dim_departamento (
                cod_setor VARCHAR(25) NOT NULL,
                desc_setor VARCHAR(200) NOT NULL,
                CONSTRAINT dim_departamento_pk PRIMARY KEY (cod_setor)
)
```

Vamos executar esse trecho.

Em seguida, executaremos o **nível fornecedor** da dimensão produto:

```SQL
CREATE TABLE dbo.dim_departamento (
                cod_fornecedor VARCHAR(25) NOT NULL,
                desc_fornecedor VARCHAR(200) NOT NULL,
                CONSTRAINT dim_fornecedor_pk PRIMARY KEY (cod_fornecedor)
)
```

> <span style="color: #ffffff;">O SQL Power Architect, de forma inteligente, monta o script do componente superior ao inferior dentro do banco de dados.</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Na sequência, temos o trecho da</span> **dimensão produto**<span style="color: #c0c0c0;">:</span></span>

```SQL
CREATE TABLE dbo.dim_produto (
                id_produto INT NOT NULL,
                cod_produto VARCHAR(25) NOT NULL,
                desc_produto VARCHAR (200) NOT NULL,
                atr_unidade_medida VARCHAR (50) NOT NULL,
                cod_fornecedor VARCHAR(25) NOT NULL,
                cod_setor VARCHAR(25) NOT NULL,
                CONSTRAINT dim_produto_pk PRIMARY KEY (id_produto)
)
```

<span style="color: #ffffff;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Depois executaremos o trecho da</span> **dimensão cliente**<span style="color: #c0c0c0;">:</span></span></span>

```SQL
CREATE TABLE dbo.dim_cliente (
                id_cliente INT NOT NULL,
                cod_cliente VARCHAR(25) NOT NULL,
                desc_cliente VARCHAR(200) NOT NULL,
                atr_tamanho_cliente VARCHAR(50) NOT NULL,
                cod_cidade VARCHAR(25) NOT NULL,
                desc_cidade VARCHAR (200) NOT NULL,
                cod_estado VARCHAR(50) NOT NULL,
                desc_estado VARCHAR(200) NOT NULL,
                cod_regiao VARCHAR(25) NOT NULL,
                desc_regiao VARCHAR(200) NOT NULL,
                cod_segmento VARCHAR(25) NOT NULL,
                desc_segmento VARCHAR(200) NOT NULL,
                CONSTRAINT dim_cliente_pk PRIMARY KEY (id_cliente)
)
```

O próximo trecho é o da **dimensão empresa**:

```SQL
CREATE TABLE dbo.dim_empresa (
                id_loja INT NOT NULL,
                cod_loja VARCHAR(25) NOT NULL,
                desc_loja VARCHAR(200) NOT NULL,
                atr_tipo_loja VARCHAR(50) NOT NULL,
                cod_empresa VARCHAR(25) NOT NULL,
                desc_empresa VARCHAR(200) NOT NULL,
                CONSTRAINT dim_empresa_pk PRIMARY KEY (id_loja)
)
```

<span style="color: #c0c0c0;">Por fim, temos o trecho da tabela</span> `fact_venda`<span style="color: #c0c0c0;">:</span>

```SQL
CREATE TABLE dbo.fact_venda (
                id_loja INT NOT NULL,
                id_cliente INT NOT NULL,
                id_produto INT NOT NULL,
                id_dia INT NOT NULL,
                quantidade_vendida REAL NOT NULL,
                valor_venda REAL NOT NULL,
                custo_venda REAL NOT NULL,
                CONSTRAINT fact_venda_pk PRIMARY KEY (id_loja, id_cliente, id_produto, id_dia)
)
```

<span style="color: #c0c0c0;">A única modificação que podemos fazer é no campo</span> `REAL`<span style="color: #c0c0c0;">, que vamos substituir por</span> `FLOAT`<span style="color: #c0c0c0;">.</span>

```SQL
quantidade_vendida FLOAT NOT NULL,
valor_venda FLOAT NOT NULL,
custo_venda FLOAT NOT NULL,
```

Feita essa alteração, podemos executar o comando. Ao atualizar novamente a pasta "Tabelas" no pesquisador de objetos à esquerda, teremos todas as tabelas criadas no Data Warehouse.

- `dbo.dim_cliente`
- `dbo.dim_departamento`
- `dbo.dim_empresa`
- `dbo.dim_fornecedor`
- `dbo.dim_produto`
- `dbo.dim_tempo`
- `dbo.fact_venda`

Agora, sim, temos os **relacionamentos** no script. Nesses relacionamentos, vamos remover todos os trechos que contém `ON DELETE NO ACTION` e `ON UPDATE NO ACTION`.

> *Trecho a ser removido de cada relacionamento:*

```sql
ON DELETE NO ACTION
ON UPDATE NO ACTION
```

Ao final, teremos o seguinte código:

```sql
ALTER TABLE dbo.fact_venda ADD CONSTRAINT dim_tempo_fact_venda_fk
FOREIGN KEY (id_dia) 
REFERENCES dbo.dim_tempo (id_dia)

ALTER TABLE dbo.dim_produto ADD CONSTRAINT dim_departamento_dim_produto_fk
FOREIGN KEY (cod_setor)
REFERENCES dbo.dim_departamento (cod_setor)

ALTER TABLE dbo.dim_produto ADD CONSTRAINT dim_fornecedor_dim_produto_fk
FOREIGN KEY (cod_fornecedor)
REFERENCES dbo.dim_fornecedor (cod_fornecedor)

ALTER TABLE dbo.fact_venda ADD CONSTRAINT dim_produto_fact_venda_fk
FOREIGN KEY (id_produto)
REFERENCES dbo.dim_produto (id_produto)

ALTER TABLE dbo.fact_venda ADD CONSTRAINT dim_cliente_fact_venda_fk
FOREIGN KEY (id_cliente)
REFERENCES dbo.dim_cliente (id_cliente)

ALTER TABLE dbo.fact_venda ADD CONSTRAINT dim_empresa_fact_venda_fk
FOREIGN KEY (id_loja)
REFERENCES dbo.dim_empresa (id_loja)
```

Podemos selecionar todos os relacionamentos de uma só vez e executar.

## Conclusão

Agora, ao atualizar "Tabelas" novamente, teremos os dados a respeito de todas as tabelas. Na tabela `dbo.fact_venda`, por exemplo, se acessarmos a pasta "Chaves", teremos a chave primária e as chaves estrangeiras listadas:

- `fact_venda_pk`
- `dim_cliente_fact_venda_fk`
- `dim_empresa_fact_venda_fk`
- `dim_produto_fact_venda_fk`
- `dim_tempo_fact_venda_fk`

Da mesma forma, teremos as chaves primária e estrangeiras na tabela `dbo.dim_produto`, pois a dimensão produto segue o modelo flocos de neve.

- `dim_produto_pk`
- `dim_departamento_dim_produto_fk`
- `dim_fornecedor_dim_produto_fk`

Assim, temos o Data Warehouse criado no SQL Server!

&nbsp;

&nbsp;

# <span style="color: #ffffff;">Ajustando o DW</span>

<span style="color: #ffffff;"><span style="color: #c0c0c0;">Ainda precisamos fazer mais uma coisa no script de criação do</span> *Data Warehouse*<span style="color: #c0c0c0;">. Para isso, vamos relembrar o motivo desse novo ajuste no qual iremos trabalhar!</span></span>

Anteriormente, vimos as seguintes tabelas:

> *Tabela de fato:*

| VALOR | DATA | IDEN CLI |
| --- | --- | --- |
| 10  | 15/03 | 1   |
| 12  | 15/03 | 2   |
| 15  | 15/03 | 4   |
| **22** | **15/03** | 0   |

> *Tabela de dimensão:*

| Ident | CNPJ | NOME DO CLIENTE |
| --- | --- | --- |
| 1   | 123323322/0001-10 | Lanchonete do José |
| 2   | 131311121/2000-12 | Padaria do Almeida |
| 3   | 112343233/0222-10 | Fábrica de refrigerantes Pura-Cola |
| 4   | 543444332/1222-12 | Restaurante Boa Via |
| 5   | 346544433/1222-13 | Tendinha do Zé |
| 6   | 112343233/0222-10 | Fábrica de refrigerantes Guaraná |
| 0   | **ND** | **Não Definido** |

| CNPJ | DATA | VALOR |
| --- | --- | --- |
| 123323322/0001-10 | 15/03/2023 | 10  |
| 131311121/2000-12 | 15/03/2023 | 12  |
| 543444332/1222-12 | 15/03/2023 | 15  |
| **345345353/3332-66** | **15/03/2023** | **22** |

Quando visualizamos esse slide, falávamos sobre a necessidade de manter a integridade do dado no Data Warehouse. Na segunda tabela, temos a dimensão, o identificador primário e o identificador natural criados. Nesse caso, na terceira tabela, chega o cliente cujo identificador natural é "345345353/3332-66", o qual não existe na segunda tabela.

Por algum motivo, a tabela de dimensão não foi atualizada de forma correta, e chegou um dado referente à tabela de fato se referenciando a um cliente que não está na tabela.

Normalmente, esse dado seria recusado, ou seja, o número 22 da coluna "VALOR" na terceira tabela, não seria gravado na primeira tabela, que é a de fato.

**O que acontece nesse caso?** O número é recusado, e quando a pessoa for analisar o relatório no dia o seguinte, o valor estará com 22 unidades a menos do que deveria ter. Isso pode ocasionar erros no sistema de *business intelligence*.

Então, é comum criar um elemento para o qual usamos o código 0. Esse elemento estará sempre presente na dimensão, para que, quando o processo de *lookup* não achar o elemento da dimensão, ele salve na tabela de fato com o valor da coluna "IDEN CLI" em 0.

Assim, o número será gravado na tabela de fato, e o número 22 do exemplo acima estará no relatório final, ou seja, o valor total do indicador estará correto. Dessa forma, criamos a técnica do **não definido** para todos os elementos da dimensão para resolver esse problema.

## Criando o elemento não definido

O que faremos agora na criação do Data Warehouse será **criar o elemento não definido** nas tabelas. Porém, temos um pequeno problema para fazer isso: acabamos de criar os campos de identificadores primários das tabelas de dimensão como um campo do tipo `IDENTITY`, isto é, um auto incremento.

Isso significa que não conseguimos de forma explícita, ou seja, por meio de um comando direto no SQL Server, criar o elemento de ID 0. Porém, existe uma forma de fazer isso.

Vamos retornar ao SQL Server e inserir o membro não definido em todas as tabelas das dimensões.

Começaremos incluindo o elemento não definido na tabela de cliente (`dbo.dim_cliente`). Em vez de escrevermos manualmente todo o comando `INSERT`, faremos com que o *Management Studio* gere automaticamente o comando.

Para fazer isso, vamos clicar com o botão direito sobre a tabela `dbo.dim_cliente` no pesquisador de objetos e ir até "Script de Tabela como > INSERT Para > Área de Transferência".

Feito isso, vamos colar o resultado gerado na consulta do banco de dados `DW_ATACADEZ`.

```sql
INSERT INTO [dbo].[dim_cliente]
           ([cod_cliente]
           ,[desc_cliente]
           ,[atr_tamanho_cliente]
           ,[cod_cidade]
           ,[desc_cidade]
           ,[cod_estado]
           ,[desc_estado]
           ,[cod_regiao]
           ,[desc_regiao]
           ,[cod_segmento]
           ,[desc_segmento])
     VALUES
           (<cod_cliente, varchar(25),>
           ,<desc_cliente, varchar(200),>
           ,<atr_tamanho_cliente, varchar(50),>
           ,<cod_cidade, varchar(25),>
           ,<desc_cidade, varchar(200),>
           ,<cod_estado, varchar(50),>
           ,<desc_estado, varchar(200),>
           ,<cod_regiao, varchar(25),>
           ,<desc_regiao, varchar(200),>
           ,<cod_segmento, varchar(25),>
           ,<desc_segmento, varchar(200),>)
GO
```

Note que, ao pedir para o SQL Server gerar o comando `INSERT` automaticamente, o campo `[id_cliente]` não aparece na lista, porque o SQL Server sabe que o `id_cliente` é um campo do tipo auto incremento e não pode estar dentro de um comando `INSERT`.

Porém, vamos colocá-lo! Para isso, basta inserir `[id_cliente]` após a abertura de parênteses.

```sql
INSERT INTO [dbo].[dim_cliente]
           ([id_cliente]

/* código omitido */
```

Abaixo, em `VALUES`, vamos colocar o valor `0` após a abertura de parênteses.

Continuaremos inserindo os outros elementos dessa linha não definida. Para isso, todos os elementos da tabela estarão com a sintaxe `ND`.

```sql
/* código omitido */

VALUES
     (0
     ,'ND'
     ,'ND'
     ,'ND'
     ,'ND'
     ,'ND'
     ,'ND'
     ,'ND'
     ,'ND'
     ,'ND'
     ,'ND'
     ,'ND')
```

No entanto, não podemos rodar o comando da forma como está, porque o `id_cliente` não pode ser inserido na tabela de forma explícita, diretamente pela linha de comando. Se rodarmos, teremos o seguinte erro: "Não é possível inserir um valor explícito para a coluna de identidade na tabela `dim_cliente`".

Para fazer isso, antes do comando `INSERT` adicionado anteriormente, vamos executar o comando `SET IDENTITY_INSERT` seguido do nome da tabela `dim_cliente` e do comando `ON`. Por fim, na linha abaixo, colocaremos o comando `GO`.

```sql
SET IDENTITY_INSERT dim_cliente ON
GO
```

> O comando `GO` substitui o `;` quando estamos executando um comando específico do SQL Server que não é padrão.

Em seguida, abaixo do comando `INSERT`, adicionaremos as mesmas linhas de comando, porém com o comando `OFF` após o nome da tabela `dim_cliente`.

```sql
SET IDENTITY_INSERT dim_cliente OFF
GO
```

<span style="color: #c0c0c0;">Vamos executar os três comandos em conjunto.</span>

```sql
SET IDENTITY_INSERT dim_cliente ON
GO

INSERT INTO [dbo].[dim_cliente]
           ([id_cliente]
           ,[cod_cliente]
           ,[desc_cliente]
           ,[atr_tamanho_cliente]
           ,[cod_cidade]
           ,[desc_cidade]
           ,[cod_estado]
           ,[desc_estado]
           ,[cod_regiao]
           ,[desc_regiao]
           ,[cod_segmento]
           ,[desc_segmento])
     VALUES
           (0
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND')
GO

SET IDENTITY_INSERT dim_cliente OFF
GO
```

<span style="color: #c0c0c0;">Agora o SQL Server conseguiu inserir a alteração. Se usarmos o comando</span> `SELECT * FROM` <span style="color: #c0c0c0;">para a tabela</span> `dim_cliente`<span style="color: #c0c0c0;">, teremos como resultado a linha não definida dentro da tabela de cliente.</span>

```sql
SELECT * FROM dim_cliente
```

| #   | id_cliente | cod_cliente | desc_cliente | atr_tamanho_cliente | cod_cidade | desc_cidade | cod_estado | desc_estado | cod_regiao | desc_regiao | cod_segmento | desc_segmento |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | ND  | ND  | ND  | ND  | ND  | ND  | ND  | ND  | ND  | ND  | ND  |

## Ajustando as tabelas do nível *output*

Agora precisamos repetir isso para todas as tabelas. No caso de `dbo.dim_departamento` e `dbo.dim_fornecedor`, temos tabelas *output* da dimensão. Elas devem ter seus campos não definidos, porém, não têm o campo identificador primário.

Com o botão direito do mouse, vamos clicar sobre `dbo.dim_departamento` e ir até "Script de Tabela como > INSERT Para > Área de Transferência". Teclando "Ctrl + V", teremos o seguinte comando:

```sql
USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_departamento]
           ([cod_setor]
           ,[desc_setor]
     VALUES
           (<cod_setor, varchar(25),>
           ,<desc_setor, varchar(200),>)
GO
```

<span style="color: #c0c0c0;">Nesse caso, substituiremos apenas para</span> `'ND'` <span style="color: #c0c0c0;">em</span> `VALUES`<span style="color: #c0c0c0;">.</span>

```sql
/* código omitido */

VALUES
     ('ND'
     ,'ND')
```

<span style="color: #c0c0c0;">Agora vamos repetir o processo para a tabela</span> `dbo.dim_fornecedor`<span style="color: #c0c0c0;">, o outro nível output da dimensão Produto. Teremos o seguinte código:</span>

```sql
USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_fornecedor]
           ([cod_fornecedor]
           ,[desc_fornecedor])
     VALUES
           (<cod_fornecedor, varchar(25),>
           ,<desc_fornecedor, varchar(200),>)
GO
```

<span style="color: #c0c0c0;">Faremos a mesma substituição para a sintaxe</span> `ND` <span style="color: #c0c0c0;">em</span> `VALUES`<span style="color: #c0c0c0;">:</span>

```sql
/* código omitido */

VALUES
     ('ND'
     ,'ND')
```

<span style="color: #c0c0c0;">Feito isso, vamos rodar os seguintes comandos:</span>

```sql
USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_departamento]
           ([cod_setor]
           ,[desc_setor]
     VALUES
           ('ND'
           ,'ND')
GO

USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_fornecedor]
           ([cod_fornecedor]
           ,[desc_fornecedor])
     VALUES
           ('ND'
           ,'ND')
GO
```

## Ajustando as tabelas do nível *input*

Agora vamos para o nível input da dimensão, ou seja, a tabela `dbo.dim_produto`. Faremos o mesmo caminho "Script de Tabela como > INSERT Para > Área de Transferência".

Será gerado o seguinte comando:

```sql
USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_produto]
           ([cod_produto]
           ,[desc_produto]
           ,[atr_unidade_medida]
           ,[cod_fornecedor]
           ,[cod_setor])
     VALUES
           (<cod_produto, varchar(25),>
           ,<desc_produto, varchar(200),>
           ,<atr_unidade_medida, varchar(50),>
           ,<cod_fornecedor, varchar(25),>
           ,<cod_setor, varchar(25),>)
GO
```

Para ele, precisaremos adicionar o comando `SET IDENTITY_INSERT` acima e abaixo, com os comandos `ON` e `OFF` respectivamente.

```sql
SET IDENTITY_INSERT dim_produto ON
GO
```

```sql
SET IDENTITY_INSERT dim_produto OFF
GO
```

Além disso, vamos inserir `id_produto` ao comando `INSERT INTO`, bem como o valor `0` e os campos não definidos (`ND`) para todos os elementos da dimensão a `VALUES`.

```sql
SET IDENTITY_INSERT dim_produto ON
GO

USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_produto]
           ([id_produto]
           ,[cod_produto]
           ,[desc_produto]
           ,[atr_unidade_medida]
           ,[cod_fornecedor]
           ,[cod_setor])
     VALUES
           (0
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND')
GO

SET IDENTITY_INSERT dim_produto OFF
GO
```

Para finalizar, vamos executar os comandos acima.

### Ajustando a tabela `dbo.dim_empresa`

Faltam apenas duas dimensões. A próxima é a dimensão de empresa (tabela `dbo.dim_empresa`). Ao gerar o script do comando `INSERT`, teremos o seguinte código:

```sql
USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_empresa]
           ([cod_loja]
           ,[desc_loja]
           ,[atr_tipo_loja]
           ,[[cod_empresa]
           ,[desc_empresa])
     VALUES
           (<cod_loja, varchar(25),>
           ,<desc_loja, varchar(200),>
           ,<atr_tipo_loja, varchar(50),>
           ,<cod_empresa, varchar(25),>
           ,<desc_empresa, varchar(200),>)
GO
```

Da mesma forma, adicionaremos os comandos `SET IDENTITY_INSERT`.

```sql
SET IDENTITY_INSERT dim_empresa ON
GO
```

```sql
SET IDENTITY_INSERT dim_empresa OFF
GO
```

Além disso, vamos inserir `id_loja` no comando `INSERT INTO`, passar o valor `0` para `VALUES` e a sintaxe `ND` de não definido para todos os campos.

```sql
SET IDENTITY_INSERT dim_empresa ON
GO

USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_empresa]
           ([id_loja]
           ,[cod_loja]
           ,[desc_loja]
           ,[atr_tipo_loja]
           ,[[cod_empresa]
           ,[desc_empresa])
     VALUES
           (0
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND')
GO

SET IDENTITY_INSERT dim_empresa OFF
GO
```

Feito isso, podemos rodar os blocos de comando acima.

### Ajustando a tabela `dbo.dim_tempo`

Após o mesmo procedimento, teremos o seguinte código:

```sql
USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_tempo]
           ([cod_dia]
           ,[data]
           ,[atr_dia_semana]
           ,[atr_fim_de_semana]
           ,[cod_mes]
           ,[desc_mes]
           ,[cod_trimestre]
           ,[desc_trimestre]
           ,[cod_semestre]
           ,[desc_semestre]
           ,[cod_ano])
     VALUES
           (<cod_dia, varchar(25),>
           ,<data, datetime,>
           ,<atr_dia_semana, varchar(50),>
           ,<atr_fim_de_semana, bit,>
           ,<cod_mes, varchar(25),>
           ,<desc_mes, varchar(200),>
           ,<cod_trimestre, varchar(25),>
           ,<desc_trimestre, varchar(200),>
           ,<cod_semestre, varchar(25),>
           ,<desc_semestre, varchar(200),>
           ,<cod_ano, varchar(25),>)
GO
```

Assim como nos exemplos anteriores, vamos adicionar os comandos `SET IDENTITY_INSERT` antes e depois do bloco de código acima.

```sql
SET IDENTITY_INSERT dim_tempo ON
GO
```

```sql
SET IDENTITY_INSERT dim_tempo OFF
GO
```

Nessa tabela em específico, há uma observação que precisamos ter cuidado. Mas antes, precisamos nos lembrar de adicionar o `id_dia` ao comando `INSERT INTO` e o valor `0` para `VALUES`.

O campo `cod_dia` é um `varchar(25)`; substituiremos por `ND`. Já o campo `data`, é um `datetime`, então em vez de colocar uma data não definida, vamos especificar, por exemplo, `1900-01-01 00:00:00`.

Na sequência, temos o campo `atr_dia_semana`, que também colocaremos como não definido (`ND`). Já o campo `atr_fim_de_semana` é um campo lógico, ou seja, deve ser 1 ou 0; vamos definir como 0, por exemplo.

Todos os campos restantes, que também são do tipo `varchar()`, serão substituídos por `ND`.

```sql
USE [DW_ATACADEZ]
GO

INSERT INTO [dbo].[dim_tempo]
           ([id_dia]
           ,[cod_dia]
           ,[data]
           ,[atr_dia_semana]
           ,[atr_fim_de_semana]
           ,[cod_mes]
           ,[desc_mes]
           ,[cod_trimestre]
           ,[desc_trimestre]
           ,[cod_semestre]
           ,[desc_semestre]
           ,[cod_ano])
     VALUES
           (0
           ,'ND'
           ,'1900-01-01 00:00:00'
           ,'ND'
           ,0
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND'
           ,'ND')
GO
```

Em seguida, vamos executar o primeiro comando `SET IDENTITY_INSERT`, depois o comando `INSERT`, e por último o segundo comando `SET IDENTITY_INSERT`.
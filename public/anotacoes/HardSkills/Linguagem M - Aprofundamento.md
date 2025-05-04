---
title: Linguagem M - Aprofundamento
updated: 2024-08-08 13:43:19Z
created: 2024-07-03 14:04:05Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

[toc]



# Tratamentos e APIs

## Mergulhando na Linguagem M

### Variáveis

Como qualquer linguagem de programação, a linguagem M possui os chamados **tipos primitivos** que caracterizam boa parte dos possíveis tipos de variáveis que podemos trabalhar ao descrever o código.

Todos os tipos, incluindo o tipo primitivo, derivam do tipo abstrato `any` que é responsável por classificar todos os valores. Ou seja, qualquer valor de M obedece a algum subtipo primitivo de `any`.

sendo os principais tipos primitivos os seguintes:

- `type null`, que classifica o valor nulo.
- `type logical`, que classifica os valores **true** e **false**.
- `type number`, que classifica valores numéricos.
- `type time`, que classifica valores de tempo.
- `type date`, que classifica valores de data.
- `type datetime`, que classifica valores de datetime.
- `type datetimezone`, que classifica valores de datetimezone.
- `type duration`, que classifica valores de duração.
- `type text`, que classifica valores de texto.
- `type binary`, que classifica valores binários.
- `type type`, que classifica valores de tipo.
- `type list`, que classifica valores de lista.
- `type record`, que classifica valores de registro.
- `type table`, que classifica valores de tabela.
- `type function`, que classifica valores de função.
- `type anynonnull`, que classifica todos os valores, exceto o nulo. O tipo abstrato `none` não classifica nenhum valor.

<span style="color: #c0c0c0;">Curiosamente, os tipos primitivos abordam não apenas os valores primitivos como binary, date, list, number, etc, como também valores abstratos como: function, table, none e o próprio any.</span>

&nbsp;

### <span style="color: #c0c0c0;">Listas</span>

<span style="color: #c0c0c0;">As listas em M são definidas com "{}", t<span style="color: #c0c0c0;">udo que é inserido dentro das chaves faz parte da lista, seja número ou texto. E se <span style="color: #c0c0c0;">precisássemos listar de 1 a 99, seria inviável colocarmos os numerais um a um, separando-os por vírgulas manualmente. Para isso, existem os recursos de lista que facilitam essa manipulação. Para isso usamos a sintaxe "1 .. 99".</span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Como a linguagem sabe que está lidando com listas, ela entende, por essa estrutura, que você deseja acessar os elementos de 1 a 9, um a um. Isso também funciona com textos.</span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Também podemos fazer listas dentro de listas (listas de listas).</span></span></span></span>

<span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;"><span style="color: #c0c0c0;">Ex:</span></span></span></span>

&nbsp; `let numeros = {1 .. 99}, alfabeto = {"A" .. "Z"}, mistura = {numeros, alfabeto}, mistura1 = mistura{0} in mistura1`

Tambem podemos acessar listas em posições.

<span style="color: #c0c0c0;">Na linguagem M, uma função é um mapeamento de um conjunto de valores de entrada para um único valor de saída. Para criar uma função, precisamos passar o seu nome ou a variável que vai recebê-la e parâmetros para calcular o resultado da função. Exemplo:  
<img src="../_resources/939c6daeabce67d48e4fafd7f508d8a0.png" alt="939c6daeabce67d48e4fafd7f508d8a0.png" width="245" height="362" class="jop-noMdConv">  
</span>

<span style="color: #c0c0c0;">Funções de Listas:</span>

- **Informação:** como `List.Count` que retorna o número de itens em uma lista;
- **Seleção:** como `List.Select` que seleciona os itens que correspondem a uma condição;
- **Transformação:** como `List.Transform` que executa a função em cada item da lista e retorna uma nova lista;
- **Associação:** como `List.Contains` que retorna **true** se um valor é encontrado em uma lista;
- **Operação de conjuntos:** como `List.Union` que retorna uma lista de uma lista de listas e une os itens nas listas individuais;
- **Ordenação:** como `List.Max` que retorna o item com o valor máximo em uma lista;
- **Medidas de tendência central:** como `List.Mode` que retorna a moda da lista, ou seja, o item que aparece mais comumente nesta lista;
- **Aritmética:** como `List.Sum` que retorna a soma de uma lista;
- **Geração:** como `List.Generate` que gera uma lista de valores.
- **Datas:** como `List.Dates` que retorna uma lista de valores *date*. Com essa função, é possível até mesmo criar uma tabela calendário. Se tiver interesse, confira este [artigo](https://www.alura.com.br/artigos/power-bi-dimensao-calendario-linguagem-m-forma-pratica) para obter mais informações.

[Doc PowerQuery](https://learn.microsoft.com/pt-br/power-query/)

### Registros

As [funções de registro](https://learn.microsoft.com/pt-br/powerquery-m/record-functions) criam e manipulam valores de registros. Podendo ser funções do tipo: (registros são definidos com "\[ \]")

- **Informação:** como `Record.FieldCount`, que retorna o número de campos em uma registro, e o `Record.HasFields`, que retorna **true** quando houver nomes de campo em um registro como especificado pelo parâmetro;
- **Seleção:** como `Record.Field`, que retorna o valor do campo fornecido;
- **Transformação:** como `Record.AddField`, que adiciona um campo mais o seu valor ao registro;
- **Serialização:** como `Record.FromList`, que retorna um registro de acordo com uma lista de valores de campos e um conjunto de campos.

&nbsp;

### Tabelas

As [funções de tabela](https://learn.microsoft.com/pt-br/powerquery-m/table-functions) criam e manipulam valores de tabelas. Podendo ser funções do tipo:

- **Informação:** como `Table.Profile`, que retorna um perfil das colunas de uma tabela;
- **Transformação:** como `Table.SplitColumn`, que retorna um novo conjunto de colunas advindo de uma coluna aplicando uma função de divisor a cada valor;
- **Conversão:** como `Table.ToList`, que retorna uma tabela como lista aplicando uma função de combinação em cada linha dela;
- **Construção:** como `Table.FromValue`, que retorna uma tabela com uma coluna que contém o valor fornecido ou uma lista de valores;
- **Associação:** como `Table.Distinct`, que remove linhas duplicadas de uma tabela, garantindo que todas as linhas sejam distintas;
- **Ordenação:** como `Table.AddRankColumn`, que adiciona uma coluna com a classificação de uma ou mais colunas;
- **Operações de Coluna:** como `Table.PromoteHeaders`, que promove a primeira linha da tabela como a coluna de todos os dados;
- **Operações de Linha:** como `Table.SelectRows`, que retorna uma tabela que contém apenas linhas que correspondem a uma condição.

&nbsp;

### Funções personalizadas

Já vimos que existem funções relacionadas a listas, tabelas, registros, etc. Porém e se quisermos criar uma função onde conseguimos controlar o retorno da mesma? Essa é a estrutura de uma função:  
<img src="../_resources/d1197678c633bde1c61e039bd9c97083.png" alt="d1197678c633bde1c61e039bd9c97083.png" width="235" height="98" class="jop-noMdConv">

Tudo que ocorrer após a estrutura "() =>" será parte dessa função. Ao executar o código, nós ainda não temos a execução dessa função, mas sim isso:  
![846552990cecd6c5b62fc60bc716baa6.png](../_resources/846552990cecd6c5b62fc60bc716baa6.png)  
Nós podemos invocar a função ou inserir parametros. Invocando a função, nós temos o retorno "Olá Mundo' que foi o que definimos na função, anteriormente.

Podemos ainda criar uma função dinâmica a qual recebe parametros, veja:  
<img src="../_resources/ec6a4a9ca96aebb14a43fed6cbf6ab03.png" alt="ec6a4a9ca96aebb14a43fed6cbf6ab03.png" width="368" height="83" class="jop-noMdConv">

Note, que agora a função, com a mesma estrutura de antes, recebe dois parametros, sendo eles o "a" e "b", ambos do tipo number. Para definir tipos de dados em parametros devemos usar o "as tipo". O retorno:  
![ce0624b8c92b4784294de61b54b9706f.png](../_resources/ce0624b8c92b4784294de61b54b9706f.png)

Ainda sobre tipos, podemos mudar seus tipos em qualquer momento de nossa função:  
<img src="../_resources/b44f120e119d4fbaecb432cf06e9e304.png" alt="b44f120e119d4fbaecb432cf06e9e304.png" width="454" height="80" class="jop-noMdConv">

Essa função acima, pega dois valores e concatena eles, nós podemos aplicar essa função em uma tabela, basta clicar na tabela que queremos, depois em "adicionar coluna" e por ultimo em "invocar função personalizada". Veja:  
![42d2fb071bf1ae8e92489c6142095e31.png](../_resources/42d2fb071bf1ae8e92489c6142095e31.png)  
![1fb7baea25658fe926632e16ce4ebd1a.png](../_resources/1fb7baea25658fe926632e16ce4ebd1a.png)

**Condicionais em funções:  
<img src="../_resources/5f8b79c7d00c60eaf404a475e02127dc.png" alt="5f8b79c7d00c60eaf404a475e02127dc.png" width="419" height="262" class="jop-noMdConv">**

**em M, se quisermos trabalhar com as colunas de nossas tabelas, usamos uma varivel que recebe a função "Table.TransformColumns"**

**![f65a0e8badc57ad5f3376c5262f4bcd2.png](../_resources/f65a0e8badc57ad5f3376c5262f4bcd2.png)**

Note o código acima, nos temos o "#"Nova Coluna" o qual recebe o table transform columns, essa função recebe 2 parametros, a tabela em si e o que iremos fazer com essa tabela, qual transformação iremos fazer. Nesse caso nossa tabela sempre será referenciada pela alteração anterior, nesse caso "#"Tipo Alterado"". Depois nós passamos uma lista com nossa coluna "Temperatura" e a função sendo executada em cada linha dessa coluna (each), como parâmetro da função passamos um "\_" que significada exatamente que ali deve ser passado o valor de cada linha da coluna "Temperatura".

**Mais sobre each e _ em M**

&nbsp;

Existem duas expressões extremamente importantes dentro da Linguagem M e que possibilitam a criação de funções anônimas e simples para, por exemplo, referenciar uma coluna de nossa tabela ou agir como um iterador em lista. São elas `each` e underline ( `_` ).

A palavra-chave `each` é utilizada para criar de forma simplificada funções anônimas com um parâmetro `_`. A sintaxe da expressão que gera o `each` é a seguinte:

```cpp
(_) => _expressão 

(_) => expressão
```

***Mas, primeiro, o que são funções anônimas e o que o parâmetro `_` significa?***

Uma função anônima é uma função que é definida, mas não nomeada, e é utilizada no mesmo local e momento que é criada. Em diversas linguagens, como por exemplo o Python, essa função é útil para agir tão somente no momento que precisamos, sem ter que guardar seus valores ocupando espaço no código.

Já o parâmetro underline, refere-se a uma variável temporária que, como o próprio nome indica, é um tipo de variável que será utilizada apenas no escopo de uma função ou em um dado momento no código. Por se tratarem de variáveis que não serão utilizadas novamente em outro momento no código, o `_` age como uma palavra-chave para identificar essa variável.

Por exemplo, podemos utilizá-la para guardar um valor de uma tabela e executá-la imediatamente após a definição da seguinte forma:

```bash
let
_ = Table.FromColumns({
"Daniele", "Ana", "David", "Bruno"},
{1, 2, 3, 4},
{4, 4, 3, 2}},
{"Pessoa","Matrícula", "Nota"})
in
     _
```

<span style="color: #c0c0c0;">Percebe-se nesse exemplo que o</span> `_` <span style="color: #c0c0c0;">age como uma variável temporária que recebe uma tabela e retorna para nossa consulta a tabela preenchida.![97253349460bffddecd3d820ccf786ce.png](../_resources/97253349460bffddecd3d820ccf786ce.png)</span>

Combinando o uso do underline com a palavra-chave `each` criamos uma função simples e ao mesmo tempo poderosa.

Se por exemplo quisermos gerar uma lista de números pares, podemos unir a função `List.Select()`, que seleciona valores de uma lista a partir de uma função, com o **each** e **underline** juntos. Como na consulta abaixo:

```Javascript
let
     Lista = {1 .. 10},
     pares = List.Select(
          Lista,                           // lista com os valores de 1 a 10
          each Number.Mod( _ ,2) = 0     // Retorna o resto da divisão de cada item da lista por 2 e seleciona quem resulta em zero
          )   
in
     pares
```

<span style="color: #c0c0c0;">Aqui o each gera uma função anônima que calcula o resto da divisão entre cada valor da lista ( passado a cada iteração para a variável temporária</span> `_` <span style="color: #c0c0c0;">) e o número 2 e retorna apenas os valores em que a divisão tenha resto zero, ou seja, os números pares.</span>

Essa combinação também pode ser utilizada para executar uma função nos valores presentes em uma coluna de uma dada tabela, modificando a coluna de acordo com a operação que deseja:

```M
#”Nova coluna” = Table.TransformColumns(
               #"Tipo Alterado", {"Temperatura", each #”Função temperatura”( _ )}
               )
```

<span style="color: #c0c0c0;">Neste exemplo, o</span> `each` <span style="color: #c0c0c0;">aplica a função presente em</span> `#”Função temperatura”()` <span style="color: #c0c0c0;">em todos os valores presentes na coluna</span> `”Temperatura”` <span style="color: #c0c0c0;">de uma tabela. O</span> `_` <span style="color: #c0c0c0;">atua como uma forma de exibir que a operação será aplicada em cada linha da coluna e os valores serão utilizados na função presente em</span> `#”Função temperatura”()`<span style="color: #c0c0c0;">.</span>

<span style="color: #c0c0c0;">Para fechar: _ = daquele momento.</span>

**<span style="color: #c0c0c0;">Loop (função recursiva)</span>**

**<span style="color: #c0c0c0;">![5e9801cd90a221a8c921477acf3047a9.png](../_resources/5e9801cd90a221a8c921477acf3047a9.png)</span>**

<span style="color: #c0c0c0;">A função de exemplo acima feita dentro de Lista Pares recebe uma função de lista chamada `List.Generate` a qual cria uma lista, nele ela recebe uma função que recebe o valor 10, abaixo fazemos: para cada (each) valor daquele momento ( _ ) que for maior que 1 ( > 1), cada (each) valor daquele momento ( _ ) eu subtraio 2. E o resultado são exatamente os valores pares de 1 a 10:  
![2eadd455fe422edc30addbb13971a4e1.png](../_resources/2eadd455fe422edc30addbb13971a4e1.png)</span>

<span style="color: #c0c0c0;">Aqui criamos uma lista com condições, chamamos esse tipo de função de função recursiva, aquela que chama ela mesma e cria um looping até que a condição seja cumprida.</span>

Uma outra função muito útil para trabalhar com loops e iterações simples dentro da Linguagem M é a função [`List.Accumulate()`](https://docs.microsoft.com/pt-br/powerquery-m/list-accumulate).

Esta função recebe uma lista de valores, um valor inicial (semente) e uma função de acumulação, podendo esta ser de soma, multiplicação, divisão ou até concatenação. A sintaxe da função `List.Accumulate()` é a seguinte:

```typescript
List.Accumulate(            // nome da função,
     list as list,            // lista de itens do tipo lista,
     seed as any,             // valor inicial (semente) do tipo any
     accumulator as function  // um acumulador do tipo função
)
```

A execução começa no valor inicial (semente). Na sequência, a função aplica o acumulador no valor inicial repetidamente usando cada item da lista. O usuário pode especificar o tipo de função acumuladora e esta função irá iterar por cada item da lista. Ou seja, cada transformação ocorre por cima da anterior.

Essencialmente, esta função realiza a transformação do valor inicial iterando por cada item da lista e, após iterar por todos os elementos, a função retorna o valor acumulado.

Como exemplo, podemos fazer a soma acumulada de uma lista com valores de 1 a 5:

```javascript
let
     Fonte = {1 .. 5},
     Acumulador = List.Accumulate(
          Fonte,                                      // lista com valores a acumular
          0,                                              // valor inicial
          (atual, próximo) => atual + próximo     // acumulador
     )
in
     Acumulador 

// O valor será 15 pela iteração seguindo os seguintes passos
// a partir do acumulador no 3º parâmetro: 
// Passo 1: atual = 0,  próximo = 1 ( Acumulador = 0  + 1 )
// Passo 2: atual = 1,  próximo = 2 ( Acumulador = 1  + 2 )
// Passo 3: atual = 3,  próximo = 3 ( Acumulador = 3  + 3 )
// Passo 4: atual = 6,  próximo = 4 ( Acumulador = 6  + 4 )
// Passo 5: atual = 10, próximo = 5 ( Acumulador = 10 + 5 )
```

Além disso, podemos aplicar o mesmo conceito para diversas aplicações que necessitem de acumulação de valores. Como, por exemplo:

```javascript
let
    Multiplicador = List.Accumulate(
          { 1 .. 5 },                                     // lista com valores a acumular
          1,                                              // valor inicial
          (atual, próximo) => atual * próximo         // acumulador
     ),                         // Retorno = 1 * 1 * 2 * 3 * 4 * 5 = 120

     Divisor = List.Accumulate(
          { 10, 5, 2 },                 
          100,              
          (atual, próximo) => atual / próximo
     ),                         // Retorno 100 / 10 / 5 / 2 = 1

     Concatenador = List.Accumulate(
          { "Meu ", "top ", 5, " filmes", ":" }, 
          "",               
          (atual, próximo) => 
               Text.Combine({atual} & {Text.From(próximo)})
     )                         // Retorno "Meu top 5 filmes:"
in
     Text.From(Multiplicador) & "#(lf)" & Text.From(Divisor) & "#(lf)" & Concatenador
```

* * *

## Chamada na API

Para fazer uma chamada em APIs podemos usar a função Web.Contents a qual recebe o endpoint da API no formato de texto. Porém devemos encapsular essa função dentro da função Json.Document, a qual nos retornará um Json. Veja:  
<img src="../_resources/050249b806ff8fddb31b5305298c2250.png" alt="050249b806ff8fddb31b5305298c2250.png" width="487" height="294" class="jop-noMdConv">

<span style="color: #c0c0c0;">Algumas APIs exigem uma chave secreta ou token para poder consumir os dados. Neste caso, existem duas possibilidades de conexão utilizando a linguagem M:</span>

### Parâmetros:

De acordo com a documentação de algumas APIs, é possível autenticar através dos parâmetros da requisição. Nesse caso, podemos utilizar a configuração **Query** para autenticar.

```javascript
[
   Query = [
              apikey={chave da api}
           [
]
```

### Cabeçalho:

Por questões de **segurança**, algumas APIs optam por não passar a autenticação nos parâmetros da URL. Logo, se faz necessário informar os detalhes da autenticação através do cabeçalho da requisição. Desta forma, vamos usar a configuração **Headers**:

```Javascript
[
   Headers = [
                         #”Content-Type” = “application/json”
Authorization =  (Bearer ou Basic) {Token}
             [
]
```

### Paginação

Nós precisamos obter o total de paginas para estruturarmos uma lista de paginas para isso fazemos a requisição:

```Javascript
#"Total Paginas" = 
                    Json.Document(
                        Web.Contents("http://localhost:8080", 
                        [
                            RelativePath = "/medicos",
                            Query = [
                            page = "1" 
                            ]
                        ])
                    )[totalPages]
```

Acima nós pegamos o total de paginas, a API nos dá essa informação, depois estruturamos uma lista de paginas:

```Javascript
 #"Lista Paginas" = {0 .. #"Total Paginas" -1} 
```

Nela temos uma lista de 0 até o total de paginas -1 (pois começa em 0), temos 9 paginas, logo será uma lista de 0 até 9. Agora precisamos fazer uma transformação nessa lista de tal forma que, executemos a requisição principal a API porém as páginas tem que ser dinâmicas. Precisamos mudar a váriavel fonte (Requisição) para uma função. A várivel era assim:

```Javascript
    #"Requisição" = 
        Json.Document(
            Web.Contents("http://localhost:8080", 
            [
                RelativePath = "/medicos",
                Query = [
                   page = "1" 
                ]
            ])
        )[content],
```

Isso nos trás apenas 1 pagina. Veja ela dinâmica:

```Javascript
#"Requisição" =
        (numeroPagina) => 
            Json.Document(
                Web.Contents("http://localhost:8080", 
                [
                    RelativePath = "/medicos",
                    Query = [
                    	page = Number.ToText(numeroPagina) 
                    ]
                ])
            )[content],
```

Agora nós temos nossa requisição em formato de função, note que temos um parametro chamado "numeroPagina", o qual é passado para o page dentro da Query, ele sofre uma transformação, pois ele deve sair da variavel `#"Lista Paginas"` como number porém deve ser passado para a Query da API como text.

Tendo a função de chamada com paginas dinâmicas, devemos agora transformar nossa variável Lista Paginas, a qual vimos antes. Para isso criaremos outra variável chamada `#"Lista Dados"`, a qual irá listar todos os dados os quais estamos importando, para isso usaremos uma função referente a listas chamada `"List.Transform"`, o primeiro parâmetro que essa função precisa é uma lista, e depois precisa do que queremos fazer com ela.

E o que queremos fazer com essa lista?? Queremos executar uma requisição (nossa função) em cada elemento dessa lista e isso ficará armazenado em uma nova lista. Veja:

```Javascript
#"Lista Dados" = List.Transform(
            #"Lista Paginas",
            each {_, #"Requisição"(_)}
    )
```

**O list transform acima recebe nossa lista de paginas, e para cada elemento dessa lista de paginas ( _ ) ele executa a requisição (nossa função) passando como parâmetro cada elemento daquela lista de paginas ( _ (no caso o elemento atual que esta sendo referenciado) ).**

Ao final, o código completo deve ser assim:

```Javascript
let
    #"Requisição" =
        (numeroPagina) => 
            Json.Document(
                Web.Contents("http://localhost:8080", 
                [
                    RelativePath = "/medicos",
                    Query = [
                        page = Number.ToText(numeroPagina) 
                    ]
                ])
            )[content],

   #"Total Paginas" = 
                    Json.Document(
                        Web.Contents("http://localhost:8080", 
                        [
                            RelativePath = "/medicos",
                            Query = [
                                page = "1" 
                            ]
                        ])
                    )[totalPages],

    #"Lista Paginas" = {0 .. #"Total Paginas" -1},

    #"Lista Dados" = List.Transform(
            #"Lista Paginas",
            each {_, #"Requisição"(_)}
    )    
in
    #"Lista Dados"
```

Obs: se eu quisesse trazer as últimas 3 paginas apenas, devemos mudar nossa lista de paginas para:

```Javascript
#"Lista Páginas" = {#"Total Páginas"-3 .. #"Total Páginas"-1}
```

Ao executar, nós temos uma lista com 10 listas (10 paginas de nossa API):  
<img src="../_resources/e5d7344065c923095e2e91b7a1e181b2.png" alt="e5d7344065c923095e2e91b7a1e181b2.png" width="148" height="376" class="jop-noMdConv">

Note que ele nós trás o número da pagina e a Lista com os dados em si. Agora temos todos os dados da API e não somente 1 pagina. E agora? Agora temos que estruturar uma tabela, temos que achar uma forma de expandir essa lista de transformar isso em uma tabela.

### Tabelando dados

Existem algumas funções no próprio Power Query (sem a utilização do M) que podem fazer isso pra gente. Porém, vamos aprender como fazer isso com M. Se fizessemos isso pelo Power Query, ele nos retornaria uma coluna com os numeros das paginas e as listas, teriamos que separar as listas e os numeros e depois transformar as colunas de listas em tabelas novamente e ai sim expandir essas listas. Isso demandaria muito tempo e etapas. Por isso estruturemos essa tabela do zero com M e ai sim fazer as devidas espanções.

Criarei uma nova variável no mesmo código das requisições, chamada `#"Tabela"` a qual vai receber a função que cria tabelas, a `#table`. Veja:

```Javascript
    #"Tabela" = #table(
        type table
        [
            Pagina = text,
            Dados = list
        ]   
    )   
```

Nós temos agora a variável tabela que recebe a função table a qual cria uma tabela do tipo table e recebe um registro, nesse registro temos a Pagina que é do tipo texto e os Dados que são do tipo lista (irá nos trazer todos os valores da lista).

Agora temos configurado o cabeçalho, mas agora precisamos passar a lista dos valores, a função table nos exige uma lista de listas, e é exatamente isso que temos na variável `#"Lista Dados"`, e é ela que passaremos para nossa table:

```Javascript
#"Tabela" = #table(
        type table
        [
            Pagina = text,
            Dados = list
        ],
        #"Lista Dados"  
    )
```

Tendo nossa tabela estruturada, veja o resultado:

![b5edafee3af2ad1bd132bc173017e78b.png](../_resources/b5edafee3af2ad1bd132bc173017e78b.png)

Agora sim podemos clicar no botão ao lado direito do nome "Dados" e fazer a expansão dos dados. Fazendo ela 1 vez, nos é retornado os 10 registros de cada lista:  
![e191910e34283772cf635f51e13dafb3.png](../_resources/e191910e34283772cf635f51e13dafb3.png)

Fazendo mais uma vez, nos serão retornadas as informações que existem dentro de cada registro:  
![90737658772222d7384735319e6369fe.png](../_resources/90737658772222d7384735319e6369fe.png)

E agora finalmente, temos a tabela. Porém, criamos 2 etapas novas de expansão, mas poderiamos encadear elas dentro da mesma etapa de estruturação da tabela. Veja como é a estrutura da função de expansão:

```Javascript
 #"Dados Expandido" = Table.ExpandListColumn(Tabela, "Dados"),
```

Note que é um função `Table.ExpandListColumn` a qual recebe uma tabela e uma coluna. Poderíamos fácilmente passar nossa etapa de criação da tabela no elemento "Tabela". Veja:

```Javascript
#"Tabela" = 
        Table.ExpandListColumn(
                    #table(
                        type table
                        [
                            Pagina = text,
                            Dados = list
                        ],
                        #"Lista Dados"  
                    ),
                    "Dados"
        )
```

Usei a função `Table.ExpandListColumn`, a qual exige uma tabela como primeiro parâmetro, e estamos criando uma tabela ali dentro mesmo, e ai passamos a coluna que acabamos de criar no parâmetro anterior, genial não é mesmo?

Bem, criamos a expansão de uma das listas, porém ainda temos a expansão dos registros, veja o código:

```Javascript
    #"Dados Expandido1" = Table.ExpandRecordColumn(#"Dados Expandido", "Dados", {"id", "nome", "email", "crm", "especialidade"}, {"Dados.id", "Dados.nome", "Dados.email", "Dados.crm", "Dados.especialidade"})  
```

Essa função recebe como primeiro parâmetro, exatamente uma tabela, depois como segundo parâmetro, uma coluna, como terceiro parâmetro ele recebe o nome dos elementos que queremos expandir (id, nome, email, etc) e por ultimo ele ainda recebe o nome os quais queremos transformar (se quisermos renomear esses registros).

O que vamos fazer agora é basicamente o mesmo que fizemos com a função `ExpandListColumn` porém agora faremos também com a `ExpandRecordColumn`. Veja:

```Javascript
#"Tabela" =
        Table.ExpandRecordColumn( //expansão registro
            Table.ExpandListColumn( //expansão lista
                #table( //criação tabela
                    type table
                        [
                            Pagina = text, //criação coluna
                            Dados = list //criação coluna
                        ],
                        #"Lista Dadoa" //Listas de listas com dados
                ),
                "Dados" //expansão de lista da coluna Dados
            ),
            "Dados", //expansão de registro da coluna Dados
            {"id", "nome", "email", "crm", "especialidade"}, //nomes originais 
            {"ID", "Nome", "Email", "CRM", "Especialidade"} //nomes finais  
        )
```

Note agora que em nossa varável tabela, nós criamos a tabela com as colunas Pagina e Dados com os dados da nossa lista de dados original (estruturamos a tabela), depois expandimos as listas coluna "Dados" da tabela que foi criada, e depois expandimos os registros da coluna "Dados".

Note também que ambas as funções de expansão precisam de uma tabela como primeiro parâmetro, e nós temos isso. Na primeira expansão (de lista), nos passamos uma tabela por meio da criação da mesma, logo `ExpandListColumn` é uma tabela, tabela essa que passamos como parâmetro para a função `ExpandRecordColumn`.

Veja como temos o mesmo resultado que antes:  
![e660e0d04566ef45f61cf32941ece272.png](../_resources/e660e0d04566ef45f61cf32941ece272.png)

Porém com menos etapas. Em nosso caso não tivemos problemas com codificação, os nomes com acento vieram corretamente, mas e se tivessemos problemas com isso? Como resolver?

### Codificação

Vamos ver como fazer a encodificação de uma coluna na mão com M. Novamente, podemos encadear funções e aproveitar a etapa de `#"Tabela"` para criar essa encodificação. Para isso usaremos a função `Table.TransformColumn` a qual recebe exatamente uma tabela como primeiro parâmetro e como segundo parâmetro recebe as transformações em formato de lista.

Para as transformações no segundo parâmetro, iremos colocar a coluna na qual queremos fazer a transformaçáo (coluna nome), agora dentro dessa coluna o que iremos fazer? Usaremos o each para falar que em cada elemento dessa coluna, farei uma alteração de encodificação, e para isso usaremos a função `Text.FromBinary` pois configuraremos nossos elementos da coluna nome para binário com uma encodificação certa para retornarmos em UTF-8 que é nossa encodificação correta.

Então, primeiro usaremos o `Text.FromBinary` para puxar do binário pro texto e dentro do `Text.FromBinary` usaremos o `Text.ToBinary` o qual vai transformar texto em binário. A função `Text.ToBinary` recebe o _ o qual referencia a linha atual da coluna e colocaremos a encodificação padrão do windows, a 1252. Na função `Text.FromBinary` nós precisamos de um segundo parâmetro além do texto em binário, precisamos da encodificação correta, para isso usamos a função `TextEncoding.Utf8`.

Veja o código como ficou:

```Javascript
#"Tabela" =
        Table.TransformColumns(
                   Table.ExpandRecordColumn( //expansão registro
                        Table.ExpandListColumn( //expansão lista
                            #table( //criação tabela
                                type table
                                    [
                                        Pagina = text, //criação coluna
                                        Dados = list //criação coluna
                                    ],
                                    #"Lista Dados" //Listas de listas com dados
                            ),
                            "Dados" //expansão de lista da coluna Dados
                        ),
                        "Dados", //expansão de registro da coluna Dados
                        {"id", "nome", "email", "crm", "especialidade"}, //nomes originais 
                        {"ID", "Nome", "Email", "CRM", "Especialidade"} //nomes finais  
                    ),
                    {
                        "Nome",
                         each Text.FromBinary(Text.ToBinary(_, 1252), TextEncoding.Utf8)
                    }   
        )
```

Agora temos a criação da tabela com todas as expansões necessárias e a encodificação da coluna Nome. Tudo em uma única etapa.

A solução acima possuí um erro que será resolvido mais adiante.

&nbsp;

### Lidando com erros em M

Para lidar com erros na linguagenm M nós podemos usar o `try - otherwise`, é como se fosse o try - catch de outras linguagens. Ou seja, `try` fazer algo `otherwise` (se der errado) faça outra coisa. Por exemplo se quisermos multiplicar uma coluna numérica por outra que tenha números porém tenha um "N/A" no meio, como prosseguir? Poderiamos fazer o seguinte código:

```Javascript
try [coluna1]*[coluna2] otherwise 0
```

Ou seja, o código acima tenta fazer a multiplicação, se não der, retorna 0. Assim nós retiramos todos os erros possíveis.

&nbsp;

### Lidando com erros em nosso código anterior e refatorando

Em nosso código atual temos 2 passos que podem ser transformados em 1:

```Javascript
    #"Lista Paginas" = {0 .. #"Total Paginas" -1},

    #"Lista Dados" = List.Transform(
            #"Lista Paginas",
            each {_, #"Requisição"(_)}
    ), 
```

Podemos resumir a listagem de paginas e o retorno de paginas em apenas 1 etapa, usando um `List.Generate` (a qual recebe uma função inicial, uma condição, uma função que será executada durante a rotina e um retorno):

```Javascript
    #"Lista Dados" = List.Generate(
        ()=> [Pagina = 0, Consulta = #"Requisição"(0)],
        each [Pagina] < #"Total Paginas",
        each [Consulta = #"Requisição"([Pagina]+1), Pagina = [Pagina]+1],
        each [Consulta] 
    ),
```

Este código utiliza a função `List.Generate` para criar uma lista que faz requisições a uma API em várias páginas. Vamos dividir a função em suas partes principais para entender melhor:

1.  **Iniciação (`()=> [Pagina = 0, Consulta = #"Requisição"(0)]`)**:
    
    - A função começa definindo um estado inicial. Neste caso, `Pagina = 0` (indicando que começa na primeira página) e `Consulta = #"Requisição"(0)` (indicando que a primeira requisição é feita na página 0).
2.  **Condição (`each [Pagina] < #"Total Paginas"`)**:
    
    - Este é o critério que a lista utiliza para continuar gerando itens. Ele verifica se a página atual (`[Pagina]`) é menor que o total de páginas (`#"Total Paginas"`). Enquanto esta condição for verdadeira, a lista continuará a ser gerada.
3.  **Próximo estado (`each [Consulta = #"Requisição"([Pagina]+1), Pagina = [Pagina]+1]`)**:
    
    - Esta parte define o que acontece para passar ao próximo estado. Aqui, é feita uma nova requisição para a próxima página (`[Pagina]+1`) e a página atual é incrementada em 1 (`Pagina = [Pagina]+1`).
4.  **Resultado (`each [Consulta]`)**:
    
    - Esta parte define o valor que será adicionado à lista em cada iteração. Neste caso, é a consulta feita na página atual (`[Consulta]`).

Com isso, nós conseguimos pular uma etapa, antes tinhamos como resultado o numero da pagina e as listas e tinhamos que fazer uma expansão de listas das listas, mas agora nós recebemos direto a lista com os registros dentro, com isso pulamos a etapa de expansão de listas.

Nós fazemos 2 requisições pra API, uma para retorno do conteúdo em si da mesma, e outra para nos retornar o total de paginas. Porém, podemos fazer a requisição de contents direto na função lista dados que criamos e tirar o "`[content]`" da nossa requisição principal:

```Javascript
    #"Lista Dados" = List.Generate(
        ()=> [Pagina = 0, Consulta = #"Requisição"(0)[content]],
        each [Pagina] < #"Total Paginas",
        each [Consulta = #"Requisição"([Pagina]+1)[content], Pagina = [Pagina]+1],
        each [Consulta] 
    ),
```

Com isso, a requisição de total paginas ficará mais enxuta, veja como era antes:

```Javascript
   #"Total Paginas" = 
                    Json.Document(
                        Web.Contents("http://localhost:8080", 
                        [
                            RelativePath = "/medicos",
                            Query = [
                                page = "1" 
                            ]
                        ])
                    )[totalPages],
```

Faziamos uma nova requisição inteira, porém podemos remover todo o código e deixar apenas assim:

```Javascript
    #"Requisição" =
        (numeroPagina) => 
            Json.Document(
                Web.Contents("http://localhost:8080", 
                [
                    RelativePath = "/medicos",
                    Query = [
                        page = Number.ToText(numeroPagina) 
                    ]
                ])
            ),

   #"Total Paginas" = #"Requisição"(1)[totalPages],
```

Note que agora usamos a mesma requisição padrão, pois ela não tem mais "escopo de acesso" (antes tinha o \[content\] ao final, o que limitava o retorno dessa requisição a apenas o content). Logo, pegamos a variável `#"Requisição"` e adicionamos o escopo de `totalPages`, isso deixa nosso código mais leve, eficiente e de fácil entendimento.

Porém, agora temos outro problema. O código anterior nos retornava 2 colunas (a de numero da pagina e listas de listas), porém agora só nos é retornado 1 coluna, a de listas de registros. Por isso precisamos mudar a estruturação da tabela que criamos antes, relembre como era:

```Javascript
#"Tabela" =
        Table.TransformColumns(
                   Table.ExpandRecordColumn( //expansão registro
                        Table.ExpandListColumn( //expansão lista
                            #table( //criação tabela
                                type table
                                    [
                                        Pagina = text, //criação coluna
                                        Dados = list //criação coluna
                                    ],
                                    #"Lista Dados" //Listas de listas com dados
                            ),
                            "Dados" //expansão de lista da coluna Dados
                        ),
                        "Dados", //expansão de registro da coluna Dados
                        {"id", "nome", "email", "crm", "especialidade"}, //nomes originais 
                        {"ID", "Nome", "Email", "CRM", "Especialidade"} //nomes finais  
                    ),
                    {
                        "Nome",
                         each Text.FromBinary(Text.ToBinary(_, 1252), TextEncoding.Utf8)  
                    }   
        )
```

As transformações seguirão as mesmas, porém a estruturação da tabela (criação) deve mudar. Nosso retorno agora é esse:  
![c667f0fa7a948a03c70ffe315e3e90da.png](../_resources/c667f0fa7a948a03c70ffe315e3e90da.png)  
Uma lista de registros, porém ao transformar isso em tabela, recebemos um erro, pois não temos mais a coluna de Pagina, apenas a de Dados. Para isso iremos (manualmente pelo Power Query) transformar essa lista de registros em uma tabela. Agora temos um código de transformação de lista para tabelas veja:

```Javascript
#"Convertido para Tabela" = Table.FromList(#"Lista Dados", Splitter.SplitByNothing(), null, null, ExtraValues.Error),
```

Iremos pegar esse código e adaptar ele ao nosso código já existente de criação de tabela. Nossa #table vai desaparecer daquele código anterior, e vai entrar no lugar o código que nos foi fornecido pelo Power Query: `Table.FromList(#"Lista Dados", Splitter.SplitByNothing(), null, null, ExtraValues.Error)` o qual é o `Table.FromList`.

Veja como o código da variável `#"Tabela"` ficou agora:

```Javascript
#"Tabela" =
        Table.TransformColumns(
                   Table.ExpandRecordColumn( //expansão registro
                        Table.ExpandListColumn( //expansão lista
                             Table.FromList(#"Lista Dados", Splitter.SplitByNothing(), null, null, ExtraValues.Error),
                            "Dados" //expansão de lista da coluna Dados
                        ),
                        "Dados", //expansão de registro da coluna Dados
                        {"id", "nome", "email", "crm", "especialidade"}, //nomes originais 
                        {"ID", "Nome", "Email", "CRM", "Especialidade"} //nomes finais  
                    ),
                    {
                        "Nome",
                         each Text.FromBinary(Text.ToBinary(_, 1252), TextEncoding.Utf8)
                    }   
        )
```

Agora temos a criação da tabela baseada numa transformação de lista para tabela. Porém, note que fazemos nossas transformações de expansão baseada numa coluna chamada "Dados", a qual não existe mais. Agora o nome da mesma é "Column1", então é só alterar esse nome e abraço.

E pronto, agora temos nosso código final:

```Javascript
let
    #"Requisição" =
        (numeroPagina) => 
            Json.Document(
                Web.Contents("http://localhost:8080", 
                [
                    RelativePath = "/medicos",
                    Query = [
                        page = Number.ToText(numeroPagina) 
                    ]
                ])
            ),

   #"Total Paginas" = #"Requisição"(1)[totalPages],

    #"Lista Dados" = List.Generate(
        ()=> [Pagina = 0, Consulta = #"Requisição"(0)[content]],
        each [Pagina] < #"Total Paginas",
        each [Consulta = #"Requisição"([Pagina]+1)[content], Pagina = [Pagina]+1],
        each [Consulta] 
    ), 

    #"Tabela" =
        Table.TransformColumns(
                   Table.ExpandRecordColumn( //expansão registro
                        Table.ExpandListColumn( //expansão lista
                             Table.FromList(#"Lista Dados", Splitter.SplitByNothing(), null, null, ExtraValues.Error), //cria tabela de uma lista
                            "Column1" //expansão de lista da coluna Dados
                        ),
                        "Column1", //expansão de registro da coluna Dados
                        {"id", "nome", "email", "crm", "especialidade"}, //nomes originais 
                        {"ID", "Nome", "Email", "CRM", "Especialidade"} //nomes finais  
                    ),
                    {
                        "Nome",
                        each Text.FromBinary(Text.ToBinary(_, 1252), TextEncoding.Utf8)  
                    }   
        )

 
in
    #"Tabela"
```

Muito mais enxuto, simples e eficiente. E com o mesmo resultado que antes!

Uma ultima alteração pode ser feita em nossa variável `#"Tabela"` no `List.Generate`, podemos adicionar um `try - otherwise` nas duas requisições feita ali, ficando:

```Javascript
#"Lista Dados" = List.Generate(
        ()=> [Pagina = 0, Consulta = try #"Requisição"(0)[content] otherwise null],
        each [Pagina] < #"Total Paginas",
        each [Consulta = try #"Requisição"([Pagina]+1)[content] otherwise null, Pagina = [Pagina]+1],
        each [Consulta] 
    ),
```

E pronto!
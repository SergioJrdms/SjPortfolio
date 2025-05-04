---
title: Aula sobre relacionamentos ativos/inativos e suas implicações em filtros
updated: 2024-07-05 20:39:38Z
created: 2024-07-05 20:32:46Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

**Daniel:** Conforme visto no final do último vídeo, temos 2 linhas diferentes em relação à primeira linha no relacionamento: 2 delas são tracejadas. Na realidade, as linhas tracejadas significam que os relacionamentos estão inativos, ou seja, somente o primeiro está ativo.

Isso quer dizer que o *Power BI* só consegue manter um relacionamento ativo? Por que isso acontece?

**David:** Esse é um ótimo questionamento, Daniel! Para entendermos melhor o que acontece nesse caso, farei uma provocação para você que está nos acompanhando durante todo o projeto que estamos desenvolvendo:

> Se quiséssemos trazer como resposta o total de pedidos no ano de 2020, analisando o projeto da maneira que está estruturado agora, será que encontraríamos a resposta certa?

Para resolver essa questão, como apoio, vamos criar alguns visuais para nos ajudar: um **cartão** e uma **segmentação**.

Primeiramente, vamos acessar a área "Relatório", clicando no ícone localizado no canto superior esquerdo do desktop, acima de onde acessamos o modelo. Será aberto o canvas do Power BI, onde vamos inserir um cartão que conterá o total de pedidos.

Para isso, colocamos no canvas o `PedidosKey`, isto é, nossa chave de pedidos. Feito isso, será automaticamente exibida a nossa contagem: nesse momento, considerando toda a base de dados, temos **121,25 mil** de pedidos.

![Canvas branco retangular na área "Relatório" do Power BI. No centro do canvas, há a inscrição "121,25 Mil" em preto, seguida do texto "Contagem de PedidosKey" em cinza.](../_resources/4c354b25-9bae-4705-991d-16e79120.png)

No entanto, queremos analisar esses dados no ano de 2020. Sendo assim, vamos inserir uma nova segmentação de dados utilizando a nossa tabela `Calendário`. Dentro da tabela, colocaremos o `Date`, e nele vamos definir o intervalo entre 1 de janeiro de 2020 e 31 de dezembro de 2020. Feito isso, será exibido o resultado nesse intervalo específico: **40,43 mil**.

![Canvas igual ao descrito anteriormente, porém com a inscrição "40,43 Mil". Além disso, abaixo do canvas, há a seção "Date" seguida de dois campos de preenchimento dispostos lado a lado, contendo o intervalo de tempo descrito acima na transcrição.](../_resources/2269899c-8ce4-4814-857e-2b2edfee.png)

**Daniel:** David, nesse momento, me senti um pouco provocado para entendermos qual regra de negócio estamos utilizando para fazer a filtragem e obter esse resultado. Vamos analisar novamente o relacionamento a nossa área "Modelo"?

**David:** Para acessá-la, clicamos no terceiro ícone do canto superior esquerdo, abaixo da área "Relatório".

**Daniel:** O relacionamento **ativo**, conforme visto anteriormente, corresponde à linha contínua. Se colocarmos o cursor do mouse sobre ela, percebemos que a `DataKey` está se relacionando com a `EntregaDataKey`.

Isso é interessante, porque a entrega não precisa ter necessariamente o mesmo período do pedido. Por exemplo: estamos filtrando o resultado para o ano de 2020, mas uma compra pode ter sido feita no final de 2020 e entregue somente em 2021.

Visto isso, talvez fizesse mais sentido mudarmos o relacionamento ativo para a coluna de `Pedido`, correto?

**David:** Faz total sentido, Daniel! O que faremos agora é trocar esse relacionamento. Existem vários caminhos para isso: podemos tanto clicar com o botão direito sobre a linha e selecionar a opção "Propriedades" para ativar; quanto acessar um ambiente mais propício para isso, a seção "Gerenciar relações" na faixa de opções.

Nessa janela, podemos filtrar as tabelas:

#### Gerenciar relações

| **Ativo** | **De: Tabela (Coluna)** | **Para: Tabela (Coluna)** |
| --- | --- | --- |
| ☑   | Estoque (Data atualização) | Calendário (DataKey) |
| ▢   | Vendas (EntregaDataKey) | Calendário (DataKey) |
| ☑   | Vendas (PedidoVendaDataKey) | Calendário (DataKey) |
| ▢   | Vendas (VencimentoDataKey) | Calendário (DataKey) |
| ☑   | Vendas (ClienteKey) | Cliente (ClienteKey) |
| ☑   | Estoque (ProdutoKey) | Produto (ProdutoKey) |
| ☑   | Vendas (ProdutoKey) | Produto (ProdutoKey) |
| ☑   | Vendas (RevendedorKey) | Revendedor (RevendedorKey) |
| ☑   | Vendas (VendasTerritorioKey) | VendasTerritorio (VendasTerritorioKey) |

Nós já temos todos os relacionamentos que estão com a tabela `Calendário`. Veja que a tabela de `Vendas` é de `EntregaDataKey`, então vamos desativá-la e ativar a coluna `PedidoVendaDataKey`, através das caixas de seleção na coluna esquerda.

Feito isso, basta clicar no botão verde "Fechar" e a mudança irá acontecer na última das linhas relacionadas, ou seja, a linha da coluna `DataKey` até a coluna `PedidoVendaDataKey` deixará de ser tracejada e passará a ser contínua.

Além disso, ao posicionar o cursor sobre essa linha, é exibido o destaque da coluna `PedidoVendaDataKey`.

**Daniel:** Legal! Acredito que agora faça sentido para nós analisarmos se a segmentação de dados está trazendo outro valor.

Para isso, podemos retornar ao canvas "Relatório", no canto superior esquerdo. Observe que o valor exibido no cartão agora é diferente do anterior; temos **40,96 mil**.

![Canvas igual ao descrito anteriormente, porém com a inscrição "40,96 Mil" e com o intervalo de 01/01/2020 a 31/12/2020.](../_resources/9f27ba8d-49a7-4697-89a2-8c6bb627.png)

Um valor muito mais assertivo para o nosso projeto seria utilizar a coluna de `Pedido` como filtragem, justamente pela regra de negócio aplicada, visto que o pedido pode ter um tempo diferente da entrega.

**David:** Exatamente, Daniel! Porém, começam a surgir algumas coisas na minha cabeça que me incomodam. A partir desse momento, estamos ativando e desativando relacionamentos de forma **manual**, e só conseguimos trazer para o nosso canvas informações referentes a uma regra de negócio pensando no tempo, que no nosso caso, é sobre pedidos.

No entanto, suponha que a ideia seja trazer, por exemplo, o total de pedidos de 2020, ou o total de entregas de 2020. Não seria possível com esse modelo, concorda?

Portanto, será que existe uma forma de manipularmos isso, de tal maneira que seja possível trazer essas informações para cada contexto?

&nbsp;

# Userelationship

**David:** O processo de ativação e desativação dos relacionamentos traz muito a questão de um poder manual, de alimentar o nosso poder de criação de visualizações.

Porém, pensando nisso, a *Microsoft* estruturou uma função DAX que nos permite ativar esses relacionamentos durante a criação: a função `USERELATIONSHIP`.

Ela tem basicamente 2 parâmetros. No primeiro deles, vamos inserir uma das colunas que queremos relacionar; e no segundo, a outra coluna que também queremos relacionar.

> **Por exemplo**: no nosso caso, temos a tabela `Calendário`, a qual contém a coluna `DataKey`; e a tabela `Vendas`, com as colunas de pedidos ou de entregas. Poderíamos então colocar a coluna de entregas em um dos parâmetros e a de data em outro.

**Daniel:** Perfeito, David! Agora que entendemos a estrutura, poderíamos trazer essa função DAX e comparar tanto os pedidos quanto as entregas; podíamos criar outro visual para comparar esses dois resultados utilizando a função. O que você acha?

**David:** Eu acho ótimo! Para começar, como vamos criar algumas medidas, manteremos a boa prática de criar uma tabela apenas para elas.

Para criá-la, vamos na guia "Modelagem", na barra superior da ferramenta, e selecionar a opção "**Nova tabela**". Feito isso, vamos renomeá-la de "Tabela" para "Medidas" através da caixa de texto e pressionar "Enter". A partir desse momento, todas as fórmulas que criarmos estarão nesse campo.

Clicando com o botão direito sobre a seção "Medidas" no menu lateral direito ("Campos"), selecionaremos a opção "Nova medida". Automaticamente, será aberto um campo para inserirmos essa medida (`Medida =`).

Em seguida, vamos teclar "Ctrl + `+`" para facilitar a visualização do campo, e no lugar de `Medida` colocaremos `Total entregas`.

Nesse campo, vamos basicamente contar as linhas da tabela `Vendas` com base nesse relacionamento, o que facilitará nosso processo. Para isso, criaremos a função `CALCULATE`, que nos permitirá fazer essa contagem com base em algum contexto.

```java
Total entregas = CALCULATE(
```

Dentro da função `CALCULATE`, utilizaremos a função `COUNTROWS` para contar o total de linhas. Nela, definimos de qual tabela a contagem será feita como primeiro parâmetro; nesse caso, será a tabela `Vendas`.

```java
Total entregas = CALCULATE(
                    COUNTROWS(Vendas)
```

Como segundo parâmetro da função, colocaremos justamente a função `USERELATIONSHIP`, que nos permite ativar o relacionamento.

Nesse caso, a função pede como primeiro parâmetro a coluna `DataKey` da tabela `Calendário`. Já no segundo parâmetro, como temos as entregas, colocaremos a ativação com a coluna `EntregaDataKey` da tabela `Vendas`. Feito isso, fechamos os parênteses da função `CALCULATE` e pressionamos "Enter".

```java
Total entregas = CALCULATE(
                    COUNTROWS(Vendas),
                    USERELATIONSHIP('Calendário'[DataKey],Vendas[EntregaDataKey])
)
```

Temos a nossa primeira medida criada!

Para fazer a comparação, vamos copiar o código já estruturado ("Ctrl + C"); clicar com o botão direito sobre a tabela "Medidas" no menu lateral "Campos"; e selecionar a opção "Nova medida". No entanto, essa nova medida será em relação aos pedidos.

Em seguida, vamos colar o código copiado ("Ctrl + V") e alterar apenas o nome de `Total entregas` para `Total pedidos`. Além disso, na nossa função, onde temos a referência da coluna `EntregaDataKey`, colocaremos `PedidoVendaDataKey`. Feito isso, basta pressionar "Enter" novamente.

```java
Total pedidos = CALCULATE(
                    COUNTROWS(Vendas),
                    USERELATIONSHIP('Calendário'[DataKey],Vendas[PedidoVendaDataKey])
)
```

Assim, temos as duas medidas estruturadas. O próximo passo é criar os *cards* (cartões) para verificar se está tudo correto. No primeiro cartão criado, adicionamos a medida "Total entregas"; já no segundo, adicionamos a medida "Total pedidos".

![Dois canvas retangulares brancos dispostos horizontalmente na área "Relatório" do Power BI. O primeiro, à esquerda, contém a inscrição "40 Mil" em preto, seguida do texto "Total entregas" em cinza. O segundo, à direita, contém a inscrição "41 Mil" em preto, seguida do texto "Total pedidos" em cinza.](../_resources/049cfc15-4f4a-41ab-a3bc-d5cc30c1.png)

> Note que os formatos exibidos estão um pouco diferentes, em números inteiros. Para alterar, clicamos sobre as medidas "Total entregas" e "Total pedidos" no menu lateral "Campos".
> 
> Na faixa de opções, há um campo de **formatação**; vamos alterá-la de "Número inteiro" para "Número decimal", adicionar 2 casas, e verificar o resultado.
> 
> ![Dois canvas iguais aos descritos anteriormente dispostos lado a lado, porém o canvas à esquerda contém a inscrição "40,43 Mil", enquanto o da direita contém a inscrição "40,96 Mil".](../_resources/7ac16775-aca5-4b0b-a91b-a9d7493d.png)

Dessa forma, temos as medidas criadas.

**Daniel:** Observe que o número retornado como "Total entregas" realmente corresponde ao número que tínhamos encontrado anteriormente, usando o relacionamento de forma manual.

**David:** Exatamente, Daniel! Temos o ano de 2020 filtrado e essas medidas são filtradas de acordo com o ano em questão. Dessa forma, conseguimos encontrar justamente o mesmo resultado.

**Daniel:** Sendo assim, utilizando a função `USERELATIONSHIP`, não precisamos nos preocupar com quem está ativo ou inativo. Colocamos apenas a função e ela mesma faz o trabalho para nós!

**David:** Exatamente! Inclusive, se analisarmos o modelo agora, o único relacionamento ativo será o de `PedidoVendaDataKey`com `DataKey`. Porém, no nosso canvas, temos ambos os relacionamentos acontecendo simultaneamente.

**Daniel:** Perfeito. Nesse momento, temos o nosso modelo totalmente estruturado, aprendemos a trabalhar com os relacionamentos ativos e inativos, e a otimizar a função DAX.

A partir de agora, vamos pensar um pouco na pessoa que irá utilizar somente a parte do canvas, ou seja, falaremos sobre o ***self-service* BI**.

> Como devemos estruturar o nosso modelo para que a pessoa ,somente clicando e arrastando os visuais, consiga usufruir dele da melhor forma possível?
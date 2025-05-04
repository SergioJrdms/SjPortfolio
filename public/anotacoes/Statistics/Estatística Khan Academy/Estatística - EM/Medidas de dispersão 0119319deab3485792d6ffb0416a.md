---
title: Medidas de dispersão 0119319deab3485792d6ffb0416a0054
updated: 2024-02-21 21:15:48Z
created: 2024-02-21 18:16:19Z
---

# Medidas de dispersão

Created: February 13, 2024 6:22 PM
Objetivo: Conhecer as principais medidas de dispersão (amplitude total, variância e desvio-padrão); entender como calculá-las em diferentes conjuntos de dados (população e amostras); representar de maneira resumida (box-plot) e dispersa (scatterplots) os dados de uma série.
Status: Done

# **A ideia de dispersão e desvio-padrão**

O desvio-padrão mede a dispersão de uma distribuição de dados. **Quanto mais dispersa for uma distribuição de dados, maior será seu desvio-padrão.**

Por exemplo, a distribuição azul de baixo tem um desvio-padrão (DP) maior do que a distribuição verde de cima:

![Untitled](../../../_resources/Untitled-3.png)

É interessante notar que o desvio-padrão não pode ser negativo. Um desvio-padrão perto de 0 indica que os pontos tendem a estar próximos da média (mostrada pela linha pontilhada). Quanto mais longe os pontos estiverem da média, maior será o desvio-padrão.

Em termos práticos, uma alta dispersão em torno da média pode indicar uma falta de consistência nos dados, uma ampla variedade de valores ou uma distribuição assimétrica. Pode também sugerir que os dados são mais difíceis de prever ou que há uma influência de fatores externos não considerados na análise.

Nota: 

Amplitude = diferença entre maior e menor valor de um rol de dados.

Variância populacional (relacionada ao desvio padrão) =  pegar cada elemento do rol de dados, subtrair a média, elevar ao quadrado, somar tudo e dividir pela quantidade de dados.

Desvio padrão = simplesmente a raiz quadrada da variância. 

# **Cálculo passo a passo do desvio-padrão**

A fórmula para o desvio-padrão (DP) é:

![Untitled](../../../_resources/Untitled%201-3.png)

em que $\sum$ significa "somatório", $x$ é um valor do conjunto de dados, $\mu$ é a média do conjunto de dados e $N$ é o número de dados na população.

A fórmula do desvio-padrão pode parecer confusa, mas ela vai fazer sentido depois de a desmembrarmos. Segue uma breve amostra dos passos seguir:

**Etapa 1:** calcular a média.

**Etapa 2:** calcular o quadrado da distância entre cada ponto e a média.

**Etapa 3:** somar os valores da Etapa 2.

**Etapa 4:** dividir pelo número de pontos.

**Etapa 5:** calcular a raiz quadrada.

---

# **Desvio-padrão (população)**

## **Variância de uma população**

Relembrando a variância populacional é uma medida da dispersão de um grupo de pontos de dados. Especificamente, ela quantifica o desvio quadrático médio da média. Portanto, se todos os pontos estiverem muito próximos da média, a variância será pequena; se os pontos de dados estiverem espalhados por um grande intervalo, a variância será maior.

Para obter a variância populacional, pegamos cada termo da população, deles, subtraímos a média populacional, elevamos ao quadrado e faremos isso para todos os termos e o resultado dessa soma  dividimos pela quantidade de termos em nosso rol de dados:

![Untitled](../../../_resources/Untitled%202-1.png)

Note na imagem acima, que na parte superior temos como fazemos a variância populacional, pegamos a soma da subtração dos elementos pela média populacional (6) elevada ao quadrado e dividimos pela quantidade de dados em nosso rol. Já na parte inferior temos a fórmula da variância populacional.

## **Desvio-padrão da população**

Visto a variância da população, agora veremos o desvio-padrão da população. Relembrando, o desvio-padrão da população é uma medida da variação existente entre os dados de uma população. É uma forma de quantificar a dispersão dos dados a partir de sua média. Um desvio-padrão pequeno significa que os dados estão geralmente mais próximos da média, enquanto um desvio-padrão grande significa que os dados estão mais dispersos.

![Untitled](../../../_resources/Untitled%203-1.png)

### **Você pode se perguntar, qual a diferença da variância e do desvio padrão sendo que os dois medem a distância dos dados da média? Veja abaixo:**

O desvio padrão é a raiz quadrada da variância. Ele fornece uma medida da dispersão dos dados em torno da média na mesma unidade de medida dos dados originais. O desvio padrão é frequentemente preferido porque está na mesma escala que os dados originais e é mais fácil de interpretar.

Em resumo, a principal diferença entre variância e desvio padrão é que a variância é uma medida de dispersão ao quadrado, enquanto o desvio padrão é a raiz quadrada da variância e, portanto, está na mesma escala dos dados originais. O desvio padrão é mais utilizado na prática devido à sua interpretabilidade direta em relação aos dados originais.

# Desvio Padrão (Amostral)

Qual a diferença do desvio padrão e amostragem amostral e populacional? A diferença é minima porém gera grandes diferenças. E está no $N$ de nossa fórmula. Na fórmula amostral, usamos $n - 1$

em vez de $N$ para corrigir o viés da estimativa da variância amostral, tornando-a uma estimativa melhor da variância populacional. Isso é conhecido como correção de Bessel.

## Variância Amostral

Para obtermos uma variância mais próxima da variância real, temos que seguir o mesmo passo a passo que seguiríamos caso fizéssemos o calculo da variância populacional, porém invés de dividirmos pela quantidade de elementos, dividiremos pela quantidade de elementos - 1. Mas por que? Quando fazemos a variância amostral dividindo por N elementos invés de n - 1, estamos subestimando nossa variância populacional.
 

Se não usássemos a correção de Bessel e simplesmente dividíssemos pela contagem total de observações *n*, poderíamos subestimar a variabilidade real da população. A correção de Bessel ajusta isso, garantindo que a estimativa da variância seja menos tendenciosa e mais próxima da verdadeira variabilidade populacional.

Para uma visão geral e revisão de Desvio-Padrão e Variância populacional e amostra, [clique aqui](https://pt.khanacademy.org/math/em-mat-estatistica/x5d13d3b4b5b8c419:medidas-de-dispersao/x5d13d3b4b5b8c419:desvio-padrao-amostra/a/population-and-sample-standard-deviation-review). 

---

# **Faixa interquartil (FIQ)**

A FIQ descreve o 50% central dos valores quando ordenados do menor para o maior. Para encontrar a faixa interquartil (FIQ), primeiro encontra-se a mediana (valor do meio) da menor e da maior metade dos dados. Esses valores são o quartil 1 (Q1) e o quartil 3 3 (Q3). A FIQ é a diferença entre Q3 e Q1.

A amplitude e a faixa interquartil (FIQ), ambas, medem a "dispersão" em um conjunto de dados. Olhar a dispersão nos leva a ver quanto os dados variam. A amplitude é uma forma rápida de se ter uma ideia da dispersão. Calcular a FIQ demora mais tempo, mas, às vezes, ela fornece informações mais úteis sobre a dispersão.

Faixa interquartil é a quantidade da dispersão no meio, 50%, de um conjunto de dados. Em outras palavras, é a distância entre o primeiro quartil (Q1) e o terceiro quartil (Q3)

$$
\text{FIQ}=\text{Q}_3-\text{Q}_1
$$

A FIQ é calculada assim:

**Etapa 1:** coloque os dados em ordem crescente.

**Etapa 2:** encontre a mediana. Se o número de dados for ímpar, a mediana será o dado do meio. Se o número de dados for par, a mediana será a média dos dois dados do meio.

**Etapa 3:** encontre o primeiro quartil (Q1). O primeiro quartil é a mediana dos dados à esquerda da mediana na lista ordenada.

**Etapa 4:** encontre o terceiro quartil (Q3). O terceiro quartil é a mediana dos dados à direita da mediana na lista ordenada.

**Etapa 5:** calcule a FIQ subtraindo Q1 - Q3.

### **Exemplo**

As notas das redações dos alunos da Sra. Fenchel seguem uma escala de 6 pontos.

**Calcule a FIQ destas notas:**
1, 3, 3, 3, 4, 4, 4, 6, 6

**Etapa 1:** os dados já estão em ordem.

**Etapa 2:** encontre a mediana. Há 9 notas, portanto a mediana é a nota do meio. A mediana é 4.

**Etapa 3:** encontre Q1, que é a mediana dos dados à esquerda da mediana.

Há um número par de dados à esquerda da mediana, então precisamos calcular a média dos dois dados do meio.

1, **3**, **3**, 3

$$
\text{Q}_1=\dfrac{3+3}{2}=3
$$

O primeiro quartil é 3.

**Etapa 4:** encontre Q3, que é a mediana dos dados à direita da mediana.

Há um número par de dados à direita da mediana, então precisamos calcular a média dos dois dados do meio.

4, **4**, **6**, 6

$$
\text{Q}_3=\dfrac{4+6}{2}=5
$$

O terceiro quartil é 5.

**Etapa 5:** calcule a FIQ.

$$
\begin{aligned} \text{FIQ} &= \text{Q}_3-\text{Q}_1 \\\\ &= 5-3 \\\\ &= 2 \end{aligned}
$$

**A FIQ é 2 pontos.**

---

# Box-Plot

Um diagrama de caixa — também conhecido como diagrama de caixa e bigodes — exibe o resumo de cinco números de um conjunto de dados. O resumo de cinco números é composto pelo mínimo, primeiro quartil, mediana, terceiro quartil, e máximo.
Em um diagrama de caixa, desenhamos uma caixa do primeiro quartil ao terceiro quartil. Uma reta vertical passa pela caixa na mediana. Os bigodes saem de cada quartil para o mínimo ou para o máximo.

![Untitled](../../../_resources/Untitled%204-1.png)

![Untitled](../../../_resources/Untitled%205-1.png)

## **Interpretação dos quartis**

O resumo de cinco números divide os dados de um conjunto em seções que contêm, cada uma, aproximadamente 25% dos dados desse conjunto.

![Untitled](../../../_resources/Untitled%206.png)

### **Exemplo: como interpretar os quartis**

**Aproximadamente, que porcentagem das caixas de uvas passas pesava mais de 29 gramas?**

Como $Q_1=29$, cerca de 25% dos dados são inferiores a 29, e cerca de 75% são superiores a 29.

![Untitled](../../../_resources/Untitled%207.png)

Aproximadamente 75% das caixas de uvas passas pesavam mais de 29 gramas.

### Leitura de Box-Plot:

![Untitled](../../../_resources/Untitled%208.png)

[Explicação](https://pt.khanacademy.org/math/em-mat-estatistica/x5d13d3b4b5b8c419:medidas-de-dispersao/x5d13d3b4b5b8c419:diagrama-de-caixas-box-plot/v/reading-box-and-whisker-plots)

### Interpretação do Box-Plot:

> Nota: Nem sempre valores minimos e máximos são valores únicos.
> 

![Untitled](../../../_resources/Untitled%209.png)

[Explicação](https://pt.khanacademy.org/math/em-mat-estatistica/x5d13d3b4b5b8c419:medidas-de-dispersao/x5d13d3b4b5b8c419:diagrama-de-caixas-box-plot/v/interpreting-box-plots)

Para uma visão geral e revisão sobre Box-Plots, [clique aqui](https://pt.khanacademy.org/math/em-mat-estatistica/x5d13d3b4b5b8c419:medidas-de-dispersao/x5d13d3b4b5b8c419:diagrama-de-caixas-box-plot/a/box-plot-review).

---

# **Discrepância estatística (outliers)**

## **Como identificar outliers usando a regra 1,5xFIQ**

Um outlier é um dado que se encontra fora do padrão geral de uma distribuição.

A distribuição abaixo mostra as notas de 19 candidatos em um teste para tirar a carteira de motorista. Quantos outliers é possível ver?

![Untitled](../../../_resources/Untitled%2010.png)

Algumas pessoas poderiam dizer que há 5 outliers, mas outras poderiam discordar e dizer que há

3 ou 4 outliers. Os estatísticos desenvolveram diversas maneiras de identificar o que pode e o que não pode ser considerado um outlier.

Uma regra bastante usada afirma que um dado é um outlier quando ele é maior que $1{,}5\cdot \text{FIQ}$ acima do terceiro quartil ou abaixo do primeiro quartil. Em outras palavras, outliers baixos estão abaixo de $\text{Q}_1-1{,}5\cdot\text{FIQ}$ e outliers altos estão acima de $\text{Q}_3+1{,}5\cdot\text{FIQ}$.

Vamos experimentá-la na distribuição acima.

### **Etapa 1) Encontre a mediana, os quartis e a faixa interquartil**

Aqui estão listadas as 19 notas.

**5, 7, 10, 15, 19, 21, 21, 22, 22, 23, 23, 23, 23, 23, 24, 24, 24, 24, 25**

**Qual é a mediana?**

Como 19 é ímpar, a mediana será a nota do centro, com 9 pontos abaixo dela e 9 pontos acima dela.

**5, 7, 10, 15, 19, 21, 21, 22, 22, 23, 23, 23, 23, 23, 24, 24, 24, 24, 25**

![Untitled](../../../_resources/Untitled%2011.png)

**Qual é o primeiro quartil?**

O primeiro quartil é o ponto que fica no centro das 9 notas abaixo da mediana. Como 9 é ímpar, ele será a nota que tem 4 notas abaixo e 4 notas acima dele.

**5, 7, 10, 15, 19, 21, 21, 22, 22, 23, 23, 23, 23, 23, 24, 24, 24, 24, 25**

![Untitled](../../../_resources/Untitled%2012.png)

**Qual é o terceiro quartil?**

O terceiro quartil é o ponto que fica no centro das 9 notas acima da mediana. Como 9 é ímpar, ele será a nota que tem 4 notas abaixo e 4 notas acima dele.

> Nota: A faixa interquartil (FIQ), também conhecida como amplitude interquartil, é uma medida de dispersão estatística que representa a metade central dos dados em um conjunto ordenado. Ela é calculada como a diferença entre o terceiro quartil (Q3) e o primeiro quartil (Q1).
> 

**5, 7, 10, 15, 19, 21, 21, 22, 22, 23, 23, 23, 23, 23, 24, 24, 24, 24, 25**

![Untitled](../../../_resources/Untitled%2013.png)

**Qual é a faixa interquartil?**

$$
\text{FIQ}=\text{Q}_3-\text{Q}_1=24-19=5
$$

# **Etapa 2) Calcule $1{,}5\cdot\text{FIQ}$ abaixo do primeiro quartil e verifique se há outliers baixos.**

**Calcule $\text{Q}_1-1{,}5\cdot\text{FIQ}$**

$$
\begin{aligned} \text{Q}_1-1{,}5\cdot\text{FIQ} &=19-1{,}5(5) \\\\&=19-7{,}5 \\\\&=11{,}5\end{aligned}
$$

**Quantos pontos de dados podemos considerar outliers baixos?**

![Untitled](../../../_resources/Untitled%2014.png)

Qualquer ponto abaixo de $\text{Q}_1+1{,}5\cdot\text{FIQ}=11{,}5$ é um outlier baixo. Examine de novo a distribuição para ver quantos pontos de dados estão abaixo desta marca.

![Untitled](../../../_resources/Untitled%2015.png)

**Há 3 notas abaixo de 11,5 então há 3 outliers baixos.**

# **Etapa 3) Calcule $1{,}5\cdot\text{FIQ}$ acima do terceiro quartil e verifique se há outliers altos.**

**Calcule $\text{Q}_3+1{,}5\cdot\text{FIQ}$**

$$
\begin{aligned} \text{Q}_3+1{,}5\cdot\text{FIQ} &=24+1{,}5(5) \\\\&=24+7{,}5 \\\\&=31{,}5\end{aligned}
$$

**Não há notas acima de 31,5 então não há outliers altos.**

# **Bônus de aprendizagem: exibição de outliers em diagramas de caixa**

Diagramas de caixa frequentemente exibirão outliers como pontos separados do resto do diagrama.

Este é um diagrama de caixa da distribuição de cima que *não* mostra outliers.

![Untitled](../../../_resources/Untitled%2016.png)

Este é um diagrama de caixa da mesma distribuição, mas que *exibe* os outliers.

![Untitled](../../../_resources/Untitled%2017.png)

Observe como os outliers são exibidos como pontos e o bigode da caixa teve que mudar. O bigode se estende até o ponto mais distante do conjunto de dados que não é considerado um outlier, ou seja, o 15.

E este é o conjunto de dados original, mostrado novamente para facilitar a comparação.

![Untitled](../../../_resources/Untitled%2018.png)

---

# Gráfico de Dispersão

Gráficos de dispersão são representações de dados de duas variáveis numéricas em um gráfico. Eles são utilizados para visualizar a relação entre duas variáveis e identificar possíveis correlações entre elas. Os dados são exibidos como uma coleção de pontos, cada um com o valor de uma variável determinando a posição no eixo horizontal e o valor da outra variável determinando a posição no eixo vertical.

Para entender um gráfico de dispersão, você pode observar:

1. **Padrão geral**: Se os pontos estão concentrados em uma linha ou em uma área específica, isso indica uma relação forte entre as variáveis. Se os pontos estão dispersos aleatoriamente, isso indica uma relação fraca ou nula entre as variáveis.
2. **Tendência linear**: Se os pontos parecem seguir uma linha, isso indica uma relação linear entre as variáveis. Se os pontos parecem seguir uma curva, isso indica uma relação não linear entre as variáveis.
3. **Correlação positiva ou negativa**: Se os pontos se movimentam em direção à diagonal principal do gráfico (da esquerda para a direita e do cima para baixo), isso indica uma correlação positiva entre as variáveis. Se os pontos se movimentam em direção à diagonal inversa (da direita para a esquerda e do baixo para cima), isso indica uma correlação negativa entre as variáveis.
4. **Valores atípicos**: Se existirem pontos que estão muito distantes dos outros pontos, isso indica valores atípicos ou outliers.
5. **Distribuição dos dados**: Se os pontos estão concentrados em uma área específica, isso indica que os dados são distribuídos de forma concentrada. Se os pontos estão dispersos aleatoriamente, isso indica que os dados são distribuídos de forma uniforme.

![Untitled](../../../_resources/Untitled%2019.png)

## **intuição sobre o coeficiente de correlação**

O coeficiente de correlação nos indica a qualidade de um modelo linear, é uma medida estatística que indica a força e a direção da relação entre duas variáveis. Ele varia de -1 a 1, onde -1 indica uma correlação negativa perfeita, 0 indica nenhuma correlação e 1 indica uma correlação positiva perfeita.

Uma correlação positiva significa que, à medida que uma variável aumenta, a outra também aumenta. Por exemplo, a altura e o peso de uma pessoa têm uma correlação positiva, pois, em geral, pessoas mais altas tendem a pesar mais. Já uma correlação negativa significa que, à medida que uma variável aumenta, a outra diminui. Por exemplo, a quantidade de horas de sono e o nível de estresse têm uma correlação negativa, pois, em geral, quanto mais horas de sono uma pessoa tem, menor é o seu nível de estresse.

O coeficiente de correlação é uma medida importante para entender a relação entre duas variáveis, mas é importante lembrar que correlação não implica causalidade. Ou seja, apenas porque duas variáveis estão correlacionadas, não significa que uma causa a outra.

![Untitled](../../../_resources/Untitled%2020.png)

## Correlação e Causalidade

A correlação refere-se à medida da relação entre duas variáveis, indicando a força e a direção dessa relação. Por outro lado, a causalidade expressa a relação em que uma variável causa um efeito em outra variável. É importante ressaltar que, embora a correlação e a causalidade possam coexistir, a correlação não implica causalidade. Em outras palavras, apenas porque duas variáveis estão correlacionadas, não significa que uma cause a outra. A causalidade envolve uma relação de causa e efeito, a qual deve ser estabelecida por meio de evidências e métodos apropriados.

Causalidade significa que A causa B e Correlação significa que A e B podem ser observados juntos.
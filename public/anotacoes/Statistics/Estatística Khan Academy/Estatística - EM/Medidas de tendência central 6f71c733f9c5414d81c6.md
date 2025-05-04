---
title: Medidas de tendência central 6f71c733f9c5414d81c6640c1f3e547c
updated: 2024-02-21 21:15:48Z
created: 2024-02-21 18:16:19Z
---

# Medidas de tendência central

Created: February 13, 2024 6:22 PM
Objetivo: Conhecer as principais medidas de tendência central (média, mediana e moda) de uma série dados; entender como calculá-las e escolher aquela que melhor representa uma característica de um conjunto de dados.
Status: Done

# **Média, mediana e moda**

Média, mediana e moda são diferentes medidas de centro em um conjunto de dados numéricos. Cada uma delas busca resumir um conjunto de dados com um único número para representar um dado "típico" desse conjunto.

**Média:** o número "médio"; é encontrado somando-se todos os dados e dividindo pelo número de dados.

**Mediana:** o número do centro; é encontrado ordenando-se todos os dados e escolhendo o que está no centro (ou, se houver dois números no centro, calculando-se a média desses dois números).

**Moda:** o número mais frequente — ou seja, o número que aparece o maior número de vezes.

# **Como calcular a média**

Existem muitos tipos diferentes de média, mas, normalmente, quando as pessoas falam em média, elas estão falando de média aritmética.

A média aritmética é a soma de todos os dados, dividida pelo número de dados.

![Untitled](../../../_resources/Untitled-4.png)

A mesma fórmula escrita de maneira mais formal é:

![Untitled](../../../_resources/Untitled%201-4.png)

---

# **Investigando as medidas de tendência central**

As médias são mais sensíveis aos valores extremos (tanto negativos quanto positivos), chamamos esses valores de outliers. As médias podem ser enviesadas por esses valores muito altos ou baixos, fazendo com que nossa média seja deslocada tanto para a direita (valores positivos) quanto para a esquerda (valores megativos), por isso, quanto temos outliers em nossos dados, usamos a média, por não ser sensíveis a tais valores.

## **Média como o ponto de equilíbrio**

Invés de somar e dividir, podemos pensar em como os números estão distribuídos ao redor da média. Por exemplo: {1, 3, 5} - A média seria 3, os números estão ao redor da média.

![Untitled](../../../_resources/Untitled%202-2.png)

Podemos pensar na média como **o ponto de equilíbrio**, que é uma maneira elegante de dizer que a distância total da média até os pontos abaixo dela é igual à distância total da média até os pontos acima dela.

A média de {2, 3, 4, 5, 6} é 4. Podemos ver que a distância total da média até os pontos abaixo dela é igual à distância total da média até os pontos acima dela, porque 1 + 2 = 1 + 2:

![Untitled](../../../_resources/Untitled%203-2.png)

Sempre será verdade que a distância total abaixo da média é igual à distância total acima da média. Acontece que é mais fácil perceber isso em alguns conjuntos de dados que em outros.

Para mais sobre média: [Média como ponto de equilíbrio](https://pt.khanacademy.org/math/em-mat-estatistica/x5d13d3b4b5b8c419:medidas-de-tendencia-central/x5d13d3b4b5b8c419:investigando-as-medidas-de-tendencia-central/a/mean-as-the-balancing-point).
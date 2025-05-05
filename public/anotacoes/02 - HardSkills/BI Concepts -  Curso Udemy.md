---
title: BI Concepts -  Curso Udemy
updated: 2024-08-08 13:45:25Z
created: 2024-05-09 21:17:32Z
latitude: -23.55051990
longitude: -46.63330940
altitude: 0.0000
---

[toc]

## Arquitetura do Ambiente de BI

![e6d5b2b1b1e121422c7c971b26397c0f.png](../_resources/e6d5b2b1b1e121422c7c971b26397c0f.png)

**IMPORTANTE: CONHECER OS DADOS, parte mais importante de um projeto de BI. Entender o quebra cabeças e ir montando o mesmo.**

A organização de tabelas deve seguir uma sequencia das que menos necessitam de outras tabelas até as que mais necessitam.

## Conceitos

![b1f449e55aae68483c2450a26d4c469e.png](../_resources/b1f449e55aae68483c2450a26d4c469e.png)

![f0414f445b1fe1360c9e39423083fcea.png](../_resources/f0414f445b1fe1360c9e39423083fcea.png)

![8355bd1cee8fa0246e09e2797edb163d.png](../_resources/8355bd1cee8fa0246e09e2797edb163d.png)

&nbsp;

> **NÃO TEM BI SEM ETL**

**![ccbb13c83fce0253bb3d29419d4d167e.png](../_resources/ccbb13c83fce0253bb3d29419d4d167e.png)**

**![4389d282851aa805c2b62c9d8e572484.png](../_resources/4389d282851aa805c2b62c9d8e572484.png)**

**![537695273f7de00177ae2554b23d259d.png](../_resources/537695273f7de00177ae2554b23d259d.png)**

&nbsp;

**![8d178bdea42ab07a66d40d2f1b327eaf.png](../_resources/8d178bdea42ab07a66d40d2f1b327eaf.png)**

**Dados organizados por assunto e não por aplicação!!!! Cada DataMart é um assunto.**

&nbsp;

\*\*![4ce33c582824f244dcf103145534407c.png](../_resources/4ce33c582824f244dcf103145534407c.png)  
\*\*Área de Staging as vezes pode ser opcional.

Na area de staging os dados são armazenados de forma bruta, sem tranaformações, assim como foram lidos. Isso faz com que não crie uma sobrecarga na OLTP. O DW pode ou nao estar divido em DataMarts dentro de Fato e dimensão:

![2e7b1d26f94602de14535b5931424441.png](../_resources/2e7b1d26f94602de14535b5931424441.png)

![2f413aed6a20cef1f32ab0f12b45a0c8.png](../_resources/2f413aed6a20cef1f32ab0f12b45a0c8.png)  
Data Marts são dividos por assuntos, exemplo: DataMart de Marketing, DataMart de Sales, etc. Os mesmos contém apenas os dados especificos desses assuntos e quem tem acesso são apenas as pessoas desses times especificos.

&nbsp;

## Tabelas Fato e Dimensão

### Tabela Fato

É o que aconteceu em si, a venda, a transação, o que ocorreu.

![dc8bc5b05a69ad38896d27a171f7e99a.png](../_resources/dc8bc5b05a69ad38896d27a171f7e99a.png)  
Nesse exemplo na tabela 1, ela é mais intuitiva, porém nos traz muitos dados, e muitos dados redundantes em formato de texto, o que pode inchar nosso DW. Temos que pensar em velocidade e em armazenar o máximo de volume de dados ocupando o menor espaço possível.

Por isso podemos usar a tabela 2, que usa boas práticas. Embora não seja tão intuitiva, ela será explicada quando tivermos a relação com a tabela de dimensão.

Ao substuir o nome do produto por ID, ocupamos menos caracteres e usamos o tipo inteiro, o qual ocupa menos espaço no DW. A mesma coisa ocorre pro mês. Logo ganhamos espaço e performance.

### Tabela dimensão

![43c5b66ac5c68cdfa9ed99a32b7c4ffd.png](../_resources/43c5b66ac5c68cdfa9ed99a32b7c4ffd.png)

Seguindo o mesmo exemplo anterior, veja que temos o nome do produto apenas 1 vez, invés de várias como vimos antes, e seu respectivo ID o qual aponta para o nome do produto.

### Tabelas Fato e Dimensão juntas

Como explicar fato e dimensão? Pegamos as duas tabelas e fazemos um join:

![8db095e2883b8c946496560891b04f01.png](../_resources/8db095e2883b8c946496560891b04f01.png)

Com o join:

![f4a61fe3b4787b7b70f9e7ac31c2a483.png](../_resources/f4a61fe3b4787b7b70f9e7ac31c2a483.png)

E agora, temos uma informação mais amigável de forma performatica.

## Modelagem

![c5d6a168a091f45eae150497c74f43c2.png](../_resources/c5d6a168a091f45eae150497c74f43c2.png)

![f389fd56f4ef0a843b83eb3c4c59c295.png](../_resources/f389fd56f4ef0a843b83eb3c4c59c295.png)

![c70e14001b5a998f192a0abfb8ba181a.png](../_resources/c70e14001b5a998f192a0abfb8ba181a.png)  
No modelo SnowFlake o importante é a granularidade, "até onde eu quero ver e até o que eu quero ver".

![8387f4f1e7e112f2b1bd810267b51284.png](../_resources/8387f4f1e7e112f2b1bd810267b51284.png)

Acima um outro exemplo melhor de Star Schema, com as dimensões explicando os fatos. Por exemplo, temos o dado de data na tabela fato, logo temos uma tabela de dimensão para explicar esses dados de data, se era fim de semana, qual dia da semana, qual o dia, etc. A<span style="color: #ececec;">s dimensões geralmente são consideradas como o ponto de partida para a análise, pois são elas que fornecem o contexto para entender os fatos. No entanto, os fatos são fundamentais para entender o desempenho e os padrões de negócios, e as dimensões são usadas para analisar e interpretar esses fatos. Portanto, pode-se dizer que as dimensões explicam os fatos.</span>

**Dimensões ajudam a explicar os fatos!!!**

<span style="color: #ececec;">![c40ca49dbc06cd625ccbc7a6abd08f74.png](../_resources/c40ca49dbc06cd625ccbc7a6abd08f74.png)</span>

<span style="color: #ececec;">Star Schema parece ser mais performático. enquanto o Snow Flake parece ser mais detalhado e melhor se pensarmos na análise. Porém devemos pensar em qual será mais aderente ao negócio.</span>

## <span style="color: #ececec;">OLAP e OLTP</span>

<span style="color: #ececec;">![1b09a6e4f5ecfebd74d16e4df36bc642.png](../_resources/1b09a6e4f5ecfebd74d16e4df36bc642.png)</span>

![765b853e0603e0e76df4ede34757e77e.png](../_resources/765b853e0603e0e76df4ede34757e77e.png)  
No OLAP é não Volátil pois precisamos do que já aconteceu, enquanto no OLTP é onde os dados acontecem.

![d754186de8d2f91a572808ec023b7798.png](../_resources/d754186de8d2f91a572808ec023b7798.png)

## Os passos para a modelagem

![e8a5957e2cb61329181fc7299d018697.png](../_resources/e8a5957e2cb61329181fc7299d018697.png)

Se eu tenho um fato ou uma métrica, eu preciso de dimensões, se eu tenho dimensão, qual a granularidade da mesma (drill down ou drill up, abrir informações)? Se temos granularidade precisamos de um agrupamento.

Métricas seriam as métricas de negócio mesmo.

![a877a283824adf3e9fc6aada11e0929b.png](../_resources/a877a283824adf3e9fc6aada11e0929b.png)

Sempre com esse "- realizado", "- previsto", isso ajuda na formação de perguntas e informação.

![453e549d0911f47e031a84dbb4dab6e6.png](../_resources/453e549d0911f47e031a84dbb4dab6e6.png)

Isso num exemplo de vendas.

![8dd7abccc121f56060c270bed617199f.png](../_resources/8dd7abccc121f56060c270bed617199f.png)

No exemplo acima, agrupamos por vendedor, valor e tipo de produto, então o Carlos vendeu no total 200 reais, entre carnes, hortifruti e grãos, onde em cada um desses tipos ele vendeu X valor em reais, que no total da 200. E somando todos os vendedores o total dos totais dos vendedores deu 1000 reais.

Então começamos pela métrica de total das vendas, abrimos pra ver o total por vendedores, abrimos para ver o valor total por vendedor, depois os tipos de produtos e então o valor vendido por tipo de produto para cada vendedor. Abrimos bem os dados para entende-los, Então temos uma métrica inicial e vamos descobrindo como essa métrica se fez, nesse caso com 3 vendedores vendendo carnes, hortifruti e Grãos, e ai temos as outras métricas de valor total por vendedor e valor total por tipo de produto.

Granularidade é o nível de detalhes de informações, até onde queremos ir.

## Todos os conceitos de BI

![dffa1ed156894afb255c1f01d2c8cf72.png](../_resources/dffa1ed156894afb255c1f01d2c8cf72.png)

## PBI

![a2b8451045daacf08e3095c7b22b84b6.png](../_resources/a2b8451045daacf08e3095c7b22b84b6.png)

&nbsp;

**Uma das partes mais importantes de BI - Relacionamentos!!!**

No PBI se eu tenho um campo numérico mas não vou fazer nenhuma operação matemática com ele, podemos transforma-lo para tipo texto, ganhamos performance.

&nbsp;

Dax é para analise e Power Query para transformações  nos dados

# DAX - Intro

![da3fa40c5a763c2dcf60955dac7a4e92.png](../_resources/da3fa40c5a763c2dcf60955dac7a4e92.png)

![d6ff44a12dd55e60e95017989164c673.png](../_resources/d6ff44a12dd55e60e95017989164c673.png)

Métrica é como uma tabela virtual, logo é mais performatica pois consome apenas CPU e não memória que é algo limitado. Sempre que puder, use métricas, torna o processo mt mais rapido.

![4aeb05fa0dcf2e4f4014a1458b0465bb.png](../_resources/4aeb05fa0dcf2e4f4014a1458b0465bb.png)

em dax "&" é para concatenar.

![9ca3f21144433748fd3dd52517b56edf.png](../_resources/9ca3f21144433748fd3dd52517b56edf.png)

# Dax - Agregações e Iterativas

![9a0f2f27edda110cfa5df6cec448ebfd.png](../_resources/9a0f2f27edda110cfa5df6cec448ebfd.png)

![e50f521319618e3b401f160394ce298a.png](../_resources/e50f521319618e3b401f160394ce298a.png)

![dcd09bb83b82246f25c7be2a5b096d3c.png](../_resources/dcd09bb83b82246f25c7be2a5b096d3c.png)

Com isso, podemos criar medidas e ganhar performance.

![91708b6c048ef3faef7db64c153c4e1c.png](../_resources/91708b6c048ef3faef7db64c153c4e1c.png)

![7092c2b393c6f04a5bc21ddfc21f4a22.png](../_resources/7092c2b393c6f04a5bc21ddfc21f4a22.png)

![c9c94493dc62bf60fb0092e6e4f589a1.png](../_resources/c9c94493dc62bf60fb0092e6e4f589a1.png)

# Datas em Dax

![e969d7fd15cc0092ac1658216aac258e.png](../_resources/e969d7fd15cc0092ac1658216aac258e.png)

![e04a905b40ceb59895ffc6b3f7182078.png](../_resources/e04a905b40ceb59895ffc6b3f7182078.png)

# Medidas

![c5b169801f946696457d0cfdf7c46768.png](../_resources/c5b169801f946696457d0cfdf7c46768.png)

![3c469ddc38ddbe317df18d504e0e225f.png](../_resources/3c469ddc38ddbe317df18d504e0e225f.png)

![09fab2e0af5883c07772ad03ed309502.png](../_resources/09fab2e0af5883c07772ad03ed309502.png)

![a3ee500bfbf5aa939c9db47353cb0e89.png](../_resources/a3ee500bfbf5aa939c9db47353cb0e89.png)

![1576a8d1970e7adc245ae2beb109dfb5.png](../_resources/1576a8d1970e7adc245ae2beb109dfb5.png)

# DAX - Inteligência de Tempo (Funções mais importantes do PBI - estudar mais)

![d459029056c6804fbc0dbdc3d389cace.png](../_resources/d459029056c6804fbc0dbdc3d389cace.png)

![363de0bfa636f063c05c78f3a25fe16c.png](../_resources/363de0bfa636f063c05c78f3a25fe16c.png)

![654ccfb049801a65c0866b70f5a9e819.png](../_resources/654ccfb049801a65c0866b70f5a9e819.png)

![d8ecdef19bb1f6d642d24218eccf5d98.png](../_resources/d8ecdef19bb1f6d642d24218eccf5d98.png)

# DAX - Texto

![26519db5cdd2d48788d550e906edfa91.png](../_resources/26519db5cdd2d48788d550e906edfa91.png)

![fbc817baea600a8e8f31fea24fcf1729.png](../_resources/fbc817baea600a8e8f31fea24fcf1729.png)

Concatenate não concatena 3 variaveis, então usar &

&nbsp;

# DAX - Funções de Info

![2b37661761ba4dba3e42306c7d3d62e7.png](../_resources/2b37661761ba4dba3e42306c7d3d62e7.png)

# O Projeto de BI

![b4c7ff85f73c1a76a4874ff6f75c38dd.png](../_resources/b4c7ff85f73c1a76a4874ff6f75c38dd.png)  
Caminho de um projeto de BI

&nbsp;

Definir as necessidades para poder definir as tabelas que usaremos, definindo as tabelas, definir fato e dimensão.  
OLTP (ERP ou Fonte onde acontecem os dados) -> Staging (ETL) -> Divisão em Fato e Dimensão -> OLAP -> PowerBI

&nbsp;

&nbsp;

# SCD

Facilita o relacionamento entre tabelas Fato e Dimensão

![0cfebf76da5f2efc249627db0d6a2230.png](../_resources/0cfebf76da5f2efc249627db0d6a2230.png)

![9ea5abde1b819f39ec7f0f481037f3bf.png](../_resources/9ea5abde1b819f39ec7f0f481037f3bf.png)

## Diferenças entre SCDs

![354d50681944c4c5e5b552adb06e9f9f.png](../_resources/354d50681944c4c5e5b552adb06e9f9f.png)

Esses SCD 1 e 2 são os mais utilizados no dia a dia.

![d670d69c75dd42cb297e5badd2bb7e21.png](../_resources/d670d69c75dd42cb297e5badd2bb7e21.png)  
São menos usados.

![545beb3160db5ee6bead5087660c63d3.png](../_resources/545beb3160db5ee6bead5087660c63d3.png)

&nbsp;

![2d597591cac601ccb5bf6fec6286ef6f.png](../_resources/2d597591cac601ccb5bf6fec6286ef6f.png)

&nbsp;

No grafico de Gauge se eu não tiver a meta de algo, devo multiplicar o valor por algum outro valor ex: nosso cliente quer que a meta do gauge seja de 30% das vendas, logo multiplico o valor de vendas por 1.3

**Para construçao de métricas:**

- **Relevância:** A métrica está diretamente relacionada aos seus objetivos?
- **Acuidade:** A métrica reflete com precisão o que você deseja medir?
- **Confiabilidade:** A métrica é consistente e precisa?
- **Disponibilidade:** Os dados para a métrica estão disponíveis e acessíveis?
- **Simplicidade:** A métrica é fácil de entender e interpretar?
- **Ação:** A métrica leva a ações e decisões concretas?

&nbsp;

# Sobre Métricas

**1\. Compreenda os fundamentos das métricas de BI:**

- **Domine os conceitos básicos:** Familiarize-se com conceitos como dimensionalidade, granularidade, agregação, filtragem e segmentação. Compreenda a diferença entre métricas de fato e métricas dimensionais.
- **Tipos de métricas:** Explore os diferentes tipos de métricas, como médias, somas, contagens, taxas, porcentagens e medidas de desvio. Aprenda quando e como usar cada tipo de métrica de forma eficaz.
- **Hierarquias de métricas:** Entenda como criar hierarquias de métricas para analisar dados em diferentes níveis de granularidade. Aprenda a usar métricas calculadas para derivar novos insights dos dados.

**2\. Concentre-se no contexto do negócio:**

- **Alinhar métricas com objetivos:** Compreenda os objetivos de negócios da organização e como as métricas de BI podem contribuir para alcançá-los. Defina métricas que sejam relevantes, mensuráveis, atingíveis, relevantes e temporizáveis (SMART).
- **Perspectiva do usuário:** Considere as necessidades dos usuários finais ao criar métricas. Certifique-se de que as métricas sejam fáceis de entender e interpretar, e que forneçam informações acionáveis.
- **Histórias de dados:** Utilize storytelling para comunicar insights de forma eficaz através das métricas. Crie visualizações claras e concisas que ajudem os usuários a entender os dados e tomar decisões informadas.

**3\. Desenvolva habilidades analíticas:**

- **Pensamento crítico:** Aprimore suas habilidades de pensamento crítico para avaliar a qualidade e a relevância dos dados. Questione suposições e identifique padrões e tendências nos dados.
- **Análise de causa raiz:** Aprenda a identificar as causas subjacentes dos problemas e usar métricas para monitorar o progresso das iniciativas de melhoria.
- **Modelagem de dados:** Explore técnicas de modelagem de dados para prever tendências futuras e tomar decisões baseadas em dados.

**4\. Pratique e aprenda com os outros:**

- **Experiência prática:** Aplique seus conhecimentos em projetos práticos de BI. Trabalhe com conjuntos de dados reais e use ferramentas de BI para criar métricas e visualizações.
- **Comunidade BI:** Participe de comunidades online e fóruns de BI para se conectar com outros profissionais e aprender com suas experiências.
- **Cursos e treinamentos:** Considere fazer cursos online ou presenciais sobre criação de métricas de BI para aprofundar seus conhecimentos e habilidades.
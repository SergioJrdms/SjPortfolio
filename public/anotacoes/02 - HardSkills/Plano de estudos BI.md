---
title: Plano de estudos BI
updated: 2024-05-09 21:26:57Z
created: 2024-05-06 18:41:53Z
latitude: -23.50152990
longitude: -47.45256030
altitude: 0.0000
---

SQL  
POWER BI - DAX - power query  
ESTATISTICA -> DESCRITIVA E TESTE A/B  
CONHECIMENTO DE BUSINESS - contexto marketing, vendas.  
softskills  
Interpretar  
relacionamento  
entender e propor  
portfolio em case usando métricas de acordo com as areas  
comunicar bem  
Capacidade de traduzir requisitos comerciais em soluções analíticas.  
buscar conhecimentos que sejam impactantes na hora de conversar com um possivel cliente, a abordagem, o que vc pode trazer para ele usando o BI.

> **Ser o guardião dos dados da empresa**  
> <br/>

Um projeto de BI completo, também conhecido como projeto de inteligência de negócios, é um processo composto por diversas etapas interligadas que visam transformar dados brutos em informações acionáveis para auxiliar na tomada de decisões estratégicas em uma organização. As etapas principais de um projeto de BI completo são:

1\. Definição de Objetivos e Escopo:  
Levantamento de necessidades: A primeira etapa crucial é entender claramente os objetivos do negócio e as necessidades dos usuários. Isso envolve entrevistas, workshops e pesquisas para identificar os problemas que o BI deve ajudar a resolver, as perguntas que precisam ser respondidas e as decisões que precisam ser tomadas.  
Definição do escopo: Com base nos objetivos levantados, é necessário definir o escopo do projeto, incluindo as fontes de dados a serem utilizadas, as métricas e indicadores a serem analisados, os tipos de relatórios e dashboards a serem criados e os usuários que terão acesso às informações.

2\. Integração de Dados:  
Identificação de fontes: Nesta etapa, todas as fontes de dados relevantes para o projeto são identificadas, como bancos de dados transacionais, sistemas de CRM, arquivos em planilhas, dados de mídias sociais, entre outros.  
ETL (Extração, Transformação e Carga): Os dados brutos são extraídos das fontes identificadas, transformados para um formato consistente e compatível com a ferramenta de BI escolhida e carregados em um data warehouse ou data lake para análise.  
Qualidade dos dados: A qualidade dos dados é um aspecto fundamental para o sucesso do projeto. É importante verificar a integridade, consistência, precisão e completude dos dados antes de utilizá-los para análise.

3\. Modelagem de Dados:  
Criação do modelo dimensional: O modelo dimensional é construído para representar as relações entre as diferentes entidades (dimensões) presentes nos dados, como clientes, produtos, tempo e vendas.  
Definição de métricas: As métricas são criadas para quantificar os indicadores de desempenho (KPIs) que serão utilizados para avaliar o desempenho da organização em diferentes áreas, como vendas, marketing, finanças e operações.  
Armazenamento de dados: O data warehouse ou data lake é organizado de acordo com o modelo dimensional e as métricas definidas, garantindo um acesso rápido e eficiente aos dados para análise.

4\. Análise e Visualização de Dados:  
Exploração de dados: Técnicas de exploração de dados são utilizadas para identificar padrões, tendências e anomalias nos dados. Isso pode ser feito através de ferramentas como SQL, linguagens de programação (Python, R) ou ferramentas de BI visual.  
Desenvolvimento de dashboards: Dashboards interativos são criados para apresentar os resultados das análises de forma clara e concisa, utilizando gráficos, tabelas e outros recursos visuais.  
Criação de relatórios: Relatórios detalhados são gerados para aprofundar as análises e comunicar os resultados de forma abrangente para diferentes públicos.

5\. Implementação e Governança:  
Implementação da ferramenta de BI: A ferramenta de BI escolhida é instalada, configurada e integrada com o data warehouse ou data lake.  
Treinamento dos usuários: Os usuários finais são treinados para utilizar a ferramenta de BI, navegar pelos dashboards e relatórios, realizar análises e interpretar os resultados.  
Governança de dados: Estabelecem-se políticas e procedimentos para garantir a qualidade, segurança e acesso controlado aos dados, além de monitorar o uso da ferramenta de BI e realizar auditorias periódicas.

6\. Monitoramento e Manutenção:  
Acompanhamento dos KPIs: Os KPIs definidos no projeto são monitorados periodicamente para avaliar o desempenho da organização e identificar áreas que precisam de melhorias.  
Atualização dos dados: Os dados são atualizados continuamente para garantir que as análises estejam sempre com base nas informações mais recentes.  
Aprimoramento das análises: As análises são aprimoradas continuamente com base em novos dados, feedback dos usuários e novas necessidades do negócio.

7\. Cultura Data-Driven:  
Promoção da cultura data-driven: A organização promove uma cultura data-driven, incentivando o uso de dados na tomada de decisões em todos os níveis da empresa.  
Comunicação dos resultados: Os resultados das análises de BI são comunicados de forma eficaz para todos os stakeholders, promovendo a transparência e o engajamento dos colaboradores.  
Tomada de decisões baseada em dados: As decisões estratégicas da organização são tomadas com base em dados e insights gerados pelo BI, aumentando as chances de sucesso e competitividade.

&nbsp;

&nbsp;

<img src="../_resources/6926ceb383acf99bb1aff206cbbff2db.png" alt="6926ceb383acf99bb1aff206cbbff2db.png" width="643" height="255" class="jop-noMdConv"> 

**Fonte de dados**: abrange todos os dados de origem que irão compor as informações do DW. Compreende os sistemas OLTP, arquivos em diversos formatos (XLS, TXT, etc), sistemas de CRM, ERP, entre vários outros.  
<br/>**ETL**: o ETL, do inglês Extract, Transform and Load, é o principal processo de condução dos dados até o armazenamento definitivo no DW. É responsável por todas as tarefas de extração, tratamento e limpeza dos dados, e inserção na base do DW.  
<br/>**Staging Area**: a Staging Area é uma área de armazenamento intermediário situada dentro do processo de ETL. Auxilia a transição dos dados das origens para o destino final no DW.  
<br/>**Data Warehouse**: essa é a estrutura propriamente dita de armazenamento das informações decisivas. Apenas os dados com valor para a gestão corporativa estarão reunidos no DW.  
<br/>**Data Mart**: o Data Mart é uma estrutura similar ao do DW, porém com uma proporção menor de informações. Trata-se de um subconjunto de informações do DW que podem ser identificados por assuntos ou departamentos específicos. O conjunto de Data Marts em conformidade dentro da organização compõe o DW.  
<br/>**OLAP**: o OLAP, do inglês On-line Analytical Processing, na arquitetura de um DW se refere as ferramentas com capacidade de análise em múltiplas perspectivas das informações armazenadas.  
<br/>**Data Mining**: Data Mining ou Mineração de Dados, se refere as ferramentas com capacidade de descoberta de conhecimento relevante dentro do DW. Encontram correlações e padrões dentro dos dados armazenados.  
O fluxo das atividades nessa arquitetura se inicia com a extração dos dados das origens. Esses dados são então armazenados temporariamente na Staging Area, onde são tratados com as regras e padrões predeterminados para então prosseguir para a etapa de carga (Load), em que os dados são carregados no DW. Por fim, essas informações são normalmente consultadas através de ferramentas de análises (OLAP) ou ferramentas de mineração (Data Mining) para encontrar, assim, as respostas e insights necessários para a tomada de decisão.

* * *
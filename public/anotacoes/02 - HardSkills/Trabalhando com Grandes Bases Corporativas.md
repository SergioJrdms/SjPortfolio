---
title: Trabalhando com Grandes Bases Corporativas
updated: 2025-03-11 21:52:33Z
created: 2025-03-10 19:14:46Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

# Tipos de usuários e projetos

## Introdução

Seja muito bem-vindo ao módulo do nosso curso onde vamos abordar a performance no Power BI e a otimização de modelos de dados. Muitos criam relatórios sem se atentar para as práticas que garantem a fluidez do sistema e acabam enfrentando problemas como lentidão. Neste módulo, vamos entender o que está por trás do Power BI e como podemos otimizar o seu uso.

### O Power BI e Seu Surgimento

O Power BI é uma ferramenta da Microsoft lançada em 2015 e era inicialmente voltada aos analistas de negócios. Com o tempo, a TI também começou a usá-la para relatórios gerenciais, centralizando algumas atividades. Hoje temos dois públicos principais para o Power BI: usuários finais de negócio e a equipe de TI.

#### Usuários finais de negócio

- Preocupam-se com a agilidade e acessibilidade para fazer projetos acontecerem.
- Necessitam de rapidez na obtenção de números para decisões de negócios.

#### Usuários de TI

- Preocupam-se mais com segurança, governança e manutenção das informações.

## Tipos de Projetos em Power BI

Trabalhamos com projetos de BI no Power BI de duas formas principais: Projetos Formais e Projetos Informais.

### Projetos Formais

São projetos com escopo bem definido e conduzidos pela equipe de TI. Estes projetos são mais estruturados e voltados para apresentações a diretorias e tomada de decisões a nível empresarial. Os dados são de alta qualidade e a governança é gerida pela TI.

### Projetos Informais

Projetos informais são mais ágeis e destinados a resolver problemas específicos de curto prazo, geralmente realizados pelo usuário final. Eles são caracterizados pela sua rápida montagem e análise e geralmente são descentralizados e menos governados.

#### Híbridos

Existem também casos em que um projeto informal ganha adesão e interesse e acaba sendo levado para um formato mais formal dentro da TI.

## Desafios e Melhores Práticas

### Desafios

- Governo dos dados para garantir qualidade e consistência.
- Evolução do projeto sem perder controle e agilidade.

### Melhores Práticas

- Seguir padrões para minimizar retrabalho e manter a performance em níveis aceitáveis.
- Preocupação com a manutenção futura desde o início do projeto.
- Balancear a velocidade da área de negócio com a segurança e governança da TI.

## Conclusão

Criar um relatório no Power BI é fácil, mas manter uma série de relatórios atualizados e otimizados é um desafio. Precisamos pensar a longo prazo e nos preparar para o crescimento. A meta é evitar que questões como lentidão ou erros nos obriguem a refazer o trabalho, garantindo assim a eficácia dos relatórios para os usuários finais.

Na próxima aula, continuaremos a expandir esses conceitos e aprenderemos sobre técnicas e ferramentas específicas para otimizar os relatórios no Power BI. Um grande abraço e até lá.

* * *

&nbsp;

# Meu relatório está lento, e agora?

## Introdução

O propósito deste ebook é fornecer um guia compreensivo para otimização de performance do Power BI, abordando os principais aspectos que influenciam a velocidade e eficiência dos relatórios gerados por esta poderosa ferramenta de visualização de dados.

## Identificação de Problemas de Performance

### Relatórios Lentos: Diagnóstico Inicial

Antes de mais nada, é crucial entender o contexto no qual a performance está lentidão ocorre - é durante a publicação? Durante o desenvolvimento? Os usuários finais que estão enfrentando essa dificuldade?

## Áreas de Otimização

### Atualização dos Dados: Power Query

#### Entendendo o Power Query

Explicamos a importância do Power Query na atualização e processamento dos dados e como isso afeta a performance geral do relatório.

### Modelo de Dados: Estrutura e Relacionamentos

#### Quantidade de Tabelas e Colunas

Discutimos como um modelo de dados eficiente, com o mínimo de tabelas e colunas possível, é essencial para a performance.

#### Relacionamento entre Tabelas

Analisamos a influência dos relacionamentos entre as tabelas na velocidade de processamento do relatório.

### DAX e Medidas

#### Medidas DAX: Cálculos e Performance

Investigamos o papel das medidas DAX e como elas podem impactar a performance de um relatório.

## Melhores Práticas de Otimização

### Redução do Número de Colunas

Sugestões e técnicas para diminuir a quantidade de colunas em seus modelos de dados para melhorar a performance.

### Valores Únicos nas Colunas

Discussão sobre a importância de reduzir o número de valores únicos nas colunas e seu impacto sobre a velocidade do Power BI.

### Otimização do Desenvolvimento

#### Facilitando o Desenvolvimento no Desktop

Compartilhamos dicas para tornar o desenvolvimento utilizando o Power BI Desktop menos custoso e mais ágil.

#### Foco no Usuário Final

Enfatizamos a necessidade de focar na experiência do usuário final para assegurar que filtros e mudanças de página sejam rápidos e eficientes.

## Considerações Finais

### Importância da Otimização

Concluímos com uma reflexão sobre a importância vital da otimização de performance para a análise de dados e a tomada de decisões baseadas em relatórios de Power BI.

### Desenvolvimento Iterativo

Encorajamos um processo de desenvolvimento iterativo, onde após priorizar a experiência do usuário final, o desenvolvedor deve retornar e ajustar os processos internos para melhorar continuamente a performance.

* * *

&nbsp;

# Modos de conexão: Import x DirectQuery

Olá, seja bem-vindo ao nosso ebook onde abordaremos questões essenciais relacionadas ao desempenho em Power BI. Nós vamos explorar o conceito de conexões de banco de dados, importação de dados versus conexões diretas (Direct Query), e apresentar dicas sobre como trabalhar com grandes volumes de dados, bem como práticas recomendadas para otimizar seu trabalho e garantir a melhor performance de suas análises.

## Capítulo 1: Fundamentos de Conexão e Importação

### Subtópico 1.1: Tipos de Conexão no Power BI

Discutimos dois métodos principais para se conectar aos bancos de dados utilizando Power BI:

- **Importação de Dados**: Dados são trazidos para a memória, funcionando de maneira rápida e eficiente devido à compressão de dados.
- **Conexão Direta (Direct Query)**: Consultas são feitas diretamente no banco de dados, com o servidor processando e retornando os dados requeridos a cada interação.

### Subtópico 1.2: Escolhendo entre Importação e Direct Query

Debate-se a escolha entre importar os dados para a memória ou usar a conexão direta:

- Importação é vista como a opção padrão para desempenho ótimo.
- DirectQuery é considerada uma última opção para resolução de problemas de performance, sendo mais viável para dados em tempo real.

## Capítulo 2: Prática com Bancos de Dados e Power BI

Nas aulas práticas, utilizamos o banco de dados AdventureWorks para demonstrar a importação de dados e o DirectQuery. Observamos que:

### Subtópico 2.1: Importação de Dados em Ação

- Após importar os dados para a memória, o Power BI recebe 11 milhões de linhas, ocupando cerca de 1,8 GB de memória.
- A performance é alta, e um gráfico de vendas por data é renderizado em torno de um segundo.

### Subtópico 2.2: DirectQuery em Ação

- Ao optar pelo DirectQuery, não há dados armazenados na memória - apenas metadados como nomes de colunas e tipos de dados são retidos.
- O arquivo do projeto é significativamente menor, mas a velocidade de resposta é mais lenta, aproximadamente três segundos para exibir o mesmo gráfico de vendas.

## Capítulo 3: Comparando Desempenho entre Importação e DirectQuery

Realizando o Performance Analyzer no Power BI:

- **Importação de Dados**: Tempos de resposta rápidos mesmo com um volume considerável de 11 milhões de linhas.
- **DirectQuery**: Maior lentidão, onde a carga de um gráfico similar demorou várias vezes mais do que na importação.

### Subtópico 3.1: Análise de Desempenho

Explicamos o uso do Performance Analyzer para comparar os tempos de resposta. Demonstramos que:

- Na prática, DirectQuery levou significativamente mais tempo para mostrar os resultados das queries.
- A importação de dados, apesar de demandar mais memória, proveu um melhor desempenho para a análise do usuário.

### Subtópico 3.2: Considerações sobre o volume de dados

- Discutimos as implicações do uso de DirectQuery com altos volumes de dados, bilhões de linhas, e como isso pode afetar o desempenho.
- Abordamos o conceito de modelos mistos e tabelas agregadas como uma solução intermediária no Power BI, combinando a eficiência da memória com a necessidade de se manter dados atualizados.

## Capítulo 4: Conclusão e Recomendações

Fechamos com a ideia de que um desenho inteligente do modelo de dados e uso estratégico das funcionalidades do Power BI são fundamentais para a otimização do desempenho, com ênfase em que a escolha entre importação de dados e DirectQuery deve ser ponderada com atenção às necessidades reais do projeto.

- DirectQuery é aconselhável para dados em tempo real.
- Complexidade e volume de dados exigem técnicas avançadas para manutenção da performance.
- Tabelas agregadas no modelo 'import' com detalhes analíticos no modo DirectQuery representam um caminho a considerar.

* * *

&nbsp;

# Importar views, tabelas, ou query SELECT?

## Introdução

Olá, seja bem-vindo a mais uma aula sobre importação de dados no Power BI. Neste material, iremos abordar diferentes formas de importar dados e as melhores práticas para manter a eficiência e performance do seu trabalho no Power BI.

## Importação de Dados

Quando iniciamos no Power BI, uma das primeiras tarefas é importar os dados com os quais iremos trabalhar. Existem diversas formas de importar dados: tabelas completas de bancos de dados, instruções select ou até mesmo views. Vamos discutir qual dessas estratégias é mais eficiente e em que situações cada uma delas deve ser aplicada.

### Importando Tabelas Completas

Uma maneira simples e direta de importar dados para o Power BI é por meio da importação integral de tabelas de um banco de dados. Essa abordagem é muitas vezes intuitiva, mas pode não ser a mais eficiente, principalmente se estivermos tratando de bases de dados muito grandes.

### Importando com Queries Select

A alternativa a importar tabelas completas é a utilização de instruções select – as chamadas queries. Esse método permite filtrar e selecionar dados específicos antes da importação, o que pode poupar tempo e recursos computacionais. Nessa etapa, é crucial ter conhecimentos em SQL para escrever consultas eficazes.

### Importando Views

Outra estratégia recomendada para importação de dados é utilizar views criadas no banco de dados. As views funcionam como "janelas" que mostram apenas um subset de dados, podendo conter transformações, filtros e cálculos já aplicados. Ela permite que você mantenha a lógica de negócios e o processamento de dados no lado do servidor.

## Qual Método Utilizar?

A escolha do método de importação no Power BI depende de vários fatores:

1.  **Tabelas Completas**: Recomendada quando não há muitas transformações a serem realizadas e quando a tabela não é excessivamente grande.
2.  **Queries**: Ideal quando precisamos de dados específicos e já sabemos como filtrá-los no banco de dados. Atenção para não realizar muitas transformações no Power BI após a importação para não perder performance.
3.  **Views**: Opção robusta para gerenciar lógica de negócios e transformações diretamente no banco de dados, mantendo a organização e facilitando a manutenção.

> Não fazer transformações no PowerQuery. Fazer views.

> Das opções acima a melhor são as Views, pois fazem o mesmo papel do QueryFolding porém com maior facilidade de manutenção. As Views serveriam como um DataMart.

## Performance das Importações

Algo importante a considerar na importação de dados é a performance. No Power BI, transformações aplicadas após a importação ainda serão processadas no banco de dados, e isso é garantido se pudermos visualizar a "consulta nativa" após o filtro aplicado. Se a consulta nativa não estiver disponível, significa que as transformações serão realizadas pelo Power BI na memória, o que pode retardar as atualizações.

## Recomendações Finais

A melhor abordagem em termos de organização e performance é criar um data warehouse, se for possível. Caso contrário, é recomendável manter views no banco de dados, pois isso irá facilitar a manutenção e evitar problemas quando houver alterações no esquema do banco de dados. Em resumo, priorize a criação de views e, se não for viável, opte por importar tabelas completas. Deixe a importação através de queries como uma última opção.

* * *

&nbsp;

# Importância de um Data Warehouse em Projetos de BI

## Introdução

Olá, seja bem-vindo a mais uma aula. Neste material, vamos discutir sobre a importância e a funcionalidade de um **Data Warehouse** em projetos de Business Intelligence (BI), além de apresentar diferentes abordagens e práticas recomendadas.

## Estratégias de Desenvolvimento

Inicialmente, é comum a tendência de importar todas as fontes de dados diretamente para a ferramenta de BI, como o Power BI, sem a criação de um **Data Warehouse**. No entanto, essa abordagem pode levar à criação de um sistema de difícil manutenção e que sobrecarrega a ferramenta de BI.

### Lições Aprendidas com o Crescimento dos Projetos de BI

- Confrontado com a complexidade crescente e com o sistema se tornando um "monstro", reconheci a necessidade de reiniciar o processo de ETL (Extract, Transform, Load).
- A estratégia de não adotar um **Data Warehouse** inicialmente acabou sendo um erro, pois não antecipei os problemas de escalabilidade e manutenção a longo prazo.

## A Importância do Data Warehouse

Um **Data Warehouse** oferece uma série de vantagens, como:

- **Consolidação de Informações**: Une dados de diferentes sistemas e fontes numa única fonte da verdade.
- **Segurança de Acesso**: Previne a concorrência de uso em sistemas de produção, mantendo-os isolados das atividades de análise de dados.
- **Melhora na Performance**: Usar views escritas dentro do **Data Warehouse** é mais eficiente do que importar tabelas diretamente para a ferramenta de BI.

### Processos de ETL e Abordagens Recomendadas

- **Execução Noturna de ETL**: Para evitar interrupções no sistema de produção, os processos de ETL acontecem durante a noite ou de madrugada.
- **Criação de Ambientes Separados**: Geralmente, utiliza-se um ambiente de staging para aplicar transformações antes de enviar os dados ao **Data Warehouse**.

### Projetos Corporativos vs. Projetos Menos Complexos

- **Projetos Corporativos**: Utilizam um **Data Warehouse** e um ambiente de **staging** separado do banco de produção.
- **Projetos Menos Complexos**: Pode-se optar por soluções mais simples, como o uso do **Power BI Dataflows** como área de staging e transformação de dados via Power Query Online.

## Conclusão

Há várias estratégias e ferramentas disponíveis para a implementação de um **Data Warehouse** em projetos de BI. A escolha deve ser baseada nas necessidades específicas do projeto, na complexidade dos dados e nas restrições de recursos. Portanto, é fundamental entender os fundamentos e estabelecer uma arquitetura sólida de dados que facilite a manutenção e a escalabilidade do projeto.

* * *

&nbsp;

# A SUPER importância do Query Folding

A eficiência no processamento de dados em ferramentas de análise e relatórios é vital para a produtividade e obtenção de insights. Este ebook tem como objetivo abordar a importância do Query Folding e como ele influencia a performance em operações com grandes volumes de dados.

## O Conceito de Query Folding

Em sistemas de gestão de bancos de dados, o Query Folding é um recurso que otimiza o processamento de consultas ao delegar tarefas ao servidor de banco de dados. A técnica consiste em empurrar as transformações e filtros aplicados em uma ferramenta de visualização de dados diretamente para a consulta nativa no banco. Isso garante que apenas os dados necessários sejam carregados na memória, economizando recursos e tempo.

### Importância do Query Folding

O Query Folding é essencial para otimizar a performance ao trabalhar com conjuntos massivos de dados. Ao realizar a filtragem e transformação dos dados ainda no servidor, reduz-se drasticamente a quantidade de informações que precisam ser carregadas na memória local da ferramenta de visualização. Isso impacta positivamente em termos de velocidade de processamento e atualização.

#### Garantindo o Processo Ágil

Para validar se o Query Folding está ativo, é recomendável verificar a opção de "exibir consulta nativa" nos passos de transformação da consulta em ferramentas de visualização e relatórios. Quando ativo, este recurso assegura que as transformações definidas estão sendo executadas diretamente no banco de dados, não na memória local.

## Técnicas de Importação de Dados

A escolha do método de importação de dados é crucial. Existem várias abordagens, como a importação via tabela, via consulta (query) ou através de visualizações (views).

### Importação Via Tabela

Esta técnica envolve a importação direta de dados de tabelas específicas do banco de dados. Geralmente é um método rápido, pois as informações já estão em uma forma otimizada para serem lidas e consumidas.

#### Performance na Importação Via Tabela

Na importação via tabela, filtros podem ser aplicados diretamente, fazendo com que a quantidade de dados carregados na memória seja a necessária, sem sobrecarga de informação desnecessária.

### Importação Via Consulta (Query)

Esta técnica envolve escrever consultas específicas para importar dados. Apesar de permitir grande flexibilidade e controle sobre os dados importados, pode não ser o método mais eficiente.

#### Desvantagens da Importação Via Query

Devido à necessidade de varrer grandes quantidades de registros, mesmo aplicando filtros, há um consumo elevado de recursos ao carregar todos esses dados na memória antes de filtrá-los. Isso leva a uma lentidão significativa no processamento e atualização dos dados.

### Importação Via Visualização (View)

Esse método utiliza visualizações criadas no banco de dados que já contêm os filtros e transformações necessários. É um meio termo entre a flexibilidade da query e a eficiência da tabela.

#### Avaliando a Eficiência da View

Ao utilizar views, muitas das transformações e filtros são aplicados no banco de dados, o que reduz a carga na memória local e melhora a velocidade de processamento.

## Comparativo Entre os Métodos

Ao comparar os métodos, torna-se evidente que para grandes volumes de dados, a abordagem via tabela e view são mais eficientes que via query. A utilização do Query Folding é decisiva para maximizar a performance em ambos os casos.

### Caso Prático de Query Folding

Ilustrando com um cenário prático, uma operação que filtra sessenta e um mil registros de um total de onze milhões mostra claramente a vantagem do Query Folding. O processo que leva segundos em uma view pode levar minutos via query devido ao volume de dados manipulados.

## Melhores Práticas para Alta Performance

O ebook termina com recomendações para garantir uma alta performance ao trabalhar com bancos de dados:

- Utilize Query Folding sempre que possível;
- Prefira importar dados via tabela ou view em vez de queries complexas;
- Verifique sempre se a opção de exibição da consulta nativa está presente para confirmar o Query Folding.

Em suma, a escolha adequada do método de importação e a implementação correta do Query Folding farão uma diferença substancial na eficiência do processamento de dados, permitindo a análise ágil e atualização rápida de relatórios.

> A não ser que eu faça toda a transformação via Query na conexão, devo evita-lar e usar Views no lugar.
> 
> Apenas bancos de dados em servidores possuem a possibilidade de se obter Query Folding, como SQL e Oracle, por exemplo. Fique atento a isso, pois transformações em arquivos CSV e Excel podem ser muito mais lentas que transformações em SQL Server.
> 
> Fazer as dimensões e fatos via View e importa-las no PBI.

* * *

&nbsp;

# O PRIMEIRO passo que você precisa fazer no Power Query!

O desempenho do Power BI é afetado diretamente pela quantidade de colunas que você inclui em seu modelo de dados. Vamos entender o porquê e como selecionar as colunas corretas para otimizar o desempenho do seu relatório.

## O Erro Comum: Trazendo Todas as Colunas

É comum o desejo de trazer todas as colunas de um tabela para dentro do Power BI, no entanto, nem sempre isso é necessário ou recomendável.

### Por Que Não Deve-se Importar Tudo?

- **Performance**: Mais colunas significam um modelo de dados mais pesado e pior performance.
- **Usabilidade**: Muitas vezes as colunas extras não são utilizadas e apenas consomem recursos.

> O PowerBI AMA tabelas longas mas ODEIA tabelas largas. Ou seja, não podemos levar muitas colunas, mas podemos levar muitas linhas

## Primeiros Passos ao Importar Tabelas

Antes de tudo, deve-se identificar as colunas essenciais para o seu relatório.

### Como Escolher as Colunas?

1.  Após importar a tabela, acesse a opção "Escolher Colunas".
2.  Desmarque todas as colunas e selecione somente aquelas que são estritamente necessárias.

### Exemplo Prático: Seleção de Colunas

Considere uma tabela de vendas com várias colunas. Ao desmarcar colunas não necessárias:

- Uma descrição do produto pode ser removida se você já possui um código de identificação do produto.
- Evite chaves primárias em tabelas fato, já que elas possuem valores únicos e não são compressíveis.

## Compreendendo a Compressão de Dados

Colunas com 100% de valores distintos são ineficientes, pois não são comprimidas, o que afeta negativamente a performance.

## Dicas para uma Melhor Gestão de Colunas

- **Iniciativa Pessoal**: Mostre primeiro um relatório com o mínimo de dados necessários e só acrescente mais a pedido.
- **Incremento Gradual**: É mais fácil adicionar dados necessários do que retirar depois que já estão sendo usados.

## Conclusão: Menos é Mais

Escolha colunas com consciência e sempre priorize a performance. Ensinar essa mentalidade aos usuários e gestores pode desafiar, mas é crucial para o sucesso do seu projeto em Power BI.

> Lembrando que devemos escolher as colunas já lá na criação das Views.

* * *

&nbsp;

# Onde adicionar novas colunas: Banco, Power Query ou DAX?

## Introdução

Bem-vindo à nossa jornada de aprendizado sobre boas práticas no uso do Power BI. Este ebook tem como objetivo ajudar você a maximizar a performance e eficiência dos seus projetos de BI. Abordaremos uma série de técnicas, começando pela otimização do modelo de dados e indo até dicas avançadas de desenvolvimento.

## Capítulo 1: Otimizando o Modelo de Dados

### Importância das Colunas Necessárias

Discutimos anteriormente a relevância de limitar o número de colunas em nossos modelos. Menos colunas implicam em um modelo mais limpo e um desempenho superior.

### Criando Colunas Calculadas

Quando necessitamos de cálculos adicionais ou concatenações, é vital saber onde estes devem ser realizados: no banco de dados, no Power Query ou utilizando DAX.

#### Colunas Calculadas no Banco de Dados

Sempre que possível, devemos deslocar o processamento de cálculos para o banco de dados. Isso não apenas melhora a performance do Power BI como mantém o modelo de dados mais gerenciável.

#### Exemplo de Concatenação no Banco de Dados

A criação de uma coluna concatenada entre o código do grupo e o nome do grupo pode ser feita diretamente no banco de dados usando a função CONCAT.

### Colunas Calculadas no Power Query

O Power Query é uma ferramenta de ETL que, mesmo não tão robusta quanto integrações tradicionais como o SSIS, oferece flexibilidade para transformações de dados.

#### Ordenação e Compressão no Power Query

O Power Query permite a melhor ordenação das colunas para otimização da compressão, diferentemente das colunas calculadas via DAX.

### Colunas Calculadas no DAX

DAX deve ser considerado como último recurso para criação de colunas calculadas devido à maneira como a compressão de dados é feita e ao impacto no desempenho durante os cálculos.

#### Quando Usar Colunas Calculadas no DAX

Usar DAX é apropriado para agregações ou cálculos que envolvem múltiplas tabelas, pois é mais eficiente do que realizar este tipo de operação no Power Query.

## Capítulo 2: Melhorando o Desempenho de Relatórios

### Estratégias de Filtragem e Compressão

Entender como calcular colunas no Power Query pode afetar a performance do Power BI é essencial para criar relatórios otimizados que filtram e exibem dados rapidamente.

## Capítulo 3: Manutenção e Escalabilidade do Modelo

### Manutenção de Colunas e Agregações

A manutenção do modelo fica simplificada quando se usa agregações e cálculos no lugar certo, seguindo a hierarquia banco de dados > Power Query > DAX.

### Dicas para Escalabilidade

Para tornar nossos modelos escaláveis, precisamos considerar a quantidade de dados e a complexidade dos cálculos para decidir onde estes devem ser realizados.

## Conclusão

Adotar as corretas práticas no uso do Power BI pode significar a diferença entre um projeto de sucesso e um com desempenho insatisfatório. Sempre que possível, faça pré-calculados e agregações no banco, minimize o uso de colunas calculadas no DAX e aproveite o Power Query para transformações de dados intermediárias.

> Sempre que possível eu devo jogar a carga pro banco, pois é lá que terei a melhor performance possível.  
> Quanto mais pronto eu levar os dados, melhor.

* * *

&nbsp;

# Deixando o desenvolvimento mais leve com parâmetros e Atualização Incremental

## Introdução

A realização de lives se tornou uma prática comum no compartilhamento de conhecimento e atualizações de conteúdo. As lives possibilitam interação em tempo real, mas também é essencial oferecer o material em formatos acessíveis posteriormente, como ebooks, que permitem uma revisão mais tranquila e no próprio ritmo do usuário.

## Tópico 1: Entendendo a Atualização Incremental

### O Que é a Atualização Incremental

A **Atualização Incremental** é uma funcionalidade no Power BI que permite atualizar apenas uma porção dos dados - as mais recentes - em vez de processar o banco de dados completo novamente. Isso economiza tempo e recursos computacionais valiosos, otimizando significativamente o processo de atualização de dados.

### Benefícios da Atualização Incremental

- **Eficiência de Tempo:** Ao atualizar apenas partes recentes dos dados, o tempo de processamento se reduz consideravelmente.
- **Otimização de Recursos:** Utiliza melhor os recursos, evitando a necessidade de varrer um banco de dados inteiro.
- **Atualizações Ágeis:** Permite uma resposta mais rápida a mudanças ou inclusão de novos dados.

## Tópico 2: Configurando a Atualização Incremental

### Critérios de Fonte de Dados

Para aplicar a atualização incremental, é necessário que a fonte de dados esteja em um servidor que possa processar e particionar os dados, como SQL Server ou Oracle. Arquivos como CSV ou Excel não suportam essa funcionalidade por si só.

### Impacto da Escolha de Fonte de Dados

A escolha da fonte de dados tem um impacto direto na possibilidade e eficiência da atualização incremental. Por isso, é fundamental escolher uma fonte que seja compatível e que possa oferecer os benefícios desse tipo de atualização.

## Tópico 3: O Processo Por Trás da Atualização Incremental

### Particionamento de Dados

No backend, o que ocorre essencialmente é o particionamento do modelo de dados. O Power BI cria partições que dividem os dados em segmentos manejáveis, permitindo atualizar apenas as partições necessárias.

### Visualização de Partições

É possível visualizar como o Power BI organiza e divide as partições por meio de ferramentas como o SQL Server Management Studio, o que pode fornecer insights úteis para quem está gerenciando os datasets.

## Tópico 4: Trabalhando com Atualização Incremental em Ambiente de Desenvolvimento

### Uso de Parâmetros e Filtros no Desenvolvimento

Para tornar o processo ainda mais eficiente, durante o desenvolvimento, pode-se trabalhar com um conjunto menor de dados, utilizando parâmetros e filtros. Isso facilita o processamento e permite desenvolver mais rapidamente no Power BI Desktop.

### Cuidados com a Construção de Queries

Ao trabalhar com Queries e parâmetros, é necessário atenção à sintaxe e estrutura para garantir que o processo de query folding (otimização de consulta) não seja perdido. Caso contrário, pode resultar em atualizações mais lentas do que o processo normal.

## Conclusão

As atualizações incrementais apresentam uma revolução no gerenciamento de dados em ferramentas como o Power BI. Habilitar e configurar corretamente essa funcionalidade traz melhorias significativas em tempo, custo e eficiência, permitindo focar esforços apenas onde é necessário.

Lembrando que é importante se adaptar ao uso de parâmetros apropriados e garantir que a construção de Queries esteja correta para aproveitar ao máximo os benefícios da atualização incremental.

> Para mais sobre atualizações incrementais: [Atualização Incremental em Power BI](#atualiza%C3%A7%C3%A3o-incremental-em-power-bi)

* * *

&nbsp;

# Como criar um Esquema Estrela no Power Query

Olá, tudo bem? Neste material, abordaremos como transformar esquemas normalizados em desnormalizados e otimizar o desempenho de relatórios no Power BI. Esse processo é especialmente útil quando não se tem acesso direto ao banco de dados para realizar ajustes necessários.

## Esquemas Dimensionais

### Fundamentos do Esquema Dimensional

Um esquema dimensional é uma técnica de modelagem de dados usada para melhorar a leitura e o desempenho dos relatórios em ferramentas como o Power BI. Este método envolve desnormalizar tabelas para criar uma estrutura estelar, que é centrada em uma tabela de fatos com dimensões conectadas.

### Implementação no Power BI

Muitos usuários se deparam com a limitação de não poderem ajustar o banco de dados original. Neste caso, o Power BI oferece a ferramenta Power Query, um recurso que permite juntar tabelas puras e realizar as transformações necessárias diretamente na ferramenta.

#### Power Query na Prática

- **Mesclagem de consultas**: No Power Query, é possível combinar diferentes tabelas utilizando a função de mesclar consultas.
- **Expansão de campos**: Após a mesclagem, você pode expandir os campos para trazer os dados desejados para a tabela principal.

#### O Processo de Desnormalização

O objetivo da desnormalização no Power BI é simplificar o modelo de dados, tornando-o mais acessível e performático para o usuário final. Isso é feito através da combinação de dimensões em tabelas únicas.

## Vantagens do Esquema Estrela

### Performance Melhorada

A utilização de um esquema estrela no Power BI traz vantagens significativas de desempenho. Reduzir o número de tabelas e unificar dimensões diminui a complexidade das consultas e a utilização de recursos.

### Facilidade de Uso

Modelos simplificados não apenas melhoram a performance, mas também tornam o processo de criação de relatórios mais acessível ao usuário final.

## Casos Práticos

### Exemplos de Aplicação

Durante o material, apresentamos exemplos práticos de como aplicar tais técnicas no Power BI. A mesclagem e expansão são mostradas passo a passo, esclarecendo o processo de transformação de um modelo normalizado em um esquema estrela.

### Visualização Simplificada

Após a aplicação das técnicas, é possível observar que o modelo de dados fica visualmente mais simples e organizado, facilitando a navegação e a criação de relatórios.

## Próximos Passos

Na próxima seção deste ebook, abordaremos comparações de desempenho entre um único modelo de tabela grande e o modelo dimensional esquema estrela, para destacar ainda mais a importância de entender e aplicar esses conceitos no Power BI.

* * *

&nbsp;

# "Exceções" ao Esquema Estrela

## Introdução

A modelagem de dados é um aspecto crucial no desenvolvimento de sistemas de Business Intelligence e decisões estratégicas. Neste eBook, exploramos as diferenças e aplicações práticas entre os esquemas estrela e snowflake, com foco em relacionamentos muitos-para-muitos.

## Esquema Estrela

### Definição

O esquema estrela é caracterizado por uma tabela de fatos central cercada por dimensões que têm uma relação direta com ela, formando uma estrutura semelhante a uma estrela.

### Aplicações

Em geral, o esquema estrela é empregado para simplificar a complexidade, melhorar o desempenho das consultas e facilitar a interpretação dos modelos de dados.

## Esquema Snowflake

### Definição

O esquema snowflake é uma variação do esquema estrela, onde as dimensões são normalizadas, criando relacionamentos adicionais entre as dimensões.

### Aplicações e Exceções

Esse esquema é utilizado em situações específicas, em que relacionamentos muitos-para-muitos tornam-se necessários.

### Relacionamentos Muitos-Para-Muitos

#### Cenário de Clientes e Vendas

Um exemplo prático desse tipo de relacionamento ocorre quando um único usuário pode ter acessos a várias contas de clientes, e um cliente específico pode ser visualizado por diversos usuários.

## Bridget Tables ou Tabelas Ponte

### Funções e Características

- Servem como intermediárias em relacionamentos muitos-para-muitos.
- Geralmente, possuem apenas duas colunas, que definem a relação entre as entidades.
- Operam mais como tabelas de fatos, devido à natureza de seus relacionamentos.

#### Exemplo da Tabela de Acesso Usuário-Cliente

Um exemplo mencionado é a tabela 'usuário-cliente', que conecta usuários a clientes, permitindo o controle de acesso nos níveis apropriados.

### Outros Exemplos

#### Produto e Categoria

No caso de produtos que podem pertencer a mais de uma categoria, um esquema snowflake se faz necessário para evitar a duplicação de registros na tabela de produtos.

## Resumo e Melhores Práticas

Enquanto o esquema estrela deve ser a preferência na modelagem de dados pela sua simplicidade e eficiência, o esquema snowflake tem seu lugar em casos específicos. É essencial reconhecer essas exceções e aplicar o modelo que melhor atenda às necessidades do sistema.

## Conclusão

Este guia abordou os fundamentos dos esquemas estrela e snowflake, os cenários de aplicação e a importância das tabelas ponte. Ao lidar com Business Intelligence e análise de dados, o entendimento desses conceitos é vital para a construção de sistemas robustos e eficientes.

> Não usar medidas dentro de iteradores. Evitar ao máximo a transição de contexto, é menos performático.

* * *

&nbsp;

# Conectando no modelo com Endpoint XMLA

Bem-vindo ao guia completo sobre o Endpoint XML no Power BI, uma funcionalidade avançada disponível para usuários com licenças Premium. Neste ebook, você vai descobrir como essa ferramenta pode potencializar o gerenciamento e a visualização de modelos de dados no Power BI.

## Conexão com o Serviço Online

### Endpoint XML: O Que é e Como Funciona

O Endpoint XML é um termo técnico que se refere à capacidade de conectar seu modelo do Power BI a outras plataformas, como o SQL Server Management Studio. Com essa funcionalidade, é possível visualizar tabelas, partições e mais, de forma semelhante ao que é feito com Analysis Services.

### Acesso Exclusivo para Power BI Premium

É importante ressaltar que o Endpoint XML é uma ferramenta exclusiva para usuários do Power BI com acesso Premium, ampliando as possibilidades de gerenciamento de dados para cenários empresariais.

## Utilizando o Endpoint XML na Prática

### Como Configurar a Conexão

Para configurar a conexão com o Endpoint XML, deve-se acessar as configurações de Premium no Power BI Service e copiar o endereço fornecido. Este endereço será utilizado para estabelecer a conexão através do Management Studio ou do DAX Studio, informando o usuário e a senha.

### Visualização de Datasets no Management Studio

Ao conectar-se ao Management Studio usando o Endpoint XML, você terá acesso a bancos de dados correspondentes aos conjuntos de dados no Power BI online. Dentro de cada banco de dados, é possível visualizar informações detalhadas sobre tabelas e partições.

#### Análise de Partições

Uma das funcionalidades mais notáveis é a capacidade de analisar partições e entender como a atualização incremental funciona. Por exemplo, é possível visualizar as datas de processamento das partições, o que pode ser extremamente útil para otimizar o carregamento de dados em modelos grandes.

### Limitação Atual: Apenas Leitura

Vale ressaltar que, no momento atual, o Endpoint XML somente permite a leitura dos dados. No entanto, espera-se que futuramente a Microsoft disponibilize a opção de gerenciamento do modelo por meio desta conexão, permitindo não só visualizar, mas também modificar os datasets diretamente do Management Studio.

## Conexão com o DAX Studio

Além do SQL Server Management Studio, o Endpoint XML permite a conexão com o DAX Studio, um poderoso ferramenta para consulta e análise de desempenho. Através dessa conexão, é possível executar consultas DAX diretamente nos modelos hospedados no serviço online, proporcionando ainda mais flexibilidade.

### Executando Consultas em Tempo Real

Com o DAX Studio, você tem a liberdade de executar consultas em tempo real, obtendo respostas diretamente do servidor da Microsoft. Isso mostra como o Endpoint XML se integra perfeitamente com ferramentas de análise e gerenciamento, contribuindo para um ecossistema de dados ainda mais robusto e eficiente.

## Considerações Finais

O Endpoint XML no Power BI abre um leque de possibilidades para o gerenciamento avançado de dados em cenários empresariais. Enquanto atualmente possui a limitação de ser apenas leitura, sua futura expansão oferecerá oportunidades ainda maiores para os profissionais da área. Ao compreender e utilizar esta ferramenta, os usuários do Power BI Premium podem obter insights mais profundos e otimizar ainda mais seus processos de análise de dados.

* * *

&nbsp;

# Utilizando agregações e modelo composto (Import e DQ)

A criação de agregações no Power BI permite a combinação de dados detalhados e sumarizados para maximizar a performance dos relatórios. Neste livro digital, exploraremos o conceito de agregações e como implementá-las no Power BI.

## O que são agregações?

Agregações são um método para sumarizar dados em um nível mais alto, permitindo análises mais rápidas e eficientes. No Power BI, as agregações podem ser utilizadas para mesclar dados importados com dados de conexão direta.

## Quando usar agregações?

As agregações são particularmente úteis quando se lida com grandes volumes de dados, onde as otimizações usuais já foram aplicadas, mas o arquivo importado ainda permanece grande em tamanho. Em vez de converter todos os dados para conexão direta, cria-se tabelas agregadas para visualização em um nível mais alto, enquanto mantém-se os dados detalhados para análises mais profundas.

## Como criar agregações no Power BI?

A criação de agregações segue um processo específico no Power BI. Abaixo estão os passos chave para a implementação de agregações eficazes.

### 1\. Preparando o Ambiente

Antes de começar, certifique-se que as tabelas de dimensão estão no esquema snowflake e que todas as otimizações possíveis já foram feitas em suas tabelas de fato.

### 2\. Trabalhando com o Power Query

No Power Query, duplique a sua tabela de fato e comece a criar sua tabela agregada, mantendo apenas as colunas essenciais que deseja sumarizar.

### 3\. Sumarizando os Dados

O próximo passo é agrupar (group by) suas colunas desejadas e sumarizar as métricas (como soma de vendas e quantidade de pedidos).

### 4\. Relacionamento das Tabelas

Com sua tabela agregada criada, é hora de relacioná-la com as tabelas de dimensão apropriadas. Isto irá garantir que as agregações funcionem quando relacionadas com as visualizações.

### 5\. Ajustando o Modelo de Dados

Após relacionar suas tabelas, ajuste o modelo de dados para estabelecer tabelas de dimensão no modo duplo (Dual), que operam tanto no modo import quanto no modo conexão direta.

### 6\. Gerenciando Agregações

Utilize o recurso de gerenciamento de agregações para especificar como os dados sumarizados devem ser tratados para cada coluna da tabela de fato.

### 7\. Ocultando Tabelas de Agregação

Tabelas agregadas devem geralmente ser ocultadas das visualizações de relatório, pois servem principalmente para otimização de desempenho dos dados.

## Analisando o Modelo Composto

Agora que seu modelo composto está criado, é hora de analisar a performance. Lembre-se de que consultas aos dados agregados serão rápidas e utilizarão o cache, enquanto consultas aos dados detalhados levarão mais tempo, buscando diretamente do servidor.

## Conclusão

Agragações no Power BI são uma ferramenta poderosa para gerenciar o desempenho de grandes conjuntos de dados. Combinando dados detalhados e sumarizados, é possível criar relatórios que são ao mesmo tempo completos e eficientes.

Esperamos que este guia o tenha ajudado a entender melhor as agregações no Power BI e como implementá-las em seus próprios projetos.

> Nunca transformar tudo em directquery, essa seria a utima opção, a melhor é fazer modelos compostos
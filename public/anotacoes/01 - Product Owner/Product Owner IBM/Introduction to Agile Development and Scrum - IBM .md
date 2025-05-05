---
title: >-
  Introduction to Agile Development and Scrum - IBM Certification (Module 1 /
  Introduction to agile and scrum)
updated: 2025-04-28 00:30:50Z
created: 2025-04-22 18:39:33Z
latitude: -23.53169660
longitude: -46.86804100
altitude: 0.0000
---

- [Introduction to Agile Development and Scrum](#introduction-to-agile-development-and-scrum)
    - [Boas-vindas](#boas-vindas)
    - [A Relevância do Agile](#a-relevância-do-agile)
    - [Por que as Transformações Ágeis Falham?](#por-que-as-transformações-ágeis-falham)
    - [Aprendendo Agile na Prática](#aprendendo-agile-na-prática)
    - [O Que Você Aprenderá Neste Curso](#o-que-você-aprenderá-neste-curso)
    - [Conclusão](#conclusão)
- [Agile Principles](#agile-principles)
    - [Objetivos de Aprendizagem](#objetivos-de-aprendizagem)
    - [O que é Agile?](#o-que-é-agile)
    - [Características Definidoras do Agile](#características-definidoras-do-agile)
    - [O Manifesto Ágil](#o-manifesto-ágil)
    - [Desenvolvimento de Software Ágil](#desenvolvimento-de-software-ágil)
    - [Mensagem Principal](#mensagem-principal)
- [Methodologies Overview](#methodologies-overview)
    - [Objetivos de Aprendizagem](#objetivos-de-aprendizagem-2)
    - [Abordagem Tradicional Waterfall](#abordagem-tradicional-waterfall)
    - [Problemas da Abordagem Waterfall](#problemas-da-abordagem-waterfall)
    - [Extreme Programming (XP)](#extreme-programming-xp)
        - [Valores do XP](#valores-do-xp)
    - [Kanban](#kanban)
        - [Princípios do Kanban](#princípios-do-kanban)
    - [Resumo](#resumo)
- [Working Agile](#working-agile)
    - [Objetivos de Aprendizagem](#objetivos-de-aprendizagem-3)
    - [Trabalhando em Pequenos Lotes](#trabalhando-em-pequenos-lotes)
        - [Exemplo de lote grande (50 unidades)](#exemplo-de-lote-grande-50-unidades)
        - [Exemplo de fluxo de peça única](#exemplo-de-fluxo-de-peça-única)
    - [Produto Mínimo Viável (MVP)](#produto-mínimo-viável-mvp)
        - [Exemplo de MVP eficaz vs iterativo](#exemplo-de-mvp-eficaz-vs-iterativo)
    - [Behavior Driven Development (BDD)](#behavior-driven-development-bdd)
    - [Test Driven Development (TDD)](#test-driven-development-tdd)
    - [Programação em Par](#programação-em-par)
        - [Benefícios](#benefícios)
    - [Resumo](#resumo-2)
- [Summary and Highlights](#summary-and-highlights)
- [Scrum Overview](#scrum-overview)
    - [Objetivos de Aprendizagem](#objetivos-de-aprendizagem-4)
    - [Agile x Scrum](#agile-x-scrum)
    - [O que é Scrum?](#o-que-é-scrum)
    - [Característica do Scrum](#característica-do-scrum)
    - [Sprint](#sprint)
    - [Processo Scrum](#processo-scrum)
    - [Ciclo Iterativo](#ciclo-iterativo)
    - [Resumo](#resumo-3)
- [The 3 Roles of Scrum](#the-3-roles-of-scrum)
    - [Objetivos de Aprendizagem](#objetivos-de-aprendizagem-5)
    - [Os Três Papéis do Scrum](#os-três-papéis-do-scrum)
        - [Product Owner](#product-owner)
        - [Scrum Master](#scrum-master)
        - [Time Scrum](#time-scrum)
    - [Resumo](#resumo-4)
- [Artifacts, Events, and Benefits](#artifacts-events-and-benefits)
    - [Objetivos de Aprendizagem](#objetivos-de-aprendizagem-6)
    - [Artefatos do Scrum](#artefatos-do-scrum)
    - [Eventos do Scrum](#eventos-do-scrum)
    - [Benefícios do Scrum](#benefícios-do-scrum)
    - [Scrum vs. Kanban](#scrum-vs-kanban)
    - [Resumo](#resumo-5)
- [Summary and Highlights](#summary-and-highlights-2)
- [Organizational impact of Agile](#organizational-impact-of-agile)
    - [Objetivos de Aprendizagem](#objetivos-de-aprendizagem-7)
    - [Importância da Organização](#importância-da-organização)
        - [Lei de Conway (1968)](#lei-de-conway-1968)
    - [Alinhamento de Times](#alinhamento-de-times)
    - [Autonomia dos Times](#autonomia-dos-times)
    - [O “Muro da Confusão” Dev vs Ops](#o-muro-da-confusão-dev-vs-ops)
    - [Alinhamento Agile & DevOps](#alinhamento-agile-devops)
    - [Resumo](#resumo-6)
- [Mistaking Iterative Development for Agile](#mistaking-iterative-development-for-agile)
    - [Objetivos de Aprendizagem](#objetivos-de-aprendizagem-8)
    - [Transcrição e Formatação](#transcrição-e-formatação)
        - [A Armadilha do “Water‑Scrum‑Fall”](#a-armadilha-do-waterscrumfall)
        - [O que Agile NÃO é](#o-que-agile-não-é)
    - [Resumo](#resumo-7)
- [Summary and Highlights](#summary-and-highlights-3)

> **Modulo 1 - Parte 1** Introduction to Agile Philosophy

# Introduction to Agile Development and Scrum

## Boas-vindas

Bem-vindo à Introdução ao Desenvolvimento Ágil Scrum.  
Sou John Rofrano, e serei seu instrutor ao longo deste curso que não apenas ensina o que é Agile, mas apresenta as ferramentas e técnicas que utilizei ao longo dos anos para me tornar Ágil.

## A Relevância do Agile

De acordo com o Project Management Institute:

- Mais de 70% das organizações incorporaram algumas abordagens ágeis
- 77% das empresas adotam Scrum
- Mais de 25% das empresas de manufatura usam Agile exclusivamente

Com base em pesquisas da Price Waterhouse Coopers:

- Projetos Ágeis são 28% mais bem-sucedidos que projetos tradicionais

Infelizmente, segundo a Forbes:

- 47% de todas as transformações Ágeis falham

## Por que as Transformações Ágeis Falham?

Quarenta e sete por cento? Isso é quase metade. Por que você acha que isso acontece?

Um estudo da VersionOne mostra que a principal razão para o fracasso de projetos Ágeis é a inexperiência com a implementação e integração da metodologia Ágil.

Veja, Agile não é apenas um processo que você segue. É uma mentalidade que você desenvolve. É uma filosofia que exige que você pense diferente sobre como gerenciar equipes e projetos.

A liderança executiva precisa mudar seu foco de longo prazo e, em vez disso, concentrar-se em entregar valor rapidamente e de forma iterativa para encantar seus clientes.

Para ter sucesso em se tornar Ágil, você deve mudar a cultura da empresa.

## Aprendendo Agile na Prática

Outra razão pela qual os projetos Ágeis falham é que Agile não é algo que você possa simplesmente aprender de um livro.

Gosto de usar a analogia de aprender a dirigir um carro. Aqueles que dirigem sabem disso: eles não entregam as chaves do carro e o manual do proprietário dizendo "aqui, vá aprender a dirigir". Não. Alguém com experiência em direção geralmente sai com você sentado no banco do passageiro, dizendo o que observar, quão forte pressionar o pedal do acelerador ou do freio. Você precisa praticar com um instrutor para adquirir as habilidades para dirigir.

Agile é muito parecido com isso.

## O Que Você Aprenderá Neste Curso

Para este curso, eu o instruirei não apenas sobre o que fazer, mas também sobre o que observar. Discutiremos padrões e antipadrões, porque reconhecer quando algo está errado é tão importante quanto saber como fazer algo certo.

Você aprenderá a importância de se organizar em equipes pequenas, co-localizadas e multifuncionais, e como capacitar suas equipes para se autogerenciarem, permitindo que tomem decisões mais rapidamente.

Ensinarei como realizar o planejamento Ágil com exemplos práticos extraídos do desenvolvimento de software que você pode aplicar à sua própria situação, independentemente do que estiver desenvolvendo.

Você verá como conceitos da manufatura enxuta encontraram seu caminho no Agile e Scrum, e como, ao final de cada iteração, você deve se perguntar: "Devemos pivotar ou perseverar?" Em outras palavras, devemos mudar de rumo, tentar algo novo ou continuar do jeito que estamos?

## Conclusão

Este curso irá equipá-lo com o que você precisa para ter sucesso na implementação do Agile em sua organização.

Absorva os vídeos, reforce seu aprendizado com os quizzes e use os fóruns de discussão para conversar com seus colegas.

Como qualquer outra coisa, quanto mais você pratica, melhor você fica. Certifique-se de se desafiar a completar o módulo final prático no final e comece a construir suas habilidades de planejamento ágil.

* * *

&nbsp;

# Agile Principles

## Objetivos de Aprendizagem

Após assistir a este vídeo, você será capaz de:

- Definir a **filosofia Ágil**.
- Descrever as **características do Agile**.
- Explicar a **filosofia do Manifesto Ágil**.

## O que é Agile?

Agile é uma **abordagem iterativa** de gerenciamento de projetos que permite às equipes serem responsivas e entregar valor aos clientes rapidamente. Em vez de planejar um ano inteiro de trabalho, definimos **pequenos incrementos**, obtemos **feedback do cliente** e ajustamos o curso conforme avançamos.

## Características Definidoras do Agile

- **Planejamento adaptativo**: planejar apenas a iteração atual para possibilitar ajustes constantes.
- **Desenvolvimento evolutivo**: construir o produto em **pequenos incrementos** que evoluem conforme o feedback.
- **Entrega precoce**: colocar funcionalidades nas mãos do cliente o mais cedo possível.
- **Melhoria contínua**: aprimorar constantemente o processo e o produto após cada iteração.
- **Resposta a mudanças**: reagir rapidamente às mudanças de requisitos sem comprometer o valor entregue.

## O Manifesto Ágil

O Manifesto Ágil valoriza:

- **Indivíduos e interações** mais que processos e ferramentas.
- **Software em funcionamento** mais que documentação abrangente.
- **Colaboração com o cliente** mais que negociação de contrato.
- **Resposta a mudanças** mais que seguir um plano.

> Embora haja valor nos itens à direita, valorizamos mais os itens à esquerda.

## Desenvolvimento de Software Ágil

O desenvolvimento de software Ágil é uma abordagem iterativa que segue o **Manifesto Ágil**. Ele enfatiza:

- **Flexibilidade** e adaptação contínua.
- **Interação** constante com colegas e clientes.
- **Transparência** total, para que todos saibam no que os outros estão trabalhando.
- **Equipes pequenas, co-localizadas, multifuncionais, auto-organizadas e autogerenciáveis**.

## Mensagem Principal

**Construir o que é necessário, não apenas o que foi planejado.**  
Se o cliente não aprovar o que foi planejado, todo o esforço se perde. Quando as necessidades mudam — e mudarão —, concentre-se em entregar o que **o cliente realmente precisa**, replanejando rapidamente quando for necessário.

* * *

&nbsp;

# Methodologies Overview

## Objetivos de Aprendizagem

Após assistir a este vídeo, você será capaz de:

- Descrever a abordagem **Waterfall** no desenvolvimento de software.
- Explicar os **problemas** da abordagem Waterfall.
- Descrever a abordagem **Extreme Programming (XP)**.
- Listar os **valores** da abordagem XP.
- Definir **Kanban** e listar seus **princípios fundamentais**.

## Abordagem Tradicional Waterfall

Tudo começa com a **fase de requisitos**: coleta e documentação de tudo o que o cliente deseja no sistema — pelo menos naquele momento.  
Em seguida, entra-se na **fase de design**, onde arquitetos traduzem esses requisitos em um desenho completo do sistema.  
Depois, vem a **fase de codificação**, em que os desenvolvedores implementam o código. Como as setas de um waterfall fluem para baixo, fica difícil “nadar contra a corrente” para voltar e redesenhar quando surge um problema no design.  
Após a codificação, todos os módulos são **integrados** pela primeira vez, revelando possíveis incompatibilidades.  
Depois de integrados, entram em **teste**: bugs exigem nadar de volta para a fase de codificação e, por vezes, até para o design.  
Finalmente, ocorre o **deploy** em produção.

## Problemas da Abordagem Waterfall

- **Sem provisão para mudanças**: cada fase exige critérios de entrada e saída rígidos.
- **Falta de entregas intermediárias**: o cliente só vê o produto ao final.
- **Risco de perda de informação** a cada transição de fase.
- **Correções tardias são caras**: voltar fases exige muito esforço.
- **Longos lead times**: demora desde a ideia até a entrega.
- **Silos de trabalho**: equipes isoladas e pouco colaboração.
- **Operações desconhecem o código**: quem mantém o sistema em produção sabe pouco sobre ele.

## Extreme Programming (XP)

Introduzido por Kent Beck em 1996, o **Extreme Programming** é uma abordagem iterativa que inspirou o Agile. Ela organiza ciclos de trabalho em diferentes níveis:

- **Planejamento de release**: meses
- **Iterações**: semanas
- **Aceitação**: dias
- **Reuniões diárias (stand-up)**: diário
- **Negociação em pares**: horas
- **Testes unitários**: minutos
- **Programação em pares**: segundos

O objetivo é **melhorar a qualidade** do software e **responder rapidamente** a mudanças e requisitos do cliente.

### Valores do XP

- **Simplicidade**: faça apenas o necessário, sem over‑engineering.
- **Comunicação**: diálogo constante entre todos os membros da equipe.
- **Feedback**: ciclos rápidos de retorno para ajustar o desenvolvimento.
- **Respeito**: todas as ideias são valorizadas, sem hierarquia.
- **Coragem**: estimativas honestas e transparência sobre o que pode (ou não) ser entregue.

## Kanban

Originário dos sistemas de manufatura japoneses, **Kanban** significa “quadro de sinalização” e promove o **fluxo contínuo** de trabalho através de cartões que avançam por etapas de produção.

### Princípios do Kanban

1.  **Visualizar o fluxo de trabalho**: se não for visível, não pode ser gerenciado.
2.  **Limitar o trabalho em andamento (WIP)**: evitar acúmulo em qualquer estágio.
3.  **Gerenciar e melhorar o fluxo**: monitorar e otimizar continuamente.
4.  **Tornar políticas explícitas**: todos sabem o que significa “pronto”.
5.  **Melhoria contínua**: usar feedback para aprimorar processos.

## Resumo

Neste vídeo, você aprendeu que:

- A abordagem **Waterfall** é sequencial, rígida e propensa a atrasos e custos elevados quando ocorrem mudanças.
- O **Extreme Programming** (XP) introduziu ciclos rápidos de feedback para aumentar a qualidade e a adaptabilidade do software, baseado em valores como simplicidade, comunicação e coragem.
- O **Kanban** foca em visualização do trabalho, limitação de WIP e melhoria contínua para otimizar o fluxo de entrega.

* * *

&nbsp;

# Working Agile

## Objetivos de Aprendizagem

Após assistir a este vídeo, você será capaz de:

- Listar cinco práticas essenciais para trabalhar de forma Ágil.
- Explicar o conceito de **trabalhar em pequenos lotes**.
- Definir **Produto Mínimo Viável (MVP)**.
- Compreender **Behavior Driven Development (BDD)**.
- Entender **Test Driven Development (TDD)**.
- Explicar como funciona a **programação em par**.

## Trabalhando em Pequenos Lotes

Derivado da manufatura enxuta, o trabalho em **pequenos lotes** evita grandes desperdícios ao detectar erros rapidamente.

### Exemplo de lote grande (50 unidades)

1.  Dobrar 50 folhetos: ~5 minutos
2.  Inserir 50 folhetos em envelopes: +5 minutos (total 10 min)
3.  Selar 50 envelopes: +5 minutos (total 15 min)
4.  Carimbar 50 envelopes: +1 minuto (total 16 min até o primeiro item finalizado)

Se houver defeito (falta de cola ou erro de digitação), só saberemos após 11–16 minutos, gerando muito retrabalho.

### Exemplo de fluxo de peça única

Para cada folheto:

1.  Dobrar, inserir, selar e carimbar: ~24 segundos até o primeiro item entregue

Feedback em segundos permite **pivotar** ou **perseverar** antes de produzir em escala.

## Produto Mínimo Viável (MVP)

O **MVP** é a menor versão de um produto capaz de **validar uma hipótese** e gerar aprendizado, não apenas uma primeira fase de entrega.

- **Diferença entre entrega e aprendizado**:
    - Entrega: o que será entregue ao cliente.
    - Aprendizado: o que podemos aprender com o MVP.
- Ao final de cada MVP, decida **pivotar ou perseverar**.

### Exemplo de MVP eficaz vs iterativo

- **Iterativo**: entrega de roda → chassi → carro sem volante → carro completo (demora meses e não gera valor até o final).
- **Ágil/MVP**: entrega de skate → patinete → bicicleta → motocicleta → carro conversível (feedback contínuo e valor desde o primeiro item).

## Behavior Driven Development (BDD)

Descreve o sistema **de fora para dentro**, focado em testes de integração pela perspectiva do usuário.

- Testes realizados geralmente na **interface do usuário**.
    
- Sintaxe comum (Gherkin):
    
    ```gherkin
    Funcionalidade: [Nome da feature]
      Como um [tipo de usuário]
      Eu quero [ação desejada]
      Para que [valor ou benefício]
    
    Cenário: [Descrição]
      Dado [pré-condição]
      Quando [ação]
      Então [resultado esperado]
    ```
    
- Permite que **desenvolvedores** e **stakeholders** usem a mesma linguagem para validar comportamentos.
    

## Test Driven Development (TDD)

Aborda testes **de dentro para fora** (nível unitário), garantindo que cada módulo funcione conforme esperado.

1.  **Red**: escrever um caso de teste que falhe.
2.  **Green**: implementar código suficiente para passar no teste.
3.  **Refactor**: melhorar o design do código sem alterar o comportamento.

Ciclo **Red–Green–Refactor** mantém qualidade e evita regressões.

## Programação em Par

Do Extreme Programming, a **programação em par** envolve duas pessoas trabalhando no mesmo código:

- **Driver**: escreve o código.
- **Navigator**: revisa em tempo real, sugere melhorias e pesquisa soluções.

### Benefícios

- Identificação precoce de **defeitos**.
- **Alta qualidade** de código: dois pares de olhos.
- **Mentoria**: junção de programador sênior e júnior acelera aprendizado.
- **Onboarding**: novos membros conhecem o código diretamente com experientes.
- Redução de custos de manutenção e suporte em produção.

## Resumo

- Trabalhar em **pequenos lotes** significa entregar algo útil **rapidamente**.
- **MVP** é a maneira mais **barata** e **fácil** de testar a hipótese e **aprender**.
- **Behavior Driven Development (BDD)** garante que você esteja construindo a **coisa certa**.
- **Test Driven Development (TDD)** garante que você esteja construindo a **coisa corretamente**.
- **Programação em par** permite **descobrir defeitos mais cedo** e **aumentar a qualidade** do código.

* * *

# Summary and Highlights

At this point in the course, you know:

- Agile is an iterative approach to software development that emphasizes flexibility, interactivity, and transparency using small, cross-functional teams
    
- The Agile Manifesto describes the core values of Agile:
    

&nbsp;         - Individuals and interactions over processes and tools  
          - Working software over comprehensive documentation  
          - Customer collaboration over contract negotiation  
          - Responding to change over following a plan

- The waterfall approach is a structured, step-by-step process that can lead to problems not surfaced until later in development
    
- Extreme Programming (XP) advocated an iterative approach that valued simplicity, communication, feedback, respect, and courage
    
- A Kanban system is characterized by visualizing workflow, limiting work in progress, managing and enhancing flow, making process policies explicit, and continuously improving a process
    
- Working in small batches means delivering something useful quickly
    
- An MVP is the cheapest/easiest thing you can do to test a hypothesis and learn
    
- Behavior Driven Development makes sure you are building the right thing
    
- Test Driven Development makes sure you are building the thing right
    
- Pair programming enables you to discover defects earlier and increase your code quality
    
- The Gherkin syntax, which comes from a company called Cucumber, is a single syntax that developers and stakeholders can understand: given some set of preconditions, when an event occurs, then some outcome is observed.
    

* * *

&nbsp;

> **Modulo 1 - Parte 2** Introduction to Scrum methodology

# Scrum Overview

## Objetivos de Aprendizagem

Após assistir a este vídeo, você será capaz de:

- Distinguir **Agile** de **Scrum**.
- Definir as características-chave da **metodologia Scrum**.
- Descrever as etapas do **processo Scrum**.

## Agile x Scrum

- **Agile** é uma **filosofia** de trabalho, não prescritiva.
- **Scrum** é uma **metodologia** prescritiva para trabalhar de forma ágil.

## O que é Scrum?

- Framework de gestão para desenvolvimento incremental de produtos.
- Enfatiza equipes pequenas, multidisciplinares e autogerenciáveis.
- Estrutura-se em **papéis**, **regras**, **artefatos** e **cerimônias**.
- Utiliza iterações de duração fixa chamadas **sprints**.
- Objetivo de entregar um **incremento potencialmente entregável** ao final de cada sprint.

## Característica do Scrum

> “Fácil de entender, difícil de dominar.”

- Poucas regras, mas requer disciplina e prática.
- Recomenda-se ter alguém experiente para orientar e mentorar a equipe.

## Sprint

- **Sprint**: iteração que percorre o ciclo **planejar → desenhar → codar → testar → deploy**.
- Cada sprint deve ter um **objetivo claro**: o que será construído nesse incremento?
- Duração recomendada: **2 semanas** (alguns sugerem 1–4 semanas).

## Processo Scrum

1.  **Product Backlog**: lista de todas as histórias e funcionalidades desejadas.
2.  **Backlog Refinement**: refinamento e preparação das histórias para o próximo sprint.
3.  **Sprint Planning**: seleção de itens do product backlog para compor o **Sprint Backlog**.
4.  **Sprint Backlog**: conjunto de histórias a serem concluídas na sprint.
5.  **Daily Scrum (Daily Stand‑up)**: reunião diária de 15 min para responder:
    - O que fiz ontem?
    - O que farei hoje?
    - Há algum impedimento?
6.  **Sprint Execution**: desenvolvimento, teste e deploy do incremento.
7.  **Sprint Review**: apresentação do incremento ao cliente para feedback.
8.  **Sprint Retrospective**: análise do processo para melhoria contínua.

## Ciclo Iterativo

- Cada sprint repete o ciclo **planejar → desenhar → codar → testar → deploy**.
- **Deploy** e **feedback** são essenciais para guiar o próximo planejamento.

## Resumo

- **Agile** é a filosofia; **Scrum** é o framework que a implementa.
- Scrum define papéis, regras, artefatos e cerimônias para entregas regulares.
- Sprints de 2 semanas permitem entregas frequentes e feedback rápido.
- O processo Scrum garante alinhamento contínuo com as necessidades do cliente.  
    ![YSbl0VPHoE.png](../../_resources/YSbl0VPHoE.png)

* * *

&nbsp;

# The 3 Roles of Scrum

## Objetivos de Aprendizagem

Após assistir a este vídeo, você será capaz de:

- Listar os **três papéis** do Scrum.
- Explicar o que faz o **Product Owner**.
- Explicar o que faz o **Scrum Master**.
- Explicar o que faz o **Time Scrum**.

## Os Três Papéis do Scrum

1.  **Product Owner**
2.  **Scrum Master**
3.  **Time Scrum** (ou Time de Desenvolvimento)

### Product Owner

- **Visão e Decisão**: detém a visão do produto e decide **pivotar** ou **perseverar**.
- **Distinção de Cargo x Papel**: Product Manager é um título; Product Owner é um **papel** no Scrum.
- **Representa Stakeholders**: interlocutor entre time e quem financia o projeto.
- **Articula a Visão do Produto**: garante que todos no time saibam para onde vão.
- **Árbitro de Requisitos**: responde dúvidas sobre requisitos e reprioriza o **Product Backlog**.
- **Prepara Backlog para Sprint**: refina histórias, adiciona detalhes e garante que estejam prontas para o sprint.
- **Aceita ou Rejeita Incrementos**: decide se o incremento está pronto para envio ou precisa de ajustes.

### Scrum Master

- **Facilitador do Processo**: guia a equipe na aplicação do Scrum.
- **Mentor de Scrum**: é a pessoa mais experiente em Scrum no time.
- **Coach Ágil**: promove auto-organização e assegura ambiente adequado ao time.
- **Protege o Time**: afasta interferências externas e bloqueios.
- **Remove Impedimentos**: prioridade diária é resolver o que bloqueia o progresso.
- **Gerencia Timeboxes**: garante que reuniões e sprints respeitem o tempo definido.
- **Coleta Dados Empíricos**: monitora burndown charts e ajusta previsões.
- **Sem Autoridade Gerencial**: atua como coach de confiança, não como chefe.

### Time Scrum

- **Equipe Multifuncional**: desenvolvedores, testadores, analistas, operações, etc.
- **Auto-organização**: o time puxa tarefas do backlog sem atribuição externa.
- **Tamanho Pequeno**: idealmente 5–9 membros.
- **Co-localização**: promove colaboração; se remoto, agrupar por fuso horário.
- **Membros Dedicados**: não divididos em múltiplos projetos.
- **Negocia Compromissos**: define, com o Product Owner, o que entregar em cada sprint.
- **Autonomia de Execução**: decide como atingir os objetivos do sprint.

## Resumo

- **Product Owner**: estabelece visão, prioridades e decide quando enviar o produto.
- **Scrum Master**: garante a prática do Scrum, remove impedimentos e coach ágil.
- **Time Scrum**: pequeno, multifuncional, auto-organizado e responsável pela entrega.
- O time negocia compromissos **sprint a sprint** e possui autonomia sobre a execução.

* * *

&nbsp;

# Artifacts, Events, and Benefits

## Objetivos de Aprendizagem

Após assistir a este vídeo, você será capaz de:

- Listar os **três artefatos** do Scrum.
- Explicar os **cinco eventos** do Scrum.
- Discutir os **benefícios** de usar Scrum.
- Diferenciar **Scrum** de **Kanban**.

## Artefatos do Scrum

1.  **Product Backlog**  
    Lista de todas as histórias e requisitos ainda não concluídos do produto.
2.  **Sprint Backlog**  
    Conjunto de histórias selecionadas para execução no sprint atual (próximas duas semanas).
3.  **Done Increment**  
    Incremento de produto totalmente concluído e pronto para entrega ao final de cada sprint.

## Eventos do Scrum

1.  **Sprint Planning**  
    Planejamento coletivo do sprint: Product Owner, Scrum Master e Time definem o Sprint Backlog.
2.  **Daily Scrum (Daily Stand-up)**  
    Reunião diária (15 min) para responder:
    - O que fiz ontem?
    - O que farei hoje?
    - Há impedimentos?
3.  **Sprint**  
    Período de trabalho (geralmente 2 semanas) para desenvolver, testar e entregar o incremento.
4.  **Sprint Review**  
    Demonstração do incremento aos stakeholders para coletar feedback.
5.  **Sprint Retrospective**  
    Reflexão interna da equipe sobre o que funcionou, o que não funcionou e como melhorar.

## Benefícios do Scrum

- **Maior produtividade**: visibilidade do trabalho em andamento e auto-organização da equipe.
- **Melhoria da qualidade**: testes contínuos (BDD, TDD) e integração frequente.
- **Redução do time-to-market**: entregas incrementais e feedback rápido do cliente.
- **Maior satisfação dos stakeholders**: visibilidade constante dos avanços.
- **Melhora na dinâmica de equipe**: transparência e colaboração.
- **Funcionários mais felizes**: autonomia e controle sobre o próprio trabalho.

## Scrum vs. Kanban

| Aspecto | Scrum | Kanban |
| --- | --- | --- |
| **Cadência** | Sprints fixos (2 semanas) | Fluxo contínuo |
| **Liberação** | Ao final de cada sprint | Contínua, sempre que pronto |
| **Papéis** | Product Owner, Scrum Master, Time Scrum | Sem papéis prescritos |
| **Métrica chave** | Velocidade (work completed per sprint) | Cycle time (tempo de ciclo) |
| **Mudanças durante ciclo** | Sprint timebox é estático | Mudanças podem ocorrer a qualquer momento |

## Resumo

- Scrum produz **Product Backlog**, **Sprint Backlog** e **Done Increment**.
- Os cinco eventos de Scrum são: **Sprint Planning**, **Daily Scrum**, **Sprint**, **Sprint Review** e **Sprint Retrospective**.
- Usar Scrum traz produtividade, qualidade, agilidade e satisfação elevadas.
- Kanban difere por fluxo contínuo, entregas contínuas e ausência de papéis fixos.

* * *

&nbsp;

# Summary and Highlights

At this point in the course, you know:

- Scrum is a methodology that follows the Agile philosophy
    
- The Scrum management framework:
    

&nbsp;          - Provides structure through defined roles, meetings, rules, and artifacts  
           - Prescribes small, cross-functional, self-organizing teams  
           - Uses fixed-length iterations called sprints  
           - Produces a potentially shippable product increment with every iteration

- The product owner represents stakeholders, articulates the product vision, and decides priorities, requirements, and readiness to ship
    
- The scrum master coaches the team, promotes a cooperative environment, shields the team from interference, and unblocks impediments
    
- The scrum team is small, dedicated, co-located, cross-functional, and self-managing
    
- The scrum team negotiates commitments with the product owner — one sprint at a time
    
- The scrum team has autonomy regarding how to reach commitments
    
- Scrum produces a product backlog, a sprint backlog, and a completed — or done — increment
    
- The Scrum events are sprint planning, daily Scrum meetings, sprints, sprint reviews, and sprint retrospectives
    

If done well, Scrum can:

- Increase employee productivity and happiness
    
- Improve product quality
    
- Reduce time to market
    
- Enhance stakeholder satisfaction
    

* * *

&nbsp;

> **Modulo 1 - Parte 3** Organizing for success

# Organizational impact of Agile

## Objetivos de Aprendizagem

Após assistir a este vídeo, você será capaz de:

1.  Descrever como a **organização adequada** contribui para o sucesso ágil.
2.  Explicar como os **times devem ser alinhados**.
3.  Justificar por que a **autonomia** é importante.
4.  Discutir por que **toda a organização** deve adotar Agile (e DevOps) para obter resultados efetivos.

* * *

## Importância da Organização

> “Não canso de destacar o quão crítica é a organização para o sucesso. Muitas empresas tentam tornar ágeis seus times existentes, sem perceber que talvez seja necessário **reorganizar** esses times para aproveitar ao máximo o Agile.”

### Lei de Conway (1968)

> “Qualquer organização que projeta um sistema … produzirá um design cuja estrutura é cópia da estrutura de comunicação da organização.”

- Se você pedir a 4 times que construam um compilador, obterá um compilador em 4 “passes”.
- Se há um time de UI, um time de aplicação e um time de banco de dados, você obterá uma **arquitetura em 3 camadas**.

**Lição:** a estrutura dos seus times molda a arquitetura do seu sistema.

* * *

## Alinhamento de Times

- **Times pequenos e focados** em uma área de negócio (por exemplo: pedidos, contas, carrinho, recomendações).
- **Baixa dependência** entre times (loosely coupled), mas **forte alinhamento** na visão do produto.
- Cada time tem **responsabilidade end-to-end**: desenvolver, rodar e depurar sua parte em produção.
- **Missão de longo prazo**: ownership contínuo gera maior engajamento e qualidade.

* * *

## Autonomia dos Times

- **Motivação**: equipes autônomas são mais engajadas e criam soluções melhores.
- **Velocidade**: decisões são tomadas localmente, sem esperar aprovações em várias camadas.
- **Redução de gargalos**: fewer handoffs, menos espera por decisões externas.

* * *

## O “Muro da Confusão” Dev vs Ops

> Gráfico famoso de Andrew Clay Shafer ilustra metas opostas:
> 
> - **Desenvolvimento**: medido por mudanças e novas releases.
> - **Operações**: medido por estabilidade, evita mudanças.
> 
> ![xsm5ORrnqy.png](../../_resources/xsm5ORrnqy.png)

**Problema real:** times ágeis de desenvolvimento travam esperando tickets de operações.  
**Solução:** adotar **DevOps** para que operações também sejam ágeis.

* * *

## Alinhamento Agile & DevOps

| Objetivo Agile | Objetivo DevOps |
| --- | --- |
| Entregar software mais rápido | Acelerar o time-to-market |
| Ser responsivo a mudanças | Alinhar TI ao negócio para gerar valor |
| Aumentar qualidade | Elevar produtividade de TI |

> **Conclusão:** adotar DevOps é essencial para que o ops acompanhe o ritmo ágil de desenvolvimento.

* * *

## Resumo

- A **organização de times** define a arquitetura dos sistemas (Lei de Conway).
- Equipes **alinhadas**, pequenas e com **missão de longo prazo** entregam mais valor.
- **Autonomia** aumenta motivação, velocidade e reduz gargalos.
- **Adotar Agile somente no desenvolvimento** gera bloqueios operacionais.
- **Agile + DevOps** compartilham metas e garantem fluxo contínuo de valor.

* * *

&nbsp;

# Mistaking Iterative Development for Agile

## Objetivos de Aprendizagem

Após assistir a este vídeo, você será capaz de:

- Discutir por que **iterar sozinho** não basta para ser Agile.
- Descrever o que **não configura** uma abordagem Agile.

## Transcrição e Formatação

### A Armadilha do “Water‑Scrum‑Fall”

> “Quero apresentar uma armadilha comum: organizações que dizem ser Agile, mas mantêm um **fuzzy front end** (design e planejamento em estilo waterfall). Depois fazem desenvolvimento iterativo, mas **não deployam** nem pedem feedback do cliente ao fim de cada iteração. Finalmente, na “última milha”, lutam para integrar e entregar pela primeira vez.”

- **Fase de requisitos (upfront)**: coleta extensa, documentação e planejamento em cascata.
- **Desenvolvimento iterativo**: plano é apenas repetido, sem feedback real.
- **Última milha (deploy)**: demora e retrabalho, pois nunca foi implantado antes.

> “Isso não é Agile: é Water‑Scrum‑Fall — waterfall no início e no fim, e ‘scrum’ apenas de nome.”

![RNPQjf8tMV.png](../../_resources/RNPQjf8tMV.png)

### O que Agile **NÃO** é

- **Não é** apenas um ciclo iterativo de mini‑waterfall. Planejar tudo antecipadamente não é Agile.
- **Não é** só desenvolvedores em sprints. Agile requer **times multifuncionais** (dev, QA, BA, Ops etc.).
- **Não há** “gerente de projeto Ágil” no Manifesto Ágil. Equipes são **auto‑gerenciadas**, não comandadas por PMOs.

* * *

## Resumo

- **Iterar sem implantar** e sem feedback não é Agile.
- **Planejamento upfront** em waterfall quebra a responsividade a mudanças.
- **Agile** exige deploys frequentes, feedback rápido e decisões de **pivotar ou perseverar**.
- **Times Agile** são cross‑functional e **auto‑organizados**, sem comando e controle de um gerente.

* * *

&nbsp;

# Summary and Highlights

At this point in the course, you know:

- How you are organized can affect the systems that you build.
    
- Giving teams autonomy leads to motivated teams who can execute faster and build better systems
    
- Not adopting Agile across your organization can lead to operational bottlenecks
    
- Many companies adhere to their waterfall planning and call it Agile
    
- Simply doing iterative development is not Agile unless you are being responsive to changes and delivering value often
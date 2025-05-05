---
title: Implantação PowerBI + Governança - Xperiun
updated: 2025-03-09 20:42:39Z
created: 2025-02-24 21:30:29Z
latitude: -23.52396230
longitude: -46.84112430
altitude: 0.0000
---

- [Governança 👇](#governança-point_down)
- [Governança Eficaz no Power BI](#governança-eficaz-no-power-bi)
    - [Introdução à Governança de Dados](#introdução-à-governança-de-dados)
        - [Conceito de Governança de Dados](#conceito-de-governança-de-dados)
        - [Importância da Governança](#importância-da-governança)
    - [Objetivos da Governança de Dados no Power BI](#objetivos-da-governança-de-dados-no-power-bi)
        - [Empoderamento dos Usuários](#empoderamento-dos-usuários)
        - [Conformidade Regulatória](#conformidade-regulatória)
        - [Satisfação dos Requisitos Internos](#satisfação-dos-requisitos-internos)
    - [Técnicas e Ferramentas para Governança no Power BI](#técnicas-e-ferramentas-para-governança-no-power-bi)
        - [Processo de Implementação](#processo-de-implementação)
            - [Definição de Papéis e Responsabilidades](#definição-de-papéis-e-responsabilidades)
            - [Desenvolvimento e Uso de Políticas de Governança](#desenvolvimento-e-uso-de-políticas-de-governança)
            - [Monitoramento e Auditoria](#monitoramento-e-auditoria)
        - [Ferramentas de Governança no Power BI](#ferramentas-de-governança-no-power-bi)
            - [Segurança e Gestão de Acessos](#segurança-e-gestão-de-acessos)
            - [Controle de Qualidade de Dados](#controle-de-qualidade-de-dados)
            - [Relatórios e Dashboards de Monitoramento](#relatórios-e-dashboards-de-monitoramento)
    - [Estratégias para Capacitação de Usuários](#estratégias-para-capacitação-de-usuários)
        - [Treinamento e Desenvolvimento](#treinamento-e-desenvolvimento)
            - [Cursos e Workshops](#cursos-e-workshops)
            - [Recursos Educativos](#recursos-educativos)
        - [Suporte Contínuo](#suporte-contínuo)
            - [Times de Suporte Dedicados](#times-de-suporte-dedicados)
            - [Fóruns e Comunidades Internas](#fóruns-e-comunidades-internas)
    - [Considerações Finais](#considerações-finais)
- [Implantação de Governança de Dados](#implantação-de-governança-de-dados)
    - [Introdução](#introdução)
    - [Estratégia de Governança](#estratégia-de-governança)
        - [Definindo a Estratégia](#definindo-a-estratégia)
            - [Alinhamento com a Cultura de Dados](#alinhamento-com-a-cultura-de-dados)
        - [Objetivos da Governança](#objetivos-da-governança)
            - [Capacitação dos Usuários](#capacitação-dos-usuários)
            - [Melhoria da Experiência do Usuário](#melhoria-da-experiência-do-usuário)
            - [Uso Adequado dos Dados](#uso-adequado-dos-dados)
            - [Definição de Responsabilidades](#definição-de-responsabilidades)
            - [Padronização](#padronização)
            - [Redução de Riscos de Vazamento](#redução-de-riscos-de-vazamento)
            - [Atender aos Requisitos Regulatórios](#atender-aos-requisitos-regulatórios)
    - [Processo de Implantação](#processo-de-implantação)
        - [A Tríade: Processos, Pessoas e Tecnologia (!!!!!)](#a-tríade-processos-pessoas-e-tecnologia)
        - [Importância da Capacitação](#importância-da-capacitação)
            - [Dica da Microsoft](#dica-da-microsoft)
        - [Follow-Up e Adaptação](#follow-up-e-adaptação)
    - [Conclusão](#conclusão)
- [Governança e Implantação Gradativa nas Organizações](#governança-e-implantação-gradativa-nas-organizações)
    - [Introdução](#introdução-2)
    - [Implantação Leve de Governança](#implantação-leve-de-governança)
        - [Benefícios de uma Abordagem Gradativa](#benefícios-de-uma-abordagem-gradativa)
        - [Abordagem de Baixo para Cima](#abordagem-de-baixo-para-cima)
    - [Centros de Excelência (COE)](#centros-de-excelência-coe)
        - [Função dos Centros de Excelência](#função-dos-centros-de-excelência)
        - [Vantagens dos COEs](#vantagens-dos-coes)
    - [Decisões Compartilhadas](#decisões-compartilhadas)
        - [Governança Compartilhada entre Departamentos](#governança-compartilhada-entre-departamentos)
        - [Equilíbrio entre Governança, Flexibilidade e Produtividade](#equilíbrio-entre-governança-flexibilidade-e-produtividade)
    - [Integração com o Fluxo de Trabalho](#integração-com-o-fluxo-de-trabalho)
        - [Requisitos de Governança no Fluxo de Trabalho](#requisitos-de-governança-no-fluxo-de-trabalho)
        - [Incentivo ao Acesso aos Dados](#incentivo-ao-acesso-aos-dados)
    - [Alinhamento com a Cultura de Dados](#alinhamento-com-a-cultura-de-dados-2)
        - [Decisões Alinhadas à Cultura de Dados](#decisões-alinhadas-à-cultura-de-dados)
        - [Governança em Diferentes Níveis de Maturidade](#governança-em-diferentes-níveis-de-maturidade)
    - [Distribuição da Tomada de Decisão](#distribuição-da-tomada-de-decisão)
        - [Inclusão de Todos na Tomada de Decisão](#inclusão-de-todos-na-tomada-de-decisão)
        - [Empatia e Alinhamento](#empatia-e-alinhamento)
    - [Conclusão](#conclusão-2)
- [Métodos de Implantação e Governança de Ferramentas Corporativas](#métodos-de-implantação-e-governança-de-ferramentas-corporativas)
    - [Introdução](#introdução-3)
    - [Métodos de Implantação de Governança](#métodos-de-implantação-de-governança)
        - [1\. Implantação da Ferramenta Antes da Governança](#1-implantação-da-ferramenta-antes-da-governança)
            - [Descrição](#descrição)
            - [Vantagens](#vantagens)
            - [Desvantagens](#desvantagens)
        - [2\. Governança Antes da Ferramenta](#2-governança-antes-da-ferramenta)
            - [Descrição](#descrição-2)
            - [Vantagens](#vantagens-2)
            - [Desvantagens](#desvantagens-2)
        - [3\. Planejamento Interativo em Fases](#3-planejamento-interativo-em-fases)
            - [Descrição](#descrição-3)
            - [Vantagens](#vantagens-3)
            - [Desvantagens](#desvantagens-3)
    - [Considerações Finais](#considerações-finais-2)
- [Desafios na Implantação do Power BI e Governança de Dados](#desafios-na-implantação-do-power-bi-e-governança-de-dados)
    - [Introdução](#introdução-4)
    - [Desafios de Estratégia](#desafios-de-estratégia)
        - [Ausência de Estratégia de Controle de Dados](#ausência-de-estratégia-de-controle-de-dados)
        - [Falta de Suporte Executivo](#falta-de-suporte-executivo)
        - [Planejamento de Adoção Insuficiente](#planejamento-de-adoção-insuficiente)
    - [Desafios de Pessoas](#desafios-de-pessoas)
        - [Falta de Alinhamento entre as Equipes](#falta-de-alinhamento-entre-as-equipes)
        - [Ausência de Líderes com Conhecimento e Entusiasmo](#ausência-de-líderes-com-conhecimento-e-entusiasmo)
        - [Desconhecimento de Boas Práticas](#desconhecimento-de-boas-práticas)
        - [Resistência às Novas Diretrizes](#resistência-às-novas-diretrizes)
        - [Esforço Duplicado](#esforço-duplicado)
        - [Falta de Clareza entre as Responsabilidades](#falta-de-clareza-entre-as-responsabilidades)
    - [Desafios de Processo](#desafios-de-processo)
        - [Ausência de Processos Bem Definidos](#ausência-de-processos-bem-definidos)
        - [Dificuldade de Compartilhar Lições Aprendidas](#dificuldade-de-compartilhar-lições-aprendidas)
        - [Falta de Documentação](#falta-de-documentação)
        - [Incapacidade de Atender a Requisitos de Segurança e Privacidade](#incapacidade-de-atender-a-requisitos-de-segurança-e-privacidade)
    - [Desafios de Qualidade de Dados e Gerenciamento](#desafios-de-qualidade-de-dados-e-gerenciamento)
        - [Acúmulo Excessivo de Dados e Relatórios](#acúmulo-excessivo-de-dados-e-relatórios)
        - [Baixa Qualidade dos Dados](#baixa-qualidade-dos-dados)
        - [Falta de Confiança nos Dados](#falta-de-confiança-nos-dados)
        - [Dificuldade de Acessar Dados Valiosos](#dificuldade-de-acessar-dados-valiosos)
        - [Fragmentação dos Dados](#fragmentação-dos-dados)
        - [Ausência de Catálogo de Dados](#ausência-de-catálogo-de-dados)
        - [Falta de Clareza na Propriedade dos Dados](#falta-de-clareza-na-propriedade-dos-dados)
    - [Desafios de Habilidades e Conhecimentos](#desafios-de-habilidades-e-conhecimentos)
        - [Níveis Variados de Capacidade](#níveis-variados-de-capacidade)
        - [Lacunas de Habilidades](#lacunas-de-habilidades)
        - [Dificuldade em Gerenciar a Diversidade e o Volume de Dados](#dificuldade-em-gerenciar-a-diversidade-e-o-volume-de-dados)
        - [Subestimação da Complexidade](#subestimação-da-complexidade)
        - [Rotatividade da Equipe](#rotatividade-da-equipe)
        - [Dificuldade em Acompanhar a Velocidade das Mudanças](#dificuldade-em-acompanhar-a-velocidade-das-mudanças)
- [Guia de Implantação de Governança com Power BI](#guia-de-implantação-de-governança-com-power-bi)
    - [Introdução](#introdução-5)
    - [Estrutura do Ebook](#estrutura-do-ebook)
    - [1\. Estratégia](#1-estratégia)
        - [Oficinas e Entrevistas](#oficinas-e-entrevistas)
        - [Avaliação do Estado Atual](#avaliação-do-estado-atual)
        - [Validação do Escopo](#validação-do-escopo)
        - [Identificação de Iniciativas](#identificação-de-iniciativas)
        - [Identificar Dificuldades e Riscos](#identificar-dificuldades-e-riscos)
        - [Apoio Executivo](#apoio-executivo)
        - [Encaixe do Power BI na Estratégia](#encaixe-do-power-bi-na-estratégia)
        - [Fatores Internos e Externos](#fatores-internos-e-externos)
        - [Entregáveis](#entregáveis)
    - [2\. Pessoas](#2-pessoas)
        - [Conselho de Governança](#conselho-de-governança)
        - [Escopo e Responsabilidades](#escopo-e-responsabilidades)
        - [Equipes e Funções](#equipes-e-funções)
        - [Tomada de Decisão](#tomada-de-decisão)
        - [Entregáveis](#entregáveis-2)
    - [3\. Políticas e Processos](#3-políticas-e-processos)
        - [Análise de Dificuldades Imediatas](#análise-de-dificuldades-imediatas)
        - [Priorização de Políticas](#priorização-de-políticas)
        - [Formalizar Processos Existentes](#formalizar-processos-existentes)
        - [Implantação de Novas Políticas](#implantação-de-novas-políticas)
        - [Flexibilidade das Políticas](#flexibilidade-das-políticas)
        - [Entregáveis](#entregáveis-3)
    - [4\. Gestão de Projetos](#4-gestão-de-projetos)
        - [Estabelecer um Cronograma](#estabelecer-um-cronograma)
        - [Iniciativas e Dependências](#iniciativas-e-dependências)
        - [Plano de Projeto Interativo](#plano-de-projeto-interativo)
        - [Aprovação do Orçamento](#aprovação-do-orçamento)
        - [Acompanhamento do Progresso](#acompanhamento-do-progresso)
        - [Entregáveis](#entregáveis-4)
    - [Conclusão](#conclusão-3)
- [Política de Governança: Decisões Críticas e Práticas no Power BI](#política-de-governança-decisões-críticas-e-práticas-no-power-bi)
    - [Introdução](#introdução-6)
    - [1\. Propriedade e Gestão dos Dados](#1-propriedade-e-gestão-dos-dados)
        - [1.1 Autoatendimento Orientado a Negócios](#11-autoatendimento-orientado-a-negócios)
        - [1.2 Autoatendimento Gerenciado](#12-autoatendimento-gerenciado)
        - [1.3 Modelo Empresarial](#13-modelo-empresarial)
    - [2\. Escopo para Entrega de Conteúdo e Dados](#2-escopo-para-entrega-de-conteúdo-e-dados)
        - [2.1 Escopo Pessoal](#21-escopo-pessoal)
        - [2.2 Escopo de Equipe](#22-escopo-de-equipe)
        - [2.3 Escopo Departamental](#23-escopo-departamental)
        - [2.4 Escopo Empresarial](#24-escopo-empresarial)
    - [3\. Áreas Titulares dos Dados](#3-áreas-titulares-dos-dados)
        - [3.1 Identificação dos Titulares dos Dados](#31-identificação-dos-titulares-dos-dados)
        - [3.2 Sensibilidade dos Dados](#32-sensibilidade-dos-dados)
    - [4\. Dados Críticos](#4-dados-críticos)
        - [4.1 Definição de Dados Críticos](#41-definição-de-dados-críticos)
        - [4.2 Gestão de Dados Críticos](#42-gestão-de-dados-críticos)
    - [5\. Principais Decisões na Governança de Dados](#5-principais-decisões-na-governança-de-dados)
        - [5.1 Decisões Estratégicas](#51-decisões-estratégicas)
        - [5.2 Ferramentas e Infraestrutura](#52-ferramentas-e-infraestrutura)
        - [5.3 Processos e Políticas](#53-processos-e-políticas)
    - [Conclusão](#conclusão-4)
- [Implantação de Governança e Níveis de Maturidade](#implantação-de-governança-e-níveis-de-maturidade)
    - [Introdução](#introdução-7)
    - [Níveis de Maturidade](#níveis-de-maturidade)
        - [Nível Inicial](#nível-inicial)
        - [Nível Eficiente](#nível-eficiente)
    - [Avaliando o Nível de Maturidade](#avaliando-o-nível-de-maturidade)
        - [Perguntas para Avaliação](#perguntas-para-avaliação)
        - [Reflexão sobre o Uso do Excel](#reflexão-sobre-o-uso-do-excel)
        - [Cultura Organizacional e Governança](#cultura-organizacional-e-governança)
    - [Planejamento da Estratégia de Governança](#planejamento-da-estratégia-de-governança)
        - [Dosando Esforços e Planejamento](#dosando-esforços-e-planejamento)
        - [Implementação e Melhoria Contínua](#implementação-e-melhoria-contínua)
    - [Conclusão](#conclusão-5)
    - [Governança ☝️](#governança-point_up)
    - [Cultura de dados 👇](#cultura-de-dados-point_down)
- [Adoção Organizacional](#adoção-organizacional)
    - [Introdução](#introdução-8)
    - [Tipos de Adoção](#tipos-de-adoção)
        - [Adoção Organizacional](#adoção-organizacional-2)
            - [Níveis de Maturidade](#níveis-de-maturidade-2)
                - [Nível 100: Inicial](#nível-100-inicial)
                    - [Características](#características)
                    - [Desafios](#desafios)
                - [Nível 200: Repetível](#nível-200-repetível)
                    - [Características](#características-2)
                    - [Desafios](#desafios-2)
                - [Nível 300: Definido](#nível-300-definido)
                    - [Características](#características-3)
                    - [Desafios](#desafios-3)
                - [Nível 400: Capaz](#nível-400-capaz)
                    - [Características](#características-4)
                    - [Desafios](#desafios-4)
                - [Nível 500: Eficiente](#nível-500-eficiente)
                    - [Características](#características-5)
                    - [Desafios](#desafios-5)
    - [Conclusão](#conclusão-6)
- [Adoção do Usuário e da Solução](#adoção-do-usuário-e-da-solução)
    - [Introdução](#introdução-9)
    - [1\. Adoção do Usuário](#1-adoção-do-usuário)
        - [1.1 Conscientização](#11-conscientização)
        - [1.2 Reconhecimento](#12-reconhecimento)
        - [1.3 Impulso](#13-impulso)
        - [1.4 Proficiência](#14-proficiência)
    - [2\. Adoção da Solução](#2-adoção-da-solução)
        - [2.1 Teste de Ideias](#21-teste-de-ideias)
        - [2.2 Funcionalidade Básica](#22-funcionalidade-básica)
        - [2.3 Valor Tangível](#23-valor-tangível)
        - [2.4 Essencial](#24-essencial)
    - [3\. Governança e Boas Práticas](#3-governança-e-boas-práticas)
        - [3.1 Estrutura de Governança](#31-estrutura-de-governança)
        - [3.2 Políticas de Acesso e Segurança](#32-políticas-de-acesso-e-segurança)
        - [3.3 Controle de Qualidade dos Dados](#33-controle-de-qualidade-dos-dados)
    - [4\. Medição e Ajuste de Estratégia](#4-medição-e-ajuste-de-estratégia)
        - [4.1 Indicadores de Sucesso](#41-indicadores-de-sucesso)
        - [4.2 Ajuste de Estratégia](#42-ajuste-de-estratégia)
        - [4.3 Cultura de Dados](#43-cultura-de-dados)
    - [Conclusão](#conclusão-7)
- [Cultura de Dados - Definição](#cultura-de-dados-definição)
    - [Introdução](#introdução-10)
    - [O Que é Cultura de Dados?](#o-que-é-cultura-de-dados)
        - [Definição](#definição)
        - [Comportamentos e Normas](#comportamentos-e-normas)
    - [Benefícios de uma Cultura de Dados Forte](#benefícios-de-uma-cultura-de-dados-forte)
        - [Melhoria nas Decisões](#melhoria-nas-decisões)
        - [Agilidade na Tomada de Decisões](#agilidade-na-tomada-de-decisões)
        - [Inovação](#inovação)
        - [Melhor Comunicação e Colaboração](#melhor-comunicação-e-colaboração)
    - [Influenciadores da Cultura de Dados](#influenciadores-da-cultura-de-dados)
        - [Diferentes Áreas e Comportamentos](#diferentes-áreas-e-comportamentos)
        - [Capacitação](#capacitação)
        - [Suporte Executivo](#suporte-executivo)
        - [Centro de Excelência](#centro-de-excelência)
        - [Alfabetização dos Dados](#alfabetização-dos-dados)
        - [Democratização e Descoberta dos Dados](#democratização-e-descoberta-dos-dados)
    - [Propriedade e Gestão do Conteúdo](#propriedade-e-gestão-do-conteúdo)
        - [Escopo da Entrega](#escopo-da-entrega)
    - [Conclusão](#conclusão-8)
- [Os Três Aspectos Essenciais da Cultura de Dados](#os-três-aspectos-essenciais-da-cultura-de-dados)
    - [Introdução](#introdução-11)
    - [Descoberta de Dados](#descoberta-de-dados)
        - [O que é Descoberta de Dados?](#o-que-é-descoberta-de-dados)
        - [Diferença entre Descoberta e Pesquisa de Dados](#diferença-entre-descoberta-e-pesquisa-de-dados)
        - [Contribuições da Descoberta para a Cultura de Dados](#contribuições-da-descoberta-para-a-cultura-de-dados)
        - [Importância do Processo de Solicitação de Acesso](#importância-do-processo-de-solicitação-de-acesso)
    - [Democratização dos Dados](#democratização-dos-dados)
        - [Torne os Dados Acessíveis](#torne-os-dados-acessíveis)
        - [Capacitação dos Usuários](#capacitação-dos-usuários-2)
        - [Equilíbrio entre Democratização e Segurança](#equilíbrio-entre-democratização-e-segurança)
        - [Garantia de Níveis de Permissão de Acesso](#garantia-de-níveis-de-permissão-de-acesso)
    - [Alfabetização dos Dados](#alfabetização-dos-dados-2)
        - [O que é Alfabetização dos Dados?](#o-que-é-alfabetização-dos-dados)
        - [Treinamentos em Habilidades Tecnológicas](#treinamentos-em-habilidades-tecnológicas)
        - [Atividades Importantes para a Alfabetização](#atividades-importantes-para-a-alfabetização)
        - [Benefícios da Alfabetização de Dados](#benefícios-da-alfabetização-de-dados)
    - [Considerações Finais](#considerações-finais-3)
    - [Cultura de dados ☝️](#cultura-de-dados-point_up)
    - [Cenários de uso 👇](#cenários-de-uso-point_down)
- [Estratégias de Propriedade de Conteúdo e Entrega](#estratégias-de-propriedade-de-conteúdo-e-entrega)
    - [Introdução](#introdução-12)
    - [Autoatendimento Orientado a Negócios](#autoatendimento-orientado-a-negócios)
        - [Definição](#definição-2)
        - [Características](#características-6)
        - [Quando Usar](#quando-usar)
    - [Autoatendimento Gerenciado](#autoatendimento-gerenciado)
        - [Definição](#definição-3)
        - [Características](#características-7)
        - [Quando Usar](#quando-usar-2)
    - [Empresarial](#empresarial)
        - [Definição](#definição-4)
        - [Características](#características-8)
        - [Quando Usar](#quando-usar-3)
    - [Fatores que Influenciam a Escolha da Estratégia](#fatores-que-influenciam-a-escolha-da-estratégia)
    - [Propriedade e Administração dos Conteúdos](#propriedade-e-administração-dos-conteúdos)
        - [Níveis de Responsabilidades](#níveis-de-responsabilidades)
        - [Importância da Propriedade Definida](#importância-da-propriedade-definida)
- [Escopo de Entrega de Conteúdo](#escopo-de-entrega-de-conteúdo)
    - [Introdução](#introdução-13)
    - [Escopos de Entrega de Conteúdo](#escopos-de-entrega-de-conteúdo)
        - [Escopo Pessoal](#escopo-pessoal)
        - [Escopo de Equipe](#escopo-de-equipe)
        - [Escopo Departamental](#escopo-departamental)
        - [Escopo de Empresa](#escopo-de-empresa)
    - [Práticas de Governança e Manutenção](#práticas-de-governança-e-manutenção)
        - [Práticas de Desenvolvimento](#práticas-de-desenvolvimento)
        - [Requisitos para Governança](#requisitos-para-governança)
        - [Licenciamento](#licenciamento)
    - [Criação e Consumo de Relatórios](#criação-e-consumo-de-relatórios)
        - [Relação Criador vs Consumidor](#relação-criador-vs-consumidor)
        - [Incentivo à Cultura de Dados](#incentivo-à-cultura-de-dados)
    - [Alinhamento de Propriedade e Entrega de Conteúdo](#alinhamento-de-propriedade-e-entrega-de-conteúdo)
        - [Autoatendimento Orientado a Negócios](#autoatendimento-orientado-a-negócios-2)
        - [Autoatendimento Gerenciado](#autoatendimento-gerenciado-2)
        - [Flexibilidade na Propriedade de Conteúdo](#flexibilidade-na-propriedade-de-conteúdo)
    - [Conclusão](#conclusão-9)
- [Como Usar os Cenários](#como-usar-os-cenários)
    - [Introdução](#introdução-14)
    - [Capítulo 1: Colaboração](#capítulo-1-colaboração)
        - [1.1 Cenários de Colaboração](#11-cenários-de-colaboração)
            - [1.1.1 Colaboração por Equipe](#111-colaboração-por-equipe)
            - [1.1.2 Colaboração por Departamento](#112-colaboração-por-departamento)
            - [1.1.3 Colaboração Corporativa](#113-colaboração-corporativa)
    - [Capítulo 2: Autoatendimento](#capítulo-2-autoatendimento)
        - [2.1 Cenários de Autoatendimento](#21-cenários-de-autoatendimento)
            - [2.1.1 Autoatendimento Gerenciado](#211-autoatendimento-gerenciado)
            - [2.1.2 Autoatendimento Personalizável](#212-autoatendimento-personalizável)
        - [2.2 Preparação de Dados](#22-preparação-de-dados)
            - [2.2.1 Preparação de Dados Básica](#221-preparação-de-dados-básica)
            - [2.2.2 Preparação de Dados Avançada](#222-preparação-de-dados-avançada)
    - [Capítulo 3: Gerenciamento e Implantação de Conteúdo](#capítulo-3-gerenciamento-e-implantação-de-conteúdo)
        - [3.1 Cenários de Gerenciamento de Conteúdo](#31-cenários-de-gerenciamento-de-conteúdo)
            - [3.1.1 Conteúdo para Autoatendimento](#311-conteúdo-para-autoatendimento)
            - [3.1.2 Conteúdo Corporativo](#312-conteúdo-corporativo)
        - [3.2 Gerenciamento de Dados Avançados](#32-gerenciamento-de-dados-avançados)
            - [3.2.1 Implementação de Workspaces](#321-implementação-de-workspaces)
    - [Capítulo 4: Ferramentas e Aplicações](#capítulo-4-ferramentas-e-aplicações)
        - [4.1 Power BI](#41-power-bi)
            - [4.1.1 Power BI Desktop](#411-power-bi-desktop)
            - [4.1.2 Exploração de Fontes de Dados](#412-exploração-de-fontes-de-dados)
        - [4.2 Dashboards e Relatórios](#42-dashboards-e-relatórios)
            - [4.2.1 Relatórios](#421-relatórios)
            - [4.2.2 Dashboards](#422-dashboards)
    - [Conclusão](#conclusão-10)
    - [Cenários de uso ☝️](#cenários-de-uso-point_up)
    - [Cenários de Entrega de Conteúdo 👇](#cenários-de-entrega-de-conteúdo-point_down)
- [Power BI para Uso Pessoal](#power-bi-para-uso-pessoal)
    - [Introdução](#introdução-15)
    - [Cenário de Uso Pessoal](#cenário-de-uso-pessoal)
        - [Vantagens do Uso Pessoal](#vantagens-do-uso-pessoal)
        - [Limitações do Uso Pessoal](#limitações-do-uso-pessoal)
    - [Estrutura do Power BI Desktop](#estrutura-do-power-bi-desktop)
        - [Conexão com Fontes de Dados](#conexão-com-fontes-de-dados)
            - [Utilizando o Power Query](#utilizando-o-power-query)
        - [Modelagem de Dados](#modelagem-de-dados)
        - [Criação de Relatórios](#criação-de-relatórios)
    - [Publicação e Navegação de Relatórios](#publicação-e-navegação-de-relatórios)
        - [Publicação no Meu Workspace](#publicação-no-meu-workspace)
        - [Diferença entre Relatórios e Dashboards](#diferença-entre-relatórios-e-dashboards)
    - [Visuais e Funcionalidades Avançadas](#visuais-e-funcionalidades-avançadas)
        - [Exportação de Dados e Relatórios](#exportação-de-dados-e-relatórios)
        - [Alertas e Atualizações](#alertas-e-atualizações)
        - [Sensibilidade e Confidencialidade](#sensibilidade-e-confidencialidade)
    - [Ferramentas e Recursos Adicionais](#ferramentas-e-recursos-adicionais)
        - [Licenças e Acesso](#licenças-e-acesso)
        - [Aplicativos Móveis](#aplicativos-móveis)
        - [Considerações Finais de Segurança](#considerações-finais-de-segurança)
    - [Conclusão](#conclusão-11)
- [BI de Equipe](#bi-de-equipe)
    - [Introdução](#introdução-16)
    - [Capítulo 1: Configuração de Workspaces](#capítulo-1-configuração-de-workspaces)
        - [1.1. Início da Configuração](#11-início-da-configuração)
        - [1.2. Criando um Novo Workspace](#12-criando-um-novo-workspace)
        - [1.3. Configurando Acessos](#13-configurando-acessos)
        - [1.4. Publicação do Relatório](#14-publicação-do-relatório)
        - [1.5. Validação e Endosso](#15-validação-e-endosso)
    - [Capítulo 2: Instalando e Configurando o Gateway](#capítulo-2-instalando-e-configurando-o-gateway)
        - [2.1. Instalação do Gateway](#21-instalação-do-gateway)
        - [2.2. Configuração de Conexões](#22-configuração-de-conexões)
    - [Capítulo 3: Fluxos de Dados](#capítulo-3-fluxos-de-dados)
        - [3.1. Introdução aos Fluxos de Dados](#31-introdução-aos-fluxos-de-dados)
        - [3.2. Criação de Fluxos de Dados](#32-criação-de-fluxos-de-dados)
        - [3.3. Atualização e Endosso de Fluxos de Dados](#33-atualização-e-endosso-de-fluxos-de-dados)
    - [Capítulo 4: Integração e Modelos Semânticos](#capítulo-4-integração-e-modelos-semânticos)
        - [4.1. Conexão de Conjuntos de Dados com Fluxos de Dados](#41-conexão-de-conjuntos-de-dados-com-fluxos-de-dados)
        - [4.2. Vantagens dos Fluxos de Dados](#42-vantagens-dos-fluxos-de-dados)
    - [Conclusão](#conclusão-12)
- [BI Departamental](#bi-departamental)
    - [Sumário](#sumário)
    - [Gerenciamento de Versionamento](#gerenciamento-de-versionamento)
    - [Publicação de Relatórios e Dashboards](#publicação-de-relatórios-e-dashboards)
        - [Principais Componentes](#principais-componentes)
    - [Utilização de Scorecards (interessante)](#utilização-de-scorecards-interessante)
        - [Exemplos de Uso de Scorecards](#exemplos-de-uso-de-scorecards)
    - [Configuração de Alertas](#configuração-de-alertas)
        - [Tipos de Alertas](#tipos-de-alertas)
    - [Exportação de Dados](#exportação-de-dados)
        - [Processo de Exportação](#processo-de-exportação)
    - [Criação de Aplicativos e Audiências (legal para usar com scorecards)](#criação-de-aplicativos-e-audiências-legal-para-usar-com-scorecards)
        - [Passos para Criação de Aplicativos](#passos-para-criação-de-aplicativos)
    - [Distribuição e Administração](#distribuição-e-administração)
        - [Administração de Workspaces](#administração-de-workspaces)
    - [Conclusão](#conclusão-13)
- [BI Corporativo](#bi-corporativo)
    - [Introdução](#introdução-17)
    - [Mudanças no Cenário de BI Corporativo](#mudanças-no-cenário-de-bi-corporativo)
        - [Estrutura e Ferramentas](#estrutura-e-ferramentas)
        - [Power BI Report Builder](#power-bi-report-builder)
    - [Criando Relatórios Paginados](#criando-relatórios-paginados)
        - [Passo a Passo](#passo-a-passo)
        - [Ajustes e Personalizações](#ajustes-e-personalizações)
        - [Impressão e Distribuição](#impressão-e-distribuição)
    - [Licenças e Capacidade](#licenças-e-capacidade)
        - [Tipos de Licenças](#tipos-de-licenças)
        - [Custos e Benefícios](#custos-e-benefícios)
    - [Recomendações para Uso Corporativo](#recomendações-para-uso-corporativo)
        - [Melhores Práticas](#melhores-práticas)
        - [Compartilhamento e Acesso](#compartilhamento-e-acesso)
    - [Considerações Finais](#considerações-finais-4)
        - [Pontos Chave](#pontos-chave)
        - [Próximos Passos](#próximos-passos)
    - [Conclusão](#conclusão-14)
    - [Cenários de Entrega de Conteúdo ☝️](#cenários-de-entrega-de-conteúdo-point_up)
- [Cenários de Autoatendimento (Self-Service BI)👇](#cenários-de-autoatendimento-self-service-bipoint_down)
- [BI de Autoatendimento Gerenciado](#bi-de-autoatendimento-gerenciado)
    - [Introdução](#introdução-18)
    - [Características do BI de Autoatendimento Gerenciado](#características-do-bi-de-autoatendimento-gerenciado)
    - [Diagrama de BI de Autoatendimento Gerenciado](#diagrama-de-bi-de-autoatendimento-gerenciado)
        - [Processo de Publicação](#processo-de-publicação)
            - [Passos:](#passos)
        - [Configuração e Certificação](#configuração-e-certificação)
    - [Conectando-se ao Modelo Semântico](#conectando-se-ao-modelo-semântico)
    - [Editando Modelos Semânticos no Power BI Service](#editando-modelos-semânticos-no-power-bi-service)
        - [Ajustando Medidas](#ajustando-medidas)
    - [Publicação e Gerenciamento de Relatórios](#publicação-e-gerenciamento-de-relatórios)
    - [Permissões e Segurança](#permissões-e-segurança)
        - [Gerenciamento de Permissões](#gerenciamento-de-permissões)
        - [Acesso Direto](#acesso-direto)
    - [Conclusão](#conclusão-15)
- [Autoatendimento Gerenciado Personalizável](#autoatendimento-gerenciado-personalizável)
    - [Introdução](#introdução-19)
    - [Principais Tópicos](#principais-tópicos)
        - [1\. Modelos Semânticos Compartilhados](#1-modelos-semânticos-compartilhados)
            - [1.1 Conceito de Modelo Semântico](#11-conceito-de-modelo-semântico)
            - [1.2 Conexão com Dados CSV](#12-conexão-com-dados-csv)
        - [2\. Modos de Conexão de Dados](#2-modos-de-conexão-de-dados)
            - [2.1 Live Connection](#21-live-connection)
            - [2.2 Direct Query](#22-direct-query)
        - [3\. Integração e Transformação de Dados](#3-integração-e-transformação-de-dados)
            - [3.1 Processo de Integração](#31-processo-de-integração)
            - [3.2 Transformação de Dados e Parâmetros](#32-transformação-de-dados-e-parâmetros)
        - [4\. Relacionamentos de Tabelas](#4-relacionamentos-de-tabelas)
            - [4.1 Criação e Ajuste de Relacionamentos](#41-criação-e-ajuste-de-relacionamentos)
            - [4.2 Exemplo de Relacionamento](#42-exemplo-de-relacionamento)
        - [5\. Modelos Compostos](#5-modelos-compostos)
            - [5.1 Definição e Utilização](#51-definição-e-utilização)
            - [5.2 Benefícios e Limitações](#52-benefícios-e-limitações)
        - [6\. Boas Práticas e Dicas](#6-boas-práticas-e-dicas)
            - [6.1 Planejamento de Direct Query](#61-planejamento-de-direct-query)
            - [6.2 Publicação e Manutenção de Relatórios](#62-publicação-e-manutenção-de-relatórios)
        - [7\. Conectividade e Linhagem](#7-conectividade-e-linhagem)
            - [7.1 Estrutura de Conexão](#71-estrutura-de-conexão)
            - [7.2 Exemplos de Configuração](#72-exemplos-de-configuração)
    - [Conclusão](#conclusão-16)
- [Preparação de Dados de Autoatendimento](#preparação-de-dados-de-autoatendimento)
    - [Introdução à Análise de Dados](#introdução-à-análise-de-dados)
    - [Estrutura de Camadas para Modelagem de Dados](#estrutura-de-camadas-para-modelagem-de-dados)
        - [Ambiente de Três Camadas](#ambiente-de-três-camadas)
        - [Importância da Estrutura em Camadas](#importância-da-estrutura-em-camadas)
    - [Criação e Manutenção de Fluxos de Dados](#criação-e-manutenção-de-fluxos-de-dados)
        - [Criando um Workspace de Fluxos de Dados](#criando-um-workspace-de-fluxos-de-dados)
        - [Configuração de Fontes de Dados](#configuração-de-fontes-de-dados)
    - [Modelagem Semântica](#modelagem-semântica)
        - [Criação de Modelos Semânticos](#criação-de-modelos-semânticos)
        - [Importância dos Modelos Semânticos](#importância-dos-modelos-semânticos)
    - [Relatórios e Dashboards](#relatórios-e-dashboards)
        - [Conectando Relatórios ao Modelo Semântico](#conectando-relatórios-ao-modelo-semântico)
        - [Publicação e Verificação de Relatórios](#publicação-e-verificação-de-relatórios)
    - [Boas Práticas em Análise de Dados](#boas-práticas-em-análise-de-dados)
        - [Garantir a Consolidação da Única Fonte da Verdade](#garantir-a-consolidação-da-única-fonte-da-verdade)
        - [Solicitar Aprovações e Cargas de Novos Dados](#solicitar-aprovações-e-cargas-de-novos-dados)
        - [Manutenção de Padrões de Nomeação e Organização](#manutenção-de-padrões-de-nomeação-e-organização)
    - [Conclusão](#conclusão-17)
- [Cenários de Autoatendimento (Self-Service BI) ☝️](#cenários-de-autoatendimento-self-service-bi-point_up)
- [Gerenciamento e Implantação de Conteúdo👇](#gerenciamento-e-implantação-de-conteúdopoint_down)
- [Publicação de Conteúdo de Autoatendimento](#publicação-de-conteúdo-de-autoatendimento)
    - [Introdução](#introdução-20)
    - [Publicação de Conteúdo de Autoatendimento](#publicação-de-conteúdo-de-autoatendimento-2)
        - [Pipelines de Implantação](#pipelines-de-implantação)
            - [Ambientes Separados](#ambientes-separados)
            - [Permissões](#permissões)
        - [Configuração dos Workspaces](#configuração-dos-workspaces)
            - [Salvar e Compartilhar](#salvar-e-compartilhar)
    - [Fluxos de Dados e Modelos Semânticos](#fluxos-de-dados-e-modelos-semânticos)
        - [Consumo de Dados e Modelos Semânticos](#consumo-de-dados-e-modelos-semânticos)
        - [Recarregar e Atualizar Dados](#recarregar-e-atualizar-dados)
    - [Automação e Regras de Implantação](#automação-e-regras-de-implantação)
        - [Automatizando a Mudança da Base de Dados](#automatizando-a-mudança-da-base-de-dados)
        - [Parâmetros de Implantação](#parâmetros-de-implantação)
    - [Controle de Versão e Publicação](#controle-de-versão-e-publicação)
        - [Publicação Estruturada](#publicação-estruturada)
    - [Aplicativos Power BI](#aplicativos-power-bi)
        - [Criação e Atualização de Aplicativos](#criação-e-atualização-de-aplicativos)
    - [Considerações Finais](#considerações-finais-5)
- [Publicação de Conteúdo Corporativo com Power BI](#publicação-de-conteúdo-corporativo-com-power-bi)
    - [Introdução](#introdução-21)
    - [Cenários de Publicação de Conteúdo](#cenários-de-publicação-de-conteúdo)
        - [Conexão e Criação de Relatórios](#conexão-e-criação-de-relatórios)
            - [Power BI Desktop](#power-bi-desktop)
            - [Tabular Editor](#tabular-editor)
        - [Ferramentas de Desenvolvimento](#ferramentas-de-desenvolvimento)
            - [Visual Studio Code](#visual-studio-code)
    - [Integração com Controle de Versão e Implantação](#integração-com-controle-de-versão-e-implantação)
        - [Azure DevOps](#azure-devops)
        - [GitHub](#github)
        - [Cenário de Pipeline de Implantação](#cenário-de-pipeline-de-implantação)
    - [Passo a Passo: Utilizando o GitHub e Azure DevOps](#passo-a-passo-utilizando-o-github-e-azure-devops)
        - [Uso do GitHub](#uso-do-github)
        - [Uso do Azure DevOps](#uso-do-azure-devops)
        - [Integração do Power BI com Azure DevOps](#integração-do-power-bi-com-azure-devops)
    - [Considerações Finais](#considerações-finais-6)
- [APIs](#apis)
    - [Introdução](#introdução-22)
    - [Configuração do Ambiente](#configuração-do-ambiente)
        - [Acesso às APIs](#acesso-às-apis)
        - [Segurança e Acesso](#segurança-e-acesso)
    - [Interação com Workspaces](#interação-com-workspaces)
        - [Autorização de Usuário](#autorização-de-usuário)
    - [Execução de Consultas com APIs](#execução-de-consultas-com-apis)
        - [Documentação e Verificação de Endpoints](#documentação-e-verificação-de-endpoints)
        - [Exemplo de Atualização de Conjuntos de Dados](#exemplo-de-atualização-de-conjuntos-de-dados)
    - [Token de Autenticação](#token-de-autenticação)
        - [Renovação do Token](#renovação-do-token)
    - [Execução de Consultas DAX](#execução-de-consultas-dax)
        - [Execução de Consultas no Power BI](#execução-de-consultas-no-power-bi)
    - [Integração com Outras Ferramentas](#integração-com-outras-ferramentas)
        - [Aplicações Práticas](#aplicações-práticas)
    - [Conclusão](#conclusão-18)
- [Gerenciamento e Implantação de Conteúdo ☝️](#gerenciamento-e-implantação-de-conteúdo-point_up)
- [Segurança e Performance👇](#segurança-e-performancepoint_down)
- [OLS](#ols)
    - [Objetivos](#objetivos)
- [Configurando Perfis de Usuários](#configurando-perfis-de-usuários)
    - [Criação de Perfis](#criação-de-perfis)
        - [Passos](#passos-2)
    - [Salvando Perfis](#salvando-perfis)
- [Restringindo Tabelas e Colunas](#restringindo-tabelas-e-colunas)
    - [Usando o Tabular Editor](#usando-o-tabular-editor)
        - [Restrições para Vendedores](#restrições-para-vendedores)
        - [Restrições para Gerentes](#restrições-para-gerentes)
    - [Testando as Restrições](#testando-as-restrições)
        - [Teste para Vendedores](#teste-para-vendedores)
        - [Teste para Gerentes](#teste-para-gerentes)
- [Combinação de Perfis](#combinação-de-perfis)
    - [Unificação de Perfis](#unificação-de-perfis)
        - [Configurando Unificação](#configurando-unificação)
    - [Restrições Combinadas](#restrições-combinadas)
        - [Exemplo](#exemplo)
- [Publicação e Funcionalidade](#publicação-e-funcionalidade)
    - [Publicando e Testando no Ambiente Real](#publicando-e-testando-no-ambiente-real)
        - [Verificação Final](#verificação-final)
    - [Garantia de Segurança](#garantia-de-segurança)
- [Conclusão](#conclusão-19)
- [Query Folding](#query-folding)
    - [Introdução](#introdução-23)
    - [O que é Query Folding?](#o-que-é-query-folding)
    - [Conectando ao Banco de Dados](#conectando-ao-banco-de-dados)
        - [Passos para Conexão](#passos-para-conexão)
    - [Explorando a Tabela](#explorando-a-tabela)
        - [Filtragem de Dados](#filtragem-de-dados)
        - [Seleção de Colunas](#seleção-de-colunas)
    - [Adicionando Cálculos](#adicionando-cálculos)
    - [Limitações e Cuidados](#limitações-e-cuidados)
        - [Exemplo de Função que Quebra o Query Folding](#exemplo-de-função-que-quebra-o-query-folding)
    - [Otimização de Etapas](#otimização-de-etapas)
        - [Invertendo a Ordem das Etapas](#invertendo-a-ordem-das-etapas)
    - [Vantagens do Query Folding](#vantagens-do-query-folding)
    - [Conclusão](#conclusão-20)
- [Atualização Incremental em Power BI](#atualização-incremental-em-power-bi)
    - [Introdução](#introdução-24)
    - [Vantagens da Atualização Incremental](#vantagens-da-atualização-incremental)
        - [Eficiência](#eficiência)
        - [Redução de Impacto em Sistemas Externos](#redução-de-impacto-em-sistemas-externos)
        - [Customização pelo Período](#customização-pelo-período)
    - [Como Configurar a Atualização Incremental](#como-configurar-a-atualização-incremental)
        - [Passo 1: Criação de Parâmetros](#passo-1-criação-de-parâmetros)
        - [Passo 2: Filtrar Dados](#passo-2-filtrar-dados)
        - [Passo 3: Configuração do Refresh Incremental](#passo-3-configuração-do-refresh-incremental)
    - [Verificação das Partições](#verificação-das-partições)
        - [Conectando ao Tabular Editor](#conectando-ao-tabular-editor)
    - [Publicação e Atualização de Relatório](#publicação-e-atualização-de-relatório)
        - [Publicação](#publicação)
        - [Verificação de Dados Atualizados](#verificação-de-dados-atualizados)
    - [Considerações Finais](#considerações-finais-7)
- [Entendendo o Funcionamento do Direct Query no Power BI](#entendendo-o-funcionamento-do-direct-query-no-power-bi)
    - [Introdução](#introdução-25)
    - [Conectando-se ao Banco de Dados](#conectando-se-ao-banco-de-dados)
        - [Passo a Passo Inicial](#passo-a-passo-inicial)
        - [Seleção de Tabelas](#seleção-de-tabelas)
    - [Criando Medidas no Power BI](#criando-medidas-no-power-bi)
        - [Medidas Básicas](#medidas-básicas)
        - [Visualização no Relatório](#visualização-no-relatório)
    - [Atualização em Tempo Real](#atualização-em-tempo-real)
        - [Script de Inserção de Dados](#script-de-inserção-de-dados)
        - [Configuração de Parâmetros de Atualização](#configuração-de-parâmetros-de-atualização)
    - [Publicação e Criação de Workspaces](#publicação-e-criação-de-workspaces)
        - [Publicação do Relatório](#publicação-do-relatório)
        - [Monitoramento de Atualizações](#monitoramento-de-atualizações)
    - [Considerações Finais](#considerações-finais-8)
        - [Desempenho e Escalabilidade](#desempenho-e-escalabilidade)
        - [Boas Práticas](#boas-práticas)
    - [Conclusão](#conclusão-21)
- [Modelos Compostos no Power BI (interessante!!)](#modelos-compostos-no-power-bi-interessante)
    - [Introdução aos Modelos Compostos](#introdução-aos-modelos-compostos)
        - [Modos de Conexão](#modos-de-conexão)
        - [Vantagens dos Modelos Compostos](#vantagens-dos-modelos-compostos)
    - [Implementação de Modelos Compostos](#implementação-de-modelos-compostos)
        - [Escolha de Modo de Carregamento](#escolha-de-modo-de-carregamento)
        - [Exemplos de Modelagem](#exemplos-de-modelagem)
        - [Criação de Relacionamentos](#criação-de-relacionamentos)
    - [Desafios e Boas Práticas](#desafios-e-boas-práticas)
        - [Desempenho e Escalabilidade](#desempenho-e-escalabilidade-2)
        - [Manutenção e Atualização de Dados](#manutenção-e-atualização-de-dados)
    - [Conclusão](#conclusão-22)
- [Comparando Modo Import e Direct Query](#comparando-modo-import-e-direct-query)
    - [Introdução](#introdução-26)
    - [Direction Query: Visão Geral](#direction-query-visão-geral)
        - [O que é o Direct Query?](#o-que-é-o-direct-query)
        - [Benefícios do Direct Query](#benefícios-do-direct-query)
        - [Desvantagens do Direct Query](#desvantagens-do-direct-query)
    - [Modo Import](#modo-import)
        - [O que é o Modo Import?](#o-que-é-o-modo-import)
        - [Benefícios do Modo Import](#benefícios-do-modo-import)
        - [Desvantagens do Modo Import](#desvantagens-do-modo-import)
    - [Comparação: Direct Query vs. Modo Import](#comparação-direct-query-vs-modo-import)
        - [Escolhendo o Modo Certo](#escolhendo-o-modo-certo)
        - [Exemplos de Aplicação](#exemplos-de-aplicação)
    - [Melhores Práticas para Uso de Direct Query](#melhores-práticas-para-uso-de-direct-query)
        - [Otimizando Desempenho](#otimizando-desempenho)
        - [Misturando Modo Import e Direct Query](#misturando-modo-import-e-direct-query)
    - [Conclusão](#conclusão-23)
- [Tabelas Híbridas no Power BI: Explorando o Melhor dos Dois Mundos](#tabelas-híbridas-no-power-bi-explorando-o-melhor-dos-dois-mundos)
    - [Introdução](#introdução-27)
    - [O que são Tabelas Híbridas?](#o-que-são-tabelas-híbridas)
        - [Funcionamento das Tabelas Híbridas](#funcionamento-das-tabelas-híbridas)
    - [Configuração de uma Tabela Híbrida](#configuração-de-uma-tabela-híbrida)
        - [1\. Configuração Inicial](#1-configuração-inicial)
            - [Passo 1: Importação de Dados](#passo-1-importação-de-dados)
            - [Passo 2: Configuração de Parâmetros de Carga Incremental](#passo-2-configuração-de-parâmetros-de-carga-incremental)
            - [Passo 3: Aplicando os Filtros](#passo-3-aplicando-os-filtros)
        - [2\. Configuração de Refresh Incremental](#2-configuração-de-refresh-incremental)
            - [Passo 4: Configuração do Refresh Incremental](#passo-4-configuração-do-refresh-incremental)
            - [Passo 5: Habilitação do Modo Direct Query em Tempo Real](#passo-5-habilitação-do-modo-direct-query-em-tempo-real)
    - [Publicação e Monitoração](#publicação-e-monitoração)
        - [Lembretes Importantes](#lembretes-importantes)
    - [Otimização e Cuidados](#otimização-e-cuidados)
        - [Boas Práticas de Uso](#boas-práticas-de-uso)
        - [Potenciais Desafios](#potenciais-desafios)
    - [Considerações Finais](#considerações-finais-9)
- [Hybrid Tables sem Licença Premium](#hybrid-tables-sem-licença-premium)
    - [Introdução](#introdução-28)
    - [Divisão de Tabelas: Import e Direct Query](#divisão-de-tabelas-import-e-direct-query)
        - [Por que Separar?](#por-que-separar)
        - [Implementação Inicial](#implementação-inicial)
        - [Considerações de Desempenho](#considerações-de-desempenho)
    - [Medidas de Desempenho no Power BI](#medidas-de-desempenho-no-power-bi)
        - [Criação de Medidas](#criação-de-medidas)
        - [Análise de Otimização](#análise-de-otimização)
    - [Avançando com Relatórios](#avançando-com-relatórios)
        - [Trabalhando com Datas](#trabalhando-com-datas)
        - [Ajustes Otimizados](#ajustes-otimizados)
    - [Conclusão](#conclusão-24)
    - [Considerações Finais](#considerações-finais-10)
- [Otimização de Modelos de Dados para Power BI](#otimização-de-modelos-de-dados-para-power-bi)
    - [Introdução](#introdução-29)
    - [Capítulo 1: Desafios de Armazenamento no Power BI](#capítulo-1-desafios-de-armazenamento-no-power-bi)
        - [1.1 Limitações de Tamanho](#11-limitações-de-tamanho)
        - [1.2 A Necessidade de Otimização](#12-a-necessidade-de-otimização)
    - [Capítulo 2: Estratégias de Otimização](#capítulo-2-estratégias-de-otimização)
        - [2.1 Redução do Tamanho da Base de Dados](#21-redução-do-tamanho-da-base-de-dados)
        - [2.2 Uso de Agregações](#22-uso-de-agregações)
    - [Capítulo 3: Análise Detalhada e Agregações](#capítulo-3-análise-detalhada-e-agregações)
        - [3.1 Consulta em Tabelas Agregadas](#31-consulta-em-tabelas-agregadas)
        - [3.2 Acesso a Dados Detalhados](#32-acesso-a-dados-detalhados)
    - [Capítulo 4: Avaliação de Performance do Modelo](#capítulo-4-avaliação-de-performance-do-modelo)
        - [4.1 Uso do DAX Studio](#41-uso-do-dax-studio)
        - [4.2 Identificação de Problemas no Modelo](#42-identificação-de-problemas-no-modelo)
    - [Capítulo 5: Implementação de Melhorias](#capítulo-5-implementação-de-melhorias)
        - [5.1 Revisão de Estruturas de Dados](#51-revisão-de-estruturas-de-dados)
        - [5.2 Remoção de Colunas Desnecessárias](#52-remoção-de-colunas-desnecessárias)
    - [Conclusão](#conclusão-25)
    - [Apêndice: Ferramentas e Recursos Adicionais](#apêndice-ferramentas-e-recursos-adicionais)
- [Segurança e Performance ☝️](#segurança-e-performance-point_up)
- [Melhoria Continua👇](#melhoria-continuapoint_down)
- [Criação de um Centro de Excelência (Center of Excellence - CoE)](#criação-de-um-centro-de-excelência-center-of-excellence-coe)
    - [Introdução](#introdução-30)
    - [Objetivos do Centro de Excelência](#objetivos-do-centro-de-excelência)
        - [Evangelizar uma Cultura Orientada a Dados](#evangelizar-uma-cultura-orientada-a-dados)
        - [Promover a Adoção de Análises](#promover-a-adoção-de-análises)
    - [Benefícios de ter um Centro de Excelência](#benefícios-de-ter-um-centro-de-excelência)
        - [Coordenação e Disseminação do Conhecimento](#coordenação-e-disseminação-do-conhecimento)
        - [Redução da Dívida Técnica](#redução-da-dívida-técnica)
    - [Responsabilidades do Centro de Excelência](#responsabilidades-do-centro-de-excelência)
        - [Mentoria e Engajamento](#mentoria-e-engajamento)
        - [Apoio às Áreas de Negócio](#apoio-às-áreas-de-negócio)
        - [Criação e Promoção de Materiais de Treinamento](#criação-e-promoção-de-materiais-de-treinamento)
    - [Estrutura e Habilidades Necessárias](#estrutura-e-habilidades-necessárias)
        - [Estrutura Básica de Membros](#estrutura-básica-de-membros)
        - [Modelos de Estrutura do Centro de Excelência](#modelos-de-estrutura-do-centro-de-excelência)
            - [Centralizado](#centralizado)
            - [Unificado](#unificado)
            - [Federado](#federado)
    - [Conclusão](#conclusão-26)
- [Gestão de Mudanças: Conceitos e Práticas](#gestão-de-mudanças-conceitos-e-práticas)
    - [Introdução](#introdução-31)
    - [Benefícios da Mudança](#benefícios-da-mudança)
        - [Uso Eficaz das Análises](#uso-eficaz-das-análises)
        - [Limitação de Redundância](#limitação-de-redundância)
        - [Redução de Comportamento de Risco](#redução-de-comportamento-de-risco)
        - [Mitigação da Resistência](#mitigação-da-resistência)
    - [Obstáculos na Gestão de Mudanças](#obstáculos-na-gestão-de-mudanças)
        - [Envolvimento de Pessoas](#envolvimento-de-pessoas)
        - [Empatia e Comunicação](#empatia-e-comunicação)
    - [Tipos de Mudanças](#tipos-de-mudanças)
        - [Nível de Processo](#nível-de-processo)
        - [Nível de Solução](#nível-de-solução)
    - [Abordagem Incremental](#abordagem-incremental)
        - [Definir o Que Está Mudando](#definir-o-que-está-mudando)
        - [Descrever o Impacto da Mudança](#descrever-o-impacto-da-mudança)
        - [Identificar Prioridades](#identificar-prioridades)
        - [Planejar a Implementação Incremental](#planejar-a-implementação-incremental)
        - [Planejar Treinamento e Suporte](#planejar-treinamento-e-suporte)
    - [Envolvimento da Liderança e Stakeholders](#envolvimento-da-liderança-e-stakeholders)
        - [Importância da Liderança](#importância-da-liderança)
        - [Engajamento de Promotores e Tratamento de Detratores](#engajamento-de-promotores-e-tratamento-de-detratores)
    - [Comunicação Eficaz](#comunicação-eficaz)
        - [Estrutura da Comunicação](#estrutura-da-comunicação)
        - [Informação de Contato](#informação-de-contato)
    - [Conclusão](#conclusão-27)
- [Melhoria Continua☝️](#melhoria-continuapoint_up)

* * *

&nbsp;

> ## Governança 👇
> 
> Documentação oficial Microsoft de Governança (tem tudo aqui): https://learn.microsoft.com/en-us/power-bi/guidance/fabric-adoption-roadmap-governance
> 
> Conteúdo modulo de governança: [Governança de Dados - Xperiun](../HardSkills/Governança%20de%20Dados%20-%20Materiais%20Xperiun.md)

# Governança Eficaz no Power BI

## Introdução à Governança de Dados

### Conceito de Governança de Dados

Governança de dados é um sistema de direitos de decisão e responsabilidades para processos relacionados a informações, executados segundo um modelo acordado. Este modelo descreve quem pode tomar decisões, com quais informações, quando e em quais circunstâncias, usando quais métodos.

### Importância da Governança

A governança de dados não se concentra apenas nos dados em si, mas em garantir a segurança, qualidade e ciclo de vida dos dados. O objetivo principal é controlar o comportamento do usuário para assegurar uma boa gestão dos dados organizacionais.

## Objetivos da Governança de Dados no Power BI

### Empoderamento dos Usuários

Garantir que os usuários tenham o poder adequado para trabalhar com os dados, sem excessos e com a flexibilidade necessária conforme as autorizações. Isso permite um uso eficiente e seguro dos dados dentro das limitações estabelecidas.

### Conformidade Regulatória

Manter a conformidade com as regulamentações vigentes, como a LGPD (Lei Geral de Proteção de Dados) e GDPR (General Data Protection Regulation), é crucial. Isso inclui garantir que todos os dados, sejam eles pessoais ou não, estejam em conformidade com as leis aplicáveis.

### Satisfação dos Requisitos Internos

Além de atender às exigências externas, é essencial cumprir também os requisitos internos da organização. Os dados devem ser úteis e servir aos propósitos da empresa, assegurando que eles estejam bem gerenciados tanto do ponto de vista legal quanto operacional.

## Técnicas e Ferramentas para Governança no Power BI

### Processo de Implementação

#### Definição de Papéis e Responsabilidades

Estabelecer claramente quem faz o quê dentro da organização é um passo fundamental. Isso ajuda a evitar ambiguidade e garante que todos saibam suas responsabilidades específicas.

#### Desenvolvimento e Uso de Políticas de Governança

Criar políticas que regulem como os dados devem ser tratados é essencial para a implementação de uma governança eficaz. Essas políticas devem ser claras, acessíveis e aplicáveis a todos os membros da organização.

#### Monitoramento e Auditoria

Um sistema de monitoramento constante e auditorias periódicas são essenciais para garantir que as políticas de governança estejam sendo seguidas. Dessa forma, é possível identificar e corrigir desvios de maneira proativa.

### Ferramentas de Governança no Power BI

#### Segurança e Gestão de Acessos

Utilizar as funcionalidades de segurança do Power BI para controlar quem tem acesso a quais dados. Isso inclui a configuração de permissões específicas e o uso de autenticações fortes.

#### Controle de Qualidade de Dados

Implementar ferramentas e processos de controle de qualidade para garantir que os dados inseridos e geridos no Power BI sejam precisos, completos e confiáveis.

#### Relatórios e Dashboards de Monitoramento

Criar relatórios e dashboards que ajudam a visualizar o status da conformidade e a qualidade dos dados. Isso facilita a identificação de áreas que necessitam de melhorias e permite uma gestão proativa.

## Estratégias para Capacitação de Usuários

### Treinamento e Desenvolvimento

#### Cursos e Workshops

Oferecer cursos e workshops periódicos para garantir que todos os usuários estejam atualizados sobre as melhores práticas de governança e uso do Power BI.

#### Recursos Educativos

Produzir materiais educativos, como manuais e tutoriais, para que os usuários possam consultar sempre que necessário.

### Suporte Contínuo

#### Times de Suporte Dedicados

Estabelecer um time de suporte dedicado que possa auxiliar os usuários em questões relacionadas à governança e uso do Power BI.

#### Fóruns e Comunidades Internas

Criar fóruns e comunidades internas onde os usuários possam compartilhar experiências, tirar dúvidas e colaborar em melhores práticas.

## Considerações Finais

A governança de dados no Power BI é um elemento essencial para qualquer organização que deseja gerenciar seus dados de maneira eficiente, segura e em conformidade com as leis. Empoderar os usuários, garantir a conformidade regulatória e atender aos requisitos internos são os pilares fundamentais para uma governança eficaz. Com as técnicas, ferramentas e estratégias adequadas, é possível alcançar esses objetivos e otimizar a gestão de dados organizacionais. Vejo vocês na próxima aula.

* * *

&nbsp;

# Implantação de Governança de Dados

## Introdução

Quando estamos implementando governança de dados em uma empresa, é crucial considerar a cultura de dados existente. A implantação eficaz requer uma estratégia que esteja alinhada com a maturidade da empresa em relação à essa cultura.

## Estratégia de Governança

### Definindo a Estratégia

Antes de iniciar qualquer processo de governança, é essencial definir uma estratégia de governança. Essa estratégia deve estar inteiramente alinhada com a cultura de dados da organização.

#### Alinhamento com a Cultura de Dados

Se a empresa possui uma baixa maturidade em cultura de dados, tentar implementar uma política de governança muito rigorosa pode causar mais problemas do que soluções. É necessário balancear o nível de maturidade da empresa para criar uma estratégia de governança eficaz.

### Objetivos da Governança

#### Capacitação dos Usuários

O primeiro e mais importante objetivo é capacitar os usuários para que utilizem os dados corretamente e tomem decisões informadas e autorizadas.

#### Melhoria da Experiência do Usuário

Uma política de governança muito rígida pode desmotivar os usuários, especialmente em empresas com baixa maturidade em cultura de dados. Assim, a experiência do usuário deve ser melhorada através de diretrizes claras e transparentes.

#### Uso Adequado dos Dados

É crucial garantir que os dados sejam utilizados de maneira adequada e de acordo com as necessidades do negócio. Isso inclui assegurar a qualidade, segurança e pertinência dos dados compartilhados entre os departamentos.

#### Definição de Responsabilidades

Todos os dados devem ter um proprietário responsável por garantir sua qualidade. Isso inclui um organograma claro de quem administra, atualiza e gerencia os dados.

#### Padronização

A padronização de dados, sejam eles de publicação, compartilhamento ou conexão, facilita a comunicação e reduz atritos, especialmente entre departamentos vizinhos.

#### Redução de Riscos de Vazamento

Governança adequada inclui controles que reduzem os riscos de vazamento de dados, sejam eles sensíveis ou não.

#### Atender aos Requisitos Regulatórios

Atender tanto os requisitos regulatórios internos quanto externos é um objetivo crucial da governança de dados.

## Processo de Implantação

### A Tríade: Processos, Pessoas e Tecnologia (!!!!!)

Combinar processos bem definidos com pessoas capacitadas e tecnologias adequadas é a essência da governança de dados. Isso cria um círculo virtuoso de melhoria contínua.

### Importância da Capacitação

Capacitar os usuários é fundamental para a aceitação e sucesso das políticas de governança. A capacitação contínua também ajuda a melhorar os processos e o uso da tecnologia.

#### Dica da Microsoft

Uma estratégia de governança de dados bem executada facilita que mais usuários trabalhem com os dados. Quando abordada pela perspectiva da capacitação do usuário, é mais provável que eles sigam os processos documentados.

### Follow-Up e Adaptação

Conforme a governança é implementada, é importante acompanhar sua eficácia e adaptar a estratégia conforme necessário. Isso garante que as metas estabelecidas sejam atendidas de maneira eficiente e que a adoção seja alta entre os usuários.

## Conclusão

A governança de dados, quando bem implantada, não apenas assegura a segurança e a qualidade dos dados, mas também capacita os usuários a utilizá-los de maneira eficiente e informada. Com uma estratégia bem definida e alinhada à cultura da empresa, torna-se possível agregar valor continuamente através de melhores análises e processos aprimorados.

* * *

&nbsp;

# Governança e Implantação Gradativa nas Organizações

## Introdução

A governança nunca será bem aceita quando imposta de maneira autoritária e sem consideração ao ambiente de trabalho dos colaboradores. Portanto, é crucial discutir fatores de sucesso na governança e métodos para uma adoção mais suave e eficaz.

## Implantação Leve de Governança

### Benefícios de uma Abordagem Gradativa

A implantação de um modelo de governança mais leve reduz o atrito com os colaboradores, minimizando o impacto no trabalho deles. O modelo gradativo permite que a mudança seja assimilada ao longo do tempo.

### Abordagem de Baixo para Cima

Levar em consideração a maneira como os usuários trabalham e adaptar a governança a esse modelo pode incrementar significativamente a aceitação.

## Centros de Excelência (COE)

### Função dos Centros de Excelência

Os Centros de Excelência são núcleos dentro de cada departamento que iniciam pequenas culturas de governança. Eventualmente, essas pequenas culturas se integrarão para formar uma governança mais abrangente dentro da empresa.

### Vantagens dos COEs

Os COEs ajudam a criar processos de governança adaptados à realidade de cada departamento, aumentando a aderência e eficiência.

## Decisões Compartilhadas

### Governança Compartilhada entre Departamentos

As decisões de governança devem ser divididas ou compartilhadas com os departamentos relevantes. Isso assegura que todos os departamentos que utilizam dados tenham uma palavra no processo de governança.

### Equilíbrio entre Governança, Flexibilidade e Produtividade

Encontrar um equilíbrio entre as necessidades de governança e a flexibilidade necessária para a produtividade dos colaboradores é essencial. Procedimentos muito rigorosos podem resultar em baixa aceitação e implementação ineficaz da governança.

## Integração com o Fluxo de Trabalho

### Requisitos de Governança no Fluxo de Trabalho

Integrar os requisitos de governança diretamente no fluxo de trabalho dos colaboradores facilita a aceitação e aplicação diária da governança.

### Incentivo ao Acesso aos Dados

É crucial incentivar o acesso controlado aos dados. Esse incentivo deve ser feito através de canais oficiais para manter um controle eficiente e seguro.

## Alinhamento com a Cultura de Dados

### Decisões Alinhadas à Cultura de Dados

Decisões de governança precisam estar alinhadas à cultura de dados da organização para evitar conflitos e garantir a eficácia das iniciativas.

### Governança em Diferentes Níveis de Maturidade

A maturidade da cultura de dados deve ditar o nível de complexidade da governança implantada. Empresas com uma cultura de dados ainda em desenvolvimento devem começar com uma governança mais básica e fortalecê-la com o tempo.

## Distribuição da Tomada de Decisão

### Inclusão de Todos na Tomada de Decisão

A tomada de decisão deve ser distribuída além do administrador dos sistemas. É importante que todos os stakeholders relevantes participem desse processo para garantir uma abordagem holística e empática.

### Empatia e Alinhamento

Os administradores dos sistemas devem alinhar suas decisões às necessidades dos usuários, facilitando a adoção das práticas de governança.

## Conclusão

Implementar governança de dados de uma maneira leve e colaborativa é essencial para o sucesso e aceitação dentro das organizações. Na próxima aula, discutiremos métodos para introduzir a governança nas organizações de forma eficaz.

* * *

&nbsp;

# Métodos de Implantação e Governança de Ferramentas Corporativas

## Introdução

Neste ebook, vamos explorar os três principais métodos de implantação de ferramentas de governança, conforme documentado pela Microsoft. Focaremos no exemplo do Power BI e analisaremos as vantagens e desvantagens de cada abordagem.

## Métodos de Implantação de Governança

### 1\. Implantação da Ferramenta Antes da Governança

#### Descrição

Neste método, a ferramenta é implantada primeiramente, e a governança é estabelecida posteriormente. Esse cenário normalmente ocorre quando os usuários já estão utilizando uma ferramenta como o Power BI. Assim, a diretoria ou a hierarquia mais alta começa a perceber seu valor e decide adotá-la oficialmente como ferramenta corporativa.

#### Vantagens

- **Agilidade na Implantação**: Permite uma rápida adoção inicial, pois os usuários começam a utilizar a ferramenta antes de se preocupar com a governança.
- **Familiaridade dos Usuários**: Usuários mais capacitados podem agilizar o processo de implantação da governança, uma vez que já entendem o funcionamento da ferramenta.
- **Resultados a Curto Prazo**: Possibilita a obtenção de insights e compartilhamento de dados antes da implantação completa da governança.

#### Desvantagens

- **Maior Esforço de Padronização**: Uma vez que muitos usuários já estão utilizando a ferramenta de forma independente, será necessário um grande esforço para padronizar seu uso.
- **Resistência de Usuários de Autoatendimento**: Usuários que começaram a usar a ferramenta de forma autônoma podem ter resistência a novos processos de governança.
- **Risco na Qualidade dos Dados**: Sem processos e controle de qualidade, há risco de insegurança e inconsistências nos dados.

### 2\. Governança Antes da Ferramenta

#### Descrição

Neste método, toda a estrutura de governança é elaborada e estabelecida antes da implantação da ferramenta. O foco principal está no controle rigoroso e preparação das políticas de governança.

#### Vantagens

- **Preparação para Requisitos Regulatórios**: Permite uma melhor preparação para atender requisitos regulatórios importantes antes do uso da ferramenta.
- **Capacitação dos Usuários**: O núcleo da governança já está capacitado para ensinar e suportar outros usuários na utilização da ferramenta.

#### Desvantagens

- **Desmotivação de Usuários**: A implantação mais lenta pode desmotivar usuários, especialmente aqueles que já têm familiaridade com a ferramenta.
- **Desfavorecimento de Autoatendimento**: Tende a favorecer desenvolvimentos gerenciados de cima para baixo, o que pode diminuir a inovação proveniente dos usuários de autoatendimento.
- **Incentivo a Maus Hábitos**: A lentidão de processos pode incentivar usuários a buscar soluções alternativas, muitas vezes ineficazes ou arriscadas.

### 3\. Planejamento Interativo em Fases

#### Descrição

O planejamento interativo em fases propõe um equilíbrio entre a agilidade e a governança. A implantação é feita de forma gradual, permitindo ajustes e aprendizados durante o processo.

#### Vantagens

- **Equilíbrio Entre Agilidade e Governança**: Mantém a produtividade dos usuários sem comprometer a implantação da governança.
- **Mentalidade de Aprendizado**: Incentiva uma mentalidade de aprendizado constante, com melhorias contínuas ao longo das fases.
- **Versões Iterativas**: Facilita a introdução de novas diretrizes de forma gradual, permitindo uma melhor absorção pelos usuários.

#### Desvantagens

- **Alta Demanda de Comunicação**: Requer um nível de comunicação muito elevado para evitar desorganização.
- **Exige Muita Disciplina**: Necessita de disciplina rigorosa para manter documentações e treinamentos sempre atualizados.
- **Desconforto e Interrupção**: Novas diretrizes de governança podem causar desconforto aos usuários e interromper o fluxo de trabalho.

## Considerações Finais

A escolha do método de implantação mais adequado vai depender da cultura, da maturidade e das políticas da organização. É essencial considerar os prós e contras de cada abordagem e adaptar a estratégia conforme as necessidades específicas e o contexto da empresa.

Em conclusão, seja qual for o método escolhido, é fundamental garantir um bom nível de comunicação, manter as documentações atualizadas e realizar treinamentos periódicos para que todos os usuários estejam alinhados com as diretrizes de governança estabelecidas.

* * *

&nbsp;

# Desafios na Implantação do Power BI e Governança de Dados

## Introdução

A implantação de ferramentas como o Power BI dentro de uma organização é repleta de desafios, independentemente do método utilizado. Neste ebook, vamos discutir os desafios mais comuns listados na documentação da Microsoft sobre governança de dados.

## Desafios de Estratégia

### Ausência de Estratégia de Controle de Dados

Ter uma estratégia de controle de dados é essencial. Muitas vezes, os dados disponíveis não possuem a qualidade necessária para análises aprofundadas ou não estão no nível de granularidade necessário.

### Falta de Suporte Executivo

A falta de adesão por parte de executivos pode representar um grande obstáculo. Se uma área decide não utilizar o Power BI, dependendo do poder dessa decisão, pode afetar gravemente a implantação de governança.

### Planejamento de Adoção Insuficiente

Sem um planejamento adequado, a implantação tende a falhar, resultando em frustração e baixo uso do Power BI pelos usuários.

## Desafios de Pessoas

### Falta de Alinhamento entre as Equipes

A falta de comunicação pode gerar retrabalho e atrasos no projeto, além de aumentar os custos.

### Ausência de Líderes com Conhecimento e Entusiasmo

Líderes não entusiasmados ou sem conhecimento dificultam a adesão de novos processos e ferramentas como o Power BI.

### Desconhecimento de Boas Práticas

A falta de treinamento e o aprendizado autodidata podem resultar na aplicação incorreta de boas práticas, gerando dashboards que não atendem às necessidades da área.

### Resistência às Novas Diretrizes

A resistência às mudanças é comum e precisa ser gerenciada adequadamente, especialmente se vier de níveis executivos.

### Esforço Duplicado

A ausência de comunicação pode resultar em equipes realizando o mesmo trabalho, o que atrasa o projeto e encarece as operações.

### Falta de Clareza entre as Responsabilidades

É crucial definir claramente quem é responsável por cada área, especialmente em relação à qualidade dos dados.

## Desafios de Processo

### Ausência de Processos Bem Definidos

A falta de processos claros e padronizados cria inconsistências e dificuldades na governança de dados.

### Dificuldade de Compartilhar Lições Aprendidas

Os erros precisam ser documentados e compartilhados para evitar que aconteçam novamente.

### Falta de Documentação

A documentação inadequada ou inexistente é um grande desafio para a padronização e a definição de processos.

### Incapacidade de Atender a Requisitos de Segurança e Privacidade

A conformidade com normas de segurança e privacidade é cada vez mais relevante e deve ser uma prioridade.

## Desafios de Qualidade de Dados e Gerenciamento

### Acúmulo Excessivo de Dados e Relatórios

Manter dados e relatórios desnecessários ocupa espaço e recursos, além de complicar a análise de dados.

### Baixa Qualidade dos Dados

Dados sem padrão, formatados incorretamente, ou com valores ausentes impactam a confiabilidade das análises.

### Falta de Confiança nos Dados

A ausência de dados confiáveis pode minar qualquer projeto, pois os dados inconsistentes geram desconfiança.

### Dificuldade de Acessar Dados Valiosos

Excesso de burocracia para acessar dados, mesmo com permissão, pode levar à perda de insights valiosos.

### Fragmentação dos Dados

Informações distribuídas em diferentes tabelas ou fontes dificultam a manutenção da qualidade dos dados.

### Ausência de Catálogo de Dados

É fundamental ter um catálogo que documente a disponibilidade e localização dos dados.

### Falta de Clareza na Propriedade dos Dados

Sem um responsável claro pelos dados, é provável que ocorra uma deterioração da qualidade desses dados.

## Desafios de Habilidades e Conhecimentos

### Níveis Variados de Capacidade

Diferentes níveis de habilidade dentro da mesma equipe podem gerar inconsistências na entrega.

### Lacunas de Habilidades

Pessoas com habilidades específicas podem ter dificuldades em outras áreas, como DAX ou ETL, afetando a qualidade final.

### Dificuldade em Gerenciar a Diversidade e o Volume de Dados

Gerenciar dados de diversas fontes e grandes volumes requer habilidades específicas que nem sempre estão presentes na equipe.

### Subestimação da Complexidade

Projetos de BI podem ser mais complexos do que aparentam, resultando em prazos não cumpridos ou entregas de baixa qualidade.

### Rotatividade da Equipe

Alta rotatividade dificulta a consolidação de uma cultura de dados e a implementação de governança.

### Dificuldade em Acompanhar a Velocidade das Mudanças

As constantes inovações no Power BI e em outras ferramentas requerem atualização contínua para não ficar para trás.

* * *

&nbsp;

# Guia de Implantação de Governança com Power BI

## Introdução

A implementação de governança, especialmente em contextos que envolvem ferramentas como Power BI, é um processo delicado e que requer um planejamento minucioso. Há diferentes abordagens para essa implementação: algumas organizações preferem começar pela ferramenta e depois ajustar a governança, enquanto outras preferem planejar a governança primeiro. Independentemente do método escolhido, é crucial minimizar o retrabalho e garantir um plano básico bem estruturado.

## Estrutura do Ebook

1.  Estratégia
2.  Pessoas
3.  Políticas e Processos
4.  Gestão de Projetos

## 1\. Estratégia

### Oficinas e Entrevistas

Entender as necessidades das pessoas e como elas utilizam dados é fundamental. Realizar workshops e entrevistas ajuda a ajustar o planejamento às reais necessidades da organização.

### Avaliação do Estado Atual

Avaliar onde estamos e para onde queremos ir. Uma boa governança de dados deve sempre buscar melhorias contínuas.

### Validação do Escopo

Antes de implantar qualquer coisa, é necessário validar o escopo do programa de governança. Isso inclui considerar o nível de maturidade da cultura de dados, governança e gestão de projetos na empresa.

### Identificação de Iniciativas

Identificar iniciativas que já estão acontecendo e como estão sendo adotadas pode fornecer uma base forte para o planejamento.

### Identificar Dificuldades e Riscos

Fazer um plano para mitigar tais riscos e garantir que eles tenham o menor impacto possível durante a execução do plano.

### Apoio Executivo

Garantir o apoio de patrocinadores é essencial para a aprovação e liberação dos recursos necessários.

### Encaixe do Power BI na Estratégia

Entender como o Power BI se encaixa na estratégia de análise de dados da empresa e como pode suportar as áreas que farão as análises.

### Fatores Internos e Externos

Analisar a cultura organizacional e fatores internos e externos que podem impactar o projeto.

### Entregáveis

- Casos de Negócio
- Objetivos e Prioridades
- Plano de Metas de Curto e Longo Prazo (quick wins)
- Critérios de Sucesso e Indicadores
- Riscos Conhecidos e Plano de Mitigação
- Planejamento Financeiro

## 2\. Pessoas

### Conselho de Governança

Estabelecimento de um conselho de governança ou identificação das principais partes interessadas (stakeholders).

### Escopo e Responsabilidades

Definir o escopo e as responsabilidades tanto do conselho de governança quanto do Centro de Excelência (CoE).

### Equipes e Funções

Definir funções e responsabilidades do time e demais participantes do projeto.

### Tomada de Decisão

Confirmar quem tem autoridade para tomar decisões, aprovar e vetar ações no projeto.

### Entregáveis

- Estatuto do Conselho de Governança
- Compromissos e Prioridades do Centro de Excelência
- Plano de Alocação de Equipes
- Matriz de Responsabilidades e Tomada de Decisão
- Plano de Comunicação
- Plano de Gerenciamento de Conflitos

## 3\. Políticas e Processos

### Análise de Dificuldades Imediatas

Mapear e melhorar a experiência do usuário, identificando dificuldades, problemas e riscos desde o início.

### Priorização de Políticas

Priorizar quais políticas de dados serão implantadas primeiro, de acordo com sua importância.

### Formalizar Processos Existentes

Identificar processos já em vigor que funcionam bem e formalizá-los para integrar à governança.

### Implantação de Novas Políticas

Decidir como as novas políticas de dados serão implantadas e aceitas pelos diferentes grupos dentro da organização.

### Flexibilidade das Políticas

Determinar até onde as políticas podem diferir ou ser personalizadas para diferentes grupos.

### Entregáveis

- Processo de Definição, Aprovação, Comunicação e Manutenção das Políticas de Dados
- Planejamento de Solicitação de Exceções e Desvios da Política Documentada

## 4\. Gestão de Projetos

### Estabelecer um Cronograma

Definir um cronograma claro, com prioridades e marcos bem definidos, mesmo em projetos ágeis.

### Iniciativas e Dependências

Identificar e coordenar iniciativas relacionadas e dependências.

### Plano de Projeto Interativo

Criar um plano de projeto interativo, priorizado e respeitando um cronograma macro.

### Aprovação do Orçamento

Obter aprovação e autorização para o orçamento necessário antes de qualquer gasto.

### Acompanhamento do Progresso

Estabelecer formas tangíveis de acompanhar o progresso do projeto, usando critérios de sucesso e indicadores.

### Entregáveis

- Plano do Projeto com Iterações, Dependências e Sequenciamento
- Ritmo de Retrospectivas com Foco em Melhorias Contínuas

## Conclusão

Implementar a governança em uma organização com o uso do Power BI é um desafio que demanda planejamento, estratégia, gestão eficaz de pessoas, políticas bem definidas e um acompanhamento contínuo do progresso do projeto. Seguir uma estrutura organizada como a apresentada aqui pode facilitar esse processo e garantir que todas as etapas sejam executadas com sucesso.

* * *

&nbsp;

# Política de Governança: Decisões Críticas e Práticas no Power BI

## Introdução

A governança de dados é um conceito essencial para qualquer organização que almeja utilizar informações de forma eficiente e segura. Este ebook discutirá os principais critérios de decisão na governança de dados, baseando-se na documentação da Microsoft sobre Power BI. Abordaremos desde quem deve gerir os dados até os níveis de escopo para entrega de conteúdo.

## 1\. Propriedade e Gestão dos Dados

### 1.1 Autoatendimento Orientado a Negócios

No modelo de autoatendimento orientado a negócios, cada área da organização é responsável pelos próprios dados e relatórios. Esta abordagem promove a independência e a customização conforme as necessidades específicas de cada setor.

### 1.2 Autoatendimento Gerenciado

Este modelo centraliza a gestão dos dados em uma equipe responsável, o que permite que as diferentes áreas da empresa consumam esses dados diretamente no Power BI. A principal vantagem é a padronização dos dados e a manutenção centralizada, garantindo maior consistência e segurança.

### 1.3 Modelo Empresarial

No modelo empresarial, uma área especializada, como o Centro de Excelência ou a TI, controla e desenvolve os relatórios para toda a empresa. Esta abordagem maximiza a precisão e a conformidade, sendo ideal para empresas que lidam com grandes volumes de dados sensíveis.

## 2\. Escopo para Entrega de Conteúdo e Dados

### 2.1 Escopo Pessoal

O escopo pessoal foca no usuário individual, permitindo que cada colaborador crie e consuma seus próprios relatórios. É o nível mais básico e local de governança.

### 2.2 Escopo de Equipe

No escopo de equipe, os dados e relatórios são compartilhados dentro de pequenos grupos ou departamentos, facilitando a colaboração direta entre os membros da equipe.

### 2.3 Escopo Departamental

Abrange uma unidade maior dentro da empresa, permitindo que diferentes equipes dentro do mesmo departamento compartilhem e acessem dados e relatórios.

### 2.4 Escopo Empresarial

A abordagem mais abrangente, onde os dados e relatórios são geridos e disponibilizados para toda a organização. Garantia de conformidade e alinhamento estratégico são críticos neste nível.

## 3\. Áreas Titulares dos Dados

### 3.1 Identificação dos Titulares dos Dados

A identificação das áreas ou departamentos titulares dos dados é crucial. Por exemplo, em um hospital, os dados médicos são altamente sensíveis e precisam de tratamento rigoroso conforme regulamentações legais como a LGPD.

### 3.2 Sensibilidade dos Dados

Compreender a sensibilidade dos dados é vital para implementar políticas de segurança e garantir que informações confidenciais sejam tratadas conforme necessário.

## 4\. Dados Críticos

### 4.1 Definição de Dados Críticos

Dados críticos são aqueles que são fundamentais para a tomada de decisões fundamentadas. Sem eles, as decisões podem ser baseadas em intuições ao invés de fatos.

### 4.2 Gestão de Dados Críticos

A gestão adequada desses dados é indispensável para a governança eficaz, incluindo backups regulares, acessos restritos e auditorias periódicas.

## 5\. Principais Decisões na Governança de Dados

### 5.1 Decisões Estratégicas

Implementar uma política de governança de dados envolve diversas decisões estratégicas, como definir quem tem acesso a quais dados e como esses dados serão compartilhados.

### 5.2 Ferramentas e Infraestrutura

A escolha das ferramentas de BI e a infraestrutura de TI também são decisões críticas, influenciando diretamente a eficiência e a eficácia da governança de dados.

### 5.3 Processos e Políticas

Estabelecer processos e políticas claras para a gestão de dados garante que todos os colaboradores saibam como proceder e o que esperar em termos de segurança e qualidade dos dados.

## Conclusão

A implementação de uma política de governança de dados bem-estruturada é essencial para qualquer organização que deseja aproveitar ao máximo suas informações. Entender os diferentes modelos de gestão de dados, os níveis de escopo e a importância dos dados críticos são passos fundamentais para uma governança eficaz.

* * *

&nbsp;

# Implantação de Governança e Níveis de Maturidade

## Introdução

Assim como já mencionado anteriormente, é crucial adequar a implantação da nossa governança conforme o nível de maturidade da empresa. Mas como identificar esse nível de maturidade? A Microsoft disponibiliza diversos roteiros que nos ajudam a entender e identificar esses diferentes níveis dentro da organização.

## Níveis de Maturidade

### Nível Inicial

No nível inicial, devido à falta de planejamento de governança, as boas práticas de gerenciamento de dados e governança acabam ocorrendo de maneira informal, dependendo muito do julgamento e nível de experiência dos indivíduos. Algumas características desse nível incluem:

- Alta dependência de conhecimento tribal não documentado.
- Ausência de práticas formais.
- Grande risco em caso de ausência ou saída de indivíduos chave.

### Nível Eficiente

Em contraste, no nível eficiente, a governança é muito mais estruturada e mensurável. Algumas características incluem:

- Revisões regulares de KPIs ou OKRs para avaliar metas de governança.
- Progresso iterativo e contínuo.
- Agilidade na implementação de melhorias com base em lições aprendidas.
- Uso ativo de logs de atividades e dados da API do Fabrica ou Power BI para informar e aprimorar os esforços de adoção da governança.

## Avaliando o Nível de Maturidade

### Perguntas para Avaliação

Para ajudar a definir em que nível de maturidade a empresa se encontra, é importante refletir sobre algumas perguntas:

- Como a atual estratégia de governança se alinha com a maneira de trabalho dos usuários?
- Há autoridade para criar e alterar políticas de governança?
- Quais comportamentos de usuários criam riscos ao trabalhar com dados e como esses riscos são mitigados?
- Como a exportação de dados para o Excel é tratada?
- Quais etapas são tomadas para prevenir a perda de dados?
- Qual é a prevalência de exportação para o Excel e o que os usuários fazem com os dados após exportá-los?

### Reflexão sobre o Uso do Excel

O uso do Excel é uma prática comum em muitas empresas, principalmente para análises e visualizações específicas. É fundamental entender quando é realmente necessário exportar dados para o Excel e quando pode ser mais eficiente trabalhar com outras ferramentas mais adequadas.

Importante notar que não existe uma resposta definitiva. Em alguns casos, a exportação para o Excel pode ser necessária para análises detalhadas ou para criar visuais específicos para determinados stakeholders.

### Cultura Organizacional e Governança

A cultura dentro da empresa e os objetivos finais das análises de dados são fatores determinantes para a escolha das práticas de governança. A adequação das perguntas feitas anteriormente pode ajudar a criar uma estratégia de governança mais alinhada aos processos e necessidades da companhia.

## Planejamento da Estratégia de Governança

### Dosando Esforços e Planejamento

Após avaliar o nível de maturidade da empresa, é hora de planejar como aplicar e ajustar a estratégia de governança. Alguns pontos chave incluem:

- Identificar desafios que fazem sentido no contexto atual e os que talvez ainda não façam.
- Adaptar a força e enfoque do planejamento conforme a maturidade observada.
- Escolher os métodos de governança mais apropriados para as necessidades específicas da organização.

### Implementação e Melhoria Contínua

Uma vez que a estratégia esteja bem alinhada e planejada, o próximo passo é a implementação, garantindo revisões e melhorias contínuas conforme lições são aprendidas ao longo do processo.

## Conclusão

Adequar a estratégia de governança de dados conforme o nível de maturidade da empresa é fundamental para garantir eficiência e minimizar riscos. Com a avaliação correta e ao fazer as perguntas adequadas, é possível estruturar uma governança que se alinha com a cultura e objetivos da organização, promovendo um ambiente de melhorias contínuas e agilidade.

> ## Governança ☝️

* * *

&nbsp;

> ## Cultura de dados 👇
> 
> Primeiro ajeitamos a casa em relação a area de dados, depois aplicamos uma governança de dados e ai sim, depois disso, aplicamos uma cultura de dados. Sempre começando do núcleo para fora, ou seja, da área de dados para as outras.
> 
> Pense num virus do bem que precisamos transmitir para toda a empresa, precisamos evangelizar isso.

# Adoção Organizacional

## Introdução

A adoção de novas tecnologias em empresas vem acompanhada de desafios e reestruturações. Neste ebook, discutiremos a implementação do Power BI, uma ferramenta essencial para análise de dados, que promete transformar a forma como as organizações tomam decisões. Veremos três principais tipos de adoção - organizacional, do usuário e da solução - e como cada uma delas pode ser medida, discutida e otimizada para alcançar um alto nível de maturidade organizacional.

## Tipos de Adoção

### Adoção Organizacional

A adoção organizacional se concentra na eficácia das práticas de governança e gerenciamento de dados. Este tipo de adoção envolve processos estruturados que apoiam os criadores, consumidores e todas as partes interessadas, capacitando usuários e governando atividades de análises de dados.

#### Níveis de Maturidade

##### Nível 100: Inicial

###### Características

- Experimentação do Power BI em áreas isoladas.
- Foco em obter "**quick wins**" para justificar maior apoio.
- Ausência de estratégia e governança coordenada.
- Práticas não documentadas e dependentes das pessoas.
- Poucos ou nenhum processo formal.

###### Desafios

- Falta de estratégia e governança.
- Conhecimento tribal e risco de perda do conhecimento.
- Falta de processos formais e processos inconsistentes.
- Dificuldade em obter apoio e financiamento.

##### Nível 200: Repetível

###### Características

- Conteúdos de análise de dados de importância crucial.
- Tentativas de documentar e definir práticas.
- Confiança excessiva no bom senso dos indivíduos.
- Crescimento orgânico do uso do Power BI.
- Estabelecimento de recursos de comunidade.

###### Desafios

- Práticas inconsistentes e aplicadas de forma desigual.
- Dependência excessiva do bom senso e risco de erros.
- Crescimento descontrolado e desafios de gerenciamento.
- Falta de um centro de excelência para coordenar os esforços.

##### Nível 300: Definido

###### Características

- Medição do sucesso da implantação do Power BI.
- Progresso na padronização das práticas repetíveis.
- Centro de excelência estabelecido com metas e responsabilidades claras.
- Comunidade de práticas interna ativa e crescente.
- Surgimento de especialistas na comunidade interna.
- Investimento em treinamento, documentação e recursos.
- Implementação de um modelo de governança inicial.
- Patrocinador executivo ativo e motivado.
- Bom entendimento das funções e responsabilidades das partes interessadas.

###### Desafios

- Padronização ainda incompleta.
- Lacunas de conhecimento e habilidades.
- Resistência às mudanças na implementação de governança e processos.
- Recursos limitados para apoiar a adoção em toda a organização.

##### Nível 400: Capaz

###### Características

- Esforços envolvendo Power BI agregam valor significativo.
- Funcionalidades do Power BI aprovadas para análises de conteúdo crítico.
- Modelo de governança estabelecido e aceito.
- Treinamentos, documentação e recursos disponíveis e usados ativamente.
- Processos padronizados para monitorar o uso e as práticas de BI.
- Centro de excelência inclui representações de todas as unidades de negócio.
- Rede de defensores que apoiam a comunidade interna e colaboram com o centro de excelência.

###### Desafios

- Manutenção da conformidade com o modelo de governança.
- Acompanhamento da evolução do Power BI e novas funcionalidades.
- Manter o engajamento e participação ativa da comunidade.
- Medir e demonstrar o valor das soluções de forma consistente.

##### Nível 500: Eficiente

###### Características

- Valor das soluções de BI é predominante na organização.
- Power BI amplamente aceito.
- Habilidades de análise valorizadas e reconhecidas.
- Comunidade autossuficiente com apoio do centro de excelência.
- Centro de excelência com capacidade para medir sucesso da adoção.
- Melhoria contínua é uma prioridade.
- Uso de automação para agregar valor e reduzir erros.

###### Desafios

- Compromisso forte para otimização contínua.
- Integração do Power BI com outras tecnologias.
- Criar uma cultura verdadeiramente orientada por dados.

## Conclusão

A implantação bem-sucedida do Power BI requer um entendimento profundo dos diferentes níveis de adoção e práticas organizacionais. Este ebook abrange os principais pontos de cada fase de maturidade e os desafios associados, proporcionando uma compreensão clara sobre como avançar nessas etapas e alcançar uma adoção eficaz e madura do Power BI na sua organização.

* * *

&nbsp;

# Adoção do Usuário e da Solução

## Introdução

O processo de adoção do Power BI envolve a integração de usuários, processos e tecnologia para garantir que todos os stakeholders estejam alinhados e utilizando a ferramenta de forma eficaz. Este ebook oferece uma visão detalhada sobre os estágios de adoção do usuário e da solução, além das melhores práticas de governança e implantação.

## 1\. Adoção do Usuário

### 1.1 Conscientização

No estágio de conscientização, os indivíduos são expostos à análise de dados, mas ainda não a utilizam efetivamente. Este é um estágio inicial onde o foco deve ser na educação e demonstração do valor do Power BI.

### 1.2 Reconhecimento

No estágio de reconhecimento, os indivíduos começam a entender para que serve o Power BI e iniciam o uso da ferramenta. Este é um momento crucial para incentivar o aprendizado e a exploração das funcionalidades básicas.

### 1.3 Impulso

No estágio de impulso, os indivíduos começam a aprender como usar o Power BI de fato e desenvolvem análises básicas. Aqui, a formação e o treinamento contínuo são essenciais para fomentar a habilidade dos usuários.

### 1.4 Proficiência

No estágio de proficiência, os usuários já estão adequados à governança, utilizando boas práticas e sabendo desenvolver relatórios eficazmente. Eles são capazes de criar análises eficientes e tomar decisões embasadas nos dados apresentados.

## 2\. Adoção da Solução

### 2.1 Teste de Ideias

Inicialmente, a adoção da solução passa pelo teste de novas ideias, utilizando iniciativas informais ou provas de conceito formalizadas. Este estágio permite avaliar o sucesso da implantação em nichos específicos da empresa.

### 2.2 Funcionalidade Básica

Na segunda fase, a solução começa a atender aos requisitos básicos dos usuários e é disponibilizada para uso geral dentro da empresa. Aqui, o objetivo é garantir que a ferramenta esteja acessível e funcione conforme esperado.

### 2.3 Valor Tangível

Na fase valiosa, os usuários começam a experimentar benefícios tangíveis e a solução é promovida para uso mais amplo dentro da empresa. É neste ponto que o impacto real começa a ser medido, utilizando indicadores de adoção e qualidade dos dados.

### 2.4 Essencial

Na fase essencial, a solução é utilizada ativamente para a tomada de decisões e está bem gerenciada dentro das práticas de governança. A partir daqui, o Power BI é uma parte integral das operações da empresa.

## 3\. Governança e Boas Práticas

### 3.1 Estrutura de Governança

Implementar uma estrutura de governança robusta é fundamental para garantir que todos os usuários sigam as melhores práticas e que os dados sejam gerenciados de forma segura e eficiente.

### 3.2 Políticas de Acesso e Segurança

Defina e implemente políticas claras de acesso e segurança para garantir que apenas os usuários autorizados possam acessar informações sensíveis.

### 3.3 Controle de Qualidade dos Dados

Mantenha um controle rigoroso sobre a qualidade dos dados para assegurar que todas as análises realizadas sejam precisas e consistentes.

## 4\. Medição e Ajuste de Estratégia

### 4.1 Indicadores de Sucesso

Para uma adoção eficaz do Power BI, é essencial medir o sucesso através de indicadores como a quantidade de workspaces, uso de fontes de dados e qualidade das análises.

### 4.2 Ajuste de Estratégia

Com base nos indicadores e no nível de maturidade da empresa, ajuste a estratégia de implantação conforme necessário para garantir a eficácia e atingir os objetivos esperados.

### 4.3 Cultura de Dados

Promover uma cultura de dados robusta dentro da empresa é crucial para uma adoção bem-sucedida. Incentive o compartilhamento de conhecimento e a colaboração entre as equipes.

## Conclusão

A adoção do Power BI é um processo contínuo que envolve a integração de usuários, processos e tecnologia. Seguindo os estágios de adoção e implementando as melhores práticas de governança, as empresas podem garantir que estão tirando o máximo proveito da ferramenta para melhorar a tomada de decisões e gerar valor nos negócios.

* * *

&nbsp;

# Cultura de Dados - Definição

## Introdução

O material da Microsoft que discute a cultura de dados é extremamente elucidativo ao descrever seu conceito de forma instigante. Vamos explorar as principais ideias trazidas neste conteúdo, enfatizando a importância e os benefícios de se cultivar uma cultura centrada em dados dentro das organizações.

## O Que é Cultura de Dados?

### Definição

A cultura de dados deve ser vista como algo que se pratica, e não apenas se proclama. Ela é composta por comportamentos e normas que são incentivados ou não dentro de uma organização. Ao contrário da governança, que é constituída por regras estabelecidas, a cultura de dados é um conceito mais abstrato, que permeia as atitudes e ações dos funcionários.

Uma cultura de dados saudável motiva todos os níveis da organização a gerar e compartilhar conhecimento acionável de forma eficiente e eficaz.

### Comportamentos e Normas

Esses comportamentos incluem:

- Gerar e distribuir conhecimento baseado em dados e análises, e não apenas em opiniões pessoais.
- Reduzir a dependência de conhecimentos tácitos e senso comum.
- Incentivar decisões fundamentadas em dados confiáveis.

## Benefícios de uma Cultura de Dados Forte

### Melhoria nas Decisões

Utilizar dados confiáveis para tomar decisões não só assegura a precisão, mas também facilita escolhas mais eficazes e eficientes. Tais decisões são baseadas em análises detalhadas, reduzindo a subjetividade e achismos.

### Agilidade na Tomada de Decisões

Conforme a maturidade da organização em relação ao uso dos dados aumenta, a coleta, tratamento e disponibilização das informações se tornam mais automatizadas, resultando em maior rapidez nas decisões.

### Inovação

Dados coletados ao longo do tempo podem revelar novas oportunidades, permitindo o desenvolvimento de produtos ou serviços inovadores. Por exemplo, relatórios internos podem ser transformados em produtos comerciais.

### Melhor Comunicação e Colaboração

Uma cultura de dados forte promove a comunicação e colaboração entre diferentes áreas e unidades de negócio, já que os dados estarão interconectados, possibilitando análises mais abrangentes e decisões mais bem-informadas.

## Influenciadores da Cultura de Dados

### Diferentes Áreas e Comportamentos

Cada departamento ou unidade de negócio dentro da organização pode possuir sua própria subcultura de dados, desde que alinhadas aos objetivos finais da empresa e à governança estabelecida.

### Capacitação

Inclui a mentoria e treinamento dos usuários, suporte contínuo e a criação de uma comunidade de boas práticas.

### Suporte Executivo

É crucial para assegurar que a cultura de dados seja respeitada e incentivada desde os níveis mais altos da hierarquia. Esse suporte pode ser tanto financeiro quanto estratégico.

### Centro de Excelência

Servem como defensores máximos da cultura de dados, exemplificando as melhores práticas para toda a organização.

### Alfabetização dos Dados

Envolve educar os funcionários sobre como ler, interpretar e utilizar os dados de forma eficaz.

### Democratização e Descoberta dos Dados

Permitir acesso amplo e fácil aos dados, garantindo que todos os membros da organização possam utilizá-los para tomadas de decisão informadas.

## Propriedade e Gestão do Conteúdo

### Escopo da Entrega

Define como o conteúdo será entregue a cada área de negócio e quem será responsável por sua gestão e manutenção.

## Conclusão

Desenvolver uma cultura de dados robusta é essencial para qualquer organização que deseja se destacar em um mercado cada vez mais orientado por informações precisas e análises detalhadas. A cultura de dados promove uma série de benefícios, desde a melhoria na qualidade das decisões até a inovação e melhor comunicação interna.

Cultivar comportamentos que valorizem o uso de dados confiáveis, impulsionados por um suporte executivo forte e centros de excelência dedicados, é um passo fundamental para atingir esses objetivos.

* * *

&nbsp;

# Os Três Aspectos Essenciais da Cultura de Dados

## Introdução

Neste ebook, iremos discutir os três aspectos essenciais da cultura de dados: descoberta, democratização e alfabetização dos dados. Esses elementos são fundamentais para garantir que os dados sejam acessíveis, compreendidos e utilizados corretamente por todos os níveis de uma organização.

## Descoberta de Dados

### O que é Descoberta de Dados?

A descoberta de dados se refere ao processo de identificar e entender os metadados existentes em uma entidade. Isso inclui tabelas, níveis de segurança, qualidade dos dados e endossos.

### Diferença entre Descoberta e Pesquisa de Dados

- **Descoberta de Dados**: Permite entender quais são os metadados disponíveis, como colunas de data, produto e valor, sem acessar o conteúdo real.
- **Pesquisa de Dados**: Oferece uma visão mais detalhada, revelando os dados contidos nas entidades, como vendas e preços específicos.

### Contribuições da Descoberta para a Cultura de Dados

1.  **Uso de Fontes Confiáveis**: Incentiva a utilização de dados de alta qualidade e fontes bem documentadas.
2.  **Promoção de Itens de Dados e Relatórios**: Facilita o acesso a relatórios e painéis já existentes.
3.  **Identificação dos Proprietários dos Dados**: Ajuda a saber quem gerencia e é responsável pela qualidade dos dados.

### Importância do Processo de Solicitação de Acesso

Ter um processo claro e simples para solicitação de acesso aos dados é crucial para evitar burocracias excessivas e garantir uma cultura de dados bem estabelecida.

## Democratização dos Dados

### Torne os Dados Acessíveis

A democratização dos dados envolve tornar os dados acessíveis a mais usuários que serão responsáveis por análises e soluções de problemas de negócio.

### Capacitação dos Usuários

Capacitar os usuários para que possam tomar melhores decisões pode ser descrito da seguinte maneira:

- Tornar os dados acessíveis a mais usuários.
- Capacitar os usuários para tomar decisões informadas.

### Equilíbrio entre Democratização e Segurança

A democratização deve ser equilibrada com a segurança e governança dos dados para evitar desorganização e garantir a integridade dos dados.

### Garantia de Níveis de Permissão de Acesso

É vital garantir níveis apropriados de permissão para que os dados possam ser acessados conforme necessário, mantendo a segurança.

## Alfabetização dos Dados

### O que é Alfabetização dos Dados?

Alfabetização dos dados é a capacidade de interpretar, criar e comunicar dados e análises. Isso envolve saber o que fazer com os dados e como analisá-los.

### Treinamentos em Habilidades Tecnológicas

Investir em treinamentos para habilidades tecnológicas e alfabetização de dados é essencial para garantir que os usuários saibam usar ferramentas como Power BI e outras.

### Atividades Importantes para a Alfabetização

1.  **Interpretação de Diagramas e Gráficos**: Aprender a interpretação correta de visuais complexos.
2.  **Avaliação de Qualidade dos Dados**: Diferenciar entre dados válidos e inválidos.
3.  **Análise de Causa Raiz**: Executar análises aprofundadas para entender a origem dos problemas.
4.  **Diferenciação de Causa e Correlação**: Compreender a diferença entre causa e correlação para análises precisas.
5.  **Compreensão do Contexto e Exceções**: Entender como o contexto e exceções afetam os resultados.
6.  **Uso de Narrativas de Dados**: Utilizar narrativas (storytelling) para comunicar dados de forma eficaz.

### Benefícios da Alfabetização de Dados

Pessoas com alto nível de alfabetização de dados conseguem fazer análises mais precisas e avançadas, contribuindo significativamente para a cultura de dados de uma organização.

## Considerações Finais

A cultura de dados eficaz depende da combinação equilibrada de descoberta, democratização e alfabetização dos dados. Esses aspectos essenciais garantem que os dados sejam acessíveis, bem compreendidos e utilizados da melhor maneira possível para tomar decisões informadas e estratégicas.

* * *

> ## Cultura de dados ☝️

* * *

&nbsp;

> ## Cenários de uso 👇
> 
> O quão flexível e autonoma é nossa inteligência de dados? Depois de arrumarmos a casa em relação aos dados, aplicarmos governança e cultura, nos resta pensarmos no quão flexível e autonomo é tudo isso e em como podemos avançar com essa flexibilidade.

# Estratégias de Propriedade de Conteúdo e Entrega

## Introdução

Antes de começarmos a trabalhar com ferramentas e entender como utilizá-las, com base na teoria discutida até agora, é importante fechar dois pontos cruciais: a estratégia de propriedade de conteúdo e a entrega desse conteúdo. Discutiremos três principais estratégias:

1.  Autoatendimento orientado a negócios
2.  Autoatendimento gerenciado
3.  Empresarial

Cada estratégia varia conforme a propriedade dos dados e do relatório.

## Autoatendimento Orientado a Negócios

### Definição

Nesta estratégia, criadores e especialistas em cada unidade de negócio são proprietários e gerenciam todos os conteúdos.

### Características

1.  **Criadores Especialistas**:
    
    - Cada área de negócio possui criadores e especialistas que gerenciam os dados e relatórios.
    - Abordagem descentralizada com criação de dashboards e cultura de dados nas áreas.
2.  **Cultura Descentralizada**:
    
    - Empresas incentivam autonomia na gestão de dados por cada área de negócio.
3.  **Exploração e Inovação**:
    
    - Menos burocracia permite maior facilidade na exploração e inovação com dados.
4.  **Maior Controle**:
    
    - Áreas de negócio têm mais controle e autonomia, especialmente se contarem com usuários bem treinados.
5.  **Flexibilidade**:
    
    - Adaptação rápida às mudanças, priorizando flexibilidade sobre governança rígida.

### Quando Usar

- Empresas com cultura de dados descentralizada.
- Prioridade na inovação e exploração de dados.
- Unidades de negócio necessitam de maior controle e flexibilidade.

## Autoatendimento Gerenciado

### Definição

Uma equipe centralizada gerencia os dados enquanto a criação dos relatórios e dashboards é descentralizada.

### Características

1.  **Equipe Centralizada**:
    
    - Especialistas gerenciam a arquitetura de dados e fluxos.
2.  **Criação Descentralizada**:
    
    - Relatórios e dashboards são criados de forma descentralizada.
3.  **Disciplina no Núcleo, Flexibilidade na Borda**:
    
    - Organização centralizada com flexibilidade nas pontas.

### Quando Usar

- Empresas com gerenciamento centralizado de dados.
- Reutilização e compartilhamento de dados entre criadores.
- Agilidade na criação de relatórios sem precisar se preocupar com ETL.
- Diferentes usuários especializados em tarefas distintas (preparação, modelagem, criação).

## Empresarial

### Definição

Todo o conteúdo é propriedade e gerenciado por uma equipe centralizada, como TI, BI corporativo ou um centro de excelência.

### Características

1.  **Conteúdo Centralizado**:
    
    - Propriedade e gerenciamento centralizados.
2.  **Equipe Centralizada**:
    
    - TI, BI corporativo ou centro de excelência gerenciam os dados e relatórios.
3.  **Abordagem Centralizada**:
    
    - Fundamental para dados sensíveis ou sigilosos.

### Quando Usar

- Empresas com cultura de dados centralizada.
- Apenas um time responsável por dados e BI.
- Conteúdo com necessidade bem definida e sem frequente personalização.
- Tratamento de dados confidenciais.

## Fatores que Influenciam a Escolha da Estratégia

1.  **Requisitos das Soluções**:
    
    - Tipo de relatórios, aplicativos do Power BI, data warehouse, pipelines de implantação.
2.  **Habilidade dos Usuários**:
    
    - Especialistas espalhados nas áreas ou concentração de expertise em um único time.
3.  **Flexibilidade**:
    
    - Necessidade de adaptação rápida a mudanças no negócio.
4.  **Complexidade da Solução**:
    
    - Volume de dados, integrações de sistemas, conexão com APIs.
5.  **Compromisso da Liderança**:
    
    - Apoio da liderança é essencial para implementar qualquer estratégia eficazmente.
6.  **Cultura de Dados**:
    
    - Maturidade e democracia na cultura de dados da organização.

## Propriedade e Administração dos Conteúdos

### Níveis de Responsabilidades

1.  **Administrador dos Dados**:
    
    - Garantir a qualidade dos dados das fontes.
2.  **Especialista no Assunto**:
    
    - Define significados, uso e regras de negócio para os dados.
3.  **Proprietário Técnico**:
    
    - Criação, manutenção, publicação e proteção dos acessos aos dados e relatórios.
4.  **Proprietário do Domínio**:
    
    - Tomada de decisão, definição de políticas e requisitos para gerenciamento de dados.

### Importância da Propriedade Definida

- **Comunicação**:
    
    - Saber a quem recorrer para dúvidas, suporte e melhorias.
- **Garantia de Qualidade**:
    
    - Responsabilidade bem definida garante qualidade, atualização e disponibilidade dos conteúdos.

Com uma clara definição de responsabilidades e uma estratégia bem estabelecida, é possível garantir uma gestão eficiente dos conteúdos e a segurança dos dados dentro da organização.

* * *

&nbsp;

# Escopo de Entrega de Conteúdo

## Introdução

No escopo de entrega de conteúdo, definimos quantas pessoas poderão acessar e consumir o conteúdo que estamos desenvolvendo, como dados, relatórios e dashboards. Existem quatro escopos principais, variando da menor para a maior quantidade de consumidores de conteúdo. Essas definições impactam diretamente na forma como gerenciamos a distribuição e segurança das informações.

## Escopos de Entrega de Conteúdo

### Escopo Pessoal

O conteúdo criado e utilizado apenas pelo criador. Indivíduos fazem suas próprias análises e tomam decisões sem compartilhar o conteúdo com outros.

### Escopo de Equipe

O conteúdo é compartilhado e utilizado por um grupo de colegas que trabalham em conjunto. Eles compartilham relatórios e conjuntos de dados para tomar decisões em equipe ou dentro de um departamento.

### Escopo Departamental

O conteúdo é distribuído para um departamento ou unidade de negócio. Um time desenvolve relatórios que serão consumidos por todo um departamento.

### Escopo de Empresa

O conteúdo é amplamente distribuído para toda organização. Este nível tem maior amplitude no consumo de informação e requer atenção especial a práticas de governança.

## Práticas de Governança e Manutenção

### Práticas de Desenvolvimento

Para cada escopo, deve-se definir as melhores práticas para desenvolvimento dos relatórios, distribuição, gerenciamento, segurança e proteção das informações.

### Requisitos para Governança

Esses escopos ajudam a definir os requisitos para gerenciamento de alterações, suporte, documentação e treinamento. Incentivam a capacitação dos usuários e ajudam a entender o impacto de cada nível na governança.

### Licenciamento

O Power BI pode ser usado gratuitamente com licença individual, mas ao começar a compartilhar relatórios, analisamos os tipos de licença necessários: licença por usuário em pequenas empresas ou licença por empresa em grandes organizações, considerando capacidades Premium.

## Criação e Consumo de Relatórios

### Relação Criador vs Consumidor

A quantidade de criadores de conteúdo é inversamente proporcional à quantidade de consumidores. No escopo pessoal, há muitos criadores; à medida que o escopo aumenta (equipe, departamento, empresa), o número de criadores diminui, enquanto o número de consumidores aumenta.

### Incentivo à Cultura de Dados

O escopo pessoal e de equipe incentiva a cultura de dados e estratégias de autoatendimento. No nível departamental e empresarial, a criação de conteúdo é realizada por usuários mais avançados e centros de excelência.

## Alinhamento de Propriedade e Entrega de Conteúdo

### Autoatendimento Orientado a Negócios

Inclui soluções pessoais e de equipe, com foco em descentralização.

### Autoatendimento Gerenciado

Inclui algumas soluções pessoais e departamentais. Neste nível, áreas dedicadas nos departamentos ou na empresa desenvolvem relatórios.

### Flexibilidade na Propriedade de Conteúdo

Mesmo em um nível empresarial de propriedade de conteúdo, deve-se permitir flexibilidade para estimular a coleta e uso de dados com qualidade, incentivando a cultura de dados.

## Conclusão

Para implementar a governança, desenvolver e estimular a cultura de dados na empresa, recomenda-se estudar e entender a documentação disponível. Analisando as considerações e ações principais, podemos compreender o nível de maturidade e desenvolver um planejamento adequado para cada área.

* * *

&nbsp;

# Como Usar os Cenários

## Introdução

Neste guia, vamos explorar os diversos cenários de uso das ferramentas Microsoft, com foco em colaboração, autoatendimento e gerenciamento de conteúdo. Este material, retirado de uma apresentação mais ampla, foi condensado para fornecer uma visão clara e direta de como aproveitar ao máximo essas ferramentas dentro de uma empresa.

## Capítulo 1: Colaboração

### 1.1 Cenários de Colaboração

#### 1.1.1 Colaboração por Equipe

A colaboração em equipe é essencial para otimizar processos e alcançar objetivos comuns. Utilizando ferramentas como o Microsoft Teams, é possível criar canais específicos para projetos, departamentos ou assuntos de interesse geral.

#### 1.1.2 Colaboração por Departamento

Para departamentos, é importante ter um espaço onde todos possam compartilhar informações e colaborar de maneira eficiente. Ferramentas como o SharePoint facilitam o compartilhamento de documentos, apresentações e outros recursos essenciais para o trabalho diário.

#### 1.1.3 Colaboração Corporativa

Em um nível mais amplo, a colaboração corporativa envolve a integração de várias equipes e departamentos para alcançar objetivos estratégicos. O uso de intranets corporativas, novamente utilizando o SharePoint, pode ser uma excelente maneira de centralizar informações e manter todos alinhados.

## Capítulo 2: Autoatendimento

### 2.1 Cenários de Autoatendimento

#### 2.1.1 Autoatendimento Gerenciado

O autoatendimento gerenciado oferece aos usuários finais a capacidade de resolver problemas comuns e acessar informações sem precisar de suporte direto. Ferramentas como o Power Automate podem ser configuradas para ajudar os funcionários a automatizar tarefas repetitivas, liberando tempo para atividades mais estratégicas.

#### 2.1.2 Autoatendimento Personalizável

Em cenários onde é necessário mais flexibilidade, um autoatendimento personalizável permite que os usuários ajustem as ferramentas às suas necessidades específicas. Usando o Power Apps, qualquer funcionário pode criar aplicativos personalizados que atendam às suas necessidades específicas sem a necessidade de envolver a TI em cada pequeno ajuste.

### 2.2 Preparação de Dados

#### 2.2.1 Preparação de Dados Básica

Preparar dados de maneira eficiente é crucial para tomar decisões informadas. Ferramentas como o Power Query podem ajudar na importação e transformação de dados de várias fontes, facilitando a criação de relatórios precisos.

#### 2.2.2 Preparação de Dados Avançada

Para necessidades mais complexas de preparação de dados, ferramentas como o Azure Data Factory podem ser utilizadas para processar grandes volumes de dados e integrá-los de maneira eficiente em diversos sistemas.

## Capítulo 3: Gerenciamento e Implantação de Conteúdo

### 3.1 Cenários de Gerenciamento de Conteúdo

#### 3.1.1 Conteúdo para Autoatendimento

Garantir que o conteúdo esteja disponível para autoatendimento ajuda os funcionários a encontrar rapidamente as informações de que precisam. Usando o Microsoft OneDrive, é possível armazenar e compartilhar documentos de maneira segura e acessível.

#### 3.1.2 Conteúdo Corporativo

Para o nível corporativo, ferramentas como o SharePoint novamente são eficazes para criar bibliotecas de documentos acessíveis a todos os membros da organização, mantendo a segurança e controle de versão em dia.

### 3.2 Gerenciamento de Dados Avançados

#### 3.2.1 Implementação de Workspaces

A criação de workspaces personalizados dentro do Microsoft Power BI permite a criação de relatórios e dashboards que são essenciais para a tomada de decisão. Esses espaços podem ser configurados para atender às necessidades específicas de diferentes equipes ou projetos.

## Capítulo 4: Ferramentas e Aplicações

### 4.1 Power BI

#### 4.1.1 Power BI Desktop

O Power BI Desktop é uma das ferramentas mais poderosas para visualização de dados. Com ele, é possível criar relatórios complexos e interativos que ajudam na análise de dados provenientes de diversas fontes. A prática de utilizar dashboards facilita a visualização e monitoração de métricas importantes.

#### 4.1.2 Exploração de Fontes de Dados

A exploração de fontes de dados é crucial para obter insights valiosos. O Power BI permite conectar-se a uma ampla gama de fontes de dados, desde bancos de dados SQL a serviços na nuvem, e integrar esses dados de maneira coesa.

### 4.2 Dashboards e Relatórios

#### 4.2.1 Relatórios

Relatórios detalhados são essenciais para documentar os resultados e processos da empresa. Utilizando o Power BI, os relatórios podem ser automaticamente atualizados com os dados mais recentes, garantindo que as informações estejam sempre atuais.

#### 4.2.2 Dashboards

Os dashboards devem ser projetados para fornecer uma visão rápida e clara das métricas mais importantes para a empresa. Eles são uma parte essencial do monitoramento contínuo de desempenho e facilitam a tomada de decisões informadas.

## Conclusão

Este guia apresentou uma visão detalhada das diversas ferramentas e cenários de uso das soluções da Microsoft para melhorar a colaboração, autoatendimento e gerenciamento de conteúdo nas organizações. O uso dessas ferramentas pode transformar a forma como as empresas operam, tornando processos mais eficientes e colaborativos.

> ## Cenários de uso ☝️

* * *

&nbsp;

> ## Cenários de Entrega de Conteúdo 👇

# Power BI para Uso Pessoal

## Introdução

O Power BI é uma ferramenta poderosa para a criação de relatórios e dashboards, capaz de transformar dados complexos em insights visuais compreensíveis. Este ebook tem como foco o uso pessoal do Power BI, destacando o potencial dessa ferramenta para usuários individuais que buscam explorar e analisar seus próprios dados sem a necessidade de compartilhamento ou interação com outros usuários.

## Cenário de Uso Pessoal

O Power BI no cenário de "uso pessoal" destina-se a usuários que desejam explorar e analisar dados individualmente. Neste caso, não há interação ou compartilhamento com outros, permitindo um desenvolvimento pessoal a partir de uma conta gratuita.

### Vantagens do Uso Pessoal

- **Independência:** Não requer licenças adicionais para a criação de relatórios.
- **Início Simples:** Qualquer pessoa pode começar a usar com uma conta Power BI gratuita.
- **Análises Individuais:** Ideal para projetos pessoais sem a necessidade de colaboração.

### Limitações do Uso Pessoal

- **Compartilhamento Limitado:** Sem a licença PRO, compartilhar relatórios é restrito.
- **Funcionalidades Avançadas Limitadas:** Algumas funcionalidades só estão disponíveis na versão Premium.

## Estrutura do Power BI Desktop

### Conexão com Fontes de Dados

O primeiro passo para criar relatórios no Power BI é conectar-se às fontes de dados desejadas. Isso é feito através do Power BI Desktop, utilizando o Power Query, onde as transformações de dados são realizadas.

#### Utilizando o Power Query

- **ETL - Extração, Transformação e Carregamento:** Todo o processo de manipulação de dados é realizado aqui, facilitando a criação de relatórios precisos.
- **Transformação de Dados:** Simplifica o processo de limpeza e modificação dos dados antes da criação do relatório final.

### Modelagem de Dados

Depois da transformação de dados, a modelagem entra em cena para estabelecer relações entre diferentes tabelas de dados. Essa etapa é crucial para garantir a coerência e a integridade dos relatórios.

### Criação de Relatórios

Os relatórios são compostos por visuais que exibem os dados de forma gráfica. Eles são criados e editados no Power BI Desktop antes de serem publicados para o workspace pessoal.

## Publicação e Navegação de Relatórios

### Publicação no Meu Workspace

Após criar um relatório, ele é publicado em "Meu Workspace". Isso pode limitar o compartilhamento, mas é ideal para garantir que apenas você tenha acesso inicial aos dados.

### Diferença entre Relatórios e Dashboards

- **Relatório:** Contém páginas de diversos visuais e linhas de dados.
- **Dashboard:** É um painel que pode agregar visualizações de vários relatórios, proporcionando uma visão resumida.

## Visuais e Funcionalidades Avançadas

### Exportação de Dados e Relatórios

Os dados de um visual podem ser exportados para outros formatos, como Excel, ou mesmo serem embutidos em apresentações como PowerPoint.

### Alertas e Atualizações

Permite configurar alertas baseados em condições específicas dentro de um visual. A atualização dos dados depende de configuração correta de gateways.

### Sensibilidade e Confidencialidade

É importante configurar e assegurar a confidencialidade dos dados ao compartilhar relatórios ou exportar dados.

## Ferramentas e Recursos Adicionais

### Licenças e Acesso

O acesso a certas funcionalidades e a capacidade de criar workspaces depende da licença atribuída ao usuário — gratuita, PRO ou Premium.

### Aplicativos Móveis

Existem aplicativos móveis para que os relatórios Power BI possam ser visualizados em dispositivos Android e iOS, com as mesmas permissões de visualização do ambiente web.

### Considerações Finais de Segurança

Sempre considerar a segurança dos dados na hora de compartilhar relatórios, especialmente em ambientes corporativos ou sensíveis como RH ou finanças.

## Conclusão

O Power BI, mesmo em seu uso pessoal, oferece diversas funcionalidades para a criação de relatórios detalhados e insights poderosos. Por meio deste guia, você terá um entendimento claro de como aproveitar ao máximo essa ferramenta em um contexto pessoal, respeitando sempre as boas práticas de segurança e confidencialidade dos dados.

* * *

&nbsp;

# BI de Equipe

## Introdução

## Capítulo 1: Configuração de Workspaces

### 1.1. Início da Configuração

No cenário de uso de equipes, começamos a ter um pequeno time que precisa colaborar para desenvolver algumas ferramentas, dashboards, relatórios ou outros itens no Power BI. Para isso, é necessário configurar um workspace.

### 1.2. Criando um Novo Workspace

Para criar um novo workspace, devemos realizar os seguintes passos:

1.  Acesse a opção de criação de novo workspace.
2.  Nomeie o workspace, por exemplo, "Implantação".
3.  Descreva-o e, se necessário, adicione um domínio.
4.  Escolha o tipo de licença do workspace: Pro ou Premium por usuário. É importante lembrar que todos os usuários que acessarem o workspace devem ter a mesma licença.

### 1.3. Configurando Acessos

No relatório publicado no workspace, podemos configurar os acessos dos usuários:

1.  Podemos dar múltiplos tipos de acesso aos usuários: administrador, membro, contribuidor ou visualizador.
2.  É possível inserir uma imagem para o workspace e fazer outras personalizações nas configurações.

### 1.4. Publicação do Relatório

Para publicar um relatório no workspace:

1.  Acesse o relatório a ser publicado.
2.  Configure a publicação para o workspace "Implantação".
3.  Compartilhe o relatório com outras pessoas, permitindo exportação em diversos formatos e análises externas.

### 1.5. Validação e Endosso

Os relatórios publicados devem passar por processos de validação e endosso para garantir a qualidade. Existem dois níveis principais:

1.  Promovido: relatório pronto para ser distribuído.
2.  Certificado: relatório examinado e em conformidade com os critérios de qualidade.

## Capítulo 2: Instalando e Configurando o Gateway

### 2.1. Instalação do Gateway

Para garantir que os dados sejam atualizados continuamente, é necessário instalar um Gateway no servidor ao invés de uma máquina pessoal. Isso envolve:

1.  Baixar e instalar o gateway de dados.
2.  Fazer autenticação com credenciais de usuário.
3.  Registrar o novo gateway com um nome apropriado e configurar uma chave para segurança.

### 2.2. Configuração de Conexões

Após a instalação:

1.  Configure o gateway no Power BI online.
2.  Adicione conexões e permissões para outros usuários se necessário.
3.  Idealmente, o gateway deve estar em um servidor para garantir alta disponibilidade e atualização contínua.

## Capítulo 3: Fluxos de Dados

### 3.1. Introdução aos Fluxos de Dados

Um fluxo de dados no Power BI é essencialmente um Power Query online. Ele permite:

1.  Conectar-se a várias fontes de dados.
2.  Transformar e modelar dados diretamente no serviço em nuvem.

### 3.2. Criação de Fluxos de Dados

Para criar um fluxo:

1.  Dentro do workspace, selecione a opção de criar um novo fluxo de dados.
2.  Adicione novas tabelas conectando-se a fontes de dados específicas.
3.  Transforme e modele os dados da mesma forma que faria no Power Query.

### 3.3. Atualização e Endosso de Fluxos de Dados

Os fluxos de dados podem ser atualizados manualmente ou de maneira agendada. Além disso:

1.  Possuem endossos similares aos relatórios, podendo ser promovidos ou certificados.
2.  Não podem ser compartilhados individualmente, sendo necessário acesso ao workspace para visualização.

## Capítulo 4: Integração e Modelos Semânticos

### 4.1. Conexão de Conjuntos de Dados com Fluxos de Dados

Após criar e configurar os fluxos de dados, você pode conectá-los aos conjuntos de dados:

1.  Acesse a opção para conectar dados de fluxos dentro do workspace.
2.  Selecione o fluxo certificado e integre-o ao conjunto de dados de interesse.

### 4.2. Vantagens dos Fluxos de Dados

Os fluxos de dados proporcionam vantagens:

1.  Centralização e tratamento padronizado de dados antes da análises.
2.  Criação de um ambiente de dados confiável e certificado para a equipe.

## Conclusão

Implementar a configuração correta de workspaces, gateways e fluxos de dados no Power BI é crucial para garantir a colaboração eficaz e a qualidade dos dados e relatórios desenvolvidos pela equipe. Certifique-se de seguir as melhores práticas para manter os ambientes de dados seguros, atualizados e de fácil acesso para todas as partes envolvidas.

> Paineis são interessantes pois conseguimos colocar métricas especificas ou o relatório todo dentro desse painel e conseguimos mandar por email essas métricas ou relatórios (um print) com X frequencia (escolhida pelo usuario), assim podemos manter o usuario sempre atualizado das métricas sem precisar abrir o PBI Services.
> 
> Também podemos "pinar" uma métrica e criar notificações dessa métrica caso aconteca algo com a mesma, por email e no PBI Services.
> 
> Também temos as métricas de uso, que mostram as métricas de uso do dashboard.

* * *

&nbsp;

# BI Departamental

Este ebook tem como objetivo principal explorar as melhores práticas e as funcionalidades do Power BI, fornecendo-lhe uma compreensão aprofundada sobre criação, gerenciamento e visualização de relatórios e dashboards. Vamos abordar temas como versionamento de arquivos, Scorecards, criação de aplicativos, configurações de alertas, entre outros.

## Sumário

- [Gerenciamento de Versionamento](#gerenciamento-de-versionamento)
- [Publicação de Relatórios e Dashboards](#publica%C3%A7%C3%A3o-de-relat%C3%B3rios-e-dashboards)
- [Utilização de Scorecards](#utiliza%C3%A7%C3%A3o-de-scorecards)
- [Configuração de Alertas](#configura%C3%A7%C3%A3o-de-alertas)
- [Exportação de Dados](#exporta%C3%A7%C3%A3o-de-dados)
- [Criação de Aplicativos e Audiências](#cria%C3%A7%C3%A3o-de-aplicativos-e-audi%C3%AAncias)
- [Distribuição e Administração](#distribui%C3%A7%C3%A3o-e-administra%C3%A7%C3%A3o)
- [Conclusão](#conclus%C3%A3o)

## Gerenciamento de Versionamento

Conforme o escopo de entrega aumenta e atingimos níveis departamentais, torna-se cada vez mais complicado compartilhar insights de forma eficiente através de workspaces distintos. Para evitar problemas de versionamento, recomenda-se armazenar o arquivo em uma pasta compartilhada (Google Drive, 1Drive, SharePoint). Essas ferramentas possuem mecanismos de versionamento que facilitam o controle das alterações feitas por diferentes usuários.

## Publicação de Relatórios e Dashboards

Os arquivos criados no Power BI Desktop são publicados em workspaces. Dentro desses workspaces, são organizados relatórios, dashboards, fluxos de dados e modelos semânticos, permitindo um controle eficiente de acessos e colaboração.

### Principais Componentes

- **Reports**: Relatórios detalhados.
- **Dashboards**: Visões gerais e interativas.
- **Dataflows**: Fluxos de dados para ETL.
- **Semantic Models**: Modelos de dados para reutilização.
- **Scorecards**: Indicadores chave de desempenho.

## Utilização de Scorecards (interessante)

Os Scorecards permitem um acompanhamento simples e visual de métricas dentro do Power BI online. Eles pegam indicadores específicos e os mantêm armazenados de forma visual e acessível.

### Exemplos de Uso de Scorecards

- **Criação de um Scorecard**: Medir a porcentagem de más contratações.
- **Configuração de Regras**: Definir critérios para status críticos, de atenção e dentro do esperado.
- **Monitoramento e Notificações**: Acompanhamento das métricas em tempo real, com notificações de mudanças.

## Configuração de Alertas

Os alertas são úteis para notificar os usuários sobre mudanças significativas em dashboards ou falhas na atualização de relatórios.

### Tipos de Alertas

- **Notificações de Status**: Avisa quando um valor está fora dos parâmetros esperados.
- **Falhas de Atualização**: Informa problemas na atualização dos conjuntos de dados.

## Exportação de Dados

É possível exportar dados resumidos dos relatórios para formatos como Excel. Essa exportação deve ser gerenciada com cuidado para evitar sobrecarga de recursos e garantir a segurança dos dados.

### Processo de Exportação

- **Selecionar Dados**: Escolher os dados desejados para exportação.
- **Formato de Exportação**: Excel com ou sem conexão dinâmica.
- **Gestão de Exportações**: Configurar permissões e controlar o acesso aos dados exportados.

## Criação de Aplicativos e Audiências (legal para usar com scorecards)

Os aplicativos no Power BI permitem a organização e distribuição de relatórios e dashboards de forma segmentada para diferentes grupos de usuários.

### Passos para Criação de Aplicativos

- **Configuração do Aplicativo**: Nome, logo, cor e editores.
- **Adicionar Conteúdo**: Dashboards, relatórios, links e outras métricas.
- **Criar Seções/Audiências**: Controlar quem vê o que dentro do aplicativo.
- **Permissões de Acesso**: Configurar grupos de usuários que terão acesso ao aplicativo.

## Distribuição e Administração

A distribuição de relatórios e dashboards pode ser feita via aplicativo móvel ou através do navegador. Também é possível integrar com equipes (Teams) para discussões e colaboração.

### Administração de Workspaces

- **Gestão de Usuários**: Administradores, membros e contribuidores.
- **Atualização de Relatórios**: Configurar atualizações agendadas.
- **Uso de Gateway de Dados**: Garantir que o gateway de dados esteja sempre disponível para atualizações.

## Conclusão

Neste ebook, discutimos várias funcionalidades e práticas recomendadas para o uso eficiente do Power BI, desde a criação e gerenciamento de relatórios até a distribuição e administração de aplicativos. Implementar essas estratégias ajudará a maximizar a colaboração, melhorar o controle de versões e assegurar a tomada de decisão baseada em dados precisos e atualizados.

* * *

&nbsp;

# BI Corporativo

## Introdução

Neste ebook, exploraremos as principais mudanças e funcionalidades do Power BI no ambiente corporativo. Abordaremos como criar relatórios bem formatados e discussões sobre licenças e compartilhamento de dados, além de dicas para otimizar o uso do Power BI em empresas de diversos tamanhos.

## Mudanças no Cenário de BI Corporativo

### Estrutura e Ferramentas

No cenário de BI corporativo, a estrutura e as ferramentas do Power BI permanecem consistentes, mas o uso se intensifica com um número reduzido de criadores de conteúdo, normalmente localizados em centros de excelência ou áreas de TI. Eles estão encarregados de fornecer relatórios e dashboards para um grande número de usuários.

### Power BI Report Builder

O Power BI Report Builder é uma ferramenta essencial para criação de relatórios paginados. Diferente do Power BI Desktop, essa ferramenta possui funcionalidades específicas para formatação de tabelas de forma a serem impressas ou distribuídas.

## Criando Relatórios Paginados

### Passo a Passo

Para criar um relatório paginado, o primeiro passo é escolher um conjunto de dados no Power BI Online. Ao selecionar dados como informações de funcionários, é possível configurar a tabela e ajustar o layout para impressão.

### Ajustes e Personalizações

Os relatórios paginados podem incluir diversas personalizações, como ordenação e inclusão de medidas específicas. Além disso, é possível adicionar elementos visuais e formatar cores para tornar as informações mais claras e destacadas.

### Impressão e Distribuição

Os relatórios são frequentemente impressos em papel A4 e podem ser configurados em paisagem para aproveitamento máximo do espaço. Uma vez finalizado, o relatório pode ser salvo e distribuído em formato XML, permitindo um fácil compartilhamento e análise dos dados.

## Licenças e Capacidade

### Tipos de Licenças

O Power BI oferece diferentes tipos de licenças: gratuitas, Power BI Pro, Power BI Premium por usuário, e licenças por capacidade, agora dentro do ecossistema Power BI Fabric. A escolha entre elas depende das necessidades específicas da empresa, considerando número de usuários e recursos necessários.

### Custos e Benefícios

Embora os custos aparentes possam parecer elevados, para empresas com muitos funcionários, uma licença por capacidade pode ser mais econômica em comparação com licenças individuais. O preço pode ser compensado pelo maior número de atualizações e capacidade de processamento disponível.

## Recomendações para Uso Corporativo

### Melhores Práticas

- **Otimização de Relatórios:** Desenvolver relatórios que consomem menos recursos e respeitam as capacidades contratadas.
- **Monitoramento:** Acompanhar o uso dos recursos para evitar sobrecargas.
- **Capacitação de Usuários:** Investir em treinamento para garantir que os usuários façam uso eficiente das ferramentas.

### Compartilhamento e Acesso

Os relatórios podem ser acessados via Power BI Online ou aplicativos móveis, e compartilhados através de plataformas como Microsoft Teams. É fundamental definir corretamente as permissões de usuário para garantir a segurança e integridade das informações.

## Considerações Finais

### Pontos Chave

É importante entender as diferenças entre as licenças e escolher a opção que melhor se adapta às necessidades específicas da sua organização. A implementação eficaz do Power BI pode melhorar significativamente a produtividade e a tomada de decisões baseada em dados.

### Próximos Passos

Nas próximas seções, abordaremos cenários teóricos e práticos adicionais, permitindo uma aplicação mais extensa do Power BI no contexto empresarial. Continue a se aprofundar nessa poderosa ferramenta de análise de dados.

## Conclusão

O Power BI é uma ferramenta versátil que, quando usada de maneira adequada, pode proporcionar grande valor no ambiente corporativo. Este guia apresentou uma visão geral das funcionalidades e implementações mais comuns, preparando você para um uso eficaz do Power BI em suas operações diárias.

> ## Cenários de Entrega de Conteúdo ☝️

* * *

&nbsp;

> # Cenários de Autoatendimento (Self-Service BI)👇

# BI de Autoatendimento Gerenciado

## Introdução

Vamos iniciar nosso estudo sobre os cenários de BI de autoatendimento começando pelo **BI de autoatendimento gerenciado**. Existem três principais categorias de Power BI:

1.  Autosserviço orientado a negócios
2.  Autosserviço gerenciado
3.  Corporativo

## Características do BI de Autoatendimento Gerenciado

A principal característica do autosserviço gerenciado é que há um time especializado responsável pelas propriedades dos dados. Este time garante que os dados estejam bem preparados e disponíveis para as áreas de negócio, possibilitando que cada uma delas consuma esses dados e extraia insights de valor.

## Diagrama de BI de Autoatendimento Gerenciado

Neste cenário, os criadores desenvolvem modelos semânticos e relatórios utilizando o Power BI Desktop a partir das fontes de dados.  
Esses relatórios são posteriormente publicados.

### Processo de Publicação

O processo de publicação pode envolver a disponibilização inicial apenas do conjunto de dados para que as áreas de negócios possam consumi-los diretamente. Isso é feito através da criação de um **modelo semântico**.

#### Passos:

1.  **Exclusão de Páginas de Relatórios**:
    
    - Excluir páginas existentes no relatório para focar apenas no modelo semântico.
2.  **Criação de uma Nova Página**:
    
    - Nomeada como "Modelo Semântico" e não incluir visuais nesta página.
3.  **Publicação do Modelo Semântico**:
    
    - Publicar o modelo numa workspace específica, por exemplo, "XFashion Modelos Semânticos".

### Configuração e Certificação

Uma vez publicado, o modelo semântico pode ser configurado para ser detectável e certificado, permitindo que usuários solicitem permissões para acessá-lo.

## Conectando-se ao Modelo Semântico

A conexão pode ser realizada através do Power BI, onde os usuários podem visualizar e interagir com os dados sem a necessidade de criar relatórios adicionais.

## Editando Modelos Semânticos no Power BI Service

Os modelos semânticos podem ser editados diretamente no Power BI Service, sem a necessidade do Power BI Desktop. Isso promove um ambiente colaborativo onde múltiplos usuários podem trabalhar simultaneamente nos mesmos modelos.

### Ajustando Medidas

Medidas existentes podem ser ajustadas diretamente no serviço web. Alterações feitas são salvas automaticamente, promovendo atualizações em tempo real.

## Publicação e Gerenciamento de Relatórios

Quando um relatório é desconectado de sua origem de dados e conectado a um modelo semântico, ele pode funcionar de modo diferente. Este relatório pode ser depois publicado em outro workspace que irá espelhar as novas conexões.

## Permissões e Segurança

### Gerenciamento de Permissões

Permissões podem ser gerenciadas diretamente através do Power BI Service, permitindo que usuários específicos tenham acesso aos dados.

### Acesso Direto

Permissões podem ser concedidas via link, mas normalmente, é preferível controlar o acesso direto para manter a segurança e garantir que apenas os usuários autorizados tenham acesso ao modelo semântico.

## Conclusão

O BI de autoatendimento gerenciado no Power BI permite uma organização e distribuição eficientes dos dados, facilitando que diveras áreas de uma empresa acessem e utilizem dados relevantes para suas operações. A estrutura semântica consolidada melhora a colaboração e a confiança nos dados utilizados para tomadas de decisão.

> Observações Importante sobre o tema de: Modelo de Dados Aberto.
> 
> A opção de Modelo de Dados Aberto, fica inativa quando O Modelo Semântico (desktop) utiliza "atualização incremental". Além disso, após a publicação de um modelo semântico, se novas medidas forem criadas no PBI Service e, posteriormente houver alterações no modelo semântico, como por exemplo: Inclusão de uma nova coluna, ao republicar o modelo, as modificações realizadas no Power BI Service serão perdidas.
> 
> Pontos importantes a serem analisados.

* * *

&nbsp;

# Autoatendimento Gerenciado Personalizável

## Introdução

No vídeo discutimos um conceito inovador de autoatendimento gerenciado personalizável. Este conceito permite que criadores de conteúdo conectem outras fontes de dados dentro de um modelo semântico compartilhado, oferecendo maior flexibilidade e poder nas futuras análises. Vamos explorar os principais tópicos e funcionalidades apresentados.

## Principais Tópicos

### 1\. Modelos Semânticos Compartilhados

#### 1.1 Conceito de Modelo Semântico

Um modelo semântico serve como uma camada de abstração que permite análises e relatórios consistentes. Ele auxilia na estruturação dos dados de uma maneira que seja intuitiva e utilizável para diferentes partes da organização.

#### 1.2 Conexão com Dados CSV

Ao trabalhar com modelos semânticos, é possível integrar fontes de dados adicionais, como arquivos CSV. Essa integração facilita a análise de dados provenientes de diversas origens.

### 2\. Modos de Conexão de Dados

#### 2.1 Live Connection

A conexão ao vivo (Live Connection) permite conectar relatórios diretamente ao modelo semântico, oferecendo dados em tempo real. Isso é útil para manter atualizações contínuas e análises dinâmicas.

#### 2.2 Direct Query

Direct Query possibilita a conexão direta com bancos de dados, proporcionando atualizações em tempo real. No entanto, é importante utilizar esta funcionalidade com planejamento adequado, devido a possíveis impactos no desempenho e custos.

### 3\. Integração e Transformação de Dados

#### 3.1 Processo de Integração

É possível adicionar novas tabelas e fontes de dados ao modelo existente. No exemplo do vídeo, foi adicionado um arquivo CSV ao modelo, transformando-o para o modo Direct Query.

#### 3.2 Transformação de Dados e Parâmetros

Durante a integração de novas fontes, parâmetros são utilizados para dinamicamente ajustar caminhos e conexões entre diferentes tabelas e consultas.

### 4\. Relacionamentos de Tabelas

#### 4.1 Criação e Ajuste de Relacionamentos

Após a integração de novas tabelas, é essencial criar e ajustar relacionamentos entre estas e as tabelas existentes no modelo semântico, garantindo que todos os dados sejam corretamente correlacionados.

#### 4.2 Exemplo de Relacionamento

No vídeo, foi demonstrado como relacionar uma nova tabela de clientes com a tabela de base de vendas, utilizando o ID do cliente como chave de conexão.

### 5\. Modelos Compostos

#### 5.1 Definição e Utilização

Modelos compostos permitem combinar diferentes modos de conexão (Live Connection, Direct Query e Import) dentro de um único modelo semântico. Isso oferece flexibilidade extrema na manobra e análise dos dados.

#### 5.2 Benefícios e Limitações

Enquanto modelos compostos trazem uma flexibilidade ímpar, é crucial estar atento aos impactos no desempenho e no gerenciamento de custos, especialmente ao utilizar Direct Query.

### 6\. Boas Práticas e Dicas

#### 6.1 Planejamento de Direct Query

Para evitar problemas de desempenho e custos elevados, recomenda-se que o uso do Direct Query seja bem planejado e integrado com uma infraestrutura de banco de dados adequada.

#### 6.2 Publicação e Manutenção de Relatórios

A publicação dos relatórios deve ser feita de maneira organizada, garantindo que as conexões sejam mantidas e que a linhagem dos dados esteja clara e fácil de gerenciar.

### 7\. Conectividade e Linhagem

#### 7.1 Estrutura de Conexão

Os relatórios e conjuntos de dados publicados devem estar corretamente configurados para garantir que as conexões com modelos semânticos e outras fontes de dados sejam estáveis.

#### 7.2 Exemplos de Configuração

O vídeo demonstrou como visualizar e configurar a linhagem dos dados dentro de um workspace no Power BI, exemplificando a maneira correta de gerenciar a conectividade entre diferentes fontes e relatórios.

## Conclusão

O conceito de autoatendimento gerenciado personalizável, aliado ao uso de modelos semânticos compartilhados e modelos compostos, oferece uma poderosa ferramenta para análises de dados. Com a devida atenção às boas práticas, especialmente ao utilizar modos de conexão como Direct Query, este método proporciona flexibilidade e precisão nas análises, beneficiando toda a organização.

* * *

&nbsp;

# Preparação de Dados de Autoatendimento

## Introdução à Análise de Dados

A análise de dados é uma prática crucial para qualquer organização que busca tomar decisões baseadas em fatos e informações verificáveis. Um dos conceitos importantes nesse âmbito é a "única fonte da verdade" (Single Source of Truth, SSOT), que garante que todas as partes interessadas, desde analistas até patrocinadores e gerentes, utilizem a mesma versão dos dados.

## Estrutura de Camadas para Modelagem de Dados

### Ambiente de Três Camadas

Para garantir consistência e controle na análise de dados, dividimos nosso ambiente em três camadas distintas:

1.  **Fluxo de Dados**: Esta é a camada onde os dados brutos são tratados e processados.
2.  **Modelos Semânticos**: Aqui, os dados processados são organizados e modelados de acordo com regras de negócios.
3.  **Relatórios**: Esta camada final utiliza os dados modelados para gerar os relatórios e dashboards que serão consumidos pelos usuários finais.

### Importância da Estrutura em Camadas

- **Consistência**: Ao manter uma estrutura em camadas, garantimos que todos os usuários estejam utilizando os mesmos dados e as mesmas regras de negócios.
- **Segurança**: Apenas usuários autorizados têm acesso à camada de dados, impedindo acessos não autorizados.
- **Padronização**: Facilitamos a manutenção de padrões e boas práticas, como a utilização de conectores de dados consistentes (ex.: todos utilizando MySQL da mesma forma).

## Criação e Manutenção de Fluxos de Dados

### Criando um Workspace de Fluxos de Dados

Para começar, devemos criar um workspace destinado exclusivamente aos fluxos de dados. Isso nos permite organizar e gerenciar os diferentes conjuntos de dados de maneira eficiente.

### Configuração de Fontes de Dados

Ao configurar as fontes de dados, é essencial garantir que todos os dados relevantes estejam disponíveis e corretamente formatados. Isso pode envolver a configuração de gateways de dados e a atualização periódica dessas fontes para manter a integridade dos dados.

## Modelagem Semântica

### Criação de Modelos Semânticos

Os modelos semânticos são criados para organizar os dados de acordo com as regras de negócios estabelecidas. Estes modelos funcionam como intermediários entre os fluxos de dados e os relatórios.

### Importância dos Modelos Semânticos

- **Compartilhamento de Dados**: Modelos semânticos podem ser utilizados por múltiplos relatórios, garantindo que qualquer alteração nas regras de negócios seja automaticamente propagada para todos os relatórios relacionados.
- **Benefícios das Atualizações**: Qualquer correção ou melhoria aplicada a um modelo semântico beneficia instantaneamente todos os relatórios que consomem esses dados.

## Relatórios e Dashboards

### Conectando Relatórios ao Modelo Semântico

Os relatórios devem ser conectados ao modelo semântico para assegurar que todos os dados apresentados estejam de acordo com as regras e formatos definidos. Isso inclui garantir que novas tabelas e dados sejam integrados corretamente aos modelos semânticos e fluxos de dados existentes.

### Publicação e Verificação de Relatórios

Após a criação e configuração dos relatórios, é recomendável publicar os mesmos em workspaces apropriados e verificar a linhagem dos dados. A linhagem verifica quais dados estão sendo consumidos e de onde, garantindo transparência e controle sobre o uso dos dados.

## Boas Práticas em Análise de Dados

### Garantir a Consolidação da Única Fonte da Verdade

Para evitar discrepâncias entre diferentes usuários e interpretações errôneas dos dados, todos os dados devem ser processados e disponibilizados através do mesmo fluxo controlado.

### Solicitar Aprovações e Cargas de Novos Dados

Antes de integrar novos dados ao fluxo existente, recomenda-se solicitar aprovação e garantir que esses dados sejam carregados de forma a respeitar o fluxo estabelecido. Isso minimiza erros e inconsistências na análise final.

### Manutenção de Padrões de Nomeação e Organização

Manter a coesão e simplicidade nos nomes de tabelas, entidades e outras estruturas de dados facilita a manutenção e impede confusões futuras.

## Conclusão

A análise de dados é uma prática fundamental para a tomada de decisões estratégicas nas organizações. Utilizando uma estrutura bem definida de camadas e boas práticas de modelagem e manutenção de dados, é possível garantir que todas as partes interessadas utilizem dados de alta qualidade, seguros e consistentes, contribuindo para decisões mais informadas e eficazes.

> # Cenários de Autoatendimento (Self-Service BI) ☝️

* * *

&nbsp;

> # Gerenciamento e Implantação de Conteúdo👇

# Publicação de Conteúdo de Autoatendimento

## Introdução

Os cenários de gerenciamento e implantação de conteúdo são fundamentais para alcançar uma melhor gestão do ciclo de vida dos dados e dos relatórios. Utilizar esses cenários pode reduzir erros, minimizar inconsistências e melhorar a experiência de todos os usuários envolvidos, seja no desenvolvimento, teste ou consumo dos itens discutidos.

## Publicação de Conteúdo de Autoatendimento

### Pipelines de Implantação

#### Ambientes Separados

Em um pipeline de implantação, temos três ambientes separados:

1.  **Desenvolvimento**
2.  **Teste**
3.  **Produção**

Os criadores de conteúdo podem usar Power BI Desktop ou Power BI Online para desenvolver o conteúdo, que geralmente é salvo em um local compartilhado (OneDrive, Google Drive etc.) para que vários desenvolvedores possam utilizar simultaneamente. Este conteúdo é então publicado no Power BI Online, dentro de um pipeline de implantação com workspaces separados para cada ambiente.

#### Permissões

Cada workspace deve ter permissões distintas:

- **Desenvolvimento:** Apenas desenvolvedores têm acesso.
- **Teste:** Somente pessoas responsáveis pela garantia da qualidade dos dados e relatórios têm acesso.
- **Produção:** Consumidores finais têm acesso a relatórios ou aplicativos específicos.

### Configuração dos Workspaces

A configuração dos workspaces envolve renomear e atribuir permissões específicas para desenvolvimento, teste e produção. Por exemplo, um workspace de desenvolvimento pode ser nomeado como `x fashion dev`.

#### Salvar e Compartilhar

Os arquivos desenvolvidos são salvos em uma localização compartilhada e publicados no Power BI Online dentro de workspaces adequadamente configurados.

## Fluxos de Dados e Modelos Semânticos

### Consumo de Dados e Modelos Semânticos

Os fluxos de dados e modelos semânticos são essenciais para estruturar e consumir os dados corretamente. Eles devem ser configurados para se conectar aos dados via Direct Query ou outros métodos adequados. Em um cenário real, esses elementos estarão em ambientes separados para garantir uma maior segurança e eficiência.

### Recarregar e Atualizar Dados

A migração dos itens não transfere os dados em si, mas as configurações e metadados. Portanto, é crucial recarregar e atualizar os dados após a migração, especialmente ao migrar de desenvolvimento para teste ou produção.

## Automação e Regras de Implantação

### Automatizando a Mudança da Base de Dados

Para garantir que os dados sejam corretamente utilizados em cada ambiente, podem ser configuradas automações e regras de implantação:

- **Desenvolvimento:** Trabalhar com uma base de dados menor e anonimizada.
- **Teste:** Dados também anonimizados, mas em maior quantidade.
- **Produção:** Dados reais, com as configurações e atualizações necessárias.

### Parâmetros de Implantação

Automatizações podem ser configuradas por meio de parâmetros que ajustam a base de dados conforme o ambiente (Desenvolvimento, Teste, Produção). Isso evita a necessidade de reconfigurações manuais repetitivas.

## Controle de Versão e Publicação

### Publicação Estruturada

A publicação deve ser sempre feita inicialmente em `Desenvolvimento`, seguido pelos estágios de `Teste` e finalmente `Produção`. A cada etapa, são feitas as devidas verificações e ajustes necessários.

## Aplicativos Power BI

### Criação e Atualização de Aplicativos

Aplicativos no Power BI facilitam a visualização e utilização dos dados finalizados. Após configurar e testar os dados nos diferentes ambientes, o aplicativo deve ser criado e atualizado para refletir as alterações e garantir que os consumidores finais acessem informações corretas e atualizadas.

## Considerações Finais

O uso eficiente de pipelines de implantação, controle de versões e regras de automação são práticas essenciais para uma gestão eficaz do ciclo de vida dos dados e relatórios no Power BI. Implementando essas estratégias, as organizações podem reduzir erros, assegurar a qualidade dos dados e melhorar a experiência de todos os usuários envolvidos no processo.

* * *

&nbsp;

# Publicação de Conteúdo Corporativo com Power BI

## Introdução

A publicação de conteúdo corporativo é um processo estratégico importante para empresas que buscam alavancar seus dados e obter insights valiosos. Com ferramentas como Power BI, podemos criar, gerenciar e distribuir relatórios e modelos que ajudam na tomada de decisões. Neste eBook, exploraremos os principais pontos sobre este tema e como utilizar ferramentas auxiliares para otimizar este processo.

## Cenários de Publicação de Conteúdo

A publicação de conteúdo corporativo pode ser diferenciada em relação ao autoatendimento, especialmente devido à presença de um time dedicado para desenvolvimento. Esses criadores de conteúdo usam fontes de dados e têm várias maneiras de se conectar a elas.

### Conexão e Criação de Relatórios

Os criadores de conteúdo podem se conectar de três formas principais:

#### Power BI Desktop

O Power BI Desktop é uma ferramenta poderosa usada para criar relatórios e modelos, realizar tratamentos de tabelas, definir medidas, e estabelecer relacionamentos.

#### Tabular Editor

O Tabular Editor também é uma ferramenta relevante, embora seu uso no contexto da implantação de Power BI seja mais restrito. Sua principal função aqui não é a criação de modelos, mas é bom saber que essa opção existe.

### Ferramentas de Desenvolvimento

Além dessas ferramentas, utilizamos ferramentas de desenvolvimento de código para integrações avançadas.

#### Visual Studio Code

Utilizamos o Visual Studio Code ou ferramentas similares que permitem a execução de comandos de terminal. Isso é essencial para integrações com outros sistemas como Azure DevOps.

## Integração com Controle de Versão e Implantação

### Azure DevOps

O Azure DevOps serve para controle de versão e implantação. Ele nos permite gerenciar versões e implementar nossos pipelines de forma eficiente. O processo de integração com o Power BI é abordado para promover um melhor controle de versão e automação das implantações.

### GitHub

O GitHub é uma outra ferramenta de controle de versão que auxilia na organização e na construção do conhecimento. Mostraremos como usá-lo antes de explorar o Azure DevOps, pois acreditamos que é uma maneira mais simples de entender o processo inicial.

### Cenário de Pipeline de Implantação

Nosso cenário ideal de pipeline de implantação envolve a utilização dessas ferramentas em conjunto para criar um fluxo de trabalho contínuo e eficiente.

## Passo a Passo: Utilizando o GitHub e Azure DevOps

### Uso do GitHub

1.  Criação e configuração de repositórios.
2.  Controle de versões e gestão de branches.
3.  Como realizar commits e pull requests.
4.  Estratégias de colaboração e revisão de código.

### Uso do Azure DevOps

1.  Configuração de pipelines de build.
2.  Integração com Power BI para deploys automáticos.
3.  Monitoramento e gestão de pipelines.
4.  Melhores práticas para automação e segurança.

### Integração do Power BI com Azure DevOps

Agora que entendemos as herramientas, integramos o cenário completo:

1.  Configuração do pipeline de implantação no Azure DevOps.
2.  Configuração do pipeline de build para geração de artefatos.
3.  Publicando o conteúdo no serviço Power BI a partir das ferramentas configuradas.

## Considerações Finais

Neste eBook, focamos em discutir as melhores práticas e ferramentas para a publicação de conteúdo corporativo usando o Power BI. Através do uso integrado do Power BI Desktop, Tabular Editor, Visual Studio Code, GitHub e Azure DevOps, conseguimos criar uma robusta estratégia para controle de versão e implantação de conteúdo, garantindo eficiência e melhoria contínua.

Reitero que a prática e a aplicação desses conceitos em cenários reais são cruciais para dominar completamente o gerenciamento e a publicação de conteúdo corporativo com Power BI.

* * *

&nbsp;

# APIs

## Introdução

O uso das APIs do Power BI permite a automação de diversas tarefas, desde a atualização de conjuntos de dados até a execução de consultas. No entanto, para utilizar essas funcionalidades de forma eficiente e segura, é essencial realizar uma configuração adequada do ambiente e ter um entendimento claro dos processos envolvidos.

## Configuração do Ambiente

### Acesso às APIs

1.  **Habilitação das APIs**: No portal de administração do Power BI, é necessário habilitar as APIs necessárias. Isso pode ser feito para toda a organização ou apenas para grupos específicos de usuários.
2.  **Entidades de Serviço**: Habilitar o uso das APIs para entidades de serviço, permitindo que aplicativos registrados possam acessar dados de maneira controlada.

### Segurança e Acesso

1.  **Criação de Contas de Serviço**: É recomendado criar contas de serviço ao invés de usar credenciais pessoais. Essas contas funcionam como "aplicativos" que têm determinados níveis de permissão.
2.  **Registrar no Azure**: No portal do Azure, registre um novo aplicativo para servir como usuário de serviço no Power BI.
3.  **Permissões**: Configure as permissões de API necessárias para o aplicativo. Isso inclui permissões de leitura e escrita para conjuntos de dados.
4.  **Criação de Segredos e Certificados**: Gere segredos (senhas) para a autenticação segura do aplicativo. Defina um período de validade para esses segredos visando a segurança.

## Interação com Workspaces

### Autorização de Usuário

1.  **Adicionar o Aplicativo ao Workspace**: No Power BI, adicione o aplicativo de serviço com permissões administrativas ao workspace desejado.
2.  **Teste de Atualização**: Verifique se o usuário criado pode atualizar relatórios no workspace.

## Execução de Consultas com APIs

### Documentação e Verificação de Endpoints

1.  **Identificação de Funcionalidades**: Utilize a documentação oficial para entender as funcionalidades disponíveis, como `update` e `refresh`.
2.  **Teste de Funcionalidades**: Utilize ferramentas como Postman para testar a execução das APIs com dados reais.

### Exemplo de Atualização de Conjuntos de Dados

1.  **Utilização do Endpoint de Atualização**: Use o endpoint específico de `refresh` dentro do grupo para operar sobre os conjuntos de dados.
2.  **Autenticação e Requisições**: Configure o cabeçalho de autorização necessário nas requisições.

## Token de Autenticação

### Renovação do Token

1.  **Expiração do Token**: Os tokens de autenticação têm vida útil limitada e precisam ser renovados periodicamente.
2.  **Geração de Token**: Utilize um endpoint apropriado para solicitar novos tokens, fornecendo detalhes como `client_id` e `client_secret`.

## Execução de Consultas DAX

### Execução de Consultas no Power BI

1.  **Definição de Queries**: Estruture queries DAX para execução via API, garantindo que o resultado seja sempre uma tabela.
2.  **Manipulação de Respostas**: Configure a API para retornar o resultado das queries em formato legível, ideal para aplicação em outra análise ou visualização.

## Integração com Outras Ferramentas

### Aplicações Práticas

1.  **Integração com Ferramentas de Comunicação**: Conectar as funcionalidades do Power BI API com plataformas como o WhatsApp.
2.  **Inteligência Artificial**: Potencialize o uso do Power BI associando suas APIs a ferramentas de inteligência artificial para gerar insights proativos.

## Conclusão

Neste material, abordamos os passos essenciais para configurar e utilizar as APIs do Power BI com segurança. A automação através de APIs é um grande aliado na eficiência de processos, e ao seguir as práticas recomendadas, garantimos um ambiente seguro e produtivo para as operações de análise de dados.

> https://learn.microsoft.com/pt-br/rest/api/power-bi/datasets/refresh-dataset-in-group

> # Gerenciamento e Implantação de Conteúdo ☝️

* * *

&nbsp;

> # Segurança e Performance👇

# OLS

Neste ebook, aprenderemos como restringir tabelas e colunas conforme o perfil do usuário. Vamos usar o Power BI e o Tabular Editor para configurar restrições que garantem que apenas dados relevantes e permitidos sejam visualizados por diferentes perfis de usuários, como gerentes e vendedores.

## Objetivos

1.  **Configurar perfis de usuários**: Criar perfis de gerente e vendedor e definir suas permissões.
2.  **Restringir tabelas e colunas**: Configurar o acesso a tabelas e colunas conforme o perfil do usuário.
3.  **Usar o Tabular Editor**: Utilizar o Tabular Editor para implementar as restrições definidas.
4.  **Configurar segurança em múltiplos níveis**: Aplicar segurança em nível de objeto e em nível de linha.

# Configurando Perfis de Usuários

## Criação de Perfis

Primeiro, precisamos criar os perfis de usuários. Em nosso exemplo, criaremos dois perfis: gerente e vendedor.

- **Gerente**: Este perfil terá acesso à maioria das informações, exceto pelo nome dos vendedores.
- **Vendedor**: Este perfil não terá acesso à tabela de clientes.

### Passos

1.  Navegue até **Manage Roles** no Power BI.
2.  Crie dois novos perfis: `gerente_ols` e `vendedor_ols`.

```markdown
# Gerente OLS
# Vendedor OLS
```

## Salvando Perfis

Após criar os perfis, salve suas configurações para prosseguir para a próxima etapa, onde utilizaremos o Tabular Editor para definir restrições específicas.

# Restringindo Tabelas e Colunas

## Usando o Tabular Editor

O Tabular Editor será nosso principal aliado para definir as permissões de visualização de dados para os diferentes perfis.

### Restrições para Vendedores

1.  Abra o Tabular Editor.
2.  No perfil `vendedor_ols`, marque a tabela `DimCliente` como `None`.

### Restrições para Gerentes

1.  Selecione a coluna `NomeCliente` na tabela `DimCliente`.
2.  No perfil `gerente_ols`, marque a coluna como `None`.

## Testando as Restrições

### Teste para Vendedores

1.  Volte ao Power BI e visualize como vendedor.
2.  Observe que a tabela `DimCliente` e quaisquer visuais que dependam dela desaparecerão.

### Teste para Gerentes

1.  Visualize como gerente no Power BI.
2.  Observe que a tabela `DimCliente` estará visível, mas a coluna `NomeCliente` não.

# Combinação de Perfis

## Unificação de Perfis

Em certos casos, é necessário combinar restrições de perfis de segurança em nível de objeto e de linha. No Power BI, precisamos unificar essas configurações em um único perfil.

### Configurando Unificação

1.  Abra o gerenciador de perfis em **Modeling**.
2.  Combine configurações de `vendedor_ols` e `gerente_ols` em um único perfil.

```markdown
# Perfil Unificado para Vendedores
```

## Restrições Combinadas

### Exemplo

Define como gerente que um vendedor específico, como Carla, só possa ver suas próprias informações, sem acesso à tabela de clientes.

```markdown
# DimCliente
# Carla x Fashion
```

1.  Utilize hard-coding para ilustrar esse exemplo.
2.  Altere o email para `carla.ferreiraxfashion.com`.

# Publicação e Funcionalidade

## Publicando e Testando no Ambiente Real

Depois de configurar e testar localmente, publique o relatório para que as permissões sejam aplicadas corretamente no serviço do Power BI.

### Verificação Final

1.  Publique o relatório.
2.  Verifique se as restrições estabelecidas funcionam conforme esperado para os usuários finais.

## Garantia de Segurança

A segurança configurada será aplicada tanto ao relatório quanto à consulta direta ao conjunto de dados. Perfis de vendedores e gerentes terão acesso limitado conforme definido.

# Conclusão

Neste ebook, cobrimos como restringir tabelas e colunas no Power BI conforme o perfil do usuário. Usamos o Tabular Editor para definir essas restrições, garantindo segurança em múltiplos níveis. Com essas práticas, asseguramos que os dados estarão protegidos e acessíveis apenas para os usuários autorizados.

* * *

&nbsp;

# Query Folding

## Introdução

Quando estamos falando sobre consulta de dados em banco de dados, é sempre importante nos preocuparmos com a performance e a quantidade de linhas que estamos trazendo desse banco. Este eBook visa fornecer um guia para otimizar essas consultas utilizando as funcionalidades do Power BI, focando especialmente no recurso chamado **Query Folding**.

## O que é Query Folding?

Query Folding é uma funcionalidade do Power BI que permite que as operações feitas no editor de consultas sejam convertidas em comandos SQL, que são então executados no banco de dados fonte. Isso resulta em um desempenho melhorado, pois aproveita a capacidade de processamento do banco de dados.

## Conectando ao Banco de Dados

Primeiro, vamos nos conectar a uma tabela em um banco de dados SQL Server que está localizado em nossa máquina local. A tabela que vamos utilizar é chamada `f_vendas`.

### Passos para Conexão

1.  **Modo Import**: Selecione a opção de modo de importação ao conectar-se ao banco de dados.
2.  **Selecionar Tabela**: Escolha a tabela `f_vendas`.
3.  **Transformar Dados**: Clique na opção "Transform Data" para abrir o editor de consultas.

## Explorando a Tabela

Dentro do editor de consultas, clique com o botão direito na opção "Navigation". Aqui, você verá um botão chamado "View Native Query", que exibe a consulta SQL gerada.

### Filtragem de Dados

Para demonstrar o uso do Query Folding, vamos aplicar um filtro nas datas da tabela, restringindo os registros de 1º de janeiro de 2024 até 30 de abril de 2024.

```sql
WHERE data BETWEEN '2024-01-01' AND '2024-04-30'
```

Depois de aplicar o filtro, ao clicar com o botão direito e selecionar "View Native Query", você verá a consulta SQL atualizada refletindo o filtro aplicado.

### Seleção de Colunas

Podemos também selecionar colunas específicas para reduzir a quantidade de dados processados. Por exemplo, vamos selecionar apenas quatro colunas e remover as restantes.

## Adicionando Cálculos

Podemos adicionar novas colunas calculadas diretamente no editor de consultas. Por exemplo, vamos criar uma nova coluna que multiplica o ID do cliente por dois.

```sql
SELECT ID_Cliente, (ID_Cliente * 2) AS Cliente_vezes_dois FROM ...
```

Esta operação também será refletida na consulta SQL exibida ao clicar em "View Native Query".

## Limitações e Cuidados

Nem sempre todas as operações suportam Query Folding. Por exemplo, funções complexas podem desabilitar o Query Folding, resultando em menor eficiência.

### Exemplo de Função que Quebra o Query Folding

Vamos adicionar uma função que usa `Table.Buffer` para demonstrar como isso pode afetar o Query Folding.

```sql
Table.Buffer(...)
```

Ao fazer isso, o botão "View Native Query" será desabilitado, indicando que o Query Folding não está mais ativo.

## Otimização de Etapas

É fundamental garantir que o Query Folding esteja habilitado no máximo possível de etapas. Você pode reordenar as operações no editor de consultas para tentar manter o Query Folding ativo.

### Invertendo a Ordem das Etapas

Se invertermos a ordem das etapas e movemos a operação de multiplicação para depois da aplicação do buffer, poderemos manter o Query Folding ativo em maior parte das operações.

## Vantagens do Query Folding

- **Economia de Recursos**: Otimiza o uso de recursos do banco de dados.
- **Redução no Tempo de Atualização**: Acelera o processo de atualização dos dados.
- **Eficiência**: Melhora significativamente a eficiência das consultas.

## Conclusão

Utilizar o Query Folding no Power BI pode trazer grandes melhorias de performance e eficiência ao trabalhar com grandes volumes de dados em bancos de dados. É crucial entender como habilitar e manter o Query Folding ativo para aproveitar ao máximo suas vantagens.

> Consigo fazer o caminho inverso e montar uma query SQL no PowerQuery e usar no banco.

* * *

&nbsp;

# Atualização Incremental em Power BI

## Introdução

A atualização incremental é uma funcionalidade essencial quando lidamos com grandes volumes de dados. Ela nos permite atualizar apenas os novos dados que foram inseridos em uma tabela, ao invés de recarregar toda a base de dados. Isso otimiza a performance e minimiza o impacto em outros sistemas que possam estar consumindo os mesmos dados.

## Vantagens da Atualização Incremental

### Eficiência

A principal vantagem é não precisar recarregar todos os dados sempre que uma atualização for necessária. Isso é especialmente relevante para tabelas de fatos com milhões ou bilhões de linhas.

### Redução de Impacto em Sistemas Externos

Atualizar grandes volumes de dados continuamente pode causar uma sobrecarga no servidor, afetando negativamente outros sistemas que compartilham a mesma infraestrutura.

### Customização pelo Período

A atualização incremental permite definir os períodos que precisam ser constantemente atualizados, como os últimos 15 dias, garantindo que o intervalo seja suficiente para a conclusão de processos como emissão de notas fiscais e recebimentos.

## Como Configurar a Atualização Incremental

### Passo 1: Criação de Parâmetros

1.  Crie dois parâmetros: `range start` e `range end`.
2.  Ambos devem ser do tipo `datetime`.
3.  Defina datas pertinentes, por exemplo, de `1º de maio de 2024 às 00:00h` até `10 de maio de 2024`.

### Passo 2: Filtrar Dados

1.  Duplique a coluna de data.
2.  Converta a coluna duplicada para o formato `datetime`.
3.  Aplique filtros para que apenas as datas dentro do intervalo definido pelos parâmetros sejam mantidas.

### Passo 3: Configuração do Refresh Incremental

1.  Selecione a tabela que desejamos aplicar a atualização incremental.
2.  Defina que queremos manter dados dos últimos 36 meses e atualizar os últimos 21 dias.
3.  Aplique as configurações e salve o relatório.

## Verificação das Partições

### Conectando ao Tabular Editor

1.  Conecte-se ao conjunto de dados no Power BI utilizando o Tabular Editor.
2.  Confira as partições geradas e a segmentação dos dados em meses para períodos mais antigos e em dias para os períodos mais recentes.

## Publicação e Atualização de Relatório

### Publicação

1.  Publique o relatório no workspace desejado.
2.  Configure a atualização automática do relatório.

### Verificação de Dados Atualizados

1.  Após a publicação, verifique se os dados estão corretos no relatório.
2.  A data mais recente deve ser até o dia atual ou até o último dia do intervalo configurado para atualização.

## Considerações Finais

A atualização incremental é extremamente útil para manter a eficiência e robustez do sistema, otimizar o desempenho e assegurar a integridade dos dados. É uma prática essencial em ambientes empresariais que exigem alta disponibilidade e agilidade no processamento de grandes volumes de dados.

* * *

&nbsp;

# Entendendo o Funcionamento do Direct Query no Power BI

## Introdução

O Direct Query é uma funcionalidade do Power BI que permite a conexão em tempo real do modelo de dados com o banco de dados. Isso pode trazer tanto benefícios quanto desafios, pois embora ofereça dados atualizados constantemente, pode impactar negativamente o desempenho do servidor de banco de dados.

## Conectando-se ao Banco de Dados

### Passo a Passo Inicial

1.  Clique em "Get Data" no Power BI.
2.  Selecione SQL Server e insira "localhost" para um banco de dados local.
3.  Insira o nome do banco de dados, por exemplo, "vendas online".
4.  Selecione o modo "Direct Query" e clique em OK.

### Seleção de Tabelas

Após a conexão com o banco de dados:

1.  Selecione as tabelas necessárias, como "detalhes de pedidos" e "pedidos".
2.  Clique em "Transformar Dados" para manipular as tabelas conforme necessário.
3.  Finalize clicando em "Fechar e Aplicar".

## Criando Medidas no Power BI

### Medidas Básicas

Crie medidas básicas de contagem de linhas para verificar a conectividade e funcionalidade:

- **Contagem de Detalhes de Pedidos**:
    
    ```DAX
    ContagemDetalhes = COUNTROWS('detalhes de pedidos')
    ```
    
- **Contagem de Pedidos**:
    
    ```DAX
    ContagemPedidos = COUNTROWS('pedidos')
    ```
    

### Visualização no Relatório

Adicione as medidas criadas a um visual de tabela para visualizar as contagens em tempo real.

## Atualização em Tempo Real

### Script de Inserção de Dados

Utilize scripts para inserir dados periodicamente no banco de dados, simulando um ambiente de atualização em tempo real. Atualize o Power BI para refletir essas mudanças.

```sql
-- Script em SQL Server para inserir novos pedidos a cada 5 segundos
-- Exemplo de como o script pode ser estruturado
WHILE (1=1)
BEGIN
    INSERT INTO pedidos (...)
    WAITFOR DELAY '00:00:05'
END
```

### Configuração de Parâmetros de Atualização

Configure a atualização automática:

1.  Navegue até as configurações do relatório no ambiente online do Power BI.
2.  Defina a frequência de atualização, como por exemplo, a cada 15 minutos.

## Publicação e Criação de Workspaces

### Publicação do Relatório

1.  Crie um novo Workspace no Power BI chamado "Direct Query".
2.  Publique o relatório no Workspace criado.

### Monitoramento de Atualizações

Monitore as atualizações recebidas em tempo real para garantir o desempenho e a precisão dos dados.

## Considerações Finais

### Desempenho e Escalabilidade

- **Impacto no Desempenho**: Cada consulta em tempo real no Direct Query faz uma requisição ao banco de dados, que pode impactar significativamente o desempenho, principalmente com visuais complexos e grandes volumes de dados.
    
- **Necessidade de Dados em Tempo Real**: Nem sempre é necessário ter dados em tempo real. Avalie cuidadosamente se essa necessidade existe, pois pode ser um luxo caro e exigir uma infraestrutura robusta.
    

### Boas Práticas

- Avalie a real necessidade de utilizar Direct Query vs. Import Mode.
- Optimize as consultas e os modelos de dados no banco de dados.
- Monitore constantemente o desempenho do servidor e do Power BI.

## Conclusão

O uso do Direct Query no Power BI pode proporcionar uma poderosa ferramenta de análise de dados em tempo real, desde que usado com cautela e em cenários apropriados. A configuração adequada e a consideração de todos os fatores de desempenho são cruciais para o sucesso dessa abordagem.

* * *

&nbsp;

# Modelos Compostos no Power BI (interessante!!)

Os modelos compostos são uma funcionalidade importante que permite misturar diferentes modos de conexão de dados no Power BI. Esta abordagem pode melhorar a eficiência e a capacidade de resposta do seu modelo de dados. Vamos explorar como isso funciona e quais são as melhores práticas para implementá-lo.

## Introdução aos Modelos Compostos

Os modelos compostos permitem combinar tabelas que são carregadas através de diferentes métodos de conexão no Power BI. Isso pode ajudar a otimizar o desempenho da sua solução de BI.

### Modos de Conexão

Existem várias formas de conectar-se a dados no Power BI, sendo as mais comuns o DirectQuery e o modo Import. Cada uma tem suas características e usos recomendados:

- **DirectQuery**: Permite a consulta direta aos dados que estão armazenados em um banco de dados, trazendo apenas os dados necessários para análise no momento da consulta.
    
- **Import**: Carrega os dados para o Power BI, permitindo uma análise mais rápida, mas requerendo mais memória para armazenamento dos dados importados.
    

### Vantagens dos Modelos Compostos

Com os modelos compostos, é possível:

- **Otimizar o uso de recursos**: Combinar tabelas carregadas via DirectQuery e Import pode economizar memória e melhorar a resposta das consultas.
    
- **Flexibilidade**: Escolher o melhor modo de conexão para cada tabela dependendo do cenário de uso e da atualização necessária dos dados.
    

## Implementação de Modelos Compostos

Vamos explorar como implementar modelos compostos e algumas práticas recomendadas.

### Escolha de Modo de Carregamento

Ao construir um modelo, é importante determinar quais tabelas devem ser carregadas como DirectQuery e quais como Import. Algumas dicas incluem:

- Carregar como DirectQuery tabelas que mudam frequentemente ou são muito grandes.
    
- Utilizar Import para tabelas que não mudam frequentemente e que são críticas para desempenho analítico rápido.
    

### Exemplos de Modelagem

No Power BI, podemos ilustrar um modelo composto com algumas etapas simples:

- Conectar-se a uma fonte de dados usando DirectQuery e importar outras tabelas que não precisam de atualização constante.
    
- Visualizar o modelo de dados e verificar as conexões e o modo de cada tabela.
    

### Criação de Relacionamentos

É fundamental criar relacionamentos entre as tabelas para garantir a integridade do modelo de dados. Aqui estão algumas orientações:

- Relacionar tabelas compartilhando uma chave comum.
    
- Verificar e ajustar direções de relacionamento para evitar ambiguidade nas consultas.
    

## Desafios e Boas Práticas

Mesmo com os benefícios, os modelos compostos apresentam desafios que precisam ser geridos adequadamente.

### Desempenho e Escalabilidade

Um uso inadequado dos modelos compostos pode levar a problemas de desempenho. Algumas práticas recomendadas incluem:

- Evitar o uso excessivo de DirectQuery sem necessidade, pois pode sobrecarregar o servidor de dados.
    
- Monitorar continuamente o desempenho do relatório e ajustar conforme necessário.
    

### Manutenção e Atualização de Dados

Manter as fontes de dados atualizadas e sem falhas é essencial:

- Implementar rotinas de atualização para evitar dados desatualizados.
    
- Garantir que todas as conexões são estáveis e que os dados são consistentes.
    

## Conclusão

Os modelos compostos oferecem uma abordagem flexível e eficiente para o design de modelos de dados no Power BI. Com um entendimento claro das suas capacidades e limitações, é possível maximizar o desempenho dos seus relatórios e melhorar a experiência de análise de dados.

* * *

&nbsp;

# Comparando Modo Import e Direct Query

## Introdução

O Power BI é uma ferramenta indispensável para a análise de dados e visualização de informações. Dentro dessa plataforma, existem diferentes modos de conexão e manuseio dos dados, como o **Import Mode** e o **Direct Query**. Este ebook se aprofunda nesses modos, abordando suas características, vantagens e desvantagens para auxiliar profissionais a escolherem a melhor abordagem para suas análises.

## Direction Query: Visão Geral

### O que é o Direct Query?

O Direct Query é um modo de conexão que permite ao Power BI consultar dados diretamente da fonte, sem precisar importá-los completamente para dentro do arquivo .PBIX. Isso garante que as visualizações no Power BI sempre reflitam os dados mais recentes disponíveis na fonte de dados.

### Benefícios do Direct Query

- **Dados em Tempo Real:** A principal vantagem do Direct Query é que os dados são sempre frescos, ou seja, refletem alterações em tempo real que ocorrem na fonte de dados.
- **Flexibilidade de Consulta:** Permite lidar com grandes volumes de dados e múltiplas tabelas sem a necessidade de importar todos os dados para o Power BI.

### Desvantagens do Direct Query

- **Performance:** Como cada consulta ao Power BI é executada diretamente no banco de dados, isso pode sobrecarregar o servidor, resultando em tempos de resposta mais lentos, especialmente em fontes de dados grandes ou complexas.
- **Dependência do Servidor:** O desempenho do dashboard pode ser impactado pela estabilidade da conexão de rede e pela capacidade do servidor de banco de dados.

## Modo Import

### O que é o Modo Import?

O modo Import em Power BI faz uma cópia dos dados e os armazena no arquivo .PBIX. Isso significa que todas as operações de consulta e transformação são feitas localmente, o que pode aumentar a velocidade das análises.

### Benefícios do Modo Import

- **Velocidade de Processamento:** Como os dados estão armazenados localmente, o tempo de resposta das consultas é significativamente mais rápido.
- **Menor Carga no Servidor:** Não há necessidade de ir e voltar entre o Power BI e a fonte de dados para cada consulta.

### Desvantagens do Modo Import

- **Atualização de Dados:** Os dados precisam ser recarregados manualmente sempre que houver alterações na fonte, o que não permite uma visualização em tempo real.
- **Uso de Espaço:** Grandes volumes de dados podem tornar o arquivo .PBIX volumoso e pesado.

## Comparação: Direct Query vs. Modo Import

### Escolhendo o Modo Certo

A escolha entre Direct Query e Modo Import deve considerar fatores como:

- **Necessidade de Dados em Tempo Real:** Se atualizações frequentes e pontuais são necessárias, o Direct Query pode ser preferível.
- **Limitações de Recursos:** Para evitar sobrecarga em servidores de banco de dados críticos, o Modo Import pode ser mais eficiente.

### Exemplos de Aplicação

- **Cenário com Dados Estáticos:** O Modo Import é ideal para conjuntos de dados que são atualizados esporadicamente e onde a latência não é crucial.
- **Cenário com Alta Variabilidade de Dados:** Para ambientes dinâmicos onde os dados mudam frequentemente, o Direct Query oferece maior agilidade na captura desses dados.

## Melhores Práticas para Uso de Direct Query

### Otimizando Desempenho

- **Filtros Adequados:** Evitar consultas desnecessárias à base de dados aplicando filtros eficazes diretamente no Power BI.
- **Limitação de Tabelas e Colunas:** Limitar o número de tabelas e colunas selecionadas para apenas o necessário é crucial para melhorar a eficiência.

### Misturando Modo Import e Direct Query

O uso híbrido permite que profissionais aproveitem o melhor de ambos os mundos, armazenando dados históricos menos variáveis no modo Import e mantendo dados críticos com necessidade de atualização constante no Direct Query.

## Conclusão

Ambos os modos, Import e Direct Query, têm seu lugar no arsenal do Power BI. A escolha entre um ou outro dependerá das necessidades específicas do projeto, da performance desejada e das restrições dos sistemas de dados subjacentes. Profissionais que dominam esses modos poderão criar dashboards poderosos e eficientes que atendem aos objetivos de negócios com precisão e rapidez.

* * *

&nbsp;

# Tabelas Híbridas no Power BI: Explorando o Melhor dos Dois Mundos

## Introdução

Neste eBook, exploraremos o conceito de Tabelas Híbridas no Power BI, um recurso que combina as capacidades dos modos de importação e de consulta direta (Direct Query) para oferecer flexibilidade e eficiência no gerenciamento de dados. Discutiremos como configurar uma tabela híbrida, as suas vantagens e considerações importantes para otimizar o uso desse recurso.

## O que são Tabelas Híbridas?

As Tabelas Híbridas permitem que diferentes partes de uma tabela sejam armazenadas em modos distintos:

- **Modo Importação**: Ideal para dados históricos que não precisam ser atualizados frequentemente.
- **Modo Direct Query**: Usado para dados recentes que exigem atualizações em tempo real.

### Funcionamento das Tabelas Híbridas

As Tabelas Híbridas segmentam cargas incrementais por períodos (anos, trimestres, meses), armazenando dados antigos no modo de importação e dados recentes no modo Direct Query. Essa abordagem otimiza o desempenho ao permitir que apenas os dados necessários sejam consultados em tempo real.

## Configuração de uma Tabela Híbrida

### 1\. Configuração Inicial

Para criar uma Tabela Híbrida, siga os passos abaixo:

#### Passo 1: Importação de Dados

- Conecte-se ao seu banco de dados e importe os dados necessários em modo de importação.

#### Passo 2: Configuração de Parâmetros de Carga Incremental

- Crie os parâmetros `RangeStart` e `RangeEnd` para filtrar as datas em que a carga incremental será aplicada.

#### Passo 3: Aplicando os Filtros

- Filtre a coluna de data para considerar apenas os registros maiores ou iguais a `RangeStart` e menores que `RangeEnd`.

### 2\. Configuração de Refresh Incremental

#### Passo 4: Configuração do Refresh Incremental

- Escolha as tabelas que terão refresh incremental.
- Decida quantos anos de dados arquivar e por quantos dias manter atualizações incrementais.

#### Passo 5: Habilitação do Modo Direct Query em Tempo Real

- Marque a opção para capturar dados mais recentes em tempo real usando o modo Direct Query.

## Publicação e Monitoração

Depois de configurada a Tabela Híbrida, publique o relatório no Power BI Online. Certifique-se de conectar seu relatório a um workspace habilitado para o recurso premium, onde o uso de Tabelas Híbridas é possível.

### Lembretes Importantes

- **Diferença de Composite Mode e Tabelas Híbridas**: As Tabelas Híbridas são únicas e comportam ambos os modos, enquanto o Composite Mode é um modelo que possui tabelas em modos distintos.
- **Atualização e Consumo de Dados**: Configure atualizações agendadas para evitar custos excessivos de consulta, especialmente no ambiente de nuvem.

## Otimização e Cuidados

### Boas Práticas de Uso

- **Configuração das Atualizações**: Programe atualizações diárias ou horários específicos para minimizar custos e maximizar a eficiência.
- **Monitoramento de Uso**: Acompanhe o uso dos recursos para evitar consultas excessivas que possam levar a faturas elevadas.

### Potenciais Desafios

- **Concorrência de Serviços**: Ao utilizar dados recentes, verifique como o processamento pode competir com outros serviços.
- **Custos em Nuvem**: Fique atento ao consumo contínuo de recursos da nuvem, especialmente em cenários não configurados para parar serviços automaticamente ao atingir um limite de gastos.

## Considerações Finais

As Tabelas Híbridas no Power BI oferecem uma poderosa combinação de eficiências, ao equilibrar processamento local e consultas em tempo real. Este recurso é adequado para cenários em que tanto a análise de históricos quanto a reatividade são necessários. Lembre-se de monitorar o uso de recursos constantemente para otimizar o desempenho e os custos.  
![HfxksI5B95.png](../_resources/HfxksI5B95.png)

* * *

&nbsp;

# Hybrid Tables sem Licença Premium

## Introdução

O objetivo deste eBook é explorar métodos de integração de tabelas no Power BI, especialmente quando se enfrenta restrições no uso de workspaces Premium. Este material visa apresentar formas de otimização usando tabelas no modo Import e Direct Query, além de oferecer um passo a passo sobre como configurar e implementar esses métodos.

## Divisão de Tabelas: Import e Direct Query

### Por que Separar?

Separamos as tabelas para contornar a limitação de workspaces Premium. Embora essa não seja a melhor abordagem, ela pode servir como uma solução temporária. Contudo, é sempre recomendável considerar o upgrade para uma licença Premium quando possível.

### Implementação Inicial

Primeiro, dividimos nossa fonte de dados em duas partes:

- Uma tabela de Import para dados históricos.
- Uma tabela de Direct Query para dados recentes.

**Passos:**

1.  Configuramos a conexão com o SQL Server.
2.  Criamos uma tabela dinâmica para captação de dados recentes com Direct Query.
3.  Configuramos a tabela de Import com dados anteriores a uma data específica.

### Considerações de Desempenho

Optando por uma solução híbrida, estabelecemos relações entre as tabelas:

- Utilizamos o modo 'Duo' para as tabelas em relação à conectividade Import e Direct Query.
- Implementamos otimização ao assumir a integridade referencial, permitindo um desempenho melhorado através de joins mais eficientes.

## Medidas de Desempenho no Power BI

### Criação de Medidas

Desenvolvemos três medidas principais para análise:

- `Total Import`: Soma dos dados históricos.
- `Total Real Time`: Soma dos dados recentes.
- `Total Geral`: Soma dos valores das duas medidas acima.

Essas medidas são visualizadas em cards no Power BI, com filtros de tempo para observar variações.

### Análise de Otimização

Utilizamos o Performance Analyzer para medir o tempo de execução de cada medida. Constatou-se que a medida no modo Import é mais rápida comparada com a medida em Direct Query devido à execução local dos cálculos.

## Avançando com Relatórios

### Trabalhando com Datas

Para melhorar a eficiência, criamos lógicas para que as consultas ao banco de dados sejam minimizadas:

- Avaliamos o contexto de data para decidir quando realizar consultas específicas no Direct Query.
- Utilizamos filtros avançados para garantir consultas mais específicas e rápidas.

### Ajustes Otimizados

Utilizamos variáveis e condições para otimizar como e quando os dados do Direct Query são utilizados, garantindo que consultas desnecessárias ao banco sejam evitadas.

## Conclusão

Embora a divisão entre tabelas Direct Query e Import seja uma solução paliativa, ela fornece um método eficaz para lidar com restrições de licenciamento enquanto permite o uso eficiente de recursos e a visualização de dados em tempo real.

Este livro abordou as etapas críticas para a configuração de um modelo de dados híbrido no Power BI, proveu razões para suas escolhas, e também os métodos de otimização usados para melhorar o desempenho do relatório. É aconselhável, no entanto, buscar possibilidades para implementar integrações mais robustas em um ambiente de licença Premium para maximizar o uso das funcionalidades do Power BI.

## Considerações Finais

Utilizar tabelas híbridas de forma adequada não só melhora o desempenho de relatórios como também proporciona uma experiência de análise de dados mais flexível e abrangente. Avalie sempre suas necessidades de negócios e o retorno sobre investimento em licenças de software para escolher a solução ideal. Esta abordagem é uma solução pontual e não deve ser considerada uma prática padrão se há possibilidade de utilizar funcionalidades nativas do Power BI.

Ao seguir esses passos, pode-se garantir um ambiente otimizado para a manipulação de grandes volumes de dados, mantendo sempre a integridade e a performance das informações.

* * *

&nbsp;

# Otimização de Modelos de Dados para Power BI

## Introdução

No mundo atual dos dados, otimizar o tamanho e a eficiência dos modelos é crucial, especialmente quando lidamos com limites de armazenamento e performance em plataformas como o Power BI. Este ebook aborda estratégias práticas para reduzir o tamanho de modelos de dados e garantir análises efetivas sem comprometer a qualidade.

## Capítulo 1: Desafios de Armazenamento no Power BI

### 1.1 Limitações de Tamanho

- Contas gratuitas e Premium têm diferentes capacidades de armazenamento.
- Contas básicas limitam uploads a um giga, enquanto que a Premium permite até dez gigas.

### 1.2 A Necessidade de Otimização

- Modelos de dados como exemplo de uma base import de cento e noventa megabytes exigem otimizações para se adequarem a essas limitações.

## Capítulo 2: Estratégias de Otimização

### 2.1 Redução do Tamanho da Base de Dados

- Técnicas essenciais para diminuir o tamanho do arquivo sem perda significativa de dados relevantes.

### 2.2 Uso de Agregações

- Introdução ao conceito de agregações para reduzir o tamanho dos dados processados em análises.

## Capítulo 3: Análise Detalhada e Agregações

### 3.1 Consulta em Tabelas Agregadas

- Como utilizar consultas dentro de tabelas agregadas em determinados momentos para otimizar a performance das análises.

### 3.2 Acesso a Dados Detalhados

- Estratégias para buscar dados detalhados apenas quando necessário, utilizando ferramentas específicas do Power BI.

## Capítulo 4: Avaliação de Performance do Modelo

### 4.1 Uso do DAX Studio

- Instalação e uso do DAX Studio como uma ferramenta para verificar a eficiência do modelo de dados.

### 4.2 Identificação de Problemas no Modelo

- Como identificar se o modelo está otimizado ou se há necessidade de melhorias significativas.

## Capítulo 5: Implementação de Melhorias

### 5.1 Revisão de Estruturas de Dados

- Avaliação das tabelas maiores e das colunas que ocupam mais espaço, como a "factor online sales".

### 5.2 Remoção de Colunas Desnecessárias

- Estratégias para identificar e remover colunas que não agregam valor ao modelo, visando a redução do tamanho.

## Conclusão

A otimização de modelos de dados é fundamental para trabalhar eficientemente com ferramentas de análise como o Power BI. Com as estratégias discutidas neste ebook, é possível manter um equilíbrio entre desempenho e qualidade, facilitando insights rápidos e precisos.

## Apêndice: Ferramentas e Recursos Adicionais

- Lista de softwares e plugins úteis para aprimorar a performance em análises de dados.

> # Segurança e Performance ☝️

* * *

&nbsp;

> # Melhoria Continua👇

# Criação de um Centro de Excelência (Center of Excellence - CoE)

## Introdução

Agora que já exploramos bastante a prática, é hora de voltar para a teoria. Vamos discutir como criar um time responsável por aplicar tudo o que aprendemos, garantindo que toda a organização faça uso correto dos recursos e ferramentas disponíveis. Este time é chamado de Centro de Excelência, ou Center of Excellence (CoE), conforme a Microsoft.

## Objetivos do Centro de Excelência

### Evangelizar uma Cultura Orientada a Dados

- **Defensores do Uso de Dados:** O CoE é responsável por promover uma cultura onde as decisões são tomadas com base em dados de qualidade, e não em achismos.
- **Garantia de Dados Tratados:** Asseguram que as bases de dados estejam bem tratadas, democraticamente acessíveis e compreensíveis por todos.

### Promover a Adoção de Análises

- **Uso do Power BI:** O CoE promove a adoção e o uso espalhado do Power BI na empresa.
- **Educar e Orientar Usuários:** Não só educam sobre o que é preciso fazer, mas incrementam a competência dos usuários no uso das ferramentas analíticas.

## Benefícios de ter um Centro de Excelência

### Coordenação e Disseminação do Conhecimento

- **Atualização Constante:** Um time dedicado garante informações e atualizações constantes sobre o Power BI, mantendo todos ajustados às boas práticas.
- **Redução de Riscos:** Com base em dados, o CoE ajuda a diminuir riscos de implementação e aumenta a eficiência da análise.

### Redução da Dívida Técnica

- **Prevenção de Gambiarras:** Minimiza problemas futuros causados por práticas mal adotadas ou improvisações.

## Responsabilidades do Centro de Excelência

### Mentoria e Engajamento

- **Frequência e Hábito:** Criação de um hábito de revisões para manter o time afinado e atualizado.
- **Engajamento Interno:** Criar fóruns e grupos de estudo para que todos compartilhem a cultura analítica e o uso dos dados.

### Apoio às Áreas de Negócio

- **Consultoria Interna:** O CoE atua como um consultor para ajudar diferentes áreas a implementar soluções eficazes.

### Criação e Promoção de Materiais de Treinamento

- **Governança e Cultura de Dados:** Desenvolver e promover materiais que apoiem a educação contínua sobre governança e práticas de dados.

## Estrutura e Habilidades Necessárias

### Estrutura Básica de Membros

- **Líder do CoE:** Orienta e interage com outras áreas.
- **Coach:** Educação continua em habilidades de dados.
- **Treinador:** Desenvolvimento e entrega de materiais de treinamento.
- **Analista de Dados e Designer:** Criação e gestão de relatórios e dashboards.
- **Engenheiro de Dados:** Planejamento e manutenção da arquitetura de dados.
- **Suporte ao Usuário:** Ajuda com dúvidas e manutenção da plataforma.

### Modelos de Estrutura do Centro de Excelência

#### Centralizado

- **Equipe Única:** Realiza todas as atividades analíticas de ponta a ponta.
- **Boa Governança:** Define práticas melhores para a organização toda.

#### Unificado

- **Membros Integrados às Áreas de Negócio:** Cada membro foca em uma área específica.
- **Troca de Conhecimento Efetiva:** Pessoas familiarizadas com negócios e dados.

#### Federado

- **Participação por Comitê:** Membros de várias áreas participam como colaboradores adicionais.
- **Flexibilidade de Tempo:** Uso de tempo disponível de participantes sem formação de um time fixo.

## Conclusão

Definir e implementar um Centro de Excelência é crucial para uma organização que deseja maximizar seu potencial analítico. Desde a escolha da estrutura até a delegação de responsabilidades, cada passo deve ser pensado de acordo com a maturidade e as necessidades específicas da empresa.

* * *

&nbsp;

# Gestão de Mudanças: Conceitos e Práticas

## Introdução

Para iniciarmos o assunto de gestão de mudanças, é essencial definirmos o que é uma mudança. Mudança é basicamente tudo que afeta a maneira como as pessoas trabalham e interagem com novas ferramentas e processos. Independentemente de a mudança ser percebida como positiva ou negativa, toda mudança precisa de uma gestão eficaz para que surta os benefícios esperados.

## Benefícios da Mudança

Quando planejamos uma mudança, geralmente o objetivo é melhorar algo. Listaremos aqui alguns dos benefícios da mudança:

### Uso Eficaz das Análises

A mudança pode ajudar os criadores de conteúdo a utilizarem as ferramentas de maneira mais fácil e rápida.

### Limitação de Redundância

Redução do trabalho duplicado de diferentes áreas, consolidando dados de fontes únicas.

### Redução de Comportamento de Risco

Implementação de boas práticas para garantir a segurança de dados e processos, reduzindo comportamentos arriscados.

### Mitigação da Resistência

Uma gestão eficaz de mudanças minimiza os problemas de resistência, apesar de ser impossível evitá-los completamente.

## Obstáculos na Gestão de Mudanças

### Envolvimento de Pessoas

O gerenciamento de mudanças é um obstáculo fundamental para o sucesso em muitas organizações, pois envolve principalmente pessoas, e não ferramentas ou processos.

### Empatia e Comunicação

A alteração não deve ser forçada, e a resistência não pode ser ignorada, pois isso pode aumentar divisões organizacionais e diminuir a eficácia. Promova sempre como melhorias, pois isso é menos ameaçador.

## Tipos de Mudanças

### Nível de Processo

Mudanças que afetam uma grande quantidade de pessoas ou a empresa inteira, como a centralização da gestão de conteúdo.

### Nível de Solução

Correções específicas em indicadores, inclusão de novos conceitos de análise ou disponibilização de novos aplicativos.

## Abordagem Incremental

Para gerenciar mudanças de forma adequada, a abordagem deve ser sempre incremental:

### Definir o Que Está Mudando

Descrever exatamente o que será alterado, quem será afetado e justificar os benefícios.

### Descrever o Impacto da Mudança

Identificar os processos e equipes impactadas e considerar os efeitos e as consequências.

### Identificar Prioridades

Migrar aos poucos, para que as mudanças sejam assimiladas de forma gradual.

### Planejar a Implementação Incremental

Dividir a mudança em fases e criar um plano de ação para cada uma.

### Planejar Treinamento e Suporte

Treinar os utilizadores antes das mudanças e ter um suporte disponível para dúvidas.

## Envolvimento da Liderança e Stakeholders

### Importância da Liderança

Apoio da liderança é crucial para a aceitação e redução da resistência às mudanças.

### Engajamento de Promotores e Tratamento de Detratores

Identificar e envolver promotores para defesa da mudança e entender preocupações de detratores para converter possíveis resistências.

## Comunicação Eficaz

### Estrutura da Comunicação

Comunicar claramente o que está mudando, os benefícios, o cronograma e as informações adicionais.

### Informação de Contato

Ter um canal aberto para que todos possam expressar preocupações e buscar esclarecimentos.

## Conclusão

A gestão de mudanças bem executada requer comunicação ativa, apoio da liderança e trabalho em equipe. Colocando em prática essas diretrizes, é possível implantar soluções de maneira eficaz e com a mínima resistência.

> # Melhoria Continua☝️
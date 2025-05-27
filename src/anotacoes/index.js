import React from 'react';

// Função processNote (sem alterações, apenas usada)
const processNote = (meta) => {
    const fallbackTitle = meta.slug?.split('/').pop().replace(/_/g, ' ').replace(/-/g, ' ').replace(/\.md$/i, '').replace(/%20/g, ' ').replace(/&/g, 'e');
    return {
        ...meta,
        title: meta.title || fallbackTitle || 'Sem Título',
        Content: () => React.createElement('div', { style: { color: 'orange' } }, `Conteúdo para ${meta.slug} será carregado via fetch.`),
    };
};

// Lista MANUAL de metadados.
export const allNotesMeta = [
    // === Notas dentro de ProductOwner/ProductOwnerIBM/ (EXISTENTES - NÃO MUDAR) ===
        processNote({
        slug: '01 - Product Owner/Product-Led Growth',
        path: '/anotacoes/01 - Product Owner/Product-Led Growth.md',
        title: 'Product-Led Growth - Product School',
        date: '2025-05-26',
        excerpt: 'Habilidades e ferramentas essenciais necessárias como Product Owner',
        tags: ['Communication', 'Stakeholder', '01 - Product Owner'],
    }),
        processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/Essential Skills and Tools for Innovation - IBM (Module 3',
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/Essential Skills and Tools for Innovation - IBM (Module 3.md',
        title: 'Essential Skills and Tools for Innovation - Modulo 3',
        date: '2025-05-24',
        excerpt: 'Habilidades e ferramentas essenciais necessárias como Product Owner',
        tags: ['Communication', 'Stakeholder', 'IBM', '01 - Product Owner'],
    }),
        processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/Essential Skills and Tools for Innovation - IBM (Module 2',
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/Essential Skills and Tools for Innovation - IBM (Module 2.md',
        title: 'Essential Skills and Tools for Innovation - Modulo 2',
        date: '2025-05-16',
        excerpt: 'Habilidades e ferramentas essenciais necessárias como Product Owner',
        tags: ['Communication', 'Stakeholder', 'IBM', '01 - Product Owner'],
    }),
    processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/Essential Skills and Tools for Innovation - IBM (M',
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/Essential Skills and Tools for Innovation - IBM (M.md',
        title: 'Essential Skills and Tools for Innovation - Modulo 1',
        date: '2025-05-08',
        excerpt: 'Habilidades e ferramentas essenciais necessárias como Product Owner',
        tags: ['Communication', 'Stakeholder', 'IBM', '01 - Product Owner'],
    }),
    processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/Communications & Stakeholder Management - IBM Cert-1',
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert-1.md',
        title: 'Communications & Stakeholder Management - Modulo 2',
        date: '2025-04-26',
        excerpt: 'Técnicas avançadas em colaboração e desenvolvimento de produto.',
        tags: ['Communication', 'Stakeholder', 'IBM', '01 - Product Owner'],
    }),
    processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/Communications & Stakeholder Management - IBM Cert-2',
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert-2.md',
        title: 'Communications & Stakeholder Management - Modulo 3',
        date: '2025-04-28',
        excerpt: 'Gerenciando entregas de produtos por meio de colaboração eficaz.',
        tags: ['Communication', 'Stakeholder', 'IBM', '01 - Product Owner'],
    }),
    processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/Communications & Stakeholder Management - IBM Cert',
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert.md',
        title: 'Communications & Stakeholder Management - Modulo 1',
        date: '2025-04-23',
        excerpt: 'Fundamentos da colaboração.',
        tags: ['Communication', 'Stakeholder', 'IBM', '01 - Product Owner'],
    }),
     processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/Introduction to Agile Development and Scrum - IBM -2',
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM -2.md',
        title: 'Introduction to Agile Development and Scrum - Modulo 3',
        date: '2025-04-19',
        excerpt: 'Execução diária.',
        tags: ['Agile', 'Scrum', 'IBM', '01 - Product Owner'],
    }),
    processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/Introduction to Agile Development and Scrum - IBM -1',
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM -1.md',
        title: 'Introduction to Agile Development and Scrum - Modulo 2',
        date: '2025-04-18',
        excerpt: 'Planejamento ágil.',
        tags: ['Agile', 'Scrum', 'IBM', '01 - Product Owner'],
    }),
     processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/Introduction to Agile Development and Scrum - IBM ', // Atenção ao espaço no final
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM .md', // Atenção ao espaço
        title: 'Introduction to Agile Development and Scrum - Modulo 1',
        date: '2025-04-14',
        excerpt: 'Introdução a metodologia ágil e scrum.',
        tags: ['Agile', 'Scrum', 'IBM', '01 - Product Owner'],
    }),
    processNote({
        slug: '01 - Product Owner/01 - Product Owner IBM/TheProductOwnerProfessionUnleashingthePowe',
        path: '/anotacoes/01 - Product Owner/Product Owner IBM/TheProductOwnerProfessionUnleashingthePowe.md',
        title: 'The Product Owner Profession: Unleashing the Power of Scrum',
        date: '2025-04-10',
        excerpt: 'Explorando o papel fundamental do 01 - Product Owner no Scrum.',
        tags: ['01 - Product Owner', 'Scrum', 'IBM'],
    }),

    // // ===== NOVAS NOTAS DA PASTA 02 - HardSkills =====
    // // !!! VERIFIQUE CADA SLUG E PATH COM SEUS ARQUIVOS REAIS !!!
    // processNote({
    //     slug: '02 - HardSkills/Aplicando DAX ao negócio',
    //     path: '/anotacoes/02 - HardSkills/Aplicando DAX ao negócio.md',
    //     title: 'Aplicando DAX ao Negócio',
    //     date: '', excerpt: '', tags: ['DAX', 'Power BI', 'BI'],
    // }),
    // processNote({
    //     slug: '02 - HardSkills/Aula sobre relacionamentos ativos,inativos e suas ', // Atenção: nome parece truncado/incompleto
    //     path: '/anotacoes/02 - HardSkills/Aula sobre relacionamentos ativos,inativos e suas .md', // Atenção: nome parece truncado/incompleto e espaço antes de .md?
    //     title: 'Relacionamentos Ativos e Inativos', // Sugestão
    //     date: '', excerpt: '', tags: ['Modelagem', 'Power BI', 'BI'],
    // }),
    // processNote({
    //     slug: '02 - HardSkills/BI Concepts - Curso Udemy',
    //     path: '/anotacoes/02 - HardSkills/BI Concepts - Curso Udemy.md',
    //     title: 'BI Concepts - Curso Udemy',
    //     date: '', excerpt: '', tags: ['BI', 'Conceitos', 'Udemy'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/Data Warehouse com Data Marts e Power BI (Projetão-1)', // Assumindo ')' estava faltando
    //     path: '/anotacoes/02 - HardSkills/Data Warehouse com Data Marts e Power BI (Projetão-1).md', // Assumindo ')' estava faltando
    //     title: 'DW, Data Marts e Power BI (Projetão 1)',
    //     date: '', excerpt: '', tags: ['DW', 'Data Mart', 'Power BI', 'Projeto'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/Data Warehouse com Data Marts e Power BI (Projetão)', // Assumindo ')' estava faltando
    //     path: '/anotacoes/02 - HardSkills/Data Warehouse com Data Marts e Power BI (Projetão).md', // Assumindo ')' estava faltando
    //     title: 'DW, Data Marts e Power BI (Projetão)',
    //     date: '', excerpt: '', tags: ['DW', 'Data Mart', 'Power BI', 'Projeto'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/DAX Avançado - Xperiun',
    //     path: '/anotacoes/02 - HardSkills/DAX Avançado - Xperiun.md',
    //     title: 'DAX Avançado - Xperiun',
    //     date: '', excerpt: '', tags: ['DAX', 'Power BI', 'Xperiun'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/DAX Essencial - Xperiun',
    //     path: '/anotacoes/02 - HardSkills/DAX Essencial - Xperiun.md',
    //     title: 'DAX Essencial - Xperiun',
    //     date: '', excerpt: '', tags: ['DAX', 'Power BI', 'Xperiun'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/Estudo de Business',
    //     path: '/anotacoes/02 - HardSkills/Estudo de Business.md',
    //     title: 'Estudo de Business',
    //     date: '', excerpt: '', tags: ['Business', 'Negócios'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/Formação Data Warehouse com Data Lake e SQL Server-1',
    //     path: '/anotacoes/02 - HardSkills/Formação Data Warehouse com Data Lake e SQL Server-1.md',
    //     title: 'Formação DW com Data Lake e SQL Server - Pt 1',
    //     date: '', excerpt: '', tags: ['DW', 'Data Lake', 'SQL Server'],
    // }),
    // processNote({
    //     slug: '02 - HardSkills/Formação Data Warehouse com Data Lake e SQL Server-2',
    //     path: '/anotacoes/02 - HardSkills/Formação Data Warehouse com Data Lake e SQL Server-2.md',
    //     title: 'Formação DW com Data Lake e SQL Server - Pt 2',
    //     date: '', excerpt: '', tags: ['DW', 'Data Lake', 'SQL Server'],
    // }),
    // processNote({
    //     slug: '02 - HardSkills/Formação Data Warehouse com Data Lake e SQL Server-3',
    //     path: '/anotacoes/02 - HardSkills/Formação Data Warehouse com Data Lake e SQL Server-3.md',
    //     title: 'Formação DW com Data Lake e SQL Server - Pt 3',
    //     date: '', excerpt: '', tags: ['DW', 'Data Lake', 'SQL Server'],
    // }),
    // processNote({
    //     slug: '02 - HardSkills/Formação Data Warehouse com Data Lake e SQL Server',
    //     path: '/anotacoes/02 - HardSkills/Formação Data Warehouse com Data Lake e SQL Server.md',
    //     title: 'Formação DW com Data Lake e SQL Server',
    //     date: '', excerpt: '', tags: ['DW', 'Data Lake', 'SQL Server'],
    // }),
    // processNote({
    //     slug: '02 - HardSkills/Formação PBI - Alura (Fundamentos DAX e PBI)',
    //     path: '/anotacoes/02 - HardSkills/Formação PBI - Alura (Fundamentos DAX e PBI).md',
    //     title: 'Formação Power BI - Alura (Fundamentos DAX e PBI)',
    //     date: '', excerpt: '', tags: ['Power BI', 'DAX', 'Alura'],
    // }),
    // processNote({
    //     slug: '02 - HardSkills/Governança de Dados - Materiais Xperiun',
    //     path: '/anotacoes/02 - HardSkills/Governança de Dados - Materiais Xperiun.md',
    //     title: 'Governança de Dados - Materiais Xperiun',
    //     date: '', excerpt: '', tags: ['Governança', 'Dados', 'Xperiun'],
    // }),
    // processNote({
    //     slug: '02 - HardSkills/Implantação PowerBI + Governança - Xperiun',
    //     path: '/anotacoes/02 - HardSkills/Implantação PowerBI + Governança - Xperiun.md',
    //     title: 'Implantação Power BI + Governança - Xperiun',
    //     date: '', excerpt: '', tags: ['Power BI', 'Governança', 'Xperiun'],
    // }),
    // processNote({
    //     slug: '02 - HardSkills/KPIs Concepts',
    //     path: '/anotacoes/02 - HardSkills/KPIs Concepts.md',
    //     title: 'KPIs Concepts',
    //     date: '', excerpt: '', tags: ['KPI', 'Métricas', 'BI'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/Linguagem M - Aprofundamento',
    //     path: '/anotacoes/02 - HardSkills/Linguagem M - Aprofundamento.md',
    //     title: 'Linguagem M - Aprofundamento',
    //     date: '', excerpt: '', tags: ['Power Query', 'M', 'Power BI'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/Modelagem de Dados Avançado - Xperiun',
    //     path: '/anotacoes/02 - HardSkills/Modelagem de Dados Avançado - Xperiun.md',
    //     title: 'Modelagem de Dados Avançado - Xperiun',
    //     date: '', excerpt: '', tags: ['Modelagem', 'Dados', 'Xperiun'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/Modelagem de Dados',
    //     path: '/anotacoes/02 - HardSkills/Modelagem de Dados.md',
    //     title: 'Modelagem de Dados',
    //     date: '', excerpt: '', tags: ['Modelagem', 'Dados'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/PowerQuery Avançado - Xperiun',
    //     path: '/anotacoes/02 - HardSkills/PowerQuery Avançado - Xperiun.md',
    //     title: 'Power Query Avançado - Xperiun',
    //     date: '', excerpt: '', tags: ['Power Query', 'Power BI', 'ETL', 'Xperiun'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/Projeto de BI na prática',
    //     path: '/anotacoes/02 - HardSkills/Projeto de BI na prática.md',
    //     title: 'Projeto de BI na Prática',
    //     date: '', excerpt: '', tags: ['BI', 'Projeto'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/SQL Avançado - Xperiun',
    //     path: '/anotacoes/02 - HardSkills/SQL Avançado - Xperiun.md',
    //     title: 'SQL Avançado - Xperiun',
    //     date: '', excerpt: '', tags: ['SQL', 'Banco de Dados', 'Xperiun'],
    // }),
    //  processNote({
    //     slug: '02 - HardSkills/Trabalhando com Grandes Bases Corporativas',
    //     path: '/anotacoes/02 - HardSkills/Trabalhando com Grandes Bases Corporativas.md',
    //     title: 'Trabalhando com Grandes Bases Corporativas',
    //     date: '', excerpt: '', tags: ['SQL', 'Performance', 'Banco de Dados'],
    // }),
    // // ===== FIM DAS NOTAS DE 02 - HardSkills =====


].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));


// Função getNoteMetaBySlug (sem alterações)
export const getNoteMetaBySlug = (slug) => {
    console.log("--- getNoteMetaBySlug ---");
    const decodedSlug = decodeURIComponent(slug || '');
    console.log(`Buscando metadados para slug decodificado da URL: "${decodedSlug}"`);
    const foundMeta = allNotesMeta.find(note => {
        const currentNoteSlug = note.slug || '';
        console.log(`Comparando: URL ("${decodedSlug}") === Index ("${currentNoteSlug}")`);
        return currentNoteSlug.trim() === decodedSlug.trim();
    });
    if (!foundMeta) {
        console.error(`ERRO: Metadados não encontrados para o slug "${decodedSlug}". Verifique se este slug existe.`);
        console.log("Slugs disponíveis definidos no index.js:", allNotesMeta.map(n => n.slug));
    } else {
        console.log("Metadados encontrados para:", foundMeta.title);
        console.log("Path que será usado no fetch:", foundMeta.path);
    }
    console.log("--- Fim getNoteMetaBySlug ---");
    return foundMeta;
};

// Função para pegar todos os metadados para a lista
export const getAllNotesMeta = () => allNotesMeta;

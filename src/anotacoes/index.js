import React from 'react';

const processNote = (meta) => {
    const fallbackTitle = meta.slug?.split('/').pop().replace(/_/g, ' ').replace(/-/g, ' ').replace(/\.md$/i, '').replace(/%20/g, ' ').replace(/&/g, 'e'); // Tenta limpar nome para fallback
    return {
        ...meta,
        title: meta.title || fallbackTitle || 'Sem Título',
        Content: () => React.createElement('div', { style: { color: 'orange' } }, `Conteúdo para ${meta.slug} será carregado via fetch.`),
    };
};

// Lista MANUAL de metadados.
export const allNotesMeta = [
    // === Notas dentro de Product Owner/Product Owner IBM/ ===
    processNote({
        slug: 'Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert-1',
        path: '/anotacoes/Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert-1.md',
        title: 'Communications & Stakeholder Management - Modulo 2', // Preencher via Front Matter ou aqui
        date: '2025-04-26', // Adicione a data YYYY-MM-DD
        excerpt: 'Técnicas avançadas em colaboração e desenvolvimento de produto.', // Adicione um resumo
        tags: ['Communication', 'Stakeholder', 'IBM', 'Product Owner'], // Adicione tags relevantes
    }),
    processNote({
        slug: 'Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert-2',
        path: '/anotacoes/Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert-2.md',
        title: 'Communications & Stakeholder Management - Modulo 3',
        date: '2025-04-28',
        excerpt: 'Gerenciando entregas de produtos por meio de colaboração eficaz.',
        tags: ['Communication', 'Stakeholder', 'IBM', 'Product Owner'],
    }),
    processNote({
        slug: 'Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert', // Assumindo que era Cert e não Cert-3
        path: '/anotacoes/Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert.md',
        title: 'Communications & Stakeholder Management - Modulo 1',
        date: '2025-04-23',
        excerpt: 'Fundamentos da colaboração.',
        tags: ['Communication', 'Stakeholder', 'IBM', 'Product Owner'],
    }),
     processNote({
        slug: 'Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM -2', // Atenção ao '-1'
        path: '/anotacoes/Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM -2.md',
        title: 'Introduction to Agile Development and Scrum - Modulo 3',
        date: '2025-04-19',
        excerpt: 'Execução diária.',
        tags: ['Agile', 'Scrum', 'IBM', 'Product Owner'],
    }),
    processNote({
        slug: 'Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM -1', // Atenção ao '-2'
        path: '/anotacoes/Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM -1.md',
        title: 'Introduction to Agile Development and Scrum - Modulo 2',
        date: '2025-04-18',
        excerpt: 'Planejamento ágil.',
        tags: ['Agile', 'Scrum', 'IBM', 'Product Owner'],
    }),
     processNote({
        slug: 'Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM ', // Atenção ao espaço no final
        path: '/anotacoes/Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM .md', // Atenção ao espaço
        title: 'Introduction to Agile Development and Scrum - Modulo 1',
        date: '2025-04-14',
        excerpt: 'Introdução a metodologia ágil e scrum.',
        tags: ['Agile', 'Scrum', 'IBM', 'Product Owner'],
    }),
    processNote({
        // Slug e Path baseados EXATAMENTE no nome do arquivo da imagem
        slug: 'Product Owner/Product Owner IBM/TheProductOwnerProfessionUnleashingthePowe',
        path: '/anotacoes/Product Owner/Product Owner IBM/TheProductOwnerProfessionUnleashingthePowe.md',
        // Metadados - Preencha ou use Front Matter
        title: 'The Product Owner Profession:  Unleashing the Power of Scrum', // Corrigido aqui vs slug
        date: '2025-04-10', // Manteve exemplo
        excerpt: 'Explorando o papel fundamental do Product Owner no Scrum.',
        tags: ['Product Owner', 'Scrum', 'IBM'],
    }),


    // --- Adicione outras notas de OUTRAS pastas aqui ---
    // Exemplo:
    // processNote({
    //   slug: 'HardSkills/Lideranca/nota-sobre-lideranca', // Adapte ao seu nome real
    //   path: '/anotacoes/HardSkills/Lideranca/nota-sobre-lideranca.md', // Adapte ao seu nome real
    //   title: 'Nota Sobre Liderança',
    //   date: '2024-03-15',
    //   excerpt: 'Principais conceitos de liderança moderna...',
    //   tags: ['Liderança', 'Hard Skills'],
    // }),


].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0)); // Ordena por data (mais recentes primeiro)


// Função getNoteMetaBySlug (com logs)
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
        console.error(`ERRO: Metadados não encontrados para o slug "${decodedSlug}". Verifique se este slug existe EXATAMENTE IGUAL no array allNotesMeta em src/anotacoes/index.js.`);
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
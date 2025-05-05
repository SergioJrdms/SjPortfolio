// src/anotacoes/index.js

import React from 'react';

// Função processNote (mantida como antes)
const processNote = (meta) => {
    // Tenta gerar um título fallback se não houver um definido nos metadados
    const fallbackTitle = meta.slug?.split('/').pop() // Pega a última parte (nome do arquivo/slug)
        .replace(/_/g, ' ') // Substitui _ por espaço
        .replace(/-/g, ' ') // Substitui - por espaço
        .replace(/\.md$/i, '') // Remove extensão .md (se houver no slug acidentalmente)
        .replace(/%20/g, ' '); // Substitui %20 (se vier da URL) por espaço
    return {
        ...meta,
        title: meta.title || fallbackTitle || 'Sem Título',
        // Placeholder para o conteúdo que será carregado via fetch
        Content: () => React.createElement('div', { style: { color: 'orange' } }, `Conteúdo para ${meta.slug} será carregado via fetch.`),
    };
};

// Lista MANUAL de metadados. *** VERIFIQUE E COMPLETE COM SEUS DADOS EXATOS ***
export const allNotesMeta = [
  // --- Exemplo Corrigido baseado na imagem image_453ba2.png ---
  processNote({
    // SLUG: Caminho relativo DENTRO de public/anotacoes, SEM extensão .md
    // Pasta: ProductOwner / Subpasta: ProductOwnerIBM / Arquivo: TheProductOwnerProfessionUnleashingthePowe
    slug: 'Product Owner/Product Owner IBM/TheProductOwnerProfessionUnleashingthePowe',

    // PATH: Caminho completo a partir de /, incluindo /anotacoes/ e extensão .md
    // Deve corresponder EXATAMENTE ao arquivo em public/anotacoes/
    path: '/anotacoes/Product Owner/Product Owner IBM/TheProductOwnerProfessionUnleashingthePowe.md',

    // Metadados (Ajuste se necessário)
    title: 'The Product Owner Profession: Unleashing the Power', // Ou pegue do frontmatter se houver
    date: '2024-04-10',
    excerpt: 'Explorando o papel fundamental do Product Owner no Scrum...',
    tags: ['Product Owner', 'Scrum', 'IBM'],
  }),

  // --- Exemplo para "Communications & Stakeholder Management - IBM Cert-1.md" ---
  // !!! VERIFIQUE OS NOMES EXATOS !!!
  processNote({
    slug: 'Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert-1', // Mantenha '&', espaços, hífens
    path: '/anotacoes/Product Owner/Product Owner IBM/Communications & Stakeholder Management - IBM Cert-1.md', // Mantenha '&', espaços, hífens
    title: 'Communications & Stakeholder Management - IBM Cert-1', // Título fallback ou defina um melhor
    date: '', // Adicione a data
    excerpt: '', // Adicione o resumo
    tags: ['Communication', 'Stakeholder', 'IBM'], // Adicione tags
  }),

   // --- Exemplo para "Introduction to Agile Development and Scrum - IBM .md" ---
   // !!! VERIFIQUE O NOME EXATO (parece ter espaço antes do .md?) !!!
   processNote({
    slug: 'Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM ', // Mantenha o espaço se existir no nome
    path: '/anotacoes/Product Owner/Product Owner IBM/Introduction to Agile Development and Scrum - IBM .md', // Mantenha o espaço se existir
    title: 'Introduction to Agile Development and Scrum - IBM', // Título fallback
    date: '',
    excerpt: '',
    tags: ['Agile', 'Scrum', 'IBM'],
  }),

  


  // !!! ADICIONE AQUI um objeto processNote({...}) para CADA uma das suas outras notas !!!
  // Lembre-se de usar os nomes EXATOS das pastas e arquivos que estão em public/anotacoes/


].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));


// Função getNoteMetaBySlug (com logs, sem alterações na lógica)
export const getNoteMetaBySlug = (slug) => {
    console.log("--- getNoteMetaBySlug ---");
    const decodedSlug = decodeURIComponent(slug || '');
    console.log(`Buscando metadados para slug decodificado da URL: "${decodedSlug}"`);

    const foundMeta = allNotesMeta.find(note => {
        const currentNoteSlug = note.slug || '';
        console.log(`Comparando: URL ("${decodedSlug}") === Index ("${currentNoteSlug}")`);
        // Adiciona trim() para remover espaços extras acidentais no início/fim
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

export const getAllNotesMeta = () => allNotesMeta;
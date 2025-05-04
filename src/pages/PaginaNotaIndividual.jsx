import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom'; // Import useParams e Link
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
// Importa a função para buscar os metadados
import { getNoteMetaBySlug } from '../anotacoes/index.js'; // Verifique o caminho

function PaginaNotaIndividual() {
  // ===== MODIFICAÇÃO: Usa params['*'] para pegar o slug da rota splat =====
  const params = useParams();
  const slug = params['*']; // Captura tudo depois de /anotacoes/
  // ===== FIM DA MODIFICAÇÃO =====

  const [noteContent, setNoteContent] = useState('');
  const [noteData, setNoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reseta estados ao mudar de slug
    setLoading(true);
    setError(false);
    setNoteData(null);
    setNoteContent('');

    if (!slug) { // Se o slug for vazio ou indefinido por algum motivo
        console.error("Slug inválido recebido:", slug);
        setError(true);
        setLoading(false);
        return;
    }

    // 1. Busca os metadados da nota pelo slug (slug já deve estar correto aqui)
    const meta = getNoteMetaBySlug(slug); // Usa a função do index.js

    if (!meta || !meta.path) {
      // Log de erro já acontece dentro de getNoteMetaBySlug
      setError(true);
      setLoading(false);
      return;
    }

    // 2. Busca o conteúdo do arquivo .md usando fetch e o path dos metadados
    console.log("Iniciando fetch para:", meta.path); // Log extra
    fetch(meta.path)
      .then(response => {
        console.log(`Status da resposta para ${meta.path}: ${response.status}`); // Log do status
        if (!response.ok) {
          throw new Error(`Erro ${response.status} ao buscar ${meta.path}`);
        }
        return response.text();
      })
      .then(text => {
        // 3. Processa o texto com gray-matter
        const parsedMarkdown = matter(text);
        console.log("Frontmatter parseado:", parsedMarkdown.data);
        setNoteData({ ...meta, ...parsedMarkdown.data }); // Combina metadados + frontmatter
        setNoteContent(parsedMarkdown.content);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro no fetch ou processamento da nota:", err);
        setError(true);
        setLoading(false);
      });

  }, [slug]); // Re-executa o efeito se o slug mudar

  // Renderiza estado de loading
  if (loading) {
    return <div className='container mx-auto text-center py-40 text-text-secondary'>Carregando nota...</div>;
  }

  // Renderiza estado de erro (seja por não achar metadados ou falha no fetch)
  if (error || !noteData) {
     return <div className='container mx-auto text-center py-40 text-accent'>Erro: Não foi possível carregar esta anotação. Verifique o console (F12) e o arquivo `src/anotacoes/index.js`.</div>;
  }

  // Renderiza a nota se tudo deu certo
  return (
    <section id="nota-individual" className="py-24 bg-bg-primary pt-32 sm:pt-24">
      <div className="container mx-auto px-6 max-w-3xl"> {/* Limita largura */}
         <div className="mb-8">
             <Link to="/anotacoes" className="text-accent hover:text-accent-hover text-sm">
                &larr; Voltar para Anotações
             </Link>
         </div>

         {/* Cabeçalho da Nota */}
         <header className="mb-8 border-b border-border-color pb-4">
            <h1 className='text-3xl sm:text-4xl font-bold text-text-primary mb-2'>{noteData.title || 'Sem Título'}</h1>
            {noteData.date && <p className='text-sm text-text-secondary'>Publicado em: {noteData.date}</p>}
            {noteData.tags && noteData.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {noteData.tags.map(tag => (
                        <span key={tag} className="text-xs bg-bg-card border border-border-color px-2 py-0.5 rounded text-text-secondary">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
         </header>

        {/* Conteúdo Markdown Renderizado */}
        <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none
                            prose-headings:font-semibold prose-a:text-accent hover:prose-a:text-accent-hover
                            prose-code:text-red-bright prose-code:font-mono prose-code:text-sm
                            prose-code:before:content-none prose-code:after:content-none prose-code:px-1 prose-code:py-0.5 prose-code:bg-bg-card prose-code:rounded-sm
                            prose-pre:bg-bg-card prose-pre:text-gray-300 prose-pre:p-4 prose-pre:rounded-md">
             <ReactMarkdown
                children={noteContent}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
             />
        </article>
      </div>
    </section>
  );
}

export default PaginaNotaIndividual;
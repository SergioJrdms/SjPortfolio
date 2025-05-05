import React, { useState, useEffect } from 'react'; // Garanta que useState e useEffect estão importados
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkSlug from 'remark-slug';
import { getNoteMetaBySlug } from '../anotacoes/index.js';
import { FaArrowLeft, FaCalendarAlt, FaArrowUp } from 'react-icons/fa'; // Adicionado FaArrowUp

function PaginaNotaIndividual() {
    const params = useParams();
    const slug = params['*'];
    const [noteContent, setNoteContent] = useState('');
    const [noteData, setNoteData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ===== NOVO: Estado e Lógica para Botão "Voltar para Cima" =====
    const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) { // Pode ajustar o valor (400px)
                setIsScrollButtonVisible(true);
            } else {
                setIsScrollButtonVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // ===== FIM DA LÓGICA DO BOTÃO =====

    // useEffect para buscar a nota (sem alterações)
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        setError(null);
        setNoteData(null);
        setNoteContent('');
        if (!slug) { setError("Slug inválido na URL."); setLoading(false); return; }
        const meta = getNoteMetaBySlug(slug);
        if (!meta || !meta.path) { setError(`Metadados não encontrados para slug: ${slug}.`); setLoading(false); return; }
        fetch(meta.path)
            .then(response => { if (!response.ok) { throw new Error(`Erro ${response.status}`); } return response.text(); })
            .then(text => {
                try {
                    const parsedMarkdown = matter(text);
                    const combinedData = { ...meta, ...(parsedMarkdown.data || {}) };
                    if (!combinedData.title) { combinedData.title = meta.title || slug.split('/').pop().replace(/_/g, ' ') || 'Sem Título'; }
                    setNoteData(combinedData);
                    setNoteContent(parsedMarkdown.content || '');
                } catch (parseError) { setError(`Erro ao processar markdown: ${parseError.message}`); }
            })
            .catch(err => { setError(`Erro ao buscar nota: ${err.message}`); })
            .finally(() => { setLoading(false); });
    }, [slug]);

    // Renderização de Loading e Erro (sem alterações)
    if (loading) { return <div className='container mx-auto flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center py-40 text-center'><div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"><span className="sr-only">Carregando...</span></div><p className="mt-4 text-text-secondary">Carregando anotação...</p></div>; }
    if (error || !noteData) { return <div className='container mx-auto text-center py-40 text-accent'><p className='font-semibold mb-2'>Erro ao carregar a anotação.</p><p className='text-sm text-text-secondary'>{error || 'Os dados da nota não puderam ser carregados.'}</p><p className='text-xs text-text-secondary mt-4'>(Verifique o console (F12) e o `index.js`)</p></div>; }

    // Renderização da Nota
    return (
        // Usando um Fragment <> para permitir que o botão fique fora da section principal
        <>
            <section id="nota-individual" className="py-24 bg-bg-primary pt-32 sm:pt-24">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="content-wrapper max-w-4xl mx-auto bg-bg-card/50 backdrop-blur-sm border border-border-color/50 rounded-xl p-8 md:p-12 shadow-lg">
                        {/* Botão Voltar para Lista */}
                        <div className="mb-8">
                            <Link to="/anotacoes" className="inline-flex items-center gap-2 text-sm text-text-secondary transition-all duration-300 ease-in-out hover:text-accent">
                                <FaArrowLeft />
                                Voltar para Anotações
                            </Link>
                        </div>

                        {/* Cabeçalho */}
                        <header className="mb-10 border-b border-border-color pb-6">
                           <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4'>{noteData?.title || 'Sem Título'}</h1>
                           <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary">
                               {noteData?.date && (<span className="flex items-center gap-1.5"><FaCalendarAlt className="opacity-70" />{noteData.date}</span>)}
                               {noteData?.tags && noteData.tags.length > 0 && (<div className="flex flex-wrap gap-2 items-center">{noteData.date && <span className="opacity-50">|</span>}{noteData.tags.map(tag => (<span key={tag} className="inline-block rounded-full bg-red-darker/50 px-2.5 py-0.5 text-xs text-red-bright/90">{tag}</span>))}</div>)}
                            </div>
                        </header>

                        {/* Conteúdo */}
                        <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none">
                            <ReactMarkdown
                                children={noteContent}
                                remarkPlugins={[remarkGfm, remarkSlug]}
                                rehypePlugins={[rehypeRaw]}
                            />
                        </article>
                    </div>
                </div>
            </section>

            {/* ===== NOVO: Botão "Voltar para Cima" (fora da section principal) ===== */}
            <button
                type="button"
                onClick={scrollToTop}
                className={`
                  ${isScrollButtonVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
                  fixed bottom-8 right-8 z-50
                  p-3 rounded-full
                  bg-accent text-white
                  shadow-lg hover:bg-accent-hover
                  transition-all duration-300 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary
                `}
                aria-label="Voltar para o topo"
            >
                <FaArrowUp className="h-5 w-5" />
            </button>
            {/* ===== FIM DO BOTÃO ===== */}
        </>
    );
}

export default PaginaNotaIndividual;
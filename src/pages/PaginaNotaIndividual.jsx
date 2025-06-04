import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkSlug from 'remark-slug';
import { getNoteMetaBySlug } from '../anotacoes/index.js';
import { FaArrowLeft, FaCalendarAlt, FaArrowUp, FaClock, FaTag } from 'react-icons/fa';
import { FiFileText, FiArrowUpCircle } from 'react-icons/fi';

function PaginaNotaIndividual() {
    const params = useParams();
    const slug = params['*'];
    const [noteContent, setNoteContent] = useState('');
    const [noteData, setNoteData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [readingProgress, setReadingProgress] = useState(0);
    const [loadingProgress, setLoadingProgress] = useState(0);

    // Estado para botão "Voltar para Cima"
    const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

    // Simulação de progresso de carregamento
    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setLoadingProgress(prev => {
                    if (prev >= 85) return prev;
                    return prev + Math.random() * 8;
                });
            }, 350);

            return () => clearInterval(interval);
        }
    }, [loading]);

    // Lógica de scroll com progresso de leitura
    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / scrollHeight) * 100;
            
            setReadingProgress(Math.min(100, Math.max(0, progress)));
            setIsScrollButtonVisible(scrolled > 400);
        };
        
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // useEffect para buscar a nota
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        setError(null);
        setNoteData(null);
        setNoteContent('');
        setLoadingProgress(0);
        
        if (!slug) { 
            setError("Slug inválido na URL."); 
            setLoading(false); 
            return; 
        }
        
        const meta = getNoteMetaBySlug(slug);
        if (!meta || !meta.path) { 
            setError(`Metadados não encontrados para slug: ${slug}.`); 
            setLoading(false); 
            return; 
        }
        
        // Simular delay mínimo para mostrar o loading
        const minLoadingTime = new Promise(resolve => setTimeout(resolve, 1400));
        
        Promise.all([
            fetch(meta.path)
                .then(response => { 
                    if (!response.ok) { 
                        throw new Error(`Erro ${response.status}`); 
                    } 
                    return response.text(); 
                })
                .then(text => {
                    try {
                        const parsedMarkdown = matter(text);
                        const combinedData = { ...meta, ...(parsedMarkdown.data || {}) };
                        if (!combinedData.title) { 
                            combinedData.title = meta.title || slug.split('/').pop().replace(/_/g, ' ') || 'Sem Título'; 
                        }
                        setNoteData(combinedData);
                        setNoteContent(parsedMarkdown.content || '');
                        setLoadingProgress(100);
                    } catch (parseError) { 
                        setError(`Erro ao processar markdown: ${parseError.message}`); 
                    }
                })
                .catch(err => { 
                    setError(`Erro ao buscar nota: ${err.message}`); 
                }),
            minLoadingTime
        ])
        .finally(() => {
            setTimeout(() => setLoading(false), 500); // Delay adicional para suavizar transição
        });
    }, [slug]);

    // Cálculo estimado de tempo de leitura
    const estimateReadingTime = (content) => {
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return minutes;
    };

    const bgColorPrimary = '#121212';
    const bgColorSecondary = '#1a1a1a';
    const darkPurple_10 = 'rgba(82, 0, 190, 0.1)';
    const redDarkest_10 = 'rgba(107, 13, 32, 0.1)';

    // Renderização de Loading Aprimorada
    if (loading) { 
        return (
            <div className='min-h-screen flex items-center justify-center relative overflow-hidden' 
                 style={{
                     background: `linear-gradient(160deg, ${bgColorPrimary} 0%, ${darkPurple_10} 30%, ${redDarkest_10} 70%, ${bgColorSecondary} 100%)`,
                     backgroundSize: '250% 100%',
                     animation: 'gradientShift 20s ease infinite'
                 }}>
                
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-darker/15 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/8 to-red-darker/8 rounded-full blur-3xl animate-pulse delay-500" />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />

                <div className="relative z-10 text-center max-w-md mx-auto px-6">
                    {/* Loading Icon com múltiplas camadas */}
                    <div className="relative mb-8">
                        <div className="w-24 h-24 mx-auto relative">
                            {/* Círculo externo */}
                            <div className="absolute inset-0 rounded-full border-4 border-accent/20"></div>
                            {/* Círculo rotativo principal */}
                            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r-accent/60 animate-spin"></div>
                            {/* Círculo interno pulsante */}
                            <div className="absolute inset-2 rounded-full border-2 border-red-darker/40 animate-pulse"></div>
                            {/* Círculo rotativo interno (direção oposta) */}
                            <div className="absolute inset-3 rounded-full border-2 border-transparent border-b-red-bright/80 animate-[spin_2s_linear_infinite_reverse]"></div>
                            {/* Ponto central */}
                            <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent to-red-bright rounded-full animate-pulse"></div>
                        </div>
                        
                        {/* Efeito de brilho */}
                        <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-radial from-accent/30 via-transparent to-transparent animate-ping"></div>
                    </div>

                    {/* Título principal */}
                    <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-text-primary via-accent to-text-primary bg-clip-text mb-3 animate-pulse">
                        Carregando anotação
                    </h2>
                    
                    {/* Subtítulo */}
                    <p className="text-text-secondary/80 text-lg font-medium mb-6">
                        Preparando conteúdo para você...
                    </p>

                    {/* Barra de progresso aprimorada */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-text-secondary/60 font-medium">Progresso</span>
                            <span className="text-xs text-accent font-semibold">{Math.round(loadingProgress)}%</span>
                        </div>
                        <div className="relative w-full h-2 bg-bg-card/30 rounded-full overflow-hidden backdrop-blur-sm border border-border-color/20">
                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-red-darker/10"></div>
                            {/* Progress bar */}
                            <div 
                                className="h-full bg-gradient-to-r from-accent via-accent-hover to-red-bright rounded-full transition-all duration-300 ease-out relative overflow-hidden"
                                style={{ width: `${loadingProgress}%` }}
                            >
                                {/* Efeito de brilho animado */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Indicadores de etapas */}
                    <div className="flex justify-center space-x-4 mb-8">
                        {[
                            { label: 'Conectando', active: loadingProgress >= 15 },
                            { label: 'Carregando', active: loadingProgress >= 35 },
                            { label: 'Processando', active: loadingProgress >= 55 },
                            { label: 'Finalizando', active: loadingProgress >= 75 }
                        ].map((step, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2">
                                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                                    step.active 
                                        ? 'bg-accent shadow-lg shadow-accent/50 animate-pulse' 
                                        : 'bg-border-color/30'
                                }`}></div>
                                <span className={`text-xs transition-colors duration-500 ${
                                    step.active ? 'text-accent' : 'text-text-secondary/50'
                                }`}>
                                    {step.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Partículas flutuantes */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-accent/40 rounded-full animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Dica sutil */}
                    <p className="text-xs text-text-secondary/40 animate-pulse">
                        Organizando o melhor conteúdo para sua leitura
                    </p>
                </div>

                {/* Estilos CSS customizados */}
                <style jsx>{`
                    @keyframes gradientShift {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                    
                    @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    
                    @keyframes float {
                        0%, 100% { 
                            transform: translateY(0px) rotate(0deg);
                            opacity: 0.4;
                        }
                        50% { 
                            transform: translateY(-20px) rotate(180deg);
                            opacity: 0.8;
                        }
                    }
                    
                    .bg-gradient-radial {
                        background: radial-gradient(circle, var(--tw-gradient-stops));
                    }
                `}</style>
            </div>
        ); 
    }
    
    if (error || !noteData) { 
        return (
            <div className='min-h-screen flex items-center justify-center' 
                 style={{
                     background: `linear-gradient(160deg, ${bgColorPrimary} 0%, ${darkPurple_10} 30%, ${redDarkest_10} 70%, ${bgColorSecondary} 100%)`,
                 }}>
                <div className="text-center max-w-md mx-auto p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-darker/20 border border-red-darker/40 flex items-center justify-center">
                        <FiFileText className="w-8 h-8 text-red-bright/70" />
                    </div>
                    <h2 className='text-xl font-bold text-text-primary mb-3'>Erro ao carregar a anotação</h2>
                    <p className='text-text-secondary mb-4'>{error || 'Os dados da nota não puderam ser carregados.'}</p>
                    <p className='text-xs text-text-secondary/70 mb-6'>Verifique o console (F12) e o arquivo index.js</p>
                    <Link 
                        to="/anotacoes"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent/30 text-accent hover:bg-accent/30 transition-all duration-300"
                    >
                        <FaArrowLeft className="w-4 h-4" />
                        Voltar às Anotações
                    </Link>
                </div>
            </div>
        ); 
    }

    const readingTime = estimateReadingTime(noteContent);

    return (
        <>
            {/* Barra de progresso de leitura */}
            <div className="fixed top-0 left-0 w-full h-1 bg-border-color/30 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-accent to-accent-hover transition-all duration-150 ease-out"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            <section 
                className="min-h-screen relative overflow-hidden py-12 sm:py-16 pt-20 sm:pt-24 lg:pt-32"
                style={{
                    background: `linear-gradient(160deg, ${bgColorPrimary} 0%, ${darkPurple_10} 30%, ${redDarkest_10} 70%, ${bgColorSecondary} 100%)`,
                    backgroundSize: '250% 100%',
                    animation: 'gradientShift 20s ease infinite'
                }}
            >
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/6 left-1/6 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/6 right-1/6 w-64 h-64 sm:w-96 sm:h-96 bg-red-darker/8 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-accent/3 to-red-darker/3 rounded-full blur-3xl" />
                </div>
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px]" />

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        
                        {/* Botão Voltar */}
                        <div className="mb-8 sm:mb-12">
                            <Link 
                                to="/anotacoes" 
                                className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-card/60 backdrop-blur-sm border border-border-color/40 text-text-secondary hover:bg-bg-card/80 hover:border-accent/50 hover:text-accent transition-all duration-300"
                            >
                                <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                                <span className="font-medium">Voltar para Anotações</span>
                            </Link>
                        </div>

                        {/* Card Principal */}
                        <article className="bg-bg-card/40 backdrop-blur-xl border border-border-color/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                            
                            {/* Header da Nota */}
                            <header className="relative p-6 sm:p-8 lg:p-12 border-b border-border-color/20">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-red-darker/5" />
                                
                                <div className="relative z-10">
                                    {/* Título */}
                                    <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-text-primary mb-6 leading-tight bg-gradient-to-r from-text-primary via-white to-text-primary bg-clip-text text-transparent'>
                                        {noteData?.title || 'Sem Título'}
                                    </h1>
                                    
                                    {/* Metadados */}
                                    <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary mb-6">
                                        {noteData?.date && (
                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-card/50 border border-border-color/30">
                                                <FaCalendarAlt className="w-4 h-4 text-accent" />
                                                <span className="font-medium">{noteData.date}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-card/50 border border-border-color/30">
                                            <FaClock className="w-4 h-4 text-accent" />
                                            <span className="font-medium">{readingTime} min de leitura</span>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    {noteData?.tags && noteData.tags.length > 0 && (
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="flex items-center gap-2 text-text-secondary">
                                                <FaTag className="w-4 h-4" />
                                                <span className="text-sm font-medium">Tags:</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {noteData.tags.map(tag => (
                                                    <span 
                                                        key={tag} 
                                                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-darker/40 text-red-bright/90 border border-red-darker/50 hover:bg-red-darker/60 hover:text-red-bright hover:scale-105 transition-all duration-300 cursor-default"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Assinatura */}
                                    <div className="flex items-center justify-between">
                                        <p className="font-Corinthia text-red-600 font-black text-xl sm:text-2xl opacity-80 cursor-default">
                                            SergioJunior
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-text-secondary">
                                            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                                            <span>Anotação pessoal</span>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            {/* Conteúdo da Nota */}
                            <div className="p-6 sm:p-8 lg:p-12">
                                <div className="prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none 
                                              prose-headings:text-text-primary prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-8
                                              prose-h1:text-3xl prose-h1:border-b prose-h1:border-border-color/30 prose-h1:pb-4
                                              prose-h2:text-2xl prose-h2:text-accent prose-h2:mb-4
                                              prose-h3:text-xl prose-h3:text-accent/90 prose-h3:mb-3
                                              prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
                                              prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-hover hover:prose-a:underline prose-a:transition-all prose-a:duration-300
                                              prose-strong:text-text-primary prose-strong:font-semibold
                                              prose-em:text-text-primary prose-em:italic
                                              prose-code:text-accent prose-code:bg-bg-card/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:border prose-code:border-border-color/30
                                              prose-pre:bg-bg-card/80 prose-pre:border prose-pre:border-border-color/30 prose-pre:rounded-xl prose-pre:p-4 prose-pre:overflow-x-auto
                                              prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-bg-card/30 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:my-6
                                              prose-blockquote:text-text-primary prose-blockquote:italic
                                              prose-ul:text-text-secondary prose-ul:space-y-2
                                              prose-ol:text-text-secondary prose-ol:space-y-2
                                              prose-li:marker:text-accent prose-li:pl-2
                                              prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-border-color/30
                                              prose-table:border-collapse prose-table:border prose-table:border-border-color/30 prose-table:rounded-lg prose-table:overflow-hidden
                                              prose-th:bg-bg-card/50 prose-th:text-text-primary prose-th:font-semibold prose-th:p-3 prose-th:border-b prose-th:border-border-color/30
                                              prose-td:text-text-secondary prose-td:p-3 prose-td:border-b prose-td:border-border-color/20
                                              prose-hr:border-border-color/30 prose-hr:my-8">
                                    <ReactMarkdown
                                        children={noteContent}
                                        remarkPlugins={[remarkGfm, remarkSlug]}
                                        rehypePlugins={[rehypeRaw]}
                                    />
                                </div>
                            </div>

                            {/* Footer */}
                            <footer className="p-6 sm:p-8 border-t border-border-color/20 bg-bg-card/20">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            <span>Última atualização: {noteData?.date || 'Data não disponível'}</span>
                                        </div>
                                    </div>
                                    <Link 
                                        to="/anotacoes"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent/30 text-accent hover:bg-accent/30 hover:border-accent/50 transition-all duration-300 text-sm font-medium"
                                    >
                                        <FaArrowLeft className="w-3 h-3" />
                                        Ver mais anotações
                                    </Link>
                                </div>
                            </footer>
                        </article>
                    </div>
                </div>
            </section>

            {/* Botão "Voltar para Cima" Aprimorado */}
            <button
                type="button"
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    zIndex: 9999,
                    opacity: isScrollButtonVisible ? 1 : 0,
                    transform: isScrollButtonVisible 
                        ? 'scale(1) translateY(0)' 
                        : 'scale(0.75) translateY(1rem)',
                    pointerEvents: isScrollButtonVisible ? 'auto' : 'none'
                }}
                className="
                  group relative overflow-hidden
                  w-12 h-12 sm:w-14 sm:h-14 rounded-full
                  bg-gradient-to-r from-accent to-accent-hover
                  shadow-lg hover:shadow-xl hover:shadow-accent/25
                  transition-all duration-300 ease-out
                  focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary
                  hover:scale-110 active:scale-95
                  flex items-center justify-center
                "
                aria-label="Voltar para o topo"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaArrowUp className="relative z-10 h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
        </>
    );
}

export default PaginaNotaIndividual;
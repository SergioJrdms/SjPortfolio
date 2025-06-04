import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllNotesMeta } from '../anotacoes/index.js';
import { FiArrowLeft, FiCalendar, FiFolderPlus, FiFileText, FiChevronRight } from 'react-icons/fi';

// --- Função buildTreeFromFlatData (sem alterações) ---
function buildTreeFromFlatData(notesMeta) {
    const tree = [];
    if (!Array.isArray(notesMeta)) { console.error("getAllNotesMeta não retornou um array:", notesMeta); return tree; }
    notesMeta.forEach(note => {
        if (!note || typeof note.slug !== 'string' || typeof note.path !== 'string') { console.warn("Metadado inválido:", note); return; }
        const pathParts = note.slug.split('/');
        let currentLevel = tree;
        let currentPathForLink = '/anotacoes';
        pathParts.forEach((part, index) => {
            const isLastPart = index === pathParts.length - 1;
            currentPathForLink += '/' + part;
            let node = currentLevel.find(n => n.name === part && n.type === (isLastPart ? 'file' : 'folder'));
            if (!node) {
                if (isLastPart) {
                    node = { type: 'file', name: note.title, slug: note.slug, path: note.path, date: note.date, excerpt: note.excerpt, tags: note.tags, };
                    currentLevel.push(node);
                } else {
                    const existingFile = currentLevel.find(n => n.name === part && n.type === 'file');
                    if(existingFile) {
                         console.error(`Conflito de Nome: Tentando criar pasta "${part}" mas já existe um arquivo com esse nome no mesmo nível.`);
                         return;
                    }
                    node = { type: 'folder', name: part, path: currentPathForLink, children: [], };
                    currentLevel.push(node);
                     currentLevel.sort((a, b) => { if (a.type === b.type) return a.name.localeCompare(b.name); return a.type === 'folder' ? -1 : 1; });
                }
            } else if (node.type === 'file' && !isLastPart) {
                 console.error(`Conflito: Arquivo encontrado "${part}" onde uma pasta era esperada para o slug "${note.slug}"`);
                 return;
            }

            if (!isLastPart && node.type === 'folder') {
                if (!node.children) node.children = [];
                currentLevel = node.children;
            }
        });
    });
     tree.sort((a, b) => { if (a.type === b.type) return a.name.localeCompare(b.name); return a.type === 'folder' ? -1 : 1; });
    return tree;
}

// --- Componente RenderNode Melhorado para Mobile ---
const RenderNode = ({ node, level = 0 }) => {
  const indentStyle = { paddingLeft: `${level * 1}rem` }; // Reduzido de 1.5rem para 1rem no mobile

  if (node.type === 'folder') {
      return (
          <li className="mb-4 sm:mb-6" style={indentStyle}>
              <div className="group flex items-center mb-3 sm:mb-4 p-3 sm:p-3 rounded-xl bg-bg-card/40 border border-border-color/30 backdrop-blur-sm hover:bg-bg-card/60 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center flex-1">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/20 border border-accent/30 mr-3 sm:mr-4 group-hover:bg-accent/30 transition-all duration-300">
                          <FiFolderPlus className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:text-accent-hover" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-white transition-colors duration-300">
                          {node.name}
                      </h3>
                  </div>
                  <FiChevronRight className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors duration-300" />
              </div>
              {node.children && node.children.length > 0 && (
                  <ul className="space-y-2 border-l-2 border-border-color/30 ml-3 sm:ml-5 pl-2">
                      {node.children.map((child, index) => (
                          <RenderNode key={child.slug || `${node.name}-${index}`} node={child} level={level + 1} />
                      ))}
                  </ul>
              )}
          </li>
      );
  }

  if (node.type === 'file') {
      return (
           <li className="mb-3 sm:mb-4" style={indentStyle}>
              <Link
                  to={`/anotacoes/${node.slug}`}
                  className="group block p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-bg-card/40 border border-border-color/20 backdrop-blur-md hover:bg-bg-card/60 hover:border-accent/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 relative overflow-hidden"
              >
                  {/* Efeito de brilho sutil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 -translate-x-full" />
                  
                  <div className="relative z-10">
                      {/* Header do Card */}
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="flex items-center flex-1 min-w-0"> {/* Adicionado min-w-0 para evitar overflow */}
                              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/20 border border-accent/30 mr-3 sm:mr-4 group-hover:bg-accent/30 transition-all duration-300 flex-shrink-0">
                                  <FiFileText className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:text-accent-hover" />
                              </div>
                              <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-white transition-colors duration-300 leading-tight truncate sm:line-clamp-2">
                                  {node.name}
                              </h3>
                          </div>
                          <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-0.5 sm:mt-1 ml-2" />
                      </div>

                      {/* Metadados */}
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                          {node.date && (
                              <div className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                                  <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span className="font-medium">{node.date}</span>
                              </div>
                          )}
                          {node.tags && node.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                  {node.tags.slice(0, 2).map(tag => ( // Reduzido de 3 para 2 tags no mobile
                                      <span 
                                          key={tag} 
                                          className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-red-darker/40 text-red-bright/90 border border-red-darker/50 group-hover:bg-red-darker/60 group-hover:text-red-bright transition-all duration-300"
                                      >
                                          {tag}
                                      </span>
                                  ))}
                                  {/* Indicador de mais tags no mobile */}
                                  {node.tags.length > 2 && (
                                      <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-border-color/20 text-text-secondary border border-border-color/30 sm:hidden">
                                          +{node.tags.length - 2}
                                      </span>
                                  )}
                                  {/* Desktop mostra até 3 tags */}
                                  {node.tags.slice(2, 3).map(tag => (
                                      <span 
                                          key={tag} 
                                          className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-darker/40 text-red-bright/90 border border-red-darker/50 group-hover:bg-red-darker/60 group-hover:text-red-bright transition-all duration-300"
                                      >
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                          )}
                      </div>

                      {/* Excerpt */}
                      {node.excerpt && (
                          <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300 line-clamp-2 sm:line-clamp-2 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                              {node.excerpt}
                          </p>
                      )}

                      {/* Call to Action */}
                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border-color/20 group-hover:border-accent/30 transition-colors duration-300">
                          <span className="text-xs sm:text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                              Continuar leitura
                          </span>
                          <div className="flex items-center gap-1.5 sm:gap-2 text-accent group-hover:text-accent-hover transition-all duration-300 group-hover:translate-x-1">
                              <span className="text-xs sm:text-sm font-semibold">Ler mais</span>
                              <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                      </div>
                  </div>
              </Link>
          </li>
      );
  }

  return null;
};

// --- Componente Principal da Página ---
function PaginaListaNotas() {
    const notesMeta = getAllNotesMeta();
    console.log("Dados CRUS de getAllNotesMeta:", JSON.stringify(notesMeta));

    const fileTree = useMemo(() => buildTreeFromFlatData(notesMeta), [notesMeta]);
    console.log("Estrutura da Árvore Gerada:", JSON.stringify(fileTree, null, 2));

    const bgColorPrimary = '#121212';
    const bgColorSecondary = '#1a1a1a';
    const darkPurple_10 = 'rgba(82, 0, 190, 0.1)';
    const redDarkest_10 = 'rgba(107, 13, 32, 0.1)';

    return (
        <section 
            className="min-h-screen relative overflow-hidden py-12 sm:py-24 pt-20 sm:pt-32 lg:pt-40"
            style={{
                background: `linear-gradient(160deg, ${bgColorPrimary} 0%, ${darkPurple_10} 30%, ${redDarkest_10} 70%, ${bgColorSecondary} 100%)`,
                backgroundSize: '250% 100%',
                animation: 'gradientShift 15s ease infinite'
            }}
        >
            {/* Background Effects - Ajustados para mobile */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-darker/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-accent/5 to-red-darker/5 rounded-full blur-3xl" />
            </div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6">
                {/* Header Section - Melhorado para mobile */}
                <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-bg-card/50 border border-border-color/30 backdrop-blur-sm mb-6 sm:mb-8">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-medium text-text-secondary">Conhecimento em Crescimento</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
                        <span className="bg-gradient-to-r from-text-primary via-white to-text-primary bg-clip-text text-transparent">
                            Minhas
                        </span>
                        <span className="block bg-gradient-to-r from-accent via-accent-hover to-accent bg-clip-text text-transparent">
                            Anotações
                        </span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
                        Uma coleção curada de insights, estudos e reflexões sobre tecnologia, produtos e análise de dados. 
                        Explore o conhecimento organizado de forma hierárquica.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                        <div className="flex items-center gap-2 text-text-secondary">
                            <div className="w-1 h-1 bg-accent rounded-full" />
                            <span className="text-sm">Atualizado continuamente</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary">
                            <div className="w-1 h-1 bg-accent rounded-full" />
                            <span className="text-sm">Organizados por tema</span>
                        </div>
                    </div>

                    <p className="font-Corinthia text-red-600 text-xl sm:text-2xl font-black mb-6 sm:mb-8 opacity-80">
                        SergioJunior
                    </p>
                    
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-bg-card/80 border border-border-color/40 text-text-secondary hover:bg-bg-card hover:border-accent/60 hover:text-accent transition-all duration-300 backdrop-blur-sm group"
                    >
                        <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="font-medium text-sm sm:text-base">Voltar ao Portfólio</span>
                    </Link>
                </div>

                {/* Notes Tree - Melhorado para mobile */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-bg-card/30 backdrop-blur-xl border border-border-color/20 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-2xl">
                        {Array.isArray(fileTree) && fileTree.length > 0 ? (
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-center gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-border-color/20">
                                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/20 border border-accent/30">
                                        <FiFileText className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Estrutura de Conhecimento</h2>
                                        <p className="text-text-secondary mt-1 text-sm sm:text-base">Navegue pelos tópicos organizados</p>
                                    </div>
                                </div>
                                
                                <ul className="space-y-3 sm:space-y-4">
                                    {fileTree.map((node, index) => (
                                        <RenderNode key={node.slug || `${node.name}-${index}`} node={node} level={0} />
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="text-center py-12 sm:py-16">
                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-bg-card/50 border border-border-color/30 mx-auto mb-4 sm:mb-6">
                                    <FiFileText className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">Nenhuma anotação encontrada</h3>
                                <p className="text-text-secondary max-w-md mx-auto text-sm sm:text-base px-4 sm:px-0">
                                    Verifique os slugs em `src/anotacoes/index.js` e os logs do console para mais detalhes.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaginaListaNotas;
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllNotesMeta } from '../anotacoes/index.js';
import { FaArrowLeft, FaCalendarAlt, FaFolder, FaFileAlt } from 'react-icons/fa';

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
            // Procura por nó com mesmo nome E mesmo tipo (para diferenciar arquivo e pasta com mesmo nome)
            let node = currentLevel.find(n => n.name === part && n.type === (isLastPart ? 'file' : 'folder'));
            if (!node) {
                if (isLastPart) {
                    node = { type: 'file', name: note.title, slug: note.slug, path: note.path, date: note.date, excerpt: note.excerpt, tags: note.tags, };
                    currentLevel.push(node);
                } else {
                    // Verifica se já existe um ARQUIVO com nome da PASTA que queremos criar
                    const existingFile = currentLevel.find(n => n.name === part && n.type === 'file');
                    if(existingFile) {
                         console.error(`Conflito de Nome: Tentando criar pasta "${part}" mas já existe um arquivo com esse nome no mesmo nível.`);
                         // Poderia optar por não criar a pasta ou renomear
                         return; // Pula a criação desta pasta e seus filhos nesta nota
                    }
                    node = { type: 'folder', name: part, path: currentPathForLink, children: [], };
                    currentLevel.push(node);
                     currentLevel.sort((a, b) => { if (a.type === b.type) return a.name.localeCompare(b.name); return a.type === 'folder' ? -1 : 1; });
                }
            // Verifica se nó encontrado é pasta quando deveria ser, ou se é arquivo no final
            } else if (node.type === 'file' && !isLastPart) {
                 console.error(`Conflito: Arquivo encontrado "${part}" onde uma pasta era esperada para o slug "${note.slug}"`);
                 return; // Aborta processamento desta nota
            }

            if (!isLastPart && node.type === 'folder') {
                if (!node.children) node.children = []; // Garante array de filhos
                currentLevel = node.children;
            }
        });
    });
     tree.sort((a, b) => { if (a.type === b.type) return a.name.localeCompare(b.name); return a.type === 'folder' ? -1 : 1; });
    return tree;
}


// --- Componente RenderNode (sem alterações) ---
const RenderNode = ({ node, level = 0 }) => {
  // Define o recuo com base no nível da árvore
  const indentationClass = `ml-${level * 4}`; // ml-0, ml-4, ml-8...

  if (node.type === 'folder') {
      // Renderização da pasta (sem alterações)
      return (
          <li className={`my-3 ${indentationClass}`}>
              <div className="flex items-center font-semibold text-text-primary mb-2 text-lg">
                  <FaFolder className="mr-2 text-accent opacity-80 flex-shrink-0" />
                  {node.name}
              </div>
              {node.children && node.children.length > 0 && (
                  <ul className="list-none pl-4 border-l border-border-color/50 ml-2">
                      {node.children.map((child, index) => (
                          <RenderNode key={child.slug || `${node.name}-${index}`} node={child} level={level + 1} />
                      ))}
                  </ul>
              )}
          </li>
      );
  }

  if (node.type === 'file') {
      // Renderiza o card da nota com estilos responsivos
      return (
           <li className={`my-2 ${indentationClass}`}>
              <Link
                  key={node.slug}
                  to={`/anotacoes/${node.slug}`}
                  // ===== MODIFICAÇÃO: Padding responsivo e hover ajustado =====
                  className="group block rounded-lg border border-border-color bg-bg-card p-5 sm:p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 hover:bg-white/5 border-t-4 border-t-accent/50"
                  // ===== FIM DA MODIFICAÇÃO =====
              >
                  {/* Título com tamanho responsivo */}
                  <h3 className="mb-2 text-lg md:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-accent-hover">{node.name}</h3>

                  {/* Metadados (mantido text-xs) */}
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-secondary">
                      {node.date && (<span className="flex items-center gap-1.5 whitespace-nowrap"><FaCalendarAlt />{node.date}</span>)} {/* Adicionado whitespace-nowrap */}
                      {node.tags && node.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 items-center">
                              {node.date && <span className='mx-1 hidden sm:inline'>|</span>} {/* Esconde separador em telas muito pequenas se tiver data e tag */}
                              {node.tags.slice(0, 2).map(tag => ( // Mostra só 2 tags em mobile? Ou mantenha 3? Ajuste slice()
                                  <span key={tag} className="inline-block rounded-full bg-red-darker/40 px-2 py-0.5 text-xs text-red-bright/90">
                                      {tag}
                                  </span>
                              ))}
                          </div>
                      )}
                  </div>

                  {/* Excerpt (mantido text-sm, line-clamp pode ser ajustado responsivamente se necessário) */}
                  {node.excerpt && <p className="text-sm text-text-secondary line-clamp-2 mb-4 flex-grow">{/* Reduzi clamp para 2? Ajuste como preferir */} {node.excerpt}</p>}

                   {/* Ler Mais (mantido text-sm) */}
                  <span className="mt-auto inline-block text-sm font-medium text-accent transition-all duration-200 ease-in-out group-hover:font-semibold group-hover:text-accent-hover group-hover:translate-x-1 self-start">
                      Ler mais &rarr;
                  </span>
              </Link>
          </li>
      );
  }

  return null; // Caso base
};


// --- Componente Principal da Página ---
function PaginaListaNotas() {
    const notesMeta = getAllNotesMeta();
    // Adicionado Log para verificar a entrada
    console.log("Dados CRUS de getAllNotesMeta:", JSON.stringify(notesMeta));

    const fileTree = useMemo(() => buildTreeFromFlatData(notesMeta), [notesMeta]);
    // Adicionado Log para verificar a saída da árvore
    console.log("Estrutura da Árvore Gerada:", JSON.stringify(fileTree, null, 2));

    const bgColorPrimary = '#121212';
    const bgColorSecondary = '#1a1a1a';
    const darkPurple_10 = 'rgba(82, 0, 190, 0.1)';
    const redDarkest_10 = 'rgba(107, 13, 32, 0.1)';

    return (
        <section
            id="lista-notas"
            className={`
                py-24 pt-32 lg:pt-40 min-h-screen relative isolate
                bg-[linear-gradient(160deg,${bgColorPrimary}_0%,${darkPurple_10}_30%,${redDarkest_10}_70%,${bgColorSecondary}_100%)]
                bg-[length:250%_100%] animate-gradientShift overflow-hidden
            `}
        >
            <div className="container mx-auto px-6 relative z-10">

                {/* Área de Introdução (Renderizada Primeiro) */}
                <div className="intro-text-area text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h1 className="section-title text-4xl md:text-5xl font-bold text-white mb-5">
                        Minhas Anotações
                    </h1>
                    <p className="text-text-secondary text-lg mb-10 mx-auto">
                        Compilado de estudos, insights e pensamentos sobre tecnologia, produtos e dados. Navegue pela estrutura abaixo.
                    </p>
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-full border border-border-color px-5 py-2 text-sm text-text-secondary transition-all duration-300 ease-in-out hover:border-accent hover:text-accent hover:bg-white/5"
                        >
                            <FaArrowLeft />
                            Voltar ao Portfólio
                        </Link>
                    </div>
                </div>

                {/* Renderiza a estrutura hierárquica */}
                <div className="notes-tree max-w-4xl mx-auto bg-bg-card/30 backdrop-blur-sm border border-border-color/30 rounded-lg p-6 md:p-8 shadow-md">
                    {/* Removi as animações daqui para simplificar o teste */}
                    {Array.isArray(fileTree) && fileTree.length > 0 ? (
                        <ul className="list-none">
                            {fileTree.map((node, index) => (
                                <RenderNode key={node.slug || `${node.name}-${index}`} node={node} level={0} />
                            ))}
                        </ul>
                    ) : (
                        <p className='text-text-secondary text-center'>Nenhuma anotação encontrada para exibir na árvore. Verifique os slugs em `src/anotacoes/index.js` e os logs do console.</p>
                    )}
                </div>

            </div>
        </section>
    );
}

export default PaginaListaNotas;
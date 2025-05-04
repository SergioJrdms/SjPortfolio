import React from 'react';
import { Link } from 'react-router-dom';
import { getAllNotesMeta } from '../anotacoes/index.js';
import { FaArrowLeft } from 'react-icons/fa';

function PaginaListaNotas() {
  const notesMeta = getAllNotesMeta();

  // Define as cores para o gradiente (pode pegar do config se preferir)
  const bgColorPrimary = '#121212';
  const bgColorSecondary = '#1a1a1a';
  const darkPurple_10 = 'rgba(82, 0, 190, 0.1)'; // 10% do roxo do hero
  const redDarkest_10 = 'rgba(107, 13, 32, 0.1)'; // 10% do vermelho mais escuro

  return (
    // ===== MODIFICAÇÃO: Fundo com Gradiente Animado =====
    <section
      id="lista-notas"
      className={`
        py-24 pt-32 lg:pt-36 min-h-screen
        bg-[linear-gradient(160deg,${bgColorPrimary}_0%,${darkPurple_10}_30%,${redDarkest_10}_70%,${bgColorSecondary}_100%)]
        bg-[length:250%_100%] animate-gradientShift
      `} // Gradiente diagonal sutil, tamanho 250% e animação aplicada
    >
    {/* ===== FIM DA MODIFICAÇÃO ===== */}
      <div className="container mx-auto px-6">
        <h1 className="section-title text-center text-3xl font-semibold text-text-primary sm:text-4xl mb-4">
          Minhas Anotações
        </h1>
         <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto">
            Compilado de estudos, insights e pensamentos sobre tecnologia, produtos e dados.
        </p>

        {/* Botão Voltar */}
        <div className="text-center mb-12">
             <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border-color px-5 py-2 text-sm text-text-secondary transition-colors duration-300 ease-in-out hover:border-accent hover:text-accent"
            >
                <FaArrowLeft />
                Voltar ao Portfólio
            </Link>
        </div>

        {/* Grid das Notas (sem alterações) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {notesMeta.length > 0 ? (
            notesMeta.map((note) => (
              <Link
                key={note.slug}
                to={`/anotacoes/${note.slug}`}
                className="group block rounded-lg border border-border-color bg-bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]"
              >
                <h2 className="mb-2 text-xl font-semibold text-accent transition-colors duration-300 group-hover:text-accent-hover">{note.title}</h2>
                {note.date && <p className="text-xs text-text-secondary mb-3">{note.date}</p>}
                {note.excerpt && <p className="text-sm text-text-secondary line-clamp-3 mb-4">{note.excerpt}</p>}
                <span className="mt-auto inline-block text-sm font-medium text-accent transition-all duration-200 ease-in-out group-hover:text-accent-hover group-hover:translate-x-1">
                  Ler mais &rarr;
                </span>
              </Link>
            ))
          ) : (
            <p className='text-text-secondary text-center col-span-full'>Nenhuma anotação encontrada. Verifique o arquivo `src/anotacoes/index.js`.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PaginaListaNotas;
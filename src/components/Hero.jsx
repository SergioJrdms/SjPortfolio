import React from 'react';
import ScrollDownIndicator from './ScrollDownIndicator';

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black items-center overflow-hidden pt-32 pb-16">
      {/* Background Gradiente Roxo */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/25 to-transparent">
      </div>
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="hero-content mx-auto max-w-3xl text-center md:text-left">
          {/* Subtítulo e Título mantidos */}
          <span className="hero-subtitle inline-block animate-on-scroll fade-in delay-1 mb-4 rounded-full bg-accent-light px-5 py-1.5 text-sm font-medium text-accent ">
            Certified Product Owner (PSPO) & Coordenador de BI
          </span>
          <h1 className="animate-on-scroll animate-fadeInUp delay-2 mb-6 text-4xl font-extrabold leading-tight tracking-tight  md:text-7xl bg-gradient-to-br from-slate-50  to-red-300  bg-clip-text text-transparent sm:text-5xl lg:text-6xl"> {/* font-extrabold, tracking-tight */}
            Transformando Dados em Decisões e Visão em Produtos
          </h1>
          <p className="animate-on-scroll fade-in delay-3 mb-10 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed text-text-secondary"> {/* text-lg, leading-relaxed */}
          Transformo dados complexos em insights acionáveis e necessidades de negócio em produtos digitais valiosos. Meu objetivo é unir a visão estratégica e operacional de Product Management / Ownership com a inteligência do BI para impulsionar resultados concretos.
          </p>
          {/* ===== FIM DA ATUALIZAÇÃO ===== */}

          <div className="btn-container animate-on-scroll fade-in delay-4 mb-20 flex flex-col items-center gap-4 md:flex-row md:justify-start">
            <a href="#clients" className="btn block w-full rounded-full bg-red-bright border border-red-bright py-3 px-8 text-center font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-accent hover:border-accent hover:shadow-md hover:-translate-y-1.5 hover:shadow-glow-hover md:w-auto">
              Ver Clientes
            </a>
            <a href="#contact" className="btn btn-outline block w-full rounded-full border border-accent bg-transparent py-3 px-8 text-center font-medium text-accent shadow-sm transition duration-300 ease-in-out hover:bg-accent-light hover:shadow-md hover:-translate-y-1.5 md:w-auto md:ml-4">
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>

      <ScrollDownIndicator />
    </section>
  );
}


export default Hero;

import React from 'react';
import ScrollDownIndicator from './ScrollDownIndicator';

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16">
      {/* Background Gradiente Roxo */}
      <div
        className="hero-before absolute top-0 left-0 h-full w-full -z-10 bg-[radial-gradient(circle_at_top_left,_#6500be3c,_rgba(18,18,18,0)_90%)] pointer-events-none"
        aria-hidden="true"
      ></div>
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="hero-content mx-auto max-w-3xl text-center md:text-left">
          {/* Subtítulo e Título mantidos */}
          <span className="hero-subtitle inline-block animate-on-scroll fade-in delay-1 mb-4 rounded-full bg-accent-light px-5 py-1.5 text-sm font-medium text-accent animate-pulse">
            Product Owner & Coordenador de BI
          </span>
          <h1 className="animate-on-scroll animate-fadeInUp delay-2 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl"> {/* font-extrabold, tracking-tight */}
            Transformando Dados em Decisões e Visão em Produtos
          </h1>
          <p className="animate-on-scroll fade-in delay-3 mb-10 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed text-text-secondary"> {/* text-lg, leading-relaxed */}
            Graduando em Ciência de Dados e Técnico em Informática, combino conhecimentos de Business Intelligence, desenvolvimento e liderança para criar soluções data-driven. Aberto a oportunidades para aplicar e expandir meu potencial em projetos inovadores.
          </p>
          {/* ===== FIM DA ATUALIZAÇÃO ===== */}

          <div className="btn-container animate-on-scroll fade-in delay-4 mb-20 flex flex-col items-center gap-4 md:flex-row md:justify-start">
            <a href="#projects" className="btn block w-full rounded-full bg-red-bright border border-red-bright py-3 px-8 text-center font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-accent hover:border-accent hover:shadow-md hover:-translate-y-1.5 hover:shadow-glow-hover md:w-auto">
              Ver Projetos
            </a>
            <a href="#contact" className="btn btn-outline block w-full rounded-full border border-accent bg-transparent py-3 px-8 text-center font-medium text-accent shadow-sm transition duration-300 ease-in-out hover:bg-accent-light hover:shadow-md hover:-translate-y-1.5 md:w-auto md:ml-4">
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>

      {/* Formas Flutuantes e Scroll Indicator (sem alterações) */}
      <div className="hero-shape absolute bottom-[-10%] right-[5%] -z-10 h-[250px] w-[250px] rounded-[65%_35%_65%_35%_/_35%_65%_35%_65%] bg-hero-shape opacity-[.05] animate-float pointer-events-none"></div>
      <div className="hero-shape absolute bottom-[-12%] right-[6%] -z-10 h-[250px] w-[250px] rounded-[65%_35%_65%_35%_/_35%_65%_35%_65%] bg-hero-shape opacity-[.03] animate-float pointer-events-none"></div>
      <div className="hero-shape absolute top-[15%] left-[-5%] -z-10 h-[180px] w-[180px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-hero-shape opacity-[.05] animate-floatReverse pointer-events-none"></div>
      <div className="hero-shape absolute top-[17%] left-[-5%] -z-10 h-[180px] w-[180px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-hero-shape opacity-[.05] animate-floatReverse pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 h-3/4 w-3/4 -z-20 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--color-red-darkest)_0%,_transparent_70%)] opacity-10 animate-pulseSlow pointer-events-none" aria-hidden="true"></div>
      <ScrollDownIndicator />
    </section>
  );
}


export default Hero;
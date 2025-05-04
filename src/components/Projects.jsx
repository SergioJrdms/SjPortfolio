import React from 'react';
// Importe um ícone relevante (ex: ferramentas, lâmpada, construção)
import { FaTools, FaLightbulb } from 'react-icons/fa'; // Escolha um ou outro

// Remova o import do ProjectCard se não houver mais projetos sendo mapeados aqui
// import ProjectCard from './ProjectCard';

function Projects() {
  // Você pode remover ou comentar a variável projectData se não a estiver usando
  // const projectData = [ ... ];

  return (
    // Mantém a estrutura da seção
    <section id="projects" className="bg-bg-secondary py-24"> {/* Ou bg-bg-primary se preferir */}
      <div className="container mx-auto px-6">
        {/* Mantém o título e divisor */}
        <h2 className="section-title text-center text-3xl font-semibold text-text-primary sm:text-4xl animate-on-scroll fade-in">
          Projetos em Destaque
        </h2>
        <hr className="section-divider mx-auto mb-16 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />

        {/* ===== INÍCIO DO PLACEHOLDER ===== */}
        <div className="placeholder-content text-center bg-bg-card border border-border-color rounded-lg p-10 md:p-16 max-w-2xl mx-auto animate-on-scroll fade-in delay-2 shadow-md transition-shadow duration-300 hover:shadow-lg">
          {/* Ícone */}
          <FaTools className="text-4xl md:text-5xl text-accent opacity-70 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
          {/* Ou <FaLightbulb className="..."/> */}

          {/* Título do Placeholder */}
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
            Projetos em Breve!
          </h3>

          {/* Mensagem */}
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Estou trabalhando ativamente na curadoria e documentação dos meus projetos mais relevantes
            envolvendo Business Intelligence, Data Science e Product Ownership.
          </p>
          <p className="text-text-secondary text-base md:text-lg mt-3 leading-relaxed">
            Volte em breve para explorar casos práticos e resultados!
          </p>
        </div>
        {/* ===== FIM DO PLACEHOLDER ===== */}

        {/* O grid original de projetos foi removido/comentado */}
        {/*
        <div className="projects-grid grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
             <ProjectCard
                key={index}
                // ...props
             />
          ))}
        </div>
        */}
      </div>
    </section>
  );
}

export default Projects;
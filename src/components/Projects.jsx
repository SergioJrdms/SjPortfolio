import React from 'react';

const CompanyCard = ({ name }) => (
  <div className="group mx-3 flex-shrink-0 cursor-default rounded-lg border border-border-color bg-bg-card px-8 py-4 text-center shadow-sm transition-all duration-300 ease-in-out hover:border-accent hover:shadow-md hover:shadow-accent/20">
    {/* Texto continua semibold, cor secundária, muda para accent no hover do group */}
    <span className="font-semibold text-text-secondary transition-colors duration-300 group-hover:text-accent">{name}</span>
  </div>
);

function Projects() {
  const companies = [
    'Pilão', 'Quadrado Express', 'Sofista', 'Neon', '3DLab', '3DCure',
    'Angelus', 'Ocalev', 'ControlID', 'Upik', 'Bettina Rudolph'
  ];
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section id="clients" className="bg-bg-secondary py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl animate-on-scroll fade-in">
          Clientes
        </h2>
        <hr className="section-divider mx-auto mb-16 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />

        <div className="flex flex-col space-y-8 animate-on-scroll fade-in delay-2">

          {/* Fileira 1: Direita para Esquerda */}
          <div className="relative w-full overflow-hidden">
             <div className="absolute inset-y-0 left-0 z-10 w-10 md:w-16 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none"></div>
             <div className="absolute inset-y-0 right-0 z-10 w-10 md:w-16 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none"></div>
            {/* ===== MODIFICAÇÃO: Usa classe CSS customizada ===== */}
            <div className="inner-row flex w-max animate-infinite-scroll-left whitespace-nowrap hover:[animation-play-state:paused]">
            {/* ===== FIM DA MODIFICAÇÃO ===== */}
              {duplicatedCompanies.map((name, index) => (
                <CompanyCard key={`row1-${name}-${index}`} name={name} />
              ))}
            </div>
          </div>

          {/* Fileira 2: Esquerda para Direita */}
           <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 z-10 w-10 md:w-16 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 z-10 w-10 md:w-16 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none"></div>
                {/* ===== MODIFICAÇÃO: Usa classe CSS customizada ===== */}
                <div className="inner-row flex w-max animate-infinite-scroll-right whitespace-nowrap hover:[animation-play-state:paused]">
                {/* ===== FIM DA MODIFICAÇÃO ===== */}
                {duplicatedCompanies.map((name, index) => (
                    <CompanyCard key={`row2-${name}-${index}`} name={name} />
                ))}
                </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
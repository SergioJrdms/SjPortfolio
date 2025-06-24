import React from 'react';

// Componente Card seguindo o design system do seu site
const CompanyCard = ({ name, logoSrc }) => (
    <div className="group mx-3 flex flex-shrink-0 cursor-default items-center rounded-lg border border-border-color bg-bg-card px-6 py-4 shadow-sm transition-all duration-300 ease-in-out hover:border-accent hover:shadow-md hover:shadow-accent/20 ">
        {/* Logo com container */}
        {logoSrc && (
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
                <img
                    src={logoSrc}
                    alt={`Logo ${name}`}
                    className="h-6 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                />
            </div>
        )}
        
        {/* Nome da empresa */}
        <span className="font-bold text-lg text-text-secondary transition-colors duration-300 group-hover:text-accent">
            {name}
        </span>
    </div>
);

function Projects() {
    const companies = [
        { name: 'Pilão', logoSrc: '/logos/pilao.png' },
        { name: 'Quadrado Express', logoSrc: '/logos/quadrado-express.png' },
        { name: 'Sofista', logoSrc: '/logos/sofista.png' },
        { name: 'Neon', logoSrc: '/logos/neon.png' },
        { name: '3DLab', logoSrc: '/logos/3dlab.png' },
        { name: '3DCure', logoSrc: '/logos/3dcure.png' },
        { name: 'Angelus', logoSrc: '/logos/angelus.png' },
        { name: 'Ocalev', logoSrc: '/logos/ocalev.png' },
        { name: 'ControlID', logoSrc: '/logos/controlid.png' },
        { name: 'Upik', logoSrc: '/logos/upik.png' },
        { name: 'Bettina Rudolph', logoSrc: '/logos/bettina-rudolph.png' },
        { name: 'Método Start', logoSrc: '/logos/metodo-start.png' },
        { name: 'O Mundo dos Queijos', logoSrc: '/logos/OMundoDosQueijos.jpg' },
    ];

    const duplicatedCompanies = [...companies, ...companies];

    return (
        <section id="clients" className="bg-bg-secondary py-24 overflow-hidden relative">
            {/* Background gradiente sutil para acompanhar o tema */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 via-transparent to-transparent"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Header seguindo o padrão das outras seções */}
                <div className="text-center mb-16">
                            <h2 className="section-title text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl font-heading animate-on-scroll fade-in">
          Empresas Atendidas
        </h2>
        <hr className="section-divider mx-auto mb-12 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />
                    {/* Subtítulo descritivo */}
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed animate-on-scroll fade-in delay-2">
                        Mais de <span className="text-accent font-semibold">{companies.length}+ empresas</span> já transformaram 
                        seus dados em decisões estratégicas e visão em produtos digitais
                    </p>
                </div>

                {/* Carrossel com animação */}
                <div className="flex flex-col space-y-8 animate-on-scroll fade-in delay-3">
                    {/* Primeira fileira - Direita para Esquerda */}
                    <div className="relative w-full overflow-hidden">
                        {/* Gradientes de fade seguindo o bg-secondary */}
                        <div className="absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none"></div>
                        
                        <div className="inner-row flex w-max animate-infinite-scroll-left whitespace-nowrap hover:[animation-play-state:paused]">
                            {duplicatedCompanies.map((company, index) => (
                                <CompanyCard 
                                    key={`row1-${company.name}-${index}`} 
                                    name={company.name} 
                                    logoSrc={company.logoSrc} 
                                />
                            ))}
                        </div>
                    </div>

                    {/* Segunda fileira - Esquerda para Direita */}
                    <div className="relative w-full overflow-hidden">
                        <div className="absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none"></div>
                        
                        <div className="inner-row flex w-max animate-infinite-scroll-right whitespace-nowrap hover:[animation-play-state:paused]">
                            {duplicatedCompanies.map((company, index) => (
                                <CompanyCard 
                                    key={`row2-${company.name}-${index}`} 
                                    name={company.name} 
                                    logoSrc={company.logoSrc} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to action seguindo o padrão dos botões do Hero */}
                <div className="text-center mt-16 animate-on-scroll fade-in delay-4">
                    <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
                        <a 
                            href="#contact" 
                            className="btn btn-outline rounded-full border border-accent bg-transparent py-3 px-8 text-center font-medium text-accent shadow-sm transition duration-300 ease-in-out hover:bg-accent-light hover:shadow-md hover:-translate-y-1.5"
                        >
                            Fazer Parte Desta Lista
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
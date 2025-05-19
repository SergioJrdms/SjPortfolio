import React from 'react';

// ===== ATUALIZADO: Componente Card para incluir Logo =====
const CompanyCard = ({ name, logoSrc }) => (
    // Usa flex para alinhar logo e nome, padding ajustado
    <div className="group mx-3  flex flex-shrink-0 cursor-default items-center rounded-lg border border-border-color bg-bg-card px-5 py-3 shadow-sm transition-all duration-300 ease-in-out hover:border-accent hover:shadow-md hover:shadow-accent/20">
        {/* Renderiza a imagem SE logoSrc for fornecido */}
        {logoSrc && (
            <img
                src={logoSrc} // Caminho vem da prop (relativo à pasta public)
                alt={`Logo ${name}`} // Texto alternativo importante!
                // Tamanho padrão para os logos, object-contain preserva proporção
                className="mr-4 h-7 w-auto object-contain rounded-md"
                // Você pode definir w-6 ou h-6, e w-auto/h-auto para manter proporção,
                // ou tamanho fixo como h-6 w-6 e object-contain.
                // Ajuste h-6/w-6 conforme o tamanho desejado.
            />
        )}
        {/* Nome da Empresa */}
        <span className="font-extrabold text-lg text-text-secondary transition-colors duration-300 group-hover:text-accent">{name}</span>
    </div>
);
// ===== FIM DA ATUALIZAÇÃO =====


function Projects() {
  // ===== ATUALIZADO: Lista de empresas agora é array de objetos =====
  const companies = [
    // IMPORTANTE: Substitua '/logos/placeholder.png' pelo CAMINHO CORRETO
    // para CADA logo dentro da sua pasta public/logos/
    { name: 'Pilão', logoSrc: '/logos/pilao.png' }, // Exemplo - CRIE/COLOQUE pilao.png em public/logos
    { name: 'Quadrado Express', logoSrc: '/logos/quadrado-express.png' }, // Exemplo
    { name: 'Sofista', logoSrc: '/logos/sofista.png' }, // Exemplo
    { name: 'Neon', logoSrc: '/logos/neon.png' }, // Exemplo
    { name: '3DLab', logoSrc: '/logos/3dlab.png' }, // Exemplo
    { name: '3DCure', logoSrc: '/logos/3dcure.png' }, // Exemplo
    { name: 'Angelus', logoSrc: '/logos/angelus.png' }, // Exemplo
    { name: 'Ocalev', logoSrc: '/logos/ocalev.png' }, // Exemplo
    { name: 'ControlID', logoSrc: '/logos/controlid.png' }, // Exemplo
    { name: 'Upik', logoSrc: '/logos/upik.png' }, // Exemplo
    { name: 'Bettina Rudolph', logoSrc: '/logos/bettina-rudolph.png' }, // Exemplo
    { name: 'Método Start', logoSrc: '/logos/metodo-start.png' },
    // Se não tiver um logo, pode omitir logoSrc: { name: 'Empresa Sem Logo' }
  ];
  // ===== FIM DA ATUALIZAÇÃO =====

  // Duplica a lista para o efeito de loop infinito (funciona igual com objetos)
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section id="clients" className="bg-bg-secondary py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl animate-on-scroll fade-in">
          Empresas Atendidas
        </h2>
        <hr className="section-divider mx-auto mb-16 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />

        <div className="flex flex-col space-y-8 animate-on-scroll fade-in delay-2">

          {/* Fileira 1: Direita para Esquerda */}
          <div className="relative w-full overflow-hidden">
             <div className="absolute inset-y-0 left-0 z-10 w-10 md:w-16 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none"></div>
             <div className="absolute inset-y-0 right-0 z-10 w-10 md:w-16 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none"></div>
            <div className="inner-row flex w-max animate-infinite-scroll-left whitespace-nowrap hover:[animation-play-state:paused]">
              {/* Mapeia o array de objetos */}
              {duplicatedCompanies.map((company, index) => (
                <CompanyCard key={`row1-${company.name}-${index}`} name={company.name} logoSrc={company.logoSrc} />
              ))}
            </div>
          </div>

          {/* Fileira 2: Esquerda para Direita */}
           <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 z-10 w-10 md:w-16 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 z-10 w-10 md:w-16 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none"></div>
                <div className="inner-row flex w-max animate-infinite-scroll-right whitespace-nowrap hover:[animation-play-state:paused]">
                 {/* Mapeia o array de objetos */}
                {duplicatedCompanies.map((company, index) => (
                    <CompanyCard key={`row2-${company.name}-${index}`} name={company.name} logoSrc={company.logoSrc} />
                ))}
                </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
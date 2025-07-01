import React, { useState } from 'react';
// Ícones
import { FaRocket, FaShieldAlt, FaBroadcastTower, FaChevronDown } from 'react-icons/fa';

// Dados dos pilares
const pillarsData = [
    { id: 'agile', icon: <FaRocket />, name: 'Agilidade na Entrega', description: 'Este é o meu motor de entrega. É o "como" eu garanto que o valor seja entregue de forma iterativa e incremental focando na priorização do que gera mais valor para o negócio.' },
    { id: 'culture', icon: <FaShieldAlt />, name: 'Cultura & Governança', description: 'Meu foco é na "produtização" da análise. Garanto a governança e a qualidade dos dados para fomentar uma cultura data-driven com foco total na usabilidade.' },
    { id: 'communication', icon: <FaBroadcastTower />, name: 'Comunicação Estratégica', description: 'Atuo como um tradutor entre as necessidades do negócio e a equipe técnica, garantindo que os stakeholders estejam alinhados para construir a solução certa.' }
];

// Componente Principal com a paleta de cores do seu site
function MyPillarsOfValue() {
  const [activePillarId, setActivePillarId] = useState(null); // Para mobile
  const [hoveredPillarId, setHoveredPillarId] = useState(null); // Para o hover do desktop

  const handleAccordionClick = (pillarId) => {
    setActivePillarId(prevId => prevId === pillarId ? null : pillarId);
  };
  
  const handleDesktopHover = (pillarId) => {
    setHoveredPillarId(pillarId);
  }

  return (
    // Seção principal usando as cores de fundo do seu tema
    <section id="my-philosophy" className="py-24 bg-bg-secondary bg-gradient-to-bl from-bg-secondary via-gray-900/10 to-black">
      <div className="container mx-auto px-6 ">
        {/* Título e divisor usando suas classes de tema */}
        <h2 className="section-title text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl font-heading">
          Minha Filosofia de Valor
        </h2>
        <hr className="section-divider mx-auto mb-16 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />
        {/* --- LAYOUT DESKTOP (Visível em 'lg' ou maiores) --- */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Diagrama de Venn Melhorado (Desktop) */}
          <div 
            className="relative w-full max-w-2xl mx-auto h-[32rem]"
            onMouseLeave={() => setHoveredPillarId(null)}
          >
            {/* Círculo Superior - Agilidade */}
            <div
              onMouseEnter={() => handleDesktopHover('agile')}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 cursor-pointer transition-all duration-500 ease-out"

            >
              <div className={`w-full h-full rounded-full border-2 flex flex-col justify-center items-center p-6 text-center transition-all duration-500 relative overflow-hidden
                ${hoveredPillarId === 'agile' 
                  ? 'border-accent bg-gradient-to-br from-accent/20 via-accent/10 to-transparent shadow-2xl shadow-accent/25' 
                  : 'border-accent/40 bg-gradient-to-br from-bg-card/80 via-bg-card/60 to-transparent backdrop-blur-sm'}`}
              >
                {/* Efeito de brilho no hover */}
                <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${hoveredPillarId === 'agile' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-accent/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-8 right-8 w-6 h-6 bg-accent/20 rounded-full blur-lg"></div>
                </div>
                <span className={`mb-3 text-3xl transition-all duration-300 ${hoveredPillarId === 'agile' ? 'text-accent scale-110' : 'text-accent/80'}`}>
                  <FaRocket />
                </span>
                <h4 className={`font-heading font-bold text-xl transition-all duration-300 ${hoveredPillarId === 'agile' ? 'text-text-primary' : 'text-text-primary/90'}`}>
                  Agilidade na Entrega
                </h4>
              </div>
            </div>

            {/* Círculo Inferior Esquerdo - Cultura & Governança */}
            <div
              onMouseEnter={() => handleDesktopHover('culture')}
              className="absolute bottom-4 left-14 w-72 h-72 cursor-pointer transition-all duration-500 ease-out"
            >
              <div className={`w-full h-full rounded-full border-2 flex flex-col justify-center items-center p-6 text-center transition-all duration-500 relative overflow-hidden
                ${hoveredPillarId === 'culture' 
                  ? 'border-accent bg-gradient-to-br from-accent/20 via-accent/10 to-transparent shadow-2xl shadow-accent/25' 
                  : 'border-accent/40 bg-gradient-to-br from-bg-card/80 via-bg-card/60 to-transparent backdrop-blur-sm'}`}
              >
                {/* Efeito de brilho no hover */}
                <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${hoveredPillarId === 'culture' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-accent/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-accent/20 rounded-full blur-lg"></div>
                </div>
                <span className={`mb-3 text-3xl transition-all duration-300 ${hoveredPillarId === 'culture' ? 'text-accent scale-110' : 'text-accent/80'}`}>
                  <FaShieldAlt />
                </span>
                <h4 className={`font-heading font-bold text-xl transition-all duration-300 ${hoveredPillarId === 'culture' ? 'text-text-primary' : 'text-text-primary/90'}`}>
                  Cultura & Governança
                </h4>
              </div>
            </div>

            {/* Círculo Inferior Direito - Comunicação Estratégica */}
            <div
              onMouseEnter={() => handleDesktopHover('communication')}
              className="absolute bottom-4 right-14 w-72 h-72 cursor-pointer transition-all duration-500 ease-out"

            >
              <div className={`w-full h-full rounded-full border-2 flex flex-col justify-center items-center p-6 text-center transition-all duration-500 relative overflow-hidden
                ${hoveredPillarId === 'communication' 
                  ? 'border-accent bg-gradient-to-br from-accent/20 via-accent/10 to-transparent shadow-2xl shadow-accent/25' 
                  : 'border-accent/40 bg-gradient-to-br from-bg-card/80 via-bg-card/60 to-transparent backdrop-blur-sm'}`}
              >
                {/* Efeito de brilho no hover */}
                <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${hoveredPillarId === 'communication' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-accent/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-8 right-8 w-6 h-6 bg-accent/20 rounded-full blur-lg"></div>
                </div>
                <span className={`mb-3 text-3xl transition-all duration-300 ${hoveredPillarId === 'communication' ? 'text-accent scale-110' : 'text-accent/80'}`}>
                  <FaBroadcastTower />
                </span>
                <h4 className={`font-heading font-bold text-xl transition-all duration-300 ${hoveredPillarId === 'communication' ? 'text-text-primary' : 'text-text-primary/90'}`}>
                  Comunicação Estratégica
                </h4>
              </div>
            </div>

    

            {/* Linhas conectoras sutis */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgb(var(--accent))', stopOpacity: 0.1 }} />
                  <stop offset="50%" style={{ stopColor: 'rgb(var(--accent))', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: 'rgb(var(--accent))', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
              {hoveredPillarId && (
                <>
                  <line x1="50%" y1="18%" x2="30%" y2="70%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"  />
                  <line x1="50%" y1="18%" x2="70%" y2="70%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"  />
                  <line x1="30%" y1="70%" x2="70%" y2="70%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6"  />
                </>
              )}
            </svg>
          </div>

          {/* Descrições dos Pilares (Desktop) */}
          <div className="flex flex-col justify-center space-y-4">
            {pillarsData.map(pillar => {
                const isHovered = hoveredPillarId === pillar.id;
                return (
                    <div 
                        key={pillar.id}
                        className={`bg-bg-card border rounded-lg p-6 backdrop-blur-sm transition-all duration-500 ${isHovered ? 'border-accent shadow-xl shadow-accent/10 scale-[1.02]' : 'border-border-color'}`}
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <span className={`text-xl transition-all duration-300 ${isHovered ? 'text-accent scale-110' : 'text-accent/80'}`}>{pillar.icon}</span>
                            <h3 className="text-xl font-bold text-text-primary font-heading">{pillar.name}</h3>
                        </div>
                        <p className="leading-relaxed text-base text-text-secondary">
                            {pillar.description}
                        </p>
                    </div>
                )
            })}
          </div>
        </div>

        {/* --- LAYOUT MOBILE - ACCORDION (Visível APENAS em telas pequenas) --- */}
        <div className="block lg:hidden w-full max-w-lg mx-auto">
          <div className="space-y-3">
            {pillarsData.map((pillar) => {
              const isActive = activePillarId === pillar.id;
              return (
                <div
                  key={pillar.id}
                  className={`bg-bg-card border rounded-lg overflow-hidden transition-all duration-300 ${isActive ? 'border-accent' : 'border-border-color'}`}
                >
                  {/* Cabeçalho Clicável do Accordion */}
                  <button
                    onClick={() => handleAccordionClick(pillar.id)}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl text-accent">{pillar.icon}</span>
                      <h4 className="font-heading font-semibold text-lg text-text-primary">{pillar.name}</h4>
                    </div>
                    <FaChevronDown 
                      className={`transform transition-transform duration-300 text-text-secondary ${isActive ? 'rotate-180' : 'rotate-0'}`} 
                    />
                  </button>
                  {/* Conteúdo Expansível */}
                  <div
                    className="transition-all duration-500 ease-in-out"
                    style={{ maxHeight: isActive ? '500px' : '0' }}
                  >
                    <div className="px-4 pb-4 pt-2 border-t border-border-color/50">
                      <p className="leading-relaxed text-base text-text-secondary">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-16 animate-on-scroll fade-in delay-4">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <a 
              href="#contact" 
              className="btn btn-outline rounded-full border border-accent bg-transparent py-3 px-8 text-center font-medium text-accent shadow-sm transition duration-300 ease-in-out hover:bg-accent-light hover:shadow-md hover:-translate-y-1.5"
            >
              Quero Entender Melhor!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyPillarsOfValue;
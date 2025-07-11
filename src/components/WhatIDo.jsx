import React from 'react';
// Importando ícones relevantes
import { FaChartLine, FaDatabase, FaUsers, FaLightbulb, FaRocket, FaSitemap } from 'react-icons/fa';

// Componente reutilizável para cada bloco de explicação
const ServiceBlock = ({ icon, title, children }) => (
    <div className="service-block bg-bg-card border border-border-color rounded-lg p-8 transition-all duration-300 hover:border-accent/70 hover:shadow-md hover:-translate-y-1">
        <div className="mb-4 inline-block rounded-full bg-accent-light p-3">
            {/* Renderiza o ícone passado como prop */}
            {React.cloneElement(icon, { className: "h-6 w-6 text-accent" })}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-text-primary font-heading">{title}</h3>
        <div className="text-text-secondary leading-relaxed space-y-3">
            {children} {/* O conteúdo (parágrafos) entra aqui */}
        </div>
    </div>
);

function WhatIDo() {
    return (
        <section id="what-i-do" className="py-24 bg-bg-secondary bg-gradient-to-br from-black via-gray-900/10 to-bg-secondary">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl font-heading animate-on-scroll fade-in">
                    Como Eu Gero Valor
                </h2>
                <hr className="section-divider mx-auto mb-12 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12 animate-on-scroll fade-in delay-2">
                    <ServiceBlock
                        icon={<FaSitemap />}
                        title="Business Intelligence & Coordenação Estratégica"
                    >
                        <p className="font-medium text-text-primary/90 text-md">
                           BI é sobre transformar dados em <span className="font-bold text-accent">decisões estratégicas</span>. Imagine um mar de informações: eu navego nele para encontrar as pérolas que realmente importam.
                        </p>
                        
                        <p>
                            Na prática, isso significa desenvolver desde o processo de ETL (extração, transformação e carga dos dados), até a criação de dashboards dinâmicos e intuitivos em <span className="text-accent font-semibold">Power BI</span>, <span className="text-accent font-semibold">Looker Studio</span>, <span className="text-accent font-semibold">Metabase</span>, entre outros.
                        </p>
                        
                        <p>
                            Desenvolvi análises complexas como RFV e suas movimentações, e dashboards de performance de vendas/marketing para clientes como <span className="text-accent font-semibold">3DLab</span>, <span className="text-accent font-semibold">Neon</span> e <span className="text-accent font-semibold">Pilão</span>, sempre com foco em usabilidade e documentação para o usuário final.
                        </p>

                        <div className="mt-6 p-4 bg-accent-light/30 border-l-4 border-accent rounded-r-lg">
                            <p className="text-text-primary font-medium">
                                Como <span className="text-accent font-semibold">Coordenador de Business Intelligence</span> do Horizon Team, garanto que as soluções não só atendam, mas superem as expectativas, promovendo uma cultura data-driven e gerando insights acionáveis.
                            </p>
                        </div>
                    </ServiceBlock>

                    <ServiceBlock
                        icon={<FaRocket />}
                        title="Product Management / Ownership"
                    >
                        <p className="font-medium text-text-primary/90 text-md">
                            Como Certified Professional Scrum Product Owner (PSPO), sei que ser dono e gestor de um produto é garantir que estamos construindo a <span className="font-bold text-accent">coisa certa</span>, para as <span className="font-bold text-accent">pessoas certas</span>, no <span className="font-bold text-accent">momento certo</span>. É sobre entender profundamente o problema e orquestrar a solução.
                        </p>
                        
                        <p>
                           Minha atuação envolve desde a pesquisa e descoberta de necessidades (como a falta de segmentação de clientes na <span className="text-accent font-semibold">3DLab</span> ou a otimização do funil de vendas na <span className="text-accent font-semibold">Neon</span>), até a definição da visão, estratégia e roadmap do produto.
                        </p>
                        
                        <p>
                            Traduzo essas informações em requisitos claros para as equipes, priorizo o backlog e acompanho de perto o desenvolvimento, sempre mantendo o foco na experiência do usuário e no valor de negócio.
                        </p>
                        <div className="mt-6 p-4 bg-accent-light/30 border-l-4 border-accent rounded-r-lg">
                            <p className="text-text-primary font-medium">
                                Mesmo em projetos de BI, como os da <span className="text-accent font-semibold">Pilão</span> e <span className="text-accent font-semibold">Angelus</span>, a mentalidade de PM/PO é crucial para "produtizar" a análise, garantindo que ela seja uma ferramenta útil e de fácil adoção.
                            </p>
                        </div>
                    </ServiceBlock>
                </div>
            </div>
        </section>
    );
}

export default WhatIDo;

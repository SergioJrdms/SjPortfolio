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
        <section id="what-i-do" className="py-24 bg-bg-primary">
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
                        <p className="font-medium text-text-primary/90">
                           BI é sobre transformar dados em <span className="font-bold">decisões estratégicas</span>. Imagine um mar de informações: eu navego nele para encontrar as pérolas que realmente importam.
                        </p>
                        <p>
                            Na prática, isso significa desenvolver desde o processo de ETL (extração, transformação e carga dos dados), até a criação de dashboards dinâmicos e intuitivos em <span className="text-accent">Power BI</span>, <span className="text-accent">Looker Studio</span>, <span className="text-accent">Metabase</span>, entre outros. Desenvolvi análises complexas como RFV e suas movimentações, e dashboards de performance de vendas/marketing para clientes como <span className="text-accent">3DLab, Neon e Pilão</span>, sempre com foco em usabilidade e documentação para o usuário final.
                        </p>
                        <p>
                            Como <span className="text-accent">Coordenador de Business Intelligence</span> do Horizon Team, garanto que as soluções não só atendam, mas superem as expectativas, promovendo uma cultura data-driven e gerando insights acionáveis.
                        </p>
                    </ServiceBlock>

                    <ServiceBlock
                        icon={<FaRocket />}
                        title="Product Management / Ownership"
                    >
                         <p className="font-medium text-text-primary/90">
                            Ser dono e gestor de um produto é garantir que estamos construindo a <span className="font-bold">coisa certa</span>, para as <span className="font-bold">pessoas certas</span>, no <span className="font-bold">momento certo</span>. É sobre entender profundamente o problema e orquestrar a solução.
                        </p>
                        <p>
                           Minha atuação envolve desde a pesquisa e descoberta de necessidades (como a falta de segmentação de clientes na <span className="text-accent">3DLab</span> ou a otimização do funil de vendas na <span className="text-accent">Neon</span>), até a definição da visão, estratégia e roadmap do produto. Traduzo essas informações em requisitos claros para as equipes, priorizo o backlog e acompanho de perto o desenvolvimento.
                        </p>
                         <p>
                            Mesmo em projetos de BI, como os da <span className="text-accent">Pilão</span> e <span className="text-accent">Angelus</span>, a mentalidade de PM é crucial para "produtizar" a análise, garantindo que ela seja uma ferramenta útil e de fácil adoção, desde a concepção com dados mockados ("product first") até o feedback e evolução.
                        </p>
                    </ServiceBlock>
                </div>
            </div>
        </section>
    );
}

export default WhatIDo;

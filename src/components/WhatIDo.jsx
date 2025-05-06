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
                <h2 className="section-title text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl animate-on-scroll fade-in">
                    Como Eu Gero Valor?
                </h2>
                <hr className="section-divider mx-auto mb-16 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12 animate-on-scroll fade-in delay-2">

                    {/* Bloco 1: BI & Coordenação (Mantido) */}
                    <ServiceBlock
                        icon={<FaSitemap />}
                        title="Business Intelligence & Coordenação"
                    >
                        <p className="font-medium text-text-primary/90">
                           O que é BI? É a arte de transformar o grande volume de dados de uma empresa em conhecimento prático para tomar decisões melhores.
                        </p>
                        <p>
                            No meu dia a dia, eu mergulho nesses dados, os organizo e crio visualizações claras (como painéis e relatórios) que contam a história por trás dos números. Como <span className="highlight">coordenador de um time de consultoria de BI</span>, meu papel também é guiar a equipe para entregar essas análises e insights valiosos aos nossos clientes/parceiros, ajudando-os a otimizar suas operações e estratégias.
                        </p>
                    </ServiceBlock>

                    {/* ===== BLOCO 2: ATUALIZADO PARA PRODUCT MANAGER ===== */}
                    <ServiceBlock
                        icon={<FaRocket />} // Ícone sugerindo lançamento, estratégia de produto
                        title="Product Manager"
                    >
                         <p className="font-medium text-text-primary/90">
                            O que faz um Product Manager? Ele é o estrategista por trás de um produto, definindo o "o quê" e o "porquê" de sua existência, desde a concepção da ideia até o seu lançamento e evolução contínua no mercado.
                        </p>
                        <p>
                           Minha função é identificar oportunidades e necessidades dos usuários, analisar o mercado, definir a visão e o roadmap (o plano de longo prazo) do produto. Trabalho em colaboração com equipes de design, desenvolvimento e marketing para construir soluções que não apenas funcionem bem, mas que também encantem os usuários e alcancem os objetivos do negócio.
                        </p>
                    </ServiceBlock>
                    {/* ===== FIM DA ATUALIZAÇÃO ===== */}
                </div>
            </div>
        </section>
    );
}

export default WhatIDo;
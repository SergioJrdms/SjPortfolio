import React, { useState, useEffect, useRef } from 'react';
import minhaFoto from '../assets/foto.jpg'; // Certifique-se que o caminho está correto
import pspoBadge from '../assets/pspo-badge.png'; // Adicione sua badge PSPO aqui

// Componente SkillTag (sem alterações)
const SkillTag = ({ children }) => (
  <span className="skill-tag cursor-default rounded-md border border-border-color bg-bg-card py-2 px-4 text-sm text-text-secondary transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-accent hover:bg-accent-light hover:text-accent hover:shadow-md">
    {children}
  </span>
);

// Componente CounterItem com CONSOLE LOGS para Debug
const CounterItem = ({ target, title }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const targetRef = useRef(target);

    useEffect(() => {
        console.log(`[Counter ${title}] Criando Observer`);
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log(`[Counter ${title}] ESTÁ VISÍVEL!`);
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                } else {
                    // console.log(`[Counter ${title}] Não está visível`);
                }
            },
            { threshold: 0.6 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
            console.log(`[Counter ${title}] Observando elemento`);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
                console.log(`[Counter ${title}] Parou de observar (cleanup)`);
            }
        };
    }, [title]);

    useEffect(() => {
        if (!isVisible) {
             console.log(`[Counter ${title}] Efeito de Animação: Pulando (isVisible=false)`);
             return;
        }

        console.log(`[Counter ${title}] Efeito de Animação: INICIANDO (isVisible=true)`);

        let currentCount = 0;
        setCount(0);
        const end = targetRef.current;

        const duration = 1500;
        const steps = 50;

        if (end <= 0 || !Number.isFinite(end) || steps <= 0) {
            console.log(`[Counter ${title}] Alvo inválido ou zero (${end}). Definindo valor final diretamente.`);
            setCount(end > 0 ? end : 0);
            return;
        }

        const stepTime = duration / steps;
        const increment = end / steps;

        console.log(`[Counter ${title}] target=${end}, steps=${steps}, stepTime=${stepTime.toFixed(2)}, increment=${increment.toFixed(2)}`);

        const timer = setInterval(() => {
            currentCount += increment;
            console.log(`[Counter ${title}] Tick: currentCount=${currentCount.toFixed(2)}`);
            if (currentCount >= end) {
                setCount(end);
                clearInterval(timer);
                console.log(`[Counter ${title}] Intervalo LIMPO (atingiu o alvo)`);
            } else {
                setCount(Math.ceil(currentCount));
            }
        }, stepTime);

        return () => {
             console.log(`[Counter ${title}] Limpando intervalo (efeito desmontando ou isVisible mudou)`);
             clearInterval(timer);
        }

    }, [isVisible, title]);

    return (
        <div ref={ref} className="counter-item rounded-lg border border-border-color bg-bg-card p-6 text-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-accent hover:shadow-lg">
            <span className="counter-value mb-2 block text-4xl font-bold text-accent lg:text-5xl">
                {(typeof count === 'number' ? count : 0)}+
            </span>
            <span className="counter-title text-sm text-text-secondary">
                {title}
            </span>
        </div>
    );
};

const StatHighlight = ({ value, label, description }) => (
  <div className="stat-highlight group relative overflow-hidden rounded-xl border border-border-color bg-gradient-to-r from-bg-card to-bg-card/90 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10">
    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
    <div className="relative z-10">
      <div className="mb-2 text-2xl font-bold text-accent">{value}</div>
      <div className="mb-1 text-sm font-semibold text-text-primary">{label}</div>
      <div className="text-xs text-text-secondary">{description}</div>
    </div>
  </div>
);

// Componente para a badge PSPO - REPOSICIONADA PARA CANTO INFERIOR DIREITO
const PSPOBadge = () => (
  <div className="pspo-badge absolute -bottom-4 -right-4 z-20 animate-on-scroll slide-in-right delay-6">
    <div className="group relative">
      <div className="absolute -inset-2 rounded-full  blur-lg transition-all duration-300 group-hover:opacity-40"></div>
      <div className="relative overflow-hidden rounded-full p-2 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
        <img 
          src={pspoBadge} 
          alt="Professional Scrum Product Owner (PSPO) Badge" 
          className="h-16 w-16 object-contain"
        />
      </div>
      {/* Tooltip - ajustado para posição inferior */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="whitespace-nowrap rounded-lg bg-bg-card border border-border-color px-3 py-1 text-xs text-text-secondary shadow-lg">
          PSPO Certified
        </div>
      </div>
    </div>
  </div>
);

// Componente About com Badge PSPO
function About() {
  return (
    <section id="about" className="relative py-24 bg-bg-secondary  bg-gradient-to-t from-red-900/5 via-transparent to-transparent bg-radial-glow-bl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-[1]">
        <h2 className="section-title text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl font-heading animate-on-scroll fade-in">
          Sobre Mim
        </h2>
        <hr className="section-divider mx-auto mb-12 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />

        <div className="about-content grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="profile-img-container relative mx-auto max-w-sm animate-on-scroll slide-in-left delay-2 rounded-xl shadow-lg transition-all duration-500 hover:scale-103 hover:shadow-glow-hover overflow-visible">
            <div className="relative overflow-hidden rounded-3xl border border-border-color bg-gradient-to-b from-bg-card to-bg-card/80 p-2 backdrop-blur-sm transition-all duration-700 hover:shadow-2xl hover:shadow-accent/20">
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src={minhaFoto} 
                  alt="Foto" 
                  className="h-full w-full object-cover transition-transform duration-700"
                />
              </div>
              
              <div className="absolute -right-4 top-8 animate-on-scroll slide-in-right delay-4">
                <StatHighlight 
                  value="2+" 
                  label="Anos Exp." 
                  description="Business Intelligence"
                />
              </div>
              <div className="absolute -left-4 bottom-8 animate-on-scroll slide-in-left delay-5">
                <StatHighlight 
                  value="25+" 
                  label="Projetos" 
                  description="Entregues"
                />
              </div>
            </div>
            
            {/* Badge PSPO - Posicionada FORA do quadro da foto */}
            <PSPOBadge />
          </div>
          
          <div className="about-text animate-on-scroll slide-in-right delay-3">
            <div className="mb-8">
              <h3 className="mb-6 text-3xl font-bold text-text-primary">
                Conectando <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">Dados</span>, <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">Cultura</span> e <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">Estratégia</span>
              </h3>
              
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
                <p className="relative overflow-hidden rounded-xl border border-border-color bg-gradient-to-r from-bg-card to-bg-card/80 p-6 backdrop-blur-sm">
                  Minha trajetória é marcada pela busca constante em traduzir dados em inteligência estratégica. Como <span className="font-semibold text-accent">Certified Professional Scrum Product Owner (PSPO)</span>, com formação em <span className="font-semibold text-accent">Ciência de Dados</span> e <span className="font-semibold text-accent">Tecnologia da Informação</span>, desenvolvi uma base sólida para atuar de forma analítica e estratégica.
                </p>
                
                <p className="relative overflow-hidden rounded-xl border border-border-color bg-gradient-to-r from-bg-card to-bg-card/80 p-6 backdrop-blur-sm">
                  Especializado em <span className="font-semibold text-accent">Business Intelligence</span>, trabalho desde dashboards de vendas até otimização de processos ETL. Meus estudos em <span className="font-semibold text-accent">Product Management</span> me capacitam a entender o ciclo completo de desenvolvimento de produtos.
                </p>
                
                <p className="relative overflow-hidden rounded-xl border border-border-color bg-gradient-to-r from-bg-card to-bg-card/80 p-6 backdrop-blur-sm">
                  Meu objetivo é promover uma <span className="font-semibold text-accent">cultura data-driven</span> de entrega de valor de forma <span className="font-semibold text-accent">rápida, adaptável e flexível</span>, além de garantir que as soluções sejam tecnicamente robustas, intuitivas e eficazes para o usuário final.
                </p>
              </div>
            </div>
            
            <h4 className="skills-title mt-10 mb-4 text-lg font-semibold tracking-wide font-heading">Principais Habilidades e Ferramentas:</h4>
            <div className="skills flex flex-wrap gap-3 animate-on-scroll fade-in delay-4">
              <SkillTag>Product Ownership (PSPO Certified)</SkillTag>
              <SkillTag>Business Intelligence</SkillTag>
              <SkillTag>Power BI</SkillTag>
              <SkillTag>SQL Server / PostgreSQL</SkillTag>
              <SkillTag>DAX / ETL</SkillTag>
              <SkillTag>Modern Data Stack</SkillTag>
              <SkillTag>Modelagem de Dados</SkillTag>
              <SkillTag>Data Storytelling</SkillTag>
              <SkillTag>Ciência de Dados (EDA)</SkillTag>
              <SkillTag>Estatística / ML</SkillTag>
              <SkillTag>Python (Pandas, Numpy)</SkillTag>
              <SkillTag>React / TypeScript</SkillTag>
              <SkillTag>Comunicação Assertiva</SkillTag>
              <SkillTag>Gestão de Produtos</SkillTag>
              <SkillTag>Definição de Roadmap</SkillTag>
              <SkillTag>Priorização de Features</SkillTag>
              <SkillTag>Visão de Negócio</SkillTag>
              <SkillTag>Liderança Colaborativa</SkillTag>
              <SkillTag>Resolução de Problemas</SkillTag>
              <SkillTag>Autodidata</SkillTag>
              <SkillTag>Inglês Intermediário</SkillTag>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-accent/10 to-accent-hover/10 blur-3xl"></div>
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-accent/10 to-accent-hover/10 blur-3xl"></div>
        
        <div className="stats-counter mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8 animate-on-scroll fade-in delay-5">
          <CounterItem target={2} title="Anos de Experiência" />
          <CounterItem target={28} title="Projetos Entregues" />
          <CounterItem target={13} title="Empresas Atendidas" />
        </div>
      </div>
    </section>
  );
}

export default About;
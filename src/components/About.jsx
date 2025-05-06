import React, { useState, useEffect, useRef } from 'react';
import minhaFoto from '../assets/foto.jpg'; // Certifique-se que o caminho está correto

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
    const targetRef = useRef(target); // Usar ref para target é boa prática

    // Efeito para observar visibilidade
    useEffect(() => {
        console.log(`[Counter ${title}] Criando Observer`); // Log 1: Observer criado
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log(`[Counter ${title}] ESTÁ VISÍVEL!`); // Log 2: Ficou visível
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Desobserva após ficar visível
                } else {
                    // console.log(`[Counter ${title}] Não está visível`); // Descomente se precisar ver quando sai
                }
            },
            { threshold: 0.6 } // 60% visível para iniciar
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
            console.log(`[Counter ${title}] Observando elemento`); // Log 3: Começou a observar
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
                console.log(`[Counter ${title}] Parou de observar (cleanup)`); // Log 4: Limpeza
            }
        };
        // Removido isVisible daqui para o observer não ser recriado quando isVisible mudar
    }, [title]); // Depende apenas do título (ou props que não mudam)

    // Efeito para animar a contagem
    useEffect(() => {
        // Só executa a animação se estiver visível
        if (!isVisible) {
             console.log(`[Counter ${title}] Efeito de Animação: Pulando (isVisible=false)`); // Log 5a: Pulou
             return;
        }

        console.log(`[Counter ${title}] Efeito de Animação: INICIANDO (isVisible=true)`); // Log 5b: Iniciou

        let currentCount = 0;
        setCount(0); // Garante que começa do zero ao se tornar visível
        const end = targetRef.current; // Pega o valor alvo

        const duration = 1500; // Duração em ms
        const steps = 50;      // Passos da animação

        // Verifica se o alvo é válido para evitar divisões por zero ou loops infinitos
        if (end <= 0 || !Number.isFinite(end) || steps <= 0) {
            console.log(`[Counter ${title}] Alvo inválido ou zero (${end}). Definindo valor final diretamente.`); // Log 6a: Alvo inválido
            setCount(end > 0 ? end : 0); // Define 0 se o alvo for negativo/inválido
            return; // Não inicia o intervalo
        }

        const stepTime = duration / steps;
        const increment = end / steps;

        console.log(`[Counter ${title}] target=${end}, steps=${steps}, stepTime=${stepTime.toFixed(2)}, increment=${increment.toFixed(2)}`); // Log 7: Cálculos

        const timer = setInterval(() => {
            currentCount += increment;
            console.log(`[Counter ${title}] Tick: currentCount=${currentCount.toFixed(2)}`); // Log 8: Dentro do intervalo
            if (currentCount >= end) {
                setCount(end); // Garante valor final exato
                clearInterval(timer);
                console.log(`[Counter ${title}] Intervalo LIMPO (atingiu o alvo)`); // Log 9: Limpou intervalo
            } else {
                setCount(Math.ceil(currentCount)); // Atualiza estado com valor arredondado
            }
        }, stepTime);

        // Função de limpeza para o efeito
        return () => {
             console.log(`[Counter ${title}] Limpando intervalo (efeito desmontando ou isVisible mudou)`); // Log 10: Limpeza do efeito
             clearInterval(timer);
        }

    }, [isVisible, title]); // Depende de isVisible e title (se title pudesse mudar)

    // Renderiza o componente
    return (
        <div ref={ref} className="counter-item rounded-lg border border-border-color bg-bg-card p-6 text-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-accent hover:shadow-lg">
            <span className="counter-value mb-2 block text-4xl font-bold text-accent lg:text-5xl">
                 {/* Adiciona verificação para garantir que count é número */}
                {(typeof count === 'number' ? count : 0)}+
            </span>
            <span className="counter-title text-sm text-text-secondary">
                {title}
            </span>
        </div>
    );
};


// Componente About (Restante sem alterações)
function About() {
  return (
    <section id="about" className="relative py-24 bg-bg-secondary bg-radial-glow-bl overflow-hidden">
      <div className="container mx-auto px-6 relative z-[1]">
        <h2 className="section-title text-center text-3xl font-semibold text-text-primary sm:text-4xl animate-on-scroll fade-in">Sobre Mim</h2>
        <hr className="section-divider mx-auto mb-12 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />

        <div className="about-content grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Imagem */}
          <div className="profile-img-container relative mx-auto max-w-sm animate-on-scroll slide-in-left delay-2 rounded-xl shadow-lg transition-all duration-500 hover:scale-103 hover:shadow-glow-hover overflow-hidden">
             <div className="absolute inset-0 z-10 bg-gradient-to-t from-accent-light/30 to-transparent transition-opacity duration-400 opacity-60 hover:opacity-20"></div>
             <img src={minhaFoto} alt="Sergio Junior - Foto Profissional" className="profile-img block w-full rounded-xl transition-transform duration-500"/>
          </div>

          {/* Texto */}
          <div className="about-text animate-on-scroll slide-in-right delay-3">
            <h3 className="mb-6 text-2xl font-semibold">Data-Driven & Tech Enthusiast</h3>
            <p className="mb-6 text-text-secondary text-lg leading-relaxed">
              Graduando em <span className="highlight">Ciência de Dados</span> (Anhanguera) e formado <span className="highlight">Técnico em Informática para Internet</span> (ETEC), busco constantemente expandir meus conhecimentos. Durante os estudos, exerci liderança e didática ao compartilhar conhecimentos de programação.
            </p>
            <p className="mb-6 text-text-secondary text-lg leading-relaxed">
              Possuo experiência prática em todo o fluxo de <span className="highlight">Business Intelligence</span>, complementada por estudos autodidatas em <span className="highlight">Data Science</span>, Backend com Django e NLP. Como <span className="highlight">Product Manager</span>, foco em definir a visão e estratégia de produtos digitais, conectando as necessidades dos usuários com os objetivos de negócio.
            </p>
             <p className="text-text-secondary text-lg leading-relaxed">
              Estou sempre aberto a novas oportunidades que me permitam aplicar minhas habilidades e contribuir para o avanço de áreas focadas em dados e tecnologia.
            </p>

            <h4 className="skills-title mt-10 mb-4 text-lg font-semibold">Principais Habilidades:</h4>
            <div className="skills flex flex-wrap gap-3 animate-on-scroll fade-in delay-4">
              <SkillTag>Business Intelligence</SkillTag>
              <SkillTag>Power BI</SkillTag>
              <SkillTag>SQL Server</SkillTag>
              <SkillTag>DAX</SkillTag>
              <SkillTag>ETL (Talend)</SkillTag>
              <SkillTag>Modern Data Stack (Airbyte, Airflow, dbt, Metabase)</SkillTag>
              <SkillTag>AWS / Azure (Básico)</SkillTag>
              <SkillTag>Modelagem de Dados</SkillTag>
              <SkillTag>Data Storytelling</SkillTag>
              <SkillTag>Ciência de Dados (EDA)</SkillTag>
              <SkillTag>Estatística (Python)</SkillTag>
              <SkillTag>Machine Learning (Classificação, Regressão, etc.)</SkillTag>
              <SkillTag>Python (Pandas, Numpy)</SkillTag>
              <SkillTag>JavaScript / TypeScript</SkillTag>
              <SkillTag>React.js / Next.js</SkillTag>
              <SkillTag>HTML / CSS (Tailwind)</SkillTag>
              <SkillTag>C# / Java / Dart (Básico)</SkillTag>
              <SkillTag>PostgreSQL</SkillTag>
              <SkillTag>Liderança</SkillTag>
              <SkillTag>Gestão de Projetos/Equipes</SkillTag>
              <SkillTag>Comunicação Assertiva / Didática</SkillTag>
              <SkillTag>Trabalho em Grupo</SkillTag>
              <SkillTag>Proatividade</SkillTag>
              <SkillTag>Resiliência</SkillTag>
              <SkillTag>Resolução de Problemas</SkillTag>
              <SkillTag>Autodidata</SkillTag>
              <SkillTag>Inglês Intermediário</SkillTag>
            </div>
          </div>
        </div>

        {/* Stats Counter (Renderiza os CounterItems) */}
        <div className="stats-counter mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8 animate-on-scroll fade-in delay-5">
             <CounterItem target={2} title="Anos de Experiência" />
             <CounterItem target={10} title="Projetos Entregues" />
             <CounterItem target={7} title="Dashboards Estratégicos" />
        </div>
      </div>
    </section>
  );
}

export default About;
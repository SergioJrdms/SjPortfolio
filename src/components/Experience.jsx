import React from 'react';

// Componente para item individual da timeline
const TimelineItem = ({ title, company, period, descriptionItems, delayClass, position }) => {
  const isOdd = position === 'odd';

  return (
    <div className={`timeline-item relative mb-12 w-full md:w-[calc(50%-2.5rem)] animate-on-scroll ${isOdd ? 'md:slide-in-left' : 'md:slide-in-right'} ${delayClass}`}>
      {/* Card de Conteúdo */}
      <div className="rounded-lg border border-border-color bg-bg-card p-7 shadow-sm transition-all duration-400 hover:border-accent hover:shadow-md hover:bg-[rgba(255,255,255,0.02)]">
        <h3 className="job-title mb-1 text-xl font-semibold text-text-primary">{title}</h3>
        <span className="company mb-1 block text-base font-medium text-accent">{company}</span>
        <span className="period mb-4 block text-xs text-text-secondary">{period}</span>
        <div className="job-description text-sm leading-relaxed text-text-secondary">
          {/* Assume que descriptionItems é um array de strings */}
          {descriptionItems && descriptionItems.length > 1 ? (
            <ul className="mt-3 list-none space-y-2 pl-1">
              {descriptionItems.map((item, index) => (
                <li key={index} className="relative pl-5 before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-accent">
                   {/* Use dangerouslySetInnerHTML se precisar renderizar HTML como os highlights */}
                   <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          ) : (
            <p>{descriptionItems ? descriptionItems[0] : ''}</p> // Mostra como parágrafo se for item único
          )}
        </div>
      </div>

       {/* Bolinha na Linha Central - Usando Tailwind Arbitrary Variants/Values */}
       {/* Nota: A complexidade do calc() pode ser difícil no Tailwind puro. CSS customizado (comentado em index.css) pode ser mais fácil */}
       <div className={`
           timeline-dot absolute top-[28px] z-10 h-4 w-4 rounded-full border-[3px] border-accent bg-bg-primary transition-colors duration-300 group-hover:bg-accent
           ${isOdd ? 'md:right-[calc(-2.5rem-8px)] md:left-auto' : 'md:left-[calc(-2.5rem-8px)] md:right-auto'}
           /* Posicionamento mobile (ajustado no media query global) */
           max-md:left-[-33px] max-md:right-auto /* para 992px */
           max-sm:left-[-28px] max-sm:right-auto /* para 576px - Tailwind não tem max-sm por padrão, ajuste se necessário */
       `}></div>

    </div>
  );
};


function Experience() {
  const experiences = [
    {
      title: "Business Intelligence Coordinator",
      company: "Kalidash, São Paulo",
      period: "05/2025 - Presente",
      descriptionItems: [
        ""
      ],
      position: 'even', // 'odd' para esquerda, 'even' para direita no desktop
      delay: 'delay-2'
    },
    {
      title: "Business Intelligence Consultant",
      company: "Kalidash, São Paulo",
      period: "10/2024 - 05/2025 (10 Meses)",
      descriptionItems: [
        "Consultor BI e membro fundador da célula 'Horizon Team', focada em consultoria de dados."
      ],
      position: 'odd', // 'odd' para esquerda, 'even' para direita no desktop
      delay: 'delay-4'
    },
    {
        title: "Full Stack Developer", // Título combinado
        company: "Kalidash, São Paulo",
        period: "11/2023 – 10/2024 (10 Meses)", // Ajustado para formato consistente
        descriptionItems: [
          "Desenvolvimento full stack da aplicação 'Kalidash' (visualização de dados) usando <span class='text-accent/80'>Next.js, React.js, TypeScript, PostgreSQL, TailwindCSS</span>.",
          "Atuação em engenharia de dados e melhorias no processo de ETL com ferramentas da Modern Data Stack (<span class='text-accent/80'>Airbyte, Airflow, AWS, Metabase</span>).",
          "Administração de banco de dados (PostgreSQL) e otimização da integração banco-aplicação."
        ],
        position: 'even', // Pode ajustar se quiser alternar (só há 1 item por enquanto)
        delay: 'delay-8'
      },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center text-3xl font-semibold text-text-primary sm:text-4xl animate-on-scroll fade-in">Experiência Profissional</h2>
        <hr className="section-divider mx-auto mb-16 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />

        {/* Timeline Container */}
        <div className="timeline relative mx-auto max-w-3xl">
          {/* Linha Central (visível apenas em desktop) */}
          <div className="absolute top-[15px] bottom-[15px] left-1/2 -ml-[1.5px] hidden w-[3px] rounded-md bg-gradient-to-b from-accent via-accent-light to-transparent md:block"></div>

           {/* Linha Lateral (visível apenas em mobile) */}
           <div className="absolute top-[15px] bottom-[15px] left-[20px] w-[3px] rounded-md bg-gradient-to-b from-accent via-accent-light to-transparent md:hidden max-sm:left-[15px]"></div>


          {/* Mapeia as experiências */}
          <div className="flex flex-col items-center md:items-start md:relative">
            {experiences.map((exp, index) => (
              <div
                  key={index}
                  className={`w-full flex ${exp.position === 'odd' ? 'md:justify-start' : 'md:justify-end'} max-md:justify-start max-md:pl-[45px] max-sm:pl-[35px] group`} // Adiciona group para hover do ponto
               >
                 <TimelineItem
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    descriptionItems={exp.descriptionItems}
                    delayClass={exp.delay}
                    position={exp.position}
                 />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

import React from 'react';

// Componente para item individual da timeline
const TimelineItem = ({ title, company, period, descriptionItems, delayClass, position }) => {
  const isOdd = position === 'odd';

  return (
     <div className={`timeline-item relative mb-16 w-full md:w-[calc(50%-3rem)] animate-on-scroll ${isOdd ? 'md:slide-in-left' : 'md:slide-in-right'} ${delayClass}`}>
      {/* Card de Conteúdo com design melhorado */}
      <div className="group relative rounded-lg border border-border-color bg-bg-card p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.02)]">
        
        {/* Brilho sutil no hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-accent-light/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        
       

        <div className="relative z-10">
          {/* Header do card */}
          <div className="mb-6">
            <h3 className="job-title mb-2 text-2xl font-semibold text-text-primary transition-colors duration-300 ">
              {title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <span className="company mb-1 text-lg font-medium text-accent">
                {company}
              </span>
              <span className="period text-sm text-text-secondary sm:border-l sm:border-border-color sm:pl-4">
                {period}
              </span>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="mb-6 h-px bg-gradient-to-r from-accent/50 via-accent-light/30 to-transparent"></div>

          {/* Descrição */}
          <div className="job-description text-sm leading-relaxed text-text-secondary">
            {descriptionItems && descriptionItems.length > 1 ? (
              <ul className="space-y-3">
                {descriptionItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="relative pl-6 transition-all duration-300 hover:text-text-primary">
                    <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gradient-to-r from-accent to-accent-hover shadow-sm"></div>
                    <span 
                      dangerouslySetInnerHTML={{ __html: item }}
                      className="text-sm leading-relaxed"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed">
                {descriptionItems ? descriptionItems[0] : ''}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Connector dot - Melhorado */}
      <div className={`
        timeline-dot absolute top-[60px] z-20 h-5 w-5 rounded-full border-[3px] border-accent bg-bg-primary shadow-lg transition-all duration-300 group-hover:border-accent-hover group-hover:shadow-accent/50
        ${isOdd ? 'md:right-[calc(-3rem-10px)] md:left-auto' : 'md:left-[calc(-3rem-10px)] md:right-auto'}
        max-md:left-[-35px] max-md:right-auto
        max-sm:left-[-30px] max-sm:right-auto
      `}>
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-accent to-accent-hover opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
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
        "Como membro fundador da 'Horizon Team', lidero e executo consultorias de dados, transformando necessidades de negócio em soluções de BI de ponta a ponta.",
        "Responsável pela definição de escopo, roadmap e priorização de features para produtos de dados, alinhando entregas com as expectativas de clientes de diversos segmentos (varejo, indústria, serviços).",
        "Liderança e execução de projetos de consultoria em BI, desde a concepção e levantamento de requisitos com stakeholders até a entrega de soluções de dados acionáveis para clientes de diversos segmentos como <span class='text-accent/80'>Neon, Pilão, Angelus e 3DLab</span>.",
      ],
      position: 'even', // 'odd' para esquerda, 'even' para direita no desktop
      delay: 'delay-2'
    },
    {
      title: "Business Intelligence Consultant",
      company: "Kalidash, São Paulo",
      period: "10/2024 - 05/2025 (10 Meses)",
      descriptionItems: [
        "Consultor BI e membro fundador da célula 'Horizon Team', focada em consultoria de dados.",
        "Responsável por colocar a 'mão na massa' e ajudar a sua empresa a entender seus dados.",
        "Desenvolvimento de dashboards estratégicos e operacionais (em <span class='text-accent/80'>Power BI, Looker Studio e Metabase</span>) para análise de performance de vendas, comportamento de clientes (RFV, Cohorts), funis de marketing e DRE, focando na usabilidade e na 'produtização' das análises.",
        "Implementação e otimização de processos de ETL, integrando diversas fontes de dados (ERPs como <span class='text-accent/80'>Vensis e Mercante</span>, planilhas, APIs como <span class='text-accent/80'>Beehiiv e Kommo</span>) e utilizando ferramentas da Modern Data Stack para garantir qualidade e eficiência na preparação dos dados.",
        "Criação de documentação técnica e de usuário para as soluções de BI, facilitando a adoção e promovendo uma cultura data-driven dentro das empresas clientes e internamente na Kalidash.",
        "Aplicação de conceitos de <span class='text-accent/80'>Product Management</span> na definição do escopo das soluções de dados, priorização de features analíticas e no acompanhamento do ciclo de vida dos 'produtos de BI', garantindo alinhamento com as necessidades estratégicas dos clientes."
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
    <section id="experience" className="py-24 bg-bg-secondary bg-gradient-to-br from-black via-gray-900/10 to-black">
      <div className="container mx-auto px-6">
                                    <h2 className="section-title text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl font-heading animate-on-scroll fade-in">
          Experiência Profissional
        </h2>
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

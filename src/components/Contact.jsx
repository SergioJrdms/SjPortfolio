import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

// Componente ContactItem com visual melhorado
const ContactItem = ({ icon, label, value, link }) => (
  <div className="contact-item group relative flex items-start gap-4 mb-6 p-4 bg-bg-primary border border-border-color rounded-md transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 md:items-center">
    <div className="contact-icon mt-1 text-2xl text-accent w-[50px] h-[50px] bg-gradient-to-br from-accent/10 to-accent/5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:from-accent/20 group-hover:to-accent/10 group-hover:scale-110 md:mt-0">
      {icon}
    </div>
    <div className="contact-details flex-1">
      <span className="block text-sm font-medium text-text-secondary mb-1">{label}</span>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-text-primary transition-all duration-300 hover:text-accent hover:underline break-words group-hover:text-accent">
          {value}
        </a>
      ) : (
        <strong className="text-base font-semibold text-text-primary break-words">{value}</strong>
      )}
    </div>
  </div>
);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    const formspreeEndpoint = "https://formspree.io/f/xdkggnnd";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ocorreu um erro ao enviar.');
      }
    } catch (error) {
      console.error("Erro no envio do formulário:", error);
      setFormStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="bg-bg-secondary py-24">
      <div className="container mx-auto px-6">
        {/* Header com visual melhorado */}
        <div className="text-center mb-20">
          <h2 className="section-title text-4xl font-bold text-text-primary sm:text-5xl animate-on-scroll fade-in mb-4">
            Vamos Conversar?
          </h2>
          <hr className="section-divider mx-auto mb-6 w-24 border-none h-[4px] bg-gradient-to-r from-accent via-accent-hover to-accent rounded-full animate-on-scroll fade-in delay-1" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed animate-on-scroll fade-in delay-2">
            Transforme ideias em realidade. Vamos construir algo incrível juntos.
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          {/* Informações de Contato - visual melhorado */}
          <div className="contact-info animate-on-scroll slide-in-left delay-2 md:text-left text-center">
            <div className="mb-8">
              <h3 className="mb-4 text-3xl font-bold text-text-primary flex items-center gap-3 justify-center md:justify-start">
                <span className="w-1 h-8 bg-gradient-to-b from-accent to-accent-hover rounded-full"></span>
                Entre em Contato
              </h3>
              <p className="text-lg leading-relaxed text-text-secondary">
                Estou sempre aberto a networking, desafios ou apenas um bom bate-papo
                sobre dados e produtos. Sinta-se à vontade para me contatar!
              </p>
            </div>
            
            <div className="space-y-4">
              <ContactItem 
                icon={<FaEnvelope />} 
                label="Email" 
                value="sergiojunior.dms@gmail.com" 
                link="mailto:sergiojunior.dms@gmail.com" 
              />
              <ContactItem 
                icon={<FaLinkedin />} 
                label="LinkedIn" 
                value="linkedin.com/in/ssergiojunior" 
                link="https://linkedin.com/in/ssergiojunior" 
              />
            </div>

            {/* Card adicional com visual premium */}
            <div className="mt-10 relative overflow-hidden p-8 bg-gradient-to-br from-bg-primary via-bg-primary to-accent/5 border border-border-color rounded-md transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="bg-gradient-to-r from-text-primary to-accent bg-clip-text text-transparent">
                    Vamos Colaborar!
                  </span>
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  Interessado em dados e produtos? <br></br>
                  Vamos trocar uma ideia!
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">Dados</span>
                  <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">BI</span>
                  <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">Produtos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário - visual premium mantendo funcionalidade */}
          <div className="contact-form-container animate-on-scroll slide-in-right delay-3">
            <div className="mb-8">
              <h3 className="mb-4 text-3xl font-bold md:text-left text-center text-text-primary flex items-center gap-3 justify-center md:justify-start">
                <span className="w-1 h-8 bg-gradient-to-b from-accent to-accent-hover rounded-full"></span>
                Envie uma Mensagem
              </h3>
              <p className="text-text-secondary">Preencha o formulário abaixo e entrarei em contato em breve.</p>
            </div>
            
            <form
              id="contact-form"
              className="contact-form space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Nome */}
              <div className="form-group group">
                <label htmlFor="name" className="form-label block mb-3 text-sm font-semibold text-text-secondary transition-colors group-focus-within:text-accent">
                  Nome <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input w-full rounded-md border-2 border-border-color bg-bg-primary py-4 px-5 text-text-primary transition-all duration-300 focus:border-accent focus:ring-4 focus:ring-accent/20 focus:outline-none hover:border-accent/70 hover:shadow-md placeholder:text-text-secondary/60"
                    placeholder="Seu nome completo"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-transparent opacity-0 pointer-events-none transition-opacity duration-300 group-focus-within:opacity-100"></div>
                </div>
              </div>

              {/* Email */}
              <div className="form-group group">
                <label htmlFor="email" className="form-label block mb-3 text-sm font-semibold text-text-secondary transition-colors group-focus-within:text-accent">
                  Email <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input w-full rounded-md border-2 border-border-color bg-bg-primary py-4 px-5 text-text-primary transition-all duration-300 focus:border-accent focus:ring-4 focus:ring-accent/20 focus:outline-none hover:border-accent/70 hover:shadow-md placeholder:text-text-secondary/60"
                    placeholder="seu@email.com"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-transparent opacity-0 pointer-events-none transition-opacity duration-300 group-focus-within:opacity-100"></div>
                </div>
              </div>

              {/* Assunto */}
              <div className="form-group group">
                <label htmlFor="subject" className="form-label block mb-3 text-sm font-semibold text-text-secondary transition-colors group-focus-within:text-accent">
                  Assunto
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input w-full rounded-md border-2 border-border-color bg-bg-primary py-4 px-5 text-text-primary transition-all duration-300 focus:border-accent focus:ring-4 focus:ring-accent/20 focus:outline-none hover:border-accent/70 hover:shadow-md placeholder:text-text-secondary/60"
                    placeholder="Ex: Astronomia, Rock, Dados..."
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-transparent opacity-0 pointer-events-none transition-opacity duration-300 group-focus-within:opacity-100"></div>
                </div>
              </div>

              {/* Mensagem */}
              <div className="form-group group">
                <label htmlFor="message" className="form-label block mb-3 text-sm font-semibold text-text-secondary transition-colors group-focus-within:text-accent">
                  Mensagem <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea w-full rounded-md border-2 border-border-color bg-bg-primary py-4 px-5 text-text-primary transition-all duration-300 focus:border-accent focus:ring-4 focus:ring-accent/20 focus:outline-none hover:border-accent/70 hover:shadow-md min-h-[160px] resize-y placeholder:text-text-secondary/60"
                    rows="6"
                    placeholder="Qual sua mensagem?"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-transparent opacity-0 pointer-events-none transition-opacity duration-300 group-focus-within:opacity-100"></div>
                </div>
              </div>

              {/* Botão e Status */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group btn submit-btn relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-hover border-2 border-accent py-4 px-10 font-semibold text-white shadow-lg transition-all duration-500 ease-out hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none md:self-start active:scale-95"
                  disabled={formStatus.submitting}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {formStatus.submitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-hover to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>

                {/* Status Messages */}
                {formStatus.submitted && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-green-700 font-semibold">
                        Mensagem enviada com sucesso! Entrarei em contato em breve. 🚀
                      </p>
                    </div>
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-red-700 font-semibold">
                        Erro: {formStatus.error}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
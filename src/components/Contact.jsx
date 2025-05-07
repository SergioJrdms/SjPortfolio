import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

// Componente ContactItem (sem alterações)
const ContactItem = ({ icon, label, value, link }) => (
     <div className="contact-item flex items-start gap-4 mb-6 text-text-secondary md:items-center">
        <span className="contact-icon mt-1 text-xl text-accent w-[40px] text-center flex-shrink-0 md:mt-0">{icon}</span>
        <div className="contact-details">
            <span className="block text-sm">{label}</span>
            {link ? (
                 <a href={link} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-text-primary transition-colors hover:text-accent hover:underline break-words">
                    {value}
                 </a>
            ) : (
                <strong className="text-base font-medium text-text-primary break-words">{value}</strong>
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
    const formspreeEndpoint = "https://formspree.io/f/xdkggnnd"; // Sua URL Formspree

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
         <h2 className="section-title text-center text-3xl font-semibold text-text-primary sm:text-4xl animate-on-scroll fade-in">Vamos Conversar?</h2>
         <hr className="section-divider mx-auto mb-16 w-16 border-none h-[3px] bg-gradient-to-r from-accent to-accent-hover animate-on-scroll fade-in delay-1" />

        <div className="contact-grid grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          {/* Info (sem alterações) */}
          <div className="contact-info animate-on-scroll slide-in-left delay-2 md:text-left text-center">
            <h3 className="mb-6 text-2xl font-semibold">Entre em Contato</h3>
            <p className="mb-10 leading-relaxed text-text-secondary">
              Estou sempre aberto a networking, desafios ou apenas um bom bate-papo
              sobre dados e produtos. Sinta-se à vontade para me contatar!
            </p>
             <ContactItem icon={<FaEnvelope />} label="Email" value="sergiojunior.dms@gmail.com" link="mailto:sergiojunior.dms@gmail.com" />
             <ContactItem icon={<FaLinkedin />} label="LinkedIn" value="linkedin.com/in/ssergiojunior" link="https://linkedin.com/in/ssergiojunior" />
             <ContactItem icon={<FaMapMarkerAlt />} label="Localização" value="São Paulo, Brasil" />
          </div>

          {/* Formulário com AJAX e ESTILOS CORRIGIDOS */}
          <div className="contact-form-container animate-on-scroll slide-in-right delay-3">
            <h3 className="mb-6 text-2xl font-semibold md:text-left text-center">Envie uma Mensagem</h3>
            <form
                id="contact-form"
                className="contact-form flex flex-col gap-6" // Gap entre os form-groups
                onSubmit={handleSubmit}
            >
              {/* ===== ESTILOS APLICADOS AOS CAMPOS ===== */}
              <div className="form-group">
                <label htmlFor="name" className="form-label block mb-1.5 text-sm font-medium text-text-secondary">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    // Classes aplicadas
                    className="form-input w-full rounded-md border border-border-color bg-bg-primary py-3 px-4 text-text-primary transition duration-300 focus:border-accent focus:ring-2 focus:ring-accent/50 focus:outline-none"
                    placeholder="Seu nome completo"
                 />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label block mb-1.5 text-sm font-medium text-text-secondary">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    // Classes aplicadas
                    className="form-input w-full rounded-md border border-border-color bg-bg-primary py-3 px-4 text-text-primary transition duration-300 focus:border-accent focus:ring-2 focus:ring-accent/50 focus:outline-none"
                    placeholder="seu@email.com"
                 />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label block mb-1.5 text-sm font-medium text-text-secondary">Assunto</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    // Classes aplicadas
                    className="form-input w-full rounded-md border border-border-color bg-bg-primary py-3 px-4 text-text-primary transition duration-300 focus:border-accent focus:ring-2 focus:ring-accent/50 focus:outline-none"
                    placeholder="Ex: Oportunidade / Projeto"
                 />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label block mb-1.5 text-sm font-medium text-text-secondary">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    // Classes aplicadas + altura mínima
                    className="form-textarea w-full rounded-md border border-border-color bg-bg-primary py-3 px-4 text-text-primary transition duration-300 focus:border-accent focus:ring-2 focus:ring-accent/50 focus:outline-none min-h-[160px] resize-y"
                    rows="5"
                    placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>
              {/* ===== FIM DOS ESTILOS APLICADOS ===== */}

              {/* Botão e Mensagens de Status (sem alterações) */}
              <div className='flex flex-col items-start gap-4'>
                <button
                    type="submit"
                    className="btn submit-btn rounded-full bg-red-bright border border-red-bright py-3 px-8 font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-accent hover:border-accent hover:shadow-md hover:-translate-y-1.5 hover:shadow-glow-hover disabled:opacity-50 disabled:cursor-not-allowed md:self-start"
                    disabled={formStatus.submitting}
                  >
                   {formStatus.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>

                {formStatus.submitted && (
                    <p className="text-green-500 text-sm">Mensagem enviada com sucesso!</p>
                )}
                {formStatus.error && (
                     <p className="text-accent text-sm">Erro: {formStatus.error}</p>
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

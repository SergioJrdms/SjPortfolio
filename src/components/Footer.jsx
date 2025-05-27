import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Ícones

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // ===== MODIFICAÇÕES NA TAG FOOTER =====
    <footer
      className="mt-10 border-t border-accent/30 bg-gradient-to-b from-bg-secondary to-bg-primary py-16"
      // bg-gradient-to-b from-bg-secondary to-bg-primary: Novo fundo
      // border-accent/30: Borda superior com tom vermelho sutil
      // py-16: Padding vertical aumentado
    >
    {/* ===== FIM DAS MODIFICAÇÕES ===== */}
      <div className="container mx-auto px-6">
        <div className="footer-content flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="social-links flex gap-4"> {/* Ajustado gap para acomodar padding no link */}
            {/* ===== MODIFICAÇÕES NOS LINKS SOCIAIS ===== */}
            <a
              href="https://linkedin.com/in/ssergiojunior" // Use seu link correto
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group rounded-full p-2 text-2xl text-text-secondary transition-all duration-300 ease-in-out hover:bg-bg-card hover:shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="transition-colors duration-300 group-hover:text-accent group-hover:scale-110 group-hover:-translate-y-px" />
            </a>
            <a
              href="https://github.com/sergiiojunior" // Use seu link correto
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group rounded-full p-2 text-2xl text-text-secondary transition-all duration-300 ease-in-out hover:bg-bg-card hover:shadow-md"
              aria-label="GitHub"
            >
              <FaGithub className="transition-colors duration-300 group-hover:text-accent group-hover:scale-110 group-hover:-translate-y-px" />
            </a>
            {/* Adicione outros links sociais aqui seguindo o mesmo padrão */}
            {/* ===== FIM DAS MODIFICAÇÕES ===== */}
          </div>
          <div className="copyright text-sm text-text-secondary">
            &copy; {currentYear} Sergio Junior. Todos os direitos reservados.
            <p className="font-Corinthia text-red-600 font-black text-sm leading-none mt-1 cursor-default"> {/* Ajuste o tamanho e margem/padding conforme necessário */}
              Per Audacia Ad Astra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
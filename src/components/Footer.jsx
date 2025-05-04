import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Ícones

function Footer() {
  return (
    <footer className="mt-24 border-t border-border-color bg-bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="footer-content flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="social-links flex gap-6">
          <a href="https://www.linkedin.com/in/ssergiojunior/" target="_blank" rel="noopener noreferrer" className="social-link text-2xl text-text-secondary transition-all duration-300 hover:text-accent hover:scale-110 hover:-translate-y-1" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/SergioJrdms" target="_blank" rel="noopener noreferrer" className="social-link text-2xl text-text-secondary transition-all duration-300 hover:text-accent hover:scale-110 hover:-translate-y-1" aria-label="GitHub">
                <FaGithub />
            </a>
          </div>
          <div className="copyright text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Sergio Junior. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
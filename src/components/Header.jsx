import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Using react-icons

const NavLink = ({ href, children, isActive, delayClass, onClick }) => ( // Adicionado onClick
  <li className={`animate-on-scroll slide-in-right ${delayClass}`} onClick={onClick}> {/* Adicionado onClick */}
    <a
      href={href}
      className={`nav-link block py-2 relative text-text-primary font-medium transition-colors duration-300 hover:text-accent
                after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px]
                after:bg-accent after:transition-width after:duration-300 hover:after:w-full
                ${isActive ? 'text-accent after:w-full' : ''}`}
    >
      {children}
    </a>
  </li>
);

function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const navItems = [
    { href: '#home', label: 'Home', delay: 'delay-1' },
    { href: '#about', label: 'Sobre', delay: 'delay-2' },
    { href: '#experience', label: 'Experiência', delay: 'delay-3' },
    { href: '#clients', label: 'Clientes', delay: 'delay-4' },
    { href: '#what-i-do', label: 'O Que Faço?', delay: 'delay-5' },
    { href: '#contact', label: 'Contato', delay: 'delay-5' },
    { href: '/anotacoes', label: 'Anotações', delay: 'delay-5' }, 
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-in-out ${
        isScrolled || isMenuOpen // Adicionado isMenuOpen para manter o fundo quando o menu mobile estiver aberto
          ? 'bg-[rgba(18,18,18,0.85)] backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo e Lema */}
        {/* Envolver o logo e o lema em um div para garantir que fiquem juntos e o lema abaixo */}
        <div className="flex flex-col items-start"> {/* flex-col para empilhar, items-start para alinhar à esquerda */}
          <a 
            href="#home" 
            className="logo text-2xl font-bold text-text-primary transition-transform duration-300 hover:scale-105 animate-on-scroll fade-in"
            onClick={handleLinkClick} // Para fechar menu mobile se aberto e clicar no logo
          >
            Sergio<span className="text-accent">Junior</span>
          </a>
          {/* LEMA ADICIONADO AQUI */}
          <p className="font-Corinthia text-red-600 font-black text-sm leading-none -mt-0.5 cursor-default  transition-transform duration-300 animate-on-scroll fade-in"> {/* Ajuste o tamanho e margem/padding conforme necessário */}
            Per Audacia Ad Astra
          </p>
          {/* FIM DO LEMA */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex list-none space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={activeSection === item.href.substring(1)}
                delayClass={item.delay}
                onClick={handleLinkClick} // Passando handleLinkClick para NavLink no desktop também (boa prática)
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn md:hidden text-text-primary text-2xl z-[1001] p-1"
          id="mobile-menu-btn"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation Menu */}
        {/* Corrigido: A navegação mobile deve estar DENTRO do <header> mas fora do div do container principal se for para ocupar a largura toda */}
      </div>
      {/* Mover o menu mobile para fora do div do container para que possa ocupar a largura total se necessário */}
      <nav className={`md:hidden absolute top-full left-0 w-full bg-bg-secondary border-b border-border-color shadow-md transition-transform duration-300 ease-out ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul id="nav-menu" className="flex flex-col items-center py-4">
          {navItems.map((item) => (
            <li key={item.href} className="w-full text-center" onClick={handleLinkClick}> {/* handleLinkClick aqui também */}
              <a
                href={item.href}
                className={`nav-link block py-3 px-6 w-full transition-colors duration-300 hover:text-accent ${activeSection === item.href.substring(1) ? 'text-accent' : 'text-text-primary'}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
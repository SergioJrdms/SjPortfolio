import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavLink = ({ href, children, isActive, delayClass, onClick }) => (
  <li className={`animate-on-scroll slide-in-right ${delayClass} group`} onClick={onClick}> {/* Adicionado 'group' aqui */}
    <a
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`nav-link block py-2 px-1 relative text-text-primary font-semibold tracking-wider text-xs sm:text-sm 
                transition-all duration-300 ease-out hover:text-accent focus:text-accent focus:outline-none
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[3px]
                after:bg-accent after:rounded-full after:transition-all after:duration-300 after:ease-out
                ${isActive ? 'text-accent after:w-full' : 'hover:after:w-1/2'}`}
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

  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const navItems = [
    { href: '#home', label: 'Home', delay: 'delay-1' },
    { href: '#about', label: 'Sobre', delay: 'delay-2' },
    { href: '#my-philosophy', label: 'Pilares de Valor', delay: 'delay-3' },
    { href: '#experience', label: 'Experiência', delay: 'delay-4' },
    { href: '#clients', label: 'Clientes', delay: 'delay-5' },
    { href: '#what-i-do', label: 'O Que Faço?', delay: 'delay-6' },
    { href: '#contact', label: 'Contato', delay: 'delay-6' },
    { href: '/anotacoes', label: 'Anotações', delay: 'delay-6' }, // Mantendo seu link
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-in-out ${
        isScrolled || isMenuOpen
          ? 'bg-[rgba(18,18,18,0.9)] backdrop-blur-lg shadow-xl py-3 sm:py-4'
          : 'bg-transparent py-5 sm:py-6'
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
                onClick={handleLinkClick} 
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
      </div>

      {/* Menu Mobile - posicionado abaixo do header principal */}
      <nav className={`md:hidden absolute top-full left-0 w-full bg-bg-secondary border-b-2 border-accent shadow-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <ul id="nav-menu" className="flex flex-col items-center py-4">
          {navItems.map((item) => (
            <li key={item.href} className="w-full text-center">
              <a
                href={item.href}
                aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
                className={`nav-link block py-3 px-6 w-full font-medium tracking-wide transition-all duration-300 ease-out hover:text-accent hover:bg-white/5 ${activeSection === item.href.substring(1) ? 'text-accent bg-white/10' : 'text-text-primary'}`}
                onClick={handleLinkClick}
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
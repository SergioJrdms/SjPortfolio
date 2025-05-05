import React, { useState, useEffect, useRef } from 'react'; // Adicionados hooks para scrollspy se necessário aqui
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // Verifique o caminho do import
import Footer from '../components/Footer'; // Verifique o caminho do import

const PortfolioLayout = () => {
  // Você pode mover a lógica de estado e useEffect do scrollspy
  // que estava no App.jsx antigo para cá, se quiser que o Header
  // continue destacando a seção ativa na página principal.
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});

   // Exemplo simplificado do useEffect (adapte o do App.jsx anterior)
   useEffect(() => {
      // Lógica para observar seções DENTRO do <Outlet/> e atualizar activeSection
      // Esta parte é mais complexa de fazer funcionar perfeitamente com Outlet
      // Alternativa mais simples: Deixar o scrollspy apenas na PaginaPrincipalPortfolio
      console.log("Layout montado, scrollspy pode ser iniciado aqui se necessário.");
   }, []);


  return (
    <>
      {/* Passa a seção ativa para o Header */}
      <main>
        {/* Outlet renderiza o componente da rota atual (ex: PaginaPrincipalPortfolio) */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioLayout;
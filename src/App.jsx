// src/App.jsx - CORRIGIDO (SEM <Router> aqui dentro)
import React from 'react';
// NÃO importe BrowserRouter ou Router aqui
import { Routes, Route } from 'react-router-dom';

import PortfolioLayout from './layouts/PortfolioLayout';
import PaginaPrincipalPortfolio from './pages/PaginaPrincipalPortfolio';
import PaginaListaNotas from './pages/PaginaListaNotas';
import PaginaNotaIndividual from './pages/PaginaNotaIndividual';

function App() {
  return (
    // Começa direto com Routes ou outros elementos, SEM <Router>
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route index element={<PaginaPrincipalPortfolio />} />
        <Route path="anotacoes" element={<PaginaListaNotas />} />
        <Route path="anotacoes/*" element={<PaginaNotaIndividual />} />
        <Route path="*" element={<div className='container mx-auto text-center py-40'>Página não encontrada (Erro 404)</div>} />
      </Route>
    </Routes>
  );
}

export default App;
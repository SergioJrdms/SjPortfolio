// src/index.js (ou main.jsx) - CORRIGIDO

// 1. Todos os imports primeiro:
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Buffer } from 'buffer'; // Import do Buffer continua aqui
import App from './App.jsx';
import './index.css';

// 2. Código executável (atribuição global) DEPOIS dos imports:
window.Buffer = Buffer; // <-- MOVIDO PARA DEPOIS DOS IMPORTS

// 3. Código principal da aplicação:
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
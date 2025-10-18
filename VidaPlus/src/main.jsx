import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css";

// Configurando o router
import {
  createBrowserRouter,  // Corrigido aqui
  RouterProvider
} from 'react-router-dom'

import LoginUsuario from "./pages/LoginUsuario"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Agenda from './pages/Agenda';
import HistoricoConsultas from './pages/HistoricoConsultas';
import HistoricoTratamentos from './pages/HistoricoTratamentos';
import Resultados from './pages/Resultados';
import Teleconsulta from './pages/Teleconsulta';
import Contato from './pages/Contato';
import HomeAdmin from './pages/HomeAdmin';
import GestaoPacientes from './pages/GestaoPacientes';
import Prontuario from './pages/Prontuario';
import GestaoProfissionais from './pages/GestaoProfissionais';
import GestaoInternacoes from './pages/GestaoInternacoes.jsx'
import GestaoAgenda from './pages/GestaoAgenda.jsx';
import GestaoEstoque from './pages/GestaoEstoque.jsx';

const router = createBrowserRouter([

  /* Rotas Usuários */
  {
    path: "/",
    element: <LoginUsuario />
  },
  {
    path: "/cadastro",  
    element: <Cadastro />
  },
  {
    path: "/home",  
    element: <Home />
  },
  {
    path: "/agenda",  
    element: <Agenda />
  },
  {
    path: "/historico-consultas",  
    element: <HistoricoConsultas />
  },
  {
    path: "/historico-tratamentos",  
    element: <HistoricoTratamentos />
  },
  {
    path: "/resultados",  
    element: <Resultados />
  },
  {
    path: "/teleconsulta",  
    element: <Teleconsulta />
  },
  {
    path: "/contato",  
    element: <Contato />
  },

  /* Rotas Admin */
  {
    path: "/home-admin",  
    element: <HomeAdmin />
  },
  {
    path: "/gestao-pacientes",  
    element: <GestaoPacientes />
  },
  {
    path: "/prontuario/:id",  
    element: <Prontuario />
  },
  {
    path: "/gestao-profissionais",  
    element: <GestaoProfissionais />
  },
  {
    path: "/gestao-internacoes",  
    element: <GestaoInternacoes />
  },
  {
    path: "/gestao-agenda",  
    element: <GestaoAgenda />
  },
  {
    path: "/gestao-estoque",  
    element: <GestaoEstoque/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)

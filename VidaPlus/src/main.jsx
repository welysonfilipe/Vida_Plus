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

const router = createBrowserRouter([
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
   {
    path: "/home-admin",  
    element: <HomeAdmin />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)

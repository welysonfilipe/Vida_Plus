import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./NavBarAdmin.css";

const NavBarAdmin = () => {
  const navigate = useNavigate();
  const [gestaoOpen, setGestaoOpen] = useState(false);
  const [relatoriosOpen, setRelatoriosOpen] = useState(false);

  return (
    <nav className='navbar-page'>
      <h2 className='title-page'>Vida Plus</h2>

      <div className="navbar-link">
        <Link to="/home-admin">Home</Link>
        
        {/* Dropdown Gestão */}
        <div 
          className="navbar-dropdown"
          onMouseEnter={() => setGestaoOpen(true)}
          onMouseLeave={() => setGestaoOpen(false)}
        >
          <span className="dropdown-trigger">
            Gestão ▾
          </span>
          {gestaoOpen && (
            <div className="dropdown-menu">
              <Link to="/gestao-pacientes" className="dropdown-item">
                👥 Pacientes
              </Link>
              <Link to="/gestao-profissionais" className="dropdown-item">
                👨‍⚕️ Profissionais
              </Link>
              <Link to="/gestao-internacoes" className="dropdown-item">
                🏥 Internações
              </Link>
              <Link to="/gestao-agenda" className="dropdown-item">
                📅 Agenda
              </Link>
            </div>
          )}
        </div>

        {/* Dropdown Relatórios */}
        <div 
          className="navbar-dropdown"
          onMouseEnter={() => setRelatoriosOpen(true)}
          onMouseLeave={() => setRelatoriosOpen(false)}
        >
          <span className="dropdown-trigger">
            Relatórios ▾
          </span>
          {relatoriosOpen && (
            <div className="dropdown-menu">
              <Link to="/relatorios-atendimentos" className="dropdown-item">
                📊 Atendimentos
              </Link>
              <Link to="/relatorios-financeiro" className="dropdown-item">
                💰 Financeiro
              </Link>
              <Link to="/relatorios-estoque" className="dropdown-item">
                📦 Estoque
              </Link>
            </div>
          )}
        </div>

        <Link 
          to="/" 
          className="link-sair"
          onClick={() => {
            // Aqui você pode adicionar lógica de logout
            console.log("Saindo do sistema admin...");
          }}
        >
          Sair
        </Link>
      </div>
    </nav>
  );
};

export default NavBarAdmin;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./NavBarAdmin.css";

const NavBarAdmin = () => {
  const navigate = useNavigate();
  const [gestaoOpen, setGestaoOpen] = useState(false);
  const [relatoriosOpen, setRelatoriosOpen] = useState(false);

  const toggleGestao = () => {
    setGestaoOpen(!gestaoOpen);
    setRelatoriosOpen(false); // Fecha o outro dropdown
  };

  const toggleRelatorios = () => {
    setRelatoriosOpen(!relatoriosOpen);
    setGestaoOpen(false); // Fecha o outro dropdown
  };

  const closeDropdowns = () => {
    setGestaoOpen(false);
    setRelatoriosOpen(false);
  };

  return (
    <nav className='navbar-page'>
      <h2 className='title-page'>Vida Plus</h2>

      <div className="navbar-link">
        <Link to="/dashboard-admin" onClick={closeDropdowns}>Home</Link>
        
        {/* Dropdown Gestão */}
        <div className="navbar-dropdown">
          <span 
            className="dropdown-trigger"
            onClick={toggleGestao}
          >
            Gestão ▾
          </span>
          {gestaoOpen && (
            <div className="dropdown-menu">
              <Link to="/gestao-pacientes" className="dropdown-item" onClick={closeDropdowns}>
                👥 Pacientes
              </Link>
              <Link to="/gestao-profissionais" className="dropdown-item" onClick={closeDropdowns}>
                👨‍⚕️ Profissionais
              </Link>
              <Link to="/gestao-internacoes" className="dropdown-item" onClick={closeDropdowns}>
                🏥 Internações
              </Link>
              <Link to="/gestao-agenda" className="dropdown-item" onClick={closeDropdowns}>
                📅 Agenda
              </Link>
            </div>
          )}
        </div>

        {/* Dropdown Relatórios */}
        <div className="navbar-dropdown">
          <span 
            className="dropdown-trigger"
            onClick={toggleRelatorios}
          >
            Relatórios ▾
          </span>
          {relatoriosOpen && (
            <div className="dropdown-menu">
              <Link to="/relatorios-atendimentos" className="dropdown-item" onClick={closeDropdowns}>
                📊 Atendimentos
              </Link>
              <Link to="/relatorios-financeiro" className="dropdown-item" onClick={closeDropdowns}>
                💰 Financeiro
              </Link>
              <Link to="/relatorios-estoque" className="dropdown-item" onClick={closeDropdowns}>
                📦 Estoque
              </Link>
            </div>
          )}
        </div>

        <Link 
          to="/" 
          className="link-sair"
          onClick={() => {
            closeDropdowns();
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
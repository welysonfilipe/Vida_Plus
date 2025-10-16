import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GestaoPacientes.css";
import NavBarAdmin from "../components/NavBarAdmin";
import Table from "../components/Table";
import Button from "../components/Button";
import metricasData from "../data/metricasData.json";
import pacientesData from "../data/pacientesData.json";

const GestaoPacientes = () => {
  const navigate = useNavigate();

  const metricas = metricasData.metricas;
  const pacientes = pacientesData.pacientes;

  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("");

  const pacientesFiltrados = pacientes.filter(p => {
    const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase());
    const matchStatus = statusFiltro === "" || p.status === statusFiltro;
    return matchBusca && matchStatus;
  });

  const handleRowClick = (paciente) => {
    navigate(`/prontuario/${paciente.id}`);
  };

  return (
    <div className="gestao-pacientes-container">
      <NavBarAdmin />
      
      <div className="gestao-content">
        <div className="gestao-header">
          <h1>Gestão de Pacientes</h1>
          <Button 
            text="+ Novo Paciente"
            onClick={() => navigate('/cadastro')}
            className="button-novo"
          />
        </div>

        {/* Cards de Métricas */}
        <div className="metricas-grid">
          {metricas.map(metrica => (
            <div key={metrica.id} className="metrica-card" style={{ borderTopColor: metrica.cor }}>
              <div className="metrica-icon" style={{ color: metrica.cor }}>
                {metrica.icone}
              </div>
              <div className="metrica-info">
                <h3>{metrica.valor}</h3>
                <p>{metrica.titulo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filtros */}
        <div className="filtros-section">
          <div className="filtro-busca">
            <input
              type="text"
              placeholder="🔍 Buscar paciente por nome..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div className="filtro-status">
            <select value={statusFiltro} onChange={(e) => setStatusFiltro(e.target.value)}>
              <option value="">Todos os Status</option>
              <option value="Ativo">Ativo</option>
              <option value="Em Tratamento">Em Tratamento</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
        </div>

        {/* Tabela de Pacientes */}
        <div className="tabela-wrapper">
          <table className="pacientes-table">
            <thead>
              <tr>
                <th>Nome do Paciente</th>
                <th>Última Consulta</th>
                <th>Sintomas/Motivo</th>
                <th>Médico Responsável</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pacientesFiltrados.map(paciente => (
                <tr 
                  key={paciente.id} 
                  onClick={() => handleRowClick(paciente)}
                  className="clickable-row"
                >
                  <td className="nome-cell">{paciente.nome}</td>
                  <td>{paciente.ultimaConsulta}</td>
                  <td>{paciente.sintomas}</td>
                  <td>{paciente.medicoResponsavel}</td>
                  <td>
                    <span className={`status-badge status-${paciente.status.toLowerCase().replace(' ', '-')}`}>
                      {paciente.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GestaoPacientes;
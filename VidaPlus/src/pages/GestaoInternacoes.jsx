import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GestaoInternacoes.css";
import NavBarAdmin from "../components/NavBarAdmin";
import Button from "../components/Button";
import internacoesData from "../data/internacoesData.json";

const GestaoInternacoes = () => {
  const navigate = useNavigate();

  // Arquivos Json na pasta data
  const metricas = internacoesData.metricas;
  const internacoes = internacoesData.internacoes;

  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("");

  // Função de pesquisa
  const internacoesFiltradas = internacoes.filter(i => {
    const matchBusca = i.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       i.id.toLowerCase().includes(busca.toLowerCase());
    const matchStatus = statusFiltro === "" || i.status === statusFiltro;
    return matchBusca && matchStatus;
  });

  {/* Container página */}
  return (
    <div className="gestao-internacoes-container">
      <NavBarAdmin />
      
      <div className="gestao-content">
        <div className="gestao-header">
          <h1>Gestão de Internações</h1>
          <Button 
            text="+ Nova Internação"
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
              placeholder="🔍 Buscar por nome ou ID do paciente..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div className="filtro-status">
            <select value={statusFiltro} onChange={(e) => setStatusFiltro(e.target.value)}>
              <option value="">Todos os Status</option>
              <option value="Internado">Internado</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
        </div>

        {/* Tabela de Internações */}
        <div className="tabela-wrapper">
          <table className="internacoes-table">
            <thead>
              <tr>
                <th>ID Paciente</th>
                <th>Nome</th>
                <th>Motivo</th>
                <th>Data Internação</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {internacoesFiltradas.map(internacao => (
                <tr key={internacao.id}>
                  <td className="id-cell">{internacao.id}</td>
                  <td className="nome-cell">{internacao.nome}</td>
                  <td>{internacao.motivo}</td>
                  <td>{internacao.dataInternacao}</td>
                  <td>
                    <span className={`status-badge status-${internacao.status.toLowerCase()}`}>
                      {internacao.status}
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

export default GestaoInternacoes;
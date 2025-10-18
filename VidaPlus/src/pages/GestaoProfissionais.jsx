import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GestaoProfissionais.css";
import NavBarAdmin from "../components/NavBarAdmin";
import Button from "../components/Button";
import profissionaisData from "../data/profissionaisData.json";

const GestaoProfissionais = () => {
  const navigate = useNavigate();

  // Arquivos Json da pasta "data"
  const metricas = profissionaisData.metricas;
  const profissionais = profissionaisData.profissionais;

  const [busca, setBusca] = useState("");
  const [cargoFiltro, setCargoFiltro] = useState("");

  const profissionaisFiltrados = profissionais.filter(p => {
    const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase());
    const matchCargo = cargoFiltro === "" || p.cargo.toLowerCase().includes(cargoFiltro.toLowerCase());
    return matchBusca && matchCargo;
  });

  {/* Container página */}
  return (
    <div className="gestao-profissionais-container">
      <NavBarAdmin />
      
      <div className="gestao-content">
        <div className="gestao-header">
          <h1>Gestão de Profissionais</h1>
          <Button 
            text="+ Novo Profissional"
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
              placeholder="🔍 Buscar profissional por nome..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div className="filtro-cargo">
            <select value={cargoFiltro} onChange={(e) => setCargoFiltro(e.target.value)}>
              <option value="">Todos os Cargos</option>
              <option value="cardiologista">Cardiologista</option>
              <option value="pediatra">Pediatra</option>
              <option value="ortopedista">Ortopedista</option>
              <option value="neurologista">Neurologista</option>
              <option value="enfermeiro">Enfermeiro(a)</option>
            </select>
          </div>
        </div>

        {/* Tabela de Profissionais */}
        <div className="tabela-wrapper">
          <table className="profissionais-table">
            <thead>
              <tr>
                <th>ID Funcionário</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {profissionaisFiltrados.map(profissional => (
                <tr key={profissional.id}>
                  <td className="id-cell">{profissional.id}</td>
                  <td className="nome-cell">{profissional.nome}</td>
                  <td>{profissional.cargo}</td>
                  <td>
                    <span className={`status-badge status-${profissional.status.toLowerCase()}`}>
                      {profissional.status}
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

export default GestaoProfissionais;
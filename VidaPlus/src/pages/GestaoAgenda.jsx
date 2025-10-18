import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GestaoAgenda.css";
import NavBarAdmin from "../components/NavBarAdmin";
import Button from "../components/Button";
import agendaData from "../data/agendaData.json";

const GestaoAgenda = () => {
  const navigate = useNavigate();

  // Arquivos Json na pasta data
  const metricas = agendaData.metricas;
  const consultas = agendaData.consultas;

  const [busca, setBusca] = useState("");
  const [dataFiltro, setDataFiltro] = useState("");

  // Função de pesquisa
  const consultasFiltradas = consultas.filter(c => {
    const matchBusca = c.nomePaciente.toLowerCase().includes(busca.toLowerCase());
    const matchData = dataFiltro === "" || c.dataConsulta === dataFiltro;
    return matchBusca && matchData;
  });

  {/* Container página */}
  return (
    <div className="gestao-agenda-container">
      <NavBarAdmin />
      
      <div className="gestao-content">
        <div className="gestao-header">
          <h1>Gestão de Agenda</h1>
          <Button 
            text="+ Novo Agendamento"
            onClick={() => {}}
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
          <div className="filtro-data">
            <input
              type="date"
              value={dataFiltro}
              onChange={(e) => setDataFiltro(e.target.value)}
              placeholder="Filtrar por data"
            />
          </div>
        </div>

        {/* Tabela de Agenda */}
        <div className="tabela-wrapper">
          <table className="agenda-table">
            <thead>
              <tr>
                <th>Nome Paciente</th>
                <th>Data Consulta</th>
                <th>Convênio Médico</th>
                <th>Médico Responsável</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {consultasFiltradas.map(consulta => (
                <tr key={consulta.id}>
                  <td className="nome-cell">{consulta.nomePaciente}</td>
                  <td>{consulta.dataConsulta}</td>
                  <td>{consulta.convenioMedico}</td>
                  <td>{consulta.medicoResponsavel}</td>
                  <td>
                    <button className="btn-desmarcar" onClick={() => {}}>
                      Desmarcar Consulta
                    </button>
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

export default GestaoAgenda;
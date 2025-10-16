import { useParams, useNavigate } from "react-router-dom";
import "./Prontuario.css";
import NavBarAdmin from "../components/NavBarAdmin";
import Button from "../components/Button";
import historicoData from "../data/historicoData.json"

const Prontuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dados mockados do paciente (em produção viria de uma API)
  const paciente = {
    id: id,
    nome: "Welyson Filipe de Oliveira",
    idade: 27,
    dataNascimento: "22/10/1997",
    cidade: "São Paulo - SP",
    convenio: "Unimed",
    cpf: "123.456.789-00",
    telefone: "(11) 98765-4321",
    email: "welyson.oliveira@email.com"
  };

  const historicoConsultas = historicoData.historicoConsultas

  return (
    <div className="prontuario-container">
      <NavBarAdmin />
      
      <div className="prontuario-content">
        <div className="prontuario-header">
          <Button 
            text="← Voltar"
            onClick={() => navigate('/gestao-pacientes')}
            className="button-voltar"
          />
          <h1>Prontuário do Paciente</h1>
        </div>

        {/* Dados do Paciente */}
        <div className="prontuario-card">
          <h2>Dados Pessoais</h2>
          <div className="dados-grid">
            <div className="dado-item">
              <span className="dado-label">Nome:</span>
              <span className="dado-valor">{paciente.nome}</span>
            </div>
            <div className="dado-item">
              <span className="dado-label">Idade:</span>
              <span className="dado-valor">{paciente.idade} anos</span>
            </div>
            <div className="dado-item">
              <span className="dado-label">Data de Nascimento:</span>
              <span className="dado-valor">{paciente.dataNascimento}</span>
            </div>
            <div className="dado-item">
              <span className="dado-label">CPF:</span>
              <span className="dado-valor">{paciente.cpf}</span>
            </div>
            <div className="dado-item">
              <span className="dado-label">Cidade:</span>
              <span className="dado-valor">{paciente.cidade}</span>
            </div>
            <div className="dado-item">
              <span className="dado-label">Convênio:</span>
              <span className="dado-valor">{paciente.convenio}</span>
            </div>
            <div className="dado-item">
              <span className="dado-label">Telefone:</span>
              <span className="dado-valor">{paciente.telefone}</span>
            </div>
            <div className="dado-item">
              <span className="dado-label">E-mail:</span>
              <span className="dado-valor">{paciente.email}</span>
            </div>
          </div>
        </div>

        {/* Histórico de Consultas */}
        <div className="prontuario-card">
          <h2>Histórico de Consultas</h2>
          <div className="consultas-list">
            {historicoConsultas.map(consulta => (
              <div key={consulta.id} className="consulta-item">
                <div className="consulta-header">
                  <div className="consulta-data">
                    <span className="data-icon">📅</span>
                    {consulta.data}
                  </div>
                  <div className="consulta-medico">
                    <span className="medico-icon">👨‍⚕️</span>
                    {consulta.medico} - {consulta.especialidade}
                  </div>
                </div>
                <div className="consulta-detalhes">
                  <div className="detalhe-row">
                    <strong>Sintomas:</strong> {consulta.sintomas}
                  </div>
                  <div className="detalhe-row">
                    <strong>Diagnóstico:</strong> {consulta.diagnostico}
                  </div>
                  <div className="detalhe-row">
                    <strong>Prescrição:</strong> {consulta.prescricao}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prontuario;
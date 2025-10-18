import { useState } from "react";
import "./Contato.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  {/* Criação da mensagem de alerta ao enviar o formulário */}
  const handleEnviar = () => {
    console.log("Mensagem enviada:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: ""
    });
  };

  {/* Container página */}
  return (
    <div className="contato-page">
      <NavBar />
      
      <div className="contato-container">
        <div className="contato-content">
          <div className="contato-header">
            <h1>Entre em Contato</h1>
            <p className="contato-descricao">
              Tem alguma dúvida ou precisa de ajuda? Envie sua mensagem e nossa equipe responderá o mais rápido possível.
            </p>
          </div>

          <div className="contato-form">
            <div className="form-row">
              <div className="form-group">
                <label>Nome completo:</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="form-group">
                <label>E-mail:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@email.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Telefone:</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(XX)XXXXX-XXXX"
                />
              </div>

              {/* Lista suspensa de assuntos mensagens */}
              <div className="form-group">
                <label>Assunto:</label>
                <select
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida</option>
                  <option value="agendamento">Agendamento</option>
                  <option value="suporte">Suporte Técnico</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Mensagem:</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Digite sua mensagem aqui..."
                rows="8"
              />
            </div>

            {/* Implementação do componente Button */}
            <div className="form-actions">
              <Button
                text="Enviar Mensagem"
                onClick={handleEnviar}
                className="button-enviar"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contato;
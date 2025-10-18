import { useNavigate } from "react-router-dom";
import "./Home.css";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <NavBar />
      
      <div className="home-content">
        {/* Sidebar */}
        <aside className="sidebar">
         <Sidebar />
        </aside>

        {/* Conteúdo Principal */}
        <main className="main-content">
          <div className="header-section">
            <h1>Paciente</h1>
            <Button
              text="Editar" 
              className="button-edit"
            />
          </div>

          {/* Card de Dados de Identificação */}
          <div className="info-card">
            <h3 className="card-title">Dados de Identificação</h3>
            
            <div className="form-grid">
              {/* Linha 1 */}
              <div className="form-field">
                <label>Nome:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>CPF:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Dt Nasc:</label>
                <input type="date"  />
              </div>
              <div className="form-field">
                <label>Idade:</label>
                <input type="text"  />
              </div>

              {/* Linha 2 */}
              <div className="form-field">
                <label>Sexo:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Estado Civil:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Profissão</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Dt Cadastro:</label>
                <input type="date"  />
              </div>

              {/* Linha 3 */}
              <div className="form-field">
                <label>Naturalidade:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Nome da mãe:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Convênio:</label>
                <input type="text"  />
              </div>
            </div>
          </div>

          {/* Card de Dados de Contato */}
          <div className="info-card">
            <h3 className="card-title">Dados de Contato</h3>
            
            <div className="form-grid">
              {/* Linha 1 */}
              <div className="form-field">
                <label>Celular:</label>
                <input type="tel"  />
              </div>
              <div className="form-field">
                <label>WhatsApp:</label>
                <input type="tel"  />
              </div>
              <div className="form-field">
                <label>Telefone:</label>
                <input type="tel"  />
              </div>
              <div className="form-field">
                <label>E-mail</label>
                <input type="email"  />
              </div>

              {/* Linha 2 */}
              <div className="form-field">
                <label>CEP:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Endereço:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Número:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Bairro:</label>
                <input type="text"  />
              </div>

              {/* Linha 3 */}
              <div className="form-field">
                <label>Complemento:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>Cidade:</label>
                <input type="text"  />
              </div>
              <div className="form-field">
                <label>País:</label>
                <input type="text"  />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

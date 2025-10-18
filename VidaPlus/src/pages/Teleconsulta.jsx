import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';
import "./Teleconsulta.css";

const Teleconsulta = () => {

  {/* Container página */}
  return (
    <div className="teleconsulta-container">
      <NavBar />
      
      <div className="teleconsulta-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <Sidebar />
        </aside>

        {/* Conteúdo Principal */}
        <main className="main-content">
          <h1>Teleconsulta</h1>
          
          <div className="instrucoes-section">
            <h3 className="sub-title">Como realizar sua Teleconsulta:</h3>
            
            <ol className="list">
              <li>
                <strong>Acesse no horário agendado:</strong> entre na plataforma no dia e hora marcados para o seu atendimento.
              </li>
              <li>
                <strong>Ative câmera e microfone:</strong> eles são essenciais para o médico realizar a avaliação corretamente.
              </li>
              <li>
                <strong>Escolha um ambiente adequado:</strong> fique em um local silencioso, bem iluminado e com boa conexão à internet.
              </li>
              <li>
                <strong>Durante a consulta:</strong> converse com o profissional, descreva seus sintomas e tire suas dúvidas.
              </li>
              <li>
                <strong>Após o atendimento:</strong> caso necessário, o médico poderá emitir receitas ou encaminhamentos diretamente pelo sistema.
              </li>
            </ol>

            {/* Implementação do componente Button */}
             <div className="button-section">
            <Button 
              text="Iniciar"
              className="button-iniciar"
            />
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Teleconsulta;
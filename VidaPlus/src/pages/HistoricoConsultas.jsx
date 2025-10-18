import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import consultasData from "../data/consultasData.json"
import "./HistoricoConsultas.css"

const HistoricoConsultas = () => {

  const consultas = consultasData.consultas;

  {/* Container página */}
  return (
    <div className="home-container">
      <NavBar />
      
      <div className="home-content">
        {/* Sidebar */}
        <aside className="sidebar">
         <Sidebar />
        </aside>

      {/*Conteúdo Principal*/}
      <main className='main-content'>
        <div className='header-section'>
          <div>
              <h1>Histórico de Consultas</h1>
              <div className="info-section">
                <h3><span>Paciente:</span> Welyson Filipe</h3>
                <h3><span>Convênio:</span> Unimed</h3>
              </div>
          </div>
        </div>

        {/* Implementação do componente Table */}
        <Table 
        headers={["Data", "Especialista", "Dados da Consulta"]}
        data={consultas}
        columns="150px 200px 1fr"/>
       </main>

      </div>
   </div>
  )
}

export default HistoricoConsultas

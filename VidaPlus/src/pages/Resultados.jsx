import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import resultadosData from "../data/resultadosData.json"
import "./Resultados.css"

const Resultados = () => {

  const resultados = resultadosData.resultados;

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
              <h1>Resultados de Exames</h1>
              <div className="info-section">
                <h3><span>Paciente:</span> Welyson Filipe</h3>
                <h3><span>Convênio:</span> Unimed</h3>
              </div>
          </div>
        </div>

        {/* Implementação do componente Table */}
        <Table 
        headers={["Data", "Solicitante", "Exames Realizado"]}
        data={resultados}
        columns="150px 200px 1fr"/>
       </main>

      </div>
   </div>
  )
}

export default Resultados

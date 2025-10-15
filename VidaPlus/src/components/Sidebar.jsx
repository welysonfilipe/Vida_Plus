import { useNavigate } from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <button to='/agenda' className="sidebar-item active">Agendar</button>
            <button to='/resultados' className="sidebar-item">Resultado de Exames</button>
            <button to='/historico-consultas' className="sidebar-item">Histórico de Consultas</button>
            <button to='/historico-tratamentos' className="sidebar-item">Histórico de Tratamentos</button>
            <button to='/teleconsulta'className="sidebar-item" >Teleconsulta</button>
        </div>
  )
}

export default Sidebar

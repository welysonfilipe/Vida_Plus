import {useNavigate } from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <div className='sidebar'>
            <button onClick={() => navigate('/agenda')} className="sidebar-item active">Agendar Consulta</button>
            <button onClick={() => navigate('/historico-consultas')} className="sidebar-item">Histórico de Consultas</button>
            <button onClick={() => navigate('/historico-tratamentos')} className="sidebar-item">Histórico de Tratamentos</button>
            <button onClick={() => navigate('/resultados')} className="sidebar-item">Resultado de Exames</button>
            <button onClick={() => navigate('/teleconsulta')} className="sidebar-item" >Teleconsulta</button>
        </div>
  )
}

export default Sidebar

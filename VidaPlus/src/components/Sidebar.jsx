import { useState } from "react"
import {useNavigate } from "react-router-dom"
import { Menu, X } from 'lucide-react'
import "./sidebar.css"

const Sidebar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
      {/* Botão Hambúrguer - Visível apenas em mobile */}
      <button 
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay - Fecha sidebar ao clicar fora */}
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}

        <div className='sidebar'>
            <button onClick={() => navigate('/agenda')} className="sidebar-item active">Agendar Consulta</button>
            <button onClick={() => navigate('/historico-consultas')} className="sidebar-item">Histórico de Consultas</button>
            <button onClick={() => navigate('/historico-tratamentos')} className="sidebar-item">Histórico de Tratamentos</button>
            <button onClick={() => navigate('/resultados')} className="sidebar-item">Resultado de Exames</button>
            <button onClick={() => navigate('/teleconsulta')} className="sidebar-item" >Teleconsulta</button>
        </div>
    </>
  )
}

export default Sidebar

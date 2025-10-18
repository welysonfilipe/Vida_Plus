import { useState } from "react";
import moment from "moment";
import "./Agenda.css";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import PopUp from "../components/PopUp";
import CalendarComp from "../components/CalendarComp";
import AgendamentoForm from "../components/AgendamentoForm";
import especialidades from "../data/especialidades.json";

const Agenda = () => {
  const [events, setEvents] = useState([]);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [tipoConsulta, setTipoConsulta] = useState("presencial");
  
  const [formData, setFormData] = useState({
    data: "",
    horario: "",
    especialidade: "",
    medico: ""
  });

  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setFormData({
      ...formData,
      data: moment(slotInfo.start).format("DD/MM/YYYY")
    });
    setPopUpOpen(true);
  };

  const handleAgendarConsulta = () => {
    const newEvent = {
      title: `${formData.especialidade || "Consulta"} - ${formData.medico || "Médico"}`,
      start: selectedDate,
      end: selectedDate,
      allDay: false
    };

    setEvents([...events, newEvent]);
    setPopUpOpen(false);
    setFormData({
      data: "",
      horario: "",
      especialidade: "",
      medico: ""
    });
  };

  {/* Container página */}
  return (
    <div className="home-container">
      <NavBar />
      
      <div className="home-content">
        <aside className="sidebar">
          <Sidebar />
        </aside>

        <main className="main-content">
          <h1>Agendar Consulta</h1>

          <div className="tipo-consulta">
            <label className="tipo-label">Tipo de Consulta</label>
            {/* Checkbox utilizado para escolha da forma da consulta */}
            <div className="checkbox-group">
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={tipoConsulta === "presencial"}
                  onChange={() => setTipoConsulta("presencial")}
                />
                Presencial
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={tipoConsulta === "teleconsulta"}
                  onChange={() => setTipoConsulta("teleconsulta")}
                />
                Teleconsulta
              </label>
            </div>
            <p className="info-text">Selecione o dia e o horário da sua consulta</p>
          </div>

          {/* Implementação do componente CalendarComp */}
          <CalendarComp
            events={events}
            onSelectSlot={handleSelectSlot}
          />
        </main>
      </div>

      {/* Implementação do componente PopUp */}
      <PopUp
        isOpen={popUpOpen}
        onClose={() => setPopUpOpen(false)}
        title="Marque a sua consulta"
      >
        <AgendamentoForm
          formData={formData}
          setFormData={setFormData}
          especialidades={especialidades.especialidades}
          onSubmit={handleAgendarConsulta}
        />
      </PopUp>
    </div>
  );
};

export default Agenda;
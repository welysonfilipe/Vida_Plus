import { useState } from "react";
import "./LoginUsuario.css";
import Forms from "../components/Forms"
import { useNavigate } from 'react-router-dom'


import Logo from "../assets/saude_branco.png";
import LogoIcon from "../assets/saude.png";
import Button from "../components/Button";

const login = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState("login")
  const [perfil, setPerfil] = useState("paciente")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (mode === "login") {
      // Redireciona com base no tipo de usuário
      if(perfil === "paciente") {
        navigate('/home')
      } else {
        navigate('/home-admin')
      }
    } else {
      navigate('/cadastro')
    }
  }

  {/* Container página */}
  return (
    <div className="container">
        {/* Lado esquerdo */}
        <div className="left-side">
            <div className="logo"><img src={Logo} alt="logo site" /></div>
            <h1>Saúde na palma das suas mãos</h1>
            <p>Conecte-se com profissionais de saúde e tenha atendimento onde e quando quiser</p>
        </div>

        {/* Lado direito */}
        <div className="right-side">
          <div className="LogoIcon"><img src={LogoIcon} alt="Icon da logo" />
          <h2 className="Logo-Text">Vida <span className="Logo-Text-2">Plus</span></h2>
          </div>
          
          <div className="form-area">
          <p className="paragraph">{mode === "login" ? "Utilize o seu e-mail e senha cadastrada para efetuar login": "Preencha os campos abaixo para criar sua conta"}</p>


          {/* Checkbox utilizado para ajustar as rotas corretas entre usuário e admin */}
          {mode === "login" && (
            <div className="perfil-selector">
            <label>
              <input
                type="radio"
                value="paciente"
                checked={perfil === "paciente"}
                onChange={() => setPerfil("paciente")}
              />
              Paciente
            </label>
            <label>
              <input
                type="radio"
                value="admin"
                checked={perfil === "admin"}
                onChange={() => setPerfil("admin")}
              />
              Administrador
            </label>
          </div>
        )}


          {/* Utilização do components forms para área de login da página */}
          <Forms mode={mode} />

          <Button text={mode === "login" ? "Acessar Conta" : "Criar Conta"} 
            type="submit"
            onClick={handleSubmit}
          />
          {/* Link alternar entre login/cadastro */}
          {mode === "login" && perfil === "paciente" && (
            <a
              href="#"
              className="button-link"
              onClick={(e) => { e.preventDefault(); setMode('register')}}
            >
              Criar Conta
            </a>
          )}
           {mode === "register" && ( 
            <a
              href="#"
              className="button-link"
              onClick={(e) => { e.preventDefault(); setMode("login")}}
            >
              Efetuar Login
            </a>
          )}
          </div>

          {/* Rodapé */}
          <div className="rodape">
            <a href="#" className="button-help">Precisa de ajuda?</a>
            <p className="paragraph-2">2025 Conexão Sáude - Todos os direitos reservados</p>
          </div>
        </div>
    </div>
  )
}

export default login

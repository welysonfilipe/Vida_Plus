
import "./Forms.css"

const Forms = ({mode}) => {
  return (
        
        <div className='forms-input'>
          {/* Campos para login */}
          {mode === "login" ? (

            <>
            <label>
              <input type="e-mail" placeholder="Digite o seu e-mail" />
            </label>
            <label>
              <input type="password" placeholder="Digite a sua senha" />
            </label>
            <a href="#" className="button-senha">Esqueceu a senha?</a>
            </>
          ):(

            // Campos APENAS para Cadastro
            <>
              <label>
                <input type="text" placeholder="Digite seu nome"/>
              </label>
              <label>
                <input type="e-mail" placeholder="Digite o seu e-mail" />
              </label>
              <label>
                <input type="tel" placeholder="(XX)XXXXX-XXXX" />
              </label>
              <label>
                <input type="password" placeholder="Digite a sua senha" />
              </label>
              <label>
                <input type="password" placeholder="Confirme a sua senha" />
              </label>
            </>
          )}
        </div>

    )
}

export default Forms

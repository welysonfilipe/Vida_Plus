import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {

  return (

    <nav className='navbar-page'>
        <h2 className='title-page'>Vida Plus</h2>

        <div className="navbar-link">
          <Link to='/home'>Home</Link>
          <Link to='/contato'>Contato</Link>
          <Link to='/'>Sair</Link>
        </div>
    </nav> 

  )
}

export default NavBar

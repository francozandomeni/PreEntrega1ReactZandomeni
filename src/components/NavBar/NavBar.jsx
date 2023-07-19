import { React } from 'react-dom'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'
 
export const NavBar = () => {
    return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
       <Link className="navbar-brand" to="/">Efeceta</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/productos/Medias">Medias</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/productos/Zapatillas">Zapatillas</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link active" to="/productos/Remeras">Remeras</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/productos/Pantalones">Pantalones</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/info">Info</Link>
          </li>
        </ul>
          <span className="navbar-text">
          <CartWidget />
                
          </span>
          
      </div>
    </div>
  </nav>
    )
}
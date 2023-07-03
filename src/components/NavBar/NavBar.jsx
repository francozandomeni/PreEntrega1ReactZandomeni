import { React } from 'react-dom'
import { CartWidget } from './CartWidget'
 
export const NavBar = () => {
    return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
       <a className="navbar-brand" href="#">Efeceta</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Prendas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Calzado</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Info</a>
          </li>
          <li className="nav-item">
            
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
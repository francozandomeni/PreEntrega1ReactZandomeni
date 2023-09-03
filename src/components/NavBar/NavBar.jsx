import { React } from 'react-dom'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"
 
export const NavBar = () => {
    return (
  <header className='navbar-container'>
  <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xl navbar-expand-xxl">
    <div className="container-fluid">
       <div className='brand'><Link className="navbar-brand fs-1" to="/">Efeceta</Link></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav fs-6">
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
          <Link className="nav-link active" to="/carrito">
            <span className="navbar-text">
            <CartWidget />
                  
            </span>
          </Link>
          <li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>


        </ul>

          
          
        
          
      </div>
    </div>
  </nav>
  </header>
    )
}
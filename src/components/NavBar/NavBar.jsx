import { React } from 'react-dom'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
 
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
          <li className="nav-item">
            <Link className="nav-link active" to="/info">Info</Link>
          </li>
        </ul>
        <Link className="nav-link active" to="/carrito">
          <span className="navbar-text">
          <CartWidget />
                
          </span>
        </Link>
          
          
        
          
      </div>
    </div>
  </nav>
  </header>
    )
}
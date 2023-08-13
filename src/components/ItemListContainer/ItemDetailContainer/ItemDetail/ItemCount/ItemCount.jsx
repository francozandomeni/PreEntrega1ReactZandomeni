import { Link } from "react-router-dom"
import { useProductos } from "../../../../hooks/useProductos"


export const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {
  return (
    <div className='info'>
        <div className='mas-menos'>
          <button onClick={handleRestar} className='boton-numerito'>-</button>
          <p className='numerito'>{cantidad}</p>
          <button onClick={handleSumar} className='boton-numerito'>+</button>
        </div>
        <div className="container-agregar">
          <button onClick={handleAgregar} className="boton-agregar">Agregar al carrito</button>
          <Link to="/checkout" className='itemcount-checkout'>Checkout <i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
        
      
    
    
      </div> 
  )
}


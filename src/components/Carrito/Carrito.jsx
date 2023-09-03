
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import "./Carrito.css"

export const Carrito = () => {

    const cartContext = useContext(CartContext)  

    const { carrito, total, vaciarCarrito } = cartContext  

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div>
            <h1 className='container-h1'>Carrito</h1>
        <div className='container'>
        
        
        {
            carrito.map((producto) => (
                <div key={producto.id} className='carrito-producto'>
                    <div>
                        <h3>{producto.titulo}</h3>
                        <img className='img-carrito' src={producto.imagen} alt={producto.nombre} />
                        <p>Precio unitario: $ {producto.precio}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Total: $ {producto.precio * producto.cantidad}</p>
                    </div>
                </div>
                
            ))
        }
        </div>
        {   
                    carrito.length > 0 ?
                    <div className='finalizar'>
                        <div className='finalizar-compra'>
                            <h2 className='finalizar-h2'>Precio total: ${total()}</h2>
                            <button className='boton-vaciar' onClick={handleVaciar}>Vaciar <i className="fa-solid fa-trash"></i></button>
                            <Link className='boton-finalizar-compra' to="/checkout">Finalizar compra</Link>
                        </div>
                        
                    </div>
                     :
                    <h2 className='h2-carrito-vacio'>El carrito esta vacio :'(</h2>
        }
       
        </div>
        
  )
}


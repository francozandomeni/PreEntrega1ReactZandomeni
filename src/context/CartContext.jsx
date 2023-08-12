
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const carritoInicio = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicio);

    const agregarAlCarrito = (item, cantidad) => {
      const productoAgregado = {...item, cantidad}
  
      const carritoNuevo = [...carrito]
      
      const enElCarrito = carritoNuevo.find((producto) => producto.id === productoAgregado.id)
      
      if (enElCarrito) {
        enElCarrito.cantidad += cantidad
        
      } else {
        carritoNuevo.push(productoAgregado)
      }
      setCarrito(carritoNuevo)
    }
  
    const cantidadEncarrito = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
  
    const total = () => {
      return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }

    useEffect(() => {
      console.log("Storing carrito:", carrito);
      localStorage.setItem("carrito", JSON.stringify(carrito))
    
    }, [carrito])
    
    console.log("Retrieved carrito:", carritoInicio);

    return (
        <CartContext.Provider value={ {
            carrito, 
            agregarAlCarrito, 
            cantidadEncarrito, 
            total, 
            vaciarCarrito
        } }>
            {children}
        </CartContext.Provider>

    )
}

import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'


const Checkout = () => {

    const [ loading, setLoading ] = useState(false)

    const { carrito, total, vaciarCarrito } = useContext(CartContext)  

    const { register, handleSubmit } = useForm()

    const [ pedidoId, setPedidoId ] = useState("")


    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: total()

        }   
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos")
        
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })

    }

    

    if(pedidoId) {
        return (
            <div className="container">
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

    if(carrito.length === 0) {
        return <Navigate to="/" />
    }

    

  return (
    <div>
        <h1>Finalizar compra</h1>
        <form onSubmit={handleSubmit(comprar)}>
            <input type="text"  placeholder='Ingresa tu nombre'{...register("nombre")}/>
            <input type="email" placeholder='Ingresa tu email' {...register("email")}/>
            <input type="phone" placeholder='Ingresa tu telefono' {...register("telefono")}/>

            <button disabled={loading} className='enviar' type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Checkout
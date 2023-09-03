import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import "./Checkout.css"


const Checkout = () => {

    const [ loading, setLoading ] = useState(false)

    const { carrito, total, vaciarCarrito } = useContext(CartContext)  

    const { register, handleSubmit } = useForm()

    const [ pedidoId, setPedidoId ] = useState("")

    const timerInterval = () => {
    Swal.fire({
      title: 'La compra se ha realizado correctamente',
      icon: 'success',
      html: 'Enseguida te mostraremos el ID de la compra.',
      timer: 3000,
      timerProgressBar: true,
      
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
     
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
}


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
            <div className="container-thanks">
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

    if(carrito.length === 0) {
        return <Navigate to="/" />
    }

    

  return (
    <div className='container-checkout'>
        <h1 className='h1'>Finalizar compra</h1>
        <form onSubmit={handleSubmit(comprar)}>
            <div ><input className='input' type="email" placeholder='Ingresa tu email' {...register("email")}/>
             </div>       
             <div ><input className='input' type="text"  placeholder='Ingresa tu nombre'{...register("nombre")}/>
            </div>        
            <div ><input className='input' type="phone" placeholder='Ingresa tu telefono' {...register("telefono")}/>
            </div>

            <button disabled={loading} onClick={timerInterval} className='enviar' type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Checkout
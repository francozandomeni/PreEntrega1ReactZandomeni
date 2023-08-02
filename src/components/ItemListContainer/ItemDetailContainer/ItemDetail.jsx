import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemDetail.css"

const ItemDetail = ( {item} ) => {
  return (
   <div className='detail-container'>
    
      <div>  
        <h3>{item.titulo}</h3>
        <img src={item.imagen} className="imgg" alt={item.titulo}></img>
        <p className='precio'>Precio: ${item.precio}</p>
      </div>
      <div className='info'>
          <div className='mas-menos'>
            <button className='boton-numerito'>-</button>
            <p className='numerito'>1</p>
            <button className='boton-numerito'>+</button>
            
          </div>
          {/* <Link className="ver-mas" to={`/item/${item.id}`}>Ver mas</Link>  */}
        <button className='boton-detalle'>Comprar</button>
      </div>   
           
           
   
    </div>
  )
}

export default ItemDetail


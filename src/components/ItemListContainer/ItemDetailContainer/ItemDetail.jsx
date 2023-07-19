import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemDetail.css"

const ItemDetail = ( {item} ) => {
  return (
    <div className="item">
           <h3>{item.titulo}</h3>
           <img src={item.imagen} className="img" alt={item.titulo}></img>
           <p className='precio'>Precio: ${item.precio}</p>
           <Link className="ver-mas" to={`/item/${item.id}`}>Ver mas</Link> 
           <button>Comprar</button>
           
           </div>
  )
}

export default ItemDetail
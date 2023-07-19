import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ( {item} ) => {
  return (
    <div className="item">
           <h3>{item.titulo}</h3>
           <img src={item.imagen} className="img" alt={item.titulo}></img>
           <p>Precio: ${item.precio}</p>
           <Link className="ver-mas" to={`/item/${item.id}`}>Ver masss</Link> 
           <button>Comprar</button>
           
           </div>
  )
}

export default ItemDetail
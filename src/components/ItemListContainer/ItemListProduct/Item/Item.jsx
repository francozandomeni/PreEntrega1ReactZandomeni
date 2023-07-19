import { Link } from "react-router-dom"

export const Item = ( {producto} ) => {
    return (
        <div className="producto">
           <h3>{producto.titulo}</h3>
           <img src={producto.imagen} className="img" alt={producto.titulo}></img>
           <p>Precio: ${producto.precio}</p>
           <Link className="ver-mas" to={`/item/${producto.id}`}>Ver mas</Link>
           <button>Comprar</button>
           </div>
    )
}
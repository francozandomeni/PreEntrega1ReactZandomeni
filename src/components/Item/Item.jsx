import { Link } from "react-router-dom"
import "./Item.css"

export const Item = ( {producto} ) => {
    return (
        <div className="producto">
        <Link className="ver-mas" to={`/item/${producto.id}`}>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} className="img" alt={producto.titulo}></img>
            <p>Precio: ${producto.precio}</p>
            <p className="detalles">Detalles y stock</p>
        </Link>
           
        </div>
    )
}
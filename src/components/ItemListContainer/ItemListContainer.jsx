import "./ItemListContainer.css"

export const ItemListContainer = ( {nombre, imagen, precio, descripcion} ) => {
    return (
        
            <div className="producto">
            <h3>{nombre}</h3>
            <img src={imagen} className="img"></img>
            <h4>Precio: {precio}</h4>
            <p>{descripcion}</p>
            </div>

        
    )
}
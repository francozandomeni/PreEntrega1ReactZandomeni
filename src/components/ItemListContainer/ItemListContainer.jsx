
import { ItemListProduct } from "../ItemListProduct/ItemListProduct"
import { Presentacion } from "../Presentacion/presentacion"
import { Greetings } from "../Greetings/Greetings"
import { useProductos } from "../hooks/useProductos"
import "./ItemListContainer.css"


export const ItemListContainer = () => {

    const { productos, loading } = useProductos()

    return ( 
        <div>
           { loading
            ? <h2 className="h2-cargando">Cargando...</h2>
            : <div className="list-container">
                <Greetings/>          
                <ItemListProduct productos={productos}/>
                
          </div> }
        </div>
    )
}



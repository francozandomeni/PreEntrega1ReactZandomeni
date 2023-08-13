
import "../../index.css"
import { ItemListProduct } from "./ItemListProduct/ItemListProduct"
import { Presentacion } from "../Presentacion/presentacion"
import { Greetings } from "../Greetings/Greetings"
import { useProductos } from "../hooks/useProductos"


export const ItemListContainer = () => {

    const { productos, loading } = useProductos()

    return ( 
        <div>
           { loading
            ? <h2 className="h2-cargando">Cargando...</h2>
            : <div>
                <Greetings/>          
                <ItemListProduct productos={productos}/>
                
          </div> }
        </div>
    )
}




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
            ? <h2>Cargando...</h2>
            : <div>
                <Greetings/>          
                <ItemListProduct productos={productos}/>
                <Presentacion 
                    MensajeBienvenida="Esta página se creó como 
                    trabajo final para un curso de React JS, 
                    éste es una librería del conocido lenguaje 
                    de programación Javascript, que ayuda a simplificar los procesos a la hora de programar. 
                    Como soy fan del basquet
                    y todo lo que lo rodea (equipos, torneos, ligas, indumentaria, zapatillas, etc.) 
                    quise realizar mi proyecto con algo que me guste y que funcione como me gustaría que sea.
                    Gracias por visitarnos, les deseo todo lo bueno. Un saludo, Franco." />
          </div> }
        </div>
    )
}



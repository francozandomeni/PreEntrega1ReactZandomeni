
import "../ItemListContainer/ItemListContainer.css"
import { ItemListProduct } from "./ItemListProduct/ItemListProduct"
import data from "../Productos/productos.json"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Presentacion } from "./Presentacion/presentacion"
import { Greetings } from "./Greetings/Greetings"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(  () => {
                resolve(data)
            }, 500)
        })
    }

    useEffect(() => {
        pedirProductos()
        .then((res) => {
            if (categoryId) {
                setProductos( res.filter((prod) => prod.categoria === categoryId) )
            } else {
                setProductos(res)
            }
            
        })
    }, [categoryId])

    return ( 
        <div>
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
        </div>
    )
}

export const pedirItemId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((e) => e.id === id)
    

    if (item) {
        resolve(item)
    } else {
        reject({
            error: "No se encuentra el producto"
        })
    }
        
})
}

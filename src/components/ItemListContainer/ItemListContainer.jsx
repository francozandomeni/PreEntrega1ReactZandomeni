
import "../ItemListContainer/ItemListContainer.css"
import { ItemListProduct } from "./ItemListProduct/ItemListProduct"
import data from "../Productos/productos.json"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
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
        <ItemListProduct productos={productos}/>
    )
}

export const pedirItemId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((e) => e.id === id);
    

    if (item) {
        resolve(item)
    } else {
        reject({
            error: "No se encuentra el producto"
        })
    }
        
})
}
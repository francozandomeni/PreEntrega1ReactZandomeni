import data from "../components/Productos/productos.json"

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(  () => {
            resolve(data)
        }, 1000)
    })
}
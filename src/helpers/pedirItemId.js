import data from "../components/Productos/productos.json"

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
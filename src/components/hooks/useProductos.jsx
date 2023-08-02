import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirProductos } from "../../helpers/pedirProductos"



export const useProductos = () => {
    
    const [productos, setProductos] = useState([])
    
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


useEffect(() => {

    setLoading(true)

    pedirProductos()

        .then((res) => {
            if (categoryId) {
                setProductos( res.filter((prod) => prod.categoria === categoryId) )
            } else {
                setProductos(res)
            }
            
        })

        .catch(e => console.log(e))
        .finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    return { productos, loading }
}
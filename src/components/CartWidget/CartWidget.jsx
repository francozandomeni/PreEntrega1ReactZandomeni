import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const CartWidget = () => {

const { cantidadEncarrito } = useContext(CartContext)

    return (
        <>
        <i className="fa-solid fa-cart-shopping"></i><span> {cantidadEncarrito()}</span>
        </>
    )

}









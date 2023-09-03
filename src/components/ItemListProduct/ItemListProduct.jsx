 import { Item } from "../Item/Item"
 import "./ItemListProduct.css"


 export const ItemListProduct = ( {productos} ) => {


    

     return (

        <section key="tienda" className='tienda'>
        {
            productos.length > 0 && 
            productos.map((producto) => {

        return (
           <Item key={producto.id} producto={producto}/>

           
                )
            })
         }


        </section>


        
     )
 }
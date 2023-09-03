import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const  id  = useParams().id

    const user = useContext(CartContext)

    useEffect(() => {

        const itemRef = doc(db, "productos", id)

        getDoc(itemRef)
          .then((doc) => {
            
            setItem({
              id: doc.id,
              ...doc.data()
            })

          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          })



     
    }, [id])



  return (
    <div>
      { loading 
      ? <h2 className='h2-cargando'>Cargando...</h2>
      : <div>
        { item && <ItemDetail item={item} />}
      </div>

      }
    
    
    </div>
  )
}

export default ItemDetailContainer
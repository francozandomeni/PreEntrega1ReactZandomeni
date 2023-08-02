import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirItemId } from '../../../helpers/pedirItemId'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const  id  = useParams().id

    useEffect(() => {
      pedirItemId(Number(id))
        .then((res) => {
            setItem(res)
        })
    
     
    }, [id])
    
  return (
    <div>
      { item && <ItemDetail item={item} />}
    </div>
    
  )
}

export default ItemDetailContainer
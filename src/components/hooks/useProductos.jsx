// import React from 'react'
// import { useState } from 'react'
// import { pedirProductos } from '../ItemListContainer/ItemListContainer'

// export const useProductos = () => {
//     const [productos1, setProductos1] = useState()
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//       setLoading(true)
    
//       pedirProductos() 
//         .then(r => setProductos1(r))
//         .catch(e => console.log(e))
//         .finally(() => {
//             setLoading(false)
//         })
      
//     }, [])
    
//   return {
//     productos1,
//     loading
//   }
// }


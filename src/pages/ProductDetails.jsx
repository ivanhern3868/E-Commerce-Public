import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {

    const {id} = useParams();
    //const {ProductsFirebase} = useContext(TotalProductContext)


  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails

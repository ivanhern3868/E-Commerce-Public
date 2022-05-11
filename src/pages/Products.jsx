import React, {useEffect, useState, useContext} from 'react'
import { collection, onSnapshot } from "firebase/firestore"; 
import { db } from '../firebase';
import { ProductsContainer } from '../styles/products';
import CardProducts from '../components/atomics/CardProducts';


const Products = () => {

//const {ProductsFirebase, setProductsFirebase} = context;
const [product, setProduct] = useState([])

useEffect(() => {
  onSnapshot(collection(db, "product"), (items) => {
   const itemsFiltered = items.docs.map((d) => {
     return {...d.data()};
     })
    setProduct(itemsFiltered)
  })  
}, [])

  return <ProductsContainer>
    <div className="wrapper">
        <div className="productsContent">
        {
        product.map((product) => {
          return <CardProducts product={product} key={product.id}>{product.title}</CardProducts>
        })
        }
      </div>
    </div>
    </ProductsContainer>
}

export default Products
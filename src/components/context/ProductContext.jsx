import React, {createContext, useState} from 'react'

export const ProductContext1 = createContext()

const ProductProvider = ({children}) => {

    const [productArr, setProductArr] = useState([])

  return (
  <ProductContext1.Provider value={{productArr, setProductArr}}>
      {children}
  </ProductContext1.Provider>
        )
}

export default ProductProvider
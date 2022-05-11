import "./style.css"
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from './pages/Inicio'
import ImportDB from './components/atomics/ImportDB'
import Products from '../src/pages/Products'
import Header from './components/molecules/Header'
import ProductDetails from "./pages/ProductDetails"
import ProductProvider from "./components/context/ProductContext"
import Cart from "./pages/Cart"




const App = () => {
  return (
    <ProductProvider>
    <BrowserRouter>
        <Header />
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<ImportDB />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </ProductProvider>

  )
}

export default App

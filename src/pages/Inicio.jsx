import React from 'react'
import Hero from '../components/molecules/Hero'
import Products from './Products'
import { ProductHeader } from '../styles/products.js'


const Inicio = () => {
  return (
    <>
    <Hero />
    <ProductHeader><h1>Today's Offer</h1></ProductHeader>
    <Products />
    </>
  )
}

export default Inicio
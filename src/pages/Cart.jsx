import React, {useState, useEffect} from 'react'
import { MasterCartContainer } from '../styles/cartStyles'
import { db } from '../firebase';
import { collection, onSnapshot } from "firebase/firestore"; 
import CartItems from '../components/atomics/CartItems';


const Cart = () => {

const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, "cart"), (items) => {
         const cartFilter = items.docs.map((d) => {
           return {...d.data(), id:d.id};
         })
         setCartItems(cartFilter)
        })  
      }, [])

  return (
    <MasterCartContainer>
    <div className="wrapper">
        <h1>Your Cart</h1>
        <div className="cartHeaders">
                <div className="imgHeader"></div>
                <div className="btnCol"></div>
                <div className="titleHeader">Product</div>
                <div className="priceHeader">Price</div>
                <div className="qtyHeader">Quantity</div>
                <div className="totalHeader">Total</div>
        </div>
            <div className="cart">
              {
            cartItems.map((cartItems) =>
                {
                return (
                <CartItems cartItems={cartItems} key={cartItems.id}>
                </CartItems>)
                })
            }
            </div>
        </div>
    </MasterCartContainer>
  )
}

export default Cart
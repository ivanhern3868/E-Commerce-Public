import React from 'react'
import '../../styles/cartStyles.js'
import { CartItemsContainer } from '../../styles/cartStyles.js'
import { formatPrice } from '../../styles/formatPrice'
import { doc, deleteDoc } from "firebase/firestore"; 
import { db } from '../../firebase';

const CartItems = ({cartItems}) => {

const removeItem = () => {
  deleteDoc(doc(db, "cart", (cartItems.id)))} 

  return (
    <CartItemsContainer>
        <div className="cartData">
            <div className="prodImage">
                <img src={cartItems.image} alt="" /></div>

                <div className="prodButtons">
                <button className="removeButton" onClick={removeItem}>Remove Item</button></div>
                
            <div className="prodTitle">
                <p className="title">{cartItems.title}</p>
                <p className="desc">{cartItems.description}</p></div>
            

            <div className="prodPrice">
                {formatPrice(cartItems.price)}</div>

            <div className="prodQty">
                <p className="qty">{cartItems.qty}</p></div>

            <div className="prodTotal">
            {formatPrice(cartItems.price)}</div>
      </div>
    </CartItemsContainer>
  )
}

export default CartItems
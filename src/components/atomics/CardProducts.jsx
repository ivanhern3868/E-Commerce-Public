import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom' 
import { ButtonFill, ButtonNoFill } from '../../styles/buttonsStyle'
import { formatPrice, formatPriceDisc } from '../../styles/formatPrice'
import { Card } from '../../styles/products'
import { ProductContext1 } from '../context/ProductContext'
import { collection, addDoc  } from "firebase/firestore"; 
import { db } from '../../firebase.js'



const CardProducts = ({product}) => {

    const {productArr, setProductArr} = useContext(ProductContext1)
    const [stars, setStars] = useState(3)
    const [outOf, setOutOf] = useState(5)

    const addProduct = async () => {
        setProductArr([...productArr, product])
        product.qty=1
        const docRef = addDoc(collection(db, "cart"), product);
    }


return (
      <>
    <Card className=''>
        <div className="cardImage">
            <img src={product.image} alt="" /></div>

            
        <div className="descriptions">
            <Link to={`/products/${product.id}`}><span>{product.title}</span></Link>
            <p>{product.description}</p>
        

        <div className="priceScore">
            <span>{formatPrice(product.price)}</span>&nbsp;&nbsp;&nbsp;
            <span className="priceDisc">{formatPriceDisc(product.price)}</span><br /><br />
                        
        </div>
        </div>
        <div className="cardActions">
        <br/><ButtonFill onClick={() => addProduct(product)}>Add to Cart</ButtonFill><br/>
            <ButtonNoFill>Buy Now</ButtonNoFill>
        </div>
    </Card>
    <br/><br/>
</>
  )
}

export default CardProducts
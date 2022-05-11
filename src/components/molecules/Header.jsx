import React, {useContext, useState, useEffect} from 'react'
import { HeaderContainer } from '../../styles/headerStyles'
import logo from "../../images/icons/logo.png"
import { ProductContext1 } from '../context/ProductContext'
import { db } from '../../firebase';
import { collection, onSnapshot } from "firebase/firestore"; 
import { ModalContainer } from '../../styles/modal';
import LoginUser from '../../pages/LoginUser';

const Header = () => {

    const {productArr, setProductArr} = useContext(ProductContext1)
    const [hideCart, setHideCart] = useState(false)
    const [ActiveModal, setActiveModal] = useState(false)

    useEffect(() => {
        if (productArr.length!=0)
        {setHideCart(true)}
        else {(setHideCart(false))}
    }, [productArr.length])
    
    useEffect(() => {
        onSnapshot(collection(db, "cart"), (documento) => {
         const documentFiltrado = documento.docs.map((d) => {
           return {...d.data(), id: d.id};
         })
         setProductArr(documentFiltrado)
        })  
      }, [])

      const handleSubmit = (e) =>
      e.preventDefault();

    return (
    <HeaderContainer>
        <div className="wrapper">
            <div className="headerMenu">
                <nav className="menu">
                <div className="logoContainer">
                        <a href="/"><img src={logo} alt="" /></a>
                    </div>
                    <ul>
                        <a href="/Products" ><li>Productos</li></a>
                        <li>Blog</li>
                        <li>Tienda</li>
                        <li>Contacto</li>

                        <a href="/Admin"><li>Admin</li></a>
                    </ul>

                    <div className="cartContainer">
                        <a href="/Cart" ><i className="icon-shopping-cart">
                            <span className={hideCart ? "cartCircle" : "cartCircleHidden"}>
                                <p>{productArr.length}</p>
                            </span>
                        </i></a>
                    </div>

                </nav>
                <form onSubmit={handleSubmit}>
                    <input type="text"/>
                    <button>
                        <i className="icon-Vector"/>
                    </button>
                </form>
            </div>
        </div>
    </HeaderContainer>
  )
}

export default Header
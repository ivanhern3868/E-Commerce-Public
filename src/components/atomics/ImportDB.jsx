import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase';

const ImportDB = () => {

const [dataApi, setDataApi] = useState([])
const [value, setValue] = useState(1)

const sourcePage = ("https://fakestoreapi.com/products/")
const sourcePageWithProd = sourcePage + value; 

const myObj = {
  id: dataApi.id,
  title: dataApi.title,
  description: dataApi.description,
  price: dataApi.price,
  image: dataApi.image
  }

  const getApi = async () => {
    const response = await fetch (sourcePageWithProd)
    const data = await response.json()
    console.log(sourcePageWithProd)
    setDataApi(data)
    const docRef = addDoc(collection(db, "product"), myObj);
  }

    const handleClick = () => {
      setValue(value + 1)
      console.log(value)  
      getApi();
      }

 return (
    <>
      <button onClick={handleClick}>Import</button>       
    </>
  )
}

export default ImportDB
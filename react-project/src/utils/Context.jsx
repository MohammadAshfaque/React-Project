import axios from '../utils/axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const Context = (props) => {
    const [Products, setProducts] = useState([]);

    const getproducts = async () => {
        try {
            const {data} = await axios.get("/products");
            setProducts(data); 
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=> {
        getproducts();
    }, []);
  return (
    <ProductContext.Provider value={[Products, setProducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context
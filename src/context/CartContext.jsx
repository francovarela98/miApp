import React from 'react';
import { useEffect  } from 'react';
import { useState } from 'react';
import {createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=> {
 const [cart, setCart] = useState ([]);

 const addToCart =(item, cantidad)=>{
    setCart([...cart,{...item, cantidad}])
 }

 function isInCartContext(id){
    return cart.some( item => item.id === id );
  }

  function getTotalItems() {
    return (3)
 }

 useEffect(() => {
    console.log(cart); 
}, [cart]);
    return  <CartContext.Provider value= {{cart, addToCart, isInCartContext, getTotalItems}}> {children} </CartContext.Provider>
    
};

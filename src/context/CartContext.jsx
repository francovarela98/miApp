import React from 'react';
import { useEffect  } from 'react';
import { useState } from 'react';
import {createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=> {
 const [cart, setCart] = useState ([]);

 const addToCart =(item, cantidad)=>{
    setCart(...cart[{...item, cantidad}])
 }

 const removeItem()=>{
    setCart([])
 }
 const clearCart()=>{
    setCart([])
 }

 useEffect(() => {
    console.log(cart); 
}, [cart]);
    return  <CartContext.Provider value= {cart, addToCart,clearCart,removeItem}> {children} </CartContext.Provider>
    
};

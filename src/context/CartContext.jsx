import React from 'react';
import { useEffect  } from 'react';
import { useState } from 'react';
import {createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=> {
 const [cart, setCart] = useState ([]);

 const addToCart =(item, cant)=>{
    setCart([...cart,{...item, cant}])
 }
 
 function removeItem(id) {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }
 function isInCartContext(id){
    return cart.some( item => item.id === id );
  }

  function getTotalItems() {
    let total= 0;
    cart.forEach((item)=> (total = total + item.cant));
    return total;
 }
function clearCart() {
    setCart([])
}
function getTotalPrice() {
    let total= 0;
    cart.forEach((item)=> (total = total + (item.cant*item.price)));
    return total;
 }
 
    return  <CartContext.Provider value= {{cart, addToCart, isInCartContext, getTotalItems, removeItem, clearCart, getTotalPrice}}> {children} </CartContext.Provider>
    
};

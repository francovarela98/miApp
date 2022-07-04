import React from 'react'
import  {useContext} from 'react'
import  {CartContext} from "../../context/CartContext";
import cartimg from '../../img/cart.png'


function CartWidget() {
  const { getTotalItems }= useContext(CartContext);

  return (
    <div>
        <img width="60" src={cartimg} alt="carrito" />
        <p>{getTotalItems()}</p>
    </div>
  )
}

export default CartWidget;
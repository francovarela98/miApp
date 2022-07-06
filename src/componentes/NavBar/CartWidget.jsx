import React from 'react'
import  {useContext} from 'react'
import  {CartContext} from "../../context/CartContext";
import cartimg from '../../img/cart.png'
import { Link } from "react-router-dom";


function CartWidget() {
  const { getTotalItems }= useContext(CartContext);

  return (
    <div>
        <Link to='/cart'><img width="60" src={cartimg} alt="carrito" /></Link>
        <span>{getTotalItems()}</span>
    </div>
  )
}

export default CartWidget;
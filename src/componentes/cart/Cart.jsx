import React from 'react'
import  {useContext} from 'react'
import { CartContext } from "../../context/CartContext";

function Cart() {
    const context= useContext(CartContext)
  return (
    <div>Cart</div>
  )
}

export default Cart
import React from 'react'
import cartimg from '../../img/cart.png'

function CartWidget() {
  return (
    <div>
        <img width="40" src={cartimg} alt="carrito" />
    </div>
  )
}

export default CartWidget;
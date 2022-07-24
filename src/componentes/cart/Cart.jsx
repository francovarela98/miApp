import React from 'react'
import  {useContext} from 'react'
import { CartContext } from "../../context/CartContext";
import '../item/item.css'
import { Link } from "react-router-dom";
import {createBuyOrder} from "../../servicios/firestore"
import CartForm from './CartForm';

function Cart() {
    const {cart, removeItem, clearCart, getTotalPrice}= useContext(CartContext)

    if (cart.length===0) { 
        return(
        <Link to='/'><h1>Volver al inicio</h1></Link>
       ) }
  return (
    <>
    <div>
        {
            cart.map(item=>(
                <div className='itemsContenedor'>
        <div>
        <h2>{item.name}</h2>
        <img width='250' src={item.img} alt={item.name}></img>
        
        <h3> $ {item.price}</h3>
        <p>Cantidad de unidades: {item.cant}</p>
        <p>Subtotal: $  {item.price * item.cant} </p>
        <button onClick={ () =>removeItem(item.id)} className='buttonDetalle'>Eliminar del carrito</button>
        </div>
       
     </div>
     ) )
        }
        <div className='precioTotal'>
            <p>Total a pagar: $ {getTotalPrice()} </p>
        </div>
        <CartForm cart={cart} getTotalPrice={getTotalPrice} clearCart={clearCart} createBuyOrder= {createBuyOrder}/>
       
    </div>
    </>
  )
}

export default Cart
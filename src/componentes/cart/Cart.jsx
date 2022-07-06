import React from 'react'
import  {useContext} from 'react'
import { CartContext } from "../../context/CartContext";
import '../item/item.css'

function Cart() {
    const {cart, removeItem, clearCart, getTotalPrice}= useContext(CartContext)

    if (cart.length===0) { 
        return(
        <h1>Aun no tienes productos en el carrito, volver al inicio</h1>
       ) }
  return (
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
        <span>Precio total: $ {getTotalPrice()} </span>
        <button className='buttonDetalle'>Ir al checkout</button>
        <button onClick={clearCart} className='buttonDetalle'>Vaciar el Carrito</button>
    </div>
  )
}

export default Cart
import React from 'react'
import  {useContext} from 'react'
import { CartContext } from "../../context/CartContext";
import '../item/item.css'

function Cart() {
    const {cart}= useContext(CartContext)

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
        <img width='400' src={item.img} alt={item.name}></img>
        
        <h3> $ {item.price}</h3>
        <button className='buttonDetalle'>Eliminar del carrito</button>
        </div>
       
    </div>
     ) )
        }
        <button>Ir al checkout</button>
        <button>Vaciar el Carrito</button>
    </div>
  )
}

export default Cart
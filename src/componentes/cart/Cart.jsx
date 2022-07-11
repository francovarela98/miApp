import React from 'react'
import  {useContext} from 'react'
import { CartContext } from "../../context/CartContext";
import '../item/item.css'
import { Link } from "react-router-dom";
import {createBuyOrder} from "../../servicios/firestore"

function Cart() {
    const {cart, removeItem, clearCart, getTotalPrice}= useContext(CartContext)

    function handleBuyOrder(params) {
        const dataOrder ={
            buyer: {
                name: "Franco Varela",
                phone: "1122334455",
                email: "fjvcoder@gmail.com"
    
            },
            items: cart,
            total: getTotalPrice(),
        
        }

        createBuyOrder(dataOrder).then(()=>{
            clearCart()
            alert ("Se ha completado tu compra!")
        })
        
    }


    if (cart.length===0) { 
        return(
        <Link to='/'><h1>Aun no tienes productos en el carrito, volver al inicio</h1></Link>
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
        <div className="contenedorBotones">
        <span className="precioTotal">Precio total: $ {getTotalPrice()} </span>
        <button onClick={handleBuyOrder} className='buttonDetalle'>Ir al checkout</button>
        <button onClick={clearCart} className='buttonDetalle'>Vaciar el Carrito</button>
        </div>
    </div>
  )
}

export default Cart
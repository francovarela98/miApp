import React, {useState} from 'react'
import "./cart.css"

function CartForm({cart, getTotalPrice, clearCart, createBuyOrder}) {

const[buyer, setBuyer]= useState({
    name: " ",
    phone: " ",
    email: " ",
}
)
const handleChange = (evt) => {
    
        const field = evt.target.name;
        const value = evt.target.value;
    
        setBuyer({
          ...buyer, 
          [field]: value,
        })
      }
    
function handleBuyOrder(evt) {
        evt.preventDefault();

        const dataOrder = {
          buyer,
          items: cart,
          total: getTotalPrice (),
        };
    
        createBuyOrder(dataOrder).then(( orderDataCreated ) => {
          clearCart();
          console.log(orderDataCreated.id);
        });
      }
    


  return (
    <form className='form'>
        <label htmlFor="name">Nombre</label>
        <input onChange={handleChange} name="Nombre de Usuario" />

        <label htmlFor="phone">Telefono</label>
        <input onChange={handleChange} name="Teléfono" />

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} name="Mail" />
        
        <button className='buttonDetalle' onClick={handleBuyOrder} >Finalizar Compra</button>
        <button className='buttonDetalle' onClick={clearCart} >Vaciar Carrito</button>

    </form>
  )

}

export default CartForm
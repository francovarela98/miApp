import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount  from "./ItemCount/ItemCount.jsx";
import './item/item.css'
import { useContext } from 'react';
import {CartContext} from '../context/CartContext'


function ItemDetail({item})  {

  const {addToCart}= useContext (CartContext)

  const [count, setCount] = useState (0)


  const onAdd = (cantidad)=>{
    setCount(cantidad);
    addToCart (item,cantidad)
   };

  const styles= {
    maxwidth: '200 px',
    margin: '50px 50px 50px 450px', 

  }
  return (
    <div  className="itemsContenedor">
        <h1>Detalle de producto</h1>
        <h2>{item.name}</h2>
        <img width='400'  src={item.img} alt='imagen'/>
        <p> $ {item.price}</p>
        {
          count === 0
          ? (<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>)
          : (<Link to='/cart'>Terminar mi compra</Link>)
        }
         
    
        
    </div>
  )
}

export default ItemDetail;
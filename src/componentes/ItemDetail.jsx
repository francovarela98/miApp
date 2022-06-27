import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount  from "./ItemCount/ItemCount.jsx";


function ItemDetail({item})  {
  const [count, setCount] = useState (0)

  const onAdd = (cantidad)=>{
    setCount(cantidad);
   };

  const styles= {
    maxwidth: '200 px',
    margin: '50px 50px 50px 450px',

  }
  return (
    <div style={styles}>
        <h2>Detalle de producto</h2>
        <img width='400' src={item.img} alt='imagen'/>
        <h2>{item.name}</h2>
        <p> $ {item.price}</p>
         <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
         <Link to='/cart'>Terminar mi compra</Link>
        
    </div>
  )
}

export default ItemDetail;
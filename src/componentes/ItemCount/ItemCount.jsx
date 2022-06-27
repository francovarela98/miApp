import React from 'react'
import { useState } from 'react';
import './itemCount.css'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState (initial);
    function suma(){
        if(count< stock){
        setCount(count +1)
    }
    }
    function resta(){
        if(count> 0){
            setCount(count -1)
        }
    }
  return (
    <div className='itemCount'>
        <button className='buttonDetail' onClick={resta}>-</button>
        <span className='buttonDetail'>{count}</span>
        <button className='buttonDetail' onClick={suma}>+</button>
        <button className='buttonDetail' onClick={()=>onAdd(count)}>agregar al carrito</button>

    </div>
  )
}

export default ItemCount
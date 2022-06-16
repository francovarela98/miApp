import React from 'react'
import { useState } from 'react';
import './itemCount.css'

function ItemCount({stock, initial}) {
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
        <button onClick={resta}>-</button>
        <span>{count}</span>
        <button onClick={suma}>+</button>
        <button>agregar al carrito</button>

    </div>
  )
}

export default ItemCount
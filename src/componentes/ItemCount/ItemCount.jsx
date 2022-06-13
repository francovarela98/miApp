import React from 'react'
import { useState } from 'react';

function ItemCount({stock, initial}) {
    const [count, setCount] = useState (initial);
    function suma(){
        setCount(count +1)
    }
    function resta(){
        setCount(count -1)
    }
  return (
    <div>
        <button onClick={resta}>-</button>
        <span>{count}</span>
        <button onClick={suma}>+</button>
        <button>agregar al carrito</button>

    </div>
  )
}

export default ItemCount
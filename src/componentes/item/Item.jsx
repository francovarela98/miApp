import React from 'react'
import './item.css'

const Item = ({ item }) => {
  return (
      
    <div className='itemsContenedor'>
        <div>
        <img width='400' src={item.img} alt='imagen'/>
        <h2>{item.name}</h2>
        <h3>$ {item.price}</h3>
        </div>
       
    </div>
  )
}

export default Item
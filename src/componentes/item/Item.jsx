import React from 'react'
import './item.css'
import {Link} from "react-router-dom"

const Item = ({ item }) => {
  const urlDetalle = `/articulos/${item.id}`
  return (
      
    <div className='itemsContenedor'>
        <div>
        <img width='400' src={item.img} alt={item.name}></img>
        <h2>{item.name}</h2>
        <h3> $ {item.price}</h3>
        <Link to={urlDetalle}>
          <button className="buttonDetalle">ver detalle</button>
        </Link>
        </div>
       
    </div>
  )
}

export default Item
import React from 'react'

function ItemDetail({item}) {
  const styles= {
    maxwidth: '200 px',
    margin: '50px 50px 50px 450px',

  }
  return (
    <div style={styles}>
        <h2>Detalle de producto</h2>
        <img width='400' src={item.img} alt='imagen'/>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        
    </div>
  )
}

export default ItemDetail;
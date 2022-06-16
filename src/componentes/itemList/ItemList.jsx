import React from 'react'
import Item from '../item/Item'
import './itemList.css'

const ItemList = ({ items }) => {
  return (
    <div className='itemContenedores'>
      { 
      items.map ((item)=>{
return <Item item={item}/>
       })
       }

    </div>
  );
};

export default ItemList
import React from 'react'
import Item from '../item/Item'

const ItemList = ({ items }) => {
  return (
    <div>
      { 
      items.map ((item)=>{

         return <Item item={item}/>
       })
       }

    </div>
  );
};

export default ItemList
import React, {useState, useEffect} from 'react'
import ItemList from './itemList/ItemList';
import { Productos } from './mock/Productos.jsx';

function ItemListContainer() {
    const [productos, setproductos]= useState([])
    useEffect (()=>{
    const traerProductos = new Promise ((res,rej)=>{
        setTimeout (()=>{
         res(Productos)
        }, 2000);
    })
    traerProductos.then((res)=>{
        setproductos(res)
    })
    }, [])
  return (
    
    <ItemList items={productos}/>
  );
};

export default ItemListContainer;
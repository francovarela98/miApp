import React, {useState, useEffect} from 'react'
import ItemList from './itemList/ItemList';
import { Productos } from './mock/Productos.jsx';
import {useParams} from 'react-router-dom'

function ItemListContainer() {
    const [productos, setproductos]= useState([])
    const { categoryId }= useParams();
    useEffect (()=>{
    const traerProductos = new Promise ((res,rej)=>{
        setTimeout (()=>{
          if(categoryId === undefined)
         res(Productos);
         else {
          const itemsFound = Productos.filter(articulos=>{
              return articulos.category === categoryId;
          })
          res(itemsFound);
         }
        }, 500);
    })
    traerProductos.then((res)=>{
        setproductos(res)
    })
    }, [categoryId])
  return (
    
    <ItemList items={productos}/>
    
  );
};

export default ItemListContainer;
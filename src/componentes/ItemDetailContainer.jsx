import React, {useState, useEffect} from 'react'
import {Productos} from './mock/Productos.jsx';
import ItemDetail from './ItemDetail.jsx';
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
    const [producto, setproducto]= useState({})
    const { itemId }= useParams();
    useEffect (()=>{
    const traerProducto = new Promise ((res,rej)=>{
        setTimeout (()=>{
        res(Productos[itemId])
        },2000);
    })
    traerProducto.then((res)=>{
        setproducto(res)
    })
    }, [])
  return (
    <ItemDetail item={producto}/>
  );
};

export default ItemDetailContainer;
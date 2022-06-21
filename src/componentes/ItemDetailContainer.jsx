import React, {useState, useEffect} from 'react'
import {Productos} from './mock/Productos.jsx';
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer() {
    const [producto, setproducto]= useState({})
    useEffect (()=>{
    const traerProducto = new Promise ((res,rej)=>{
        setTimeout (()=>{
        res(Productos[0])
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
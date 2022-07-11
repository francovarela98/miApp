import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail.jsx';
import {useParams} from "react-router-dom"
import {getDetailItem, dataToFirestore} from '../servicios/firestore'

function ItemDetailContainer() {
    const [producto, setproducto]= useState({})
    const { itemId }= useParams();
    useEffect (()=>{
   getDetailItem(itemId).then((res)=>{
        setproducto(res)
    })
    },[itemId])
  return (
    <>
    <ItemDetail item={producto}/>
    <button onClick={dataToFirestore}>traer Datos</button>
    </>
  );
};

export default ItemDetailContainer;
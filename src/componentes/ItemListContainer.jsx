import React, {useState, useEffect} from 'react'
import ItemList from './itemList/ItemList';
import {useParams} from 'react-router-dom'
import { getItems } from '../servicios/firestore'

function ItemListContainer() {
    const [productos, setproductos]= useState([])
    const { categoryId }= useParams();
    useEffect (()=>{
    getItems().then((res)=>{
        setproductos(res)
    })
    }, [categoryId])
  return (
    
    <ItemList items={productos}/>
    
  );
};

export default ItemListContainer;
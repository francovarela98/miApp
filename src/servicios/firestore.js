
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, setDoc, getDocs, getDoc, query, where, addDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq0XvapK_P-JmFI4WkjPfuXxzNmIKuXbY",
  authDomain: "ceramixs-e10e6.firebaseapp.com",
  projectId: "ceramixs-e10e6",
  storageBucket: "ceramixs-e10e6.appspot.com",
  messagingSenderId: "81703516570",
  appId: "1:81703516570:web:6887827d2471b4691a6223"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase)

export async function getItems(){
    const articulosCollection = collection(appFirestore,"Articulos")
    const articulosSnapShot = await getDocs(articulosCollection)

let respuesta = articulosSnapShot.docs.map (doc=>{
    return{
        ...doc.data(),
        id: doc.id
    }
 
    } )

return respuesta
}

export async function getDetailItem(id){
    const articulosCollection = collection(appFirestore,"Articulos")
    const docref = doc(articulosCollection, id)
    const docSnapShot = await getDoc (docref)

    return {
        id: docSnapShot.id, ...docSnapShot.data()
    }

}

export async function getItemByCategory (idcategory){
   const articulosCollection= collection (appFirestore, "Articulos")
   const q = query (articulosCollection,where("category","==", idcategory))
   const articulosSnapShot = await getDocs(q)
   let respuesta = articulosSnapShot.docs.map (doc=>{
    return{
        ...doc.data(),
        id: doc.id
    };
 
    } )

return respuesta
}
export async function dataToFirestore(){
    const Productos =[
        {
            id: 0,
            name: 'taza yellow', 
            price: 750,
            stock: 10,
            img: 'https://i.pinimg.com/564x/19/a1/52/19a152f58ad8daa1a21eb5683ef808e4.jpg',
            category: 'taza',
        },
        {
            id: 1,
            name: 'taza pink', 
            price: 750,
            stock: 10,
            img: 'https://i.pinimg.com/564x/9e/57/49/9e5749b2164102083ad93342e3cb5bd1.jpg',
            category: 'taza',
        },
        {
            id: 2,
            name: 'taza blue', 
            price: 750,
            stock: 10,
            img: 'https://i.pinimg.com/564x/fb/0d/0d/fb0d0da5c39a903e3f4a39e0d859ba42.jpg',
            category: 'taza',
        },
        {
            id: 3,
            name: 'cuenco cuarzo', 
            price: 950,
            stock: 15,
            img: 'https://i.pinimg.com/564x/b9/df/38/b9df385f84ac457f86cb6d52ff91eaf9.jpg',
            category: 'cuenco',
        },
        {
            id: 4,
            name: 'cuenco mar', 
            price: 950,
            stock: 15,
            img: 'https://i.pinimg.com/564x/ce/b6/fc/ceb6fcdc944af5af633dc7da6d0bd617.jpg',
            category: 'cuenco',
        },
        {
            id: 5,
            name: 'cuenco playa', 
            price: 950,
            stock: 15,
            img: 'https://i.pinimg.com/564x/ef/68/50/ef68508de5cda1b866aec3922f44ce98.jpg',
            category: 'cuenco',
        }
        ]

        const articulosCollection= collection (appFirestore, "Articulos")

        Productos.forEach((item)=>{
        
            const newDoc = doc(articulosCollection);
            setDoc(newDoc, item)
            .then((res)=>{
                console.log("documentoguardado", newDoc.id)
            }).catch((error) => console.log("error obteniendo los datos: ", error));
        })
       

        
}

export async function createBuyOrder(dataOrder){
const orderCollectionRef = collection(appFirestore, "orders")

const orderCreated= await addDoc(orderCollectionRef, dataOrder)
return orderCreated
} 


export default appFirestore
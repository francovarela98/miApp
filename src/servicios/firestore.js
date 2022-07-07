
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs, getDoc} from 'firebase/firestore'

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

export default appFirestore
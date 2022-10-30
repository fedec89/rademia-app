import React, {useContext, useEffect} from 'react';
import {db} from "../../utils/firebase"
import {doc, getDoc, collection, getDocs, query, where} from "firebase/firestore";


export const ProductosPage = () => {

    useEffect (()=> {
        const getData = async()=> {

            const query = collection(db, "items");

            const respuesta = await getDocs(query);
            console.log(respuesta)
            const productos = respuesta.docs.map(doc => {
                const nuevoProducto ={
                    ...doc.data(),
                    id: doc.id
                }
                return nuevoProducto
            })
            console.log(productos);

          

        }
        getData();

    },[])




    return(
        <div>
            Mas vendido!
        </div>
    )
}


import React, {useContext, useEffect} from 'react';
import {db} from "../../utils/firebase"
import {doc, getDoc} from "firebase/firestore";


export const productosPage = () => {

    useEffect (()=> {
        const getData = async()=> {
            const query = doc(db,"items","9rvw4ZlHJ9cEUbGtudUE");

            const respuesta = await getDoc(query);
            console.log("respuesta", respuesta)

        }
        getData();

    },[])




    return(
        <div>
            Mas vendido!
        </div>
    )
}


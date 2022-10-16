import data from "./mockdata";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import '../Item/items.css'
import {db} from '../../utils/firebase';
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
    
    
    const [items, setItems] = useState([]);
    const {categoryId} = useParams ();
    

    /* const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);

    } );


    useEffect(() => {
        getData.then((result) => {
            if(categoryId){ const nuevos = result.filter(cosa=> cosa.tipo === categoryId)
                setItems(nuevos);}
            else {
                setItems(result)
            };
            
            
        });
        
    }, [categoryId]); */




    useEffect(() => {
        const queryRef = collection(db, "items");
        getDocs(queryRef).then(respuesta=>{
            const resultados = respuesta.docs.map(doc=>{
                const newItem = {
                    id:doc.id,
                    ...doc.data(),
                    
                }
                return newItem                
            });
            console.log(resultados)
            setItems(resultados);
        })
        
        
    }, [categoryId]);



    return (
            <> 
            
            <div className='prod-container'>
                  
            <ItemList itemsList={items} />
            </div>

            </>
            );
};

export default ItemListContainer;
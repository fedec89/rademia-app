import data from "./mockdata";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import '../Item/items.css'


const ItemListContainer = () => {
    
    
    const [items, setItems] = useState([]);
    const {categoryId} = useParams ();
    

    const getData = new Promise((resolve, reject) => {
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
import data from "./mockdata";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    
    const {categoryId} = useParams ();

    const [items, setItems] = useState([]);


    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);

    } );


    useEffect(() => {
        getData.then((result) => {
            const newProducts = result.filter(item=> item.tipo === categoryId)
            setItems(result);
            
        });
        
    }, [categoryId]);

        



    return (
            <> 
            <ItemList itemsList={items} />

            </>
            );
};

export default ItemListContainer;
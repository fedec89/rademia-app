import data from "./mockdata";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);


    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);

    } );


    useEffect(() => {
        getData.then((result) => {
            setItems(result);
            
        });
        
    }, []);

        



    return (
            <> 
            <ItemList itemsList={items} />

            </>
            );
};

export default ItemListContainer;
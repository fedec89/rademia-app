import data from "../ItemListContainer/mockdata"
import { useState, useEffect } from "react";
import ItemDetailList from "./ItemDetailList";


const ItemDetailContainer = () => {
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
            <>{items.length > 0 ? (<ItemDetailList bornicoc={items[1]}/>) : (<h2>Cargando...</h2>)}</>
           
            );
};

export default ItemDetailContainer;
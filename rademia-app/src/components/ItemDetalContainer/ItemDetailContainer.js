import data from "../ItemListContainer/mockdata"
import { useState, useEffect } from "react";
import ItemDetailList from "./ItemDetailList";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [items, setItems] = useState([]);
   


   const getItem = (id) => {
    return new Promise ((resolve, reject) =>{
        const producto = data.find(item => item.id === parseInt(id) );
        resolve(producto)
    })
   }


    useEffect(() => {
        const getData = async()=> {
        const producto = await getItem(productId);
        console.log('producto', producto)
        setItems(producto);
       }
       getData();
    },[productId])
        



    return (
            <><ItemDetailList bornicoc={items}/>
            </>
           
            );
};

export default ItemDetailContainer;
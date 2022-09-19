import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState ([]);
    

    const addItem = (item, quantity) => {
        console.log("item", item, "quantity", quantity)
        const newProduct = {
            ...item,
            quantity


        };
        console.log("newproduct", newProduct)
        const nuevoArreglo = [...productCartList];
        nuevoArreglo.push(newProduct);
        setProductCartList(nuevoArreglo);
    };

    const removerItem = (itemId) => {
        console.log("itemId", itemId)
        const nuevoArreglo2 = productCartList.filter(product=> product.id !== itemId);
        setProductCartList(nuevoArreglo2);

    }

  

    return(
        <CartContext.Provider value={{productCartList, addItem, removerItem, removerTodo}} >
            {children}
        </CartContext.Provider>
    )
}
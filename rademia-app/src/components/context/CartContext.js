import { useState } from 'react';
import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState ([]);



    const isInCart = (productId) => {
        const existeProducto = productCartList.some(item=>item.id === productId);
        return existeProducto;



    };
    

    const addItem = (item, quantity) => {
        console.log("item", item, "quantity", quantity)
        const newProduct = {
            ...item,
            quantity


        };
        console.log("newproduct", newProduct)

        if (isInCart(item.id)){
            const productoPos = productCartList.findIndex(prod=> prod.id === item.id);
            const nuevoArreglo = [...productCartList];
            nuevoArreglo[productoPos].quantity = nuevoArreglo[productoPos].quantity + quantity;

            nuevoArreglo[productoPos].totalPorProductos = nuevoArreglo[productoPos].quantity * nuevoArreglo[productoPos].precio;
            setProductCartList(nuevoArreglo);
        } else {
            const nuevoArreglo = [...productCartList];
            newProduct.totalPorProductos = newProduct.quantity * newProduct.precio;
            nuevoArreglo.push(newProduct);
            setProductCartList(nuevoArreglo);

        }


        
    };

    const removerItem = (itemId) => {
        console.log("itemId", itemId)
        const nuevoArreglo2 = productCartList.filter(product=> product.id !== itemId);
        setProductCartList(nuevoArreglo2);

    }

    const clear = ()=> {
        setProductCartList([]);

    }


    const precioTotal = ()=> {
        const precioFinal = productCartList.reduce((acc, item)=>acc + item.totalPorProductos,0);
        console.log(precioFinal)
        return precioFinal;

         
    }


    const contarLosProductos = () => {
        const productosFinal = productCartList.reduce((acc, item)=>acc + item.quantity,0);
        return productosFinal;

    }

  

    return(
        <CartContext.Provider value={{productCartList, addItem, removerItem, clear, isInCart, precioTotal, contarLosProductos}} >
            {children}
        </CartContext.Provider>
    )
}
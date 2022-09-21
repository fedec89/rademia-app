import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";

export const CartContainer = () => {
    const {productCartList, removerItem}= useContext (CartContext);

    return(
        <div>
            CartContainer
            <div>
                {productCartList.map(item=>(
                   <>
                   <p>{item.modelo} - {item.quantity}</p> 
                   <button onClick={()=>removerItem(item.id)}>Eliminar</button>
                   {/* <button onClick={()=>removerTodo(item.id)}>Clear</button> */}
                   </> 
                ) )}
            </div>
            <div>
            
            </div>
        </div>
        
    )
}

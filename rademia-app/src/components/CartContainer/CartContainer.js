import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";


export const CartContainer = () => {
    const {productCartList, removerItem, clear}= useContext (CartContext);

    return(
        <div>
            CartContainer
            <div>
                {productCartList.map(item=>(
                   <>
                   <p>{item.modelo} - {item.quantity}</p> 
                   <button onClick={()=>removerItem(item.id)}>Eliminar</button>
                   </>
                   
                ))}

                <button onClick={clear}>Borrar Todo</button>
                {/* <button onClick={()=>isInCart()}>validate</button> */}
                
            </div>
            <div>
            
            </div>
        </div>
        
    )
}

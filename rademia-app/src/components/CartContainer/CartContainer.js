import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export const CartContainer = () => {
    const {productCartList, removerItem, clear, precioTotal}= useContext (CartContext);

    return(
        <div>
            {
                productCartList.length > 0 ?

                <div>
                    {productCartList.map(item=>(
                    <>
                    <p>Modelo: {item.modelo}</p> 
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio x1: {item.precio}</p>
                    <p>Total {item.totalPorProductos}</p>   
                    <button onClick={()=>removerItem(item.id)}>Eliminar</button>
                    </>
                    
                    ))}

                    <button onClick={clear}>Borrar Todo</button>
                    <p>Precio Final: {precioTotal()}</p>
                
                
                </div>
                :
                <div>
                    <h3>El carrito esta vacio!</h3>

                    <Link to="/productos">

                    Quiero ver productos !

                    </Link>



                </div>
            }
            
            
            

            
            
        </div>
        
    )
}

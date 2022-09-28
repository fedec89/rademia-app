import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export const CartContainer = () => {
    const {productCartList, removerItem, clear, precioTotal}= useContext (CartContext);
  


    const enviarOrden = (event) => {
        event.preventDefault();
        console.log("orden enviada", event)
        const orden = {
            comprador: {
                nombre: event.target[0].value,
                telefono:event.target[1].value,
                email: event.target[2].value,
            },
            items: productCartList,
            total: precioTotal()
        }
        console.log("orden", orden)
    }

    

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
                    <form onSubmit={enviarOrden}> 
                        <label>Nombre:</label>
                        <input type="text"></input>
                        <label>Telefono</label>
                        <input type="text"></input>
                        <label>Email</label>
                        <input type="email"></input>
                        <button type='submit'>Agregar Orden</button>
                    </form>
                
                
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

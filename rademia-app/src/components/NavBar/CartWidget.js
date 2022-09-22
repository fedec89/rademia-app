import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cart from './cart.png'
import './NavBar-container.css';






export const CartWidget = () => {

    const {contarLosProductos} = useContext(CartContext);


    return (

        <div>
                    
            <Link to="/cart" >    

                <img src={cart} alt="cart1" style ={{width: '40px', height: '40px', padding: '10px'}}/>
                <span style={{padding:"5px", borderRadius:"50%", width:"10px", 
                height:"10px",fontSize:"25px", color:'black'}}>{contarLosProductos()}</span>

            </Link>

        </div>


    )
   
};
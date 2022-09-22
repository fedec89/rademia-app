import lgrademia from './lgrademia.png'
import cart from './cart.png'
import './NavBar-container.css';
import {Link, link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartWidget } from './CartWidget';

const NavBar = () => {
    return (
        <div>

            <div className='NavBar-container'>
                <img src={lgrademia} alt="logo1" style={{ width: '80px', height: '80px' }}></img>
                
            

                <div>
                    <ul>
                        <li>
                            <Link to="/"> Home</Link>  
                        </li>

                        <li>
                            <Link to="/productos">Productos</Link>
                        </li>

                        <li>
                            <Link to="/productos/placa">Placas</Link>
                        </li>

                        <li>
                            <Link to="/productos/procesador">Procesadores</Link>
                        </li>                        

                        <li>
                            <Link to="/">Contacto</Link>
                        </li>
                        
                        

                    
                    </ul>

                </div>


                <div>
                    
                    <CartWidget/>

                    
                </div>

            </div>
            

        </div>

    )

};




export default NavBar;
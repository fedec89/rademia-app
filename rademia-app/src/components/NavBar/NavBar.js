import lgrademia from './lgrademia.png'
import cart from './cart.png'
import './NavBar-container.css';

const NavBar = () => {
    return (
        <div>

            <div className='NavBar-container'>
                <img src={lgrademia} alt="logo1" style={{ width: '80px', height: '80px' }}></img>
                
            

                <div>
                    <ul>
                        <li>
                            <a href="#"> Home </a>
                        </li>

                        <li>
                            <a href="#"> Productos </a>
                        </li>

                        <li>
                            <a href="#"> Contacto </a>
                        </li>
                    </ul>

                </div>


                <div>
                    <img src={cart} alt="cart1" style ={{width: '40px', height: '40px', padding: '10px'}}></img>
                </div>

            </div>
            

        </div>

    )

};




export default NavBar;
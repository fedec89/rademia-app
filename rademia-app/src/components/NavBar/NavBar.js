import lgrademia from './lgrademia.png'
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
                    <button>LOGIN</button>
                </div>

            </div>
            

        </div>

    )

};

export default NavBar;
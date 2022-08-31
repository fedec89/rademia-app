import { useState } from "react"
import "./contador.css"


const Counter = ({stock, initial}) => {
    const [ contador, setContador ] = useState (initial)
    const suma = () => {
        if (contador < stock) {
            setContador ( contador + 1) 
        };
    }
    const resta = () => {
        if (contador > 0) {
        setContador (contador - 1)};
        
    }

  return (
    <>
    <div>Contador</div>
    <div className = "CounterContainer">
        <button onClick={resta}> - </button>
        <h2>{contador}</h2>
        <button onClick={suma}> + </button>
    </div>
    
    </>
    
  );
};

export default Counter;

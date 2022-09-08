
import "../Item/items.css"

    const ItemDetails = ({id, img, tipo, modelo, precio, cantidad}) => {
        return (
  
      
          <div className="prod2">
                <h2>Mas vendido!</h2>            
              <h4>Tipo: {tipo}</h4>
              <p>Modelo: {modelo}</p>
              <p>Precio: {precio}</p>
              <p>Stock: {cantidad}</p>
          </div>
        );
    };
  
  
  
  export default ItemDetails;








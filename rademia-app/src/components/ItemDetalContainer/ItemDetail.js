
import "../Item/items.css"

    const ItemDetails = ({items}) => {
      console.log(items);
        return (
  
          <>
          
          <div className="prod2">
                       
              <h4>Tipo: {items.tipo}</h4>
              <p>Modelo: {items.modelo}</p>
              <p>Precio: {items.precio}</p>
              <p>Stock: {items.cantidad}</p>
          </div>
          </>
        );
    };
  
  
  
  export default ItemDetails;








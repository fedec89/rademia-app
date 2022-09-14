import Counter from '../Contador/contador'
import "../Item/items.css"

    const ItemDetails = ({items}) => {
      const onAdd= (contador) => {
        console.log(`recibimos banda amigo ${contador}`)


      } 
      




        return (
  
          <>
          
          <div className="prod2">
                       
              <h4>Tipo: {items.tipo}</h4>
              <p>Modelo: {items.modelo}</p>
              <p>Precio: {items.precio}</p>
              <p>Stock: {items.cantidad}</p>              
          </div>
          <Counter stock={items.cantidad} initial={1} onAdd={onAdd}/>
          </>
        );
    };
  
  
  
  export default ItemDetails;








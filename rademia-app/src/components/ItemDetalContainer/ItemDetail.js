import Counter from '../Contador/contador'
import "../Item/items.css"
import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';

    const ItemDetails = ({items}) => {
      const {addItem} = useContext (CartContext);

      const onAdd= (contador) => {
        console.log(`recibimos ${contador} productos`)
        addItem (items, contador);


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








import "./items.css"
import {Link} from 'react-router-dom'


const Item = ({item}) => {
  return (

    
        <div className="prod">
            <img src={item.image}></img>
            <h4>{item.id}</h4>
            <h3>{item.tipo}</h3>
            <p>{item.modelo}</p>
            <Link to={`/item/${item.id}`}>
              Detalles
            </Link>
            
            
            
        </div>
    
        
  );
};

export default Item;
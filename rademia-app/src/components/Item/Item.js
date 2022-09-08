import "./items.css"


const Item = ({id, image, tipo, modelo, precio, cantidad}) => {
  return (

    
        <div className="prod">
            <img src={image}></img>
            <h4>{id}</h4>
            <h3>{tipo}</h3>
            <p>{modelo}</p>
            
        </div>
    
        
  );
};

export default Item;
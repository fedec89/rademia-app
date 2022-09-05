import "./items.css"

const Item = ({id, img, tipo, modelo, precio, cantidad}) => {
  return (

    
        <div className="prod">
            <img src={img}></img>
            <h4>{id}</h4>
            <h3>{tipo}</h3>
            <p>{modelo}</p>
            <p>{precio}</p>
        </div>
    
        
  );
};

export default Item;
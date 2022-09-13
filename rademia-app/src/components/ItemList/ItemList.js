import Item from '../Item/Item'




const ItemList = ({itemsList}) => {
    console.log(itemsList);
    return (
        <>
            {
                itemsList.map((producto) => {
                    return (
                        <Item
                        key={producto.id}
                        modelo = {producto.modelo}
                        tipo={producto.tipo}
                        precio={producto.precio}/> 

    
                    )
                })

                
            }
            
            
        </>
    )
}

export default ItemList;
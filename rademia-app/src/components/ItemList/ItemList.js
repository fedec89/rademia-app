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
                        item={producto} /> 

    
                    )
                })

                
            }
            
            
        </>
    )
}

export default ItemList;
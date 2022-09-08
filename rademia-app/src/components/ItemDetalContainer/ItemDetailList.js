import ItemDetails from "./ItemDetail";

const ItemDetailList = ({bornicoc}) => {
    console.log(bornicoc)

    

    return (<>
                <ItemDetails
                            img={bornicoc.img}
                            key={bornicoc.id}
                            modelo = {bornicoc.modelo}
                            tipo={bornicoc.tipo}
                            precio={bornicoc.precio}
                            cantidad={bornicoc.cantidad}/> 
            </>);
   

}

export default ItemDetailList;
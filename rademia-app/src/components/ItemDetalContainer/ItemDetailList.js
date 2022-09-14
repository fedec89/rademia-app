import ItemDetails from "./ItemDetail";
import '../Item/items.css'

const ItemDetailList = ({bornicoc}) => {


    

    return (<>
                <div className='prod3'>
                  
                  
                    <ItemDetails items={bornicoc}/>
                           
                  </div></>);
   

}

export default ItemDetailList;
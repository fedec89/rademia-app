import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from '../src/components/NavBar/NavBar'
import Counter from '../src/components/Contador/contador'
import ItemDetailContainer from './components/ItemDetalContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {


  return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>  
          
            <Routes>                    
              <Route path="/productos" element={<ItemListContainer/>}/>
              <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/masvendido" element={<ItemDetailContainer/>}/>
              <Route path="/item/:productId" element={<ItemDetailContainer/>}/>                                
                 
            </Routes>
              
              {/* <header className="App-header">          
              
                <Counter stock={10} initial={1}/>

                <div className='prod-container'>
                  <ItemListContainer/>
                </div>

                <div>
                  <ItemDetailContainer/>
                </div>

              
              </header> */}
            
                  
        </div>
      </BrowserRouter>

  );
}

export default App;

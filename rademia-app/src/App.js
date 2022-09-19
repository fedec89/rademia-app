import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from '../src/components/NavBar/NavBar'
import {CartProvider} from './components/context/CartContext';
import ItemDetailContainer from './components/ItemDetalContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartContainer} from './components/CartContainer/CartContainer';



function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          
            <Routes>                    
              <Route path="/productos" element={<ItemListContainer/>}/>
              <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
              <Route path="/masvendido" element={<ItemDetailContainer/>}/>
              <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartContainer/>}/>                                
                 
            </Routes>           
                       
                  
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;

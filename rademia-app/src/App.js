
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from '../src/components/NavBar/NavBar'
import Counter from '../src/components/Contador/contador'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Rademia Store!</h1>
      <header className="App-header">
        <Counter stock={10} initial={1}/>
        
       <div className='prod-container'>
        <ItemListContainer/>
      </div>
      </header>
     
      
    </div>
  );
}

export default App;

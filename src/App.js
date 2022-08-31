
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from '../src/components/NavBar/NavBar'
import Counter from '../src/components/Contador/contador'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer/>
        <Counter stock={10} initial = {1}/>
      </header>
      
    </div>
  );
}

export default App;

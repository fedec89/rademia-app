
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from '../src/components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;

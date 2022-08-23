import logo from './logo.svg';
import './App.css';
import PrimerComponente from './components/PrimerComponente';
import NavBar from '../src/components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <PrimerComponente/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

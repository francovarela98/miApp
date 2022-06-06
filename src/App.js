import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         ¡Bienvenidos a mi App de React!
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

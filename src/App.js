import './App.css';
import NavBar from './componentes/NavBar/NavBar';  
import ItemListContainer from './componentes/ItemListContainer'; 
import localshopimg from './img/localshop.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>

        <h1>local shop</h1>
        <div className='localImg'>
        <img width="500" src={localshopimg} className="App-logo" alt="logo" />
        </div>
        <ItemListContainer></ItemListContainer>
        
      
    </div>
  );
}

export default App;

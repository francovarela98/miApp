import './App.css';
import NavBar from './componentes/NavBar/NavBar';  
import ItemListContainer from './componentes/ItemListContainer'; 
import localshopimg from './img/localshop.jpg'
import ItemCount from './componentes/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>

        <h1>ceramixs</h1>
        <div className='localImg'>
        <img width="500" src={localshopimg} className="App-logo" alt="logo" />
        </div>
        <ItemCount stock={5} initial={1}/>
        <ItemListContainer></ItemListContainer>
        
      
    </div>
  );
}

export default App;

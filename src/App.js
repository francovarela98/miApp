import './App.css';
import NavBar from './componentes/NavBar/NavBar';  
import ItemListContainer from './componentes/ItemListContainer'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
        <h1>local shop</h1>
        <img src= "https://thumbs.dreamstime.com/b/logotipo-local-de-la-tienda-82838863.jpg" className="App-logo" alt="logo" />
        
        <ItemListContainer></ItemListContainer>
        
      
    </div>
  );
}

export default App;

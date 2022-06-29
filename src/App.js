import './App.css';
import NavBar from './componentes/NavBar/NavBar';  
import ItemListContainer from './componentes/ItemListContainer'; 
import localshopimg from './img/localshop.jpg'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './componentes/cart/Cart'
import {CartProvider} from './context/CartContext'



function App() {
  return (
    <div className="App">
      <CartProvider>
       <BrowserRouter>
      <header className="appHeader">
      <NavBar/>
      </header>
        <div className='localImg'>
        <img width="500" src={localshopimg} className="App-logo" alt="logo" />
        </div>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}>Home</Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/articulos/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        </BrowserRouter>
         </CartProvider>
    </div>
  );
}

export default App;

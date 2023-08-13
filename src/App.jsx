import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Info from './components/Info/Info';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Carrito } from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';

function App() {



  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>}  />
            <Route path="/info " element={<Info/>} />
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/info' element={<Info/>}></Route>
          </Routes>
          
          
          
        </BrowserRouter>
      </CartProvider>
      
    </div>
  )
}

export default App

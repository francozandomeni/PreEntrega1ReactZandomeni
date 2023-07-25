import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Info from './components/Info/Info';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>

      <Routes>

        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}  />
        <Route path="/info " element={<Info/>} />

      </Routes>
        
        
        
      </BrowserRouter>

      
    </div>
  )
}

export default App

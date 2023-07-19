import './App.css'
import { Greetings } from './components/Greetings/Greetings'
import { Presentacion } from './components/Presentacion/presentacion'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Prendas from './components/Prendas/Prendas';
import Calzado from './components/Calzado/Calzado';
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
        <Greetings/>
            
        
        <Presentacion MensajeBienvenida="Esta página se creó como 
            trabajo final para un curso de React JS, 
            éste es una librería del conocido lenguaje 
            de programación Javascript, que ayuda a simplificar los procesos a la hora de programar. 
            Como soy fan del basquet
            y todo lo que lo rodea (equipos, torneos, ligas, indumentaria, zapatillas, etc.) 
            quise realizar mi proyecto con algo que me guste y que funcione como me gustaría que sea.
            Gracias por visitarnos, les deseo todo lo bueno. Un saludo, Franco." />
        
      </BrowserRouter>

      
    </div>
  )
}

export default App

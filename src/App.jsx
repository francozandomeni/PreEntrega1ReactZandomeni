import './App.css'
import { Greetings } from './components/Greetings/Greetings'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Presentacion } from './components/Presentacion/presentacion'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
        <NavBar/>
        <Greetings/>
            
        <section className='tienda'>
        <ItemListContainer nombre="Nike Precision 6 perro" imagen="../imagenes/nike precision 6.jpg" precio="65999" descripcion="Excelente calzado economico, con buen agarre y amortiguacion, para que tus canastas sean incrreibles!" />
        <ItemListContainer nombre="Nike Lebron XX" imagen="../imagenes/lebron xx.jpg" precio="89999" descripcion="calzado premium con perfecta amortiguacion. Tus Mates seran incrreibles y volaras como el Rey Lebron!" />
        <ItemListContainer nombre="Nike Lebron XX" imagen="../imagenes/lebron xx.jpg" precio="89999" descripcion="calzado premium con perfecta amortiguacion. Tus Mates seran incrreibles y volaras como el Rey Lebron!" />
        <ItemListContainer nombre="Nike Lebron XX" imagen="../imagenes/lebron xx.jpg" precio="89999" descripcion="calzado premium con perfecta amortiguacion. Tus Mates seran incrreibles y volaras como el Rey Lebron!" />

        </section>
        
        <Presentacion MensajeBienvenida="Esta página se creó como 
            trabajo final para un curso de React JS, 
            éste es una librería del conocido lenguaje 
            de programación Javascript, que ayuda a simplificar los procesos a la hora de programar. 
            Como soy fan del basquet
            y todo lo que lo rodea (equipos, torneos, ligas, indumentaria, zapatillas, etc.) 
            quise realizar mi proyecto con algo que me guste y que funcione como me gustaría que sea.
            Gracias por visitarnos, les deseo todo lo bueno. Un saludo, Franco." />
        
      
    </>
  )
}

export default App

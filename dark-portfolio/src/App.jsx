
import About from './components/about/About';
import Home from './components/home/Home'
import Inicio from './components/inicio/Inicio'
//import Navbar from './components/navbar/Navbar'
//---DEPENDENCIAS----
import { Route, Routes } from "react-router-dom";
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


function App() {

  return (
    <>    
      <Routes>

          {/* ----------------RUTAS NAVEGACION DE LA PAGINA--------------------- */}
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/home" element={<Home/>}>
            <Route exact path="/home/about" element={<About/>} />
            <Route exact path="/home/projects" element={<Projects/>} />
            <Route exact path="/home/contact" element={<Contact/>} />
            
          </Route>
          
          
          
          
            
         
        </Routes>      
    </>
  )
}

export default App

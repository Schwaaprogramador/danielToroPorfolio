
import About from './components/about/About';
import Home from './components/home/Home'
import Inicio from './components/inicio/Inicio'
//import Navbar from './components/navbar/Navbar'
//---DEPENDENCIAS----
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      
      <Routes>

          {/* ----------------RUTAS NAVEGACION DE LA PAGINA--------------------- */}
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          
          
          {/* ---------------- RUTAS ADMIN DE LA PAGINA --------------------- */}
            
         
        </Routes>
      
    </>
  )
}

export default App

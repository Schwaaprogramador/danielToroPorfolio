


import About from '../about/About';
import Description from '../description/Description';
import Hire from '../hireme/Hire';
import Other from '../other/Other';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Studies from '../studies/Studies';
import Tech from '../tech/Tech';
import styled from './Home.module.css';
// import { Outlet } from 'react-router-dom'

//HOME ES UN LAYOUT CON LA NAVBAR
const Home = () => {
  return (
        <div  className={styled.container}>

          <div className={styled.section}>
              <About />
          </div>

           <div className={styled.section1}>
            <div>
              <h3 className={styled.titulo}>Proyectos</h3>
            <Projects/>

            </div>

      
              
              <div className={styled.section1_inside}>
              <h3 className={styled.titulo}>About me</h3>
                <Description/>
                <Skills/>
              </div>
              
           </div>

           

           <div className={styled.section2}>
               <Hire/>
               <Tech/>
               <Studies/>
           </div>

           
           
           <div className={styled.section3}>
               <Other/>
           </div>
                   
               
        </div>
    
  )
}

export default Home

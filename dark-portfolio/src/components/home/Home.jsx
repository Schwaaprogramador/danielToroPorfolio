


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

          <div className={styled.about}>
              <About />
          </div>

           <div className={styled.project}>
              <Projects/>
           </div>

           <div className={styled.description}>
              <Description/>
           </div>

           <div className={styled.skills}>
            <Skills/>
           </div>

           <div className={styled.hire}>
               <Hire/>
           </div>

           <div className={styled.tech}>
               <Tech/>
           </div>

           <div className={styled.studies}>
               <Studies/>
           </div>
           
           <div className={styled.other}>
               <Other/>
           </div>
                   
               
        </div>
    
  )
}

export default Home

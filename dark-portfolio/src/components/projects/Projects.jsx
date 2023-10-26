import Project from './Project';
import styled from './Projects.module.css'
import { motion } from "framer-motion";
import { proyectos } from './ProjectsData/data';

const Projects = () => {
  return (
    

      
              <motion.div   initial={{ x: -500}} 
                            animate={{ x: 0}}                            
                            className={styled.container} 
                            >
                <div className={styled.carrucel}>

                  {proyectos.map( proyecto => <Project className={styled.item} titulo={proyecto.titulo} key={proyecto.titulo} img={proyecto.img} description={proyecto.description}/>)}
                  
                  
                </div>
              </motion.div>
        
      

    
  )
}

export default Projects

import Project1 from './Project1';
import styled from './Projects.module.css'
import { motion } from "framer-motion";

const Projects = () => {
  return (
    

      
              <motion.div   initial={{ x: -500}} 
                            animate={{ x: 0}}                            
                            className={styled.container} 
                            >
                <div className={styled.carrucel}>
                  <div className={styled.item}>
                  <Project1 />
                  </div>
                  
                  <div className={styled.item}>
                  <Project1 />
                  </div>
                  <div className={styled.item}>
                  <Project1 />
                  </div>
                  <div className={styled.item}>
                  <Project1 />
                  </div>
                  <div className={styled.item}>
                  <Project1 />
                  </div>
                  
                  <div className={styled.item}>
                  <Project1 />
                  </div><div className={styled.item}>
                  <Project1 />
                  </div>
                  
                </div>
              </motion.div>
        
      

    
  )
}

export default Projects

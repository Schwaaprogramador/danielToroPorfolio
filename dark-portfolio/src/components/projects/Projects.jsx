import styled from './Projects.module.css'
import { motion } from "framer-motion";

const Projects = () => {
  return (
    

      
              <motion.div   initial={{ x: -500}} 
                            animate={{ x: 0}}                            
                            className={styled.container} 
                            >
                <div >
                  <p>PRJECTOS</p>
                  <div className={styled.image}></div>
                </div>
              </motion.div>
        
      

    
  )
}

export default Projects

import styled from './Projects.module.css'
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className={styled.container}>
            <motion.div  initial={{ x: 2500}} animate={{ x: 0}} transition={{ duration: 2}} exit={{opacity: 0}}>
              
              <p>PRJECTOS</p>
              <div className={styled.image}></div>
              
            </motion.div>
      
    </div>
  )
}

export default Projects

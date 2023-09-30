import styled from './Skills.module.css'
import { motion } from "framer-motion";


const Skills = () => {

  


  return (
    <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}               
                className={styled.container}
                whileHover={{scale: 1.1,}}>
      <div>SKILLS</div>
        <div className={styled.image}></div>
    </motion.div>
  )
}

export default Skills

import styled from './Tech.module.css'
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}                
                className={styled.container}
                whileHover={{scale: 1.1,}}>
        <div>TECHS</div>
        <div className={styled.image}></div>
    </motion.div>
  )
}

export default Tech

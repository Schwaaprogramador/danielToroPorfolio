import styled from './Studies.module.css'
import { motion } from "framer-motion";
const Studies = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} 
                className={styled.container} 
                whileHover={{scale: 1.1,}}>
        <div>STUDIES</div>
        <div className={styled.image}></div>
    </motion.div>
  )
}

export default Studies

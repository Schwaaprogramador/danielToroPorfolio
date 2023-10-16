import styled from './Hire.module.css'
import { motion } from "framer-motion";

const Hire = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}      
                className={styled.container}
                whileHover={{backgroundColor:'transparent', scale: 1.1,}}>

        <button>HIRE ME</button>
        
    </motion.div>
  )
}

export default Hire

import styled from './Other.module.css'
import { motion } from "framer-motion";
const Other = () => {
  return (
    <motion.div className={styled.container} whileHover={{scale: 1.1,}}>
      <div>OTHER INSTEREST</div>
        <div className={styled.image}></div>
    </motion.div>
  )
}

export default Other

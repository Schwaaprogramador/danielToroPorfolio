import styled from './Contact.module.css'
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className={styled.container}>
              <motion.div  initial={{ y: 2500}} animate={{ y: 0}} transition={{ duration: 2}} exit={{opacity: 0}}>

                <p>CONTACT</p>
                <div className={styled.image}></div>

            </motion.div>
    </div>
  )
}

export default Contact

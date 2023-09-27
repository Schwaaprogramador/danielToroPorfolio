import Navbar from '../navbar/Navbar';
import styled from './About.module.css';

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={styled.container}>
            <Navbar/>   
            <motion.div  initial={{ y: -500}} animate={{ y: 0}} transition={{ duration: 1.5}} exit={{opacity: 0}}>
              
              <p>ABOUT</p>
              <div className={styled.image}></div>
              
            </motion.div>
      
    </div>
  )
}

export default About

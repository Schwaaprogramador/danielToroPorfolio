
import styled from './About.module.css';
import img from '../../assets/2.jpg'
import { motion } from "framer-motion";
//-------------ICONS-----------------------
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';


const About = () => {
  return (  
    <div>

      <motion.div   initial={{ y: -500}} 
                    animate={{ y: 0}} 
                    transition={{ duration: 3}} 
                    >

        <div className={styled.container}>


            <img src={img} className={styled.image}/>


            <div className={styled.texto}>
              <p className={styled.daniel}>DANIEL</p>
              <p className={styled.toro}>TORO</p>
              <p> Soy un apasionado desarrollador fullstack </p>
              <p> Utilizo React para el front-end y Django para el back-end </p>
            </div>


            <div className={styled.redes}>
              <SlSocialGithub className={styled.icon}/>
              <SlSocialLinkedin className={styled.icon}/>
            </div>

          </div>

      </motion.div>
      
    </div>
    
    
  )
}

export default About

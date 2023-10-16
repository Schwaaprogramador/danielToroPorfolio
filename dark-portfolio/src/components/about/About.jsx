
import styled from './About.module.css';
import img from '../../assets/2.jpg'
import { motion } from "framer-motion";
//-------------ICONS-----------------------
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';


const About = () => {
  return (  
    

      <motion.div   initial={{ y: -500}} 
                    animate={{ y: 0}} >

        <div className={styled.container}>

            <div>
              <img src={img} className={styled.image}/>
            </div>
           


            <div className={styled.texto}>
              <p className={styled.daniel}>DANIEL</p>
              <p className={styled.toro}>TORO</p>            
              <p className={styled.p}> Utilizo React para el front-end y Django para el back-end </p>
            </div>


            <div className={styled.redes}>
              <SlSocialGithub className={styled.icon}/>
              <SlSocialLinkedin className={styled.icon}/>
            </div>

          </div>

      </motion.div>
      
   
    
    
  )
}

export default About

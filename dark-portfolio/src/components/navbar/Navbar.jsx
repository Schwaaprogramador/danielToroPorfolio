import styled from './Navbar.module.css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
//-------------ICONS-----------------------
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
//SlArrowDown


const Navbar = () => {
  return (
    <div className={styled.body}>

        <motion.div  initial={{ y: -500}} animate={{ y: 0}} transition={{ duration: 2.5}}>            
          <div className={styled.image}></div>              
        </motion.div>        

        
          <motion.div initial={{ x: -500}} animate={{ x: 0}} transition={{ duration: 2.5}}>
            <div className={styled.icons}>
              <SlSocialGithub className={styled.icon}/>
              <SlSocialLinkedin className={styled.icon}/>
            </div>
          </motion.div>        


        <motion.div initial={{ x: -500}} animate={{ x: 0}} transition={{ duration: 2.5}}>
              
            <Link to='/home/about'className={styled.Link}> <p className={styled.p}>About Me</p></Link>
            <Link to='/home/projects'className={styled.Link}> <p className={styled.p}>Projects</p></Link>            
            <Link to='/home/contact'className={styled.Link}> <p className={styled.p}>Contact me</p></Link>
            <Link to='/'className={styled.Link}> <p className={styled.p}>exit</p></Link>
            
        </motion.div>
      
      
         
    </div>
  )
}

export default Navbar

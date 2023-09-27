import styled from './Navbar.module.css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styled.body}>


        <motion.div  initial={{ y: -500}} animate={{ y: 0}} transition={{ duration: 1.5}} exit={{opacity: 0}}>            
          <div className={styled.image}></div>              
        </motion.div>


        <motion.div initial={{ x: -500}} animate={{ x: 0}} transition={{ duration: 1.5}}>
            <Link to='/about'className={styled.Link}> <motion.p whileHover={{ color: '#FFFB10',}} transition={{duration: 1.1}}>About Me</motion.p></Link>
            <Link to='/projects'className={styled.Link}> <motion.p whileHover={{ color: '#FFFB10',}}>Projects</motion.p></Link>
            <Link to='/skills'className={styled.Link}> <motion.p whileHover={{ color: '#FFFB10',}}>Skills</motion.p></Link>
            <Link to='/contact'className={styled.Link}> <motion.p whileHover={{ color: '#FFFB10',}}>Contact me</motion.p></Link>
            <Link to='/'className={styled.Link}> <motion.p whileHover={{ color: '#FFFB10',}}>exit</motion.p></Link>
        </motion.div>
      
      
         
    </div>
  )
}

export default Navbar

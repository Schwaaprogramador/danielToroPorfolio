import { Link } from 'react-router-dom'
import styled from './Inicio.module.css'
import { motion } from "framer-motion"

const Inicio = () => {
  return (
    <div className={styled.container}>

            <motion.div initial={{ opacity: 0 }} animate={{  opacity: 1}} transition={{ duration: 5}}>

                <p className={styled.nombre}>DANIEL TORO</p>

            </motion.div>

            <span className={styled.tech}>FULLSTACK WEB DEVELOPER</span>
            
            
            <motion.div animate={{ opacity: 1 }}                         
                        initial={{ opacity: 0 }}
                        whileHover={{ scale: 1.2,}} >                        

                  <Link to='/home/about' className={styled.button}>ENTRAR</Link>

            </motion.div>
            
        
    </div>
  )
}

export default Inicio

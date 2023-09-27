
import Navbar from '../navbar/Navbar';
import { motion } from "framer-motion";
import styled from './Home.module.css';



const Home = () => {
  return (
        <div  className={styled.container}>
            <Navbar/>
            <motion.div  initial={{ y: -500}} animate={{ y: 0}} transition={{ duration: 1.5}} exit={{opacity: 0}}>
              
                
              <div>HOME</div>
              
            </motion.div>
               
        </div>


        


      
    
  )
}

export default Home

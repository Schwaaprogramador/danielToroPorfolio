
import Navbar from '../navbar/Navbar';

import styled from './Home.module.css';
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
        <div  className={styled.container}>
            <Navbar/>
            <Outlet className={styled.outlet}/>
               
        </div>
    
  )
}

export default Home

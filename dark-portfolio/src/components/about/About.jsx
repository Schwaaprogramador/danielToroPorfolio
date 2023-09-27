
import styled from './About.module.css';

import { motion } from "framer-motion";

const About = () => {
  return (  
    <div>
            <motion.div   initial={{ y: -2500}} 
                          animate={{ y: 0}} 
                          transition={{ duration: 3}} 
                          >

                <div className={styled.container}>


                  <section className={styled.section1}>

                    <p className={styled.p}>¡Saludos!</p>
                    <p className={styled.pt}> Soy un apasionado desarrollador fullstack con un entusiasmo insaciable 
                      por la programación, el ajedrez y el emocionante mundo del trading.</p>

                  </section>


                  <section className={styled.section2}>

                      <p className={styled.p}>ABOUT ME</p>
                      <div className={styled.imagenes}>
                        <div className={styled.image}></div>
                        <div className={styled.image}></div>
                        <div className={styled.image}></div>
                      </div>

                      <div>
                        <p className={styled.pt}> Mi vida se divide entre el teclado y el tablero de ajedrez, y me encanta combinar 
                            la precisión de la programación con la estrategia del ajedrez para resolver problemas 
                            de manera creativa.</p>
                            <p className={styled.pt}>Además, me sumerjo en el mundo del trading, donde aplico mi 
                                              habilidad para analizar datos y tomar decisiones estratégicas en los mercados
                                              financieros. Esta sección sobre mí es una ventana a mi mundo, donde compartiré 
                                              mis experiencias y conocimientos en estas pasiones que me impulsan todos los días.
                                              ¡Únete a mí en este viaje de desarrollo, estrategia y aprendizaje constante!</p>
                      </div>
                  </section>

                  <section className={styled.section2}>
                    <p className={styled.p}>SKILLS</p>

                  </section>         
                  

                </div>
              
              
            </motion.div>
            </div>
    
  )
}

export default About

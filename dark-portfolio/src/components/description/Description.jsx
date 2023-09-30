import styled from './Description.module.css'

const Description = () => {
  return (
    <div className={styled.container}>
     <p className={styled.pt}> Soy un apasionado desarrollador fullstack con un entusiasmo insaciable 
                      por la <span className={styled.span}>programación</span>, el <span className={styled.span}>ajedrez </span> 
                       y el emocionante mundo del <span className={styled.span}>trading</span>.</p>
                       <div>
                        <p className={styled.pt2}> Mi vida se divide entre el teclado y el tablero de ajedrez, y me encanta combinar 
                            la precisión de la programación con la estrategia del ajedrez para resolver problemas 
                            de manera creativa.</p>
                            <p className={styled.pt2}>Además, me sumerjo en el mundo del trading, donde aplico mi 
                                              habilidad para analizar datos y tomar decisiones estratégicas en los mercados
                                              financieros. Esta sección sobre mí es una ventana a mi mundo, donde compartiré 
                                              mis experiencias y conocimientos en estas pasiones que me impulsan todos los días.
                                              ¡Únete a mí en este viaje de desarrollo, estrategia y aprendizaje constante!</p>
                      </div>
    </div>
  )
}

export default Description

import styled from './Project.module.css';
//para solucionar los errores de eslint.
import PropTypes from 'prop-types';


const Project = (props) => {


  const { img } = props;

  const fondo = {
    background: `url(${img}) no-repeat center top`,
    backgroundSize: 'cover',
    // Otras propiedades de estilo que desees aplicar
  };
  
  return (
    <div className={styled.carrucel} >
      <div className={styled.item} style={fondo}>

          <div className={styled.info}>


              <div className={styled.text}>
                {props.titulo}
              </div>
              <div className={styled.description}>
                {props.description}
              </div>
              <div className={styled.deploy}>
                {props.deploy}
              </div>
          </div>

      </div>
    </div>
  )
}

// para solucionar los errores de eslint
Project.propTypes = {
  img: PropTypes.node,
  titulo: PropTypes.node,
  deploy: PropTypes.node,
  description: PropTypes.node,
};

export default Project

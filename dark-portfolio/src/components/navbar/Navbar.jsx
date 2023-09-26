import styled from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styled.body}>

            <ul className={styled.ul}>
                <li className={styled.li}><a className={styled.a} href="#" data-text="Home">Home</a></li>
                <li className={styled.li}><a className={styled.a} href="#" data-text="About KDN">About KDN</a></li>
                <li className={styled.li}><a className={styled.a} href="#" data-text="Services">Services</a></li>
                <li className={styled.li}><a className={styled.a} href="#" data-text="Portifolio">Portifolio</a></li>
                <li className={styled.li}><a className={styled.a} href="#" data-text="Our Team">Our Team</a></li>
                <li className={styled.li}><a className={styled.a} href="#" data-text="Contact">Contact</a></li>
            </ul>
         
    </div>
  )
}

export default Navbar

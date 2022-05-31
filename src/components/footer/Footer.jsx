import React from 'react'
import './footer.css'
import{FaFacebookF,FaLinkedin,FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Thiago Mendes</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/thiagomendes92dev"><FaFacebookF/></a>
        <a href="https://www.linkedin.com/in/thiagomcoscrato/"><FaLinkedin/></a>
        <a href="https://github.com/ThiagoMendes92"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Thiago Mendes. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
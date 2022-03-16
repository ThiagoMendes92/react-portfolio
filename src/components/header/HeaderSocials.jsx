import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/thiagomcoscrato/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ThiagoMendes92" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/thiagomendes_beck3rs/" target="_blank"><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials
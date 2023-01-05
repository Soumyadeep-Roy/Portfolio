import React from 'react'
import './styles.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import image from './IMG20220209210454-removebg-preview.jpg';

function Home() {
  return (
    <div id='home' className='home_section'>
      <div>
        <div className='intro'>
        <strong>Hi, I am Soumyadeep Roy</strong>
        </div>
        <div className='work'>
          Web Developer and <br/> Technology Enthusiast
        </div>
        <div className='clg'>
        I am an Electronics and Communication Engineering <br/> undergraduate student at The National Institute of Engineering, Mysore.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        </div>
        <div className='lnk'>
        <HashLink smooth to="/#contact">Contact Me</HashLink>
        <a href='https://drive.google.com/file/d/17F9hVfckSGjjNuhXKtdiSssxnXPIJpvA/view?usp=share_link' target='_black' className='btn'>My Resume</a>
        </div>
        <div className='profile_links'>
        <a href='https://www.instagram.com/not_a._.nerd/' target='_blank'><AiOutlineInstagram/></a>
        <a href='https://github.com/Soumyadeep-Roy' target='_blank'><AiFillGithub/></a>
        <a href='https://www.linkedin.com/in/soumyadeep-roy-1a6b75206/' target='_blank'><AiFillLinkedin/></a>
        <a href='mailto:babai290102@gmail.com' target='_blank'><HiOutlineMail/></a>
        </div>
      </div>
      <div className='home_section_img'>
        <img src={image} height='250' width='250' />
      </div>
      </div>
  )
}

export default Home
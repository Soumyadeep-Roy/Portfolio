import React from 'react'
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Contact() {
  return (
    <div id='contact' className='contact_section'>
        <div className='contact_title'>
            <center><strong>
            Contact Me
            </strong></center>
        </div>
        <div className='contact_form_section'>
        <div className='contact_form_left'>
            <div>
            <IoMdCall/>&nbsp;<strong>Call Me :</strong>
            <p>9685883724</p>
            </div>
            <br/>
            <div>
            <MdEmail/>&nbsp;<strong>Email Me :</strong>
            <p>babai290102@gmail.com</p>
            </div>
            <br/>
            <div>
            <strong>Find Me on Social Media :</strong>
            <p><a href='https://www.instagram.com/not_a._.nerd/' target='_blank'><AiOutlineInstagram/></a>&nbsp;
            <a href='https://www.linkedin.com/in/soumyadeep-roy-1a6b75206/' target='_blank'><AiFillLinkedin/></a></p>
            </div>
        </div>
        <div className='contact_form_right'>
            <label>Enter your name: </label>
            <input placeholder='Name'></input>
            <label>Enter your Email: </label>
            <input placeholder='Email'></input>
            <label>Leave your message: </label>
            <textarea placeholder='message'></textarea>
            <button>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Contact
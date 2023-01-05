import React from 'react'
import './styles.css'
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { RxCross2 } from 'react-icons/rx';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineContacts } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineSchool } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

function Navbar() {

  const [expand, setexpand] = useState(false)

  return (
    <div className='nav-stick'>
        <div className='menu_btn'  onClick={() => {setexpand(!expand)}}>
        <HiMenuAlt3/>
        </div>
        <div className={expand? "navbar_expand":"navbar_closed"} onClick={()=>{setexpand(!expand)}}>
        <span className='x_design'><RxCross2/></span>
        <HashLink smooth to="/#home"><a>Home  <AiOutlineHome/></a></HashLink>
        <HashLink smooth to="/#about"><a>About  <AiOutlineUser/></a></HashLink>
        <HashLink smooth to="/#education"><a>Education  <MdOutlineSchool/></a></HashLink>
        <HashLink smooth to="/#skills"><a>Skills  <GiSkills/></a></HashLink>
        <HashLink smooth to="/#projects"><a>Projects  <AiOutlineFundProjectionScreen/></a></HashLink>
        <HashLink smooth to="/#contact"><a>Contact Me  <AiOutlineContacts/></a></HashLink>
        </div>

        <div className='nav'>
        <HashLink smooth to="/#home"><a>Home</a></HashLink>
        <HashLink smooth to="/#about"><a>About</a></HashLink>
        <HashLink smooth to="/#education"><a>Education</a></HashLink>
        <HashLink smooth to="/#skills"><a>Skills</a></HashLink>
        <HashLink smooth to="/#projects"><a>Projects</a></HashLink>
        <HashLink smooth to="/#contact"><a>Contact Me</a></HashLink>
        </div>
    </div>
  )
}

export default Navbar
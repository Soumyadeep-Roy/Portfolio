import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';

function Skills() {

  const [selected, setSelected] = useState(null)

  const toggle = (e) => {
    if(selected === e) {
      return setSelected(null)
    }
    setSelected(e)
  }

  return (
    <div id='skills' className='skill_section'>
        <div className='skill_topic'><center>
        <strong>
        Skills
        </strong>
        </center></div>
        <div className='skill_wrapper'>
          <div className='skill_accordian'>
            { data.map((item, e) => (
              <div className='skill_item'>
                <div className='skill_title'>
                  {item.skill} 
                  <span onClick={()=>toggle(e)}>
                  {selected === e ? <MdOutlineKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
                  </span>
                </div>
                <div className= {selected === e ? 'skill_show' : 'skill_content'}>
                  {item.skill_expand}
                </div>
              </div>              
            ))}
          </div>
        </div>
    </div>
  )
}

const data = [
  {
    id : 1,
    skill: 'Programming Languages',
    skill_expand: 
    <ul>
      <li>C</li>
      <li>C++</li>
      <li>Python</li>
      <li>JavaScript</li>
    </ul>
  },

  {
    id : 2,
    skill: 'Full Stack Development',
    skill_expand: 
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Reactjs</li>
      <li>Nodejs</li>
      <li>Expressjs</li>
      <li>MongoDB</li>
    </ul>
  },

  {
    id : 3,
    skill: 'Tools and Technologies',
    skill_expand: 
    <ul>
      <li>Git</li>
      <li>Github</li>
      <li>Socket.io</li>
    </ul>
  }
]

export default Skills
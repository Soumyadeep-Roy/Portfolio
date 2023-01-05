import React from 'react'
import image1 from './Project Images/Chat app img.png'
import image2 from './Project Images/weather app img.png'
import { useState } from 'react'

function Projects() {

  const [id, setslide] = useState(0);

  return (
    <div id='projects' className='project_section'>
        <div className='project_title'>
            <center><strong>
            Projects
            </strong></center>
        </div>
        <div className = 'project_section_box'>
        { data.map((item,id) => {
        return (
              <div className='project_item'>
                <div className='project_image'>
                  {item.image} 
                </div>
                <div className='project_name'>
                  <strong>
                  {item.name}
                  </strong>
                </div>
                <div className='project_about'>
                  {item.about}
                </div>
                <div className='project_link'>
                  <a href= {item.link} target="_blank" >Github link</a>
                </div>
              </div>              
            )})}
        </div>
    </div>
  )
}

const data = [
  {
    id : 1,
    name: "Chat Application",
    about: "Used HTML, CSS, JavaScript to for the client side and NodeJs, ExpressJs and Socket.io for the backend, anyone can join and start by entering their name",
    link: "https://github.com/Soumyadeep-Roy/Chat-App",
    image: <img src={image1} height='250' width='440'/>
  },

  {
    id : 2,
    name: "Weather Application",
    about: "Used HTML, CSS, JavaScript for the frontend and the Openweather API to display the real time weather information",
    link: "https://github.com/Soumyadeep-Roy/Weather-App",
    image: <img src={image2} height='250' width='440'/>
  }
  
]

export default Projects
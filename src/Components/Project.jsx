import React, { useState } from 'react'
import "../Css/Project.css"
import CoWIN_img from "../assets/Project/CoWIN.png"
import AndroidCLI_img from "../assets/Project/AndroidCLI.png"
import Ecommerce_img from "../assets/Project/Ecommerce.png"
import ProjectImg from './ProjectImg'
import ProjectInfo from './ProjectInfo'
function Project() {
    const [hover,sethover] = useState(null);
    const project = [
        {
           id:1,
           name:"CoWIN Dashboard",
           description:"This is the project.",
           imag:CoWIN_img,
           link:"https://hanshyam.github.io/CoWIN-Dashboard/",
        },
        {
          id:2,
           name:"AndroidCLI",
           description:"This is the project.",
           imag:AndroidCLI_img,
           link:"https://hanshyam.github.io/Android_CLI_Website/",
        },
        {
          id:3,
           name:"Ecommerce Website",
           description:"This is the project.",
           imag:Ecommerce_img,
           link:"https://hanshyam.github.io/Ecommerce-website/",
        },
    ]

  return (
    <div className='Project_section'>
        <h1>My Projects</h1>
        <div className='pbox'>
            {project.map((data)=>(
                 <div key={data.name} 
                 onMouseEnter={()=>sethover(data.id)}
                 onMouseLeave={()=>sethover(null)}
                 className='project_box'>
                    {data.id === hover?<ProjectInfo data = {data}/> : <ProjectImg data = {data} />}
                 </div> 
            ))}
        </div>
    </div>
  )
}

export default Project

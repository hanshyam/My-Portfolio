import React, { useState } from 'react'
import "../Css/Project.css"
import CoWIN_img from "../assets/Project/CoWIN.png"
import AndroidCLI_img from "../assets/Project/AndroidCLI.png"
import Ecommerce_img from "../assets/Project/Ecommerce.png"
function Project() {
    const project = [
        {
           id:1,
           name:"CoWIN Dashboard",
           description:"Created an interactive COWIN Dashboard to visualize and analyze COVID-19 vaccination trends and demographics for informed decision-making.",
           imag:CoWIN_img,
           link:"https://hanshyam.github.io/CoWIN-Dashboard/",
        },
        {
          id:2,
           name:"AndroidCLI",
           description:"Created an Android terminal app with essential commands, history, and auto-completion, enhancing portability and reducing costs.",
           imag:AndroidCLI_img,
           link:"https://hanshyam.github.io/Android_CLI_Website/",
        },
        {
          id:3,
           name:"Ecommerce Website",
           description:"Developed an Ecommerce Website with seamless shopping, intuitive navigation, and efficient cart management using LocalStorage.",
           imag:Ecommerce_img,
           link:"https://hanshyam.github.io/Ecommerce-website/",
        },
    ]

  return (
    <div className='Project_section'>
        <h1>My Projects</h1>
        <div className='pbox'>
          {
            project.map((data)=>(
              <div className='project_box'>
              <div className="project-info">
                <img src={data.imag}/>
                <div className='Other-info'>
                   <h4>{data.name}</h4>
                   <p>{data.description}</p>
                </div>
              </div>
              <a target='_blank' href={data.link}><button>VISIT</button></a>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default Project

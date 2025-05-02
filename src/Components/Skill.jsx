import React from 'react'
import html5_img from "../assets/html5.webp"
import css_img from "../assets/css.png"
import JavaScript_img from "../assets/Javascript.png"
import React_img from "../assets/React.webp"
import git_img from "../assets/git.webp"
import Bootstap_img from "../assets/Bootstap.png"
import Express_img from "../assets/Express.png"
import Node_img from "../assets/Node.png"
import Mongo_img from "../assets/mongodb.svg"
import "../Css/Skill.css"
function Skill() {
    const skill=[
        {
            img:html5_img,
            name:"Html",
        },
        {
            img:css_img,
            name:"Css",
        },
        {
            img:JavaScript_img,
            name:"JavaScript",
        },
        {
            img:React_img,
            name:"ReactJs",
        },
        {
            img:git_img,
            name:"Git",
        },
        {
            img:Bootstap_img,
            name:"Bootstrap",
        },
        {
            img:Express_img,
            name:"ExpressJs",
        },
        {
            img:Node_img,
            name:"NodeJs",
        },
        {
            img:Mongo_img,
            name:"MongoDB",
        },
    ]
  return (
    <div className='Skill_section'>
        <h1>My Skills</h1>
        <div className="box">
          {skill.map((data) =>(
            <div className='Skill_box' key={data.name}>
             <img className='skillImg' src={data.img}></img>
             <h3>{data.name}</h3>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Skill

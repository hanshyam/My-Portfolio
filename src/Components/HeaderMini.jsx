import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import icon from "../assets/icon.png"

function HeaderMini({scrollToSection,homeRef,aboutRef,contactRef}) {
  const [ham,setHam] = useState(false);
  return (
    <div className='headerMini'>
        <div className='hmini'>
            <div>
                <img src = {icon}/>
            </div>
            <div className='HamLogo' onClick={()=>{
              if(ham===true)
              {
                setHam(false)
              }
              else{
                setHam(true)
              }
            }}>
                <div className='hamline'></div>
                <div className='hamline'></div>
                <div className='hamline'></div>
            </div>
         </div>
         {ham===true?
          <div className='haminfo'>
             <li onClick={() => scrollToSection(homeRef)}><a>Home</a></li>
             <li onClick={() => scrollToSection(aboutRef)}><a>About</a></li>
             <li onClick={() => scrollToSection(contactRef)}><a>Contact</a></li>
             <li><a href='https://github.com/hanshyam/Resume/releases/download/resume/Ghanshyam_Resume.pdf'>Resume</a></li>
         </div>
         : null}
         
    </div>
  )
}

export default HeaderMini;

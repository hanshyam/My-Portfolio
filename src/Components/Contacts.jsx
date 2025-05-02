import React from "react";
import "../Css/Contacts.css";
import "../Css/Contact.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <div className="Contacts_box">
       <h1>Message ME</h1>
       <div className="Cbox">
          <input type="email" placeholder="Enter your email"/>
          <textarea rows={4} placeholder="Write your message here"/>
          <button>Submit</button>
       </div>
       <div className="Contact-heading" style={{bottom:"-70px"}}>
        <div className="contact-line" style={{width:"44vw"}}></div>
        <div className="contact-icon-box">
        <FaGithub className="contact-icon" style={{cursor:"pointer"}}/>
        <FaLinkedin className="contact-icon" style={{cursor:"pointer"}}/>
        <SiLeetcode className="contact-icon" style={{cursor:"pointer"}}/>
        </div>
        <div className="contact-line"></div>
      </div>
    </div>
  );
}

export default Contact;

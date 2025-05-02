import React from "react";
import "../Css/Contact.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <div className="Contact_box">
      <div className="Contact-heading" style={{bottom:"-35px"}}>
        <div className="contact-line" style={{width:"44vw"}}></div>
        <div className="contact-icon-box">
        <a href="mailto:ghanshyampatidar3011@gmail.com"><FiMail className="mail" /></a>
        <a href="tel:7566650644"><FiPhone className="mail" /></a>
        <FaGithub className="contact-icon"/>
        <FaLinkedin className="contact-icon"/>
        <SiLeetcode className="contact-icon"/>
        </div>
        <div className="contact-line"></div>
      </div>
    </div>
  );
}

export default Contact;

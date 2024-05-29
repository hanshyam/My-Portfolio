import React from "react";
import "../Css/Contact.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <div className="Contact_box">
      <div className="Contact-heading" style={{top:"-37px"}}>
        <div className="contact-line"></div>
        <h1>Contact Me</h1>
        <div className="contact-line"></div>
      </div>
      <div className="Contact-info">
        <div className="Contact-info-item">
          <FiMail className="mail" />
          <h4>ghanshyampatidar3011@gmail.com</h4>
        </div>
        <div className="Contact-info-item">
          <FiPhone className="mail" />
          <h4>7566650644</h4>
        </div>
      </div>
      <div className="Contact-heading" style={{bottom:"-35px"}}>
        <div className="contact-line" style={{width:"44vw"}}></div>
        <div className="contact-icon-box">
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

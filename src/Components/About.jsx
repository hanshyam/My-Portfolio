import React from "react";
import "../Css/About.css";

function About() {
  return (
    <div className="About_section">
      <h1>About</h1>
      <div style={{ display: "flex" }}>
        <div className="line"></div>
        <h4 className="About_h4">
          Hello! I'm Ghanshyam Patidar, a passionate Full Stack MERN Developer with a strong foundation in Data Structures and Algorithms (DSA). I specialize in building dynamic, responsive web applications using MongoDB, Express.js, React.js, and Node.js. With a solid grasp of both frontend technologies like HTML, CSS, JavaScript, and React, and backend development using Node.js and Express, I create seamless user experiences backed by robust server-side logic.

         <br/><br/>Although I haven't yet worked in a company or startup, my personal and academic projects demonstrate my ability to develop complete web solutions—from designing intuitive user interfaces to managing backend APIs and databases. My strong problem-solving skills, honed through consistent DSA practice and coding challenges, allow me to build scalable and efficient applications.
        </h4>
      </div>
    </div>
  );
}

export default About;

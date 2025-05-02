import { FaSearch } from "react-icons/fa";
import icon from "../assets/icon.png"
const Header = ({scrollToSection,homeRef,aboutRef,contactRef}) => {
    return(
      <div className="header">
         <div>
            <img  width="80px" src = {icon}/>
         </div>
         <div className="header-option">
            <ul>
               <li onClick={() => scrollToSection(homeRef)}>Home</li>
               <li onClick={() => scrollToSection(aboutRef)}>About</li>
               <li onClick={() => scrollToSection(contactRef)}>Contact</li>
               <a href="https://github.com/hanshyam/Resume/blob/main/Ghanshyam_new_resume.pdf"><li>Resume</li></a>
            </ul>
         </div>
      </div>
    );
}
export default Header
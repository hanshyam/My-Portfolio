import { FaSearch } from "react-icons/fa";
import icon from "../assets/icon.png"
const Header = () => {
    return(
      <div className="header">
         <div>
            <img  width="80px" src = {icon}/>
         </div>
         <div className="header-option">
            <ul>
               <li onClick={()=>Scrollhandler}>Home</li>
               <li>About</li>
               <li>Contact</li>
               <a href="https://github.com/hanshyam/Resume/releases/download/resume/Ghanshyam_Resume.pdf"><li>Resume</li></a>
            </ul>
         </div>
         <div className="search-input">
            <input type="search" placeholder="Search"></input>
            <FaSearch className="search-icon"/>
         </div>
      </div>
    );
}
export default Header
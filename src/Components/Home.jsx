import {ReactTyped} from "react-typed";
import "../Css/Home.css";
import Header from "./Header";
import HeaderMini from "./HeaderMini";
import { useState, useEffect } from "react";

const Home = ({ scrollToSection, homeRef, aboutRef, contactRef }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="home">
        {/* Toggle between Header and HeaderMini based on window width */}
        {windowWidth <= 700 ? (
          <HeaderMini
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
        ) : (
          <Header
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
        )}
        <div className="home-other-parts">
          <div className="home-info">
            <h2>
              I'm{" "}
              <span className="my-Name">
                <ReactTyped
                  strings={["  Ghanshyam Patidar"]}
                  typeSpeed={100}
                  loop
                />
              </span>
            </h2>
            <h2>Full Stack Developer &<br />Problem Solver</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

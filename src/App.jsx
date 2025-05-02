import { useRef } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Thank from './Components/Thank';
import Contacts from './Components/Contacts';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='app'>
      <div ref={homeRef}>
      <Home
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        ref={homeRef} // Ensure ref is applied correctly
      />
      </div>
      
      <div ref={aboutRef}>
        <About />
      </div>
      
      <Skill />
      <Project />
      {/* <Contacts/> */}

      <div ref={contactRef}>
        <Contacts />
      </div>
      
      <Thank />
    </div>
  );
};

export default App;

import React from 'react';
import Header from './Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Menu from './Header/Header';
import Particles from './Componets/Particles';
import Certificate from './Pages/certificate';
<<<<<<< HEAD
import Experience from './Pages/Experience';
=======
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
// import {motion,useScroll} from 'Motion/react';



function App() {

  
  // const{scrollYProgress}=useScroll();
  return(
    
    <>
    
          {/* <Header></Header> */}
{/*     
          <motion.div
  style={{scale:scrollYProgress}}

  className='w-full   z-20  left-0  m-0 h-5 fixed origin-left bg-gray-500'
  >

  </motion.div> */}
        
          <Menu></Menu>
          <Home></Home>
          <About></About>
<<<<<<< HEAD
          <Experience></Experience>
=======
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
          <Project></Project>
          <Skill></Skill>
          <Certificate></Certificate>
        
          <Contact></Contact>
          
          <Footer></Footer>
    </>
  );
}

export default App

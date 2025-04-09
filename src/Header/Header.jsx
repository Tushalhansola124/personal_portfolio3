import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from 'react-scroll'; 
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";



const Header=()=>{

const headerRef=useRef();
useGSAP(()=>{
  gsap.from(".v1,.v2,.v3,.v4,.v5",{
    y:30,
    duration:0.6,
    opacity:0,
    stagger:0.7,
  })
})
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

const closeMenu = () => {
  setIsOpen(false);
};

return (
  <>




    <nav className="bg-white p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-white font-bold text-2xl">
        <img 
        className="md:w-[5vw] md:rounded-3xl md:h-[5vw]
        w-[12vw]  rounded-3xl h-[12vw]
        "

        src="Logo1.png"></img>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-black right-10 text-7xl"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-4">
        <ul className="flex gap-[4vw] text-black font-mono font-bold text-2xl cursor-pointer">
        <li>
        <ScrollLink to="home" spy={true} smooth={true} offset={10} duration={400}>Home</ScrollLink>
        </li>
        <li>
        <ScrollLink to="about" spy={true} smooth={true} offset={10} duration={400}>
              About Us
              </ScrollLink>
        </li>
        <li>
        <ScrollLink to="project" spy={true} smooth={true} offset={10} duration={400}>
                MyProject
                </ScrollLink>
        </li>
        <li>
        <ScrollLink to="skill" spy={true} smooth={true} offset={10} duration={400}>
                Skill
                </ScrollLink>

        </li>
        <li>
        <ScrollLink to="contact" spy={true} smooth={true} offset={10} duration={400}>
              Contact Me
              </ScrollLink>
        </li>
        </ul>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="lg:hidden bg-gray-950 p-10 mt-4">
        <button
          className="text-white absolute top-25 right-10"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="gap-[4vw] font-mono text-white cursor-pointer">
        <li>
        <ScrollLink to="home" spy={true} smooth={true} offset={10} duration={400}>Home</ScrollLink>
        </li>
        <li>
        <ScrollLink to="about" spy={true} smooth={true} offset={10} duration={400}>
              About Us
              </ScrollLink>
        </li>
        <li>
        <ScrollLink to="project" spy={true} smooth={true} offset={10} duration={400}>
                MyProject
                </ScrollLink>
        </li>
        <li>
        <ScrollLink to="skill" spy={true} smooth={true} offset={10} duration={400}>
                Skill
                </ScrollLink>

        </li>
        <li>
        <ScrollLink to="contact" spy={true} smooth={true} offset={10} duration={400}>
              Contact Me
              </ScrollLink>
        </li>
        </ul>
      </div>
    )}
  </nav>

  </>
  );



  
}
export default Header;
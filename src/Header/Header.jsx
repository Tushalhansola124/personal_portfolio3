import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // GSAP Animation
  useGSAP(() => {
    gsap.from(".v1,.v2,.v3,.v4,.v5", {
      y: 30,
      duration: 0.6,
      opacity: 0,
      stagger: 0.7,
    });
  });

  // Load dark mode on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  // Toggle theme globally on <html>
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white w-full dark:bg-gray-950 p-4 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-bold text-2xl">
          <img
            src="Logo1.png"
            className="md:w-[5vw] md:h-[5vw] w-[12vw] h-[12vw] rounded-3xl"
            alt="Logo"
          />
        </a>

        {/* Theme Toggle */}
        {/* <button
          onClick={toggleDarkMode}
          className="text-xl px-3 py-1 rounded-full border dark:text-white text-black border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? "" : ""}
        </button> */}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black dark:text-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-[4vw] font-mono font-bold text-2xl cursor-pointer text-black dark:text-white">
          <li className="v1 hover:text-gray-400">
            <ScrollLink
              to="home"
              smooth
              spy
              offset={10}
              duration={400}
              activeClass="active-link"
            >
              Home
            </ScrollLink>
          </li>
          <li className="v2 hover:text-gray-400">
            <ScrollLink
              to="about"
              smooth
              spy
              offset={10}
              duration={400}
              activeClass="active-link"
            >
              About Us
            </ScrollLink>
          </li>
          <li className="v3 hover:text-gray-400">
            <ScrollLink
              to="project"
              smooth
              spy
              offset={10}
              duration={400}
              activeClass="active-link"
            >
              MyProject
            </ScrollLink>
          </li>
          <li className="v4 hover:text-gray-400">
            <ScrollLink
              to="skill"
              smooth
              spy
              offset={10}
              duration={400}
              activeClass="active-link"
            >
              Skill
            </ScrollLink>
          </li>
          <li className="v5 hover:text-gray-400">
            <ScrollLink
              to="certificate"
              smooth
              spy
              offset={10}
              duration={400}
              activeClass="active-link"
            >
              Certificate
            </ScrollLink>
          </li>
          <li className="v5 hover:text-gray-400">
            <ScrollLink
              to="contact"
              smooth
              spy
              offset={10}
              duration={400}
              activeClass="active-link"
            >
              Contact Me
            </ScrollLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden dark:bg-gray-900 bg-gray-100 p-6 mt-4 rounded-lg shadow relative">
          <button
            onClick={closeMenu}
            className="text-black dark:text-white absolute top-4 right-4"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col gap-6 mt-6 font-mono text-xl text-black dark:text-white">
            <li onClick={closeMenu}>
              <ScrollLink
                to="home"
                smooth
                spy
                offset={10}
                duration={400}
                activeClass="active-link"
              >
                Home
              </ScrollLink>
            </li>
            <li onClick={closeMenu}>
              <ScrollLink
                to="about"
                smooth
                spy
                offset={10}
                duration={400}
                activeClass="active-link"
              >
                About Us
              </ScrollLink>
            </li>
            <li onClick={closeMenu}>
              <ScrollLink
                to="project"
                smooth
                spy
                offset={10}
                duration={400}
                activeClass="active-link"
              >
                MyProject
              </ScrollLink>
            </li>
            <li onClick={closeMenu}>
              <ScrollLink
                to="skill"
                smooth
                spy
                offset={10}
                duration={400}
                activeClass="active-link"
              >
                Skill
              </ScrollLink>
            </li>
            <li className="v5 hover:text-gray-400">
            <ScrollLink
              to="certificate"
              smooth
              spy
              offset={10}
              duration={400}
              activeClass="active-link"
            >
            Certificate
            </ScrollLink>
          </li>
            <li onClick={closeMenu}>
              <ScrollLink
                to="contact"
                smooth
                spy
                offset={10}
                duration={400}
                activeClass="active-link"
              >
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

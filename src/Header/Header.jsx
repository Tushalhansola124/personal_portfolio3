import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

<<<<<<< HEAD
  // Desktop Animation
=======
  // GSAP Animation
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
  useGSAP(() => {
    gsap.from(".v1,.v2,.v3,.v4,.v5", {
      y: 30,
      duration: 0.6,
      opacity: 0,
<<<<<<< HEAD
      stagger: 0.2,
    });
  });

  // Dark Mode Load
=======
      stagger: 0.7,
    });
  });

  // Load dark mode on mount
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

<<<<<<< HEAD
=======
  // Toggle theme globally on <html>
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

<<<<<<< HEAD
  const toggleMenu = () => {
    setIsOpen(true);
    gsap.fromTo(
      ".mobile-menu",
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
    );
  };

  const closeMenu = () => {
    gsap.to(".mobile-menu", {
      x: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setIsOpen(false),
    });
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-950 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

=======
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white w-full dark:bg-gray-950 p-4 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
        {/* Logo */}
        <a href="#" className="font-bold text-2xl">
          <img
            src="Logo1.png"
<<<<<<< HEAD
            className="md:w-[5vw] md:h-[5vw] w-[12vw] h-[12vw] rounded-2xl"
=======
            className="md:w-[5vw] md:h-[5vw] w-[12vw] h-[12vw] rounded-3xl"
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
            alt="Logo"
          />
        </a>

<<<<<<< HEAD
        {/* Mobile Button */}
        <button className="lg:hidden text-white" onClick={toggleMenu}>
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
=======
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
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

<<<<<<< HEAD
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 font-mono font-bold text-lg text-white">
          <li className="v1 hover:text-gray-300"><ScrollLink to="home" smooth>Home</ScrollLink></li>
          <li className="v2 hover:text-gray-300"><ScrollLink to="about" smooth>About Me</ScrollLink></li>
          <li className="v3 hover:text-gray-300"><ScrollLink to="experience" smooth>Experience</ScrollLink></li>
          <li className="v4 hover:text-gray-300"><ScrollLink to="project" smooth>MyProject</ScrollLink></li>
          <li className="v5 hover:text-gray-300"><ScrollLink to="skill" smooth>Skill</ScrollLink></li>
          <li className="v5 hover:text-gray-300"><ScrollLink to="certificate" smooth>Certificate</ScrollLink></li>
          <li className="v5 hover:text-gray-300"><ScrollLink to="contact" smooth>Contact Me</ScrollLink></li>
        </ul>
      </div>

      {/* ✅ SOLID COLOR PROFESSIONAL MOBILE MODAL */}
      {isOpen && (
        <div className="mobile-menu fixed top-0 right-0 w-[80vw] h-full
          bg-gradient-to-b from-gray-900 to-black
          shadow-2xl p-8 z-50 text-white">

          {/* Close Button */}
          <button onClick={closeMenu} className="absolute top-6 right-6 text-white">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-8 mt-20 text-xl font-semibold tracking-wide">
            <li onClick={closeMenu} className="hover:text-gray-400 transition">
              <ScrollLink to="home" smooth>Home</ScrollLink>
            </li>
            <li onClick={closeMenu} className="hover:text-gray-400 transition">
              <ScrollLink to="about" smooth>About Me</ScrollLink>
            </li>
            <li onClick={closeMenu} className="hover:text-gray-400 transition">
              <ScrollLink to="experience" smooth>Experience</ScrollLink>
            </li>
            <li onClick={closeMenu} className="hover:text-gray-400 transition">
              <ScrollLink to="project" smooth>MyProject</ScrollLink>
            </li>
            <li onClick={closeMenu} className="hover:text-gray-400 transition">
              <ScrollLink to="skill" smooth>Skill</ScrollLink>
            </li>
            <li onClick={closeMenu} className="hover:text-gray-400 transition">
              <ScrollLink to="certificate" smooth>Certificate</ScrollLink>
            </li>
            <li onClick={closeMenu} className="hover:text-gray-400 transition">
              <ScrollLink to="contact" smooth>Contact Me</ScrollLink>
=======
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
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

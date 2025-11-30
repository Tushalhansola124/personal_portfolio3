import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import GradientText from "../Componets/GradientText.jsx";

import sundown from "/public/sundown.jpeg";
import animation from "/public/GSAP_Project.jpeg";
import resturant from "/public/resturant.png";
import chatApp from "/public/chatApp.png";
import class1 from "/public/class1.png";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const cardsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.2,
      });
    });
  }, []);

  const projects = [
    {
      img: sundown,
      link: "https://sundown-studio-rose.vercel.app/",
      title: "Sundown Studio",
      tech: "React.js, CSS, Responsive Design",
    },
    {
      img: animation,
      link: "https://gsap-project-xi.vercel.app/",
      title: "Animation Using GSAP",
      tech: "GSAP, JavaScript, Animation",
    },
    {
      img: resturant,
      link: "https://cafe-restaurant-project2.vercel.app/",
      title: "React.js Website with Animations",
      tech: "React.js, React-Bits, Responsive UI",
    },
    {
      img: chatApp,
      link: "https://chat-app-rouge-omega.vercel.app/",
      title: "Chat Application Using ZEGOCLOUD",
      tech: "React.js, ZEGOCLOUD SDK, Real-time Chat",
    },
    {
      img: class1,
      link: "https://github.com/Tushalhansola124/NPG_Computers",
      title: "Institute Management System",
      tech: "PHP, MySQL, Bootstrap",
    },
  ];

  return (
    <section id="project" className="bg-gray-950 w-full py-24 px-6">
      <h1 className="text-white text-4xl font-bold text-center mb-14">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          My Projects
        </GradientText>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            ref={addToRefs}
            className="group relative overflow-hidden rounded-3xl shadow-2xl 
                       transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-60 md:h-64 lg:h-56 object-cover 
                         group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 
                            group-hover:opacity-100 transition duration-500 
                            flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {proj.title}
              </h3>

              <p className="text-sm md:text-base text-gray-300 mb-4">
                {proj.tech}
              </p>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r 
                           from-cyan-400 to-blue-500 rounded-full 
                           text-black font-semibold shadow-lg 
                           hover:scale-105 transition duration-300"
              >
                View Project
              </a>
            </div>

            {/* Glow Hover */}
            <div className="absolute inset-0 rounded-3xl 
                            bg-gradient-to-r from-cyan-400 to-blue-500 
                            opacity-0 group-hover:opacity-20 blur-2xl 
                            transition duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
// import RollingGallery from '/src/Componets/RollingGallery.jsx'
import sundown from "/public/sundown.jpeg";
import calculator from "/public/calculator.jpeg";
import animation from "/public/GSAP_Project.jpeg";
import resturant from "/public/resturant.png";

const Project = () => {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  gsap.registerPlugin(ScrollTrigger);

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
      text: "Sundown Studio",
    },
    // {
    //   // img: calculator,
    //   // link: "https://calculator2-nu.vercel.app/",
    //   // text: "Calculator Using React",
    // },
    {
      img: animation,
      link: "https://gsap-project-xi.vercel.app/",
      text: "Animation Using GSAP",
    },
    {
      img:resturant,
      link:"https://cafe-restaurant-project2.vercel.app/",
      text:"It's Website Using React js and  with Animation used of ReactBits",
    }

  ];

  return (
  <>
      <div id="project" className="bg-gray-950 w-full py-25 px-4">
      <h1 className="text-white text-4xl font-bold font-mono text-center mb-12">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((item, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 w-[80vw] md:w-[28vw]"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-[50vw] md:h-[18vw] object-cover"
              />
            </a>
            <h3 className="text-center text-xl md:text-2xl py-4 font-mono font-bold bg-gray-800 text-white">
              {item.text}
            </h3>
          </div>
        ))}
      </div>
      
    </div>
    <div>
    {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}
    </div>
  </>
  );
};

export default Project;

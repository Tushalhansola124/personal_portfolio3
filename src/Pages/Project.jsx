import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import sundown from "/public/sundown.jpeg";
import animation from "/public/GSAP_Project.jpeg";
import resturant from "/public/resturant.png";
import GradientText from '../Componets/GradientText.jsx';

const Project = () => {
  const cardsRef = useRef([]);
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
    {
      img: animation,
      link: "https://gsap-project-xi.vercel.app/",
      text: "Animation Using GSAP",
    },
    {
      img: resturant,
      link: "https://cafe-restaurant-project2.vercel.app/",
      text: "React.js Website with Animations using ReactBits",
    },
  ];

  return (
    <div id="project" className="bg-gray-950 w-full py-24 px-4">
      <h1 className="text-white text-4xl font-bold font-mono text-center mb-12">
              <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        > My Projects
        </GradientText>
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((item, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="relative group overflow-hidden rounded-3xl shadow-2xl w-[80vw] md:w-[28vw] transform transition duration-500 hover:scale-[1.03]"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={`Screenshot of ${item.text}`}
                className="w-full h-[50vw] md:h-[18vw] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white p-4 text-center">
                <h3 className="text-lg md:text-xl font-semibold font-mono">
                  {item.text}
                </h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

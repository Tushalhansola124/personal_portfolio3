import React, { useRef } from "react";
import Html from '/public/html.jpg';
import Css from '/public/css.png'; // fixed typo
import Js from '/public/js.png';
import boostrap from '/public/boostrap.jpg';
import tailwind from '/public/tailwind.jpg';
import react from '/public/react.png';
import gsap1 from '/public/gsap.png';
import PHP from '/public/php.png';
import git from '/public/git2.png';
import mysql from '/public/mysql.png';

import github2 from '/public/github2.png';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "../Componets/Particles";
import GradientText from '../Componets/GradientText.jsx';

const Skill = () => {
  const frontendRef = useRef();
  const backendRef = useRef();

  const frontendImages = [
    { src: Html, title: "HTML" },
    { src: Css, title: "CSS" },
    { src: Js, title: "JavaScript" },
    { src: boostrap, title: "Bootstrap" },
    { src: tailwind, title: "Tailwind CSS" },
    { src: react, title: "React.js" },
    { src: gsap1, title: "GSAP" }
  ];

  const backendImages = [
    { src: PHP, title: "PHP" },
    { src: git, title: "Git" },
    { src: mysql, title: "MySQL" },
    { src: github2, title: "GitHub" }
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(frontendRef.current, {
      scrollTrigger: {
        trigger: frontendRef.current,
        start: "top 90%",
        scrub: true,
        end: "bottom 30%",
      },
      y: 70,
      duration: 0.9,
      scale: 0,
      opacity: 0,
    });

    gsap.from(backendRef.current, {
      scrollTrigger: {
        trigger: backendRef.current,
        start: "top 90%",
        scrub: true,
        end: "bottom 30%",
      },
      y: 70,
      duration: 0.9,
      scale: 0,
      opacity: 0,
    });
  });

  return (
    <>
      <style>{`
        .marquee {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .reflection {
          -webkit-box-reflect: below 0px linear-gradient(transparent, rgba(255,255,255,0.1));
        }
      `}</style>

      <div id="skill" className="w-full bg-gray-950 pb-25 overflow-hidden">
        <Particles />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold font-mono text-center p-6 scale-90">
          <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                > MySkill
                </GradientText>
        </h1>

        {/* Frontend Skills */}
        <div
          ref={frontendRef}
          className="w-[90vw] sm:w-[70vw] rounded-2xl md:h-auto mx-auto bg-white shadow-lg mb-20 overflow-hidden"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl bg-gray-300 text-center md:py-4 py-2 font-semibold font-mono animate-pulse">
            Frontend Languages
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="marquee">
              {frontendImages.concat(frontendImages).map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  title={item.title}
                  alt={`frontend-${index}`}
                  className="p-2 w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] border-4 border-gray-500 rounded-lg reflection object-cover mx-2"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div
          ref={backendRef}
          className="w-[90vw] sm:w-[70vw] rounded-2xl md:h-auto mx-auto bg-white shadow-lg overflow-hidden"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl bg-gray-300 text-center md:py-4 py-2 font-semibold font-mono animate-pulse">
            Backend Languages
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="marquee">
              {backendImages.concat(backendImages).map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  title={item.title}
                  alt={`backend-${index}`}
                  className="p-2 w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] border-4 border-gray-500 rounded-lg reflection object-cover mx-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;

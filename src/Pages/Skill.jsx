import React, { useRef } from "react";
import Html from '/public/html.jpg';
import Css from '/public/css..png';
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

const Skill = () => {
  const frontendRef = useRef();
  const backendRef = useRef();

  const frontendImages = [Html, Css, Js, boostrap, tailwind, react, gsap1];
  const backendImages = [PHP, git, mysql, github2];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(frontendRef.current, {
      scrollTrigger: {
        trigger: frontendRef.current,
        start: "top 80%",
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
        start: "top 140%",
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

      <div id="skill" className="w-[100vw] bg-gray-950 pb-20 overflow-hidden">
        <Particles />
        <h1 className="text-4xl text-white font-bold font-mono text-center p-6 scale-90">MySkill</h1>

        {/* Frontend */}
        <div
          ref={frontendRef}
          className="w-[90vw] sm:w-[70vw] rounded-2xl md:h-[20vw] h-auto mx-auto bg-white shadow-lg mb-10 overflow-hidden"
        >
          <h2 className="text-3xl bg-gray-300 text-center md:py-4 py-2 font-semibold font-mono animate-pulse">
            Frontend Languages
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="marquee">
              {frontendImages.concat(frontendImages).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="p-2 w-[35vw] sm:w-[22vw] md:w-[10vw] h-[35vw] sm:h-[22vw] md:h-[10vw] border-4 border-gray-500 rounded-lg reflection object-cover mx-2"
                  alt={`frontend-${index}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Backend */}
        <div
          ref={backendRef}
          className="w-[90vw] sm:w-[70vw] rounded-2xl md:h-[20vw] h-auto mx-auto bg-white shadow-lg overflow-hidden"
        >
          <h2 className="text-3xl bg-gray-300 text-center md:py-4 py-2 font-semibold font-mono animate-pulse">
            Backend Languages
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="marquee">
              {backendImages.concat(backendImages).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="p-2 w-[35vw] sm:w-[10vw] md:w-[10vw] mt-[2vw] h-[35vw] sm:h-[22vw] md:h-[10vw] border-4 border-gray-500 rounded-lg reflection object-cover mx-2"
                  alt={`backend-${index}`}
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

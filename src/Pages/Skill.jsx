// import React, { useRef } from "react";
// import Html from '/public/html.jpg';
// import Css from '/public/css.png';
// import Js from '/public/js.png';
// import boostrap from '/public/boostrap.jpg';
// import tailwind from '/public/tailwind.jpg';
// import react from '/public/react.png';
// import gsap1 from '/public/gsap.png';
// import PHP from '/public/php.png';
// import git from '/public/git2.png';
// import mysql from '/public/mysql.png';
// import github2 from '/public/github2.png';

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Particles from "../Componets/Particles";
// import GradientText from '../Componets/GradientText.jsx';

// const Skill = () => {
//   const frontendRef = useRef();
//   const backendRef = useRef();

//   const frontendImages = [
//     { src: Html, title: "HTML" },
//     { src: Css, title: "CSS" },
//     { src: Js, title: "JavaScript" },

//     { src: boostrap, title: "Bootstrap" },
//     { src: tailwind, title: "Tailwind CSS" },
//     { src: react, title: "React.js" },

//     { src: gsap1, title: "GSAP" }
//   ];

//   const backendImages = [
//     { src: PHP, title: "PHP" },
//     { src: git, title: "Git" },
//     { src: mysql, title: "MySQL" },
//     { src: github2, title: "GitHub" }
//   ];

//   gsap.registerPlugin(ScrollTrigger);

//   useGSAP(() => {
//     gsap.from(frontendRef.current, {
//       scrollTrigger: {
//         trigger: frontendRef.current,
//         start: "top 90%",
//         scrub: true,
//         end: "bottom 30%",
//       },
//       y: 70,
//       duration: 0.9,
//       scale: 0,
//       opacity: 0,
//     });

//     gsap.from(backendRef.current, {
//       scrollTrigger: {
//         trigger: backendRef.current,
//         start: "top 90%",
//         scrub: true,
//         end: "bottom 30%",
//       },
//       y: 70,
//       duration: 0.9,
//       scale: 0,
//       opacity: 0,
//     });
//   });

//   return (
//     <>
//       <style>{`
//         .marquee {
//           display: flex;
//           animation: scroll 20s linear infinite;
//         }
//         @keyframes scroll {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//         .reflection {
//           -webkit-box-reflect: below 0px linear-gradient(transparent, rgba(255,255,255,0.1));
//         }
//       `}</style>

//       <div id="skill" className="w-full bg-gray-950 pb-20 overflow-hidden">
//         <Particles />
//         <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold font-mono text-center p-6 scale-90">
//           <GradientText
//             colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
//             animationSpeed={3}
//             showBorder={false}
//             className="custom-class"
//           >
//             MySkill
//           </GradientText>
//         </h1>

//         {/* Frontend Skills */}
//         {/*<div
//           ref={frontendRef}
//           className="w-[90vw] sm:w-[70vw] rounded-2xl md:h-auto mx-auto bg-white shadow-lg mb-20 overflow-hidden"
//         >
//           <h2 className="text-xl sm:text-2xl md:text-3xl bg-gray-300 text-center md:py-4 py-2 font-semibold font-mono animate-pulse">
//             Frontend Languages
//           </h2>
//           <div className="relative w-full overflow-hidden">
//             <div className="marquee">
//               {frontendImages.concat(frontendImages).map((item, index) => (
//                 <img
//                   key={index}
//                   src={item.src}
//                   title={item.title}
//                   alt={`frontend-${index}`}
//                   className="p-2 w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] border-4 border-gray-500 rounded-lg reflection object-cover mx-2"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>*}

//         {/* Backend Skills */}
//         {/*<div
//           ref={backendRef}
//           className="w-[90vw] sm:w-[70vw] rounded-2xl md:h-auto mx-auto bg-white shadow-lg overflow-hidden"
//         >
//           <h2 className="text-xl sm:text-2xl md:text-3xl bg-gray-300 text-center md:py-4 py-2 font-semibold font-mono animate-pulse">
//             Backend Languages
//           </h2>
//           <div className="relative w-full overflow-hidden">
//             <div className="marquee">
//               {backendImages.concat(backendImages).map((item, index) => (
//                 <img
//                   key={index}
//                   src={item.src}
//                   title={item.title}
//                   alt={`backend-${index}`}
//                   className="p-2 w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] border-4 border-gray-500 rounded-lg reflection object-cover mx-2"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>*}

//         {/* Responsive Skill Bars Section */}
//         <div className="w-[90vw] sm:w-[80vw] md:w-[70vw] mx-auto mt-10 px-4">
//           <h3 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center font-mono">
//             {/*Skill Proficiency*/}
//           </h3>

//           {[
//             { name: "HTML", level: 80, color: "bg-red-500" },
//             { name: "CSS", level: 70, color: "bg-blue-500" },
//             { name: "JavaScript", level: 60, color: "bg-yellow-400" },
//             { name: "Bootstrap", level: 70, color: "bg-purple-500" },
//             { name: "Tailwind CSS", level:65,color: "bg-cyan-400" },
//             { name: "React.js", level: 70, color: "bg-sky-400" },
//              { name: "Next.js", level: 80, color: "bg-blue-400" },
//             { name: "GSAP", level: 75, color: "bg-green-500" },
//             { name: "PHP", level: 70, color: "bg-indigo-500" },
//             { name: "MySQL", level: 78, color: "bg-orange-500" },
//             { name: "Git", level: 60, color: "bg-pink-500" },
//             { name: "GitHub", level: 70, color: "bg-gray-500" },
//           ].map((skill, idx) => (
//             <div key={idx} className="mb-5">
//               <div className="flex justify-between items-center mb-1 text-sm sm:text-base text-white font-medium">
//                 <span>{skill.name}</span>
//                 <span>{skill.level}%</span>
//               </div>
//               <div className="w-full bg-gray-800 rounded-full h-3 sm:h-4">
//                 <div
//                   className={`h-3 sm:h-4 ${skill.color} rounded-full`}
//                   style={{
//                     width: `${skill.level}%`,
//                     transition: "width 1s ease-in-out"
//                   }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skill;




import React, { useRef, useState, useEffect } from "react";
import Html from '/public/html.jpg';
import Css from '/public/css.png';
import Js from '/public/js.png';
import boostrap from '/public/boostrap.jpg';
import tailwind from '/public/tailwind.jpg';
import react from '/public/react.png';
import gsap1 from '/public/gsap.png';
import PHP from '/public/php.png';
import git from '/public/git2.png';
import mysql from '/public/mysql.png';
import github2 from '/public/github2.png';
import nextjs from "/public/next-js.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "../components/Particles";
import GradientText from '../components/GradientText.jsx';

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const sectionRef = useRef(null);
  const ringRefs = useRef([]);

  const skillsData = {
    frontend: [
      { name: "HTML", level: 80, color: "#ff4d4d", img: Html },
      { name: "CSS", level: 70, color: "#4d9fff", img: Css },
      { name: "JavaScript", level: 60, color: "#ffd700", img: Js },
      { name: "Bootstrap", level: 70, color: "#8b5cf6", img: boostrap },
      { name: "Tailwind CSS", level: 65, color: "#22d3ee", img: tailwind },
      { name: "React.js", level: 70, color: "#38bdf8", img: react },
      { name: "Next.js", level: 80, color: "#3b82f6", img: nextjs }, // you can add image later
      { name: "GSAP", level: 75, color: "#22c55e", img: gsap1 },
    ],
    backend: [
      { name: "PHP", level: 70, color: "#a855f7", img: PHP },
      { name: "MySQL", level: 78, color: "#f97316", img: mysql },
      { name: "Git", level: 60, color: "#ec4899", img: git },
      { name: "GitHub", level: 70, color: "#6b7280", img: github2 },
    ],
    tools: [
      // Add more if you want, or merge some here
      { name: "Git", level: 60, color: "#ec4899", img: git },
      { name: "GitHub", level: 70, color: "#6b7280", img: github2 },
    ]
  };

  const currentSkills = skillsData[activeTab];

  // Animate circular progress rings on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ringRefs.current.forEach((ring, index) => {
              if (!ring) return;
              const level = currentSkills[index]?.level || 0;
              gsap.to(ring, {
                strokeDashoffset: 283 - (283 * level) / 100, // circumference ≈ 283 for r=45
                duration: 1.5,
                ease: "power2.out",
                delay: index * 0.1,
              });
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [activeTab]);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "bottom 20%",
        scrub: 1,
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
    });
  });

  const circumference = 283; // 2 * Math.PI * 45

  return (
    <>
      <style>{`
        .skill-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .skill-card:hover {
          transform: scale(1.08) translateY(-8px);
          box-shadow: 0 0 40px -10px rgba(59, 130, 246, 0.6);
        }
        .tab-active {
          border-bottom: 3px solid #22d3ee;
          color: #67e8f9;
        }
      `}</style>

      <div id="skill" className="w-full bg-gray-950 pb-24 overflow-hidden relative">
        <Particles />

        <div ref={sectionRef} className="max-w-6xl mx-auto px-6 pt-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-3">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
              >
                My Skills
              </GradientText>
            </h1>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              Technologies I love building with
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-12 border-b border-gray-800 pb-2">
            {["frontend", "backend", "tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-lg font-medium capitalize transition-all duration-300 ${
                  activeTab === tab ? "tab-active" : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card group bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Image or Icon */}
                <div className="w-20 h-20 mb-6 rounded-2xl overflow-hidden border border-gray-700 flex items-center justify-center bg-gray-950">
                  {skill.img ? (
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-4xl font-bold text-gray-600">{skill.name.slice(0, 2)}</div>
                  )}
                </div>

                {/* Circular Progress */}
                <div className="relative w-32 h-32 mb-6">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <circle
                      ref={(el) => (ringRefs.current[index] = el)}
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference} // starts at 0%
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">{skill.level}</span>
                    <span className="text-xs text-gray-500 -mt-1">%</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">Proficiency</p>

                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Unique Build Highlight */}
        
          </div>
       
      </div>
    </>
  );
};

export default Skill;
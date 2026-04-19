import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "../components/Particles";
import GradientText from "../components/GradientText.jsx";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const sectionRef = useRef(null);
  const ringRefs = useRef([]);

  const skillsData = {
    frontend: [
      { name: "HTML", level: 80, color: "#ff4d4d", img: "/html.jpg" },
      { name: "CSS", level: 70, color: "#4d9fff", img: "/css.png" },
      { name: "JavaScript", level: 60, color: "#ffd700", img: "/js.png" },
      { name: "Bootstrap", level: 70, color: "#8b5cf6", img: "/bootstrap.jpeg" },
      { name: "Tailwind", level: 65, color: "#22d3ee", img: "/tailwind.jpg" },
      { name: "React", level: 70, color: "#38bdf8", img: "/react.png" },
      { name: "Next.js", level: 80, color: "#3b82f6", img: "/next-js.png" },
      { name: "GSAP", level: 75, color: "#22c55e", img: "/gsap.png" },
    ],
    backend: [
      { name: "PHP", level: 70, color: "#a855f7", img: "/php.png" },
      { name: "MySQL", level: 78, color: "#f97316", img: "/mysql.png" },
      { name: "Git", level: 60, color: "#ec4899", img: "/git2.png" },
      { name: "GitHub", level: 70, color: "#6b7280", img: "/github2.png" },
    ],
    tools: [
      { name: "Git", level: 60, color: "#ec4899", img: "/git2.png" },
      { name: "GitHub", level: 70, color: "#6b7280", img: "/github2.png" },
    ],
  };

  const currentSkills = skillsData[activeTab];

  // 🔥 Animate rings safely (works on mobile)
  useEffect(() => {
    setTimeout(() => {
      ringRefs.current.forEach((ring, index) => {
        if (!ring) return;
        const level = currentSkills[index]?.level || 0;

        gsap.to(ring, {
          strokeDashoffset: 283 - (283 * level) / 100,
          duration: 1.5,
          ease: "power2.out",
        });
      });
    }, 300);
  }, [activeTab]);

  // 🔥 Scroll animation (mobile friendly)
  useGSAP(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      y: 60,
      opacity: 0,
      duration: 1,
    });
  });

  const circumference = 283;

  return (
    <div id="skill" className="w-full bg-gray-950 pb-20 relative">
      <Particles />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 pt-14">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
            >
              My Skills
            </GradientText>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Technologies I love building with
          </p>
        </div>

        {/* Tabs (mobile scrollable) */}
        <div className="flex overflow-x-auto gap-4 mb-10 border-b border-gray-800 pb-2 px-1">
          {["frontend", "backend", "tools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm sm:text-base whitespace-nowrap capitalize transition ${
                activeTab === tab
                  ? "border-b-2 border-cyan-400 text-cyan-300"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-4 md:p-6 text-center hover:scale-105 transition"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3"
              />

              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-3">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#1f2937"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    ref={(el) => (ringRefs.current[index] = el)}
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={skill.color}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm md:text-base">
                  {skill.level}%
                </div>
              </div>

              <h3 className="text-white text-sm md:text-base font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
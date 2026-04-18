// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Particles from "../Componets/Particles";
// import RollingGallery from "../Componets/Rolling_Gallery.jsx";
// import GradientText from '../Componets/GradientText.jsx';
// import CircularText from '../Componets/CircularText.jsx';
// const About = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const aboutRef = useRef();

//   useGSAP(() => {
//     gsap.from(aboutRef.current, {
//       scrollTrigger: {
//         trigger: aboutRef.current,
//         start: "top 80%",
//         end: "bottom 30%",
//         scrub: true,
//       },
//       y: 50,
//       scale: 0.95,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <section id="about" className="relative w-full bg-gray-950 overflow-hidden">
//       <Particles />
//       <div className="flex flex-col md:flex-row w-full px-5 md:px-20 py-10 md:py-20 z-10 relative">
//         {/* Left Section */}
//         <div className="md:w-1/2 w-full space-y-10">
//           <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left font-serif">
//           <GradientText
//   colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
//   animationSpeed={3}
//   showBorder={false}
//   className="custom-class"
// >
// About us
// </GradientText>
//           </h1>
//           <div ref={aboutRef} className="text-white text-base md:text-xl leading-relaxed tracking-wide font-mono">
//             <p>
//               I’m Tushal Hansola, a passionate Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. I have experience building projects using popular frameworks like React.js, as well as CSS frameworks such as Tailwind and Bootstrap.
//               <br /><br />
//               Alongside my frontend skills, I’m currently expanding my expertise by learning backend development. In addition to coding, I also have a creative side and am skilled in graphic design, having worked on various projects that combine both technical and visual elements.
//             </p>
//           </div>
//                 <div className="text-white mt-10">
//             <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left  mb-4 ">
            
//               <GradientText
//   colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
//   animationSpeed={3}
//   showBorder={false}
//   className="custom-class"
// >
//     Educations
// </GradientText>
//             </h2>
//             <ul className="list-disc pl-5 space-y-3 text-base md:text-lg font-mono">
//               <li>I  have Completed 10th at Shri O.N. Modha School – 40.43%</li>
//               <li> I have Completed 12th at Shri Bhavshji High School – 63%</li>
//               <li> I am Currently pursuing BCA at Shri V J Modha College (BKNMU)</li>
//               <li>Career Focus: Full Stack Web Development</li>
//             </ul>
//           </div>
          
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2 md:visible invisible w-full mt-10 md:mt-0 flex justify-center items-center">
//           {/* <RollingGallery autoplay pauseOnHover /> */}
//               <CircularText

//   onHover="speedUp"
//   spinDuration={20}
//   text="React js Developer * PHP Developer * Next.js Developer"
//   className="custom-class"
// />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "../components/Particles";
import GradientText from '../components/GradientText.jsx';
import CircularText from '../components/CircularText.jsx';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    { number: "5+", label: "Projects Completed", icon: "🚀" },
    { number: "8", label: "Technologies Mastered", icon: "⚡" },
    { number: "1", label: "Internships", icon: "💼" },
    { number: "1", label: "Hackathon Achievement", icon: "🏆" },
  ];

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Stats counter animation
    statsRef.current.forEach((stat, index) => {
      if (!stat) return;
      const targetNumber = parseInt(stats[index].number) || 0;
      
      gsap.fromTo(stat, 
        { innerText: 0 },
        {
          innerText: targetNumber,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
          },
          snap: { innerText: 1 },
          onUpdate: function() {
            this.targets()[0].innerText = Math.ceil(this.targets()[0].innerText) + 
              (stats[index].number.includes("+") ? "+" : "");
          }
        }
      );
    });
  }, []);

  const tabs = [
    { id: "story", label: "My Story" },
    { id: "skills", label: "Core Strengths" },
    { id: "journey", label: "My Journey" },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative w-full bg-gray-950 min-h-screen overflow-hidden py-20"
    >
      <Particles />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
            >
              Hello, I'm Tushal
            </GradientText>
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            Frontend Developer crafting immersive digital experiences with code and motion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Interactive Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 text-lg font-medium transition-all relative
                    ${activeTab === tab.id 
                      ? "text-white" 
                      : "text-gray-500 hover:text-gray-300"
                    }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[320px]">
              {activeTab === "story" && (
                <div className="space-y-8 text-lg leading-relaxed text-gray-300">
                  <p>
                    I'm Tushal Hansola, a passionate <span className="text-cyan-400">Frontend Developer</span> who turns ideas into interactive realities. 
                    With a strong command over modern web technologies, I specialize in creating smooth, responsive, and visually stunning interfaces.
                  </p>
                  <p>
                    My journey began with curiosity about how websites come to life. Today, I combine technical precision with creative vision 
                    to build digital experiences that not only look great but feel alive.
                  </p>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="grid grid-cols-2 gap-6">
                  {[
                    "React.js & Next.js",
                    "GSAP Animations",
                    "Tailwind CSS",
                    "Modern JavaScript",
                    "Responsive Design",
                  
                    "PHP & MySQL",
                    "Problem Solving"
                  ].map((skill, i) => (
                    <div key={i} className="bg-gray-900/70 border border-gray-700 hover:border-cyan-400/50 p-6 rounded-2xl transition-all group">
                      <div className="text-cyan-400 text-2xl mb-3 group-hover:scale-110 transition-transform">✦</div>
                      <p className="font-medium text-white">{skill}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "journey" && (
                <div className="space-y-10">
                  <div className="border-l-2 border-cyan-400 pl-8 space-y-12">
                    {[
                      { year: "2023", text: "Started learning web development" },
                      { year: "2024", text: "Built first major projects with React & GSAP" },
                      { year: "2025", text: "Internship at Vaistra Technologies + Hackathon achievement" },
                      { year: "2026", text: "Currently working as Frontend Developer at Vaistra Technologies Pvt. Ltd." },
                    ].map((item, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[9px] " />
                        <div>
                          <span className="text-cyan-400 font-mono">{item.year}</span>
                          <p className="text-gray-300 mt-1">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Education Section */}
            <div className="mt-16">
              <h2 className="text-4xl font-bold mb-8">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                >
                  Education
                </GradientText>
              </h2>
              
              <div className="space-y-8">
                {[
                  { level: "10th", school: "Shri O.N. Modha School", score: "40.43%" },
                  { level: "12th", school: "Shri Bhavshji High School", score: "63%" },
                  { level: "BCA", school: "Shri V J Modha College (BKNMU)", score: "Pursuing" },
                ].map((edu, i) => (
                  <div key={i} className="flex gap-6 items-start bg-gray-900/60 p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-all">
                    <div className="text-5xl opacity-20">🎓</div>
                    <div>
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-semibold text-white">{edu.level}</h3>
                        <span className="text-cyan-400 font-mono text-sm">— {edu.score}</span>
                      </div>
                      <p className="text-gray-400 mt-1">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Visual Elements (Hidden on Mobile & Tablet) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center gap-12 lg:sticky lg:top-24 self-start">
            {/* Circular Text - Only shows on large screens (laptop & desktop) */}
            <div className="relative">
              <CircularText
                onHover="speedUp"
                spinDuration={18}
                text="React.js • Next.js • GSAP • Tailwind • PHP • MySQL • Creative Coder • "
                className="text-cyan-300 text-xl"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-3xl p-6 text-center hover:border-cyan-400/50 transition-all group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div 
                    ref={(el) => (statsRef.current[index] = el)}
                    className="text-5xl font-bold text-white mb-1"
                  >
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-400 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Personal Quote */}
            <div className="text-center max-w-xs">
              <div className="italic text-gray-400 text-lg leading-relaxed">
                "Code is not just logic — it's emotion, motion, and storytelling."
              </div>
              <div className="text-xs text-cyan-500 mt-4 tracking-widest">— Tushal Hansola</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
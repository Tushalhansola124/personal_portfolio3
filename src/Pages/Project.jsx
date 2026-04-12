// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";

// import GradientText from "../Componets/GradientText.jsx";

// import sundown from "/public/sundown.jpeg";
// import animation from "/public/GSAP_Project.jpeg";
// import resturant from "/public/resturant.png";
// import chatApp from "/public/chatApp.png";
// import class1 from "/public/class1.png";

// gsap.registerPlugin(ScrollTrigger);

// const Project = () => {
//   const cardsRef = useRef([]);

//   const addToRefs = (el) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   useGSAP(() => {
//     cardsRef.current.forEach((card, index) => {
//       gsap.from(card, {
//         scrollTrigger: {
//           trigger: card,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//         y: 50,
//         opacity: 0,
//         scale: 0.9,
//         duration: 0.8,
//         ease: "power3.out",
//         delay: index * 0.2,
//       });
//     });
//   }, []);

//   const projects = [
//     {
//       img: sundown,
//       link: "https://sundown-studio-rose.vercel.app/",
//       title: "Sundown Studio",
//       tech: "React.js, CSS, Responsive Design",
//     },
//     {
//       img: animation,
//       link: "https://gsap-project-xi.vercel.app/",
//       title: "Animation Using GSAP",
//       tech: "GSAP, JavaScript, Animation",
//     },
//     {
//       img: resturant,
//       link: "https://cafe-restaurant-project2.vercel.app/",
//       title: "React.js Website with Animations",
//       tech: "React.js, React-Bits, Responsive UI",
//     },
//     {
//       img: chatApp,
//       link: "https://chat-app-rouge-omega.vercel.app/",
//       title: "Chat Application Using ZEGOCLOUD",
//       tech: "React.js, ZEGOCLOUD SDK, Real-time Chat",
//     },
//     {
//       img: class1,
//       link: "https://github.com/Tushalhansola124/NPG_Computers",
//       title: "Institute Management System",
//       tech: "PHP, MySQL, Bootstrap",
//     },
//   ];

//   return (
//     <section id="project" className="bg-gray-950 w-full py-24 px-6">
//       <h1 className="text-white text-4xl font-bold text-center mb-14">
//         <GradientText
//           colors={["#40ffaa", "#4079ff", "#40ffaa"]}
//           animationSpeed={3}
//           showBorder={false}
//         >
//           My Projects
//         </GradientText>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {projects.map((proj, i) => (
//           <div
//             key={i}
//             ref={addToRefs}
//             className="group relative overflow-hidden rounded-3xl shadow-2xl 
//                        transform transition duration-500 hover:scale-105 hover:shadow-2xl"
//           >
//             {/* Image */}
//             <img
//               src={proj.img}
//               alt={proj.title}
//               className="w-full h-60 md:h-64 lg:h-56 object-cover 
//                          group-hover:scale-110 transition-transform duration-500"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/60 opacity-0 
//                             group-hover:opacity-100 transition duration-500 
//                             flex flex-col justify-center items-center text-center px-4">
//               <h3 className="text-lg md:text-xl font-bold text-white mb-2">
//                 {proj.title}
//               </h3>

//               <p className="text-sm md:text-base text-gray-300 mb-4">
//                 {proj.tech}
//               </p>

//               <a
//                 href={proj.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-4 py-2 bg-gradient-to-r 
//                            from-cyan-400 to-blue-500 rounded-full 
//                            text-black font-semibold shadow-lg 
//                            hover:scale-105 transition duration-300"
//               >
//                 View Project
//               </a>
//             </div>

//             {/* Glow Hover */}
//             <div className="absolute inset-0 rounded-3xl 
//                             bg-gradient-to-r from-cyan-400 to-blue-500 
//                             opacity-0 group-hover:opacity-20 blur-2xl 
//                             transition duration-500 pointer-events-none"></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Project;




import React, { useRef, useState } from "react";
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
  const [activeFilter, setActiveFilter] = useState("all");
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      img: sundown,
      link: "https://sundown-studio-rose.vercel.app/",
      title: "Sundown Studio",
      category: "frontend",
      tech: ["React.js", "Tailwind", "GSAP"],
      featured: true,
      desc: "Premium agency website with buttery smooth animations",
    },
    {
      id: 2,
      img: animation,
      link: "https://gsap-project-xi.vercel.app/",
      title: "GSAP Masterpiece",
      category: "animation",
      tech: ["GSAP", "JavaScript", "ScrollTrigger"],
      featured: true,
      desc: "Advanced scroll-triggered animations & interactions",
    },
    {
      id: 3,
      img: resturant,
      link: "https://cafe-restaurant-project2.vercel.app/",
      title: "Animated Restaurant",
      category: "frontend",
      tech: ["React.js", "GSAP", "Tailwind"],
      featured: false,
      desc: "Full-screen modern restaurant website with rich animations",
    },
    {
      id: 4,
      img: chatApp,
      link: "https://chat-app-rouge-omega.vercel.app/",
      title: "Real-time Chat App",
      category: "fullstack",
      tech: ["React.js", "ZEGOCLOUD", "Real-time"],
      featured: false,
      desc: "Live messaging application with video call support",
    },
    {
      id: 5,
      img: class1,
      link: "https://github.com/Tushalhansola124/NPG_Computers",
      title: "Institute Management System",
      category: "fullstack",
      tech: ["PHP", "MySQL", "Bootstrap"],
      featured: false,
      desc: "Complete backend + frontend system for computer institute",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 100,
        opacity: 0,
        scale: 0.85,
        duration: 0.9,
        ease: "power4.out",
        delay: index * 0.08,
      });
    });
  }, [filteredProjects]); // Re-animate when filter changes

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Fullstack" },
    { id: "animation", label: "Animation" },
  ];

  return (
    <section id="project" className="bg-gray-950 w-full py-24 px-6 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff"]}
              animationSpeed={3}
              showBorder={false}
            >
               Projects
            </GradientText>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            From stunning animations to full-stack solutions — here’s what I’ve built
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm uppercase tracking-wider
                ${activeFilter === cat.id 
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/50" 
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, index) => (
            <div
              key={proj.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-cyan-400/30 transition-all duration-500 h-full flex flex-col"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Featured Badge */}
                {proj.featured && (
                  <div className="absolute top-4 right-4 px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold rounded-full shadow-lg">
                     Featured
                  </div>
                )}

                {/* Live Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="flex-1 p-7 flex flex-col">
                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {proj.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {proj.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-4 py-1.5 bg-gray-800 text-cyan-300 rounded-full border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all active:scale-95 group-hover:shadow-xl shadow-cyan-500/30"
                >
                  View Live Project
                  <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Dynamic Mouse Glow */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(103, 232, 249, 0.25), transparent 60%)`,
                }}
              />
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
};

export default Project;
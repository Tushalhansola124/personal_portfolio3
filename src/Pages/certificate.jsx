// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";

// import GradientText from "../Componets/GradientText.jsx";
// import certificate1 from "/public/certificate1.png";

// gsap.registerPlugin(ScrollTrigger);

// const Certificate = () => {
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

//   // ✅ Only ONE data array (clean)
//   const certificates = [
//     {
//       img: certificate1,
//       link: "/certificate1.png",
//       monthYear: "May 2025",
//       title: "Hackathon by Gravity Coding Pvt Ltd",
//     },
//   ];

//   const isSingle = certificates.length === 1;

//   return (
//     <div id="certificate" className="bg-gray-950 w-full py-24 px-4">
//       <h1 className="text-white text-4xl font-bold font-mono text-center mb-12">
//         <GradientText
//           colors={["#40ffaa", "#4079ff", "#40ffaa"]}
//           animationSpeed={3}
//           showBorder={false}
//         >
//           My Certificates
//         </GradientText>
//       </h1>

//       <div
//         className={`${
//           isSingle
//             ? "flex justify-center"
//             : "grid grid-cols-1 md:grid-cols-3 gap-10"
//         } max-w-7xl mx-auto`}
//       >
//         {certificates.map((item, index) => (
//           <div
//             key={index}
//             ref={addToRefs}
//             className="relative group overflow-hidden rounded-3xl shadow-2xl 
//                        w-[90%] md:w-[28vw] bg-gray-900 
//                        transform transition duration-500 hover:scale-[1.03]"
//           >
//             {/* Month-Year */}
//             <div className="text-center text-white py-2 font-semibold bg-gray-800">
//               {item.monthYear}
//             </div>

//             {/* Image */}
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-[50vw] md:h-[18vw] object-cover 
//                          group-hover:scale-110 transition-transform duration-500"
//             />

//             {/* Title + Button */}
//             <div className="w-full bg-black/60 backdrop-blur-sm text-white p-4 text-center">
//               <h3 className="text-lg md:text-xl font-semibold font-mono mb-3">
//                 {item.title}
//               </h3>

//               <a
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-5 py-2 rounded-full bg-gradient-to-r 
//                            from-cyan-400 to-blue-500 text-black font-semibold 
//                            shadow-lg hover:scale-105 transition-transform duration-300"
//               >
//                 View Certificate
//               </a>
//             </div>

//             {/* Glow Hover */}
//             <div
//               className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 
//                               bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl 
//                               transition duration-500 pointer-events-none"
//             ></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Certificate;



import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import GradientText from "../components/GradientText.jsx";

import certificate1 from "/certificate1.png";

gsap.registerPlugin(ScrollTrigger);

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const cardsRef = useRef([]);

  const certificates = [
    {
      id: 1,
      img: certificate1,
      link: "/certificate1.png",
      monthYear: "May 2025",
      title: "Hackathon Winner - Round 2",
      issuer: "Gravity Coding Pvt Ltd",
      category: "hackathon",
      desc: "Selected for Round 2 in Skillsvarz 0.1 Hackathon. Built a fully animated restaurant website using React.js, Tailwind & GSAP.",
      achievement: 92,
      color: "#22d3ee",
    },
    // Add more certificates here in the future
    // {
    //   id: 2,
    //   img: certificate2,
    //   link: "...",
    //   monthYear: "March 2025",
    //   title: "Next.js Advanced Certification",
    //   issuer: "Vaistra Technologies",
    //   category: "internship",
    //   desc: "...",
    //   achievement: 88,
    //   color: "#a855f7",
    // },
  ];

  const filteredCerts = activeFilter === "all" 
    ? certificates 
    : certificates.filter(c => c.category === activeFilter);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 120,
        rotationX: -25,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: index * 0.15,
      });
    });
  }, [filteredCerts]);

  const filters = [
    { id: "all", label: "All Certificates" },
    { id: "hackathon", label: "Hackathon" },
    { id: "internship", label: "Internship" },
    { id: "course", label: "Course" },
  ];

  return (
    <section id="certificate" className="bg-gray-950 w-full py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff"]}
              animationSpeed={3}
              showBorder={false}
            >
              Certifications
            </GradientText>
          </h1>
          <p className="text-gray-400 text-lg">Milestones that validate my journey</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-7 py-3 rounded-2xl font-medium transition-all text-sm uppercase tracking-widest
                ${activeFilter === filter.id 
                  ? "bg-cyan-500 text-black shadow-cyan-500/50 shadow-lg" 
                  : "bg-gray-900 hover:bg-gray-800 text-gray-400 border border-gray-700"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group perspective-1000"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-full preserve-3d transition-transform duration-700 group-hover:rotate-y-12 cursor-pointer">
                {/* Front Card */}
                <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 h-full flex flex-col relative backface-hidden">
                  
                  {/* Top Bar */}
                  <div className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500" />

                  {/* Certificate Image */}
                  <div className="relative p-6 pb-4 flex-1 flex items-center justify-center bg-black/40">
                    <div className="relative">
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="rounded-2xl shadow-2xl w-full max-h-[260px] object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 pt-2">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-cyan-400 text-sm font-medium">{cert.monthYear}</p>
                        <h3 className="text-xl font-semibold text-white mt-1 leading-tight line-clamp-2">
                          {cert.title}
                        </h3>
                      </div>
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border border-gray-700 text-3xl"
                        style={{ color: cert.color }}
                      >
                        🏆
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-5 line-clamp-2">{cert.issuer}</p>

                    {/* Achievement Ring */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="#1f2937" strokeWidth="10" />
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="42" 
                            fill="none" 
                            stroke={cert.color} 
                            strokeWidth="10"
                            strokeDasharray="264"
                            strokeDashoffset={264 - (264 * cert.achievement) / 100}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                          {cert.achievement}%
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 leading-tight">
                        Achievement<br />Level
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unique Achievement Statement */}
        <div className="mt-20 text-center max-w-lg mx-auto">
          <div className="text-cyan-400 text-sm tracking-[3px] mb-3">CERTIFIED &amp; PROVEN</div>
          <p className="text-2xl text-gray-300 leading-tight">
            Every certificate represents hours of learning, building, and pushing my limits.
          </p>
        </div>
      </div>

      {/* Modal for Full Certificate View */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-gray-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8 border-b border-gray-700 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{selectedCert.title}</h2>
                <p className="text-cyan-400">{selectedCert.monthYear} • {selectedCert.issuer}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="text-4xl text-gray-500 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-10 flex justify-center bg-black">
              <img 
                src={selectedCert.img} 
                alt={selectedCert.title}
                className="max-h-[75vh] rounded-2xl shadow-2xl border border-gray-700"
              />
            </div>

            <div className="p-8 text-center">
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all"
              >
                Download / View Full Size
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
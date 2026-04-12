// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const Experience = () => {
//   const sectionRef = useRef(null);

//   // Auto Duration Function
// const getInternshipDuration = () => {
//   const startDate = new Date("2025-09-01"); // your real start date
//   const today = new Date();

//   let years = today.getFullYear() - startDate.getFullYear();
//   let months = today.getMonth() - startDate.getMonth();

//   // Adjust negative months
//   if (months < 0) {
//     years--;
//     months = months + 12;
//   }

//   // Format Text
//   const yearText =
//     years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
//   const monthText =
//     months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "";

//   // If both exist → "1 year, 3 months"
//   if (yearText && monthText) return `${yearText}, ${monthText}`;

//   // Only year
//   if (yearText) return yearText;

//   // Only month
//   return monthText || "0 Month";
// };
    
//   useEffect(() => {
//     gsap.from(sectionRef.current, {
//       opacity: 0,
//       y: 40,
//       duration: 1.2,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//       },
//     });
//   }, []);
//     const experRef = useRef();
//    useGSAP(() => {
//       gsap.from(experRef.current, {
//         scrollTrigger: {
//           trigger: experRef.current,
//           start: "top 150%",
//           end: "bottom 20%",
//           scrub: true,
//         },
//         y: 50,
//         scale: 0.95,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//       });
//     }, []);

//   return (
//     <section
//       id="experience"
   
//       className="w-full min-h-screen bg-gray-950 py-20 px-6 md:px-20 text-white"
//     >
//       <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-center tracking-wide">
//         Experience
//       </h2>

//       <div    ref={experRef}  className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800 max-w-4xl mx-auto">
       
//           <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
//         NPG-UNIQUE COMPUTERS,Porbandar
//         </h3>
//          <p className="text-lg md:text-xl text-gray-300 mt-2">
//           <span className="font-semibold text-white">Role:</span>Computer Technology Instructor(CCC,Gujarati Typing,Ms Office, and Computer Operator)
//         </p>
//              <p className="text-lg md:text-xl text-gray-300 mt-1">
//           <span className="font-semibold text-white">Duration:</span>{" "}
//           <span className="text-green-400">7 Months</span>
//         </p>
//           <p className="text-gray-300 mt-6 leading-relaxed text-base md:text-lg">
//             I teach basic computer courses such as CCC, MS Word, and general computer operating skills. My teaching focuses on helping students build a strong foundation in computer basics, including typing, file management, internet usage, and essential office tools. I explain concepts in easy language, using practical examples so students can understand and apply what they learn in real life. My goal is to make every student confident and comfortable with computers, whether they are beginners or improving their skills.
//         </p>
//         <br></br>
       

//         <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
//           Gravity Coding(Skillsvarz 0.1 Hackathon, organized by Gravity Coding )
//         </h3>
//          <p className="text-lg md:text-xl text-gray-300 mt-2">
//           <span className="font-semibold text-white">Role:</span> Frontend Development(React.Js)
//         </p>
//           <p className="text-lg md:text-xl text-gray-300 mt-2">
//           <span className="font-semibold text-white">Live : </span><a href="annapurnarestaurant.vercel.app">annapurnarestaurant.vercel.app</a>
//         </p>
//           <p className="text-lg md:text-xl text-gray-300 mt-1">
//           <span className="font-semibold text-white">Duration:</span>{" "}
//           <span className="text-green-400"> March 2025 – April 2025</span>
//         </p>
//             <p className="text-gray-300 mt-6 leading-relaxed text-base md:text-lg">
//           Skillsvarz 0.1 Hackathon, organized by Gravity Coding
//             March 2025 – April 2025
//             Selected for Round 2 after delivering a functional, visually engaging restaurant website. Built a responsive full-screen UI with React.js, Tailwind CSS, and GSAP animations. Implemented animated menu categories, reservation form, and scroll-triggered virtual tour. Optimized for UX, clean design, and performance.
            
//         </p>
//         <br></br>
//         <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
//           Vaistra Technologies Pvt ltd, Porbandar
//         </h3>

//         <p className="text-lg md:text-xl text-gray-300 mt-2">
//           <span className="font-semibold text-white">Role:</span> Software Development Intern (Next.js)
//         </p>

//         <p className="text-lg md:text-xl text-gray-300 mt-1">
//           <span className="font-semibold text-white">Duration:</span>{" "}
//           {/* <span className="text-green-400">{getInternshipDuration()}</span> */}
//                  <span className="text-green-400">4 Months </span>
//         </p>

//         <p className="text-gray-300 mt-6 leading-relaxed text-base md:text-lg">
//           During my Software Development internship at Vaistra Technologies,
//           I worked primarily with <span className="text-blue-400"> Next.js </span> 
//           to build fast, scalable, and modern web applications. I gained hands-on 
//           experience in frontend development, backend API integration, component 
//           creation, project structuring, and debugging real client projects.
//         </p>

//         <p className="text-gray-300 mt-4 leading-relaxed text-base md:text-lg">
//           I collaborated with the development team, followed best coding
//           practices, and strengthened my understanding of full-stack development
//           using Next.js and related modern technologies.
//         </p>
//       </div>
      
//     </section>
//   );
// };

// export default Experience;


// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const Experience = () => {
//   const cardsRef = useRef([]);

//   useGSAP(() => {
//     cardsRef.current.forEach((card, i) => {
//       gsap.from(card, {
//         opacity: 0,
//         x: i % 2 === 0 ? -80 : 80,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//         },
//       });
//     });
//   }, []);

//   const experiences = [
//     {
//       company: "NPG-UNIQUE COMPUTERS",
//       role: "Computer Technology Instructor",
//       duration: "7 Months",
//       description:" I teach basic computer courses such as CCC, MS Word, and general computer operating skills. My teaching focuses on helping students build a strong foundation in computer basics, including typing, file management, internet usage, and essential office tools. I explain concepts in easy language, using practical examples so students can understand and apply what they learn in real life. My goal is to make every student confident and comfortable with computers, whether they are beginners or improving their skills.",

//     },{
//       company: "Gravity Coding Hackathon",
//       role: "Frontend Developer (React.js)",
//       duration: "March 2025 – April 2025",
//       description:"Skillsvarz 0.1 Hackathon, organized by Gravity Coding March 2025 – April 2025 Selected for Round 2 after delivering a functional, visually engaging restaurant website. Built a responsive full-screen UI with React.js, Tailwind CSS, and GSAP animations. Implemented animated menu categories, reservation form, and scroll-triggered virtual tour. Optimized for UX, clean design, and performance."
            
//     },
//     {
//       company: "Vaistra Technologies Pvt Ltd",
//       role: "Software Development Intern (Next.js)",
//       duration: "4 Months",
//       description:
//         "During my Software Development internship at Vaistra Technologies, I worked primarily with  Next.js to build fast, scalable, and modern web applications. I gained hands-on experience in frontend development, backend API integration, component creation, project structuring, and debugging real client projects.",
//     },
//      {
//       company: "Vaistra Technologies Pvt Ltd",
//       role: "Frontend Web Developer (Next.js)",
//       duration: "Feb 2026 - Present",
//       description:
//         "I am currently working as a Frontend Developer at Vaistra Technologies, where I build fast, scalable, and modern web applications using Next.js. In my role, I develop responsive and high-performance user interfaces, implement secure authentication systems using NextAuth.js, and create reusable UI components with shadcn/ui and Tailwind CSS. I regularly integrate REST APIs, manage dynamic data rendering, and ensure proper project structuring for scalability and maintainability.",
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="relative w-full bg-black py-24 px-6 md:px-16 text-white overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none"></div>

//       <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-wide">
//         Experiences
//       </h2>

//       <div className="relative max-w-6xl mx-auto space-y-16">

//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             ref={(el) => (cardsRef.current[index] = el)}
//             className="relative group"
//           >
//             {/* Side Indicator Line */}
//             <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block"></div>

//             <div className="ml-0 md:ml-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl transition duration-500 hover:scale-[1.02] hover:border-blue-500/40">

//               <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//                 <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
//                   {exp.company}
//                 </h3>

//                 <span className="mt-2 md:mt-0 text-green-400 font-medium text-sm md:text-base">
//                   {exp.duration}
//                 </span>
//               </div>

//               <p className="mt-3 text-gray-300 text-sm md:text-base">
//                 <span className="font-semibold text-white">Role:</span>{" "}
//                 {exp.role}
//               </p>

//               <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
//                 {exp.description}
//               </p>
//             </div>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default Experience;




import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const experiences = [
    {
      company: "NPG-UNIQUE COMPUTERS",
      role: "Computer Technology Instructor",
      duration: "7 Months",
      type: "Teaching",
      description:
        "I teach basic computer courses such as CCC, MS Word, and general computer operating skills. My teaching focuses on helping students build a strong foundation in computer basics, including typing, file management, internet usage, and essential office tools.",
    },
    {
      company: "Gravity Coding Hackathon",
      role: "Frontend Developer (React.js)",
      duration: "March 2025 – April 2025",
      type: "Hackathon",
      description:
        "Selected for Round 2 in Skillsvarz 0.1 Hackathon. Built a fully responsive restaurant website using React.js, Tailwind CSS, and GSAP animations with animated menu, reservation system, and virtual tour.",
    },
    {
      company: "Vaistra Technologies Pvt Ltd",
      role: "Software Development Intern (Next.js)",
      duration: "4 Months",
      type: "Internship",
      description:
        "Worked on building fast, scalable web applications using Next.js. Gained hands-on experience in frontend development, API integration, component architecture, and real client project delivery.",
    },
    {
      company: "Vaistra Technologies Pvt Ltd",
      role: "Frontend Web Developer (Next.js)",
      duration: "Feb 2026 - Present",
      type: "Full-time",
      description:
        "Currently working as a Frontend Developer building high-performance user interfaces with Next.js, NextAuth.js, shadcn/ui, and Tailwind CSS. Focus on responsive design, API integration, and scalable code structure.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full bg-black py-24 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Experiences that shaped my skills and growth
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative mb-16 last:mb-0 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 md:-left-2 w-6 h-6 bg-black border-4 border-cyan-400 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              </div>

              {/* Experience Card */}
              <div className="ml-8 md:ml-12 bg-zinc-900/70 backdrop-blur-xl border border-zinc-700/80 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-cyan-400/30 transition-all duration-500 group-hover:-translate-y-1">
                
                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-cyan-400 font-medium mt-1">{exp.role}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="px-5 py-1.5 bg-zinc-800 text-cyan-300 text-sm font-medium rounded-full border border-cyan-900/50">
                      {exp.duration}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
                  {exp.description}
                </p>

                {/* Subtle Footer Accent */}
                <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-400 to-purple-500 mt-8 opacity-60 group-hover:w-20 transition-all" />
              </div>
            </div>
          ))}
        </div>

        
       
      </div>
    </section>
  );
};

export default Experience;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  // Auto Duration Function
const getInternshipDuration = () => {
  const startDate = new Date("2025-09-01"); // your real start date
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();

  // Adjust negative months
  if (months < 0) {
    years--;
    months = months + 12;
  }

  // Format Text
  const yearText =
    years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
  const monthText =
    months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "";

  // If both exist → "1 year, 3 months"
  if (yearText && monthText) return `${yearText}, ${monthText}`;

  // Only year
  if (yearText) return yearText;

  // Only month
  return monthText || "0 Month";
};
    
  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);
    const experRef = useRef();
   useGSAP(() => {
      gsap.from(experRef.current, {
        scrollTrigger: {
          trigger: experRef.current,
          start: "top 150%",
          end: "bottom 20%",
          scrub: true,
        },
        y: 50,
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, []);

  return (
    <section
      id="experience"
   
      className="w-full min-h-screen bg-gray-950 py-20 px-6 md:px-20 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-center tracking-wide">
        Experience
      </h2>

      <div    ref={experRef}  className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800 max-w-4xl mx-auto">
       
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
        NPG-UNIQUE COMPUTERS,Porbandar
        </h3>
         <p className="text-lg md:text-xl text-gray-300 mt-2">
          <span className="font-semibold text-white">Role:</span>Computer Technology Instructor(CCC,Gujarati Typing,Ms Office, and Computer Operator)
        </p>
             <p className="text-lg md:text-xl text-gray-300 mt-1">
          <span className="font-semibold text-white">Duration:</span>{" "}
          <span className="text-green-400">7 Months</span>
        </p>
          <p className="text-gray-300 mt-6 leading-relaxed text-base md:text-lg">
            I teach basic computer courses such as CCC, MS Word, and general computer operating skills. My teaching focuses on helping students build a strong foundation in computer basics, including typing, file management, internet usage, and essential office tools. I explain concepts in easy language, using practical examples so students can understand and apply what they learn in real life. My goal is to make every student confident and comfortable with computers, whether they are beginners or improving their skills.
        </p>
        <br></br>
       

        <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
          Gravity Coding(Skillsvarz 0.1 Hackathon, organized by Gravity Coding )
        </h3>
         <p className="text-lg md:text-xl text-gray-300 mt-2">
          <span className="font-semibold text-white">Role:</span> Frontend Development(React.Js)
        </p>
          <p className="text-lg md:text-xl text-gray-300 mt-2">
          <span className="font-semibold text-white">Live : </span><a href="annapurnarestaurant.vercel.app">annapurnarestaurant.vercel.app</a>
        </p>
          <p className="text-lg md:text-xl text-gray-300 mt-1">
          <span className="font-semibold text-white">Duration:</span>{" "}
          <span className="text-green-400"> March 2025 – April 2025</span>
        </p>
            <p className="text-gray-300 mt-6 leading-relaxed text-base md:text-lg">
          Skillsvarz 0.1 Hackathon, organized by Gravity Coding
            March 2025 – April 2025
            Selected for Round 2 after delivering a functional, visually engaging restaurant website. Built a responsive full-screen UI with React.js, Tailwind CSS, and GSAP animations. Implemented animated menu categories, reservation form, and scroll-triggered virtual tour. Optimized for UX, clean design, and performance.
            
        </p>
        <br></br>
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
          Vaistra Technologies Pvt ltd, Porbandar
        </h3>

        <p className="text-lg md:text-xl text-gray-300 mt-2">
          <span className="font-semibold text-white">Role:</span> Software Development Intern (Next.js)
        </p>

        <p className="text-lg md:text-xl text-gray-300 mt-1">
          <span className="font-semibold text-white">Duration:</span>{" "}
          <span className="text-green-400">{getInternshipDuration()}</span>
        </p>

        <p className="text-gray-300 mt-6 leading-relaxed text-base md:text-lg">
          During my Software Development internship at Vaistra Technologies,
          I worked primarily with <span className="text-blue-400">Next.js</span> 
          to build fast, scalable, and modern web applications. I gained hands-on 
          experience in frontend development, backend API integration, component 
          creation, project structuring, and debugging real client projects.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed text-base md:text-lg">
          I collaborated with the development team, followed best coding
          practices, and strengthened my understanding of full-stack development
          using Next.js and related modern technologies.
        </p>
      </div>
      
    </section>
  );
};

export default Experience;

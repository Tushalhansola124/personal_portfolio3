import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
<<<<<<< HEAD
import GradientText from "../Componets/GradientText.jsx";
=======
import certificate1 from "/public/certificate1.png";
import GradientText from '../Componets/GradientText.jsx';
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945

const Certificate = () => {
  const cardsRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

<<<<<<< HEAD
  const addRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.2,
=======
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
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
      });
    });
  }, []);

<<<<<<< HEAD
  // CERTIFICATES LIST ------------------------------------
  const certificates = [
    {
      img: "/certificate1.png",
      title: "Hackathon – Gravity Coding Pvt Ltd",
      date: "May 2025",
    },
    // Add more to see grid effect
    // {
    //   img: "/certificate2.png",
    //   title: "Web Development – Microsoft",
    //   date: "Mar 2025",
    // },
  ];

  // AUTO LAYOUT LOGIC ------------------------------------
  const isSingle = certificates.length === 1;

  return (
    <div id="certificate" className="bg-gray-950 py-24 px-6">
      <h1 className="text-white text-4xl font-bold text-center mb-14">
        <GradientText
          colors={["#4fffa8", "#3a82ff", "#4fffa8"]}
          animationSpeed={2.5}
          showBorder={false}
        >
          My Certificates
        </GradientText>
      </h1>

      {/* CERTIFICATE CONTAINER */}
      <div
        className={`${
          isSingle
            ? "flex justify-center" // When only 1 → center
            : "grid grid-cols-1 md:grid-cols-3 gap-10"
        } max-w-7xl mx-auto`}
      >
        {certificates.map((cert, i) => (
          <div
            key={i}
            ref={addRefs}
            className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 
                       rounded-3xl overflow-hidden shadow-lg p-4 
                       transition-transform duration-500 hover:scale-[1.04] hover:shadow-2xl 
                       hover:border-cyan-400/50 
                       ${isSingle ? "w-[90%] md:w-[40%]" : ""}`}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-56 object-cover rounded-2xl transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Text Area */}
            <div className="px-2 mt-4">
              <p className="text-cyan-400 text-sm font-semibold tracking-wide">
                {cert.date}
              </p>

              <h3 className="text-xl text-white font-bold mt-1 mb-3 leading-snug">
                {cert.title}
=======
  const projects = [
    {
      img: certificate1,
      link: "/public/certificate1.png",
      
      monthYear: "May 2025",
      title: "Hackathon by Gravity Coding Pvt Ltd",
    },
    // Add more items if needed
  ];

  return (
    <div id="certificate" className="bg-gray-950 w-full py-24 px-4">
      <h1 className="text-white text-4xl font-bold font-mono text-center mb-12">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          Certificate
        </GradientText>
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((item, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="relative group overflow-hidden rounded-3xl shadow-2xl w-[80vw] md:w-[28vw] transform transition duration-500 hover:scale-[1.03] bg-gray-900"
          >
            {/* Month-Year Above */}
            <div className="text-center text-white py-2 font-semibold text-sm md:text-base bg-gray-800">
              {item.monthYear}
            </div>

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[50vw] md:h-[18vw] object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Title */}
            <div className="w-full bg-black/60 backdrop-blur-sm text-white p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold font-mono mb-2">
                {item.title}
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
              </h3>

              {/* View Button */}
              <a
<<<<<<< HEAD
                href={cert.img}
                target="_blank"
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r 
                           from-cyan-400 to-blue-500 text-black font-semibold 
                           shadow-lg hover:shadow-cyan-500/40 
                           transition duration-300 hover:scale-105"
              >
                View Certificate
              </a>
            </div>

            {/* Glow Hover Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 
                            bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl 
                            transition duration-500 pointer-events-none"></div>
=======
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-400 to-blue-500 text-white font-semibold text-sm hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
                View
              </a>
            </div>
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

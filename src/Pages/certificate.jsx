import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import GradientText from "../Componets/GradientText.jsx";

const Certificate = () => {
  const cardsRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

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
      });
    });
  }, []);

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
              </h3>

              {/* View Button */}
              <a
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

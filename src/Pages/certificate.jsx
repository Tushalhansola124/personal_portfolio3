import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import GradientText from "../Componets/GradientText.jsx";
import certificate1 from "/public/certificate1.png";

gsap.registerPlugin(ScrollTrigger);

const Certificate = () => {
  const cardsRef = useRef([]);

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
      });
    });
  }, []);

  // ✅ Only ONE data array (clean)
  const certificates = [
    {
      img: certificate1,
      link: "/certificate1.png",
      monthYear: "May 2025",
      title: "Hackathon by Gravity Coding Pvt Ltd",
    },
  ];

  const isSingle = certificates.length === 1;

  return (
    <div id="certificate" className="bg-gray-950 w-full py-24 px-4">
      <h1 className="text-white text-4xl font-bold font-mono text-center mb-12">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          My Certificates
        </GradientText>
      </h1>

      <div
        className={`${
          isSingle
            ? "flex justify-center"
            : "grid grid-cols-1 md:grid-cols-3 gap-10"
        } max-w-7xl mx-auto`}
      >
        {certificates.map((item, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="relative group overflow-hidden rounded-3xl shadow-2xl 
                       w-[90%] md:w-[28vw] bg-gray-900 
                       transform transition duration-500 hover:scale-[1.03]"
          >
            {/* Month-Year */}
            <div className="text-center text-white py-2 font-semibold bg-gray-800">
              {item.monthYear}
            </div>

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[50vw] md:h-[18vw] object-cover 
                         group-hover:scale-110 transition-transform duration-500"
            />

            {/* Title + Button */}
            <div className="w-full bg-black/60 backdrop-blur-sm text-white p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold font-mono mb-3">
                {item.title}
              </h3>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r 
                           from-cyan-400 to-blue-500 text-black font-semibold 
                           shadow-lg hover:scale-105 transition-transform duration-300"
              >
                View Certificate
              </a>
            </div>

            {/* Glow Hover */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 
                              bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl 
                              transition duration-500 pointer-events-none"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import certificate1 from "/public/certificate1.png";
import GradientText from '../Componets/GradientText.jsx';

const Certificate = () => {
  const cardsRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

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

  const projects = [
    {
      img: certificate1,
      link: "http://localhost:5173/public/certificate1.png",
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
              </h3>

              {/* View Button */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-400 to-blue-500 text-white font-semibold text-sm hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

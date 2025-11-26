import React, { useRef } from "react";
import { MdDownload } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "../Componets/Particles";
import ScrollVelocity from "/src/Componets/ScrollVelocity.jsx";
import resume1 from "../assets/resume.pdf";
import GradientText from "../Componets/GradientText.jsx";
import ShinyText from "../Componets/ShinyText.jsx";
import LightRays from "../Componets/Lightrays.jsx";

const Home = () => {
  const imgRef = useRef();

  useGSAP(() => {
    gsap.from(imgRef.current, {
      x: 200,
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power3.out",
    });
  });

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume1;
    link.download = "Tushal-Hansola-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Background Effect */}
      <div className="absolute w-full h-[600px]">
        <LightRays
          raysOrigin="top-center"
          raysColor="black"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse
        />
      </div>

      <div className="relative min-h-screen bg-gray-950 flex flex-col md:flex-row items-center px-6 md:px-16">
        <Particles />

        {/* LEFT SECTION */}
        <div className="md:w-1/2 w-full pt-24 md:pt-32 space-y-6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
  I'm a{" "}
  <GradientText colors={["#fff", "#fff"]} animationSpeed={0}>
    
    {/* ✅ FIXED HEIGHT + WIDTH TO PREVENT LAYOUT SHIFT */}
    <div className="mt-[25px] h-[25vh] md:h-[15rem] w-[320px] md:w-[600px] ">
      <Typewriter
        words={[
          "Frontend Web Developer",
          "React / Next.js Developer",
          "PHP Developer"
        ]}
        cursor
        loop
        typeSpeed={120}
        delaySpeed={50}
        deleteSpeed={100}
      />
    </div>

  </GradientText>
</h1>


          <p className="text-gray-300 text-[1.05rem] md:text-[1.25rem] max-w-2xl leading-relaxed">
            Hello, I am <span className="font-semibold text-white">Tushal</span>,
            currently studying at Shri V.J. Modha College of IT (BKNMU). I am
            focused on becoming a full-stack web developer with experience in
            HTML, CSS, JavaScript, React, Bootstrap, and GSAP.
          </p>

          {/* BUTTON */}
          <button
            onClick={handleResumeDownload}
            className="group mt-10  mb-10 flex items-center justify-between gap-4 px-8 py-4 
                       bg-gray-800/70 text-white rounded-xl text-lg font-semibold
                       hover:bg-gray-700 transition duration-300 shadow-lg
                       active:scale-95 backdrop-blur"
          >
            <ShinyText text="Download Resume" speed={3} />
            <MdDownload size={26} />
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="md:w-1/2 w-full flex justify-center mb-10 mt-16 md:mt-0"
          ref={imgRef}
        >
          <a href="https://www.linkedin.com/in/tushal-hansola-92a909336/">
            <div className="w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full 
                            border-4 border-gray-700 shadow-lg overflow-hidden">
              <img
                src="img2.png"
                alt="profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </a>
        </div>
      </div>

      <ScrollVelocity
        texts={["Frontend Developer *", " * React Js Developer"]}
        velocity={200}
      />
    </>
  );
};

export default Home;

import React, { useRef } from "react";
import { MdDownload } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
<<<<<<< HEAD
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
=======
import Footer from "./Footer";
import Particles from "../Componets/Particles";
import ScrollVelocity from "/src/Componets/ScrollVelocity.jsx";
import resume1 from "../assets/resume.pdf";
import SplashCursor from '../Componets/SplashCursor.jsx';
import GradientText from '../Componets/GradientText.jsx';
import Orb from '../Componets/Orb.jsx';
import ShinyText from '../Componets/ShinyText.jsx';
  




const Home = () => {
  // const resume="https://drive.google.com/file/d/1rpA78aJmeZTS7jr3KnhmUsTUgOsDww-z/view?usp=drive_link";
  const resume = "/resume.pdf";

  const DownloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const imgRef = useRef();
  useGSAP(() => {
    gsap.from(imgRef.current, {
      x: 600,
      duration: 0.9,
      delay: 1,
      opacity: 0,
      scale: 0,
    });
  });

  const velocity = 1.5; // or whatever value you want

  return (
    <>
      <div
        id="home"
        className="md:bg-gray-950 md:h-[60vw] md:w-[100vw] md:flex w-[100vw] h-auto p-5 bg-gray-950"
      >
        {/* <SplashCursor /> */}
        <Particles />

        <div className="md:w-[50vw] md:text-6xl md:p-21 w-[90vw] text-1xl p-0">
          <h1 className="md:text-white md:relative md:font-mono md:mt-[5vw] text-white text-5xl md:h-[10vw] h-[6vw] md:text-7xl">
            I'm a
          
              <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              
              
            <Typewriter
              
              words={["Frontend  Web Developer", "Graphic Designer", "React Js Developer"]}
              cursor
              loop
              typeSpeed={120}
              delaySpeed={50}
              deleteSpeed={100}
            >

            </Typewriter>
            </GradientText>
          </h1>

          <p className="md:text-2xl md:top-0 md:left-0 md:mt-[2vw] md:w-[45vw] text-white pt-27">
            "Hello, I am Tushal, currently pursuing my studies at Shri V.J. Modha College of IT, affiliated with BKNMU. My focus is on becoming a full-stack web developer, and I have experience with HTML, CSS, JavaScript, React, Bootstrap, and GSAP."
          </p>
          <div>
            <a href={resume1} download="Tushal Hansola(Frontend Developer) Resume.pdf">
            <button
            
              className="md:text-4xl md:mt-10 md:cursor-pointer md:flex md:left-5 md:mb-[10vh] md:w-[20vw] md:bottom-1 md:hover:md:bg-gray-700 md:p-[3vh] md:px-10 md:bg-gray-900 md:text-white md:justify-between md:rounded-2xl text-white mt-7 border-amber-50 border-1 cursor-pointer flex left-6 mb-8 w-[25vw] text-1xl bottom-1 bg-gray-700 pt-2 pl-4 pb-2 rounded"
            >
            <ShinyText text="Resume" disabled={false} speed={3} className='custom-class' />
              <MdDownload className="mt-2" />
            </button>
            </a>
          </div>
        </div>

      

        <div className="md:w-[50vw]" ref={imgRef}>
            <div style={{ width: '100%', height: '740px', position: 'absolute' }}>
        <a href="https://www.linkedin.com/in/tushal-hansola-92a909336/">
{/*               <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  /> */}
            <img
              className="md:scale-90 md:visible invisible md:border-[0.5vw] md:border-t-[1px] md:border-b-[1px] md:border-l-[1px] md:border-r-[1px] md:border-transparent  md:transition-all md:duration-500 cursor-pointer md:shadow-[29vw] md:mt-19 md:w-[40vw] md:h-[40vw] md:ms-[4vw] md:rounded-full border-r-yellow-100 rounded-b-full rounded-t-full border-emerald-500"
              src="img2.png"
              alt="profile"
            />
          </a>

      
        </div>
        </div>
      </div>

      <div>
        
        <ScrollVelocity
          texts={["Frontend Developer *", " * React Js Developer"]}
          velocity={200}
          className="custom-scroll-text"
        />
      </div>
>>>>>>> 856a0f2b123ed1a9319b40510524af6a4dc99945
    </>
  );
};

export default Home;

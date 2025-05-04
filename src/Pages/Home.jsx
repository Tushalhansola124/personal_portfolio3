import React, { useRef } from "react";
import { MdDownload } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "./Footer";
import Particles from "../Componets/Particles";
import ScrollVelocity from "/src/Componets/ScrollVelocity.jsx";
import resume1 from "../assets/resume.pdf";

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
        <Particles />

        <div className="md:w-[50vw] md:text-6xl md:p-21 w-[90vw] text-1xl p-0">
          <h1 className="md:text-white md:relative md:font-mono md:mt-[5vw] text-white text-5xl md:h-[10vw] h-[6vw] md:text-7xl">
            I'm a{" "}
            <Typewriter
              words={["Frontend Developer", "Graphic Designer", "React Js Developer"]}
              cursor
              loop
              typeSpeed={120}
              delaySpeed={50}
              deleteSpeed={100}
            ></Typewriter>
          </h1>

          <p className="md:text-2xl md:top-0 md:left-0 md:mt-[2vw] md:w-[45vw] text-white pt-27">
            "Hello, I am Tushal, currently pursuing my studies at Shri V.J. Modha College of IT, affiliated with BKNMU. My focus is on becoming a full-stack web developer, and I have experience with HTML, CSS, JavaScript, React, Bootstrap, and GSAP."
          </p>
          <div>
            <a href={resume1} download="Tushal Hansola(Frontend Developer) Resume.pdf">
            <button
            
              className="md:text-4xl md:mt-10 md:cursor-pointer md:flex md:left-5 md:mb-[10vh] md:w-[20vw] md:bottom-1 md:hover:md:bg-gray-700 md:p-[3vh] md:px-10 md:bg-gray-900 md:text-white md:justify-between md:rounded-2xl text-white mt-7 border-amber-50 border-1 cursor-pointer flex left-6 mb-8 w-[25vw] text-1xl bottom-1 bg-gray-700 pt-2 pl-4 pb-2 rounded"
            >
              Resume
              <MdDownload className="mt-2" />
            </button>
            </a>
          </div>
        </div>

        <div className="md:w-[50vw]" ref={imgRef}>
          <a href="https://www.linkedin.com/in/tushal-hansola-92a909336/">
            <img
              className="md:scale-90 md:border-[0.5vw] md:border-t-[1px] md:border-b-[1px] md:border-l-[1px] md:border-r-[1px] md:border-transparent  md:transition-all md:duration-500 cursor-pointer md:shadow-[29vw] md:mt-19 md:w-[40vw] md:h-[40vw] md:ms-[4vw] md:rounded-full border-transparent rounded-b-full rounded-t-full"
              src="img2.png"
              alt="profile"
            />
          </a>
        </div>
      </div>

      <div>
        <ScrollVelocity
          texts={["Frontend Developer *", " * React Js Developer"]}
          velocity={200}
          className="custom-scroll-text"
        />
      </div>
    </>
  );
};

export default Home;

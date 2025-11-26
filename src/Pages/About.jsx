import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "../Componets/Particles";
import RollingGallery from "../Componets/Rolling_Gallery.jsx";
import GradientText from '../Componets/GradientText.jsx';
import CircularText from '../Componets/CircularText.jsx';
const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutRef = useRef();

  useGSAP(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 30%",
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
    <section id="about" className="relative w-full bg-gray-950 overflow-hidden">
      <Particles />
      <div className="flex flex-col md:flex-row w-full px-5 md:px-20 py-10 md:py-20 z-10 relative">
        {/* Left Section */}
        <div className="md:w-1/2 w-full space-y-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left font-serif">
          <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
About us
</GradientText>
          </h1>
          <div ref={aboutRef} className="text-white text-base md:text-xl leading-relaxed tracking-wide font-mono">
            <p>
              I’m Tushal Hansola, a passionate Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. I have experience building projects using popular frameworks like React.js, as well as CSS frameworks such as Tailwind and Bootstrap.
              <br /><br />
              Alongside my frontend skills, I’m currently expanding my expertise by learning backend development. In addition to coding, I also have a creative side and am skilled in graphic design, having worked on various projects that combine both technical and visual elements.
            </p>
          </div>
                <div className="text-white mt-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left  mb-4 ">
            
              <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
    Educations
</GradientText>
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-base md:text-lg font-mono">
              <li>I  have Completed 10th at Shri O.N. Modha School – 40.43%</li>
              <li> I have Completed 12th at Shri Bhavshji High School – 63%</li>
              <li> I am Currently pursuing BCA at Shri V J Modha College (BKNMU)</li>
              <li>Career Focus: Full Stack Web Development</li>
            </ul>
          </div>
          
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 md:visible invisible w-full mt-10 md:mt-0 flex justify-center items-center">
          {/* <RollingGallery autoplay pauseOnHover /> */}
              <CircularText
  text="FRONTEND DEVELOPER * REACT JS DEVELOPER * PHP DEVELOPER*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
        </div>
      </div>
    </section>
  );
};

export default About;

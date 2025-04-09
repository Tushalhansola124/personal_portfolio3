import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

const About=()=>{
  gsap.registerPlugin(ScrollTrigger);
  const ScrollRef=useRef();
  const TextLeft=useRef();
  const eduRef=useRef();

    useGSAP(()=>{
        gsap.from(ScrollRef.current,{
          scrollTrigger:{
            
              trigger:"h5",
              start:"top 80%",
              scrub:true, 
              end:"bottom 30%", 
              
                   
          },
          y:20,
          duration:0.5,
          scale:0,
          opacity:0,
        })
    })
    // useGSAP(()=>{
    //   gsap.from(TextLeft.current,{
    //         ScrollTrigger:{
              
    //           trigger:"ul li",
    //           start:"top 10%",
    //           scrub:true, 
              
    //           end:"bottom 30%", 
    //         },
    //         x:-300,
    //         duration:4,
    //         opacity:0,
    //   })
    // })

  
  
  return(
      <>
        <div  id="about" className="md:w-[100vw]    md:bg-gray-950 md:h-[90vw]
                w-[100vw] h-auto bg-gray-950 p-5 
        ">
              <h1 className=" md:text-4xl  md:font-bold 
               md:text-center  md:font-serif  md:py-25 md:text-white
               text-2xl text-white text-center font-bold font-mono
               ">About Us</h1>
              <div  className="md:text-white md:my-15 md:w-[100vw] md:p-5  md:font-mono md:text-3xl md:text-left
                text-white p-0 text-1xl 
              ">
                  <h5 ref={ScrollRef} className="md:ps-6 md:text-2xl md:justify-center md:tracking-wider md:font-normal
                
                  ">I’m Tushal Hansola, a passionate Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. I have experience building projects using popular frameworks like React.js, as well as CSS frameworks such as Tailwind and Bootstrap. Alongside my frontend skills, I’m currently expanding my expertise by learning backend development. In addition to coding, I also have a creative side and am skilled in graphic design, having worked on various projects that combine both technical and visual elements.</h5>
                </div>  

                <div className="md:text-white md:my-15 md:w-[100vw]  md:p-5  md:text-2xl md:text-left
                text-white py-7
                ">
                <h1 className=" md:text-5xl  md:font-bold 
               md:text-center  md:font-serif  md:py-5 md:text-white md:animate-pulse md:underline
               text-center font-bold text-2xl
               ">Education</h1>
                  <h5    className="md:ps-6 md:tracking-wider md:font-normal
                  p-0 pt-2
                  ">
                            <ul className="md:tracking-[4px] md:py-15
                            text-0xl p-0 pt-7  font-mono 
                            ">
              
                              
                              <li>I have Completed 10 Std at  Shri O.N.Modha School and .<br></br>Pecentage got 40.43%.</li>
                              <li>I have Completed 12 Std at Shri Bhavshji High School.<br></br>Pecentage got 63%.</li>
                              <li>BCA (Bachelor of Computer Applications): pursuing at Shri V J Modha College, affiliated with BKNMU, and now in mysecond year.</li>
                              <li>Career Focus: Full Stack Web Development.</li>
                            </ul>
                  </h5>
                </div>  
               
        </div>
      </>
      
  );
}
export default About;
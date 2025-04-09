import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import sundown from '/public/sundown.jpeg';
import calculator from '/public/calculator.jpeg';
import animation from '/public/GSAP_Project.jpeg';
const Project=()=>{

  const tl=gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);  
  useGSAP(()=>{
        tl.from(".box1",{
          scrollTrigger:{
            trigger:".box1",
            start:"top 90%",
            scrub:true,    
          },
          x:-900,
          duration:0.8,
          opacity:1,
          scale:0.8,
          stagger:0.6,
        })
      })


      const Project2=[
      {
        img:sundown,
        link:"https://sundown-studio-rose.vercel.app/",
        text:"SundDown Studio",
      },
      {
        img:calculator,  
        link:"https://calculator2-nu.vercel.app/",
        text:"Calculator Using React"
      },
      {
        img:animation,
        link:"https://gsap-project-xi.vercel.app/",
        text:"Animation  Using GSAP"
      }
    ];
  return(
<>
    <div id="project"  className="bg-gray-950  w-[100vw] h-[160vw] md:h-[120vw]">
        <h1 className="text-white text-4xl   font-bold font-mono text-center py-7">MyProject</h1>
        {Project2.map((item,index)=>{
          return(
            <>
                <div key={index} className=" md:mt-10 mt-10 box1 md:mb-6 md:w-[40vw] w-[50vw] h-[30vw] md:h-[32vw] ml-[30vw]  border-neutral-700 md:border-7 border-2 rounded md:rounded-2xl bg-white">
              <a href={item.link}><img className="md:w-[40vw]   rounded md:h-[27vw] w-[50vw] h-[23.5vw] " src={item.img}></img></a>
              <h3 className="md:text-2xl md:m-2 rounded text-1xl bg-gray-800 text-white md:text-white font-mono font-bold text-center">{item.text}</h3>
          </div>
            </>
          )
        })}
          {/* <div  className="w-[40vw] box2  mt-12 h-[30vw] ml-[30vw]  border-neutral-700 border-7 rounded-2xl bg-white">
              <a href="https://calculator2-nu.vercel.app/"><img className="w-[40vw] h-[27vw] " src="calculator.jpeg"></img></a>
              <h3 className="text-2xl text-gray-800 font-mono font-bold text-center">
                Calculator Using React
              </h3>
          </div>
          <div   className="w-[40vw] box3  mt-12 h-[30vw] ml-[30vw]  border-neutral-700 border-7 rounded-2xl bg-white">
              <a href="https://gsap-project-xi.vercel.app/"><img className="w-[40vw] h-[27vw] " src="GSAP_Project.jpeg"></img></a>
              <h3 className="text-2xl text-gray-800 font-mono font-bold text-center">
                Animation Project Using GSAP
              </h3>
          </div> */}
          
    </div>
</>

  );
}
export default Project;
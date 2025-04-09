import React, { useEffect, useRef } from "react";
import Html from '/public/html.jpg'
import Css from '/public/css..png'
import Js from '/public/js.png'
import boostrap from '/public/boostrap.jpg'
import tailwind from '/public/tailwind.jpg'
import react from '/public/react.png'
import gsap1 from '/public/gsap.png'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PHP from '/public/php.png'
import git from '/public/git2.png'
import mysql from '/public/mysql.png'
import github2 from '/public/github2.png'


const Skill=()=>{
    const imageUrls = [
              {
                img:Html,
              },
              {
                img:Css,
              },
              {
                img:Js,
              },
              {
                img:boostrap,
              },
              {
                img:tailwind,
              },
              {
                img:react,
              },
              {
                  img:gsap1,
              },
            

      ];

      const Bakend = [
        {
          img:PHP,
        },
        {
          img:git,
        },
        {
          img:mysql,
        },
        {
          img:github2,
        },
      
      

];
      

      const Box1=useRef();
      gsap.registerPlugin(ScrollTrigger);
      useGSAP(()=>{
          // gsap.from(Box1.current,{
          //       ScrollTrigger:{
          //         scroller:"Box1",
          //         scrub:true, 
          //         markers:1,
          //         start:"top 50%", 
          //       },
          //       y:40,
          //       duration:0.4,
          //       scale:0,

          // })

          gsap.from(Box1.current,{
            scrollTrigger:{
              
                trigger:"Box1",
                start:"top 80%",
                scrub:true, 
                end:"bottom 30%", 
                
                
                     
            },
            y:70,
            duration:0.9,
            scale:0,
            opacity:0,
          })
      })


        
  return(
      <>
        <div  id="skill" className="w-[100vw] md:h-[100vw] h-[200vw] bg-gray-950">
          <h1 className="text-4xl text-white  font-bold font-mono  text-center p-6   scale-90
        
          
              ">MySkill</h1>
                  <div  ref={Box1} className="w-[90vw] rounded-2xl h-[70vw] md:h-[35vw] ml-[4vw] me-[4vw] bg-white">
                        <h2 className="text-3xl bg-gray-300 text-center md:py-4 py-2 font-semibold font-mono animate-pulse">Frontend Languages</h2>
                          <div   className="flex  flex-wrap   gap-[1vw]">

                            {imageUrls.map((item,index)=>{
                                        return  <>
                                          <img   key={index} className=" md:ms-10 ms-5 p-2 md:mt-15 
                                          mt-10
                                          md:w-[10vw] w-[12vw] h-[8vw] border-3 border-gray-500"
                                        src={item.img}
                                        ></img>
                                        
                                        </>
      
                            })}
                          <div> 
                            
                        
                              
                          </div>
                          
                          
                          
                          </div>
                  </div>

                  <div  ref={Box1} className="w-[90vw] md:mt-12 rounded-2xl h-[70vw] md:h-[35vw] ml-[4vw] me-[4vw] bg-white">
                        <h2 className="text-3xl bg-gray-300 text-center md:py-4 py-2 font-semibold font-mono animate-pulse">Backend Languages</h2>
                          <div   className="flex  flex-wrap   gap-[1vw]">

                            {Bakend.map((item,index)=>{
                                        return  <>
                                          <img   key={index} className=" md:ms-10 ms-5 p-2 md:mt-15 
                                          mt-10
                                          md:w-[10vw] w-[12vw] h-[vw] border-3 border-gray-500"
                                        src={item.img}
                                        ></img>
                                        
                                        </>
      
                            })}
                          <div> 
                            
                        
                              
                          </div>
                          
                          
                          
                          </div>
                  </div>
              
              
        </div>
      </>
  );
}
export default Skill;
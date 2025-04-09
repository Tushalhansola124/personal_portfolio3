import React, { useRef } from "react";
import { MdDownload } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { delay } from "motion";
import Footer from "./Footer";
const Home=()=>{
  
  const resume="https://drive.google.com/file/d/1rpA78aJmeZTS7jr3KnhmUsTUgOsDww-z/view?usp=drive_link";
  const DownloadFile=(url)=>{

    const fileName=url.split("/").pop(); 
    const aTag=document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  const imgRef=useRef();
  useGSAP(()=>{
    gsap.from(imgRef.current,{
      x:600,
      duration:0.9,
      delay:1,
      opacity:0,
      scale:0,
    })
  })

  return(
    <div  id="home" className="md:bg-gray-950 md:h-[60vw] md:w-[100vw] md:flex
      w-[100vw] h-auto p-5 bg-gray-950
    ">
      <div className="md:w-[50vw]  md:text-6xl md:p-21
        w-[90vw] text-1xl p-0 
      ">
              <h1 className="md:text-white md:relative md:font-mono md:mt-[5vw]
                m-
                text-white text-5xl md:h-[10vw] h-[6vw] md:text-7xl 
              ">
                I'm a  
                  <Typewriter
                  words={[' Frontend Devloper',' Graphic Designer'
                      ,' React Js Devloper'   
                  ]}
                  cursor
                  loop
                  typeSpeed={120}
                  delaySpeed={50}
                  deleteSpeed={100}
                  >

                  </Typewriter>
              </h1>

              <p className="md:text-2xl  md:top-0 md:left-0 md:mt-[2vw] md:w-[45vw] text-white pt-27  ">"Hello, I am Tushal, currently pursuing my studies at Shri V.J. Modha College of IT, affiliated with BKNMU. My focus is on becoming a full-stack web developer, and I have experience with HTML, CSS, JavaScript, React, Bootstrap, and GSAP."</p>
              <div>
                  
                  <button 
                  onClick={()=>DownloadFile(resume)}
                  className="md:text-4xl md:mt-10 md:cursor-pointer  md:flex  md:left-5 md:mb-[10vh] md:w-[20vw] md:bottom-1   md:hover:md:bg-gray-700 md:p-[3vh] md:px-10 md:bg-gray-900 md:text-white   md:justify-between  md:rounded-2xl
                  text-white mt-7 border-amber-50 border-1 cursor-pointer flex left-6 mb-8 w-[25vw]  text-1xl bottom-1 bg-gray-700 pt-2 pl-4 pb-2 rounded
                  ">Resume<MdDownload  className="  mt-2"/>
                  </button>
              </div>
              
      </div>
      
      <div className="md:w-[50vw] " ref={imgRef}>
            <a href="https://www.linkedin.com/in/tushal-hansola-92a909336/">  <img  className=" 
              md:scale-90
            md:border-[1vw]
            md:border-b-stone-800
              md:border-t-stone-800   
              md:border-s-white
                md:border-e-white
            cursor-pointer
                  md:shodow-[29vw]
                  md:visible
              md:mt-19 md:w-[40vw] md:h-[40vw] md:ms-[4vw] md:rounded-full
              visible 
                border-[1vw]
                rounded-b-full
                rounded-t-full
            border-b-stone-800
              border-t-stone-800   
              border-s-amber-200
                border-e-amber-200
              " src="img2.png"></img></a>
            
            
              
      </div>
      
    </div>
  
  );
}
export default Home;
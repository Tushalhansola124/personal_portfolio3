import React from "react";
import { BsGithub } from "react-icons/bs";
const Contact =()=>{
  return(
        <>
        <div  id="contact" className="w-[100vw]  p-[10vw]  h-auto flex-wrap bg-gray-950">
          <h1 className="text-white py-  font-mono text-4xl text-center">Contact Us</h1>
              <center>
              <div className="bg-white mt-10 p-8 rounded-lg shadow-lg max-w-lg w-full fade-in-up">
    <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>

    <form>
      
    
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-medium">Your Name</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none input-focus" placeholder="Enter your full name"/>
      </div>

    
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium">Your Email</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none input-focus" placeholder="Enter your email"/>
      </div>

  
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-medium">Your Message</label>
        <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none input-focus" placeholder="Write your message here..."></textarea>
      </div>

      <div class="text-center">
        <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105">
          Submit
        </button>
      </div>
    </form>
  </div>  
              </center>     
        </div>
        </>
      );
} 
export default Contact;
import React from "react";
import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";
import Particles from "../Componets/Particles";


const Contact = () => {
  return (
    <>
      <div id="contact" className="w-full min-h-screen bg-gray-950 relative flex items-center justify-center p-6">
        <Particles />
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-2xl w-full text-white animate-fade-in">
          <h1 className="text-4xl font-bold text-center mb-8 font-mono">Contact Us</h1>
          <form className="space-y-6">
            {/* Name */}
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-400">
              <FiUser className="text-xl mr-3 text-cyan-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent w-full outline-none text-white placeholder-gray-300"
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-400">
              <FiMail className="text-xl mr-3 text-cyan-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent w-full outline-none text-white placeholder-gray-300"
              />
            </div>

            {/* Message */}
            <div className="flex items-start bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-400">
              <FiMessageCircle className="text-xl mr-3 mt-1 text-cyan-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="bg-transparent w-full outline-none text-white placeholder-gray-300 resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 transition-transform duration-300 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

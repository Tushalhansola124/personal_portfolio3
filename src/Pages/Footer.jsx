import React from "react";
import { Instagram, Github, Mail, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Using react-icons for WhatsApp
import Particles from "../Componets/Particles"; // Optional if you use Particles

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-10 relative overflow-hidden">
      {/* Optional Particles */}
      {/* <Particles className="absolute inset-0 z-0" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
          I’m Tushal Hansola, a passionate Frontend Developer skilled in HTML, CSS, JavaScript, React.js, Tailwind, and Bootstrap. I’m also expanding into backend development and have a creative edge in graphic design, blending technical and visual excellence.
          </p>
        </div>

        {/* Website Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Website Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-6">
            <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
              <Instagram size={28} />
            </a>
            <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition duration-300">
              <FaWhatsapp size={28} />
            </a>
            <a href="https://github.com/Tushalhansola124" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-300">
              <Github size={28} />
            </a>
            <a href="tel:+91 9586941294" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <PhoneCall size={28} />
            </a>
            <a href="mailto:tushalhansola15@gmail.com" className="text-gray-400 hover:text-red-400 transition duration-300">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-600">
        © 2025. All Rights Reserved.
        <br></br> Designed & Developed by Mr. Tushal Hansola
      </div>
    </footer>
  );
};

export default Footer;

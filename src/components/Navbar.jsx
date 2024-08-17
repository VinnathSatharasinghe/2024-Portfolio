/* eslint-disable no-unused-vars */

import { Socials } from "./../constants";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[105px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="flex items-center">
          <img
            src="/public/vinnath.png"
            alt="logo"
            width={45}
            height={45}
            style={{ borderRadius: '20px' }}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Vinnath Satharasinghe
          </span>
        </a>

        <div className="hidden md:flex w-[700px] h-full items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">

            <a href="#" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#education" className="cursor-pointer">
              Education
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#works" className="cursor-pointer">
              Projects
            </a>
               <a href="#certificates" className="cursor-pointer">
              Certificates
            </a>
            <a href="#feedback" className="cursor-pointer">
              Feedback
            </a>

            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <img src={social.src} alt={social.name} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

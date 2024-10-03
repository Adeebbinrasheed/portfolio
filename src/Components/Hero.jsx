import React from "react";
import image from "../assets/black.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-20 h-screen flex flex-col sm:flex-row-reverse md:flex-row-reverse space-y-6 md:gap-7 justify-center  items-center ">
      <img
        src={image}
        alt=""
        className="rounded-full w-64 h-64 md:w-80 md:h-80 shadow-[0_0_8px_9px_rgba(0,0,0,0.3)]"
      />
      <div className=" flex flex-col space-y-2 p-1 ">
        <h1 className="text-2xl  md:text-4xl lg:text-5xl font-bold">
          Hi,<span className="text-red-600">ENTER THE NAME</span>
        </h1>
        <TypeAnimation
          sequence={["Iam a web developer", 1000, ""]}
          className="text-lg md:text-2xl font-new"
          speed={50}
          repeat={Infinity}
        />
        <h1 className="font-semibold text-gray-500">Find Me In</h1>

        <div className="flex  space-x-6 ">
          
            <button className="border-2  border-white rounded-full p-1 w-7 h-7 flex justify-center items-center">
              <FaWhatsapp />
            </button>
            <button className="border-2  border-white rounded-full p-1 w-7 h-7 flex justify-center items-center">
              <FaInstagram />
            </button>
            <button className="border-2  border-white rounded-full p-1 w-7 h-7 flex justify-center items-center">
              <FaLinkedin />
            </button>
          
        </div>
        <div className="pt-4">
          <button className="bg-red-700 rounded-lg p-1 ">Download cv</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

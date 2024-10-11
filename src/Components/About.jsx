import React from "react";
import img from "../assets/theme.avif";
import { useScroll, useTransform, motion } from "framer-motion";
const About = () => {
  const { scrollYProgress } = useScroll();
  const right = useTransform(scrollYProgress, [0, 1], [0, -800]);
  return (
    <div className="mt-20" id="about">
      <h1 className="text-6xl sm:text-7xl lg:text-[300px] text-center font-bold opacity-50">
        About <span className="text-red-600">Me</span>
      </h1>

      <div
        className="  flex flex-col md:flex-row-reverse items-center px-2 md:px-0   mx-2 md:mx-6 md:gap-20 mt-5  space-y-3 py-3"
         
      >
        <div className="md:w-1/2 " >
          <p className="text-gray-400 text-balance capitalize text-2xl">
            I am a passionate fresher web developer with a strong foundation in
            React.js, HTML, and Tailwind CSS. I enjoy building responsive and
            user-friendly web applications, continuously learning new
            technologies, and improving my skills to create impactful digital
            experiences
          </p>
        </div>     
        <div className="">
          <img
            src={img}
            alt=""
            className=" object-cover rounded-full"
          />
        </div>  
      </div>
    </div>
  );
};

export default About;

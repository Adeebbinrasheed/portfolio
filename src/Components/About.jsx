import React from "react";
import img from "../assets/img.jpeg";

const About = () => {
  return (
    <div className="mt-36 h-auto ">
      <h1 className="text-4xl text-center font-bold">About Me</h1>
      <div
        className=" flex flex-col md:flex-row-reverse items-center px-2 md:px-0  bg-slate-800 mx-2 md:mx-6 md:gap-20 mt-5  space-y-3 py-2"
        id="about"
      >
        <div className="md:w-1/2">
          <p className="text-gray-400 text-balance">
            I am a passionate fresher web developer with a strong foundation in
            React.js, HTML, and Tailwind CSS. I enjoy building responsive and
            user-friendly web applications, continuously learning new
            technologies, and improving my skills to create impactful digital
            experiences
          </p>
        </div>

        <div className="">
          <img src={img} alt="" className="w-full h-52 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;

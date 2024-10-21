import React from "react";
import img from "../assets/theme.avif";
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="mt-20" id="about">
      <motion.h1
        className="text-2xl sm:text-7xl font-new1 tracking-widest  text-center font-bold text-gray-400"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true, amount: 0.4 }}
      >
        About <span className="text-red-600">Me</span>
      </motion.h1>

      <div className="flex flex-col md:flex-row-reverse items-center px-2 md:px-0 mx-2 md:mx-6 md:gap-20 mt-5 space-y-3 py-3">
        <motion.div
          className="md:w-1/2"
          initial="hidden"  
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={textVariants}
        >
          <div>

          <p className="text-gray-400 text-balance capitalize text-2xl">
            I am a passionate fresher web developer with a strong foundation in
            React.js, HTML, and Tailwind CSS. I enjoy building responsive and
            user-friendly web applications, continuously learning new
            technologies, and improving my skills to create impactful digital
            experiences
          </p>
          </div>
        </motion.div>
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
        >
          <img src={img} alt="" className="object-cover rounded-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

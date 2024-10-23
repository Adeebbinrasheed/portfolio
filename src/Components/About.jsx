import React from "react";
import img from "../assets/pic1.webp";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // const sideClass = side === 'left' ? 'justify-end pr-8' : 'justify-start pl-8';

  return (
    // <div className="mt-20" id="about">
    //   <motion.h1
    //     className="text-2xl sm:text-7xl font-new1 tracking-widest  text-center font-bold text-gray-400"
    //     initial="hidden"
    //     whileInView="visible"
    //     variants={textVariants}
    //     viewport={{ once: true, amount: 0.4 }}
    //   >
    //     About <span className="text-red-600">Me</span>
    //   </motion.h1>

    //   <div className="flex flex-col md:flex-row-reverse items-center px-2 md:px-0 mx-2 md:mx-6 md:gap-20 mt-5 space-y-3 py-3">
    //     <motion.div
    //       className="md:w-1/2"
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.4 }}
    //       variants={textVariants}
    //     >
    //       <div>

    //       <p className="text-gray-400 text-balance capitalize text-xl">
    //         I am a passionate fresher web developer with a strong foundation in
    //         React.js, HTML, and Tailwind CSS. I enjoy building responsive and
    //         user-friendly web applications, continuously learning new
    //         technologies, and improving my skills to create impactful digital
    //         experiences
    //       </p>
    //       </div>
    //     </motion.div>
    //     <motion.div
    //       className=""
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.2 }}
    //       variants={imageVariants}
    //     >
    //       <img src={img} alt="" className="object-cover rounded-2xl" />
    //     </motion.div>
    //   </div>

    // </div>
    <>
      <Parallax bgImage={img} strength={-100} className="mt-20">
        <div
          style={{ height: 300 }}
          className=" flex justify-center items-center"
        >
          <div className="text-5xl text-gray-500 font-semibold font-new1">About Me</div>
        </div>
      </Parallax>
      <motion.div
        className="flex flex-col md:flex-row justify-center mt-10 items-center gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={textVariants}
      >
        {/* Left section with description */}
        <div className="max-w-2xl">
          <p className="text-gray-800 text-balance text-lg text-center md:text-left">
            I am a passionate fresher web developer with a strong foundation in
            React.js, HTML, and Tailwind CSS. I enjoy building responsive and
            user-friendly web applications, continuously learning new
            technologies, and improving my skills to create impactful digital
            experiences.
          </p>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">3+</h1>
            <p className="text-gray-500 text-lg">Projects</p>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">1+</h1>
            <p className="text-gray-500 text-lg">Years Experience</p>
          </div>
        </div>
      </motion.div>

      <VerticalTimeline className="mt-10 md:mt-14 ">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(7, 8, 59)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2024 - Present "
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Livnox IT Solutions
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(7, 8, 59)", color: "#fff" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Mern Stack Trainee
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mentorow technology,ernakulam
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(7, 8, 59)", color: "#fff" }}
          date="2019 - 2023"
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Science Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sambhram Institute Of Technology,Bangalore
          </h4>
          <p>Btech in Computer Science engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
          icon={<LuSchool />}
        />
      </VerticalTimeline>
    </>
  );
};

export default About;

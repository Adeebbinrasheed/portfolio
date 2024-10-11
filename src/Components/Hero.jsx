import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import adeeb from "../assets/adeeb1.jpg";
import { Parallax } from "react-parallax";
import image1 from "../assets/black.jpeg";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const right = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const left = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <>
      <Parallax bgImage={image1} strength={900}>
        <div style={{ height: 700 }}>
          <div>
            <div className="pt-20  flex flex-col sm:flex-row-reverse md:flex-row-reverse space-y-6 md:gap-7 justify-center  items-center "  id="home">
              <img
                src={adeeb}
                alt=""
                className="rounded-full w-64 h-64 md:w-80 md:h-80 shadow-[0_0_20px_8px_rgba(255,0,0,0.3)]"
               
              />
              <div className=" flex flex-col space-y-2 p-1 ">
                <h1 className="text-2xl  md:text-4xl lg:text-5xl font-bold">
                  Hi,<span className="text-red-500">ADEEB BIN RASHEED</span>
                </h1>
                <TypeAnimation
                  sequence={["Iam a web developer", 1000, ""]}
                  className="text-lg md:text-3xl font-new"
                  speed={50}
                  repeat={Infinity}
                />
                <h1 className="font-semibold text-gray-500">Find Me In</h1>

                <div className="flex space-x-6 ">
                  <button className="border-2  border-white rounded-full p-1 w-7 h-7 flex justify-center items-center hover:bg-green-500 hover:text-white ">
                    <FaWhatsapp />
                  </button>
                  <button className="border-2  border-white rounded-full p-1 w-7 h-7 flex justify-center items-center hover:bg-pink-700 hover:text-white">
                    <FaInstagram />
                  </button>
                  <button className="border-2  border-white rounded-full p-1 w-7 h-7 flex justify-center items-center hover:bg-blue-500 hover:text-white">
                    <FaLinkedin />
                  </button>
                </div>
                <div className="pt-4">
                  <button class="relative h-[0px] w-40 overflow-hidden border-x-4 rounded-full border-red-800 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-red-400 hover:before:w-2/4 hover:before:bg-red-800 hover:after:w-2/4 hover:after:bg-red-800">
                    <span class="relative z-10">Resume</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-4 items-center">
              <motion.h1
                className="lg:text-9xl sm:text-7xl text-4xl text-stroke"
                style={{ x: right }}
              >
                WEB DEVELOPER
              </motion.h1>
              <motion.h1
                className="lg:text-9xl sm:text-7xl text-4xl text-stroke "
                style={{ x: left }}
              >
                REACT DEVELOPER
              </motion.h1>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Hero;

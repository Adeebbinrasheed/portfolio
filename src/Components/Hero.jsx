import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import adeeb from "../assets/adeeb1.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const { scrollYProgress } = useScroll();
  const right = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const left = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <div className="relative flex flex-col items-center justify-center h-auto overflow-hidden  text-white">
      <div className="absolute inset-0 z-0 flex flex-col mb-36 items-center justify-center">
        <motion.h1
          className="xl:text-[10rem] lg:text-[7rem] md:text-[5rem] sm:text-[5rem] text-[2rem] text-stroke opacity-50"
          style={{ x: right }}
        >
          WEB DEVELOPER
        </motion.h1>
        <motion.h1
          className="xl:text-[10rem] lg:text-[7rem] md:text-[5rem] sm:text-[5rem] text-[2rem] text-stroke opacity-50"
          style={{ x: left }}
        >
          REACT DEVELOPER
        </motion.h1>
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 flex flex-col items-center text-center space-y-4 md:space-y-6 pt-20"
      >
        <img
          src={adeeb}
          alt="Adeeb"
          className="rounded-full w-56 h-56 md:w-80 md:h-80 shadow-[0_0_20px_8px_rgba(0,0,0)]"
        />
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-600">
          Hi, <span className="text-black">ADEEB BIN RASHEED</span>
        </h1>
        <TypeAnimation
          sequence={["I am a web developer", 1000, ""]}
          className="text-lg md:text-3xl font-new text-slate-500"
          speed={50}
          repeat={Infinity}
        />
        <h1 className="font-semibold text-gray-500">Find Me On</h1>

        <div className="flex space-x-4">
          <a
            href="https://wa.me/7034407807"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-black rounded-full p-2 hover:bg-green-500 hover:text-white transition-all">
              <FaWhatsapp className="text-black" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/adeebbinrasheed/profilecard/?igsh=MTN4Zm01cXV5MmJ1Mg== "
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-black rounded-full p-2 hover:bg-pink-700 hover:text-white transition-all">
              <FaInstagram className="text-black" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-black rounded-full p-2 hover:bg-blue-500 hover:text-white transition-all">
              <FaLinkedin className="text-black" />
            </button>
          </a>
        </div>
        <button class="before:ease relative h-12 w-40 overflow-hidden border rounded-xl border-black text-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
          <span class="relative z-10">
            <a href="/Adeebbin.pdf">Resume</a>
          </span>
        </button>
      </motion.div>

      <FloatingWhatsApp
        phoneNumber="7034407807"
        accountName="Adeeb"
        chatMessage="Hello there! 🤝 How can I help you?"
        className="z-50"
      />
    </div>
  );
};

export default Hero;

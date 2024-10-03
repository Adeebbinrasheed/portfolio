import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import home from "../Pages/Home";
import image from "../assets/aa.png";

import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const togglemenu = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed z-10 w-full flex justify-between items-center  py-5 px-7 bg-black text-white shadow-slate-700 shadow-md">
      <div className="md:pl-7">
        <img src={image} alt="" width={50} />
      </div>
      <div className="space-x-14 text-xl hidden md:block">
        <a href="#home" className="hover:underline hover:text-gray-500">
          Home
        </a>
        <a href="#about" className="hover:underline hover:text-gray-500">
          About
        </a>
        <a href="#project" className="hover:underline hover:text-gray-500">
          Project
        </a>
        <a href="#contact" className="hover:underline hover:text-gray-500">
          Contact
        </a>
      </div>
      <button className="border px-3 hidden bg-black text-white rounded-full">
        Let's talk
      </button>
      <div className="md:hidden">
        <button className="text-2xl" onClick={togglemenu}>
          {open ? <MdOutlineClose /> : <BiMenuAltRight />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ y: -100, opacity: 1, scale: 1 }}
          animate={{ y: 100, opacity: 1, scale: 1 }}
          //    exit={{ x: 100, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute mt-14 left-0  right-0 bg-black md:hidden  text-center mx-3 rounded-xl p-5"
        >
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-lg font-light hover:underline " onClick={togglemenu}>
              Home
            </a>
            <a href="#about" className="text-lg font-light hover:underline" onClick={togglemenu}>
              About
            </a>
            <a href="#project" className="text-lg font-light hover:underline" onClick={togglemenu}>
              Project
            </a>
            <a href="#contact" className="text-lg font-light hover:underline" onClick={togglemenu}>
              Contact
            </a>
            <button className="border md:hidden  bg-black text-white rounded-full" onClick={togglemenu}>
              Let's talk
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

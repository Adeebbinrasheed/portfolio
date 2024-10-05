import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";


import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const togglemenu = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed z-10 w-full  flex justify-between  items-center bg-slate-950 py-5 px-7  text-white">
      <div className="md:pl-7">
        <h1 className="text-2xl pl-9 font-new ">ADEEB</h1>
      </div>
      <div className="space-x-32 text-xl hidden md:block font-mono ">
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
      <div className="md:hidden">
        <button className="text-2xl" onClick={togglemenu}>
          {open ? <MdOutlineClose /> : <BiMenuAltRight />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ y: -100, opacity: 1, scale: 1 }}
          animate={{ y: 100, opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute mt-36 left-0   right-0 bg-black md:hidden  text-center mx-3 rounded-xl p-5"
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

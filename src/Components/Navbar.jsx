import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed z-20 w-full flex justify-between items-center bg-opacity-55 py-3 px-7 text-white">
      
      <h1 className="text-2xl font-new">ADEEB</h1>
      
     
      <div className="md:hidden">
        <button className="text-2xl" onClick={toggleMenu}>
          {open ? <MdOutlineClose /> : <BiMenuAltRight />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-12 left-0 right-0 bg-slate-950 text-center mx-3 rounded-xl p-5 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-lg font-light hover:underline"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg font-light hover:underline"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#project"
              className="text-lg font-light hover:underline"
              onClick={toggleMenu}
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-lg font-light hover:underline"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

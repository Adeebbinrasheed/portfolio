import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-400 flex flex-col justify-center items-center gap-y-5 py-5 mt-8">
      <div className="flex gap-6 text-lg">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>WhatIDo</h1>
        <h1>Project</h1>
      </div>
      <div className="flex gap-7 text-lg">
        <a href=""><FaWhatsapp /></a>
        <a href=""><FaInstagram /></a>
        <a href=""><FaGithub /></a>
        <a href=""><FaLinkedin/></a>
      </div>
      <div>
        <h1>&copy;2024 Portfolio, Inc. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import black from "../assets/black.jpeg";

const About = () => {
  return (
    <div className="h-auto flex  flex-col md:flex-row items-center bg-slate-800 mx-2 gap-2 pt-10 mt-12 space-y-5" id="about">
      <h1 className="text-3xl font-bold">About Me</h1>
      <div>
        <img src={black} alt="" width={350}/>
      </div>
      <div className="text-center">
        
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          aspernatur officiis saepe ducimus nostrum modi quam sus
        </p>
      </div>
    </div>
  );
};

export default About;

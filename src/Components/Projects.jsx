import React from "react";
import black from "../assets/black.jpeg";

const Projects = () => {
  const data = [
    {
      image: black,
      pname: "Shopping Cart",
    },
    {
      image: black,
      pname: "flipkart",
    },
  ];
  return (
    <div className="pt-5 h-auto">

      <h1 className="text-3xl md:text-5xl font-bold text-center">Projects</h1>
    <div
      className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:px-9 md:grid-cols-3 pt-5"
      id="project"
    >

      {data.map((item) => (
        <div className="border-2  flex  flex-col items-center w-[35vh] lg:w-[40vh] h-[50vh]  mt-5 space-y-9 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <div className="overflow-hidden ">
            <img
              src={item.image}
              alt=""
              className="transform transition-transform duration-300 hover:scale-110  rounded-lg "
            />
          </div>
          <h1 className="text-3xl font-bold">{item.pname}</h1>
          <div className="space-x-2">
            <button className="bg-red-800 p-1 rounded-lg text-lg">
              Github
            </button>
            <button className="bg-red-800 p-1 px-3 rounded-lg text-lg">
              Live
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;

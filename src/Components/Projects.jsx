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
    <div
      className="flex flex-col md:flex-row gap-3 justify-center items-center pt-6"
      id="project"
    >
      <h1 className="text-3xl font-bold">Projects</h1>

      {data.map((item) => (
        <div className="border-2  flex  flex-col items-center h-[50vh]  mt-5 space-y-9 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <div className="overflow-hidden w-72 h-42">
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
  );
};

export default Projects;

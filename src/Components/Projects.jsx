import React from "react";
import mentorow from "../assets/ment.jpg";
import shopping from "../assets/shopping.jpg";
import smart from "../assets/smart.png";

const Projects = () => {
  const data = [
    {
      image: shopping,
      pname: "Ecommerce website",
      website: "https://shopping-cart-olive-three.vercel.app",
    },
    {
      image: mentorow,
      pname: "Mentorow website",
      website: "https://mentorow-home-page-wcm7.vercel.app",
    },
    {
      image: smart,
      pname: "Smart Host-Architectural",
      website: "https://www.smarthost.org.uk/",
    },
  ];
  return (
    <div className="pt-5 md:mt-24  h-auto mx-4" id="project">
    <h1 className="text-4xl sm:text-7xl tracking-widest font-new1 text-black text-center font-bold">
      My Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 pt-10 md:pt-16">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center pb-3 w-full h-[40vh] mt-5 space-y-3 rounded-lg transform transition-transform duration-300 opacity-75 hover:opacity-100">
          <div className="overflow-hidden w-full h-full">
            <a href={item.website}>
              <img
                src={item.image}
                alt=""
                className="w-full h-full  object-cover rounded-lg"
              />
            </a>
          </div>
          <h1 className="text-2xl font-new1 tracking-wider text-black font-bold">
            {item.pname}
          </h1>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Projects;

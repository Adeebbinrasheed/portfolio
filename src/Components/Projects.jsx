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
    <div className="pt-5 mt-20 h-auto" id="project">
      <h1 className="text-2xl sm:text-7xl tracking-widest font-new1 text-center font-bold ">
        My Projects
      </h1>
      <div className="flex flex-col items-center space-y-10 pt-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative flex w-full sm:w-[80%] lg:w-[70%] items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="flex flex-col items-center pb-3 w-[35vh] lg:w-[60vh] h-[40vh]  mt-5 space-y-9 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <div className="overflow-hidden w-full h-full">
                <a href={item.website}>
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </a>
              </div>

              <div
                className={`absolute top-14 transform -translate-y-1/2 ${
                  index % 2 === 0 ? "left-[105%]" : "right-[105%]"
                }`}
              >
                <h1 className="text-4xl font-new1 tracking-wider font-bold">{item.pname}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

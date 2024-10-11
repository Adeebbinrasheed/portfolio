import React from "react";
import mentorow from '../assets/ment.jpg'
import shopping from '../assets/shopping.jpg'
import smart from '../assets/smart.png'

const Projects = () => {
  const data = [
    {
      image: shopping,
      pname: "Ecommerce website",
      website:'https://shopping-cart-olive-three.vercel.app'
    },
    {
      image: mentorow,
      pname: "Mentorow website",
      website:"https://mentorow-home-page-wcm7.vercel.app"
    },
    {
      image:smart,
      pname:"Smart Host-Architectural",
      website:"https://www.smarthost.org.uk/"
    }
  ];
  return (
    <div className="pt-5 mt-20 h-auto" id="project">
                      
      <h1 className="text-6xl sm:text-7xl lg:text-[300px] text-center font-bold opacity-50"><span className="text-red-600">P</span>rojects</h1>
    <div
      className="grid grid-cols-1 gap-5 justify-items-center sm:grid-cols-2 lg:px-9 md:grid-cols-3 pt-5"
      
    >

      {data.map((item) => (
        <div className="border-2 border-red-800 hover:border-white flex flex-col items-center pb-3 w-[35vh] lg:w-[40vh] h-[50vh]  mt-5 space-y-9 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <div className="overflow-hidden w-full h-2/3">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover rounded-lg"              
            />
            
          </div>
          <h1 className="text-2xl font-bold text-center">{item.pname}</h1>
          <div className="space-x-2">
            <button className="bg-red-800 p-1 px-3 font-semibold rounded-lg text-lg hover:bg-red-600 transition duration-300">
              <a href={item.website}>LIVE</a>
            </button> 



          </div>
        </div> 
      ))}
    </div>
    </div>
  );
};

export default Projects;

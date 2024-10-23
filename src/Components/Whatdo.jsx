import React, { useEffect, useState } from 'react'
import pic1 from '../assets/pic1.webp'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pics.jpg'
import pic4 from '../assets/pic4.png'

const items = [
    { id: 1, number: "01", text: "Responsive Web Design", image: pic1 },
    { id: 2, number: "02", text: "React & Modern JavaScript", image: pic2 },
    { id: 3, number: "03", text: "Performance Optimization", image: pic3 },
    { id: 4, number: "04", text: "Tailwind CSS & Styling", image: pic4 },

  ];
const Whatdo = () => {
    const [activeItem, setActiveItem] = useState(0);

    
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveItem((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="container mx-auto px-6 py-16 mt-11">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <span className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-2xl font-semibold">What I do</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-500 mb-4 leading-tight">
            Crafting seamless user experiences with the power of modern web technologies.
            </h2>
            <p className="text-gray-500 mb-8">
            As a frontend developer, I specialize in building intuitive, responsive, and high-performance web applications. 
            From pixel-perfect designs to optimized code, I bring ideas to life with clean, maintainable, and scalable codebases.
            </p>
  
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li
                  key={item.id}
                  className={`flex items-center space-x-4 cursor-pointer ${activeItem === index ? "text-black" : "text-gray-400"}`}
                  onMouseEnter={() => setActiveItem(index)}
                >
                  <span className="text-green-500 text-2xl font-bold">{item.number}</span>
                  <span className="text-xl">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src={items[activeItem].image}
              alt={`Image ${items[activeItem].number}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 text-white text-5xl font-bold opacity-50">{items[activeItem].number}</div>
          </div>
        </div>
      </div>
    );
}

export default Whatdo
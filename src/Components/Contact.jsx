// import React, { useEffect, useState } from 'react'
// const items = [
//   { id: 1, number: "01", text: "Web design excellence", image: "https://via.placeholder.com/600x400?text=01" },
//   { id: 2, number: "02", text: "Mobile design awards", image: "https://via.placeholder.com/600x400?text=02" },
//   { id: 3, number: "03", text: "Advertising", image: "https://via.placeholder.com/600x400?text=03" },
//   { id: 4, number: "04", text: "Copywriting and Content Creation", image: "https://via.placeholder.com/600x400?text=04" },
//   { id: 5, number: "05", text: "Photography and Videography", image: "https://via.placeholder.com/600x400?text=05" },
// ];
// const Contact = () => {
//   const [activeItem, setActiveItem] = useState(0);

//   // Automatically switch between items every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveItem((prev) => (prev === items.length - 1 ? 0 : prev + 1));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left side text */}
//         <div>
//           <div className="mb-4">
//             <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">What I do</span>
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
//             Where creativity meets functionality, and every click tells a unique story.
//           </h2>
//           <p className="text-gray-500 mb-8">
//             I'm not just a service provider; I'm a creative storyteller, a problem solver, and your partner in turning imagination into reality. 
//             Here in my creative haven, we embark on a journey where every idea, every project, is an opportunity to craft something truly unique.
//           </p>

//           {/* List of services */}
//           <ul className="space-y-4">
//             {items.map((item, index) => (
//               <li
//                 key={item.id}
//                 className={`flex items-center space-x-4 cursor-pointer ${activeItem === index ? "text-black" : "text-gray-400"}`}
//                 onMouseEnter={() => setActiveItem(index)} // Hover effect
//               >
//                 <span className="text-green-500 text-2xl font-bold">{item.number}</span>
//                 <span className="text-xl">{item.text}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right side image */}
//         <div className="relative">
//           <img
//             src={items[activeItem].image}
//             alt={`Image ${items[activeItem].number}`}
//             className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
//           />
//           <div className="absolute bottom-4 right-4 text-white text-5xl font-bold opacity-50">{items[activeItem].number}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact
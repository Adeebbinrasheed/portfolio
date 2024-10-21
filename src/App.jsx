import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';


const App = () => {
  return (
    <div 
      className="bg-[url('./assets/wall.avif')] bg-cover bg-center bg-fixed 
                  text-white antialiased"
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;

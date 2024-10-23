import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Whatdo from "./Components/Whatdo";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden bg-gray-200 text-white antialiased">
      <Navbar />
      <Hero />
      <About />
      <Whatdo />
      <Projects />
      <Footer/>
    </div>
  );
};

export default App;

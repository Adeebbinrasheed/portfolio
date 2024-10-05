import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen text-white bg-slate-950" id="home">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;

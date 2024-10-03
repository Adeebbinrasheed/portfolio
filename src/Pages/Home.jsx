import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <div className="min-h-screen text-white bg-slate-950" id="home">
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
};

export default Home;

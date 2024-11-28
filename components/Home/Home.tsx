import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import SKills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <SKills />
    </div>
  );
};

export default Home;

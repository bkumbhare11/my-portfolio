import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

function App() {
  return (
    <>
      <div className="px-5 md:px-10 xl:px-45 py-5 bg-slate-50">
        <Navbar />

        <a
          href="#home"
          className="fixed bottom-8 right-8 z-50 bg-black text-white border border-slate-200 p-3 rounded-full transition-all duration-300 ease-in-out  hover:bg-blue-600"
        >
          <HiOutlineArrowNarrowUp />
        </a>

        <div id="home" className="scroll-mt-48">
          <Home />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>

        <div id="about" className="scroll-mt-24">
          <About />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

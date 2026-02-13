import React from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <header className="flex justify-between items-center py-6 bg-slate-50/90 fixed top-0 left-5 right-10 md:left-10 md:right-10 xl:left-45 xl:right-45  ">
      <a href="#home" className="font-bold ">
        Bhavesh
      </a>
      <nav className="font-semibold text-slate-600 hidden md:block">
        <ul className="flex gap-8 text-lg">
          <li className="hover:text-blue-600">
            <a href="#home">Home</a>
          </li>

          <li className="hover:text-blue-600">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-blue-600">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <a
        href="https://drive.google.com/file/d/19PGC1PGHGkjZiVkyxNxYdL5WNOWRl4oi/view?usp=sharing"
        target="_blank"
        className="bg-black text-white px-3 py-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hidden md:block"
      >
        Resume
      </a>
      <div className="md:hidden">
        <Hamburger />
      </div>
    </header>
  );
}

export default Navbar;

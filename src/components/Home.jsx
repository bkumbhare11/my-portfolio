import React from "react";
// 1. Pehle import karo
import profilePic from "../assets/my-photo.jpg";

function Portfolio() {
  return (
    <div>
      {/* 2. Variable ki tarah use karo */}
      <img src={profilePic} alt="Bhavesh" />

      <img src={umsThumb} alt="Nexus Project" />
    </div>
  );
}

function Home() {
  return (
    <section className=" my-20 md:my-45 ">
      <div className="flex flex-col gap-15 lg:flex-row lg:items-center">
        <div className="lg:w-[50%] ">
          <h1 className="text-slate-600 text-2xl mb-1.5 font-light">
            Hey, I'm Bhavesh👋🏻
          </h1>
          <h2 className="font-bold text-5xl md:text-6xl lg:text-8xl tracking-tighter">
            <span className="text-blue-600">Front</span>end Developer
          </h2>

          <p className="text-slate-600 font-light mt-4 md:text-xl max-w-lg">
            I'm a Frontend Developer passionate about building clean, responsive
            web applications using React.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="bg-blue-600 text-white text-xs md:text-sm font-semibold md:px-6 px-4 py-3 rounded-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-500 "
            >
              Let's Connect!
            </a>

            <a
              href="#projects"
              className="border-slate-300 border text-xs md:text-sm font-semibold md:px-6 px-4 py-3 rounded-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-slate-900 hover:text-white "
            >
              Browse Projects
            </a>
          </div>
        </div>

        <div className=" w-70 h-70 md:w-90 md:h-90  border border-slate-200 rounded-full p-3 md:p-6 flex justify-center items-center mx-auto bg-white ">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white ">
            <img
              src={profilePic}
              alt="my-image"
              className="w-full h-full object-cover object-[center_25%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

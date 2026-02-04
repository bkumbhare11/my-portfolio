import React from "react";

function About() {
  return (
    <section className="mt-20 md:mt-28">
      <h1 className="font-bold text-5xl md:text-6xl">About</h1>

      <p className="text-slate-900 my-7 md:my-8 md:text-lg">
        My journey into coding began from a{" "}
        <span className="text-slate-900 font-bold">non-tech background</span>.
        During my <span className="text-blue-600 font-semibold">PGDCA</span>, I
        was introduced to
        <span className="text-slate-900 font-bold"> C programming</span>, which
        sparked my interest in logic and problem-solving.
        <br />
        <br />
        After exploring different paths with guidance from mentors, I chose
        <span className="text-slate-900 font-bold">
          {" "}
          Fullstack Development
        </span>{" "}
        and currently specialize in{" "}
        <span className="text-blue-600 font-semibold">
          Frontend technologies
        </span>
        , building clean, responsive, and user-centric web applications.
      </p>
    </section>
  );
}

export default About;

import React from "react";
import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiFirebase,
  SiGithub,
} from "react-icons/si";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RiKey2Line } from "react-icons/ri";
import nexuxUMS from "../assets/nexus-ums.jpg";

function Projects() {
  const projectSkills = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    {
      name: "Shadcn UI",
      icon: <SiShadcnui className="text-white bg-black rounded-sm" />,
    },
  ];

  return (
    <section className="mt-20 md:mt-28">
      <h1 className="font-bold text-5xl md:text-6xl my-1.5">Projects</h1>
      <div className="my-7 md:flex md:gap-5 md:my-8 w-full overflow-hidden">
        <div className="rounded-2xl bg-white w-full md:w-[50%] border border-slate-200 p-8 flex  items-center">
          <img
            src={nexuxUMS}
            alt="Nexus UMS"
            className="  rounded-2xl border-4 border-slate-600"
          />
        </div>

        <div className="flex flex-col  justify-between gap-5 md:w-[50%]">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-2xl mt-2 md:text-3xl">
              User Management System
            </h2>

            <div>
              <p className="text-slate-600  md:text-lg">
                A comprehensive administrative solution built to manage complex
                user data with ease. This project focuses on providing a
                seamless experience for admins to monitor, edit, and secure user
                information in real-time using a modern tech stack.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {projectSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex text-xs md:text-sm items-center gap-1 border border-slate-600 w-fit px-1.5 py-1 rounded-lg font-semibold bg-slate-900 text-white"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ul className="text-slate-600 md:text-lg">
              <li className="flex gap-1.5">
                <span>1.</span>
                Firebase Authentication (Admin login)
              </li>

              <li className="flex gap-1.5">
                <span>2.</span>
                Add, Edit, Delete users (CRUD)
              </li>

              <li className="flex gap-1.5">
                <span>3.</span>
                Protected routes
              </li>

              <li className="flex gap-1.5">
                <span>4.</span>
                Responsive dashboard layout
              </li>

              <li className="flex gap-1.5">
                <span>5.</span>
                Form validation with React Hook Form
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-xl shadow-sm">
            <p className="text-sm font-bold text-blue-900 flex items-center gap-2">
              <span className=" bg-amber-400  p-1 rounded-md ">
                <RiKey2Line />
              </span>
              Admin Demo Access
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-2">
              <p className="text-xs md:text-sm text-slate-600">
                <span className="font-bold text-slate-800 tracking-wide uppercase ">
                  Email:
                </span>{" "}
                <span className="select-all">admin@nexus.com</span>
              </p>
              <p className="text-xs md:text-sm text-slate-600">
                <span className="font-bold text-slate-800 tracking-wide uppercase">
                  Pass:
                </span>{" "}
                <span className="select-all">123456</span>
              </p>
            </div>
          </div>

          <div className="flex gap-4 md:text-xl">
            <a
              href="https://nexus-user-management.vercel.app"
              target="_blank"
              className="font-semibold flex items-center gap-2.5 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-600"
            >
              Live Demo
              <span>
                <BsArrowUpRightCircle className="text-blue-600" />
              </span>
            </a>

            <a
              href="https://github.com/bkumbhare11/nexus-user-management.git"
              target="_blank"
              className="font-semibold flex items-center gap-2.5 cursor-pointer transition-all duration-300 ease-in-out  hover:text-blue-600"
            >
              GitHub Repo
              <span>
                <SiGithub />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

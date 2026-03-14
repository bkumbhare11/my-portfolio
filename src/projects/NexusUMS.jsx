import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RiKey2Line } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { AllSkills } from "@/components/AllSkills";
import nexuxUMS from "../assets/nexus-ums.jpg";

function NexusUMS() {
  const techStack = AllSkills.filter((skill) =>
    [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Firebase",
      "Shadcn/UI",
    ].includes(skill.name),
  );

  return (
    <div className="flex flex-col gap-2 lg:flex-row mt-10">
      <div className="w-full lg:w-[50%] shrink-0 px-4 bg-indigo-50 border border-slate-900 rounded-xl">
        <img
          src={nexuxUMS}
          alt="Nexus UMS"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="space-y-4 px-6">
        <h2 className="font-semibold text-2xl mt-2 md:text-3xl">
          User Management System
        </h2>

        <p className="text-slate-600  md:text-lg">
          A comprehensive administrative solution built to manage complex user
          data with ease. This project focuses on providing a seamless
          experience for admins to monitor, edit, and secure user information in
          real-time using a modern tech stack.
        </p>

        <div className="flex gap-2 flex-wrap">
          {techStack.map((skill, index) => (
            <div
              key={index}
              className="bg-black text-white font-bold w-fit flex items-center gap-1 px-3 py-1 rounded-sm text-xs md:text-sm"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

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
  );
}

export default NexusUMS;

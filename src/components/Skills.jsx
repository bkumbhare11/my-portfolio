import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiReacthookform,
  SiTailwindcss,
  SiShadcnui,
  SiFirebase,
  SiVite,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { MdDevices } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineDatabase } from "react-icons/hi";

function Skills() {
  const skillCategories = [
    {
      title: "Core Frontend",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
        {
          name: "JS (ES6+)",
          icon: <SiJavascript className="text-[#F7DF1E]" />,
        },
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      ],
    },
    {
      title: "React Ecosystem",
      skills: [
        { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> },
        {
          name: "React Router",
          icon: <SiReactrouter className="text-[#CA4245]" />,
        },
        {
          name: "Hook Form",
          icon: <SiReacthookform className="text-[#EC5990]" />,
        },
        { name: "Hooks", icon: <SiReact className="text-[#61DAFB]" /> },
      ],
    },
    {
      title: "Styling & UI",
      skills: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
        { name: "Shadcn/UI", icon: <SiShadcnui className="text-black" /> },
        { name: "Responsive", icon: <MdDevices className="text-green-400" /> },
      ],
    },
    {
      title: "Backend & Services",
      skills: [
        {
          name: "Auth",
          icon: <RiLockPasswordLine className="text-[#FFCA28]" />,
        },
        {
          name: "Database",
          icon: <HiOutlineDatabase className="text-[#FFCA28]" />,
        },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
        {
          name: "VS Code",
          icon: <VscVscode className="text-[#007ACC]" />,
        },
        { name: "Git/Github", icon: <SiGithub className="text-black" /> },
      ],
    },
  ];

  return (
    <section className="mt-20 md:mt-28 ">
      <h1 className="font-bold text-5xl md:text-6xl mb-8">Skills</h1>

      <div className="flex flex-col md:flex-row md:justify-between">
        {skillCategories.map((skill, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h2 className="font-semibold text-2xl mb-2 md:mb-3 ">
              {skill.title}
            </h2>
            <div>
              {skill.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 md:text-lg"
                >
                  <p className="my-2">{skill.icon}</p>
                  <p className="text-slate-600">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

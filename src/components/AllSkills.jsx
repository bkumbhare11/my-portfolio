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
import { MdDevices } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineDatabase } from "react-icons/hi";
import { VscVscode } from "react-icons/vsc";

export const AllSkills = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "JS (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
  { name: "Hook Form", icon: <SiReacthookform className="text-[#EC5990]" /> },
  { name: "Hooks", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Shadcn/UI", icon: <SiShadcnui className="text-white" /> },
  { name: "Responsive", icon: <MdDevices className="text-green-400" /> },
  { name: "Auth", icon: <RiLockPasswordLine className="text-[#FFCA28]" /> },
  { name: "Database", icon: <HiOutlineDatabase className="text-[#FFCA28]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
  { name: "Git/Github", icon: <SiGithub className="text-black" /> },
  {
    name: "LocalStorage",
    icon: <HiOutlineDatabase className="text-blue-400" />,
  }, // ShopMart ke liye extra
];

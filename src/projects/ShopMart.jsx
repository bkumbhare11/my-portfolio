import React from "react";
import { AllSkills } from "@/components/AllSkills";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import Home from "../assets/Home.png";

function ShopMart() {
  const techStack = AllSkills.filter((skill) =>
    [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "LocalStorage",
      "Shadcn/UI",
    ].includes(skill.name),
  );
  return (
    <div className="flex flex-col gap-2 lg:flex-row mt-10 border-t-2 border-slate-200 pt-10">
      <div className="w-full lg:w-[50%] shrink-0 p-4 bg-indigo-50 border border-slate-900 rounded-xl">
        <img
          src={Home}
          alt="SHOPMART Preview"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="space-y-4 px-6">
        <h2 className="font-semibold text-2xl mt-2 md:text-3xl">
          SHOPMART – Advanced E-Commerce Storefront
        </h2>

        <p className="text-slate-600 md:text-lg">
          A fully responsive e-commerce frontend where users can browse
          products, manage cart and wishlist, and complete orders through a
          structured checkout flow. Built with React, Redux Toolkit, and
          Tailwind CSS focusing on scalable state management and smooth user
          experience.
        </p>

        <div className="flex gap-2 flex-wrap">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-black text-white font-bold w-fit flex items-center gap-1 px-3 py-1 rounded-sm text-xs md:text-sm"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <ul className="text-slate-600 md:text-lg">
          <li className="flex gap-1.5">
            <span>1.</span> Dynamic product listing with category filtering
          </li>
          <li className="flex gap-1.5">
            <span>2.</span> Product detail pages with image gallery and reviews
          </li>
          <li className="flex gap-1.5">
            <span>3.</span> Cart and wishlist state management using Redux
            Toolkit
          </li>
          <li className="flex gap-1.5">
            <span>4.</span> Checkout flow with address form validation
          </li>
          <li className="flex gap-1.5">
            <span>5.</span> Order history and detailed order summary with
            persistent data
          </li>
        </ul>

        <div className="flex gap-4 md:text-xl">
          <a
            href="https://shopmart-f2m2.vercel.app/"
            target="_blank"
            className="font-semibold flex items-center gap-2.5 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-600"
          >
            Live Demo
            <span>
              <BsArrowUpRightCircle className="text-blue-600" />
            </span>
          </a>

          <a
            href="https://github.com/bkumbhare11/shopmart.git"
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

export default ShopMart;

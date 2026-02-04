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
  SiLinkedin,
} from "react-icons/si";
import { LuMail } from "react-icons/lu";

function Contact() {
  return (
    <>
      <section className="mt-20 md:mt-28">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
          Let's Connect!
        </h2>

        <p className="text-slate-600 mt-4 max-w-xl md:text-lg">
          I'm currently looking for new opportunities. My inbox is always open —
          whether you have a question or just want to say hi 😊
        </p>

        <a
          href="mailto:bhaveshkumbhare18@gmail.com"
          className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-500 transition-all duration-300 ease-in-out"
        >
          Say Hello 👋
        </a>

        <div className="flex gap-6 mt-10 md:text-xl">
          <a
            href="mailto:bhaveshkumbhare18@gmail.com"
            target="_blank"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-all duration-300 ease-in-out"
          >
            <LuMail />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/bkumbhare11"
            target="_blank"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-all duration-300 ease-in-out"
          >
            <SiGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bhavesh-kumbhare-552a4a2b0/"
            target="_blank"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
          >
            <SiLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-6 border-t text-slate-400 text-sm text-center">
          © 2026 • Built with React & Tailwind by Bhavesh Kumbhare
        </footer>
      </section>
    </>
  );
}

export default Contact;

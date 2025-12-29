"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export function SkillsCarousel() {
  const ref = useRef(null);

  useEffect(() => {
    const track = ref.current;
    if (!track) return;

    gsap.fromTo(
      track,
      {
        x: 0,
      },
      {
        x: "-50%",
        duration: 50,
        repeat: -1,
        ease: "linear",
        yoyo: true,
      }
    );
  }, [ref]);

  return (
    <div className=" w-full h-20 overflow-hidden    ">
      <div
        className="   max-w flex h-20 gap-20  justify-center  items-center"
        ref={ref}
      >
        <Skills>
          <FaReact></FaReact>
        </Skills>
        <Skills>
          {" "}
          <SiNextdotjs></SiNextdotjs>
        </Skills>
        <Skills>
          <SiPostgresql></SiPostgresql>
        </Skills>
        <Skills>
          <SiTypescript></SiTypescript>
        </Skills>
        <Skills>
          <FaNodeJs></FaNodeJs>
        </Skills>
        <Skills>
          <SiPython></SiPython>
        </Skills>
        <Skills>
          <SiHtml5></SiHtml5>
        </Skills>
        <Skills>
          <SiCss3></SiCss3>
        </Skills>
        <Skills>
          <SiGit></SiGit>
        </Skills>
        <Skills>
          <SiTailwindcss></SiTailwindcss>
        </Skills>
        <Skills>
          <FaReact></FaReact>
        </Skills>
        <Skills>
          {" "}
          <SiNextdotjs></SiNextdotjs>
        </Skills>
        <Skills>
          <SiPostgresql></SiPostgresql>
        </Skills>
        <Skills>
          <SiTypescript></SiTypescript>
        </Skills>
        <Skills>
          <FaNodeJs></FaNodeJs>
        </Skills>
        <Skills>
          <SiPython></SiPython>
        </Skills>
        <Skills>
          <SiHtml5></SiHtml5>
        </Skills>
        <Skills>
          <SiCss3></SiCss3>
        </Skills>
        <Skills>
          <SiGit></SiGit>
        </Skills>
        <Skills>
          <SiTailwindcss></SiTailwindcss>
        </Skills>
        <Skills>
          <FaReact></FaReact>
        </Skills>
        <Skills>
          {" "}
          <SiNextdotjs></SiNextdotjs>
        </Skills>
        <Skills>
          <SiPostgresql></SiPostgresql>
        </Skills>
        <Skills>
          <SiTypescript></SiTypescript>
        </Skills>
        <Skills>
          <FaNodeJs></FaNodeJs>
        </Skills>
        <Skills>
          <SiPython></SiPython>
        </Skills>
        <Skills>
          <SiHtml5></SiHtml5>
        </Skills>
        <Skills>
          <SiCss3></SiCss3>
        </Skills>
        <Skills>
          <SiGit></SiGit>
        </Skills>
        <Skills>
          <SiTailwindcss></SiTailwindcss>
        </Skills>
        <Skills>
          <FaReact></FaReact>
        </Skills>
        <Skills>
          {" "}
          <SiNextdotjs></SiNextdotjs>
        </Skills>
        <Skills>
          <SiPostgresql></SiPostgresql>
        </Skills>
        <Skills>
          <SiTypescript></SiTypescript>
        </Skills>
        <Skills>
          <FaNodeJs></FaNodeJs>
        </Skills>
      </div>
    </div>
  );
}

type SkillProps = {
  children: React.ReactNode;
};

function Skills({ children }: SkillProps) {
  return (
    <div className=" flex gap-10 justify-center h-20 items-center ">
      <div className=" bg-transparent flex  hover:scale-110 transition-all duration-300   w-auto h-12 p-2 rounded-xl text-center text-gold text-2xl hover:text-blue-tech">
        {children}
      </div>
    </div>
  );
}

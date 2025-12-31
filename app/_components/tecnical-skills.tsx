"use client";

import { FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { Skill } from "./skill";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function TecnicalSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { xPercent: 0 },
        {
          xPercent: -120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 5%",
            end: "top -100%",
            scrub: 1,
            pin: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className=" w-full ">
      <section
        ref={sectionRef}
        className="h-screen w-full  flex flex-col items-center  gap-30 overflow-hidden"
      >
        <h2 className=" text-4xl text-center text-secondary ">
          Habilidades Tecnicas{" "}
        </h2>
        <div ref={textRef} className="flex gap-10 w-max">
          <Skill name="React">
            <FaReact />
          </Skill>
          <Skill name="Tailwind">
            <SiTailwindcss />
          </Skill>
          <Skill name="TypeScript">
            <SiTypescript />
          </Skill>
          <Skill name="Git">
            <FaGitAlt />
          </Skill>
          <Skill name="">GSAP</Skill>
          <Skill name="HTML5">
            <FaHtml5 />
          </Skill>
        </div>
      </section>
    </section>
  );
}

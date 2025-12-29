"use client";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { AboutAccordion } from "./about-accordion";
 

gsap.registerPlugin(TextPlugin);

export function About() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(textRef.current, {
      duration: 2,
      text: "Desenvolvedor Front-end",
      ease: "none",
    })
      .to({}, { duration: 1 })
      .to(textRef.current, {
        text: "",
        duration: 2,
      })
      .to(textRef.current, {
        text: "NextJS",
        duration: 2,
      })
      .to({}, { duration: 1 })
      .to(textRef.current, {
        text: "",
        duration: 2,
      })
      .to(textRef.current, {
        text: "React",
        duration: 2,
      })
      .to({}, { duration: 1 })
      .to(textRef.current, {
        text: "",
        duration: 2,
      })
      .to(textRef.current, {
        text: "TypeScript",
        duration: 2,
      })
      .to({}, { duration: 1 })
      .to(textRef.current, {
        text: "",
        duration: 2,
      });

    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-20 w-full h-dvh ">
      <div className="flex flex-col gap-10 w-full justify-center items-center mt-60">
       <div className=" w-[300px] h-[300px] rounded-2xl relative bg-white">
       
       </div>

        <h1 className="scroll-m-20 text-secondary text-center text-4xl font-extrabold tracking-tight text-balance">
          Felipe Da Silva Lima
        </h1>

        <h2 className="text-3xl text-gold font-eb-garamond">
          <span ref={textRef}> </span>
          <span ref={cursorRef} className=" ml-2 text-amber-50">
            |
          </span>
        </h2>
      </div>
      <div className=" w-[600px] mb-32">
        <AboutAccordion></AboutAccordion>
      </div>
    </div>
  );
}

"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SkillsCarousel } from "./skills-carousel";
import { DownloadCVButton } from "./download-cv-button";
gsap.registerPlugin(ScrollTrigger);

export function SocialMedia() {
  const githubRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(githubRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out",

      scrollTrigger: {
        trigger: githubRef.current,
        start: "top 70%",
      },
    });

    gsap.from(linkedinRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out",

      scrollTrigger: {
        trigger: linkedinRef.current,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section className=" h-screen w-full ">
      <div className="flex  flex-col gap-25  justify-center items-center">
        <h2 className="text-4xl text-center text-secondary">
          {" "}
          Redes de Contato
        </h2>

        <div>
          <DownloadCVButton />
        </div>

        <div className="flex  align-center justify-center gap-10 text-4xl  ">
          <div ref={linkedinRef}>
            <FaLinkedin
              size={50}
              className="hover:text-blue-tech hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div ref={githubRef}>
            <FaGithub
              size={50}
              className="hover:text-gold hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
        <SkillsCarousel></SkillsCarousel>
      </div>
    </section>
  );
}

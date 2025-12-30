"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
export function TypingEffect() {
    const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);
    
    return(
        <>
        <h2 className="text-3xl text-gold font-eb-garamond">
          <span ref={textRef}> </span>
          <span ref={cursorRef} className=" ml-2 text-amber-50">
            |
          </span>
        </h2>
        </>
    )
}
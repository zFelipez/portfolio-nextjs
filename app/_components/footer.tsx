
"use client";

 
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DownloadCVButton } from "./download-cv-button";
import Link from "next/link";  
export function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 1,
        y: 30,
      });
    }
  }, []);

  return (
    <div
      className="relative bottom-0 w-full flex justify-center items-center h-20 p-10 from-accent-foreground to-transparent bg-gradient-to-t max-sm:h-24"
    >
       <div className="flex items-center gap-2 text-blue-tech  w-full">
        <div className="flex items-center gap-2 flex-1 pl-10 "><p className=" max-sm:text- max-md:text-base text-xl">© 2025</p></div>
        <div className="flex items-center gap-2 flex-2  max-sm:text-xl text-2xl justify-end pr-10">
          <Link className= ' hover:text-gold transition-all duration-100' href="https://www.linkedin.com/in/felipe-da-silva-lima-680096349/" target="_blank"><FaLinkedin/></Link>
          <Link className= ' hover:text-gold transition-all duration-100' href="https://github.com/zFelipez" target="_blank"><FaGithub/></Link>
          <DownloadCVButton/>
        </div>

       </div>
    </div>
  );
}
 

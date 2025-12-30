import { AboutAccordion } from "./about-accordion";
import { TypingEffect } from "./typing-effect";

export function About() {
  return (
    <div className="flex flex-col h-screen w-full items-center">
      <div className="flex flex-col items-center gap-4">
        
        <div className="bg-white h-[300px] w-[300px] flex-none rounded-2xl">
          oi
        </div>

        <div className="flex flex-col items-center">
          <h1>Felipe da Silva</h1>
          <TypingEffect />
        </div>

        <AboutAccordion />
      </div>
    </div>
  );
}

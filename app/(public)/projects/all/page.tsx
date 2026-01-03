import { SkillsCarousel } from "@/app/_components/skills-carousel";
import { ProjectSection } from "../_components/project-section";
import { Footer } from "@/app/_components/footer";



export default function AllProjectsPage() {
    return (
        <div className=" flex  flex-col items-center w-full bg-gradient-to-br from-background via-[#0F172A] to-blue-tech font-sans dark:bg-black     ">
         <div    className=" flex flex-col gap-30 mt-20 justify-center w-full">
            
            <h1 className=" text-4xl text-secondary text-center"> Principais Projetos </h1>

            <ProjectSection/>
            <ProjectSection/>
            <ProjectSection/>
            <ProjectSection/>
            <ProjectSection/>
            <ProjectSection/>
            <ProjectSection/>

            <SkillsCarousel/>
             
             
             
         </div>

         
        </div>
    )
}
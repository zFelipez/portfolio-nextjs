import { SkillsCarousel } from "@/app/_components/skills-carousel";
import { ProjectSection } from "../_components/project-section";
import { Footer } from "@/app/_components/footer";



export default function AllProjectsPage() {
    return (
        <div className=" flex  items-center w-full ">
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
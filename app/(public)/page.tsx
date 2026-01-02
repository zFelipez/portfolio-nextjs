import { SkillsCarousel } from "../_components/skills-carousel";
import { About } from "../_components/about";
import { TecnicalSkills } from "../_components/tecnical-skills";
import { SocialMedia } from "../_components/social-media";
import { HomeProjectsCarousel } from "../_components/home-projects-carousel";

export default async function Home() {
  return (
    <div className="  flex flex-col w-full  items-center  bg-gradient-to-br from-background via-[#0F172A] to-blue-tech font-sans dark:bg-black">
      <About />

      <TecnicalSkills></TecnicalSkills>

      <HomeProjectsCarousel></HomeProjectsCarousel>
      <SocialMedia />
    </div>
  );
}

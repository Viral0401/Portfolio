import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import Education from '@/components/Education/EducationSection'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import { getAllProjects } from '@/services'
import ResearchSection from '@/components/Research/ResearchSection';
import { researchData } from '@/appData';
import EnhancedSkills from '@/components/Skills/EnhancedSkills';
import { enhancedSkillCategories } from '@/appData';


export default async function Home() {
  const projects = await getAllProjects()

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <Education />
        <ServiceSection />
        <ProjectSection projects={projects} />
        <ResearchSection research={researchData} />
        <EnhancedSkills skillCategories={enhancedSkillCategories} />
        <ContactSection />
      </div>
    </main>
  )
}

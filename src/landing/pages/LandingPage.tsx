import { HeroSection } from '../components/HeroSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { CoursesSection } from '../components/CoursesSection'

export const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <div className="h-px w-full max-w-5xl mx-auto bg-linear-to-r from-transparent via-white/8 to-transparent" />

      <div id="experience">
        <ExperienceSection />
      </div>

      <div className="h-px w-full max-w-5xl mx-auto bg-linear-to-r from-transparent via-white/8 to-transparent" />

      <div id="projects">
        <ProjectsSection />
      </div>

      <div className="h-px w-full max-w-5xl mx-auto bg-linear-to-r from-transparent via-white/8 to-transparent" />

      <div id="courses">
        <CoursesSection />
      </div>
    </main>
  )
}

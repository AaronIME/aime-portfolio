import { HeroSection, ExperienceSection, ProjectsSection, CoursesSection } from '../components'

export const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <CoursesSection />
    </main>
  )
}

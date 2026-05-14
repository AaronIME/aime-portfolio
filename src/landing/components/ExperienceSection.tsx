import { TechCard, type TechItem } from './TechCard'
import { SectionLabel } from '../../components/SectionLabel'

const technologies: TechItem[] = [
  {
    name: 'Javascript',
    years: 3,
    level: 'advanced',
    icon: '｡🇯‌🇸‌',
    description: 'DOM manipulation, async patterns, ES modules, and building interactive web applications.',
  },
  {
    name: 'TypeScript',
    years: 0.5,
    level: 'advanced',
    icon: '🇹🇸',
    description: 'Static typing over JavaScript, interfaces, generics, and improved code maintainability.',
  },
  {
    name: 'Firebase',
    years: 3,
    level: 'advanced',
    icon: '🔥',
    description: 'Realtime Database, Firestore, Authentication, Hosting, and Cloud Functions.',
  },
  {
    name: 'Node.js',
    years: 3,
    level: 'advanced',
    icon: '🟢',
    description: 'REST APIs, server-side logic, middleware, and backend integrations.',
  },
  {
    name: 'Vue.js',
    years: 3,
    level: 'advanced',
    icon: '✅',
    description: 'Composition API, Pinia, Vue Router, and building reactive single-page applications.',
  },
  {
    name: 'React',
    years: 0.5,
    level: 'advanced',
    icon: '⚛️',
    description: 'Hooks, component composition, state management, and building modern UIs.',
  },
  {
    name: 'SCSS',
    years: 2,
    level: 'intermediate',
    icon: '🎨',
    description: 'Variables, mixins, nesting, and structuring scalable stylesheet architectures.',
  },
  {
    name: 'Bootstrap',
    years: 2,
    level: 'intermediate',
    icon: '🅱️',
    description: 'Responsive grid system, utility classes, and component-based UI development.',
  },
  {
    name: 'Tailwind CSS',
    years: 0.5,
    level: 'intermediate',
    icon: '🌀',
    description: 'Utility-first styling, responsive design, and rapid UI prototyping.',
  },
  {
    name: 'Github',
    years: 3,
    level: 'intermediate',
    icon: '🐙',
    description: 'Version control workflows, pull requests and branching strategies.',
  },
  {
    name: 'Spring Boot',
    years: 0.5,
    level: 'intermediate',
    icon: '🍃',
    description: 'REST API development, dependency injection, and Java-based backend services.',
  },
  {
    name: 'Angular',
    years: 0.5,
    level: 'intermediate',
    icon: '🅰️',
    description: 'Component architecture, services, RxJS observables, and Angular CLI tooling.',
  },
  {
    name: 'MongoDB',
    years: 0.5,
    level: 'basic',
    icon: '🍃',
    description: 'Document-based data modeling, CRUD operations, and integration with Node.js.',
  },
  {
    name: 'PostgreSQL',
    years: 0.5,
    level: 'basic',
    icon: '🐘',
    description: 'Relational schema design, basic queries, joins, and database management.',
  },
  {
    name: 'Docker',
    years: 1,
    level: 'basic',
    icon: '🐳',
    description: 'Containerizing applications, writing Dockerfiles, and running local environments.',
  },
]

export const ExperienceSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <div className="mb-10">
        <SectionLabel>Skills & Experience</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Technologies I work with
        </h2>
        <p className="mt-2 text-neutral-500 text-sm max-w-lg">
          Hands-on experience building production systems across the full stack.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {technologies.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  )
}

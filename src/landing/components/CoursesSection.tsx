import { CourseCard, type Course } from './CourseCard'
import { SectionLabel } from '../../components/SectionLabel'

const courses: Course[] = [
  {
    name: 'NodeJS: De cero a experto',
    description:
      'Clean Architecture, DDD, WebHooks, WebSockets, Tareas automáticas, Despliegues, TypeScript, Edge, Testing y más',
    platform: 'Udemy',
    category: 'backend',
    url: 'https://www.udemy.com/course/nodejs-de-cero-a-experto/',
    gradient: 'bg-gradient-to-br from-sky-950 via-blue-950 to-indigo-950',
    icon: '🟢',
  },
  {
    name: "React: De cero a experto",
    description:
      'Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, AI, CRUD, Logs, MUI, Multiple Routers..',
    platform: 'Udemy',
    category: 'frontend',
    url: 'https://www.udemy.com/course/react-cero-experto/',
    gradient: 'bg-gradient-to-br from-blue-950 via-indigo-950 to-violet-950',
    icon: '⚛️',
  },
  {
    name: 'Spring Framework & Spring Boot desde cero a experto',
    description:
      'Construye aplicaciones web Spring Framework y Spring Boot: AOP, JPA, Security, JWT, REST, AWS, Thymeleaf, Angular, React',
    platform: 'Udemy',
    category: 'backend',
    url: 'https://www.udemy.com/course/spring-framework-5/',
    gradient: 'bg-gradient-to-br from-emerald-950 via-teal-950 to-green-950',
    icon: '🍃',
  },
  {
    name: 'Angular: De cero a experto',
    description:
      'Signals, componentes, servicios, zoneless, mapas, autenticación, despliegues, carga de archivos, Git, GitHub y mucho más',
    platform: 'Udemy',
    category: 'frontend',
    url: 'https://www.udemy.com/course/angular-fernando-herrera/',
    gradient: 'bg-gradient-to-br from-pink-950 via-rose-950 to-fuchsia-950',
    icon: '🅰',
  },
  {
    name: 'Vue JS 3 + Nuxt 4 con Typescript - Curso Full-Stack + MEVN',
    description:
      'Aprende Vue.js 3 , Composition API, Option API, Vuex, Pinia, Rutas protegidas, Vue CLI, Nuxt.js, Node, Express y MongoDB',
    platform: 'Udemy',
    category: 'frontend',
    url: 'https://www.udemy.com/course/curso-vue/',
    gradient: 'bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950',
    icon: '✅',
  },
  {
    name: "CSS La Guía Completa - Flexbox, CSS Grid, SASS +20 proyectos",
    description:
      'Aprende Flexbox, CSS Grid, Custom Properties, SASS, Mixins, Gulp Workflows, Animaciones, RWD y mucho más!',
    platform: 'Udemy',
    category: 'design',
    url: 'https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/',
    gradient: 'bg-gradient-to-br from-cyan-950 via-teal-950 to-blue-950',
    icon: '🎨',
  }
]

export const CoursesSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <div className="mb-10">
        <SectionLabel>Learning</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Courses & certifications
        </h2>
        <p className="mt-2 text-neutral-500 text-sm max-w-lg">
          Structured learning I've completed to sharpen my skills across the stack.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.name} course={course} />
        ))}
      </div>
    </section>
  )
}

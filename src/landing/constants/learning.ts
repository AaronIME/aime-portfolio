export type CourseCategory =
  | "frontend"
  | "backend"
  | "design"
  | "devops"
  | "engineering";

export interface Course {
  name: string;
  description: string;
  platform: string;
  category: CourseCategory;
  url: string;
}

export const learningContent = {
  chapter: "04",
};

export const courses: Course[] = [
  {
    name: "NodeJS: De cero a experto",
    description:
      "Clean Architecture, DDD, WebHooks, WebSockets, Tareas automáticas, Despliegues, TypeScript, Edge, Testing y más",
    platform: "Udemy",
    category: "backend",
    url: "https://www.udemy.com/course/nodejs-de-cero-a-experto/",
  },
  {
    name: "React: De cero a experto",
    description:
      "Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, AI, CRUD, Logs, MUI, Multiple Routers..",
    platform: "Udemy",
    category: "frontend",
    url: "https://www.udemy.com/course/react-cero-experto/",
  },
  {
    name: "Spring Framework & Spring Boot desde cero a experto",
    description:
      "Construye aplicaciones web Spring Framework y Spring Boot: AOP, JPA, Security, JWT, REST, AWS, Thymeleaf, Angular, React",
    platform: "Udemy",
    category: "backend",
    url: "https://www.udemy.com/course/spring-framework-5/",
  },
  {
    name: "Angular: De cero a experto",
    description:
      "Signals, componentes, servicios, zoneless, mapas, autenticación, despliegues, carga de archivos, Git, GitHub y mucho más",
    platform: "Udemy",
    category: "frontend",
    url: "https://www.udemy.com/course/angular-fernando-herrera/",
  },
  {
    name: "Vue JS 3 + Nuxt 4 con Typescript - Curso Full-Stack + MEVN",
    description:
      "Aprende Vue.js 3 , Composition API, Option API, Vuex, Pinia, Rutas protegidas, Vue CLI, Nuxt.js, Node, Express y MongoDB",
    platform: "Udemy",
    category: "frontend",
    url: "https://www.udemy.com/course/curso-vue/",
  },
  {
    name: "CSS La Guía Completa - Flexbox, CSS Grid, SASS +20 proyectos",
    description:
      "Aprende Flexbox, CSS Grid, Custom Properties, SASS, Mixins, Gulp Workflows, Animaciones, RWD y mucho más!",
    platform: "Udemy",
    category: "design",
    url: "https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/",
  },
  {
    name: "Next.js: El framework de React para producción",
    description:
      "SSR, SSG, CSR, ISR, Middlewares, Rutas dinámicas, Next API, Next Auth, Material UI, despliegues, Cookies y más.",
    platform: "Udemy",
    category: "frontend",
    url: "https://www.udemy.com/course/nextjs-fh/",
  },
];

export function formatCourseIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

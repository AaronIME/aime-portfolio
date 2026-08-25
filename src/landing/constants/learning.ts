export type CourseCategory =
  | "frontend"
  | "backend"
  | "design"
  | "devops"
  | "engineering";

export type CourseId =
  | "nodejs"
  | "react"
  | "spring"
  | "angular"
  | "vue"
  | "css"
  | "nextjs";

export interface Course {
  id: CourseId;
  platform: string;
  category: CourseCategory;
  url: string;
}

export const learningContent = {
  chapter: "04",
};

export const courses: Course[] = [
  {
    id: "nodejs",
    platform: "Udemy",
    category: "backend",
    url: "https://www.udemy.com/course/nodejs-de-cero-a-experto/",
  },
  {
    id: "react",
    platform: "Udemy",
    category: "frontend",
    url: "https://www.udemy.com/course/react-cero-experto/",
  },
  {
    id: "spring",
    platform: "Udemy",
    category: "backend",
    url: "https://www.udemy.com/course/spring-framework-5/",
  },
  {
    id: "angular",
    platform: "Udemy",
    category: "frontend",
    url: "https://www.udemy.com/course/angular-fernando-herrera/",
  },
  {
    id: "vue",
    platform: "Udemy",
    category: "frontend",
    url: "https://www.udemy.com/course/curso-vue/",
  },
  {
    id: "css",
    platform: "Udemy",
    category: "design",
    url: "https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/",
  },
  {
    id: "nextjs",
    platform: "Udemy",
    category: "frontend",
    url: "https://www.udemy.com/course/nextjs-fh/",
  },
];

export function formatCourseIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export type TechLevel = "expert" | "advanced" | "intermediate" | "basic";

export type TechId =
  | "javascript"
  | "typescript"
  | "firebase"
  | "node"
  | "vue"
  | "react"
  | "scss"
  | "bootstrap"
  | "tailwind"
  | "github"
  | "spring"
  | "angular"
  | "mongodb"
  | "postgresql"
  | "docker"
  | "next"
  | "cursor"
  | "jest";

export interface TechItem {
  id: TechId;
  name: string;
  years: number;
  level: TechLevel;
  icon: string;
}

/** Previous bar widths expressed as percentages: full, 4/5, 3/5, 2/5. */
export const LEVEL_PERCENTAGE: Record<TechLevel, number> = {
  expert: 100,
  advanced: 80,
  intermediate: 60,
  basic: 40,
};

export const skillsContent = {
  chapter: "02",
};

export const technologies: TechItem[] = [
  {
    id: "javascript",
    name: "Javascript",
    years: 3.5,
    level: "advanced",
    icon: "｡🇯‌🇸‌",
  },
  {
    id: "typescript",
    name: "TypeScript",
    years: 1,
    level: "advanced",
    icon: "🇹🇸",
  },
  {
    id: "firebase",
    name: "Firebase",
    years: 3,
    level: "advanced",
    icon: "🔥",
  },
  {
    id: "node",
    name: "Node.js",
    years: 3,
    level: "advanced",
    icon: "🟢",
  },
  {
    id: "vue",
    name: "Vue.js",
    years: 3,
    level: "advanced",
    icon: "✅",
  },
  {
    id: "react",
    name: "React",
    years: 1,
    level: "intermediate",
    icon: "⚛️",
  },
  {
    id: "scss",
    name: "SCSS",
    years: 2,
    level: "intermediate",
    icon: "🎨",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    years: 2,
    level: "intermediate",
    icon: "🅱️",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    years: 0.5,
    level: "intermediate",
    icon: "🌀",
  },
  {
    id: "github",
    name: "Github",
    years: 3,
    level: "intermediate",
    icon: "🐙",
  },
  {
    id: "spring",
    name: "Spring Boot",
    years: 0.5,
    level: "intermediate",
    icon: "🍃",
  },
  {
    id: "angular",
    name: "Angular",
    years: 0.5,
    level: "intermediate",
    icon: "🅰️",
  },
  {
    id: "next",
    name: "Next.js",
    years: 0.5,
    level: "intermediate",
    icon: "🔗",
  },
  {
    id: "cursor",
    name: "Cursor",
    years: 0.5,
    level: "intermediate",
    icon: "🔗",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    years: 0.5,
    level: "basic",
    icon: "🍃",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    years: 0.5,
    level: "basic",
    icon: "🐘",
  },
  {
    id: "docker",
    name: "Docker",
    years: 1,
    level: "basic",
    icon: "🐳",
  },
  {
    id: "jest",
    name: "Jest",
    years: 0.5,
    level: "basic",
    icon: "🃏",
  },
];

export function formatTechIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

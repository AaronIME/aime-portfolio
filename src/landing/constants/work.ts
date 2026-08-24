export type ProjectId =
  | "superkompras"
  | "validation"
  | "pluma"
  | "nexwear"
  | "flower"
  | "dental"
  | "valkirias"
  | "rivon"
  | "signal";

export interface Project {
  id: ProjectId;
  tags: string[];
  liveUrl?: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
}

export const workContent = {
  chapter: "03",
};

export const projects: Project[] = [
  {
    id: "superkompras",
    tags: ["Nuxt.js", "Node.js", "Javascript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://superkompras.com.mx/",
    image: {
      src: "/work/superkompras.png",
      width: 1600,
      height: 1000,
    },
  },
  {
    id: "validation",
    tags: ["Vue.js", "Node.js", "Javascript", "Firebase", "Tailwind CSS"],
    liveUrl:
      "https://validaciontarjetaclub.superkompras.com.mx/cliente/preregistro",
    image: {
      src: "/work/validation.png",
      width: 1600,
      height: 1200,
    },
  },
  {
    id: "pluma",
    tags: [
      "React",
      "Typescript",
      "Node.js",
      "Firebase Storage",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "http://blog-admin.aaronmagallanes.com/",
    image: {
      src: "/work/pluma.png",
      width: 1600,
      height: 1000,
    },
  },
  {
    id: "nexwear",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Firebase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "https://nexwear.aaronmagallanes.com/",
    image: {
      src: "/work/nexwear.png",
      width: 1600,
      height: 1200,
    },
  },
  {
    id: "flower",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare", "Leaflet"],
    liveUrl: "https://flower-store.aaronmagallanes.com/",
    image: {
      src: "/work/flower.png",
      width: 1600,
      height: 1000,
    },
  },
  {
    id: "dental",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet"],
    liveUrl: "https://dental-clinic.aaronmagallanes.com/",
    image: {
      src: "/work/dental.png",
      width: 1600,
      height: 1200,
    },
  },
  {
    id: "valkirias",
    tags: ["Next.js", "TypeScript", "Bootstrap", "Firebase"],
    liveUrl: "https://valkirias.com.mx/",
    image: {
      src: "/work/valkirias.png",
      width: 1600,
      height: 1000,
    },
  },
  {
    id: "rivon",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    liveUrl: "https://rivonwebstudio.aaronmagallanes.com/",
    image: {
      src: "/work/rivon.png",
      width: 1600,
      height: 1200,
    },
  },
  {
    id: "signal",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://signal-label.aaronmagallanes.com/",
    image: {
      src: "/work/signal.png",
      width: 1600,
      height: 1000,
    },
  },
];

export function formatProjectIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

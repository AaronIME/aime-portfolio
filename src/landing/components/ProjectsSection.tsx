import { ProjectCard, type Project } from "./ProjectCard";
import { SectionLabel } from "../../components/SectionLabel";

const projects: Project[] = [
  {
    title: "Superkompras - Ecommerce",
    description:
      "An eCommerce platform for a supermarket chain in Mexico where customers can browse products, add items to their cart, complete purchases online, and choose between home delivery or in-store pickup.",
    tags: ["Nuxt.js", "Node.js", "Javascript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://superkompras.com.mx/",
    gradient: "bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-950",
    emoji: "🛒",
  },
  {
    title: "SuperKompras Client Data Validation System",
    description:
      "A customer data validation platform for a supermarket chain in Mexico that allows customers or in-store staff to verify personal information via email and SMS codes, rewards users with loyalty points, and includes a dashboard for managing customers and points.",
    tags: ["Vue.js", "Node.js", "Javascript", "Firebase", "Tailwind CSS"],
    liveUrl:
      "https://validaciontarjetaclub.superkompras.com.mx/cliente/preregistro",
    gradient: "bg-gradient-to-br from-green-950 via-green-950 to-green-950",
    emoji: "✔️",
  },
  {
    title: "Pluma Blog",
    description: "A blog management platform that allows multiple users with different roles to create, edit, and publish posts, featuring an administrative dashboard for managing content, users, and blog settings.",
    tags: ["React", "Typescript", "Node.js", "Firebase Storage", "MongoDB", "Tailwind CSS"],
    liveUrl: "http://blog-admin.aaronmagallanes.com/",
    gradient: "bg-gradient-to-br from-amber-950 via-orange-950 to-rose-950",
    emoji: "📝",
  },
  {
    title: "Nexwear - Ecommerce",
    description: "An eCommerce demo platform for online clothing sales that allows customers to browse products, add items to their cart, and complete purchases, while providing an admin dashboard to manage products, variants, orders, users, and other store operations.",
    tags: ["React", "TypeScript", "Node.js", "Firebase", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://nexwear.aaronmagallanes.com/",
    gradient: "bg-gradient-to-br from-sky-950 via-blue-950 to-indigo-950",
    emoji: "👕",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <div className="mb-10">
        <SectionLabel>Work</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Selected projects
        </h2>
        <p className="mt-2 text-neutral-500 text-sm max-w-lg">
          A mix of open-source tools, client work, and side projects built over
          the years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

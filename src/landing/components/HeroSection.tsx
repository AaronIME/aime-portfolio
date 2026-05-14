import { SectionLabel } from "../../components/SectionLabel";
import { Badge } from "../../components/Badge";
import { HeroAvatar } from "./HeroAvatar";
import { HeroLinks } from "./HeroLinks";

export const HeroSection = () => {
  return (
    <section className="w-full pt-20 pb-16 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <SectionLabel>Available for work</SectionLabel>

      <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
        <HeroAvatar />
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-boldtext-white">
            Aarón Magallanes&nbsp;
          </h1>
          <h1 className="font-bold tracking-tight leading-tight text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 to-30%">
            Web Developer
          </h1>
          <p className="mt-1.5 text-base md:text-lg text-neutral-400 font-medium">
            Computing Systems Engineer
          </p>
        </div>
      </div>

      <p className="text-neutral-400 leading-relaxed text-base md:text-lg max-w-2xl mb-8">
        I enjoy building clean, functional web experiences from frontend to
        backend. Currently deepening my skills in React and TypeScript while
        working with Vue, Firebase, and Node.js to bring ideas to life.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {[
          "React",
          "TypeScript",
          "Vue.js",
          "Node.js",
          "Tailwind CSS",
          "Firebase",
        ].map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      <HeroLinks />
    </section>
  );
};

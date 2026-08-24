export interface HeroLinkItem {
  id: "github" | "linkedin" | "email";
  href: string;
}

export const heroContent = {
  firstName: "Aarón",
  lastName: "Magallanes",
  technologies: [
    "React",
    "TypeScript",
    "Vue.js",
    "Node.js",
    "Tailwind CSS",
    "Firebase",
  ],
  contactHref: "mailto:aaron.isaac.echavarria@gmail.com",
  portrait: {
    src: "/hero-portrait.png",
  },
  links: [
    { id: "github", href: "https://github.com/AaronIME" },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/aarón-magallanes-0482a8339",
    },
    { id: "email", href: "mailto:aaron.isaac.echavarria@gmail.com" },
  ] satisfies HeroLinkItem[],
};

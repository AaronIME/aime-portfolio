import { Briefcase, FolderGit, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import type { HeroLinkItem } from "../constants/hero";

interface Props {
  links: HeroLinkItem[];
  className?: string;
}

const linkIcons = {
  github: FolderGit,
  linkedin: Briefcase,
  email: Mail,
} as const;

export const HeroLinks = ({ links, className }: Props) => {
  const { t } = useTranslation();

  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {links.map((link) => {
        const Icon = linkIcons[link.id];
        const isMail = link.href.startsWith("mailto:");
        const label = t(`hero.links.${link.id}`);

        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors duration-200 hover:border-blue-deep hover:text-blue-deep"
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

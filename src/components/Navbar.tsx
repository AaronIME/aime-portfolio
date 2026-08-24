import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import { heroContent } from "../landing/constants/hero";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavItem {
  id: string;
  labelKey: "nav.experience" | "nav.projects" | "nav.courses";
  href: string;
}

const chapterLinks: NavItem[] = [
  { id: "experience", labelKey: "nav.experience", href: "#experience" },
  { id: "projects", labelKey: "nav.projects", href: "#projects" },
  { id: "courses", labelKey: "nav.courses", href: "#courses" },
];

const observedIds = ["identity", "experience", "projects", "courses", "contact"];

export const Navbar = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState("identity");

  useEffect(() => {
    const elements = observedIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.2, 0.45] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b border-line bg-paper/90 px-5 backdrop-blur-sm sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <a
        href="#identity"
        className={cn(
          "font-mono text-[13px] font-medium tracking-[0.22em] uppercase transition-colors duration-200",
          activeId === "identity" ? "text-blue-deep" : "text-ink",
        )}
      >
        {t("nav.brand")}
      </a>
      <div className="hidden items-center gap-7 text-[13px] md:flex">
        {chapterLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={cn(
              "transition-colors duration-200 hover:text-blue-deep",
              activeId === link.id ? "text-blue-deep" : "text-ink",
            )}
          >
            {t(link.labelKey)}
          </a>
        ))}
        <a
          href={heroContent.contactHref}
          className="font-medium text-blue-deep transition-colors duration-200 hover:text-ink"
        >
          {t("nav.contact")}
        </a>
        <LanguageSwitcher />
      </div>
      <div className="flex items-center gap-4 md:hidden">
        <LanguageSwitcher />
        <a
          href={heroContent.contactHref}
          className="text-sm font-medium text-blue-deep"
        >
          {t("nav.contact")}
        </a>
      </div>
    </nav>
  );
};

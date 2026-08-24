import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView, useReducedMotion } from "motion/react";
import { SkillIndexRow } from "./SkillIndexRow";
import { skillsContent, technologies } from "../constants/skills";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const listRef = useRef<HTMLOListElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const isInView = useInView(listRef, { once: true, amount: 0.08 });
  const [activeName, setActiveName] = useState<string | null>(null);

  const { chapter } = skillsContent;

  return (
    <section
      id="experience"
      className="relative border-t border-line bg-paper px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16 lg:py-32 xl:px-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
        <header className="lg:sticky lg:top-24 lg:col-span-4">
          <p className="font-mono text-[10px] tracking-[0.22em] text-blue-deep uppercase md:text-[11px]">
            {chapter} / {t("skills.chapterLabel")}
          </p>
          <h2
            id="skills-heading"
            className="mt-4 font-display font-medium tracking-[-0.03em] text-ink text-[clamp(2.2rem,5vw,3.75rem)] leading-[0.94]"
          >
            {t("skills.title")}
            <span className="block">{t("skills.titleLine")}</span>
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft md:text-base">
            {t("skills.introduction")}
          </p>
        </header>

        <div className="lg:col-span-8">
          <p className="mb-4 font-mono text-[10px] tracking-[0.22em] text-ink-muted uppercase">
            {t("skills.indexLabel")}
          </p>
          <motion.ol
            ref={listRef}
            initial={reducedMotion ? "show" : "hidden"}
            animate={reducedMotion || isInView ? "show" : "hidden"}
            variants={listVariants}
            onMouseLeave={() => setActiveName(null)}
            className="border-t border-line"
          >
            {technologies.map((tech, index) => (
              <SkillIndexRow
                key={tech.name}
                index={index}
                tech={tech}
                isActive={activeName === tech.name}
                shouldAnimate={isInView && !reducedMotion}
                reducedMotion={reducedMotion}
                onEnter={() => setActiveName(tech.name)}
              />
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};

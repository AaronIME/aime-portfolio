import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { WorkPiece } from "./WorkPiece";
import { projects, workContent } from "../constants/work";

const ease = [0.22, 1, 0.36, 1] as const;

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion() ?? false;

  const { chapter } = workContent;

  return (
    <section
      id="projects"
      className="relative bg-blue-deep px-5 py-28 sm:px-8 md:px-12 md:py-36 lg:px-16 lg:py-44 xl:px-20"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[90rem]">
        <header className="mb-16 md:mb-24 lg:mb-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="font-mono text-[10px] tracking-[0.22em] text-paper uppercase md:text-[11px]"
            >
              {chapter} / {t("work.chapterLabel")}
            </motion.p>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
              className="max-w-xs text-sm leading-relaxed text-paper/70 md:text-right md:text-base"
            >
              {t("work.introduction")}
            </motion.p>
          </div>

          <h2
            id="work-heading"
            className="mt-8 font-display font-medium tracking-[-0.03em] text-paper text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.94]"
          >
            {t("work.title")}
            <span className="block">{t("work.titleLine")}</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-8">
          {projects.map((project, index) => (
            <WorkPiece
              key={project.id}
              project={project}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

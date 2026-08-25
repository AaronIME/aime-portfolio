import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView, useReducedMotion } from "motion/react";
import { CourseIndexRow } from "./CourseIndexRow";
import { courses, learningContent } from "../constants/learning";

const ease = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.16,
    },
  },
};

export const CoursesSection = () => {
  const { t } = useTranslation();
  const listRef = useRef<HTMLOListElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const isInView = useInView(listRef, { once: true, amount: 0.12 });
  const [activeId, setActiveId] = useState<string | null>(null);

  const { chapter } = learningContent;

  return (
    <section
      id="courses"
      className="relative bg-paper px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-16 lg:py-28 xl:px-20"
      aria-labelledby="learning-heading"
    >
      <div className="mx-auto max-w-[90rem]">
        <header className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="md:order-2 md:text-right">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="font-mono text-[10px] tracking-[0.22em] text-blue-deep uppercase md:text-[11px]"
            >
              {chapter} / {t("learning.chapterLabel")}
            </motion.p>
            <motion.h2
              id="learning-heading"
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-4 font-display font-medium tracking-[-0.03em] text-ink text-[clamp(1.85rem,4vw,3rem)] leading-[0.94]"
            >
              {t("learning.title")}
              <span className="block">{t("learning.titleLine")}</span>
            </motion.h2>
          </div>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="max-w-xs text-sm leading-relaxed text-ink-soft md:order-1 md:text-base"
          >
            {t("learning.introduction")}
          </motion.p>
        </header>

        <div className="relative md:pl-8">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 hidden w-px bg-line md:block"
          />
          <span
            aria-hidden="true"
            className="absolute top-0 -left-1 hidden size-2 rounded-full bg-blue-deep md:block"
          />

          <p className="mb-6 font-mono text-[10px] tracking-[0.22em] text-ink-muted uppercase md:mb-8">
            {t("learning.indexLabel")}
          </p>

          <motion.ol
            ref={listRef}
            initial={reducedMotion ? "show" : "hidden"}
            animate={reducedMotion || isInView ? "show" : "hidden"}
            variants={listVariants}
            onMouseLeave={() => setActiveId(null)}
            className="border-t border-line"
          >
            {courses.map((course, index) => (
              <CourseIndexRow
                key={course.id}
                index={index}
                course={course}
                isActive={activeId === course.id}
                reducedMotion={reducedMotion}
                onEnter={() => setActiveId(course.id)}
              />
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};

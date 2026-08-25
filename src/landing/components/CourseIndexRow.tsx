import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { formatCourseIndex, type Course } from "../constants/learning";

const ease = [0.22, 1, 0.36, 1] as const;

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.9, delay: 0.12, ease },
  },
};

interface Props {
  index: number;
  course: Course;
  isActive: boolean;
  reducedMotion: boolean;
  onEnter: () => void;
}

export const CourseIndexRow = ({
  index,
  course,
  isActive,
  reducedMotion,
  onEnter,
}: Props) => {
  const { t } = useTranslation();
  const name = t(`learning.items.${course.id}.name`);
  const description = t(`learning.items.${course.id}.description`);
  const categoryLabel = t(`learning.categories.${course.category}`);

  return (
    <motion.li
      variants={rowVariants}
      onMouseEnter={onEnter}
    >
      <a
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-6 outline-none md:py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-deep"
        aria-label={`${name}, ${course.platform}, ${categoryLabel}. ${description}`}
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-10">
          <span className="font-mono text-[10px] tracking-[0.16em] text-ink-muted md:w-10 md:shrink-0 md:pt-1.5 md:text-[11px]">
            {formatCourseIndex(index)}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
              <h3 className="max-w-2xl font-display text-lg font-medium leading-snug tracking-[-0.03em] text-ink md:text-xl">
                {name}
              </h3>

              <p className="shrink-0 font-mono text-[11px] tracking-[0.14em] text-ink-muted uppercase md:pt-1.5">
                {categoryLabel}
              </p>
            </div>

            <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-ink-muted uppercase">
              {course.platform}
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </a>

      <motion.span
        variants={reducedMotion ? undefined : lineVariants}
        className={cn(
          "block h-px w-full origin-left transition-colors duration-300",
          isActive ? "bg-blue-deep" : "bg-line",
        )}
      />
    </motion.li>
  );
};

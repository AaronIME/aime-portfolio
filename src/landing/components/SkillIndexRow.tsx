import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { cn } from "../../lib/utils";
import {
  formatTechIndex,
  LEVEL_PERCENTAGE,
  type TechItem,
} from "../constants/skills";

const ease = [0.22, 1, 0.36, 1] as const;

const rowVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.95, delay: 0.18, ease },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: 0.72, ease },
  },
};

interface SkillValueProps {
  value: number;
  delay: number;
  shouldAnimate: boolean;
  reducedMotion: boolean;
}

function SkillValue({ value, delay, shouldAnimate, reducedMotion }: SkillValueProps) {
  const count = useMotionValue(reducedMotion ? value : 0);
  const rounded = useTransform(count, (latest) => String(Math.round(latest)));

  useEffect(() => {
    if (reducedMotion) {
      count.set(value);
      return;
    }

    if (!shouldAnimate) {
      return;
    }

    const controls = animate(count, value, { duration: 0.95, delay, ease });
    return () => controls.stop();
  }, [count, delay, reducedMotion, shouldAnimate, value]);

  if (reducedMotion) {
    return <span>{value}</span>;
  }

  return <motion.span>{rounded}</motion.span>;
}

function skillNameSize(level: TechItem["level"]): string {
  if (level === "advanced" || level === "expert") {
    return "text-[1.15rem] md:text-xl";
  }

  if (level === "intermediate") {
    return "text-base md:text-lg";
  }

  return "text-base md:text-lg";
}

interface Props {
  index: number;
  tech: TechItem;
  isActive: boolean;
  shouldAnimate: boolean;
  reducedMotion: boolean;
  onEnter: () => void;
}

export const SkillIndexRow = ({
  index,
  tech,
  isActive,
  shouldAnimate,
  reducedMotion,
  onEnter,
}: Props) => {
  const { t } = useTranslation();
  const percentage = LEVEL_PERCENTAGE[tech.level];
  const yearsLabel = t("skills.years", { years: tech.years });
  const levelLabel = t(`skills.levels.${tech.level}`);
  const description = t(`skills.items.${tech.id}`);

  return (
    <motion.li
      variants={rowVariants}
      onMouseEnter={onEnter}
      aria-label={`${tech.name}, ${levelLabel}, ${percentage} ${t("skills.percent")}, ${yearsLabel}`}
      className="border-b border-line/70 py-3.5 md:py-4"
    >
      <div className="md:flex md:items-baseline md:gap-8">
        <span className="mb-2 block font-mono text-[10px] tracking-[0.16em] text-ink-muted md:mb-0 md:w-10 md:shrink-0 md:text-[11px]">
          {formatTechIndex(index)}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3
              className={cn(
                "font-display font-light tracking-[-0.03em] text-ink",
                skillNameSize(tech.level),
              )}
            >
              {tech.name}
            </h3>

            <p
              className={cn(
                "font-mono text-sm tabular-nums tracking-[0.08em] text-ink-muted transition-colors duration-300 md:text-base",
                isActive && "text-blue-deep",
              )}
            >
              <SkillValue
                value={percentage}
                delay={index * 0.06}
                shouldAnimate={shouldAnimate}
                reducedMotion={reducedMotion}
              />
              <span className="text-[10px] md:text-xs">%</span>
            </p>
          </div>

          <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-ink-muted uppercase">
            {yearsLabel}
          </p>

          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              isActive ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <p className="text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </div>
          </div>

          <div className="relative mt-4 h-3">
            <motion.span
              variants={reducedMotion ? undefined : lineVariants}
              className="absolute top-1/2 left-0 h-px origin-left bg-blue-deep"
              style={{ width: `${percentage}%` }}
            />
            <motion.span
              variants={reducedMotion ? undefined : dotVariants}
              className="absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-deep"
              style={{ left: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </motion.li>
  );
};

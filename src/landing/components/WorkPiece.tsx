import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { formatProjectIndex, type Project } from "../constants/work";

const ease = [0.22, 1, 0.36, 1] as const;

const pieceVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.04 },
  },
};

const mediaVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const copyVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

function piecePlacement(index: number): string {
  const placements = [
    "lg:col-span-7",
    "lg:col-span-5 lg:mt-24",
    "lg:col-span-5",
    "lg:col-span-7 lg:mt-24",
  ];

  return placements[index % placements.length];
}

function imageAspect(index: number): string {
  return index % 2 === 0 ? "aspect-[16/10]" : "aspect-[4/3]";
}

interface Props {
  project: Project;
  index: number;
  reducedMotion: boolean;
}

export const WorkPiece = ({ project, index, reducedMotion }: Props) => {
  const { t } = useTranslation();
  const title = t(`work.items.${project.id}.title`);
  const description = t(`work.items.${project.id}.description`);
  const imageAlt = project.image
    ? t(`work.items.${project.id}.imageAlt`)
    : undefined;
  const viewLabel = t("work.viewProject");
  const hasLiveUrl = Boolean(project.liveUrl);
  const mediaClassName = cn(
    "w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]",
    imageAspect(index),
  );

  const body = (
    <>
        <motion.div
          variants={reducedMotion ? undefined : mediaVariants}
          className="relative rounded-[1.75rem] bg-surface p-2.5 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.45)] md:p-3"
        >
          <div className="overflow-hidden rounded-[1.25rem] bg-paper-raised">
            {project.image ? (
              <img
                src={project.image.src}
                alt={imageAlt}
                width={project.image.width}
                height={project.image.height}
                loading="lazy"
                className={mediaClassName}
              />
            ) : (
              <div className={cn("bg-paper-raised", imageAspect(index))} />
            )}
          </div>
          <span className="absolute bottom-5 left-5 rounded-full border border-line bg-surface/95 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] text-ink">
            {formatProjectIndex(index)}
          </span>
        </motion.div>

        <motion.div
          variants={reducedMotion ? undefined : copyVariants}
          className="mt-5 px-1 md:mt-6"
        >
          <h3 className="font-display text-xl font-medium tracking-[-0.03em] text-paper md:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-paper/70">
            {description}
          </p>
          <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-[0.12em] text-paper/45 uppercase">
            {project.tags.join("  /  ")}
          </p>
          {hasLiveUrl ? (
            <span className="mt-4 inline-flex font-mono text-[11px] tracking-[0.18em] text-paper uppercase">
              {viewLabel} →
            </span>
          ) : null}
        </motion.div>
    </>
  );

  return (
    <motion.article
      initial={reducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={pieceVariants}
      className={cn("group min-w-0", piecePlacement(index))}
    >
      {hasLiveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block outline-none focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-paper"
          aria-label={`${viewLabel}: ${title}`}
        >
          {body}
        </a>
      ) : (
        <div className="block">{body}</div>
      )}
    </motion.article>
  );
};

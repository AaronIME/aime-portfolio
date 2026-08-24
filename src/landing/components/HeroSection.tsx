import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { PillButton } from "../../components";
import { HeroLinks } from "./HeroLinks";
import { useHeroScroll } from "../hooks/useHeroScroll";
import { heroContent } from "../constants/hero";

const ease = [0.22, 1, 0.36, 1] as const;

const supportingGroup = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.5 },
  },
};

const supportingItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export const HeroSection = () => {
  const { t } = useTranslation();
  const { shouldReduceMotion, identityY, identityOpacity, plateY, plateScale } =
    useHeroScroll();

  const { firstName, lastName, technologies, contactHref, portrait, links } =
    heroContent;

  return (
    <section
      id="identity"
      className="relative overflow-x-clip bg-paper"
      aria-label={t("hero.ariaLabel")}
    >
      <div className="relative z-10 mx-auto flex min-h-svh max-w-[90rem] flex-col px-5 pt-24 pb-10 sm:px-8 md:px-12 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-8 lg:px-16 lg:pt-32 lg:pb-20 xl:gap-12 xl:px-20">
        <motion.div
          className="lg:col-span-4 lg:self-start"
          style={
            shouldReduceMotion
              ? undefined
              : { y: identityY, opacity: identityOpacity }
          }
        >
          <h1 className="font-display font-medium text-ink">
            <span className="block overflow-hidden">
              <motion.span
                initial={shouldReduceMotion ? false : { y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                className="block text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.88] tracking-[-0.04em]"
              >
                {firstName}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={shouldReduceMotion ? false : { y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.32, ease }}
                className="block text-[clamp(1.85rem,5.2vw,3.75rem)] leading-[0.88] tracking-[-0.04em]"
              >
                {lastName}
                <span className="text-blue-deep">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            variants={supportingGroup}
            className="mt-8 max-w-sm"
          >
            <motion.p
              variants={supportingItem}
              className="text-sm leading-relaxed text-ink-soft md:text-base"
            >
              {t("hero.introduction")}
            </motion.p>
            <motion.div variants={supportingItem} className="mt-7">
              <PillButton href={contactHref}>{t("hero.contactLabel")}</PillButton>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.figure
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease }}
          style={
            shouldReduceMotion ? undefined : { y: plateY, scale: plateScale }
          }
          className="relative mx-auto mt-10 mb-6 w-full max-w-[20rem] lg:col-span-4 lg:mx-0 lg:mt-0 lg:mb-0 lg:max-h-[calc(100svh-11rem)] lg:max-w-none lg:self-start"
        >
          <div className="h-full rounded-[2rem] bg-surface p-2.5 shadow-[0_24px_60px_-32px_rgba(12,45,82,0.35)]">
            <div className="relative h-full overflow-hidden rounded-[1.5rem]">
              <img
                src={portrait.src}
                alt={t("hero.portraitAlt")}
                width={1200}
                height={1600}
                fetchPriority="high"
                className="aspect-[3/4] h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>
          <p className="absolute -bottom-3 left-5 flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-ink uppercase">
            <span className="size-1.5 rounded-full bg-blue-deep" />
            {t("hero.availability")}
          </p>
        </motion.figure>

        <motion.div
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          variants={supportingGroup}
          className="mt-10 flex flex-col lg:col-span-4 lg:mt-0 lg:self-end lg:items-end lg:text-right"
        >
          <motion.p
            variants={supportingItem}
            className="text-lg font-medium tracking-tight text-blue-deep md:text-xl lg:text-2xl"
          >
            {t("hero.role")}
          </motion.p>
          <motion.p
            variants={supportingItem}
            className="mt-2 text-sm text-ink-muted md:text-base"
          >
            {t("hero.specialty")}
          </motion.p>
          <motion.p
            variants={supportingItem}
            className="mt-8 max-w-xs font-mono text-[10px] leading-relaxed tracking-[0.14em] text-ink-muted uppercase lg:text-right"
          >
            {technologies.join("  ·  ")}
          </motion.p>
          <motion.div variants={supportingItem} className="mt-6">
            <HeroLinks links={links} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

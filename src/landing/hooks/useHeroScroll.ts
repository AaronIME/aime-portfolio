import { useReducedMotion, useScroll, useTransform } from "motion/react";

export function useHeroScroll() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { scrollY } = useScroll();

  const identityY = useTransform(scrollY, [0, 560], [0, -28]);
  const identityOpacity = useTransform(scrollY, [0, 560], [1, 0.84]);
  const plateY = useTransform(scrollY, [0, 560], [0, 32]);
  const plateScale = useTransform(scrollY, [0, 560], [1, 1.06]);

  return {
    shouldReduceMotion,
    identityY,
    identityOpacity,
    plateY,
    plateScale,
  };
}

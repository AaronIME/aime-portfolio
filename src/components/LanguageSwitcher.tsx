import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import { SUPPORTED_LANGUAGES } from "../i18n";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div
      className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] uppercase"
      role="group"
      aria-label={t("nav.language")}
    >
      {SUPPORTED_LANGUAGES.map((language, index) => {
        const isActive = activeLanguage.startsWith(language);

        return (
          <Fragment key={language}>
            {index > 0 ? (
              <span className="text-line" aria-hidden="true">
                /
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => {
                void i18n.changeLanguage(language);
              }}
              aria-pressed={isActive}
              className={cn(
                "transition-colors duration-200",
                isActive ? "text-blue-deep" : "text-ink-muted hover:text-ink",
              )}
            >
              {language}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
};

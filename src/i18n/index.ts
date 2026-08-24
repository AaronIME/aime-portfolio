import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";

export const SUPPORTED_LANGUAGES = ["es", "en"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_STORAGE_KEY = "portfolio-language";

function isSupportedLanguage(value: string): value is SupportedLanguage {
  return SUPPORTED_LANGUAGES.some((language) => language === value);
}

function getInitialLanguage(): SupportedLanguage {
  if (typeof window === "undefined") {
    return "es";
  }

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (stored && isSupportedLanguage(stored)) {
    return stored;
  }

  return "es";
}

function syncDocumentLanguage(language: string) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = language;
  document.title = i18n.t("meta.title");
}

i18n.on("languageChanged", (language) => {
  if (typeof window !== "undefined" && isSupportedLanguage(language)) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }

  syncDocumentLanguage(language);
});

void i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: "es",
  supportedLngs: [...SUPPORTED_LANGUAGES],
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
}).then(() => {
  syncDocumentLanguage(i18n.language);
});

export default i18n;

import { useTranslation } from "react-i18next";
import { heroContent } from "../landing/constants/hero";

export const Footer = () => {
  const { t } = useTranslation();
  const { contactHref, links } = heroContent;
  const email = contactHref.replace("mailto:", "");

  return (
    <footer
      id="contact"
      className="border-t border-line bg-paper px-5 pt-16 pb-10 sm:px-8 md:px-12 md:pt-20 lg:px-16 lg:pt-24 xl:px-20"
    >
      <div className="mx-auto max-w-[90rem]">
        <p className="font-mono text-[10px] tracking-[0.22em] text-blue-deep uppercase md:text-[11px]">
          05 / {t("contact.chapterLabel")}
        </p>

        <a
          href={contactHref}
          className="mt-6 block max-w-full font-display text-[clamp(1.35rem,4vw,2.75rem)] leading-[1.05] font-medium tracking-[-0.03em] text-ink break-words transition-colors duration-200 hover:text-blue-deep"
        >
          {email}
        </a>

        <div className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-end md:justify-between">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map((link) => {
              const isMail = link.href.startsWith("mailto:");

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    className="font-mono text-[11px] tracking-[0.14em] text-ink-muted uppercase transition-colors duration-200 hover:text-blue-deep"
                  >
                    {t(`hero.links.${link.id}`)}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="font-mono text-[11px] tracking-[0.12em] text-ink-muted uppercase">
            © {new Date().getFullYear()} {t("contact.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

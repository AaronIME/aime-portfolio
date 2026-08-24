import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const PillButton = ({ href, children, className }: Props) => {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className={cn(
        "inline-flex items-center gap-3 rounded-full bg-blue-deep py-1.5 pr-1.5 pl-5 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.02]",
        className,
      )}
    >
      {children}
      <span className="flex size-9 items-center justify-center rounded-full bg-paper text-blue-deep">
        <ArrowUpRight size={16} strokeWidth={2.2} />
      </span>
    </a>
  );
};

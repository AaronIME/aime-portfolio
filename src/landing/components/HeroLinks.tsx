import { Mail, FolderGit, Briefcase } from 'lucide-react'
import { cn } from '../../lib/utils'

interface LinkItem {
  label: string
  href: string
  icon: React.ReactNode
}

const links: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/AaronIME', icon: <FolderGit size={16} /> },
  { label: 'LinkedIn', href: 'www.linkedin.com/in/aarón-magallanes-0482a8339', icon: <Briefcase size={16} /> },
  { label: 'Email', href: 'mailto:aaron.isaac.echavarria@gmail.com', icon: <Mail size={16} /> },
]

interface HeroLinksProps {
  className?: string
}

export const HeroLinks = ({ className }: HeroLinksProps) => {
  return (
    <div className={cn('flex items-center gap-2 flex-wrap', className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-neutral-400 border border-white/8 bg-white/3 hover:bg-white/6 hover:text-neutral-200 hover:border-white/15 transition-all duration-150"
        >
          {link.icon}
          {link.label}
        </a>
      ))}
    </div>
  )
}

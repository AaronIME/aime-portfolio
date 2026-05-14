import { cn } from '../lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export const SectionLabel = ({ children, className }: SectionLabelProps) => {
  return (
    <div className={cn('flex items-center gap-3 mb-3', className)}>
      <span className="h-px w-8 bg-indigo-500/60" />
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400">
        {children}
      </span>
    </div>
  )
}

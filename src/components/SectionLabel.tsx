import { cn } from '../lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export const SectionLabel = ({ children, className }: SectionLabelProps) => {
  return (
    <div className={cn('flex items-center gap-3 mb-3', className)}>
      <span className="h-px w-8 bg-blue-deep/60" />
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-deep">
        {children}
      </span>
    </div>
  )
}

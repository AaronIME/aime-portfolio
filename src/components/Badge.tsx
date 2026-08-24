import { cn } from '../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'accent'
}

export const Badge = ({ children, className, variant = 'default' }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide',
        variant === 'default' && 'bg-paper-raised text-ink-soft border border-line',
        variant === 'outline' && 'border border-line text-ink-muted',
        variant === 'accent' && 'bg-blue-deep/8 text-blue-deep border border-blue-deep/20',
        className
      )}
    >
      {children}
    </span>
  )
}

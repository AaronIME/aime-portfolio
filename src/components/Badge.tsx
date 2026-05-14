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
        variant === 'default' && 'bg-white/5 text-neutral-300 border border-white/10',
        variant === 'outline' && 'border border-white/15 text-neutral-400',
        variant === 'accent' && 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20',
        className
      )}
    >
      {children}
    </span>
  )
}

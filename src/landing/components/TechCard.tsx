import { cn } from '../../lib/utils'

export interface TechItem {
  name: string
  years: number
  level: 'expert' | 'advanced' | 'intermediate' | 'basic'
  icon: string
  description: string
}

interface TechCardProps {
  tech: TechItem
  className?: string
}

const levelConfig = {
  expert: { label: 'Expert', color: 'text-emerald-400', bar: 'bg-emerald-500', width: 'w-full' },
  advanced: { label: 'Advanced', color: 'text-indigo-400', bar: 'bg-indigo-500', width: 'w-4/5' },
  intermediate: { label: 'Intermediate', color: 'text-orange-400', bar: 'bg-orange-500', width: 'w-3/5' },
  basic: { label: 'Basic', color: 'text-amber-400', bar: 'bg-amber-500', width: 'w-2/5' },
}

export const TechCard = ({ tech, className }: TechCardProps) => {
  const config = levelConfig[tech.level]

  return (
    <div
      className={cn(
        'group relative p-5 rounded-2xl border border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/15 transition-all duration-200',
        className
      )}
    >
      <div className="flex items-start justify-between gap-1 mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl leading-none">{tech.icon}</span>
          <div>
            <h3 className="text-sm font-semibold text-white">{tech.name}</h3>
            <p className="text-xs text-neutral-500 mt-0.5">{tech.years}+ years</p>
          </div>
        </div>
        <span className={cn('text-[10px] font-medium', config.color)}>{config.label}</span>
      </div>

      <p className="text-xs text-neutral-500 leading-relaxed mb-3">{tech.description}</p>

      <div className="h-1 w-full rounded-full bg-white/6 overflow-hidden">
        <div className={cn('h-full rounded-full transition-all duration-500', config.bar, config.width)} />
      </div>
    </div>
  )
}

import { ExternalLink } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Badge } from '../../components/Badge'

export interface Course {
  name: string
  description: string
  platform: string
  category: 'frontend' | 'backend' | 'design' | 'devops' | 'engineering'
  url: string
  gradient: string
  icon: string
}

interface CourseCardProps {
  course: Course
  className?: string
}

const categoryConfig = {
  frontend: { label: 'Frontend', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  backend: { label: 'Backend', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  design: { label: 'Design', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
  devops: { label: 'DevOps', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  engineering: { label: 'Engineering', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
}

export const CourseCard = ({ course, className }: CourseCardProps) => {
  const cat = categoryConfig[course.category]

  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex flex-col rounded-2xl border border-white/8 bg-white/2 overflow-hidden hover:border-white/15 hover:bg-white/4 transition-all duration-200',
        className
      )}
    >
      <div className={cn('relative h-28 flex items-center justify-center text-4xl', course.gradient)}>
        <span className="drop-shadow-lg">{course.icon}</span>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-indigo-300 transition-colors">
            {course.name}
          </h3>
          <ExternalLink
            size={13}
            className="shrink-0 mt-0.5 text-neutral-600 group-hover:text-neutral-400 transition-colors"
          />
        </div>

        <p className="text-xs text-neutral-500 leading-relaxed flex-1">
          {course.description}
        </p>

        <div className="flex items-center justify-between pt-1 border-t border-white/6 mt-auto">
          <span className="text-xs text-neutral-500">{course.platform}</span>
          <Badge className={cn('text-[11px]', cat.color, cat.bg)}>{cat.label}</Badge>
        </div>
      </div>
    </a>
  )
}

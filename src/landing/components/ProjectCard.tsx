import { ExternalLink, Mail } from 'lucide-react'
import { Badge } from '../../components/Badge'
import { cn } from '../../lib/utils'

export interface Project {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  gradient: string
  emoji: string
}

interface ProjectCardProps {
  project: Project
  className?: string
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <article
      className={cn(
        'group flex flex-col rounded-2xl border border-white/8 bg-white/2 overflow-hidden hover:border-white/15 transition-all duration-200',
        className
      )}
    >
      <div className={cn('relative h-44 flex items-center justify-center text-5xl', project.gradient)}>
        <span className="drop-shadow-lg">{project.emoji}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-base font-semibold text-white leading-snug group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default">{tag}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-1 border-t border-white/6 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <ExternalLink size={13} />
              Live site
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors ml-auto"
            >
              <Mail size={13} />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

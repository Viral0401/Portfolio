import { Project } from '@/lib/types'
import { GithubIcon, PreviewIcon } from '../../utils/icons'

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    priority,
    title,
    shortDescription,
    livePreview,
    githubLink,
    type,
  } = data

  return (
    <article className="group relative flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-secondary/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/20 md:p-8">
      <div className="pointer-events-none absolute -right-10 -top-14 text-[11rem] font-bold leading-none text-neutral/[0.025] transition duration-500 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:text-accent/[0.04]">
        {String(priority).padStart(2, '0')}
      </div>
      <div className="relative flex items-center justify-between gap-4">
        <span className="bg-gradient-to-r from-accent to-violet-400 bg-clip-text text-xs font-semibold tracking-[0.2em] text-transparent">
          PROJECT / {String(priority).padStart(2, '0')}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-accent/35 via-violet-400/20 to-transparent" />
        <span className="size-2 rounded-full border border-accent/50 bg-accent/10 transition group-hover:bg-accent" />
      </div>

      <div className="relative mt-10 flex flex-1 flex-col">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <h3 className="text-neutral text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
            {type && (
              <span className="w-fit rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs text-accent">
                {type}
              </span>
            )}
          </div>
        <div className="my-6 flex-1">
          <p className="text-primary-content text-sm leading-7">{shortDescription}</p>
        </div>
        <div className="flex gap-3 border-t border-border pt-5">
          {livePreview && (
            <a
              href={livePreview}
              className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-primary transition hover:opacity-85"
              target="_blank">
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>Demo</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-neutral transition hover:border-accent/50 hover:text-accent"
              target="_blank">
              <GithubIcon className="w-[18px] md:w-5" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

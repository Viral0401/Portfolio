'use client'

import {
  SiApachekafka,
  SiDocker,
  SiFastapi,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiTypescript,
} from 'react-icons/si'
import { IconType } from 'react-icons'

type SkillsProps = {
  skills: { name: string }[]
}

const technologyIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  Kafka: SiApachekafka,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  FastAPI: SiFastapi,
  PyTorch: SiPytorch,
  Redis: SiRedis,
  MongoDB: SiMongodb,
}

const marqueeSkills = Object.keys(technologyIcons)

const Skills: React.FC<SkillsProps> = () => {
  const repeatedSkills = [...marqueeSkills, ...marqueeSkills]

  return (
    <section
      aria-label="Core technologies"
      className="tech-marquee group relative overflow-hidden border-y border-border/70 bg-secondary/45 py-5 backdrop-blur-sm"
    >
      <div className="tech-marquee-fade tech-marquee-fade-left" />
      <div className="tech-marquee-fade tech-marquee-fade-right" />
      <div className="tech-marquee-track flex w-max items-center">
        {repeatedSkills.map((name, index) => {
          const Icon = technologyIcons[name]
          return (
            <div
              key={`${name}-${index}`}
              className="tech-marquee-item mx-2 flex min-w-max items-center gap-3 rounded-xl border border-border/80 bg-primary/65 px-4 py-3 text-sm text-primary-content shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-secondary hover:text-neutral"
            >
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <span>{name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills

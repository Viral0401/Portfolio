'use client'

import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import { GithubIcon, LinkedIn, ResumeIcon } from '@/utils/icons'

const Hero = () => {
  const role = useRoleSwitcher({
    roles: ['AI Developer', 'Full Stack Developer', 'Data Science Engineer'],
  })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">Hi - I'm Viral Dalal</span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            A Master's student in Computer Engineering at NYU passionate about building scalable AI and data driven solutions that solve real world problems. I recently channeled that passion into a real world setting by winning the GeeksForGeeks Hackathon with my team, an experience that polished my rapid ideation, problem-solving, and execution skills. I'm actively seeking internship opportunities in AI, Data Science, or Software Engineering. I'm always open to collaborations for research and teaching assistant opportunities.
          </h2>

          {/* icon-only action buttons */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1-fcHxMMpmst7pIn7GhZh9K2E-UMXRGol/view?usp=drive_link" 
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="inline-flex items-center justify-center rounded-md bg-accent p-3 shadow-sm hover:opacity-90 transition"
            >
              <ResumeIcon className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/viral-dalal-424827251/" 
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-md bg-secondary p-3 hover:bg-secondary/80 transition"
            >
              <LinkedIn className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Viral0401"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-md bg-secondary p-3 hover:bg-secondary/80 transition"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-end lg:min-h-[35rem]">
          {/* Enlarged image with rounded corners */}
          <div className="relative size-64 sm:size-72 md:size-[22rem] lg:size-[28rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 28rem, (min-width: 768px) 22rem, (min-width: 640px) 18rem, 16rem"
              alt="Viral Dalal - Full Stack Developer"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

  export default Hero
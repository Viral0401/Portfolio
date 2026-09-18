'use client'

import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import { GithubIcon, LinkedIn, ResumeIcon } from '@/utils/icons'
import { SiGooglescholar } from 'react-icons/si'

const heroRoles = [
  'Software Engineer',
  'AI Engineer',
  'Full Stack Developer',
  'Data Scientist',
]

const Hero = () => {
  const role = useRoleSwitcher({
    roles: heroRoles,
  })

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--b)_1px,transparent_1px),linear-gradient(to_bottom,var(--b)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12]" />
      <div className="pointer-events-none absolute -right-24 top-1/4 size-72 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-64 rounded-full bg-rose-400/5 blur-[100px]" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-14 lg:min-h-[calc(100svh-4rem)]">
        <div className="min-w-0 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 text-xs text-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Seeking 2027 full-time opportunities
          </div>
          <h1>
            <span className="hero-gradient block max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-[2.75rem] lg:text-5xl">Building intelligent systems that matter.</span>
            <span className="mt-3 block bg-gradient-to-r from-accent via-cyan-300 to-violet-400 bg-clip-text text-base text-transparent sm:text-lg">Viral Dalal · {role}</span>
          </h1>

          <p className="text-primary-content mt-5 max-w-xl text-sm leading-6 [overflow-wrap:anywhere] sm:text-[0.95rem] sm:leading-7">
            A Master's student in Computer Engineering at NYU building scalable AI, data, and software systems for real-world problems. After winning the Morgan Stanley Code to Give USA 2026 hackathon, I joined Adobe as a Software Engineering Intern on the Journey Optimizer B2B Platform Engineering team. I'm now seeking 2027 full-time opportunities and remain open to research collaborations.
          </p>

          {/* icon-only action buttons */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1HJ5NQvslD8Wq4aus308rvNqKDBmbcsvR/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="inline-flex items-center justify-center rounded-xl bg-accent p-3 text-primary shadow-lg shadow-accent/10 transition hover:-translate-y-1 hover:shadow-accent/20"
            >
              <ResumeIcon className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/viral-dalal-424827251/" 
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-secondary/70 p-3 text-neutral transition hover:-translate-y-1 hover:border-accent/50"
            >
              <LinkedIn className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Viral0401"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-secondary/70 p-3 text-neutral transition hover:-translate-y-1 hover:border-accent/50"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href="https://scholar.google.com/citations?user=wwizFiEAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
              title="Google Scholar · 8 citations"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-secondary/70 p-3 text-neutral transition hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
            >
              <SiGooglescholar className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-7 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-border bg-secondary/45 backdrop-blur-md">
            {[
              ['8', 'Scholar citations'],
              ['6', 'Featured builds'],
              ['3', 'Core disciplines'],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`p-3 sm:p-4 ${index > 0 ? 'border-l border-border' : ''}`}
              >
                <p className="text-lg font-semibold text-neutral sm:text-xl">{value}</p>
                <p className="mt-1 text-[9px] uppercase leading-4 tracking-wider text-primary-content sm:text-[10px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          {/* Enlarged image with rounded corners */}
          <div className="portrait-float relative aspect-[4/5] w-full max-w-[20rem] overflow-hidden rounded-[2rem] border border-accent/25 bg-secondary p-2 shadow-2xl shadow-violet-950/40 transition duration-500 hover:-translate-y-2 hover:rotate-1 lg:max-w-[21rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 28rem, (min-width: 768px) 22rem, (min-width: 640px) 18rem, 16rem"
              alt="Viral Dalal - Full Stack Developer"
              className="rounded-[1.6rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

  export default Hero

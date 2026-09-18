import { footerLinks } from '@/appData'
import { socials } from '@/appData/personal'
import { ArrowRightIcon } from '@/utils/icons'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/75 backdrop-blur-xl">
      <div className="pointer-events-none absolute -bottom-52 right-0 size-[32rem] rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 top-0 size-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-14 border-b border-border pb-14 md:grid-cols-[1.4fr_0.6fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Have an ambitious idea?
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-neutral sm:text-4xl md:text-5xl">
              Let&apos;s build something
              <span className="bg-gradient-to-r from-accent via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                {' '}
                useful and intelligent.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-primary-content md:text-base">
              Seeking 2027 full-time AI, data, and software engineering roles, research
              collaborations, and conversations about difficult problems worth solving.
            </p>
          </div>

          <a
            href="mailto:viraldalal04@gmail.com"
            className="group flex w-fit items-center gap-4 rounded-full border border-accent/30 bg-accent/5 py-2 pl-5 pr-2 text-sm font-semibold text-neutral transition hover:-translate-y-1 hover:border-accent hover:bg-accent/10 md:justify-self-end"
          >
            Start a conversation
            <span className="grid size-10 place-items-center rounded-full bg-accent text-primary transition group-hover:rotate-[-35deg]">
              <ArrowRightIcon className="size-5" />
            </span>
          </a>
        </div>

        <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr_0.8fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-3 text-neutral">
              <Logo width={34} height={28} />
              <span className="font-semibold">Viral Dalal</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-primary-content">
              Computer Engineering at NYU. Building at the intersection of AI, data, and software.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-tertiary-content">
              Explore
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  className="text-sm text-primary-content transition hover:translate-x-1 hover:text-accent"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm text-primary-content transition hover:translate-x-1 hover:text-accent"
              >
                Contact
              </a>
            </div>
          </nav>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-tertiary-content">
              Connect
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((item, index) => (
                <a
                  href={item.href}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Social profile ${index + 1}`}
                  className="grid size-10 place-items-center rounded-xl border border-border bg-primary/50 text-primary-content transition hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-7 text-xs text-primary-content sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Viral Dalal. Built with intention.</p>
          <a href="#" className="group inline-flex items-center gap-2 transition hover:text-accent">
            Back to top
            <span className="transition group-hover:-translate-y-1">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

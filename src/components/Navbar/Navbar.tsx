'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BurgerIcon, CloseIcon } from '../../utils/icons'
import Logo from './Logo'

const navItems = [
  { label: 'Home', href: '#top', section: 'top' },
  { label: 'Education', href: '#education', section: 'education' },
  { label: 'Experience', href: '#services', section: 'services' },
  { label: 'Projects', href: '#projects', section: 'projects' },
  { label: 'Research', href: '#research', section: 'research' },
  { label: 'Skills', href: '#skills', section: 'skills' },
  { label: 'Contact', href: '#contact', section: 'contact' },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = navItems
      .map((item) => document.getElementById(item.section))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visibleEntry) setActiveSection(visibleEntry.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav className="relative z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex h-[4.25rem] max-w-[1240px] items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${
          scrolled
            ? 'border-border bg-primary/85 shadow-2xl shadow-black/25 backdrop-blur-2xl'
            : 'border-border/60 bg-primary/55 backdrop-blur-xl'
        }`}
      >
        <Link href="#top" className="group flex items-center gap-3" onClick={() => setIsVisible(false)}>
          <Logo className="transition duration-300 group-hover:-rotate-6 group-hover:scale-105" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight text-neutral">Viral Dalal</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-primary-content">
              AI · Data · Systems
            </p>
          </div>
        </Link>

        <div className="hidden items-center lg:flex">
          <div className="flex items-center rounded-xl border border-border/70 bg-secondary/55 p-1">
            {navItems.map(({ label, href, section }) => (
              <Link
                key={href}
                href={href}
                className={`relative rounded-lg px-3 py-2 text-xs transition duration-200 ${
                  activeSection === section
                    ? 'bg-neutral/[0.07] text-neutral shadow-sm'
                    : 'text-primary-content hover:text-neutral'
                }`}
              >
                {label}
                {activeSection === section && (
                  <span className="absolute inset-x-3 -bottom-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-300">
              Available
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(!isVisible)}
          aria-label={isVisible ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isVisible}
          className="grid size-10 place-items-center rounded-xl border border-border bg-secondary/60 text-primary-content transition hover:border-accent/40 hover:text-neutral lg:hidden"
        >
          {isVisible ? <CloseIcon className="size-4" /> : <BurgerIcon className="size-5" />}
        </button>
      </div>

      <div
        className={`absolute left-3 right-3 top-[5.1rem] origin-top overflow-hidden rounded-2xl border border-border bg-primary/95 shadow-2xl shadow-black/40 backdrop-blur-2xl transition duration-300 sm:left-5 sm:right-5 lg:hidden ${
          isVisible ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-95 opacity-0'
        }`}
      >
        <div className="grid p-2">
          {navItems.map(({ label, href, section }, index) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsVisible(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition ${
                activeSection === section
                  ? 'bg-accent/10 text-accent'
                  : 'text-primary-content hover:bg-secondary hover:text-neutral'
              }`}
            >
              <span>{label}</span>
              <span className="text-[10px] opacity-50">{String(index + 1).padStart(2, '0')}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t border-border px-5 py-4 text-[10px] uppercase tracking-wider text-emerald-300">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Seeking 2027 full-time opportunities
        </div>
      </div>
    </nav>
  )
}

export default Navbar

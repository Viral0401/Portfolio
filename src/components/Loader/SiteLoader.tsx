'use client'

import { useEffect, useState } from 'react'

const SiteLoader = () => {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasLoaded = sessionStorage.getItem('portfolio-loader-v2')

    if (hasLoaded || reducedMotion) {
      setVisible(false)
      return
    }

    document.body.style.overflow = 'hidden'
    const exitTimer = window.setTimeout(() => setLeaving(true), 1150)
    const removeTimer = window.setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
      sessionStorage.setItem('portfolio-loader-v2', 'true')
    }, 1850)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!visible) return null

  return (
    <div
      role="status"
      aria-label="Opening Viral Dalal portfolio"
      className={`site-loader fixed inset-0 z-[200] overflow-hidden ${leaving ? 'is-leaving' : ''}`}
    >
      <div className="loader-panel loader-panel-top" />
      <div className="loader-panel loader-panel-bottom" />

      <div className="loader-grid pointer-events-none absolute inset-0" />

      <div className="loader-identity absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-5xl">
          <div className="loader-kicker mb-5 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-primary-content sm:text-[10px]">
            <span>Portfolio · 2026</span>
            <span className="text-accent">AI × Data × Software</span>
          </div>

          <div className="overflow-hidden">
            <p className="loader-name loader-name-first text-[clamp(3.4rem,12vw,9rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-neutral">
              VIRAL
            </p>
          </div>

          <div className="my-4 h-px overflow-hidden bg-border">
            <span className="loader-line block h-full bg-gradient-to-r from-accent via-cyan-300 to-violet-400" />
          </div>

          <div className="overflow-hidden text-right">
            <p className="loader-name loader-name-second text-[clamp(3.4rem,12vw,9rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-transparent [-webkit-text-stroke:1px_var(--pc)]">
              DALAL
            </p>
          </div>

          <div className="loader-kicker mt-6 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-primary-content sm:text-[10px]">
            <span>New York</span>
            <span>Scroll to explore ↓</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteLoader

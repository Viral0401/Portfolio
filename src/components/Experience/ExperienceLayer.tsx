'use client'

import { useEffect, useRef, useState } from 'react'
import { CloseIcon, MsgIcon } from '@/utils/icons'

const prompts = [
  {
    label: 'What does Viral build?',
    answer:
      'Viral builds production AI, data, and software systems—from RAG platforms and multi-agent research to full-stack healthcare and sustainability products.',
  },
  {
    label: 'Is Viral available?',
    answer:
      'Viral is interning with Adobe in Summer 2026 and is currently seeking 2027 full-time software engineering, AI, and data roles, along with research collaborations.',
  },
  {
    label: 'Show me the best work',
    answer:
      'Start with the Morgan Stanley Code to Give winning volunteer platform and Smart File Tagger, then explore the peer-review and trustworthy-AI work in Research.',
  },
  {
    label: 'How can I reach him?',
    answer:
      'Email viraldalal04@gmail.com, use the contact form, or connect through LinkedIn from the hero section.',
  },
]

const ExperienceLayer = () => {
  const glowRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [answer, setAnswer] = useState(
    'Hi—I’m Viral’s interactive portfolio guide. Pick a question and I’ll point you in the right direction.',
  )

  useEffect(() => {
    const glow = glowRef.current
    const finePointer = window.matchMedia('(pointer: fine)').matches
    let pointerFrame = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY

    const animateGlow = () => {
      currentX += (targetX - currentX) * 0.14
      currentY += (targetY - currentY) * 0.14
      if (glow) {
        glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      }
      pointerFrame = requestAnimationFrame(animateGlow)
    }

    const moveGlow = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      if (glow) glow.dataset.visible = 'true'
    }

    const hideGlow = () => {
      if (glow) glow.dataset.visible = 'false'
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    const sections = document.querySelectorAll('main section')
    sections.forEach((section, index) => {
      if (index > 0) {
        section.classList.add('scroll-reveal')
        revealObserver.observe(section)
      }
    })

    const tiltCards = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.project-grid > article, .experience-grid > article, .research-grid > article',
      ),
    )

    const tiltListeners = tiltCards.map((card) => {
      card.classList.add('interactive-tilt')

      const move = (event: PointerEvent) => {
        if (!finePointer) return
        const bounds = card.getBoundingClientRect()
        const x = event.clientX - bounds.left
        const y = event.clientY - bounds.top
        const rotateX = ((y / bounds.height) - 0.5) * -4
        const rotateY = ((x / bounds.width) - 0.5) * 4

        card.style.setProperty('--pointer-x', `${x}px`)
        card.style.setProperty('--pointer-y', `${y}px`)
        card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
      }

      const leave = () => {
        card.style.transform = ''
      }

      card.addEventListener('pointermove', move)
      card.addEventListener('pointerleave', leave)
      return { card, move, leave }
    })

    if (finePointer) {
      animateGlow()
      window.addEventListener('pointermove', moveGlow, { passive: true })
      document.documentElement.addEventListener('mouseleave', hideGlow)
    }

    return () => {
      cancelAnimationFrame(pointerFrame)
      window.removeEventListener('pointermove', moveGlow)
      document.documentElement.removeEventListener('mouseleave', hideGlow)
      tiltListeners.forEach(({ card, move, leave }) => {
        card.removeEventListener('pointermove', move)
        card.removeEventListener('pointerleave', leave)
      })
      revealObserver.disconnect()
    }
  }, [])

  return (
    <>
      <div className="fixed left-0 top-0 z-[100] h-0.5 w-full origin-left bg-gradient-to-r from-accent via-violet-400 to-rose-400 [animation:scroll-progress_linear] [animation-timeline:scroll()]" />

      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-glow pointer-events-none fixed left-0 top-0 z-0 hidden size-[24rem] rounded-full opacity-0 transition-opacity duration-300 data-[visible=true]:opacity-100 md:block"
      />

      <div className="fixed bottom-5 left-5 z-50 md:bottom-10 md:left-10">
        {open && (
          <div className="animate-fade-up mb-3 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-border bg-secondary/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="text-neutral text-sm font-semibold">Ask Viral</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-accent">
                  Interactive portfolio guide
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close portfolio guide"
                className="rounded-lg border border-border p-2 text-primary-content transition hover:border-accent/50 hover:text-neutral"
              >
                <CloseIcon className="size-3" />
              </button>
            </div>

            <div className="p-5">
              <div className="rounded-xl border border-border bg-primary/60 p-4">
                <p className="text-primary-content text-sm leading-6">{answer}</p>
              </div>
              <div className="mt-4 grid gap-2">
                {prompts.map((prompt) => (
                  <button
                    key={prompt.label}
                    onClick={() => setAnswer(prompt.answer)}
                    className="rounded-lg border border-border px-3 py-2.5 text-left text-xs text-secondary-content transition hover:translate-x-1 hover:border-accent/50 hover:text-accent"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-label="Open portfolio guide"
          className="group flex items-center gap-3 rounded-full border border-accent/30 bg-secondary/90 p-2.5 text-neutral shadow-xl shadow-black/25 backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/70 md:pr-4"
        >
          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-accent via-cyan-400 to-violet-500 text-primary">
            <MsgIcon className="size-5" />
          </span>
          <span className="hidden text-xs font-semibold md:block">Ask about me</span>
          <span className="absolute left-10 top-2 size-2 rounded-full border-2 border-secondary bg-emerald-400" />
        </button>
      </div>
    </>
  )
}

export default ExperienceLayer

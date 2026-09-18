'use client'

import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -1000, y: -1000 }
    let points: Point[] = []
    let frame = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2)
      const bounds = canvas.getBoundingClientRect()
      canvas.width = bounds.width * ratio
      canvas.height = bounds.height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = Math.min(65, Math.max(30, Math.floor(bounds.width / 22)))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * bounds.width,
        y: Math.random() * bounds.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 1.6 + 0.6,
      }))
    }

    const movePointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
    }

    const draw = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      context.clearRect(0, 0, width, height)

      points.forEach((point, index) => {
        if (!reducedMotion) {
          point.x += point.vx
          point.y += point.vy
        }

        if (point.x < 0 || point.x > width) point.vx *= -1
        if (point.y < 0 || point.y > height) point.vy *= -1

        const pointerDistance = Math.hypot(point.x - pointer.x, point.y - pointer.y)
        if (pointerDistance < 150 && pointerDistance > 0 && !reducedMotion) {
          point.x += ((point.x - pointer.x) / pointerDistance) * 0.35
          point.y += ((point.y - pointer.y) / pointerDistance) * 0.35
        }

        context.beginPath()
        context.fillStyle = index % 5 === 0 ? 'rgba(167,139,250,.7)' : 'rgba(94,234,212,.55)'
        context.arc(point.x, point.y, point.size, 0, Math.PI * 2)
        context.fill()

        for (let targetIndex = index + 1; targetIndex < points.length; targetIndex += 1) {
          const target = points[targetIndex]
          const distance = Math.hypot(point.x - target.x, point.y - target.y)
          if (distance < 115) {
            context.beginPath()
            context.strokeStyle = `rgba(94,234,212,${0.12 * (1 - distance / 115)})`
            context.lineWidth = 0.7
            context.moveTo(point.x, point.y)
            context.lineTo(target.x, target.y)
            context.stroke()
          }
        }
      })

      frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', movePointer, { passive: true })
    window.addEventListener('pointerleave', () => {
      pointer.x = -1000
      pointer.y = -1000
    })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', movePointer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 size-full opacity-55"
    />
  )
}

export default NeuralBackground

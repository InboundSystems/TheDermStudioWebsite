'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  /** Seconds to delay the transition start */
  delay?: number
  /** Seconds for the transition duration */
  duration?: number
  /** Play once on mount instead of waiting for the element to scroll into view */
  immediate?: boolean
  /** Initial horizontal offset in px */
  x?: number
  /** Initial vertical offset in px (ignored if x is set) */
  y?: number
  /** Initial scale */
  scale?: number
}

/**
 * Lightweight replacement for framer-motion's fadeUp/scrollFadeUp patterns.
 * Animates opacity + transform via CSS once the element mounts (immediate)
 * or scrolls into view (IntersectionObserver, fires once).
 */
export function Reveal({
  children,
  className = '',
  style,
  delay = 0,
  duration = 0.7,
  immediate = false,
  x = 0,
  y = x === 0 ? 30 : 0,
  scale = 1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ease-out ${className}`}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0) scale(1)' : `translate(${x}px, ${y}px) scale(${scale})`,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

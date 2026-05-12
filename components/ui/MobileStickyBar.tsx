'use client'

import Link from 'next/link'
import { Phone, CalendarDays, Mail } from 'lucide-react'

export function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex h-14"
      style={{ backgroundColor: 'var(--color-espresso)' }}
      role="navigation"
      aria-label="Quick contact actions"
    >
      {/* Call */}
      <a
        href="tel:+61414185007"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 text-white transition-opacity active:opacity-70"
        style={{ borderRight: '1px solid var(--color-charcoal)' }}
        aria-label="Call The Derm Studio"
      >
        <Phone className="w-4 h-4" />
        <span className="text-[10px] font-medium tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Call
        </span>
      </a>

      {/* Book */}
      <Link
        href="/book"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 text-white transition-opacity active:opacity-70"
        style={{ borderRight: '1px solid var(--color-charcoal)' }}
        aria-label="Book a consultation"
      >
        <CalendarDays className="w-4 h-4" />
        <span className="text-[10px] font-medium tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Book
        </span>
      </Link>

      {/* Email */}
      <a
        href="mailto:thedermstudio.contact@gmail.com"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 text-white transition-opacity active:opacity-70"
        aria-label="Email The Derm Studio"
      >
        <Mail className="w-4 h-4" />
        <span className="text-[10px] font-medium tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Email
        </span>
      </a>
    </div>
  )
}

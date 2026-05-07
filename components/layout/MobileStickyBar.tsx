'use client'

import Link from 'next/link'

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-4 py-3 shadow-lg" style={{ backgroundColor: 'var(--color-rose)' }}>
      <div>
        <p className="text-white text-sm font-semibold leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Book a Consultation
        </p>
        <p className="text-white/75 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Redcliffe&apos;s Skin Specialists
        </p>
      </div>
      <Link
        href="/contact"
        className="bg-white text-sm font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-90"
        style={{ color: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
      >
        Book Now
      </Link>
    </div>
  )
}

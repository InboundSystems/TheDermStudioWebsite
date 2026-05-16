'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const treatments = [
  { name: 'Facials', href: '/services/facials-redcliffe' },
  { name: 'Chemical Peels', href: '/services/chemical-peel-redcliffe' },
  { name: 'LED Light Therapy', href: '/services/led-light-therapy-redcliffe' },
  { name: 'Skin Needling', href: '/services/skin-needling-redcliffe' },
  { name: 'Lira Clinical', href: '/lira-clinical' },
  { name: 'All Treatments', href: '/services' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Treatments', href: '#', dropdown: true },
  { name: 'Memberships', href: '/memberships' },
  { name: 'Lira Clinical', href: '/lira-clinical' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  const textColor = scrolled ? '#2C1F1F' : '#FFFFFF'
  const subtextColor = scrolled ? '#5A4848' : 'rgba(255,255,255,0.85)'

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled ? '#FDFAF8' : 'rgba(0,0,0,0)',
          boxShadow: scrolled ? '0 1px 20px rgba(44,31,31,0.08)' : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' as const }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                animate={{ filter: scrolled ? 'brightness(0)' : 'brightness(1)' }}
                transition={{ duration: 0.3, ease: 'easeInOut' as const }}
              >
                <Image
                  src="/logo.png"
                  alt="The Derm Studio — Advanced Skin & Aesthetics"
                  width={130}
                  height={52}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <motion.button
                      className="flex items-center gap-1 text-sm font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      animate={{ color: textColor }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-lg overflow-hidden"
                          style={{ border: '1px solid var(--color-cream-dark)' }}
                        >
                          {treatments.map((t) => (
                            <Link
                              key={t.name}
                              href={t.href}
                              className="block px-4 py-2.5 text-sm transition-colors"
                              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-cream)'
                                e.currentTarget.style.color = 'var(--color-rose)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = ''
                                e.currentTarget.style.color = 'var(--color-charcoal)'
                              }}
                            >
                              {t.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.name} href={link.href}>
                    <motion.span
                      className="text-sm font-medium transition-opacity hover:opacity-70 cursor-pointer"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      animate={{ color: textColor }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                )
              )}
            </div>

            {/* CTA + Phone */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="tel:+61414185007"
                className="text-xs"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                animate={{ color: subtextColor }}
                transition={{ duration: 0.3 }}
              >
                +61 414 185 007
              </motion.a>
              <Link
                href="/book"
                className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-colors"
                style={{
                  backgroundColor: 'var(--color-rose)',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-rose-dark)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-rose)' }}
              >
                Book a Consultation
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <motion.div animate={{ color: textColor }} transition={{ duration: 0.3 }}>
                {mobileOpen
                  ? <X className="w-6 h-6" />
                  : <Menu className="w-6 h-6" />
                }
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 px-6 pb-8 flex flex-col overflow-y-auto"
            style={{ backgroundColor: 'var(--color-cream)' }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <p
                        className="text-lg font-bold mb-3"
                        style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                      >
                        Treatments
                      </p>
                      <div className="pl-4 flex flex-col gap-3">
                        {treatments.map((t) => (
                          <Link
                            key={t.name}
                            href={t.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-base transition-colors"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                          >
                            {t.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-bold block transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-white font-semibold text-center py-4 rounded-full transition-colors"
                style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

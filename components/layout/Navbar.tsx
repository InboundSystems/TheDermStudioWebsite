'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const treatmentCategories = [
  { name: 'Facials', href: '/services/facials-redcliffe' },
  { name: 'Skin Treatments', href: '/services/skin-treatments-redcliffe' },
  { name: 'Skin Clinic Redcliffe Peninsula', href: '/service-areas' },
]

const treatments = [
  { name: 'Corrective Facial', href: '/services/corrective-facial-redcliffe' },
  { name: 'Hybrid Facial', href: '/services/hybrid-facial-redcliffe' },
  { name: 'Dermaplaning Facial', href: '/services/dermaplaning-facial-redcliffe' },
  { name: 'Level 1 Corrective Peel', href: '/services/level-1-corrective-peel-redcliffe' },
  { name: 'Level 2 Corrective Peel', href: '/services/level-2-corrective-peel-redcliffe' },
  { name: 'Level 3 Corrective Peel', href: '/services/level-3-corrective-peel-redcliffe' },
  { name: 'Skin Needling with NCTF', href: '/services/skin-needling-nctf-redcliffe' },
  { name: 'Skin Needling with Exosomes', href: '/services/skin-needling-exosomes-redcliffe' },
  { name: 'Korean Lash Lift & Tint', href: '/services/korean-lash-lift-tint-redcliffe' },
  { name: 'Lira Clinical', href: '/lira-clinical' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Treatments', href: '/treatments', dropdown: true },
  { name: 'Packages', href: '/memberships' },
  { name: 'Lira Clinical', href: '/lira-clinical' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled ? '#2C1F1F' : '#FFFFFF'
  const subtextColor = scrolled ? '#5A4848' : 'rgba(255,255,255,0.85)'

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ease-in-out"
        style={{
          backgroundColor: scrolled ? '#FDFAF8' : 'rgba(0,0,0,0)',
          boxShadow: scrolled ? '0 1px 20px rgba(44,31,31,0.08)' : '0 0 0 rgba(0,0,0,0)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div
                className="transition-[filter] duration-300 ease-in-out"
                style={{ filter: scrolled ? 'brightness(0)' : 'brightness(1)' }}
              >
                <Image
                  src="/logo.png"
                  alt="The Derm Studio — Advanced Skin & Aesthetics"
                  width={130}
                  height={52}
                  className="object-contain"
                  priority
                />
              </div>
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
                    <Link href={link.href} className="flex items-center gap-1">
                      <span
                        className="text-sm font-medium transition-colors duration-300"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: textColor }}
                      >
                        {link.name}
                      </span>
                      <ChevronDown className="w-3.5 h-3.5" style={{ color: textColor }} />
                    </Link>
                    <div
                      className={`absolute top-full left-0 mt-2 w-[38rem] bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-2 transition-[opacity,transform] duration-150 ease-out ${
                        dropdownOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                      style={{ border: '1px solid var(--color-cream-dark)' }}
                    >
                      <div className="py-3" style={{ borderRight: '1px solid var(--color-cream-dark)' }}>
                        <p
                          className="px-4 pb-2 text-xs font-semibold uppercase tracking-wide"
                          style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
                        >
                          Categories
                        </p>
                        {treatmentCategories.map((c) => (
                          <Link
                            key={c.name}
                            href={c.href}
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
                            {c.name}
                          </Link>
                        ))}
                      </div>
                      <div className="py-3">
                        <p
                          className="px-4 pb-2 text-xs font-semibold uppercase tracking-wide"
                          style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
                        >
                          Treatments
                        </p>
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
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.name} href={link.href}>
                    <span
                      className="text-sm font-medium transition-colors duration-300 hover:opacity-70 cursor-pointer"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: textColor }}
                    >
                      {link.name}
                    </span>
                  </Link>
                )
              )}
            </div>

            {/* CTA + Phone */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+61414185007"
                className="text-xs transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif", color: subtextColor }}
              >
                +61 414 185 007
              </a>
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
              <div className="transition-colors duration-300" style={{ color: textColor }}>
                {mobileOpen
                  ? <X className="w-6 h-6" />
                  : <Menu className="w-6 h-6" />
                }
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 pt-20 px-6 pb-8 flex flex-col overflow-y-auto transition-[opacity,transform] duration-300 ease-in-out ${
          mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--color-cream)' }}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-bold mb-3 block"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    Treatments
                  </Link>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2 pl-4"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
                  >
                    Categories
                  </p>
                  <div className="pl-4 flex flex-col gap-3 mb-4">
                    {treatmentCategories.map((c) => (
                      <Link
                        key={c.name}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-base transition-colors"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2 pl-4"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
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
      </div>
    </>
  )
}

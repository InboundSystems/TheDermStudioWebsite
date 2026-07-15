'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const treatmentLinks = [
  { name: 'Corrective Facial', href: '/services/corrective-facial-redcliffe' },
  { name: 'Hybrid Facial', href: '/services/hybrid-facial-redcliffe' },
  { name: 'Dermaplaning Facial', href: '/services/dermaplaning-facial-redcliffe' },
  { name: 'Corrective Peels', href: '/services#corrective-peels' },
  { name: 'Skin Needling', href: '/services/skin-needling-nctf-redcliffe' },
  { name: 'Korean Lash Lift & Tint', href: '/services/korean-lash-lift-tint-redcliffe' },
  { name: 'Lira Clinical Skincare', href: '/lira-clinical' },
  { name: 'Packages', href: '/memberships' },
  { name: 'FAQ', href: '/faq' },
]

const serviceAreas = [
  { name: 'Redcliffe', href: '/skin-clinic-redcliffe' },
  { name: 'Scarborough', href: '/skin-clinic-scarborough' },
  { name: 'Clontarf', href: '/skin-clinic-clontarf' },
  { name: 'Kippa-Ring', href: '/skin-clinic-kippa-ring' },
  { name: 'Brighton', href: '/skin-clinic-brighton' },
  { name: 'Newport', href: '/skin-clinic-newport' },
  { name: 'Deception Bay', href: '/skin-clinic-deception-bay' },
  { name: 'Mango Hill', href: '/skin-clinic-mango-hill' },
  { name: 'North Lakes', href: '/skin-clinic-north-lakes' },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-espresso)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Accent divider */}
        <div className="w-16 h-0.5 mb-12" style={{ backgroundColor: 'var(--color-rose)' }} />

        {/* Four-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/logo.png"
                alt="The Derm Studio — Advanced Skin & Aesthetics"
                width={130}
                height={52}
                className="object-contain"
              />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
            >
              Authorised Lira Clinical stockist.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/thedermstudio_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Derm Studio on Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'var(--color-rose)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose-dark)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose)' }}
              >
                <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/100089228680337/photos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Derm Studio on Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'var(--color-rose)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose-dark)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose)' }}
              >
                <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Treatments */}
          <div>
            <h4
              className="text-base font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Treatments
            </h4>
            <ul className="flex flex-col gap-2.5">
              {treatmentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-cream)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-blush)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service Areas */}
          <div>
            <h4
              className="text-base font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Areas We Serve
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-sm transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-cream)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-blush)' }}
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact & Hours */}
          <div>
            <h4
              className="text-base font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-rose)' }} />
                <address
                  className="text-sm not-italic leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
                >
                  1/93 Marine Parade,<br />
                  Redcliffe QLD 4020
                </address>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--color-rose)' }} />
                <a
                  href="tel:+61414185007"
                  className="text-sm transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
                >
                  +61 414 185 007
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--color-rose)' }} />
                <a
                  href="mailto:thedermstudio.contact@gmail.com"
                  className="text-sm transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
                >
                  thedermstudio.contact@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-rose)' }} />
                <div
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
                >
                  {/* TODO: Confirm hours with client */}
                  Mon–Fri: 9:00am – 5:00pm<br />
                  Sat: 9:00am – 2:00pm
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block text-center text-sm font-semibold text-white px-5 py-2.5 rounded-full mt-2 transition-colors"
                style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose-dark)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose)' }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Rose accent divider */}
        <div className="w-full h-px mb-8" style={{ backgroundColor: 'rgba(196,152,152,0.25)' }} />

        {/* Footer Bottom Bar */}
        <div className="flex flex-col gap-3">
          <p
            className="text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(232,181,176,0.6)' }}
          >
            &copy; 2026 The Derm Studio. All rights reserved.
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(232,181,176,0.5)' }}
          >
            The Derm Studio | 1/93 Marine Parade, Redcliffe QLD 4020 | +61 414 185 007
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(232,181,176,0.5)' }}
          >
            Proudly serving clients from Redcliffe, Scarborough, Clontarf, Kippa-Ring, Brighton, Newport, Deception Bay, Mango Hill and across the Moreton Bay Peninsula.
          </p>
        </div>
      </div>
    </footer>
  )
}

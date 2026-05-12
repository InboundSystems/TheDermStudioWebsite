'use client'

import Link from 'next/link'
import { Globe, MapPin, Phone, Mail, Clock } from 'lucide-react'

const treatmentLinks = [
  { name: 'Corrective Facial', href: '/services/corrective-facial-redcliffe' },
  { name: 'Hybrid Facial', href: '/services/hybrid-facial-redcliffe' },
  { name: 'Dermaplaning Facial', href: '/services/dermaplaning-facial-redcliffe' },
  { name: 'Corrective Peels', href: '/services#corrective-peels' },
  { name: 'Skin Needling', href: '/services/skin-needling-nctf-redcliffe' },
  { name: 'Korean Lash Lift & Tint', href: '/services/korean-lash-lift-tint-redcliffe' },
  { name: 'Lira Clinical Skincare', href: '/lira-clinical' },
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
              <h3
                className="text-xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Derm Studio
              </h3>
              <p
                className="text-sm italic mt-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
              >
                Advanced Skin &amp; Aesthetics
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
            >
              Redcliffe&apos;s sole Lira Clinical stockist.
            </p>
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
              {/* TODO: Replace Globe with Instagram SVG once added to project */}
              <Globe className="w-4 h-4 text-white" />
            </a>
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
                  Shop 10, Bluewater Square,<br />
                  20 Anzac Avenue,<br />
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
            The Derm Studio | Shop 10, Bluewater Square, 20 Anzac Avenue, Redcliffe QLD 4020 | +61 414 185 007
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

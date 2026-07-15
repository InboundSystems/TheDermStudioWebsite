import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { AreaServedSchema } from '@/components/seo/AreaServedSchema'

export const metadata: Metadata = {
  title: 'Skin Clinic Redcliffe Peninsula | The Derm Studio',
  description:
    "The Derm Studio is a specialist skin clinic on the Redcliffe Peninsula, serving Scarborough, Clontarf, Kippa-Ring, Brighton and surrounding suburbs from 1/93 Marine Parade, Redcliffe.",
  alternates: { canonical: 'https://thedermstudio.com.au/service-areas' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Skin Clinic Redcliffe Peninsula', href: '/service-areas' },
]

const suburbs = [
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

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <AreaServedSchema areaName="Redcliffe Peninsula, Moreton Bay, QLD" url="https://thedermstudio.com.au/service-areas" />
      <main>
        {/* Hero */}
        <section
          className="relative py-28 md:py-36"
          style={{ background: 'linear-gradient(135deg, var(--color-espresso) 0%, #4a2f2f 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={breadcrumbs.map((b, i) => ({
                label: b.name,
                href: i < breadcrumbs.length - 1 ? b.href : undefined,
              }))}
              light
            />
            <h1
              className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Skin Clinic Redcliffe Peninsula | The Derm Studio
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Redcliffe Peninsula&rsquo;s Specialist Skin Clinic
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              The Derm Studio is more than a Redcliffe suburb clinic — our home at 1/93 Marine Parade sits centrally
              on the Redcliffe Peninsula, making us an easy, familiar drive from right across the region. Clients
              travel to us from Scarborough, Clontarf, Kippa-Ring, Brighton and further afield across Moreton Bay
              because the peninsula has never had a clinic offering this depth of clinical skin treatment under one
              roof — corrective facials, Lira Clinical peels, advanced skin needling and lash treatments, all
              delivered by qualified dermal therapists. Whatever suburb you call home, Marine Parade is a short drive
              away, with parking close by and appointment times built around how the peninsula actually lives and
              works.
            </p>
            <p
              className="mt-6 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              Being local means understanding what peninsula skin actually deals with — more sun exposure, more
              salt air, and a lifestyle spent largely outdoors along the bay. Our treatment plans are built with
              that context in mind, from the pigmentation and sun damage we see walking through the door to the
              practical reality that most clients are fitting an appointment around work, school pick-ups or a
              weekend at the beach. Rather than a generic city-clinic protocol, every plan at The Derm Studio starts
              with a proper skin consultation and is adjusted to suit the way our local clients actually live.
            </p>
          </div>
        </section>

        {/* Suburbs */}
        <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Areas We Serve Across the Peninsula
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              The Derm Studio proudly welcomes clients from across the Redcliffe Peninsula and greater Moreton Bay
              region. From the beachside suburbs closest to our Marine Parade clinic to the growing communities
              further inland toward North Lakes, our clients tell us the same thing — there simply hasn&apos;t been
              a local option offering this level of clinical skin treatment before. We see regulars from every one
              of the suburbs below — select yours to see travel time and popular treatments in your area:
            </p>
            <div className="flex flex-wrap gap-3">
              {suburbs.map((suburb) => (
                <Link
                  key={suburb.name}
                  href={suburb.href}
                  className="inline-block text-sm font-semibold px-5 py-2.5 rounded-full transition-colors hover:shadow-md"
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-cream-dark)',
                    color: 'var(--color-espresso)',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {suburb.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Explore Our Treatments
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="text-sm font-semibold px-6 py-3 rounded-full text-white transition-colors"
                style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
              >
                All Treatments
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-cream-dark)', color: 'var(--color-espresso)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: 'var(--color-espresso)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Book a Consultation — Serving the Whole Redcliffe Peninsula
            </h2>
            <p className="text-base mb-8" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}>
              1/93 Marine Parade, Redcliffe QLD 4020
            </p>
            <Link
              href="/book"
              className="inline-block font-semibold text-white px-8 py-4 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

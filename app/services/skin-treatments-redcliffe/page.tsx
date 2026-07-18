import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'

export const metadata: Metadata = {
  title: 'Skin Treatments Redcliffe | Corrective Peels & Skin Needling — The Derm Studio',
  description:
    'Advanced skin treatments in Redcliffe — Level 1-3 corrective peels and skin needling with NCTF or exosomes at The Derm Studio, Marine Parade. From $199.',
  alternates: { canonical: 'https://www.thedermstudio.com.au/services/skin-treatments-redcliffe' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Skin Treatments Redcliffe', href: '/services/skin-treatments-redcliffe' },
]

const treatments = [
  {
    name: 'Level 1 Corrective Peel',
    price: '$199',
    duration: '45 mins',
    href: '/services/level-1-corrective-peel-redcliffe',
    blurb:
      'An entry-level Lira Clinical peel that brightens, hydrates and corrects dullness, mild pigmentation and uneven tone. No pre-treatment preparation required, with minimal to no downtime — an accessible first step into professional peel therapy.',
  },
  {
    name: 'Level 2 Corrective Peel',
    price: '$220',
    duration: '45 mins',
    href: '/services/level-2-corrective-peel-redcliffe',
    blurb:
      'A deeper Lira Clinical peel for hyperpigmentation, fine lines and acne scarring that hasn’t responded to lighter treatment. Requires home-care preparation beforehand, with results that continue developing for weeks after each session.',
  },
  {
    name: 'Level 3 Corrective Peel',
    price: '$250',
    duration: '45 mins',
    href: '/services/level-3-corrective-peel-redcliffe',
    blurb:
      'Our most intensive Lira Clinical peel, for complex concerns like melasma, active acne and significant pigmentation. Requires both home-care preparation and prior conditioning treatments — recommended in cooler months to minimise UV exposure during recovery.',
  },
  {
    name: 'Skin Needling with NCTF',
    price: '$349',
    duration: '45 mins',
    href: '/services/skin-needling-nctf-redcliffe',
    blurb:
      'Collagen induction therapy infused with NCTF — 54 active ingredients including vitamins, amino acids and hyaluronic acid — delivered deep into the skin for brighter, firmer, more hydrated results.',
  },
  {
    name: 'Skin Needling with Exosomes',
    price: '$449',
    duration: '45 mins',
    href: '/services/skin-needling-exosomes-redcliffe',
    blurb:
      'Our most advanced needling treatment, pairing micro-needling with exosome technology to supercharge the skin’s natural repair response — ideal for significant scarring, textural concerns and maximum regeneration.',
  },
]

export default function SkinTreatmentsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        serviceName="Skin Treatments"
        description="Advanced clinical skin treatments at The Derm Studio, Marine Parade, Redcliffe — Level 1-3 Lira Clinical corrective peels and skin needling with NCTF or exosomes, delivered by qualified dermal therapists."
        url="https://www.thedermstudio.com.au/services/skin-treatments-redcliffe"
      />
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
              Skin Treatments Redcliffe | Advanced Clinical Treatments
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
              Advanced Skin Treatments at The Derm Studio
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              Where our facials are built around relaxation as much as results, this is our clinical, results-driven
              tier — treatments designed for clients who want to make meaningful, measurable progress on a specific
              skin concern. Corrective peels and skin needling work beneath the surface, correcting pigmentation,
              scarring, fine lines and texture at a depth that facials and home care alone cannot reach. Every
              treatment in this group is performed by a qualified dermal therapist at our Marine Parade clinic,
              using professional-grade Lira Clinical formulations and equipment, with a treatment plan built around
              your skin’s specific goals rather than a one-size-fits-all protocol.
            </p>
          </div>
        </section>

        {/* Treatment Cards */}
        <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.map((t) => (
                <Link
                  key={t.name}
                  href={t.href}
                  className="group block rounded-3xl p-7 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
                >
                  <div className="flex items-baseline gap-2 mb-4">
                    <span
                      className="text-lg font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                    >
                      {t.price}
                    </span>
                    <span className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}>
                      · {t.duration}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {t.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {t.blurb}
                  </p>
                  <div className="flex items-center gap-1.5" style={{ color: 'var(--color-rose)' }}>
                    <span className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      View treatment
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-cream-dark)', color: 'var(--color-espresso)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Home
            </Link>
            <Link
              href="/treatments"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-cream-dark)', color: 'var(--color-espresso)', fontFamily: "'DM Sans', sans-serif" }}
            >
              All Treatments
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-cream-dark)', color: 'var(--color-espresso)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Guidance */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Which Treatment Is Right for You?
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              With corrective peels available across three levels of intensity, and skin needling offered with
              either NCTF or exosome infusion, the right starting point depends on your skin’s current
              condition, your concerns, and how much downtime you can accommodate. Rather than guess, we recommend
              a free skin consultation with one of our qualified dermal therapists — they will assess your skin in
              person and recommend a treatment plan matched to your goals, whether that’s a single session or
              a progressive course spaced over several months.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: 'var(--color-espresso)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Book Your Free Skin Consultation
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

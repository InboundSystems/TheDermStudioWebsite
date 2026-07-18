import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'

export const metadata: Metadata = {
  title: 'Facials Redcliffe | Corrective, Hybrid & Dermaplaning Facials — The Derm Studio',
  description:
    'Corrective, Hybrid and Luminous Silk Dermaplaning facials in Redcliffe at The Derm Studio, Marine Parade. Expert facials tailored to your skin, from $199.',
  alternates: { canonical: 'https://www.thedermstudio.com.au/services/facials-redcliffe' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Facials Redcliffe', href: '/services/facials-redcliffe' },
]

const facials = [
  {
    name: 'Corrective Facial',
    price: '$220',
    duration: '45 mins',
    href: '/services/corrective-facial-redcliffe',
    blurb:
      'The ideal starting point for your skincare journey — a results-focused clinical facial combining progressive resurfacing, targeted Lira Clinical actives, a tension-releasing neck and shoulder massage, and medical-grade LED light therapy. Perfect if you\'re new to professional skin treatment or want reliable monthly maintenance.',
  },
  {
    name: 'Hybrid Facial',
    price: '$220',
    duration: '45 mins',
    href: '/services/hybrid-facial-redcliffe',
    blurb:
      'The next-level upgrade — a Corrective Facial blended with a gentle peel infusion for deeper resurfacing and brighter results, with zero downtime. Includes LED light therapy. The natural bridge between a Corrective Facial and a Level 1 Corrective Peel, and safe to book year-round.',
  },
  {
    name: 'Luminous Silk Dermaplaning Facial',
    price: '$199',
    duration: '1 hr',
    href: '/services/dermaplaning-facial-redcliffe',
    blurb:
      'A sterile surgical blade gently removes dead skin cells and fine vellus hair, delivering instantly smoother, brighter skin and dramatically better product absorption. Finished with a hydrating mask and LED light therapy — a favourite before a special event.',
  },
]

export default function FacialsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        serviceName="Facials"
        description="Corrective, Hybrid and Luminous Silk Dermaplaning facials at The Derm Studio, Marine Parade, Redcliffe — customised to your skin type, concerns and goals, using Lira Clinical professional-grade skincare."
        url="https://www.thedermstudio.com.au/services/facials-redcliffe"
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
              Facials Redcliffe | Expert Skin Facials
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
              Expert Facials at The Derm Studio
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              Every facial at The Derm Studio begins with a proper skin consultation — your therapist assesses your
              skin type, identifies your primary concerns, and recommends the treatment that will deliver the most
              meaningful result on the day, not just the one at the top of the menu. Our facials sit at the more
              relaxation-focused end of our treatment range: results-driven, but built around comfort, a tension-
              releasing massage, and an experience you actually look forward to, rather than clinical intensity for
              its own sake. All three facials use Lira Clinical professional-grade skincare — available for home
              care exclusively through authorised stockists including The Derm Studio — and each includes medical-
              grade LED light therapy to stimulate collagen and enhance your results.
            </p>
            <p
              className="mt-6 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              Whether you’re booking your very first professional skin treatment or you’re a regular
              looking for reliable monthly maintenance, one of the three facials below is the right starting point.
              If your concerns run deeper than a facial can address — significant pigmentation, acne scarring, or
              more advanced signs of ageing — our{' '}
              <Link href="/services/skin-treatments-redcliffe" className="underline" style={{ color: 'var(--color-rose)' }}>
                Skin Treatments
              </Link>{' '}
              category covers the more clinical, results-driven tier of corrective peels and skin needling.
            </p>
          </div>
        </section>

        {/* Facial Cards */}
        <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {facials.map((f) => (
                <Link
                  key={f.name}
                  href={f.href}
                  className="group block rounded-3xl p-7 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
                >
                  <div className="flex items-baseline gap-2 mb-4">
                    <span
                      className="text-lg font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                    >
                      {f.price}
                    </span>
                    <span className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}>
                      · {f.duration}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {f.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {f.blurb}
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

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: 'var(--color-espresso)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Book Your Facial at The Derm Studio
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

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { AreaServedSchema } from '@/components/seo/AreaServedSchema'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export type SuburbPageProps = {
  suburb: string
  h1: string
  url: string
  breadcrumbs: Array<{ name: string; href: string }>
  paragraphs: string[]
}

const popularTreatments = [
  { name: 'Corrective Facial', href: '/services/corrective-facial-redcliffe' },
  { name: 'Level 1 Corrective Peel', href: '/services/level-1-corrective-peel-redcliffe' },
  { name: 'Skin Needling with NCTF', href: '/services/skin-needling-nctf-redcliffe' },
  { name: 'Korean Lash Lift & Tint', href: '/services/korean-lash-lift-tint-redcliffe' },
]

export function SuburbPageTemplate({ suburb, h1, url, breadcrumbs, paragraphs }: SuburbPageProps) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <AreaServedSchema areaName={suburb} url={url} />
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
              {h1}
            </h1>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-block text-sm font-semibold px-7 py-3.5 rounded-full text-white transition-colors"
                style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-block text-sm font-semibold px-7 py-3.5 rounded-full text-white border border-white/40 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Popular Treatments */}
        <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Popular Treatments With {suburb} Clients
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {popularTreatments.map((t) => (
                <Link
                  key={t.name}
                  href={t.href}
                  className="group block rounded-3xl p-6 transition-all duration-300 hover:shadow-lg text-center"
                  style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
                >
                  <h3
                    className="text-base font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {t.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1.5" style={{ color: 'var(--color-rose)' }}>
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

        {/* Explore links */}
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
              href="/service-areas"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-cream-dark)', color: 'var(--color-espresso)', fontFamily: "'DM Sans', sans-serif" }}
            >
              All Areas We Serve
            </Link>
            <Link
              href="/services"
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
              Book Your Skin Consultation
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

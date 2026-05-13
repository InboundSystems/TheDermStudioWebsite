import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqAccordion } from '@/components/ui/FaqAccordion'

export type ServicePageProps = {
  h1: string
  intro: string
  sections: Array<{ heading: string; content: string }>
  faqs: Array<{ question: string; answer: string }>
  relatedServices: Array<{ name: string; href: string }>
  breadcrumbs: Array<{ name: string; href: string }>
}

export function ServicePageTemplate({
  h1,
  intro,
  sections,
  faqs,
  relatedServices,
  breadcrumbs,
}: ServicePageProps) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

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

      {/* Intro */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            {intro}
          </p>
          <Link
            href="/book"
            className="inline-block mt-8 text-sm font-semibold px-7 py-3.5 rounded-full text-white transition-colors"
            style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Body Sections — alternating white / cream */}
      {sections.map((section, i) => (
        <section
          key={section.heading}
          className="py-16 md:py-20"
          style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : 'var(--color-cream)' }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              {section.heading}
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              {section.content}
            </p>
          </div>
        </section>
      ))}

      {/* FAQs */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Frequently Asked Questions
          </h2>
          <div
            className="rounded-3xl p-8 bg-white"
            style={{ border: '1px solid var(--color-cream-dark)' }}
          >
            <FaqAccordion faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              You Might Also Be Interested In
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.name}
                  href={rel.href}
                  className="group block rounded-3xl p-7 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
                >
                  <h3
                    className="text-lg font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {rel.name}
                  </h3>
                  <div className="flex items-center gap-1.5" style={{ color: 'var(--color-rose)' }}>
                    <span
                      className="text-sm font-semibold"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      View treatment
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-espresso)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Book This Treatment at The Derm Studio
          </h2>
          <p
            className="text-base mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
          >
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
    </>
  )
}

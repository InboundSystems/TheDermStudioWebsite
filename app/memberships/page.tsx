import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Skin Packages Redcliffe | The Derm Studio',
  description:
    'Explore The Derm Studio\'s skin packages — curated treatment bundles combining peels, LED therapy, and skin needling for real, lasting results at our Redcliffe clinic.',
  alternates: { canonical: '/memberships' },
}

const programs = [
  {
    number: '01',
    name: 'The Radiance Refresh',
    tagline: 'Perfect for those seeking a luminous, hydrated complexion and an effortless, polished glow.',
    includes: [
      '4 × Level 1 Peels',
      '4 × LED Light Therapy Sessions',
      '10% off Core 4 Home Care',
    ],
    price: '$699',
    savings: 'Save $553 Total',
    highlight: false,
  },
  {
    number: '02',
    name: 'The Clarifying Complexion Series',
    tagline: 'Perfect for breakout-prone or congested skin wanting calm, clear, balanced results — without compromising comfort.',
    includes: [
      '1 × Clarifying Enzyme Treatment',
      '3 × Level 2 Detoxifying Peels',
      '4 × LED Light Therapy Sessions',
      '10% off Core 4 Home Care',
    ],
    price: '$799',
    savings: 'Save $519 Total',
    highlight: false,
  },
  {
    number: '03',
    name: 'The Renewal Series',
    tagline: 'A sophisticated rejuvenation journey to refine texture, boost collagen, and restore luminosity.',
    includes: [
      '4 × Level 1 Peels',
      '4 × Skin Needling with NCTF',
      '4 × LED Light Therapy Sessions',
      '10% off Core 4 Home Care',
    ],
    price: '$1,799',
    savings: 'Save $636 Total',
    highlight: true,
  },
  {
    number: '04',
    name: 'The Collagen Luxe Journey',
    tagline: 'For those ready for an elevated transformation — firmer, brighter, more youthful skin with an indulgent touch.',
    includes: [
      '1 × Level 1 Peel',
      '3 × Level 2 Peels',
      '4 × Skin Needling with NCTF + Neck Add-On',
      '4 × LED Light Therapy Sessions',
      '10% off Core 4 Home Care',
    ],
    price: '$1,999',
    savings: 'Save $849 Total',
    highlight: false,
  },
]

const faqs = [
  {
    q: 'What is a treatment program?',
    a: 'Our programs are curated packages that bundle multiple treatments at a significant saving. Each program is designed to address a specific skin concern with a structured series of complementary treatments for cumulative, lasting results.',
  },
  {
    q: 'How do I know which program is right for me?',
    a: 'We recommend booking a skin consultation first. Your therapist will assess your skin and recommend the program best suited to your concerns, lifestyle, and goals.',
  },
  {
    q: 'How long does each program take to complete?',
    a: 'Program duration varies depending on the treatments included and how frequently you book. Most programs are designed to be completed over 8–16 weeks for optimal results.',
  },
  {
    q: 'Do program treatments need to be used within a certain timeframe?',
    a: 'Yes — programs must be completed within 12 months of purchase. We recommend spacing treatments as guided by your therapist to maintain skin progress and maximise results.',
  },
  {
    q: 'Can I transfer unused program sessions?',
    a: 'Program sessions are non-transferable and must be used by the purchasing client. Please contact us if you have any questions about your program.',
  },
  {
    q: 'What does the 10% off Core 4 Home Care include?',
    a: 'All programs include a 10% discount on our Core 4 home care range — a curated selection of Lira Clinical products to support and extend your in-clinic results between appointments.',
  },
]

export default function MembershipsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Programs', href: '/memberships' },
      ]} />

      {/* ── Hero ── */}
      <section
        className="pt-36 pb-20 px-4"
        style={{ backgroundColor: 'var(--color-espresso)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'Packages' }]}
            light
          />
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skin Packages
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.80)' }}
          >
            Real skin transformation takes time and consistency. Our programs bundle
            the treatments that work best together — so you see genuine, lasting
            results at a significant saving.
          </p>
        </div>
      </section>

      {/* ── Program Cards ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.name}
                className="rounded-2xl flex flex-col overflow-hidden"
                style={{
                  backgroundColor: '#fff',
                  border: program.highlight
                    ? '2px solid var(--color-rose)'
                    : '1px solid var(--color-cream-dark)',
                  boxShadow: program.highlight ? '0 8px 32px rgba(196,152,152,0.18)' : undefined,
                }}
              >
                {/* Card Header */}
                <div
                  className="px-8 pt-8 pb-6"
                  style={{
                    backgroundColor: program.highlight ? 'var(--color-rose)' : 'var(--color-cream)',
                  }}
                >
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-3 block"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: program.highlight ? 'rgba(255,255,255,0.65)' : 'var(--color-rose)',
                    }}
                  >
                    Program {program.number}
                  </span>
                  <h2
                    className="text-2xl font-bold mb-2 leading-snug"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: program.highlight ? '#fff' : 'var(--color-espresso)',
                    }}
                  >
                    {program.name}
                  </h2>
                  <p
                    className="text-sm leading-snug"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: program.highlight ? 'rgba(255,255,255,0.85)' : 'var(--color-charcoal)',
                    }}
                  >
                    {program.tagline}
                  </p>
                </div>

                {/* Includes */}
                <div className="px-8 pt-6 pb-4 flex flex-col gap-3 flex-1">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
                  >
                    Includes
                  </p>
                  {program.includes.map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: 'var(--color-rose)' }}
                      />
                      <span
                        className="text-sm leading-snug"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div
                  className="px-8 pt-4 pb-8 mt-2"
                  style={{ borderTop: '1px solid var(--color-cream-dark)' }}
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span
                      className="text-2xl font-bold"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                    >
                      {program.price}
                    </span>
                    <span
                      className="text-sm font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        backgroundColor: 'rgba(196,152,152,0.12)',
                        color: 'var(--color-rose)',
                      }}
                    >
                      {program.savings}
                    </span>
                  </div>
                  <Link
                    href="/book"
                    className="block text-center text-sm font-semibold text-white px-5 py-3 rounded-full transition-colors"
                    style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center text-sm mt-10"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(90,72,72,0.6)' }}
          >
            Not sure which program is right for you?{' '}
            <Link href="/contact" style={{ color: 'var(--color-rose)' }}>
              Get in touch
            </Link>{' '}
            and we'll guide you to the best fit.
          </p>
        </div>
      </section>

      {/* ── Why a program ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Why a Program Works
          </h2>
          <p
            className="text-base leading-relaxed mb-12"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            A single treatment can refresh your skin. A structured program transforms it.
            When treatments are layered and repeated over time, the cumulative effect
            on collagen, pigment, and texture is far greater than any one session alone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {[
              {
                heading: 'Cumulative Results',
                body: 'Each session builds on the last. Peels, LED, and needling work synergistically — the more consistently you treat, the more dramatic the outcome.',
              },
              {
                heading: 'Real Savings',
                body: 'Programs are priced to reward commitment. Save hundreds compared to booking treatments individually, without compromising on quality.',
              },
              {
                heading: 'A Clear Plan',
                body: 'No guesswork. Each program is designed by our therapists to target a specific concern with the right combination of treatments in the right order.',
              },
            ].map((item) => (
              <div key={item.heading} className="flex flex-col gap-2">
                <div className="w-8 h-0.5 mb-1" style={{ backgroundColor: 'var(--color-rose)' }} />
                <h3
                  className="text-base font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                >
                  {item.heading}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Program FAQs
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-6"
                style={{ border: '1px solid var(--color-cream-dark)' }}
              >
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-rose)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Start Your Skin Journey?
          </h2>
          <p
            className="text-base text-white/85 mb-8 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Book a consultation and we'll recommend the program that best suits
            your skin goals, timeline, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block text-center font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
              style={{ backgroundColor: '#fff', color: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-block text-center font-semibold px-7 py-3.5 rounded-full transition-colors text-sm text-white"
              style={{ border: '2px solid rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Ask Us a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

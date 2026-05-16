import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Star } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Skin Memberships Redcliffe | The Derm Studio',
  description:
    'Join The Derm Studio membership program and enjoy regular skin treatments, exclusive member discounts, and priority booking at our Redcliffe skin clinic on Marine Parade.',
}

const tiers = [
  {
    name: 'The Essential',
    tagline: 'The perfect introduction to consistent skin care',
    price: 'TBD / month',
    highlight: false,
    features: [
      '1 x facial treatment per month',
      '10% off all additional treatments',
      '5% off Lira Clinical skincare products',
      'Priority booking access',
      'Personalised skin tracking',
    ],
    cta: 'Enquire Now',
    href: '/contact',
    note: 'Pricing to be confirmed — contact us to register your interest.',
  },
  {
    name: 'The Glow',
    tagline: 'For clients targeting real, lasting results',
    price: 'TBD / month',
    highlight: true,
    features: [
      '1 x premium facial + 1 x add-on treatment per month',
      '15% off all additional treatments',
      '10% off Lira Clinical skincare products',
      'Priority booking access',
      'Complimentary skin review every 6 months',
      'Personalised skin tracking',
    ],
    cta: 'Enquire Now',
    href: '/contact',
    note: 'Pricing to be confirmed — contact us to register your interest.',
  },
  {
    name: 'The Studio',
    tagline: 'Total commitment to your skin transformation',
    price: 'TBD / month',
    highlight: false,
    features: [
      '2 x treatments per month (your choice from the full menu)',
      '20% off all additional treatments',
      '15% off Lira Clinical skincare products',
      'Highest priority booking + early access',
      'Complimentary skin review every 3 months',
      'Exclusive member-only offers and events',
      'Personalised skin tracking',
    ],
    cta: 'Enquire Now',
    href: '/contact',
    note: 'Pricing to be confirmed — contact us to register your interest.',
  },
]

const faqs = [
  {
    q: 'How do memberships work?',
    a: 'Memberships run on a monthly rolling basis. Each month your included treatments and discounts reset. You can use your treatments at any time during the month — we recommend booking ahead to secure your preferred time.',
  },
  {
    q: 'Can I pause or cancel my membership?',
    a: 'Yes. We understand that life happens. Membership pause and cancellation terms will be confirmed when memberships launch — contact us for details.',
  },
  {
    q: 'Can I upgrade or downgrade my tier?',
    a: 'Yes, you can change your membership tier with notice. We will confirm the exact process when memberships go live.',
  },
  {
    q: 'Do unused treatments roll over?',
    a: 'Treatment inclusions are monthly and do not roll over. We encourage you to book regularly to get the most from your membership and maintain consistent skin progress.',
  },
  {
    q: 'When will memberships be available?',
    a: 'Memberships are coming soon. Enquire now to register your interest and be the first to know when they launch.',
  },
]

export default function MembershipsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Memberships', href: '/memberships' },
      ]} />

      {/* ── Hero ── */}
      <section
        className="pt-36 pb-20 px-4"
        style={{ backgroundColor: 'var(--color-espresso)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'Memberships' }]}
            light
          />
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skin Memberships
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.80)' }}
          >
            Consistent treatment is the secret to healthy, lasting skin results.
            Our membership program makes it easy — regular treatments, exclusive
            savings, and priority booking, all wrapped into one simple monthly plan.
          </p>
          <div
            className="inline-block mt-6 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ backgroundColor: 'var(--color-rose)', color: '#fff', fontFamily: "'DM Sans', sans-serif" }}
          >
            Coming Soon — Register Your Interest Below
          </div>
        </div>
      </section>

      {/* ── Membership Cards ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl flex flex-col overflow-hidden"
                style={{
                  backgroundColor: '#fff',
                  border: tier.highlight
                    ? '2px solid var(--color-rose)'
                    : '1px solid var(--color-cream-dark)',
                  boxShadow: tier.highlight ? '0 8px 32px rgba(196,152,152,0.18)' : undefined,
                }}
              >
                {/* Card Header */}
                <div
                  className="px-8 pt-8 pb-6"
                  style={{
                    backgroundColor: tier.highlight ? 'var(--color-rose)' : 'var(--color-cream)',
                  }}
                >
                  {tier.highlight && (
                    <div
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white mb-3 px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
                    >
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  )}
                  <h2
                    className="text-2xl font-bold mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: tier.highlight ? '#fff' : 'var(--color-espresso)',
                    }}
                  >
                    {tier.name}
                  </h2>
                  <p
                    className="text-sm leading-snug"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: tier.highlight ? 'rgba(255,255,255,0.85)' : 'var(--color-charcoal)',
                    }}
                  >
                    {tier.tagline}
                  </p>
                  <p
                    className="text-2xl font-bold mt-4"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: tier.highlight ? '#fff' : 'var(--color-espresso)',
                    }}
                  >
                    {tier.price}
                  </p>
                </div>

                {/* Features */}
                <div className="px-8 py-6 flex flex-col gap-3 flex-1">
                  {tier.features.map((f) => (
                    <div key={f} className="flex gap-3 items-start">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: 'var(--color-rose)' }}
                      />
                      <span
                        className="text-sm leading-snug"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-8 pb-8">
                  <p
                    className="text-xs mb-4 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(90,72,72,0.6)' }}
                  >
                    {tier.note}
                  </p>
                  <Link
                    href={tier.href}
                    className="block text-center text-sm font-semibold text-white px-5 py-3 rounded-full transition-colors"
                    style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included explainer ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Why Become a Member?
          </h2>
          <p
            className="text-base leading-relaxed mb-12"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            Skin is a long-term investment. The clients who see the most dramatic results are those
            who commit to regular treatment — not just a one-off visit. Membership makes that easy,
            affordable, and rewarding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {[
              {
                heading: 'Consistent Results',
                body: 'Skin responds best to ongoing, structured treatment. A monthly rhythm means your skin never loses momentum.',
              },
              {
                heading: 'Real Savings',
                body: 'Member discounts on treatments and Lira Clinical skincare add up quickly — especially when you are already investing in your skin regularly.',
              },
              {
                heading: 'Priority Access',
                body: 'Members get priority booking, so you always secure your preferred time — no chasing availability.',
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
            Membership FAQs
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
            Ready to Commit to Your Skin?
          </h2>
          <p
            className="text-base text-white/85 mb-8 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Memberships are coming soon. Get in touch to register your interest and
            we will reach out as soon as they are available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block text-center font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
              style={{ backgroundColor: '#fff', color: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Register Your Interest
            </Link>
            <Link
              href="/book"
              className="inline-block text-center font-semibold px-7 py-3.5 rounded-full transition-colors text-sm text-white"
              style={{ border: '2px solid rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Treatment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

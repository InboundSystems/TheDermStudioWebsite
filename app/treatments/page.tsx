import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'

export const metadata: Metadata = {
  title: 'Skin Treatments Redcliffe | The Derm Studio',
  description:
    'The full treatment menu at The Derm Studio, Marine Parade, Redcliffe — corrective facials, Lira Clinical peels, skin needling and lash lifting. Book a free skin consultation.',
  alternates: { canonical: 'https://thedermstudio.com.au/treatments' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Treatments', href: '/treatments' },
]

const allTreatments = [
  {
    name: 'Corrective Facial',
    price: '$220',
    duration: '45 mins',
    href: '/services/corrective-facial-redcliffe',
    blurb:
      'The ideal starting point for your skincare journey — progressive resurfacing, targeted Lira Clinical actives, a tension-releasing neck and shoulder massage, and medical-grade LED light therapy included.',
  },
  {
    name: 'Hybrid Facial',
    price: '$220',
    duration: '45 mins',
    href: '/services/hybrid-facial-redcliffe',
    blurb:
      'A Corrective Facial blended with a gentle peel infusion for deeper resurfacing and brighter results, with zero downtime. Includes LED light therapy — safe to book year-round.',
  },
  {
    name: 'Luminous Silk Dermaplaning Facial',
    price: '$199',
    duration: '1 hr',
    href: '/services/dermaplaning-facial-redcliffe',
    blurb:
      'Sterile-blade dermaplaning removes dead skin cells and fine vellus hair for instantly smoother, brighter skin and dramatically better product absorption. Finished with a hydrating mask and LED.',
  },
  {
    name: 'Level 1 Corrective Peel',
    price: '$199',
    duration: '45 mins',
    href: '/services/level-1-corrective-peel-redcliffe',
    blurb:
      'An entry-level Lira Clinical peel that brightens, hydrates and corrects dullness, mild pigmentation and uneven tone. No preparation required, with minimal to no downtime.',
  },
  {
    name: 'Level 2 Corrective Peel',
    price: '$220',
    duration: '45 mins',
    href: '/services/level-2-corrective-peel-redcliffe',
    blurb:
      'A deeper Lira Clinical peel for hyperpigmentation, fine lines and acne scarring. Requires home-care preparation beforehand, with results developing over the following weeks.',
  },
  {
    name: 'Level 3 Corrective Peel',
    price: '$250',
    duration: '45 mins',
    href: '/services/level-3-corrective-peel-redcliffe',
    blurb:
      'Our most intensive peel, for complex concerns like melasma, active acne and significant pigmentation. Requires preparation and prior conditioning — recommended in cooler months.',
  },
  {
    name: 'Skin Needling with NCTF',
    price: '$349',
    duration: '45 mins',
    href: '/services/skin-needling-nctf-redcliffe',
    blurb:
      'Collagen induction therapy infused with NCTF — 54 active ingredients including vitamins, amino acids and hyaluronic acid — for brighter, firmer, more hydrated skin.',
  },
  {
    name: 'Skin Needling with Exosomes',
    price: '$449',
    duration: '45 mins',
    href: '/services/skin-needling-exosomes-redcliffe',
    blurb:
      'Our most advanced needling treatment, pairing micro-needling with exosome technology to supercharge the skin\'s natural repair response for significant scarring and maximum regeneration.',
  },
  {
    name: 'Korean Lash Lift & Tint',
    price: '$129',
    duration: '1 hr',
    href: '/services/korean-lash-lift-tint-redcliffe',
    blurb:
      'A semi-permanent lift and tint that curls and darkens your natural lashes for an effortless, wide-awake eye — no extensions, no daily mascara. Results last 6–8 weeks.',
  },
]

const categories = [
  {
    name: 'Facials Redcliffe',
    href: '/services/facials-redcliffe',
    desc: 'Relaxation-focused, results-driven facials — the right starting point for most clients.',
  },
  {
    name: 'Skin Treatments Redcliffe',
    href: '/services/skin-treatments-redcliffe',
    desc: 'Our clinical, results-driven tier — corrective peels and skin needling for targeted concerns.',
  },
  {
    name: 'Skin Clinic Redcliffe Peninsula',
    href: '/service-areas',
    desc: 'Serving Redcliffe, Scarborough, Clontarf, Kippa-Ring and the wider Moreton Bay Peninsula.',
  },
]

export default function TreatmentsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        serviceName="Skin Treatments"
        description="The full treatment menu at The Derm Studio, Marine Parade, Redcliffe — corrective facials, Lira Clinical peels, skin needling and Korean lash lifting, delivered by qualified dermal therapists."
        url="https://thedermstudio.com.au/treatments"
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
              Skin Treatments Redcliffe | The Derm Studio
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              This is the full treatment menu at The Derm Studio — every service we offer at our Marine Parade
              clinic, in one place. Broadly, our treatments fall into two tiers: relaxation-focused facials that
              double as genuine skin maintenance, and a more clinical, results-driven tier of corrective peels and
              skin needling for clients working on a specific concern like pigmentation, acne scarring or premature
              ageing. We round out the menu with the Korean Lash Lift & Tint, a popular finishing touch alongside a
              facial or peel appointment.
            </p>
            <p
              className="mt-6 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              Every treatment plan at The Derm Studio starts with a proper skin consultation — not a generic
              package. As an authorised Lira Clinical stockist, we also prescribe professional home-care products to
              extend and protect your in-clinic results, and if you know you want a structured, multi-session
              program, our pre-built Skin Packages at{' '}
              <Link href="/memberships" className="underline" style={{ color: 'var(--color-rose)' }}>
                /memberships
              </Link>{' '}
              bundle a full course at a fixed price. Not sure where to start? Browse the full menu below, or jump
              straight to a category.
            </p>
            <p
              className="mt-6 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              All treatments are delivered at our Marine Parade studio by qualified dermal therapists, never
              outsourced or franchised, and every price on this page is the actual price you&apos;ll pay — no
              &ldquo;from&rdquo; pricing, no hidden add-ons sprung on you at checkout. If a course of peels or skin
              needling is recommended, your therapist will map out the full plan, cost and timeline before you
              commit to anything beyond your first session.
            </p>
          </div>
        </section>

        {/* Category cards */}
        <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {categories.map((c) => (
                <Link
                  key={c.name}
                  href={c.href}
                  className="group block rounded-3xl p-7 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
                >
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {c.name}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {c.desc}
                  </p>
                  <div className="flex items-center gap-1.5" style={{ color: 'var(--color-rose)' }}>
                    <span className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Explore category
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All treatments grid */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              The Full Treatment Menu
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allTreatments.map((t) => (
                <Link
                  key={t.name}
                  href={t.href}
                  className="group block rounded-3xl p-7 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-cream-dark)' }}
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
                    className="text-base font-bold mb-3"
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
        <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/memberships"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)', color: 'var(--color-espresso)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Skin Packages
            </Link>
            <Link
              href="/lira-clinical"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)', color: 'var(--color-espresso)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Lira Clinical
            </Link>
            <Link
              href="/faq"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)', color: 'var(--color-espresso)', fontFamily: "'DM Sans', sans-serif" }}
            >
              FAQ
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
              Not Sure Which Treatment Is Right for You?
            </h2>
            <p className="text-base mb-8" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}>
              Book a Free Skin Consultation
            </p>
            <Link
              href="/book"
              className="inline-block font-semibold text-white px-8 py-4 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Free Skin Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

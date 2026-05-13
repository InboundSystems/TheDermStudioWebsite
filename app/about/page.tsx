import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { ShieldCheck, Heart, TrendingUp, UserCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About The Derm Studio | Rachael Liquorish, Dermal Nurse — Redcliffe',
  description:
    "Meet Rachael Liquorish, Dermal Nurse and founder of The Derm Studio — Redcliffe's results-focused skin clinic and sole Lira Clinical stockist at Bluewater Square.",
}

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Clinical Expertise',
    body: "Every treatment at The Derm Studio is grounded in clinical evidence. Rachael brings nursing-level knowledge to skin treatment — meaning every recommendation is backed by science, not trends.",
  },
  {
    icon: Heart,
    title: 'Personalised Care',
    body: "No two skin types are the same, and no two treatment plans should be either. Rachael takes the time to understand your skin, your lifestyle, and your goals before recommending a single product or procedure.",
  },
  {
    icon: TrendingUp,
    title: 'Visible Results',
    body: "The Derm Studio is results-focused — full stop. Every treatment protocol is built around what delivers measurable improvement in texture, tone, clarity, and skin health, not what looks impressive on social media.",
  },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
      ]} />
      {/* ── Hero Banner ── */}
      <section className="pt-20" style={{ backgroundColor: 'var(--color-rose)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'About' }]}
            light
          />
          <h1
            className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About The Derm Studio — Redcliffe&apos;s Skin Specialists
          </h1>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose max-w-none text-base sm:text-lg leading-relaxed space-y-5"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            <p>
              The Derm Studio is a results-focused skin clinic founded by Rachael Liquorish, a Dermal Nurse with a deep commitment to skin health and evidence-based treatment. Located at Shop 10, 20 Anzac Avenue, Bluewater Square in Redcliffe, the clinic specialises in advanced skin treatments tailored to the individual — with a focus on visible results and a genuinely personalised experience.
            </p>
            <p>
              Every treatment at The Derm Studio begins with understanding your skin. No two clients are the same, and no two treatment plans should be either. Rachael works with you to assess your skin, understand your concerns and goals, and develop a protocol that makes sense for your skin specifically — not a generic menu approach.
            </p>
            <p>
              Every new client is welcome to start with a complimentary 30-minute consultation. It&apos;s an opportunity to have your skin professionally assessed, ask questions, and receive honest recommendations — obligation-free.
            </p>
            <p>
              The Derm Studio is proud to be <strong>Redcliffe&apos;s sole Lira Clinical stockist</strong>. Lira Clinical is a professional-grade skincare brand trusted by skin therapists globally, and it sits at the heart of every treatment protocol and home-care prescription at the studio. You won&apos;t find it elsewhere on the Redcliffe Peninsula — and that partnership is intentional. The Derm Studio works exclusively with brands it genuinely uses and believes in.
            </p>
            <p>
              Treatments on offer include corrective facials, hybrid facials, dermaplaning, Lira Clinical corrective peels (Levels 1–3), skin needling with NCTF and Exosomes, and Korean lash lifting — each tailored to your individual skin concerns and delivered with clinical precision.
            </p>
            <p>
              Great skin is a relationship, not a single appointment. The Derm Studio is built around long-term skin health — developing treatment plans that evolve as your skin does, and pairing in-clinic treatments with the right home-care to extend and protect your results every day.
            </p>
          </div>
        </div>
      </section>

      {/* ── Meet Rachael ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-14"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Meet Rachael
          </h2>

          {/* TODO: Replace UserCircle placeholder with Rachael's photo once supplied */}
          <div className="max-w-2xl mx-auto">
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
              style={{ border: '1px solid var(--color-cream-dark)' }}
            >
              {/* Photo placeholder */}
              <div
                className="h-64 flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-cream-dark)' }}
              >
                <div className="text-center">
                  <UserCircle className="w-20 h-20 mx-auto mb-2" style={{ color: 'var(--color-rose)' }} />
                  <p
                    className="text-xs"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    Photo coming soon
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                >
                  Rachael Liquorish
                </h3>
                <p
                  className="text-sm font-semibold mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
                >
                  Dermal Nurse &amp; Founder
                </p>
                {/* TODO: Add Rachael's personal background, story, years of experience, and approach to skin health once provided */}
                <p
                  className="text-sm sm:text-base leading-relaxed mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  Rachael Liquorish is a Dermal Nurse and the founder of The Derm Studio. She established the clinic at Bluewater Square in Redcliffe to provide the Moreton Bay Peninsula with access to genuinely results-focused skin treatment — combining clinical expertise with a personalised approach that puts each client&apos;s skin health first.
                </p>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  Rachael works exclusively with Lira Clinical — a professional-grade skincare brand trusted by skin therapists globally — ensuring that every in-clinic treatment is supported by the right home-care for lasting results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach — 3 Pillars ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-14"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Our Approach to Skin Health
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col gap-4 p-8 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-cream)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-cream-dark)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: 'var(--color-rose)' }} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {pillar.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Lira Clinical Callout ── */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div
          className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-12"
          style={{ border: '2px solid var(--color-rose)', backgroundColor: 'white' }}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'var(--color-cream)' }}
            >
              <span className="text-2xl">🧴</span>
            </div>
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
              >
                Proud Lira Clinical Partners
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
              >
                We are proud to be the sole Lira Clinical stockist in Redcliffe — find out why our clients love it and how it can transform your home skincare routine.
              </p>
              <Link
                href="/lira-clinical"
                className="inline-block text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-colors"
                style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Discover Lira Clinical →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-espresso)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Book Your Skin Consultation
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
          >
            Start your skin journey with a complimentary consultation at The Derm Studio, Bluewater Square, Redcliffe.
          </p>
          <Link
            href="/book"
            className="inline-block font-semibold text-white px-8 py-4 rounded-full transition-colors"
            style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
          >
            Book Now — It&apos;s Free
          </Link>
        </div>
      </section>
    </>
  )
}

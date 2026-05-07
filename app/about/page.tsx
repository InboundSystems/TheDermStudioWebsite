import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ShieldCheck, Heart, TrendingUp, UserCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About The Derm Studio | Expert Dermal Therapists in Redcliffe',
  description:
    "Meet the qualified dermal therapists at The Derm Studio — Redcliffe's specialist skin clinic and sole Lira Clinical stockist. Learn about our approach to skin health.",
}

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Clinical Expertise',
    body: "Our therapists hold formal qualifications in dermal therapy and undergo ongoing professional development. Every treatment recommendation is backed by clinical evidence — we don't follow trends, we follow science.",
  },
  {
    icon: Heart,
    title: 'Personalised Care',
    body: "No two skin types are the same, and no two treatment plans should be either. We take the time to understand your skin, your lifestyle, and your goals before recommending a single product or procedure.",
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    body: "We measure our success by your results. Our treatment protocols are built around what delivers measurable improvement — in texture, tone, clarity, and overall skin health — not what looks impressive on social media.",
  },
]

export default function AboutPage() {
  return (
    <>
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
              At The Derm Studio, we believe great skin starts with understanding your skin. We&apos;re Redcliffe&apos;s dedicated specialist skin clinic — a place where clinical expertise meets genuine, personal care.
            </p>
            <p>
              Located at Shop 10, Bluewater Square in the heart of Redcliffe, we&apos;ve built a welcoming clinic that serves clients from across the Moreton Bay Peninsula. Whether you&apos;re visiting from nearby Scarborough or travelling from North Lakes or Mango Hill, you&apos;ll find a space where your skin health is taken seriously.
            </p>
            <p>
              Our team of fully qualified dermal therapists works with you to understand your skin before recommending any treatment or product. Every new client receives a complimentary skin consultation — because we&apos;d rather take the time to get it right than rush to a recommendation.
            </p>
            <p>
              We are proud to be <strong>Redcliffe&apos;s sole Lira Clinical stockist</strong>. This professional-grade skincare line sits at the heart of our treatment protocols and home-care recommendations. You won&apos;t find it anywhere else on the Redcliffe Peninsula — and that&apos;s intentional. We partner with brands we genuinely believe in and use every day in our clinic.
            </p>
            <p>
              Our services include customised facials, chemical peels, LED light therapy, skin needling, HydraFacial, microdermabrasion, and specialist dermal therapy — each tailored to your individual skin concerns and goals. We believe that lasting results come from the right combination of evidence-based treatments and professional skincare, not from one-size-fits-all protocols.
            </p>
            <p>
              Great skin is an ongoing relationship, not a single treatment. That&apos;s why we focus on building long-term plans that evolve as your skin does — whether you&apos;re addressing pigmentation, acne scarring, fine lines, or simply wanting to maintain a healthy, radiant complexion.
            </p>
            <p>
              When you visit The Derm Studio, you&apos;re not just booking a treatment. You&apos;re starting a relationship with therapists who genuinely care about the long-term health of your skin.
            </p>
          </div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-14"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Meet the Team
          </h2>

          {/* TODO: Replace placeholders with real therapist photos + bios supplied by client */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Therapist Name',
                title: 'Principal Dermal Therapist',
                bio: 'Fully qualified dermal therapist with advanced training in clinical skin treatments. Lira Clinical certified. Passionate about achieving measurable results for every client.',
                quals: 'Diploma of Beauty Therapy | Cert IV in Dermal Therapies | Lira Clinical Certified',
              },
              {
                name: 'Therapist Name',
                title: 'Dermal Therapist',
                bio: 'Specialising in LED light therapy, chemical peels, and advanced skin treatments. Committed to ongoing education and evidence-based practice.',
                quals: 'Diploma of Beauty Therapy | Cert IV in Dermal Therapies',
              },
            ].map((therapist, i) => (
              <div
                key={i}
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
                    {/* TODO: Replace with <Image> component once client supplies therapist photo */}
                    <p
                      className="text-xs"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                    >
                      Photo coming soon
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {/* TODO: Confirm therapist names with client */}
                    {therapist.name}
                  </h3>
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
                  >
                    {therapist.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {therapist.bio}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)', opacity: 0.7 }}
                  >
                    {/* TODO: Confirm qualifications with client */}
                    {therapist.quals}
                  </p>
                </div>
              </div>
            ))}
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

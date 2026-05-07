import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lira Clinical Skincare Redcliffe | The Derm Studio — Sole Redcliffe Stockist',
  description:
    'The Derm Studio is the only Lira Clinical stockist in Redcliffe. Shop professional-grade Lira Clinical skincare at Bluewater Square, Redcliffe QLD.',
}

const productRanges = [
  {
    name: 'OSC (Optimal Skin Care)',
    desc: "A comprehensive range of clinically active serums, moisturisers, and cleansers formulated to target specific skin concerns including pigmentation, aging, and sensitivity.",
    tag: 'Core Range',
  },
  {
    name: 'Mystiq iQ',
    desc: "Advanced anti-ageing formulations combining powerful antioxidants, peptides, and plant stem cells to visibly reduce the appearance of fine lines, wrinkles, and loss of firmness.",
    tag: 'Anti-Ageing',
  },
  {
    name: 'Perfect C',
    desc: "A brightening and antioxidant range centred around Vitamin C, designed to even skin tone, reduce pigmentation, and protect against environmental damage.",
    tag: 'Brightening',
  },
  {
    name: 'Lira Rx',
    desc: "Practitioner-prescribed professional treatments and targeted corrective products for more intensive skin concerns, used in-clinic and prescribed for advanced home care.",
    tag: 'Professional',
  },
]

export default function LiraClinicalPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="pt-20" style={{ backgroundColor: 'var(--color-espresso)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'Lira Clinical' }]}
            light
          />
          <h1
            className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lira Clinical Skincare Redcliffe | The Derm Studio
          </h1>
          <p
            className="mt-4 text-base sm:text-lg max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
          >
            Professional-grade skincare available exclusively at The Derm Studio — Redcliffe&apos;s sole authorised stockist.
          </p>
        </div>
      </section>

      {/* ── What is Lira Clinical ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            What is Lira Clinical?
          </h2>
          <div
            className="space-y-5 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            <p>
              Lira Clinical is a professional-grade, clinically tested skincare brand founded by a team of skincare experts and physicians. Built on the principle that effective skincare must be rooted in science, every Lira Clinical product is formulated with powerful active ingredients — including plant stem cells, botanical extracts, peptides, and antioxidants — all working in synergy to deliver visible, measurable results.
            </p>
            <p>
              What sets Lira Clinical apart from over-the-counter skincare is its clinical formulation philosophy. These are not products designed to sit on a supermarket shelf. Every active ingredient is chosen for its evidence base, every concentration is optimised for efficacy, and every product is designed to work synergistically within a professional treatment protocol.
            </p>
            <p>
              Lira Clinical products are available <strong>exclusively through certified skin clinics and trained practitioners</strong>. This ensures that each product is recommended and used correctly — tailored to your specific skin type and concerns, rather than sold generically. This practitioner-only model protects the integrity of the products and, more importantly, protects your skin from misuse of high-potency formulations.
            </p>
            <p>
              The full Lira Clinical range spans cleansers, serums, moisturisers, SPF protection, and targeted treatment products across several specialised lines — each addressing different skin concerns and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why We Stock It ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Why The Derm Studio Partners with Lira Clinical
          </h2>
          <div
            className="space-y-5 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            <p>
              Our therapists hold comprehensive Lira Clinical training and certification. We don&apos;t stock a brand simply because it&apos;s popular — we chose Lira Clinical because it aligns precisely with our evidence-based approach to skin health. The clinical data behind these formulations is robust, the ingredients are thoughtfully selected, and the results we see in our clients&apos; skin speak for themselves.
            </p>
            <p>
              We use Lira Clinical products as an integral part of our in-clinic treatment protocols — from pre-treatment preparation to post-procedure recovery and ongoing maintenance. We also prescribe home-care routines using Lira Clinical products, creating a seamless continuity between your clinic sessions and your daily skincare practice.
            </p>
            <p>
              When you purchase Lira Clinical products through The Derm Studio, you receive expert guidance on how to use them correctly for your specific skin type and concerns. This personalised approach is what makes professional skincare genuinely effective — and it&apos;s something you simply cannot replicate by purchasing products online.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sole Redcliffe Stockist Callout ── */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-rose)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4 text-white/80"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Exclusive Availability
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Derm Studio is the Only Lira Clinical Stockist in Redcliffe
          </h2>
          <p
            className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            You cannot purchase authentic Lira Clinical skincare online. It is available exclusively through certified clinics — and on the Redcliffe Peninsula, The Derm Studio is the only authorised stockist. Visit us in-clinic to browse the range and receive personalised recommendations from our qualified therapists.
          </p>
        </div>
      </section>

      {/* ── Product Ranges Grid ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Key Product Ranges
          </h2>
          <p
            className="text-center text-base mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            Ask our therapists which range is right for your skin concerns.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productRanges.map((range) => (
              <div
                key={range.name}
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
              >
                {/* Product image placeholder */}
                <div
                  className="h-40 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-cream-dark)' }}
                >
                  <div className="text-center">
                    <Package className="w-10 h-10 mx-auto mb-1" style={{ color: 'var(--color-rose)' }} />
                    {/* TODO: Replace with product image supplied by client */}
                    <p className="text-xs" style={{ color: 'var(--color-charcoal)', opacity: 0.6, fontFamily: "'DM Sans', sans-serif" }}>
                      Image coming soon
                    </p>
                  </div>
                </div>

                <span
                  className="text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded-full w-fit"
                  style={{ backgroundColor: 'var(--color-rose)', color: 'white', fontFamily: "'DM Sans', sans-serif" }}
                >
                  {range.tag}
                </span>

                <h3
                  className="text-lg font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                >
                  {range.name}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  {range.desc}
                </p>
                <Link
                  href="/contact"
                  className="text-sm font-semibold mt-auto transition-opacity hover:opacity-70"
                  style={{ color: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Ask us about this range →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit Us CTA ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-espresso)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Visit Us In-Clinic to Shop Lira Clinical
          </h2>
          <p
            className="text-base mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
          >
            📍 Shop 10, Bluewater Square, 20 Anzac Avenue, Redcliffe QLD 4020
          </p>
          <p
            className="text-sm mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)', opacity: 0.75 }}
          >
            {/* TODO: Add confirmed hours */}
            Mon–Fri 9:00am–5:00pm · Sat 9:00am–2:00pm
          </p>
          <Link
            href="/book"
            className="inline-block font-semibold text-white px-8 py-4 rounded-full transition-colors"
            style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
          >
            Book a Skin Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

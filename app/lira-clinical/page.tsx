import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { Leaf, Shield, Sparkles, Droplets, Sun, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lira Clinical Skincare Redcliffe | The Derm Studio — Sole Stockist',
  description:
    'The Derm Studio is an authorised Lira Clinical stockist in Redcliffe. Professional-grade skincare built on plant stem cell technology, topical probiotics, and Smart Peels™ — available exclusively through authorised clinics at Marine Parade, Redcliffe.',
  alternates: { canonical: '/lira-clinical' },
}

const features = [
  {
    icon: Sparkles,
    title: '98%+ Brightening Formulations',
    desc: 'Over 98% of Lira Clinical products contain brightening and skin-evening ingredients — addressing uneven tone and dullness as a baseline across the entire range.',
  },
  {
    icon: Leaf,
    title: 'Plant Stem Cell Technology',
    desc: 'Advanced plant stem cells from Alpine Rose, Swiss Apple, Sea Fennel, Edelweiss, Madonna Lily and more — targeting cellular renewal and visible anti-ageing at the source.',
  },
  {
    icon: Shield,
    title: 'Topical Probiotics',
    desc: 'Clinically selected probiotic strains strengthen the skin barrier, reduce inflammation, and improve penetration of active ingredients for more effective treatment outcomes.',
  },
  {
    icon: Zap,
    title: 'Smart Peels™',
    desc: 'Professional resurfacing treatments that combine active acids with antioxidants, anti-inflammatories, and plant stem cells — delivering results with less irritation and more clinical benefit.',
  },
  {
    icon: Droplets,
    title: 'Advanced Peptide Complex',
    desc: 'Argireline, Matrixyl 3000, and Syn-Ake work topically in a similar manner to injectables — measurably reducing dynamic fine lines and improving skin firmness without needles.',
  },
]

const productRanges = [
  {
    icon: Sparkles,
    name: 'PRO',
    tag: 'Anti-Aging',
    categoryImg: '/lira/pro/_category.webp',
    desc: 'Advanced anti-ageing formulations powered by plant stem cells and peptides including Argireline, Matrixyl 3000, and Syn-Ake. Designed to visibly reduce fine lines, improve firmness, and restore a youthful complexion.',
    products: [
      { name: 'PRO Refining Eye Creme', img: '/lira/pro/pro-refining-eye-creme.webp' },
      { name: 'PRO Brite-Plus Serum', img: '/lira/pro/pro-brite-plus-serum.webp' },
      { name: 'PRO Brightening Masque', img: '/lira/pro/pro-brightening-masque.webp' },
      { name: 'PRO Retinal-Plus Treatment', img: '/lira/pro/pro-retinal-plus-treatment.webp' },
      { name: 'PRO Retinol Creme', img: '/lira/pro/pro-retinol-creme.webp' },
      { name: 'PRO Lux Lash', img: '/lira/pro/pro-lux-lash.webp' },
      { name: 'PRO Lite Serum', img: '/lira/pro/pro-lite-serum.webp' },
      { name: 'PRO Firming Serum', img: '/lira/pro/pro-firming-serum.webp' },
      { name: 'PRO Exfoliating Cleanser', img: '/lira/pro/pro-exfoliating-cleanser.jpg' },
      { name: 'PRO C4 Retinol Serum', img: '/lira/pro/pro-c4-retinol-serum.webp' },
      { name: 'PRO Corrective Pads', img: '/lira/pro/pro-corrective-pads.webp' },
    ],
  },
  {
    icon: Droplets,
    name: 'BIO',
    tag: 'Hydration',
    categoryImg: '/lira/bio/_category.png',
    desc: 'Deeply hydrating formulations that strengthen the skin barrier using topical probiotics and botanical ingredients. Ideal for dehydrated, sensitive, or compromised skin seeking lasting moisture and resilience.',
    products: [
      { name: 'BIO Caviar Creme', img: '/lira/bio/bio-caviar-creme.webp' },
      { name: 'BIO Enzyme Cleanser', img: '/lira/bio/bio-enzyme-cleanser.webp' },
      { name: 'BIO Hydra C Serum', img: '/lira/bio/bio-hydra-c-serum.webp' },
      { name: 'BIO Hydra Infusion', img: '/lira/bio/bio-hydra-infusion.webp' },
      { name: 'BIO Hydrating Mineral Masque', img: '/lira/bio/bio-hydrating-mineral-masque.jpg' },
      { name: 'BIO Hydrating Mineral Mist', img: '/lira/bio/bio-hydrating-mineral-mist.jpg' },
      { name: 'BIO Lift Creme', img: '/lira/bio/bio-lift-creme.webp' },
      { name: 'BIO Lip Factor', img: '/lira/bio/bio-lip-factor.webp' },
    ],
  },
  {
    icon: Sparkles,
    name: 'MYSTIQ',
    tag: 'Brightening',
    categoryImg: '/lira/mystiq/_category.png',
    desc: 'Targeted brightening treatments with a rich concentration of skin-evening actives. Addresses hyperpigmentation, uneven skin tone, and dullness for a visibly clearer, more luminous complexion.',
    products: [
      { name: 'MYSTIQ iLuminating Beauty Oil', img: '/lira/mystiq/mystiq-iluminating-beauty-oil.webp' },
      { name: 'MYSTIQ iLuminating Cleanser', img: '/lira/mystiq/mystiq-iluminating-cleanser.jpg' },
      { name: 'MYSTIQ iLuminating Polisher', img: '/lira/mystiq/mystiq-iluminating-polisher.jpg' },
      { name: 'MYSTIQ Infused C Serum', img: '/lira/mystiq/mystiq-infused-c-serum.webp' },
      { name: 'MYSTIQ Intense C 15 Booster', img: '/lira/mystiq/mystiq-intense-c-15-booster.webp' },
      { name: 'MYSTIQ Lifting Masque', img: '/lira/mystiq/mystiq-lifting-masque.webp' },
      { name: 'MYSTIQ Perfecting Eye Creme', img: '/lira/mystiq/mystiq-perfecting-eye-creme.webp' },
    ],
  },
  {
    icon: Zap,
    name: 'ICE',
    tag: 'Acne Correction',
    categoryImg: '/lira/ice/_category.png',
    desc: 'Clinical-grade acne correction combining active resurfacing with anti-inflammatory botanicals. Treats active breakouts, prevents congestion, and progressively improves post-acne scarring and residual marks.',
    products: [
      { name: 'ICE Balancing Lotion', img: '/lira/ice/ice-balancing-lotion.webp' },
      { name: 'ICE Clarifying Scrub', img: '/lira/ice/ice-clarifying-scrub.webp' },
      { name: 'ICE Clarifying Treatment', img: '/lira/ice/ice-clarifying-treatment.webp' },
      { name: 'ICE Clear Stick Acne Spot Treatment', img: '/lira/ice/ice-clear-stick-acne-spot-treatment.webp' },
      { name: 'ICE Refining Masque', img: '/lira/ice/ice-refining-masque.webp' },
      { name: 'ICE Sal Cleanser', img: '/lira/ice/ice-sal-cleanser.webp' },
    ],
  },
  {
    icon: Sun,
    name: 'SPF',
    tag: 'Sun Protection',
    categoryImg: '/lira/spf/_category.png',
    desc: 'Professional-grade broad-spectrum sun protection formulated with skin-beneficial actives — not just UV filters. Essential for protecting the investment of every in-clinic treatment.',
    products: [
      { name: 'SPF EliōDrops 30 Glow', img: '/lira/spf/spf-eliodrops-30-glow.jpg' },
      { name: 'SPF EliōDrops 30 Sheer', img: '/lira/spf/spf-eliodrops-30-sheer.jpg' },
      { name: 'SPF Solar Shield 30+ Classic Tint', img: '/lira/spf/spf-solar-shield-30-classic-tint.webp' },
      { name: 'SPF Solar Shield 30+ Hydrating', img: '/lira/spf/spf-solar-shield-30-hydrating.webp' },
      { name: 'SPF Solar Shield 30 Oil Free', img: '/lira/spf/spf-solar-shield-30-oil-free.webp' },
    ],
  },
  {
    icon: Leaf,
    name: 'REGEN',
    tag: 'Skin Regeneration',
    categoryImg: '/lira/regen/_category.webp',
    desc: 'Advanced regenerative formulations harnessing plant stem cell technology to accelerate skin renewal, support healing post-procedure, and restore optimal skin function and health.',
    products: [
      { name: 'REGEN PDRN+ Creme', img: '/lira/regen/regen-pdrn-creme.webp' },
      { name: 'REGEN PDRN+ Serum', img: '/lira/regen/regen-pdrn-serum.webp' },
    ],
  },
]

export default function LiraClinicalPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Lira Clinical', href: '/lira-clinical' },
      ]} />
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
            Lira Clinical Skincare Redcliffe
          </h1>
          <p
            className="mt-4 text-base sm:text-lg max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
          >
            Science discovering nature&apos;s secrets. Professional-grade skincare available exclusively through authorised clinics — at The Derm Studio, Redcliffe.
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
              Lira Clinical is a globally recognised, professional-grade skincare brand founded by four female skincare professionals and educators. Built on the philosophy of <em>&ldquo;Science discovering nature&apos;s secrets,&rdquo;</em> the brand sits at the intersection of clinical science and high-performance botanical ingredients — with every product formulated to deliver three outcomes: <strong>brighter, healthier, younger-looking skin.</strong>
            </p>
            <p>
              Lira Clinical is not available in general retail. It is exclusively distributed through authorised skin professionals — ensuring that every product is recommended correctly, used as part of a professional treatment protocol, and matched to each client&apos;s individual skin concerns. This practitioner-only model protects the integrity of the formulations and, more importantly, protects your skin from the misapplication of high-potency actives.
            </p>
            <p>
              What distinguishes Lira Clinical from over-the-counter skincare is its commitment to both science and ingredient quality. Every active is chosen for its evidence base, every concentration is optimised for clinical efficacy, and every product is designed to work as part of a comprehensive treatment plan — not in isolation. The result is skincare that performs at a level inaccessible through retail channels.
            </p>
            <p>
              The Derm Studio is a proud authorised Lira Clinical stockist. All products and treatments used in the studio meet professional clinical standards, and Rachael prescribes Lira Clinical home-care protocols to extend and protect the results achieved in-clinic.
            </p>
          </div>
        </div>
      </section>

      {/* ── Technology Features ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            What Makes Lira Clinical Different
          </h2>
          <p
            className="text-base text-center max-w-2xl mx-auto mb-12"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            Five clinically significant features that set Lira Clinical apart from standard skincare.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="flex flex-col gap-4 p-7 rounded-2xl bg-white"
                  style={{ border: '1px solid var(--color-cream-dark)' }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--color-cream-dark)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'var(--color-rose)' }} />
                  </div>
                  <h3
                    className="text-base font-bold leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {feature.desc}
                  </p>
                </div>
              )
            })}
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
            The Derm Studio is an Authorised Lira Clinical Stockist in Redcliffe
          </h2>
          <p
            className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Lira Clinical cannot be purchased online or through general retail — it is exclusively distributed through authorised skin professionals. Visit The Derm Studio on Marine Parade, Redcliffe to browse the full range and receive a personalised product prescription from Rachael.
          </p>
        </div>
      </section>

      {/* ── Product Ranges Grid ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Product Lines Available In-Studio
          </h2>
          <p
            className="text-center text-base mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            Rachael will recommend the right products for your skin and concerns. All lines are stocked at The Derm Studio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productRanges.map((range) => (
              <div
                key={range.name}
                className="flex flex-col gap-4 p-7 rounded-2xl"
                style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
              >
                <div className="relative h-36 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={range.categoryImg}
                    alt={`Lira Clinical ${range.name} line`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--color-rose)', color: 'white', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {range.tag}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                >
                  Lira Clinical {range.name}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  {range.desc}
                </p>
                <Link
                  href="/contact"
                  className="text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{ color: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Ask about this range →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Individual Products ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Shop the Full Range
          </h2>
          <p
            className="text-base text-center max-w-2xl mx-auto mb-16"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            All products available exclusively in-studio. Book a consultation and Rachael will prescribe the right products for your skin.
          </p>

          {productRanges.map((range) => (
            <div key={range.name} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-rose)', color: 'white', fontFamily: "'DM Sans', sans-serif" }}
                >
                  {range.tag}
                </span>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                >
                  Lira Clinical {range.name}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {range.products.map((product) => (
                  <div
                    key={product.name}
                    className="flex flex-col gap-2 bg-white rounded-xl p-3"
                    style={{ border: '1px solid var(--color-cream-dark)' }}
                  >
                    <div className="relative h-36 rounded-lg overflow-hidden">
                      <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      />
                    </div>
                    <p
                      className="text-xs font-medium text-center leading-snug"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                    >
                      {product.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Visit Us CTA ── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-espresso)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Shop Lira Clinical In-Studio
          </h2>
          <p
            className="text-base mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
          >
            1/93 Marine Parade, Redcliffe QLD 4020
          </p>
          <p
            className="text-sm mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)', opacity: 0.75 }}
          >
            {/* TODO: Add confirmed hours once provided by client */}
            Book a consultation to receive a personalised Lira Clinical home-care prescription.
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

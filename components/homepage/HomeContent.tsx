'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Sparkles,
  FlaskConical,
  Sun,
  Pipette,
  ShieldCheck,
  Droplets,
  Scan,
  Package,
  ChevronDown,
  Star,
  MapPin,
  GraduationCap,
  ShoppingBag,
  ClipboardList,
  CheckCircle,
  TrendingUp,
} from 'lucide-react'

/* ─── Shared helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

const scrollFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

/* ─── Section 3: Service Cards ─── */
const services = [
  {
    icon: Sparkles,
    name: 'Corrective Facial',
    desc: 'Meticulously curated by expert skin therapists — brightening, resurfacing, and delivering a surge of hydration. Includes LED light therapy and a neck and shoulder massage.',
    href: '/services/corrective-facial-redcliffe',
  },
  {
    icon: Droplets,
    name: 'Hybrid Facial',
    desc: 'The next-level upgrade — corrective facial blended with a gentle peel infusion for deeper results with zero downtime. Includes LED light therapy.',
    href: '/services/hybrid-facial-redcliffe',
  },
  {
    icon: Scan,
    name: 'Dermaplaning Facial',
    desc: 'Ultra-luxurious dermaplaning to reveal flawlessly smooth, radiant skin. Enhanced with a hydrating mask and LED light therapy.',
    href: '/services/dermaplaning-facial-redcliffe',
  },
  {
    icon: FlaskConical,
    name: 'Corrective Peels',
    desc: 'Three levels of Lira Clinical professional peel therapy — from brightening Level 1s to intensive Level 3 correction for pigmentation, acne, and ageing.',
    href: '/services#corrective-peels',
  },
  {
    icon: Pipette,
    name: 'Skin Needling',
    desc: 'Collagen induction therapy infused with NCTF (54 active ingredients) or Exosomes for brighter, firmer, smoother skin from within.',
    href: '/services/skin-needling-nctf-redcliffe',
  },
  {
    icon: Sun,
    name: 'Korean Lash Lift & Tint',
    desc: 'Lifted, curled, and darkened natural lashes lasting 6–8 weeks. Effortless eye definition without extensions or daily mascara.',
    href: '/services/korean-lash-lift-tint-redcliffe',
  },
  {
    icon: ShieldCheck,
    name: 'Free Consultation',
    desc: 'A professional skin analysis with personalised recommendations for treatments and skincare. The perfect obligation-free starting point.',
    href: '/book',
  },
  {
    icon: Package,
    name: 'Lira Clinical',
    desc: 'Authorised stockist of Lira Clinical professional skincare. Prescribed and available exclusively through authorised clinics.',
    href: '/lira-clinical',
  },
]

/* ─── Section 4: Why Choose reasons ─── */
const reasons = [
  {
    icon: MapPin,
    title: 'Located on Marine Parade, Redcliffe',
    desc: 'Convenient Redcliffe location on Marine Parade with easy access and parking nearby.',
  },
  {
    icon: GraduationCap,
    title: 'Qualified Dermal Therapists',
    desc: 'All treatments delivered by fully qualified dermal therapists with advanced training.',
  },
  {
    icon: ShoppingBag,
    title: 'Authorised Lira Clinical Stockist',
    desc: 'An authorised Lira Clinical stockist on the Redcliffe Peninsula — professional-grade skincare prescribed in-clinic.',
  },
  {
    icon: ClipboardList,
    title: 'Personalised Skin Plans',
    desc: 'Every client receives a tailored treatment plan based on a thorough skin consultation.',
  },
  {
    icon: CheckCircle,
    title: 'Free Skin Consultations',
    desc: 'We discuss your skin goals openly before recommending any treatment.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven Approach',
    desc: 'Clinically proven treatments, not trends. We only recommend what works.',
  },
]

/* ─── Section 6: Suburb chips ─── */
const suburbs = [
  { name: 'Redcliffe', href: '/skin-clinic-redcliffe' },
  { name: 'Scarborough', href: '/skin-clinic-scarborough' },
  { name: 'Clontarf', href: '/skin-clinic-clontarf' },
  { name: 'Kippa-Ring', href: '/skin-clinic-kippa-ring' },
  { name: 'Brighton', href: '/skin-clinic-brighton' },
  { name: 'Newport', href: '/skin-clinic-newport' },
  { name: 'Deception Bay', href: '/skin-clinic-deception-bay' },
  { name: 'Mango Hill', href: '/skin-clinic-mango-hill' },
  { name: 'North Lakes', href: '/skin-clinic-north-lakes' },
  { name: 'Moreton Bay Peninsula', href: '/skin-clinic-moreton-bay' },
  { name: '+ All Surrounding Areas', href: '/service-areas' },
]

/* ─── Section 7: Google Reviews ─── */
const reviews = [
  {
    author: 'Pia Schwämmle',
    text: "My skin has never looked or felt better. Every visit is such a wonderful experience — I always feel truly cared for and looked after. Rachael puts in so much extra effort and it really shows. My skin is glowing, healthy, and happy every time I leave. You can tell she genuinely cares about her clients. Highly recommend to anyone who wants their skin to feel amazing and their heart full!",
  },
  {
    author: 'Leah Lewis-Macpherson',
    text: "A truly amazing experience, regardless of whether you are wanting to relax and be pampered with a facial, or services that pack a punch and offer true results, Rachel delivers time after time. If you are looking for someone who actually listens to your skincare concerns and is invested in working with you to address them, then this is your place.",
  },
  {
    author: 'Muscle Nerds',
    text: "I wouldn't go to anyone else ever for my skin treatments — I've been with Rach for over 6 years now, and the improvement in skin over that time has been unreal. She doesn't sell you stuff for the sake of selling you stuff — she's honest about what you need and don't need. And she's just SUCH A JOY. Couldn't recommend her any more highly. Infinity stars ⭐",
  },
  {
    author: 'Niomi Loveridge',
    text: "Absolutely loved my face needling treatment! The service was excellent, and the results exceeded my expectations. My skin has never looked this good — smooth, refreshed, and glowing. Highly recommend to anyone considering it!",
  },
]

/* ════════════════════════════════════════ */
export function HomeContent() {
  return (
    <>
      {/* ──────────────────────────────────────
          SECTION 1 — HERO
      ────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center min-h-screen overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dusty Rose overlay at 60% opacity */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(196,152,152,0.60)' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto py-32">
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skin Clinic Redcliffe | Expert Facials &amp; Skin Treatments
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto text-white/90"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Redcliffe&apos;s specialist skin clinic — corrective facials, Lira Clinical corrective peels, advanced skin needling, and professional lash treatments. Located on Marine Parade, Redcliffe.
          </motion.p>

          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/book"
              className="inline-block text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
              style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose-dark)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose)' }}
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block font-semibold px-8 py-4 rounded-full text-base text-white transition-colors border-2 border-white hover:bg-white/10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View Treatments
            </Link>
          </motion.div>
        </div>

        {/* Scroll arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </section>

      {/* ──────────────────────────────────────
          SECTION 2 — TRUST BAR
      ────────────────────────────────────── */}
      <section className="py-8 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            {[
              'Qualified Dermal Therapists',
              'Lira Clinical Stockist',
              'Free Skin Consultations',
              'Redcliffe Based',
              'Results-Driven Treatments',
            ].map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: 'var(--color-rose)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--color-espresso)' }}>
                  {signal}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          SECTION 3 — SERVICES GRID
      ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...scrollFadeUp(0)} className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Advanced Skin Treatments in Redcliffe
            </h2>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              Expert treatments tailored to your skin — corrective facials, clinical peels, skin needling, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon
              return (
                <motion.div
                  key={svc.name}
                  {...scrollFadeUp(i * 0.08)}
                  className="group relative flex flex-col gap-3 p-5 sm:p-6 rounded-2xl shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    borderLeft: '3px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--color-rose)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(196,152,152,0.18)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: 'var(--color-rose)' }} />
                  <h3
                    className="text-lg font-bold leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {svc.desc}
                  </p>
                  <Link
                    href={svc.href}
                    className="text-sm font-semibold mt-auto transition-opacity hover:opacity-70"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
                  >
                    Learn More →
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          SECTION 4 — WHY CHOOSE
      ────────────────────────────────────── */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — Rose bg */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
            className="flex items-center justify-center px-8 py-20"
            style={{ backgroundColor: 'var(--color-rose)' }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-white leading-tight text-center md:text-left"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Redcliffe Clients Choose The Derm Studio
            </h2>
          </motion.div>

          {/* Right — Cream bg with reasons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.15 }}
            className="px-8 sm:px-12 py-16"
            style={{ backgroundColor: 'var(--color-cream)' }}
          >
            <div className="flex flex-col gap-6">
              {reasons.map((reason) => {
                const Icon = reason.icon
                return (
                  <div key={reason.title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'var(--color-cream-dark)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--color-rose)' }} />
                    </div>
                    <div>
                      <p
                        className="text-base font-semibold mb-1"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                      >
                        {reason.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                      >
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          SECTION 5 — LIRA CLINICAL SPOTLIGHT
      ────────────────────────────────────── */}
      <section className="py-24 px-4" style={{ backgroundColor: 'var(--color-espresso)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...scrollFadeUp(0)}>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
            >
              Exclusive Stockist
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Redcliffe&apos;s Sole Lira Clinical Stockist
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
            >
              Lira Clinical is a premium professional skincare brand rooted in science — combining powerful active ingredients with botanicals to deliver clinically proven results.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
            >
              The Derm Studio is an authorised Lira Clinical stockist — products can only be purchased through approved clinics, not online or through general retail. Rachael prescribes every Lira Clinical home-care protocol in-clinic.
            </p>
            <Link
              href="/lira-clinical"
              className="inline-block font-semibold px-7 py-3.5 rounded-full text-white border-2 border-white transition-colors hover:bg-white/10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Shop Lira Clinical
            </Link>
          </motion.div>

          <motion.div
            {...scrollFadeUp(0.2)}
            className="relative h-72 md:h-96 rounded-2xl overflow-hidden"
          >
            {/* Product image placeholder */}
            <div
              className="absolute inset-0 flex items-center justify-center rounded-2xl"
              style={{ backgroundColor: 'rgba(196,152,152,0.25)', border: '1px solid rgba(196,152,152,0.3)' }}
            >
              <div className="text-center">
                <Package className="w-16 h-16 mx-auto mb-3" style={{ color: 'var(--color-rose)' }} />
                <p
                  className="text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}
                >
                  {/* TODO: Add Lira Clinical product image */}
                  Lira Clinical Product Image
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          SECTION 6 — SERVICE AREAS
      ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...scrollFadeUp(0)} className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-5"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Serving Clients Across the Redcliffe Peninsula
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              Located on Marine Parade in Redcliffe, The Derm Studio provides expert skin treatments to clients from across the Moreton Bay Peninsula. Our team welcomes clients from Scarborough, Clontarf, Kippa-Ring, Brighton, Newport, Deception Bay, Mango Hill, North Lakes and all surrounding suburbs.
            </p>
          </motion.div>

          <motion.div
            {...scrollFadeUp(0.15)}
            className="flex flex-wrap gap-3 justify-center"
          >
            {suburbs.map((suburb) => (
              <Link
                key={suburb.name}
                href={suburb.href}
                className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: 'var(--color-espresso)', fontFamily: "'DM Sans', sans-serif" }}
              >
                {suburb.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          SECTION 7 — GOOGLE REVIEWS
      ────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...scrollFadeUp(0)} className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Real Results, Real People
            </h2>
            {/* Google Reviews badge */}
            <div className="inline-flex items-center gap-2.5 mt-2 px-4 py-2 rounded-full bg-white shadow-sm"
              style={{ border: '1px solid var(--color-cream-dark)' }}>
              {/* Google G icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}>
                5.0
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: '#F59E0B' }} />
                ))}
              </div>
              <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}>
                on Google Reviews
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.author}
                {...scrollFadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-7 flex flex-col gap-5"
                style={{ border: '1px solid var(--color-cream-dark)' }}
              >
                {/* Top row: stars + Google badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" style={{ color: '#F59E0B' }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}>
                      Google Review
                    </span>
                  </div>
                </div>

                {/* Review text */}
                <p
                  className="text-sm sm:text-base leading-relaxed flex-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Reviewer name */}
                <div className="flex items-center gap-3 pt-1" style={{ borderTop: '1px solid var(--color-cream-dark)' }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-white"
                    style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {r.author.charAt(0)}
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                  >
                    {r.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          SECTION 8 — MEMBERSHIPS TEASER
      ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...scrollFadeUp(0)} className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Skin Memberships
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              The clients who see the biggest results are those who commit to regular treatment.
              Our membership program makes consistency simple — regular treatments, exclusive savings,
              and priority booking rolled into one plan.
            </p>
            <div
              className="inline-block mt-5 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{ backgroundColor: 'var(--color-rose)', color: '#fff', fontFamily: "'DM Sans', sans-serif" }}
            >
              Coming Soon
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: 'The Essential',
                tagline: 'Perfect introduction to consistent skin care',
                perks: ['1 treatment / month', '10% off additional treatments', 'Priority booking'],
              },
              {
                name: 'The Glow',
                tagline: 'Targeting real, lasting results',
                perks: ['1 premium + 1 add-on / month', '15% off additional treatments', '6-monthly skin review'],
                highlight: true,
              },
              {
                name: 'The Studio',
                tagline: 'Total commitment to your skin',
                perks: ['2 treatments / month (full menu)', '20% off additional treatments', 'Quarterly skin review'],
              },
            ].map((tier, i) => (
              <motion.div
                key={tier.name}
                {...scrollFadeUp(i * 0.1)}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{
                  backgroundColor: tier.highlight ? 'var(--color-rose)' : 'var(--color-cream)',
                  border: tier.highlight ? '2px solid var(--color-rose)' : '1px solid var(--color-cream-dark)',
                }}
              >
                <div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: tier.highlight ? '#fff' : 'var(--color-espresso)',
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: tier.highlight ? 'rgba(255,255,255,0.85)' : 'var(--color-charcoal)',
                    }}
                  >
                    {tier.tagline}
                  </p>
                </div>
                <ul className="flex flex-col gap-2">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: tier.highlight ? 'rgba(255,255,255,0.8)' : 'var(--color-rose)' }}
                      />
                      <span
                        className="text-sm"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: tier.highlight ? 'rgba(255,255,255,0.9)' : 'var(--color-charcoal)',
                        }}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div {...scrollFadeUp(0.2)} className="text-center">
            <Link
              href="/memberships"
              className="inline-block text-center text-sm font-semibold text-white px-7 py-3.5 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose-dark)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose)' }}
            >
              View Full Membership Details
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          SECTION 9 — GOOGLE MAPS EMBED
      ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...scrollFadeUp(0)}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Find Us at The Derm Studio, Redcliffe
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <motion.div
              {...scrollFadeUp(0)}
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ border: '1px solid var(--color-cream-dark)' }}
            >
              <iframe
                src="https://www.google.com/maps?q=1%2F93+Marine+Parade+Redcliffe+QLD+4020&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Derm Studio location — Marine Parade, Redcliffe"
              />
            </motion.div>

            {/* Contact Card */}
            <motion.div
              {...scrollFadeUp(0.15)}
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
            >
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
              >
                The Derm Studio
              </h3>

              <div className="flex flex-col gap-4 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="flex gap-3">
                  <span className="shrink-0 mt-0.5">📍</span>
                  <address className="not-italic" style={{ color: 'var(--color-charcoal)' }}>
                    1/93 Marine Parade,<br />
                    Redcliffe QLD 4020
                  </address>
                </div>
                <div className="flex gap-3 items-center">
                  <span>📞</span>
                  <a href="tel:+61414185007" style={{ color: 'var(--color-charcoal)' }}>
                    +61 414 185 007
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <span>✉️</span>
                  <a href="mailto:thedermstudio.contact@gmail.com" style={{ color: 'var(--color-charcoal)' }}>
                    thedermstudio.contact@gmail.com
                  </a>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 mt-0.5">🕐</span>
                  <div style={{ color: 'var(--color-charcoal)' }}>
                    {/* TODO: Confirm hours with client */}
                    Mon–Fri: 9:00am – 5:00pm<br />
                    Sat: 9:00am – 2:00pm
                  </div>
                </div>
              </div>

              <Link
                href="/book"
                className="inline-block text-center text-white font-semibold px-6 py-3.5 rounded-full mt-2 transition-colors"
                style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose-dark)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose)' }}
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          SECTION 9 — CTA BANNER
      ────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-rose)' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Transform Your Skin?
          </h2>
          <p
            className="text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Book a free skin consultation at Redcliffe&apos;s specialist skin clinic. Located on Marine Parade, Redcliffe — authorised Lira Clinical stockist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-block font-semibold px-8 py-4 rounded-full text-base transition-colors"
              style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-rose)',
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-cream)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-white)' }}
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+61414185007"
              className="inline-block font-semibold px-8 py-4 rounded-full text-base text-white border-2 border-white transition-colors hover:bg-white/10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}

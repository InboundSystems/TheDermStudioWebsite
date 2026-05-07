import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { services } from '@/lib/services'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skin Treatments Redcliffe | Services',
  description:
    "Explore The Derm Studio's full range of professional skin treatments in Redcliffe — facials, chemical peels, LED light therapy, skin needling, HydraFacial, and more at Bluewater Square.",
  alternates: { canonical: 'https://thedermstudio.com.au/services' },
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative py-28 md:py-36"
        style={{ background: 'linear-gradient(135deg, var(--color-espresso) 0%, #4a2f2f 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} light />
          <h1
            className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Treatments
          </h1>
          <p
            className="mt-4 text-lg max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.8)' }}
          >
            Advanced skin treatments delivered by qualified dermal therapists at Redcliffe's premier skin clinic.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block rounded-3xl p-8 bg-white border border-cream-dark transition-all duration-300 hover:shadow-xl hover:border-rose"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-cream">
                  <span
                    className="text-xl font-bold"
                    style={{ color: 'var(--color-rose)' }}
                  >
                    {service.name.charAt(0)}
                  </span>
                </div>
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                >
                  {service.name}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  {service.tagline}
                </p>
                <div className="flex items-center gap-2" style={{ color: 'var(--color-rose)' }}>
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-cream-dark)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Not sure which treatment is right for you?
          </h2>
          <p
            className="text-base mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            Book a consultation with one of our qualified dermal therapists. We'll assess your skin and recommend a personalised treatment plan.
          </p>
          <Link
            href="/book"
            className="inline-block text-sm font-semibold px-8 py-4 rounded-full text-white transition-colors bg-rose hover:bg-rose-dark"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { serviceMenu } from '@/lib/services'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skin Treatments Redcliffe | Full Service Menu — The Derm Studio',
  description:
    "Explore The Derm Studio's full service menu in Redcliffe — corrective facials, Lira Clinical corrective peels, skin needling with NCTF and Exosomes, dermaplaning, and lash lifting at Bluewater Square.",
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
            From corrective facials and Lira Clinical peels to advanced skin needling and lash lifting — expert treatments delivered by qualified dermal therapists at Bluewater Square, Redcliffe.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <div className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceMenu.map((category) => (
            <section key={category.id} id={category.id}>
              {/* Category Heading */}
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                >
                  {category.category}
                </h2>
                {category.note && (
                  <p
                    className="mt-2 text-sm max-w-2xl"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {category.note}
                  </p>
                )}
              </div>

              {/* Items Grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => {
                  const href = item.slug
                    ? `/services/${item.slug}`
                    : (item.externalHref ?? '/book')
                  const hasSlug = !!item.slug

                  return (
                    <Link
                      key={item.name}
                      href={href}
                      className="group block rounded-3xl p-7 bg-white border border-cream-dark transition-all duration-300 hover:shadow-lg hover:border-rose"
                    >
                      {/* Price & Duration */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span
                          className="text-lg font-bold"
                          style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                        >
                          {item.price}
                        </span>
                        <span
                          className="text-xs"
                          style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                        >
                          · {item.duration}
                        </span>
                      </div>

                      <h3
                        className="text-base font-bold mb-2"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                      >
                        {item.tagline}
                      </p>

                      <div className="flex items-center gap-1.5" style={{ color: 'var(--color-rose)' }}>
                        <span
                          className="text-sm font-semibold"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {hasSlug ? 'Learn more' : 'Book now'}
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

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
            Book a complimentary consultation with one of our qualified dermal therapists. We&apos;ll assess your skin and recommend a personalised treatment plan — obligation-free.
          </p>
          <Link
            href="/book"
            className="inline-block text-sm font-semibold px-8 py-4 rounded-full text-white transition-colors bg-rose hover:bg-rose-dark"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}

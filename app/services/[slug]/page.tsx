import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { getServiceBySlug, getRelatedServices, services } from '@/lib/services'

const CATEGORY_LINKS: Record<string, { label: string; href: string }> = {
  'Facials': { label: 'Facials Redcliffe', href: '/services/facials-redcliffe' },
  'Corrective Peels': { label: 'Skin Treatments Redcliffe', href: '/services/skin-treatments-redcliffe' },
  'Skin Needling': { label: 'Skin Treatments Redcliffe', href: '/services/skin-treatments-redcliffe' },
  'Lash & Brow': { label: 'All Treatments', href: '/treatments' },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const related = getRelatedServices(service.relatedSlugs)
  const categoryLink = CATEGORY_LINKS[service.category]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: service.name, href: `/services/${service.slug}` },
      ]} />
      <FAQSchema faqs={service.faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <ServiceSchema
        serviceName={service.name}
        description={service.heroSubtitle}
        url={`https://www.thedermstudio.com.au/services/${service.slug}`}
      />
      <main>
      {/* Hero */}
      <section
        className="relative py-28 md:py-36"
        style={{ background: 'linear-gradient(135deg, var(--color-espresso) 0%, #4a2f2f 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
            light
          />
          <h1
            className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.heroTitle}
          </h1>
          <p
            className="mt-4 text-lg max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.8)' }}
          >
            {service.heroSubtitle}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
            >
              {service.price}
            </span>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
            >
              {service.duration}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="inline-block text-sm font-semibold px-7 py-3.5 rounded-full text-white transition-colors bg-rose hover:bg-rose-dark"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-block text-sm font-semibold px-7 py-3.5 rounded-full transition-colors border border-white/40 text-white hover:bg-white/10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-5">
              {service.intro.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  {para}
                </p>
              ))}
            </div>
            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div
                className="rounded-3xl p-8 sticky top-28"
                style={{ backgroundColor: 'var(--color-cream)' }}
              >
                <div className="mb-4">
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {service.price}
                  </span>
                  <span
                    className="ml-2 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    · {service.duration}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                >
                  Ready to book?
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  Our qualified dermal therapists are ready to create a treatment plan tailored to your skin.
                </p>
                <Link
                  href="/book"
                  className="block text-center text-sm font-semibold px-6 py-3.5 rounded-full text-white transition-colors bg-rose hover:bg-rose-dark"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Book a Consultation
                </Link>
                <p
                  className="mt-4 text-xs text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  1/93 Marine Parade, Redcliffe QLD
                </p>
                {categoryLink && (
                  <p
                    className="mt-4 text-xs text-center leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    Part of{' '}
                    <Link href={categoryLink.href} className="underline" style={{ color: 'var(--color-rose)' }}>
                      {categoryLink.label}
                    </Link>
                  </p>
                )}
                {service.relatedPackage && (
                  <p
                    className="mt-4 text-xs text-center leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    Want to save with a program?{' '}
                    <Link href={service.relatedPackage.href} className="underline" style={{ color: 'var(--color-rose)' }}>
                      See {service.relatedPackage.name}
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Why Choose {service.name}?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 bg-white"
                style={{ border: '1px solid var(--color-cream-dark)' }}
              >
                <div
                  className="w-8 h-8 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--color-rose)', opacity: 0.15 + (i % 3) * 0.05 }}
                />
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            What to Expect
          </h2>
          <div className="space-y-6">
            {service.process.map((step, i) => (
              <div
                key={i}
                className="flex gap-6 rounded-2xl p-7"
                style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-rose)' }}
                >
                  <span
                    className="text-xs font-bold text-white"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-base font-bold mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Frequently Asked Questions
          </h2>
          <div
            className="rounded-3xl p-8 bg-white"
            style={{ border: '1px solid var(--color-cream-dark)' }}
          >
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-20 md:py-28" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Related Treatments
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group block rounded-3xl p-7 border border-cream-dark transition-all duration-300 hover:shadow-lg hover:border-rose"
                  style={{ backgroundColor: 'var(--color-cream)' }}
                >
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
                  >
                    {rel.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {rel.tagline}
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
      )}

      {/* Bottom CTA */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, var(--color-rose) 0%, var(--color-rose-dark) 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to start your skin journey?
          </h2>
          <p
            className="text-base mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)' }}
          >
            Book a consultation at The Derm Studio — 1/93 Marine Parade, Redcliffe.
          </p>
          <Link
            href="/book"
            className="inline-block text-sm font-semibold px-8 py-4 rounded-full transition-colors"
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--color-rose-dark)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}

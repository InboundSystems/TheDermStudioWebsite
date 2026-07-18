import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { FaqAccordion } from '@/components/ui/FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ | The Derm Studio Redcliffe',
  description:
    'Frequently asked questions about treatments, pricing, booking and location at The Derm Studio, 1/93 Marine Parade, Redcliffe.',
  alternates: { canonical: 'https://www.thedermstudio.com.au/faq' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'FAQ', href: '/faq' },
]

const faqs = [
  {
    question: 'What skin treatments do you offer?',
    answer:
      'Corrective facials, hybrid facials, dermaplaning, Lira Clinical corrective peels (Levels 1–3), skin needling with NCTF or Exosomes, and Korean lash lifting, plus LED light therapy as an add-on to any treatment.',
  },
  {
    question: 'What is Lira Clinical?',
    answer:
      'A professional-grade skincare brand available only through authorised clinics. The Derm Studio is an authorised Lira Clinical stockist.',
  },
  {
    question: 'Where are you located?',
    answer:
      '1/93 Marine Parade, Redcliffe QLD 4020, with the full service area covering the Moreton Bay Peninsula.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Online via the booking page, by phone/text on +61 414 185 007, or through the contact form. Every new client starts with a free consultation.',
  },
  {
    question: 'How much does a treatment cost?',
    answer:
      'Pricing starts from $15 for a brow tint up to $449 for Skin Needling with Exosomes; see the full price list on the Treatments page, or ask about the Skin Packages for bundled savings.',
  },
  {
    question: 'What is a Corrective Peel?',
    answer:
      'A Lira Clinical professional peel available in three levels of intensity, from a no-prep brightening Level 1 to an intensive Level 3 for complex concerns.',
  },
  {
    question: 'How often should I have a treatment?',
    answer:
      'Facials are generally recommended monthly for maintenance; peel and needling courses are typically spaced 2–6 weeks apart. Your therapist confirms a schedule at consultation.',
  },
  {
    question: 'What should I do before my appointment?',
    answer:
      'Avoid sun exposure and active ingredients like retinol for a few days beforehand, and let your therapist know about any allergies or medications.',
  },
  {
    question: 'Do you offer a free consultation?',
    answer:
      'Yes — every new client receives a complimentary 30-minute skin consultation before any treatment is recommended.',
  },
]

export default function FaqPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
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
              Frequently Asked Questions
            </h1>
            <p
              className="mt-4 text-lg max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.8)' }}
            >
              Answers to the questions we hear most from clients at The Derm Studio, Marine Parade, Redcliffe.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl p-8 bg-white"
              style={{ border: '1px solid var(--color-cream-dark)' }}
            >
              <FaqAccordion faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
            </div>
            <p
              className="mt-8 text-center text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
            >
              Still have a question?{' '}
              <Link href="/contact" style={{ color: 'var(--color-rose)' }}>
                Get in touch
              </Link>{' '}
              and we&apos;ll help you out directly.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: 'var(--color-espresso)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Book Your Free Consultation?
            </h2>
            <p className="text-base mb-8" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-blush)' }}>
              1/93 Marine Parade, Redcliffe QLD 4020
            </p>
            <Link
              href="/book"
              className="inline-block font-semibold text-white px-8 py-4 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Skin Treatment | The Derm Studio Redcliffe',
  description:
    "Book your facial, chemical peel, LED light therapy or skin consultation at The Derm Studio — Redcliffe's specialist skin clinic at Marine Parade, Redcliffe.",
}

export default function BookPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-20 pb-12 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto text-center pt-10">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
          >
            Marine Parade, Redcliffe
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
          >
            Book Your Skin Consultation at The Derm Studio
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
          >
            We offer a <strong>complimentary skin consultation</strong> with every new client booking. Our qualified dermal therapists take the time to understand your skin goals before recommending any treatment or product.
          </p>
        </div>
      </section>

      {/* ── Booking Widget ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden shadow-sm"
            style={{ border: '1px solid var(--color-cream-dark)' }}
          >
            <iframe
              src="https://the-derm-studio.square.site/"
              width="100%"
              height="700"
              style={{ border: 0, display: 'block' }}
              title="Book at The Derm Studio"
              loading="lazy"
            />
          </div>
          <p
            className="mt-4 text-sm text-center"
            style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)', opacity: 0.6 }}
          >
            Having trouble with the booking widget? {' '}
            <Link href="/contact" style={{ color: 'var(--color-rose)' }} className="hover:opacity-80">
              Contact us directly
            </Link>
            {' '} and we&apos;ll get you booked in.
          </p>
        </div>
      </section>

      {/* ── Clinic Details ── */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div className="flex gap-4 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-rose)' }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                >
                  Our Location
                </p>
                <address
                  className="text-sm not-italic leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  1/93 Marine Parade<br />
                  Redcliffe QLD 4020
                </address>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-rose)' }}
              >
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                >
                  Opening Hours
                </p>
                <div
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                >
                  {/* TODO: Confirm hours with client */}
                  Mon–Fri: 9:00am – 5:00pm<br />
                  Sat: 9:00am – 2:00pm<br />
                  Sun: Closed
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-rose)' }}
              >
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                >
                  Prefer to Call?
                </p>
                <a
                  href="tel:+61414185007"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
                >
                  +61 414 185 007
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

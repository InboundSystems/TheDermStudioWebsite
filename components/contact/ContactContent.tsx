'use client'

import { useState } from 'react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

const serviceOptions = [
  'Facial',
  'Chemical Peel',
  'LED Light Therapy',
  'Skin Needling',
  'Dermal Therapy',
  'HydraFacial',
  'Microdermabrasion',
  'Lira Clinical Products',
  'General Enquiry',
]

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  service?: string
}

const inputBase: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  color: 'var(--color-espresso)',
  backgroundColor: 'white',
  border: '1px solid var(--color-cream-dark)',
  borderRadius: '0.75rem',
  width: '100%',
  padding: '0.75rem 1rem',
  fontSize: '0.9375rem',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export function ContactContent() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required.'
    if (!form.lastName.trim()) e.lastName = 'Last name is required.'
    if (!form.email.trim()) {
      e.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.'
    }
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.service) e.service = 'Please select a service.'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitting(true)
    // TODO: Replace with real form submission (Formspree, Netlify Forms, or /api/contact route)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    setSubmitted(true)
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="pt-20" style={{ backgroundColor: 'var(--color-rose)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
            light
          />
          <h1
            className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact The Derm Studio — Redcliffe Skin Clinic
          </h1>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — Enquiry Form */}
          <div>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
            >
              Send Us an Enquiry
            </h2>

            {submitted ? (
              <div
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
              >
                <CheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: 'var(--color-rose)' }} />
                <div>
                  <p
                    className="text-base font-semibold mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                  >
                    Thank you! We&apos;ll be in touch within 24 hours.
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    Your enquiry has been received. One of our therapists will contact you shortly to discuss your skin goals.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                    >
                      First Name <span style={{ color: 'var(--color-rose)' }}>*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      style={{
                        ...inputBase,
                        borderColor: errors.firstName ? '#E53E3E' : 'var(--color-cream-dark)',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-rose)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = errors.firstName ? '#E53E3E' : 'var(--color-cream-dark)' }}
                    />
                    {errors.firstName && (
                      <p className="text-xs" style={{ color: '#E53E3E', fontFamily: "'DM Sans', sans-serif" }}>
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                    >
                      Last Name <span style={{ color: 'var(--color-rose)' }}>*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      style={{
                        ...inputBase,
                        borderColor: errors.lastName ? '#E53E3E' : 'var(--color-cream-dark)',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-rose)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = errors.lastName ? '#E53E3E' : 'var(--color-cream-dark)' }}
                    />
                    {errors.lastName && (
                      <p className="text-xs" style={{ color: '#E53E3E', fontFamily: "'DM Sans', sans-serif" }}>
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                  >
                    Email Address <span style={{ color: 'var(--color-rose)' }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    style={{
                      ...inputBase,
                      borderColor: errors.email ? '#E53E3E' : 'var(--color-cream-dark)',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-rose)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.email ? '#E53E3E' : 'var(--color-cream-dark)' }}
                  />
                  {errors.email && (
                    <p className="text-xs" style={{ color: '#E53E3E', fontFamily: "'DM Sans', sans-serif" }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                  >
                    Phone Number <span style={{ color: 'var(--color-rose)' }}>*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    style={{
                      ...inputBase,
                      borderColor: errors.phone ? '#E53E3E' : 'var(--color-cream-dark)',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-rose)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.phone ? '#E53E3E' : 'var(--color-cream-dark)' }}
                  />
                  {errors.phone && (
                    <p className="text-xs" style={{ color: '#E53E3E', fontFamily: "'DM Sans', sans-serif" }}>
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                  >
                    Service Interested In <span style={{ color: 'var(--color-rose)' }}>*</span>
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    style={{
                      ...inputBase,
                      borderColor: errors.service ? '#E53E3E' : 'var(--color-cream-dark)',
                      appearance: 'auto',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-rose)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors.service ? '#E53E3E' : 'var(--color-cream-dark)' }}
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs" style={{ color: '#E53E3E', fontFamily: "'DM Sans', sans-serif" }}>
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message (optional) */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-espresso)' }}
                  >
                    Message <span className="font-normal" style={{ opacity: 0.5 }}>(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us anything else you'd like us to know about your skin or concerns…"
                    style={{
                      ...inputBase,
                      resize: 'vertical',
                      minHeight: '100px',
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-rose)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-cream-dark)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="font-semibold text-white px-8 py-4 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
                  style={{ backgroundColor: 'var(--color-rose)', fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={(e) => { if (!submitting) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose-dark)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose)' }}
                >
                  {submitting ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT — Contact Details */}
          <div className="flex flex-col gap-10">
            <div>
              <h2
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-espresso)' }}
              >
                Get in Touch
              </h2>
              <div className="flex flex-col gap-6">

                {/* Phone — prominent */}
                <div className="flex gap-4 items-start">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--color-rose)' }} />
                  <div>
                    <p
                      className="text-xs uppercase tracking-wide font-semibold mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)', opacity: 0.6 }}
                    >
                      Call or Text
                    </p>
                    <a
                      href="tel:TODO"
                      className="text-2xl font-bold block transition-opacity hover:opacity-70"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-rose)' }}
                    >
                      {/* TODO: Confirm phone with client */}
                      Contact us to book
                    </a>
                    <p className="text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)', opacity: 0.55 }}>
                      Tap to call on mobile
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--color-rose)' }} />
                  <address
                    className="not-italic text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    Shop 10, Bluewater Square<br />
                    20 Anzac Avenue<br />
                    Redcliffe QLD 4020
                  </address>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-center">
                  <Mail className="w-5 h-5 shrink-0" style={{ color: 'var(--color-rose)' }} />
                  <a
                    href="mailto:TODO"
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {/* TODO: Confirm email with client */}
                    Get in touch via email
                  </a>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--color-rose)' }} />
                  <div
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--color-charcoal)' }}
                  >
                    {/* TODO: Confirm hours with client */}
                    <p className="font-semibold mb-1" style={{ color: 'var(--color-espresso)' }}>Opening Hours</p>
                    Mon–Fri: 9:00am – 5:00pm<br />
                    Sat: 9:00am – 2:00pm<br />
                    Sun: Closed
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm"
              style={{ border: '1px solid var(--color-cream-dark)' }}
            >
              <iframe
                src="https://www.google.com/maps?q=Shop+10+Bluewater+Square+20+Anzac+Ave+Redcliffe+QLD+4020&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Derm Studio location — Bluewater Square, Redcliffe"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

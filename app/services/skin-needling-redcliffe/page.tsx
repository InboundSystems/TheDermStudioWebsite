import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/seo/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Skin Needling Redcliffe | Collagen Induction Therapy — The Derm Studio',
  description:
    'Professional skin needling (collagen induction therapy) in Redcliffe for acne scars, fine lines and skin texture. The Derm Studio at Marine Parade, Redcliffe QLD.',
  alternates: { canonical: 'https://thedermstudio.com.au/services/skin-needling-redcliffe' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Skin Needling Redcliffe', href: '/services/skin-needling-redcliffe' },
]

const sections = [
  {
    heading: 'What is Skin Needling?',
    content:
      "Skin needling — also known as collagen induction therapy or microneedling — is a clinically proven treatment that uses a device fitted with fine, sterile needles to create controlled micro-channels in the skin. These micro-injuries trigger the body's natural wound-healing response, stimulating the production of new collagen and elastin without causing lasting damage to the skin. The result is progressively firmer, smoother, and more even-toned skin as the body's own repair mechanisms do the work. At The Derm Studio in Redcliffe, skin needling is performed exclusively by our qualified dermal therapist using professional-grade equipment and sterile protocols.",
  },
  {
    heading: 'Skin Needling Benefits',
    content:
      "Skin needling is particularly effective for concerns that don't respond well to surface-only treatments. It delivers proven results for acne scarring and post-acne marks, surgical and traumatic scars, fine lines and wrinkles, enlarged pores, uneven skin texture and tone, stretch marks, and dull or lacklustre complexion. By stimulating the skin from within rather than treating only the surface, skin needling achieves deeper structural change — rebuilding the dermis in a way that topical products alone cannot. Results are cumulative and continue to improve for months following a course of treatment.",
  },
  {
    heading: 'Your Skin Needling Session at The Derm Studio',
    content:
      'Before your skin needling treatment, a topical numbing cream is applied for approximately 30 minutes to ensure your comfort throughout the session. Your therapist selects the appropriate needle depth based on the specific skin concern being treated, the area of the face or body, and your individual skin tolerance. The device is moved systematically across the treatment area to ensure even coverage and consistent results. Post-treatment, a recovery serum and SPF are applied. Skin will appear red — similar to mild sunburn — for 24–48 hours following the session, which then resolves as the healing process begins. Total appointment time is typically 60–75 minutes including numbing and aftercare.',
  },
  {
    heading: 'Skin Needling Aftercare',
    content:
      'Aftercare is critical to ensure optimal healing and results. Avoid direct sun exposure and apply SPF 50+ daily — sun damage during the healing phase can cause pigmentation. Do not apply makeup for the first 24 hours. Use gentle, fragrance-free skincare products and avoid active ingredients including retinol, AHAs, and BHAs for at least 72 hours post-treatment. Avoid exercise, heat, and hot showers for 24 hours. Drink plenty of water to support skin recovery. Your therapist at The Derm Studio will provide a full written aftercare protocol tailored to your skin before you leave.',
  },
]

const faqs = [
  {
    question: 'Does skin needling hurt?',
    answer:
      'A topical numbing cream is applied before your skin needling session at The Derm Studio to minimise discomfort. Most clients describe the sensation as mild pressure or warmth. Our qualified therapists in Redcliffe always prioritise your comfort throughout the treatment.',
  },
  {
    question: 'How long does skin needling take to work?',
    answer:
      "Initial improvements in skin texture and tone can be seen within 2–4 weeks as the skin's collagen response begins. The most significant results — particularly for acne scarring — are typically visible after 3–6 months and a course of treatments.",
  },
  {
    question: 'How many skin needling sessions do I need?',
    answer:
      'For most skin concerns, a course of 3–6 treatments spaced 4–6 weeks apart is recommended. Acne scarring and deeper concerns may require more. Your dermal therapist at The Derm Studio will design a personalised treatment plan after a skin consultation.',
  },
  {
    question: 'What should I avoid after skin needling?',
    answer:
      'Avoid sun exposure, makeup for 24 hours, active skincare ingredients (retinol, AHAs, BHAs) for 72 hours, exercise for 24 hours, and hot showers immediately after treatment. SPF 50+ must be worn daily following skin needling.',
  },
  {
    question: 'Is skin needling suitable for sensitive skin?',
    answer:
      'Skin needling can be adapted for most skin types. However, it is not suitable for clients with active acne, rosacea flare-ups, eczema or psoriasis in the treatment area, or recent use of Accutane (within 6 months). Your therapist at The Derm Studio will assess your suitability during a skin consultation.',
  },
]

const relatedServices = [
  { name: 'Chemical Peel Redcliffe', href: '/services/chemical-peel-redcliffe' },
  { name: 'LED Light Therapy Redcliffe', href: '/services/led-light-therapy-redcliffe' },
  { name: 'Facials Redcliffe', href: '/services/facials-redcliffe' },
]

export default function SkinNeedlingPage() {
  return (
    <ServicePageTemplate
      h1="Skin Needling Redcliffe | Professional Collagen Induction Therapy"
      intro="Professional skin needling at The Derm Studio, Marine Parade, Redcliffe. Collagen induction therapy for acne scarring, fine lines, enlarged pores, and uneven skin texture — performed by a qualified dermal therapist with clinical-grade equipment."
      sections={sections}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={breadcrumbs}
    />
  )
}

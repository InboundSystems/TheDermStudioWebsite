import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/seo/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Chemical Peel Redcliffe | Professional Skin Peel Treatments — The Derm Studio',
  description:
    'Professional chemical peel treatments in Redcliffe at The Derm Studio. Treat pigmentation, acne scarring, fine lines and uneven texture. Book at Marine Parade, Redcliffe.',
  alternates: { canonical: 'https://thedermstudio.com.au/services/chemical-peel-redcliffe' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Chemical Peel Redcliffe', href: '/services/chemical-peel-redcliffe' },
]

const sections = [
  {
    heading: 'What is a Chemical Peel?',
    content:
      'A chemical peel is a controlled skin resurfacing treatment in which a professional-grade acid solution is applied to the skin to remove dead and damaged surface cells and stimulate the growth of fresh, healthier skin beneath. The depth and formulation of the peel — superficial, medium, or deeper — is carefully selected based on your skin concerns, skin type, and goals. At The Derm Studio in Redcliffe, our qualified dermal therapist assesses your skin thoroughly before recommending and performing the appropriate peel protocol.',
  },
  {
    heading: 'Chemical Peel Benefits',
    content:
      'Chemical peels are one of the most clinically proven treatments available for a wide range of skin concerns. They effectively target hyperpigmentation and uneven skin tone, acne scarring and post-inflammatory pigmentation, fine lines and surface wrinkles, dull or rough skin texture, enlarged pores, and mild sun damage. By accelerating cell turnover and removing damaged outer layers, a course of chemical peels reveals progressively clearer, more even-toned, and smoother skin — results that build meaningfully with each treatment.',
  },
  {
    heading: 'Your Chemical Peel at The Derm Studio',
    content:
      "Every chemical peel at The Derm Studio begins with a skin consultation so your therapist can assess your skin and determine the most appropriate peel protocol. The skin is cleansed and prepared before the peel solution is precisely applied and monitored, then neutralised. A post-peel recovery regimen is applied and you will leave with detailed written aftercare instructions. Treatment time is typically 45–60 minutes including the consultation and aftercare discussion. The specific products and protocols used are at your therapist's professional discretion based on your individual skin assessment.",
  },
  {
    heading: 'Chemical Peel Aftercare',
    content:
      'Aftercare is as important as the treatment itself. Avoid direct sun exposure for at least one week post-peel, and apply SPF 50+ every morning without exception. Do not pick, peel, or scratch any flaking skin — allow it to shed naturally. Use a gentle, fragrance-free cleanser and keep the skin well moisturised. Avoid active skincare ingredients including retinol, AHAs, and BHAs for 48–72 hours following your treatment. Your therapist at The Derm Studio will provide a full personalised aftercare protocol before you leave.',
  },
]

const faqs = [
  {
    question: 'How long does a chemical peel take?',
    answer:
      'Most chemical peels at The Derm Studio take between 45 and 60 minutes including the initial consultation and aftercare advice. Your therapist will advise on the treatment duration during your skin assessment.',
  },
  {
    question: 'Is a chemical peel painful?',
    answer:
      'Most clients experience a mild tingling or warmth during the peel, which subsides quickly. Our therapists in Redcliffe use professional-grade peels selected for your skin type and tolerance — your comfort is always the priority.',
  },
  {
    question: 'How often should I get a chemical peel in Redcliffe?',
    answer:
      "For best results, a course of chemical peels is recommended — typically 4–6 treatments spaced 2–4 weeks apart depending on the peel strength and your skin's response. Your therapist will design a personalised treatment plan.",
  },
  {
    question: 'What skin concerns does a chemical peel treat?',
    answer:
      'Chemical peels effectively treat hyperpigmentation, acne scarring, fine lines, uneven skin tone, dull complexion, enlarged pores, and mild sun damage. A skin consultation at The Derm Studio will determine which peel is right for you.',
  },
  {
    question: 'What is the recovery time for a chemical peel in Redcliffe?',
    answer:
      'Recovery varies by peel depth. Superficial peels have minimal downtime — some redness for 24–48 hours. Medium peels may involve 3–5 days of peeling and redness. Your therapist at The Derm Studio will advise you fully before proceeding.',
  },
]

const relatedServices = [
  { name: 'LED Light Therapy Redcliffe', href: '/services/led-light-therapy-redcliffe' },
  { name: 'Skin Needling Redcliffe', href: '/services/skin-needling-redcliffe' },
  { name: 'Facials Redcliffe', href: '/services/facials-redcliffe' },
]

export default function ChemicalPeelPage() {
  return (
    <ServicePageTemplate
      h1="Chemical Peel Redcliffe | Professional Skin Resurfacing"
      intro="Professional chemical peel treatments at The Derm Studio, Marine Parade, Redcliffe. Our qualified dermal therapist selects and performs the right peel for your skin — addressing pigmentation, acne scarring, fine lines, and uneven texture with clinical precision."
      sections={sections}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={breadcrumbs}
    />
  )
}

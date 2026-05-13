import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/seo/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Facials Redcliffe | Expert Skin Facials — The Derm Studio Skin Clinic',
  description:
    'Professional facials in Redcliffe tailored to your skin. The Derm Studio at Marine Parade, Redcliffe offers customised facials, express facials and anti-ageing facials.',
  alternates: { canonical: 'https://thedermstudio.com.au/services/facials-redcliffe' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Facials Redcliffe', href: '/services/facials-redcliffe' },
]

const sections = [
  {
    heading: 'Our Facial Treatments in Redcliffe',
    content:
      'Every facial at The Derm Studio begins with a skin consultation. Before any product touches your skin, your therapist takes the time to assess your skin type, identify your primary concerns, and understand your goals — then designs the treatment accordingly. No two facials at The Derm Studio are identical, because no two clients have the same skin. Whether you are dealing with congestion, dehydration, uneven tone, or visible ageing, your facial is customised to deliver the most meaningful results for your skin on the day.',
  },
  {
    heading: 'Types of Facials We Offer',
    content:
      'Our facial menu covers the full spectrum of skin concerns. The Classic Facial is a comprehensive skin reset: deep cleansing, professional exfoliation, targeted extractions where appropriate, and a finishing mask matched to your skin type — leaving skin visibly clearer and healthier. Our Corrective Facial uses clinical-grade active ingredients and advanced techniques to address specific concerns such as pigmentation, congestion, or accelerated ageing, with results that build progressively over a treatment plan. The Anti-Ageing Facial focuses on lifting, firming, and collagen stimulation — combining advanced serums, massage techniques, and targeted technology to restore a more youthful appearance. Our Acne Facial is designed to treat active breakouts, reduce congestion, and progressively improve post-breakout scarring and residual pigmentation without compromising the skin barrier. All facials use Lira Clinical professional-grade skincare — the same range available for home care through The Derm Studio, an authorised Lira Clinical stockist in Redcliffe.',
  },
  {
    heading: 'What to Expect',
    content:
      'Your facial appointment at The Derm Studio begins with a skin consultation and a review of any skincare you are currently using at home. Your therapist will then walk you through the recommended treatment protocol. During the facial, you will be lying comfortably while your therapist works through each step — cleansing, exfoliation, active treatment, and finishing. You will leave with recommendations for your home care routine to extend and protect the results of your in-clinic treatment. Most facials are completed in 60–90 minutes. Aftercare and product recommendations are provided at the end of every appointment.',
  },
  {
    heading: 'Who Benefits from Facials?',
    content:
      'Professional facials at The Derm Studio are suitable for all skin types — dry, oily, combination, sensitive, or mature. Because every treatment is customised, there is no one-size-fits-all approach that might over-treat one skin type or under-deliver for another. Regular facials are recommended monthly for skin maintenance — consistent professional treatment combined with the right home care produces results that cannot be achieved through either approach alone. Clients who are new to professional facials often notice the most dramatic early improvement; those with an established routine maintain and continually improve their results over time.',
  },
]

const faqs = [
  {
    question: 'What types of facials are available at The Derm Studio?',
    answer:
      'The Derm Studio offers a range of professional facials including Classic Facials, Corrective Facials, Anti-Ageing Facials, and Acne Facials. Every treatment is customised to your skin type and concerns following a consultation with your therapist.',
  },
  {
    question: 'How long does a facial take at The Derm Studio?',
    answer:
      'Most facials at The Derm Studio take between 60 and 90 minutes, including the initial skin consultation and aftercare discussion. Your therapist will advise on the expected duration when you book.',
  },
  {
    question: 'How often should I get a facial in Redcliffe?',
    answer:
      'Monthly facials are recommended for skin maintenance. Regular professional treatment combined with the right home-care routine produces the most consistent and visible results over time. Your therapist at The Derm Studio will recommend a treatment frequency suited to your skin goals.',
  },
  {
    question: 'Are facials suitable for sensitive skin?',
    answer:
      'Yes. Every facial at The Derm Studio is customised to your skin type, including sensitive skin. Your therapist will assess your skin before selecting products and techniques appropriate for your specific concerns and sensitivities. All treatments use Lira Clinical professional-grade skincare.',
  },
  {
    question: 'What skincare does The Derm Studio use in facials?',
    answer:
      'The Derm Studio uses Lira Clinical professional-grade skincare in all in-clinic treatments. Lira Clinical is a practitioner-only brand not available in general retail — it is exclusively distributed through authorised clinics, and The Derm Studio is an authorised Lira Clinical stockist in Redcliffe. Your therapist can also prescribe a Lira Clinical home-care protocol to extend your results between appointments.',
  },
]

const relatedServices = [
  { name: 'Chemical Peel Redcliffe', href: '/services/chemical-peel-redcliffe' },
  { name: 'LED Light Therapy Redcliffe', href: '/services/led-light-therapy-redcliffe' },
  { name: 'Skin Needling Redcliffe', href: '/services/skin-needling-redcliffe' },
]

export default function FacialsPage() {
  return (
    <ServicePageTemplate
      h1="Facials Redcliffe | Expert Skin Facials at The Derm Studio"
      intro="Professional facials in Redcliffe at The Derm Studio, Marine Parade — customised to your skin type, concerns, and goals. Every facial begins with a consultation and uses Lira Clinical professional-grade skincare, available exclusively through authorised clinics including The Derm Studio."
      sections={sections}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={breadcrumbs}
    />
  )
}

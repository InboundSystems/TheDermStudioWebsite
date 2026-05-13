import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/seo/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'LED Light Therapy Redcliffe | Skin Rejuvenation — The Derm Studio',
  description:
    'Professional LED light therapy in Redcliffe for anti-ageing, acne reduction and skin rejuvenation at The Derm Studio, Marine Parade, Redcliffe. Book your session today.',
  alternates: { canonical: 'https://thedermstudio.com.au/services/led-light-therapy-redcliffe' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'LED Light Therapy Redcliffe', href: '/services/led-light-therapy-redcliffe' },
]

const sections = [
  {
    heading: 'What is LED Light Therapy?',
    content:
      'LED light therapy is a non-invasive skin treatment that uses specific, clinically proven wavelengths of light to trigger the skin\'s natural repair and regeneration processes. Unlike UV light, LED therapy uses safe, targeted wavelengths — primarily red and blue — to stimulate cellular activity without heat or tissue damage. Red LED (630–700nm) penetrates deeper to stimulate collagen and elastin production, improving firmness and reducing the visible signs of ageing. Blue LED (415–445nm) targets the bacteria responsible for acne breakouts and reduces inflammation at the surface level. The two can be used independently or in combination depending on your skin goals. LED is safe for all skin types and tones.',
  },
  {
    heading: 'LED Light Therapy Benefits',
    content:
      'The benefits of LED light therapy span both anti-ageing and acne correction, making it one of the most versatile treatments available. Red LED stimulates natural collagen and elastin production, reducing the appearance of fine lines, improving skin firmness, and enhancing overall radiance — with no downtime. Blue LED kills acne-causing bacteria at the skin\'s surface, reducing active breakouts and calming the inflammation that leads to redness and post-breakout marks. Both wavelengths progressively improve skin tone, texture, and luminosity over a treatment course. LED is also used post-procedure to accelerate healing and reduce redness after peels or needling.',
  },
  {
    heading: 'Your LED Light Therapy Session at The Derm Studio',
    content:
      'LED light therapy is one of the most relaxing treatments available at The Derm Studio. You will recline comfortably while the professional-grade LED panel is positioned over the treatment area. The session is entirely painless — no heat, no needles, no downtime. Treatment time is typically 20–30 minutes. LED can be booked as a standalone treatment or added onto another service such as a facial or chemical peel to enhance and accelerate results. Your therapist will recommend the appropriate wavelength — red, blue, or a combination — based on your skin concerns and treatment goals.',
  },
  {
    heading: 'How Many Sessions Do I Need?',
    content:
      'For visible and lasting results, a course of LED light therapy is recommended. Most clients begin to see noticeable improvement in skin tone, clarity, or firmness after 3–4 sessions. A full course of 6–10 treatments, delivered weekly or fortnightly, delivers the most significant and sustained results. Monthly maintenance sessions are recommended once the initial course is complete to preserve and build on your outcomes. Your therapist at The Derm Studio in Redcliffe will advise on the right treatment schedule for your specific skin goals.',
  },
]

const faqs = [
  {
    question: 'What does LED light therapy do for skin?',
    answer:
      "LED light therapy uses clinically proven wavelengths to stimulate your skin's natural repair processes. Red LED boosts collagen and elastin production, reducing fine lines and improving firmness. Blue LED targets acne bacteria, helping to clear breakouts and reduce inflammation.",
  },
  {
    question: 'How many LED light therapy sessions do I need?',
    answer:
      'Most clients see noticeable results after 3–4 sessions. A full course of 6–10 sessions is recommended for lasting results. Your therapist at The Derm Studio in Redcliffe will advise on a schedule suited to your skin goals.',
  },
  {
    question: 'Is LED light therapy safe?',
    answer:
      'Yes. LED light therapy uses non-UV light and is one of the safest, most gentle skin treatments available. It is suitable for all skin types and tones, including sensitive skin, and has no known side effects when performed correctly by a qualified therapist.',
  },
  {
    question: 'What is the difference between red and blue LED?',
    answer:
      'Red LED (630–700nm) stimulates collagen production and targets signs of ageing. Blue LED (415–445nm) kills acne-causing bacteria and reduces inflammation. At The Derm Studio, your therapist will select the appropriate wavelength — or a combination — based on your skin concerns.',
  },
  {
    question: 'How long does LED light therapy last?',
    answer:
      'Individual sessions at The Derm Studio are 20–30 minutes. Results from a full course can last several months, especially with monthly maintenance sessions. LED works best as part of an ongoing skin health routine.',
  },
]

const relatedServices = [
  { name: 'Chemical Peel Redcliffe', href: '/services/chemical-peel-redcliffe' },
  { name: 'Facials Redcliffe', href: '/services/facials-redcliffe' },
  { name: 'Skin Needling Redcliffe', href: '/services/skin-needling-redcliffe' },
]

export default function LedLightTherapyPage() {
  return (
    <ServicePageTemplate
      h1="LED Light Therapy Redcliffe | Anti-Ageing Skin Treatment"
      intro="Professional LED light therapy at The Derm Studio, Marine Parade, Redcliffe. A non-invasive, clinically proven treatment for anti-ageing, acne reduction, and skin rejuvenation — safe for all skin types and tones with zero downtime."
      sections={sections}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={breadcrumbs}
    />
  )
}

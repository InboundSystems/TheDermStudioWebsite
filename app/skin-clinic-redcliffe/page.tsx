import type { Metadata } from 'next'
import { SuburbPageTemplate } from '@/components/seo/SuburbPageTemplate'

export const metadata: Metadata = {
  title: 'Skin Clinic Redcliffe | The Derm Studio',
  description:
    'The Derm Studio is a results-focused skin clinic on Marine Parade, Redcliffe — corrective facials, Lira Clinical peels and advanced skin needling, minutes from the Redcliffe Jetty.',
  alternates: { canonical: 'https://thedermstudio.com.au/skin-clinic-redcliffe' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Skin Clinic Redcliffe', href: '/skin-clinic-redcliffe' },
]

const paragraphs = [
  'The Derm Studio is Redcliffe\'s own skin clinic — not a satellite of a Brisbane brand, but a purpose-built studio on Marine Parade, a short stroll from the Redcliffe Jetty and the cafés along the foreshore. If you already walk, run or watch the sunset along this stretch of the bay, you\'re walking distance from your next skin appointment. There\'s no bridge to cross, no motorway to navigate — just a local clinic in the heart of the suburb it\'s named after.',
  'Being genuinely local means we understand what Redcliffe skin actually deals with day to day: sun and salt air from the foreshore, a lifestyle spent largely outdoors, and a community that wants results without a trip into the city. Our full treatment menu is available to Redcliffe clients — from the Corrective and Hybrid Facials that make a great starting point, through to Lira Clinical peels and skin needling for more targeted concerns like pigmentation, scarring and fine lines. As an authorised Lira Clinical stockist, we\'re also one of the only places on the peninsula where you can access this professional-grade skincare range for home care between visits.',
  'Whether you\'re after a relaxing monthly facial or a structured course of corrective treatment, your first stop is a skin consultation with one of our qualified dermal therapists at Marine Parade. We\'ll assess your skin properly, talk through what you want to achieve, and build a plan around it — no guesswork, no generic protocol.',
  'For Redcliffe clients who know exactly what they\'re working on — pigmentation, acne scarring, or general anti-ageing — our pre-built Skin Packages bundle a course of treatments at a set price, from the Radiance Refresh through to the more intensive Collagen Luxe Journey. It\'s a popular option for locals who\'d rather commit to a proper program from the outset than book one session at a time and hope for the best. Because we\'re right here in the suburb, following through on a multi-visit program is genuinely easy — no long drive to fit in around work or family commitments, just a short trip down Marine Parade each time.',
]

export default function SkinClinicRedcliffePage() {
  return (
    <SuburbPageTemplate
      suburb="Redcliffe"
      h1="Skin Clinic Redcliffe | The Derm Studio"
      url="https://thedermstudio.com.au/skin-clinic-redcliffe"
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
    />
  )
}

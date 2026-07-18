import type { Metadata } from 'next'
import { SuburbPageTemplate } from '@/components/seo/SuburbPageTemplate'

export const metadata: Metadata = {
  title: 'Skin Clinic Clontarf | The Derm Studio Redcliffe',
  description:
    'Clontarf clients are around nine minutes from The Derm Studio on Marine Parade, Redcliffe — corrective facials, Lira Clinical peels and skin needling.',
  alternates: { canonical: 'https://www.thedermstudio.com.au/skin-clinic-clontarf' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Skin Clinic Clontarf', href: '/skin-clinic-clontarf' },
]

const paragraphs = [
  'Clontarf runs along the calmer, southern side of the peninsula, facing Hays Inlet and Bramble Bay rather than the open water at Redcliffe\'s northern tip. From Clontarf Beach it\'s roughly a nine-minute drive around to The Derm Studio on Marine Parade — an easy loop for clients who already treat the peninsula as their local patch, whether that\'s a walk along the Clontarf foreshore or picking the kids up from a nearby school. It\'s a route most Clontarf residents already drive regularly, so an appointment rarely feels like a special trip.',
  'A lot of our Clontarf clients come to us after years of DIY skincare and drugstore products that never quite delivered — they\'re ready for something more clinical without wanting to trek into Brisbane to get it. That\'s the space The Derm Studio sits in: Corrective and Hybrid Facials as an accessible entry point, Lira Clinical peels across three levels of intensity for concerns like pigmentation and acne scarring, and skin needling with NCTF or exosome infusion for clients chasing more significant, longer-term change. Every treatment plan starts with a proper skin consultation, not a one-size-fits-all package.',
  'As an authorised Lira Clinical stockist, we also prescribe home-care products to Clontarf clients so the results from each in-clinic visit keep building rather than fading between appointments. If it\'s your first time at The Derm Studio, book a consultation and we\'ll map out the right starting point for your skin.',
  'If you already know you want more than a single session, our Skin Packages give Clontarf clients a structured, pre-priced course to work toward — whether that\'s the entry-level Radiance Refresh or a more intensive program aimed at scarring or significant pigmentation. Your therapist will still check in and adjust the plan as your skin responds, rather than running you through the same protocol regardless of progress.',
]

export default function SkinClinicClontarfPage() {
  return (
    <SuburbPageTemplate
      suburb="Clontarf"
      h1="Skin Clinic Clontarf | The Derm Studio Redcliffe"
      url="https://www.thedermstudio.com.au/skin-clinic-clontarf"
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
    />
  )
}

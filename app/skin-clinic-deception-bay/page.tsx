import type { Metadata } from 'next'
import { SuburbPageTemplate } from '@/components/seo/SuburbPageTemplate'

export const metadata: Metadata = {
  title: 'Skin Clinic Deception Bay | The Derm Studio',
  description:
    'Deception Bay clients are around seventeen minutes from The Derm Studio on Marine Parade, Redcliffe — corrective facials, Lira Clinical peels and skin needling.',
  alternates: { canonical: 'https://thedermstudio.com.au/skin-clinic-deception-bay' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Skin Clinic Deception Bay', href: '/skin-clinic-deception-bay' },
]

const paragraphs = [
  'Deception Bay has grown fast over the last decade, and a lot of that growth is young families and first-home buyers who\'ve moved into the area without a go-to skin clinic nearby. The Derm Studio on Marine Parade, Redcliffe, is about a seventeen-minute drive away — close enough to become your regular clinic without needing to detour into Brisbane. It\'s a route plenty of Deception Bay locals already know well from weekend trips up to the Redcliffe foreshore.',
  'For a lot of our Deception Bay clients, this is their first time seeing a dermal therapist rather than relying on drugstore skincare or the occasional day spa facial. We treat that as a genuine starting point, not an afterthought — every new client gets a proper skin consultation before anything is recommended. From there, options range from Corrective and Hybrid Facials for general skin health and maintenance, through to Lira Clinical corrective peels and skin needling with NCTF or exosomes for clients dealing with acne scarring, pigmentation or more stubborn concerns. Your therapist will explain exactly why each step is recommended, not just what it involves.',
  'As an authorised Lira Clinical stockist, we also send Deception Bay clients home with the right products to build on their in-clinic results, rather than leaving them to guess at a supermarket skincare aisle. If you\'re considering your first professional skin treatment, book a consultation and we\'ll talk you through what actually makes sense for your skin.',
  'If you\'d rather commit to a proper course from the start, our Skin Packages bundle a set number of treatments at a fixed price — a straightforward way for Deception Bay clients to plan a skin journey without booking and paying appointment by appointment. It\'s a particularly good fit if this is your first real investment in professional skin treatment and you want a clear beginning, middle and end.',
]

export default function SkinClinicDeceptionBayPage() {
  return (
    <SuburbPageTemplate
      suburb="Deception Bay"
      h1="Skin Clinic Deception Bay | The Derm Studio"
      url="https://thedermstudio.com.au/skin-clinic-deception-bay"
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
    />
  )
}

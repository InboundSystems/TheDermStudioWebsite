import type { Metadata } from 'next'
import { SuburbPageTemplate } from '@/components/seo/SuburbPageTemplate'

export const metadata: Metadata = {
  title: 'Skin Clinic Brighton QLD | The Derm Studio Redcliffe',
  description:
    'Brighton QLD clients are around eleven minutes from The Derm Studio on Marine Parade, Redcliffe — corrective facials, Lira Clinical peels and skin needling.',
  alternates: { canonical: 'https://www.thedermstudio.com.au/skin-clinic-brighton' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Skin Clinic Brighton QLD', href: '/skin-clinic-brighton' },
]

const paragraphs = [
  'Brighton\'s foreshore is one of the quieter stretches of Moreton Bay — long, flat, and popular with early-morning walkers and families rather than the busier tourist strips further north. From the Brighton Foreshore it\'s about an eleven-minute drive up to The Derm Studio on Marine Parade, Redcliffe, easy enough to build into a regular routine rather than a special trip. Plenty of our Brighton clients pair an appointment with a walk along the foreshore either side of it, treating the trip as part of the routine rather than a chore.',
  'Clients from Brighton tend to fall into two camps: those wanting a reliable monthly facial to maintain healthy, glowing skin, and those dealing with a specific concern — pigmentation from years by the water, acne scarring, or fine lines — who want an actual treatment plan rather than another moisturiser. The Derm Studio covers both ends of that spectrum. Corrective and Hybrid Facials suit the maintenance crowd, while Lira Clinical corrective peels and skin needling with NCTF or exosomes are built for clients chasing measurable, longer-term change.',
  'Every new client starts with a skin consultation, so your Brighton-based skin gets assessed properly before anything is recommended — not slotted into a generic package. As an authorised Lira Clinical stockist, we can also set you up with the right home-care products to keep your results going between visits, so your skin keeps improving long after you\'ve left the studio.',
  'If a single treatment isn\'t going to cut it, our Skin Packages give Brighton clients a clear, pre-priced course to work through — from the Radiance Refresh for general maintenance up to the Collagen Luxe Journey for more significant anti-ageing goals. Knowing the full course and cost upfront tends to suit Brighton\'s quieter, planning-ahead pace better than booking treatment by treatment, one appointment at a time.',
]

export default function SkinClinicBrightonPage() {
  return (
    <SuburbPageTemplate
      suburb="Brighton"
      h1="Skin Clinic Brighton QLD | The Derm Studio Redcliffe"
      url="https://www.thedermstudio.com.au/skin-clinic-brighton"
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
    />
  )
}

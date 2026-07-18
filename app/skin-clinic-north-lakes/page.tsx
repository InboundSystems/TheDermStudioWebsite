import type { Metadata } from 'next'
import { SuburbPageTemplate } from '@/components/seo/SuburbPageTemplate'

export const metadata: Metadata = {
  title: 'Skin Clinic North Lakes | The Derm Studio',
  description:
    'North Lakes clients are around twenty-one minutes from The Derm Studio on Marine Parade, Redcliffe — corrective facials, Lira Clinical peels and skin needling.',
  alternates: { canonical: 'https://www.thedermstudio.com.au/skin-clinic-north-lakes' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Skin Clinic North Lakes', href: '/skin-clinic-north-lakes' },
]

const paragraphs = [
  'North Lakes has no shortage of beauty salons clustered around Westfield and the town centre, which is exactly why so many of our North Lakes clients end up driving the twenty-one minutes out to The Derm Studio on Marine Parade instead — they\'ve already tried the convenient option and want something more clinical. Being a short drive from the shopping precinct rather than inside it means fewer walk-ins, more focused appointments, and a therapist who actually has time for a proper consultation. Most North Lakes clients tell us the extra travel time is a fair trade for that level of attention.',
  'What draws North Lakes clients specifically is the depth of the treatment menu beyond a standard day-spa facial: Lira Clinical corrective peels across three levels of intensity for pigmentation, acne scarring and uneven texture, and skin needling with either NCTF or exosome infusion for clients chasing more significant, longer-term results. Corrective and Hybrid Facials are still there as an easy entry point if you\'re newer to professional skin treatment or just want reliable monthly maintenance.',
  'As an authorised Lira Clinical stockist, we send every client home with the right products to protect their results — something worth the extra drive on its own. Book a skin consultation and we\'ll show you what a genuinely clinical approach to skin treatment looks like, compared to the shopping-centre alternative.',
  'North Lakes clients who\'ve decided they want real, measurable change rather than another one-off facial often move straight to one of our Skin Packages — structured, fixed-price courses like the Renewal Series that take the guesswork out of planning a longer treatment journey. Once you\'ve made the drive once and seen the difference in approach, most North Lakes clients tell us it becomes a regular part of their routine rather than a one-off experiment.',
]

export default function SkinClinicNorthLakesPage() {
  return (
    <SuburbPageTemplate
      suburb="North Lakes"
      h1="Skin Clinic North Lakes | The Derm Studio"
      url="https://www.thedermstudio.com.au/skin-clinic-north-lakes"
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
    />
  )
}

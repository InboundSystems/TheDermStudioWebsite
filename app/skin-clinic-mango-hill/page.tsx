import type { Metadata } from 'next'
import { SuburbPageTemplate } from '@/components/seo/SuburbPageTemplate'

export const metadata: Metadata = {
  title: 'Skin Clinic Mango Hill | The Derm Studio',
  description:
    'Mango Hill clients are around nineteen minutes from The Derm Studio on Marine Parade, Redcliffe — corrective facials, Lira Clinical peels and skin needling.',
  alternates: { canonical: 'https://thedermstudio.com.au/skin-clinic-mango-hill' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Skin Clinic Mango Hill', href: '/skin-clinic-mango-hill' },
]

const paragraphs = [
  'Mango Hill sits along the busy North Lakes / Mango Hill corridor — new estates, the train line, and a steady stream of young families settling in the area. It\'s around a nineteen-minute drive from Mango Hill down to The Derm Studio on Marine Parade, Redcliffe, which most clients treat as a nice change of pace — trading the newer, more built-up corridor for a relaxed studio right on the water. Many make a morning of it, combining their appointment with lunch or a walk along the Redcliffe foreshore before heading home.',
  'A lot of Mango Hill clients come to us wanting an actual skin routine rather than whatever\'s convenient at the local shopping centre — something built around their specific skin, backed by a proper consultation rather than a quick upsell. That\'s the whole approach at The Derm Studio: Corrective and Hybrid Facials as a starting point, Lira Clinical corrective peels for pigmentation, texture and early ageing concerns, and skin needling with NCTF or exosomes for clients wanting deeper, more lasting results. Nothing is recommended without your therapist explaining the reasoning behind it first.',
  'We\'re also an authorised Lira Clinical stockist, so Mango Hill clients leave with a proper home-care prescription rather than a generic recommendation. If it\'s your first visit, a skin consultation is the best place to start — book online and we\'ll build a plan around your actual skin, not a template.',
  'For Mango Hill clients ready to commit beyond a single appointment, our Skin Packages bundle a full course of treatment at a fixed price — a straightforward way to plan out a proper skin journey rather than booking one session at a time and reassessing as you go. It also makes budgeting simple, since the full cost of the program is agreed upfront rather than accumulating appointment by appointment.',
]

export default function SkinClinicMangoHillPage() {
  return (
    <SuburbPageTemplate
      suburb="Mango Hill"
      h1="Skin Clinic Mango Hill | The Derm Studio"
      url="https://thedermstudio.com.au/skin-clinic-mango-hill"
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
    />
  )
}

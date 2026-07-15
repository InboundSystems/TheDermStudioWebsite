import type { Metadata } from 'next'
import { SuburbPageTemplate } from '@/components/seo/SuburbPageTemplate'

export const metadata: Metadata = {
  title: 'Skin Clinic Scarborough | The Derm Studio Redcliffe',
  description:
    'Scarborough clients travel just minutes down Marine Parade to The Derm Studio for corrective facials, Lira Clinical peels and advanced skin needling.',
  alternates: { canonical: 'https://thedermstudio.com.au/skin-clinic-scarborough' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Skin Clinic Scarborough', href: '/skin-clinic-scarborough' },
]

const paragraphs = [
  'Scarborough sits right at the tip of the Redcliffe Peninsula, and from Scarborough Esplanade it\'s a short, scenic drive of around seven minutes down to The Derm Studio on Marine Parade — most clients time it with a coffee stop along the way. We see a lot of Scarborough regulars, drawn as much by the marina lifestyle and beach views as by the fact that there\'s finally a proper clinical skin studio on their doorstep instead of a drive into Brisbane.',
  'Scarborough\'s waterfront lifestyle brings its own skin concerns — near-constant sun and wind exposure from the Esplanade and the marina, and a client base that wants treatments to actually show results rather than just feel nice for an afternoon. That\'s exactly the gap The Derm Studio fills: corrective and hybrid facials for ongoing maintenance, Lira Clinical corrective peels for sun damage and pigmentation, and skin needling with NCTF or exosomes for clients chasing deeper, longer-lasting change. We\'re also an authorised Lira Clinical stockist, so Scarborough clients can keep their results going at home with the same professional-grade products used in-clinic.',
  'If you\'re new to The Derm Studio, the best place to start is a skin consultation — your therapist will look at what Scarborough\'s coastal conditions have actually done to your skin and build a plan from there, rather than guessing from a generic menu.',
  'Plenty of Scarborough clients prefer to commit to a full course upfront rather than book session by session, which is exactly what our Skin Packages are built for — bundled programs like the Clarifying Complexion Series and the Renewal Series that take you from your first consultation through to a genuinely finished result at a fixed price. It also means less admin for you: one decision up front, then a series of appointments already scheduled around your beachside routine.',
]

export default function SkinClinicScarboroughPage() {
  return (
    <SuburbPageTemplate
      suburb="Scarborough"
      h1="Skin Clinic Scarborough | The Derm Studio Redcliffe"
      url="https://thedermstudio.com.au/skin-clinic-scarborough"
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
    />
  )
}

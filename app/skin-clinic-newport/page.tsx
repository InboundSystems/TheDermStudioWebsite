import type { Metadata } from 'next'
import { SuburbPageTemplate } from '@/components/seo/SuburbPageTemplate'

export const metadata: Metadata = {
  title: 'Skin Clinic Newport | The Derm Studio Redcliffe',
  description:
    'Newport canal-estate clients are around thirteen minutes from The Derm Studio on Marine Parade, Redcliffe — corrective facials, Lira Clinical peels and skin needling.',
  alternates: { canonical: 'https://thedermstudio.com.au/skin-clinic-newport' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Skin Clinic Newport', href: '/skin-clinic-newport' },
]

const paragraphs = [
  'Newport\'s canal waterways give it a different feel to the rest of the peninsula — more boats than beach towels, and a community that\'s often out on the water rather than in it. From the Newport waterways it\'s around a thirteen-minute drive to The Derm Studio on Marine Parade, a comfortable trip most clients pair with a weekend errand run into central Redcliffe. It\'s an easy detour on the way to or from the marina, rather than a dedicated trip.',
  'Time on the water means real sun exposure — reflected off the canals as much as direct overhead — and that shows up in our Newport clients\' skin concerns: pigmentation, early fine lines, and a general dulling of texture that a good home-care routine alone often can\'t fully reverse. This is exactly where The Derm Studio\'s clinical treatments earn their keep. Lira Clinical corrective peels work in three levels of intensity to target pigmentation and texture, while skin needling with NCTF or exosomes goes deeper for clients wanting more substantial, longer-lasting change. Corrective and Hybrid Facials remain the easiest starting point if you\'re newer to professional skin treatment.',
  'A skin consultation is the first step for every new client, Newport included — your therapist will look at what the canal lifestyle has actually done to your skin before recommending a plan. As an authorised Lira Clinical stockist, we can also prescribe the right home-care range to protect your results between visits.',
  'Newport clients dealing with sun damage built up over years on the water often prefer to commit to a full course rather than a single session — our Skin Packages, like the Clarifying Complexion Series, bundle exactly that kind of structured program at a fixed price. It also means you\'re not left second-guessing what comes next after each appointment — the whole course is mapped out from the start.',
]

export default function SkinClinicNewportPage() {
  return (
    <SuburbPageTemplate
      suburb="Newport"
      h1="Skin Clinic Newport | The Derm Studio Redcliffe"
      url="https://thedermstudio.com.au/skin-clinic-newport"
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
    />
  )
}

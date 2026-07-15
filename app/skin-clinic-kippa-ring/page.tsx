import type { Metadata } from 'next'
import { SuburbPageTemplate } from '@/components/seo/SuburbPageTemplate'

export const metadata: Metadata = {
  title: 'Skin Clinic Kippa-Ring | The Derm Studio Redcliffe',
  description:
    'Kippa-Ring clients are a short drive up the Anzac Avenue corridor from The Derm Studio on Marine Parade, Redcliffe — real skin results, close to home.',
  alternates: { canonical: 'https://thedermstudio.com.au/skin-clinic-kippa-ring' },
}

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Skin Clinic Kippa-Ring', href: '/skin-clinic-kippa-ring' },
]

const paragraphs = [
  'Kippa-Ring is the busy hub at the base of the peninsula — Kippa-Ring Village, the train station and the Anzac Avenue corridor make it the gateway most Moreton Bay locals pass through on their way to Redcliffe proper. From there, it\'s around a nine-minute drive out to The Derm Studio on Marine Parade, making it an easy add-on to a shopping trip or commute rather than a special journey. A lot of our Kippa-Ring clients book around the train timetable or a Village shopping run without any trouble.',
  'Because Kippa-Ring is where so much of the peninsula\'s daily life happens — school runs, train commutes, weekend errands at the Village — a lot of our clients from the area are juggling busy schedules and want appointments that fit around that, not the other way around. The Derm Studio\'s treatment menu is built for exactly that mix of convenience and results: Corrective and Hybrid Facials in around 45 minutes, Lira Clinical corrective peels for pigmentation and texture concerns, and skin needling with NCTF or exosomes for clients working on a longer-term plan. Most appointments are in and out inside an hour.',
  'We\'re also an authorised Lira Clinical stockist, so Kippa-Ring clients can pick up their prescribed home-care range at the same visit rather than sourcing it elsewhere. Book a consultation and we\'ll build a plan around your skin — and your schedule.',
  'For Kippa-Ring clients who\'d rather lock in a full program than book one appointment at a time, our Skin Packages bundle a set course of treatments — useful if your schedule means it\'s easier to commit once and simply turn up for each appointment already booked in. Given how central Kippa-Ring is to the rest of the peninsula, it\'s also an easy clinic to recommend to family and friends further out who ask where you\'ve been getting your skin done.',
]

export default function SkinClinicKippaRingPage() {
  return (
    <SuburbPageTemplate
      suburb="Kippa-Ring"
      h1="Skin Clinic Kippa-Ring | The Derm Studio Redcliffe"
      url="https://thedermstudio.com.au/skin-clinic-kippa-ring"
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
    />
  )
}

import type { Metadata } from 'next'
import { HomeContent } from '@/components/homepage/HomeContent'

export const metadata: Metadata = {
  title: 'Skin Clinic Redcliffe | Facials, Skin Peels & Dermal Therapy — The Derm Studio',
  description:
    "The Derm Studio is Redcliffe's specialist skin clinic offering expert facials, dermal therapy, chemical peels, LED light therapy and Lira Clinical skincare. Book your consultation today.",
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return <HomeContent />
}

import type { Metadata } from 'next'
import { preload } from 'react-dom'
import { HomeContent } from '@/components/homepage/HomeContent'

export const metadata: Metadata = {
  title: 'Skin Clinic Redcliffe | Facials, Skin Peels & Dermal Therapy — The Derm Studio',
  description:
    "The Derm Studio is Redcliffe's specialist skin clinic offering expert facials, dermal therapy, chemical peels, LED light therapy and Lira Clinical skincare. Book your consultation today.",
  alternates: {
    canonical: '/',
  },
}

const HERO_SRC = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop'
const HERO_Q = 85

function heroHref(w: number) {
  return `/_next/image?url=${encodeURIComponent(HERO_SRC)}&w=${w}&q=${HERO_Q}`
}

export default function HomePage() {
  // Emit <link rel="preload"> for the hero image during SSR, scoped to this page only.
  // React 19 deduplicates this with the one <Image priority> also emits.
  preload(heroHref(828), {
    as: 'image',
    fetchPriority: 'high',
    imageSrcSet: [640, 828, 1080, 1200, 1920].map(w => `${heroHref(w)} ${w}w`).join(', '),
    imageSizes: '100vw',
  })
  return <HomeContent />
}

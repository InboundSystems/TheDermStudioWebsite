import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact The Derm Studio | Book a Skin Consultation in Redcliffe',
  description:
    'Contact The Derm Studio at Bluewater Square, Redcliffe. Book a facial, chemical peel, LED light therapy or skin consultation online or by phone.',
}

export default function ContactPage() {
  return <ContactContent />
}

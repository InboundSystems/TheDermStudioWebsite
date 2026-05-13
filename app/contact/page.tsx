import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact/ContactContent'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Contact The Derm Studio | Book a Skin Consultation in Redcliffe',
  description:
    'Contact The Derm Studio at Marine Parade, Redcliffe. Book a facial, chemical peel, LED light therapy or skin consultation online or by phone.',
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Contact', href: '/contact' },
      ]} />
      <ContactContent />
    </>
  )
}

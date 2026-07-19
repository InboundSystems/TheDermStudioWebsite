import type { Metadata } from 'next'
import Script from 'next/script'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import { MobileStickyBar } from '@/components/ui/MobileStickyBar'

const GA_ID = 'G-PMWMMYTBMF'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thedermstudio.com.au'),
  title: {
    default: 'Skin Clinic Redcliffe | Facials, Skin Peels & Dermal Therapy — The Derm Studio',
    template: '%s | The Derm Studio',
  },
  description:
    "The Derm Studio is Redcliffe's specialist skin clinic offering expert facials, dermal therapy, chemical peels, LED light therapy and Lira Clinical skincare. Book your consultation today.",
  keywords: [
    'skin clinic Redcliffe',
    'facial Redcliffe',
    'dermal therapy Redcliffe',
    'chemical peel Redcliffe',
    'LED light therapy Redcliffe',
    'Lira Clinical Redcliffe',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'The Derm Studio',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </head>
      <body>
        <LocalBusinessSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}

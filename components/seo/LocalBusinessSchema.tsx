export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "The Derm Studio",
    "url": "https://thedermstudio.com.au",
    "telephone": "/* TODO: Add client phone */",
    "email": "/* TODO: Add client email */",
    "description": "The Derm Studio is Redcliffe's specialist skin clinic offering expert facials, dermal therapy, chemical peels, LED light therapy and Lira Clinical skincare.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop 10, Bluewater Square, 20 Anzac Avenue",
      "addressLocality": "Redcliffe",
      "addressRegion": "QLD",
      "postalCode": "4020",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.2308,
      "longitude": 153.1154
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "14:00"
        /* TODO: Confirm hours with client */
      }
    ],
    "priceRange": "$$",
    "areaServed": "Redcliffe, Moreton Bay Peninsula, QLD",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Skin Treatments",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facial" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chemical Peel" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LED Light Therapy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skin Needling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dermal Therapy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HydraFacial" } }
      ]
    },
    "sameAs": [
      "/* TODO: Add Google Business Profile URL */",
      "/* TODO: Add Facebook page URL */",
      "https://www.instagram.com/thedermstudio_/"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

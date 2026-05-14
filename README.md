# The Derm Studio — Website

Next.js 16 (App Router) website for The Derm Studio skin clinic, Redcliffe QLD.

**Live site:** https://thedermstudio.com.au  
**Vercel project:** inbound-systems / the-derm-studio-website  
**GitHub:** InboundSystems/TheDermStudioWebsite

---

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build + sitemap generation
npx tsc --noEmit   # type check only
```

---

## Google Search Console Setup

Complete these steps once the domain `thedermstudio.com.au` is pointed at Vercel.

### 1. Create a Search Console Property

1. Go to https://search.google.com/search-console
2. Click **Add property**
3. Select **Domain** (not URL prefix) and enter `thedermstudio.com.au`
4. Verify ownership via DNS TXT record — add the record to your domain registrar (e.g. GoDaddy, Namecheap, Cloudflare)

### 2. Submit the Sitemap

1. In Search Console, open the property for `thedermstudio.com.au`
2. In the left sidebar, go to **Indexing → Sitemaps**
3. Enter `sitemap.xml` and click **Submit**
4. The full URL being submitted is: `https://thedermstudio.com.au/sitemap.xml`

The sitemap covers all 22 pages including all service pages. It is regenerated automatically on every `npm run build`.

### 3. Request Indexing for the Homepage

1. In Search Console, go to the **URL Inspection** tool
2. Enter `https://thedermstudio.com.au/`
3. Click **Request Indexing**
4. Repeat for priority pages:
   - `https://thedermstudio.com.au/services/chemical-peel-redcliffe`
   - `https://thedermstudio.com.au/services/led-light-therapy-redcliffe`
   - `https://thedermstudio.com.au/services/skin-needling-redcliffe`
   - `https://thedermstudio.com.au/services/facials-redcliffe`

### 4. Verify Structured Data

Use Google's Rich Results Test to verify structured data on each page type:

- https://search.google.com/test/rich-results

Pages to test:
- Homepage (`/`) — LocalBusiness schema
- Any service detail page (e.g. `/services/corrective-facial-redcliffe`) — BreadcrumbList + FAQPage
- `/services/chemical-peel-redcliffe` — BreadcrumbList + FAQPage
- `/about`, `/contact`, `/lira-clinical` — BreadcrumbList

### 5. Connect Google Analytics (optional)

If setting up GA4, add the measurement ID to `app/layout.tsx` using the `@next/third-parties/google` package or a `<Script>` tag in the layout.

---

## PageSpeed Baseline

Run once the domain is live and DNS has propagated. Target scores:

| Metric | Target |
|---|---|
| Mobile Performance | > 75 |
| Desktop Performance | > 90 |
| Accessibility | > 95 |
| Best Practices | > 90 |
| SEO | 100 |

Test URL: https://pagespeed.web.dev/

---

## Site Structure

```
app/
  page.tsx                          Homepage
  about/page.tsx                    About
  contact/page.tsx                  Contact
  book/page.tsx                     Book (Square.site iframe)
  lira-clinical/page.tsx            Lira Clinical
  services/
    page.tsx                        Services listing (all categories)
    [slug]/page.tsx                 Dynamic service pages (9 treatments from lib/services.ts)
    chemical-peel-redcliffe/        Chemical Peel (Session 4)
    led-light-therapy-redcliffe/    LED Light Therapy (Session 4)
    skin-needling-redcliffe/        Skin Needling (Session 4)
    facials-redcliffe/              Facials category page (Session 4)

components/
  layout/
    Navbar.tsx                      Sticky nav, treatments dropdown, mobile menu
    Footer.tsx                      Footer with NAP, links, Instagram
  homepage/
    HomeContent.tsx                 All homepage sections (client component)
  contact/
    ContactContent.tsx              Contact form + map (client component)
  seo/
    LocalBusinessSchema.tsx         JSON-LD BeautySalon schema (rendered in layout)
    BreadcrumbSchema.tsx            JSON-LD BreadcrumbList (per page)
    FAQSchema.tsx                   JSON-LD FAQPage (service pages)
    ServicePageTemplate.tsx         Reusable layout for Session 4 service pages
  ui/
    Breadcrumb.tsx                  Visual breadcrumb nav
    FaqAccordion.tsx                Animated FAQ accordion (client component)
    MobileStickyBar.tsx             Mobile sticky Call/Book/Email bar

lib/
  services.ts                       All 9 treatment data objects + serviceMenu categories

public/
  sitemap.xml                       Sitemap index
  sitemap-0.xml                     All 22 page URLs
  robots.txt                        Allows all, points to sitemap
```

---

## Business Details

| Field | Value |
|---|---|
| Business name | The Derm Studio |
| Address | 1/93 Marine Parade, Redcliffe QLD 4020 |
| Phone | +61 414 185 007 |
| Email | thedermstudio.contact@gmail.com |
| Booking | https://the-derm-studio.square.site/ |
| Instagram | @thedermstudio_ |
| Domain | thedermstudio.com.au |

---

## Pending (blocked on client)

- [ ] Business hours confirmed — currently placeholder (Mon–Fri 9–5, Sat 9–2) in LocalBusinessSchema
- [ ] Rachael's photo — placeholder on About page
- [ ] Rachael's personal bio / years of experience — TODO in About page
- [ ] Google Business Profile URL — not yet added to LocalBusinessSchema `sameAs`
- [ ] Facebook page URL — not yet added to LocalBusinessSchema `sameAs`
- [ ] Lira Clinical product images — placeholder on Lira Clinical page

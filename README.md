# The Derm Studio — Website

Next.js 16 (App Router) website for The Derm Studio skin clinic, Redcliffe QLD.

**Live site:** https://thedermstudio.com.au  
**Vercel project:** inbound-systems / the-derm-studio-website  
**GitHub:** InboundSystems/TheDermStudioWebsite

---

## Month 2 Corrections (Sessions 5–8)

The site's Month 1 build (Sessions 1–4) shipped against an early planning document that predated real client content. Sessions 5–8 brought the live site in line with reality:

- **Address changed.** The business relocated from the original planning address (Shop 10, Bluewater Square, 20 Anzac Avenue) to **1/93 Marine Parade, Redcliffe QLD 4020**. Every NAP reference, `LocalBusinessSchema`, and the geo-coordinates (`-27.2340, 153.1149`, re-geocoded for Marine Parade — the old coordinates were still Bluewater Square's) now reflect the current address.
- **Service menu corrected.** The original plan invented six treatments (Chemical Peel, LED Light Therapy, Skin Needling, Dermal Therapy, HydraFacial, Microdermabrasion) that were never real, bookable services. The real menu — Corrective Facial, Hybrid Facial, Dermaplaning, Level 1–3 Corrective Peels, Skin Needling (NCTF/Exosomes), Korean Lash Lift & Tint — lives in `lib/services.ts` and drives `/services/[slug]`. The three surviving fictional-service URLs (`chemical-peel-redcliffe`, `led-light-therapy-redcliffe`, `skin-needling-redcliffe`) are 301-redirected in `next.config.ts` to their real equivalents.
- **Category-page architecture restored**, built against the real menu: `/services/facials-redcliffe` and `/services/skin-treatments-redcliffe` (category pages), `/service-areas` (peninsula + 9 suburb pages), and `/treatments` (master hub linking everything). The Navbar mega menu, homepage, and Footer all link through to this structure.
- **New this pass:** `/faq` (9 real Q&As, `FAQPage` schema), `Offer` schema on the 4 Skin Packages at `/memberships`, and cross-links from individual treatment pages to a matching package.

**After this deploys, resubmit the sitemap to Google Search Console** (Indexing → Sitemaps → re-enter `sitemap.xml`) so the corrected URLs, redirects, and new pages get recrawled.

**Separate from this codebase:** if the Google Business Profile still lists the old Bluewater Square address, that needs fixing directly in GBP — it won't update from anything in this repo.

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

The sitemap covers all 30 pages, including the 9 real service pages, 2 category pages, the treatments hub, 9 suburb pages, `/service-areas` and `/faq`. It is regenerated automatically on every `npm run build`.

### 3. Request Indexing for Priority Pages

1. In Search Console, go to the **URL Inspection** tool
2. Enter `https://thedermstudio.com.au/`
3. Click **Request Indexing**
4. Repeat for priority pages — especially anything new or changed in Sessions 5–8:
   - `https://thedermstudio.com.au/treatments`
   - `https://thedermstudio.com.au/services/facials-redcliffe`
   - `https://thedermstudio.com.au/services/skin-treatments-redcliffe`
   - `https://thedermstudio.com.au/service-areas`
   - `https://thedermstudio.com.au/faq`
   - `https://thedermstudio.com.au/memberships`

### 4. Verify Structured Data

Use Google's Rich Results Test to verify structured data on each page type:

- https://search.google.com/test/rich-results

Pages to test:
- Homepage (`/`) — `LocalBusiness` (BeautySalon) schema
- Any of the 9 real service pages (e.g. `/services/corrective-facial-redcliffe`) — `Service` + `FAQPage` + `BreadcrumbList`
- `/faq` — `FAQPage` + `BreadcrumbList`
- `/memberships` — `Offer` (×4) + `BreadcrumbList`
- `/service-areas` and any `/skin-clinic-*` suburb page — `BreadcrumbList` + `BeautySalon`/areaServed
- `/about`, `/contact`, `/lira-clinical` — `BreadcrumbList`

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
  treatments/page.tsx               Treatments hub — all 9 services + 3 categories
  service-areas/page.tsx            Skin Clinic Redcliffe Peninsula category page
  skin-clinic-*/page.tsx            9 suburb landing pages (Redcliffe, Scarborough, Clontarf, Kippa-Ring, Brighton, Newport, Deception Bay, Mango Hill, North Lakes)
  faq/page.tsx                      FAQ page — 9 real Q&As, FAQPage schema
  memberships/page.tsx              Skin Packages — 4 programs with Offer schema
  services/
    page.tsx                        Services listing (all categories)
    [slug]/page.tsx                 Dynamic service pages (9 treatments from lib/services.ts)
    facials-redcliffe/              Facials category page
    skin-treatments-redcliffe/      Skin Treatments (corrective peels + skin needling) category page

components/
  layout/
    Navbar.tsx                      Sticky nav, two-tier treatments mega menu, mobile menu
    Footer.tsx                      Footer with NAP, links, Instagram
  homepage/
    HomeContent.tsx                 All homepage sections (client component)
  contact/
    ContactContent.tsx              Contact form + map (client component)
  seo/
    LocalBusinessSchema.tsx         JSON-LD BeautySalon schema (rendered in layout)
    BreadcrumbSchema.tsx            JSON-LD BreadcrumbList (per page)
    FAQSchema.tsx                   JSON-LD FAQPage (service pages)
    ServiceSchema.tsx               JSON-LD Service schema (9 service pages + 2 category pages + hub)
    AreaServedSchema.tsx            JSON-LD BeautySalon+areaServed schema (suburb + service-areas pages)
    OfferSchema.tsx                 JSON-LD Offer schema (4 Skin Packages on /memberships)
    SuburbPageTemplate.tsx          Reusable layout for the 9 suburb pages
  ui/
    Breadcrumb.tsx                  Visual breadcrumb nav
    FaqAccordion.tsx                Animated FAQ accordion (client component)
    MobileStickyBar.tsx             Mobile sticky Call/Book/Email bar

lib/
  services.ts                       All 9 treatment data objects + serviceMenu categories

public/
  sitemap.xml                       Sitemap index
  sitemap-0.xml                     All page URLs
  robots.txt                        Allows all, points to sitemap
```

Note: `/services/chemical-peel-redcliffe`, `/services/led-light-therapy-redcliffe` and `/services/skin-needling-redcliffe` were removed (301-redirected in `next.config.ts` to their real equivalents) — they described generic treatments that never matched the real service menu above.

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
- [ ] Lira Clinical distributor outreach — request a stockist-directory listing/backlink (manual task, not tracked in this repo)
- [ ] Audit Google Business Profile separately — if GBP still lists the old Bluewater Square address, fix it directly in GBP (outside this codebase)

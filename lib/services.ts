export interface ServiceBenefit {
  title: string
  desc: string
}

export interface ServiceStep {
  step: string
  title: string
  desc: string
}

export interface ServiceFaq {
  q: string
  a: string
}

export interface Service {
  slug: string
  name: string
  tagline: string
  price: string
  duration: string
  category: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  intro: string[]
  benefits: ServiceBenefit[]
  process: ServiceStep[]
  faqs: ServiceFaq[]
  relatedSlugs: string[]
  iconName: string
}

export interface MenuServiceItem {
  name: string
  price: string
  duration: string
  tagline: string
  slug?: string
  externalHref?: string
}

export interface MenuCategory {
  id: string
  category: string
  note?: string
  items: MenuServiceItem[]
}

export const services: Service[] = [
  /* ── CORRECTIVE FACIAL ─────────────────────────── */
  {
    slug: 'corrective-facial-redcliffe',
    name: 'Corrective Facial',
    tagline: 'The ideal starting point for your skincare journey.',
    price: '$220',
    duration: '45 mins',
    category: 'Facials',
    metaTitle: 'Corrective Facial Redcliffe | Expert Skin Treatment — The Derm Studio',
    metaDescription:
      'Book a Corrective Facial at The Derm Studio, Redcliffe. A results-focused clinical facial with LED light therapy and neck massage — the perfect starting point for your skin journey at Marine Parade, Redcliffe.',
    heroTitle: 'Corrective Facial Redcliffe | Expert Skin Treatment',
    heroSubtitle:
      'Meticulously curated by expert skin therapists — brightening, resurfacing, and delivering a surge of hydration. Includes LED light therapy.',
    intro: [
      'The Corrective Facial at The Derm Studio is meticulously curated by our expert skin therapists to deliver a perfect balance of results and relaxation. Designed as the ideal starting point for your skincare journey, this treatment is built around a progressive approach to skin revision — gently resurfacing, brightening, and addressing imperfections while delivering an exceptional clinical experience.',
      'At the core of every Corrective Facial is a precisely selected combination of professional Lira Clinical products chosen for your skin\'s unique needs on the day. The treatment gently resurfaces the outermost layers of the skin — brightening the complexion, refining texture, and addressing common concerns such as congestion, dullness, uneven tone, and mild dehydration. A powerful surge of targeted hydration then replenishes the skin barrier, leaving you with a noticeably glowing, radiant complexion.',
      'The Corrective Facial includes an indulgent tension-releasing neck and shoulder massage, performed while your treatment mask works on the skin. The session concludes with medical-grade LED light therapy, which stimulates collagen production, soothes any reactivity, and enhances the overall outcome of the treatment.',
      'Whether you are new to professional skin treatments or returning after a break, the Corrective Facial is the perfect foundation treatment. It provides a thorough assessment of your skin, introduces your skin to clinical-grade actives, and delivers a result you can see and feel — all in a 45-minute appointment. As an authorised Lira Clinical stockist, The Derm Studio is uniquely placed to prescribe home-care products to extend your results between visits.',
    ],
    benefits: [
      { title: 'Progressive Skin Resurfacing', desc: 'Gently removes the dull, dead surface layer to reveal brighter, fresher skin with improved clarity and texture.' },
      { title: 'Targeted Hydration', desc: 'Professional Lira Clinical actives deliver a deep surge of hydration that replenishes the skin barrier and restores lasting moisture.' },
      { title: 'LED Light Therapy Included', desc: 'Every Corrective Facial concludes with medical-grade LED — stimulating collagen, reducing inflammation, and boosting results.' },
      { title: 'Neck & Shoulder Massage', desc: 'An indulgent tension-releasing massage while your mask works — genuine relaxation as part of your clinical treatment.' },
      { title: 'Visible Glow', desc: 'Most clients notice an immediate improvement in brightness, clarity, and skin radiance from the very first session.' },
      { title: 'Suitable for All Skin Types', desc: 'Adapted to your unique skin needs at every appointment — no two Corrective Facials are identical.' },
    ],
    process: [
      { step: '01', title: 'Skin Consultation & Analysis', desc: 'Your therapist discusses your current skin concerns and goals, and performs a thorough visual skin assessment to guide product and technique selection.' },
      { step: '02', title: 'Double Cleanse', desc: 'A thorough double-cleanse removes makeup, SPF, and surface impurities, preparing the skin to fully benefit from the treatment ahead.' },
      { step: '03', title: 'Gentle Resurfacing', desc: 'A progressive resurfacing step removes dead skin cells, refines texture, and prepares the skin to absorb active ingredients more effectively.' },
      { step: '04', title: 'Targeted Serums & Actives', desc: 'Lira Clinical professional serums are applied and worked into the skin, addressing your specific concerns with clinically active ingredients.' },
      { step: '05', title: 'Treatment Mask + Neck & Shoulder Massage', desc: 'A treatment mask is selected for your skin type and applied while your therapist delivers a tension-releasing neck and shoulder massage.' },
      { step: '06', title: 'LED Light Therapy', desc: 'Medical-grade LED light therapy is delivered over the treated skin to stimulate collagen, reduce inflammation, and seal in results.' },
      { step: '07', title: 'Moisturise & SPF', desc: 'The treatment concludes with a professional moisturiser and broad-spectrum SPF to protect and preserve your results.' },
    ],
    faqs: [
      { q: 'Is the Corrective Facial suitable for sensitive or reactive skin?', a: 'Yes. Our therapists are experienced in adapting the Corrective Facial for sensitised and reactive skin types. Products are selected appropriate for your skin\'s condition on the day.' },
      { q: 'How often should I have a Corrective Facial?', a: 'Monthly Corrective Facials are ideal for maintaining healthy, radiant skin and building progressively on clinical results. Your therapist will recommend a frequency based on your skin goals.' },
      { q: 'Is the Corrective Facial a good first treatment?', a: 'Yes — it is specifically designed as the ideal starting point for your skincare journey. It allows your therapist to assess your skin, introduce professional actives gently, and establish a clear treatment pathway.' },
      { q: 'What products are used?', a: 'We use Lira Clinical professional skincare throughout every Corrective Facial. Lira Clinical is available exclusively through The Derm Studio — it cannot be purchased online.' },
      { q: 'Do I need a prior consultation?', a: 'No. A skin analysis is conducted at the beginning of every appointment, so no separate consultation is required before your first visit.' },
    ],
    relatedSlugs: ['hybrid-facial-redcliffe', 'level-1-corrective-peel-redcliffe', 'dermaplaning-facial-redcliffe'],
    iconName: 'Sparkles',
  },

  /* ── HYBRID FACIAL ─────────────────────────────── */
  {
    slug: 'hybrid-facial-redcliffe',
    name: 'Hybrid Facial',
    tagline: 'The next-level upgrade — peel infusion meets clinical facial.',
    price: '$220',
    duration: '45 mins',
    category: 'Facials',
    metaTitle: 'Hybrid Facial Redcliffe | Peel Infusion Facial — The Derm Studio',
    metaDescription:
      'Book a Hybrid Facial at The Derm Studio, Redcliffe. A corrective facial blended with a gentle peel infusion for deeper results with zero downtime. Includes LED light therapy at Marine Parade, Redcliffe.',
    heroTitle: 'Hybrid Facial Redcliffe | Peel Infusion Facial',
    heroSubtitle:
      'The next-level upgrade your skin has been craving — corrective facial meets gentle peel infusion. Zero downtime. Includes LED light therapy.',
    intro: [
      'The Hybrid Facial at The Derm Studio is the next-level upgrade your skin has been craving. Blending the indulgence of our Corrective Facial with the added power of a gentle peel infusion, this treatment delivers deeper rejuvenation than a standard facial — without any downtime. It is the natural next step for clients who have already experienced the Corrective Facial and are ready to take their skin results further.',
      'The defining element of the Hybrid Facial is the infusion of a specialised peel solution into the skin. Unlike a standalone corrective peel, this solution is worked gently into the treatment to enhance brightness, refine texture, and support long-term skin health without any preparation requirements or recovery time. The peel element elevates the resurfacing action of the treatment, working deeper into the skin to accelerate cell turnover and improve the overall clarity and evenness of the complexion.',
      'The Hybrid Facial includes LED light therapy, which amplifies the outcome of the peel infusion by stimulating collagen production and reducing post-treatment reactivity. The result is a treatment that performs at a clinical level while remaining accessible, comfortable, and completely safe for all skin types — suitable year-round, including warmer months when stronger peel treatments are typically avoided.',
      'As the perfect bridge between a Corrective Facial and a Level 1 Corrective Peel, the Hybrid Facial prepares the skin for progressive intensification of treatment — building a stronger, more resilient skin barrier and conditioning the complexion for deeper correction over time. Your therapist will guide you on when it\'s the right time to progress to the next level of treatment.',
    ],
    benefits: [
      { title: 'Gentle Peel Infusion', desc: 'A specialised peel solution is worked into the skin for deeper resurfacing than a standard facial — without downtime or preparation.' },
      { title: 'No Downtime', desc: 'Return to your day immediately. The Hybrid Facial is designed for effective results with no visible recovery period.' },
      { title: 'LED Light Therapy Included', desc: 'Medical-grade LED light stimulates collagen, soothes reactivity, and amplifies the effects of the peel infusion.' },
      { title: 'Enhanced Brightness & Clarity', desc: 'The peel element accelerates cell turnover, visibly improving the brightness, evenness, and overall quality of the skin.' },
      { title: 'Safe Year-Round', desc: 'Unlike deeper peel treatments, the Hybrid Facial is safe for all skin types and can be performed in any season.' },
      { title: 'Ideal Bridge Treatment', desc: 'The perfect progression after Corrective Facials and before moving into Level 1 Corrective Peels.' },
    ],
    process: [
      { step: '01', title: 'Skin Assessment', desc: 'Your therapist assesses your skin and confirms the Hybrid Facial is the appropriate treatment level for your current condition and goals.' },
      { step: '02', title: 'Cleanse & Prepare', desc: 'A thorough cleanse removes surface impurities and prepares the skin for maximum active penetration.' },
      { step: '03', title: 'Peel Infusion', desc: 'A specialised Lira Clinical peel solution is applied and worked gently into the skin to enhance resurfacing, brightness, and cell renewal.' },
      { step: '04', title: 'Targeted Serums', desc: 'Professional Lira Clinical serums are applied to address your specific skin concerns and reinforce the effects of the peel infusion.' },
      { step: '05', title: 'Treatment Mask', desc: 'A corrective mask appropriate for your skin type is applied to consolidate results and deliver additional actives.' },
      { step: '06', title: 'LED Light Therapy', desc: 'Medical-grade LED therapy is delivered to stimulate collagen, calm any reactivity, and enhance the overall outcome.' },
      { step: '07', title: 'Moisturise & SPF', desc: 'Finished with a professional moisturiser and broad-spectrum SPF to seal in results and protect the skin.' },
    ],
    faqs: [
      { q: 'What is the difference between a Corrective Facial and a Hybrid Facial?', a: 'The Hybrid Facial includes a peel infusion — a specialised solution worked into the skin to deliver deeper resurfacing and brighter results than the Corrective Facial, without any downtime. It is the natural progression once your skin is ready.' },
      { q: 'Do I need to prepare my skin beforehand?', a: 'No special preparation is required. The Hybrid Facial is designed to deliver excellent results without prep requirements, making it an accessible step-up from the Corrective Facial.' },
      { q: 'Will I peel or have downtime after?', a: 'No. The peel solution used in the Hybrid Facial is infused gently during the treatment and does not cause visible flaking or downtime.' },
      { q: 'How often should I have a Hybrid Facial?', a: 'Monthly treatments are ideal. Your therapist will also guide you on whether it\'s time to progress to a Level 1 Corrective Peel based on how your skin is responding.' },
      { q: 'Is it suitable for sensitive skin?', a: 'Yes. The Hybrid Facial is designed to be safe for all skin types, including sensitised skin. Your therapist selects the appropriate peel solution for your individual skin needs.' },
    ],
    relatedSlugs: ['corrective-facial-redcliffe', 'level-1-corrective-peel-redcliffe', 'level-2-corrective-peel-redcliffe'],
    iconName: 'Droplets',
  },

  /* ── DERMAPLANING FACIAL ───────────────────────── */
  {
    slug: 'dermaplaning-facial-redcliffe',
    name: 'Luminous Silk Dermaplaning Facial',
    tagline: 'Ultra-luxurious dermaplaning for flawlessly smooth, glowing skin.',
    price: '$199',
    duration: '1 hr',
    category: 'Facials',
    metaTitle: 'Dermaplaning Facial Redcliffe | Luminous Silk Treatment — The Derm Studio',
    metaDescription:
      'Book a Luminous Silk Dermaplaning Facial at The Derm Studio, Redcliffe. Expert dermaplaning with hydrating mask and LED light therapy for flawlessly smooth, radiant skin at Marine Parade, Redcliffe.',
    heroTitle: 'Dermaplaning Facial Redcliffe | Luminous Silk Treatment',
    heroSubtitle:
      'Reveal your smoothest, most radiant skin — luxurious dermaplaning with a hydrating mask and LED light therapy.',
    intro: [
      'The Luminous Silk Dermaplaning Facial at The Derm Studio reveals your smoothest, most radiant skin with a luxurious treatment experience unlike anything else in our menu. Dermaplaning is a precise physical exfoliation technique that gently removes the outermost layer of dead skin cells and fine vellus hair — commonly known as peach fuzz — using a sterile surgical blade. The result is an instantly smoother, softer complexion with dramatically enhanced product absorption.',
      'Beyond the immediate improvement in skin texture and clarity, dermaplaning significantly enhances the efficacy of every product applied after it. With the barrier of dead cells and vellus hair removed, active ingredients penetrate far more deeply and effectively — meaning your professional skincare achieves better results both in the clinic and at home.',
      'Following the dermaplaning step, a deeply hydrating mask is applied to replenish moisture and restore the skin\'s natural radiance. This step takes advantage of the skin\'s exceptional receptiveness immediately post-treatment to deliver maximum hydration at depth. The treatment concludes with medical-grade LED light therapy, which soothes the skin, reduces any temporary post-procedure redness, and promotes an even-toned, luminous finish.',
      'Dermaplaning is suitable for most skin types and is particularly popular among clients with dull, dry, or uneven skin who want immediate, visible results. It is also an excellent preparatory treatment before events, as the skin appears uniquely smooth, bright, and photo-ready immediately after the session.',
    ],
    benefits: [
      { title: 'Instantly Smoother Skin', desc: 'Dermaplaning removes the layer of dead cells and vellus hair that contribute to dullness and rough texture — the improvement is immediate and noticeable.' },
      { title: 'Flawlessly Even Complexion', desc: 'Without the vellus hair layer, the skin appears more even and refined, and makeup sits more smoothly.' },
      { title: 'Dramatically Enhanced Absorption', desc: 'Active ingredients penetrate significantly deeper when applied to freshly dermaplaned skin, amplifying both in-clinic and home-care results.' },
      { title: 'Deep Hydration Mask', desc: 'A professional hydrating mask is applied post-dermaplaning to maximise moisture replenishment in the newly receptive skin.' },
      { title: 'LED Light Therapy Included', desc: 'Medical-grade LED therapy soothes post-treatment skin, reduces redness, and promotes an even-toned, luminous finish.' },
      { title: 'Photo-Ready Results', desc: 'The skin appears uniquely bright, smooth, and radiant immediately after treatment — ideal preparation for events.' },
    ],
    process: [
      { step: '01', title: 'Consultation & Skin Check', desc: 'Your therapist confirms dermaplaning is appropriate for your skin type and current condition before commencing treatment.' },
      { step: '02', title: 'Cleanse & Prepare', desc: 'A thorough cleanse removes all surface impurities to ensure an optimal canvas for dermaplaning.' },
      { step: '03', title: 'Dermaplaning', desc: 'Using a sterile surgical blade, your therapist precisely exfoliates the skin surface — removing dead cells and fine vellus hair for a flawlessly smooth finish.' },
      { step: '04', title: 'Targeted Serums', desc: 'Professional Lira Clinical serums are applied immediately to take advantage of the skin\'s enhanced receptiveness post-dermaplaning.' },
      { step: '05', title: 'Hydrating Mask', desc: 'A deeply hydrating mask is applied to replenish moisture, calm the skin, and maximise the luminosity of the result.' },
      { step: '06', title: 'LED Light Therapy', desc: 'Medical-grade LED therapy soothes the skin, reduces post-procedure redness, and promotes an even, radiant finish.' },
      { step: '07', title: 'Moisturise & SPF', desc: 'Completed with a professional moisturiser and broad-spectrum SPF to protect and preserve the results.' },
    ],
    faqs: [
      { q: 'Will my hair grow back thicker after dermaplaning?', a: 'No. This is a common misconception. Vellus hair is structurally different from terminal hair and cannot grow back thicker or coarser after dermaplaning.' },
      { q: 'Is dermaplaning uncomfortable?', a: 'No. The treatment is completely painless. Most clients find the sensation gentle and relaxing.' },
      { q: 'Is dermaplaning suitable for acne-prone skin?', a: 'Dermaplaning is not recommended over active breakouts. If you have occasional congestion or mild post-acne marks without active lesions, your therapist will assess your suitability at the appointment.' },
      { q: 'How long do results last?', a: 'Skin typically remains smooth for 3–4 weeks as the natural cell renewal cycle progresses. Monthly treatments maintain optimal results.' },
      { q: 'Can I wear makeup after?', a: 'Yes — makeup typically applies more smoothly and evenly than usual immediately after dermaplaning. Your therapist will advise on appropriate aftercare.' },
    ],
    relatedSlugs: ['corrective-facial-redcliffe', 'hybrid-facial-redcliffe', 'korean-lash-lift-tint-redcliffe'],
    iconName: 'Scan',
  },

  /* ── LEVEL 1 CORRECTIVE PEEL ───────────────────── */
  {
    slug: 'level-1-corrective-peel-redcliffe',
    name: 'Level 1 Corrective Peel',
    tagline: 'Lira Clinical brightening peel — no preparation required.',
    price: '$199',
    duration: '45 mins',
    category: 'Corrective Peels',
    metaTitle: 'Level 1 Corrective Peel Redcliffe | Lira Clinical Peel — The Derm Studio',
    metaDescription:
      'Book a Level 1 Lira Clinical Corrective Peel at The Derm Studio, Redcliffe. No preparation required. Brightening, hydrating, and corrective peel therapy with neck massage at Marine Parade, Redcliffe.',
    heroTitle: 'Level 1 Corrective Peel Redcliffe | Lira Clinical Peel Therapy',
    heroSubtitle:
      'Professional brightening and corrective peel therapy with no preparation required. Suitable for all skin types.',
    intro: [
      'The Level 1 Corrective Peel at The Derm Studio is an entry-level professional skin peel therapy using Lira Clinical\'s professional resurfacing formulations. Designed to brighten, hydrate, and correct a variety of skin concerns, this treatment is the natural next step after progressing through our facial treatments — and the gateway to the results that professional peels are renowned for delivering.',
      'Lira Clinical peels combine botanical ingredients with powerful resurfacing agents to safely improve skin texture and appearance with minimal to no downtime. The Level 1 formulations are crafted to be effective for a wide range of skin concerns — including dullness, mild pigmentation, early-onset fine lines, congestion, and uneven skin tone — while remaining accessible and comfortable for clients at the beginning of their peel journey.',
      'Each Level 1 Corrective Peel is tailored by your skin therapist to match your unique goals. The peel type, application time, and supporting products are all selected based on your individual skin type, current condition, and treatment objectives. The treatment also includes a tension-releasing neck and shoulder massage while your mask is on, ensuring you leave feeling both improved and genuinely relaxed.',
      'The Level 1 Corrective Peel requires no pre-treatment preparation with home-care products, making it an accessible first step into professional peel therapy. It is suitable for all skin types and all skin colours, and can be performed year-round. Multiple sessions spaced appropriately will deliver progressively improved brightness, clarity, and skin quality.',
    ],
    benefits: [
      { title: 'Corrects Multiple Skin Concerns', desc: 'Lira Clinical Level 1 peels address dullness, mild pigmentation, congestion, fine lines, and uneven skin tone in a single treatment.' },
      { title: 'No Preparation Required', desc: 'Unlike deeper peels, the Level 1 Corrective Peel can be booked directly without prior home-care preparation.' },
      { title: 'Minimal to No Downtime', desc: 'Most clients experience no visible peeling — at most, mild flaking may occur in the days following treatment.' },
      { title: 'Neck & Shoulder Massage Included', desc: 'An indulgent massage is performed while your treatment mask is working — genuine relaxation as part of your clinical treatment.' },
      { title: 'Suitable for All Skin Types & Colours', desc: 'Lira Clinical peel formulations are safe and effective across all skin types and tones.' },
      { title: 'Progressive, Cumulative Results', desc: 'Each treatment session builds on the last, delivering ongoing improvements in brightness, texture, and overall skin quality.' },
    ],
    process: [
      { step: '01', title: 'Skin Consultation', desc: 'Your therapist assesses your skin, confirms Level 1 as the appropriate peel depth, and selects the most suitable Lira Clinical formulation for your goals.' },
      { step: '02', title: 'Cleanse & Degrease', desc: 'The skin is thoroughly cleansed and degreased to ensure consistent, even peel penetration.' },
      { step: '03', title: 'Peel Application', desc: 'The Lira Clinical peel solution is carefully applied and monitored by your therapist throughout the treatment.' },
      { step: '04', title: 'Neutralisation & Removal', desc: 'The peel is neutralised and removed at the precise endpoint for your skin type and the selected formulation.' },
      { step: '05', title: 'Mask + Neck & Shoulder Massage', desc: 'A soothing post-peel mask is applied while your therapist delivers a tension-releasing neck and shoulder massage.' },
      { step: '06', title: 'Post-Peel Care & SPF', desc: 'Reparative products and broad-spectrum SPF are applied to support the skin barrier and protect the freshly treated skin.' },
    ],
    faqs: [
      { q: 'Do I need to prepare my skin before a Level 1 peel?', a: 'No. The Level 1 Corrective Peel requires no preparation with home-care products — it can be booked directly without any prior conditioning.' },
      { q: 'Will I visibly peel?', a: 'Most clients experience minimal to no visible peeling after a Level 1 treatment. You may notice some light flaking in the 2–3 days following treatment.' },
      { q: 'How many sessions will I need?', a: 'A course of 4–6 treatments spaced 2–4 weeks apart is typically recommended for optimal results. Your therapist will guide you on timing and progression.' },
      { q: 'Can I wear makeup after my peel?', a: 'We recommend allowing the skin to breathe for the remainder of the day. Your therapist will advise on appropriate aftercare for the specific formulation used.' },
      { q: 'When should I progress to a Level 2 peel?', a: 'Your therapist will monitor your skin\'s response across your Level 1 course and advise when your skin is ready and appropriate for progression to Level 2.' },
    ],
    relatedSlugs: ['hybrid-facial-redcliffe', 'level-2-corrective-peel-redcliffe', 'corrective-facial-redcliffe'],
    iconName: 'FlaskConical',
  },

  /* ── LEVEL 2 CORRECTIVE PEEL ───────────────────── */
  {
    slug: 'level-2-corrective-peel-redcliffe',
    name: 'Level 2 Corrective Peel',
    tagline: 'Advanced peel for pigmentation, scarring and fine lines. Prep required.',
    price: '$220',
    duration: '45 mins',
    category: 'Corrective Peels',
    metaTitle: 'Level 2 Corrective Peel Redcliffe | Advanced Skin Peel — The Derm Studio',
    metaDescription:
      'Book a Level 2 Lira Clinical Corrective Peel at The Derm Studio, Redcliffe. Advanced peel therapy targeting hyperpigmentation, acne scarring, and fine lines at Marine Parade, Redcliffe.',
    heroTitle: 'Level 2 Corrective Peel Redcliffe | Advanced Peel Therapy',
    heroSubtitle:
      'Advanced Lira Clinical peel procedures targeting hyperpigmentation, fine lines, and acne scarring. Preparation required.',
    intro: [
      'The Level 2 Corrective Peel at The Derm Studio represents a significant step forward in skin revision. These advanced professional procedures are designed to work deeper within the skin — promoting progressive and meaningful improvement in skin health and appearance. They are recommended for clients who have completed a course of Level 1 peels and whose skin is conditioned and ready to receive deeper correction.',
      'Level 2 Corrective Peels target a broader and more challenging range of skin concerns: hyperpigmentation, post-inflammatory pigmentation, fine lines and early wrinkles, acne scarring, and uneven texture that has not responded adequately to superficial treatments. The deeper action of Level 2 formulations stimulates cellular turnover at a greater depth and drives more substantial collagen production — delivering results that continue to develop in the weeks following each treatment.',
      'Unlike Level 1 treatments, Level 2 Corrective Peels require pre-treatment preparation with Lira Clinical home-care products. This preparation period is essential for achieving safe, consistent results — particularly for clients with pigmentation concerns — as it conditions the skin, ensures the skin barrier is functioning optimally, and helps prevent post-inflammatory pigmentation. Your therapist will prescribe the appropriate home-care protocol at your consultation.',
      'Some clients may experience mild downtime following a Level 2 treatment — typically mild flaking or more visible peeling over 3–7 days. Your therapist will provide detailed aftercare instructions and a Lira Clinical home-care prescription to support your skin through the recovery process and maximise your results.',
    ],
    benefits: [
      { title: 'Deeper Skin Correction', desc: 'Works deeper than Level 1 formulations to address more significant pigmentation, scarring, fine lines, and texture concerns.' },
      { title: 'Stimulates Cellular Renewal', desc: 'Drives cellular turnover at greater depth, revealing newer, healthier skin over the days and weeks following treatment.' },
      { title: 'Collagen Production', desc: 'Level 2 peels stimulate meaningful collagen production, contributing to firmer, smoother skin with each course of treatment.' },
      { title: 'Targets Hyperpigmentation', desc: 'Effective treatment for post-inflammatory pigmentation, sun damage, uneven skin tone, and mild melasma.' },
      { title: 'Progressive Results', desc: 'Results continue to develop over 2–4 weeks following each treatment as the skin renewal process unfolds.' },
      { title: 'Supported by Lira Clinical', desc: 'Every Level 2 peel is backed by a prescribed Lira Clinical home-care protocol for optimal and lasting outcomes.' },
    ],
    process: [
      { step: '01', title: 'Consultation & Preparation Prescription', desc: 'Your therapist assesses your skin, confirms Level 2 suitability, and prescribes your Lira Clinical home-care preparation protocol.' },
      { step: '02', title: 'Pre-Treatment Preparation', desc: 'You complete the prescribed home-care preparation period (typically 2–4 weeks) before your peel appointment.' },
      { step: '03', title: 'Pre-Peel Cleanse & Degrease', desc: 'At your appointment, the skin is thoroughly cleansed and degreased for consistent peel penetration.' },
      { step: '04', title: 'Level 2 Peel Application', desc: 'The Lira Clinical Level 2 peel solution is applied precisely and monitored by your therapist throughout the treatment.' },
      { step: '05', title: 'Neutralisation & Removal', desc: 'The peel is neutralised and removed at the correct endpoint for your skin and the selected formulation.' },
      { step: '06', title: 'Post-Peel Recovery Support', desc: 'Soothing, reparative products and SPF are applied, and your therapist prescribes your Lira Clinical post-peel home-care protocol.' },
    ],
    faqs: [
      { q: 'Why do I need to prepare my skin before a Level 2 peel?', a: 'Preparation conditions the skin barrier, maximises the safety and consistency of the peel result, and significantly reduces the risk of post-inflammatory pigmentation — particularly important for clients treating existing pigmentation.' },
      { q: 'How long is the preparation period?', a: 'Typically 2–4 weeks of consistent use of prescribed Lira Clinical home-care products. Your therapist will confirm the exact protocol.' },
      { q: 'What is the downtime?', a: 'Level 2 peels typically result in 3–7 days of mild flaking or more visible peeling. Your therapist will set clear expectations based on the specific formulation selected.' },
      { q: 'How many Level 2 peels will I need?', a: 'A course of 3–6 treatments spaced 3–4 weeks apart is typical. The exact number depends on your skin concerns and treatment goals.' },
      { q: 'Can I have a Level 2 peel in summer?', a: 'We exercise caution with Level 2 peels during warmer months, particularly for pigmentation clients. Strict daily SPF use is essential. Your therapist will advise based on your circumstances.' },
    ],
    relatedSlugs: ['level-1-corrective-peel-redcliffe', 'level-3-corrective-peel-redcliffe', 'skin-needling-nctf-redcliffe'],
    iconName: 'FlaskConical',
  },

  /* ── LEVEL 3 CORRECTIVE PEEL ───────────────────── */
  {
    slug: 'level-3-corrective-peel-redcliffe',
    name: 'Level 3 Corrective Peel',
    tagline: 'Intensive Lira Clinical correction for complex skin concerns. Prep required.',
    price: '$250',
    duration: '45 mins',
    category: 'Corrective Peels',
    metaTitle: 'Level 3 Corrective Peel Redcliffe | Intensive Skin Peel — The Derm Studio',
    metaDescription:
      'Book a Level 3 Lira Clinical Corrective Peel at The Derm Studio, Redcliffe. Our most intensive peel therapy for melasma, acne, significant pigmentation, and age-related skin concerns.',
    heroTitle: 'Level 3 Corrective Peel Redcliffe | Intensive Peel Therapy',
    heroSubtitle:
      'Our most intensive Lira Clinical peel — for complex skin concerns including melasma, acne, and significant pigmentation. Recommended in cooler months.',
    intro: [
      'The Level 3 Corrective Peel at The Derm Studio is our most intensive professional peel treatment. These advanced correction procedures utilise a synergistic blend of targeted Lira Clinical formulations to address complex and challenging skin concerns — including active acne, melasma, significant pigmentation disorders, and age-related skin changes that have not responded to lighter treatments.',
      'Level 3 Corrective Peels are designed to restore optimal skin health by promoting meaningful cellular renewal and significantly improving overall skin function. The depth of these formulations delivers substantial improvement in skin texture, tone, and resilience — with results that are progressive and cumulative across a course of treatment. For clients with chronic pigmentation, significant acne scarring, or deeply entrenched textural concerns, Level 3 Corrective Peels represent the most powerful peel option available at The Derm Studio.',
      'Level 3 treatments require both pre-treatment preparation with Lira Clinical home-care products and prior conditioning treatments in-clinic. The preparation phase is non-negotiable at this level — it is essential for achieving the safest and most effective outcome, and for reducing the risk of post-inflammatory pigmentation and other adverse reactions. Your therapist will develop a detailed preparation plan before proceeding.',
      'Downtime is associated with Level 3 treatments. Most clients experience visible peeling and flaking over 5–10 days following the procedure. These treatments are recommended during cooler months to minimise UV exposure during the recovery phase. Your therapist will provide a complete aftercare protocol and Lira Clinical home-care prescription to support your skin through recovery and maximise results.',
    ],
    benefits: [
      { title: 'Maximum Peel Correction', desc: 'The most powerful peel formulations available at The Derm Studio — for complex skin concerns that require intensive intervention.' },
      { title: 'Targets Complex Pigmentation', desc: 'Effective for melasma, significant post-inflammatory hyperpigmentation, and pigmentation disorders that have not responded to lighter treatments.' },
      { title: 'Significant Cellular Renewal', desc: 'Promotes deep cellular renewal and rebuilds the overall health and function of the skin.' },
      { title: 'Collagen & Structural Improvement', desc: 'Stimulates substantial collagen production, delivering measurable improvement in firmness, texture, and skin resilience.' },
      { title: 'Treats Acne & Post-Acne Scarring', desc: 'Addresses both active acne concerns and the scarring and pigmentation sequelae that follow.' },
      { title: 'Long-Lasting, Progressive Results', desc: 'Each treatment in the course delivers cumulative improvement — results continue developing for weeks after each session.' },
    ],
    process: [
      { step: '01', title: 'Comprehensive Consultation', desc: 'Your therapist conducts a thorough assessment, confirms Level 3 suitability, and develops a complete preparation plan including home-care prescription and prior in-clinic conditioning.' },
      { step: '02', title: 'Preparation Phase', desc: 'You complete your Lira Clinical home-care preparation and any required prior in-clinic treatments before proceeding to Level 3.' },
      { step: '03', title: 'Pre-Peel Assessment', desc: 'At your Level 3 appointment, your skin is reassessed to confirm readiness and the peel protocol is finalised.' },
      { step: '04', title: 'Level 3 Peel Application', desc: 'The synergistic Lira Clinical Level 3 peel blend is applied precisely and monitored carefully throughout the treatment.' },
      { step: '05', title: 'Neutralisation & Post-Peel Care', desc: 'The peel is neutralised at the correct endpoint and reparative products are applied immediately to support the skin barrier.' },
      { step: '06', title: 'Aftercare Prescription', desc: 'You leave with a detailed Lira Clinical post-peel home-care protocol and comprehensive aftercare instructions for the recovery period.' },
    ],
    faqs: [
      { q: 'Am I a suitable candidate for a Level 3 peel?', a: 'Level 3 peels are for clients with significant skin concerns who have already undergone a course of lighter peel treatments. Your therapist will determine suitability through consultation and prior in-clinic treatment.' },
      { q: 'What is the expected downtime?', a: 'Most Level 3 clients experience 5–10 days of visible peeling and flaking as the skin renews. Your therapist will set clear expectations before treatment.' },
      { q: 'Why are Level 3 peels recommended in cooler months?', a: 'Cooler months reduce UV exposure during the recovery phase, which is particularly important when treating pigmentation. Your therapist will advise on timing.' },
      { q: 'How many treatments will I need?', a: 'This depends entirely on your skin concerns. Your therapist will develop a complete treatment plan before commencing Level 3 treatments.' },
      { q: 'What preparation is required?', a: 'Both Lira Clinical home-care preparation (typically 4–6 weeks) and prior in-clinic conditioning treatments are required before Level 3. Your therapist will guide you through this phase.' },
    ],
    relatedSlugs: ['level-2-corrective-peel-redcliffe', 'skin-needling-nctf-redcliffe', 'skin-needling-exosomes-redcliffe'],
    iconName: 'FlaskConical',
  },

  /* ── SKIN NEEDLING WITH NCTF ───────────────────── */
  {
    slug: 'skin-needling-nctf-redcliffe',
    name: 'Skin Needling with NCTF',
    tagline: 'Collagen induction therapy infused with 54 active ingredients.',
    price: '$349',
    duration: '45 mins',
    category: 'Skin Needling',
    metaTitle: 'Skin Needling Redcliffe | NCTF Treatment — The Derm Studio',
    metaDescription:
      'Book Skin Needling with NCTF at The Derm Studio, Redcliffe. Collagen induction therapy infused with vitamins, amino acids, minerals, and hyaluronic acid for brighter, firmer skin at Marine Parade, Redcliffe.',
    heroTitle: 'Skin Needling Redcliffe | Collagen Induction with NCTF',
    heroSubtitle:
      'Micro-needling infused with NCTF — 54 active ingredients delivered deep into the skin for brighter, firmer, smoother results.',
    intro: [
      'Skin Needling with NCTF at The Derm Studio is a results-driven treatment designed to rejuvenate, hydrate, and restore your skin from within. Using a professional micro-needling device, your therapist creates thousands of precise micro-channels in the skin\'s surface, stimulating the skin\'s natural collagen production while allowing the NCTF solution to penetrate to a depth unreachable by topical application alone.',
      'NCTF (New Cellular Treatment Factor) is a powerful cocktail of 54 active ingredients: vitamins, amino acids, minerals, coenzymes, and hyaluronic acid. Developed specifically to support cellular renewal and deep skin hydration, it is one of the most nutrient-dense solutions available for skin needling infusion. When delivered directly into the skin via micro-channels, NCTF provides comprehensive cellular support that drives lasting improvements in hydration, firmness, brightness, and overall skin quality.',
      'The combination of collagen-stimulating needling and deep NCTF infusion delivers a uniquely comprehensive result: brighter, smoother, firmer skin with visibly improved tone, texture, and hydration. Clients commonly notice a reduction in fine lines and enlarged pores, an improvement in overall skin luminosity, and a restoration of healthy skin density over the course of treatment.',
      'All skin needling at The Derm Studio is performed by our qualified dermal therapists using professional-grade devices that deliver consistent, precise needle depth. Topical anaesthetic cream is applied before treatment to ensure your comfort, and Lira Clinical products support the skin through treatment and recovery. As an authorised Lira Clinical stockist, we prescribe the ideal home-care protocol to extend your results between sessions.',
    ],
    benefits: [
      { title: 'Deep NCTF Infusion', desc: '54 active ingredients — including vitamins, amino acids, hyaluronic acid, and coenzymes — are delivered directly into the skin via micro-channels for unparalleled cellular support.' },
      { title: 'Collagen Induction', desc: 'Micro-needling triggers the skin\'s natural healing response, stimulating new collagen and elastin production for firmer, more resilient skin.' },
      { title: 'Improved Skin Hydration', desc: 'Hyaluronic acid and the NCTF complex restore deep hydration at a cellular level, visibly improving skin plumpness and moisture retention.' },
      { title: 'Reduced Fine Lines & Pores', desc: 'Progressive collagen remodelling reduces the depth of fine lines and visibly tightens the appearance of enlarged pores.' },
      { title: 'Enhanced Brightness & Luminosity', desc: 'Clients notice a meaningful improvement in skin radiance and overall glow across the course of treatment.' },
      { title: 'Qualified Therapist Delivery', desc: 'All skin needling at The Derm Studio is performed by qualified dermal therapists using professional-grade devices.' },
    ],
    process: [
      { step: '01', title: 'Consultation & Assessment', desc: 'Your therapist assesses your skin concerns, reviews contraindications, and confirms the appropriate needle depth for your treatment goals.' },
      { step: '02', title: 'Anaesthetic Application', desc: 'Topical anaesthetic cream is applied and left for 30 minutes prior to treatment to ensure your comfort throughout the procedure.' },
      { step: '03', title: 'Skin Needling Treatment', desc: 'The micro-needling device is passed systematically over the treatment area, creating precise micro-channels at the correct depth.' },
      { step: '04', title: 'NCTF Infusion', desc: 'The NCTF solution is applied directly to the needled skin, penetrating through the open micro-channels to reach the deeper layers of the dermis.' },
      { step: '05', title: 'Post-Treatment Support', desc: 'Soothing, barrier-supporting Lira Clinical products are applied to calm the skin and begin the recovery process.' },
      { step: '06', title: 'Aftercare & Home-Care Prescription', desc: 'You receive detailed aftercare instructions and a Lira Clinical home-care prescription to support healing and maximise results.' },
    ],
    faqs: [
      { q: 'Is skin needling with NCTF painful?', a: 'Topical anaesthetic cream is applied 30 minutes before treatment. Most clients report minimal discomfort — a mild vibration or scratching sensation at most.' },
      { q: 'What is the downtime?', a: 'Skin typically appears red and feels warm for 24–48 hours post-treatment, similar to a mild sunburn. Avoid makeup and active skincare products for the first 24 hours.' },
      { q: 'How many sessions are needed?', a: 'A course of 3–6 treatments spaced 4–6 weeks apart is typically recommended for optimal results. Your therapist will advise based on your specific concerns.' },
      { q: 'When will I see results?', a: 'Initial improvements in skin quality and hydration are typically visible within 2 weeks of the first session. Collagen remodelling results continue developing for 3–6 months following each treatment.' },
      { q: 'What is NCTF?', a: 'NCTF (New Cellular Treatment Factor) is a clinically formulated solution containing 54 active ingredients including vitamins, amino acids, coenzymes, minerals, and hyaluronic acid — designed for comprehensive cellular support and deep skin hydration.' },
    ],
    relatedSlugs: ['skin-needling-exosomes-redcliffe', 'level-2-corrective-peel-redcliffe', 'level-3-corrective-peel-redcliffe'],
    iconName: 'Pipette',
  },

  /* ── SKIN NEEDLING WITH EXOSOMES ───────────────── */
  {
    slug: 'skin-needling-exosomes-redcliffe',
    name: 'Skin Needling with Exosomes',
    tagline: 'Our most advanced needling — exosome technology for maximum regeneration.',
    price: '$449',
    duration: '45 mins',
    category: 'Skin Needling',
    metaTitle: 'Skin Needling with Exosomes Redcliffe | Advanced Regeneration — The Derm Studio',
    metaDescription:
      'Book Skin Needling with Exosomes at The Derm Studio, Redcliffe. Our most advanced needling treatment — exosome technology for maximum skin repair, collagen stimulation, and rejuvenation at Marine Parade, Redcliffe.',
    heroTitle: 'Skin Needling with Exosomes Redcliffe | Advanced Regeneration',
    heroSubtitle:
      'Our most advanced needling treatment — exosome technology supercharges the skin\'s natural repair and regeneration for maximum results.',
    intro: [
      'Skin Needling with Exosomes at The Derm Studio is our most advanced skin needling treatment — and the pinnacle of cellular regeneration available at our Redcliffe clinic. Combining the proven collagen-stimulating power of professional micro-needling with the extraordinary regenerative capacity of exosome technology, this treatment delivers results that surpass what standard needling can achieve.',
      'Exosomes are cell-derived signalling molecules — tiny vesicles released by cells that carry growth factors, peptides, and genetic instructions between cells. In the context of skin treatment, exosomes act as powerful biological messengers that supercharge the skin\'s natural repair and regeneration process, amplifying the healing response triggered by micro-needling to a degree that no standard serum or nutrient solution can match.',
      'When delivered via micro-needling, exosomes penetrate to the depth of the dermis, triggering a profound cellular renewal cascade. This makes Skin Needling with Exosomes particularly effective for clients with significant skin ageing, deep acne scarring, textural concerns, and those seeking maximum rejuvenation from a single treatment modality. For clients who have already undergone standard needling and want to take their results further, the Exosome treatment delivers a measurably superior outcome.',
      'Like all skin needling at The Derm Studio, this treatment is performed by qualified dermal therapists using professional-grade micro-needling devices with topical anaesthetic for client comfort. Results develop progressively following each session, with peak collagen remodelling occurring over 3–6 months.',
    ],
    benefits: [
      { title: 'Exosome Technology', desc: 'Cell-derived signalling molecules supercharge the skin\'s repair and regeneration response — amplifying results beyond standard needling.' },
      { title: 'Maximum Rejuvenation', desc: 'For clients seeking the highest level of skin renewal available through needle-based treatment.' },
      { title: 'Deep Collagen Stimulation', desc: 'Exosomes trigger a profound collagen and elastin regeneration cascade, delivering measurable improvements in skin firmness and structure.' },
      { title: 'Effective for Significant Scarring', desc: 'The amplified healing response makes this treatment particularly effective for deeper atrophic acne scarring and textural concerns.' },
      { title: 'Superior to Standard Serums', desc: 'Exosomes outperform standard needling serums and nutrient solutions in driving cellular regeneration and healing.' },
      { title: 'Qualified Therapist Delivery', desc: 'Performed exclusively by qualified dermal therapists at The Derm Studio using professional-grade needling devices.' },
    ],
    process: [
      { step: '01', title: 'Consultation & Assessment', desc: 'Your therapist reviews your skin history, concerns, and needling experience, and confirms the Exosome treatment is appropriate for your goals.' },
      { step: '02', title: 'Anaesthetic Application', desc: 'Topical anaesthetic cream is applied and left for 30 minutes to ensure comfort throughout the procedure.' },
      { step: '03', title: 'Skin Needling Treatment', desc: 'The micro-needling device is passed systematically over the treatment area at the precise depth required for your skin and concerns.' },
      { step: '04', title: 'Exosome Application', desc: 'The exosome solution is applied to the needled skin, penetrating deeply through the open micro-channels to the dermal layer where it activates cellular repair.' },
      { step: '05', title: 'Post-Treatment Recovery Support', desc: 'Soothing, reparative Lira Clinical products are applied immediately to calm the skin and support the recovery process.' },
      { step: '06', title: 'Aftercare & Home-Care Prescription', desc: 'Detailed aftercare guidance and a prescribed Lira Clinical home-care regimen to support healing and maximise long-term results.' },
    ],
    faqs: [
      { q: 'What are exosomes and why are they used in skin needling?', a: 'Exosomes are cell-derived vesicles that carry biological signals between cells — triggering collagen production, cellular repair, and regeneration at a level that standard serums cannot achieve.' },
      { q: 'How is this different from Skin Needling with NCTF?', a: 'Both treatments deliver active ingredients via micro-channels. Exosomes are biological signalling molecules that trigger the skin\'s own regeneration pathways at a cellular level — delivering a more powerful and advanced outcome than NCTF.' },
      { q: 'Is there downtime?', a: 'Similar to standard skin needling — skin appears red and feels warm for 24–48 hours. Avoid makeup and active skincare for 24 hours after treatment.' },
      { q: 'How many sessions are recommended?', a: 'Your therapist will advise based on your skin concerns. Typically 2–4 sessions for anti-ageing; 3–6 for significant acne scarring.' },
      { q: 'Who is this treatment best suited for?', a: 'Clients with significant skin concerns — deep acne scarring, advanced skin ageing, or textural issues — who want maximum regeneration. Also ideal for existing needling clients seeking superior results.' },
    ],
    relatedSlugs: ['skin-needling-nctf-redcliffe', 'level-3-corrective-peel-redcliffe', 'level-2-corrective-peel-redcliffe'],
    iconName: 'Pipette',
  },

  /* ── KOREAN LASH LIFT & TINT ───────────────────── */
  {
    slug: 'korean-lash-lift-tint-redcliffe',
    name: 'Korean Lash Lift & Tint',
    tagline: 'Lifted, curled, and tinted natural lashes — results last 6–8 weeks.',
    price: '$129',
    duration: '1 hr',
    category: 'Lash & Brow',
    metaTitle: 'Korean Lash Lift & Tint Redcliffe | Natural Lash Treatment — The Derm Studio',
    metaDescription:
      'Book a Korean Lash Lift & Tint at The Derm Studio, Redcliffe. Lifted, curled, and darkened natural lashes lasting 6–8 weeks — no extensions required. At Marine Parade, Redcliffe.',
    heroTitle: 'Korean Lash Lift & Tint Redcliffe | Natural Lash Enhancement',
    heroSubtitle:
      'Lifted, curled, and darkened natural lashes with precision Korean technique. Effortless eye definition lasting 6–8 weeks.',
    intro: [
      'The Korean Lash Lift & Tint at The Derm Studio is a semi-permanent lash treatment that lifts, curls, and darkens your natural lashes — delivering the appearance of longer, fuller lashes without extensions, strip lashes, or daily mascara. Using techniques refined in Korean beauty culture and renowned for their precision and longevity, this treatment gives your eyes a beautifully open, wide-awake look that lasts up to 6–8 weeks.',
      'The treatment uses a specially formulated lifting solution to gently reshape the lashes around a precisely selected rod, creating a consistent, lifted curl from root to tip. Unlike traditional lash perms, the Korean technique uses refined chemistry and precise application that preserves lash condition and delivers a more natural, flattering result — one that suits your natural lash length and eye shape.',
      'A professional tint is then applied to darken your natural lashes, adding depth, definition, and the appearance of volume. The combination of lifted curl and rich tint creates a striking eye-opening effect — equivalent to wearing mascara even with completely bare skin. The result is effortless, polished, and requires no daily maintenance.',
      'At The Derm Studio, the Korean Lash Lift & Tint is performed by our experienced team using professional-grade lifting solutions that are gentle on the lash fibre. This treatment beautifully complements your overall skin investment — clean, defined lashes frame your skin and enhance the results of every facial and peel treatment you receive.',
    ],
    benefits: [
      { title: 'Long-Lasting Lifted Curl', desc: 'Results typically last 6–8 weeks before requiring a touch-up — effortless lash definition without daily effort.' },
      { title: 'Natural-Looking Results', desc: 'The Korean lifting technique delivers a precise, flattering curl that suits your natural lash length and eye shape.' },
      { title: 'Tint Included', desc: 'Professional lash tinting adds depth, richness, and definition — reducing or eliminating the need for daily mascara.' },
      { title: 'No Extensions Required', desc: 'All results are achieved using your natural lashes — no adhesives, no extension maintenance, no damage.' },
      { title: 'Eye-Opening Effect', desc: 'The combination of lifted curl and dark tint creates a wide-awake, luminous eye effect that enhances your overall appearance.' },
      { title: 'Complements Your Skin Treatments', desc: 'Beautifully groomed lashes frame and enhance the skin results you achieve through your facial and peel treatments.' },
    ],
    process: [
      { step: '01', title: 'Lash Assessment', desc: 'Your therapist assesses your natural lash length, condition, and growth direction, and selects the appropriate lift rod and protocol.' },
      { step: '02', title: 'Lash Preparation', desc: 'Lashes are cleaned and separated to ensure a clean, even application surface.' },
      { step: '03', title: 'Lifting Rod Application', desc: 'The correctly sized rod is applied to the upper lid, and lashes are carefully arranged and secured around it.' },
      { step: '04', title: 'Lifting Solution', desc: 'The Korean lifting formula is applied precisely and left for the appropriate development time based on your lash type.' },
      { step: '05', title: 'Setting Solution', desc: 'A setting solution is applied to lock in the new curl and restore the lash fibre structure.' },
      { step: '06', title: 'Lash Tint', desc: 'A professional lash tint is applied and developed to deliver the desired depth of colour and definition.' },
      { step: '07', title: 'Nourishing Finish', desc: 'A lash conditioning treatment is applied to restore moisture and maintain the health of the lash fibre post-treatment.' },
    ],
    faqs: [
      { q: 'How long does a Korean Lash Lift last?', a: 'Results typically last 6–8 weeks, depending on your natural lash growth cycle. Most clients return for a touch-up at 6–8 weekly intervals.' },
      { q: 'Can I wear mascara after a lash lift?', a: 'Yes. Most clients find they need little to no mascara after a lash lift and tint. If you choose to wear mascara, avoid waterproof formulas as they can weaken the lift over time.' },
      { q: 'What should I avoid after treatment?', a: 'Avoid getting your lashes wet, rubbing your eyes, and applying skincare products to the lash area for the first 24 hours. Your therapist will provide full aftercare instructions.' },
      { q: 'Is a lash lift safe for my natural lashes?', a: 'Yes, when performed correctly using professional-grade solutions. Our therapists are trained in the precise application required to achieve beautiful results while preserving lash condition.' },
      { q: 'Is a Lash Lift & Tint suitable for short or straight lashes?', a: 'A lash lift is effective on most natural lash types. Your therapist will assess your lashes and recommend the best approach for your specific lash characteristics.' },
    ],
    relatedSlugs: ['dermaplaning-facial-redcliffe', 'corrective-facial-redcliffe', 'hybrid-facial-redcliffe'],
    iconName: 'Sun',
  },
]

export const serviceMenu: MenuCategory[] = [
  {
    id: 'consultations',
    category: 'Consultations',
    note: 'All new clients are welcome to book a complimentary consultation before committing to treatment.',
    items: [
      { name: 'Consultation', price: 'Free', duration: '30 mins', tagline: 'Professional skin analysis with personalised treatment and skincare recommendations.', externalHref: '/book' },
      { name: 'Consultation + Treatment — New Clients', price: 'Price varies', duration: '1 hr', tagline: 'A skin consultation followed by a bespoke treatment tailored precisely to your skin\'s needs.', externalHref: '/book' },
    ],
  },
  {
    id: 'facials',
    category: 'Facials',
    items: [
      { name: 'Corrective Facial', price: '$220', duration: '45 mins', tagline: 'The ideal starting point for your skincare journey.', slug: 'corrective-facial-redcliffe' },
      { name: 'Hybrid Facial', price: '$220', duration: '45 mins', tagline: 'The next-level upgrade — peel infusion meets clinical facial.', slug: 'hybrid-facial-redcliffe' },
      { name: 'Luminous Silk Dermaplaning Facial', price: '$199', duration: '1 hr', tagline: 'Ultra-luxurious dermaplaning for flawlessly smooth, glowing skin.', slug: 'dermaplaning-facial-redcliffe' },
    ],
  },
  {
    id: 'corrective-peels',
    category: 'Corrective Peels',
    note: 'All peel treatments use Lira Clinical professional formulations. Level 2 and Level 3 require pre-treatment preparation — your therapist will advise.',
    items: [
      { name: 'Level 1 Corrective Peel', price: '$199', duration: '45 mins', tagline: 'Brightening Lira Clinical peel — no preparation required.', slug: 'level-1-corrective-peel-redcliffe' },
      { name: 'Level 2 Corrective Peel', price: '$220', duration: '45 mins', tagline: 'Advanced peel for pigmentation, scarring and fine lines. Prep required.', slug: 'level-2-corrective-peel-redcliffe' },
      { name: 'Level 3 Corrective Peel', price: '$250', duration: '45 mins', tagline: 'Intensive correction for complex skin concerns. Prep required.', slug: 'level-3-corrective-peel-redcliffe' },
    ],
  },
  {
    id: 'skin-needling',
    category: 'Skin Needling',
    items: [
      { name: 'Skin Needling with NCTF', price: '$349', duration: '45 mins', tagline: 'Collagen induction therapy infused with 54 active ingredients.', slug: 'skin-needling-nctf-redcliffe' },
      { name: 'Skin Needling with Exosomes', price: '$449', duration: '45 mins', tagline: 'Our most advanced needling — exosome technology for maximum regeneration.', slug: 'skin-needling-exosomes-redcliffe' },
      { name: 'Neck Add-On', price: '$50', duration: '5 mins', tagline: 'Extend your skin needling treatment to include the neck.', externalHref: '/book' },
      { name: 'Décolletage Add-On', price: '$50', duration: '5 mins', tagline: 'Extend your skin needling treatment to include the décolletage.', externalHref: '/book' },
    ],
  },
  {
    id: 'add-ons',
    category: 'Add-Ons',
    items: [
      { name: 'LED Light Therapy Add-On', price: '$49', duration: '15 mins', tagline: 'Enhance any treatment with medical-grade LED light therapy.', externalHref: '/book' },
    ],
  },
  {
    id: 'lash-brow',
    category: 'Lash & Brow',
    items: [
      { name: 'Korean Lash Lift & Tint', price: '$129', duration: '1 hr', tagline: 'Lifted, curled, and tinted natural lashes — results last 6–8 weeks.', slug: 'korean-lash-lift-tint-redcliffe' },
      { name: 'Lash & Brow Tint', price: '$30', duration: '30 mins', tagline: 'Tint lashes and brows for definition and depth.', externalHref: '/book' },
      { name: 'Brow Tint', price: '$15', duration: '15 mins', tagline: 'Professional brow tinting for shape and definition.', externalHref: '/book' },
    ],
  },
  {
    id: 'retail',
    category: 'Retail',
    note: 'Shop Lira Clinical professional home-care products in-studio. Your therapist will prescribe the right products to extend your treatment results at home.',
    items: [
      { name: 'Product Collection', price: 'Price varies', duration: '5 mins', tagline: 'Lira Clinical professional homecare — prescribed and available exclusively in-studio.', externalHref: '/lira-clinical' },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[]
}

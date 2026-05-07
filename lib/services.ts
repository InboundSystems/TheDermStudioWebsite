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

export const services: Service[] = [
  /* ──────────────────────────────────── */
  {
    slug: 'facials-redcliffe',
    name: 'Facials',
    tagline: 'Customised treatments tailored to your unique skin.',
    metaTitle: 'Facials Redcliffe | Customised Skin Treatments — The Derm Studio',
    metaDescription:
      'Book a customised facial at The Derm Studio, Redcliffe. Our qualified dermal therapists tailor every treatment to your skin concerns — hydration, anti-ageing, brightening and more at Bluewater Square.',
    heroTitle: 'Facials Redcliffe | Customised Skin Treatments',
    heroSubtitle:
      'Every facial at The Derm Studio is designed around your skin — not a menu.',
    intro: [
      'A customised facial at The Derm Studio goes far beyond relaxation. Our qualified dermal therapists design each facial treatment around your individual skin concerns — whether that\'s dehydration, congestion, uneven tone, fine lines, or sensitivity. Every treatment begins with a thorough skin assessment so your therapist can select the most appropriate products, techniques, and targeted actives for your skin on that day.',
      'Located at Bluewater Square in Redcliffe, The Derm Studio offers a range of facial treatments designed to deliver real, visible results. We use Lira Clinical professional skincare products — available exclusively through our Redcliffe clinic — to ensure every facial is formulated with clinically active ingredients rather than surface-level hydration products.',
      'Our facials are suitable for all skin types and can be adapted for specific concerns including acne-prone, sensitised, and mature skin. Regular facial treatments form the foundation of any effective skin health program, maintaining the results achieved through more intensive procedures while continuously improving the overall quality and resilience of your skin.',
      'Whether you\'re new to skin treatments or a seasoned skincare enthusiast, our team will create a treatment experience that leaves your skin visibly healthier — and your understanding of your skin significantly greater.',
    ],
    benefits: [
      { title: 'Deeply Cleansed Skin', desc: 'Thorough removal of surface debris, excess oil, and congestion that builds up between treatments.' },
      { title: 'Improved Hydration', desc: 'Professional-grade hydrating actives restore the skin barrier and deliver lasting moisture beneath the surface.' },
      { title: 'Targeted Treatment', desc: 'Each facial addresses your specific concerns — from pigmentation and acne to fine lines and sensitivity.' },
      { title: 'Expert Skin Advice', desc: 'Leave every appointment with personalised product recommendations and a clearer understanding of your skin.' },
      { title: 'Immediate Glow', desc: 'Clients consistently notice improved clarity, brightness, and texture immediately after treatment.' },
      { title: 'Long-Term Skin Health', desc: 'Regular facials build cumulative results, progressively improving skin quality over time.' },
    ],
    process: [
      { step: '01', title: 'Consultation & Skin Analysis', desc: 'Your therapist assesses your skin, discusses your concerns, and selects the most appropriate products and techniques.' },
      { step: '02', title: 'Cleanse & Prepare', desc: 'A thorough double-cleanse removes makeup, SPF, and surface impurities to prepare the skin for treatment.' },
      { step: '03', title: 'Exfoliation', desc: 'Targeted exfoliation removes dead skin cells, refines texture, and enhances absorption of subsequent actives.' },
      { step: '04', title: 'Targeted Serums & Actives', desc: 'Professional-grade serums and targeted treatment products are applied based on your individual skin needs.' },
      { step: '05', title: 'Mask & Treatment', desc: 'A treatment mask addresses specific concerns — calming inflammation, controlling sebum, or providing intensive hydration.' },
      { step: '06', title: 'Moisturise & SPF', desc: 'The treatment concludes with a professional moisturiser and broad-spectrum SPF to protect and seal in results.' },
    ],
    faqs: [
      { q: 'How often should I get a facial?', a: 'Monthly facial treatments are ideal for maintaining healthy skin and supporting the results of more intensive procedures. Your therapist will recommend a schedule based on your skin\'s needs.' },
      { q: 'How long does a facial take?', a: 'Most facial treatments are 60–90 minutes, depending on the protocol your therapist selects for your skin.' },
      { q: 'Are facials suitable for sensitive skin?', a: 'Yes. Our therapists are experienced in adapting treatments for sensitised skin. We will always select products and techniques appropriate for your skin\'s current condition.' },
      { q: 'What products do you use during facials?', a: 'We use Lira Clinical professional skincare throughout all facial treatments. Lira Clinical is available exclusively through our clinic — you cannot purchase it online.' },
      { q: 'Can I wear makeup after a facial?', a: 'We recommend allowing your skin to breathe for the rest of the day. Your therapist will advise you on the appropriate aftercare for the specific treatment received.' },
    ],
    relatedSlugs: ['chemical-peel-redcliffe', 'hydrafacial-redcliffe', 'microdermabrasion-redcliffe'],
    iconName: 'Sparkles',
  },

  /* ──────────────────────────────────── */
  {
    slug: 'chemical-peel-redcliffe',
    name: 'Chemical Peels',
    tagline: 'Professional resurfacing for pigmentation, scarring and texture.',
    metaTitle: 'Chemical Peels Redcliffe | Professional Skin Resurfacing — The Derm Studio',
    metaDescription:
      'Book a professional chemical peel at The Derm Studio, Redcliffe. Treat pigmentation, acne scarring and uneven texture with expert skin resurfacing at Bluewater Square.',
    heroTitle: 'Chemical Peels Redcliffe | Professional Skin Resurfacing',
    heroSubtitle:
      'Clinically proven resurfacing treatments for pigmentation, acne scarring, and uneven skin texture.',
    intro: [
      'Chemical peels are among the most effective clinical treatments for addressing pigmentation, acne scarring, uneven skin texture, dullness, and the early signs of ageing. At The Derm Studio in Redcliffe, our qualified dermal therapists use professional-grade chemical peel formulations to safely resurface the skin and stimulate the natural renewal process.',
      'A chemical peel works by applying a controlled solution to the skin that accelerates the shedding of the outermost layers, revealing fresher, clearer skin beneath. The type and depth of peel — superficial, medium, or deeper — is carefully selected based on your skin concern, skin type, and individual goals. Our therapists conduct a thorough assessment before recommending any peel protocol to ensure safety and appropriateness.',
      'Regular chemical peel treatments can dramatically improve the appearance of sun damage, post-acne marks, melasma, and general dullness. They also stimulate collagen production in the deeper layers of the skin, contributing to a firmer, more youthful complexion with each course of treatment.',
      'At The Derm Studio, all chemical peel treatments are performed using Lira Clinical professional peeling agents and post-procedure skincare — the same range available exclusively through our Redcliffe clinic. Combining clinical peel treatments with a Lira Clinical home-care prescription delivers significantly better long-term outcomes than in-clinic treatment alone.',
    ],
    benefits: [
      { title: 'Improved Skin Tone & Texture', desc: 'Significant improvement in overall skin smoothness, evenness, and clarity following a course of treatments.' },
      { title: 'Pigmentation Reduction', desc: 'Effective treatment of sun damage, melasma, post-inflammatory hyperpigmentation, and uneven skin tone.' },
      { title: 'Acne Scar Fading', desc: 'Progressive improvement in the appearance of post-acne marks, flat scars, and residual discolouration.' },
      { title: 'Collagen Stimulation', desc: 'Chemical peels trigger a controlled healing response that stimulates new collagen production for firmer skin.' },
      { title: 'Brighter Complexion', desc: 'Removal of the dull, dead surface layer reveals the brighter, fresher skin beneath.' },
      { title: 'Enhanced Skincare Absorption', desc: 'Post-peel skin absorbs active ingredients significantly more effectively, amplifying home-care results.' },
    ],
    process: [
      { step: '01', title: 'Skin Consultation', desc: 'Thorough assessment of skin type, condition, contraindications, and treatment goals to select the appropriate peel.' },
      { step: '02', title: 'Pre-Treatment Preparation', desc: 'Skin is cleansed and degreased to ensure even peel penetration and consistent results.' },
      { step: '03', title: 'Peel Application', desc: 'The professional peel solution is carefully applied and monitored by your therapist throughout the treatment.' },
      { step: '04', title: 'Neutralisation & Removal', desc: 'The peel is neutralised and removed at the precisely timed endpoint for your skin type and peel depth.' },
      { step: '05', title: 'Post-Peel Treatment', desc: 'Soothing, reparative products are applied to support the skin barrier and begin the recovery process.' },
      { step: '06', title: 'Home-Care Prescription', desc: 'You leave with a Lira Clinical home-care prescription to support healing and maximise your results.' },
    ],
    faqs: [
      { q: 'Will I visibly peel after treatment?', a: 'This depends on the type and depth of peel. Superficial peels may cause very mild flaking. Medium-depth peels typically result in 3–7 days of more visible shedding. Your therapist will set clear expectations before treatment.' },
      { q: 'Is there downtime?', a: 'Superficial peels: minimal downtime — mild redness for a few hours. Medium peels: allow 3–7 days for skin to shed. Your therapist will advise based on the peel protocol selected.' },
      { q: 'How many peels will I need?', a: 'A course of 3–6 peels spaced 2–4 weeks apart is typical for optimal results. Your therapist will recommend a treatment plan based on your skin goals.' },
      { q: 'Can I have a peel in summer?', a: 'Yes, with careful sun protection and your therapist\'s guidance. Strict daily SPF use is essential following any chemical peel treatment.' },
      { q: 'Is a chemical peel uncomfortable?', a: 'Most superficial peels cause mild tingling during application. More active peels may produce temporary stinging or warmth. Discomfort is brief and well-tolerated by most clients.' },
    ],
    relatedSlugs: ['facials-redcliffe', 'skin-needling-redcliffe', 'led-light-therapy-redcliffe'],
    iconName: 'FlaskConical',
  },

  /* ──────────────────────────────────── */
  {
    slug: 'led-light-therapy-redcliffe',
    name: 'LED Light Therapy',
    tagline: 'Non-invasive light treatment for anti-ageing, acne and healing.',
    metaTitle: 'LED Light Therapy Redcliffe | Anti-Ageing & Acne Treatment — The Derm Studio',
    metaDescription:
      'Professional LED light therapy in Redcliffe at The Derm Studio. Red and blue LED treatments for anti-ageing, skin rejuvenation and acne reduction at Bluewater Square.',
    heroTitle: 'LED Light Therapy Redcliffe | Anti-Ageing & Acne Treatment',
    heroSubtitle:
      'Painless, zero-downtime light treatment for collagen, acne, and skin rejuvenation.',
    intro: [
      'LED (Light Emitting Diode) light therapy is a non-invasive treatment that uses specific wavelengths of light to stimulate targeted cellular responses within the skin. At The Derm Studio in Redcliffe, we offer professional-grade LED light therapy as a standalone treatment and as a powerful enhancement to other procedures including chemical peels, skin needling, and facials.',
      'The two primary wavelengths used in clinical skin treatment are red LED and blue LED, each with distinct therapeutic benefits. Red LED light (around 630nm) penetrates deeper into the skin to stimulate fibroblast activity, boost collagen and elastin production, reduce inflammation, and accelerate wound healing. This makes red LED particularly effective for anti-ageing, post-procedure recovery, and general skin rejuvenation. Blue LED light (around 415nm) targets the P. acnes bacteria responsible for inflammatory breakouts, significantly reducing active acne without damaging surrounding tissue.',
      'LED light therapy is completely painless, requires no downtime, and is safe for all skin types and tones, making it one of the most accessible and versatile clinical treatments available. It is equally effective as a regular skin maintenance treatment, a recovery tool after more intensive procedures, or a targeted treatment for active skin concerns.',
      'Our LED sessions use medical-grade equipment delivering optimal therapeutic intensity — far more powerful than at-home LED devices — ensuring you receive maximum clinical benefit from every session.',
    ],
    benefits: [
      { title: 'Collagen Stimulation', desc: 'Red LED activates fibroblasts to produce more collagen and elastin, improving firmness and reducing fine lines over time.' },
      { title: 'Acne Reduction', desc: 'Blue LED destroys acne-causing bacteria and reduces active inflammation without irritating surrounding skin.' },
      { title: 'Accelerated Healing', desc: 'LED light is widely used to speed post-procedure recovery after chemical peels, skin needling, and other treatments.' },
      { title: 'Improved Skin Radiance', desc: 'Regular LED sessions improve skin tone, reduce redness, and give the complexion a healthier, more luminous quality.' },
      { title: 'Zero Downtime', desc: 'Completely painless with no recovery period — clients return to their day immediately after treatment.' },
      { title: 'Safe for All Skin Types', desc: 'LED light therapy is safe for all skin types and tones, with no risk of post-inflammatory hyperpigmentation.' },
    ],
    process: [
      { step: '01', title: 'Skin Assessment', desc: 'Your therapist assesses your skin and confirms the appropriate LED wavelength (red, blue, or combination) for your treatment goals.' },
      { step: '02', title: 'Skin Preparation', desc: 'The skin is cleansed to remove any products that might affect light penetration during the session.' },
      { step: '03', title: 'LED Treatment', desc: 'The LED panel is positioned close to the skin and the treatment is delivered over approximately 20–30 minutes.' },
      { step: '04', title: 'Serum Application', desc: 'Post-treatment serums are applied to take advantage of the enhanced cellular activity stimulated by the LED.' },
      { step: '05', title: 'SPF & Aftercare', desc: 'The session concludes with SPF application and aftercare advice to maintain and extend your results.' },
    ],
    faqs: [
      { q: 'How many LED sessions do I need?', a: 'A course of 6–10 sessions is recommended for optimal results, particularly for anti-ageing or acne concerns. Maintenance sessions monthly or bi-monthly thereafter.' },
      { q: 'How long is each LED session?', a: 'Approximately 30–45 minutes in total, including preparation and treatment.' },
      { q: 'Can LED be combined with other treatments?', a: 'Yes — LED is commonly combined with facials, chemical peels, and skin needling to enhance results and accelerate recovery.' },
      { q: 'Is LED safe for all skin types?', a: 'Yes. LED light therapy is one of the safest clinical treatments available, with no risk of burns or post-inflammatory pigmentation when performed correctly.' },
      { q: 'How soon will I see results?', a: 'Some clients notice improvement in skin radiance after 3–4 sessions. Collagen stimulation results develop progressively over the course of treatment and beyond.' },
    ],
    relatedSlugs: ['facials-redcliffe', 'chemical-peel-redcliffe', 'skin-needling-redcliffe'],
    iconName: 'Sun',
  },

  /* ──────────────────────────────────── */
  {
    slug: 'skin-needling-redcliffe',
    name: 'Skin Needling',
    tagline: 'Collagen induction therapy for scars, lines and texture.',
    metaTitle: 'Skin Needling Redcliffe | Collagen Induction Therapy — The Derm Studio',
    metaDescription:
      'Professional skin needling (collagen induction therapy) in Redcliffe. Treat fine lines, acne scarring and uneven texture at The Derm Studio, Bluewater Square.',
    heroTitle: 'Skin Needling Redcliffe | Collagen Induction Therapy',
    heroSubtitle:
      'Minimally invasive treatment that harnesses your skin\'s own regenerative power.',
    intro: [
      'Skin needling — also known as collagen induction therapy (CIT) or microneedling — is a minimally invasive treatment that uses a precisely controlled device to create thousands of micro-channels in the skin\'s surface. These controlled micro-injuries trigger the skin\'s natural healing response, stimulating the production of new collagen and elastin: the structural proteins responsible for skin firmness, smoothness, and resilience.',
      'At The Derm Studio in Redcliffe, our qualified dermal therapists perform skin needling using professional-grade devices that deliver consistent, precise needle depth across the treatment area. This level of control is critical for achieving safe, effective results — particularly when treating deeper concerns such as atrophic acne scarring, stretch marks, and significant textural irregularities that require precise penetration depths.',
      'Skin needling is one of the most effective non-surgical treatments available for improving acne scarring, fine lines, enlarged pores, and general skin texture. Because it stimulates the skin\'s own regenerative processes rather than relying on external agents, the results are natural and progressive — developing over several weeks and continuing to improve with each treatment session in a course.',
      'At The Derm Studio, we apply topical anaesthetic cream prior to treatment for client comfort, and use Lira Clinical professional serums during and after the procedure to maximise the penetration of active ingredients and support the healing process.',
    ],
    benefits: [
      { title: 'Acne Scar Improvement', desc: 'One of the most effective treatments for atrophic (depressed) acne scarring, progressively improving the appearance over a course of sessions.' },
      { title: 'Fine Line Reduction', desc: 'Collagen and elastin stimulation measurably reduces the depth and visibility of fine lines and wrinkles.' },
      { title: 'Pore Refinement', desc: 'The collagen remodelling process tightens the tissue around enlarged pores, visibly refining their appearance.' },
      { title: 'Enhanced Skin Texture', desc: 'Overall skin smoothness and quality improve progressively across a treatment course.' },
      { title: 'Natural Results', desc: 'Because skin needling stimulates the skin\'s own regenerative processes, results look and feel completely natural.' },
      { title: 'Superior Serum Absorption', desc: 'Micro-channels created during treatment allow professional serums to penetrate far deeper than topical application alone.' },
    ],
    process: [
      { step: '01', title: 'Consultation & Assessment', desc: 'Your therapist assesses your skin concerns, reviews contraindications, and determines the appropriate needle depth for your treatment.' },
      { step: '02', title: 'Anaesthetic Application', desc: 'Topical anaesthetic cream is applied and left for 30 minutes to ensure you are comfortable throughout the procedure.' },
      { step: '03', title: 'Skin Needling Treatment', desc: 'The device is passed systematically over the treatment area, creating precise micro-channels in the skin.' },
      { step: '04', title: 'Serum Infusion', desc: 'Lira Clinical professional serums are applied immediately post-treatment to penetrate the skin through the open micro-channels.' },
      { step: '05', title: 'Recovery Support', desc: 'Soothing, barrier-supporting products are applied to calm the skin and begin the healing process.' },
      { step: '06', title: 'Aftercare Instructions', desc: 'Detailed aftercare guidance and a home-care prescription to support healing and maximise results.' },
    ],
    faqs: [
      { q: 'Is skin needling painful?', a: 'Topical anaesthetic cream is applied 30 minutes before treatment. Most clients report minimal discomfort — a mild scratching or vibration sensation at most.' },
      { q: 'What is the downtime?', a: 'Skin typically appears red for 24–48 hours post-treatment, similar to mild sunburn. Makeup and active skincare products should be avoided for the first 24 hours.' },
      { q: 'How many sessions are needed?', a: 'A course of 3–6 treatments spaced 4–6 weeks apart is typical for optimal results, particularly for acne scarring.' },
      { q: 'When will I see results?', a: 'Initial improvement is visible 2–4 weeks after each session. Full collagen remodelling continues for 3–6 months, with cumulative improvements across a course of treatment.' },
      { q: 'Is skin needling suitable for active acne?', a: 'No — skin needling is contraindicated over active breakouts. We will wait for active acne to resolve before treating scarring.' },
    ],
    relatedSlugs: ['dermal-therapy-redcliffe', 'chemical-peel-redcliffe', 'led-light-therapy-redcliffe'],
    iconName: 'Pipette',
  },

  /* ──────────────────────────────────── */
  {
    slug: 'dermal-therapy-redcliffe',
    name: 'Dermal Therapy',
    tagline: 'Evidence-based clinical treatments by qualified dermal therapists.',
    metaTitle: 'Dermal Therapy Redcliffe | Evidence-Based Skin Treatments — The Derm Studio',
    metaDescription:
      'Expert dermal therapy at The Derm Studio, Redcliffe. Advanced, evidence-based skin treatments delivered by qualified dermal therapists at Bluewater Square.',
    heroTitle: 'Dermal Therapy Redcliffe | Evidence-Based Skin Treatments',
    heroSubtitle:
      'Clinical skin treatment grounded in science — not trends.',
    intro: [
      'Dermal therapy encompasses a broad range of evidence-based clinical treatments delivered by practitioners who hold formal qualifications in dermal science. Unlike general beauty treatments, dermal therapy applies scientific principles to skin health — using clinically validated techniques and professional-grade products to achieve measurable, lasting improvements in skin condition and function.',
      'At The Derm Studio in Redcliffe, our dermal therapists hold recognised qualifications in dermal therapy and undergo ongoing professional development to remain current with the latest clinical evidence in skin treatment. This means that every recommendation we make — whether a treatment modality, a product, or a home-care protocol — is grounded in clinical science rather than marketing or trend.',
      'Dermal therapy at The Derm Studio covers a wide range of treatments for diverse skin concerns: hyperpigmentation, active acne and post-acne sequelae, accelerated ageing, chronic dehydration, sensitised skin conditions, and more. Our approach always begins with a comprehensive skin assessment and consultation, followed by the development of a personalised treatment protocol that combines in-clinic procedures with a prescribed home-care regimen using Lira Clinical professional products.',
      'The goal of dermal therapy is not just the immediate result of a single treatment — it\'s progressive, lasting improvement in the health, resilience, and appearance of your skin. As Redcliffe\'s sole Lira Clinical stockist, we are uniquely positioned to bridge the gap between in-clinic treatment and professional home care, ensuring that the work we do in the clinic is supported and extended every day.',
    ],
    benefits: [
      { title: 'Clinical Skin Assessment', desc: 'A thorough, evidence-based assessment of your skin type, condition, and concerns before any treatment is recommended.' },
      { title: 'Personalised Treatment Protocols', desc: 'Every client receives a customised treatment plan based on their individual skin goals, not a generic menu.' },
      { title: 'Professional Product Integration', desc: 'Treatments are paired with Lira Clinical home-care prescriptions for superior and lasting outcomes.' },
      { title: 'Evidence-Based Practice', desc: 'Every technique and product recommendation is backed by clinical research — nothing is based on trend or anecdote.' },
      { title: 'Qualified Therapists', desc: 'All treatments are delivered by dermal therapists with formal qualifications and ongoing professional development.' },
      { title: 'Progressive, Measurable Results', desc: 'Treatment protocols are designed to deliver ongoing, cumulative improvement in skin health over time.' },
    ],
    process: [
      { step: '01', title: 'Comprehensive Consultation', desc: 'Your dermal therapist conducts a thorough skin assessment, reviews your history, and establishes your treatment goals.' },
      { step: '02', title: 'Personalised Treatment Plan', desc: 'A customised protocol is developed combining appropriate in-clinic treatments with a home-care prescription.' },
      { step: '03', title: 'In-Clinic Treatment', desc: 'Treatments are delivered by your qualified therapist using professional-grade equipment and Lira Clinical products.' },
      { step: '04', title: 'Home-Care Prescription', desc: 'You receive a Lira Clinical home-care regimen tailored to support and extend your in-clinic treatment results.' },
      { step: '05', title: 'Progress Reviews', desc: 'Regular review appointments allow your therapist to assess your skin\'s response and adjust the protocol as needed.' },
      { step: '06', title: 'Ongoing Maintenance', desc: 'A long-term maintenance plan is developed to preserve and build upon the results achieved during your treatment course.' },
    ],
    faqs: [
      { q: 'What\'s the difference between a beauty facial and dermal therapy?', a: 'Dermal therapy applies clinical, evidence-based protocols to treat specific skin conditions and achieve measurable results. It\'s a health-focused approach to skin treatment, not a relaxation service.' },
      { q: 'How long before I see results?', a: 'This depends on the concern being treated. Some improvements are visible immediately; others develop progressively over weeks to months as collagen remodels and cell turnover increases.' },
      { q: 'Do I need to use specific products at home?', a: 'Yes. We prescribe Lira Clinical home-care products that complement and extend your in-clinic treatments. This combination significantly improves outcomes compared to in-clinic treatment alone.' },
      { q: 'How often should I have dermal therapy?', a: 'This depends entirely on your skin goals and concerns. Your therapist will recommend a treatment frequency as part of your personalised plan.' },
      { q: 'Is dermal therapy covered by health insurance?', a: 'Some health fund extras policies cover dermal therapy treatments. We recommend checking with your health fund prior to your appointment.' },
    ],
    relatedSlugs: ['facials-redcliffe', 'chemical-peel-redcliffe', 'skin-needling-redcliffe'],
    iconName: 'ShieldCheck',
  },

  /* ──────────────────────────────────── */
  {
    slug: 'hydrafacial-redcliffe',
    name: 'HydraFacial',
    tagline: 'Cleanse, exfoliate and hydrate in one powerful treatment.',
    metaTitle: 'HydraFacial Redcliffe | Cleanse, Exfoliate & Hydrate — The Derm Studio',
    metaDescription:
      'Book a HydraFacial at The Derm Studio, Redcliffe. The 3-step cleanse, exfoliate and hydrate treatment for instantly glowing skin at Bluewater Square.',
    heroTitle: 'HydraFacial Redcliffe | Cleanse, Exfoliate & Hydrate',
    heroSubtitle:
      'Instantly glowing skin with zero downtime. The world\'s most popular clinical skin treatment.',
    intro: [
      'HydraFacial is one of the world\'s most widely recognised professional skin treatments, celebrated for delivering immediately visible, impressive results without any downtime. At The Derm Studio in Redcliffe, our HydraFacial treatments use a patented three-step process to deeply cleanse, exfoliate, and infuse the skin with targeted nourishing serums — all in a single 30–45-minute session.',
      'What makes HydraFacial unique is the simultaneous combination of effective resurfacing, deep pore extraction, and intensive hydration. Traditional approaches to these goals — exfoliation, extraction, and hydration — typically require separate treatments. HydraFacial achieves all three in one pass using a specially designed vortex handpiece that exfoliates, suctions, and infuses simultaneously.',
      'In the first step, the skin is cleansed and exfoliated as the vortex device removes dead skin cells and surface debris without the irritation of traditional physical scrubs. In the second step, a gentle acid solution loosens the bonds between congested material in the pores, which is then extracted cleanly. In the third step, a cocktail of professional serums — including hyaluronic acid, antioxidants, and peptides — is infused directly into the freshly cleared skin.',
      'HydraFacial is suitable for all skin types and can be enhanced with targeted boosters for specific concerns including hyperpigmentation, sensitivity, and anti-ageing. Most clients notice a significant improvement in skin clarity, brightness, and texture immediately after the first treatment.',
    ],
    benefits: [
      { title: 'Immediate Visible Results', desc: 'Most clients notice significantly clearer, brighter, and smoother skin immediately after treatment — no waiting.' },
      { title: 'Deep Pore Extraction', desc: 'The vortex suction technology extracts blackheads and congestion more effectively than manual extraction alone.' },
      { title: 'Intensive Hydration', desc: 'Professional hyaluronic acid and peptide serums are infused directly into cleared skin for deep, lasting hydration.' },
      { title: 'Zero Downtime', desc: 'Return to work, apply makeup, and continue your day immediately — no redness or recovery period.' },
      { title: 'Suitable for All Skin Types', desc: 'HydraFacial is gentle enough for sensitive skin and effective enough for oily, congested, and ageing skin.' },
      { title: 'Customisable Boosters', desc: 'Targeted serums can be added for specific concerns including brightening, anti-ageing, and sensitive skin.' },
    ],
    process: [
      { step: '01', title: 'Cleanse & Exfoliate', desc: 'The vortex handpiece removes dead skin cells and surface debris while simultaneously beginning to open the pores.' },
      { step: '02', title: 'Peel & Extract', desc: 'A gentle acid solution loosens congestion and blackheads, which are then extracted cleanly without squeezing.' },
      { step: '03', title: 'Serum Infusion', desc: 'Hyaluronic acid, antioxidants, and targeted serums are infused directly into the cleansed, receptive skin.' },
      { step: '04', title: 'LED Enhancement (Optional)', desc: 'LED light therapy can be added to boost results and address specific concerns such as acne or anti-ageing.' },
      { step: '05', title: 'SPF & Aftercare', desc: 'The treatment concludes with SPF application and personalised aftercare advice.' },
    ],
    faqs: [
      { q: 'How long does a HydraFacial take?', a: 'The core HydraFacial treatment takes approximately 30 minutes. With optional add-ons such as LED light therapy, allow 45–60 minutes.' },
      { q: 'Is there any downtime?', a: 'No downtime at all. Most clients apply makeup and return to normal activities immediately after treatment.' },
      { q: 'How often should I have a HydraFacial?', a: 'Monthly treatments are ideal for maintaining optimal skin health. More frequent sessions may be recommended for specific concerns in the short term.' },
      { q: 'Is HydraFacial suitable for sensitive skin?', a: 'Yes — HydraFacial is designed to be gentle and non-irritating. The treatment can be adapted for sensitised skin using appropriate serum selections.' },
      { q: 'When will I see results?', a: 'Immediately. The skin looks and feels visibly clearer, smoother, and more hydrated from the moment treatment is complete.' },
    ],
    relatedSlugs: ['facials-redcliffe', 'microdermabrasion-redcliffe', 'led-light-therapy-redcliffe'],
    iconName: 'Droplets',
  },

  /* ──────────────────────────────────── */
  {
    slug: 'microdermabrasion-redcliffe',
    name: 'Microdermabrasion',
    tagline: 'Gentle resurfacing to smooth, refine and brighten your skin.',
    metaTitle: 'Microdermabrasion Redcliffe | Skin Resurfacing Treatment — The Derm Studio',
    metaDescription:
      'Professional microdermabrasion at The Derm Studio, Redcliffe. Smooth texture, refine pores and brighten your complexion at Bluewater Square, Redcliffe QLD.',
    heroTitle: 'Microdermabrasion Redcliffe | Skin Resurfacing Treatment',
    heroSubtitle:
      'Gentle mechanical resurfacing for smoother skin, refined pores and a brighter complexion.',
    intro: [
      'Microdermabrasion is a non-invasive skin resurfacing treatment that uses a controlled mechanical exfoliation technique to remove dead skin cells from the outermost layer of the skin. At The Derm Studio in Redcliffe, we offer professional microdermabrasion as an effective treatment for improving skin texture, refining enlarged pores, reducing the appearance of superficial scarring, and restoring a brighter, more even complexion.',
      'The treatment works by applying a fine abrasion head to the skin surface while simultaneously using suction to remove exfoliated cells and stimulate circulation. This dual action not only removes the dull, dead surface layer but also creates a mild stimulus that encourages new cell growth and increases collagen production over time. The result is progressively smoother, brighter skin with a more refined appearance.',
      'Microdermabrasion is particularly well-suited to clients with mild acne scarring, sun damage, uneven skin tone, congestion, and dull, lacklustre skin. It is also an excellent preparatory treatment before other procedures — the removal of the dead surface layer significantly enhances the penetration and efficacy of serums and active ingredients applied during or after the session.',
      'Regular microdermabrasion, incorporated as part of an ongoing skin maintenance program, delivers cumulative improvements in skin smoothness, brightness, and overall quality with each treatment. It is one of the most accessible clinical resurfacing treatments, with minimal downtime and a comfortable treatment experience.',
    ],
    benefits: [
      { title: 'Smoother Skin Texture', desc: 'Immediate improvement in overall skin smoothness — rough, uneven areas are visibly refined after just one session.' },
      { title: 'Refined Pore Appearance', desc: 'The mechanical exfoliation and suction action reduces congestion in pores, making them appear smaller and less prominent.' },
      { title: 'Brighter Complexion', desc: 'Removing the dull, dead surface layer reveals the fresher, more luminous skin beneath for an instant glow.' },
      { title: 'Superficial Scar Improvement', desc: 'Mild acne marks, sun damage, and superficial scarring are progressively improved with a course of treatments.' },
      { title: 'Enhanced Serum Absorption', desc: 'Post-treatment skin absorbs serums and active ingredients far more effectively than untreated skin.' },
      { title: 'Minimal Downtime', desc: 'Skin may appear slightly pink for a few hours — most clients return to their day immediately after treatment.' },
    ],
    process: [
      { step: '01', title: 'Consultation & Assessment', desc: 'Your therapist assesses your skin and confirms that microdermabrasion is the appropriate treatment for your concerns.' },
      { step: '02', title: 'Pre-Treatment Cleanse', desc: 'The skin is thoroughly cleansed to remove makeup, SPF, and surface impurities before treatment begins.' },
      { step: '03', title: 'Microdermabrasion Resurfacing', desc: 'The abrasion head is systematically passed over the treatment area, with simultaneous suction removing exfoliated cells.' },
      { step: '04', title: 'Serum & Actives Application', desc: 'Professional serums and active ingredients are applied to the freshly resurfaced skin for enhanced penetration.' },
      { step: '05', title: 'Moisturise & SPF', desc: 'A professional moisturiser and broad-spectrum SPF are applied to complete the treatment and protect the skin.' },
    ],
    faqs: [
      { q: 'Is microdermabrasion uncomfortable?', a: 'No — the treatment produces a mild scratching and suction sensation that most clients find comfortable and tolerable.' },
      { q: 'How long does treatment take?', a: 'Approximately 30–45 minutes, depending on the treatment area.' },
      { q: 'Is there any downtime?', a: 'Minimal. Skin may appear slightly pink for a few hours post-treatment. Most clients apply makeup and continue their day immediately.' },
      { q: 'How often should I have microdermabrasion?', a: 'Monthly treatments are ideal as part of ongoing skin maintenance. A series of more frequent sessions (every 2–3 weeks) may be recommended initially for specific concerns.' },
      { q: 'Can I combine microdermabrasion with other treatments?', a: 'Yes — microdermabrasion pairs well with chemical peels, LED light therapy, and facials for enhanced results.' },
    ],
    relatedSlugs: ['facials-redcliffe', 'chemical-peel-redcliffe', 'hydrafacial-redcliffe'],
    iconName: 'Scan',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[]
}

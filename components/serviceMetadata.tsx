import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────────
// SERVICE PAGE METADATA
// Usage: export const metadata = serviceMetadata.gutterCleaning;
// ─────────────────────────────────────────────────────────────────

const BASE_URL = "https://www.algreyscleaningservices.co.uk"; // ← update to your domain

export const serviceMetadata: Record<string, Metadata> = {
  // 1. GUTTER CLEANING
  gutterCleaning: {
    title: "Professional Gutter Cleaning Services | Al Grey's Cleaning",
    description:
      "Expert gutter cleaning, downpipe flushing & gutter guard installation. Protect your home from water damage with our fully insured, same-day service. Free quote in minutes.",
    keywords: [
      "gutter cleaning",
      "gutter clearing",
      "blocked gutters",
      "downpipe cleaning",
      "gutter guard installation",
      "gutter maintenance",
      "professional gutter cleaning",
    ],
    alternates: { canonical: `${BASE_URL}/services/gutter-cleaning` },
    openGraph: {
      title: "Professional Gutter Cleaning | Al Grey's Cleaning Services",
      description:
        "Blocked gutters cause damp, rot & structural damage. Our expert team clears, flushes & inspects your gutters — same-day response, fully insured.",
      url: `${BASE_URL}/services/gutter-cleaning`,
      images: [
        {
          url: `${BASE_URL}/gutter-cleaning.webp`,
          width: 1200,
          height: 630,
          alt: "Professional gutter cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Gutter Cleaning | Al Grey's Cleaning Services",
      description:
        "Blocked gutters cause damp, rot & costly damage. Expert clearing & downpipe flushing — same-day service, free quote.",
      images: [`${BASE_URL}/gutter-cleaning.webp`],
    },
  },

  // 2. RESIDENTIAL GUTTER CLEANING
  residentialGutterCleaning: {
    title: "Residential Gutter Cleaning | Home Gutter Specialists | Al Grey's",
    description:
      "Specialist residential gutter cleaning for all home types. We clear leaves, moss & blockages, flush downpipes & provide written reports. Fully insured, no call-out fee.",
    keywords: [
      "residential gutter cleaning",
      "home gutter cleaning",
      "house gutter cleaning",
      "gutter cleaning for homes",
      "domestic gutter cleaning",
      "blocked residential gutters",
    ],
    alternates: {
      canonical: `${BASE_URL}/services/residential-gutter-cleaning`,
    },
    openGraph: {
      title: "Residential Gutter Cleaning | Al Grey's Cleaning Services",
      description:
        "Professional gutter cleaning for homes — leaves, moss & blockages cleared, downpipes flushed, before & after photos provided. Free quote in minutes.",
      url: `${BASE_URL}/services/residential-gutter-cleaning`,
      images: [
        {
          url: `${BASE_URL}/residential.webp`,
          width: 1200,
          height: 630,
          alt: "Residential gutter cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Residential Gutter Cleaning | Al Grey's Cleaning Services",
      description:
        "Expert gutter cleaning for homes — debris cleared, downpipes flushed, satisfaction guaranteed.",
      images: [`${BASE_URL}/residential.webp`],
    },
  },

  // 3. PRESSURE WASHING
  pressureWashing: {
    title: "Professional Pressure Washing Services | Al Grey's Cleaning",
    description:
      "Industrial-grade pressure washing for driveways, patios, building exteriors & decking. Removes embedded dirt, oil stains & biological growth. Free quote, fully insured.",
    keywords: [
      "pressure washing",
      "pressure washing service",
      "driveway pressure washing",
      "patio pressure washing",
      "building exterior cleaning",
      "commercial pressure washing",
      "jet washing",
    ],
    alternates: { canonical: `${BASE_URL}/services/pressure-washing` },
    openGraph: {
      title: "Professional Pressure Washing | Al Grey's Cleaning Services",
      description:
        "Restore your property's surfaces with expert pressure washing. Driveways, patios, building exteriors & more — instant results, no call-out fee.",
      url: `${BASE_URL}/services/pressure-washing`,
      images: [
        {
          url: `${BASE_URL}/pressure-washing-1.webp`,
          width: 1200,
          height: 630,
          alt: "Professional pressure washing",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Pressure Washing | Al Grey's Cleaning Services",
      description:
        "Embedded dirt, moss & oil stains removed with industrial-grade pressure washing. Book in 60 seconds.",
      images: [`${BASE_URL}/pressure-washing-1.webp`],
    },
  },

  // 4. WINDOW CLEANING
  windowCleaning: {
    title: "Professional Window Cleaning Services | Al Grey's Cleaning",
    description:
      "Streak-free window cleaning using pure-water systems for homes & businesses. Interior & exterior, high-level access & hard water stain removal. Fully insured, free quote.",
    keywords: [
      "window cleaning",
      "professional window cleaning",
      "residential window cleaning",
      "commercial window cleaning",
      "window cleaner",
      "hard water stain removal",
      "high level window cleaning",
      "pure water window cleaning",
    ],
    alternates: { canonical: `${BASE_URL}/services/window-cleaning` },
    openGraph: {
      title: "Professional Window Cleaning | Al Grey's Cleaning Services",
      description:
        "Crystal-clear, streak-free windows every time. Pure-water cleaning systems, interior & exterior, high-level access — no call-out fee.",
      url: `${BASE_URL}/services/window-cleaning`,
      images: [
        {
          url: `${BASE_URL}/window.webp`,
          width: 1200,
          height: 630,
          alt: "Professional window cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Window Cleaning | Al Grey's Cleaning Services",
      description:
        "Streak-free windows, every pane, every time. Residential & commercial window cleaning — free quote in minutes.",
      images: [`${BASE_URL}/window.webp`],
    },
  },

  // 5. DRIVEWAY CLEANING
  drivewayCleaning: {
    title: "Professional Driveway Cleaning & Restoration | Al Grey's Cleaning",
    description:
      "Expert driveway cleaning for block paving, tarmac, concrete & resin surfaces. Oil stain removal, moss & weed treatment, sealing & protection. Free quote, same-day response.",
    keywords: [
      "driveway cleaning",
      "driveway pressure washing",
      "block paving cleaning",
      "oil stain removal driveway",
      "tarmac driveway cleaning",
      "driveway sealing",
      "moss removal driveway",
    ],
    alternates: { canonical: `${BASE_URL}/services/driveway-cleaning` },
    openGraph: {
      title: "Professional Driveway Cleaning | Al Grey's Cleaning Services",
      description:
        "Oil stains, moss & embedded grime removed in a single visit. All driveway surfaces restored & sealed — same-day response, free quote.",
      url: `${BASE_URL}/services/driveway-cleaning`,
      images: [
        {
          url: `${BASE_URL}/driveway.webp`,
          width: 1200,
          height: 630,
          alt: "Professional driveway cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Driveway Cleaning | Al Grey's Cleaning Services",
      description:
        "Restore your driveway's first impression — oil stains, moss & grime gone in one visit. Book in 60 seconds.",
      images: [`${BASE_URL}/driveway.webp`],
    },
  },

  // 6. PATIO CLEANING
  patioCleaning: {
    title: "Professional Patio Cleaning & Restoration | Al Grey's Cleaning",
    description:
      "Specialist patio cleaning for natural stone, block paving, porcelain & concrete. Weed & moss removal, pressure washing, sealing & biocidal treatment. Free quote.",
    keywords: [
      "patio cleaning",
      "patio pressure washing",
      "natural stone patio cleaning",
      "block paving patio",
      "patio weed removal",
      "patio sealing",
      "patio moss removal",
      "outdoor paving cleaning",
    ],
    alternates: { canonical: `${BASE_URL}/services/patio-cleaning` },
    openGraph: {
      title: "Professional Patio Cleaning | Al Grey's Cleaning Services",
      description:
        "Reclaim your outdoor space — moss, algae & grime removed from all patio surfaces. Sealing & biocidal treatment available. Free quote, same-day response.",
      url: `${BASE_URL}/services/patio-cleaning`,
      images: [
        {
          url: `${BASE_URL}/patio.webp`,
          width: 1200,
          height: 630,
          alt: "Professional patio cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Patio Cleaning | Al Grey's Cleaning Services",
      description:
        "Moss, algae & grime gone — restore your patio in one visit. Natural stone, block paving & porcelain specialists.",
      images: [`${BASE_URL}/patio.webp`],
    },
  },

  // 7. RENDER CLEANING
  renderCleaning: {
    title: "Professional Render Cleaning Services | Soft Wash Specialists",
    description:
      "Expert soft-wash render cleaning that safely removes algae, moss & staining without damaging your render. Biocidal treatment & protective coatings included. Free quote.",
    keywords: [
      "render cleaning",
      "soft wash render cleaning",
      "rendered house cleaning",
      "algae removal render",
      "monocouche render cleaning",
      "silicone render cleaning",
      "render restoration",
      "exterior render cleaning",
    ],
    alternates: { canonical: `${BASE_URL}/services/render-cleaning` },
    openGraph: {
      title: "Professional Render Cleaning | Al Grey's Cleaning Services",
      description:
        "Bring your render back to life with our specialist soft-wash system. Algae, moss & staining removed safely — biocidal protection included.",
      url: `${BASE_URL}/services/render-cleaning`,
      images: [
        {
          url: `${BASE_URL}/render.webp`,
          width: 1200,
          height: 630,
          alt: "Professional render cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Render Cleaning | Al Grey's Cleaning Services",
      description:
        "Algae & moss silently damage render. Our soft-wash system restores it safely — book in 60 seconds.",
      images: [`${BASE_URL}/render.webp`],
    },
  },

  // 8. BRICK CLEANING
  brickCleaning: {
    title: "Professional Brick Cleaning & Restoration | Al Grey's Cleaning",
    description:
      "Expert brick cleaning using soft wash & chemical treatments for all brick types. Efflorescence removal, graffiti cleaning, historic brick restoration & protective sealing.",
    keywords: [
      "brick cleaning",
      "brick washing",
      "efflorescence removal",
      "brick restoration",
      "historic brick cleaning",
      "graffiti removal brickwork",
      "brick sealing",
      "masonry cleaning",
    ],
    alternates: { canonical: `${BASE_URL}/services/brick-cleaning` },
    openGraph: {
      title: "Professional Brick Cleaning | Al Grey's Cleaning Services",
      description:
        "Restore your brickwork's natural look — efflorescence, staining & biological growth removed safely. Soft wash & chemical treatments for all brick types.",
      url: `${BASE_URL}/services/brick-cleaning`,
      images: [
        {
          url: `${BASE_URL}/brick.webp`,
          width: 1200,
          height: 630,
          alt: "Professional brick cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Brick Cleaning | Al Grey's Cleaning Services",
      description:
        "Staining, efflorescence & biological growth age brickwork fast. Restore its natural look — book in 60 seconds.",
      images: [`${BASE_URL}/brick.webp`],
    },
  },

  // 9. CLADDING CLEANING
  claddingCleaning: {
    title: "Professional Cladding Cleaning Services | Al Grey's Cleaning",
    description:
      "Specialist cleaning for UPVC, composite, metal & rendered cladding. Soft-wash systems that restore your building exterior without damaging surface coatings. Free quote.",
    keywords: [
      "cladding cleaning",
      "UPVC cladding cleaning",
      "composite cladding cleaning",
      "metal cladding cleaning",
      "building cladding cleaning",
      "exterior cladding cleaning",
      "soft wash cladding",
    ],
    alternates: { canonical: `${BASE_URL}/services/cladding-cleaning` },
    openGraph: {
      title: "Professional Cladding Cleaning | Al Grey's Cleaning Services",
      description:
        "Algae & pollution degrade cladding faster than you think. Our specialist soft-wash system restores UPVC, composite & metal cladding safely.",
      url: `${BASE_URL}/services/cladding-cleaning`,
      images: [
        {
          url: `${BASE_URL}/cladding.webp`,
          width: 1200,
          height: 630,
          alt: "Professional cladding cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Cladding Cleaning | Al Grey's Cleaning Services",
      description:
        "UPVC, composite & metal cladding restored with our specialist soft-wash system. Free quote, fully insured.",
      images: [`${BASE_URL}/cladding.webp`],
    },
  },

  // 10. DOWNPIPE CLEANING
  downpipeCleaning: {
    title: "Professional Downpipe Cleaning & Unblocking | Al Grey's Cleaning",
    description:
      "Expert downpipe unblocking & cleaning using high-pressure jetting. CCTV inspection, repair & maintenance — protect your walls & foundations from water damage. Free quote.",
    keywords: [
      "downpipe cleaning",
      "downpipe unblocking",
      "blocked downpipe",
      "downpipe jetting",
      "CCTV downpipe inspection",
      "downpipe repair",
      "rainwater pipe cleaning",
      "emergency downpipe cleaning",
    ],
    alternates: { canonical: `${BASE_URL}/services/downpipe-cleaning` },
    openGraph: {
      title: "Downpipe Cleaning & Unblocking | Al Grey's Cleaning Services",
      description:
        "Blocked downpipes cause serious wall & foundation damage. High-pressure jetting clears blockages fast — CCTV inspection & repairs available.",
      url: `${BASE_URL}/services/downpipe-cleaning`,
      images: [
        {
          url: `${BASE_URL}/downpipe.webp`,
          width: 1200,
          height: 630,
          alt: "Professional downpipe cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Downpipe Cleaning & Unblocking | Al Grey's Cleaning Services",
      description:
        "Blocked downpipe? Don't wait for water damage. Emergency call-outs available — book in 60 seconds.",
      images: [`${BASE_URL}/downpipe.webp`],
    },
  },

  // 11. GRAFFITI REMOVAL
  graffitiRemoval: {
    title: "Professional Graffiti Removal Services | Al Grey's Cleaning",
    description:
      "Fast, effective graffiti removal from all surfaces — brick, concrete, metal, glass & UPVC. Anti-graffiti coatings available. 24-hour response for commercial properties.",
    keywords: [
      "graffiti removal",
      "graffiti cleaning",
      "spray paint removal",
      "anti-graffiti coating",
      "commercial graffiti removal",
      "graffiti removal brickwork",
      "graffiti removal concrete",
      "emergency graffiti removal",
    ],
    alternates: { canonical: `${BASE_URL}/services/graffiti-removal` },
    openGraph: {
      title: "Professional Graffiti Removal | Al Grey's Cleaning Services",
      description:
        "Graffiti today, gone by tomorrow. Professional removal from all surfaces with anti-graffiti coatings to deter future vandalism. 24-hour response.",
      url: `${BASE_URL}/services/graffiti-removal`,
      images: [
        {
          url: `${BASE_URL}/graffiti.webp`,
          width: 1200,
          height: 630,
          alt: "Professional graffiti removal",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Graffiti Removal | Al Grey's Cleaning Services",
      description:
        "Graffiti today? Gone by tomorrow. Fast professional removal from all surfaces — 24-hour rapid response.",
      images: [`${BASE_URL}/graffiti.webp`],
    },
  },

  // 12. COMMERCIAL GUTTER CLEANING
  commercialGutterCleaning: {
    title: "Commercial Gutter Cleaning Services | Al Grey's Cleaning",
    description:
      "Professional commercial gutter cleaning for offices, retail centres, warehouses & apartment blocks. Full H&S compliance, flexible scheduling, detailed condition reports.",
    keywords: [
      "commercial gutter cleaning",
      "industrial gutter cleaning",
      "office building gutter cleaning",
      "commercial property gutter maintenance",
      "warehouse gutter cleaning",
      "apartment block gutter cleaning",
      "commercial gutter maintenance contract",
    ],
    alternates: {
      canonical: `${BASE_URL}/services/commercial-gutter-cleaning`,
    },
    openGraph: {
      title: "Commercial Gutter Cleaning | Al Grey's Cleaning Services",
      description:
        "Protect your commercial property from costly water damage. H&S compliant gutter cleaning with flexible scheduling & full condition reports. Free site survey.",
      url: `${BASE_URL}/services/commercial-gutter-cleaning`,
      images: [
        {
          url: `${BASE_URL}/commercial.webp`,
          width: 1200,
          height: 630,
          alt: "Commercial gutter cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Commercial Gutter Cleaning | Al Grey's Cleaning Services",
      description:
        "H&S compliant gutter cleaning for offices, warehouses & retail centres. Minimal disruption guaranteed — free site survey.",
      images: [`${BASE_URL}/commercial.webp`],
    },
  },

  // 13. ROOF CLEANING
  roofCleaning: {
    title: "Professional Roof Cleaning Services | Moss & Algae Removal",
    description:
      "Expert soft-wash roof cleaning that safely removes moss, algae & lichen from tiles, slates & all roof types. Biocidal protective treatments extend your roof's lifespan.",
    keywords: [
      "roof cleaning",
      "moss removal roof",
      "algae removal roof",
      "soft wash roof cleaning",
      "roof moss treatment",
      "tile roof cleaning",
      "slate roof cleaning",
      "professional roof cleaning",
    ],
    alternates: { canonical: `${BASE_URL}/services/roof-cleaning` },
    openGraph: {
      title: "Professional Roof Cleaning | Al Grey's Cleaning Services",
      description:
        "Moss & algae shorten your roof's lifespan. Our safe soft-wash system removes biological growth & applies long-lasting protective treatments — free quote.",
      url: `${BASE_URL}/services/roof-cleaning`,
      images: [
        {
          url: `${BASE_URL}/roof-clean.webp`,
          width: 1200,
          height: 630,
          alt: "Professional roof cleaning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Roof Cleaning | Al Grey's Cleaning Services",
      description:
        "Moss destroying your roof? Act today. Safe soft-wash cleaning with protective biocidal treatment — book in 60 seconds.",
      images: [`${BASE_URL}/roof-clean.webp`],
    },
  },
};

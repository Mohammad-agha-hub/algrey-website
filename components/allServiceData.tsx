"use client";

import React from "react";

// ─────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────
export interface CTAData {
  badge: string;
  headingLines: [string, string, string];
  body: string;
  pills: [string, string, string];
}

export interface CardItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface HeroData {
  serviceName: string;
  eyebrow?: string;
  line1: string;
  line2?: string;
  line3?: string;
  subtext: string;
  bgImage: string;
}

export interface IntroData {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export interface CardsData {
  eyebrow: string;
  heading: string;
  subtext: string;
  items: CardItem[];
}

export interface ProcessData {
  eyebrow: string;
  heading: string;
  subtext: string;
  steps: ProcessStep[];
}

export interface GalleryData {
  eyebrow: string;
  heading: string;
  subtext: string;
  images: GalleryImage[];
}

export interface FaqData {
  eyebrow: string;
  heading: string;
  subtext: string;
  items: FaqItem[];
}

export interface ServiceData {
  hero: HeroData;
  intro: IntroData;
  cards: CardsData;
  process: ProcessData;
  gallery: GalleryData;
  faq: FaqData;
  cta: CTAData;
}

// ─────────────────────────────────────────────────────────────────
// ICON HELPERS
// ─────────────────────────────────────────────────────────────────
const CI = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    {d2 && <path strokeLinecap="round" strokeLinejoin="round" d={d2} />}
  </svg>
);

const PI = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="w-7 h-7"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    {d2 && <path strokeLinecap="round" strokeLinejoin="round" d={d2} />}
  </svg>
);

// ─────────────────────────────────────────────────────────────────
// 1. GUTTER CLEANING
// ─────────────────────────────────────────────────────────────────
export const gutterCleaningData: ServiceData = {
  cta: {
    badge: "Same-Day Response",
    headingLines: ["Stop Ignoring", "Your Gutters.", "Book Today."],
    body: "Blocked gutters cause damp, cracked walls and costly repairs. Takes 60 seconds to book — we handle the rest.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Gutter Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Gutter",
    line3: "Cleaning",
    subtext:
      "Protect your property from costly water damage with our expert gutter cleaning, clearing, and maintenance solutions.",
    bgImage: "/gutter-cleaning.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Gutter Cleaning is Essential for Your Home",
    paragraphs: [
      "Your gutters play a vital role in protecting your home's foundations, walls and roof from water damage. When left blocked with leaves, moss, and debris, they can cause serious problems including damp, rot, and costly structural damage.",
      "At Al Grey's Cleaning Services, we specialise in professional gutter cleaning using advanced equipment and techniques that deliver thorough results without damaging your system. Our team has over 15 years of experience with all types of gutter systems.",
      "We understand that clean gutters are more than just maintenance — they're essential for preserving your property's value and preventing expensive repairs down the line.",
    ],
    image: "/gutter-cleaning-about.webp",
    imageAlt: "Professional gutter cleaning in progress",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Gutter Cleaning Services",
    subtext: "Comprehensive solutions for all your gutter maintenance needs.",
    items: [
      {
        icon: <CI d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />,
        title: "Standard Gutter Cleaning",
        desc: "Complete removal of leaves, debris and blockages from your entire gutter system. Includes downpipe flushing and a full visual inspection.",
      },
      {
        icon: (
          <CI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Downpipe & Drainage",
        desc: "Specialist clearing of downpipes and drainage systems to ensure optimal water flow away from your property's foundations.",
      },
      {
        icon: (
          <CI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        ),
        title: "Gutter Repairs & Maintenance",
        desc: "Fixing leaking joints, sagging sections and minor damage on the spot — keeping your gutters functioning perfectly year-round.",
      },
      {
        icon: (
          <CI d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        ),
        title: "Gutter Guard Installation",
        desc: "Long-lasting mesh guards that prevent debris build-up, dramatically reducing the frequency of cleaning needed and protecting your investment.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Gutter Cleaning Process",
    subtext:
      "A systematic approach to ensure thorough cleaning and protection for your home on every single visit.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        ),
        title: "Safety Assessment",
        desc: "We assess your property, set up safety equipment and give you a clear, honest quote before any work begins.",
        bullets: [
          "Full property access assessment",
          "Safety equipment installed",
          "Transparent quote — no hidden costs",
          "Same-day booking available",
        ],
      },
      {
        icon: (
          <PI d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        ),
        title: "Debris Removal",
        desc: "All leaves, moss and silt are thoroughly cleared from gutters and downpipes using specialist equipment.",
        bullets: [
          "Hand-clearing of all debris",
          "Downpipes flushed clear",
          "All waste bagged and removed",
          "No mess left behind",
        ],
      },
      {
        icon: (
          <PI d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        ),
        title: "System Flushing",
        desc: "We flush the entire system with water to ensure all downpipes and outlets are flowing freely.",
        bullets: [
          "Full downpipe water test",
          "Flow confirmed at ground level",
          "Blockages cleared on the spot",
          "Overflow points checked",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Inspection & Report",
        desc: "Post-clean inspection with before & after photos shared with you, plus maintenance advice for the future.",
        bullets: [
          "Before & after photos provided",
          "Written condition report",
          "Repair recommendations if needed",
          "Satisfaction guaranteed",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Gutter Cleaning Projects",
    subtext:
      "Every job comes with before & after photos — see exactly what we did.",
    images: [
      { src: "/4.webp", alt: "Gutter cleaning before and after" },
      { src: "/5.webp", alt: "Downpipe clearing work" },
      { src: "/7.webp", alt: "Gutter cleaning on semi-detached home" },
      { src: "/gutter-cleaning.webp", alt: "Blocked gutter cleared" },
      { src: "/gutter-5.webp", alt: "Gutter repair and resealing" },
      { src: "/gutter-6.webp", alt: "Clean gutters after service" },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Everything you need to know about our gutter cleaning service.",
    items: [
      {
        q: "How often should I have my gutters cleaned?",
        a: "We recommend at least twice a year — once in late spring and once in autumn after the leaves have fallen. Properties with overhanging trees may need cleaning up to four times a year.",
      },
      {
        q: "What happens if I don't clean my gutters?",
        a: "Blocked gutters overflow onto your fascia boards, walls and foundations — causing damp, rot, mould and potentially serious structural damage. The cost of repairs far exceeds a regular clean.",
      },
      {
        q: "Are your gutter guards worth installing?",
        a: "For most properties with overhanging trees, yes. Guards significantly reduce debris build-up and can cut cleaning frequency in half. We'll advise whether they're right for your property.",
      },
      {
        q: "Can blocked gutters cause roof damage?",
        a: "Yes. Overflowing water can back up under roof tiles and lead to rot, damp and even ceiling leaks inside your property. Regular cleaning prevents this entirely.",
      },
      {
        q: "What safety measures do you take during gutter cleaning?",
        a: "All our operatives are trained in working at height and carry £5M public liability insurance. We use industry-standard access equipment and complete a safety assessment before every job.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 2. RESIDENTIAL GUTTER CLEANING
// ─────────────────────────────────────────────────────────────────
export const residentialGutterCleaningData: ServiceData = {
  cta: {
    badge: "Same-Day Response",
    headingLines: ["Protect Your Home.", "Start With Your", "Gutters."],
    body: "Water damage from blocked gutters is costly and avoidable. Book in 60 seconds — we'll handle everything else.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Residential Gutter Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Residential",
    line3: "Gutter Cleaning",
    subtext:
      "Protect your home from water damage with our expert gutter cleaning and maintenance solutions.",
    bgImage: "/residential.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Gutter Cleaning is Essential for Your Home",
    paragraphs: [
      "Your gutters play a vital role in protecting your home's foundations, walls and roof from water damage. When left blocked with leaves, moss, and debris, they can cause serious problems including damp, rot, and costly structural damage.",
      "At Al Grey's Cleaning Services, we specialise in professional gutter cleaning using advanced equipment and techniques that deliver thorough results without damaging your system. Our team has over 15 years of experience with all types of residential gutter systems.",
      "We understand that clean gutters are more than just maintenance — they're essential for preserving your property's value and preventing expensive repairs down the line.",
    ],
    image: "/residential-gutter-cleaning.webp",
    imageAlt: "Professional residential gutter cleaning in progress",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Gutter Cleaning Services",
    subtext:
      "Complete solutions for all your residential gutter maintenance needs.",
    items: [
      {
        icon: <CI d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />,
        title: "Standard Gutter Cleaning",
        desc: "Complete removal of leaves, debris and blockages from your entire gutter system. Includes downpipe flushing and a full visual inspection.",
      },
      {
        icon: (
          <CI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Downpipe & Drainage Solutions",
        desc: "Specialist clearing of downpipes and drainage systems to ensure optimal water flow away from your home's foundations, walls, and surrounding areas.",
      },
      {
        icon: (
          <CI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        ),
        title: "Gutter Repairs & Maintenance",
        desc: "Fixing leaking joints, sagging sections and minor damage on the spot — keeping your gutters functioning perfectly year-round and preventing costly future repairs.",
      },
      {
        icon: (
          <CI d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        ),
        title: "Gutter Guard Installation",
        desc: "Long-lasting mesh guards that prevent debris build-up, dramatically reducing the frequency of cleaning needed and protecting your investment for years to come.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Gutter Cleaning Process",
    subtext:
      "A systematic approach to ensure thorough cleaning and protection for your home on every single visit.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        ),
        title: "Safety Assessment",
        desc: "We assess your property, set up safety equipment and give you a clear, honest quote before any work begins.",
        bullets: [
          "Full property access assessment",
          "Safety equipment installed",
          "Transparent quote — no hidden costs",
          "Same-day booking available",
        ],
      },
      {
        icon: (
          <PI d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        ),
        title: "Debris Removal",
        desc: "All leaves, moss and silt are thoroughly cleared from gutters and downpipes using specialist equipment.",
        bullets: [
          "Hand-clearing of all debris",
          "Downpipes flushed clear",
          "All waste bagged and removed",
          "No mess left behind",
        ],
      },
      {
        icon: (
          <PI d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        ),
        title: "System Flushing",
        desc: "We flush the entire system with water to ensure all downpipes and outlets are flowing freely.",
        bullets: [
          "Full downpipe water test",
          "Flow confirmed at ground level",
          "Blockages cleared on the spot",
          "Overflow points checked",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Inspection & Report",
        desc: "Post-clean inspection with before & after photos shared with you, plus maintenance advice for the future.",
        bullets: [
          "Before & after photos provided",
          "Written condition report",
          "Repair recommendations if needed",
          "Satisfaction guaranteed",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Gutter Cleaning Projects",
    subtext:
      "See the difference our professional residential gutter cleaning makes.",
    images: [
      {
        src: "/residential-gutter-cleaning5.webp",
        alt: "Residential gutter cleaning before and after",
      },
      {
        src: "/residential-gutter-cleaning2.webp",
        alt: "Downpipe clearing on detached home",
      },
      {
        src: "/residential-gutter-cleaning3.webp",
        alt: "Gutter cleaning on semi-detached property",
      },
      {
        src: "/residential-gutter-cleaning4.webp",
        alt: "Blocked residential gutter cleared",
      },
      {
        src: "/residential-gutter-cleaning1.webp",
        alt: "Gutter repair and resealing on terrace house",
      },
      {
        src: "/residential-gutter-cleaning6.webp",
        alt: "Clean gutters after residential service",
      },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about our residential gutter cleaning service.",
    items: [
      {
        q: "How often should I have my gutters cleaned?",
        a: "We recommend at least twice a year — once in late spring and once in autumn after the leaves have fallen. Properties with overhanging trees may need cleaning up to four times a year.",
      },
      {
        q: "What happens if I don't clean my gutters?",
        a: "Blocked gutters overflow onto your fascia boards, walls and foundations — causing damp, rot, mould and potentially serious structural damage. The cost of repairs far exceeds the cost of a regular clean.",
      },
      {
        q: "Are gutter guards worth installing?",
        a: "For most properties with overhanging trees, yes. Guards significantly reduce debris build-up and can cut cleaning frequency in half. We'll advise whether they're the right solution for your property.",
      },
      {
        q: "Can blocked gutters cause roof damage?",
        a: "Yes. Overflowing water can back up under roof tiles and lead to rot, damp and even ceiling leaks inside your home. Regular cleaning prevents this entirely.",
      },
      {
        q: "What safety measures do you take during gutter cleaning?",
        a: "All our operatives are trained in working at height and carry £5M public liability insurance. We use industry-standard access equipment and complete a full safety assessment before every job.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 3. PRESSURE WASHING
// ─────────────────────────────────────────────────────────────────
export const pressureWashingData: ServiceData = {
  cta: {
    badge: "Instant Results",
    headingLines: ["Dirty Surfaces?", "We'll Make Them", "Look New."],
    body: "Embedded dirt, moss and oil stains don't stand a chance. Professional pressure washing — booked in 60 seconds.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Pressure Washing",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Pressure",
    line3: "Washing",
    subtext:
      "Restore your property's appearance with our expert pressure washing and surface cleaning solutions.",
    bgImage: "/pressure-washing-1.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Professional Pressure Washing Matters",
    paragraphs: [
      "Exterior surfaces accumulate dirt, grime, moss, algae, and organic matter that can be impossible to remove with conventional cleaning. Over time, this build-up not only looks unsightly but can actually cause permanent surface damage and create dangerously slippery conditions.",
      "At Al Grey's Cleaning Services, we use professional-grade pressure washing equipment and industry-approved techniques that effectively remove even the most stubborn staining. Our team has over 15 years of experience working with various surface types, ensuring we apply the right pressure and cleaning solutions for each job.",
      "We understand that your comprehensive pressure washing services are designed to restore your property's appearance while protecting the long-term integrity of your surfaces.",
    ],
    image: "/pressure-washings.webp",
    imageAlt: "Pressure washing driveway",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Pressure Washing Services",
    subtext:
      "Comprehensive solutions for all your outdoor surface cleaning needs.",
    items: [
      {
        icon: (
          <CI d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        ),
        title: "Driveway & Patio Cleaning",
        desc: "Restore your outdoor surfaces to their original condition by removing embedded dirt, oil stains, and biological growth using industrial-grade pressure equipment.",
      },
      {
        icon: (
          <CI d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        ),
        title: "Building Exterior Cleaning",
        desc: "Remove dirt, grime, and biological growth from your property's exterior walls, brickwork and render using targeted high-pressure cleaning techniques.",
      },
      {
        icon: (
          <CI d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        ),
        title: "Commercial Pressure Washing",
        desc: "Professional pressure washing services for commercial premises, warehouses, car parks and industrial environments — delivered with minimal business disruption.",
      },
      {
        icon: (
          <CI d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        ),
        title: "Deck & Fence Cleaning",
        desc: "Restore and maintain your wooden, composite and concrete decks, fences and outbuildings using precise pressure and the correct cleaning agents for each material.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Pressure Washing Process",
    subtext: "A systematic approach to restoring and protecting your surfaces.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Surface Assessment",
        desc: "We assess the surface type, staining, and any delicate areas to determine the safest and most effective pressure and technique to use.",
        bullets: [
          "Surface material identified",
          "Stain and damage assessed",
          "Correct pressure setting selected",
          "Surrounding areas protected",
        ],
      },
      {
        icon: (
          <PI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75" />
        ),
        title: "Area Preparation",
        desc: "We clear the area, protect adjacent surfaces and apply any necessary pre-treatment solutions to loosen stubborn staining before washing.",
        bullets: [
          "Area cleared and prepared",
          "Pre-treatment applied where needed",
          "Plants and furniture protected",
          "Drainage direction noted",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Specialised Cleaning",
        desc: "Using calibrated pressure washers and appropriate cleaning agents, we systematically clean the entire surface for uniform, streak-free results.",
        bullets: [
          "Commercial-grade equipment used",
          "Methodical overlapping passes",
          "Stubborn areas spot-treated",
          "Edges and joints cleaned",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Final Inspection",
        desc: "After cleaning, we inspect the full surface, address any remaining marks and leave the area clean and tidy with before & after photos.",
        bullets: [
          "Full surface walkround completed",
          "Any missed areas re-treated",
          "Area left clean and tidy",
          "Before & after photos provided",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Pressure Washing Projects",
    subtext:
      "See the transformation our professional pressure washing delivers.",
    images: [
      {
        src: "/pressure-washing1.webp",
        alt: "Driveway pressure washing result",
      },
      { src: "/pressure-washing2.webp", alt: "Patio cleaning before and after" },
      { src: "/pressure-washing3.webp", alt: "Building exterior cleaned" },
      { src: "/pressure-washing4.webp", alt: "Commercial car park cleaned" },
      {
        src: "/pressure-washing5.webp",
        alt: "Decking restored with pressure washing",
      },
      { src: "/pressure-washing.webp", alt: "Pathway cleaning completed" },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about pressure washing.",
    items: [
      {
        q: "How often should I have my property pressure washed?",
        a: "Most driveways and patios benefit from a professional clean every 1–2 years. High-traffic areas, properties under trees, or those in damp climates may need annual attention.",
      },
      {
        q: "Is pressure washing safe for all surfaces?",
        a: "Not all surfaces are suitable for high-pressure washing. We assess every surface before starting and adjust our pressure accordingly. Softer materials like render and wood require a gentler approach.",
      },
      {
        q: "Can pressure washing remove oil stains from my driveway?",
        a: "Yes. We use specialist degreasers and hot-wash techniques to lift oil, fuel and grease stains that standard pressure washing alone cannot shift.",
      },
      {
        q: "How long does it take for surfaces to dry after pressure washing?",
        a: "Most surfaces are dry within a few hours in warm conditions. Porous materials like natural stone and block paving may take longer. We'll advise on keeping the area clear while drying.",
      },
      {
        q: "Can pressure washing increase my property value?",
        a: "A clean exterior makes an enormous difference to kerb appeal and buyer perception. Professional cleaning is one of the highest-ROI improvements you can make before selling a property.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 4. WINDOW CLEANING
// ─────────────────────────────────────────────────────────────────
export const windowCleaningData: ServiceData = {
  cta: {
    badge: "Crystal-Clear Results",
    headingLines: ["Streak-Free Windows.", "Every Pane,", "Every Time."],
    body: "Dirty windows reduce light and damage glass long-term. Professional cleaning — booked in just 60 seconds.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Window Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Window",
    line3: "Cleaning",
    subtext:
      "Crystal clear results that enhance your property's appearance and let the light in all year round.",
    bgImage: "/window.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Professional Window Cleaning Matters",
    paragraphs: [
      "Your windows are one of the most-noticed features of your property, but they quickly accumulate dirt, mineral deposits, bird droppings, tree sap, and environmental pollutants. Beyond appearances, dirty windows reduce natural light and can cause permanent etching if mineral deposits are left untreated.",
      "At Al Grey's Cleaning Services, we use professional pure-water cleaning systems that leave windows spotlessly clean without streaks or residue. Our water-fed pole systems allow us to safely clean upper-floor windows from the ground, while our specialists are fully trained for high-level access work on larger properties.",
      "Regular professional cleaning not only keeps your home or business looking its best — it also protects your glass and frames from long-term damage, saving you money on replacements.",
    ],
    image: "/window-cleaning7.webp",
    imageAlt: "Window cleaning with water-fed pole system",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Window Cleaning Services",
    subtext:
      "Comprehensive solutions for sparkling clean windows on any property.",
    items: [
      {
        icon: (
          <CI d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        ),
        title: "Residential Cleaning",
        desc: "Complete interior and exterior window cleaning for homes and apartments using pure-water systems that deliver a streak-free, long-lasting shine.",
      },
      {
        icon: (
          <CI d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        ),
        title: "Commercial Cleaning",
        desc: "Professional window cleaning for offices, retail premises, schools and commercial buildings — maintaining a polished exterior that reflects your brand.",
      },
      {
        icon: (
          <CI d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        ),
        title: "High-Level Access",
        desc: "Safe and effective cleaning of hard-to-reach and high-rise windows using water-fed poles, specialist ladders and fully insured access equipment.",
      },
      {
        icon: (
          <CI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Hard Water Stain Removal",
        desc: "Specialist treatments to remove stubborn hard water stains, limescale, and mineral deposits that pure-water cleaning alone cannot shift.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Window Cleaning Process",
    subtext:
      "A systematic approach to ensure flawlessly clean results every time.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Initial Assessment",
        desc: "We assess your windows, identify any hard water stains or damage, and discuss access requirements before quoting.",
        bullets: [
          "All window types assessed",
          "Staining and damage noted",
          "Access plan confirmed",
          "Clear quote provided upfront",
        ],
      },
      {
        icon: (
          <PI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        ),
        title: "Surface Preparation",
        desc: "Frames, sills and surrounding areas are protected and any heavy soiling is pre-treated before the main clean begins.",
        bullets: [
          "Frames and sills wiped down",
          "Heavy debris removed first",
          "Surrounding areas protected",
          "Pre-treatment for stubborn marks",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Professional Cleaning",
        desc: "Pure deionised water is applied via our water-fed pole system, thoroughly agitating the glass before rinsing to a spotless, streak-free finish.",
        bullets: [
          "Pure water system used",
          "Every pane fully agitated",
          "Frames and sills included",
          "Streak-free guaranteed",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Final Inspection",
        desc: "We inspect every window to ensure a perfect result, address any remaining marks and confirm your complete satisfaction.",
        bullets: [
          "Every pane individually checked",
          "Missed spots immediately re-cleaned",
          "Sills and frames wiped dry",
          "100% satisfaction confirmed",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Window Cleaning Projects",
    subtext:
      "See the transformation our professional window cleaning delivers.",
    images: [
      {
        src: "/window-cleaning1.webp",
        alt: "Residential window cleaning completed",
      },
      {
        src: "/window-cleaning2.webp",
        alt: "Commercial window cleaning in progress",
      },
      {
        src: "/window-cleaning3.webp",
        alt: "High-level window cleaning with pole",
      },
      { src: "/window-cleaning4.webp", alt: "Hard water stain removal result" },
      {
        src: "/window-cleaning5.webp",
        alt: "Before and after window cleaning",
      },
      { src: "/window-cleaning6.webp", alt: "Office building windows cleaned" },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about window cleaning.",
    items: [
      {
        q: "How often should I have my windows professionally cleaned?",
        a: "For most residential properties, every 4–8 weeks is ideal. Commercial premises with high footfall often benefit from fortnightly cleaning. We offer regular scheduled visits at discounted rates.",
      },
      {
        q: "Do you clean both inside and outside windows?",
        a: "Yes. We offer interior and exterior cleans on request. Interior cleaning is carried out using traditional methods with pure water and lint-free cloths to avoid any drips or mess.",
      },
      {
        q: "Are your cleaning solutions safe for children and pets?",
        a: "Absolutely. Our primary cleaning method uses only pure deionised water with no chemicals. Any specialist treatments we apply are fully biodegradable and safe once dry.",
      },
      {
        q: "Can you remove hard water stains from windows?",
        a: "Yes. We use specialist mineral-removing treatments for stubborn limescale and hard water deposits. These are applied carefully to avoid any damage to seals or coatings.",
      },
      {
        q: "How long does a typical window clean take?",
        a: "A standard 3-bedroom house typically takes 45–90 minutes. Larger properties or those with many windows will take longer. We'll give you a clear time estimate when we quote.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 5. DRIVEWAY CLEANING
// ─────────────────────────────────────────────────────────────────
export const drivewayCleaningData: ServiceData = {
  cta: {
    badge: "Same-Day Response",
    headingLines: ["First Impressions", "Start With Your", "Driveway."],
    body: "Oil stains, moss and embedded grime restored in a single visit. Takes 60 seconds to book — we do the rest.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Driveway Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Driveway",
    line3: "Cleaning",
    subtext:
      "Restore and protect your driveway with our expert cleaning and maintenance solutions.",
    bgImage: "/driveway.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Driveway Cleaning is Essential",
    paragraphs: [
      "Your driveway is one of the first things visitors and potential buyers notice about your property. Over time, driveways collect oil stains, dirt, moss, algae, and weeds that not only look unsightly but can compromise the surface's structural integrity and create dangerously slippery conditions.",
      "At Al Grey's Cleaning Services, we specialise in professional driveway cleaning using advanced pressure washing and specialist treatments to deliver a surface that looks as good as new. Our team has over 15 years of experience working with block paving, tarmac, concrete, resin and natural stone surfaces.",
      "We understand that a clean driveway is more than aesthetics — it's about protecting your investment, maintaining a safe surface for family and visitors, and ensuring your property makes the right first impression.",
    ],
    image: "/driveway-cleaning8.webp",
    imageAlt: "Driveway cleaning in progress",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Driveway Cleaning Services",
    subtext: "Comprehensive solutions for all your driveway maintenance needs.",
    items: [
      {
        icon: (
          <CI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Professional Pressure Washing",
        desc: "High-pressure cleaning to blast away embedded dirt, gravel, grit, and surface contaminants from all driveway surfaces, restoring them to their original condition.",
      },
      {
        icon: (
          <CI d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        ),
        title: "Oil & Grease Stain Removal",
        desc: "Specialised treatment to lift and remove stubborn oil, fuel and grease stains from driveways using industrial degreasers that penetrate deep into the surface.",
      },
      {
        icon: (
          <CI d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        ),
        title: "Weed & Moss Removal",
        desc: "Complete removal of weeds, moss and algae from joints and surfaces, followed by biocidal treatment to prevent rapid regrowth and keep your driveway looking its best.",
      },
      {
        icon: (
          <CI d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        ),
        title: "Sealing & Protection",
        desc: "Long-lasting protective sealants that guard your driveway against stains, weather damage and weed growth — making future cleaning far easier.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Driveway Cleaning Process",
    subtext:
      "A systematic approach to thorough cleaning and protection for your driveway.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Initial Assessment",
        desc: "We begin with a thorough inspection of your driveway, identifying the type of surface, staining, weed growth and any damage that needs special attention.",
        bullets: [
          "Surface material identified",
          "Oil and stain areas mapped",
          "Weed and moss growth assessed",
          "Honest quote provided upfront",
        ],
      },
      {
        icon: (
          <PI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63" />
        ),
        title: "Surface Preparation",
        desc: "We pre-treat oil stains, apply weed killer to joints and borders, and protect surrounding areas before the main clean begins.",
        bullets: [
          "Oil stains pre-treated",
          "Weed killer applied to joints",
          "Borders and edges protected",
          "Surrounding areas cleared",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Specialised Cleaning",
        desc: "Using calibrated commercial pressure washers, we systematically clean the full driveway surface, joints and edging to restore it to its original colour and texture.",
        bullets: [
          "Industrial pressure washing applied",
          "Joints and edges fully cleaned",
          "Stubborn stains re-treated",
          "Surface evenly restored",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Protective Treatment",
        desc: "After cleaning, we offer sealing and protective coatings to lock in the clean, resist future staining, and significantly extend the life of your driveway surface.",
        bullets: [
          "Full sealing option available",
          "Stain-resistant coating applied",
          "Weed preventer applied to joints",
          "Before & after photos provided",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Driveway Cleaning Projects",
    subtext:
      "See the finished results our professional driveway cleaning delivers.",
    images: [
      { src: "/driveway-cleaning5.webp", alt: "Block paving driveway cleaned" },
      { src: "/driveway-cleaning2.webp", alt: "Tarmac driveway restored" },
      {
        src: "/driveway-cleaning3.webp",
        alt: "Oil stain removal from concrete driveway",
      },
      {
        src: "/driveway-cleaning.webp",
        alt: "Driveway before and after cleaning",
      },
      {
        src: "/driveway-cleaning6.webp",
        alt: "Resin driveway professionally cleaned",
      },
      { src: "/driveway-cleaning7.webp", alt: "Driveway sealed after cleaning" },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about driveway cleaning.",
    items: [
      {
        q: "How often should I have my driveway cleaned?",
        a: "Most driveways benefit from a professional clean every 1–2 years. Driveways with heavy moss, tree cover, or oil staining may need annual attention to prevent permanent damage.",
      },
      {
        q: "Is pressure washing safe for all driveway types?",
        a: "We adjust our approach for each surface type. Block paving and concrete can handle high pressure, while resin-bound and printed concrete driveways require lower-pressure techniques to avoid damage.",
      },
      {
        q: "Can you remove oil stains from my driveway?",
        a: "Yes. We use specialist industrial degreasers and hot-water treatment to break down and lift oil, fuel and grease stains that pressure washing alone cannot remove. Results depend on how long the stain has been present.",
      },
      {
        q: "Do you offer guarantees on your driveway cleaning work?",
        a: "We offer a full satisfaction guarantee on all cleaning work. For sealed driveways, we also offer extended protection guarantees of up to 3 years against weed growth and staining.",
      },
      {
        q: "How long does it take for a driveway to dry after cleaning?",
        a: "Most driveways are dry and usable within 2–4 hours in good conditions. We'll advise you to keep vehicles off sealed surfaces for 24 hours to allow the protective coating to fully cure.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 6. PATIO CLEANING
// ─────────────────────────────────────────────────────────────────
export const patioCleaningData: ServiceData = {
  cta: {
    badge: "Same-Day Response",
    headingLines: ["Reclaim Your", "Outdoor Space.", "Book Today."],
    body: "Moss, algae and grime can ruin a patio fast. One professional clean is all it takes — book in 60 seconds.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Patio Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Patio",
    line3: "Cleaning",
    subtext:
      "Restore and revitalise your outdoor space with our expert patio and paving cleaning solutions.",
    bgImage: "/patio.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Professional Patio Cleaning is Essential",
    paragraphs: [
      "Your patio is an extension of your living space, providing an area for relaxation, entertainment, and enjoyment of the outdoors. Over time, patios accumulate dirt, slate and grime that not only affect their appearance but can cause permanent staining and create dangerously slippery surfaces.",
      "At Al Grey's Cleaning Services, we specialise in professional patio cleaning using the right techniques for every surface — from natural stone and block paving to porcelain tiles and concrete slabs. Our team has over 15 years of experience working with all types of patio surfaces, ensuring we always get the right results without causing damage.",
      "We understand that a clean patio is more than just about aesthetics — it's essential for maintaining your property's outdoor value, safety, and enjoyment for your family and guests.",
    ],
    image: "/patio-cleaning.webp",
    imageAlt: "Patio cleaning before and after",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Patio Cleaning Services",
    subtext:
      "Comprehensive solutions for all your outdoor surface cleaning needs.",
    items: [
      {
        icon: (
          <CI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Professional Pressure Washing",
        desc: "Professional pressure washing to blast away embedded dirt, stains, and grime from your patio surface — delivering results that transform your outdoor space.",
      },
      {
        icon: (
          <CI d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        ),
        title: "Weed & Moss Removal",
        desc: "Complete removal of weeds, moss and organic growth from patio joints and surfaces, preventing structural damage and keeping your outdoor space safe and attractive.",
      },
      {
        icon: (
          <CI d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        ),
        title: "Natural Stone Cleaning",
        desc: "Specialised cleaning for natural stone patios including sandstone, limestone and granite, preserving their natural texture, colour and structural integrity.",
      },
      {
        icon: (
          <CI d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        ),
        title: "Sealing & Protection",
        desc: "Long-lasting protective sealants that prevent future staining, inhibit moss regrowth, and significantly extend the life and appearance of your patio materials.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Patio Cleaning Process",
    subtext:
      "A systematic approach to thorough cleaning and protection for your patio.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Initial Assessment",
        desc: "We inspect your patio, identify the surface type and any special areas of concern, and agree the scope of work before any cleaning begins.",
        bullets: [
          "Surface material identified",
          "Staining and damage noted",
          "Weed and moss growth assessed",
          "Honest quote provided upfront",
        ],
      },
      {
        icon: (
          <PI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63" />
        ),
        title: "Surface Preparation",
        desc: "Loose debris is cleared, weeds are removed from joints and stubborn stains are pre-treated before the main pressure washing begins.",
        bullets: [
          "Loose debris swept away",
          "Weeds removed from joints",
          "Stubborn stains pre-treated",
          "Adjacent areas protected",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Specialised Cleaning",
        desc: "We apply the appropriate pressure and cleaning solutions for your specific surface type, working methodically across the whole area for an even, thorough clean.",
        bullets: [
          "Pressure calibrated per surface",
          "Full area systematically cleaned",
          "Joints and edges treated",
          "No surface left untouched",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Protective Treatment",
        desc: "We apply biocidal treatment and optional sealant to lock in the clean, prevent moss regrowth, and protect your patio surface long after we've left.",
        bullets: [
          "Biocidal treatment applied",
          "Sealing option available",
          "Weed preventer in joints",
          "Before & after photos provided",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Patio Cleaning Projects",
    subtext: "See the transformation our professional patio cleaning delivers.",
    images: [
      {
        src: "/patio-cleaning1.webp",
        alt: "Sandstone patio cleaned and restored",
      },
      {
        src: "/patio-cleaning2.webp",
        alt: "Block paving patio after cleaning",
      },
      {
        src: "/patio-cleaning3.webp",
        alt: "Patio before and after moss removal",
      },
      { src: "/patio-cleaning4.webp", alt: "Porcelain patio tiles cleaned" },
      { src: "/patio-cleaning5.webp", alt: "Patio sealing completed" },
      { src: "/patio-cleaning6.webp", alt: "Garden patio fully restored" },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about patio cleaning.",
    items: [
      {
        q: "How often should I have my patio professionally cleaned?",
        a: "We recommend a professional patio clean every 1–2 years for most properties. Patios in shaded areas or under trees may benefit from annual cleaning due to faster moss and algae regrowth.",
      },
      {
        q: "Is pressure washing safe for all types of patio surface?",
        a: "We use different pressure settings and techniques depending on your surface type. Softer materials like sandstone and natural limestone require lower pressure to avoid etching or damage.",
      },
      {
        q: "Can moss growing between patio stones cause damage?",
        a: "Yes. As moss and weeds grow into the joints, they gradually widen gaps and can cause individual slabs to become loose or uneven, creating a trip hazard and requiring costly repair.",
      },
      {
        q: "Do you offer guarantees on your patio cleaning work?",
        a: "We offer a satisfaction guarantee on all cleaning. Sealed patios benefit from additional protection against staining and moss regrowth, and we offer maintenance plans for year-round care.",
      },
      {
        q: "How long does it take for a patio to dry after cleaning?",
        a: "Most patios are dry within 2–4 hours in warm, dry conditions. Sealed surfaces should be kept clear of furniture and foot traffic for 24 hours to allow the coating to fully cure.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 7. RENDER CLEANING
// ─────────────────────────────────────────────────────────────────
export const renderCleaningData: ServiceData = {
  cta: {
    badge: "Specialist Render Care",
    headingLines: ["Bring Your", "Render Back", "To Life."],
    body: "Algae and moss silently damage render over time. Our soft-wash system restores it safely — book in 60 seconds.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Render Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Render",
    line3: "Cleaning",
    subtext:
      "Restore and protect your property's exterior with our expert render cleaning and maintenance solutions.",
    bgImage: "/render.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Render Cleaning is Essential",
    paragraphs: [
      "Your property's render is not just about aesthetics — it's a crucial protective layer that shields your building from the elements. Over time, render accumulates algae, moss, pollution and biological staining that not only looks unsightly but can compromise the render's weatherproofing properties.",
      "At Al Grey's Cleaning Services, we use specialist soft-wash render cleaning methods that effectively remove biological growth and staining without the risk of damage that high-pressure washing can cause. Our biocidal treatments kill contamination at the root for long-lasting results.",
      "We understand that clean render is more than just a cosmetic issue — it's essential for maintaining your property's structural protection, energy efficiency, and market value while enhancing your property's appearance.",
    ],
    image: "/render-cleaning4.webp",
    imageAlt: "Render cleaning in progress",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Render Cleaning Services",
    subtext: "Comprehensive solutions for all your render cleaning needs.",
    items: [
      {
        icon: (
          <CI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Soft Wash Cleaning",
        desc: "Gentle low-pressure cleaning that safely removes mould, algae, and contamination from rendered surfaces without damaging the render or underlying structure.",
      },
      {
        icon: (
          <CI
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            d2="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        ),
        title: "Algae & Fungus Removal",
        desc: "Complete removal of biological growth including green algae, black mould and lichen to prevent surface damage and discolouration of your render.",
      },
      {
        icon: (
          <CI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        ),
        title: "Stain & Pollution Removal",
        desc: "Specialist cleaning to tackle stubborn marks, environmental pollution staining, and weathered discolouration from all types of rendered exterior surfaces.",
      },
      {
        icon: (
          <CI d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        ),
        title: "Protective Coatings",
        desc: "Long-lasting protective coatings applied after cleaning that repel water, resist biological staining, and help keep your render looking clean for longer.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Render Cleaning Process",
    subtext:
      "A systematic approach to ensure thorough cleaning and protection for your render.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Initial Assessment",
        desc: "We assess all areas of your render, identify the types of contamination present, and determine the safest and most effective cleaning approach.",
        bullets: [
          "Render type and condition checked",
          "Contamination types identified",
          "Crack and damage areas noted",
          "Transparent quote provided",
        ],
      },
      {
        icon: (
          <PI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63" />
        ),
        title: "Surface Preparation",
        desc: "We protect windows, doors and surrounding areas before applying specialist pre-treatment to loosen heavy biological growth ready for removal.",
        bullets: [
          "Windows and doors masked",
          "Plants and gardens protected",
          "Pre-treatment biocide applied",
          "Treatment dwell time observed",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Specialised Cleaning",
        desc: "Our soft-wash system delivers cleaning solution at low pressure, safely removing all contamination without the risk of damage caused by high-pressure washing.",
        bullets: [
          "Low-pressure soft wash applied",
          "Full facade systematically cleaned",
          "Stubborn areas re-treated",
          "Rinse to prevent residue",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Protective Treatment",
        desc: "We apply a long-lasting protective coating that seals the render surface, preventing rapid biological regrowth and protecting against weathering.",
        bullets: [
          "Protective sealant applied",
          "Algae-inhibiting coating included",
          "Before & after photos provided",
          "Full satisfaction guaranteed",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Render Cleaning Projects",
    subtext: "See the results our professional render cleaning delivers.",
    images: [
      { src: "/render-cleaning1.webp", alt: "Render cleaning before and after" },
      { src: "/render-cleaning2.webp", alt: "Algae removed from white render" },
      {
        src: "/render-cleaning3.webp",
        alt: "Monocouche render professionally cleaned",
      },
      {
        src: "/render-cleaning.webp",
        alt: "Render soft wash treatment applied",
      },
      {
        src: "/render-cleaning7.webp",
        alt: "Property render restored to original colour",
      },
      { src: "/render-cleaning6.webp", alt: "Render cleaned and sealed" },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about render cleaning.",
    items: [
      {
        q: "How often should I have my render cleaned?",
        a: "Most rendered properties benefit from a professional clean every 2–4 years. Properties in wetter climates or near trees may develop biological growth faster and require more frequent attention.",
      },
      {
        q: "Is render cleaning safe for my property?",
        a: "Our soft-wash approach is specifically designed to be safe for render. Unlike high-pressure washing, we use low pressure and biodegradable biocides that clean effectively without risk of cracking or delaminating your render.",
      },
      {
        q: "Can algae cause damage to my render?",
        a: "Yes. Biological growth traps moisture against the render surface, which accelerates cracking, staining, and deterioration over time. Regular cleaning prevents this and extends the life of your render significantly.",
      },
      {
        q: "Do you offer guarantees on render cleaning?",
        a: "We offer a full satisfaction guarantee on all cleaning. When a protective coating is applied, we can offer guarantees of up to 5 years against biological regrowth.",
      },
      {
        q: "Can render cleaning improve my property's energy efficiency?",
        a: "Yes — algae and moss growth retains moisture within the render, which can reduce its insulating properties. A professionally cleaned and sealed render performs better thermally and dries faster after rainfall.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 8. BRICK CLEANING
// ─────────────────────────────────────────────────────────────────
export const brickCleaningData: ServiceData = {
  cta: {
    badge: "Expert Brick Care",
    headingLines: ["Restore Your", "Brickwork's", "Natural Look."],
    body: "Staining, efflorescence and biological growth age your brickwork fast. Professional cleaning — 60 seconds to book.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Brick Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Brick",
    line3: "Cleaning",
    subtext:
      "Restore and rejuvenate your brickwork with our expert brick cleaning and restoration solutions.",
    bgImage: "/brick.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Brick Cleaning is Essential",
    paragraphs: [
      "Your brickwork is not just a structural element but also a key aesthetic feature of your property. Over time, bricks accumulate dirt, biological growth, pollution staining and efflorescence that can seriously affect your property's appearance and structural integrity.",
      "At Al Grey's Cleaning Services, we specialise in professional brick cleaning using methods appropriate for each brick and mortar type. Our team has extensive experience dealing with all brick types, from soft old-stock bricks to modern hard-fired engineering bricks, and understands the correct low-pressure techniques to avoid damage.",
      "We understand that proper brick cleaning is key to preserving masonry, protecting your investment and maintaining your property's appearance for the long term. Our methods are designed to achieve outstanding results while preserving your brickwork's original character and integrity.",
    ],
    image: "/brick-cleaning.webp",
    imageAlt: "Brick cleaning in progress",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Brick Cleaning Services",
    subtext: "Comprehensive solutions for all your brick cleaning needs.",
    items: [
      {
        icon: (
          <CI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Soft Wash Cleaning",
        desc: "Gentle low-pressure cleaning that safely removes dirt, algae, and organic growth from brickwork without damaging your delicate mortar or brick surface.",
      },
      {
        icon: (
          <CI d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        ),
        title: "Chemical Cleaning",
        desc: "Concentrated chemical treatments to remove stubborn stains, efflorescence, and heavy biological growth that softer methods cannot address alone.",
      },
      {
        icon: (
          <CI d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        ),
        title: "Historic Brick Restoration",
        desc: "Specialist cleaning and restoration for historic and listed buildings with ultra-delicate brickwork, using products specifically approved for sensitive masonry.",
      },
      {
        icon: (
          <CI d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        ),
        title: "Protective Sealing",
        desc: "Long-lasting protective treatments that prevent future staining, resist water penetration, and protect your brick or stone surface for years after cleaning.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Brick Cleaning Process",
    subtext:
      "A systematic approach to ensure thorough cleaning and protection for your brickwork.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Initial Assessment",
        desc: "We assess your brickwork in detail, identifying the brick type, age, and staining to determine the safest and most effective cleaning approach.",
        bullets: [
          "Brick and mortar type identified",
          "Staining and damage assessed",
          "Mortar condition checked",
          "Written quote provided",
        ],
      },
      {
        icon: (
          <PI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63" />
        ),
        title: "Surface Preparation",
        desc: "We protect surrounding surfaces, apply targeted pre-treatment to stained areas, and test our cleaning solution on an inconspicuous area before proceeding.",
        bullets: [
          "Adjacent surfaces masked",
          "Pre-treatment applied",
          "Small test patch completed",
          "Plants and groundwork protected",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Specialised Cleaning",
        desc: "Using the correct pressure, cleaning agents and technique for your specific brickwork, we clean the entire surface methodically to achieve an even, thorough result.",
        bullets: [
          "Pressure calibrated per brick type",
          "Full surface cleaned evenly",
          "Mortar joints carefully treated",
          "Stubborn areas re-treated",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Protective Treatment",
        desc: "We apply a water-repellent sealant to protect your clean brickwork from future staining, moisture ingress and biological regrowth.",
        bullets: [
          "Water-repellent sealant applied",
          "Anti-stain protection included",
          "Before & after photos provided",
          "Satisfaction guaranteed",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Brick Cleaning Projects",
    subtext:
      "See the finished results our professional brick cleaning delivers.",
    images: [
      { src: "/2.webp", alt: "Brick cleaning before and after" },
      {
        src: "/brick-cleaning2.webp",
        alt: "Efflorescence removed from brickwork",
      },
      { src: "/brick-cleaning3.webp", alt: "Soft wash on Victorian brickwork" },
      {
        src: "/brick-cleaning4.webp",
        alt: "Commercial brick exterior restored",
      },
      { src: "/brick-cleaning5.webp", alt: "Staining removed from red brick" },
      {
        src: "/brick-cleaning6.webp",
        alt: "Brick sealed and protected after cleaning",
      },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about brick cleaning.",
    items: [
      {
        q: "How often should I have my brickwork cleaned?",
        a: "Most brick properties benefit from professional cleaning every 3–5 years. Properties near busy roads, industrial areas, or with heavy moss growth may need more frequent attention.",
      },
      {
        q: "Is brick cleaning safe for my mortar and brick surfaces?",
        a: "Yes — when done correctly. We test our approach on a small area first and use products and pressures that are appropriate for your specific brick type, including soft historic bricks that cannot tolerate high pressure.",
      },
      {
        q: "What is efflorescence and how do you fix it?",
        a: "Efflorescence is the white powdery deposit that forms on brickwork as soluble salts migrate to the surface. We use specialist treatments to remove existing efflorescence and can apply water-repellent sealants to prevent recurrence.",
      },
      {
        q: "Can you remove graffiti from brick surfaces?",
        a: "Yes. We use specialist graffiti removal products formulated for brickwork that lift paint without damaging the brick face or mortar joints, even on older or more delicate brickwork.",
      },
      {
        q: "Are the chemicals you use safe for my plants and pets?",
        a: "All our cleaning products are fully biodegradable and safe once dry. We take precautions to protect plants and gardens during application and always rinse thoroughly after treatment.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 9. CLADDING CLEANING
// ─────────────────────────────────────────────────────────────────
export const claddingCleaningData: ServiceData = {
  cta: {
    badge: "Cladding Specialists",
    headingLines: ["Your Cladding", "Deserves Better", "Than This."],
    body: "Algae and pollution degrade cladding faster than you think. Our specialist soft-wash system restores it — book in 60 seconds.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Cladding Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Cladding",
    line3: "Cleaning",
    subtext:
      "Restore and protect your building's exterior with our expert cladding cleaning solutions.",
    bgImage: "/cladding.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Cladding Cleaning is Essential",
    paragraphs: [
      "Your building's cladding is the first line of defence against the elements. Over time, cladding accumulates dirt, pollution, algae, moss, and particles that can undermine its integrity and degrade its appearance. Untreated biological growth can accelerate corrosion on metal panels and compromise UV coatings on UPVC and composite surfaces.",
      "At Al Grey's Cleaning Services, we specialise in professional cladding cleaning using cleaning methods designed specifically for each material type — without damaging the surface, protective coatings or sealants. Our team has extensive experience with UPVC, composite, metal and rendered cladding systems.",
      "We understand that clean cladding is more than just about appearance — it's essential for maintaining your building's weatherproofing ability, structural protection and market value while enhancing your property's visual appeal.",
    ],
    image: "/cladding-cleaning.webp",
    imageAlt: "Cladding cleaning in progress",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Cladding Cleaning Services",
    subtext: "Comprehensive solutions for all your cladding cleaning needs.",
    items: [
      {
        icon: (
          <CI d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        ),
        title: "UPVC Cladding Cleaning",
        desc: "Specialised cleaning for UPVC cladding panels to remove dirt, grime, UV discolouration and biological growth while preserving the surface finish and protective coating.",
      },
      {
        icon: (
          <CI d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75" />
        ),
        title: "Composite Panel Cleaning",
        desc: "Professional cleaning for composite cladding panels to maintain their structural integrity and restore their appearance using appropriate surface-safe techniques.",
      },
      {
        icon: (
          <CI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        ),
        title: "Metal Cladding Cleaning",
        desc: "Expert cleaning for metal cladding panels to remove corrosion marks, oxidation, and biological build-up using methods that protect the surface coating.",
      },
      {
        icon: (
          <CI d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        ),
        title: "Rendered Surface Cleaning",
        desc: "Specialist cleaning for rendered cladding systems to remove algae, moss, dirt and staining using low-pressure soft-wash methods that protect the render finish.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Cladding Cleaning Process",
    subtext: "A systematic approach to building exterior maintenance.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Initial Assessment",
        desc: "We assess your cladding type, condition and soiling levels to determine the right cleaning method and products before any work begins.",
        bullets: [
          "Cladding type and coating checked",
          "Contamination levels assessed",
          "Any damage or repairs noted",
          "Transparent quote provided",
        ],
      },
      {
        icon: (
          <PI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63" />
        ),
        title: "Surface Preparation",
        desc: "Glazing, frames and surrounding areas are protected before pre-treatment chemicals are applied to loosen heavy soiling and biological growth.",
        bullets: [
          "Windows and doors masked",
          "Surrounding areas protected",
          "Pre-treatment biocide applied",
          "Dwell time observed",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Specialised Cleaning",
        desc: "Using material-specific cleaning solutions and appropriate pressure, we clean the full cladding facade for a uniform, streak-free finish.",
        bullets: [
          "Material-safe solutions used",
          "Low-pressure soft wash applied",
          "Full facade cleaned evenly",
          "Stubborn areas re-treated",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Protective Treatment",
        desc: "We apply a long-lasting protective coating to shield your cladding from rapid re-soiling, UV damage and biological regrowth.",
        bullets: [
          "Protective coating applied",
          "Biological growth inhibitor used",
          "Before & after photos provided",
          "Full satisfaction guaranteed",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Cladding Cleaning Projects",
    subtext: "See our professionally completed cladding cleaning projects.",
    images: [
      {
        src: "/cladding-cleaning1.webp",
        alt: "UPVC cladding cleaned and restored",
      },
      {
        src: "/cladding-cleaning2.webp",
        alt: "Composite panel cladding after cleaning",
      },
      {
        src: "/cladding-cleaning3.webp",
        alt: "Metal cladding before and after",
      },
      {
        src: "/cladding-cleaning4.webp",
        alt: "Commercial building cladding cleaned",
      },
      {
        src: "/cladding-cleaning5.webp",
        alt: "Cladding algae removal completed",
      },
      { src: "/cladding-cleaning6.webp", alt: "Rendered cladding restored" },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about cladding cleaning.",
    items: [
      {
        q: "How often should I have my cladding cleaned?",
        a: "Most cladding systems benefit from professional cleaning every 2–3 years. Buildings in urban environments or those exposed to high moisture levels may require more frequent attention.",
      },
      {
        q: "Is cladding cleaning safe for all building materials?",
        a: "We use cleaning methods and products specifically suited to each cladding type. UPVC, composite, metal and rendered cladding all require different pressures and chemicals to clean safely without causing damage.",
      },
      {
        q: "Can cladding cleaning cause damage to the surface?",
        a: "Incorrect cleaning — particularly high-pressure washing — can damage coatings, push moisture behind panels, and void manufacturers' warranties. Our low-pressure soft-wash approach is specifically designed to avoid these risks.",
      },
      {
        q: "Do you offer guarantees on your cladding cleaning work?",
        a: "Yes — we offer a full satisfaction guarantee. Where a protective coating is applied, we can offer additional guarantees against biological regrowth for up to 5 years.",
      },
      {
        q: "Can cladding cleaning improve my property's value?",
        a: "Absolutely. A clean, well-maintained building exterior makes a significant impression on visitors, tenants and buyers. Professional cladding cleaning is one of the most cost-effective ways to improve a building's kerb appeal.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 10. DOWNPIPE CLEANING
// ─────────────────────────────────────────────────────────────────
export const downpipeCleaningData: ServiceData = {
  cta: {
    badge: "Emergency Call-Outs",
    headingLines: ["Blocked Downpipes?", "Don't Wait For", "Water Damage."],
    body: "A blocked downpipe can cause serious damage to walls and foundations. 60 seconds to book — we'll clear it fast.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Downpipe Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Downpipe",
    line3: "Cleaning",
    subtext:
      "Prevent blockages and protect your property with our expert downpipe clearing and maintenance solutions.",
    bgImage: "/downpipe.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Downpipe Cleaning is Essential",
    paragraphs: [
      "Downpipes play a crucial role in directing rainwater away from your property. When they become blocked with leaves, debris, or sediment, they can overflow and cause serious water damage to your walls, foundations and surrounding drainage systems.",
      "At Al Grey's Cleaning Services, we specialise in professional downpipe cleaning using high-pressure jetting equipment that clears even the most stubborn blockages from inside the pipe. Our CCTV inspection service also allows us to identify any cracking, collapse or root ingress that might not be visible from outside.",
      "Regular downpipe maintenance is essential for protecting your property, particularly during autumn when leaf fall dramatically increases blockage risk. Our comprehensive downpipe cleaning service ensures your drainage system continues to protect your home effectively all year round.",
    ],
    image: "/gutter-6.webp",
    imageAlt: "Downpipe cleaning in progress",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Downpipe Cleaning Services",
    subtext: "Comprehensive solutions for all your downpipe maintenance needs.",
    items: [
      {
        icon: (
          <CI d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
        ),
        title: "Downpipe Unblocking",
        desc: "Complete clearance of blocked downpipes using high-pressure jetting and specialist tools, restoring full flow and protecting your property from overflow damage.",
      },
      {
        icon: (
          <CI d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        ),
        title: "Leaf & Debris Removal",
        desc: "Thorough removal of leaves, twigs, moss and organic matter from inside downpipes and outlets to prevent blockages and maintain full water flow.",
      },
      {
        icon: (
          <CI d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        ),
        title: "CCTV Inspection",
        desc: "Advanced CCTV downpipe inspection to identify internal blockages, cracks, pipe collapse or root ingress that cannot be detected from the outside.",
      },
      {
        icon: (
          <CI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        ),
        title: "Repair & Maintenance",
        desc: "Professional repair and preventative maintenance to address leaking joints, cracked sections and damaged fittings to keep your downpipes fully functional.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Downpipe Cleaning Process",
    subtext:
      "A systematic approach to ensure clear and functioning drainage throughout your system.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Initial Assessment",
        desc: "We inspect all downpipes and drainage outlets, identify blockage locations and any structural issues, and provide a clear quote before work begins.",
        bullets: [
          "All pipes visually inspected",
          "Blockage location identified",
          "Pipe condition assessed",
          "Clear quote provided upfront",
        ],
      },
      {
        icon: (
          <PI d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        ),
        title: "Debris Removal",
        desc: "We manually remove accessible blockage material from the top of downpipes and gutters before applying high-pressure jetting to clear the full length.",
        bullets: [
          "Accessible debris manually cleared",
          "Entry points cleaned first",
          "All waste bagged and removed",
          "No mess left behind",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "High-Pressure Jetting",
        desc: "Specialist high-pressure water jetting clears the full length of each downpipe from top to bottom, flushing all debris into the drainage system.",
        bullets: [
          "Full-length pipe jetting",
          "All joints and bends cleared",
          "Flow confirmed at ground level",
          "Repeat jetting if required",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Final Inspection & Report",
        desc: "We run a final flow test, complete a written condition report and advise on any repairs or preventative measures identified during the clean.",
        bullets: [
          "Full flow test completed",
          "Written condition report issued",
          "Repair recommendations provided",
          "Before & after photos shared",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Downpipe Cleaning Projects",
    subtext: "See our professionally completed downpipe cleaning deliveries.",
    images: [
      {
        src: "/downpipe-cleaning1.webp",
        alt: "Downpipe unblocking in progress",
      },
      { src: "/downpipe-cleaning2.webp", alt: "Blocked downpipe cleared" },
      { src: "/downpipe-cleaning3.webp", alt: "CCTV downpipe inspection" },
      {
        src: "/downpipe-cleaning4.webp",
        alt: "Downpipe cleaning on detached house",
      },
      {
        src: "/downpipe-cleaning5.webp",
        alt: "High-pressure jetting of downpipe",
      },
      {
        src: "/downpipe-cleaning6.webp",
        alt: "Clean drainage system after service",
      },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about downpipe cleaning.",
    items: [
      {
        q: "How often should I have my downpipes cleaned?",
        a: "We recommend having downpipes checked and cleaned at least once a year, ideally in late autumn after leaf fall. Properties surrounded by trees may need twice-yearly cleaning.",
      },
      {
        q: "What are the signs my downpipes need cleaning?",
        a: "Common signs include overflowing gutters during rainfall, visible water staining down walls, dampness or mould inside the property, water pooling at the base of walls, and gurgling sounds from pipes.",
      },
      {
        q: "Can blocked downpipes cause serious damage?",
        a: "Yes. Blocked downpipes cause water to overflow onto walls and foundations, leading to damp penetration, mould, rot, and potentially serious structural damage. Early treatment is far less expensive than remediation.",
      },
      {
        q: "Do you offer emergency downpipe cleaning services?",
        a: "Yes — we offer same-day emergency call-outs for urgent blockages. Contact us and we will do our best to attend on the same day to resolve the issue.",
      },
      {
        q: "Are your cleaning methods safe for all types of downpipe?",
        a: "Yes. We adjust our jetting pressure and technique for plastic UPVC, cast iron and older clay downpipes. We take particular care with older cast iron systems to avoid joint damage.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 11. GRAFFITI REMOVAL
// ─────────────────────────────────────────────────────────────────
export const graffitiRemovalData: ServiceData = {
  cta: {
    badge: "Rapid Response",
    headingLines: ["Graffiti Today?", "Gone By", "Tomorrow."],
    body: "Fast, professional removal before it attracts more vandalism. Takes 60 seconds to book — we respond within 24 hours.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Graffiti Removal",
    eyebrow: "Fast & Effective",
    line1: "Professional",
    line2: "Graffiti",
    line3: "Removal",
    subtext:
      "Effective graffiti removal and prevention solutions for commercial and residential properties.",
    bgImage: "/graffiti.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Professional Graffiti Removal is Essential",
    paragraphs: [
      "Graffiti vandalism can significantly impact your property's appearance and value. Untreated graffiti attracts further vandalism and creates an impression of neglect. Timely, professional removal is essential to restoring your property's appearance quickly and effectively, and our methods are proven to minimise any secondary surface damage during the removal process.",
      "At Al Grey's Cleaning Services, we have extensive experience dealing with all types of graffiti — from spray paint and permanent markers to stickers and painted murals — across all surface types. Each surface requires a different approach and we always test our products to ensure effective removal without damage to the underlying surface.",
      "We understand that rapid response is key to minimising cost and spread. Our emergency graffiti removal services are designed to respond quickly and efficiently to protect your property's appearance and deter further incidents.",
    ],
    image: "/graffiti-removal-hero-mobile.webp",
    imageAlt: "Graffiti removal in progress",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Graffiti Cleaning Services",
    subtext:
      "Comprehensive solutions for all your graffiti removal and prevention needs.",
    items: [
      {
        icon: (
          <CI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Spray Paint Removal",
        desc: "Effective removal of spray paint graffiti from various surfaces using specialist solvents and techniques that lift paint without damaging the underlying material.",
      },
      {
        icon: (
          <CI d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
        ),
        title: "Paint & Marker Removal",
        desc: "Complete removal of painted murals, permanent markers and other difficult graffiti materials from commercial surfaces, masonry, and specialist substrates.",
      },
      {
        icon: (
          <CI d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        ),
        title: "Anti-Graffiti Coatings",
        desc: "Protective anti-graffiti coatings that act as a sacrificial barrier against future vandalism, allowing future graffiti to be removed quickly and with minimal effort.",
      },
      {
        icon: (
          <CI d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        ),
        title: "Commercial Property Services",
        desc: "Specialist graffiti removal services for commercial buildings, retail units and business premises, with rapid response to minimise the impact on your operation.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Graffiti Removal Process",
    subtext:
      "A professional approach to graffiti removal and surface protection.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Assessment & Testing",
        desc: "We assess the graffiti type, surface material and any existing coatings before selecting the right removal approach and testing on a small inconspicuous area.",
        bullets: [
          "Graffiti type and age assessed",
          "Surface material identified",
          "Removal method selected",
          "Test patch completed first",
        ],
      },
      {
        icon: (
          <PI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63" />
        ),
        title: "Surface Preparation",
        desc: "Adjacent surfaces are protected and specialist graffiti remover is applied and left to dwell, penetrating the paint layers before removal begins.",
        bullets: [
          "Adjacent areas masked",
          "Specialist solvent applied",
          "Dwell time observed",
          "Area secured if needed",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Specialised Cleaning",
        desc: "Graffiti is removed using the appropriate technique for each surface — from solvent wiping on smooth surfaces to low-pressure washing on masonry.",
        bullets: [
          "Multiple removal passes if needed",
          "Correct technique per surface",
          "Stubborn residue retreated",
          "Surface rinsed thoroughly",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Protection & Prevention",
        desc: "We apply an anti-graffiti coating to the treated surface, creating a sacrificial barrier that dramatically reduces the effort required to remove any future vandalism.",
        bullets: [
          "Anti-graffiti coating applied",
          "Ongoing protection provided",
          "Before & after photos provided",
          "Maintenance plans available",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Graffiti Removal Projects",
    subtext:
      "See the transformation our professional graffiti cleaning services deliver.",
    images: [
      {
        src: "/grafitti-removal1.webp",
        alt: "Spray paint graffiti removed from wall",
      },
      {
        src: "/grafitti-removal2.webp",
        alt: "Graffiti removed from commercial building",
      },
      {
        src: "/grafitti-removal3.webp",
        alt: "Brick wall graffiti removal completed",
      },
      {
        src: "/grafitti-removal4.webp",
        alt: "Graffiti before and after removal",
      },
      { src: "/grafitti-removal5.webp", alt: "Paint removal from masonry" },
      {
        src: "/grafitti-removal6.webp",
        alt: "Anti-graffiti coating applied after removal",
      },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about graffiti removal.",
    items: [
      {
        q: "How quickly can you remove graffiti after it appears?",
        a: "We offer rapid response services and aim to attend within 24–48 hours of your call. Same-day emergency appointments are available for urgent commercial situations. Fresh graffiti is always easier to remove than aged paint.",
      },
      {
        q: "Can you remove graffiti without damaging the underlying surface?",
        a: "Yes — in most cases. We always test our approach on a small area first and use products specifically formulated for each surface type. Our goal is full removal with zero impact on the underlying material.",
      },
      {
        q: "What types of surfaces can you clean graffiti from?",
        a: "We remove graffiti from brick, stone, render, concrete, UPVC, metal, glass, timber and painted surfaces. Different materials require different removal techniques and products, which is why professional expertise matters.",
      },
      {
        q: "Do you offer anti-graffiti protective coatings?",
        a: "Yes. We apply permanent and sacrificial anti-graffiti coatings to surfaces at high risk of repeat vandalism. These significantly reduce future removal time and cost, and are particularly recommended for commercial properties.",
      },
      {
        q: "Can you remove sticker graffiti from a glass or polished surface?",
        a: "Yes. Sticker, vinyl and adhesive residue can be removed from glass and polished surfaces using specialist adhesive removers and careful application techniques that leave no scratches or residue.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 12. COMMERCIAL GUTTER CLEANING
// ─────────────────────────────────────────────────────────────────
export const commercialGutterData: ServiceData = {
  cta: {
    badge: "Commercial Specialists",
    headingLines: ["Protect Your", "Commercial", "Property."],
    body: "Blocked gutters on commercial buildings cause serious damage and liability. 60 seconds to book — minimal disruption guaranteed.",
    pills: ["No hidden costs", "Free site survey", "Fully insured"],
  },
  hero: {
    serviceName: "Commercial Gutter Cleaning",
    eyebrow: "Commercial Property Specialists",
    line1: "Commercial",
    line2: "Gutter",
    line3: "Cleaning",
    subtext:
      "Protect your commercial property with our expert gutter cleaning and maintenance solutions.",
    bgImage: "/commercial.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Commercial Gutter Cleaning is Essential",
    paragraphs: [
      "Commercial gutters play a critical role in protecting your property from water damage, foundation problems, and exterior deterioration. It's not just about preventing water damage — it's also about protecting your investment, maintaining a safe environment for staff and visitors, and preserving your business's professional image.",
      "At Al Grey's Cleaning Services, we have extensive experience dealing with the unique challenges of commercial gutter cleaning across all building types — from small business premises to large industrial facilities. Our team carries full commercial public liability insurance and is experienced in working safely at height on larger commercial structures.",
      "We understand that commercial properties often require minimal disruption during cleaning. Our services are designed to work around your business hours, meet health and safety requirements, and ensure minimal impact on your day-to-day operations.",
    ],
    image: "/4.webp",
    imageAlt: "Commercial gutter cleaning",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Commercial Gutter Cleaning Services",
    subtext:
      "Comprehensive solutions for all your commercial gutter maintenance needs.",
    items: [
      {
        icon: (
          <CI d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        ),
        title: "Office Building Gutters",
        desc: "Professional gutter cleaning for office complexes and commercial towers without business disruption, including full inspection reports and maintenance schedules.",
      },
      {
        icon: (
          <CI d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        ),
        title: "Retail Center Maintenance",
        desc: "Complete gutter maintenance for shopping centres and retail complexes, with flexible scheduling to avoid peak business hours and maintain a safe, attractive environment.",
      },
      {
        icon: (
          <CI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        ),
        title: "Industrial Facility Gutters",
        desc: "Heavy-duty gutter cleaning for warehouses, factories, and large industrial buildings using specialist access equipment and high-capacity clearing systems.",
      },
      {
        icon: (
          <CI d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        ),
        title: "Multi-Unit Properties",
        desc: "Gutter maintenance for apartment blocks, housing developments and multi-unit residential properties with comprehensive service plans to cover entire sites efficiently.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Commercial Gutter Cleaning Process",
    subtext:
      "A professional approach to ensure thorough cleaning and protection for your commercial property.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Site Assessment & Planning",
        desc: "We carry out a full site survey, identify access requirements, agree health & safety plans, and schedule work around your business operations.",
        bullets: [
          "Full site survey completed",
          "Access equipment planned",
          "H&S method statement provided",
          "Work schedule agreed upfront",
        ],
      },
      {
        icon: (
          <PI d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        ),
        title: "Safety Setup & Preparation",
        desc: "All necessary access equipment, barriers and safety controls are put in place before cleaning begins, in full compliance with working at height regulations.",
        bullets: [
          "Access equipment erected",
          "Safety barriers installed",
          "Staff and public protected",
          "Risk assessment completed",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Comprehensive Cleaning",
        desc: "All gutters, downpipes and outlets are systematically cleared of debris and flushed through to ensure full drainage capacity is restored across the site.",
        bullets: [
          "All gutters hand-cleared",
          "Downpipes fully flushed",
          "All waste removed from site",
          "Flow tested at each outlet",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Inspection & Reporting",
        desc: "A comprehensive post-clean report is provided with photos, gutter condition notes, and recommended maintenance intervals to protect your property going forward.",
        bullets: [
          "Full condition report issued",
          "Before & after photos provided",
          "Repair recommendations noted",
          "Maintenance schedule proposed",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Commercial Gutter Cleaning Projects",
    subtext: "See our professional commercial gutter cleaning in action.",
    images: [
      {
        src: "/commercial-gutter-cleaning1.webp",
        alt: "Office block gutter cleaning",
      },
      {
        src: "/commercial-gutter-cleaning2.webp",
        alt: "Industrial unit gutter cleared",
      },
      {
        src: "/commercial-gutter-cleaning3.webp",
        alt: "Retail centre gutter maintenance",
      },
      {
        src: "/commercial-gutter-cleaning4.webp",
        alt: "Apartment block gutters cleaned",
      },
      {
        src: "/commercial-gutter-cleaning5.webp",
        alt: "Commercial gutter inspection",
      },
      {
        src: "/commercial-gutter-cleaning6.webp",
        alt: "Large commercial site gutter cleaning",
      },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about commercial gutter cleaning.",
    items: [
      {
        q: "How often should commercial gutters be cleaned?",
        a: "We recommend a minimum of twice yearly for most commercial properties — once in spring and once in autumn. High-risk properties such as those near trees or in areas of heavy rainfall should be inspected quarterly.",
      },
      {
        q: "Do you work outside business hours to avoid disruption?",
        a: "Yes. We offer early morning, evening and weekend appointments to minimise disruption to your operations. For retail environments or occupied buildings, we will agree a schedule that works around your business.",
      },
      {
        q: "Can clogged commercial gutters cause structural damage?",
        a: "Yes. Blocked gutters on commercial properties can cause significant water ingress, roof damage, foundation problems and external wall degradation. The cost of repairs far exceeds the cost of a regular maintenance programme.",
      },
      {
        q: "Can you provide maintenance contracts for commercial properties?",
        a: "Yes — we offer annual and bi-annual maintenance contracts for commercial clients, providing scheduled visits, comprehensive reporting and priority call-out rates. Contact us to discuss a tailored package.",
      },
      {
        q: "What equipment do you use for commercial gutter cleaning?",
        a: "We use a range of specialist equipment depending on building height and access, including gutter vacuum systems, high-pressure jetting, and safe access platforms. All operatives hold working-at-height certifications.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────
// 13. ROOF CLEANING
// ─────────────────────────────────────────────────────────────────
export const roofCleaningData: ServiceData = {
  cta: {
    badge: "Roof Care Specialists",
    headingLines: ["Moss Destroying", "Your Roof?", "Act Today."],
    body: "Moss and algae shorten your roof's lifespan and cause costly damage. Safe soft-wash cleaning — booked in 60 seconds.",
    pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
  },
  hero: {
    serviceName: "Roof Cleaning",
    eyebrow: "Trusted Local Experts",
    line1: "Professional",
    line2: "Roof",
    line3: "Cleaning",
    subtext:
      "Restore and protect your roof with our expert cleaning and maintenance solutions.",
    bgImage: "/roof-clean.webp",
  },
  intro: {
    eyebrow: "Why It Matters",
    heading: "Why Roof Cleaning is Essential",
    paragraphs: [
      "Your roof is one of the most critical components of your property, protecting it from the elements year-round. Over time, roofs accumulate moss, algae, lichen and debris that can cause serious long-term damage. Regular roof cleaning not only enhances your property's appearance but also prevents costly damage and extends your roof's lifespan.",
      "At Al Grey's Cleaning Services, we specialise in professional roof cleaning using safe, effective methods that remove harmful biological growth without causing damage to your roofing materials. Our experienced team has over 15 years of experience working with all types of roofing, from traditional tiles and slates to modern composite materials.",
      "We understand that a clean roof is more than just aesthetics — it's essential for maintaining your property's structural integrity and protecting its long-term value. Our comprehensive roof cleaning services are designed to protect your investment while enhancing your property's curb appeal.",
    ],
    image: "/Roof-Cleaning-2.webp",
    imageAlt: "Professional roof cleaning in progress",
  },
  cards: {
    eyebrow: "What We Offer",
    heading: "Our Roof Cleaning Services",
    subtext: "Comprehensive solutions for all your roof maintenance needs.",
    items: [
      {
        icon: (
          <CI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Soft Wash Cleaning",
        desc: "Gentle low-pressure cleaning that safely removes moss, algae, and lichens without damaging roofing materials — safe for all roof types.",
      },
      {
        icon: (
          <CI
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            d2="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        ),
        title: "Moss & Algae Removal",
        desc: "Complete removal of moss and algae to prevent damage and extend your roof's lifespan, including algae deep treatment and preventative care.",
      },
      {
        icon: (
          <CI d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        ),
        title: "Tile & Slate Cleaning",
        desc: "Specialised cleaning for tiles and slates, restoring them to their original condition and appearance while preserving their structural integrity.",
      },
      {
        icon: (
          <CI d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        ),
        title: "Chemical Treatments",
        desc: "Long-lasting chemical treatments applied to your roof that guard against biological regrowth and protect your investment — environmentally considerate formulations.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Our Roof Cleaning Process",
    subtext:
      "A systematic approach to ensure thorough cleaning and protection for your roof.",
    steps: [
      {
        icon: (
          <PI d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        ),
        title: "Initial Assessment",
        desc: "We carry out a thorough inspection of your roof, identifying the roofing material, extent of moss and algae growth, and any areas of damage that need special attention.",
        bullets: [
          "Roof type and condition assessed",
          "Moss and algae growth mapped",
          "Damage or vulnerable areas noted",
          "Transparent quote provided upfront",
        ],
      },
      {
        icon: (
          <PI d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        ),
        title: "Surface Preparation",
        desc: "We protect gutters, windows and surrounding areas before applying specialist pre-treatment to loosen heavy moss and biological growth ready for removal.",
        bullets: [
          "Gutters and windows protected",
          "Gardens and plants covered",
          "Pre-treatment biocide applied",
          "Treatment dwell time observed",
        ],
      },
      {
        icon: (
          <PI d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        ),
        title: "Specialised Cleaning",
        desc: "Using our soft-wash system at calibrated low pressure, we systematically clean the entire roof surface, removing all moss, algae and biological growth without risk of tile damage.",
        bullets: [
          "Low-pressure soft wash applied",
          "Full roof surface cleaned evenly",
          "Ridge tiles and verges treated",
          "All debris cleared from gutters",
        ],
      },
      {
        icon: (
          <PI d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        ),
        title: "Protective Treatment",
        desc: "We apply a long-lasting biocidal protective treatment to seal the roof surface, inhibit biological regrowth, and extend the life of your clean significantly.",
        bullets: [
          "Biocidal protective coat applied",
          "Moss and algae inhibitor included",
          "Before & after photos provided",
          "Full satisfaction guaranteed",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Our Work",
    heading: "Our Roof Cleaning Projects",
    subtext: "See the transformation our professional roof cleaning delivers.",
    images: [
      { src: "/roof-cleaning1.webp", alt: "Roof cleaning before and after" },
      { src: "/roof-cleaning7.webp", alt: "Moss removal from tiled roof" },
      { src: "/roof-cleaning3.webp", alt: "Slate roof professionally cleaned" },
      {
        src: "/roof-cleaning4.webp",
        alt: "Algae removal on detached house roof",
      },
      { src: "/roof-cleaning5.webp", alt: "Roof soft wash treatment applied" },
      {
        src: "/roof-cleaning6.webp",
        alt: "Roof restored after cleaning service",
      },
    ],
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Frequently Asked Questions",
    subtext: "Common questions about roof cleaning.",
    items: [
      {
        q: "How often should I have my roof cleaned?",
        a: "Most roofs benefit from a professional clean every 2–4 years. Properties in wetter climates, those near trees, or with north-facing slopes tend to accumulate moss and algae faster and may require more frequent attention.",
      },
      {
        q: "Is roof cleaning safe for my roofing materials?",
        a: "Our soft-wash approach is specifically designed to be safe for all standard roofing materials including concrete tiles, clay tiles, slate and felt. Unlike high-pressure washing, we use low pressure and biodegradable treatments that clean thoroughly without cracking or dislodging tiles.",
      },
      {
        q: "Can moss on my roof cause damage?",
        a: "Yes. Moss retains moisture against the roof surface, which accelerates the deterioration of tile coatings and mortar. As moss roots penetrate joints and ridge pointing, it can cause water ingress, damp, and costly structural damage if left untreated.",
      },
      {
        q: "Do you offer guarantees on your roof cleaning work?",
        a: "We offer a full satisfaction guarantee on all cleaning. When a protective biocidal treatment is applied, we can offer guarantees of up to 5 years against biological regrowth.",
      },
      {
        q: "Are the chemicals you use safe for my plants and pets?",
        a: "Yes. All our cleaning products are fully biodegradable and safe for plants, pets, and people once dry. We take precautions to protect gardens and surrounding areas during application and always rinse thoroughly after treatment.",
      },
      {
        q: "Can roof cleaning improve my home's energy efficiency?",
        a: "Yes. Moss and algae growth retains moisture and adds insulating mass to your roof covering, which can affect thermal performance. A clean, dry roof surface performs better and can contribute to improved energy efficiency over time.",
      },
    ],
  },
};

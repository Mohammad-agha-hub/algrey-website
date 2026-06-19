import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";
import FAQSection from "@/components/Faq";
import CTASection from "@/components/CTA";
export const metadata = {
  title: "About Us | Al Grey's Cleaning Services",
  description:
    "Learn about Al Grey's Cleaning Services — trusted gutter cleaning and property maintenance specialists in Birmingham and the Midlands since 2020. Meet our team and discover our values.",
  keywords: [
    "about Al Grey's Cleaning Services",
    "gutter cleaning Birmingham",
    "property maintenance Midlands",
    "cleaning company Birmingham",
    "Al Grey founder",
  ],
  openGraph: {
    title: "About Us | Al Grey's Cleaning Services",
    description:
      "Trusted gutter cleaning and property maintenance across Birmingham and the Midlands since 2020. Discover our story, mission, and the team behind the work.",
    url: "https://www.algreyscleaningservices.co.uk/about-us",
    siteName: "Al Grey's Cleaning Services",
    images: [
      {
        url: "/gutter-6.webp",
        width: 1200,
        height: 630,
        alt: "Al Grey's Cleaning Services team",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Al Grey's Cleaning Services",
    description:
      "Trusted gutter cleaning and property maintenance across Birmingham and the Midlands since 2020.",
    images: ["/gutter-6.webp"],
  },
  alternates: {
    canonical: "https://www.algreyscleaningservices.co.uk/about-us",
  },
};

/* ═══════════════════════════════════════════════════════════════════
   DESIGN TOKENS — matched to the home page's BeforeAfterSection:
   - Fonts: Inter Tight (display/headings) + Inter (body)
   - Navy:  #0d1b3e   Blue accent: #2563eb
   - Body text: slate-500 (#64748b)   Muted/secondary: slate-400 (#94a3b8)
   - Light section bg: #f8fafc (slate-50)   Card border: #e2e8f0 (slate-200)
═══════════════════════════════════════════════════════════════════ */
function AboutStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

      .abt-display { font-family: 'Inter Tight', sans-serif; }
      .abt-body    { font-family: 'Inter', sans-serif; }

      /* ── Animations ── */
      @keyframes abt-fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes abt-fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      .abt-anim-1 { animation: abt-fadeUp .65s ease both; }
      .abt-anim-2 { animation: abt-fadeUp .65s .10s ease both; }
      .abt-anim-3 { animation: abt-fadeUp .65s .22s ease both; }
      .abt-anim-4 { animation: abt-fadeUp .65s .34s ease both; }
      .abt-anim-5 { animation: abt-fadeIn  .8s .48s ease both; }
      @media (prefers-reduced-motion: reduce) {
        .abt-anim-1, .abt-anim-2, .abt-anim-3, .abt-anim-4, .abt-anim-5 {
          animation: none; opacity: 1; transform: none;
        }
      }

      /* ── Eyebrow (shared dot-bullet style used across the home page) ── */
      .abt-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
      }
      .abt-eyebrow .dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      /* ── CTA pill button (matches ApproachSection's .ap2-cta) ── */
      .abt-cta {
        display: inline-flex;
        align-items: center;
        gap: 0;
        padding: 7px 7px 7px 26px;
        border-radius: 100px;
        background: #2563eb;
        color: #ffffff;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        text-decoration: none;
        transition: background 0.22s ease, gap 0.2s ease,
                    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        flex-shrink: 0;
      }
      .abt-cta:hover { background: #1d4ed8; gap: 6px; transform: scale(1.03); }
      .abt-cta:active { transform: scale(0.96); }
      .abt-cta-circle {
        width: 36px; height: 36px;
        border-radius: 50%;
        background: #ffffff;
        color: #0d1b3e;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 16px;
        flex-shrink: 0;
        transition: background 0.22s, color 0.22s;
      }
      .abt-cta:hover .abt-cta-circle { background: #dbeafe; }

      /* Outline variant — for use as a secondary action over the dark hero photo */
      .abt-cta-outline {
        background: transparent;
        border: 1.5px solid rgba(255,255,255,0.55);
        color: #ffffff;
      }
      .abt-cta-outline:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
      .abt-cta-outline .abt-cta-circle { background: rgba(255,255,255,0.15); color: #fff; }
      .abt-cta-outline:hover .abt-cta-circle { background: rgba(255,255,255,0.25); }

      /* ── Light cards (white bg sections, e.g. Core Values) ── */
      .abt-card-light {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 32px 28px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease;
      }
      .abt-card-light:hover {
        border-color: #2563eb;
        box-shadow: 0 16px 40px rgba(13,27,62,.1);
        transform: translateY(-4px);
      }
      .abt-card-icon-badge {
        width: 52px; height: 52px;
        border-radius: 14px;
        background: #eff4ff;
        color: #2563eb;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* ── Dark cards (navy bg sections, e.g. Mission & Vision) ── */
      .abt-card-dark {
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 18px;
        padding: 32px 28px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        transition: border-color .25s ease, background .25s ease, transform .25s ease;
      }
      .abt-card-dark:hover {
        border-color: #2563eb;
        background: rgba(255,255,255,0.08);
        transform: translateY(-4px);
      }
      .abt-card-icon-badge-dark {
        width: 52px; height: 52px;
        border-radius: 14px;
        background: #2563eb;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* ── Why-choose-us cards (matches ApproachSection's .ap2-card system) ── */
      .abt-why-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        align-items: start;
      }
      .abt-why-card {
        background: #ffffff;
        border-radius: 20px;
        border: 1px solid #e4e9f4;
        padding: 36px 32px 40px;
        box-shadow: 0 2px 12px rgba(8,26,61,0.06);
        transition: box-shadow .26s ease, border-color .26s ease,
                    transform .3s cubic-bezier(0.22, 1, 0.36, 1);
        position: relative;
        overflow: hidden;
      }
      .abt-why-card:hover {
        box-shadow: 0 16px 40px rgba(8,26,61,.13);
        border-color: #bfdbfe;
        transform: translateY(-8px);
      }
      /* staggered offset, repeating every 3 cards like the Approach section */
      .abt-why-card:nth-child(3n+2) { margin-top: 48px; }
      .abt-why-card:nth-child(3n+3) { margin-top: 96px; }

      .abt-why-icon {
        width: 54px; height: 54px;
        border-radius: 14px;
        background: #eff4ff;
        color: #2563eb;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 28px;
        transition: background .22s ease, color .22s ease,
                    transform .3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .abt-why-card:hover .abt-why-icon {
        background: #dbeafe;
        color: #1d4ed8;
        transform: rotate(-8deg) scale(1.08);
      }
      .abt-why-num {
        position: absolute;
        top: 28px; right: 28px;
        font-family: 'Inter Tight', sans-serif;
        font-size: 52px;
        font-weight: 800;
        color: #0d1b3e;
        opacity: 0.06;
        line-height: 1;
        letter-spacing: -2px;
        pointer-events: none;
        user-select: none;
      }
      .abt-why-title {
        font-family: 'Inter Tight', sans-serif;
        font-size: 22px;
        font-weight: 700;
        color: #0d1b3e;
        line-height: 1.2;
        letter-spacing: -0.4px;
        margin-bottom: 12px;
      }
      .abt-why-desc {
        font-size: 14px;
        color: #64748b;
        line-height: 1.65;
        margin-bottom: 28px;
      }
      .abt-why-divider { height: 1px; background: #e4e9f4; margin-bottom: 24px; }
      .abt-why-bullet { display: flex; align-items: flex-start; gap: 11px; margin-bottom: 11px; }
      .abt-why-bullet:last-child { margin-bottom: 0; }
      .abt-why-check {
        width: 20px; height: 20px;
        border-radius: 50%;
        background: #eff4ff;
        border: 1px solid #bfd0f7;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-top: 1px;
      }
      .abt-why-bullet-text { font-size: 13.5px; font-weight: 500; color: #374151; line-height: 1.5; }

      @media (max-width: 1023px) {
        .abt-why-grid { grid-template-columns: 1fr; gap: 16px; }
        .abt-why-card:nth-child(3n+2),
        .abt-why-card:nth-child(3n+3) { margin-top: 0; }
      }
      @media (min-width: 640px) and (max-width: 1023px) {
        .abt-why-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 639px) {
        .abt-why-card { padding: 28px 22px 30px; }
        .abt-why-num { font-size: 40px; top: 20px; right: 20px; }
      }
      @media (max-width: 420px) {
        .abt-why-card { padding: 24px 18px 26px; border-radius: 16px; }
        .abt-why-icon { width: 46px; height: 46px; margin-bottom: 22px; }
        .abt-why-title { font-size: 19px; }
        .abt-why-desc { font-size: 13.5px; }
        .abt-why-bullet-text { font-size: 13px; }
      }

      /* ── Team cards ── */
      .abt-team-card {
        background: #ffffff;
        border-radius: 18px;
        overflow: hidden;
        border: 1px solid #e2e8f0;
        transition: box-shadow .28s ease, transform .28s ease;
      }
      .abt-team-card:hover {
        box-shadow: 0 20px 48px rgba(13,27,62,.12);
        transform: translateY(-6px);
      }
      .abt-team-img {
        width: 100%;
        height: 340px;
        position: relative;
        overflow: hidden;
      }
      .abt-team-img img { transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }
      .abt-team-card:hover .abt-team-img img { transform: scale(1.05); }
      .abt-team-body { padding: 24px 26px 28px; }

      /* ── Intro image ── */
      .abt-intro-img {
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(13,27,62,.15);
        position: relative;
      }

      /* ── Reusable left-aligned section header (matches home page) ── */
      .abt-section-head {
        display: flex;
        flex-direction: column;
        align-items:start;
        gap: 32px;
        margin-bottom: 30px;
      }
      @media (min-width: 1024px) {
        .abt-section-head {
          flex-direction: row;
          justify-content: space-between;
        }
      }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="abt-body relative min-h-[70vh] flex flex-col">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gutter-6.webp"
          alt="Al Grey's Cleaning Services team"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/95 via-[#0d1b3e]/80 to-transparent" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/90 via-[#0d1b3e]/85 to-[#0d1b3e]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-34 pb-16 flex flex-col justify-end">
        {/* Eyebrow */}
        <p className="abt-anim-2 abt-eyebrow text-[#7da6f5] mb-4">
          <span className="dot" style={{ background: "#7da6f5" }} />
          Trusted Since 2020
        </p>

        {/* Headline */}
        <h1 className="abt-anim-3 abt-display text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] font-medium tracking-[-1.5px] mb-5 text-white">
          About <span className="text-[#5b8def]">Al Grey&apos;s</span>
          <br />
          Cleaning
        </h1>

        {/* Subtext */}
        <p className="abt-anim-4 text-[#cbd5e1] text-base leading-relaxed max-w-lg mb-8">
          Learn about our journey, values, and commitment to excellence in
          gutter cleaning and property maintenance across Birmingham and the
          Midlands.
        </p>

        {/* CTA */}
        <div className="abt-anim-4 flex flex-col sm:flex-row gap-3">
          <a href="/contact-us" className="abt-cta">
            Contact Us
            <span className="abt-cta-circle">
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </a>
          <a href="#story" style={{paddingRight:"1.5rem"}} className="abt-cta abt-cta-outline">
            Our Story
            
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 2 — OUR STORY  (text left + image right)
═══════════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section
      id="story"
      className="abt-body bg-white py-20 lg:py-28 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="abt-eyebrow text-[#2563eb] mb-4">
              <span className="dot" style={{ background: "#2563eb" }} />
              Cleaning Excellence Since 2020
            </p>
            <h2 className="abt-display text-[36px] sm:text-[44px] lg:text-[48px] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px] mb-6">
              A Simple Mission<br></br>Exceptional Results
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                Al Grey&apos;s Cleaning Services was founded in 2020 with a
                simple yet powerful mission: to provide exceptional gutter
                cleaning and property maintenance services that protect homes
                and businesses while delivering outstanding customer value.
              </p>
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                What started as a one-person operation has grown into a trusted
                team of professionals serving Birmingham and surrounding areas.
                Al Grey, our founder, began with just a ladder and a passion for
                helping homeowners protect their properties from water damage
                caused by clogged gutters.
              </p>
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                Over the years, we&apos;ve expanded our services to include
                window cleaning, pressure washing, roof cleaning, and
                comprehensive property maintenance solutions. Despite our
                growth, we&apos;ve maintained the commitment to the personal
                touch that made us successful in the first place.
              </p>
              <p className="text-[#64748b] text-[15px] leading-relaxed">
                Today, we&apos;re proud to be one of Birmingham&apos;s most
                recommended cleaning companies, with hundreds of satisfied
                residential and commercial clients who trust us to keep their
                properties in pristine condition year after year.
              </p>
            </div>
            <a href="/contact-us" className="abt-cta mt-8">
              Get Your Free Quote
              <span className="abt-cta-circle">
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Image */}
          <div className="abt-intro-img h-[360px] lg:h-[480px]">
            <Image
              src="/gutter-5.webp"
              alt="Al Grey's Cleaning Services team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 3 — MISSION & VISION  (dark bg, 2-col cards)
═══════════════════════════════════════════════════════════════════ */
const MISSION_CARDS = [
  {
    title: "Our Mission",
    desc: "To provide exceptional gutter cleaning and property maintenance services that protect our clients' investments, enhance property aesthetics, and deliver peace of mind through reliable, professional service and outstanding customer care.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    desc: "To become the most trusted and recommended cleaning service provider in the Midlands, recognised for our commitment to quality, innovation in service delivery, and positive impact on the communities we serve.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

function MissionSection() {
  return (
    <section
      className="abt-body py-20 lg:py-28 px-5 sm:px-8 lg:px-16"
      style={{ background: "#0d1b3e" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="abt-section-head">
          <div className="flex flex-col gap-5 lg:max-w-[52%]">
            <p className="abt-eyebrow text-[#5b8def]">
              <span className="dot" style={{ background: "#5b8def" }} />
              Driven by Purpose
            </p>
            <h2 className="abt-display text-[36px] sm:text-[44px] lg:text-[48px] font-medium text-white leading-[1.05] tracking-[-1px]">
              Our Mission &amp; Vision
            </h2>
          </div>
          <p className="text-[#94a3b8] text-[16px] leading-relaxed lg:max-w-[360px]">
            Driven by purpose, guided by vision — everything we do starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {MISSION_CARDS.map((card) => (
            <div key={card.title} className="abt-card-dark">
              <div className="abt-card-icon-badge-dark">{card.icon}</div>
              <div>
                <h3 className="abt-display text-white text-[19px] font-semibold leading-snug tracking-[-0.2px] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#94a3b8] text-[13.5px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 4 — CORE VALUES  (white bg, 3-col cards)
═══════════════════════════════════════════════════════════════════ */
const VALUES = [
  {
    title: "Quality & Excellence",
    desc: "We never compromise on quality. Every job, no matter how small, receives our full attention and commitment to excellence.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity & Trust",
    desc: "We build relationships based on honesty, transparency and reliability. Your trust is our most valuable asset.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    desc: "Our clients are at the heart of everything we do. We listen carefully and tailor our services to meet your specific needs.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "Environmental Responsibility",
    desc: "We use eco-friendly cleaning solutions and responsible waste disposal methods to minimise our environmental impact.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.249 2.249 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "We continuously invest in new equipment, techniques, and training to deliver better, more efficient services.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "We're proud to support local businesses and community initiatives, strengthening the areas we serve.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

function ValuesSection() {
  return (
    <section className="abt-body bg-white py-20 lg:py-28 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="abt-section-head">
          <div className="flex flex-col gap-5 lg:max-w-[52%]">
            <p className="abt-eyebrow text-[#2563eb]">
              <span className="dot" style={{ background: "#2563eb" }} />
              The Principles That Guide Us
            </p>
            <h2 className="abt-display text-[36px] sm:text-[44px] lg:text-[48px] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px]">
              Our Core Values
            </h2>
          </div>
          <p className="text-[#64748b] text-[16px] leading-relaxed lg:max-w-[360px]">
            The principles that guide everything we do — from the first call to
            the final clean.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((card) => (
            <div key={card.title} className="abt-card-light">
              <div className="abt-card-icon-badge">{card.icon}</div>
              <div>
                <h3 className="abt-display text-[#0d1b3e] text-[19px] font-semibold leading-snug tracking-[-0.2px] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#64748b] text-[13.5px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 5 — MEET THE TEAM
═══════════════════════════════════════════════════════════════════ */
const TEAM = [
  {
    name: "Al Grey",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in the cleaning industry, Al founded the company with a vision to provide high-quality services that customers can trust. His hands-on approach ensures that our standards never slip.",
    img: "/founder.webp",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    bio: "Sarah brings 8 years of operations experience to our team, ensuring that every project runs smoothly from start to finish. Her attention to detail and outstanding customer service skills make her an invaluable part of our company.",
    img: "/sarah.webp",
  },
  {
    name: "Mike Thompson",
    role: "Head of Technical Services",
    bio: "Mike leads our technical team with 10 years of specialised experience in gutter systems and exterior cleaning. His expertise ensures that even the most challenging projects are completed to the highest standards.",
    img: "/mike.webp",
  },
];

function TeamSection() {
  return (
    <section className="abt-body py-20 lg:py-28 px-5 sm:px-8 lg:px-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="abt-section-head">
          <div className="flex flex-col gap-5 lg:max-w-[52%]">
            <p className="abt-eyebrow text-[#2563eb]">
              <span className="dot" style={{ background: "#2563eb" }} />
              The People Behind the Work
            </p>
            <h2 className="abt-display text-[36px] sm:text-[44px] lg:text-[48px] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px]">
              Meet Our Team
            </h2>
          </div>
          <p className="text-[#64748b] text-[16px] leading-relaxed lg:max-w-[360px]">
            The dedicated professionals who show up every day committed to
            protecting your property.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="abt-team-card">
              <div className="abt-team-img">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="abt-team-body">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eff4ff] text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3">
                  {member.role}
                </span>
                <h3 className="abt-display text-[21px] font-semibold text-[#0d1b3e] leading-snug tracking-[-0.3px] mb-3">
                  {member.name}
                </h3>
                <p className="text-[#64748b] text-[13.5px] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 6 — WHY CHOOSE US  (now matches ApproachSection's card system)
═══════════════════════════════════════════════════════════════════ */
const WHY_ITEMS = [
  {
    title: "Proven Experience",
    desc: "Over 15 years and 2,000+ completed projects speak for themselves.",
    bullets: [
      "15+ years serving Birmingham & the Midlands",
      "Over 2,000 satisfied residential & commercial clients",
      "Hundreds of 5-star reviews online",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Fully Insured",
    desc: "Complete public liability insurance for total peace of mind on every job.",
    bullets: [
      "Full public liability insurance",
      "All operatives DBS checked",
      "Your property is always protected",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guarantee",
    desc: "If you're not happy, we'll make it right — no questions asked.",
    bullets: [
      "100% satisfaction or we return free of charge",
      "No hidden fees, ever",
      "Transparent pricing upfront",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Reliable & Punctual",
    desc: "We show up on time, every time — no excuses, no delays.",
    bullets: [
      "Always on time, or we call ahead",
      "Same-day quotes available",
      "Consistent scheduling you can rely on",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    title: "Modern Equipment",
    desc: "We invest in the latest tools to deliver superior results, safely.",
    bullets: [
      "Industry-leading gutter vacuum systems",
      "Water-fed pole window cleaning",
      "Eco-friendly cleaning chemicals",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Competitive Pricing",
    desc: "Fair, transparent pricing with no hidden costs — ever.",
    bullets: [
      "No hidden fees or surprise charges",
      "Free quotes with no obligation",
      "Exceptional value for every budget",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

function WhySection() {
  return (
    <section
      className="abt-body lg:pt-12 lg:pb-28 px-5 sm:px-8 lg:px-16"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="abt-section-head">
          <div className="flex flex-col gap-5 lg:max-w-[52%]">
            <p className="abt-eyebrow text-[#2563eb]">
              <span className="dot" style={{ background: "#2563eb" }} />
              What Sets Us Apart
            </p>
            <h2 className="abt-display text-[36px] sm:text-[44px] lg:text-[48px] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px]">
              Why Choose <span className="text-[#2563eb]">Al Grey&apos;s</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 lg:max-w-[340px]">
            <p className="text-[#64748b] text-[16px] leading-relaxed">
              Six reasons thousands of homeowners and businesses across
              Birmingham trust us with their properties.
            </p>
            <a href="/contact-us" className="abt-cta">
              Get a Free Quote
              <span className="abt-cta-circle">
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="abt-why-grid">
          {WHY_ITEMS.map((step, i) => (
            <div key={step.title} className="abt-why-card">
              <span className="abt-why-num">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="abt-why-icon">{step.icon}</div>

              <p className="abt-why-title">{step.title}</p>
              <p className="abt-why-desc">{step.desc}</p>

              <div className="abt-why-divider" />

              <div>
                {step.bullets.map((b) => (
                  <div key={b} className="abt-why-bullet">
                    <span className="abt-why-check">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth={2.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="2,7 5.5,10.5 12,3" />
                      </svg>
                    </span>
                    <span className="abt-why-bullet-text">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <AboutStyles />
      <HeroSection />
      <StorySection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <WhySection />
      <FAQSection />
      <CTASection />
      <CTAAndFooter />
    </>
  );
}

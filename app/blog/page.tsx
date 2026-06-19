"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";

/* ═══════════════════════════════════════════════════════════════════
   DESIGN TOKENS — matched to the about / contact / enquiry pages:
   - Fonts: Inter Tight (display/headings) + Inter (body)
   - Navy:  #0d1b3e   Blue accent: #2563eb
   - Body text: slate-500 (#64748b)   Muted/secondary: slate-400 (#94a3b8)
   - Light section bg: #f8fafc (slate-50)   Card border: #e2e8f0 (slate-200)
═══════════════════════════════════════════════════════════════════ */
function BlogStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

      .bl-display { font-family: 'Inter Tight', sans-serif; }
      .bl-body    { font-family: 'Inter', sans-serif; }

      @keyframes bl-fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .bl-anim-1 { animation: bl-fadeUp .6s ease both; }
      .bl-anim-2 { animation: bl-fadeUp .6s .10s ease both; }
      .bl-anim-3 { animation: bl-fadeUp .6s .20s ease both; }
      @media (prefers-reduced-motion: reduce) {
        .bl-anim-1, .bl-anim-2, .bl-anim-3 { animation: none; opacity: 1; transform: none; }
      }

      /* ── Eyebrow ── */
      .bl-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #2563eb;
      }
      .bl-eyebrow .dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #2563eb;
        flex-shrink: 0;
      }

      /* ── CTA pill (read-more arrow link) ── */
      .bl-cta {
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
        border: none;
        cursor: pointer;
        transition: background 0.22s ease, gap 0.2s ease,
                    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        flex-shrink: 0;
      }
      .bl-cta:hover { background: #1d4ed8; gap: 6px; transform: scale(1.03); }
      .bl-cta-circle {
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
      .bl-cta:hover .bl-cta-circle { background: #dbeafe; }

      /* ── Blog cards ── */
      .bl-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease;
      }
      .bl-card:hover {
        border-color: #2563eb;
        box-shadow: 0 20px 48px rgba(13,27,62,.10);
        transform: translateY(-6px);
      }

      .bl-card-thumb {
        position: relative;
        height: 200px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .bl-card-thumb svg { transition: transform .4s cubic-bezier(0.22,1,0.36,1); }
      .bl-card:hover .bl-card-thumb svg { transform: scale(1.08) rotate(-3deg); }

      .bl-card-badge {
        position: absolute;
        top: 16px;
        left: 16px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(255,255,255,0.92);
        color: #2563eb;
        font-size: 10.5px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 6px 12px;
        border-radius: 99px;
        backdrop-filter: blur(4px);
      }

      .bl-card-body {
        padding: 24px 24px 26px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .bl-card-meta {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        font-weight: 500;
        color: #94a3b8;
        margin-bottom: 12px;
      }
      .bl-card-meta .sep {
        width: 3px; height: 3px;
        border-radius: 50%;
        background: #cbd5e1;
        flex-shrink: 0;
      }

      .bl-card-title {
        font-family: 'Inter Tight', sans-serif;
        font-size: 19px;
        font-weight: 600;
        color: #0d1b3e;
        line-height: 1.3;
        letter-spacing: -0.3px;
        margin-bottom: 10px;
        transition: color .2s ease;
      }
      .bl-card:hover .bl-card-title { color: #2563eb; }

      .bl-card-excerpt {
        font-size: 13.5px;
        color: #64748b;
        line-height: 1.65;
        margin-bottom: 18px;
        flex: 1;
      }

      .bl-card-readmore {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 700;
        color: #0d1b3e;
        letter-spacing: 0.02em;
        transition: gap .2s ease, color .2s ease;
      }
      .bl-card:hover .bl-card-readmore { gap: 12px; color: #2563eb; }

      /* ── Reusable left-aligned section header ── */
      .bl-section-head {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        margin-bottom: 30px;
      }
      
    `}</style>
  );
}

/* ─────────────────────────────────────────────────── DUMMY DATA */
const BLOG_POSTS = [
  {
    slug: "signs-your-gutters-need-cleaning",
    category: "Gutter Care",
    date: "12 Jun 2026",
    readTime: "4 min read",
    title: "5 Warning Signs Your Gutters Need Cleaning Right Now",
    excerpt:
      "Overflowing water, sagging brackets, and plant growth are just a few signs your gutters are overdue for a clean. Here's what to watch for before damage sets in.",
    accent: "#2563eb",
  },
  {
    slug: "how-often-should-you-pressure-wash-driveway",
    category: "Pressure Washing",
    date: "05 Jun 2026",
    readTime: "5 min read",
    title: "How Often Should You Pressure Wash Your Driveway?",
    excerpt:
      "Algae, oil stains, and weather wear build up faster than you'd think. We break down a realistic cleaning schedule for driveways, patios, and paths.",
    accent: "#1d4ed8",
  },
  {
    slug: "window-cleaning-myths-debunked",
    category: "Window Cleaning",
    date: "28 May 2026",
    readTime: "3 min read",
    title: "6 Window Cleaning Myths We Hear All the Time",
    excerpt:
      "From newspaper-and-vinegar hacks to 'cleaning in sunlight is fine,' we set the record straight on what actually keeps your windows streak-free.",
    accent: "#3b82f6",
  },
  {
    slug: "protect-your-roof-this-winter",
    category: "Roof Cleaning",
    date: "19 May 2026",
    readTime: "6 min read",
    title: "Protecting Your Roof Before the Winter Months Hit",
    excerpt:
      "Moss, lichen, and trapped moisture are a roof's worst enemy in winter. A few preventative steps now can save thousands in repairs later.",
    accent: "#0d1b3e",
  },
  {
    slug: "commercial-cleaning-checklist",
    category: "Commercial",
    date: "11 May 2026",
    readTime: "4 min read",
    title: "The Commercial Property Cleaning Checklist Every Manager Needs",
    excerpt:
      "Keeping a commercial building presentable is about more than appearances — it's liability, compliance, and tenant retention. Here's our go-to checklist.",
    accent: "#2563eb",
  },
  {
    slug: "eco-friendly-cleaning-solutions",
    category: "Sustainability",
    date: "02 May 2026",
    readTime: "3 min read",
    title: "Why We Switched to Eco-Friendly Cleaning Solutions",
    excerpt:
      "Better for your property, better for the planet. Here's a look at the biodegradable products and water-fed systems we use on every job.",
    accent: "#1d4ed8",
  },
];

/* ─────────────────────────────────────────────────── THUMBNAIL */
function CardThumb({ accent }: { accent: string }) {
  return (
    <div
      className="bl-card-thumb"
      style={{
        background: `linear-gradient(135deg, ${accent}1a 0%, ${accent}33 100%)`,
      }}
    >
      <span className="bl-card-badge">
        <svg width="8" height="8" viewBox="0 0 8 8" fill={accent}>
          <circle cx="4" cy="4" r="4" />
        </svg>
        Article
      </span>
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent}
        strokeWidth={1.4}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12h-9a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5h6.621a1.5 1.5 0 011.06.44l3.122 3.121a1.5 1.5 0 01.44 1.061V18a1.5 1.5 0 01-1.5 1.5h-1.243M9.75 12h3.75M9.75 15h3.75"
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────── HEADER */
function HeaderSection() {
  return (
    <section className="bl-body bg-white pt-16 pb-16 lg:pt-24 lg:pb-20 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="bl-section-head">
          <div className="flex flex-col items-center  gap-5 ">
            <p className="bl-anim-1 bl-eyebrow text-center">
              <span className="dot" />
              Tips, Guides &amp; News
            </p>
            <h1 className="bl-anim-2 bl-display text-center text-[36px] sm:text-[46px] lg:text-[52px] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px]">
              The Al Grey&apos;s <span className="text-[#2563eb]">Blog</span>
            </h1>
            <p className="bl-anim-3 text-center text-[#64748b] text-[16px] leading-relaxed lg:max-w-[400px]">
              Practical advice on gutter care, window cleaning, pressure
              washing, and keeping your property in top condition all year
              round.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────── GRID */
function BlogGridSection() {
  return (
    <section
      className="bl-body pb-20 lg:pb-28 px-5 sm:px-8 lg:px-16"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bl-card"
            >
              <CardThumb accent={post.accent} />
              <div className="bl-card-body">
                <div className="bl-card-meta">
                  <span>{post.category}</span>
                  <span className="sep" />
                  <span>{post.date}</span>
                  <span className="sep" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="bl-card-title">{post.title}</h3>
                <p className="bl-card-excerpt">{post.excerpt}</p>
                <span className="bl-card-readmore">
                  Read Article
                  <svg
                    width="14"
                    height="14"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function BlogPage() {
  return (
    <>
      <BlogStyles />
      <Navbar />
      <HeaderSection />
      <BlogGridSection />
      <CTAAndFooter />
    </>
  );
}

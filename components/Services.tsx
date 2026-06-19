"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ALL_SERVICES = [
  {
    num: "01",
    title: "Gutter Cleaning",
    desc: "Remove debris and unblock downpipes to prevent overflow and water damage.",
    tags: [
      "Debris removal",
      "Downpipe flushing",
      "Minor repairs",
      "Before & after photos",
    ],
    image: "/gutter-cleaning.webp",
    href: "/gutter-cleaning",
  },
  {
    num: "02",
    title: "Roof Cleaning",
    desc: "Safe moss and algae removal that restores appearance and extends roof life.",
    tags: [
      "Moss & lichen removal",
      "Soft-wash method",
      "Biocide treatment",
      "All roof types",
    ],
    image: "/roof-cleaning.webp",
    href: "/roof-cleaning",
  },
  {
    num: "03",
    title: "Driveway Cleaning",
    desc: "Restore block paving, concrete and tarmac with professional pressure washing.",
    tags: [
      "Block paving",
      "Oil stain removal",
      "Weed & moss treatment",
      "Protective sealing",
    ],
    image: "/driveway.webp",
    href: "/driveway-cleaning",
  },
  {
    num: "04",
    title: "Pressure Washing",
    desc: "High-powered cleaning for driveways, patios and heavily soiled surfaces.",
    tags: [
      "Driveways & patios",
      "Brickwork & render",
      "Oil & grease stains",
      "Commercial yards",
    ],
    image: "/pressure-washing.webp",
    href: "/pressure-washing",
  },
  {
    num: "05",
    title: "Patio Cleaning",
    desc: "Remove moss, algae and dirt from all patio surfaces safely.",
    tags: [
      "Natural stone & porcelain",
      "Weed removal",
      "Biocidal treatment",
      "Sealing available",
    ],
    image: "/patio.webp",
    href: "/patio-cleaning",
  },
  {
    num: "06",
    title: "Window Cleaning",
    desc: "Pure-water window cleaning for spotless, streak-free results every visit.",
    tags: [
      "Pure water system",
      "Frames & sills",
      "High-rise windows",
      "Conservatory roofs",
    ],
    image: "/window-cleaning.webp",
    href: "/window-cleaning",
  },
  {
    num: "07",
    title: "Render Cleaning",
    desc: "Soft-wash cleaning that removes stains without damaging delicate render.",
    tags: [
      "Soft-wash method",
      "Algae & moss removal",
      "Acrylic, silicone & monocouche",
      "Protective coating",
    ],
    image: "/render.webp",
    href: "/render-cleaning",
  },
  {
    num: "08",
    title: "Brick Cleaning",
    desc: "Specialist brick cleaning that restores appearance while protecting masonry.",
    tags: [
      "Chemical cleaning",
      "Efflorescence removal",
      "Historic buildings",
      "Mortar-safe techniques",
    ],
    image: "/brick.webp",
    href: "/brick-cleaning",
  },
  {
    num: "09",
    title: "Cladding Cleaning",
    desc: "Professional cleaning for uPVC, composite and commercial cladding systems.",
    tags: [
      "uPVC & composite",
      "Metal & render",
      "Soft-wash system",
      "Protective coating",
    ],
    image: "/cladding.webp",
    href: "/cladding-cleaning",
  },
  {
    num: "10",
    title: "Downpipe Cleaning",
    desc: "Clear blocked downpipes and restore proper drainage around your property.",
    tags: [
      "High-pressure jetting",
      "CCTV inspection",
      "Emergency call-outs",
      "Repair service",
    ],
    image: "/downpipe.webp",
    href: "/downpipe-cleaning",
  },
  {
    num: "11",
    title: "Graffiti Removal",
    desc: "Fast graffiti removal from brick, render, metal and painted surfaces.",
    tags: [
      "Spray paint & markers",
      "All surfaces",
      "Anti-graffiti coating",
      "24hr emergency response",
    ],
    image: "/graffiti.webp",
    href: "/graffiti-cleaning",
  },
  {
    num: "12",
    title: "Commercial Gutter Cleaning",
    desc: "Safe gutter maintenance for offices, warehouses and retail premises.",
    tags: [
      "Offices & retail",
      "Industrial units",
      "Condition reports",
      "Maintenance contracts",
    ],
    image: "/commercial.webp",
    href: "/commercial-gutter",
  },
  {
    num: "13",
    title: "Residential Gutter Cleaning",
    desc: "Keep household gutters flowing freely and protect against costly repairs.",
    tags: [
      "Debris removal",
      "Gutter repairs",
      "Gutter guard install",
      "Before & after photos",
    ],
    image: "/residential.webp",
    href: "/residential-gutter",
  },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const sectionRef = useRef<HTMLElement>(null);

  // Same scroll-reveal convention as About/Stats/WhyClean: IntersectionObserver
  // adds .sv-visible to each [data-reveal] node as it enters the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("sv-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        .sv-root { font-family: 'Inter', sans-serif; }
        .sv-display { font-family: 'Inter Tight', sans-serif; }

        [data-reveal] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].sv-visible {
          opacity: 1;
          transform: translateY(0);
        }
        /* Service rows get a more pronounced bottom-to-top fade than the
           header text — these are tall elements, so a 20px shift barely
           registers. Higher specificity overrides the base rule above. */
        .sv-row[data-reveal] {
          transform: translateY(40px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sv-row[data-reveal].sv-visible {
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }

        /* ── Row: 3-column grid ── */
        .sv-row {
          display: grid;
          grid-template-columns: 200px 1fr 72px;
          /* align-items NOT set here — each cell manages its own alignment */
          border-top: 1px solid rgba(255,255,255,0.10);
          cursor: pointer;
          transition: background 0.18s;
          background: transparent;
        }
        .sv-row:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }
        
        @media (max-width: 768px) {
          .sv-row { grid-template-columns: 64px 1fr 44px; }
        }

        /* ── Number — always top-aligned ── */
        .sv-num {
          font-family: 'Inter Tight', sans-serif;
          font-size: 30px;
          font-weight: 400;
          color: #3b82f6;
          padding: 32px 0;
          user-select: none;
          line-height: 1;
          align-self: start;
          transition: color 0.2s;
        }
        .sv-row:hover .sv-num {
          color: #60a5fa;
        }

        /* ── Center column ── */
        .sv-center {
          padding: 28px 32px 28px 0;
          align-self: start;
        }

        /* ── Title ── */
        .sv-title {
          font-family: 'Inter Tight', sans-serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 500;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0;
          transition: color 0.2s;
        }
        .sv-row:hover .sv-title {
          color: #e0e7ff;
        }

        /* ── Plus column wrapper — handles centering vs top alignment ── */
        .sv-plus-col {
          /* When collapsed: fill full row height and center the icon vertically */
          align-self: stretch;
          display: flex;
          align-items: center;   /* vertically center when collapsed */
          justify-content: flex-end;
          padding: 28px 0;
          transition: align-items 0.1s;
        }
        /* When open: pin icon to top */
        .sv-plus-col.is-open {
          align-items: flex-start;
        }

        /* ── The icon itself ── */
        .sv-plus {
          user-select: none;
          color: #3b82f6;
          font-size: 50px;
          line-height: 1;
          display: inline-block;
          transition: color 0.2s, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          flex-shrink: 0;
        }
        .sv-row:hover .sv-plus {
          color: #60a5fa;
        }
        .sv-plus-col.is-open .sv-plus {
          transform: rotate(180deg);
        }

        /* ── Expand panel ── */
        .sv-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.32s ease;
        }
        .sv-panel.open {
          grid-template-rows: 1fr;
        }
        .sv-panel-inner {
          overflow: hidden;
        }

        /* ── Tag pill — white background ── */
        .sv-tag {
          display: inline-flex;
          align-items: center;
          background: #ffffff;
          border-radius: 999px;
          padding: 8px 20px;
          font-size: 13.5px;
          font-weight: 500;
          color: #0d1b3e;
          white-space: nowrap;
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.2s ease;
        }
        .sv-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.22);
        }

        /* ── Expandable image ── */
        .sv-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          max-width: 480px;
          height: 270px;
        }
        .sv-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sv-img-wrap:hover img {
          transform: scale(1.05);
        }

        /* ── Book Service button — exact match to About section's btn-quote ── */
        .sv-book-btn {
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
          transition: background 0.22s ease, padding-right 0.2s ease;
          flex-shrink: 0;
          white-space: nowrap;
        }
          .sv-plus {
  display: inline-flex;
  transform: rotate(0deg);
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
}

.sv-plus-col.is-open .sv-plus {
  transform: rotate(45deg);
}
        .sv-book-btn:hover {
          background: #1d4ed8;
          padding-right: 13px;
        }
        .sv-book-btn:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .sv-book-btn .arr {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 16px;
          flex-shrink: 0;
          transition: background 0.22s, color 0.22s;
        }
        .sv-book-btn:hover .arr {
          background: #dbeafe;
        }
      `}</style>

      <div className="flex flex-col items-center pt-16 lg:pt-20">
        <section
          id="services"
          ref={sectionRef}
          style={{ borderRadius: "20px" }}
          className="sv-root w-[97%]  bg-[#0d1b3e] py-20 lg:py-28 px-5 sm:px-8 lg:px-14"
        >
          <div className="max-w-7xl mx-auto">
            {/* ── Header ── */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
              <div className="flex flex-col gap-5 lg:max-w-[52%]">
                <p
                  className="flex items-center gap-2 text-[#3b82f6] font-semibold text-[12px] uppercase tracking-[0.22em]"
                  data-reveal
                  data-delay="0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] inline-block" />
                  Our Services
                </p>
                <h2
                  className="sv-display text-[42px] sm:text-[46px] lg:text-[50px] font-medium text-white leading-[1.05] tracking-[-1px]"
                  data-reveal
                  data-delay="80"
                >
                  Professional Exterior
                  <br />
                  <span className="text-[#3b82f6]">Cleaning Services.</span>
                </h2>
              </div>
              <p
                className="text-[#64748b] text-[16px] leading-relaxed lg:max-w-[380px]"
                data-reveal
                data-delay="160"
              >
                Professional roof, gutter, driveway and exterior cleaning
                services for residential and commercial properties across
                Birmingham.
              </p>
            </div>

            {/* ── Accordion ── */}
            <div>
              {ALL_SERVICES.map((svc, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={svc.num}
                    className="sv-row"
                    onClick={() => toggle(i)}
                    data-reveal
                  >
                    {/* Left: number */}
                    <div className="sv-num">{svc.num}</div>

                    {/* Center: always title + desc, expandable extras */}
                    <div className="sv-center">
                      <h3 className="sv-title">{svc.title}</h3>
                      <p className="text-[rgba(255,255,255,0.55)] text-[15px] leading-relaxed py-3 max-w-[600px]">
                        {svc.desc}
                      </p>

                      {/* Expandable: tags, image, CTA — stop clicks bubbling so content area doesn't close */}
                      <div className={`sv-panel ${isOpen ? "open" : ""}`}>
                        <div className="sv-panel-inner">
                          <div
                            className="flex flex-col gap-5 pt-1 pb-8"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2.5">
                              {svc.tags.map((tag) => (
                                <span key={tag} className="sv-tag">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Image */}
                            <div className="sv-img-wrap">
                              <img
                                src={svc.image}
                                alt={svc.title}
                                loading="lazy"
                              />
                            </div>

                            {/* Book Service CTA */}
                            <div className="flex justify-end">
                              <Link
                                href={svc.href}
                                className="sv-book-btn"
                                onClick={(e) => e.stopPropagation()}
                              >
                                More About {svc.title}
                                <span className="arr">
                                  <svg
                                    width="14"
                                    height="14"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: plus icon — centered when closed, top-aligned + rotated into an × when open */}
                    <div className={`sv-plus-col ${isOpen ? "is-open" : ""}`}>
                      <span className="sv-plus" aria-hidden="true">
                        <svg
                          width="38"
                          height="38"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

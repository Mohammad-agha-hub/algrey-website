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
        /* ── Base Typography ── */
        .sv-root { 
          font-family: var(--font-inter), sans-serif; 
        }
        .sv-display { 
          font-family: var(--font-inter-tight), sans-serif; 
        }

        /* ── Reveal Animation ── */
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

        /* ── Section Eyebrow ── */
        .sv-eyebrow {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #3b82f6;
        }

        /* ── Heading ── */
        .sv-heading {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-5);
          font-weight: var(--fw-medium);
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        /* ── Body Text ── */
        .sv-body {
          font-size: var(--step-0);
          font-weight: var(--fw-normal);
          line-height: var(--leading-standard);
          color: #64748b;
        }

        /* ── Row Grid ── */
        .sv-row {
          display: grid;
          grid-template-columns: 200px 1fr 72px;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
          cursor: pointer;
          transition: background 0.18s;
          background: transparent;
        }
        .sv-row:last-child {
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
        }

        /* ── Number ── */
        .sv-num {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-3);
          font-weight: var(--fw-normal);
          line-height: var(--leading-flat);
          color: #3b82f6;
          padding: var(--space-xl) 0;
          user-select: none;
          align-self: start;
          transition: color 0.2s;
        }
        .sv-row:hover .sv-num {
          color: #60a5fa;
        }

        /* ── Center Column ── */
        .sv-center {
          padding: var(--space-l) var(--space-xl) var(--space-l) 0;
          align-self: start;
        }

        /* ── Service Title ── */
        .sv-title {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-4);
          font-weight: var(--fw-medium);
          color: #ffffff;
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          margin: 0;
          transition: color 0.2s;
        }
        .sv-row:hover .sv-title {
          color: #e0e7ff;
        }

        /* ── Description ── */
        .sv-desc {
          color: rgba(255, 255, 255, 0.55);
          font-size: var(--step-0);
          line-height: var(--leading-standard);
          padding-block: var(--space-s);
          max-width: 600px;
        }

        /* ── Plus Column ── */
        .sv-plus-col {
          align-self: stretch;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: var(--space-l) 0;
          transition: align-items 0.1s;
        }
        .sv-plus-col.is-open {
          align-items: flex-start;
        }

        /* ── Plus Icon ── */
        .sv-plus {
          user-select: none;
          color: #3b82f6;
          display: inline-flex;
          transform: rotate(0deg);
          transition: color 0.2s, transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
          flex-shrink: 0;
        }
        .sv-row:hover .sv-plus {
          color: #60a5fa;
        }
        .sv-plus-col.is-open .sv-plus {
          transform: rotate(45deg);
        }

        /* ── Expand Panel ── */
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

        /* ── Tags ── */
        .sv-tag {
          display: inline-flex;
          align-items: center;
          background: #ffffff;
          border-radius: var(--radius-full);
          padding: var(--space-2xs) var(--space-s);
          font-size: var(--step--1);
          font-weight: var(--fw-medium);
          line-height: var(--leading-fine);
          color: #0d1b3e;
          white-space: nowrap;
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.2s ease;
        }
        .sv-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
        }

        /* ── Service Image ── */
        .sv-img-wrap {
          border-radius: var(--radius-lg);
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

        /* ── CTA Button ── */
        .sv-book-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-s);
          padding: var(--space-2xs) var(--space-s);
          padding-left: var(--space-m);
          border-radius: var(--radius-full);
          background: #2563eb;
          color: #ffffff;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step--1);
          font-weight: var(--fw-bold);
          letter-spacing: 0.14em;
          line-height: 1;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.22s ease, padding 0.2s ease;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .sv-book-btn:hover {
          background: #1d4ed8;
          padding-right: calc(var(--space-s) + 0.5rem);
        }
        .sv-book-btn:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .sv-book-btn .arr {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: #ffffff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.22s, color 0.22s;
        }
        .sv-book-btn:hover .arr {
          background: #dbeafe;
        }

        /* ── Responsive: Tablet ── */
        @media (max-width: 768px) {
          .sv-row { 
            grid-template-columns: 48px 1fr 44px;
          }
          .sv-num {
            font-size: var(--step-1);
            padding: var(--space-m) 0;
          }
          .sv-center {
            padding: var(--space-m) var(--space-s) var(--space-m) 0;
          }
          .sv-title {
            font-size: var(--step-2);
          }
          .sv-desc {
            font-size: var(--step--1);
            padding-block: var(--space-xs);
          }
          .sv-plus-col {
            padding: var(--space-m) 0;
          }
          .sv-book-btn {
            font-size: 0.65rem;
            padding: 5px 5px 5px 16px;
            letter-spacing: 0.08em;
          }
          .sv-book-btn .arr {
            width: 28px;
            height: 28px;
          }
          .sv-img-wrap {
            height: 200px;
          }
        }

        /* ── Responsive: Small Mobile ── */
        @media (max-width: 480px) {
          .sv-row {
            grid-template-columns: 40px 1fr 36px;
          }
          .sv-num {
            font-size: var(--step-0);
            padding: var(--space-s) 0;
          }
          .sv-center {
            padding: var(--space-s) var(--space-xs) var(--space-s) 0;
          }
          .sv-plus svg {
            width: 28px;
            height: 28px;
          }
          .sv-plus-col {
            padding: var(--space-s) 0;
          }
          .sv-book-btn {
            width: 100%;
            justify-content: center;
            font-size: 0.6rem;
            padding: 5px 5px 5px 14px;
          }
          .sv-book-btn .arr {
            width: 24px;
            height: 24px;
          }
          .sv-tag {
            font-size: 0.65rem;
            padding: 5px 12px;
          }
          .sv-img-wrap {
            height: 180px;
            max-width: 100%;
          }
        }
      `}</style>

      <div className="flex flex-col items-center pt-16 lg:pt-20">
        <section
          id="services"
          ref={sectionRef}
          style={{ borderRadius: "20px" }}
          className="sv-root w-[97%] bg-[#0d1b3e] py-20 lg:py-28 px-5 sm:px-8 lg:px-14"
        >
          <div className="max-w-7xl mx-auto">
            {/* ── Header ── */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
              <div className="flex flex-col gap-5 lg:max-w-[52%]">
                <p
                  className="sv-eyebrow flex items-center gap-2"
                  data-reveal
                  data-delay="0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] inline-block" />
                  Our Services
                </p>
                <h2 className="sv-heading" data-reveal data-delay="80">
                  Professional Exterior
                  <br />
                  <span className="text-[#3b82f6]">Cleaning Services.</span>
                </h2>
              </div>
              <p
                className="sv-body lg:max-w-[380px]"
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
                    {/* Left: Number */}
                    <div className="sv-num">{svc.num}</div>

                    {/* Center: Content */}
                    <div className="sv-center">
                      <h3 className="sv-title">{svc.title}</h3>
                      <p className="sv-desc">{svc.desc}</p>

                      {/* Expandable Panel */}
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

                            {/* CTA */}
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

                    {/* Right: Plus Icon */}
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

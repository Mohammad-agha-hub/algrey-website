"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const ITEMS = [
  {
    id: 1,
    src: "/roof-cleaning3.webp",
    alt: "Roof cleaning result",
    span: "lg",
  },
  { id: 2, src: "/2.webp", alt: "Property cleaning work", span: "sm" },
  {
    id: 3,
    src: "/render-cleaning6.webp",
    alt: "Render cleaning result",
    span: "sm",
  },
  { id: 4, src: "/4.webp", alt: "Exterior cleaning work", span: "sm" },
  { id: 5, src: "/5.webp", alt: "Pressure washing result", span: "sm" },
  {
    id: 6,
    src: "/pressure-washings.webp",
    alt: "Driveway cleaning result",
    span: "sm",
  },
];

export default function GallerySection() {
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
            el.classList.add("gal-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Base Typography ── */
        .gal-root { 
          font-family: var(--font-inter), sans-serif; 
        }
        .gal-display { 
          font-family: var(--font-inter-tight), sans-serif; 
        }

        /* ── Reveal Animation ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].gal-visible { 
          opacity: 1; 
          transform: translateY(0); 
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }

        /* ── Eyebrow ── */
        .gal-eyebrow {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2563eb;
        }

        /* ── Heading ── */
        .gal-heading {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-5);
          font-weight: var(--fw-medium);
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          color: #0d1b3e;
        }

        /* ── Body Text ── */
        .gal-body {
          font-size: var(--step-0);
          font-weight: var(--fw-normal);
          line-height: var(--leading-standard);
          color: #64748b;
        }

        /* ── Gallery Card ── */
        .gallery-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 220px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: pointer;
        }

        .gallery-card img {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gallery-card:hover img { 
          transform: scale(1.06); 
        }

        .gallery-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8, 26, 61, 0.55) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 1;
          border-radius: var(--radius-lg);
        }
        .gallery-card:hover::after { 
          opacity: 1; 
        }

        /* ── Hover Label ── */
        .gallery-card .gallery-label {
          position: absolute;
          bottom: var(--space-s);
          left: var(--space-s);
          z-index: 2;
          display: flex;
          align-items: center;
          gap: var(--space-2xs);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
        }
        .gallery-card:hover .gallery-label { 
          opacity: 1; 
          transform: translateY(0); 
          pointer-events: auto; 
        }

        .gallery-label-text {
          color: #ffffff;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.02em;
        }

        .gallery-label-icon {
          width: 28px;
          height: 28px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .gallery-card:hover .gallery-label-icon {
          background: rgba(255, 255, 255, 0.3);
          transform: translateX(2px);
        }

        /* ── Bento Grid ── */
        .bento-grid { 
          display: grid; 
          gap: var(--space-s); 
        }

        /* ── Responsive: Mobile ── */
        @media (max-width: 639px) {
          .bento-grid { 
            grid-template-columns: 1fr; 
          }
          .gallery-card { 
            min-height: 220px; 
          }
          .gallery-card.span-lg { 
            min-height: 300px; 
          }
        }

        /* ── Responsive: Tablet ── */
        @media (min-width: 640px) and (max-width: 1023px) {
          .bento-grid { 
            grid-template-columns: repeat(2, 1fr); 
            grid-auto-rows: 240px; 
          }
          .gallery-card.span-lg { 
            grid-column: span 2; 
            grid-row: span 2; 
          }
        }

        /* ── Responsive: Desktop ── */
        @media (min-width: 1024px) {
          .bento-grid { 
            grid-template-columns: repeat(3, 1fr); 
            grid-auto-rows: 272px; 
          }
          .gallery-card.span-lg { 
            grid-column: span 2; 
            grid-row: span 2; 
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="gal-root bg-[#f8fafc] pt-8 px-5 sm:px-8 lg:px-14"
      >
        <div className="max-w-7xl mx-auto">
          {/* ── Header ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
            <div className="flex flex-col gap-5 lg:max-w-[52%]">
              <p
                className="gal-eyebrow flex items-center gap-2"
                data-reveal
                data-delay="0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block" />
                Our Work
              </p>
              <h2 className="gal-heading" data-reveal data-delay="80">
                Real results, real
                <br />
                <span className="text-[#2563eb]">properties.</span>
              </h2>
            </div>

            <p
              className="gal-body lg:max-w-[380px]"
              data-reveal
              data-delay="160"
            >
              Every job comes with before &amp; after photos so you can see
              exactly what we did. Hundreds of satisfied customers across
              Birmingham and surrounding areas.
            </p>
          </div>

          {/* ── Gallery Grid ── */}
          <div className="bento-grid">
            {ITEMS.map((item, i) => (
              <div
                key={item.id}
                className={`gallery-card${item.span === "lg" ? " span-lg" : ""}`}
                data-reveal
                data-delay={i * 80}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />

                <Link href={"/enquiry-now"} className="gallery-label">
                  <span className="gallery-label-text">Get Your Quote</span>
                  <span className="gallery-label-icon">
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke="white"
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

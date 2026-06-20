"use client";

import { useEffect, useRef } from "react";

const FEATURES = [
  "Fully Insured Service",
  "Residential & Commercial Cleaning",
  "Professional Equipment",
  "Free No-Obligation Quotes",
];

export default function AboutSection() {
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
            el.classList.add("ab-visible");
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
        /* ── Google Fonts Import ── */
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');

        /* ── Base Typography ── */
        .ab-root { 
          font-family: var(--font-inter), sans-serif; 
        }
        .ab-display { 
          font-family: var(--font-inter-tight), sans-serif; 
        }

        /* ── Reveal Animation ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].ab-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }

        /* ── Image Wrapper ── */
        .ab-img-wrap {
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          width: 100%;
          aspect-ratio: 3 / 4;
          max-height: 580px;
        }
        .ab-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ab-img-wrap:hover img {
          transform: scale(1.03);
        }

        /* ── Floating Stat Card ── */
        .ab-stat-card {
          position: absolute;
          bottom: var(--space-l);
          left: var(--space-l);
          background: #ffffff;
          border-radius: var(--radius-lg);
          padding: var(--space-s) var(--space-m);
          box-shadow: 0 8px 32px rgba(13, 27, 62, 0.18);
          display: flex;
          flex-direction: column;
          gap: var(--space-2xs);
          min-width: 220px;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.3s ease;
        }
        .ab-img-wrap:hover .ab-stat-card {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(13, 27, 62, 0.22);
        }
        .ab-stat-value {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-3);
          font-weight: var(--fw-bold);
          line-height: var(--leading-flat);
          color: #2563eb;
        }
        .ab-stat-label {
          font-size: var(--step--1);
          font-weight: var(--fw-normal);
          line-height: var(--leading-tight);
          color: #475569;
        }

        /* ── Section Eyebrow ── */
        .ab-eyebrow {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
        }

        /* ── Heading ── */
        .ab-heading {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-5);
          font-weight: var(--fw-medium);
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          color: #0d1b3e;
        }

        /* ── Body Text ── */
        .ab-body {
          font-size: var(--step-0);
          font-weight: var(--fw-normal);
          line-height: var(--leading-standard);
          color: #64748b;
        }

        /* ── Feature List ── */
        .ab-feature {
          display: flex;
          align-items: flex-start;
          gap: var(--space-xs);
          cursor: default;
        }
        .ab-feature-text {
          font-size: var(--step-0);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          color: #0d1b3e;
        }
        .check-icon {
          width: 22px;
          height: 22px;
          border-radius: var(--radius-full);
          background: #1e3a8a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: background 0.2s, transform 0.2s;
        }
        .ab-feature:hover .check-icon {
          background: #2563eb;
          transform: scale(1.12);
        }

        /* ── CTA Button (matches hero) ── */
        .btn-quote {
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
        .btn-quote:hover {
          background: #1d4ed8;
          padding-right: calc(var(--space-s) + 0.5rem);
        }
        .btn-quote:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .btn-quote .arrow-circle {
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
        .btn-quote:hover .arrow-circle {
          background: #dbeafe;
        }

        /* ── Secondary Link ── */
        .btn-services {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3xs);
          color: #0d1b3e;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step-0);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          text-decoration: none;
          transition: color 0.2s;
        }
        .btn-services:hover { color: #2563eb; }
        .btn-services:hover .svc-arrow { transform: translateX(3px); }
        .svc-arrow { display: flex; transition: transform 0.2s ease; }

        /* ── Responsive Adjustments ── */
        @media (min-width: 640px) {
          .ab-heading {
            font-size: var(--step-5);
          }
        }
        @media (min-width: 1024px) {
          .ab-stat-card {
            bottom: var(--space-l);
            left: var(--space-l);
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="ab-root bg-[#f8fafc] py-20 lg:py-28 px-5 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* ── LEFT: Image + Stat Card ── */}
            <div
              className="w-full lg:w-[48%] shrink-0"
              data-reveal
              data-delay="0"
            >
              <div className="ab-img-wrap">
                <img
                  src="/lp-9.webp"
                  alt="Professional cleaning team at work"
                  loading="lazy"
                  decoding="async"
                />
                <div className="ab-stat-card">
                  <span className="ab-stat-value">100+</span>
                  <p className="ab-stat-label">
                    Properties cleaned across
                    <br />
                    Birmingham and surrounding areas.
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Content ── */}
            <div className="flex-1 flex flex-col gap-7">
              <p
                className="ab-eyebrow flex items-center gap-2"
                data-reveal
                data-delay="80"
              >
                <span className="w-2 h-2 rounded-full bg-[#2563eb] inline-block" />
                About Algrey Cleaning Services
              </p>

              <h2 className="ab-heading" data-reveal data-delay="140">
                Expert Exterior Cleaning
                <br />
                for{" "}
                <span className="text-[#2563eb]">Homes &amp; Businesses.</span>
              </h2>

              <p className="ab-body max-w-[500px]" data-reveal data-delay="200">
                We provide professional exterior cleaning services for homes and
                businesses across Birmingham. From roofs and gutters to
                driveways and patios, we deliver reliable results that keep
                properties looking their best.
              </p>

              {/* Feature Grid */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4"
                data-reveal
                data-delay="260"
              >
                {FEATURES.map((f) => (
                  <div key={f} className="ab-feature">
                    <div className="check-icon">
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="ab-feature-text">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="flex flex-wrap items-center gap-5 pt-2"
                data-reveal
                data-delay="320"
              >
                <a href="/enquiry-now" className="btn-quote">
                  Get a Quote
                  <span className="arrow-circle">
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
                </a>
                <a href="#services" className="btn-services">
                  Our services
                  <span className="svc-arrow">
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

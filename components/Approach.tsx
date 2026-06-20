"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const STEPS = [
  {
    title: "Free Assessment",
    desc: "We assess your property, discuss your requirements, and provide a clear, no-obligation quote.",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
    bullets: [
      "Free site visit or photo assessment",
      "Clear and transparent pricing",
      "No-obligation quotation",
      "Advice tailored to your property",
      "Convenient scheduling available",
    ],
  },
  {
    title: "Professional Cleaning",
    desc: "Our team arrives fully equipped and completes the work using the safest and most effective cleaning methods.",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    bullets: [
      "Specialist exterior cleaning equipment",
      "Safe cleaning methods for every surface",
      "Attention to detail throughout",
      "Minimal disruption to your property",
      "All waste and debris removed",
    ],
  },
  {
    title: "Final Inspection",
    desc: "We check the completed work, ensure everything meets our standards, and leave your property looking its best.",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    bullets: [
      "Quality inspection carried out",
      "Before & after photos available",
      "Work area left clean and tidy",
      "Maintenance recommendations provided",
      "Customer satisfaction guaranteed",
    ],
  },
];

export default function ApproachSection() {
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
            el.classList.add("ap2-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Base Typography ── */
        .ap2-section {
          font-family: var(--font-inter), sans-serif;
          background: #f8f9fc;
          padding: clamp(56px, 9vw, 96px) 0;
        }

        .ap2-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 40px);
        }

        /* ── Reveal Animation ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].ap2-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ap2-card[data-reveal] {
          transform: translateY(46px);
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ap2-card[data-reveal].ap2-visible {
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }

        /* ── Header Row ── */
        .ap2-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-xl);
          margin-bottom: clamp(40px, 7vw, 64px);
        }

        .ap2-header-left { 
          flex: 1; 
          min-width: 0; 
        }

        .ap2-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-m);
          max-width: 340px;
          margin-top: 3rem;
        }

        /* ── Eyebrow (matches all other sections) ── */
        .ap2-eyebrow {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: var(--space-s);
        }

        /* ── Heading ── */
        .ap2-heading {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-5);
          font-weight: var(--fw-medium);
          color: #081a3d;
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          margin: 0;
        }

        /* ── Subtitle ── */
        .ap2-sub {
          font-size: var(--step-0);
          font-weight: var(--fw-normal);
          color: #6b7a99;
          line-height: var(--leading-standard);
          max-width: 380px;
          margin: 0;
        }

        /* ── CTA Button (matches hero/about/whyclean/services) ── */
        .ap2-cta {
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
        .ap2-cta:hover {
          background: #1d4ed8;
          padding-right: calc(var(--space-s) + 0.5rem);
        }
        .ap2-cta:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .ap2-cta-circle {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: #ffffff;
          color: #081a3d;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.22s, color 0.22s;
        }
        .ap2-cta:hover .ap2-cta-circle { 
          background: #dbeafe; 
        }

        /* ── Cards Grid ── */
        .ap2-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-s);
          align-items: start;
        }

        .ap2-card {
          background: #ffffff;
          border-radius: var(--radius-2xl);
          border: 1px solid #e4e9f4;
          padding: var(--space-xl) var(--space-l) var(--space-2xl);
          box-shadow: 0 2px 12px rgba(8, 26, 61, 0.06);
          transition: box-shadow 0.26s ease, border-color 0.26s ease,
                      transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
          will-change: transform;
        }
        .ap2-card:hover {
          box-shadow: 0 16px 40px rgba(8, 26, 61, 0.13);
          border-color: #bfdbfe;
          transform: translateY(-8px);
        }

        .ap2-card:nth-child(2) { margin-top: 48px; }
        .ap2-card:nth-child(3) { margin-top: 96px; }

        /* ── Card Icon ── */
        .ap2-card-icon {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-lg);
          background: #eff4ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-l);
          transition: background 0.22s ease, color 0.22s ease,
                      transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ap2-card:hover .ap2-card-icon {
          background: #dbeafe;
          color: #1d4ed8;
          transform: rotate(-8deg) scale(1.08);
        }

        /* ── Card Number (watermark) ── */
        .ap2-card-num {
          position: absolute;
          top: var(--space-l);
          right: var(--space-l);
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-5);
          font-weight: var(--fw-extrabold);
          color: #081a3d;
          opacity: 0.06;
          line-height: 1;
          letter-spacing: -0.04em;
          pointer-events: none;
          user-select: none;
        }

        /* ── Card Title ── */
        .ap2-card-title {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-2);
          font-weight: var(--fw-bold);
          color: #081a3d;
          line-height: var(--leading-tight);
          letter-spacing: -0.02em;
          margin-bottom: var(--space-xs);
        }

        /* ── Card Description ── */
        .ap2-card-desc {
          font-size: var(--step--1);
          font-weight: var(--fw-normal);
          color: #6b7a99;
          line-height: var(--leading-standard);
          margin-bottom: var(--space-l);
        }

        /* ── Divider ── */
        .ap2-divider {
          height: 1px;
          background: #e4e9f4;
          margin-bottom: var(--space-m);
        }

        /* ── Bullet Points ── */
        .ap2-bullet {
          display: flex;
          align-items: flex-start;
          gap: var(--space-xs);
          margin-bottom: var(--space-xs);
        }
        .ap2-bullet:last-child { margin-bottom: 0; }

        .ap2-check {
          width: 20px;
          height: 20px;
          border-radius: var(--radius-full);
          background: #eff4ff;
          border: 1px solid #bfd0f7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ap2-bullet-text {
          font-size: var(--step--1);
          font-weight: var(--fw-medium);
          color: #374151;
          line-height: var(--leading-fine);
        }

        /* ── Responsive: Tablet ── */
        @media (max-width: 1023px) {
          .ap2-grid { 
            grid-template-columns: 1fr; 
            gap: var(--space-s); 
          }
          .ap2-card:nth-child(2),
          .ap2-card:nth-child(3) { 
            margin-top: 0; 
          }
          .ap2-header-row { 
            flex-direction: column; 
            align-items: flex-start; 
            gap: var(--space-l); 
          }
          .ap2-header-right { 
            max-width: 100%; 
            margin-top: 0; 
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .ap2-grid { 
            grid-template-columns: repeat(2, 1fr); 
          }
          .ap2-card:nth-child(3) { 
            grid-column: 1 / -1; 
          }
        }

        /* ── Responsive: Mobile ── */
        @media (max-width: 639px) {
          .ap2-sub { 
            max-width: 100%; 
          }
          .ap2-card { 
            padding: var(--space-l) var(--space-m) var(--space-xl); 
          }
          .ap2-card-num { 
            font-size: var(--step-4); 
            top: var(--space-s); 
            right: var(--space-s); 
          }
        }

        @media (max-width: 420px) {
          .ap2-card { 
            padding: var(--space-m) var(--space-s) var(--space-l); 
            border-radius: var(--radius-lg); 
          }
          .ap2-card-icon { 
            width: 46px; 
            height: 46px; 
            margin-bottom: var(--space-m); 
          }
          .ap2-card-title { 
            font-size: var(--step-2); 
          }
        }
      `}</style>

      <section id="approach" ref={sectionRef} className="ap2-section">
        <div className="ap2-container">
          {/* ── Header Row ── */}
          <div className="ap2-header-row">
            <div className="ap2-header-left" data-reveal data-delay="0">
              <p className="ap2-eyebrow flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block" />
                Our Process
              </p>
              <h2 className="ap2-heading">
                How We Get
                <br />
                Outstanding <span className="text-[#2563eb]">Results.</span>
              </h2>
            </div>

            <div className="ap2-header-right" data-reveal data-delay="150">
              <p className="ap2-sub">
                A simple, professional process designed to deliver reliable
                exterior cleaning results for every property.
              </p>
              <Link href="/contact-us" className="ap2-cta">
                Get in Touch
                <span className="ap2-cta-circle">
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
              </Link>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="ap2-grid">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="ap2-card"
                data-reveal
                data-delay={i * 140}
              >
                <span className="ap2-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="ap2-card-icon">{step.icon}</div>

                <p className="ap2-card-title">{step.title}</p>
                <p className="ap2-card-desc">{step.desc}</p>

                <div className="ap2-divider" />

                <div>
                  {step.bullets.map((b) => (
                    <div key={b} className="ap2-bullet">
                      <span className="ap2-check">
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
                      <span className="ap2-bullet-text">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

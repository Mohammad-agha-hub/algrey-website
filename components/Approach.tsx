"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const STEPS = [
  {
    title: "Free Assessment",
    desc: "We assess your property, discuss your requirements, and provide a clear, no-obligation quote.",
    icon: "ti-clipboard-list",
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
    icon: "ti-wash",
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
    icon: "ti-circle-check",
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

  // Same scroll-reveal convention as About/Stats/WhyClean/Services/Gallery:
  // IntersectionObserver adds .ap2-visible to each [data-reveal] node as it
  // enters the viewport. Replaces the previous framer-motion implementation
  // so this section uses the same engine (and no extra dependency) as the rest.
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
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.30.0/dist/tabler-icons.min.css');

        .ap2-section {
          font-family: 'Inter', sans-serif;
          background: #f8f9fc;
          padding: clamp(56px, 9vw, 96px) 0;
        }

        .ap2-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 40px);
        }

        /* ── Scroll reveal ── */
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
        /* Cards travel further, matching the previous y:46 framer-motion offset */
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

        /* ── Header ── */
        .ap2-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          margin-bottom: clamp(40px, 7vw, 64px);
        }

        .ap2-header-left { flex: 1; min-width: 0; }

        .ap2-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          max-width: 340px;
          margin-top: 3rem;
        }

        .ap2-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 18px;
        }
        .ap2-eyebrow::before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          flex-shrink: 0;
        }

        .ap2-heading {
          font-family: 'Inter Tight', sans-serif;
          font-size: clamp(32px, 5vw, 50px);
          font-weight: 500;
          color: #081a3d;
          line-height: 1.1;
          letter-spacing: clamp(-0.5px, -0.1vw, -1.5px);
          margin: 0;
        }

        .ap2-heading .word-dark { color: #081a3d; }
        .ap2-heading .word-blue { color: #2563eb; }

        .ap2-heading .word-underline {
          color: #081a3d;
          display: inline-block;
          position: relative;
          white-space: nowrap;
        }
        .ap2-heading .word-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 3px;
          border-radius: 2px;
          background: #2563eb;
        }

        .ap2-sub {
          font-size: 15px;
          font-weight: 400;
          color: #6b7a99;
          line-height: 1.65;
          max-width: 380px;
          margin: 0;
        }

        /* CTA pill */
        .ap2-cta {
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
        .ap2-cta:hover {
          background: #2563eb;
          gap: 6px;
          transform: scale(1.03);
        }
        .ap2-cta:active {
          transform: scale(0.96);
        }
        .ap2-cta-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          color: #081a3d;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 16px;
          flex-shrink: 0;
          transition: background 0.22s, color 0.22s;
        }
        .ap2-cta:hover .ap2-cta-circle { background: #dbeafe; }

        /* ── Cards grid — staggered offset ── */
        .ap2-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: start;
        }

        .ap2-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #e4e9f4;
          padding: 36px 32px 40px;
          box-shadow: 0 2px 12px rgba(8,26,61,0.06);
          transition: box-shadow 0.26s ease, border-color 0.26s ease,
                      transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
          will-change: transform;
        }
        .ap2-card:hover {
          box-shadow: 0 16px 40px rgba(8,26,61,0.13);
          border-color: #bfdbfe;
          transform: translateY(-8px);
        }

        /* stagger: card 2 down, card 3 down more */
        .ap2-card:nth-child(2) { margin-top: 48px; }
        .ap2-card:nth-child(3) { margin-top: 96px; }

        .ap2-card-icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: #eff4ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          font-size: 24px;
          transition: background 0.22s ease, color 0.22s ease,
                      transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ap2-card:hover .ap2-card-icon {
          background: #dbeafe;
          color: #1d4ed8;
          transform: rotate(-8deg) scale(1.08);
        }

        .ap2-card-num {
          position: absolute;
          top: 28px;
          right: 28px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 52px;
          font-weight: 800;
          color: #081a3d;
          opacity: 0.06;
          line-height: 1;
          letter-spacing: -2px;
          pointer-events: none;
          user-select: none;
        }

        .ap2-card-title {
          font-family: 'Inter Tight', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #081a3d;
          line-height: 1.2;
          letter-spacing: -0.4px;
          margin-bottom: 12px;
        }

        .ap2-card-desc {
          font-size: 14px;
          font-weight: 400;
          color: #6b7a99;
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .ap2-divider {
          height: 1px;
          background: #e4e9f4;
          margin-bottom: 24px;
        }

        .ap2-bullet {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-bottom: 11px;
        }
        .ap2-bullet:last-child { margin-bottom: 0; }

        .ap2-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #eff4ff;
          border: 1px solid #bfd0f7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ap2-bullet-text {
          font-size: 13.5px;
          font-weight: 500;
          color: #374151;
          line-height: 1.5;
        }

        /* ── Responsive: tablet & below ── */
        @media (max-width: 1023px) {
          .ap2-grid { grid-template-columns: 1fr; gap: 16px; }
          .ap2-card:nth-child(2),
          .ap2-card:nth-child(3) { margin-top: 0; }
          .ap2-header-row { flex-direction: column; align-items: flex-start; gap: 28px; }
          .ap2-header-right { max-width: 100%; margin-top: 0; }
          .ap2-cta { align-self: flex-start; }
        }

        /* ── Responsive: tablet 2-up ── */
        @media (min-width: 640px) and (max-width: 1023px) {
          .ap2-grid { grid-template-columns: repeat(2, 1fr); }
          .ap2-card:nth-child(3) { grid-column: 1 / -1; }
        }

        /* ── Responsive: phones ── */
        @media (max-width: 639px) {
          .ap2-sub { max-width: 100%; }
          .ap2-card { padding: 28px 22px 30px; }
          .ap2-card-num { font-size: 40px; top: 20px; right: 20px; }
          .ap2-cta { padding: 6px 6px 6px 20px; font-size: 11px; }
        }

        /* ── Responsive: small phones ── */
        @media (max-width: 420px) {
          .ap2-card { padding: 24px 18px 26px; border-radius: 16px; }
          .ap2-card-icon { width: 46px; height: 46px; font-size: 20px; margin-bottom: 22px; }
          .ap2-card-title { font-size: 19px; }
          .ap2-card-desc { font-size: 13.5px; }
          .ap2-bullet-text { font-size: 13px; }
          .ap2-eyebrow { font-size: 10px; }
        }
      `}</style>

      <section id="approach" ref={sectionRef} className="ap2-section">
        <div className="ap2-container">
          {/* ── Header row ── */}
          <div className="ap2-header-row">
            <div className="ap2-header-left" data-reveal data-delay="0">
              <p className="ap2-eyebrow">Our Process</p>
              <h2 className="ap2-heading">
                How We Get
                <br />
                <span>Outstanding</span>{" "}
                <span className="word-blue">Results.</span>
              </h2>
            </div>

            <div className="ap2-header-right" data-reveal data-delay="150">
              <p className="ap2-sub">
                A simple, professional process designed to deliver reliable
                exterior cleaning results for every property.
              </p>
              <Link href="#contact" className="ap2-cta">
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

                <div className="ap2-card-icon">
                  <i className={`ti ${step.icon}`} aria-hidden="true" />
                </div>

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

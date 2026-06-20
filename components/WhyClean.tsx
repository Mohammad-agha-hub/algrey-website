"use client";

import { useEffect, useRef } from "react";

const SIGNALS = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Fully Insured",
    desc: "Complete peace of mind with full public liability insurance.",
    filled: true,
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-5.86-5.86a.5.5 0 01.35-.86h13.18a.5.5 0 01.35.86l-5.86 5.86a1 1 0 01-1.42 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5v19" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12h19" />
      </svg>
    ),
    title: "Professional Equipment",
    desc: "Specialist cleaning systems for safe and effective results.",
    filled: false,
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    title: "Experienced Team",
    desc: "Skilled exterior cleaning professionals you can rely on.",
    filled: false,
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "Transparent quotes with no hidden costs or surprises.",
    filled: true,
  },
];

export default function WhyCleanSection() {
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
            el.classList.add("wc-visible");
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
        .wc-root { 
          font-family: var(--font-inter), sans-serif; 
        }
        .wc-display { 
          font-family: var(--font-inter-tight), sans-serif; 
        }

        /* ── Reveal Animation ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].wc-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }

        /* ── Section Eyebrow ── */
        .wc-eyebrow {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
        }

        /* ── Heading ── */
        .wc-heading {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-5);
          font-weight: var(--fw-medium);
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          color: #081a3d;
          margin-bottom: var(--space-s);
        }

        /* ── Body Text ── */
        .wc-body {
          font-size: var(--step-0);
          font-weight: var(--fw-normal);
          line-height: var(--leading-standard);
          color: #64748b;
        }

        /* ── Cards (Filled) ── */
        .wc-card-filled {
          background: #0d1b3e;
          border-radius: var(--radius-xl);
          padding: var(--space-l) var(--space-m);
          display: flex;
          flex-direction: column;
          gap: var(--space-s);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.3s ease;
        }
        .wc-card-filled:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(13, 27, 62, 0.28);
        }
        .wc-card-filled .wc-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(96, 165, 250, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #60a5fa;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), 
                      background 0.3s;
        }
        .wc-card-filled:hover .wc-icon-wrap {
          transform: scale(1.1) rotate(-4deg);
          background: rgba(96, 165, 250, 0.2);
        }
        .wc-card-filled .wc-title {
          color: #ffffff;
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-1);
          font-weight: var(--fw-bold);
          line-height: var(--leading-tight);
        }
        .wc-card-filled .wc-desc {
          color: #94a3b8;
          font-size: var(--step--1);
          line-height: var(--leading-loose);
        }

        /* ── Cards (Outline) ── */
        .wc-card-outline {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: var(--radius-xl);
          padding: var(--space-l) var(--space-m);
          display: flex;
          flex-direction: column;
          gap: var(--space-s);
          transition: border-color 0.2s, box-shadow 0.2s, 
                      transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .wc-card-outline:hover {
          border-color: #bfdbfe;
          box-shadow: 0 4px 24px rgba(37, 99, 235, 0.07);
          transform: translateY(-4px);
        }
        .wc-card-outline .wc-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), 
                      background 0.3s;
        }
        .wc-card-outline:hover .wc-icon-wrap {
          transform: scale(1.1) rotate(-4deg);
          background: #dbeafe;
        }
        .wc-card-outline .wc-title {
          color: #0d1b3e;
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-1);
          font-weight: var(--fw-bold);
          line-height: var(--leading-tight);
        }
        .wc-card-outline .wc-desc {
          color: #64748b;
          font-size: var(--step--1);
          line-height: var(--leading-loose);
        }

        /* ── CTA Button (matches hero/about) ── */
        .wc-btn-quote {
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
        .wc-btn-quote:hover {
          background: #1d4ed8;
          padding-right: calc(var(--space-s) + 0.5rem);
        }
        .wc-btn-quote:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .wc-btn-quote .wc-arrow-circle {
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
        .wc-btn-quote:hover .wc-arrow-circle {
          background: #dbeafe;
        }

        /* ── Secondary Link ── */
        .wc-btn-services {
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
        .wc-btn-services:hover { color: #2563eb; }
        .wc-btn-services:hover .wc-svc-arrow { transform: translateX(3px); }
        .wc-svc-arrow { display: flex; transition: transform 0.2s ease; }
      `}</style>

      <section
        ref={sectionRef}
        className="wc-root bg-[#F8FAFC] pt-4 lg:pt-12 px-5 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">
            {/* ── LEFT: Content ── */}
            <div className="w-full lg:w-[38%] shrink-0 lg:pt-4 flex flex-col gap-7">
              <p
                className="wc-eyebrow flex items-center gap-2"
                data-reveal
                data-delay="0"
              >
                <span className="w-2 h-2 rounded-full bg-[#2563eb] inline-block" />
                Why Choose Us
              </p>

              <h2 className="wc-heading" data-reveal data-delay="80">
                Exterior Cleaning{" "}
                <span className="text-[#2563eb]">Done Right.</span>
              </h2>

              <p className="wc-body" data-reveal data-delay="160">
                Professional exterior cleaning services delivered safely,
                reliably, and to the highest standard every time.
              </p>

              <div
                className="flex flex-wrap items-center gap-5 pt-1"
                data-reveal
                data-delay="240"
              >
                <a href="/enquiry-now" className="wc-btn-quote">
                  Get Quote
                  <span className="wc-arrow-circle">
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
                <a href="#services" className="wc-btn-services">
                  View Services
                  <span className="wc-svc-arrow">
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

            {/* ── RIGHT: 2×2 Grid ── */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SIGNALS.map((s, i) => (
                <div
                  key={s.title}
                  className={s.filled ? "wc-card-filled" : "wc-card-outline"}
                  data-reveal
                  data-delay={i * 90}
                >
                  <div className="wc-icon-wrap">{s.icon}</div>
                  <div>
                    <h3 className="wc-title mb-2">{s.title}</h3>
                    <p className="wc-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

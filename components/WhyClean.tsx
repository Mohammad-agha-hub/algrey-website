"use client";

import { useEffect, useRef } from "react";

const SIGNALS = [
  {
    icon: "ti-shield-check",
    title: "Fully Insured",
    desc: "Complete peace of mind with full public liability insurance.",
    filled: true,
  },
  {
    icon: "ti-tool",
    title: "Professional Equipment",
    desc: "Specialist cleaning systems for safe and effective results.",
    filled: false,
  },
  {
    icon: "ti-users",
    title: "Experienced Team",
    desc: "Skilled exterior cleaning professionals you can rely on.",
    filled: false,
  },
  {
    icon: "ti-receipt",
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
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.30.0/dist/tabler-icons.min.css');

        .wc-root    { font-family: 'Inter', sans-serif; }
        .wc-display { font-family: 'Inter Tight', sans-serif; }

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

        .wc-card-filled {
          background: #0d1b3e;
          border-radius: 18px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.3s ease;
        }
        .wc-card-filled:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 36px rgba(13,27,62,0.28);
        }
        .wc-card-filled .wc-icon-wrap {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(96,165,250,0.12);
          display: flex; align-items: center; justify-content: center;
          color: #60a5fa;
          font-size: 22px;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s;
        }
        .wc-card-filled:hover .wc-icon-wrap {
          transform: scale(1.1) rotate(-4deg);
          background: rgba(96,165,250,0.2);
        }
        .wc-card-filled .wc-title {
          color: #ffffff;
          font-family: 'Inter Tight', sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.25;
        }
        .wc-card-filled .wc-desc { color: #94a3b8; font-size: 13.5px; line-height: 1.75; }

        .wc-card-outline {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .wc-card-outline:hover {
          border-color: #bfdbfe;
          box-shadow: 0 4px 24px rgba(37,99,235,0.07);
          transform: translateY(-4px);
        }
        .wc-card-outline .wc-icon-wrap {
          width: 48px; height: 48px; border-radius: 12px;
          background: #eff6ff;
          display: flex; align-items: center; justify-content: center;
          color: #2563eb;
          font-size: 22px;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s;
        }
        .wc-card-outline:hover .wc-icon-wrap {
          transform: scale(1.1) rotate(-4deg);
          background: #dbeafe;
        }
        .wc-card-outline .wc-title {
          color: #0d1b3e;
          font-family: 'Inter Tight', sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.25;
        }
        .wc-card-outline .wc-desc { color: #64748b; font-size: 13.5px; line-height: 1.75; }

        /* ── CTA button — matches About section's btn-quote exactly ── */
        .wc-btn-quote {
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
        .wc-btn-quote:hover {
          background: #1d4ed8;
          padding-right: 13px;
        }
        .wc-btn-quote:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .wc-btn-quote .wc-arrow-circle {
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
        .wc-btn-quote:hover .wc-arrow-circle {
          background: #dbeafe;
        }

        /* ── Secondary link — matches About section's btn-services exactly ── */
        .wc-btn-services {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #0d1b3e;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
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
            {/* LEFT */}
            <div className="w-full lg:w-[38%] shrink-0 lg:pt-4 flex flex-col gap-7">
              <p
                className="flex items-center gap-2 text-[#2563eb] font-semibold text-[13px] uppercase tracking-[0.2em]"
                data-reveal
                data-delay="0"
              >
                <span className="w-2 h-2 rounded-full bg-[#2563eb] inline-block" />
                Why Choose Us
              </p>

              <h2
                className="wc-display text-[40px] sm:text-[50px] font-medium text-[#0d1b3e] leading-[1.1] tracking-[-0.5px]"
                data-reveal
                data-delay="80"
              >
                Exterior Cleaning <br></br>Done Right.
              </h2>

              <p
                className="text-[#64748b] text-[16px] leading-relaxed"
                data-reveal
                data-delay="160"
              >
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

            {/* RIGHT: 2×2 grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SIGNALS.map((s, i) => (
                <div
                  key={s.title}
                  className={s.filled ? "wc-card-filled" : "wc-card-outline"}
                  data-reveal
                  data-delay={i * 90}
                >
                  <div className="wc-icon-wrap">
                    <i className={`ti ${s.icon}`} aria-hidden="true" />
                  </div>
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

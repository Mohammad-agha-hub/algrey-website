"use client";

import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "How often should I have my gutters cleaned?",
    a: "We recommend having your gutters cleaned at least twice a year — typically in spring and autumn. However, if you have many trees near your property, you may need more frequent cleaning to prevent blockages and potential damage.",
  },
  {
    q: "What happens if I don't clean my gutters?",
    a: "Neglected gutters can lead to serious problems including water damage to your roof, walls, and foundation; pest infestations; ice dams in winter; and even structural damage to your property. Regular cleaning prevents these costly issues.",
  },
  {
    q: "Are your technicians insured and certified?",
    a: "Absolutely. All our technicians are fully insured, certified, and trained in safety procedures. We carry comprehensive liability insurance to protect both our team and your property during every cleaning service.",
  },
  {
    q: "How long does a typical gutter cleaning take?",
    a: "The duration depends on the size of your property and the condition of your gutters. For an average 3-bedroom house, gutter cleaning typically takes 1–2 hours. Larger properties or those with significant debris may take longer.",
  },
  {
    q: "Do you offer emergency gutter cleaning services?",
    a: "Yes, we offer emergency gutter cleaning services for situations where blocked gutters are causing immediate water damage or flooding. Our team can typically respond within 2–4 hours depending on your location.",
  },
  {
    q: "Do you clean gutters on commercial properties?",
    a: "Yes, we provide gutter cleaning services for commercial properties of all sizes, including office buildings, retail centres, and industrial facilities. We have specialised equipment to safely clean gutters at any height.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Revealed state for accordion items lives in React state (not a DOM
  // classList mutation) because their className already changes on click
  // (open/closed). Two sources writing to the same className would fight —
  // whichever rendered last wins, which is what caused items to "disappear"
  // when clicked. Header text (eyebrow/heading/sub) never changes className
  // on click, so the simpler DOM-mutation approach is safe for those.
  const [revealedItems, setRevealedItems] = useState<boolean[]>(() =>
    FAQS.map(() => false),
  );

  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Header elements — safe to mutate the DOM directly, className never
    // changes for these on re-render.
    const headerEls = section.querySelectorAll<HTMLElement>(
      "[data-reveal-header]",
    );
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("fq-visible");
            headerObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    headerEls.forEach((el) => headerObserver.observe(el));

    // Accordion items — drive visibility through React state so it
    // survives the re-render triggered when openIdx changes on click.
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = (entry.target as HTMLElement).dataset.index;
          if (entry.isIntersecting && idxAttr !== undefined) {
            const idx = Number(idxAttr);
            setRevealedItems((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            itemObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    itemRefs.current.forEach((el) => el && itemObserver.observe(el));

    return () => {
      headerObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');

        .fq-section {
          font-family: 'Inter', sans-serif;
          background: #f8f9fc;
        }

        /* ── Reveal animation: header text ── */
        [data-reveal-header] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal-header].fq-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Left column ── */
        .fq-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 20px;
        }
        .fq-eyebrow::before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          flex-shrink: 0;
        }

        .fq-heading {
          font-family: 'Inter Tight', sans-serif;
          font-size: clamp(32px, 3.8vw, 50px);
          font-weight: 500;
          color: #081a3d;
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin: 0 0 20px;
        }
        .fq-heading em {
          font-style: normal;
          color: #2563eb;
        }

        .fq-sub {
          font-size: 14.5px;
          font-weight: 400;
          color: #6b7a99;
          line-height: 1.7;
          margin: 0 0 36px;
        }

        /* stat pills */
        .fq-stats {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .fq-stat {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #ffffff;
          border: 1px solid #e4e9f4;
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: 0 1px 6px rgba(8,26,61,0.05);
        }
        .fq-stat-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #eff4ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .fq-stat-num {
          font-family: 'Inter Tight', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #081a3d;
          line-height: 1;
          letter-spacing: -0.5px;
        }
        .fq-stat-label {
          font-size: 12px;
          font-weight: 500;
          color: #6b7a99;
          line-height: 1.3;
          margin-top: 2px;
        }

        /* ── Accordion ── */
        .fq-item {
          background: #ffffff;
          border: 1px solid #e4e9f4;
          border-radius: 14px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(22px);
          transition: border-color 0.22s, box-shadow 0.22s,
                      opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fq-item.fq-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fq-item.open {
          border-color: #2563eb;
          box-shadow: 0 4px 20px rgba(37,99,235,0.10);
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal-header],
          .fq-item {
            opacity: 1;
            transform: none;
            transition: border-color 0.22s, box-shadow 0.22s;
          }
        }

        .fq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.18s;
        }
        .fq-trigger:hover { background: #f5f7ff; }
        .fq-item.open .fq-trigger { background: #f5f7ff; }

        .fq-q {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #081a3d;
          line-height: 1.35;
          letter-spacing: -0.2px;
        }

        .fq-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #94a3b8;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.26s;
        }
        .fq-item.open .fq-icon {
          background: #2563eb;
          border-color: #2563eb;
          color: #ffffff;
          transform: rotate(45deg);
        }

        .fq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.28s ease;
          padding: 0 22px;
        }
        .fq-item.open .fq-answer {
          max-height: 300px;
          padding: 0 22px 20px;
        }

        .fq-answer-inner {
          font-size: 14px;
          font-weight: 400;
          color: #6b7a99;
          line-height: 1.7;
          border-top: 1px solid #e4e9f4;
          padding-top: 16px;
        }

        /* ── Layout ── */
        .fq-grid {
          display: grid;
          grid-template-columns: 1fr 1.55fr;
          gap: 72px;
          align-items: start;
        }

        @media (max-width: 1023px) {
          .fq-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .fq-left { position: static; }
          .fq-stats { flex-direction: row; flex-wrap: wrap; }
          .fq-stat { flex: 1; min-width: 160px; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="fq-section px-5 py-8 sm:px-8 lg:px-16"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="fq-grid">
            {/* ── Left: heading + stats ── */}
            <div className="fq-left">
              <p className="fq-eyebrow" data-reveal-header data-delay="0">
                Got Questions?
              </p>
              <h2 className="fq-heading" data-reveal-header data-delay="80">
                Answers to your
                <br />
                <em>common</em> queries.
              </h2>
              <p className="fq-sub" data-reveal-header data-delay="140">
                Everything you need to know about our gutter cleaning and
                property maintenance services. Can't find the answer you're
                looking for? Give us a call.
              </p>
            </div>

            {/* ── Right: accordion ── */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-index={i}
                  className={`fq-item${revealedItems[i] ? " fq-visible" : ""}${openIdx === i ? " open" : ""}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <button
                    className="fq-trigger"
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  >
                    <span className="fq-q">{faq.q}</span>
                    <span className="fq-icon">
                      <svg
                        width="13"
                        height="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="fq-answer">
                    <p className="fq-answer-inner">{faq.a}</p>
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

"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How often should I have my gutters cleaned?",
    a: "We recommend at least twice a year — once in late spring and once in autumn after the leaves have fallen. Properties with overhanging trees or flat roofs may need cleaning more frequently, up to three or four times a year.",
  },
  {
    q: "What happens if I don't clean my gutters?",
    a: "Blocked gutters overflow onto your fascia boards, walls and foundations — causing damp, rot, mould and potentially serious structural damage. The cost of fixing water damage far exceeds the cost of a regular clean.",
  },
  {
    q: "Are your technicians insured and certified?",
    a: "Yes. All our technicians carry £5M public liability insurance on every job and are fully trained in working at height safely. We're members of the British Cleaning Association and carry all required certifications.",
  },
  {
    q: "How long does a typical gutter cleaning take?",
    a: "Most standard residential properties take between 45 minutes and 2 hours depending on the size of the property and the level of blockage. We'll give you an accurate time estimate when we quote.",
  },
  {
    q: "Do you offer emergency gutter cleaning services?",
    a: "Yes — we offer same-day and next-day emergency call-outs for urgent blockages or overflowing gutters causing active damage. Call us directly on 0800 123 456 and we'll do our best to get to you the same day.",
  },
  {
    q: "Do you clean gutters on commercial properties?",
    a: "Absolutely. We work with landlords, letting agents, housing associations and commercial property managers across London and Surrey. We can arrange regular scheduled maintenance contracts too.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover London, Surrey and surrounding areas including Birmingham, Guildford, Croydon, Kingston, Sutton and more. If you're unsure whether we cover your area, just give us a call or drop us a message.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;600;700;800&display=swap');
        .faq-body    { font-family: 'Inter', sans-serif; }
        .faq-heading { font-family: 'Manrope', sans-serif; }

        .faq-item {
          border: 1px solid #e8edf5;
          border-radius: 14px;
          overflow: hidden;
          transition: border-color .2s, box-shadow .2s;
        }
        .faq-item.open {
          border-color: #2563eb;
          box-shadow: 0 4px 24px rgba(37,99,235,.1);
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background .2s;
        }
        .faq-trigger:hover { background: #f8f9ff; }
        .faq-item.open .faq-trigger { background: #f8f9ff; }

        .faq-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #94a3b8;
          transition: background .2s, border-color .2s, color .2s, transform .25s;
        }
        .faq-item.open .faq-icon {
          background: #2563eb;
          border-color: #2563eb;
          color: #ffffff;
          transform: rotate(45deg);
        }

        .faq-body-text {
          max-height: 0;
          overflow: hidden;
          transition: max-height .35s ease, padding .3s ease;
          padding: 0 24px;
        }
        .faq-item.open .faq-body-text {
          max-height: 300px;
          padding: 0 24px 20px;
        }
      `}</style>

      <section className="faq-body bg-white py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
              Got Questions?
            </p>
            <h2 className="faq-heading text-[clamp(30px,4.5vw,48px)] font-extrabold text-[#081a3d] leading-tight tracking-tight mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-xl mx-auto">
              Everything you need to know about our gutter cleaning and property
              maintenance services.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openIdx === i ? "open" : ""}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span
                    className="faq-heading text-[15px] font-bold leading-snug"
                    style={{ color: openIdx === i ? "#081a3d" : "#0d2257" }}
                  >
                    {faq.q}
                  </span>
                  <span className="faq-icon">
                    <svg
                      className="w-3.5 h-3.5"
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
                <div className="faq-body-text">
                  <p className="text-slate-500 text-[14px] leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

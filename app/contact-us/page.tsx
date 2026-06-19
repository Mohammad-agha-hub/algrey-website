"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";
import CTASection from "@/components/CTA";

/* ═══════════════════════════════════════════════════════════════════
   DESIGN TOKENS — matched to the about page:
   - Fonts: Inter Tight (display/headings) + Inter (body)
   - Navy:  #0d1b3e   Blue accent: #2563eb
   - Body text: slate-500 (#64748b)   Muted/secondary: slate-400 (#94a3b8)
   - Light section bg: #f8fafc (slate-50)   Card border: #e2e8f0 (slate-200)
═══════════════════════════════════════════════════════════════════ */
function ContactStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

      .ct-display { font-family: 'Inter Tight', sans-serif; }
      .ct-body    { font-family: 'Inter', sans-serif; }

      @keyframes ct-fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes ct-fadeIn { from { opacity: 0; } to { opacity: 1; } }
      .ct-anim-2 { animation: ct-fadeUp .65s .10s ease both; }
      .ct-anim-3 { animation: ct-fadeUp .65s .22s ease both; }
      .ct-anim-4 { animation: ct-fadeUp .65s .34s ease both; }
      @media (prefers-reduced-motion: reduce) {
        .ct-anim-2, .ct-anim-3, .ct-anim-4 { animation: none; opacity: 1; transform: none; }
      }

      /* ── Eyebrow (shared dot-bullet style) ── */
      .ct-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
      }
      .ct-eyebrow .dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      /* ── CTA pill button ── */
      .ct-cta {
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
        border: none;
        cursor: pointer;
        transition: background 0.22s ease, gap 0.2s ease,
                    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        flex-shrink: 0;
      }
      .ct-cta:hover { background: #1d4ed8; gap: 6px; transform: scale(1.03); }
      .ct-cta:active { transform: scale(0.96); }
      .ct-cta-circle {
        width: 36px; height: 36px;
        border-radius: 50%;
        background: #ffffff;
        color: #0d1b3e;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 16px;
        flex-shrink: 0;
        transition: background 0.22s, color 0.22s;
      }
      .ct-cta:hover .ct-cta-circle { background: #dbeafe; }

      .ct-cta-outline {
        background: transparent;
        border: 1.5px solid rgba(255,255,255,0.55);
        color: #ffffff;
      }
      .ct-cta-outline:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
      .ct-cta-outline .ct-cta-circle { background: rgba(255,255,255,0.15); color: #fff; }
      .ct-cta-outline:hover .ct-cta-circle { background: rgba(255,255,255,0.25); }

      /* ── Info cards (white, matches about page's .abt-card-light family) ── */
      .ct-info-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 32px 28px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        cursor: default;
        transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease;
      }
      .ct-info-card:hover {
        border-color: #2563eb;
        box-shadow: 0 16px 40px rgba(13,27,62,.1);
        transform: translateY(-4px);
      }
      .ct-info-icon-badge {
        width: 52px; height: 52px;
        border-radius: 14px;
        background: #eff4ff;
        color: #2563eb;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .ct-ic-text { color: #64748b; font-size: 13.5px; line-height: 1.7; }
      .ct-ic-link { color: #2563eb; font-size: 13px; font-weight: 700; text-decoration: none; transition: color 0.2s ease; }
      .ct-ic-link:hover { color: #1d4ed8; }

      /* ── Reusable left-aligned section header ── */
      .ct-section-head {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 32px;
        margin-bottom: 30px;
      }
      @media (min-width: 1024px) {
        .ct-section-head {
          flex-direction: row;
          justify-content: space-between;
        }
      }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="ct-body relative min-h-[68vh] flex flex-col">
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact.webp"
          alt="Contact Al Grey's Cleaning Services"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/95 via-[#0d1b3e]/80 to-transparent" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/90 via-[#0d1b3e]/85 to-[#0d1b3e]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/90 via-transparent to-transparent" />
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-36 pb-16 flex flex-col justify-end">
        <p className="ct-anim-2 ct-eyebrow text-[#7da6f5] mb-4">
          <span className="dot" style={{ background: "#7da6f5" }} />
          We&apos;d Love to Hear From You
        </p>
        <h1 className="ct-anim-3 ct-display text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] font-medium tracking-[-1.5px] mb-5 text-white">
          Get In Touch
          <br />
          <span className="text-[#5b8def]">With Us</span>
        </h1>
        <p className="ct-anim-4 text-[#cbd5e1] text-base leading-relaxed max-w-md mb-8">
          Ready to protect your property? Contact Al Grey&apos;s Cleaning
          Services today for a free consultation and no-obligation quote.
        </p>
        <div className="ct-anim-4 flex flex-col sm:flex-row gap-3">
          <a href="tel:01215172372" className="ct-cta">
            Call Us Now
            <span className="ct-cta-circle">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </span>
          </a>
          <Link href="/enquiry-now" className="ct-cta ct-cta-outline">
            Get a Free Quote
            <span className="ct-cta-circle">
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
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   INFO CARDS — white cards
═══════════════════════════════════════════════════════════════════ */
const INFO_CARDS = [
  {
    title: "Our Location",
    lines: ["145 Barford St, Birmingham", "B5 6AH, United Kingdom"],
    link: { label: "Get Directions →", href: "https://maps.google.com" },
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    title: "Call Us",
    lines: ["Main: 0121 517 2372", "Emergency: 07931 175070"],
    link: { label: "Call Now →", href: "tel:01215172372" },
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Email Us",
    lines: [
      "info@algreyscleaningservices.com",
      "support@algreyscleaningservices.com",
    ],
    link: {
      label: "Send Email →",
      href: "mailto:info@algreyscleaningservices.com",
    },
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: "Opening Hours",
    lines: ["Mon – Sat: 7:00am – 7:00pm", "Emergency: 24/7"],
    link: { label: "Book a Slot →", href: "/enquiry-now" },
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

function InfoCardsSection() {
  return (
    <section className="ct-body bg-white py-20 lg:py-28 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="ct-section-head">
          <div className="flex flex-col gap-5 lg:max-w-[52%]">
            <p className="ct-eyebrow text-[#2563eb]">
              <span className="dot" style={{ background: "#2563eb" }} />
              Find Us
            </p>
            <h2 className="ct-display text-[36px] sm:text-[44px] lg:text-[48px] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px]">
              How to Reach Us
            </h2>
          </div>
          <p className="text-[#64748b] text-[16px] leading-relaxed lg:max-w-[360px]">
            Whichever way suits you best — call, email, or drop by — we&apos;re
            ready to help.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INFO_CARDS.map((card) => (
            <div key={card.title} className="ct-info-card">
              <div className="ct-info-icon-badge">{card.icon}</div>
              <div>
                <h3 className="ct-display text-[#0d1b3e] text-[19px] font-semibold leading-snug tracking-[-0.2px] mb-3">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p key={line} className="ct-ic-text">
                    {line}
                  </p>
                ))}
                <a
                  href={card.link.href}
                  className="ct-ic-link inline-block mt-4"
                >
                  {card.link.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════════════════════════ */
const FAQS = [
  {
    q: "How often should I clean my gutters?",
    a: "We recommend cleaning your gutters at least twice a year - once in the spring and once in the autumn. However, if you have overhanging trees, you may need more frequent cleaning to prevent blockages.",
  },
  {
    q: "Do you offer emergency gutter cleaning services?",
    a: "Yes, we offer 24/7 emergency gutter cleaning services for situations where blocked gutters are causing immediate damage to your property. Contact us anytime for emergency assistance.",
  },
  {
    q: "Are you insured and certified?",
    a: "Yes, we are fully insured and our team members are certified professionals with extensive training in gutter cleaning and property maintenance. Your property is in safe hands with us.",
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve Birmingham and the surrounding areas. However, we do travel for larger commercial projects. Contact us to check if we cover your location.",
  },
];

function FAQSection() {
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
        .fq-section {
          font-family: 'Inter', sans-serif;
          background: #f8fafc;
        }

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

        .fq-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.22em;
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
          font-size: clamp(32px, 3.8vw, 48px);
          font-weight: 500;
          color: #0d1b3e;
          line-height: 1.08;
          letter-spacing: -1px;
          margin: 0 0 20px;
        }
        .fq-heading em {
          font-style: normal;
          color: #2563eb;
        }

        .fq-sub {
          font-size: 14.5px;
          font-weight: 400;
          color: #64748b;
          line-height: 1.7;
          margin: 0 0 36px;
        }

        .fq-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
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
        .fq-trigger:hover { background: #f8fafc; }
        .fq-item.open .fq-trigger { background: #f8fafc; }

        .fq-q {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 500;
          color: #0d1b3e;
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
          color: #64748b;
          line-height: 1.7;
          border-top: 1px solid #e2e8f0;
          padding-top: 16px;
        }

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
        }
      `}</style>

      <section
        ref={sectionRef}
        className="fq-section px-5 py-20 lg:py-28 sm:px-8 lg:px-16"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="fq-grid">
            {/* ── Left: heading ── */}
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
                property maintenance services. Can&apos;t find the answer
                you&apos;re looking for? Give us a call.
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

/* ═══════════════════════════════════════════════════════════════════
   MAP
═══════════════════════════════════════════════════════════════════ */
function MapSection() {
  return (
    <section
      className="ct-body py-16 lg:py-24 px-5 sm:px-8 lg:px-16"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="ct-eyebrow text-[#2563eb] justify-center mb-4">
            <span className="dot" style={{ background: "#2563eb" }} />
            Our Location
          </p>
          <h2 className="ct-display text-[clamp(28px,3.5vw,40px)] font-medium text-[#0d1b3e] leading-tight tracking-[-1px]">
            Find Us in Birmingham
          </h2>
        </div>
        <div
          className="rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-lg"
          style={{ height: 400 }}
        >
          <iframe
            title="Al Grey's Cleaning Services Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.3!2d-1.8952!3d52.4726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s145+Barford+St%2C+Birmingham+B5+6AH!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function ContactPage() {
  return (
    <>
      <ContactStyles />
      <HeroSection />
      <InfoCardsSection />
      <FAQSection />
      <MapSection />
      <CTASection />
      <CTAAndFooter />
    </>
  );
}

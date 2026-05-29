"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";

/* ═══════════════════════════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════════════════════════ */
function ContactStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@400;600;700;800;900&display=swap');

      .ct-display { font-family: 'Bebas Neue', sans-serif; }
      .ct-heading  { font-family: 'Manrope', sans-serif; }
      .ct-body     { font-family: 'Inter', sans-serif; }

      @keyframes ct-fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes ct-fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      .ct-anim-2 { animation: ct-fadeUp .65s .10s ease both; }
      .ct-anim-3 { animation: ct-fadeUp .65s .22s ease both; }
      .ct-anim-4 { animation: ct-fadeUp .65s .34s ease both; }

      /* Info Cards */
      .ct-info-card {
        background: #0d2257;
        border-radius: 16px;
        padding: 36px 28px 32px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        cursor: default;
        transition: background 0.3s ease;
      }
      .ct-info-card:hover { background: #FFF265; }
      .ct-info-card .ct-ic-icon  { color: #ffffff; transition: color 0.3s ease; }
      .ct-info-card:hover .ct-ic-icon { color: #0d2257; }
      .ct-info-card .ct-ic-title { color: #ffffff; transition: color 0.3s ease; }
      .ct-info-card:hover .ct-ic-title { color: #0d2257; }
      .ct-info-card .ct-ic-text  { color: #94a8cc; font-size: 13.5px; line-height: 1.7; transition: color 0.3s ease; }
      .ct-info-card:hover .ct-ic-text { color: #081a3d; }
      .ct-info-card .ct-ic-link  { color: #2563eb; font-size: 13px; font-weight: 700; text-decoration: none; transition: color 0.3s ease; }
      .ct-info-card:hover .ct-ic-link { color: #081a3d; text-decoration: underline; }

      /* FAQ */
      .ct-faq-item {
        border: 1px solid #e8edf5;
        border-radius: 14px;
        overflow: hidden;
        transition: border-color .2s, box-shadow .2s;
      }
      .ct-faq-item.open { border-color: #2563eb; box-shadow: 0 4px 24px rgba(37,99,235,.1); }
      .ct-faq-trigger {
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
      .ct-faq-trigger:hover { background: #f8f9ff; }
      .ct-faq-item.open .ct-faq-trigger { background: #f8f9ff; }
      .ct-faq-icon {
        width: 28px; height: 28px;
        border-radius: 50%;
        border: 1.5px solid #cbd5e1;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        color: #94a3b8;
        transition: background .2s, border-color .2s, color .2s, transform .25s;
      }
      .ct-faq-item.open .ct-faq-icon {
        background: #2563eb; border-color: #2563eb; color: #ffffff; transform: rotate(45deg);
      }
      .ct-faq-body-text {
        max-height: 0; overflow: hidden;
        transition: max-height .35s ease, padding .3s ease;
        padding: 0 24px;
      }
      .ct-faq-item.open .ct-faq-body-text { max-height: 300px; padding: 0 24px 20px; }
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
          src="/contact.jpg"
          alt="Contact Al Grey's Cleaning Services"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#081a3d]/95 via-[#0d2257]/80 to-transparent" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#081a3d]/90 via-[#0d2257]/85 to-[#061530]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061530]/90 via-transparent to-transparent" />
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-36 pb-16 flex flex-col justify-end">
        <p className="ct-anim-2 inline-flex items-center gap-2 text-[#FFF265] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
          We'd Love to Hear From You
        </p>
        <h1 className="ct-anim-3 ct-display tracking-[4px] text-5xl sm:text-6xl xl:text-7xl leading-[0.95] font-bold uppercase mb-5 text-white">
          Get In Touch
          <br />
          <span className="text-blue-600">With Us</span>
        </h1>
        <p className="ct-anim-4 text-gray-300 text-base leading-relaxed max-w-md mb-8">
          Ready to protect your property? Contact Al Grey's Cleaning Services
          today for a free consultation and no-obligation quote.
        </p>
        <div className="ct-anim-4 flex flex-col sm:flex-row gap-3">
          <a
            href="tel:01215172372"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-md transition-all duration-200 shadow-lg shadow-blue-900/40"
          >
            <svg
              className="w-4 h-4"
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
            Call Us Now
          </a>
          <Link
            href="/enquiry-now"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-md transition-all duration-200 hover:bg-white/10"
          >
            <svg
              className="w-4 h-4"
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
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   INFO CARDS
═══════════════════════════════════════════════════════════════════ */
const INFO_CARDS = [
  {
    title: "Our Location",
    lines: ["145 Barford St, Birmingham", "B5 6AH, United Kingdom"],
    link: { label: "Get Directions →", href: "https://maps.google.com" },
    icon: (
      <svg
        className="w-9 h-9"
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
        className="w-9 h-9"
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
        className="w-9 h-9"
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
    lines: ["Mon – Sat: 7:00am – 7:00pm", "Sun: 9:00am – 5:00pm"],
    link: { label: "Book a Slot →", href: "/enquiry-now" },
    icon: (
      <svg
        className="w-9 h-9"
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
    <section className="ct-body bg-white py-20 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            Find Us
          </p>
          <h2 className="ct-heading text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0d2257] leading-tight tracking-tight">
            How to Reach Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INFO_CARDS.map((card) => (
            <div key={card.title} className="ct-info-card">
              <div className="ct-ic-icon">{card.icon}</div>
              <div>
                <h3 className="ct-heading ct-ic-title text-[20px] font-extrabold leading-snug tracking-[-0.3px] mb-3">
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
   QUOTE CTA BANNER
═══════════════════════════════════════════════════════════════════ */
function QuoteCTASection() {
  return (
    <section
      className="ct-body py-20 px-5 sm:px-8 lg:px-16"
      style={{ background: "#f8f9ff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0d2257] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: text */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <p className="inline-flex items-center gap-2 text-[#FFF265] font-semibold text-xs uppercase tracking-[0.22em] mb-4">
                Ready to get started?
              </p>
              <h2 className="ct-heading text-[clamp(28px,3.5vw,42px)] font-extrabold text-white leading-tight tracking-tight mb-4">
                Need a Price? <br />
                Get a Free Quote
              </h2>
              <p className="text-[#94a8cc] text-[14px] leading-relaxed mb-8 max-w-md">
                Fill in our quick enquiry form and we'll come back to you within
                2 hours with a clear, no-obligation quote — no hidden fees, no
                surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/enquiry-now"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg"
                >
                  Get Your Free Quote
                  <svg
                    className="w-4 h-4"
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
                </Link>
                <a
                  href="tel:01215172372"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/70 text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4"
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
                  Or Call Us
                </a>
              </div>
            </div>

            {/* Right: trust points */}
            <div className="p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center gap-5">
              {[
                {
                  label: "Response within 2 hours",
                  sub: "We get back to every enquiry fast",
                },
                {
                  label: "Transparent, fixed pricing",
                  sub: "No hidden fees or surprise charges",
                },
                {
                  label: "Fully insured & certified",
                  sub: "Complete peace of mind guaranteed",
                },
                {
                  label: "15+ years' experience",
                  sub: "Trusted by thousands of homeowners",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="#fff"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2,7 5.5,10.5 12,3" />
                    </svg>
                  </span>
                  <div>
                    <p className="ct-heading text-white text-[14px] font-bold">
                      {item.label}
                    </p>
                    <p className="text-[#94a8cc] text-[12.5px] mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
    a: "We recommend cleaning your gutters at least twice a year — once in spring and once in autumn. If you have overhanging trees, quarterly cleaning may be needed to prevent blockages and water damage.",
  },
  {
    q: "Do you offer emergency gutter cleaning services?",
    a: "Yes, we offer emergency services for urgent situations such as blocked downpipes causing flooding or structural damage. Call our emergency line on 07931 175070 and we'll aim to be with you as quickly as possible.",
  },
  {
    q: "Are you insured and certified?",
    a: "Absolutely. We carry full public liability insurance and all our operatives are DBS checked. We are also a proud member of the British Cleaning Association, ensuring all work meets industry standards.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Birmingham and the surrounding Midlands area, including Solihull, Sutton Coldfield, Wolverhampton, Coventry, and more. Contact us with your postcode and we'll confirm coverage.",
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="ct-body bg-white py-24 px-5 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            Common Questions
          </p>
          <h2 className="ct-heading text-[clamp(30px,4.5vw,48px)] font-extrabold text-[#081a3d] leading-tight tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xl mx-auto">
            Find answers to common questions about our cleaning services.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`ct-faq-item ${openIdx === i ? "open" : ""}`}
            >
              <button
                className="ct-faq-trigger"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span
                  className="ct-heading text-[15px] font-bold leading-snug"
                  style={{ color: openIdx === i ? "#081a3d" : "#0d2257" }}
                >
                  {faq.q}
                </span>
                <span className="ct-faq-icon">
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
              <div className="ct-faq-body-text">
                <p className="text-slate-500 text-[14px] leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAP
═══════════════════════════════════════════════════════════════════ */
function MapSection() {
  return (
    <section
      className="ct-body py-16 px-5 sm:px-8 lg:px-16"
      style={{ background: "#f8f9ff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            Our Location
          </p>
          <h2 className="ct-heading text-[clamp(28px,3.5vw,40px)] font-extrabold text-[#0d2257] leading-tight tracking-tight">
            Find Us in Birmingham
          </h2>
        </div>
        <div
          className="rounded-2xl overflow-hidden border border-[#e8edf5] shadow-lg"
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
      <QuoteCTASection />
      <FAQSection />
      <MapSection />
      <CTAAndFooter />
    </>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";

/* ═══════════════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════════════ */
const ALL_SERVICES = [
  "Gutter Cleaning",
  "Roof Cleaning",
  "Fascia & Soffit Cleaning",
  "Pressure Washing",
  "Window Cleaning",
  "Driveway Cleaning",
  "Patio Cleaning",
  "Render Cleaning",
  "Brick Cleaning",
  "Cladding Cleaning",
  "Downpipe Cleaning",
  "Graffiti Removal",
  "Commercial Gutter Cleaning",
  "Conservatory Roof Cleaning",
];

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
      @keyframes ct-dropdownIn {
        from { opacity: 0; transform: translateY(-6px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .ct-anim-1 { animation: ct-fadeUp .65s ease both; }
      .ct-anim-2 { animation: ct-fadeUp .65s .10s ease both; }
      .ct-anim-3 { animation: ct-fadeUp .65s .22s ease both; }
      .ct-anim-4 { animation: ct-fadeUp .65s .34s ease both; }
      .ct-anim-5 { animation: ct-fadeIn  .8s .48s ease both; }

      /* Breadcrumb */
      .ct-breadcrumb { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
      .ct-breadcrumb a { color: rgba(255,255,255,0.5); font-size: 12px; font-weight: 500; text-decoration: none; transition: color .2s; }
      .ct-breadcrumb a:hover { color: rgba(255,255,255,0.9); }
      .ct-breadcrumb .bc-sep    { color: rgba(255,255,255,0.3); font-size: 12px; }
      .ct-breadcrumb .bc-active { color: #FFF265; font-size: 12px; font-weight: 600; }

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

      /* Dropdown */
      .ct-dropdown-list {
        animation: ct-dropdownIn 0.15s ease both;
        scrollbar-width: thin;
        scrollbar-color: #d1d5db transparent;
      }
      .ct-dropdown-list::-webkit-scrollbar { width: 4px; }
      .ct-dropdown-list::-webkit-scrollbar-track { background: transparent; }
      .ct-dropdown-list::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 99px; }

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

      /* Stat pill */
      .ct-stat-pill {
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 16px; padding: 20px 16px; text-align: center;
        backdrop-filter: blur(6px);
      }

      /* Map placeholder */
      .ct-map-wrap {
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid #e8edf5;
        box-shadow: 0 8px 40px rgba(13,34,87,.08);
        background: #f0f4ff;
        height: 360px;
        display: flex; align-items: center; justify-content: center;
        flex-direction: column; gap: 12px;
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
            href="#contact-form"
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Send a Message
          </a>
          <a
            href="tel:01215172372"
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Call Us Now
          </a>
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
   CONTACT FORM SECTION
═══════════════════════════════════════════════════════════════════ */
const TRUST_BULLETS = [
  "Free, no-obligation quotes",
  "Emergency services available",
  "15+ years of experience",
  "Fully insured and certified",
  "Response within 2 hours",
];

function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="ct-body py-24 px-5 sm:px-8 lg:px-16"
      style={{ background: "#f8f9ff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-2xl">
          {/* Left: trust panel */}
          <div
            className="lg:col-span-2 p-10 flex flex-col justify-between"
            style={{ background: "#0d2257" }}
          >
            <div>
              <p className="inline-flex items-center gap-2 text-[#FFF265] font-semibold text-xs uppercase tracking-[0.22em] mb-4">
                Let's Talk
              </p>
              <h2 className="ct-heading text-[clamp(26px,3vw,38px)] font-extrabold text-white leading-tight tracking-tight mb-5">
                Let's Start a Conversation
              </h2>
              <p className="text-[#94a8cc] text-[14px] leading-relaxed mb-8">
                We're here to answer any questions you may have about our
                cleaning services. Reach out and we'll respond as soon as we
                can.
              </p>
              <div className="flex flex-col gap-3">
                {TRUST_BULLETS.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "#2563eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="2,7 5.5,10.5 12,3" />
                      </svg>
                    </span>
                    <span className="ct-body text-[13.5px] font-semibold text-[#94a8cc]">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact quick-links */}
            <div className="mt-10 flex flex-col gap-4">
              <a
                href="tel:01215172372"
                className="flex items-center gap-3 text-white hover:text-[#FFF265] transition-colors duration-200"
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="ct-body text-xs text-[#94a8cc] font-semibold uppercase tracking-wider">
                    Call Us
                  </p>
                  <p className="ct-body text-sm font-bold">0121 517 2372</p>
                </div>
              </a>
              <a
                href="mailto:info@algreyscleaningservices.com"
                className="flex items-center gap-3 text-white hover:text-[#FFF265] transition-colors duration-200"
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div>
                  <p className="ct-body text-xs text-[#94a8cc] font-semibold uppercase tracking-wider">
                    Email Us
                  </p>
                  <p className="ct-body text-sm font-bold">
                    info@algreyscleaningservices.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-white p-10">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="ct-heading text-2xl font-bold text-gray-900">
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  Thanks, <strong>{form.name.split(" ")[0]}</strong>! We've
                  received your message and will be in touch within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      service: "",
                      message: "",
                    });
                  }}
                  className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-semibold underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h2 className="ct-heading text-2xl sm:text-[1.6rem] font-bold text-gray-900 leading-tight tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    We respond within 2 hours during business hours.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((o) => !o)}
                      className={`w-full flex items-center justify-between px-4 py-3 border rounded-lg text-sm bg-white transition-all duration-150 focus:outline-none ${dropdownOpen ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-200 hover:border-gray-300"} ${form.service ? "text-gray-800" : "text-gray-400"}`}
                    >
                      <span className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 shrink-0 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                          />
                        </svg>
                        {form.service || "Service Required"}
                      </span>
                      <svg
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="ct-dropdown-list absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-y-auto max-h-[180px]">
                        {ALL_SERVICES.map((s) => {
                          const isSel = form.service === s;
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => {
                                setForm((p) => ({ ...p, service: s }));
                                setDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors duration-100 ${isSel ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                              <span>{s}</span>
                              {isSel && (
                                <svg
                                  className="w-4 h-4 text-blue-500 shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message *  — Tell us about your requirements..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm py-3.5 rounded-lg transition-all duration-200 shadow-md shadow-blue-900/40"
                  >
                    Send Message →
                  </button>
                </div>
              </>
            )}
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
            Find answers to common questions about our gutter cleaning services.
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
      <ContactFormSection />
      <FAQSection />
      <MapSection />
      <CTAAndFooter />
    </>
  );
}

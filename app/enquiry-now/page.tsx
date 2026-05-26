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

const PROPERTY_TYPES = [
  "Detached House",
  "Semi-Detached House",
  "Terraced House",
  "Flat / Apartment",
  "Bungalow",
  "Commercial Property",
  "Industrial Unit",
  "Other",
];

const URGENCY_OPTIONS = [
  "As soon as possible",
  "Within 1 week",
  "Within 2 weeks",
  "Within a month",
  "Just getting a price",
];

/* ═══════════════════════════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════════════════════════ */
function EnquiryStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@400;600;700;800;900&display=swap');

      .enq-display { font-family: 'Bebas Neue', sans-serif; }
      .enq-heading { font-family: 'Manrope', sans-serif; }
      .enq-body    { font-family: 'Inter', sans-serif; }

      @keyframes enq-fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes enq-fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes enq-dropdownIn {
        from { opacity: 0; transform: translateY(-6px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .enq-anim-1 { animation: enq-fadeUp .65s ease both; }
      .enq-anim-2 { animation: enq-fadeUp .65s .10s ease both; }
      .enq-anim-3 { animation: enq-fadeUp .65s .22s ease both; }
      .enq-anim-4 { animation: enq-fadeUp .65s .34s ease both; }
      .enq-anim-5 { animation: enq-fadeIn  .8s .48s ease both; }

      /* Breadcrumb */
      .enq-breadcrumb { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
      .enq-breadcrumb a { color: rgba(255,255,255,0.5); font-size: 12px; font-weight: 500; text-decoration: none; transition: color .2s; }
      .enq-breadcrumb a:hover { color: rgba(255,255,255,0.9); }
      .enq-breadcrumb .bc-sep    { color: rgba(255,255,255,0.3); font-size: 12px; }
      .enq-breadcrumb .bc-active { color: #FFF265; font-size: 12px; font-weight: 600; }

      /* Why-choose mini cards */
      .enq-why-card {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 20px;
        border-radius: 14px;
        border: 1px solid #e8edf5;
        background: #ffffff;
        transition: border-color .2s, box-shadow .2s, transform .25s;
      }
      .enq-why-card:hover {
        border-color: #2563eb;
        box-shadow: 0 4px 24px rgba(37,99,235,.1);
        transform: translateY(-3px);
      }
      .enq-why-icon {
        width: 48px; height: 48px;
        border-radius: 12px;
        background: #0d2257;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        color: #ffffff;
        transition: background .3s ease;
      }
      .enq-why-card:hover .enq-why-icon { background: #2563eb; }

      /* Service pricing cards */
      .enq-svc-card {
        background: #0d2257;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: transform .28s ease, box-shadow .28s ease;
      }
      .enq-svc-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 24px 56px rgba(0,0,0,.3);
      }
      .enq-svc-card-header {
        padding: 28px 28px 20px;
        background: #2563eb;
      }
      .enq-svc-card:nth-child(2) .enq-svc-card-header { background: #0d2257; border-bottom: 1px solid #1a3070; }
      .enq-svc-card:nth-child(3) .enq-svc-card-header { background: #1a3070; }
      .enq-svc-card-body { padding: 24px 28px 28px; flex: 1; display: flex; flex-direction: column; }

      /* Dropdown */
      .enq-dropdown-list {
        animation: enq-dropdownIn 0.15s ease both;
        scrollbar-width: thin;
        scrollbar-color: #d1d5db transparent;
      }
      .enq-dropdown-list::-webkit-scrollbar { width: 4px; }
      .enq-dropdown-list::-webkit-scrollbar-track { background: transparent; }
      .enq-dropdown-list::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 99px; }

      /* Stat pill */
      .enq-stat-pill {
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 16px; padding: 20px 16px; text-align: center;
      }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="enq-body relative min-h-[62vh] flex flex-col">
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/5599611/pexels-photo-5599611.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Get a Free Quote from Al Grey's Cleaning Services"
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

        <h1 className="enq-anim-3 enq-display tracking-[4px] text-5xl sm:text-6xl xl:text-7xl leading-[0.95] font-bold uppercase mb-5 text-white">
          Get Your
          <br />
          <span className="text-blue-600">Free Quote</span>
          <br />
          Today
        </h1>
        <p className="enq-anim-4 text-gray-300 text-base leading-relaxed max-w-md mb-8">
          Professional cleaning and property maintenance services with
          transparent pricing and exceptional quality. Fill in your details and
          we'll get back to you within 2 hours.
        </p>
        <div className="enq-anim-4">
          <a
            href="#quote-form"
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}



/* ═══════════════════════════════════════════════════════════════════
   SHARED: Custom Select
═══════════════════════════════════════════════════════════════════ */
function CustomSelect({ value, onChange, options, placeholder, icon }: { value: string; onChange: (val: string) => void; options: string[]; placeholder: string; icon: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-4 py-3 border rounded-lg text-sm bg-white transition-all duration-150 focus:outline-none ${open ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-200 hover:border-gray-300"} ${value ? "text-gray-800" : "text-gray-400"}`}
      >
        <span className="flex items-center gap-2.5">
          {icon}
          {value || placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
      {open && (
        <div className="enq-dropdown-list absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-y-auto max-h-[180px]">
          {options.map((opt) => {
            const isSel = value === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors duration-100 ${isSel ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
              >
                <span>{opt}</span>
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
  );
}

/* ═══════════════════════════════════════════════════════════════════
   QUOTE FORM + WHY CHOOSE US
═══════════════════════════════════════════════════════════════════ */
const WHY_ITEMS = [
  {
    title: "Fully Insured & Certified",
    desc: "We carry comprehensive insurance and all necessary certifications for your peace of mind.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Response Times",
    desc: "We respond to all enquiries within 2 hours and offer emergency services when needed.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
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
  {
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise charges. We provide clear, upfront pricing for all our services.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "15+ Years' Experience",
    desc: "With over a decade in the industry, we have the expertise to handle any cleaning challenge.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guarantee",
    desc: "We stand behind our work with a 100% satisfaction guarantee on all services provided.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
        />
      </svg>
    ),
  },
];

function QuoteFormSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    propertyType: "",
    urgency: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: string) => (val: string) => setForm((p) => ({ ...p, [key]: val }));
  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.firstName || !form.email || !form.phone || !form.service) return;
    setSubmitted(true);
  };

  const serviceIcon = (
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
  );
  const homeIcon = (
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
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
  const clockIcon = (
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
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <section
      id="quote-form"
      className="enq-body bg-white py-24 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* LEFT: Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-[#e8edf5] shadow-xl p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-16 gap-4">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                <h3 className="enq-heading text-2xl font-bold text-gray-900">
                  Quote Requested!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  Thanks, <strong>{form.firstName}</strong>! We'll review your
                  details and get back to you within 2 hours with your free,
                  no-obligation quote.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      postcode: "",
                      service: "",
                      propertyType: "",
                      urgency: "",
                      details: "",
                    });
                  }}
                  className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-semibold underline underline-offset-2"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-3">
                    Free Quote Request
                  </p>
                  <h2 className="enq-heading text-[clamp(24px,3vw,34px)] font-extrabold text-[#0d2257] leading-tight tracking-tight">
                    Request Your Quote
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">
                    Fill out the form below and we'll get back to you within 2
                    hours.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
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
                        name="firstName"
                        value={form.firstName}
                        onChange={handleInput}
                        placeholder="First Name *"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
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
                        name="lastName"
                        value={form.lastName}
                        onChange={handleInput}
                        placeholder="Last Name *"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
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
                      onChange={handleInput}
                      placeholder="Email Address *"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Phone + Postcode row */}
                  <div className="grid grid-cols-2 gap-4">
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
                        onChange={handleInput}
                        placeholder="Phone Number *"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
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
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        name="postcode"
                        value={form.postcode}
                        onChange={handleInput}
                        placeholder="Postcode *"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <CustomSelect
                    value={form.service}
                    onChange={set("service")}
                    options={ALL_SERVICES}
                    placeholder="Service Required *"
                    icon={serviceIcon}
                  />

                  {/* Property Type */}
                  <CustomSelect
                    value={form.propertyType}
                    onChange={set("propertyType")}
                    options={PROPERTY_TYPES}
                    placeholder="Property Type"
                    icon={homeIcon}
                  />

                  {/* Urgency */}
                  <CustomSelect
                    value={form.urgency}
                    onChange={set("urgency")}
                    options={URGENCY_OPTIONS}
                    placeholder="How Urgent Is This?"
                    icon={clockIcon}
                  />

                  {/* Details */}
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleInput}
                    placeholder="Additional Details  — Tell us about your requirements, any specific issues, or questions you may have..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm py-3.5 rounded-lg transition-all duration-200 shadow-md shadow-blue-900/40 mt-1"
                  >
                    Submit Enquiry →
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    No obligation · Free quote · Respond within 2 hours
                  </p>
                </div>
              </>
            )}
          </div>

          {/* RIGHT: Why Choose Us */}
          <div className="lg:col-span-2 flex flex-col gap-4 lg:sticky lg:top-8">
            <div className="mb-4">
              <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-3">
                The Al Grey's Difference
              </p>
              <h2 className="enq-heading text-[clamp(22px,2.5vw,30px)] font-extrabold text-[#0d2257] leading-tight tracking-tight">
                Why Choose Us
              </h2>
            </div>
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="enq-why-card">
                <div className="enq-why-icon">{item.icon}</div>
                <div>
                  <h3 className="enq-heading text-[15px] font-extrabold text-[#0d2257] leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="enq-body text-gray-500 text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   POPULAR SERVICES
═══════════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    title: "Gutter Cleaning",
    tagline: "Complete gutter maintenance",
    price: "From £65",
    note: "Standard 3-bed house",
    bullets: [
      "Complete debris removal",
      "Downpipe flushing",
      "Minor repairs included",
      "Gutter guard installation",
    ],
    href: "/services/gutter-cleaning",
  },
  {
    title: "Window Cleaning",
    tagline: "Crystal clear results",
    price: "From £45",
    note: "Standard 3-bed house",
    bullets: [
      "Interior & exterior cleaning",
      "Frame and sill cleaning",
      "High-rise capability",
      "Commercial properties",
    ],
    href: "/services/window-cleaning",
  },
  {
    title: "Pressure Washing",
    tagline: "Restore your surfaces",
    price: "From £80",
    note: "Small driveway",
    bullets: [
      "Driveway & patio cleaning",
      "Brickwork & render cleaning",
      "Decking restoration",
      "Graffiti removal",
    ],
    href: "/services/pressure-washing",
  },
];

function PopularServicesSection() {
  return (
    <section
      className="enq-body py-24 px-5 sm:px-8 lg:px-16"
      style={{ background: "#f8f9ff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            What We Offer
          </p>
          <h2 className="enq-heading text-[clamp(32px,4.5vw,50px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-5">
            Our Popular Services
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            Professional cleaning solutions for your home or business — all with
            upfront pricing and no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="enq-svc-card">
              {/* Header */}
              <div className="enq-svc-card-header">
                <h3 className="enq-heading text-[22px] font-extrabold text-white leading-snug tracking-tight">
                  {svc.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">{svc.tagline}</p>
              </div>

              {/* Body */}
              <div className="enq-svc-card-body">
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "#2563eb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="11"
                          height="11"
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
                      <span className="enq-body text-[#94a8cc] text-[13.5px] font-medium">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="mb-4">
                    <p className="enq-display tracking-wider text-3xl text-[#FFF265]">
                      {svc.price}
                    </p>
                    <p className="enq-body text-[#94a8cc] text-xs mt-0.5">
                      {svc.note}
                    </p>
                  </div>
                  <Link
                    href={svc.href}
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    Learn More
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
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function EnquiryPage() {
  return (
    <>
      <EnquiryStyles />
      <HeroSection />
      <QuoteFormSection />
      <PopularServicesSection />
      <CTAAndFooter />
    </>
  );
}

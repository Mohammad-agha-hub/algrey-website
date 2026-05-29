"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";
import CTASection from "./CTA";

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

const AVATARS = [
  {
    src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    alt: "JM",
  },
  {
    src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    alt: "SR",
  },
  {
    src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    alt: "PK",
  },
  {
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    alt: "AL",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   SHARED STYLES  — all section CSS in one block to avoid duplication
═══════════════════════════════════════════════════════════════════ */
function ServiceStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@400;600;700;800;900&display=swap');

      .spt-display  { font-family: 'Bebas Neue', sans-serif; }
      .spt-heading  { font-family: 'Manrope', sans-serif; }
      .spt-body     { font-family: 'Inter', sans-serif; }

      /* ── Animations ── */
      @keyframes spt-fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes spt-fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes spt-dropdownIn {
        from { opacity: 0; transform: translateY(-6px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .spt-anim-1 { animation: spt-fadeUp .65s ease both; }
      .spt-anim-2 { animation: spt-fadeUp .65s .10s ease both; }
      .spt-anim-3 { animation: spt-fadeUp .65s .22s ease both; }
      .spt-anim-4 { animation: spt-fadeUp .65s .34s ease both; }
      .spt-anim-5 { animation: spt-fadeIn  .8s .48s ease both; }

      /* ── Hero: trust pill ── */
      .spt-trust-pill {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.15);
        backdrop-filter: blur(8px);
        border-radius: 999px;
        padding: 7px 16px 7px 8px;
      }
      .spt-trust-pill-avatars { display: flex; }
      .spt-trust-pill-avatars img {
        width: 28px; height: 28px;
        border-radius: 50%;
        border: 2px solid rgba(255,255,255,0.5);
        object-fit: cover;
        margin-left: -6px;
        flex-shrink: 0;
        display: block;
      }
      .spt-trust-pill-avatars img:first-child { margin-left: 0; }

      /* ── Hero: breadcrumb ── */
      .spt-breadcrumb { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
      .spt-breadcrumb a {
        color: rgba(255,255,255,0.5);
        font-size: 12px;
        font-weight: 500;
        text-decoration: none;
        transition: color .2s;
      }
      .spt-breadcrumb a:hover { color: rgba(255,255,255,0.9); }
      .spt-breadcrumb .bc-sep { color: rgba(255,255,255,0.3); font-size: 12px; }
      .spt-breadcrumb .bc-active { color: #FFF265; font-size: 12px; font-weight: 600; }

      /* ── Hero: service dropdown ── */
      .spt-dropdown-list {
        animation: spt-dropdownIn 0.15s ease both;
        scrollbar-width: thin;
        scrollbar-color: #d1d5db transparent;
      }
      .spt-dropdown-list::-webkit-scrollbar { width: 4px; }
      .spt-dropdown-list::-webkit-scrollbar-track { background: transparent; }
      .spt-dropdown-list::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 99px; }

      /* ── Service Cards — identical to AboutSection cards ── */
      .spt-svc-card {
        background: #0d2257;
        border-radius: 16px;
        padding: 36px 28px 32px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        cursor: default;
        min-height: 280px;
        transition: background 0.3s ease;
      }
      .spt-svc-card:hover { background: #FFF265; }
      .spt-svc-card .spt-card-icon { color: #ffffff; transition: color 0.3s ease; }
      .spt-svc-card:hover .spt-card-icon { color: #0d2257; }
      .spt-svc-card .spt-card-title { color: #ffffff; transition: color 0.3s ease; }
      .spt-svc-card:hover .spt-card-title { color: #0d2257; }
      .spt-svc-card .spt-card-desc {
        color: #94a8cc;
        font-size: 13.5px;
        line-height: 1.7;
        margin-top: 8px;
        transition: color 0.3s ease;
      }
      .spt-svc-card:hover .spt-card-desc { color: #081a3d; }

      /* ── Process Cards — identical to ApproachSection ── */
      .spt-proc-card {
        position: relative;
        border-radius: 20px;
        border: 1px solid #1a2f6e;
        overflow: hidden;
        height: 430px;
        box-shadow: 0 4px 24px rgba(0,0,0,.25);
        transition: transform .28s ease, box-shadow .28s ease;
      }
      .spt-proc-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 48px rgba(0,0,0,.4);
      }
      .spt-proc-face {
        position: absolute;
        inset: 0;
        padding: 32px;
        display: flex;
        flex-direction: column;
        transition: opacity .38s ease;
      }
      .spt-proc-face-default {
        background: #0d2257;
        justify-content: space-between;
        opacity: 1;
      }
      .spt-proc-card:hover .spt-proc-face-default { opacity: 0; pointer-events: none; }
      .spt-proc-face-hover {
        background: #FFF265;
        justify-content: flex-start;
        padding-top: 44px;
        opacity: 0;
        pointer-events: none;
      }
      .spt-proc-card:hover .spt-proc-face-hover { opacity: 1; pointer-events: auto; }

      .spt-proc-icon {
        width: 60px; height: 60px;
        border-radius: 14px;
        background: #2563eb;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: #ffffff;
      }
      .spt-proc-num {
        font-family: 'Manrope', sans-serif;
        font-size: 64px;
        font-weight: 800;
        color: #ffffff;
        opacity: 0.14;
        line-height: 1;
        letter-spacing: -2px;
        pointer-events: none;
        user-select: none;
      }
      .spt-proc-face-mobile { display: none; }

      @media (max-width: 1023px) {
        .spt-proc-card {
          height: auto;
          background: #0d2257;
          border-radius: 16px;
          transition: background .3s ease, box-shadow .28s ease, transform .28s ease;
        }
        .spt-proc-card:hover { background: #FFF265; transform: translateY(-4px); }
        .spt-proc-face-default, .spt-proc-face-hover { display: none; }
        .spt-proc-face-mobile {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 32px 28px;
        }
        .spt-proc-card .spt-mob-icon { color: #ffffff; transition: color .3s ease; }
        .spt-proc-card:hover .spt-mob-icon { color: #081a3d; }
        .spt-proc-card .spt-mob-title {
          font-family: 'Manrope', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.3px;
          margin-bottom: 10px;
          transition: color .3s ease;
        }
        .spt-proc-card:hover .spt-mob-title { color: #081a3d; }
        .spt-proc-card .spt-mob-bullet {
          font-size: 13.5px;
          font-weight: 600;
          color: #94a8cc;
          line-height: 1.5;
          transition: color .3s ease;
        }
        .spt-proc-card:hover .spt-mob-bullet { color: #081a3d; }
        .spt-proc-card .spt-mob-check {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: #081a3d;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
          color: #2563eb;
          transition: background .3s ease, color .3s ease;
        }
        .spt-proc-card:hover .spt-mob-check { color: #FFF265; }
      }

      /* ── Gallery — identical to GallerySection ── */
      .spt-gal-card {
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
      }
      .spt-gal-card img { transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }
      .spt-gal-card:hover img { transform: scale(1.06); }

      .spt-bento { display: grid; gap: 14px; }

      @media (max-width: 639px) {
        .spt-bento { grid-template-columns: 1fr; grid-template-rows: repeat(6, 200px); }
      }
      @media (min-width: 640px) and (max-width: 1023px) {
        .spt-bento { grid-template-columns: repeat(2,1fr); grid-template-rows: 240px 240px 220px 220px; }
        .spt-bento .spt-gal-card:nth-child(1) { grid-column: 1/3; grid-row: 1/3; }
        .spt-bento .spt-gal-card:nth-child(2) { grid-column: 1/2; grid-row: 3/4; }
        .spt-bento .spt-gal-card:nth-child(3) { grid-column: 2/3; grid-row: 3/4; }
        .spt-bento .spt-gal-card:nth-child(4) { grid-column: 1/2; grid-row: 4/5; }
        .spt-bento .spt-gal-card:nth-child(5) { grid-column: 2/3; grid-row: 4/5; }
        .spt-bento .spt-gal-card:nth-child(6) { display: none; }
      }
      @media (min-width: 1024px) {
        .spt-bento { grid-template-columns: repeat(3,1fr); grid-template-rows: 272px 272px 256px; }
        .spt-bento .spt-gal-card:nth-child(1) { grid-column: 1/3; grid-row: 1/3; }
        .spt-bento .spt-gal-card:nth-child(2) { grid-column: 3/4; grid-row: 1/2; }
        .spt-bento .spt-gal-card:nth-child(3) { grid-column: 3/4; grid-row: 2/3; }
        .spt-bento .spt-gal-card:nth-child(4) { grid-column: 1/2; grid-row: 3/4; }
        .spt-bento .spt-gal-card:nth-child(5) { grid-column: 2/3; grid-row: 3/4; }
        .spt-bento .spt-gal-card:nth-child(6) { grid-column: 3/4; grid-row: 3/4; }
      }

      /* ── FAQ — identical to FAQSection ── */
      .spt-faq-item {
        border: 1px solid #e8edf5;
        border-radius: 14px;
        overflow: hidden;
        transition: border-color .2s, box-shadow .2s;
      }
      .spt-faq-item.open { border-color: #2563eb; box-shadow: 0 4px 24px rgba(37,99,235,.1); }
      .spt-faq-trigger {
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
      .spt-faq-trigger:hover { background: #f8f9ff; }
      .spt-faq-item.open .spt-faq-trigger { background: #f8f9ff; }
      .spt-faq-icon {
        width: 28px; height: 28px;
        border-radius: 50%;
        border: 1.5px solid #cbd5e1;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        color: #94a3b8;
        transition: background .2s, border-color .2s, color .2s, transform .25s;
      }
      .spt-faq-item.open .spt-faq-icon {
        background: #2563eb;
        border-color: #2563eb;
        color: #ffffff;
        transform: rotate(45deg);
      }
      .spt-faq-body-text {
        max-height: 0;
        overflow: hidden;
        transition: max-height .35s ease, padding .3s ease;
        padding: 0 24px;
      }
      .spt-faq-item.open .spt-faq-body-text { max-height: 300px; padding: 0 24px 20px; }

      /* ── Intro image ── */
      .spt-intro-img {
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(13,34,87,.15);
        position: relative;
      }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 1 — HERO
   Same as HeroSection.jsx + breadcrumb + pre-selected service
═══════════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════════════ */
interface Avatar {
  src: string;
  alt: string;
}

interface HeroData {
  serviceName: string;
  eyebrow?: string;
  line1: string;
  line2?: string;
  line3?: string;
  subtext: string;
  bgImage: string;
}

interface IntroData {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

interface CardItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface CardsData {
  eyebrow: string;
  heading: string;
  subtext: string;
  items: CardItem[];
}

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}

interface ProcessData {
  eyebrow: string;
  heading: string;
  subtext: string;
  steps: ProcessStep[];
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryData {
  eyebrow: string;
  heading: string;
  subtext: string;
  images: GalleryImage[];
}

interface FaqItem {
  q: string;
  a: string;
}

interface FaqData {
  eyebrow: string;
  heading: string;
  subtext: string;
  items: FaqItem[];
}
interface CTAData {
  badge: string;
  headingLines: [string, string, string];
  body: string;
  pills: [string, string, string];
}
interface ServiceData {
  hero: HeroData;
  intro: IntroData;
  cards: CardsData;
  process: ProcessData;
  gallery: GalleryData;
  faq: FaqData;
  cta:CTAData
}

function HeroSection({ data }: { data: HeroData }) {
  const {
    serviceName,
    eyebrow = "Trusted Local Experts",
    line1,
    line2, // This word gets blue — optional
    line3, // optional third line
    subtext,
    bgImage,
  } = data;

  const [form, setForm] = useState({
    postcode: "",
    name: "",
    email: "",
    phone: "",
    service: serviceName ?? "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !form.postcode ||
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.service
    )
      return;
    setSubmitted(true);
  };

  return (
    <section className="spt-body relative min-h-screen flex flex-col">
      <Navbar />

      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt={`${serviceName} service`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#081a3d]/95 via-[#0d2257]/80 to-transparent" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#081a3d]/90 via-[#0d2257]/85 to-[#061530]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061530]/90 via-transparent to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-32 pb-10 lg:pt-36 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8">
        {/* Left: Copy */}
        <div className="flex-1 flex flex-col justify-center text-white text-center lg:text-left">
          {/* Breadcrumb */}
          <div className="spt-breadcrumb spt-anim-1 justify-center lg:justify-start mb-4">
            <Link href="/">Home</Link>
            <span className="bc-sep">›</span>
            <Link href="/services">Services</Link>
            <span className="bc-sep">›</span>
            <span className="bc-active">{serviceName}</span>
          </div>

          {/* Eyebrow */}
          <p className="spt-anim-2 inline-flex items-center justify-center lg:justify-start gap-2 text-[#FFF265] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            {eyebrow}
          </p>

          {/* Headline */}
          <h1 className="spt-anim-3 spt-display tracking-[4px] text-5xl sm:text-6xl xl:text-7xl leading-[0.95] font-bold uppercase mb-5">
            {line1}
            {line2 && (
              <>
                <br />
                <span className="text-blue-600">{line2}</span>
              </>
            )}
            {line3 && (
              <>
                <br />
                {line3}
              </>
            )}
          </h1>

          {/* Subtext */}
          <p className="spt-anim-4 text-gray-300 text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
            {subtext}
          </p>

          {/* CTAs + Trust */}
          <div className="spt-anim-4 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#services"
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                Our Services
              </a>
              <a
                href="#quote"
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
                Get Free Quote
              </a>
            </div>

            {/* Trust pill */}
            <div className="flex justify-center lg:justify-start pt-2">
              <div className="spt-trust-pill">
                <div className="spt-trust-pill-avatars">
                  {AVATARS.map((avatar) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={avatar.alt} src={avatar.src} alt={avatar.alt} />
                  ))}
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-xs font-medium">
                    <span className="text-yellow-400 font-bold">2,000+</span>{" "}
                    homeowners trust us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quote Form */}
        <div
          id="quote"
          className="spt-anim-5 w-full lg:w-[400px] xl:w-[420px] bg-white rounded-2xl shadow-2xl p-7 sm:p-8 shrink-0"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
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
              <h3 className="spt-heading text-2xl font-bold text-gray-900">
                Quote Requested!
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Thanks, <strong>{form.name.split(" ")[0]}</strong>! We'll be in
                touch within 2 hours with your free quote.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    postcode: "",
                    name: "",
                    email: "",
                    phone: "",
                    service: serviceName ?? "",
                  });
                }}
                className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-semibold underline underline-offset-2"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="spt-heading text-2xl sm:text-[1.6rem] font-bold text-gray-900 leading-tight tracking-tight">
                  Request a Free Quote
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  No obligation — get a price in minutes.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {/* Postcode */}
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
                    onChange={handleChange}
                    placeholder="Enter your postcode"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

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
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your phone"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={`w-full flex items-center justify-between px-4 py-3 border rounded-lg text-sm bg-white transition-all duration-150 focus:outline-none ${
                      dropdownOpen
                        ? "border-blue-500 ring-2 ring-blue-500"
                        : "border-gray-200 hover:border-gray-300"
                    } ${form.service ? "text-gray-800" : "text-gray-400"}`}
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
                      {form.service || "Select a Service"}
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
                    <div className="spt-dropdown-list absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-y-auto max-h-[180px]">
                      {ALL_SERVICES.map((s) => {
                        const isSelected = form.service === s;
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => {
                              setForm((prev) => ({ ...prev, service: s }));
                              setDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors duration-100 ${
                              isSelected
                                ? "bg-blue-50 text-blue-600 font-medium"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span>{s}</span>
                            {isSelected && (
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

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm py-3.5 rounded-lg transition-all duration-200 shadow-md shadow-blue-900/40 mt-1"
                >
                  Get My Free Quote →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 2 — INTRO  (Why X is Essential)
   White bg, text left + image right
═══════════════════════════════════════════════════════════════════ */
function IntroSection({ data }: { data: IntroData }) {
  const { eyebrow, heading, paragraphs, image, imageAlt } = data;

  return (
    <section className="spt-body bg-white py-24 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
              {eyebrow}
            </p>
            <h2 className="spt-heading text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-6">
              {heading}
            </h2>
            <div className="flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-500 text-[15px] leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-md transition-all duration-200 shadow-lg shadow-blue-900/30"
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
            </a>
          </div>

          {/* Image */}
          <div className="spt-intro-img h-[360px] lg:h-[460px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 3 — SERVICE CARDS
   Identical card style to AboutSection.jsx
═══════════════════════════════════════════════════════════════════ */
function CardsSection({ data }: { data: CardsData }) {
  const { eyebrow, heading, subtext, items } = data;

  // Dynamically handle 2-col (4 cards) or 3-col (3 or 6 cards)
  const colClass =
    items.length === 4
      ? "grid grid-cols-1 sm:grid-cols-2 gap-5"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";

  return (
    <section
      id="services"
      className="spt-body bg-white py-24 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            {eyebrow}
          </p>
          <h2 className="spt-heading text-[clamp(32px,4.5vw,50px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-5">
            {heading}
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            {subtext}
          </p>
        </div>

        <div className={colClass}>
          {items.map((card) => (
            <div key={card.title} className="spt-svc-card">
              <div className="spt-card-icon">{card.icon}</div>
              <div>
                <h3 className="spt-heading spt-card-title text-[20px] font-extrabold leading-snug tracking-[-0.3px]">
                  {card.title}
                </h3>
                <p className="spt-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 4 — PROCESS
   Identical flip-card style to ApproachSection.jsx
   Supports 3 or 4 steps automatically
═══════════════════════════════════════════════════════════════════ */
function ProcessSection({ data }: { data: ProcessData }) {
  const { eyebrow, heading, subtext, steps } = data;

  const gridClass =
    steps.length === 4
      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";

  return (
    <section className="spt-body py-24" style={{ background: "#081a3d" }}>
      <div className="max-w-7xl mx-auto px-7">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="inline-flex items-center justify-center gap-2 text-[#FFF265] font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            {eyebrow}
          </p>
          <h2 className="spt-heading text-[clamp(32px,4.5vw,48px)] font-extrabold text-white leading-tight tracking-tight mb-5">
            {heading}
          </h2>
          <p className="text-[#94a8cc] text-[15px] leading-relaxed">
            {subtext}
          </p>
        </div>

        <div className={gridClass}>
          {steps.map((step, i) => (
            <div key={step.title} className="spt-proc-card">
              {/* Desktop default face */}
              <div className="spt-proc-face spt-proc-face-default">
                <div className="flex items-center justify-between">
                  <div className="spt-proc-icon">{step.icon}</div>
                  <span className="spt-proc-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Manrope',sans-serif",
                      fontSize: 24,
                      fontWeight: 800,
                      color: "#ffffff",
                      lineHeight: 1.2,
                      letterSpacing: "-0.3px",
                      marginBottom: 10,
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: "#94a8cc",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Desktop hover face */}
              <div className="spt-proc-face spt-proc-face-hover">
                <p
                  style={{
                    fontFamily: "'Manrope',sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#081a3d",
                    lineHeight: 1.2,
                    letterSpacing: "-0.3px",
                    marginBottom: 20,
                  }}
                >
                  {step.title}
                </p>
                <div>
                  {step.bullets.map((b) => (
                    <div
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        marginBottom: 14,
                      }}
                    >
                      <span
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "#081a3d",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="#FFF265"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="2,7 5.5,10.5 12,3" />
                        </svg>
                      </span>
                      <span
                        style={{
                          fontSize: 13.5,
                          fontWeight: 600,
                          color: "#081a3d",
                          lineHeight: 1.4,
                        }}
                      >
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile face */}
              <div className="spt-proc-face-mobile">
                <div className="spt-mob-icon">{step.icon}</div>
                <div>
                  <p className="spt-mob-title">{step.title}</p>
                  {step.bullets.map((b) => (
                    <div
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        marginBottom: 10,
                      }}
                    >
                      <span className="spt-mob-check">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="2,7 5.5,10.5 12,3" />
                        </svg>
                      </span>
                      <span className="spt-mob-bullet">{b}</span>
                    </div>
                  ))}
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
   SECTION 5 — GALLERY
   Identical bento grid to GallerySection.jsx — pass 6 images
═══════════════════════════════════════════════════════════════════ */
function GallerySection({ data }: { data: GalleryData }) {
  const { eyebrow, heading, subtext, images } = data;

  return (
    <section className="spt-body bg-[#f8f9ff] py-24 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            {eyebrow}
          </p>
          <h2 className="spt-heading text-[clamp(32px,4.5vw,50px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-5">
            {heading}
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            {subtext}
          </p>
        </div>

        <div className="spt-bento">
          {images.slice(0, 6).map((img, idx) => (
            <div key={idx} className="spt-gal-card">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 6 — FAQ
   Identical accordion to FAQSection.jsx
═══════════════════════════════════════════════════════════════════ */
function FAQSection({ data }: { data: FaqData }) {
  const { eyebrow, heading, subtext, items } = data;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="spt-body bg-white py-24 px-5 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            {eyebrow}
          </p>
          <h2 className="spt-heading text-[clamp(30px,4.5vw,48px)] font-extrabold text-[#081a3d] leading-tight tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xl mx-auto">
            {subtext}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((faq, i) => (
            <div
              key={i}
              className={`spt-faq-item ${openIdx === i ? "open" : ""}`}
            >
              <button
                className="spt-faq-trigger"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span
                  className="spt-heading text-[15px] font-bold leading-snug"
                  style={{ color: openIdx === i ? "#081a3d" : "#0d2257" }}
                >
                  {faq.q}
                </span>
                <span className="spt-faq-icon">
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
              <div className="spt-faq-body-text">
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
   MAIN EXPORT
   Pass serviceData prop — see serviceData.example.js for the shape
═══════════════════════════════════════════════════════════════════ */
export default function ServicePageTemplate({
  serviceData,
}: {
  serviceData: ServiceData;
}) {
  return (
    <>
      <ServiceStyles />
      <HeroSection data={serviceData.hero} />
      <IntroSection data={serviceData.intro} />
      <CardsSection data={serviceData.cards} />
      <ProcessSection data={serviceData.process} />
      <GallerySection data={serviceData.gallery} />
      <FAQSection data={serviceData.faq} />
      <CTASection data={serviceData.cta}/>
      <CTAAndFooter />
    </>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";
import CTASection from "./CTA";
import TestimonialsSection from "./Testemonial";



/* ═══════════════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════════════ */
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
  heading: string; 
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
  cta: CTAData;
}

/* ═══════════════════════════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════════════════════════ */
function ServiceStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');

      .spt-display  { font-family: 'Inter Tight', sans-serif; }
      .spt-heading  { font-family: 'Inter Tight', sans-serif; }
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
      .spt-anim-1 { animation: spt-fadeUp .65s ease both; }
      .spt-anim-2 { animation: spt-fadeUp .65s .10s ease both; }
      .spt-anim-3 { animation: spt-fadeUp .65s .22s ease both; }
      .spt-anim-4 { animation: spt-fadeUp .65s .34s ease both; }
      .spt-anim-5 { animation: spt-fadeIn  .8s .48s ease both; }
      .spt-anim-6 { animation: spt-fadeIn  .9s .60s ease both; }
      @media (prefers-reduced-motion: reduce) {
        .spt-anim-1,.spt-anim-2,.spt-anim-3,.spt-anim-4,.spt-anim-5,.spt-anim-6 {
          animation: none; opacity: 1; transform: none;
        }
      }

      /* ── Eyebrow ── */
      .spt-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 11px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
      }
      .spt-eyebrow .dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      /* ── CTA pill button ── */
      .spt-cta {
        display: inline-flex;
        align-items: center;
        gap: 0;
        padding: 7px 7px 7px 26px;
        border-radius: 100px;
        background: #2563eb;
        color: #ffffff;
        font-family: 'Inter', sans-serif;
        font-size: 13px;
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
      .spt-cta:hover { background: #1d4ed8; gap: 6px; transform: scale(1.03); }
      .spt-cta:active { transform: scale(0.96); }
      .spt-cta-circle {
        width: 38px; height: 38px;
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
      .spt-cta:hover .spt-cta-circle { background: #dbeafe; }

      /* Outline variant — over dark hero */
      .spt-cta-outline {
        background: transparent;
        border: 1.5px solid rgba(255,255,255,0.55);
        color: #ffffff;
      }
      .spt-cta-outline:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
      .spt-cta-outline .spt-cta-circle { background: rgba(255,255,255,0.15); color: #fff; }
      .spt-cta-outline:hover .spt-cta-circle { background: rgba(255,255,255,0.25); }

      /* Hero "View Services" plain text link — matches hs-btn-learn */
      .spt-hero-learn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        color: rgba(255,255,255,0.7);
        font-size: 15px;
        font-weight: 500;
        transition: color .2s;
        text-decoration: none;
        white-space: nowrap;
      }
      .spt-hero-learn:hover { color: #fff; }
      .spt-hero-learn:hover .spt-hero-learn-arrow { transform: translateX(3px); }
      .spt-hero-learn-arrow { display: flex; transition: transform .2s ease; }

      /* ── Hero trust pill ── */
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

      /* ── Hero breadcrumb ── */
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
      .spt-breadcrumb .bc-active { color: #7da6f5; font-size: 12px; font-weight: 600; }

      /* ── Infinite image strip ── */
      .spt-strip-wrapper {
        width: 100%;
        overflow: hidden;
        position: relative;
      }
      .spt-strip-track {
        display: flex;
        align-items: flex-end;
        gap: 12px;
        width: max-content;
        will-change: transform;
      }
      .spt-strip-img {
        border-radius: 12px;
        object-fit: cover;
        display: block;
        flex-shrink: 0;
      }
      .spt-strip-img.is-a { width: 320px; height: 360px; }
      .spt-strip-img.is-b { width: 380px; height: 270px; }

      @media (max-width: 1023px) {
        .spt-strip-img.is-a { width: 230px; height: 260px; }
        .spt-strip-img.is-b { width: 280px; height: 200px; }
      }
      @media (max-width: 639px) {
        .spt-strip-img.is-a { width: 170px; height: 200px; }
        .spt-strip-img.is-b { width: 210px; height: 155px; }
      }

      /* ── Cards section — left-heading layout ── */
      .spt-cards-section {
        font-family: 'Inter', sans-serif;
        background: #f8f9fc;
        padding: clamp(40px, 6vw, 64px) 0;
      }
      .spt-cards-header-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 40px;
        margin-bottom: clamp(28px, 5vw, 44px);
      }
      .spt-cards-header-left { flex: 1; min-width: 0; }
      .spt-cards-header-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        max-width: 360px;
        padding-top: 3rem;
      }
      .spt-cards-sub {
        font-size: 15px;
        font-weight: 400;
        color: #6b7a99;
        line-height: 1.65;
        margin: 0;
      }

      .spt-svc-card {
        background: #ffffff;
        border: 1px solid #e4e9f4;
        border-radius: 20px;
        padding: 36px 32px 40px;
        display: flex;
        flex-direction: column;
        gap: 0;
        box-shadow: 0 2px 12px rgba(8,26,61,.06);
        transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1);
      }
      .spt-svc-card:hover {
        border-color: #bfdbfe;
        box-shadow: 0 16px 40px rgba(13,27,62,.13);
        transform: translateY(-6px);
      }
      .spt-card-icon-badge {
        width: 54px; height: 54px;
        border-radius: 14px;
        background: #eff4ff;
        color: #2563eb;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-bottom: 28px;
        transition: background .22s, color .22s, transform .3s cubic-bezier(0.34,1.56,0.64,1);
      }
      .spt-svc-card:hover .spt-card-icon-badge {
        background: #dbeafe;
        color: #1d4ed8;
        transform: rotate(-8deg) scale(1.08);
      }
      .spt-svc-card .spt-card-title { color: #0d1b3e; margin-bottom: 12px; }
      .spt-svc-card .spt-card-desc {
        color: #6b7a99;
        font-size: 14px;
        line-height: 1.7;
      }

      /* ── Process section — matches ApproachSection ── */
      .spt-proc-section {
        font-family: 'Inter', sans-serif;
        background: #f8f9fc;
        padding: clamp(40px, 6vw, 64px) 0;
      }
      .spt-proc-header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        margin-bottom: clamp(28px, 5vw, 44px);
      }
      .spt-proc-header-left { flex: 1; min-width: 0; }
      .spt-proc-header-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        max-width: 340px;
        margin-top: 3rem;
      }
      .spt-proc-header-sub {
        font-size: 15px;
        font-weight: 400;
        color: #6b7a99;
        line-height: 1.65;
        margin: 0;
      }

      .spt-new-proc-card {
        background: #ffffff;
        border-radius: 20px;
        border: 1px solid #e4e9f4;
        padding: 36px 32px 40px;
        box-shadow: 0 2px 12px rgba(8,26,61,0.06);
        transition: box-shadow 0.26s ease, border-color 0.26s ease,
                    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        position: relative;
        overflow: hidden;
      }
      .spt-new-proc-card:hover {
        box-shadow: 0 16px 40px rgba(8,26,61,0.13);
        border-color: #bfdbfe;
        transform: translateY(-8px);
      }
      /* stagger applied via inline style on lg+ only — see JSX */

      .spt-new-proc-icon {
        width: 54px; height: 54px;
        border-radius: 14px;
        background: #eff4ff;
        color: #2563eb;
        display: flex; align-items: center; justify-content: center;
        margin-bottom: 28px;
        transition: background .22s, color .22s, transform .3s cubic-bezier(0.34,1.56,0.64,1);
      }
      .spt-new-proc-card:hover .spt-new-proc-icon {
        background: #dbeafe; color: #1d4ed8;
        transform: rotate(-8deg) scale(1.08);
      }
      .spt-new-proc-num {
        position: absolute;
        top: 28px; right: 28px;
        font-family: 'Inter Tight', sans-serif;
        font-size: 52px; font-weight: 800;
        color: #081a3d; opacity: 0.06;
        line-height: 1; letter-spacing: -2px;
        pointer-events: none; user-select: none;
      }
      .spt-new-proc-title {
        font-family: 'Inter Tight', sans-serif;
        font-size: 22px; font-weight: 700;
        color: #081a3d; line-height: 1.2;
        letter-spacing: -0.4px; margin-bottom: 12px;
      }
      .spt-new-proc-desc {
        font-size: 14px; font-weight: 400;
        color: #6b7a99; line-height: 1.65;
        margin-bottom: 28px;
      }
      .spt-new-proc-divider {
        height: 1px; background: #e4e9f4;
        margin-bottom: 24px;
      }
      .spt-new-proc-bullet {
        display: flex; align-items: flex-start; gap: 11px;
        margin-bottom: 11px;
      }
      .spt-new-proc-bullet:last-child { margin-bottom: 0; }
      .spt-new-proc-check {
        width: 20px; height: 20px;
        border-radius: 50%;
        background: #eff4ff;
        border: 1px solid #bfd0f7;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; margin-top: 1px;
      }
      .spt-new-proc-bullet-text {
        font-size: 13.5px; font-weight: 500;
        color: #374151; line-height: 1.5;
      }

      /* ── FAQ — matches FAQSection.jsx ── */
      .spt-faq-section {
        font-family: 'Inter', sans-serif;
        background: #f8f9fc;
      }
      .spt-faq-grid {
        display: grid;
        grid-template-columns: 1fr 1.55fr;
        gap: 72px;
        align-items: start;
      }
      .spt-faq-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: 'Inter', sans-serif;
        font-size: 11px; font-weight: 700;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #2563eb;
        margin-bottom: 20px;
      }
      .spt-faq-eyebrow::before {
        content: '';
        display: block;
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #2563eb;
        flex-shrink: 0;
      }
      .spt-faq-heading {
        font-family: 'Inter Tight', sans-serif;
        font-size: clamp(32px, 3.8vw, 50px);
        font-weight: 500;
        color: #081a3d;
        line-height: 1.08;
        letter-spacing: -1.5px;
        margin: 0 0 20px;
      }
      .spt-faq-heading em { font-style: normal; color: #2563eb; }
      .spt-faq-sub {
        font-size: 14.5px; font-weight: 400;
        color: #6b7a99; line-height: 1.7;
        margin: 0 0 36px;
      }
      .spt-new-faq-item {
        background: #ffffff;
        border: 1px solid #e4e9f4;
        border-radius: 14px;
        overflow: hidden;
        transition: border-color .22s, box-shadow .22s;
      }
      .spt-new-faq-item.open {
        border-color: #2563eb;
        box-shadow: 0 4px 20px rgba(37,99,235,.10);
      }
      .spt-new-faq-trigger {
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
        transition: background .18s;
      }
      .spt-new-faq-trigger:hover { background: #f5f7ff; }
      .spt-new-faq-item.open .spt-new-faq-trigger { background: #f5f7ff; }
      .spt-new-faq-q {
        font-family: 'Inter', sans-serif;
        font-size: 16px; font-weight: 500;
        color: #081a3d;
        line-height: 1.35;
        letter-spacing: -0.2px;
      }
      .spt-new-faq-icon {
        width: 28px; height: 28px;
        border-radius: 50%;
        border: 1.5px solid #cbd5e1;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        color: #94a3b8;
        transition: background .2s, border-color .2s, color .2s, transform .26s;
      }
      .spt-new-faq-item.open .spt-new-faq-icon {
        background: #2563eb; border-color: #2563eb;
        color: #ffffff; transform: rotate(45deg);
      }
      .spt-new-faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height .35s ease, padding .28s ease;
        padding: 0 22px;
      }
      .spt-new-faq-item.open .spt-new-faq-answer {
        max-height: 300px;
        padding: 0 22px 20px;
      }
      .spt-new-faq-answer-inner {
        font-size: 14px; font-weight: 400;
        color: #6b7a99; line-height: 1.7;
        border-top: 1px solid #e4e9f4;
        padding-top: 16px;
      }

      /* ── Intro image ── */
      .spt-intro-img {
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(13,27,62,.15);
        position: relative;
      }

      /* ── Responsive ── */
      @media (max-width: 1023px) {
        .spt-cards-header-row { flex-direction: column; align-items: flex-start; gap: 24px; }
        .spt-cards-header-right { max-width: 100%; padding-top: 0; }
        .spt-proc-header-row { flex-direction: column; align-items: flex-start; gap: 24px; }
        .spt-proc-header-right { max-width: 100%; margin-top: 0; }
        .spt-faq-grid { grid-template-columns: 1fr; gap: 48px; }
      }

      @media (max-width: 639px) {
        .spt-new-proc-card { padding: 28px 22px 30px; }
        .spt-new-proc-num { font-size: 40px; top: 20px; right: 20px; }
        .spt-svc-card { padding: 28px 22px 30px; }
      }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   INFINITE STRIP — same engine as HeroSection.jsx
═══════════════════════════════════════════════════════════════════ */
function InfiniteStrip({ images }: { images: GalleryImage[] }) {
  const TRACK_IMAGES = [...images, ...images];
  const xRef = useRef(0);
  const rafRef = useRef<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(images.length * 380);
  const hoveringRef = useRef(false);
  const visibleRef = useRef(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    let raf: number;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    window.addEventListener("resize", onResize, { passive: true });

    const io = new IntersectionObserver(
      ([e]) => {
        visibleRef.current = e.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(track);

    let last = performance.now();
    const tick = (now: number) => {
      const delta = Math.min(now - last, 100);
      last = now;
      if (visibleRef.current) {
        const speed = hoveringRef.current ? 35 : 55;
        xRef.current -= (speed * delta) / 1000;
        const hw = halfWidthRef.current;
        if (hw && xRef.current <= -hw) xRef.current += hw;
        if (track) track.style.transform = `translateX(${xRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(rafRef.current);
      io.disconnect();
    };
  }, []);

  return (
    <div
      className="spt-strip-wrapper"
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
    >
      <div ref={trackRef} className="spt-strip-track">
        {TRACK_IMAGES.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img.src + i}
            src={img.src}
            alt={img.alt}
            aria-hidden={i >= images.length ? true : undefined}
            className={`spt-strip-img ${i % 2 === 0 ? "is-a" : "is-b"}`}
            width={i % 2 === 0 ? 320 : 380}
            height={i % 2 === 0 ? 360 : 270}
            loading={i < 3 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 1 — HERO  (matches HeroSection.jsx layout)
═══════════════════════════════════════════════════════════════════ */
function HeroSection({
  data,
  galleryImages,
}: {
  data: HeroData;
  galleryImages: GalleryImage[];
}) {
  const {
    serviceName,
    eyebrow = "Trusted Local Experts",
    line1,
    line2,
    line3,
    subtext,
    bgImage,
  } = data;

  // Use all gallery images passed from the parent; fall back to bgImage repeated
  const stripImages =
    galleryImages.length > 0
      ? galleryImages
      : Array.from({ length: 6 }, (_, i) => ({
          src: bgImage,
          alt: `${serviceName} example ${i + 1}`,
        }));

  return (
    <section
      className="spt-body relative flex flex-col"
      style={{ borderRadius: 20 }}
    >
      <Navbar />
      {/* ── Wrapper that matches HeroSection.jsx outer shell ── */}
      <div
        className="flex flex-col items-center"
        style={{ width: "97%", margin: "0 auto" }}
      >
        <div
          className="relative w-full bg-[#0d1b3e] text-white"
          style={{ borderRadius: 20 }}
        >
          {/* ── Hero copy — matches HeroSection.jsx two-column layout ── */}
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-14 pt-28 pb-10 lg:pt-32">
            {/* Tags row — spans full width above the two columns */}
            <div className="spt-anim-1 flex items-center gap-2 mb-7 flex-wrap">
              {[
                "Fully Insured",
                "Exterior Cleaning Specialists",
                "Birmingham & UK",
              ].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-sm font-medium text-white/65"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>

            {/* Two-column row: headline left, description + CTAs right */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 pb-10">
              {/* Left: big headline only */}
              <div className="flex-1 min-w-0">
                <h1 className="spt-anim-2 spt-display text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.04] font-medium tracking-[-2px]">
                  {line1}
                  {line2 && (
                    <>
                      <br />
                      <span className="text-[#3b82f6]">{line2}</span>
                    </>
                  )}
                  {line3 && (
                    <>
                      <br />
                      {line3}
                    </>
                  )}
                </h1>
              </div>

              {/* Right: subtext + CTAs + trust pill */}
              <div className="spt-anim-3 lg:max-w-[360px] flex flex-col justify-center gap-6 lg:pt-3 shrink-0">
                <p className="text-[#cbd5e1] text-[16px] leading-relaxed">
                  {subtext}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a href="/enquiry-now" className="spt-cta">
                    Get a Quote
                    <span className="spt-cta-circle">
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
                  </a>
                  <a href="#services" className="spt-hero-learn">
                    View Services
                    <span className="spt-hero-learn-arrow">
                      <svg
                        width="15"
                        height="15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
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
            </div>
          </div>

          {/* ── Infinite image strip (replaces gallery section) ── */}
          <div className="spt-anim-6 mt-6 pb-10 lg:pb-14">
            <InfiniteStrip images={stripImages} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 2 — INTRO
═══════════════════════════════════════════════════════════════════ */
function IntroSection({ data }: { data: IntroData }) {
  const { eyebrow, heading, paragraphs, image, imageAlt } = data;

  return (
    <section className="spt-body bg-[#F8F9FC] py-14 lg:py-20 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="spt-eyebrow text-[#2563eb] mb-4">
              <span className="dot" style={{ background: "#2563eb" }} />
              {eyebrow}
            </p>
            <h2 className="spt-heading text-[clamp(28px,3.5vw,44px)] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px] mb-6">
              {heading}
            </h2>
            <div className="flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-slate-500 text-[15px] leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
            <a href="#quote" className="spt-cta mt-8 inline-flex">
              Get Your Free Quote
              <span className="spt-cta-circle">
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
            </a>
          </div>

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
   SECTION 3 — WHAT WE OFFER (left heading + right subtext/cta layout)
   Matches ApproachSection header pattern
═══════════════════════════════════════════════════════════════════ */
function CardsSection({ data }: { data: CardsData }) {
  const { eyebrow, heading, subtext, items } = data;

  const colClass =
    items.length === 4
      ? "grid grid-cols-1 sm:grid-cols-2 gap-5"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";

  return (
    <section
      id="services"
    
      className="spt-body spt-cards-section px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Left heading / right subtext + CTA */}
        <div className="spt-cards-header-row">
          <div className="spt-cards-header-left">
            <p className="spt-eyebrow text-[#2563eb] mb-4">
              <span className="dot" style={{ background: "#2563eb" }} />
              {eyebrow}
            </p>
            <h2 className="spt-heading text-[clamp(32px,4.5vw,50px)] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px]">
              {heading}
            </h2>
          </div>

          <div className="spt-cards-header-right">
            <p className="spt-cards-sub">{subtext}</p>
            <a href="#quote" className="spt-cta inline-flex">
              Get a Free Quote
              <span className="spt-cta-circle">
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
            </a>
          </div>
        </div>

        <div className={colClass}>
          {items.map((card) => (
            <div key={card.title} className="spt-svc-card">
              <div className="spt-card-icon-badge">{card.icon}</div>
              <div>
                <h3 className="spt-heading spt-card-title text-[19px] font-semibold leading-snug tracking-[-0.2px]">
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
   SECTION 4 — PROCESS  (matches ApproachSection.tsx card style)
═══════════════════════════════════════════════════════════════════ */
function ProcessSection({ data }: { data: ProcessData }) {
  const { eyebrow, heading, subtext, steps } = data;

  const gridClass =
    steps.length === 4
      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start";

  return (
    <section className="spt-body spt-proc-section px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header row — left heading, right sub + cta */}
        <div className="spt-proc-header-row">
          <div className="spt-proc-header-left">
            <p className="spt-eyebrow text-[#2563eb] mb-4">
              <span className="dot" style={{ background: "#2563eb" }} />
              {eyebrow}
            </p>
            <h2 className="spt-heading text-[clamp(32px,4.5vw,50px)] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px]">
              {heading}
            </h2>
          </div>

          <div className="spt-proc-header-right">
            <p className="spt-proc-header-sub">{subtext}</p>
            <a href="#quote" className="spt-cta inline-flex">
              Get in Touch
              <span className="spt-cta-circle">
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
            </a>
          </div>
        </div>

        <div className={gridClass}>
          {steps.map((step, i) => {
            // Stagger: only applies when using 3-column grid (3 steps)
            // For 4 steps the grid is 2-col on most screens — no stagger needed
            const staggerStyle =
              steps.length === 3
                ? { marginTop: i === 1 ? 48 : i === 2 ? 96 : 0 }
                : {};
            return (
              <div
                key={step.title}
                className="spt-new-proc-card"
                style={staggerStyle}
              >
                <span className="spt-new-proc-num">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="spt-new-proc-icon">{step.icon}</div>

                <p className="spt-new-proc-title">{step.title}</p>
                <p className="spt-new-proc-desc">{step.desc}</p>

                <div className="spt-new-proc-divider" />

                <div>
                  {step.bullets.map((b) => (
                    <div key={b} className="spt-new-proc-bullet">
                      <span className="spt-new-proc-check">
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
                      <span className="spt-new-proc-bullet-text">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 5 — FAQ  (matches FAQSection.jsx — left col heading + right accordion)
═══════════════════════════════════════════════════════════════════ */
function FAQSection({ data }: { data: FaqData }) {
  const { eyebrow, heading, subtext, items } = data;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="spt-body spt-faq-section px-5 sm:px-8 lg:px-16 py-14 lg:py-20">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="spt-faq-grid">
          {/* Left: heading + subtext */}
          <div>
            <p className="spt-faq-eyebrow">{eyebrow}</p>
            <h2 className="spt-faq-heading">
              {heading.split(" ").slice(0, -1).join(" ")}
              <br />
              <em>{heading.split(" ").slice(-1)[0]}</em>
            </h2>
            <p className="spt-faq-sub">{subtext}</p>
          </div>

          {/* Right: accordion */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {items.map((faq, i) => (
              <div
                key={i}
                className={`spt-new-faq-item${openIdx === i ? " open" : ""}`}
              >
                <button
                  className="spt-new-faq-trigger"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span className="spt-new-faq-q">{faq.q}</span>
                  <span className="spt-new-faq-icon">
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
                <div className="spt-new-faq-answer">
                  <p className="spt-new-faq-answer-inner">{faq.a}</p>
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
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function ServicePageTemplate({
  serviceData,
}: {
  serviceData: ServiceData;
}) {
  return (
    <>
      <ServiceStyles />
      <HeroSection
        data={serviceData.hero}
        galleryImages={serviceData.gallery.images}
      />
      <IntroSection data={serviceData.intro} />
      <CardsSection data={serviceData.cards} />
      <ProcessSection data={serviceData.process} />
      <FAQSection data={serviceData.faq} />
      <TestimonialsSection/>
      <CTASection data={serviceData.cta} />
      <CTAAndFooter />
    </>
  );
}
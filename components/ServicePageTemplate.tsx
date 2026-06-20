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
   STYLES — using global design tokens
═══════════════════════════════════════════════════════════════════ */
function ServiceStyles() {
  return (
    <style>{`
      /* ── Base Typography ── */
      .spt-display  { font-family: var(--font-inter-tight), sans-serif; }
      .spt-heading  { font-family: var(--font-inter-tight), sans-serif; }
      .spt-body     { font-family: var(--font-inter), sans-serif; }

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

      /* ── Consistent Section Padding ── */
      .spt-section-padding {
        padding-inline: clamp(20px, 5vw, 40px);
        padding-block: clamp(48px, 8vw, 80px);
      }
      @media (min-width: 1024px) {
        .spt-section-padding {
          padding-block: clamp(64px, 8vw, 96px);
        }
      }

      /* ── Eyebrow ── */
      .spt-eyebrow {
        font-size: var(--step--1);
        font-weight: var(--fw-semibold);
        line-height: var(--leading-fine);
        letter-spacing: 0.22em;
        text-transform: uppercase;
        margin-bottom: var(--space-s);
      }

      /* ── Heading ── */
      .spt-section-heading {
        font-family: var(--font-inter-tight), sans-serif;
        font-size: var(--step-5);
        font-weight: var(--fw-medium);
        line-height: var(--leading-flat);
        letter-spacing: -0.02em;
        color: #0d1b3e;
      }

      /* ── Body Text ── */
      .spt-body-text {
        font-size: var(--step-0);
        font-weight: var(--fw-normal);
        line-height: var(--leading-standard);
        color: #64748b;
      }

      /* ── Subtitle ── */
      .spt-subtitle {
        font-size: var(--step-0);
        font-weight: var(--fw-normal);
        color: #6b7a99;
        line-height: var(--leading-standard);
        margin: 0;
      }

      /* ── CTA Button (matches all sections) ── */
      .spt-cta {
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
        width: fit-content;
      }
      .spt-cta:hover {
        background: #1d4ed8;
        padding-right: calc(var(--space-s) + 0.5rem);
      }
      .spt-cta:focus-visible {
        outline: 2px solid #2563eb;
        outline-offset: 3px;
      }
      .spt-cta-circle {
        width: 36px;
        height: 36px;
        border-radius: var(--radius-full);
        background: #ffffff;
        color: #0d1b3e;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: background 0.22s, color 0.22s;
      }
      .spt-cta:hover .spt-cta-circle { background: #dbeafe; }

      /* Outline variant */
      .spt-cta-outline {
        background: transparent;
        border: 1.5px solid rgba(255,255,255,0.55);
        color: #ffffff;
      }
      .spt-cta-outline:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
      .spt-cta-outline .spt-cta-circle { background: rgba(255,255,255,0.15); color: #fff; }
      .spt-cta-outline:hover .spt-cta-circle { background: rgba(255,255,255,0.25); }

      /* Hero "View Services" link */
      .spt-hero-learn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-3xs);
        color: rgba(255,255,255,0.7);
        font-size: var(--step-0);
        font-weight: var(--fw-medium);
        transition: color .2s;
        text-decoration: none;
        white-space: nowrap;
      }
      .spt-hero-learn:hover { color: #fff; }
      .spt-hero-learn:hover .spt-hero-learn-arrow { transform: translateX(3px); }
      .spt-hero-learn-arrow { display: flex; transition: transform .2s ease; }

      /* Hero Tags */
      .spt-hero-tag {
        font-size: var(--step-0);
        font-weight: var(--fw-medium);
        line-height: var(--leading-fine);
        color: rgba(255,255,255,0.65);
      }

      /* Hero Heading */
      .spt-hero-heading {
        font-size: clamp(3rem, 6vw, 4.25rem);
        font-weight: var(--fw-medium);
        line-height: var(--leading-flat);
        letter-spacing: -0.02em;
      }

      /* Hero Subtext */
      .spt-hero-sub {
        font-size: var(--step-0);
        font-weight: var(--fw-normal);
        line-height: var(--leading-standard);
        color: #cbd5e1;
      }

      /* ── Infinite Strip ── */
      .spt-strip-wrapper {
        width: 95%;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
      }
      .spt-strip-track {
        display: flex;
        align-items: flex-end;
        gap: var(--space-s);
        width: max-content;
        will-change: transform;
      }
      .spt-strip-img {
        border-radius: var(--radius-lg);
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
        .spt-strip-wrapper { width: 100%; }
        .spt-strip-img.is-a { width: 170px; height: 200px; }
        .spt-strip-img.is-b { width: 210px; height: 155px; }
      }

      /* ── Intro Image ── */
      .spt-intro-img {
        border-radius: var(--radius-2xl);
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(13,27,62,.15);
        position: relative;
      }

      /* ── Section Header Row (left heading / right subtext) ── */
      .spt-header-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: var(--space-xl);
        margin-bottom: clamp(32px, 5vw, 48px);
      }
      .spt-header-left { flex: 1; min-width: 0; }
      .spt-header-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-m);
        max-width: 360px;
        padding-top: 3rem;
      }

      /* ── Service Cards ── */
      .spt-svc-card {
        background: #ffffff;
        border: 1px solid #e4e9f4;
        border-radius: var(--radius-2xl);
        padding: var(--space-xl) var(--space-l) var(--space-2xl);
        display: flex;
        flex-direction: column;
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
        border-radius: var(--radius-lg);
        background: #eff4ff;
        color: #2563eb;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-bottom: var(--space-l);
        transition: background .22s, color .22s, transform .3s cubic-bezier(0.34,1.56,0.64,1);
      }
      .spt-svc-card:hover .spt-card-icon-badge {
        background: #dbeafe;
        color: #1d4ed8;
        transform: rotate(-8deg) scale(1.08);
      }
      .spt-card-title {
        font-family: var(--font-inter-tight), sans-serif;
        font-size: var(--step-2);
        font-weight: var(--fw-semibold);
        color: #0d1b3e;
        line-height: var(--leading-tight);
        letter-spacing: -0.01em;
        margin-bottom: var(--space-xs);
      }
      .spt-card-desc {
        font-size: var(--step-0);
        font-weight: var(--fw-normal);
        color: #6b7a99;
        line-height: var(--leading-loose);
      }

      /* ── Process Cards ── */
      .spt-new-proc-card {
        background: #ffffff;
        border-radius: var(--radius-2xl);
        border: 1px solid #e4e9f4;
        padding: var(--space-xl) var(--space-l) var(--space-2xl);
        box-shadow: 0 2px 12px rgba(8,26,61,0.06);
        transition: box-shadow 0.26s ease, border-color 0.26s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1);
        position: relative;
        overflow: hidden;
      }
      .spt-new-proc-card:hover {
        box-shadow: 0 16px 40px rgba(8,26,61,0.13);
        border-color: #bfdbfe;
        transform: translateY(-8px);
      }

      .spt-new-proc-icon {
        width: 54px; height: 54px;
        border-radius: var(--radius-lg);
        background: #eff4ff;
        color: #2563eb;
        display: flex; align-items: center; justify-content: center;
        margin-bottom: var(--space-l);
        transition: background .22s, color .22s, transform .3s cubic-bezier(0.34,1.56,0.64,1);
      }
      .spt-new-proc-card:hover .spt-new-proc-icon {
        background: #dbeafe; color: #1d4ed8;
        transform: rotate(-8deg) scale(1.08);
      }
      .spt-new-proc-num {
        position: absolute;
        top: var(--space-l); right: var(--space-l);
        font-family: var(--font-inter-tight), sans-serif;
        font-size: var(--step-5);
        font-weight: var(--fw-extrabold);
        color: #081a3d; opacity: 0.06;
        line-height: 1; letter-spacing: -0.04em;
        pointer-events: none; user-select: none;
      }
      .spt-new-proc-title {
        font-family: var(--font-inter-tight), sans-serif;
        font-size: var(--step-2);
        font-weight: var(--fw-bold);
        color: #081a3d; line-height: var(--leading-tight);
        letter-spacing: -0.02em; margin-bottom: var(--space-xs);
      }
      .spt-new-proc-desc {
        font-size: var(--step-0); font-weight: var(--fw-normal);
        color: #6b7a99; line-height: var(--leading-standard);
        margin-bottom: var(--space-l);
      }
      .spt-new-proc-divider {
        height: 1px; background: #e4e9f4;
        margin-bottom: var(--space-m);
      }
      .spt-new-proc-bullet {
        display: flex; align-items: flex-start; gap: var(--space-xs);
        margin-bottom: var(--space-xs);
      }
      .spt-new-proc-bullet:last-child { margin-bottom: 0; }
      .spt-new-proc-check {
        width: 20px; height: 20px;
        border-radius: var(--radius-full);
        background: #eff4ff;
        border: 1px solid #bfd0f7;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; margin-top: 2px;
      }
      .spt-new-proc-bullet-text {
        font-size: var(--step-0); font-weight: var(--fw-medium);
        color: #374151; line-height: var(--leading-fine);
      }

      /* ── FAQ ── */
      .spt-faq-grid {
        display: grid;
        grid-template-columns: 1fr 1.55fr;
        
        align-items: start;
      }
      .spt-faq-heading {
        font-family: var(--font-inter-tight), sans-serif;
        font-size: var(--step-5);
        font-weight: var(--fw-medium);
        color: #081a3d;
        line-height: var(--leading-flat);
        letter-spacing: -0.02em;
        margin: 0 0 var(--space-s);
      }
      .spt-faq-sub {
        font-size: var(--step-0);
        font-weight: var(--fw-normal);
        color: #6b7a99;
        line-height: var(--leading-loose);
        margin: 0 0 var(--space-xl);
      }
      .spt-new-faq-item {
        background: #ffffff;
        border: 1px solid #e4e9f4;
        border-radius: var(--radius-lg);
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
        gap: var(--space-s);
        padding: var(--space-s) var(--space-m);
        background: transparent;
        border: none;
        cursor: pointer;
        text-align: left;
        transition: background .18s;
      }
      .spt-new-faq-trigger:hover { background: #f5f7ff; }
      .spt-new-faq-item.open .spt-new-faq-trigger { background: #f5f7ff; }
      .spt-new-faq-q {
        font-size: var(--step-0);
        font-weight: var(--fw-medium);
        color: #081a3d;
        line-height: var(--leading-fine);
        letter-spacing: -0.01em;
      }
      .spt-new-faq-icon {
        width: 28px; height: 28px;
        border-radius: var(--radius-full);
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
        padding: 0 var(--space-m);
      }
      .spt-new-faq-item.open .spt-new-faq-answer {
        max-height: 300px;
        padding: 0 var(--space-m) var(--space-s);
      }
      .spt-new-faq-answer-inner {
        font-size: var(--step--1);
        font-weight: var(--fw-normal);
        color: #6b7a99;
        line-height: var(--leading-loose);
        border-top: 1px solid #e4e9f4;
        padding-top: var(--space-s);
      }

      /* ── Responsive ── */
      @media (max-width: 1023px) {
        .spt-header-row { flex-direction: column; align-items: flex-start; gap: var(--space-m); }
        .spt-header-right { max-width: 100%; padding-top: 0; }
        .spt-faq-grid { grid-template-columns: 1fr;  }
      }

      @media (max-width: 639px) {
        .spt-section-padding {
          padding-inline: var(--space-s);
        }
        .spt-svc-card,
        .spt-new-proc-card {
          padding: var(--space-l) var(--space-m) var(--space-xl);
        }
        .spt-new-proc-num {
          font-size: var(--step-4);
          top: var(--space-s);
          right: var(--space-s);
        }
        .spt-eyebrow {
          font-size: var(--step--2);
          margin-bottom: var(--space-xs);
        }
        .spt-hero-heading {
          font-size: clamp(2rem, 10vw, 3rem);
        }
      }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   INFINITE STRIP
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
   SECTION 1 — HERO
═══════════════════════════════════════════════════════════════════ */
function HeroSection({
  data,
  galleryImages,
}: {
  data: HeroData;
  galleryImages: GalleryImage[];
}) {
  const { line1, line2, line3, subtext, bgImage } = data;

  const stripImages =
    galleryImages.length > 0
      ? galleryImages
      : Array.from({ length: 6 }, (_, i) => ({
          src: bgImage,
          alt: `Example ${i + 1}`,
        }));

  return (
    <section
      className="spt-body relative flex flex-col"
      style={{ borderRadius: 20 }}
    >
      <Navbar />
      <div
        className="flex flex-col items-center"
        style={{ width: "97%", margin: "0 auto" }}
      >
        <div
          className="relative w-full bg-[#0d1b3e] text-white"
          style={{ borderRadius: 20 }}
        >
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-14 pt-28 pb-10 lg:pt-32">
            <div className="spt-anim-1 flex items-center gap-2 mb-7 flex-wrap">
              {[
                "Fully Insured",
                "Exterior Cleaning Specialists",
                "Birmingham & UK",
              ].map((tag) => (
                <span
                  key={tag}
                  className="spt-hero-tag flex items-center gap-1.5"
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

            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 pb-10">
              <div className="flex-1 min-w-0">
                <h1 className="spt-anim-2 spt-display spt-hero-heading">
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

              <div className="spt-anim-3 lg:max-w-[360px] flex flex-col justify-center gap-6 lg:pt-3 shrink-0">
                <p className="spt-hero-sub">{subtext}</p>
                <div className="flex flex-row gap-4">
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
    <section className="spt-body bg-[#F8F9FC] spt-section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="spt-eyebrow text-[#2563eb] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block" />
              {eyebrow}
            </p>
            <h2 className="spt-section-heading mb-6">{heading}</h2>
            <div className="flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="spt-body-text">
                  {p}
                </p>
              ))}
            </div>
            <a href="#quote" className="spt-cta mt-8">
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
   SECTION 3 — CARDS
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
      className="spt-body bg-[#f8f9fc] spt-section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <div className="spt-header-row">
          <div className="spt-header-left">
            <p className="spt-eyebrow text-[#2563eb] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block" />
              {eyebrow}
            </p>
            <h2 className="spt-section-heading">{heading}</h2>
          </div>
          <div className="spt-header-right">
            <p className="spt-subtitle">{subtext}</p>
            <a href="#quote" className="spt-cta">
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
                <h3 className="spt-card-title">{card.title}</h3>
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
═══════════════════════════════════════════════════════════════════ */
function ProcessSection({ data }: { data: ProcessData }) {
  const { eyebrow, heading, subtext, steps } = data;

  const gridClass =
    steps.length === 4
      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start";

  return (
    <section className="spt-body bg-[#f8f9fc] spt-section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="spt-header-row">
          <div className="spt-header-left">
            <p className="spt-eyebrow text-[#2563eb] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block" />
              {eyebrow}
            </p>
            <h2 className="spt-section-heading">{heading}</h2>
          </div>
          <div className="spt-header-right">
            <p className="spt-subtitle">{subtext}</p>
            <a href="#quote" className="spt-cta">
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
   SECTION 5 — FAQ
═══════════════════════════════════════════════════════════════════ */
function FAQSection({ data }: { data: FaqData }) {
  const { eyebrow, heading, subtext, items } = data;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="spt-body bg-[#f8f9fc] spt-section-padding">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="spt-faq-grid">
          <div>
            <p className="spt-eyebrow text-[#2563eb] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block" />
              {eyebrow}
            </p>
            <h2 className="spt-faq-heading">
              {heading.split(" ").slice(0, -1).join(" ")}
              <br />
              <span className="text-[#2563eb]">
                {heading.split(" ").slice(-1)[0]}
              </span>
            </h2>
            <p className="spt-faq-sub">{subtext}</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2xs)",
            }}
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
      <TestimonialsSection />
      <CTASection data={serviceData.cta} />
      <CTAAndFooter />
    </>
  );
}

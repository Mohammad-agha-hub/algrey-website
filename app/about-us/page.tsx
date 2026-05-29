"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";
import FAQSection from "@/components/Faq";
import CTASection from "@/components/CTA";

/* ═══════════════════════════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════════════════════════ */
function AboutStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@400;600;700;800;900&display=swap');

      .abt-display  { font-family: 'Bebas Neue', sans-serif; }
      .abt-heading  { font-family: 'Manrope', sans-serif; }
      .abt-body     { font-family: 'Inter', sans-serif; }

      /* ── Animations ── */
      @keyframes abt-fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes abt-fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      .abt-anim-1 { animation: abt-fadeUp .65s ease both; }
      .abt-anim-2 { animation: abt-fadeUp .65s .10s ease both; }
      .abt-anim-3 { animation: abt-fadeUp .65s .22s ease both; }
      .abt-anim-4 { animation: abt-fadeUp .65s .34s ease both; }
      .abt-anim-5 { animation: abt-fadeIn  .8s .48s ease both; }

      /* ── Breadcrumb ── */
      .abt-breadcrumb { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
      .abt-breadcrumb a {
        color: rgba(255,255,255,0.5);
        font-size: 12px;
        font-weight: 500;
        text-decoration: none;
        transition: color .2s;
      }
      .abt-breadcrumb a:hover { color: rgba(255,255,255,0.9); }
      .abt-breadcrumb .bc-sep    { color: rgba(255,255,255,0.3); font-size: 12px; }
      .abt-breadcrumb .bc-active { color: #FFF265; font-size: 12px; font-weight: 600; }

      /* ── Service Cards (mission / values) ── */
      .abt-svc-card {
        background: #0d2257;
        border-radius: 16px;
        padding: 36px 28px 32px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        cursor: default;
        min-height: 260px;
        transition: background 0.3s ease;
      }
      .abt-svc-card:hover { background: #FFF265; }
      .abt-svc-card .abt-card-icon  { color: #ffffff; transition: color 0.3s ease; }
      .abt-svc-card:hover .abt-card-icon { color: #0d2257; }
      .abt-svc-card .abt-card-title { color: #ffffff; transition: color 0.3s ease; }
      .abt-svc-card:hover .abt-card-title { color: #0d2257; }
      .abt-svc-card .abt-card-desc {
        color: #94a8cc;
        font-size: 13.5px;
        line-height: 1.7;
        margin-top: 8px;
        transition: color 0.3s ease;
      }
      .abt-svc-card:hover .abt-card-desc { color: #081a3d; }

      /* ── Process / Why-choose cards (flip) ── */
      .abt-proc-card {
        position: relative;
        border-radius: 20px;
        border: 1px solid #1a2f6e;
        overflow: hidden;
        height: 430px;
        box-shadow: 0 4px 24px rgba(0,0,0,.25);
        transition: transform .28s ease, box-shadow .28s ease;
      }
      .abt-proc-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 48px rgba(0,0,0,.4);
      }
      .abt-proc-face {
        position: absolute;
        inset: 0;
        padding: 32px;
        display: flex;
        flex-direction: column;
        transition: opacity .38s ease;
      }
      .abt-proc-face-default {
        background: #0d2257;
        justify-content: space-between;
        opacity: 1;
      }
      .abt-proc-card:hover .abt-proc-face-default { opacity: 0; pointer-events: none; }
      .abt-proc-face-hover {
        background: #FFF265;
        justify-content: flex-start;
        padding-top: 44px;
        opacity: 0;
        pointer-events: none;
      }
      .abt-proc-card:hover .abt-proc-face-hover { opacity: 1; pointer-events: auto; }
      .abt-proc-icon {
        width: 60px; height: 60px;
        border-radius: 14px;
        background: #2563eb;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: #ffffff;
      }
      .abt-proc-num {
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
      .abt-proc-face-mobile { display: none; }

      @media (max-width: 1023px) {
        .abt-proc-card {
          height: auto;
          background: #0d2257;
          border-radius: 16px;
          transition: background .3s ease, box-shadow .28s ease, transform .28s ease;
        }
        .abt-proc-card:hover { background: #FFF265; transform: translateY(-4px); }
        .abt-proc-face-default, .abt-proc-face-hover { display: none; }
        .abt-proc-face-mobile {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 32px 28px;
        }
        .abt-proc-card .abt-mob-icon  { color: #ffffff; transition: color .3s ease; }
        .abt-proc-card:hover .abt-mob-icon { color: #081a3d; }
        .abt-proc-card .abt-mob-title {
          font-family: 'Manrope', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.3px;
          margin-bottom: 10px;
          transition: color .3s ease;
        }
        .abt-proc-card:hover .abt-mob-title { color: #081a3d; }
        .abt-proc-card .abt-mob-bullet {
          font-size: 13.5px;
          font-weight: 600;
          color: #94a8cc;
          line-height: 1.5;
          transition: color .3s ease;
        }
        .abt-proc-card:hover .abt-mob-bullet { color: #081a3d; }
        .abt-proc-card .abt-mob-check {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: #081a3d;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
          color: #2563eb;
          transition: background .3s ease, color .3s ease;
        }
        .abt-proc-card:hover .abt-mob-check { color: #FFF265; }
      }

      /* ── Team cards ── */
      .abt-team-card {
        background: #ffffff;
        border-radius: 20px;
        overflow: hidden;
        border: 1px solid #e8edf5;
        transition: box-shadow .28s ease, transform .28s ease;
      }
      .abt-team-card:hover {
        box-shadow: 0 20px 48px rgba(13,34,87,.12);
        transform: translateY(-6px);
      }
      .abt-team-img {
        width: 100%;
        height: 360px;
        position: relative;
        overflow: hidden;
      }
      .abt-team-img img { transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }
      .abt-team-card:hover .abt-team-img img { transform: scale(1.05); }
      .abt-team-body { padding: 24px 28px 28px; }

      /* ── Stat pill ── */
      .abt-stat-pill {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 16px;
        padding: 24px 20px;
        text-align: center;
        backdrop-filter: blur(6px);
      }

      /* ── Intro image ── */
      .abt-intro-img {
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(13,34,87,.15);
        position: relative;
      }

      /* ── FAQ ── */
      .abt-faq-item {
        border: 1px solid #e8edf5;
        border-radius: 14px;
        overflow: hidden;
        transition: border-color .2s, box-shadow .2s;
      }
      .abt-faq-item.open { border-color: #2563eb; box-shadow: 0 4px 24px rgba(37,99,235,.1); }
      .abt-faq-trigger {
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
      .abt-faq-trigger:hover { background: #f8f9ff; }
      .abt-faq-item.open .abt-faq-trigger { background: #f8f9ff; }
      .abt-faq-icon {
        width: 28px; height: 28px;
        border-radius: 50%;
        border: 1.5px solid #cbd5e1;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        color: #94a3b8;
        transition: background .2s, border-color .2s, color .2s, transform .25s;
      }
      .abt-faq-item.open .abt-faq-icon {
        background: #2563eb;
        border-color: #2563eb;
        color: #ffffff;
        transform: rotate(45deg);
      }
      .abt-faq-body-text {
        max-height: 0;
        overflow: hidden;
        transition: max-height .35s ease, padding .3s ease;
        padding: 0 24px;
      }
      .abt-faq-item.open .abt-faq-body-text { max-height: 300px; padding: 0 24px 20px; }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="abt-body relative min-h-[70vh] flex flex-col">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gutter-6.webp"
          alt="Al Grey's Cleaning Services team"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#081a3d]/95 via-[#0d2257]/80 to-transparent" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#081a3d]/90 via-[#0d2257]/85 to-[#061530]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061530]/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-34 pb-16 flex flex-col justify-end">
        {/* Eyebrow */}
        <p className="abt-anim-2 inline-flex items-center gap-2 text-[#FFF265] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
          Trusted Since 2010
        </p>

        {/* Headline */}
        <h1 className="abt-anim-3 abt-display tracking-[4px] text-5xl sm:text-6xl xl:text-7xl leading-[0.95] font-bold uppercase mb-5 text-white">
          About
        
          <span className="text-blue-600"> Al Grey's </span>
          <br></br>
          Cleaning
        </h1>

        {/* Subtext */}
        <p className="abt-anim-4 text-gray-300 text-base leading-relaxed max-w-lg text-center mb-8">
          Learn about our journey, values, and commitment to excellence in
          gutter cleaning and property maintenance across Birmingham and the
          Midlands.
        </p>

        {/* CTA */}
        <div className="abt-anim-4 flex flex-col sm:flex-row gap-3">
          <a
            href="#story"
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
            Our Story
          </a>
          <a
            href="/contact"
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
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}



/* ═══════════════════════════════════════════════════════════════════
   SECTION 3 — OUR STORY  (text left + image right)
═══════════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section
      id="story"
      className="abt-body bg-white py-24 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
              Cleaning Excellence Since 2010
            </p>
            <h2 className="abt-heading text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-6">
              A Simple Mission, Exceptional Results
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Al Grey's Cleaning Services was founded in 2010 with a simple
                yet powerful mission: to provide exceptional gutter cleaning and
                property maintenance services that protect homes and businesses
                while delivering outstanding customer value.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                What started as a one-person operation has grown into a trusted
                team of professionals serving Birmingham and surrounding areas.
                Al Grey, our founder, began with just a ladder and a passion for
                helping homeowners protect their properties from water damage
                caused by clogged gutters.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Over the years, we've expanded our services to include window
                cleaning, pressure washing, roof cleaning, and comprehensive
                property maintenance solutions. Despite our growth, we've
                maintained the commitment to the personal touch that made us
                successful in the first place.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Today, we're proud to be one of Birmingham's most recommended
                cleaning companies, with hundreds of satisfied residential and
                commercial clients who trust us to keep their properties in
                pristine condition year after year.
              </p>
            </div>
            <a
              href="/contact"
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
          <div className="abt-intro-img h-[360px] lg:h-[480px]">
            <Image
              src="/gutter-5.jpg"
              alt="Al Grey's Cleaning Services team at work"
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
   SECTION 4 — MISSION & VISION  (dark bg, 2-col cards)
═══════════════════════════════════════════════════════════════════ */
const MISSION_CARDS = [
  {
    title: "Our Mission",
    desc: "To provide exceptional gutter cleaning and property maintenance services that protect our clients' investments, enhance property aesthetics, and deliver peace of mind through reliable, professional service and outstanding customer care.",
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
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    desc: "To become the most trusted and recommended cleaning service provider in the Midlands, recognised for our commitment to quality, innovation in service delivery, and positive impact on the communities we serve.",
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
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

function MissionSection() {
  return (
    <section
      className="abt-body py-24 px-5 sm:px-8 lg:px-16"
      style={{ background: "#081a3d" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-[#FFF265] font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            Driven by Purpose
          </p>
          <h2 className="abt-heading text-[clamp(32px,4.5vw,50px)] font-extrabold text-white leading-tight tracking-tight mb-5">
            Our Mission &amp; Vision
          </h2>
          <p className="text-[#94a8cc] text-[15px] leading-relaxed max-w-2xl mx-auto">
            Driven by purpose, guided by vision — everything we do starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {MISSION_CARDS.map((card) => (
            <div key={card.title} className="abt-svc-card">
              <div className="abt-card-icon">{card.icon}</div>
              <div>
                <h3 className="abt-heading abt-card-title text-[20px] font-extrabold leading-snug tracking-[-0.3px]">
                  {card.title}
                </h3>
                <p className="abt-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 5 — CORE VALUES  (white bg, 3-col cards)
═══════════════════════════════════════════════════════════════════ */
const VALUES = [
  {
    title: "Quality & Excellence",
    desc: "We never compromise on quality. Every job, no matter how small, receives our full attention and commitment to excellence.",
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
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity & Trust",
    desc: "We build relationships based on honesty, transparency and reliability. Your trust is our most valuable asset.",
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    desc: "Our clients are at the heart of everything we do. We listen carefully and tailor our services to meet your specific needs.",
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
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "Environmental Responsibility",
    desc: "We use eco-friendly cleaning solutions and responsible waste disposal methods to minimise our environmental impact.",
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
          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.249 2.249 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "We continuously invest in new equipment, techniques, and training to deliver better, more efficient services.",
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
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "We're proud to support local businesses and community initiatives, strengthening the areas we serve.",
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
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

function ValuesSection() {
  return (
    <section className="abt-body bg-white py-24 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            The Principles That Guide Us
          </p>
          <h2 className="abt-heading text-[clamp(32px,4.5vw,50px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-5">
            Our Core Values
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            The principles that guide everything we do — from the first call to
            the final clean.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((card) => (
            <div key={card.title} className="abt-svc-card">
              <div className="abt-card-icon">{card.icon}</div>
              <div>
                <h3 className="abt-heading abt-card-title text-[20px] font-extrabold leading-snug tracking-[-0.3px]">
                  {card.title}
                </h3>
                <p className="abt-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 6 — MEET THE TEAM
═══════════════════════════════════════════════════════════════════ */
const TEAM = [
  {
    name: "Al Grey",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in the cleaning industry, Al founded the company with a vision to provide high-quality services that customers can trust. His hands-on approach ensures that our standards never slip.",
    img: "/al.avif",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    bio: "Sarah brings 8 years of operations experience to our team, ensuring that every project runs smoothly from start to finish. Her attention to detail and outstanding customer service skills make her an invaluable part of our company.",
    img: "/sarah.avif",
  },
  {
    name: "Mike Thompson",
    role: "Head of Technical Services",
    bio: "Mike leads our technical team with 10 years of specialised experience in gutter systems and exterior cleaning. His expertise ensures that even the most challenging projects are completed to the highest standards.",
    img: "/mike.avif",
  },
];

function TeamSection() {
  return (
    <section
      className="abt-body py-24 px-5 sm:px-8 lg:px-16"
      style={{ background: "#f8f9ff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            The People Behind the Work
          </p>
          <h2 className="abt-heading text-[clamp(32px,4.5vw,50px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-5">
            Meet Our Team
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            The dedicated professionals who show up every day committed to
            protecting your property.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="abt-team-card">
              <div className="abt-team-img">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="abt-team-body">
                {/* Role pill */}
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                  {member.role}
                </span>
                <h3 className="abt-heading text-[22px] font-extrabold text-[#0d2257] leading-snug tracking-tight mb-3">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">
                  {member.bio}
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
   SECTION 7 — WHY CHOOSE US  (flip-card process style)
═══════════════════════════════════════════════════════════════════ */
const WHY_ITEMS = [
  {
    title: "Proven Experience",
    desc: "Over 15 years and 2,000+ completed projects speak for themselves.",
    bullets: [
      "15+ years serving Birmingham & the Midlands",
      "Over 2,000 satisfied residential & commercial clients",
      "Hundreds of 5-star reviews online",
    ],
    icon: (
      <svg
        className="w-7 h-7"
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
    title: "Fully Insured",
    desc: "Complete public liability insurance for total peace of mind on every job.",
    bullets: [
      "Full public liability insurance",
      "All operatives DBS checked",
      "Your property is always protected",
    ],
    icon: (
      <svg
        className="w-7 h-7"
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
    title: "Satisfaction Guarantee",
    desc: "If you're not happy, we'll make it right — no questions asked.",
    bullets: [
      "100% satisfaction or we return free of charge",
      "No hidden fees, ever",
      "Transparent pricing upfront",
    ],
    icon: (
      <svg
        className="w-7 h-7"
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
    title: "Reliable & Punctual",
    desc: "We show up on time, every time — no excuses, no delays.",
    bullets: [
      "Always on time, or we call ahead",
      "Same-day quotes available",
      "Consistent scheduling you can rely on",
    ],
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    title: "Modern Equipment",
    desc: "We invest in the latest tools to deliver superior results, safely.",
    bullets: [
      "Industry-leading gutter vacuum systems",
      "Water-fed pole window cleaning",
      "Eco-friendly cleaning chemicals",
    ],
    icon: (
      <svg
        className="w-7 h-7"
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
    ),
  },
  {
    title: "Competitive Pricing",
    desc: "Fair, transparent pricing with no hidden costs — ever.",
    bullets: [
      "No hidden fees or surprise charges",
      "Free quotes with no obligation",
      "Exceptional value for every budget",
    ],
    icon: (
      <svg
        className="w-7 h-7"
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
];

function WhySection() {
  return (
    <section className="abt-body py-24" style={{ background: "#081a3d" }}>
      <div className="max-w-7xl mx-auto px-7">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="inline-flex items-center justify-center gap-2 text-[#FFF265] font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            What Sets Us Apart
          </p>
          <h2 className="abt-heading text-[clamp(32px,4.5vw,48px)] font-extrabold text-white leading-tight tracking-tight mb-5">
            Why Choose Al Grey's
          </h2>
          <p className="text-[#94a8cc] text-[15px] leading-relaxed">
            Six reasons thousands of homeowners and businesses across Birmingham
            trust us with their properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {WHY_ITEMS.map((step, i) => (
            <div key={step.title} className="abt-proc-card">
              {/* Desktop default face */}
              <div className="abt-proc-face abt-proc-face-default">
                <div className="flex items-center justify-between">
                  <div className="abt-proc-icon">{step.icon}</div>
                  <span className="abt-proc-num">
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
              <div className="abt-proc-face abt-proc-face-hover">
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
              <div className="abt-proc-face-mobile">
                <div className="abt-mob-icon">{step.icon}</div>
                <div>
                  <p className="abt-mob-title">{step.title}</p>
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
                      <span className="abt-mob-check">
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
                      <span className="abt-mob-bullet">{b}</span>
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
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <AboutStyles />
      <HeroSection />
     
      <StorySection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <WhySection />
        <FAQSection/>
        <CTASection/>
      <CTAAndFooter />
    </>
  );
}

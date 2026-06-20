"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import Navbar from "./Navbar";

const COLLAGE = [
  { src: "/lp-1.webp", alt: "Cleaner wiping surface" },
  { src: "/lp-2.webp", alt: "Professional cleaning tools" },
  { src: "/lp-3.webp", alt: "Cleaning spray and cloth" },
  { src: "/lp-4.webp", alt: "Cleaning team at work" },
  { src: "/lp-5.webp", alt: "Scrubbing floor" },
  { src: "/lp-6.webp", alt: "Polishing windows" },
  { src: "/lp-7.webp", alt: "Home cleaning" },
  { src: "/lp-8.webp", alt: "Carpet cleaning" },
  { src: "/lp-9.webp", alt: "Carpet cleaning" },
];

const TRACK = [...COLLAGE, ...COLLAGE];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const FALLBACK_HALF_WIDTH = COLLAGE.length * 380;

function InfiniteStrip() {
  const x = useMotionValue(0);
  const hovering = useRef(false);
  const visibleRef = useRef(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(FALLBACK_HALF_WIDTH);
  const shouldReduceMotion = useReducedMotion();

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
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(track);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || !visibleRef.current) return;

    const safeDelta = Math.min(delta, 100);
    const speed = hovering.current ? 40 : 60;
    let next = x.get() - (speed * safeDelta) / 1000;

    const hw = halfWidthRef.current;
    if (hw && next <= -hw) next += hw;
    x.set(next);
  });

  return (
    <div
      className="hs-strip"
      onMouseEnter={() => {
        hovering.current = true;
      }}
      onMouseLeave={() => {
        hovering.current = false;
      }}
    >
      <motion.div ref={trackRef} className="hs-track" style={{ x }}>
        {TRACK.map((img, i) => (
          <img
            key={img.src + i}
            src={img.src}
            alt={img.alt}
            aria-hidden={i >= COLLAGE.length ? true : undefined}
            className={`hs-collage-img ${i % 2 === 0 ? "is-a" : "is-b"}`}
            width={i % 2 === 0 ? 350 : 400}
            height={i % 2 === 0 ? 400 : 300}
            loading={i < 2 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const itemReveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE },
        };

  const fadeReveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  const ctaMotionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.96 },
        transition: { type: "spring" as const, stiffness: 400, damping: 24 },
      };

  return (
    <>
      <style>{`
        /* ── Base Typography ── */
        .hs-root { 
          font-family: var(--font-inter), sans-serif; 
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .hs-root * { font-family: inherit; }
        .hs-display { font-family: var(--font-inter-tight), sans-serif; }
        .hs-display * { font-family: inherit; }

        /* ── Container ── */
        .hs-hero-inner {
          padding-block: var(--space-xl) 0;
          padding-inline: var(--space-s);
        }

        /* ── Tagline ── */
        .hs-tag {
          font-size: var(--step--1);
          font-weight: var(--fw-medium);
          line-height: var(--leading-fine);
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.65);
        }

        /* ── Heading ── */
        .hs-heading {
          font-size: var(--step-6);
          font-weight: var(--fw-normal);
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
        }

        /* ── Body Text ── */
        .hs-body {
          font-size: var(--step-0);
          font-weight: var(--fw-normal);
          line-height: var(--leading-standard);
          color: #d1d5db;
        }

        /* ── CTA Button ── */
        .hs-btn-book {
          display: inline-flex;
          align-items: center;
          gap: var(--space-s);
          padding: var(--space-2xs) var(--space-s);
          padding-left: var(--space-m);
          border-radius: 100px;
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
        }
        .hs-btn-book:hover {
          background: #1d4ed8;
          padding-right: calc(var(--space-s) + 0.5rem);
        }
        .hs-btn-book .hs-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          color: #0d1b3e;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.22s, color 0.22s;
        }
        .hs-btn-book:hover .hs-arrow { 
          background: #dbeafe; 
        }

        /* ── Secondary Link ── */
        .hs-btn-learn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3xs);
          color: rgba(255, 255, 255, 0.7);
          font-size: var(--step-0);
          font-weight: var(--fw-medium);
          line-height: var(--leading-fine);
          transition: color 0.2s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .hs-btn-learn:hover { 
          color: #fff; 
        }
        .hs-btn-learn:hover .hs-learn-arrow { 
          transform: translateX(3px); 
        }
        .hs-learn-arrow { 
          display: flex; 
          transition: transform 0.2s ease; 
        }

        /* ── Infinite Strip ── */
        .hs-strip {
          width: 95%;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          isolation: isolate;
        }
        .hs-track {
          display: flex;
          align-items: flex-end;
          gap: var(--space-s);
          width: max-content;
          will-change: transform;
        }
        .hs-collage-img {
          border-radius: 14px;
          object-fit: cover;
          display: block;
          flex-shrink: 0;
        }
        .hs-collage-img.is-a { width: 350px; height: 400px; }
        .hs-collage-img.is-b { width: 400px; height: 300px; }

        /* ── Responsive: Tablet ── */
        @media (max-width: 1023px) {
          .hs-track { gap: var(--space-xs); }
          .hs-collage-img.is-a { width: 250px; height: 290px; }
          .hs-collage-img.is-b { width: 290px; height: 220px; }
        }

        /* ── Responsive: Mobile ── */
        @media (max-width: 639px) {
          .hs-hero-inner { 
            padding-block: var(--space-l) 0;
            padding-inline: var(--space-s);
          }
          .hs-track { gap: var(--space-2xs); }
          .hs-collage-img.is-a { width: 180px; height: 210px; }
          .hs-collage-img.is-b { width: 210px; height: 160px; }
          .hs-btn-book .hs-arrow { 
            width: 32px; 
            height: 32px; 
          }
        }

        /* ── Responsive: Small Mobile ── */
        @media (max-width: 420px) {
          .hs-strip { 
            width: 100%; 
            border-radius: 14px; 
          }
          .hs-collage-img.is-a { width: 150px; height: 175px; }
          .hs-collage-img.is-b { width: 175px; height: 130px; }
        }
      `}</style>

      <Navbar />
      <div className="hs-root flex flex-col items-center">
        <section
          style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
          className="relative w-[97%] bg-[#0d1b3e] text-white"
        >
          <div className="hs-hero-inner max-w-7xl mx-auto">
            {/* Tags */}
            <motion.div
              className="flex items-center gap-2 mb-7 flex-wrap"
              {...itemReveal(0)}
            >
              {[
                "Fully Insured",
                "Exterior Cleaning Specialists",
                "Birmingham & UK",
              ].map((tag) => (
                <span key={tag} className="hs-tag flex items-center gap-1.5">
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
            </motion.div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 pb-10">
              <div className="flex-1 min-w-0">
                <motion.h1
                  className="hs-display hs-heading"
                  {...itemReveal(0.08)}
                >
                  Exterior&nbsp;Cleaning
                  <br />
                  <span className="text-[#3b82f6]">Specialists</span>&nbsp;in
                  <br />
                  Birmingham.
                </motion.h1>
              </div>

              <motion.div
                className="lg:max-w-[360px] flex flex-col justify-center gap-6 lg:pt-3 shrink-0"
                {...itemReveal(0.18)}
              >
                <p className="hs-body">
                  Professional roof, gutter, driveway and patio cleaning
                  services for homes and businesses across the UK.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <motion.a
                    href="/enquiry-now"
                    className="hs-btn-book"
                    {...ctaMotionProps}
                  >
                    Get Quote
                    <span className="hs-arrow">
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </motion.a>
                  <a href="#services" className="hs-btn-learn">
                    View Services
                    <span className="hs-learn-arrow">
                      <svg
                        width="15"
                        height="15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
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
              </motion.div>
            </div>
          </div>

          <motion.div className="mt-4" {...fadeReveal(0.35)}>
            <InfiniteStrip />
          </motion.div>
        </section>
      </div>
    </>
  );
}

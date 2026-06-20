"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const PAIRS = [
  {
    label: "Gutter Cleaning",
    before: "/before-1.webp",
    after: "/after-1.webp",
  },
  {
    label: "Roof Cleaning",
    before: "/before-2.webp",
    after: "/after-2.webp",
  },
  {
    label: "Driveway Cleaning",
    before: "/before-3.webp",
    after: "/after-3.webp",
  },
  {
    label: "Render Cleaning",
    before: "/before-4.webp",
    after: "/after-4.webp",
  },
  {
    label: "Pressure Washing",
    before: "/before-5.webp",
    after: "/after-5.webp",
  },
  {
    label: "Pressure Washing",
    before: "/before-6.webp",
    after: "/after-6.webp",
  },
  {
    label: "Pressure Washing",
    before: "/before-7.webp",
    after: "/after-7.webp",
  },
  {
    label: "Pressure Washing",
    before: "/before-0.webp",
    after: "/after-0.webp",
  },
];

export default function BeforeAfterSection() {
  const [pairIndex, setPairIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const total = PAIRS.length;
  const pair = PAIRS[pairIndex];

  useEffect(() => {
    setSliderPos(50);
  }, [pairIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("ba-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getPct = useCallback((clientX: number) => {
    if (!containerRef.current) return 50;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - left) / width) * 100;
    return Math.min(100, Math.max(0, pct));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    setSliderPos(getPct(e.clientX));
  };
  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;
      setSliderPos(getPct(e.clientX));
    },
    [dragging, getPct],
  );
  const onMouseUp = useCallback(() => setDragging(false), []);

  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    setSliderPos(getPct(e.touches[0].clientX));
  };
  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!dragging) return;
      setSliderPos(getPct(e.touches[0].clientX));
    },
    [dragging, getPct],
  );
  const onTouchEnd = useCallback(() => setDragging(false), []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  const prev = () => setPairIndex((i) => (i - 1 + total) % total);
  const next = () => setPairIndex((i) => (i + 1) % total);

  return (
    <>
      <style>{`
        /* ── Base Typography ── */
        .ba-root { 
          font-family: var(--font-inter), sans-serif; 
        }
        .ba-display { 
          font-family: var(--font-inter-tight), sans-serif; 
        }

        /* ── Reveal Animation ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].ba-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }

        /* ── Eyebrow ── */
        .ba-eyebrow {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2563eb;
        }

        /* ── Heading ── */
        .ba-heading {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-5);
          font-weight: var(--fw-medium);
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          color: #0d1b3e;
        }

        /* ── Body Text ── */
        .ba-body {
          font-size: var(--step-0);
          font-weight: var(--fw-normal);
          line-height: var(--leading-standard);
          color: #64748b;
        }

        /* ── Counter ── */
        .ba-counter {
          font-size: var(--step--1);
          font-weight: var(--fw-medium);
          line-height: var(--leading-fine);
          color: #94a3b8;
        }

        /* ── Slider Container ── */
        .ba-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          cursor: ew-resize;
          user-select: none;
          -webkit-user-select: none;
          touch-action: none;
        }

        @media (max-width: 640px) {
          .ba-container { aspect-ratio: 4 / 3; }
        }

        .ba-after {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ba-before-wrap {
          position: absolute;
          inset: 0;
        }
        .ba-before {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── Divider Line ── */
        .ba-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: white;
          transform: translateX(-50%);
          pointer-events: none;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
        }

        /* ── Handle ── */
        .ba-handle {
          position: absolute;
          top: 50%;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          background: white;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          pointer-events: none;
          gap: 3px;
        }

        /* ── Navigation Buttons ── */
        .ba-nav {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-full);
          border: 1.5px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .ba-nav:hover {
          border-color: #2563eb;
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
        }
        .ba-nav:hover svg { stroke: white; }
        .ba-nav:active { transform: translateY(0) scale(0.94); }

        /* ── Dot Indicators ── */
        .ba-dot {
          width: 8px;
          height: 8px;
          border-radius: var(--radius-full);
          background: #cbd5e1;
          transition: background 0.2s, transform 0.2s;
          cursor: pointer;
          border: none;
          padding: 0;
        }
        .ba-dot:hover { background: #94a3b8; }
        .ba-dot.active {
          background: #2563eb;
          transform: scale(1.3);
        }

        @media (max-width: 639px) {
          .ba-handle {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="ba-root bg-[#f8fafc] py-20 lg:py-28 px-5 sm:px-8 lg:px-14"
      >
        <div className="max-w-7xl mx-auto">
          {/* ── Header ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-14">
            <div className="flex flex-col gap-5 lg:max-w-[52%]">
              <p
                className="ba-eyebrow flex items-center gap-2"
                data-reveal
                data-delay="0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block" />
                Before &amp; After
              </p>
              <h2 className="ba-heading" data-reveal data-delay="80">
                See the difference
                <br />
                we <span className="text-[#2563eb]">make.</span>
              </h2>
            </div>
            <p
              className="ba-body lg:max-w-[360px]"
              data-reveal
              data-delay="160"
            >
              Drag the handle left and right to compare before and after. Every
              result shown is a real job completed by our team.
            </p>
          </div>

          {/* ── Counter ── */}
          <div
            className="flex items-center justify-end mb-5"
            data-reveal
            data-delay="220"
          >
            <span className="ba-counter">
              {pairIndex + 1} / {total}
            </span>
          </div>

          {/* ── Before / After Slider ── */}
          <div
            ref={containerRef}
            className="ba-container"
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            data-reveal
            data-delay="280"
          >
            {/* After image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={`after-${pairIndex}`}
              src={pair.after}
              alt={`${pair.label} after`}
              className="ba-after"
              draggable={false}
            />

            {/* Before image */}
            <div
              key={`wrap-${pairIndex}`}
              className="ba-before-wrap"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`before-${pairIndex}`}
                src={pair.before}
                alt={`${pair.label} before`}
                className="ba-before"
                draggable={false}
              />
            </div>

            {/* Divider line */}
            <div className="ba-line" style={{ left: `${sliderPos}%` }} />

            {/* Handle */}
            <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
              <svg
                width="10"
                height="10"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div style={{ display: "flex", gap: "2px" }}>
                {[0, 1, 2].map((b) => (
                  <div
                    key={b}
                    style={{
                      width: 2,
                      height: 16,
                      background: "#94a3b8",
                      borderRadius: 2,
                    }}
                  />
                ))}
              </div>
              <svg
                width="10"
                height="10"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div
            className="flex items-center justify-between mt-8"
            data-reveal
            data-delay="340"
          >
            <div className="flex items-center gap-3">
              <button
                className="ba-nav"
                onClick={prev}
                aria-label="Previous pair"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="#0d1b3e"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="ba-nav" onClick={next} aria-label="Next pair">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="#0d1b3e"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2">
              {PAIRS.map((_, i) => (
                <button
                  key={i}
                  className={`ba-dot ${i === pairIndex ? "active" : ""}`}
                  onClick={() => setPairIndex(i)}
                  aria-label={`Go to pair ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

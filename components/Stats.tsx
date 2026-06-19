"use client";

import React, { useEffect, useRef } from "react";

const STATS = [
  {
    value: "99",
    suffix: "%",
    label: "Customer satisfaction for all homes and offices we maintain.",
  },
  {
    value: "250",
    suffix: "+",
    label: "Satisfied clients who trust us with their home or workspace.",
  },
  {
    value: "98",
    suffix: "%",
    label: "On-time arrival rate for scheduled appointments.",
  },
  {
    value: "5",
    suffix: "+",
    label: "Years of professional cleaning experience you can rely on.",
  },
];

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Same scroll-reveal convention as the About section: IntersectionObserver
  // adds .st-visible to each [data-reveal] node as it enters the viewport.
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("st-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].st-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }

        .hs-stat {
          cursor: default;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hs-stat:hover {
          transform: translateY(-4px);
        }
        .hs-stat .hs-suffix {
          transition: color 0.25s ease;
        }
        .hs-stat:hover .hs-suffix {
          color: #60a5fa;
        }
        .hs-stat .hs-underline {
          height: 2px;
          width: 28px;
          margin: 10px auto 0;
          background: #3b82f6;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hs-stat:hover .hs-underline {
          transform: scaleX(1);
        }
      `}</style>

      <div className="flex flex-col items-center -my-1">
        <section
          ref={sectionRef}
          style={{
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          className="w-[97%] bg-[#0d1b3e] border-t border-white/[0.07]"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="hs-stat flex flex-col items-center"
                  data-reveal
                  data-delay={i * 90}
                >
                  <p className="hs-display text-[56px] lg:text-[62px] font-normal text-white leading-none mb-2">
                    {s.value}
                    <span className="hs-suffix text-[#3b82f6]">{s.suffix}</span>
                  </p>
                  <div className="hs-underline" />
                  <p className="text-gray-300 text-[13px] leading-snug mx-auto max-w-[160px] mt-2">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Stats;

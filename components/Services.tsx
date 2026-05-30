"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const SERVICES = [
  {
    title: "Gutter Cleaning",
    tag: "Most Popular",
    image: "/gutter-cleaning.webp",
    href: "/services/gutter-cleaning",
    bullets: [
      "Full debris removal — leaves, moss & silt",
      "Downpipe flushing & blockage clearing",
      "Visual inspection with before & after photos",
      "1, 2, 3 & 4 storey properties covered",
      "Minor repairs & re-sealing on the spot",
    ],
  },
  {
    title: "Roof Cleaning",
    tag: "Specialist Service",
    image: "/roof-cleaning.webp",
    href: "/roof-cleaning",
    bullets: [
      "Moss, lichen & algae removal",
      "Safe soft-wash — no high-pressure tile damage",
      "Tile, slate & flat roof compatible",
      "Biocide treatment to slow regrowth",
      "Extends roof lifespan & improves kerb appeal",
    ],
  },
  {
    title: "Pressure Washing",
    tag: "Driveways & Patios",
    image: "/pressure-washing.webp",
    href: "/services/pressure-washing",
    bullets: [
      "Driveways, patios & pathways",
      "Brickwork, render & block paving",
      "Oil stains, graffiti & deep-set grime",
      "Decking, fencing & garden structures",
      "Commercial yards & industrial surfaces",
    ],
  },
  {
    title: "Window Cleaning",
    tag: "Residential & Commercial",
    image: "/window-cleaning.webp",
    href: "/services/window-cleaning",
    bullets: [
      "Pure water fed-pole system — streak-free",
      "Frames, sills & tracks cleaned too",
      "High-rise & hard-to-reach windows",
      "Conservatory roofs & skylights",
      "Regular maintenance contracts available",
    ],
  },
  {
    title: "Fascia & Soffit Cleaning",
    tag: "Residential",
    image: "/facia.webp",
    href: "/services/fascia-soffit-cleaning",
    bullets: [
      "uPVC, wood & aluminium fascia boards",
      "Removes green algae, mould & discolouration",
      "Soffit panels & ventilation grilles cleared",
      "Protective coating to prevent regrowth",
      "Often bundled with gutter clean for best value",
    ],
  },
  {
    title: "Conservatory Roof Cleaning",
    tag: "Specialist",
    image: "/Roof-Cleaning-2.webp",
    href: "/services/conservatory-roof-cleaning",
    bullets: [
      "Safe for polycarbonate, glass & tiled roofs",
      "Restores natural light — up to 70% brighter",
      "Moss, algae & black spot removal",
      "Gutters & frames cleaned as part of the job",
      "Anti-algae treatment lasts up to 12 months",
    ],
  },
];

const CheckIcon = () => (
  <span className="mt-[1px] flex-shrink-0 w-[17px] h-[17px] rounded-full bg-blue-50 flex items-center justify-center">
    <svg
      width="11"
      height="11"
      viewBox="0 0 14 14"
      fill="none"
      stroke="#2563eb"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="2,7 5.5,10.5 12,3" />
    </svg>
  </span>
);

const ArrowIcon = () => (
  <svg
    className="w-[13px] h-[13px]"
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
);

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(
        el.scrollLeft / (el.scrollWidth / SERVICES.length),
      );
      setActiveIdx(Math.min(idx, SERVICES.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;600;700;800&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-body    { font-family: 'Inter', sans-serif; }
        .font-heading { font-family: 'Manrope', sans-serif; }

        .svc-card {
          border: 1px solid #e4e9f2;
          box-shadow: 0 2px 8px rgba(13,34,87,.06),
                      0 8px 28px rgba(13,34,87,.08);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 4px 12px rgba(13,34,87,.08),
                      0 20px 48px rgba(13,34,87,.14);
        }
        .svc-card:hover .svc-img  { transform: scale(1.06); }
        .svc-card:hover .svc-over { opacity: 1; }
        .svc-card:hover .svc-chip { opacity: 1; }
        .svc-card:hover .svc-learn { color: #2563eb; gap: 10px; }

        .svc-img   { transition: transform .45s ease; }
        .svc-over  { opacity: 0; transition: opacity .3s ease; }
        .svc-chip  { opacity: 0; transition: opacity .3s ease; }
        .svc-learn { transition: color .2s, gap .2s; }

        .svc-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 72px;
          line-height: 1;
          color: #0d2257;
          opacity: 0.07;
          letter-spacing: 2px;
          pointer-events: none;
          user-select: none;
        }

        @media (max-width: 860px) {
          .svc-grid {
            display: flex !important;
            flex-direction: row;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 16px !important;
            padding-bottom: 20px;
          }
          .svc-grid::-webkit-scrollbar { display: none; }
          .svc-card {
            min-width: 300px !important;
            max-width: 300px !important;
            flex-shrink: 0;
            scroll-snap-align: start;
          }
          .swipe-hint { display: flex !important; }
          .scroll-dots { display: flex !important; }
        }
      `}</style>

      <section id="services" className="font-body bg-white py-24">
        <div className="max-w-7xl mx-auto px-7">
          {/* Header */}
          <p className="flex items-center justify-center gap-2.5 text-blue-700 text-[11px] font-bold uppercase tracking-[.22em] mb-3.5">
            What We Do
          </p>
          <h2 className="font-heading text-[clamp(32px,4.5vw,48px)] font-extrabold text-[#0d2257] leading-tight tracking-tight text-center mb-3">
            Our <span className="text-blue-600">Cleaning</span> Services
          </h2>
          <p className="text-slate-500 text-[15px] text-center max-w-[500px] mx-auto leading-relaxed mb-12">
            From gutters to rooftops — every service designed to protect your
            property and keep it looking its best.
          </p>

          {/* Swipe hint */}
          <div
            className="swipe-hint hidden items-center justify-center gap-1.5 text-slate-400 text-[12.5px] font-semibold mb-4 tracking-wide"
            aria-hidden="true"
          >
            <svg
              className="w-4 h-4 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Swipe to explore services
          </div>

          {/* Grid */}
          <div
            ref={scrollRef}
            className="svc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]"
          >
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                className="svc-card relative bg-white rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Faded number */}
                <span
                  className="svc-num absolute top-3 right-4 z-10"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Image */}
                <div className="relative h-[200px] overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="svc-img w-full h-full object-cover"
                  />
                  <div className="svc-over absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d2257]/50" />
                  <span className="svc-chip absolute bottom-3 left-3.5 z-10 text-[10px] font-bold uppercase tracking-[.16em] bg-[#0d2257]/75 backdrop-blur text-white px-2.5 py-1 rounded-full">
                    {svc.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-[28px]">
                  <h3 className="font-heading text-[18px] font-extrabold text-[#0d2257] mb-5 leading-snug tracking-[-0.3px]">
                    {svc.title}
                  </h3>
                  <ul className="flex flex-col gap-3 flex-1 mb-6">
                    {svc.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[13px] text-slate-500 leading-snug"
                      >
                        <CheckIcon />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.href}
                    className="svc-learn inline-flex items-center gap-1.5 text-[13px] font-bold text-slate-400 pt-4 border-t border-slate-100"
                  >
                    Learn More <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll dots */}
          <div className="scroll-dots hidden justify-center gap-1.5 mt-4">
            {SERVICES.map((_, i) => (
              <span
                key={i}
                className="block h-[6px] rounded-full transition-all duration-200"
                style={{
                  width: activeIdx === i ? "18px" : "6px",
                  background: activeIdx === i ? "#3b82f6" : "#e2e8f0",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

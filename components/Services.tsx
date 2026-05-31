"use client";

import { useRef, useEffect, useState, useCallback, memo } from "react";
import Link from "next/link";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const ALL_SERVICES = [
  {
    title: "Gutter Cleaning",
    tag: "Most Popular",
    image: "/gutter-cleaning.webp",
    href: "/gutter-cleaning",
    linkText:
      "Book professional gutter cleaning - debris removal, downpipe flushing, and minor repairs",
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
    linkText:
      "Schedule safe roof cleaning - soft-wash moss, lichen, and algae removal for all roof types",
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
    href: "/pressure-washing",
    linkText:
      "Get pressure washing for driveways, patios, decking, and commercial surfaces",
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
    href: "/window-cleaning",
    linkText:
      "Arrange streak-free window cleaning with pure water fed-pole system for all heights",
    bullets: [
      "Pure water fed-pole system — streak-free",
      "Frames, sills & tracks cleaned too",
      "High-rise & hard-to-reach windows",
      "Conservatory roofs & skylights",
      "Regular maintenance contracts available",
    ],
  },
  {
    title: "Driveway Cleaning",
    tag: "Restore & Protect",
    image: "/driveway.webp",
    href: "/driveway-cleaning",
    linkText:
      "Restore your driveway with professional cleaning, stain removal, and protective sealing",
    bullets: [
      "Block paving, tarmac, concrete & resin",
      "Oil & grease stain removal",
      "Weed & moss treatment",
      "Sealing & protective coating available",
      "Restores colour & surface texture",
    ],
  },
  {
    title: "Patio Cleaning",
    tag: "Outdoor Spaces",
    image: "/patio.webp",
    href: "/patio-cleaning",
    linkText:
      "Clean your patio with weed removal, biocide treatment, and long-lasting sealing protection",
    bullets: [
      "Natural stone, porcelain & block paving",
      "Weed removal from joints & borders",
      "Biocidal treatment to prevent regrowth",
      "Sealing option for long-lasting protection",
      "Safe for children & pets after drying",
    ],
  },
  {
    title: "Render Cleaning",
    tag: "Exterior Care",
    image: "/render.webp",
    href: "/render-cleaning",
    linkText:
      "Book gentle render cleaning using soft-wash for algae, moss, and pollution removal",
    bullets: [
      "Soft-wash — no high-pressure damage",
      "Algae, moss & pollution stain removal",
      "All render types: acrylic, silicone & monocouche",
      "Biocidal treatment included",
      "Protective coating to slow regrowth",
    ],
  },
  {
    title: "Brick Cleaning",
    tag: "Masonry Specialist",
    image: "/brick.webp",
    href: "/brick-cleaning",
    linkText:
      "Schedule specialist brick cleaning with efflorescence removal and protective sealing",
    bullets: [
      "Soft-wash & chemical cleaning options",
      "Efflorescence & stain removal",
      "Historic & listed building experience",
      "Mortar-safe techniques throughout",
      "Protective sealing after cleaning",
    ],
  },
  {
    title: "Cladding Cleaning",
    tag: "All Cladding Types",
    image: "/cladding.webp",
    href: "/cladding-cleaning",
    linkText:
      "Get cladding cleaning for uPVC, composite, metal, and rendered surfaces with protective coating",
    bullets: [
      "uPVC, composite, metal & rendered cladding",
      "Low-pressure soft-wash system",
      "Algae, pollution & UV stain removal",
      "Protective coating applied after clean",
      "Commercial & residential properties",
    ],
  },
  {
    title: "Downpipe Cleaning",
    tag: "Drainage Solutions",
    image: "/downpipe.webp",
    href: "/downpipe-cleaning",
    linkText:
      "Book downpipe cleaning with high-pressure jetting, CCTV inspection, and emergency call-outs",
    bullets: [
      "High-pressure jetting for full clearance",
      "Leaf, moss & sediment removal",
      "CCTV inspection available",
      "Emergency call-outs accepted",
      "Repair & maintenance service",
    ],
  },
  {
    title: "Graffiti Removal",
    tag: "Rapid Response",
    image: "/graffiti.webp",
    href: "/graffiti-cleaning",
    linkText:
      "Remove graffiti now with 24/7 emergency response and anti-graffiti protection coating",
    bullets: [
      "Spray paint, markers & stickers removed",
      "Safe for brick, render, metal & glass",
      "Anti-graffiti coating applied after",
      "Emergency 24-hour response available",
      "Commercial & residential properties",
    ],
  },
  {
    title: "Residential Gutter Cleaning",
    tag: "Home Specialist",
    image: "/residential.webp",
    href: "/residential-gutter",
    linkText:
      "Book home gutter cleaning with debris removal, repairs, and optional gutter guard installation",
    bullets: [
      "Full debris removal — leaves, moss & silt",
      "Downpipe flushing & blockage clearing",
      "Gutter repairs & resealing on the spot",
      "Gutter guard installation available",
      "Before & after photos with every visit",
    ],
  },
  {
    title: "Commercial Gutter Cleaning",
    tag: "Commercial",
    image: "/commercial.webp",
    href: "/commercial-gutter",
    linkText:
      "Get a commercial quote for gutter maintenance with detailed reporting and full insurance coverage",
    bullets: [
      "Offices, retail, industrial & apartments",
      "Full public liability insurance",
      "Minimal business disruption",
      "Detailed condition reports provided",
      "Maintenance contracts available",
    ],
  },
];


// which breakpoint media query currently matches.
function getActivePerView(slider: KeenSlider): number {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(min-width: 1536px)").matches) return 5;
  if (window.matchMedia("(min-width: 1280px)").matches) return 4;
  if (window.matchMedia("(min-width: 1024px)").matches) return 3;
  if (window.matchMedia("(min-width: 768px)").matches) return 2;
  return 1;
}

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
      aria-hidden="true"
    >
      <polyline points="2,7 5.5,10.5 12,3" />
    </svg>
  </span>
);

const ServiceCard = memo(
  ({
    service,
    index,
  }: {
    service: (typeof ALL_SERVICES)[0];
    index: number;
  }) => {
    const { title, tag, image, href, bullets, linkText } = service;

    const getCTA = (title: string) => {
      if (
        title.includes("Gutter Cleaning") &&
        !title.includes("Commercial") &&
        !title.includes("Residential")
      )
        return "Book Gutter Cleaning";
      if (title.includes("Roof Cleaning")) return "Roof Cleaning";
      if (title.includes("Pressure Washing")) return "Get Pressure Washing";
      if (title.includes("Window Cleaning")) return "Arrange Window Cleaning";
      if (title.includes("Driveway Cleaning")) return "Restore Your Driveway";
      if (title.includes("Patio Cleaning")) return "Clean Your Patio";
      if (title.includes("Render Cleaning")) return "Book Render Cleaning";
      if (title.includes("Brick Cleaning")) return "Schedule Brick Cleaning";
      if (title.includes("Cladding Cleaning")) return "Get Cladding Cleaning";
      if (title.includes("Downpipe Cleaning")) return "Book Downpipe Service";
      if (title.includes("Graffiti Removal")) return "Remove Graffiti Now";
      if (title.includes("Residential")) return "Book Home Gutter Clean";
      if (title.includes("Commercial")) return "Get Commercial Quote";
      return "Learn More";
    };

    return (
      <div className="keen-slider__slide flex justify-center px-0">
        {/*
          Card uses CSS Grid with explicit rows so every card is identical:
            Row 1 — image (fixed 200px)
            Row 2 — title (fixed single line)
            Row 3 — 5 bullet rows, each capped at one line via line-clamp-1
            Row 4 — CTA button (fixed height)
          No row can grow based on content, so all cards stay in lock-step.
        */}
        <div className="svc-card relative bg-white rounded-2xl overflow-hidden w-full svc-grid">
          <span
            className="svc-num absolute top-3 right-4 z-10"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Row 1 — image */}
          <div className="relative overflow-hidden" style={{ height: 200 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={`${title} service - professional exterior cleaning`}
              className="svc-img w-full h-full object-cover"
              loading={index < 3 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="svc-over absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d2257]/50" />
            <span className="svc-chip absolute bottom-3 left-3.5 z-10 text-[10px] font-bold uppercase tracking-[.16em] bg-[#0d2257]/75 backdrop-blur text-white px-2.5 py-1 rounded-full">
              {tag}
            </span>
          </div>

          {/* Row 2 — title */}
          <div className="px-6 lg:px-7 pt-6 lg:pt-7">
            <h3
              className="font-heading text-[16px] lg:text-[18px] font-extrabold text-[#0d2257] leading-snug tracking-[-0.3px] line-clamp-1"
              title={title}
            >
              {title}
            </h3>
          </div>

          {/* Row 3 — bullets: always exactly 5 items, each one line */}
          <ul
            className="px-6 lg:px-7 grid gap-y-2.5 lg:gap-y-3"
            aria-label={`${title} features`}
          >
            {bullets.slice(0, 5).map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 lg:gap-2.5 text-[12px] lg:text-[13px] text-slate-500 leading-snug"
              >
                <CheckIcon />
                {/* line-clamp-1 locks every bullet to exactly one line */}
                <span className="line-clamp-1 min-w-0">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Row 4 — CTA */}
          <div className="px-6 lg:px-7 pb-6 lg:pb-7 pt-8">
            <Link
              href={href}
              className="svc-cta inline-flex items-center justify-center gap-2 w-full px-4 lg:px-5 py-3 lg:py-3.5 text-[13px] lg:text-[14px] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 group"
              aria-label={linkText}
            >
              {getCTA(title)}
              
            </Link>
          </div>
        </div>
      </div>
    );
  },
);

ServiceCard.displayName = "ServiceCard";

export default function ServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const keenSliderRef = useRef<KeenSlider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const totalSlides = ALL_SERVICES.length;

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = new KeenSlider(sliderRef.current, {
      loop: false,
      mode: "snap",
      // Base config — breakpoints override below (mobile-first order)
      slides: {
        perView: 1,
        spacing: 0,
      },
      breakpoints: {
        // Keen Slider evaluates ALL matching breakpoints and merges them in
        // order of specificity. List from narrowest to widest so wider rules
        // win when multiple match.
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 24 },
        },
        "(min-width: 1280px)": {
          slides: { perView: 4, spacing: 24 },
        },
        "(min-width: 1536px)": {
          slides: { perView: 5, spacing: 24 },
        },
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created(s) {
        setSlidesPerView(getActivePerView(s));
      },
      updated(s) {
        // On resize, perView may change. Reset slide index too so nav stays
        // in a consistent state.
        const spv = getActivePerView(s);
        setSlidesPerView(spv);
        setCurrentSlide(s.track.details.rel);
      },
    });

    keenSliderRef.current = slider;

    return () => {
      slider.destroy();
    };
  }, []);

  const prev = useCallback(() => {
    keenSliderRef.current?.prev();
  }, []);

  const next = useCallback(() => {
    keenSliderRef.current?.next();
  }, []);

  const scrollTo = useCallback(
    (idx: number) => {
      // Clamp so the last dot never tries to scroll past the final slide
      const clamped = Math.min(idx, totalSlides - slidesPerView);
      keenSliderRef.current?.moveToIdx(clamped);
    },
    [totalSlides, slidesPerView],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [prev, next],
  );

  const needsNavigation = totalSlides > slidesPerView;
  const canPrev = currentSlide > 0;
  // Last reachable slide index is totalSlides - slidesPerView
  const canNext = currentSlide < totalSlides - slidesPerView;

  const start = currentSlide + 1;
  const end = Math.min(currentSlide + slidesPerView, totalSlides);

  const dotCount = Math.ceil(totalSlides / slidesPerView);
  const activeDot = Math.round(currentSlide / slidesPerView);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;600;700;800&display=swap');
        
        .font-display  { font-family: 'Bebas Neue', sans-serif; }
        .font-body     { font-family: 'Inter', sans-serif; }
        .font-heading  { font-family: 'Manrope', sans-serif; }

        /* Remove Keen Slider's default overflow:hidden so cards can show
           box-shadow and hover lift without being clipped */
        .services-slider.keen-slider {
          display: flex;
          overflow: visible;
          position: relative;
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
          /* Clip only horizontally — allow vertical overflow for shadows */
          clip-path: inset(0 -4px);
        }

        /* Re-add the horizontal clip so cards don't bleed outside the track */
        .services-slider-wrapper {
          overflow: hidden;
          padding: 20px 4px 28px;
          margin: 0 -4px;
        }

        .keen-slider__slide {
          min-height: 100%;
          position: relative;
          /* Must NOT be overflow:hidden — Keen sets this by default; override it */
          overflow: visible !important;
        }

        .svc-card {
          border: 1px solid #e4e9f2;
          box-shadow: 0 2px 8px rgba(13,34,87,.06), 0 8px 28px rgba(13,34,87,.08);
          transition: transform .25s ease, box-shadow .25s ease;
          transform: translateZ(0);
          will-change: transform, box-shadow;
        }
        
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 4px 12px rgba(13,34,87,.08), 0 20px 48px rgba(13,34,87,.14);
        }
        
        .svc-card:hover .svc-img  { transform: scale(1.06); }
        .svc-card:hover .svc-over { opacity: 1; }
        .svc-card:hover .svc-chip { opacity: 1; }

        .svc-img { 
          transition: transform .45s ease; 
          transform: translateZ(0);
          will-change: transform;
        }
        
        .svc-over  { 
          opacity: 0; 
          transition: opacity .3s ease; 
        }
        
        .svc-chip { 
          opacity: 0; 
          transition: opacity .3s ease; 
        }

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

        /*
          Grid layout: image (200px) | title (auto) | bullets (1fr) | CTA (auto)
          The 1fr bullet row absorbs slack so the CTA always sits at the bottom.
          Every bullet is line-clamp-1 so the actual rendered height is uniform.
        */
        .svc-grid {
          display: grid;
          grid-template-rows: 200px auto 1fr auto;
        }

        .svc-grid > ul {
          align-self: start;
          padding-top: 16px;
        }

        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid #e4e9f2;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all .2s ease;
          flex-shrink: 0;
        }
        
        .nav-btn:hover:not(:disabled) {
          border-color: #2563eb;
          background: #2563eb;
          color: white;
        }
        
        .nav-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .nav-btn:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }

        .dot-btn {
          transition: width 0.2s ease, background-color 0.2s ease;
        }

        .dot-btn:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }

        /* Mobile: give cards horizontal breathing room inside the slide */
        @media (max-width: 639px) {
          .keen-slider__slide {
            padding: 0 16px;
          }
        }
      `}</style>

      <section
        id="services"
        className="font-body bg-white py-16 lg:py-24"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 lg:mb-10">
            <p className="flex items-center justify-center gap-2.5 text-blue-700 text-[11px] font-bold uppercase tracking-[.22em] mb-3.5">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="font-heading text-[clamp(32px,4.5vw,48px)] font-extrabold text-[#0d2257] leading-tight tracking-tight text-center mb-3"
            >
              Our <span className="text-blue-600">Cleaning</span> Services
            </h2>
            <p className="text-slate-500 text-[15px] text-center max-w-[500px] mx-auto leading-relaxed">
              From gutters to rooftops — every service designed to protect your
              property and keep it looking its best.
            </p>
          </div>

          <div
            className="flex items-center justify-between mb-4"
            role="navigation"
            aria-label="Service carousel navigation"
          >
            <p
              className="text-slate-400 text-[13px] font-semibold"
              aria-live="polite"
            >
              <span className="text-[#0d2257] font-bold">
                {String(start).padStart(2, "0")}–{String(end).padStart(2, "0")}
              </span>{" "}
              of{" "}
              <span className="text-[#0d2257] font-bold">
                {String(totalSlides).padStart(2, "0")}
              </span>{" "}
              Services
            </p>

            {needsNavigation && (
              <div className="flex items-center gap-2">
                <button
                  className="nav-btn"
                  onClick={prev}
                  disabled={!canPrev}
                  aria-label="View previous services"
                  title="Previous services"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="nav-btn"
                  onClick={next}
                  disabled={!canNext}
                  aria-label="View next services"
                  title="Next services"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Wrapper clips horizontal overflow while allowing vertical card shadow */}
          <div className="services-slider-wrapper">
            <div
              ref={sliderRef}
              className="services-slider keen-slider"
              onKeyDown={needsNavigation ? handleKeyDown : undefined}
              role="list"
              aria-label="Available cleaning services carousel"
              tabIndex={needsNavigation ? 0 : -1}
            >
              {ALL_SERVICES.map((service, i) => (
                <div key={service.title} role="listitem">
                  <ServiceCard service={service} index={i} />
                </div>
              ))}
            </div>
          </div>

          {needsNavigation && (
            <div
              className="flex justify-center gap-1.5 mt-2"
              role="tablist"
              aria-label="Service carousel position indicators"
            >
              {Array.from({ length: dotCount }, (_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i * slidesPerView)}
                  role="tab"
                  aria-selected={activeDot === i}
                  aria-label={`View services group ${i + 1} of ${dotCount}`}
                  className="dot-btn block rounded-full focus:outline-none"
                  style={{
                    width: activeDot === i ? "18px" : "6px",
                    height: "6px",
                    background: activeDot === i ? "#3b82f6" : "#e2e8f0",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

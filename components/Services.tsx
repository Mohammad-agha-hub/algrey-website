"use client";

import Link from "next/link";
import { useRef, useEffect, useState, useCallback, memo } from "react";

const ALL_SERVICES = [
  {
    title: "Gutter Cleaning",
    tag: "Most Popular",
    image: "/gutter-cleaning.webp",
    href: "/gutter-cleaning",
    linkText: "Learn about our professional gutter cleaning service",
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
    linkText: "Discover our safe roof cleaning solutions",
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
    linkText: "Explore our pressure washing services for all surfaces",
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
    linkText: "See our streak-free window cleaning packages",
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
    linkText: "Learn how we restore and protect your driveway",
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
    linkText: "Find out about our patio cleaning and sealing service",
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
    linkText: "Read about our gentle render cleaning approach",
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
    linkText: "Discover our specialist brick and masonry cleaning",
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
    linkText: "Explore our cladding cleaning for all material types",
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
    linkText: "Learn about our downpipe cleaning and inspection service",
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
    linkText: "See our rapid graffiti removal and protection service",
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
    linkText: "Find out about our residential gutter cleaning packages",
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
    linkText: "Learn about our commercial gutter maintenance contracts",
    bullets: [
      "Offices, retail, industrial & apartments",
      "Full public liability insurance",
      "Minimal business disruption",
      "Detailed condition reports provided",
      "Maintenance contracts available",
    ],
  },
];

// Fixed card dimensions
const CARD_WIDTH = 340;
const CARD_GAP = 22;
const CARD_STRIDE = CARD_WIDTH + CARD_GAP;
const IMAGE_HEIGHT = 200;
const CARD_PADDING = 28;
const BULLET_HEIGHT = 32; // Approximate height per bullet line
const BULLET_GAP = 10; // Gap between bullets
const TITLE_HEIGHT = 28; // Approximate title height
const TITLE_MARGIN = 20; // mb-5
const LINK_HEIGHT = 45; // Link + border top height
const LIST_MARGIN = 24; // mb-6

// Calculate exact card height to ensure consistency
const CONTENT_HEIGHT = 
  IMAGE_HEIGHT + 
  (CARD_PADDING * 2) + 
  TITLE_HEIGHT + 
  TITLE_MARGIN + 
  (BULLET_HEIGHT * 5) + // 5 bullets max
  (BULLET_GAP * 4) + // 4 gaps between 5 bullets
  LIST_MARGIN + 
  LINK_HEIGHT;

// Static components outside main component to prevent recreation
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

const ArrowIcon = () => (
  <svg
    className="w-[13px] h-[13px] flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

// Memoized ServiceCard to prevent unnecessary re-renders
const ServiceCard = memo(({ 
  service, 
  index, 
  onCardClick 
}: { 
  service: typeof ALL_SERVICES[0];
  index: number;
  onCardClick: (e: React.MouseEvent) => void;
}) => {
  const { title, tag, image, href, bullets, linkText } = service;
  
  return (
    <div 
      className="svc-card relative bg-white rounded-2xl overflow-hidden flex flex-col"
      style={{
        width: `${CARD_WIDTH}px`,
        height: `${CONTENT_HEIGHT}px`,
      }}
    >

      {/* Image container - fixed height */}
      <div 
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: `${IMAGE_HEIGHT}px` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${title} service - professional exterior cleaning`}
          className="svc-img w-full h-full object-cover"
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          width={CARD_WIDTH}
          height={IMAGE_HEIGHT}
        />
        <div className="svc-over absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d2257]/50" />
        <span className="svc-chip absolute bottom-3 left-3.5 z-10 text-[10px] font-bold uppercase tracking-[.16em] bg-[#0d2257]/75 backdrop-blur text-white px-2.5 py-1 rounded-full">
          {tag}
        </span>
      </div>

      {/* Content - flex column with fixed heights */}
      <div 
        className="flex flex-col flex-1"
        style={{ padding: `${CARD_PADDING}px` }}
      >
        {/* Title - fixed height with overflow handling */}
        <h3 
          className="font-heading text-[18px] font-extrabold text-[#0d2257] leading-snug tracking-[-0.3px]"
          style={{ 
            height: `${TITLE_HEIGHT}px`,
            marginBottom: `${TITLE_MARGIN}px`,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
          }}
          title={title}
        >
          {title}
        </h3>
        
        {/* Bullet list - fixed height with grid for perfect alignment */}
        <ul 
          className="flex flex-col flex-1"
          style={{ 
            gap: `${BULLET_GAP}px`,
            marginBottom: `${LIST_MARGIN}px`,
            height: `${(BULLET_HEIGHT * 5) + (BULLET_GAP * 4)}px`,
          }}
        >
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-[13px] text-slate-500 leading-snug"
              style={{ height: `${BULLET_HEIGHT}px` }}
            >
              <CheckIcon />
              <span className="overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* Learn More link - fixed position at bottom */}
        <div 
          className="flex-shrink-0"
          style={{ 
            height: `${LINK_HEIGHT}px`,
            paddingTop: '16px',
            borderTop: '1px solid #f1f5f9',
          }}
        >
          <Link
            href={href}
            onClick={onCardClick}
            className="svc-learn inline-flex items-center gap-1.5 text-[13px] font-bold text-slate-400 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 rounded-sm transition-colors duration-200"
            aria-label={linkText}
          >
            Learn More <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScroll, setCanScroll] = useState({ prev: false, next: true });
  const [visibleCards, setVisibleCards] = useState(3);

  // Refs for drag functionality and index tracking
  const activeIdxRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const hasDragged = useRef(false);
  const rafId = useRef<number>(0);

  // Calculate visible cards based on container width
  const updateVisibleCards = useCallback(() => {
    if (!scrollRef.current) return;
    
    const containerWidth = scrollRef.current.clientWidth;
    const usableWidth = containerWidth - 56; // Account for padding
    const cardsThatFit = Math.floor((usableWidth + CARD_GAP) / (CARD_WIDTH + CARD_GAP));
    
    setVisibleCards(Math.min(Math.max(1, cardsThatFit), ALL_SERVICES.length));
  }, []);

  // Throttled scroll handler using requestAnimationFrame
  const updateState = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    
    rafId.current = requestAnimationFrame(() => {
      const el = scrollRef.current;
      if (!el) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const maxIdx = ALL_SERVICES.length - visibleCards;
      
      const idx = Math.min(
        Math.round(el.scrollLeft / CARD_STRIDE),
        maxIdx
      );

      if (activeIdxRef.current !== idx) {
        activeIdxRef.current = idx;
        setActiveIdx(idx);
      }

      const newCanPrev = el.scrollLeft > 8;
      const newCanNext = el.scrollLeft < maxScrollLeft - 8;

      setCanScroll(prev => {
        if (prev.prev !== newCanPrev || prev.next !== newCanNext) {
          return { prev: newCanPrev, next: newCanNext };
        }
        return prev;
      });
    });
  }, [visibleCards]);

  // Set up scroll listener and resize observer
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateVisibleCards();
    updateState();

    const resizeObserver = new ResizeObserver(() => {
      updateVisibleCards();
    });

    resizeObserver.observe(el);
    el.addEventListener("scroll", updateState, { passive: true });
    
    return () => {
      resizeObserver.disconnect();
      el.removeEventListener("scroll", updateState);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [updateState, updateVisibleCards]);

  // Handle card click - prevent navigation during drag
  const handleCardClick = useCallback((e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault();
    }
  }, []);

  // Scroll to specific card index
  const scrollTo = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const maxIdx = ALL_SERVICES.length - visibleCards;
    const safeIdx = Math.max(0, Math.min(idx, maxIdx));
    
    el.scrollTo({
      left: safeIdx * CARD_STRIDE,
      behavior: "smooth",
    });
    
    activeIdxRef.current = safeIdx;
    setActiveIdx(safeIdx);
  }, [visibleCards]);

  // Navigation handlers
  const prev = useCallback(() => {
    scrollTo(Math.max(0, activeIdxRef.current - 1));
  }, [scrollTo]);

  const next = useCallback(() => {
    const maxIdx = ALL_SERVICES.length - visibleCards;
    scrollTo(Math.min(maxIdx, activeIdxRef.current + 1));
  }, [scrollTo, visibleCards]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  }, [prev, next]);

  // ── Drag-to-scroll handlers ────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    hasDragged.current = false;
    dragStartX.current = e.pageX;
    dragStartScroll.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.scrollSnapType = "none";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = dragStartX.current - e.pageX;
    if (Math.abs(delta) > 4) hasDragged.current = true;
    el.scrollLeft = dragStartScroll.current + delta;
  }, []);

  const onMouseUp = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !isDragging.current) return;
    isDragging.current = false;
    el.style.cursor = "";
    el.style.scrollSnapType = "";
    
    const maxIdx = ALL_SERVICES.length - visibleCards;
    const idx = Math.min(
      Math.round(el.scrollLeft / CARD_STRIDE),
      maxIdx
    );
    
    scrollTo(idx);
  }, [scrollTo, visibleCards]);

  const onMouseLeave = useCallback(() => {
    if (isDragging.current) onMouseUp();
  }, [onMouseUp]);

  // Calculate if we need scrolling at all
  const needsScrolling = ALL_SERVICES.length > visibleCards;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;600;700;800&display=swap');
        
        .font-display  { font-family: 'Bebas Neue', sans-serif; }
        .font-body     { font-family: 'Inter', sans-serif; }
        .font-heading  { font-family: 'Manrope', sans-serif; }

        .svc-track {
          display: flex;
          flex-direction: row;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: ${CARD_GAP}px;
          cursor: ${needsScrolling ? 'grab' : 'default'};
          user-select: none;
          /* Dynamic padding for perfect centering */
          padding-left: max(28px, calc((100% - ${visibleCards} * ${CARD_WIDTH}px - ${(visibleCards - 1)} * ${CARD_GAP}px) / 2));
          padding-right: max(28px, calc((100% - ${visibleCards} * ${CARD_WIDTH}px - ${(visibleCards - 1)} * ${CARD_GAP}px) / 2));
          padding-bottom: 24px;
          /* Hardware acceleration */
          transform: translateZ(0);
          will-change: scroll-position;
          /* Ensure all cards are same height */
          align-items: stretch;
        }
        
        .svc-track:active { cursor: ${needsScrolling ? 'grabbing' : 'default'}; }
        .svc-track::-webkit-scrollbar { display: none; }

        .svc-card {
          scroll-snap-align: start;
          border: 1px solid #e4e9f2;
          box-shadow: 0 2px 8px rgba(13,34,87,.06), 0 8px 28px rgba(13,34,87,.08);
          transition: transform .25s ease, box-shadow .25s ease;
          flex-shrink: 0;
          /* Hardware acceleration */
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

        .svc-learn {
          transition: color 0.2s, gap 0.2s;
        }
        
        .svc-learn:hover {
          color: #2563eb;
          gap: 10px;
        }

        @media (max-width: 1200px) {
          .svc-card {
            width: 320px !important;
            height: ${CONTENT_HEIGHT}px !important;
          }
        }

        @media (max-width: 768px) {
          .svc-card {
            width: 300px !important;
            height: ${CONTENT_HEIGHT}px !important;
          }
        }

        @media (max-width: 480px) {
          .svc-card {
            width: 280px !important;
            height: ${CONTENT_HEIGHT}px !important;
          }
        }
      `}</style>

      <section 
        id="services" 
        className="font-body bg-white py-24"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="px-7">
            <p className="flex items-center justify-center gap-2.5 text-blue-700 text-[11px] font-bold uppercase tracking-[.22em] mb-3.5">
              What We Do
            </p>
            <h2 
              id="services-heading"
              className="font-heading text-[clamp(32px,4.5vw,48px)] font-extrabold text-[#0d2257] leading-tight tracking-tight text-center mb-3"
            >
              Our <span className="text-blue-600">Cleaning</span> Services
            </h2>
            <p className="text-slate-500 text-[15px] text-center max-w-[500px] mx-auto leading-relaxed mb-10">
              From gutters to rooftops — every service designed to protect your
              property and keep it looking its best.
            </p>

            {/* Navigation bar */}
            <div 
              className="flex items-center justify-end mb-6 px-0"
              role="navigation"
              aria-label="Service carousel navigation"
            >
              
              
              {needsScrolling && (
                <div className="flex items-center gap-2">
                  <button
                    className="nav-btn"
                    onClick={prev}
                    disabled={!canScroll.prev}
                    aria-label="View previous service"
                    title="Previous service"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="nav-btn"
                    onClick={next}
                    disabled={!canScroll.next}
                    aria-label="View next service"
                    title="Next service"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Carousel track */}
          <div
            ref={scrollRef}
            className="svc-track"
            onMouseDown={needsScrolling ? onMouseDown : undefined}
            onMouseMove={needsScrolling ? onMouseMove : undefined}
            onMouseUp={needsScrolling ? onMouseUp : undefined}
            onMouseLeave={needsScrolling ? onMouseLeave : undefined}
            onKeyDown={needsScrolling ? handleKeyDown : undefined}
            role="list"
            aria-label="Available cleaning services"
            tabIndex={needsScrolling ? 0 : -1}
          >
            {ALL_SERVICES.map((service, i) => (
              <div key={service.title} role="listitem">
                <ServiceCard 
                  service={service} 
                  index={i} 
                  onCardClick={handleCardClick}
                />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          {needsScrolling && (
            <div 
              className="flex justify-center gap-1.5 mt-2 px-7"
              role="tablist"
              aria-label="Service indicators"
            >
              {Array.from({ length: ALL_SERVICES.length - visibleCards + 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  role="tab"
                  aria-selected={activeIdx === i}
                  aria-label={`Go to service group ${i + 1} of ${ALL_SERVICES.length - visibleCards + 1}`}
                  className="dot-btn block rounded-full focus:outline-none"
                  style={{
                    width: activeIdx === i ? "18px" : "6px",
                    height: "6px",
                    background: activeIdx === i ? "#3b82f6" : "#e2e8f0",
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
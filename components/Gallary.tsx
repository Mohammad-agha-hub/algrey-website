"use client";

import Image from "next/image";

const ITEMS = [
  { id: 1, src: "/proof.jpg", alt: "Gutter cleaning work" },
  { id: 2, src: "/2.webp", alt: "Gutter cleaning work" },
  { id: 3, src: "/3.jpg", alt: "Gutter cleaning work" },
  { id: 4, src: "/4.webp", alt: "Gutter cleaning work" },
  { id: 5, src: "/5.webp", alt: "Gutter cleaning work" },
  { id: 6, src: "/6.jpg", alt: "Gutter cleaning work" },
];

export default function GallerySection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&family=Inter:wght@400;500&display=swap');
        .gal-heading { font-family: 'Manrope', sans-serif; }
        .gal-body    { font-family: 'Inter', sans-serif; }

        .gallery-card {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        .gallery-card img {
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .gallery-card:hover img { transform: scale(1.06); }

        /* ── Bento Grid ── */
        .bento-grid {
          display: grid;
          gap: 14px;
        }

        /* Mobile — single column, all equal height */
        @media (max-width: 639px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(6, 220px);
          }
          .bento-grid .gallery-card { grid-column: auto; grid-row: auto; }
        }

        /* Tablet — 2 columns; first image spans both cols and 2 rows */
        @media (min-width: 640px) and (max-width: 1023px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 240px 240px 220px 220px;
          }
          .bento-grid .gallery-card:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 3; }
          .bento-grid .gallery-card:nth-child(2) { grid-column: 1 / 2; grid-row: 3 / 4; }
          .bento-grid .gallery-card:nth-child(3) { grid-column: 2 / 3; grid-row: 3 / 4; }
          .bento-grid .gallery-card:nth-child(4) { grid-column: 1 / 2; grid-row: 4 / 5; }
          .bento-grid .gallery-card:nth-child(5) { grid-column: 2 / 3; grid-row: 4 / 5; }
          .bento-grid .gallery-card:nth-child(6) { grid-column: 1 / 3; grid-row: 5 / 6; height: 220px; }
        }

        /* Desktop — original 3-col bento */
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 272px 272px 256px;
          }
          .bento-grid .gallery-card:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 3; }
          .bento-grid .gallery-card:nth-child(2) { grid-column: 3 / 4; grid-row: 1 / 2; }
          .bento-grid .gallery-card:nth-child(3) { grid-column: 3 / 4; grid-row: 2 / 3; }
          .bento-grid .gallery-card:nth-child(4) { grid-column: 1 / 2; grid-row: 3 / 4; }
          .bento-grid .gallery-card:nth-child(5) { grid-column: 2 / 3; grid-row: 3 / 4; }
          .bento-grid .gallery-card:nth-child(6) { grid-column: 3 / 4; grid-row: 3 / 4; }
        }
      `}</style>

      <section className="gal-body bg-[#f8f9ff] py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
              Our Work
            </p>
            <h2 className="gal-heading text-[clamp(32px,4.5vw,50px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-5">
              Real Results, Real Properties
              <br />
              Across <span className="text-blue-600">Birmingham</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
              Every job comes with before & after photos — see exactly what we
              did.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="bento-grid">
            {ITEMS.map((item) => (
              <div key={item.id} className="gallery-card">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

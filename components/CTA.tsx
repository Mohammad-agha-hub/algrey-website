"use client";

const WatermarkSwirl = () => (
  <svg
    viewBox="0 0 520 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    <path
      d="M 260 60 C 260 60 130 220 130 310 C 130 385 188 440 260 440 C 332 440 390 385 390 310 C 390 220 260 60 260 60 Z"
      fill="white"
      fillOpacity="0.07"
    />
    <path
      d="M 260 110 C 260 110 155 250 155 325 C 155 387 202 428 260 428 C 318 428 365 387 365 325 C 365 250 260 110 260 110 Z"
      fill="white"
      fillOpacity="0.06"
    />
    <path
      d="M 260 165 C 260 165 185 282 185 338 C 185 388 218 418 260 418 C 302 418 335 388 335 338 C 335 282 260 165 260 165 Z"
      fill="white"
      fillOpacity="0.05"
    />
    <ellipse
      cx="232"
      cy="268"
      rx="18"
      ry="28"
      fill="white"
      fillOpacity="0.09"
      transform="rotate(-20 232 268)"
    />
  </svg>
);

export interface CTAData {
  badge: string;
  headingLines: [string, string, string];
  body: string;
}

const DEFAULT_CTA_DATA: CTAData = {
  badge: "Get In Touch",
  headingLines: [
    "Book Trusted Gutter &",
    "Exterior Cleaning Services",
    "Today",
  ],
  body: "Get a free quote for gutter cleaning, roof cleaning, pressure washing and exterior property maintenance across Birmingham and the West Midlands.",
};

interface CTASectionProps {
  data?: CTAData;
}

export default function CTASection({
  data = DEFAULT_CTA_DATA,
}: CTASectionProps) {
  const { badge, headingLines, body } = data;
  const heading = headingLines.join(" ");

  return (
    <>
      <style>{`
        /* ── Base Typography ── */
        .cta-body { 
          font-family: var(--font-inter), sans-serif; 
        }
        .cta-heading { 
          font-family: var(--font-inter-tight), sans-serif; 
        }

        /* ── Badge ── */
        .cta-badge {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
        }

        /* ── Heading ── */
        .cta-heading-text {
          font-size: var(--step-3);
          font-weight: var(--fw-medium);
          line-height: var(--leading-tight);
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        @media (min-width: 768px) {
          .cta-heading-text {
            font-size: var(--step-5);
          }
        }

        /* ── Body ── */
        .cta-body-text {
          font-size: var(--step-0);
          font-weight: var(--fw-normal);
          line-height: var(--leading-standard);
          color: rgba(255, 255, 255, 0.7);
          max-width: 420px;
        }

        /* ── CTA Button (light variant) ── */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-s);
          padding: var(--space-3xs) var(--space-3xs);
          padding-left: var(--space-m);
          border-radius: var(--radius-full);
          background: #ffffff;
          color: #3a52d4;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step--1);
          font-weight: var(--fw-bold);
          letter-spacing: 0.12em;
          line-height: 1;
          text-transform: uppercase;
          text-decoration: none;
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          transition: border-color 0.2s, background 0.2s, padding 0.2s ease;
          white-space: nowrap;
          width: fit-content;
          flex-shrink: 0;
        }
        .cta-btn:hover {
          border-color: rgba(255, 255, 255, 0.85);
          background: #f8fafc;
          padding-right: var(--space-xs);
        }
        .cta-btn:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 3px;
        }
        .cta-btn-circle {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-full);
          background: #3a52d4;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.22s;
        }
        .cta-btn:hover .cta-btn-circle {
          background: #2742c5;
        }

        /* ── Responsive ── */
        @media (max-width: 639px) {
          .cta-btn {
            font-size: 0.65rem;
            padding-left: var(--space-s);
            letter-spacing: 0.08em;
          }
          .cta-btn-circle {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>

      <div className="cta-body relative bg-[#F8F9FC] pt-16">
        <div
          style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
          className="absolute w-[98%] left-[1%] inset-x-0 bottom-0 h-1/2 bg-[#081a3d]"
        />

        <div className="relative z-10 w-[85%] mx-auto">
          <div
            className="relative rounded-[20px] overflow-hidden px-10 sm:px-16 py-16"
            style={{ background: "#3a52d4" }}
          >
            {/* Watermark — left only */}
            <div
              className="absolute inset-y-0 left-0 w-[45%] pointer-events-none"
              aria-hidden="true"
            >
              <WatermarkSwirl />
            </div>

            {/* Content — right side */}
            <div className="relative z-10 flex justify-end">
              <div className="flex flex-col gap-5 w-full lg:w-[55%]">
                <p className="cta-badge">• {badge}</p>

                <h2 className="cta-heading cta-heading-text">{heading}</h2>

                <p className="cta-body cta-body-text">{body}</p>

                <div className="mt-2">
                  <a href="/enquiry-now" className="cta-btn">
                    Get Free Quote
                    <span className="cta-btn-circle">
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
                          d="M4.5 12h15m0 0l-6-6m6 6l-6 6"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

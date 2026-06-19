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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800;900&display=swap');
        .cta-body    { font-family: 'Inter', sans-serif; }
        .cta-heading { font-family: 'Manrope', sans-serif; }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: #ffffff;
  color: #3a52d4;
  font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 6px 6px 22px;
          border-radius: 999px;
          border: 1.5px solid rgba(255,255,255,0.45);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
          white-space: nowrap;
          width: fit-content;
        }
        .cta-btn:hover {
          border-color: rgba(255,255,255,0.85);
          background: #f8fafc;
        }
        .cta-btn-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
           background: #3a52d4;
  color: #ffffff;
  display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
          .cta-btn:hover .cta-btn-circle {
  background: #2742c5;
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

            {/* All content — right side */}
            <div className="relative z-10 flex justify-end">
              <div className="flex flex-col gap-5 w-full lg:w-[55%]">
                <p
                  className="cta-body"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  • {badge}
                </p>

                <h2
                  className="cta-heading text-white"
                  style={{
                    fontSize: "clamp(26px,3vw,42px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {heading}
                </h2>

                <p
                  className="cta-body"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 15,
                    lineHeight: 1.65,
                    maxWidth: 420,
                  }}
                >
                  {body}
                </p>

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

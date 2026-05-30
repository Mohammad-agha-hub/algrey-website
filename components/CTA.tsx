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
  /** Up to 3 lines — the last line always gets the underline accent */
  headingLines: [string, string, string];
  body: string;
  pills: [string, string, string];
}
const DEFAULT_CTA_DATA: CTAData = {
  badge: "Same-Day Response",
  headingLines: ["Ready to Protect", "Your Property?", "Book Today."],
  body: "Get a free, no-obligation quote in minutes. We handle the rest — professionally, on time, and fully insured.",
  pills: ["No call-out fee", "Free quote in minutes", "Fully insured"],
};
interface CTASectionProps {
  data?: CTAData;
}

export default function CTASection({ data=DEFAULT_CTA_DATA }: CTASectionProps) {
  const { badge, headingLines, body, pills } = data;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800;900&display=swap');
        .cta-body    { font-family: 'Inter', sans-serif; }
        .cta-heading { font-family: 'Manrope', sans-serif; }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(8,26,61,0.55);
          border: 1px solid rgba(255,255,255,0.15);
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 6px 13px;
          border-radius: 999px;
          backdrop-filter: blur(4px);
        }
        .cta-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #ffffff;
          animation: cfBlink 1.4s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes cfBlink {
          0%,100% { opacity:1; } 50% { opacity:0.25; }
        }

        .cta-trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 999px;
          padding: 5px 12px 5px 8px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #081a3d;
          color: #ffffff;
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 13.5px;
          padding: 15px 28px;
          border-radius: 11px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 6px 22px rgba(8,26,61,0.45);
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }
        .cta-btn-primary::after {
          content:'';
          position:absolute; inset:0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.09) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .cta-btn-primary:hover::after { transform: translateX(100%); }
        .cta-btn-primary:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(8,26,61,0.55); background:#0d2257; }
        .cta-btn-primary:active { transform:translateY(0); }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #ffffff;
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 13.5px;
          padding: 14px 26px;
          border-radius: 11px;
          border: 2px solid rgba(255,255,255,0.35);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .cta-btn-secondary:hover { border-color:rgba(255,255,255,0.75); background:rgba(255,255,255,0.07); transform:translateY(-2px); }

        .cta-phone-strip {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 10px;
          padding: 10px 16px;
        }
        .cta-phone-icon {
          width: 34px; height: 34px;
          border-radius: 8px;
          background: #081a3d;
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0;
        }
      `}</style>

      <div className="cta-body relative bg-white pt-20">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#081a3d]" />

        <div className="relative z-10 w-[90%] mx-auto">
          <div
            className="relative rounded-[28px] overflow-hidden"
            style={{ background: "#2563eb" }}
          >
            <div
              className="absolute inset-y-0 left-0 w-[44%] pointer-events-none"
              aria-hidden="true"
            >
              <WatermarkSwirl />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 sm:px-12 py-14">
              {/* Left */}
              <div className="flex flex-col gap-5 lg:pl-[10%]">
                <div>
                  <span className="cta-badge">
                    <span className="cta-badge-dot" />
                    {badge}
                  </span>
                </div>

                <h2
                  className="cta-heading text-white"
                  style={{
                    fontSize: "clamp(30px,3.8vw,50px)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {headingLines[0]}
                  <br />
                  {headingLines[1]}
                  <br />
                  <span
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {headingLines[2]}
                    <span
                      style={{
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: "#fff",
                        borderRadius: 2,
                        opacity: 0.7,
                      }}
                    />
                  </span>
                </h2>

                <p
                  className="cta-body"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    maxWidth: 360,
                  }}
                >
                  {body}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pills.map((t) => (
                    <span key={t} className="cta-trust-pill">
                      <svg
                        className="w-3.5 h-3.5 text-white flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center gap-5 lg:items-start">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#hero" className="cta-btn-primary">
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
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    Get My Free Quote
                  </a>
                  <a href="tel:08001234567" className="cta-btn-secondary">
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    Call Us Now
                  </a>
                </div>

                <div className="cta-phone-strip">
                  <div className="cta-phone-icon">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span
                      style={{
                        fontSize: 10.5,
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Mon–Sat, 7am–7pm
                    </span>
                    <span
                      className="cta-heading"
                      style={{
                        fontSize: 19,
                        fontWeight: 900,
                        color: "#ffffff",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                      }}
                    >
                      0800 123 4567
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div style={{ display: "flex" }}>
                    {[
                      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
                      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
                      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
                      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
                    ].map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt=""
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.25)",
                          objectFit: "cover",
                          marginLeft: i === 0 ? 0 : -7,
                          flexShrink: 0,
                          display: "block",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col" style={{ lineHeight: 1.3 }}>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: 11.5,
                        color: "rgba(255,255,255,0.55)",
                        fontFamily: "'Inter',sans-serif",
                      }}
                    >
                      Trusted by{" "}
                      <strong style={{ color: "#fff" }}>2,000+</strong>{" "}
                      homeowners
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

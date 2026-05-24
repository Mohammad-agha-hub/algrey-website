"use client";

import Link from "next/link";

const STEPS = [
  {
    title: "Assessment & Quote",
    desc: "A no-obligation visit, transparent pricing, and expert advice from the very first call.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-7 h-7"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 12h8M8 8h8M8 16h5" strokeLinecap="round" />
      </svg>
    ),
    bullets: [
      "Visit your property at a time that suits you",
      "Transparent, no-obligation quote provided",
      "Full assessment with no hidden costs",
      "Same-day booking available in most areas",
      "Friendly, expert advice from the first call",
    ],
  },
  {
    title: "Professional Cleaning",
    desc: "Specialist equipment, thorough clearing, and minimal disruption from start to finish.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-7 h-7"
      >
        <circle cx="12" cy="12" r="9" />
        <path
          d="M2.5 12c3-5 7-7.5 9.5-7.5S18.5 7 21.5 12"
          strokeLinecap="round"
        />
        <path
          d="M2.5 12c3 5 7 7.5 9.5 7.5S18.5 17 21.5 12"
          strokeLinecap="round"
        />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
    bullets: [
      "Specialist equipment tailored to your property",
      "Thorough gutter and downpipe clearing",
      "Debris safely removed and disposed of",
      "Downpipes flushed and blockage-free",
      "Minimal disruption to your day",
    ],
  },
  {
    title: "Inspection & Completion",
    desc: "Post-clean photos, maintenance advice, and a satisfaction guarantee on every job.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-7 h-7"
      >
        <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
          strokeLinecap="round"
        />
      </svg>
    ),
    bullets: [
      "Full post-clean inspection carried out",
      "Before & after photos shared with you",
      "After-service maintenance advice given",
      "Minor repairs flagged or fixed on the spot",
      "Satisfaction guaranteed on every job",
    ],
  },
];

const ArrowIcon = () => (
  <svg
    className="w-[15px] h-[15px]"
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

export default function ApproachSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@400;600;700;800&display=swap');

        .ap-section { font-family: 'Inter', sans-serif; }
        .ap-heading  { font-family: 'Manrope', sans-serif; }

        .ap-card {
          position: relative;
          border-radius: 20px;
          border:1px solid #1a2f6e;
          overflow: hidden;
          height: 470px;
          box-shadow: 0 4px 24px rgba(0,0,0,.25);
          transition: transform .28s ease, box-shadow .28s ease;
        }
        .ap-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,.4);
        }

        .ap-face {
          position: absolute;
          inset: 0;
          padding: 32px;
          display: flex;
          flex-direction: column;
          transition: opacity .38s ease;
        }

        .ap-face-default {
          background: #0d2257;
          justify-content: space-between;
          opacity: 1;
        }
        .ap-card:hover .ap-face-default { opacity: 0; pointer-events: none; }

        .ap-face-hover {
          background: #FFF265;
          justify-content: flex-start;
          padding-top: 52px;
          opacity: 0;
          pointer-events: none;
        }
        .ap-card:hover .ap-face-hover {
          opacity: 1;
          pointer-events: auto;
        }

        .ap-icon {
          width: 64px;
          height: 64px;
          border-radius: 14px;
          background: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffffff;
        }

        .ap-num {
          font-family: 'Manrope', sans-serif;
          font-size: 64px;
          font-weight: 800;
          color: #ffffff;
          opacity: 0.14;
          line-height: 1;
          letter-spacing: -2px;
          pointer-events: none;
          user-select: none;
        }

        .ap-title-default {
          font-family: 'Manrope', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.3px;
          margin-bottom: 10px;
        }

        .ap-desc-default {
          font-size: 13.5px;
          font-weight: 500;
          color: #94a8cc;
          line-height: 1.6;
        }

        .ap-title-hover {
          font-family: 'Manrope', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #081a3d;
          line-height: 1.2;
          letter-spacing: -0.3px;
          margin-bottom: 22px;
        }

        .ap-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 14px;
        }
        .ap-bullet:last-child { margin-bottom: 0; }

        .ap-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #081a3d;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ap-bullet-text {
          font-size: 14px;
          font-weight: 600;
          color: #081a3d;
          line-height: 1.4;
        }

        .ap-face-mobile { display: none; }

        @media (max-width: 1023px) {
          .ap-card {
            height: auto;
            background: #0d2257;
            border-radius: 16px;
            transition: background .3s ease, box-shadow .28s ease, transform .28s ease;
          }
          .ap-card:hover {
            background: #FFF265;
            transform: translateY(-4px);
          }

          .ap-face-default,
          .ap-face-hover { display: none; }

          .ap-face-mobile {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 32px 28px;
          }

          .ap-card .mob-icon { color: #ffffff; transition: color .3s ease; }
          .ap-card:hover .mob-icon { color: #081a3d; }

          .ap-card .mob-title {
            font-family: 'Manrope', sans-serif;
            font-size: 20px;
            font-weight: 800;
            color: #ffffff;
            line-height: 1.2;
            letter-spacing: -0.3px;
            margin-bottom: 10px;
            transition: color .3s ease;
          }
          .ap-card:hover .mob-title { color: #081a3d; }

          .ap-card .mob-bullet-text {
            font-size: 13.5px;
            font-weight: 600;
            color: #94a8cc;
            line-height: 1.5;
            transition: color .3s ease;
          }
          .ap-card:hover .mob-bullet-text { color: #081a3d; }

          .ap-card .mob-check {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #081a3d;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-top: 2px;
            color: #2563eb;
            transition: background .3s ease, color .3s ease;
          }
          .ap-card:hover .mob-check { background: #081a3d; color: #FFF265; }
        }

        .ap-btn {
          display: inline-flex;
          align-items: center;
          gap: 0;
          padding: 6px 6px 6px 28px;
          border-radius: 100px;
          background: #2563eb;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .13em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background .22s, gap .2s;
        }
        .ap-btn:hover { background: #1d4ed8; gap: 6px; }

        .ap-btn-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ffffff;
          color: #081a3d;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-left: 18px;
          transition: background .22s, color .22s;
        }
        .ap-btn:hover .ap-btn-circle { background: #FFF265; }
      `}</style>

      <section
        id="approach"
        className="ap-section py-24"
        style={{ background: "#081a3d" }}
      >
        <div className="max-w-7xl mx-auto px-7">
          {/* ── Header ── */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="inline-flex items-center justify-center gap-2 text-[#FFF265] font-semibold text-xs uppercase tracking-[0.22em] mb-4">
              Our Approach
            </p>
            <h2 className="ap-heading text-[clamp(32px,4.5vw,48px)] font-extrabold text-white leading-tight tracking-tight mb-5">
              Professional <span className="text-blue-600">Results</span>, Every
              Single Visit
            </h2>
            <p className="text-[#94a8cc] text-[15px] leading-relaxed">
              We offer end-to-end support by partnering with you to understand
              your goals, design tailored execution plans, and deliver lasting
              impact — every step of the way.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {STEPS.map((step, i) => (
              <div key={step.title} className="ap-card">
                {/* DESKTOP default face */}
                <div className="ap-face ap-face-default">
                  <div className="flex items-center justify-between">
                    <div className="ap-icon">{step.icon}</div>
                    <span className="ap-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="ap-title-default">{step.title}</p>
                    <p className="ap-desc-default">{step.desc}</p>
                  </div>
                </div>

                {/* DESKTOP hover face */}
                <div className="ap-face ap-face-hover">
                  <p className="ap-title-hover">{step.title}</p>
                  <div>
                    {step.bullets.map((b) => (
                      <div key={b} className="ap-bullet">
                        <span className="ap-check">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="#FFF265"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="2,7 5.5,10.5 12,3" />
                          </svg>
                        </span>
                        <span className="ap-bullet-text">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MOBILE face */}
                <div className="ap-face-mobile">
                  <div className="mob-icon">{step.icon}</div>
                  <div>
                    <p className="mob-title">{step.title}</p>
                    {step.bullets.map((b) => (
                      <div
                        key={b}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <span className="mob-check">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="2,7 5.5,10.5 12,3" />
                          </svg>
                        </span>
                        <span className="mob-bullet-text">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

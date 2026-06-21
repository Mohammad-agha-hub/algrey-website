import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <style>{`
        /* ── Google Fonts Import ── */
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');

        .nf-root {
          font-family: var(--font-inter), sans-serif;
        }

        /* ── Background ── */
        .nf-bg {
          position: relative;
          background: #f8fafc;
          overflow: hidden;
        }
        .nf-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(37, 99, 235, 0.10) 1px, transparent 1px);
          background-size: 26px 26px;
          -webkit-mask-image: radial-gradient(ellipse 65% 55% at 50% 30%, black 35%, transparent 100%);
          mask-image: radial-gradient(ellipse 65% 55% at 50% 30%, black 35%, transparent 100%);
          pointer-events: none;
        }
        .nf-bg::after {
          content: "";
          position: absolute;
          top: -200px;
          right: -180px;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.16), transparent 70%);
          pointer-events: none;
        }

        /* ── Eyebrow ── */
        .nf-eyebrow {
          display: flex;
          align-items: center;
          gap: var(--space-2xs);
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: var(--space-s);
        }
        .nf-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: var(--radius-full);
          background: #2563eb;
          flex-shrink: 0;
        }

        /* ── 404 numeral ── */
        .nf-code {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: clamp(72px, 12vw, 140px);
          font-weight: var(--fw-bold);
          line-height: 0.9;
          letter-spacing: -0.03em;
          color: #0d1b3e;
          margin-bottom: var(--space-s);
        }
        .nf-code span {
          color: #2563eb;
        }

        /* ── Heading & body ── */
        .nf-heading {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-3);
          font-weight: var(--fw-medium);
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          color: #0d1b3e;
          margin-bottom: var(--space-2xs);
        }
        .nf-body {
          font-size: var(--step-0);
          line-height: var(--leading-standard);
          color: #64748b;
          max-width: 460px;
          margin-bottom: var(--space-l);
        }

        /* ── CTA Button (matches the rest of the site) ── */
        .nf-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-s);
          padding: var(--space-2xs) var(--space-2xs);
          padding-left: var(--space-m);
          border-radius: var(--radius-full);
          background: #2563eb;
          color: #ffffff;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step--1);
          font-weight: var(--fw-bold);
          letter-spacing: 0.14em;
          line-height: 1;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.22s ease, padding 0.2s ease;
        }
        .nf-btn-primary:hover {
          background: #1d4ed8;
          padding-right: var(--space-xs);
        }
        .nf-btn-primary:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .nf-btn-primary-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          background: #ffffff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.22s;
        }
        .nf-btn-primary:hover .nf-btn-primary-icon {
          background: #dbeafe;
        }

        /* ── Secondary link ── */
        .nf-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs, 6px);
          color: #0d1b3e;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step-0);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nf-btn-secondary:hover {
          color: #2563eb;
        }
        .nf-btn-secondary:hover .nf-arrow {
          transform: translateX(3px);
        }
        .nf-arrow {
          display: flex;
          transition: transform 0.2s ease;
        }

        .nf-illustration {
          color: #2563eb;
        }
      `}</style>

      <section className="nf-root nf-bg min-h-[78vh] flex items-center px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16">
          <div className="flex-1 max-w-xl">
            <p className="nf-eyebrow">
              <span className="nf-eyebrow-dot" />
              Page Not Found
            </p>

            <h1 className="nf-code">
              4<span>0</span>4
            </h1>

            <h2 className="nf-heading">Looks like this page got swept away.</h2>
            <p className="nf-body">
              The page you&rsquo;re looking for doesn&rsquo;t exist or may have
              moved. Let&rsquo;s get you back to something useful.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/" className="nf-btn-primary">
                Back to Home
                <span className="nf-btn-primary-icon">
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
              
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <svg
              className="nf-illustration"
              width="280"
              height="280"
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="60"
                y="40"
                width="160"
                height="200"
                rx="16"
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="3"
              />
              <line
                x1="140"
                y1="40"
                x2="140"
                y2="240"
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="3"
              />
              <line
                x1="60"
                y1="140"
                x2="220"
                y2="140"
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="3"
              />
              <path
                d="M75 95 Q 110 70 140 95"
                stroke="currentColor"
                strokeOpacity="0.4"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <circle
                cx="183"
                cy="183"
                r="3"
                fill="currentColor"
                fillOpacity="0.4"
              />
              <circle
                cx="200"
                cy="165"
                r="2"
                fill="currentColor"
                fillOpacity="0.3"
              />
              <circle
                cx="95"
                cy="200"
                r="2.5"
                fill="currentColor"
                fillOpacity="0.3"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

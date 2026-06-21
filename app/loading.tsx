import Image from "next/image";

export default function Loading() {
  return (
    <>
      <style>{`
        /* ── Google Fonts Import ── */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .ld-root {
          font-family: var(--font-inter), sans-serif;
        }

        .ld-wrap {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-m);
          background: #f8fafc;
        }

        .ld-logo {
          animation: ld-pulse 1.6s ease-in-out infinite;
        }
        @keyframes ld-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.96); }
        }

        .ld-bar {
          position: relative;
          width: 160px;
          height: 3px;
          border-radius: var(--radius-full);
          background: #e2e8f0;
          overflow: hidden;
        }
        .ld-bar::after {
          content: "";
          position: absolute;
          top: 0;
          left: -40%;
          width: 40%;
          height: 100%;
          background: #2563eb;
          border-radius: var(--radius-full);
          animation: ld-sweep 1.1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes ld-sweep {
          0% { left: -40%; }
          100% { left: 100%; }
        }

        .ld-text {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #94a3b8;
        }

        @media (prefers-reduced-motion: reduce) {
          .ld-logo { animation: none; }
          .ld-bar::after { animation: none; left: 0; width: 100%; opacity: 0.4; }
        }
      `}</style>

      <div className="ld-root ld-wrap" role="status" aria-live="polite">
        <Image
          src="/logo.webp"
          width={140}
          height={42}
          alt="Algrey Cleaning Services"
          className="ld-logo"
          priority
        />
        <div className="ld-bar" />
        <span className="ld-text">Loading</span>
      </div>
    </>
  );
}

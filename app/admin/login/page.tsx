"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Incorrect password");
        setLoading(false);
        return;
      }

      const redirectTo = searchParams.get("from") || "/admin/blog";
      router.push(redirectTo);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        /* ── Google Fonts Import ── */
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');

        .al-root {
          font-family: var(--font-inter), sans-serif;
        }

        /* ── Background ── */
        .al-bg {
          position: relative;
          background: #f8fafc;
          overflow: hidden;
        }
        .al-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(37, 99, 235, 0.10) 1px, transparent 1px);
          background-size: 26px 26px;
          -webkit-mask-image: radial-gradient(ellipse 70% 55% at 50% 28%, black 35%, transparent 100%);
          mask-image: radial-gradient(ellipse 70% 55% at 50% 28%, black 35%, transparent 100%);
          pointer-events: none;
        }
        .al-bg::after {
          content: "";
          position: absolute;
          top: -200px;
          right: -180px;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.16), transparent 70%);
          pointer-events: none;
        }

        /* ── Card ── */
        .al-card {
          position: relative;
          background: #ffffff;
          border-radius: var(--radius-2xl);
          padding: var(--space-l) var(--space-m);
          box-shadow: 0 8px 32px rgba(13, 27, 62, 0.18);
          overflow: hidden;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .al-card-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .al-card { opacity: 1; transform: none; transition: none; }
        }
        @media (min-width: 640px) {
          .al-card { padding: var(--space-l); }
        }

        /* Signature moment: a single squeegee-style light sweep on load,
           a quiet nod to the exterior-cleaning brand. */
        .al-sweep {
          position: absolute;
          top: 0;
          left: -45%;
          width: 32%;
          height: 100%;
          background: linear-gradient(115deg, transparent, rgba(37, 99, 235, 0.10), transparent);
          transform: skewX(-12deg);
          pointer-events: none;
        }
        .al-card-visible .al-sweep {
          animation: al-swipe 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.35s 1 both;
        }
        @keyframes al-swipe {
          from { left: -45%; }
          to { left: 130%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .al-card-visible .al-sweep { animation: none; display: none; }
        }

        /* ── Badge ── */
        .al-badge {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-full);
          background: #1e3a8a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          margin-bottom: var(--space-m);
        }

        /* ── Eyebrow ── */
        .al-eyebrow {
          display: flex;
          align-items: center;
          gap: var(--space-2xs);
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: var(--space-2xs);
        }
        .al-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: var(--radius-full);
          background: #2563eb;
          display: inline-block;
          flex-shrink: 0;
        }

        /* ── Heading ── */
        .al-heading {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-3);
          font-weight: var(--fw-medium);
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          color: #0d1b3e;
          margin-bottom: var(--space-2xs);
        }

        /* ── Subtitle ── */
        .al-subtitle {
          font-size: var(--step--1);
          font-weight: var(--fw-normal);
          line-height: var(--leading-standard);
          color: #64748b;
          margin-bottom: var(--space-l);
        }

        /* ── Form ── */
        .al-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .al-label {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          color: #0d1b3e;
        }

        .al-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .al-input-icon {
          position: absolute;
          left: 14px;
          display: flex;
          color: #94a3b8;
          pointer-events: none;
          transition: color 0.2s;
        }
        .al-input-wrap:focus-within .al-input-icon {
          color: #2563eb;
        }

        .al-input {
          width: 100%;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step-0);
          color: #0d1b3e;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: var(--radius-lg);
          padding: var(--space-xs) 44px var(--space-xs) 42px;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .al-input::placeholder {
          color: #94a3b8;
        }
        .al-input:focus {
          outline: none;
          background: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }

        .al-toggle {
          position: absolute;
          right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: var(--radius-full);
          transition: color 0.2s, background 0.2s;
        }
        .al-toggle:hover {
          color: #2563eb;
          background: #eff6ff;
        }
        .al-toggle:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }

        /* ── Error ── */
        .al-error {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2xs);
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: var(--radius-lg);
          padding: var(--space-2xs) var(--space-s);
          color: #b91c1c;
          font-size: var(--step--1);
          line-height: var(--leading-tight);
        }
        .al-error svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── Submit (matches btn-quote) ── */
        .al-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-s);
          width: 100%;
          margin-top: var(--space-2xs);
          padding: var(--space-2xs) var(--space-s);
          padding-left: var(--space-m);
          border: none;
          border-radius: var(--radius-full);
          background: #2563eb;
          color: #ffffff;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step--1);
          font-weight: var(--fw-bold);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.22s ease, opacity 0.2s ease;
        }
        .al-submit:hover:not(:disabled) {
          background: #1d4ed8;
        }
        .al-submit:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .al-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .al-submit-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          background: #ffffff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .al-spinner {
          animation: al-rotate 0.8s linear infinite;
        }
        @keyframes al-rotate {
          to { transform: rotate(360deg); }
        }

        /* ── Back link (matches btn-services) ── */
        .al-back {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2xs);
          margin-top: var(--space-l);
          color: #64748b;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          text-decoration: none;
          transition: color 0.2s;
        }
        .al-back:hover {
          color: #2563eb;
        }
        .al-back:hover .al-back-arrow {
          transform: translateX(-3px);
        }
        .al-back-arrow {
          display: flex;
          transition: transform 0.2s ease;
        }
      `}</style>

      <main className="al-root al-bg min-h-screen flex items-center justify-center px-5 py-12">
        <div
          className={`al-card w-full max-w-[420px] ${mounted ? "al-card-visible" : ""}`}
        >
          <div className="al-sweep" aria-hidden="true" />

          <div className="al-badge">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
          </div>

          <p className="al-eyebrow">
            <span className="al-eyebrow-dot" />
            Admin Access
          </p>

          <h1 className="al-heading">Welcome back</h1>
          <p className="al-subtitle">
            Sign in with your admin password to manage blog posts.
          </p>

          <form onSubmit={handleSubmit} className="al-form" noValidate>
            <label htmlFor="password" className="al-label">
              Password
            </label>

            <div className="al-input-wrap">
              <span className="al-input-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </span>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoFocus
                autoComplete="current-password"
                aria-invalid={!!error}
                aria-describedby={error ? "password-error" : undefined}
                className="al-input"
              />

              <button
                type="button"
                className="al-toggle"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
                    <path d="M9.88 5.09A10.94 10.94 0 0 1 12 5c6.5 0 10 7 10 7a13.16 13.16 0 0 1-3.22 4.06M6.1 6.1A13.16 13.16 0 0 0 2 12s3.5 7 10 7a10.94 10.94 0 0 0 4.02-.78" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            {error && (
              <div className="al-error" role="alert" id="password-error">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v5" />
                  <path d="M12 16h.01" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="al-submit"
            >
              <span>{loading ? "Signing in" : "Sign in"}</span>
              <span className="al-submit-icon">
                {loading ? (
                  <svg
                    className="al-spinner"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="40 100"
                    />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </span>
            </button>
          </form>

          <a href="/" className="al-back">
            <span className="al-back-arrow">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </span>
            Back to website
          </a>
        </div>
      </main>
    </>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <AdminLoginForm />
    </Suspense>
  );
}

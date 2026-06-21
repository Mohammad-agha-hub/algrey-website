"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/admin/LogoutButton";

const NAV_ITEMS = [
  { label: "All Posts", href: "/admin/blog", exact: true },
  { label: "New Post", href: "/admin/blog/new", exact: true },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // The login page is reachable while logged out and renders its own
  // full-page shell. It must never get the authenticated header / nav /
  // logout chrome wrapped around it, so we bail out early here.
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="adm-root min-h-screen bg-[#f8fafc]">
      <style>{`
        /* ── Google Fonts Import ── */
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .adm-root {
          font-family: var(--font-inter), sans-serif;
        }

        /* ── Header ── */
        .adm-header {
          position: sticky;
          top: 0;
          z-index: 30;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
        }
        .adm-header-accent {
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa 45%, transparent 90%);
        }

        .adm-mark {
          width: 30px;
          height: 30px;
          border-radius: var(--radius-full);
          background: #1e3a8a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .adm-wordmark {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-0);
          font-weight: var(--fw-bold);
          letter-spacing: -0.01em;
          line-height: var(--leading-flat);
          color: #0d1b3e;
        }
        .adm-wordmark-sub {
          font-size: var(--step--2);
          font-weight: var(--fw-semibold);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          line-height: var(--leading-fine);
          color: #94a3b8;
        }

        .adm-nav-link {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          color: #64748b;
          padding: var(--space-2xs) var(--space-s);
          border-radius: var(--radius-full);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          transition: color 0.2s, background 0.2s;
        }
        .adm-nav-link:hover {
          color: #0d1b3e;
          background: #f1f5f9;
        }
        .adm-nav-link.is-active {
          color: #2563eb;
          background: #eff6ff;
        }

        .adm-logout {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          color: #64748b;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-2xs) var(--space-s);
          border-radius: var(--radius-full);
          transition: color 0.2s, background 0.2s;
        }
        .adm-logout:hover {
          color: #dc2626;
          background: #fef2f2;
        }
        .adm-logout:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }

        /* ── Page heading ── */
        .adm-page-eyebrow {
          display: flex;
          align-items: center;
          gap: var(--space-2xs);
          font-size: var(--step--2);
          font-weight: var(--fw-bold);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          line-height: var(--leading-fine);
          color: #2563eb;
          margin-bottom: var(--space-2xs);
        }
        .adm-page-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: var(--radius-full);
          background: #2563eb;
          flex-shrink: 0;
        }
        .adm-page-title {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-3);
          font-weight: var(--fw-medium);
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          color: #0d1b3e;
        }
        .adm-page-subtitle {
          font-size: var(--step--1);
          font-weight: var(--fw-normal);
          line-height: var(--leading-standard);
          color: #64748b;
          margin-top: var(--space-2xs);
        }

        /* ── Cards ── */
        .adm-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-2xl);
          box-shadow: 0 1px 2px rgba(13, 27, 62, 0.04);
        }
        .adm-card-section {
          padding: var(--space-m);
          display: flex;
          flex-direction: column;
          gap: var(--space-s);
        }
        .adm-card-heading {
          display: flex;
          align-items: center;
          gap: var(--space-2xs);
          font-size: var(--step--2);
          font-weight: var(--fw-bold);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: var(--leading-fine);
          color: #94a3b8;
        }
        .adm-card-heading svg {
          color: #2563eb;
        }

        /* ── Form fields ── */
        .adm-label {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          color: #0d1b3e;
        }
        .adm-hint {
          font-size: var(--step--2);
          line-height: var(--leading-tight);
          color: #94a3b8;
        }
        .adm-input {
          width: 100%;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step-0);
          color: #0d1b3e;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: var(--radius-lg);
          padding: var(--space-xs) var(--space-s);
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .adm-input::placeholder {
          color: #94a3b8;
        }
        .adm-input:focus {
          outline: none;
          background: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }
        textarea.adm-input {
          resize: vertical;
          min-height: 80px;
        }

        /* ── Buttons ── */
        .adm-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-s);
          padding: var(--space-2xs) var(--space-2xs);
          padding-left: var(--space-m);
          border: none;
          border-radius: var(--radius-full);
          background: #2563eb;
          color: #ffffff;
          font-family: var(--font-inter), sans-serif;
          font-size: var(--step--1);
          font-weight: var(--fw-bold);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.22s ease, opacity 0.2s ease;
        }
        .adm-btn-primary:hover:not(:disabled) {
          background: #1d4ed8;
        }
        .adm-btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .adm-btn-primary:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .adm-btn-primary-icon {
          width: 30px;
          height: 30px;
          border-radius: var(--radius-full);
          background: #ffffff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .adm-spinner {
          animation: adm-rotate 0.8s linear infinite;
        }
        @keyframes adm-rotate {
          to { transform: rotate(360deg); }
        }

        .adm-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          padding: var(--space-2xs) var(--space-m);
          border-radius: var(--radius-full);
          background: transparent;
          border: 1.5px solid #e2e8f0;
          color: #64748b;
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .adm-btn-secondary:hover {
          color: #0d1b3e;
          border-color: #cbd5e1;
          background: #f8fafc;
        }
        .adm-btn-secondary:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }

        /* ── Error banner ── */
        .adm-error {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2xs);
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: var(--radius-lg);
          padding: var(--space-xs) var(--space-s);
          color: #b91c1c;
          font-size: var(--step--1);
          line-height: var(--leading-tight);
        }
        .adm-error svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── Segmented control (status) ── */
        .adm-segmented {
          display: inline-flex;
          background: #f1f5f9;
          border-radius: var(--radius-full);
          padding: 3px;
          gap: 2px;
          width: fit-content;
        }
        .adm-segmented-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border: none;
          background: transparent;
          border-radius: var(--radius-full);
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          color: #64748b;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .adm-segmented-btn.is-active {
          background: #ffffff;
          color: #0d1b3e;
          box-shadow: 0 1px 3px rgba(13, 27, 62, 0.14);
        }
        .adm-segmented-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          flex-shrink: 0;
        }
        .adm-segmented-dot.draft { background: #94a3b8; }
        .adm-segmented-dot.published { background: #16a34a; }

        /* ── Badges (status pills, e.g. for use in PostsTable) ── */
        .adm-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-size: var(--step--2);
          font-weight: var(--fw-bold);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .adm-badge-draft { background: #f1f5f9; color: #64748b; }
        .adm-badge-published { background: #f0fdf4; color: #16a34a; }
        .adm-badge-dot { width: 6px; height: 6px; border-radius: 999px; background: currentColor; }

        /* ── Table ── */
        .adm-th {
          padding: var(--space-xs) var(--space-m);
          font-size: var(--step--2);
          font-weight: var(--fw-bold);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94a3b8;
        }
        .adm-tr {
          border-top: 1px solid #e2e8f0;
          transition: background 0.15s;
        }
        .adm-tr:hover {
          background: #f8fafc;
        }
        .adm-td {
          padding: var(--space-s) var(--space-m);
          font-size: var(--step--1);
          color: #0d1b3e;
          vertical-align: middle;
        }
        .adm-td-title {
          font-weight: var(--fw-semibold);
          color: #0d1b3e;
          text-decoration: none;
          transition: color 0.15s;
        }
        .adm-td-title:hover {
          color: #2563eb;
        }
        .adm-td-muted {
          color: #64748b;
        }
        .adm-row-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: var(--radius-full);
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .adm-row-action:hover {
          color: #2563eb;
          background: #eff6ff;
        }
        .adm-row-action-danger:hover {
          color: #dc2626;
          background: #fef2f2;
        }
        .adm-row-action:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .adm-row-action:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }

        /* ── Upload dropzone ── */
        .adm-upload-zone {
          border: 1.5px dashed #cbd5e1;
          border-radius: var(--radius-lg);
          padding: var(--space-m);
          display: flex;
          align-items: center;
          gap: var(--space-m);
          background: #f8fafc;
          transition: border-color 0.2s, background 0.2s;
        }
        .adm-upload-zone:hover {
          border-color: #2563eb;
          background: #eff6ff;
        }
        .adm-upload-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── Empty state ── */
        .adm-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: var(--space-2xs);
          padding: var(--space-l);
        }
        .adm-empty-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-2xs);
        }

        /* ── Rich text editor ── */
        .adm-editor {
          border: 1.5px solid #e2e8f0;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .adm-editor-toolbar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2px;
          padding: var(--space-2xs);
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }
        .adm-editor-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 30px;
          height: 30px;
          padding: 0 9px;
          border: none;
          border-radius: var(--radius-lg);
          background: transparent;
          color: #0d1b3e;
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .adm-editor-btn:hover { background: #eff6ff; color: #2563eb; }
        .adm-editor-btn.is-active { background: #2563eb; color: #ffffff; }
        .adm-editor-divider {
          width: 1px;
          align-self: stretch;
          background: #e2e8f0;
          margin: 0 4px;
        }
        .adm-editor-content blockquote {
          border-left: 3px solid #2563eb;
          padding-left: var(--space-s);
          color: #475569;
          font-style: normal;
        }
        .adm-editor-content a {
          color: #2563eb;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .adm-editor-content h2,
        .adm-editor-content h3 {
          font-family: var(--font-inter-tight), sans-serif;
          color: #0d1b3e;
        }
      `}</style>

      <header className="adm-header">
        <div className="adm-header-accent" />
        <div className="px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="adm-mark">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="adm-wordmark">Algrey</p>
                <p className="adm-wordmark-sub">Blog Admin</p>
              </div>
            </div>

            <nav className="flex items-center gap-1">
              {NAV_ITEMS.map(({ label, href, exact }) => {
                const active = exact
                  ? pathname === href
                  : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`adm-nav-link ${active ? "is-active" : ""}`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <LogoutButton />
        </div>
      </header>

      <main className="px-6 py-10">{children}</main>
    </div>
  );
}

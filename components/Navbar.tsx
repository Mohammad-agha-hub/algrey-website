"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Roof Cleaning", href: "/roof-cleaning" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Utility Bar ── */}
      <div className="hidden md:flex items-center justify-between bg-[#0b1f4a] text-white text-sm px-6 lg:px-12 py-2">
        <div className="flex items-center gap-6">
          {/* Phone */}
          <a
            href="tel:08001234567"
            className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            0800 123 456
          </a>

          {/* Location */}
          <span className="flex items-center gap-2 text-gray-300">
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Serving London &amp; Surrey
          </span>
        </div>

        {/* Right side: hours */}
        <span className="text-gray-300">
          Mon – Sat: 7am – 7pm &nbsp;|&nbsp; Sun: 9am – 5pm
        </span>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          // On mobile always solid (no hero transparency needed)
          scrolled
            ? "bg-[#0d2257] shadow-[0_4px_24px_rgba(0,0,0,0.35)] md:top-0"
            : "bg-transparent md:bg-transparent md:top-[36px]",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[68px]">
          {/* ── Logo ── */}
          <Link href="/" className="flex flex-col leading-none select-none">
            <span className="text-white font-extrabold text-xl tracking-wide uppercase">
              Al Grey&apos;s
            </span>
            <span className="text-blue-300 font-semibold text-[11px] tracking-[0.22em] uppercase">
              Cleaning Services
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={[
                  "relative px-3 py-1.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-200",
                  "text-white/90 hover:text-white",
                  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
                  "after:h-[1px] after:w-0 after:bg-blue-400 after:rounded-full",
                  "after:transition-[width] after:duration-200 hover:after:w-4/5",
                  // Highlight active — swap with usePathname() in real usage
                  href === "/" ? "text-white after:w-4/5" : "",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <Link
            href="/quote"
            className="hidden lg:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-sm font-bold uppercase tracking-widest px-5 py-2.5 rounded transition-colors duration-200 shadow-md"
          >
            Get Quote
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={[
                "block h-[2px] w-6 bg-white rounded-full origin-center transition-all duration-300",
                menuOpen ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[2px] w-6 bg-white rounded-full transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[2px] w-6 bg-white rounded-full origin-center transition-all duration-300",
                menuOpen ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Full-Screen Menu ── */}
      <div
        className={[
          "fixed inset-0 z-40 bg-[#0d2257] flex flex-col px-6 pt-24 pb-10",
          "transition-all duration-300 ease-in-out lg:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Mobile utility info */}
        <div className="flex flex-col gap-3 mb-8 border-b border-white/10 pb-6">
          <a
            href="tel:08001234567"
            className="flex items-center gap-3 text-yellow-400 font-semibold text-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            0800 123 456
          </a>
          <span className="flex items-center gap-3 text-gray-300 text-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Serving London &amp; Surrey
          </span>
        </div>

        {/* Mobile nav links */}
        <nav className="flex flex-col gap-1 flex-1">
          {NAV_LINKS.map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
              className={[
                "text-white text-2xl font-bold uppercase tracking-wide py-3",
                "border-b border-white/10 hover:text-yellow-400 transition-colors duration-200",
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0",
                "transition-all duration-300",
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <Link
          href="/quote"
          onClick={() => setMenuOpen(false)}
          className="mt-8 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-sm py-4 rounded-lg transition-colors duration-200"
        >
          Get Free Quote
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
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}

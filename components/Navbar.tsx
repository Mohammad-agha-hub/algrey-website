"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Blogs", href: "/blog"},
  { label: "Contact Us", href: "/contact-us" },
];

const SERVICES_DROPDOWN = [
  {
    category: "Gutter & Roof",
    links: [
      { label: "Gutter Cleaning", href: "/gutter-cleaning" },
      { label: "Roof Cleaning", href: "/roof-cleaning" },
      { label: "Downpipe Cleaning", href: "/downpipe-cleaning" },
      { label: "Commercial Gutter", href: "/commercial-gutter" },
      { label: "Residential Gutter", href: "/residential-gutter" },
    ],
  },
  {
    category: "Exterior Cleaning",
    links: [
      { label: "Window Cleaning", href: "/window-cleaning" },
      { label: "Cladding Cleaning", href: "/cladding-cleaning" },
      { label: "Pressure Washing", href: "/pressure-washing" },
      { label: "Render Cleaning", href: "/render-cleaning" },
    ],
  },
  {
    category: "Surface Restoration",
    links: [
      { label: "Brick Cleaning", href: "/brick-cleaning" },
      { label: "Patio Cleaning", href: "/patio-cleaning" },
      { label: "Driveway Cleaning", href: "/driveway-cleaning" },
      { label: "Graffiti Cleaning", href: "/graffiti-cleaning" },
    ],
  },
];

const ALL_SERVICE_HREFS = SERVICES_DROPDOWN.flatMap((g) =>
  g.links.map((l) => l.href),
).concat(["/services"]);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLElement | null)[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isActive = (href: string, hasDropdown?: boolean) => {
    if (hasDropdown) return ALL_SERVICE_HREFS.includes(pathname);
    return pathname === href;
  };

  const updateIndicator = useCallback(
    (index: number | null) => {
      let idx = index;
      if (idx === null) {
        idx = NAV_LINKS.findIndex(({ href, hasDropdown }) =>
          isActive(href, hasDropdown),
        );
        if (idx === -1) {
          setIndicatorStyle((s) => ({ ...s, opacity: 0 }));
          return;
        }
      }
      const el = linkRefs.current[idx];
      const nav = navRef.current;
      if (!el || !nav) return;
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - navRect.left + elRect.width * 0.1,
        width: elRect.width * 0.8,
        opacity: 1,
      });
    },
    [pathname],
  );

  useEffect(() => {
    updateIndicator(null);
    const onResize = () => updateIndicator(null);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateIndicator]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <>
      <style>{`
        /* ── Base Typography ── */
        .nb { 
          font-family: var(--font-inter), sans-serif; 
        }

        /* ── Nav Links ── */
        .nb-link {
          font-size: var(--step-0);
          font-weight: var(--fw-medium);
          line-height: var(--leading-fine);
          transition: color 0.2s;
        }

        /* ── Dropdown Category Headings ── */
        .nb-dropdown-category {
          font-size: var(--step--2);
          font-weight: var(--fw-bold);
          line-height: var(--leading-fine);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: var(--space-2xs);
          padding-inline: var(--space-2xs);
        }

        /* ── Dropdown Links ── */
        .nb-dropdown-link {
          font-size: var(--step--1);
          font-weight: var(--fw-medium);
          line-height: var(--leading-fine);
        }

        /* ── Dropdown Footer Text ── */
        .nb-dropdown-footer-text {
          font-size: var(--step--1);
          font-weight: var(--fw-normal);
          line-height: var(--leading-fine);
          color: #64748b;
        }

        /* ── Mobile Nav Links ── */
        .nb-mobile-link {
          font-size: var(--step-3);
          font-weight: var(--fw-bold);
          line-height: var(--leading-tight);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ── Mobile Category Headings ── */
        .nb-mobile-category {
          font-size: var(--step--2);
          font-weight: var(--fw-bold);
          line-height: var(--leading-fine);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ── Mobile Sub-links ── */
        .nb-mobile-sublink {
          font-size: var(--step--1);
          font-weight: var(--fw-medium);
          line-height: var(--leading-fine);
        }

        /* ── Mobile Phone Text ── */
        .nb-mobile-phone {
          font-size: var(--step-1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
        }

        .nb-mobile-area {
          font-size: var(--step--1);
          font-weight: var(--fw-normal);
          line-height: var(--leading-fine);
          color: #d1d5db;
        }

        /* ── CTA Button (matches all other sections) ── */
        .nb-cta {
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
          letter-spacing: 0.12em;
          line-height: 1;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.22s ease, padding 0.2s ease;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .nb-cta:hover {
          background: #1d4ed8;
          padding-right: var(--space-xs);
        }
        .nb-cta:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 3px;
        }
        .nb-cta-arrow {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          background: #ffffff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.22s, color 0.22s;
        }
        .nb-cta:hover .nb-cta-arrow {
          background: #dbeafe;
        }

        /* ── Mobile Full CTA ── */
        @media (max-width: 1023px) {
          .nb-cta.nb-cta-mobile {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <header className="nb sticky top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center select-none shrink-0">
            <Image
              src="/logo.webp"
              width={160}
              height={48}
              alt="logo"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-0 relative"
          >
            <span
              className="absolute bottom-0 h-[2px] rounded-full pointer-events-none transition-all duration-300 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
                backgroundColor: "#3b82f6",
              }}
            />

            {NAV_LINKS.map(({ label, href, hasDropdown }, i) =>
              hasDropdown ? (
                <div
                  key={label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => {
                    handleMouseEnter();
                    updateIndicator(i);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                    updateIndicator(null);
                  }}
                >
                  <button
                    ref={(el) => {
                      linkRefs.current[i] = el;
                    }}
                    className={[
                      "nb-link flex items-center gap-1 px-4 py-2",
                      isActive(href, true)
                        ? "text-[#0d1b3e] font-semibold"
                        : "text-gray-600 hover:text-[#0d1b3e]",
                    ].join(" ")}
                  >
                    {label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={[
                      "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px]",
                      "bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.14)] border border-gray-100",
                      "transition-all duration-200 origin-top",
                      dropdownOpen
                        ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none",
                    ].join(" ")}
                  >
                    <div className="grid grid-cols-3 p-5 gap-2">
                      {SERVICES_DROPDOWN.map((group, gi) => (
                        <div
                          key={group.category}
                          className={`p-3 rounded-xl ${gi < SERVICES_DROPDOWN.length - 1 ? "border-r border-gray-100" : ""}`}
                        >
                          <p className="nb-dropdown-category">
                            {group.category}
                          </p>
                          <ul className="space-y-0.5">
                            {group.links.map(({ label: lbl, href: lhref }) => (
                              <li key={lbl}>
                                <Link
                                  href={lhref}
                                  onClick={() => setDropdownOpen(false)}
                                  className={[
                                    "nb-dropdown-link flex items-center gap-2.5 py-2 px-3 rounded-lg transition-all duration-150 group/item",
                                    pathname === lhref
                                      ? "text-blue-600 bg-blue-50"
                                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50",
                                  ].join(" ")}
                                >
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-150 ${pathname === lhref ? "bg-blue-500 scale-125" : "bg-slate-300 group-hover/item:bg-blue-400"}`}
                                  />
                                  {lbl}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mx-5 mb-5 bg-slate-50 rounded-xl px-5 py-3.5 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3.5 h-3.5 text-blue-600"
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
                      </div>
                      <p className="nb-dropdown-footer-text">
                        Not sure which service?{" "}
                        <a
                          href="tel:08001234567"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          Call 0800 123 456
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={label}
                  href={href}
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  onMouseEnter={() => updateIndicator(i)}
                  onMouseLeave={() => updateIndicator(null)}
                  className={[
                    "nb-link px-4 py-2",
                    isActive(href)
                      ? "text-[#0d1b3e] font-semibold"
                      : "text-gray-600 hover:text-[#0d1b3e]",
                  ].join(" ")}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <Link href="/enquiry-now" className="hidden lg:inline-flex nb-cta">
            Get Quote
            <span className="nb-cta-arrow">
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

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block h-[2px] w-6 rounded-full origin-center transition-all duration-300 bg-[#0d1b3e] ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full transition-all duration-300 bg-[#0d1b3e] ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full origin-center transition-all duration-300 bg-[#0d1b3e] ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        className={[
          "fixed inset-0 z-40 bg-[#0d1b3e] flex flex-col px-6 pt-24 pb-10 overflow-y-auto",
          "transition-all duration-300 ease-in-out lg:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="flex flex-col gap-3 mb-8 border-b border-white/10 pb-6">
          <a
            href="tel:08001234567"
            className="nb-mobile-phone flex items-center gap-3 text-blue-400"
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
          <span className="nb-mobile-area">
            Serving Birmingham &amp; Surrounding Areas
          </span>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {NAV_LINKS.map(({ label, href, hasDropdown }, i) =>
            hasDropdown ? (
              <div key={label}>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                  className={[
                    "nb-mobile-link w-full flex items-center justify-between py-3 border-b border-white/10 transition-all duration-300",
                    isActive(href, true)
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400",
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0",
                  ].join(" ")}
                >
                  {label}
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[600px] py-2" : "max-h-0"}`}
                >
                  {SERVICES_DROPDOWN.map((group) => (
                    <div key={group.category} className="mb-4">
                      <p className="nb-mobile-category text-blue-400 px-2 mb-2">
                        {group.category}
                      </p>
                      {group.links.map(({ label: lbl, href: lhref }) => (
                        <Link
                          key={lbl}
                          href={lhref}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className={`nb-mobile-sublink flex items-center gap-2.5 py-2 px-4 rounded-lg mb-0.5 transition-colors duration-150 ${pathname === lhref ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${pathname === lhref ? "bg-blue-400" : "bg-blue-600"}`}
                          />
                          {lbl}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                className={[
                  "nb-mobile-link py-3 border-b border-white/10 transition-all duration-300",
                  isActive(href)
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400",
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0",
                ].join(" ")}
              >
                {label}
              </Link>
            ),
          )}
        </nav>

        <Link
          href="/enquiry-now"
          onClick={() => setMenuOpen(false)}
          className="nb-cta nb-cta-mobile mt-8"
        >
          Get Free Quote
          <span className="nb-cta-arrow">
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
    </>
  );
}

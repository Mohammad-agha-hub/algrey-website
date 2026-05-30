"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Roof Cleaning", href: "/roof-cleaning" },
  { label: "Contact Us", href: "/contact-us" },
];

const SERVICES_DROPDOWN = [
  {
    category: "Gutter Services",
    links: [
      { label: "Gutter Cleaning", href: "/gutter-cleaning" },
      { label: "Brick Cleaning", href: "/brick-cleaning" },
      { label: "Graffiti Cleaning", href: "/graffiti-cleaning" },
      { label: "Downpipe Cleaning", href: "/downpipe-cleaning" },
    ],
  },
  {
    category: "Cleaning Services",
    links: [
      { label: "Window Cleaning", href: "/window-cleaning" },
      { label: "Cladding Cleaning", href: "/cladding-cleaning" },
      { label: "Pressure Washing", href: "/pressure-washing" },
      { label: "Patio Cleaning", href: "/patio-cleaning" },
    ],
  },
  {
    category: "Specialized Services",
    links: [
      { label: "Commercial Gutter", href: "/commercial-gutter" },
      { label: "Residential Gutter", href: "/residential-gutter" },
      { label: "Render Cleaning", href: "/render-cleaning" },
      { label: "Driveway Cleaning", href: "/driveway-cleaning" },
    ],
  },
];

const ALL_SERVICE_HREFS = SERVICES_DROPDOWN.flatMap((g) =>
  g.links.map((l) => l.href),
).concat(["/services"]);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sliding indicator state
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

  // Update sliding indicator position
  const updateIndicator = useCallback(
    (index: number | null) => {
      if (index === null) {
        // Reset to active link
        const activeIndex = NAV_LINKS.findIndex(({ href, hasDropdown }) =>
          isActive(href, hasDropdown),
        );
        if (activeIndex === -1) {
          setIndicatorStyle((s) => ({ ...s, opacity: 0 }));
          return;
        }
        index = activeIndex;
      }
      const el = linkRefs.current[index];
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname],
  );

  // Re-calculate on pathname change or resize
  useEffect(() => {
    updateIndicator(null);
    const onResize = () => updateIndicator(null);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateIndicator]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      ) {
        setDropdownOpen(false);
      }
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
      {/* ── Utility Bar ── */}
      <div className="hidden md:flex items-center justify-between bg-[#0b1f4a] text-white text-sm px-6 lg:px-12 py-2">
        <div className="flex items-center gap-6">
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
            Serving Birmingham &amp; Surrounding Areas
          </span>
        </div>
        <span className="text-gray-300">
          Mon – Sat: 7am – 7pm &nbsp;|&nbsp; Emergency: 24/7
        </span>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0d2257] shadow-[0_4px_24px_rgba(0,0,0,0.35)] md:top-0"
            : "bg-transparent md:bg-transparent md:top-[36px]",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center mt-2 select-none">
            <Image src={"/logos.webp"} width={200} height={200} alt="logo" />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-1 relative"
          >
            {/* Sliding indicator */}
            <span
              className="absolute bottom-0 h-[2px] bg-blue-400 rounded-full pointer-events-none transition-all duration-300 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
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
                      "relative flex items-center gap-1 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-200",
                      isActive(href, true)
                        ? "text-white"
                        : "text-white/80 hover:text-white",
                    ].join(" ")}
                  >
                    {label}
                    <svg
                      className={[
                        "w-3.5 h-3.5 transition-transform duration-200",
                        dropdownOpen ? "rotate-180" : "",
                      ].join(" ")}
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

                  {/* ── Dropdown Panel ── */}
                  <div
                    className={[
                      "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px]",
                      "bg-white rounded-2xl overflow-hidden",
                      "shadow-[0_8px_40px_rgba(0,0,0,0.14)]",
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
                          className={[
                            "p-3 rounded-xl",
                            gi < SERVICES_DROPDOWN.length - 1
                              ? "border-r border-gray-100"
                              : "",
                          ].join(" ")}
                        >
                          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
                            {group.category}
                          </p>
                          <ul className="space-y-0.5">
                            {group.links.map(({ label: lbl, href: lhref }) => (
                              <li key={lbl}>
                                <Link
                                  href={lhref}
                                  onClick={() => setDropdownOpen(false)}
                                  className={[
                                    "flex items-center gap-2.5 text-sm py-2 px-3 rounded-lg font-medium",
                                    "transition-all duration-150 group/item",
                                    pathname === lhref
                                      ? "text-blue-600 bg-blue-50"
                                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50",
                                  ].join(" ")}
                                >
                                  <span
                                    className={[
                                      "w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-150",
                                      pathname === lhref
                                        ? "bg-blue-500 scale-125"
                                        : "bg-slate-300 group-hover/item:bg-blue-400",
                                    ].join(" ")}
                                  />
                                  {lbl}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mx-5 mb-5 bg-slate-50 rounded-xl px-5 py-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
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
                        <p className="text-xs text-slate-500">
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
                    "relative px-3 py-1.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-200",
                    isActive(href)
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                  ].join(" ")}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/enquiry-now"
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

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
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
          "fixed inset-0 z-40 bg-[#0d2257] flex flex-col px-6 pt-24 pb-10 overflow-y-auto",
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
            Serving Birmingham &amp; Surrounding Areas
          </span>
        </div>

        {/* Mobile nav links */}
        <nav className="flex flex-col gap-1 flex-1">
          {NAV_LINKS.map(({ label, href, hasDropdown }, i) =>
            hasDropdown ? (
              <div key={label}>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                  className={[
                    "w-full flex items-center justify-between text-2xl font-bold uppercase tracking-wide py-3",
                    "border-b border-white/10 transition-all duration-300",
                    isActive(href, true)
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400",
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0",
                  ].join(" ")}
                >
                  {label}
                  <svg
                    className={[
                      "w-5 h-5 transition-transform duration-200",
                      mobileServicesOpen ? "rotate-180" : "",
                    ].join(" ")}
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
                    "overflow-hidden transition-all duration-300",
                    mobileServicesOpen ? "max-h-[600px] py-2" : "max-h-0",
                  ].join(" ")}
                >
                  {SERVICES_DROPDOWN.map((group) => (
                    <div key={group.category} className="mb-4">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 px-2 mb-2">
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
                          className={[
                            "flex items-center gap-2.5 text-sm py-2 px-4 rounded-lg mb-0.5 font-medium",
                            "transition-colors duration-150",
                            pathname === lhref
                              ? "text-yellow-400"
                              : "text-gray-300 hover:text-yellow-400",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "w-1.5 h-1.5 rounded-full shrink-0",
                              pathname === lhref
                                ? "bg-yellow-400"
                                : "bg-blue-400",
                            ].join(" ")}
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
                  "text-2xl font-bold uppercase tracking-wide py-3",
                  "border-b border-white/10 transition-all duration-300",
                  isActive(href)
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400",
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

        {/* Mobile CTA */}
        <Link
          href="/enquiry-now"
          onClick={() => setMenuOpen(false)}
          className="mt-8 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-sm py-4 rounded-xl transition-colors duration-200"
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

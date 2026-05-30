"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

// ── Synced with enquiry page ──────────────────────────────────────────────────
const SERVICES = [
  "Gutter Cleaning",
  "Window Cleaning",
  "Pressure Washing",
  "Roof Cleaning",
  "Fascia & Soffit Cleaning",
  "Driveway Cleaning",
  "Commercial Gutter Cleaning",
  "Patio Cleaning",
  "Render Cleaning",
  "Brick Cleaning",
  "Cladding Cleaning",
  "Downpipe Cleaning",
  "Graffiti Removal",
];

const AVATARS = [
  {
    src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    alt: "JM",
  },
  {
    src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    alt: "SR",
  },
  {
    src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    alt: "PK",
  },
  {
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    alt: "AL",
  },
];

export default function HeroSection() {
  const [form, setForm] = useState({
    postcode: "",
    name: "", // we split this into firstName / lastName before sending
    email: "",
    phone: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setApiError(null);

    if (
      !form.postcode ||
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.service
    )
      return;

    setLoading(true);

    // Split full name into first / last
    const nameParts = form.name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || undefined;

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "hero", // ← identifies this form
          firstName,
          lastName,
          email: form.email,
          phone: form.phone,
          postcode: form.postcode,
          service: form.service,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setApiError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setApiError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setApiError(null);
    setForm({ postcode: "", name: "", email: "", phone: "", service: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-body    { font-family: "Inter", sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeUp .65s ease both; }
        .anim-2 { animation: fadeUp .65s .15s ease both; }
        .anim-3 { animation: fadeUp .65s .28s ease both; }
        .anim-4 { animation: fadeUp .65s .40s ease both; }
        .anim-5 { animation: fadeIn  .8s .55s ease both; }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border-radius: 999px;
          padding: 7px 16px 7px 8px;
        }
        .trust-pill-avatars { display: flex; }
        .trust-pill-avatars img {
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.5);
          object-fit: cover;
          margin-left: -6px;
          flex-shrink: 0;
          display: block;
        }
        .trust-pill-avatars img:first-child { margin-left: 0; }

        .custom-dropdown-list {
          animation: dropdownIn 0.15s ease both;
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
        }
        .custom-dropdown-list::-webkit-scrollbar { width: 4px; }
        .custom-dropdown-list::-webkit-scrollbar-track { background: transparent; }
        .custom-dropdown-list::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 99px;
        }
      `}</style>

      <section
        id="hero"
        className="font-body relative min-h-screen flex flex-col"
      >
        <Navbar />

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/landing-bg.webp"
            alt="Beautiful brick house exterior"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#081a3d]/95 via-[#0d2257]/80 to-transparent" />
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#081a3d]/90 via-[#0d2257]/85 to-[#061530]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061530]/90 via-transparent to-transparent" />
        </div>

        {/* Main content */}
        <div className="flex-1 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-32 pb-10 lg:pt-36 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8">
          {/* Left: Copy */}
          <div className="flex-1 flex flex-col justify-center text-white text-center lg:text-left">
            <p className="anim-1 inline-flex items-center justify-center lg:justify-start gap-2 text-[#FFF265] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Trusted Local Experts
            </p>
            <h1 className="anim-2 font-display tracking-[4px] text-5xl sm:text-6xl xl:text-7xl leading-[0.95] font-bold uppercase mb-5">
              Professional
              <br />
              <span className="text-blue-600">Gutter</span>
              <br />
              And Roof Cleaning
            </h1>
            <p className="anim-3 text-gray-300 text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Protect your property from costly water damage with our expert
              gutter cleaning, clearing, and maintenance solutions.
            </p>

            <div className="anim-4 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-md transition-all duration-200 shadow-lg shadow-blue-900/40"
                >
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  Our Services
                </a>
                <a
                  href="/about-us"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-md transition-all duration-200 hover:bg-white/10"
                >
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
                  Learn More About Us
                </a>
              </div>

              {/* Trust Pill */}
              <div className="flex justify-center lg:justify-start pt-2">
                <div className="trust-pill">
                  <div className="trust-pill-avatars">
                    {AVATARS.map((avatar) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={avatar.alt} src={avatar.src} alt={avatar.alt} />
                    ))}
                  </div>
                  <div className="flex flex-col leading-tight">
                    <div className="flex items-center gap-0.5">
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
                    <span className="text-white text-xs font-medium">
                      <span className="text-yellow-400 font-bold">2,000+</span>{" "}
                      homeowners trust us
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div
            id="quote"
            className="anim-5 w-full lg:w-[400px] xl:w-[420px] bg-white rounded-2xl shadow-2xl p-7 sm:p-8 shrink-0"
          >
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="font-body text-2xl font-bold text-gray-900">
                  Quote Requested!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Thanks, <strong>{form.name.split(" ")[0]}</strong>! We'll be
                  in touch within 2 hours with your free quote. Check your inbox
                  for a confirmation email.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-semibold underline underline-offset-2"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="font-body text-2xl sm:text-[1.6rem] font-bold text-gray-900 leading-tight tracking-tight">
                    Request a Free Quote
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    No obligation — get a price in minutes.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Postcode */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="postcode"
                      value={form.postcode}
                      onChange={handleChange}
                      placeholder="Enter your postcode"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Name */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        className="w-4 h-4"
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
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((o) => !o)}
                      className={`w-full flex items-center justify-between px-4 py-3 border rounded-lg text-sm bg-white transition-all duration-150 focus:outline-none
                        ${dropdownOpen ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-200 hover:border-gray-300"}
                        ${form.service ? "text-gray-800" : "text-gray-400"}`}
                    >
                      <span className="flex items-center gap-2.5">
                        <svg
                          className="w-4 h-4 shrink-0 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                          />
                        </svg>
                        {form.service || "Select a Service"}
                      </span>
                      <svg
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className="custom-dropdown-list absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-lg shadow-xl overflow-y-auto max-h-[180px]">
                        {SERVICES.map((s) => {
                          const isSelected = form.service === s;
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => {
                                setForm((prev) => ({ ...prev, service: s }));
                                setDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors duration-100
                                ${isSelected ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                              <span>{s}</span>
                              {isSelected && (
                                <svg
                                  className="w-4 h-4 text-blue-500 shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* API Error */}
                  {apiError && (
                    <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
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
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg>
                      {apiError}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold uppercase tracking-widest text-sm py-3.5 rounded-lg transition-all duration-200 shadow-md shadow-blue-900/40 mt-1 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Get My Free Quote →"
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

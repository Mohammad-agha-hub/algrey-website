"use client";

import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Roof Cleaning", href: "/roof-cleaning" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICES = [
  { label: "Gutter Cleaning", href: "/services/gutter-cleaning" },
  { label: "Roof Cleaning", href: "/roof-cleaning" },
  { label: "Pressure Washing", href: "/services/pressure-washing" },
  { label: "Window Cleaning", href: "/services/window-cleaning" },
  { label: "Fascia & Soffit Cleaning", href: "/services/fascia-soffit-cleaning" },
  { label: "Conservatory Roof Cleaning", href: "/services/conservatory-roof-cleaning" },
];

const WatermarkSwirl = () => (
  <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
    <path d="M 260 60 C 260 60 130 220 130 310 C 130 385 188 440 260 440 C 332 440 390 385 390 310 C 390 220 260 60 260 60 Z" fill="white" fillOpacity="0.07" />
    <path d="M 260 110 C 260 110 155 250 155 325 C 155 387 202 428 260 428 C 318 428 365 387 365 325 C 365 250 260 110 260 110 Z" fill="white" fillOpacity="0.06" />
    <path d="M 260 165 C 260 165 185 282 185 338 C 185 388 218 418 260 418 C 302 418 335 388 335 338 C 335 282 260 165 260 165 Z" fill="white" fillOpacity="0.05" />
    <ellipse cx="232" cy="268" rx="18" ry="28" fill="white" fillOpacity="0.09" transform="rotate(-20 232 268)" />
  </svg>
);

export default function CTAAndFooter() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800;900&display=swap');
        .cf-body    { font-family: 'Inter', sans-serif; }
        .cf-heading { font-family: 'Manrope', sans-serif; }

        /* ── Live badge ── */
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

        /* ── Trust pills ── */
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

        /* ── Primary button ── */
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

        /* ── Secondary button ── */
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

        /* ── Phone strip ── */
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

        /* ── Footer links ── */
        .footer-link {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #7a90bc;
          text-decoration: none;
          transition: color 0.18s;
          display: block;
          margin-bottom: 10px;
        }
        .footer-link:hover { color: #ffffff; }
        .footer-link:last-child { margin-bottom: 0; }
      `}</style>

      <div className="cf-body">
        {/* ── Floating CTA Card ── */}
        <div className="relative bg-white pt-20">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#081a3d]" />

          <div className="relative z-10 w-[90%] mx-auto">
            <div className="relative rounded-[28px] overflow-hidden" style={{ background: "#2563eb" }}>
              <div className="absolute inset-y-0 left-0 w-[44%] pointer-events-none" aria-hidden="true">
                <WatermarkSwirl />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 sm:px-12 py-14" style={{ marginLeft: "auto", maxWidth: "100%" }}>
                {/* ── Left ── */}
                <div className="flex flex-col gap-5 lg:pl-[10%]">
                  <div>
                    <span className="cta-badge">
                      <span className="cta-badge-dot" />
                      Same-Day Response
                    </span>
                  </div>

                  <h2
                    className="cf-heading text-white"
                    style={{ fontSize: "clamp(30px,3.8vw,50px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.025em" }}
                  >
                    Stop Ignoring
                    <br />Your Gutters.
                    <br />
                    <span style={{ position: "relative", display: "inline-block" }}>
                      Book Today.
                      <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 4, background: "#fff", borderRadius: 2, opacity: 0.7 }} />
                    </span>
                  </h2>

                  <p className="cf-body" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14.5, lineHeight: 1.65, maxWidth: 360 }}>
                    Blocked gutters cause damp, cracked walls and costly repairs. Takes 60 seconds to book — we handle the rest.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["No call-out fee", "Free quote in minutes", "Fully insured"].map((t) => (
                      <span key={t} className="cta-trust-pill">
                        <svg className="w-3.5 h-3.5 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Right ── */}
                <div className="flex flex-col justify-center gap-5 lg:items-start">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="#contact" className="cta-btn-primary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                      Get My Free Quote
                    </a>
                    <a href="tel:08001234567" className="cta-btn-secondary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      Call Us Now
                    </a>
                  </div>

                  <div className="cta-phone-strip">
                    <div className="cta-phone-icon">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.31.52l-.97 1.293a15.727 15.727 0 01-6.684-6.684l1.293-.97a1.125 1.125 0 00.52-1.31L9.572 3.1a1.125 1.125 0 00-1.091-.852H7.25A2.25 2.25 0 005 4.5v.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Mon–Sat, 7am–7pm
                      </span>
                      <span className="cf-heading" style={{ fontSize: 19, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
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
                        <img key={i} src={src} alt="" style={{ width: 26, height: 26, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.25)", objectFit: "cover", marginLeft: i === 0 ? 0 : -7, flexShrink: 0, display: "block" }} />
                      ))}
                    </div>
                    <div className="flex flex-col" style={{ lineHeight: 1.3 }}>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter',sans-serif" }}>
                        Trusted by <strong style={{ color: "#fff" }}>2,000+</strong> homeowners
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="bg-[#081a3d]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-20 pb-8">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-14">

              {/* Col 1 — Brand */}
              <div className="lg:max-w-[280px]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center justify-center size-9 rounded-lg bg-blue-600 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="cf-heading text-white font-extrabold text-[18px] tracking-tight leading-none">Al Grey's</p>
                    <p className="cf-heading text-blue-500 text-[10px] font-bold uppercase tracking-[.16em] mt-0.5">Cleaning Services</p>
                  </div>
                </div>
                <p className="cf-body text-[#7a90bc] text-[13.5px] leading-relaxed mb-6">
                  Protecting Birmingham homes and businesses from costly water damage. Trusted, local and fully insured since 2010.
                </p>
                <div className="flex gap-2">
                  {[
                    { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                    { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                    { label: "Twitter/X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="inline-flex items-center justify-center size-9 rounded-lg bg-white/5 border border-white/[0.08] text-[#7a90bc] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Cols 2, 3, 4 */}
              <div className="flex flex-col sm:flex-row gap-10 lg:gap-16">

                {/* Quick Links */}
                <div>
                  <p className="cf-heading text-white text-[12px] font-bold uppercase tracking-[.14em] mb-5">Quick Links</p>
                  <nav>
                    {QUICK_LINKS.map((l) => (
                      <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
                    ))}
                  </nav>
                </div>

                {/* Services */}
                <div>
                  <p className="cf-heading text-white text-[12px] font-bold uppercase tracking-[.14em] mb-5">Our Services</p>
                  <nav>
                    {SERVICES.map((s) => (
                      <Link key={s.label} href={s.href} className="footer-link">{s.label}</Link>
                    ))}
                  </nav>
                </div>

                {/* Contact */}
                <div>
                  <p className="cf-heading text-blue-500 text-[12px] font-bold uppercase tracking-[.14em] mb-5">Contact</p>
                  {[
                    {
                      icon: (
                        <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                      ),
                      content: (
                        <a href="mailto:info@algreys.com" className="cf-body text-[13px] text-[#7a90bc] hover:text-white transition-colors">
                          info@algreys.com
                        </a>
                      ),
                    },
                    {
                      icon: (
                        <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.324 3.5 8.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      ),
                      content: (
                        <p className="cf-body text-[13px] text-[#7a90bc] leading-snug">
                          145 Barford St, Birmingham<br />B5 6AH, United Kingdom
                        </p>
                      ),
                    },
                    {
                      icon: (
                        <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      ),
                      content: (
                        <a href="tel:08001234456" className="cf-body text-[13px] text-[#7a90bc] hover:text-white transition-colors">
                          0800 123 456
                        </a>
                      ),
                    },
                    {
                      icon: (
                        <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      content: (
                        <p className="cf-body text-[13px] text-[#7a90bc] leading-snug">
                          Mon–Sat: 7:00 AM – 7:00 PM<br />Sun: 9:00 AM – 5:00 PM
                        </p>
                      ),
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 mb-4 last:mb-0">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">{item.icon}</span>
                      {item.content}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.07]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="cf-body text-[#4a5c80] text-[12px]">
                © 2025 Al Grey's Cleaning Services. All Rights Reserved.
              </p>
              <p className="cf-body text-[#4a5c80] text-[12px]">
                Licensed & Insured · Member of British Cleaning Association
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
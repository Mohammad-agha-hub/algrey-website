"use client";

import Image from "next/image";
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

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800;900&display=swap');
        .footer-body    { font-family: 'Inter', sans-serif; }
        .footer-heading { font-family: 'Manrope', sans-serif; }

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

      <footer className="footer-body bg-[#081a3d]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-20 pb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-14">

            {/* Col 1 — Brand */}
            <div className="lg:max-w-[280px]">
              <div>
                <Image src="/logos.png" width={200} height={200} alt="logo" />
              </div>
              <p className="footer-body text-[#7a90bc] text-[13.5px] leading-relaxed mb-6">
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
                <p className="footer-heading text-white text-[12px] font-bold uppercase tracking-[.14em] mb-5">Quick Links</p>
                <nav>
                  {QUICK_LINKS.map((l) => (
                    <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
                  ))}
                </nav>
              </div>

              {/* Services */}
              <div>
                <p className="footer-heading text-white text-[12px] font-bold uppercase tracking-[.14em] mb-5">Our Services</p>
                <nav>
                  {SERVICES.map((s) => (
                    <Link key={s.label} href={s.href} className="footer-link">{s.label}</Link>
                  ))}
                </nav>
              </div>

              {/* Contact */}
              <div>
                <p className="footer-heading text-blue-500 text-[12px] font-bold uppercase tracking-[.14em] mb-5">Contact</p>
                {[
                  {
                    icon: (
                      <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    ),
                    content: (
                      <a href="mailto:info@algreys.com" className="footer-body text-[13px] text-[#7a90bc] hover:text-white transition-colors">
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
                      <p className="footer-body text-[13px] text-[#7a90bc] leading-snug">
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
                      <a href="tel:08001234456" className="footer-body text-[13px] text-[#7a90bc] hover:text-white transition-colors">
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
                      <p className="footer-body text-[13px] text-[#7a90bc] leading-snug">
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
            <p className="footer-body text-[#4a5c80] text-[12px]">
              © 2025 Al Grey's Cleaning Services. All Rights Reserved.
            </p>
            <p className="footer-body text-[#4a5c80] text-[12px]">
              Licensed & Insured · Member of British Cleaning Association
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
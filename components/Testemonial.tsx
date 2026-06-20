"use client";

import { useEffect, useRef } from "react";

const BIG = {
  quote:
    "Al Grey's completely transformed our gutters. Their team was professional, efficient and left no mess whatsoever. We've signed up for their regular maintenance contract and wouldn't use anyone else. Called them on a Friday morning and they were on-site by 2pm the same day — that kind of responsiveness is genuinely rare and sets them apart from every other company we've tried.",
  name: "David Clarke",
  role: "Landlord — Birmingham",
  initials: "DC",
};

const MID = {
  quote:
    "Used them for a full roof and gutter clean on our Victorian terrace. The before-and-after photos were incredible — you could really see the difference. Polite, punctual and genuinely great value for money.",
  name: "Emma Williams",
  role: "Homeowner — London",
  initials: "EW",
};

const SLOT_A = [
  {
    quote:
      "Fast quote, competitive price, done perfectly first time. They spotted a crack in a joint and fixed it on the spot — went above and beyond without charging extra.",
    name: "James Patel",
    role: "Guildford",
    initials: "JP",
  },
  {
    quote:
      "Brilliant team — cleared years of debris from our gutters in under two hours. Sent photos throughout the whole job which gave us genuine peace of mind.",
    name: "Mark Thompson",
    role: "Surrey",
    initials: "MT",
  },
  {
    quote:
      "Booked online, got a callback within the hour, and they were on-site the next morning. Clean, quick and exactly what they quoted. No surprises at all.",
    name: "Sarah Johnson",
    role: "Birmingham",
    initials: "SJ",
  },
];

const SLOT_B = [
  {
    quote:
      "I was nervous about someone going on the roof but the team was so professional. They explained every step and showed me photos after. Booking again without question.",
    name: "Rachel Foster",
    role: "Croydon",
    initials: "RF",
  },
  {
    quote:
      "As a landlord with five properties I needed a reliable team. They handle everything now — always on time, always thorough. Tenants haven't complained once.",
    name: "Tom Briggs",
    role: "Birmingham",
    initials: "TB",
  },
  {
    quote:
      "The gutters look absolutely brand new. They also cleared moss from the ridge tiles at no extra cost. You can tell this team actually takes pride in their work.",
    name: "Claire Hughes",
    role: "London",
    initials: "CH",
  },
];

type CardItem = { quote: string; name: string; role: string; initials: string };

function cardHTML(item: CardItem, dark: boolean): string {
  const qcolor = dark ? "#4a7fff" : "#2563eb";
  const qtext = dark ? "#8fa3cc" : "#334155";
  const divclr = dark ? "#1a2f6e" : "#e4e9f4";
  const inibg = dark ? "#162d5e" : "#eff4ff";
  const iniclr = dark ? "#6b82b8" : "#2563eb";
  const nameclr = dark ? "#ffffff" : "#081a3d";
  const roleclr = dark ? "#4a5f8a" : "#94a3b8";
  return `
    <div class="tm-quote-mark-dynamic" style="font-family:Georgia,serif;color:${qcolor};line-height:0.8;margin-bottom:var(--space-2xs)">&ldquo;</div>
    <p class="tm-quote-dynamic" style="color:${qtext};margin:0 0 var(--space-s);flex:1">${item.quote}</p>
    <div style="height:1px;background:${divclr};margin-bottom:var(--space-xs)"></div>
    <div style="display:flex;align-items:center;gap:var(--space-2xs)">
      <div class="tm-initials-dynamic" style="width:28px;height:28px;border-radius:50%;background:${inibg};display:flex;align-items:center;justify-content:center;font-family:var(--font-inter-tight),sans-serif;font-weight:var(--fw-bold);color:${iniclr};flex-shrink:0">${item.initials}</div>
      <div>
        <div class="tm-name-dynamic" style="font-family:var(--font-inter-tight),sans-serif;font-weight:var(--fw-bold);color:${nameclr}">${item.name}</div>
        <div class="tm-role-dynamic" style="color:${roleclr}">${item.role}</div>
      </div>
    </div>`;
}

function makeCard(
  item: CardItem,
  dark: boolean,
  w: number,
  h: number,
): HTMLElement {
  const el = document.createElement("div");
  el.style.background = dark ? "#081a3d" : "#ffffff";
  el.style.border = `1px solid ${dark ? "#0d2257" : "#e4e9f4"}`;
  el.style.borderRadius = "var(--radius-lg)";
  el.style.padding = "var(--space-m) var(--space-s)";
  el.style.display = "flex";
  el.style.flexDirection = "column";
  el.style.boxSizing = "border-box";
  el.style.width = `${w}px`;
  el.style.height = `${h}px`;
  el.innerHTML = cardHTML(item, dark);
  return el;
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const slotARef = useRef<HTMLDivElement>(null);
  const slotBRef = useRef<HTMLDivElement>(null);
  const idxARef = useRef(0);
  const idxBRef = useRef(0);
  const darkARef = useRef(false);
  const darkBRef = useRef(false);
  const slotH = useRef(310);
  const intervalA = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalB = useRef<ReturnType<typeof setInterval> | null>(null);

  function runSlot(
    slotEl: HTMLDivElement,
    data: CardItem[],
    idxRef: React.MutableRefObject<number>,
    darkRef: React.MutableRefObject<boolean>,
    dir: "h" | "v",
  ) {
    const cur = slotEl.firstElementChild as HTMLElement | null;
    if (!cur) return;

    idxRef.current = (idxRef.current + 1) % data.length;
    darkRef.current = !darkRef.current;

    const w = slotEl.getBoundingClientRect().width;
    const h = slotH.current;
    const next = makeCard(data[idxRef.current], darkRef.current, w, h);

    cur.style.position = "absolute";
    cur.style.inset = "0";

    next.style.position = "absolute";
    next.style.top = "0";
    next.style.left = "0";
    next.style.right = "0";
    next.style.transform =
      dir === "h" ? "translateX(108%)" : "translateY(108%)";
    next.style.opacity = "0";
    slotEl.appendChild(next);

    cur.style.animation =
      dir === "h"
        ? "tmOutL 0.44s cubic-bezier(.4,0,.2,1) forwards"
        : "tmOutU 0.44s cubic-bezier(.4,0,.2,1) forwards";

    setTimeout(() => {
      next.style.transform = "";
      next.style.opacity = "";
      next.style.animation =
        dir === "h"
          ? "tmInR 0.44s cubic-bezier(.4,0,.2,1) forwards"
          : "tmInB 0.44s cubic-bezier(.4,0,.2,1) forwards";
      setTimeout(() => cur.remove(), 460);
    }, 20);
  }

  useEffect(() => {
    const slotA = slotARef.current;
    const slotB = slotBRef.current;
    if (!slotA || !slotB) return;

    const h = slotH.current;

    slotA.style.height = `${h}px`;
    slotB.style.height = `${h}px`;

    const wA = slotA.getBoundingClientRect().width;
    const firstA = makeCard(SLOT_A[0], false, wA, h);
    firstA.style.position = "absolute";
    firstA.style.top = "0";
    firstA.style.left = "0";
    firstA.style.right = "0";
    slotA.appendChild(firstA);

    const wB = slotB.getBoundingClientRect().width;
    const firstB = makeCard(SLOT_B[0], false, wB, h);
    firstB.style.position = "absolute";
    firstB.style.top = "0";
    firstB.style.left = "0";
    firstB.style.right = "0";
    slotB.appendChild(firstB);

    const tA = setTimeout(() => {
      intervalA.current = setInterval(() => {
        runSlot(slotA, SLOT_A, idxARef, darkARef, "h");
      }, 3000);
    }, 800);

    const tB = setTimeout(() => {
      intervalB.current = setInterval(() => {
        runSlot(slotB, SLOT_B, idxBRef, darkBRef, "v");
      }, 3000);
    }, 2200);

    return () => {
      clearTimeout(tA);
      clearTimeout(tB);
      if (intervalA.current) clearInterval(intervalA.current);
      if (intervalB.current) clearInterval(intervalB.current);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("tm-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes tmOutL { from{transform:translateX(0);opacity:1}    to{transform:translateX(-108%);opacity:0} }
        @keyframes tmInR  { from{transform:translateX(108%);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes tmOutU { from{transform:translateY(0);opacity:1}    to{transform:translateY(-108%);opacity:0} }
        @keyframes tmInB  { from{transform:translateY(108%);opacity:0} to{transform:translateY(0);opacity:1} }

        /* ── Reveal Animation ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].tm-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }

        /* ── Section ── */
        .tm-section {
          background: #f8f9fc;
          font-family: var(--font-inter), sans-serif;
          padding-block: clamp(48px, 8vw, 96px);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        /* ── Eyebrow ── */
        .tm-eyebrow {
          font-size: var(--step--1);
          font-weight: var(--fw-semibold);
          line-height: var(--leading-fine);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: var(--space-s);
        }

        /* ── Heading ── */
        .tm-heading {
          font-family: var(--font-inter-tight), sans-serif;
          font-size: var(--step-5);
          font-weight: var(--fw-medium);
          color: #081a3d;
          line-height: var(--leading-flat);
          letter-spacing: -0.02em;
          margin: 0 0 var(--space-s);
        }

        /* ── Subtitle ── */
        .tm-sub {
          font-size: var(--step-0);
          color: #6b7a99;
          line-height: var(--leading-loose);
          margin: 0;
        }

        /* ── Cards ── */
        .tm-card,
        .tm-card-mid {
          background: #ffffff;
          border: 1px solid #e4e9f4;
          border-radius: var(--radius-2xl);
          display: flex;
          flex-direction: column;
        }
        .tm-card {
          padding: clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px);
        }
        .tm-card-mid {
          padding: clamp(20px, 3vw, 28px) clamp(18px, 2.5vw, 26px);
        }

        /* ── Quote Mark (ALL cards use same sizes) ── */
        .tm-quote-mark,
        .tm-quote-mark-dynamic {
          font-family: Georgia, serif;
          color: #2563eb;
          line-height: 0.8;
        }
        .tm-quote-mark {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: var(--space-2xs);
        }
        .tm-quote-mark-dynamic {
          font-size: clamp(1.2rem, 2.5vw, 1.56rem);
          margin-bottom: var(--space-2xs);
        }

        /* ── Quote Text (ALL cards use same sizes) ── */
        .tm-quote-text,
        .tm-quote-dynamic {
          color: #334155;
          flex: 1;
        }
        .tm-quote-text {
          font-size: var(--step-0);
          line-height: var(--leading-loose);
          margin: 0 0 var(--space-s);
        }
        .tm-quote-dynamic {
          font-size: var(--step--1);
          line-height: var(--leading-standard);
          margin: 0 0 var(--space-s);
        }

        .tm-divider {
          height: 1px;
          background: #e4e9f4;
          margin-bottom: var(--space-s);
        }

        /* ── Author Row ── */
        .tm-author-row {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          flex-wrap: wrap;
        }

        /* ── Avatar (ALL cards use same sizes) ── */
        .tm-avatar,
        .tm-initials-dynamic {
          border-radius: var(--radius-full);
          background: #eff4ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-inter-tight), sans-serif;
          font-weight: var(--fw-bold);
          color: #2563eb;
          flex-shrink: 0;
        }
        .tm-avatar {
          width: 34px;
          height: 34px;
          font-size: var(--step--2);
        }
        .tm-initials-dynamic {
          width: 28px;
          height: 28px;
          font-size: var(--step--2);
        }

        /* ── Name (ALL cards use same sizes) ── */
        .tm-name,
        .tm-name-dynamic {
          font-family: var(--font-inter-tight), sans-serif;
          font-weight: var(--fw-bold);
          color: #081a3d;
          font-size: var(--step--1);
        }

        /* ── Role (ALL cards use same sizes) ── */
        .tm-role,
        .tm-role-dynamic {
          color: #94a3b8;
          margin-top: 1px;
          font-size: var(--step--2);
        }

        /* ── Grid ── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: var(--space-s);
          align-items: stretch;
        }

        .testimonials-right-col {
          display: flex;
          flex-direction: column;
          gap: var(--space-s);
        }

        .animated-cards-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xs);
        }

        .tm-slot {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #f8f9fc;
        }

        /* ── Responsive: Tablet ── */
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .animated-cards-row {
            grid-template-columns: 1fr;
          }
        }

        /* ── Responsive: Mobile & Tablet — all cards identical font sizes ── */
        @media (max-width: 1024px) {
          .tm-quote-mark,
          .tm-quote-mark-dynamic {
            font-size: 1.2rem !important;
          }
          .tm-quote-text,
          .tm-quote-dynamic {
            font-size: var(--step--1) !important;
          }
          .tm-avatar,
          .tm-initials-dynamic {
            width: 28px !important;
            height: 28px !important;
            font-size: var(--step--2) !important;
          }
          .tm-name,
          .tm-name-dynamic {
            font-size: var(--step--1) !important;
          }
          .tm-role,
          .tm-role-dynamic {
            font-size: var(--step--2) !important;
          }
        }

        /* ── Responsive: Mobile only — tighter padding ── */
        @media (max-width: 639px) {
          .tm-card,
          .tm-card-mid {
            padding: var(--space-m) var(--space-s);
          }
        }
      `}</style>

      <section ref={sectionRef} className="tm-section">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* ── Header ── */}
          <div
            data-reveal
            data-delay="0"
            style={{
              textAlign: "center",
              maxWidth: 680,
              margin: "0 auto clamp(32px, 6vw, 64px)",
            }}
          >
            <div className="tm-eyebrow flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block" />
              Real Reviews
            </div>
            <h2 className="tm-heading">
              What Birmingham homeowners say about our{" "}
              <span style={{ color: "#2563eb" }}>cleaning service.</span>
            </h2>
            <p className="tm-sub">
              Don't take our word for it — hear from homeowners across London,
              Surrey and Birmingham who trust us to protect their properties.
              Every review is from a verified customer.
            </p>
          </div>

          {/* ── Cards Grid ── */}
          <div className="testimonials-grid">
            {/* Big Left Card */}
            <div
              className="tm-card"
              data-reveal
              data-delay="80"
              style={{ minHeight: 550 }}
            >
              <div className="tm-quote-mark">&ldquo;</div>
              <p className="tm-quote-text">{BIG.quote}</p>
              <div className="tm-divider" />
              <div className="tm-author-row">
                <div className="tm-avatar">{BIG.initials}</div>
                <div>
                  <div className="tm-name">{BIG.name}</div>
                  <div className="tm-role">{BIG.role}</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="testimonials-right-col">
              {/* Mid Card */}
              <div
                className="tm-card-mid"
                data-reveal
                data-delay="140"
                style={{ minHeight: 260 }}
              >
                <div className="tm-quote-mark">&ldquo;</div>
                <p className="tm-quote-text">{MID.quote}</p>
                <div className="tm-divider" />
                <div className="tm-author-row">
                  <div className="tm-avatar">{MID.initials}</div>
                  <div>
                    <div className="tm-name">{MID.name}</div>
                    <div className="tm-role">{MID.role}</div>
                  </div>
                </div>
              </div>

              {/* Animated Cards Row */}
              <div data-reveal data-delay="200" className="animated-cards-row">
                <div ref={slotARef} className="tm-slot" />
                <div ref={slotBRef} className="tm-slot" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

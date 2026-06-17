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

function Stars({ size = 13 }: { size?: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#f59e0b"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

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
    <div style="font-family:Georgia,serif;font-size:22px;color:${qcolor};line-height:0.8;margin-bottom:10px">&ldquo;</div>
    <p style="font-size:12.5px;color:${qtext};line-height:1.65;margin:0 0 14px;flex:1">${item.quote}</p>
    <div style="height:1px;background:${divclr};margin-bottom:12px"></div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="width:28px;height:28px;border-radius:50%;background:${inibg};display:flex;align-items:center;justify-content:center;font-family:'Inter Tight',sans-serif;font-size:10px;font-weight:700;color:${iniclr};flex-shrink:0">${item.initials}</div>
      <div>
        <div style="font-family:'Inter Tight',sans-serif;font-size:11.5px;font-weight:700;color:${nameclr}">${item.name}</div>
        <div style="font-size:10.5px;color:${roleclr}">${item.role}</div>
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
  el.style.borderRadius = "16px";
  el.style.padding = "22px 20px";
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
  const slotH = useRef(220); // stable fixed height — no font-load race
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

    // position current card absolutely (individual properties, no cssText +=)
    cur.style.position = "absolute";
    cur.style.inset = "0";

    // position next card off-screen
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

  // ── Card auto-rotation (unchanged) ──
  useEffect(() => {
    const slotA = slotARef.current;
    const slotB = slotBRef.current;
    if (!slotA || !slotB) return;

    const h = slotH.current;

    // lock slot containers to fixed height
    slotA.style.height = `${h}px`;
    slotB.style.height = `${h}px`;

    // insert first cards with explicit individual style props
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

    // start intervals — stored in refs so cleanup always reaches them
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

  // ── Scroll-triggered reveal (same pattern as AboutSection) ──
  // Safe to mutate the DOM directly here: nothing in this component holds
  // React state that re-renders and recomputes these elements' className,
  // so there's no risk of the class getting overwritten like in the FAQ fix.
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
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes tmOutL { from{transform:translateX(0);opacity:1}    to{transform:translateX(-108%);opacity:0} }
        @keyframes tmInR  { from{transform:translateX(108%);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes tmOutU { from{transform:translateY(0);opacity:1}    to{transform:translateY(-108%);opacity:0} }
        @keyframes tmInB  { from{transform:translateY(108%);opacity:0} to{transform:translateY(0);opacity:1} }

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
      `}</style>

      <section
        ref={sectionRef}
        style={{
          background: "#f8f9fc",
          fontFamily: "'Inter', sans-serif",
          padding: "96px 40px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div
            data-reveal
            data-delay="0"
            style={{
              textAlign: "center",
              maxWidth: 680,
              margin: "0 auto 64px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#2563eb",
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#2563eb",
                }}
              />
              Real Reviews
            </div>
            <h2
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 500,
                color: "#081a3d",
                lineHeight: 1.05,
                letterSpacing: -1.5,
                margin: "0 0 20px",
              }}
            >
              What our customers
              <br />
              really <span style={{ color: "#2563eb" }}>think.</span>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#6b7a99",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Don't take our word for it — hear from homeowners across London,
              Surrey and Birmingham who trust us to protect their properties.
              Every review is from a verified customer.
            </p>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: 16,
              alignItems: "stretch",
            }}
          >
            {/* Big left card */}
            <div
              data-reveal
              data-delay="80"
              style={{
                background: "#ffffff",
                border: "1px solid #e4e9f4",
                borderRadius: 20,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 52,
                  color: "#2563eb",
                  lineHeight: 0.8,
                  marginBottom: 20,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "#334155",
                  lineHeight: 1.8,
                  flex: 1,
                  margin: "0 0 28px",
                }}
              >
                {BIG.quote}
              </p>
              <div
                style={{ height: 1, background: "#e4e9f4", marginBottom: 22 }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#eff4ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#2563eb",
                    flexShrink: 0,
                  }}
                >
                  {BIG.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#081a3d",
                    }}
                  >
                    {BIG.name}
                  </div>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 1 }}>
                    {BIG.role}
                  </div>
                </div>
                <Stars size={13} />
              </div>
            </div>

            {/* Right column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Mid card */}
              <div
                data-reveal
                data-delay="140"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4e9f4",
                  borderRadius: 20,
                  padding: "28px 26px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 34,
                    color: "#2563eb",
                    lineHeight: 0.8,
                    marginBottom: 14,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#334155",
                    lineHeight: 1.75,
                    margin: "0 0 20px",
                    flex: 1,
                  }}
                >
                  {MID.quote}
                </p>
                <div
                  style={{ height: 1, background: "#e4e9f4", marginBottom: 16 }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: "#eff4ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#2563eb",
                      flexShrink: 0,
                    }}
                  >
                    {MID.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#081a3d",
                      }}
                    >
                      {MID.name}
                    </div>
                    <div
                      style={{ fontSize: 11, color: "#94a3b8", marginTop: 1 }}
                    >
                      {MID.role}
                    </div>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <Stars size={11} />
                  </div>
                </div>
              </div>

              {/* Animated bottom row */}
              <div
                data-reveal
                data-delay="200"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <div
                  ref={slotARef}
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: "#f8f9fc",
                  }}
                />
                <div
                  ref={slotBRef}
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: "#f8f9fc",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

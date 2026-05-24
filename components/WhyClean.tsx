"use client";

const REASONS = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
    title: "Water Damage & Flooding",
    desc: "Blocked gutters overflow onto walls and foundations, causing damp, cracks and structural repairs that run into thousands.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
        />
      </svg>
    ),
    title: "Fascia & Soffit Rot",
    desc: "Standing water saturates wooden fascia boards, leading to rot and full board replacement — a costly and entirely avoidable fix.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
    title: "Damp & Indoor Mould",
    desc: "Overflowing gutters drive water into walls and ceilings, creating persistent damp patches and mould that harms your family's health.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.309 48.309 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
    title: "Pest Nesting",
    desc: "Debris-filled gutters attract birds, insects and rodents — causing further blockages, hygiene problems and ongoing property damage.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    title: "Foundation Erosion",
    desc: "Uncontrolled water runoff saturates the ground around your property, slowly undermining foundations and causing subsidence over time.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Costly Emergency Repairs",
    desc: "Small blockages left untreated become burst joints and collapsed gutters — a £90 clean today prevents a four-figure bill tomorrow.",
  },
];

export default function WhyCleanSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;600;700;800&display=swap');
        .wc-body    { font-family: 'Inter', sans-serif; }
        .wc-heading { font-family: 'Manrope', sans-serif; }

        .wc-card {
          background: #0d2257;
          border-radius: 16px;
          padding: 36px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          cursor: default;
          transition: background 0.3s ease;
        }
        .wc-card:hover { background: #FFF265; }

        .wc-card .wc-icon  { color: #ffffff; transition: color 0.3s ease; }
        .wc-card:hover .wc-icon  { color: #0d2257; }

        .wc-card .wc-title {
          font-family: 'Manrope', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.2px;
          transition: color 0.3s ease;
        }
        .wc-card:hover .wc-title { color: #0d2257; }

        .wc-card .wc-desc {
          font-size: 13.5px;
          line-height: 1.7;
          color: #94a8cc;
          transition: color 0.3s ease;
        }
        .wc-card:hover .wc-desc { color: #081a3d; }
      `}</style>

      <section className="wc-body bg-[#f8f9ff] py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* ── Header ── */}
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
              Don't Wait Until It's Too Late
            </p>
            <h2 className="wc-heading text-[clamp(32px,4.5vw,50px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-5">
              What Happens When You <br />
              <span className="text-blue-600">Neglect</span> Your Gutters
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
              Blocked or damaged gutters don't just look bad — they silently
              cause serious, expensive damage to your home. Here's what
              unchecked gutters lead to.
            </p>
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REASONS.map((r) => (
              <div key={r.title} className="wc-card">
                <div className="wc-icon">{r.icon}</div>
                <div>
                  <h3 className="wc-title mb-2">{r.title}</h3>
                  <p className="wc-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

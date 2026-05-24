"use client";

const CARDS = [
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "13+ Years Experience",
    desc: "Founded in 2010, we've built a trusted reputation across Birmingham and surrounding areas through consistent quality and customer-first service.",
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
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "Specialist Equipment",
    desc: "We use industry-leading tools and techniques to safely clean every gutter type — from standard residential systems to complex commercial installations.",
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Complete Property Care",
    desc: "From gutter and roof cleaning to pressure washing and window care — we protect your property's appearance and value all year round.",
  },
];

export default function AboutSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;600;700;800&display=swap');
        .about-body    { font-family: 'Inter', sans-serif; }
        .about-heading { font-family: 'Manrope', sans-serif; }

        .about-card {
          background: #0d2257;
          border-radius: 16px;
          padding: 36px 28px 32px;
          
          display: flex;
          flex-direction: column;
          gap: 40px;
          cursor: default;
          min-height: 280px;
          transition: background 0.3s ease;
        }
        .about-card:hover { background: #FFF265; }

        .about-card .card-icon  { color: #ffffff; transition: color 0.3s ease; }
        .about-card:hover .card-icon  { color: #0d2257; }

        .about-card .card-title { color: #ffffff; transition: color 0.3s ease; }
        .about-card:hover .card-title { color: #0d2257; }

        .about-card .card-desc {
          color: #94a8cc;
          font-size: 13.5px;
          line-height: 1.7;
          margin-top: 8px;
          transition: color 0.3s ease;
        }
        .about-card:hover .card-desc { color: #081a3d; }
      `}</style>

      <section className="about-body bg-white py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* ── Header ── */}
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-[0.22em] mb-4">
              About Us
            </p>
            <h2 className="about-heading text-[clamp(32px,4.5vw,50px)] font-extrabold text-[#0d2257] leading-tight tracking-tight mb-5">
              Trusted Gutter & Property Cleaning
              <br />
              Since <span className="text-blue-600">2010</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
              We protect Birmingham homes and businesses from costly water
              damage with expert gutter cleaning, roof maintenance, and full
              property care — delivered by a team that takes pride in every job.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARDS.map((card) => (
              <div key={card.title} className="about-card">
                <div className="card-icon">{card.icon}</div>
                <div>
                  <h3 className="about-heading card-title text-[20px] font-extrabold leading-snug tracking-[-0.3px]">
                    {card.title}
                  </h3>
                  <p className="card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

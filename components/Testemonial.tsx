"use client";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    location: "Birmingham",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
    quote:
      "Al Grey's completely transformed our clogged gutters. Their team was professional, efficient and left no mess whatsoever. We've signed up for their regular maintenance contract — wouldn't use anyone else.",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    location: "Surrey",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
    quote:
      "Called them on a Friday morning about a badly blocked downpipe causing water to pour down my wall. They were there by 2pm the same day. Brilliant service and very fairly priced. Highly recommend.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    location: "London",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
    quote:
      "Used them for a full roof and gutter clean on our Victorian terrace. The before and after photos were incredible — you could really see the difference. Polite, punctual and great value for money.",
    rating: 5,
  },
  {
    name: "David Clarke",
    location: "Birmingham",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
    quote:
      "As a landlord with multiple properties, I needed a reliable team I could trust. Al Grey's handle all my properties now — always on time, always thorough, and the tenants never complain. Perfect.",
    rating: 5,
  },
  {
    name: "Rachel Foster",
    location: "Croydon",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
    quote:
      "I was nervous about someone going on the roof but they were so professional and reassuring. Explained everything they were doing and showed me the photos after. Will definitely be booking again.",
    rating: 5,
  },
  {
    name: "James Patel",
    location: "Guildford",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1",
    quote:
      "Fast quote, competitive price, and the job was done perfectly first time. The gutters look brand new. They also spotted a small crack in a joint and fixed it on the spot — really went above and beyond.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;600;700;800&display=swap');
        .tm-body    { font-family: 'Inter', sans-serif; }
        .tm-heading { font-family: 'Manrope', sans-serif; }

        .tm-card {
          background: #0d2257;
          border-radius: 18px;
          padding: 32px 28px;
          box-shadow: 0 4px 24px rgba(0,0,0,.25);
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: transform .25s ease, box-shadow .25s ease;
          border: 1px solid #1a2f6e;
        }
        .tm-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,.4);
        }

        .tm-quote-icon {
          font-size: 64px;
          line-height: 1;
          color: #2563eb;
          opacity: 0.15;
          font-family: Georgia, serif;
          margin-bottom: -16px;
          margin-top: -8px;
        }
      `}</style>

      <section className="tm-body bg-[#081a3d] py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 text-[#FFF265] font-semibold text-xs uppercase tracking-[0.22em] mb-4">
              Real Reviews
            </p>
            <h2 className="tm-heading text-[clamp(30px,4.5vw,48px)] font-extrabold text-white leading-tight tracking-tight mb-4">
              What Our <span className="text-blue-600">Customers</span> Say
            </h2>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-xl mx-auto">
              Don't take our word for it — hear from homeowners across London,
              Surrey and Birmingham who trust us to protect their properties.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="tm-card">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-[14px] leading-relaxed flex-1">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-[#1a2f6e]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                    style={{ border: "2px solid #1a2f6e" }}
                  />
                  <div>
                    <p className="tm-heading text-[14px] font-bold text-white">
                      {t.name}
                    </p>
                    <p className="text-slate-500 text-[12.5px]">{t.location}</p>
                  </div>
                  {/* Verified badge */}
                  <div className="ml-auto flex items-center gap-1 text-[11px] font-semibold text-blue-400">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom trust bar */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            {[
              { num: "2,000+", label: "Happy Homeowners" },
              { num: "4.9/5", label: "Average Rating" },
              { num: "13+", label: "Years of Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1"
              >
                <span className="tm-heading text-[32px] font-extrabold text-white tracking-tight">
                  {stat.num}
                </span>
                <span className="text-slate-400 text-[13px] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

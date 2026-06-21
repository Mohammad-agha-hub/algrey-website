import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";
import { getPostsCollection } from "@/lib/posts";
import { formatDate, estimateReadTime, makeExcerpt } from "@/lib/blog-helpers";

export const revalidate = 60; // re-fetch from Mongo at most once a minute

/* ═══════════════════════════════════════════════════════════════════
   DESIGN TOKENS — matched to the about / contact / enquiry pages
═══════════════════════════════════════════════════════════════════ */
function BlogStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

      .bl-display { font-family: 'Inter Tight', sans-serif; }
      .bl-body    { font-family: 'Inter', sans-serif; }

      @keyframes bl-fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .bl-anim-1 { animation: bl-fadeUp .6s ease both; }
      .bl-anim-2 { animation: bl-fadeUp .6s .10s ease both; }
      .bl-anim-3 { animation: bl-fadeUp .6s .20s ease both; }
      @media (prefers-reduced-motion: reduce) {
        .bl-anim-1, .bl-anim-2, .bl-anim-3 { animation: none; opacity: 1; transform: none; }
      }

      .bl-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #2563eb;
      }
      .bl-eyebrow .dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #2563eb;
        flex-shrink: 0;
      }

      .bl-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        width: 100%;
        transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease;
      }
      .bl-card:hover {
        border-color: #2563eb;
        box-shadow: 0 20px 48px rgba(13,27,62,.10);
        transform: translateY(-6px);
      }

      .bl-card-thumb {
        position: relative;
        height: 200px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: #f1f5f9;
      }
      .bl-card-thumb img { transition: transform .4s cubic-bezier(0.22,1,0.36,1); }
      .bl-card:hover .bl-card-thumb img { transform: scale(1.06); }
      .bl-card-thumb svg { transition: transform .4s cubic-bezier(0.22,1,0.36,1); }
      .bl-card:hover .bl-card-thumb svg { transform: scale(1.08) rotate(-3deg); }

      .bl-card-badge {
        position: absolute;
        top: 16px;
        left: 16px;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(255,255,255,0.92);
        color: #2563eb;
        font-size: 10.5px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 6px 12px;
        border-radius: 99px;
        backdrop-filter: blur(4px);
      }

      .bl-card-body {
        padding: 24px 24px 26px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .bl-card-meta {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        font-weight: 500;
        color: #94a3b8;
        margin-bottom: 12px;
        flex-wrap: wrap;
      }
      .bl-card-meta .sep {
        width: 3px; height: 3px;
        border-radius: 50%;
        background: #cbd5e1;
        flex-shrink: 0;
      }

      .bl-card-title {
        font-family: 'Inter Tight', sans-serif;
        font-size: 19px;
        font-weight: 600;
        color: #0d1b3e;
        line-height: 1.3;
        letter-spacing: -0.3px;
        margin-bottom: 10px;
        transition: color .2s ease;
      }
      .bl-card:hover .bl-card-title { color: #2563eb; }

      .bl-card-excerpt {
        font-size: 13.5px;
        color: #64748b;
        line-height: 1.65;
        margin-bottom: 18px;
        flex: 1;
      }

      .bl-card-readmore {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 700;
        color: #0d1b3e;
        letter-spacing: 0.02em;
        transition: gap .2s ease, color .2s ease;
      }
      .bl-card:hover .bl-card-readmore { gap: 12px; color: #2563eb; }

      .bl-section-head {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        margin-bottom: 30px;
        text-align:center;
      }

      /* ── Self-centering grid: 1 post centers, 2 posts center as a pair,
           3+ posts fill the row — no per-count layout logic needed ── */
      .bl-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 360px));
        justify-content: center;
        gap: 24px;
      }

      .bl-empty {
        text-align: center;
        padding: 80px 20px;
        color: #64748b;
        font-size: 14.5px;
      }
    `}</style>
  );
}

/* ─────────────────────────────────────────────────── FALLBACK THUMBNAIL */
function CardThumb({ accent }: { accent: string }) {
  return (
    <div
      className="bl-card-thumb"
      style={{
        background: `linear-gradient(135deg, ${accent}1a 0%, ${accent}33 100%)`,
      }}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent}
        strokeWidth={1.4}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12h-9a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5h6.621a1.5 1.5 0 011.06.44l3.122 3.121a1.5 1.5 0 01.44 1.061V18a1.5 1.5 0 01-1.5 1.5h-1.243M9.75 12h3.75M9.75 15h3.75"
        />
      </svg>
    </div>
  );
}

const ACCENTS = ["#2563eb", "#1d4ed8", "#3b82f6", "#0d1b3e"];

/* ─────────────────────────────────────────────────── HEADER */
function HeaderSection() {
  return (
    <section className="bl-body bg-white pb-16 pt-14 lg:pb-20 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="bl-section-head">
          <div className="flex flex-col gap-5 lg:max-w-[55%]">
            <p className="bl-anim-1 flex justify-center bl-eyebrow">
              <span className="dot" />
              Tips, Guides &amp; News
            </p>
            <h1 className="bl-anim-2 bl-display text-[36px] sm:text-[46px] lg:text-[52px] font-medium text-[#0d1b3e] leading-[1.05] tracking-[-1px]">
              The Al Grey&apos;s <span className="text-[#2563eb]">Blog</span>
            </h1>
          </div>
          <p className="bl-anim-3 text-[#64748b] text-[16px] leading-relaxed lg:max-w-[420px]">
            Practical advice on gutter care, window cleaning, pressure washing,
            and keeping your property in top condition all year round.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────── GRID */
async function BlogGridSection() {
  const collection = await getPostsCollection();
  const posts = await collection
    .find({ status: "published" })
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <section
      className="bl-body pb-20 lg:pb-28 px-5 sm:px-8 lg:px-16"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        {posts.length === 0 ? (
          <div className="bl-empty">
            No posts published yet — check back soon.
          </div>
        ) : (
          <div className="bl-grid">
            {posts.map((post, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              const excerpt =
                post.excerpt?.trim() || makeExcerpt(post.content || "");
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bl-card"
                >
                  <div
                    className="bl-card-thumb"
                    style={
                      !post.coverImage
                        ? {
                            background: `linear-gradient(135deg, ${accent}1a 0%, ${accent}33 100%)`,
                          }
                        : undefined
                    }
                  >
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <CardThumb accent={accent} />
                    )}
                    {post.category && (
                      <span className="bl-card-badge">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill={accent}
                        >
                          <circle cx="4" cy="4" r="4" />
                        </svg>
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="bl-card-body">
                    <div className="bl-card-meta">
                      <span>{formatDate(post.createdAt)}</span>
                      <span className="sep" />
                      <span>{estimateReadTime(post.content || "")}</span>
                    </div>
                    <h3 className="bl-card-title">{post.title}</h3>
                    <p className="bl-card-excerpt">{excerpt}</p>
                    <span className="bl-card-readmore">
                      Read Article
                      <svg
                        width="14"
                        height="14"
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
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function BlogPage() {
  return (
    <>
      <BlogStyles />
      <Navbar />
      <HeaderSection />
      <BlogGridSection />
      <CTAAndFooter />
    </>
  );
}

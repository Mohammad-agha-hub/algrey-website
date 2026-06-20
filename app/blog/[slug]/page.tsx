import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import Navbar from "@/components/Navbar";
import CTAAndFooter from "@/components/Footer";
import { getPostsCollection } from "@/lib/posts";
import { formatDate, estimateReadTime, makeExcerpt } from "@/lib/blog-helpers";

export const revalidate = 60;

const BASE_URL = "http://localhost:3000"; // ← matches serviceMetadata.ts, update if that changes

async function getPost(slug: string) {
  const collection = await getPostsCollection();
  return collection.findOne({ slug, status: "published" });
}

/* ─────────────────────────────────────────────────── SEO METADATA */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title =
    post.metaTitle?.trim() || `${post.title} | Al Grey's Cleaning Services`;
  const description =
    post.metaDescription?.trim() ||
    post.excerpt?.trim() ||
    makeExcerpt(post.content || "");
  const keywords = post.metaKeywords?.length ? post.metaKeywords : post.tags;
  const url = `${BASE_URL}/blog/${post.slug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      images: post.coverImage
        ? [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

/* ─────────────────────────────────────────────────── STYLES */
function PostStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

      .bp-display { font-family: 'Inter Tight', sans-serif; }
      .bp-body    { font-family: 'Inter', sans-serif; }

      /* ── flex (not inline-flex) so this is a block-level box that
           always starts its own line and pushes siblings below it ── */
      .bp-back {
        display: flex;
        width: fit-content;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 600;
        color: #64748b;
        transition: color .2s ease, gap .2s ease;
      }
      .bp-back:hover { color: #2563eb; gap: 10px; }

      .bp-eyebrow {
        display: flex;
        width: fit-content;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #2563eb;
      }
      .bp-eyebrow .dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #2563eb;
        flex-shrink: 0;
      }

      .bp-meta {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        font-weight: 500;
        color: #94a3b8;
        flex-wrap: wrap;
      }
      .bp-meta .sep { width: 3px; height: 3px; border-radius: 50%; background: #cbd5e1; }

      .bp-tag {
        display: inline-flex;
        align-items: center;
        background: #eff4ff;
        color: #2563eb;
        font-size: 12px;
        font-weight: 600;
        padding: 5px 12px;
        border-radius: 99px;
      }

      /* ── Article body — styles the raw HTML from the rich text editor ── */
      .bp-prose {
        color: #334155;
        font-size: 16.5px;
        line-height: 1.8;
      }
      .bp-prose h2 {
        font-family: 'Inter Tight', sans-serif;
        font-size: 28px;
        font-weight: 600;
        color: #0d1b3e;
        letter-spacing: -0.4px;
        margin: 40px 0 16px;
        line-height: 1.25;
      }
      .bp-prose h3 {
        font-family: 'Inter Tight', sans-serif;
        font-size: 22px;
        font-weight: 600;
        color: #0d1b3e;
        letter-spacing: -0.3px;
        margin: 32px 0 14px;
        line-height: 1.3;
      }
      .bp-prose p { margin: 0 0 20px; }
      .bp-prose ul, .bp-prose ol { margin: 0 0 20px; padding-left: 24px; }
      .bp-prose li { margin-bottom: 8px; }
      .bp-prose a { color: #2563eb; text-decoration: underline; text-decoration-color: #bfdbfe; }
      .bp-prose a:hover { text-decoration-color: #2563eb; }
      .bp-prose blockquote {
        border-left: 3px solid #2563eb;
        background: #f8fafc;
        padding: 16px 20px;
        margin: 24px 0;
        border-radius: 0 10px 10px 0;
        color: #475569;
        font-style: italic;
      }
      .bp-prose img {
        width: 100%;
        border-radius: 14px;
        margin: 28px 0;
      }
      .bp-prose strong { color: #0d1b3e; font-weight: 700; }
      .bp-prose hr { border: none; border-top: 1px solid #e2e8f0; margin: 36px 0; }
    `}</style>
  );
}

/* ─────────────────────────────────────────────────── PAGE */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const cleanContent = DOMPurify.sanitize(post.content || "");
  const url = `${BASE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description:
      post.metaDescription || post.excerpt || makeExcerpt(post.content || ""),
    image: post.coverImage ? [post.coverImage] : undefined,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: "Al Grey's Cleaning Services" },
    publisher: {
      "@type": "Organization",
      name: "Al Grey's Cleaning Services",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <PostStyles />
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <article className="bp-body bg-white">
        {/* ── Header ── */}
        <header className="pt-14 pb-10  lg:pb-14 px-5 sm:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="bp-back mb-8">
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
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to Blog
            </Link>

            {post.category && (
              <p className="bp-eyebrow mb-4">
                <span className="dot" />
                {post.category}
              </p>
            )}

            <h1 className="bp-display text-[32px] sm:text-[42px] lg:text-[46px] font-medium text-[#0d1b3e] leading-[1.12] tracking-[-1px] mb-5">
              {post.title}
            </h1>

            <div className="bp-meta">
              <span>{formatDate(post.createdAt)}</span>
              <span className="sep" />
              <span>{estimateReadTime(post.content || "")}</span>
            </div>
          </div>
        </header>

        {/* ── Cover image ── */}
        {post.coverImage && (
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 mb-12">
            <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[460px] rounded-2xl overflow-hidden shadow-[0_20px_48px_rgba(13,27,62,0.10)]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center top" }}
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        )}

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-16 pb-16">
          <div
            className="bp-prose"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />

          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-[#e2e8f0]">
              {post.tags.map((tag) => (
                <span key={tag} className="bp-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      <CTAAndFooter />
    </>
  );
}

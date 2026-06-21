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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

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
      /* ── Base Typography ── */
      .bp-display { font-family: var(--font-inter-tight), sans-serif; }
      .bp-body    { font-family: var(--font-inter), sans-serif; }

      /* ── Back Link ── */
      .bp-back {
        display: flex;
        width: fit-content;
        align-items: center;
        gap: var(--space-3xs);
        font-size: var(--step--1);
        font-weight: var(--fw-semibold);
        color: #64748b;
        line-height: var(--leading-fine);
        transition: color .2s ease, gap .2s ease;
        text-decoration: none;
      }
      .bp-back:hover { color: #2563eb; gap: var(--space-2xs); }

      /* ── Eyebrow ── */
      .bp-eyebrow {
        display: flex;
        width: fit-content;
        align-items: center;
        gap: var(--space-2xs);
        font-size: var(--step--1);
        font-weight: var(--fw-semibold);
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #2563eb;
        line-height: var(--leading-fine);
        margin-bottom: var(--space-s);
      }

      /* ── Meta ── */
      .bp-meta {
        display: flex;
        align-items: center;
        gap: var(--space-2xs);
        font-size: var(--step--1);
        font-weight: var(--fw-medium);
        color: #94a3b8;
        flex-wrap: wrap;
        line-height: var(--leading-fine);
      }
      .bp-meta .sep {
        width: 3px; height: 3px;
        border-radius: var(--radius-full);
        background: #cbd5e1;
        flex-shrink: 0;
      }

      /* ── Post Heading ── */
      .bp-heading {
        font-family: var(--font-inter-tight), sans-serif;
        font-size: var(--step-5);
        font-weight: var(--fw-medium);
        color: #0d1b3e;
        line-height: var(--leading-tight);
        letter-spacing: -0.02em;
        margin-bottom: var(--space-s);
      }

      @media (min-width: 1024px) {
        .bp-heading {
          font-size: clamp(2.2rem, 3.5vw, 2.875rem);
        }
      }

      /* ── Tag ── */
      .bp-tag {
        display: inline-flex;
        align-items: center;
        background: #eff4ff;
        color: #2563eb;
        font-size: var(--step--1);
        font-weight: var(--fw-semibold);
        padding: var(--space-3xs) var(--space-xs);
        border-radius: var(--radius-full);
        line-height: var(--leading-fine);
      }

      /* ── Article Body (prose) ── */
      .bp-prose {
        color: #334155;
        font-size: var(--step-0);
        line-height: 1.8;
      }
      .bp-prose h2 {
        font-family: var(--font-inter-tight), sans-serif;
        font-size: var(--step-3);
        font-weight: var(--fw-semibold);
        color: #0d1b3e;
        letter-spacing: -0.02em;
        margin: var(--space-2xl) 0 var(--space-s);
        line-height: var(--leading-tight);
      }
      .bp-prose h3 {
        font-family: var(--font-inter-tight), sans-serif;
        font-size: var(--step-2);
        font-weight: var(--fw-semibold);
        color: #0d1b3e;
        letter-spacing: -0.01em;
        margin: var(--space-xl) 0 var(--space-s);
        line-height: var(--leading-tight);
      }
      .bp-prose p { margin: 0 0 var(--space-s); }
      .bp-prose ul, .bp-prose ol { margin: 0 0 var(--space-s); padding-left: var(--space-m); }
      .bp-prose li { margin-bottom: var(--space-2xs); }
      .bp-prose a { color: #2563eb; text-decoration: underline; text-decoration-color: #bfdbfe; }
      .bp-prose a:hover { text-decoration-color: #2563eb; }
      .bp-prose blockquote {
        border-left: 3px solid #2563eb;
        background: #f8fafc;
        padding: var(--space-s) var(--space-s);
        margin: var(--space-m) 0;
        border-radius: 0 var(--radius-md) var(--radius-md) 0;
        color: #475569;
        font-style: italic;
      }
      .bp-prose img {
        width: 100%;
        border-radius: var(--radius-lg);
        margin: var(--space-l) 0;
      }
      .bp-prose strong { color: #0d1b3e; font-weight: var(--fw-bold); }
      .bp-prose hr { border: none; border-top: 1px solid #e2e8f0; margin: var(--space-xl) 0; }

      /* ── Cover Image ── */
      .bp-cover {
        position: relative;
        width: 100%;
        height: 260px;
        border-radius: var(--radius-2xl);
        overflow: hidden;
        box-shadow: 0 20px 48px rgba(13,27,62,0.10);
      }

      @media (min-width: 640px) {
        .bp-cover { height: 380px; }
      }
      @media (min-width: 1024px) {
        .bp-cover { height: 460px; }
      }

      /* ── Consistent Section Padding ── */
      .bp-section-padding {
        padding-inline: clamp(20px, 5vw, 40px);
      }

      /* ── Responsive ── */
      @media (max-width: 639px) {
        .bp-section-padding {
          padding-inline: var(--space-s);
        }
        .bp-prose {
          font-size: var(--step--1);
        }
      }
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
        <header className="pt-14 pb-10 lg:pb-14 bp-section-padding">
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
              <p className="bp-eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block" />
                {post.category}
              </p>
            )}

            <h1 className="bp-heading">{post.title}</h1>

            <div className="bp-meta">
              <span>{formatDate(post.createdAt)}</span>
              <span className="sep" />
              <span>{estimateReadTime(post.content || "")}</span>
            </div>
          </div>
        </header>

        {/* ── Cover Image ── */}
        {post.coverImage && (
          <div className="max-w-5xl mx-auto bp-section-padding mb-12">
            <div className="bp-cover">
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
        <div className="max-w-3xl mx-auto bp-section-padding pb-16">
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

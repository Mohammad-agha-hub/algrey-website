import Link from "next/link";
import { getPostsCollection } from "@/lib/posts";
import PostsTable from "./PostsTable";

export const dynamic = "force-dynamic";

export default async function AdminBlogListPage() {
  const collection = await getPostsCollection();
  const posts = await collection.find().sort({ createdAt: -1 }).toArray();

  const serialisable = posts.map((p) => ({
    ...p,
    _id: p._id?.toString() ?? "",
  }));

  const publishedCount = serialisable.filter(
    (p) => p.status === "published",
  ).length;
  const draftCount = serialisable.length - publishedCount;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
        <div>
          <p className="adm-page-eyebrow">
            <span className="adm-page-eyebrow-dot" />
            Content
          </p>
          <h1 className="adm-page-title">Blog Posts</h1>
          <p className="adm-page-subtitle">
            {serialisable.length} post{serialisable.length === 1 ? "" : "s"} ·{" "}
            {publishedCount} published · {draftCount} draft
            {draftCount === 1 ? "" : "s"}
          </p>
        </div>

        <Link href="/admin/blog/new" className="adm-btn-primary">
          New Post
          <span className="adm-btn-primary-icon">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span>
        </Link>
      </div>

      {serialisable.length === 0 ? (
        <div className="adm-card">
          <div className="adm-empty">
            <div className="adm-empty-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            </div>
            <p className="adm-label">No posts yet</p>
            <p className="adm-hint max-w-[280px]">
              Create your first article and it will show up here.
            </p>
            <Link href="/admin/blog/new" className="adm-btn-primary mt-2">
              Create First Post
              <span className="adm-btn-primary-icon">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <PostsTable posts={serialisable} />
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PostRow {
  _id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  category?: string;
  updatedAt: string;
}

export default function PostsTable({ posts }: { posts: PostRow[] }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      router.refresh();
    } catch {
      alert("Failed to delete post. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="adm-card overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-left">
            <th className="adm-th">Title</th>
            <th className="adm-th">Category</th>
            <th className="adm-th">Status</th>
            <th className="adm-th">Updated</th>
            <th className="adm-th text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id} className="adm-tr">
              <td className="adm-td">
                <Link
                  href={`/admin/blog/${post._id}/edit`}
                  className="adm-td-title"
                >
                  {post.title}
                </Link>
              </td>
              <td className="adm-td adm-td-muted">{post.category || "—"}</td>
              <td className="adm-td">
                <span
                  className={`adm-badge ${
                    post.status === "published"
                      ? "adm-badge-published"
                      : "adm-badge-draft"
                  }`}
                >
                  <span className="adm-badge-dot" />
                  {post.status}
                </span>
              </td>
              <td className="adm-td adm-td-muted">
                {new Date(post.updatedAt).toLocaleDateString()}
              </td>
              <td className="adm-td">
                <div className="flex items-center justify-end gap-1">
                  <Link
                    href={`/admin/blog/${post._id}/edit`}
                    className="adm-row-action"
                    aria-label={`Edit ${post.title}`}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => handleDelete(post._id, post.title)}
                    disabled={deletingId === post._id}
                    className="adm-row-action adm-row-action-danger"
                    aria-label={`Delete ${post.title}`}
                  >
                    {deletingId === post._id ? (
                      <svg
                        className="adm-spinner"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeDasharray="40 100"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                      </svg>
                    )}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

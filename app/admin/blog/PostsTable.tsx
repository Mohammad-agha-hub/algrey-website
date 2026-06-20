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
    <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#f8fafc] text-left text-[#64748b] text-xs uppercase tracking-wide">
            <th className="px-5 py-3 font-semibold">Title</th>
            <th className="px-5 py-3 font-semibold">Category</th>
            <th className="px-5 py-3 font-semibold">Status</th>
            <th className="px-5 py-3 font-semibold">Updated</th>
            <th className="px-5 py-3 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id} className="border-t border-[#e2e8f0]">
              <td className="px-5 py-3 text-[#0d1b3e] font-medium">{post.title}</td>
              <td className="px-5 py-3 text-[#64748b]">{post.category || "—"}</td>
              <td className="px-5 py-3">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                    post.status === "published"
                      ? "bg-green-50 text-green-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {post.status}
                </span>
              </td>
              <td className="px-5 py-3 text-[#64748b]">
                {new Date(post.updatedAt).toLocaleDateString()}
              </td>
              <td className="px-5 py-3 text-right">
                <div className="inline-flex items-center gap-3">
                  <Link
                    href={`/admin/blog/${post._id}/edit`}
                    className="text-[#2563eb] hover:text-[#1d4ed8] font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post._id, post.title)}
                    disabled={deletingId === post._id}
                    className="text-red-600 hover:text-red-700 font-medium disabled:opacity-50"
                  >
                    {deletingId === post._id ? "Deleting…" : "Delete"}
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

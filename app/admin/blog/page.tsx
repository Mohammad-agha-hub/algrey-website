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

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[#0d1b3e] text-2xl font-semibold">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          + New Post
        </Link>
      </div>

      {serialisable.length === 0 ? (
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-10 text-center text-[#64748b] text-sm">
          No posts yet. Create your first one.
        </div>
      ) : (
        <PostsTable posts={serialisable} />
      )}
    </div>
  );
}

import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";
import { getPostsCollection, isValidObjectId, toObjectId } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!isValidObjectId(id)) notFound();

  const collection = await getPostsCollection();
  const post = await collection.findOne({ _id: toObjectId(id) });

  if (!post) notFound();

  return (
    <div>
      <h1 className="text-[#0d1b3e] text-2xl font-semibold mb-6 max-w-4xl mx-auto">
        Edit Post
      </h1>
      <PostForm
        mode="edit"
        initialData={{
          _id: post._id!.toString(),
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          coverImage: post.coverImage,
          category: post.category,
          tags: post.tags,
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
          metaKeywords: post.metaKeywords,
          status: post.status,
        }}
      />
    </div>
  );
}

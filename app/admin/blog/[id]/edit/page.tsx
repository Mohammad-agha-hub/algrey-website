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
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <p className="adm-page-eyebrow">
          <span className="adm-page-eyebrow-dot" />
          Post Editor
        </p>
        <h1 className="adm-page-title">Edit Post</h1>
        <p className="adm-page-subtitle">Update "{post.title}".</p>
      </div>
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

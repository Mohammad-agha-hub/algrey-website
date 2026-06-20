import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-[#0d1b3e] text-2xl font-semibold mb-6 max-w-4xl mx-auto">
        New Post
      </h1>
      <PostForm mode="create" />
    </div>
  );
}

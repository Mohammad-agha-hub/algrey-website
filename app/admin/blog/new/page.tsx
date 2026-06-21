import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <p className="adm-page-eyebrow">
          <span className="adm-page-eyebrow-dot" />
          Post Editor
        </p>
        <h1 className="adm-page-title">New Post</h1>
        <p className="adm-page-subtitle">
          Draft a new article for the Algrey blog.
        </p>
      </div>
      <PostForm mode="create" />
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";

export interface PostFormData {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  status: "draft" | "published";
}

const EMPTY: PostFormData = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  category: "",
  tags: [],
  metaTitle: "",
  metaDescription: "",
  metaKeywords: [],
  status: "draft",
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function PostForm({
  mode,
  initialData,
}: {
  mode: "create" | "edit";
  initialData?: PostFormData;
}) {
  const router = useRouter();
  const [form, setForm] = useState<PostFormData>(initialData ?? EMPTY);
  const [slugTouched, setSlugTouched] = useState(mode === "edit");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof PostFormData>(key: K, value: PostFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleTitleChange = (value: string) => {
    set("title", value);
    if (!slugTouched) set("slug", slugify(value));
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingCover(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        set("coverImage", data.url);
      } else {
        setError(data.error || "Cover image upload failed");
      }
    } catch {
      setError("Cover image upload failed. Please try again.");
    } finally {
      setUploadingCover(false);
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }

    setSaving(true);
    try {
      const url =
        mode === "create" ? "/api/admin/posts" : `/api/admin/posts/${form._id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Failed to save post.");
        setSaving(false);
        return;
      }

      router.push("/admin/blog");
      router.refresh();
    } catch {
      setError("Failed to save post. Please try again.");
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex flex-col gap-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      {/* ── Main content ── */}
      <section className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-5">
        <h2 className="text-[#0d1b3e] font-semibold text-sm uppercase tracking-wide">
          Post Content
        </h2>

        <Field label="Title *">
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="5 Warning Signs Your Gutters Need Cleaning"
            className="input"
          />
        </Field>

        <Field label="Slug" hint="Used in the URL — auto-generated from the title, editable.">
          <input
            type="text"
            value={form.slug}
            onChange={(e) => {
              setSlugTouched(true);
              set("slug", slugify(e.target.value));
            }}
            placeholder="5-warning-signs-your-gutters-need-cleaning"
            className="input font-mono text-[13px]"
          />
        </Field>

        <Field label="Excerpt" hint="Short summary shown on the blog listing page.">
          <textarea
            value={form.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
            rows={3}
            className="input resize-none"
          />
        </Field>

        <Field label="Cover Image">
          <div className="flex items-center gap-4">
            {form.coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={form.coverImage}
                alt="Cover preview"
                className="w-28 h-20 object-cover rounded-lg border border-[#e2e8f0]"
              />
            )}
            <label className="cursor-pointer text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8]">
              {uploadingCover ? "Uploading…" : form.coverImage ? "Replace image" : "Upload image"}
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverUpload}
                className="hidden"
                disabled={uploadingCover}
              />
            </label>
          </div>
        </Field>

        <Field label="Content">
          <RichTextEditor value={form.content} onChange={(html) => set("content", html)} />
        </Field>
      </section>

      {/* ── Organisation ── */}
      <section className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-5">
        <h2 className="text-[#0d1b3e] font-semibold text-sm uppercase tracking-wide">
          Organisation
        </h2>

        <Field label="Category">
          <input
            type="text"
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            placeholder="Gutter Care"
            className="input"
          />
        </Field>

        <Field label="Tags" hint="Comma-separated.">
          <input
            type="text"
            value={form.tags.join(", ")}
            onChange={(e) =>
              set(
                "tags",
                e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
              )
            }
            placeholder="gutters, maintenance, autumn"
            className="input"
          />
        </Field>

        <Field label="Status">
          <select
            value={form.status}
            onChange={(e) => set("status", e.target.value as "draft" | "published")}
            className="input"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </Field>
      </section>

      {/* ── SEO ── */}
      <section className="bg-white border border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-5">
        <h2 className="text-[#0d1b3e] font-semibold text-sm uppercase tracking-wide">
          SEO
        </h2>

        <Field label="Meta Title" hint="Shown in search results. Falls back to the post title if left blank.">
          <input
            type="text"
            value={form.metaTitle}
            onChange={(e) => set("metaTitle", e.target.value)}
            placeholder="5 Warning Signs Your Gutters Need Cleaning | Al Grey's"
            className="input"
          />
        </Field>

        <Field label="Meta Description" hint="Shown under the title in search results. Aim for 150–160 characters.">
          <textarea
            value={form.metaDescription}
            onChange={(e) => set("metaDescription", e.target.value)}
            rows={2}
            className="input resize-none"
          />
        </Field>

        <Field label="Keywords" hint="Comma-separated. Used for internal targeting, not a Google ranking factor anymore, but still useful to track intent.">
          <input
            type="text"
            value={form.metaKeywords.join(", ")}
            onChange={(e) =>
              set(
                "metaKeywords",
                e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
              )
            }
            placeholder="gutter cleaning signs, blocked gutters, gutter maintenance"
            className="input"
          />
        </Field>
      </section>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="bg-[#2563eb] hover:bg-[#1d4ed8] disabled:opacity-60 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
        >
          {saving ? "Saving…" : mode === "create" ? "Create Post" : "Save Changes"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/blog")}
          className="text-[#64748b] hover:text-[#0d1b3e] text-sm font-medium"
        >
          Cancel
        </button>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 14px;
          color: #0d1b3e;
        }
        .input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#0d1b3e] text-sm font-medium">{label}</label>
      {children}
      {hint && <p className="text-[#94a3b8] text-xs">{hint}</p>}
    </div>
  );
}

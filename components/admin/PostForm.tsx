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
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
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
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto flex flex-col gap-6"
    >
      {error && (
        <div className="adm-error" role="alert">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5" />
            <path d="M12 16h.01" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* ── Main content ── */}
      <section className="adm-card">
        <div className="adm-card-section">
          <p className="adm-card-heading">
            <svg
              width="14"
              height="14"
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
            Post Content
          </p>

          <Field label="Title *">
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="5 Warning Signs Your Gutters Need Cleaning"
              className="adm-input"
            />
          </Field>

          <Field
            label="Slug"
            hint="Used in the URL — auto-generated from the title, editable."
          >
            <input
              type="text"
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                set("slug", slugify(e.target.value));
              }}
              placeholder="5-warning-signs-your-gutters-need-cleaning"
              className="adm-input font-mono text-[13px]"
            />
          </Field>

          <Field
            label="Excerpt"
            hint="Short summary shown on the blog listing page."
          >
            <textarea
              value={form.excerpt}
              onChange={(e) => set("excerpt", e.target.value)}
              rows={3}
              className="adm-input"
            />
          </Field>

          <Field label="Cover Image">
            <div className="adm-upload-zone">
              {form.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={form.coverImage}
                  alt="Cover preview"
                  className="w-24 h-16 object-cover rounded-lg border border-[#e2e8f0] shrink-0"
                />
              ) : (
                <div className="adm-upload-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="M17 8l-5-5-5 5" />
                    <path d="M12 3v12" />
                  </svg>
                </div>
              )}
              <div className="flex flex-col gap-1 min-w-0">
                <label className="cursor-pointer text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] w-fit">
                  {uploadingCover
                    ? "Uploading…"
                    : form.coverImage
                      ? "Replace image"
                      : "Upload an image"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverUpload}
                    className="hidden"
                    disabled={uploadingCover}
                  />
                </label>
                <p className="adm-hint">
                  PNG, JPG or WebP — used on the listing and post header.
                </p>
              </div>
            </div>
          </Field>

          <Field label="Content">
            <RichTextEditor
              value={form.content}
              onChange={(html) => set("content", html)}
            />
          </Field>
        </div>
      </section>

      {/* ── Organisation ── */}
      <section className="adm-card">
        <div className="adm-card-section">
          <p className="adm-card-heading">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24L4 3a1 1 0 0 0-1 1l.24 5.59a2 2 0 0 0 .59 1.41l9.58 9.58a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.82Z" />
              <path d="M7.5 7.5h.01" />
            </svg>
            Organisation
          </p>

          <Field label="Category">
            <input
              type="text"
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
              placeholder="Gutter Care"
              className="adm-input"
            />
          </Field>

          <Field label="Tags" hint="Comma-separated.">
            <input
              type="text"
              value={form.tags.join(", ")}
              onChange={(e) =>
                set(
                  "tags",
                  e.target.value
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean),
                )
              }
              placeholder="gutters, maintenance, autumn"
              className="adm-input"
            />
          </Field>

          <Field label="Status">
            <div
              className="adm-segmented"
              role="radiogroup"
              aria-label="Post status"
            >
              <button
                type="button"
                role="radio"
                aria-checked={form.status === "draft"}
                onClick={() => set("status", "draft")}
                className={`adm-segmented-btn ${form.status === "draft" ? "is-active" : ""}`}
              >
                <span className="adm-segmented-dot draft" />
                Draft
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={form.status === "published"}
                onClick={() => set("status", "published")}
                className={`adm-segmented-btn ${form.status === "published" ? "is-active" : ""}`}
              >
                <span className="adm-segmented-dot published" />
                Published
              </button>
            </div>
          </Field>
        </div>
      </section>

      {/* ── SEO ── */}
      <section className="adm-card">
        <div className="adm-card-section">
          <p className="adm-card-heading">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            SEO
          </p>

          <Field
            label="Meta Title"
            hint="Shown in search results. Falls back to the post title if left blank."
          >
            <input
              type="text"
              value={form.metaTitle}
              onChange={(e) => set("metaTitle", e.target.value)}
              placeholder="5 Warning Signs Your Gutters Need Cleaning | Al Grey's"
              className="adm-input"
            />
          </Field>

          <Field
            label="Meta Description"
            hint="Shown under the title in search results. Aim for 150–160 characters."
          >
            <textarea
              value={form.metaDescription}
              onChange={(e) => set("metaDescription", e.target.value)}
              rows={2}
              className="adm-input"
            />
          </Field>

          <Field
            label="Keywords"
            hint="Comma-separated. Used for internal targeting, not a Google ranking factor anymore, but still useful to track intent."
          >
            <input
              type="text"
              value={form.metaKeywords.join(", ")}
              onChange={(e) =>
                set(
                  "metaKeywords",
                  e.target.value
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean),
                )
              }
              placeholder="gutter cleaning signs, blocked gutters, gutter maintenance"
              className="adm-input"
            />
          </Field>
        </div>
      </section>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={saving} className="adm-btn-primary">
          {saving
            ? "Saving"
            : mode === "create"
              ? "Create Post"
              : "Save Changes"}
          <span className="adm-btn-primary-icon">
            {saving ? (
              <svg
                className="adm-spinner"
                width="13"
                height="13"
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
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </span>
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/blog")}
          className="adm-btn-secondary"
        >
          Cancel
        </button>
      </div>
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
      <label className="adm-label">{label}</label>
      {children}
      {hint && <p className="adm-hint">{hint}</p>}
    </div>
  );
}

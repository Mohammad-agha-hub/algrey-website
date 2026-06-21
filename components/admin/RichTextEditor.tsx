"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useRef } from "react";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({
  value,
  onChange,
}: RichTextEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Write your post…" }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    immediatelyRender: false,
  });

  if (!editor) return null;

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const handleImageClick = () => fileInputRef.current?.click();

  const handleImageSelected = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        editor.chain().focus().setImage({ src: data.url }).run();
      } else {
        alert(data.error || "Upload failed");
      }
    } catch {
      alert("Upload failed. Please try again.");
    } finally {
      e.target.value = "";
    }
  };

  const Btn = ({
    onClick,
    active,
    label,
  }: {
    onClick: () => void;
    active?: boolean;
    label: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`adm-editor-btn ${active ? "is-active" : ""}`}
    >
      {label}
    </button>
  );

  return (
    <div className="adm-editor">
      <div className="adm-editor-toolbar">
        <Btn
          label="B"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        />
        <Btn
          label="I"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
        <span className="adm-editor-divider" />
        <Btn
          label="H2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        />
        <Btn
          label="H3"
          active={editor.isActive("heading", { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        />
        <span className="adm-editor-divider" />
        <Btn
          label="• List"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />
        <Btn
          label="1. List"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
        <span className="adm-editor-divider" />
        <Btn
          label="Quote"
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        />
        <Btn label="Link" active={editor.isActive("link")} onClick={setLink} />
        <Btn label="Image" onClick={handleImageClick} />
        <span className="adm-editor-divider" />
        <Btn label="Undo" onClick={() => editor.chain().focus().undo().run()} />
        <Btn label="Redo" onClick={() => editor.chain().focus().redo().run()} />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageSelected}
        />
      </div>
      <EditorContent
        editor={editor}
        className="adm-editor-content prose prose-sm max-w-none px-4 py-3 min-h-[280px] [&_.ProseMirror]:min-h-[260px] [&_.ProseMirror]:outline-none"
      />
    </div>
  );
}

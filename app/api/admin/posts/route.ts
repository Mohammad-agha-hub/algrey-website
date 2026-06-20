import { NextRequest, NextResponse } from "next/server";
import { getPostsCollection, uniqueSlug, toStringArray, Post } from "@/lib/posts";

export async function GET() {
  const collection = await getPostsCollection();
  const posts = await collection.find().sort({ createdAt: -1 }).toArray();
  return NextResponse.json({ success: true, posts });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title } = body;

  if (!title || !String(title).trim()) {
    return NextResponse.json(
      { success: false, error: "Title is required" },
      { status: 400 },
    );
  }

  const slug = await uniqueSlug(body.slug || title);
  const now = new Date().toISOString();

  const doc: Post = {
    title,
    slug,
    excerpt: body.excerpt || "",
    content: body.content || "",
    coverImage: body.coverImage || "",
    category: body.category || "",
    tags: toStringArray(body.tags),
    metaTitle: body.metaTitle || "",
    metaDescription: body.metaDescription || "",
    metaKeywords: toStringArray(body.metaKeywords),
    status: body.status === "published" ? "published" : "draft",
    createdAt: now,
    updatedAt: now,
  };

  const collection = await getPostsCollection();
  const result = await collection.insertOne(doc);

  return NextResponse.json({
    success: true,
    post: { ...doc, _id: result.insertedId },
  });
}

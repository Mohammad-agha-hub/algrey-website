import { NextRequest, NextResponse } from "next/server";
import {
  getPostsCollection,
  uniqueSlug,
  isValidObjectId,
  toObjectId,
  toStringArray,
} from "@/lib/posts";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!isValidObjectId(id)) {
    return NextResponse.json(
      { success: false, error: "Invalid id" },
      { status: 400 },
    );
  }

  const collection = await getPostsCollection();
  const post = await collection.findOne({ _id: toObjectId(id) });

  if (!post) {
    return NextResponse.json(
      { success: false, error: "Not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ success: true, post });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!isValidObjectId(id)) {
    return NextResponse.json(
      { success: false, error: "Invalid id" },
      { status: 400 },
    );
  }

  const collection = await getPostsCollection();
  const existing = await collection.findOne({ _id: toObjectId(id) });

  if (!existing) {
    return NextResponse.json(
      { success: false, error: "Not found" },
      { status: 404 },
    );
  }

  const body = await req.json();

  let slug = existing.slug;
  if (body.slug || body.title) {
    slug = await uniqueSlug(body.slug || body.title, id);
  }

  const update = {
    title: body.title ?? existing.title,
    slug,
    excerpt: body.excerpt ?? existing.excerpt,
    content: body.content ?? existing.content,
    coverImage: body.coverImage ?? existing.coverImage,
    category: body.category ?? existing.category,
    tags: body.tags !== undefined ? toStringArray(body.tags) : existing.tags,
    metaTitle: body.metaTitle ?? existing.metaTitle,
    metaDescription: body.metaDescription ?? existing.metaDescription,
    metaKeywords:
      body.metaKeywords !== undefined
        ? toStringArray(body.metaKeywords)
        : existing.metaKeywords,
    status: body.status ?? existing.status,
    updatedAt: new Date().toISOString(),
  };

  await collection.updateOne({ _id: toObjectId(id) }, { $set: update });
  const post = await collection.findOne({ _id: toObjectId(id) });

  return NextResponse.json({ success: true, post });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!isValidObjectId(id)) {
    return NextResponse.json(
      { success: false, error: "Invalid id" },
      { status: 400 },
    );
  }

  const collection = await getPostsCollection();
  await collection.deleteOne({ _id: toObjectId(id) });

  return NextResponse.json({ success: true });
}

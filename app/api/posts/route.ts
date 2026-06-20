import { NextResponse } from "next/server";
import { getPostsCollection } from "@/lib/posts";

export async function GET() {
  const collection = await getPostsCollection();

  // Exclude the full HTML body on the list view — the listing page only
  // needs title/excerpt/meta, not the whole article.
  const posts = await collection
    .find({ status: "published" }, { projection: { content: 0 } })
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json({ success: true, posts });
}

import { NextRequest, NextResponse } from "next/server";
import { getPostsCollection } from "@/lib/posts";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const collection = await getPostsCollection();
  const post = await collection.findOne({ slug, status: "published" });

  if (!post) {
    return NextResponse.json(
      { success: false, error: "Not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ success: true, post });
}

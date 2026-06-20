import { Collection, ObjectId } from "mongodb";
import { getDb } from "./mongodb";

export interface Post {
  _id?: ObjectId;
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
  createdAt: string;
  updatedAt: string;
}

let indexesEnsured = false;

export async function getPostsCollection(): Promise<Collection<Post>> {
  const db = await getDb();
  const collection = db.collection<Post>("posts");

  if (!indexesEnsured) {
    await collection.createIndex({ slug: 1 }, { unique: true });
    await collection.createIndex({ status: 1, createdAt: -1 });
    indexesEnsured = true;
  }

  return collection;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Generates a slug from `base`, appending -1, -2, etc. until it's unique.
 *  Pass `excludeId` when updating a post so it doesn't collide with itself. */
export async function uniqueSlug(base: string, excludeId?: string): Promise<string> {
  const collection = await getPostsCollection();
  const baseSlug = slugify(base) || "post";
  let candidate = baseSlug;
  let suffix = 1;

  while (true) {
    const query: Record<string, unknown> = { slug: candidate };
    if (excludeId) query._id = { $ne: new ObjectId(excludeId) };
    const existing = await collection.findOne(query);
    if (!existing) return candidate;
    candidate = `${baseSlug}-${suffix++}`;
  }
}

export function isValidObjectId(id: string): boolean {
  return ObjectId.isValid(id);
}

export function toObjectId(id: string): ObjectId {
  return new ObjectId(id);
}

/** Splits a comma-separated string into a clean array, or passes an array through. */
export function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String).map((s) => s.trim()).filter(Boolean);
  if (typeof value === "string") {
    return value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

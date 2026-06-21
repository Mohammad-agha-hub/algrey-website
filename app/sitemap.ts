import { MetadataRoute } from "next";
import { getPostsCollection } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/enquiry-now",
    "/blog",
    "/brick-cleaning",
    "/cladding-cleaning",
    "/commercial-gutter",
    "/downpipe-cleaning",
    "/driveway-cleaning",
    "/graffiti-cleaning",
    "/gutter-cleaning",
    "/patio-cleaning",
    "/pressure-washing",
    "/render-cleaning",
    "/residential-gutter",
    "/roof-cleaning",
    "/window-cleaning",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/contact-us" || route === "/enquiry-now"
          ? 0.9
          : route === "/blog"
            ? 0.8
            : 0.8,
  }));

  // Only published posts belong in the sitemap — drafts shouldn't be
  // surfaced to search engines before they're live.
  const collection = await getPostsCollection();
  const posts = await collection
    .find({ status: "published" })
    .project({ slug: 1, updatedAt: 1 })
    .toArray();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}

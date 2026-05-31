import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const routes = [
    "",
    "/about-us",
    "/contact-us",
    "/enquiry-now",
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/contact-us" || route === "/enquiry-now"
          ? 0.9
          : 0.8,
  }));
}

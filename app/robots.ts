import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/favorites", "/search", "/names/favorites"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/favorites", "/search", "/names/favorites"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/favorites", "/search", "/names/favorites"],
      },
    ],
    sitemap: "https://unitoolkit.com/sitemap.xml",
    host: "https://unitoolkit.com",
  };
}

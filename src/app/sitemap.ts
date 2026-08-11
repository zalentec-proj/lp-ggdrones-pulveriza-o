import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.ggdronespulverizacao.com.br";

  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/curso-drone-agricola`, changeFrequency: "monthly", priority: 0.9 },
  ];
}

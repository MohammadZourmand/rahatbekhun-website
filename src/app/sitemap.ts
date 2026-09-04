import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const apiUrl = process.env.API_URL ?? "http://localhost:5000";
  const siteUrl = process.env.SITE_WEB_URL ?? "http://localhost:3000";

  let data: Array<{ _id?: string }> = [];

  try {
    const res = await fetch(
      `${apiUrl}/admin/worksheets/list?page=1&per_page=10`,
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch worksheets: ${res.status} ${res.statusText}`,
      );
    }

    const worksheetsData = await res.json();

    data = Array.isArray(worksheetsData?.data) ? worksheetsData.data : [];
  } catch (error) {
    console.error("Failed to fetch worksheets for sitemap:", error);
  }

  const worksheetsUrl: MetadataRoute.Sitemap = data
    .filter((item) => item?._id)
    .map((item) => ({
      url: `${siteUrl}/worksheets/${item._id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    }));

  return [
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/instructor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/search`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/sign-in`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/sign-up`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/worksheets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...worksheetsUrl,
  ];
}

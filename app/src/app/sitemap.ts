import client from "@/lib/sanity/config"
import { pagesQuery } from "@/lib/sanity/queries"
import type { MetadataRoute } from "next"

async function getPages() {
  const pages = await client.fetch({
    query: pagesQuery(),
  })

  return pages
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getPages()
  // @ts-ignore
  return pages.map((page) => {
    if (page.slug == "homepage") {
      return {
        url: process.env.FRONT_URL || "https://acme.com",
        lastModified: new Date(page.updatetAt),
        changeFrequency: "yearly",
        priority: 1,
      }
    } else
      return {
        url: `${process.env.FRONT_URL || "https://acme.com"}/${page.slug}`,
        lastModified: new Date(page.updatetAt),
        changeFrequency: "yearly",
        priority: 0.8,
      }
  })
}

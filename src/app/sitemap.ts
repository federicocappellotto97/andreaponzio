import client, { defaultSanityConfig } from '@/lib/sanity/config'
import { pagesQuery } from '@/lib/sanity/queries'
import type { MetadataRoute } from 'next'

async function getPages() {
  const pages = await client.fetch({
    query: pagesQuery(),
    config: defaultSanityConfig,
  })

  return pages
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getPages()
  // @ts-ignore
  return pages.map((page) => {
    if (page.slug == 'homepage') {
      return {
        url: process.env.FRONT_URL,
        lastModified: new Date(page.updatetAt),
        changeFrequency: 'yearly',
        priority: 1,
      }
    } else
      return {
        url: `${process.env.FRONT_URL}/${page.slug}`,
        lastModified: new Date(page.updatetAt),
        changeFrequency: 'yearly',
        priority: 0.8,
      }
  })
}

import PageTransition from "@/components/Atoms/PageTransition/PageTransition"
import { PageComponent } from "@/lib/core/component"
import client from "@/lib/sanity/config"
import {
  pageQuery,
  pagesQuery,
  seoQuery,
  settingsQuery,
} from "@/lib/sanity/queries"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug

  // fetch data
  const page = await client.fetch({
    query: seoQuery(Array.isArray(slug) ? slug[0] : slug),
    config: {
      next: { revalidate: 60 },
    },
  })
  // @ts-ignore
  if (!page?.["slug"]) return null

  // fetch data
  const layout = await client.fetch({
    query: settingsQuery(),
    config: {
      next: { revalidate: 60 },
    },
  })

  return {
    title: (page as any).title + (layout as any).afterTitle,
    description: (page as any).metaDescription,
  }
}

async function getPage(slug: string | string[]) {
  const page = await client.fetch({
    query: pageQuery(Array.isArray(slug) ? slug[0] : slug),
    config: {
      next: { revalidate: 60 },
    },
  })

  // @ts-ignore
  if (!page?.["slug"]) notFound()

  return page
}

export async function generateStaticParams() {
  const pages = await client.fetch({
    query: pagesQuery(false),
    config: {
      next: { revalidate: 60 },
    },
  })

  return (pages as any).map(({ slug }: any) => slug)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPage(params.slug)

  return <div className="text-[red]">{JSON.stringify(data, null, 2)}</div>
}

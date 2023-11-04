import { PageComponent } from '@/lib/core/component'
import client from '@/lib/sanity/config'
import { pageQuery, pagesQuery, seoQuery, settingsQuery } from '@/lib/sanity/queries'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug

  const seo = await client.fetch<{ title: string; metaTitle?: string; metaDescription: string }>(
    seoQuery(Array.isArray(slug) ? slug[0] : slug)
  )

  const layout = await client.fetch<{ afterTitle: string }>(settingsQuery())

  return {
    title: seo?.metaTitle ?? seo.title + layout.afterTitle,
    description: seo.metaDescription,
  }
}

async function getPage(slug: string | string[]) {
  const page = await client.fetch(pageQuery(slug ? (Array.isArray(slug) ? slug[0] : slug) : 'homepage'))

  // @ts-ignore
  if (!page?.['slug']) notFound()

  return page
}

export async function generateStaticParams() {
  const pages = await client.fetch(pagesQuery(false))

  return (pages as any).map(({ slug }: any) => slug)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPage(params.slug)

  return (
    // @ts-ignore
    data?.['components'] &&
    // @ts-ignore
    data?.['components']?.map(({ name, ...rest }: any, index: number) => (
      <PageComponent componentName={name} {...rest} key={`${name}-${index}`} />
    ))
  )
}

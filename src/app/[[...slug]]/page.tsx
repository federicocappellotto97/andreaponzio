import { PageComponent } from '@/lib/core/component'
import client, { defaultSanityConfig } from '@/lib/sanity/config'
import { pageQuery, pagesQuery, seoQuery, settingsQuery } from '@/lib/sanity/queries'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { defaultMetadata as notFoundMetadata } from './not-found'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug

  const seo = await client.fetch<{ title: string; metaTitle?: string; metaDescription: string }>({
    query: seoQuery(Array.isArray(slug) ? slug[0] : slug),
    config: defaultSanityConfig,
  })

  const layout = await client.fetch<{ afterTitle: string }>({
    query: settingsQuery(),
    config: defaultSanityConfig,
  })

  const og = {
    url: 'andreaponzio.com',
    siteName: 'Andrea Ponzio',
    images: {
      url: '/og.jpg',
      width: 1200,
      height: 630,
    },
    locale: 'it-IT',
    type: 'website',
  }

  if (!seo)
    return {
      ...notFoundMetadata,
      title: notFoundMetadata.title + layout.afterTitle,
      ...og,
    }

  return {
    title: seo?.metaTitle ?? (seo?.title ?? '') + layout.afterTitle,
    description: seo?.metaDescription,
    openGraph: {
      title: seo?.metaTitle ?? (seo?.title ?? '') + layout.afterTitle,
      description: seo?.metaDescription,
      ...og,
    },
  }
}

async function getPage(slug: string | string[]) {
  const page = await client.fetch({
    query: pageQuery(slug ? (Array.isArray(slug) ? slug[0] : slug) : 'homepage'),
    config: defaultSanityConfig,
  })

  // @ts-ignore
  if (!page?.['slug']) notFound()

  return page
}

export async function generateStaticParams() {
  const pages = await client.fetch({
    query: pagesQuery(false),
    config: defaultSanityConfig,
  })

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

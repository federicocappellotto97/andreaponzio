import SanityClient from 'next-sanity-client'

const client = new SanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
})

export const defaultSanityConfig = {
  next: { revalidate: 60 * 24 * 7 },
} as any

export default client

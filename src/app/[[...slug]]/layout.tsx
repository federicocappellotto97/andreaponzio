import Header from "@/components/Organisms/Header/Header"
import type { Metadata } from "next"

import Footer from "@/components/Organisms/Footer/Footer"
import Context from "@/lib/core/context"
import Lenis from "@/lib/core/lenis"
import client from "@/lib/sanity/config"
import { seoQuery, settingsQuery } from "@/lib/sanity/queries"

export async function generateMetadata({}: {}): Promise<Metadata> {
  // fetch data
  const layout = await client.fetch(settingsQuery(), {
    next: { revalidate: 60 },
  })
  const page = await client.fetch(seoQuery("homepage"), {
    next: { revalidate: 60 },
  })

  return {
    title: (layout as any).title,
    description: (page as any).description,
  }
}

async function getLayout() {
  const layout = await client.fetch(settingsQuery(), {
    next: { revalidate: 60 },
  })

  return layout
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const layout = await getLayout()
  return (
    <Context layout={layout}>
      <Lenis>
        <Header />
        <main className="py-30 flex-1 flex flex-col">{children}</main>
        <Footer />
      </Lenis>
    </Context>
  )
}

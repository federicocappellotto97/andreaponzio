import Header from "@/components/Organisms/Header/Header"
import { cx } from "class-variance-authority"
import type { Metadata } from "next"
import "./globals.css"

import PageTransition from "@/components/Atoms/PageTransition/PageTransition"
import Footer from "@/components/Organisms/Footer/Footer"
import Context from "@/lib/core/context"
import client from "@/lib/sanity/config"
import { seoQuery, settingsQuery } from "@/lib/sanity/queries"
import localFont from "next/font/local"

// Font files can be colocated inside of `pages`
const futura = localFont({
  src: [
    {
      path: "../fonts/Futura/Futura Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Futura/Futura Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
})

export async function generateMetadata({}: {}): Promise<Metadata> {
  // fetch data
  const layout = await client.fetch({
    query: settingsQuery(),
    config: {
      next: { revalidate: 60 },
    },
  })
  const page = await client.fetch({
    query: seoQuery("homepage"),
    config: {
      next: { revalidate: 60 },
    },
  })

  return {
    title: (layout as any).title,
    description: (page as any).description,
  }
}

async function getLayout() {
  const layout = await client.fetch({
    query: settingsQuery(),
    config: {
      next: { revalidate: 60 },
    },
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
    <html lang="en">
      <body className={cx(futura.className, "bg-secondary flex flex-col")}>
        <PageTransition>
          <Context layout={layout}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Context>
        </PageTransition>
      </body>
    </html>
  )
}

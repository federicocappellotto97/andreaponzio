import NextTopLoader from "nextjs-toploader"
import Header from "@/components/Organisms/Header/Header"
import { cx } from "class-variance-authority"
import type { Metadata } from "next"
import "./globals.css"

import PageTransition from "@/components/Atoms/PageTransition/PageTransition"
import Footer from "@/components/Organisms/Footer/Footer"
import Context from "@/lib/core/context"
import Lenis from "@/lib/core/lenis"
import client from "@/lib/sanity/config"
import { seoQuery, settingsQuery } from "@/lib/sanity/queries"
import localFont from "next/font/local"
import { DarkMode } from "@/lib/core/DarkMode"

// Font files can be colocated inside of `pages`
const berthold = localFont({
  src: [
    {
      path: "../fonts/Berthold Akzidenz Grotesk/Berthold Akzidenz Grotesk BE Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Berthold Akzidenz Grotesk/Berthold Akzidenz Grotesk BE Medium.otf",
      weight: "500",
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
    <html lang="it">
      <body
        className={cx(
          berthold.className,
          "bg-white dark:bg-black flex flex-col transition-colors duration-300 ease-out min-h-screen"
        )}
      >
        <NextTopLoader color="black" />
        <DarkMode />
        <Context layout={layout}>
          <Lenis>
            <Header />
            <PageTransition>
              <main className="py-30 flex-1 flex flex-col">{children}</main>
            </PageTransition>
            <Footer />
          </Lenis>
        </Context>
      </body>
    </html>
  )
}

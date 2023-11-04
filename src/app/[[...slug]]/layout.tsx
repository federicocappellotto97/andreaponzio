import Header from '@/components/Organisms/Header/Header'

import Footer from '@/components/Organisms/Footer/Footer'
import Context from '@/lib/core/context'
import Lenis from '@/lib/core/lenis'
import client from '@/lib/sanity/config'
import { settingsQuery } from '@/lib/sanity/queries'

export const revalidate = 60

async function getLayout() {
  const layout = await client.fetch(settingsQuery())

  return layout
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
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

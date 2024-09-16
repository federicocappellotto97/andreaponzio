import { cx } from 'class-variance-authority'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

import PageTransition from '@/components/Atoms/PageTransition/PageTransition'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'

// Font files can be colocated inside of `pages`
const suisse = localFont({
  src: [
    {
      path: '../fonts/suisse/suisse-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/suisse/suisse-regular-italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/suisse/suisse-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/suisse/suisse-bold-italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default async function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body
        className={cx(
          suisse.className,
          'bg-white dark:bg-black antialiased flex flex-col transition-colors duration-300 ease-out min-h-screen'
        )}
      >
        <Analytics />
        <PageTransition>
          <NextTopLoader color="black" />
          {children}
        </PageTransition>
      </body>
    </html>
  )
}

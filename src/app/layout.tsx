import { cx } from 'class-variance-authority'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

import PageTransition from '@/components/Atoms/PageTransition/PageTransition'
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const berthold = localFont({
  src: [
    {
      path: '../fonts/Berthold Akzidenz Grotesk/Berthold Akzidenz Grotesk BE Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Berthold Akzidenz Grotesk/Berthold Akzidenz Grotesk BE Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
})

export default async function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body
        className={cx(
          berthold.className,
          'bg-white dark:bg-black antialiased flex flex-col transition-colors duration-300 ease-out min-h-screen'
        )}
      >
        <PageTransition>
          <NextTopLoader color="black" />
          {children}
        </PageTransition>
      </body>
    </html>
  )
}

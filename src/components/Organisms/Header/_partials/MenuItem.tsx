'use client'
import { cx } from 'class-variance-authority'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItem = ({ url, label }: { url: string; label: string }) => {
  const pathname = usePathname()
  return (
    <NextLink
      href={url}
      className={cx(
        'inline-block text-lg font-medium relative z-10 transition-colors duration-300 ease-out hover:text-[var(--current-color)] dark:hover:text-[var(--current-color)]',
        pathname == url ? 'pointer-events-none text-[var(--current-color)]' : 'text-black dark:text-white'
      )}
    >
      {label}
    </NextLink>
  )
}

export default MenuItem

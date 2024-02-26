'use client'
import { Link } from '@/lib/core/Link'
import { cx } from 'class-variance-authority'
import { usePathname } from 'next/navigation'

const MenuItem = ({ url, label }: { url: string; label: string }) => {
  const pathname = usePathname()
  return (
    <Link
      href={url}
      className={cx(
        'inline-block text-xl lg:text-lg font-bold relative z-10 transition-colors duration-300 ease-out hover:text-[var(--current-color)] dark:hover:text-[var(--current-color)]',
        pathname == url
          ? 'pointer-events-none text-[var(--current-color)]'
          : 'text-white lg:text-black lg:dark:text-white'
      )}
    >
      {label}
    </Link>
  )
}

export default MenuItem

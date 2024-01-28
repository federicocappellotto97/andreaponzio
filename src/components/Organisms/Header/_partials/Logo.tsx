'use client'
import LogoIcon from '@/components/Atoms/Logo/Logo'
import { SettingsContext } from '@/lib/core/context'
import useLayoutStore from '@/lib/core/layoutStore'
import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'

const Logo = ({ className }: { className?: string }) => {
  const { title } = useContext(SettingsContext)
  const pathname = usePathname()
  const isMenuOpen = useLayoutStore((state) => state.isMenuOpen)

  return (
    <Link className={cx(className, 'z-40')} href="/" aria-label={title} title={title}>
      <LogoIcon
        className={cx(
          'h-30 lg:h-50',
          isMenuOpen ? 'fill-white' : pathname == '/' ? 'fill-black dark:fill-white' : 'fill-[var(--current-color)]'
        )}
      />
    </Link>
  )
}

export default Logo

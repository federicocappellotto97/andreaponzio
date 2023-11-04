'use client'
import LogoIcon from '@/components/Atoms/Logo/Logo'
import { SettingsContext } from '@/lib/core/context'
import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'

const Logo = () => {
  const { title } = useContext(SettingsContext)
  const pathname = usePathname()

  return (
    <Link href="/" aria-label={title} title={title}>
      <LogoIcon
        className={cx('h-50', pathname == '/' ? 'fill-black dark:fill-white' : 'fill-[var(--current-color)]')}
      />
    </Link>
  )
}

export default Logo

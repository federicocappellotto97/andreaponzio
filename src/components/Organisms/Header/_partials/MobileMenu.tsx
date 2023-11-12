'use client'
import useLayoutStore from '@/lib/core/layoutStore'
import { Link } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'
import MenuItem from './MenuItem'

import { cx } from 'class-variance-authority'
import Footer from '../../Footer/_partials/SecondColumn'
import Hamburger from './Hamburger'
import DarkModeToggle from '@/components/Atoms/DarkModeToggle/DarkModeToggle'

const Menu = ({ items }: { items: { link: Link }[] }) => {
  const isMenuOpen = useLayoutStore((state) => state.isMenuOpen)

  return (
    <div
      className={cx(
        'ml-auto lg:hidden flex items-center gap-12 z-30',
        isMenuOpen ? 'text-white' : 'text-black dark:text-white'
      )}
    >
      <DarkModeToggle className={cx('z-40', isMenuOpen ? 'text-white' : 'text-black dark:text-white')} currentColor />
      <Hamburger />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed flex flex-col bg-black px-30 pt-108 pb-30 lg:hidden inset-0 z-30"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {items && (
              <ul className="flex-col flex gap-5">
                {items.map(
                  ({ link }: { link: Link }, index: number) =>
                    link && (
                      <li key={index} className="relative overflow-hidden">
                        <MenuItem url={link.url} label={link.label} />
                      </li>
                    )
                )}
              </ul>
            )}
            <Footer isHeader />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Menu

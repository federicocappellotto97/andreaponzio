import useLayoutStore from '@/lib/core/layoutStore'
import { cx } from 'class-variance-authority'
const Hamburger = () => {
  const toggleMenuOpen = useLayoutStore((state) => state.toggleMenuOpen)
  const isMenuOpen = useLayoutStore((state) => state.isMenuOpen)
  return (
    <button
      aria-label={isMenuOpen ? 'Chiudi' : 'Apri'}
      className={
        'flex flex-col transition-colors z-40 duration-300 relative space-y-2 before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-30 before:aspect-square'
      }
      onClick={toggleMenuOpen}
    >
      <span
        className={cx(
          'w-20 h-3 bg-current transition-transform duration-300',
          isMenuOpen ? 'rotate-45 translate-y-[2.5px]' : ''
        )}
      />
      <span
        className={cx(
          'w-20 h-3 bg-current transition-transform duration-300',
          isMenuOpen ? '-rotate-45 translate-y-[-2.5px]' : ''
        )}
      />
    </button>
  )
}

export default Hamburger

import { Link } from '@/lib/types'
import MenuItem from './MenuItem'

const Menu = ({ items }: { items: { link: Link }[] }) => {
  return (
    items && (
      <ul className="hidden lg:flex items-center gap-16 lg:ml-auto">
        {items.map(
          ({ link }: { link: Link }, index: number) =>
            link && (
              <li key={index} className="relative overflow-hidden">
                <MenuItem url={link.url} label={link.label} />
              </li>
            )
        )}
      </ul>
    )
  )
}

export default Menu

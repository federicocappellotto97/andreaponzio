import Logo from './_partials/Logo'
import DesktopMenu from './_partials/DesktopMenu'
import MobileMenu from './_partials/MobileMenu'
import client, { defaultSanityConfig } from '@/lib/sanity/config'
import { menuQuery } from '@/lib/sanity/queries'

async function getMenu(key: string) {
  const menu = await client.fetch({
    query: menuQuery(key),
    config: defaultSanityConfig,
  })

  return menu
}
const Header = async () => {
  const data: any = await getMenu('primary')
  return (
    <header className="pt-18 pb-30 px-30 lg:pt-30 flex items-center z-40">
      <Logo />
      <DesktopMenu items={data?.items} />
      <MobileMenu items={data?.items} />
    </header>
  )
}

export default Header

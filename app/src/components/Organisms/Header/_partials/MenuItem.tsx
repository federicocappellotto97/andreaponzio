import { cx } from "class-variance-authority"
import NextLink from "next/link"
import { usePathname } from "next/navigation"

const MenuItem = ({ url, label }: { url: string; label: string }) => {
  const pathname = usePathname()
  return (
    <>
      <NextLink
        href={url}
        className={cx(
          "peer inline-block text-lg font-medium",
          pathname == url && "text-blue-500 pointer-events-none"
        )}
      >
        {label}
      </NextLink>
      <span className="absolute pointer-events-none left-0 inline-block top-0 w-full h-full bg-blue-500 mix-blend-screen -translate-x-full peer-hover:translate-x-0 transition-transform duration-300 ease-out" />
    </>
  )
}

export default MenuItem

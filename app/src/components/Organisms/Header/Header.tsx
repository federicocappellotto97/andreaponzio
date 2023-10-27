"use client"
import Logo from "@/components/Atoms/Logo/Logo"
import Menu from "./_partials/Menu"
import Link from "next/link"
import { useContext } from "react"
import { SettingsContext } from "@/lib/core/context"

const Header = () => {
  const { title } = useContext(SettingsContext)
  return (
    <header className="p-30 flex items-center">
      <Link href="/" aria-label={title} title={title}>
        <Logo className="h-50 fill-black dark:fill-white" />
      </Link>
      <Menu />
    </header>
  )
}

export default Header

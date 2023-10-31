"use client"
import LogoIcon from "@/components/Atoms/Logo/Logo"
import { SettingsContext } from "@/lib/core/context"
import Link from "next/link"
import { useContext } from "react"

const Logo = () => {
  const { title } = useContext(SettingsContext)
  return (
    <Link href="/" aria-label={title} title={title}>
      <LogoIcon className="h-50 fill-black dark:fill-white" />
    </Link>
  )
}

export default Logo

"use client"
import DarkModeToggle from "@/components/Atoms/DarkModeToggle/DarkModeToggle"
import { SettingsContext } from "@/lib/core/context"
import { useContext } from "react"

const Footer = () => {
  const { footerText, email } = useContext(SettingsContext)

  return (
    <footer className="flex items-center p-30">
      <div className="flex-1">
        <a
          href={`mailto:${email}`}
          className="hover:text-blue-500 dark:text-white transition-colors duration-300 ease-out"
        >
          {email}
        </a>
      </div>
      {footerText && (
        <p className="text-black dark:text-white">
          {footerText.replace("%year%", new Date().getFullYear().toString())}
        </p>
      )}
      <div className="flex-1 flex justify-end">
        <DarkModeToggle />
      </div>
    </footer>
  )
}

export default Footer

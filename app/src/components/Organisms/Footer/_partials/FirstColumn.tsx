"use client"
import { SettingsContext } from "@/lib/core/context"
import { useContext } from "react"

const FirstColumn = () => {
  const { email } = useContext(SettingsContext)

  return (
    <a
      href={`mailto:${email}`}
      className="hover:text-blue-500 dark:hover:text-blue-500 dark:text-white transition-colors duration-300 ease-out"
    >
      {email}
    </a>
  )
}

export default FirstColumn

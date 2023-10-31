"use client"
import { SettingsContext } from "@/lib/core/context"
import { useContext } from "react"

const SecondColumn = () => {
  const { footerText } = useContext(SettingsContext)

  return (
    footerText && (
      <p className="text-black text-center dark:text-white">
        {footerText.replace("%year%", new Date().getFullYear().toString())}
      </p>
    )
  )
}

export default SecondColumn

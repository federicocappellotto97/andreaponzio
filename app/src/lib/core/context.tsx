"use client"
import { createContext, useEffect, useState } from "react"
import { blue } from "../../../tailwind.config"
import { usePathname } from "next/navigation"

export const SettingsContext = createContext<{
  email?: string
  title?: string
  footerText?: any
}>({})

export default function Context({
  layout,
  children,
}: {
  layout: any
  children: React.ReactNode
}) {
  const [color, setColor] = useState(Object.values(blue)[0])
  const pathname = usePathname()
  useEffect(() => {
    setColor(
      Object.values(blue)[
        Math.floor(Math.random() * Object.values(blue).length)
      ]
    )
  }, [pathname])
  return (
    <SettingsContext.Provider value={layout}>
      <div
        className="contents"
        style={{ "--current-color": color } as React.CSSProperties}
      >
        {children}
      </div>
    </SettingsContext.Provider>
  )
}

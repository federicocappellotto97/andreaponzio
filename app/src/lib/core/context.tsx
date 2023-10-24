"use client"
import { createContext } from "react"

export const SettingsContext = createContext<{ email?: string }>({})
export default function Context({
  layout,
  children,
}: {
  layout: any
  children: React.ReactNode
}) {
  return (
    <SettingsContext.Provider value={layout}>
      {children}
    </SettingsContext.Provider>
  )
}

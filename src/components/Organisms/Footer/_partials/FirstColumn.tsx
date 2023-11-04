'use client'
import { SettingsContext } from '@/lib/core/context'
import { useContext } from 'react'

const FirstColumn = () => {
  const { email } = useContext(SettingsContext)

  return (
    <a
      href={`mailto:${email}`}
      className="hover:text-[var(--current-color)] dark:hover:text-[var(--current-color)] dark:text-white transition-colors duration-300 ease-out"
    >
      {email}
    </a>
  )
}

export default FirstColumn

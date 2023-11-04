'use client'
import { SettingsContext } from '@/lib/core/context'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { useContext } from 'react'

const SecondColumn = () => {
  const { footerText } = useContext(SettingsContext)

  return (
    footerText && (
      <div className="text-black text-center dark:text-white prose max-w-none dark:prose-strong:text-white dark:prose-a:text-white hover:prose-a:text-[var(--current-color)] prose-a:transition-colors prose-a:duration-300 prose-a:ease-out prose-a:font-normal prose-a:no-underline">
        <PortableText
          value={footerText}
          components={{
            block: ({ children }) => {
              return (
                children && (
                  <p>
                    {
                      // @ts-ignore
                      children.map((c) =>
                        typeof c === 'string' ? c.replace('%year%', new Date().getFullYear().toString()) : c
                      )
                    }
                  </p>
                )
              )
            },
            marks: {
              link: ({ children, value }) => {
                return (
                  <Link href={value?.href ? value?.href : '#'} target={value?.blank ? '_blank' : ''}>
                    {children}
                  </Link>
                )
              },
            },
          }}
        />
      </div>
    )
  )
}

export default SecondColumn

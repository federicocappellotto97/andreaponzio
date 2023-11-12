'use client'
import { SettingsContext } from '@/lib/core/context'
import { PortableText } from '@portabletext/react'
import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { useContext } from 'react'

const SecondColumn = ({ isHeader = false }: { isHeader?: boolean }) => {
  const { footerText } = useContext(SettingsContext)

  return (
    footerText && (
      <div
        className={cx(
          'text-center prose max-w-none hover:prose-a:text-[var(--current-color)] prose-a:transition-colors prose-a:duration-300 prose-a:ease-out prose-a:font-normal prose-a:no-underline',
          isHeader
            ? 'mt-auto text-white dark:text-black prose-a:text-current prose-strong:text-current dark:prose-strong:text-current dark:prose-a:text-current'
            : 'text-black prose-a:text-current prose-strong:text-current dark:text-white dark:prose-strong:text-current dark:prose-a:text-current'
        )}
      >
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
